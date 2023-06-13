package keeper

import (
	"bytes"
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net"
	"net/http"
	"os/exec"
	"regexp"
	"strconv"
	"strings"
	"time"

	bankkeeper "github.com/cosmos/cosmos-sdk/x/bank/keeper"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"

	prefix "github.com/cosmos/cosmos-sdk/store/prefix"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/gorilla/mux"
	"github.com/gorilla/rpc"
	rpcjson "github.com/gorilla/rpc/json"
	"github.com/org/dyson/x/dyson/types"

	nftmodule "github.com/cosmos/cosmos-sdk/x/nft"
)

type RpcService struct {
	k             *Keeper
	m             *msgServer
	ctx           context.Context
	ScriptAddress sdk.Address
}

type EvalScriptContext struct {
	Sender       string
	Coins        string
	Nfts         string
	Index        string
	FunctionName string
	Args         string
	Kwargs       string
	Code         string
	ExtraLines   string
}

type EvalScriptResponse struct {
	Response string
}

type NFT struct {
	ClassId string `json:"class_id,omitempty"`
	Id      string `json:"id,omitempty"`
}

// parseNFTs takes a string with comma-separated NFT class_id/id pairs
// and returns a slice of NFT structs. It returns an error immediately
// if an invalid entry is encountered.
func parseNFTs(s string) ([]NFT, error) {
	nftStrings := strings.Split(s, ",")
	nfts := make([]NFT, 0, len(nftStrings))

	// Regular expression to validate the class_id/id format
	re := regexp.MustCompile(`^[a-zA-Z0-9-.]+/[a-zA-Z0-9-]+$`)

	for _, nftString := range nftStrings {
		trimmedNFTString := strings.TrimSpace(nftString)

		// Ignore empty entries
		if len(trimmedNFTString) == 0 {
			continue
		}

		// Validate the input format before parsing
		if !re.MatchString(trimmedNFTString) {
			return nil, fmt.Errorf("invalid NFT string: %s", nftString)
		}

		parts := strings.Split(trimmedNFTString, "/")

		nft := NFT{
			ClassId: parts[0],
			Id:      parts[1],
		}

		nfts = append(nfts, nft)
	}

	return nfts, nil
}

// SetScript set a specific script in the store from its index
func (k Keeper) SetScript(ctx sdk.Context, script types.Script) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ScriptKeyPrefix))
	b := k.cdc.MustMarshal(&script)
	store.Set(types.ScriptKey(
		script.Index,
	), b)
}

// GetScript returns a script from its index
func (k Keeper) GetScript(ctx sdk.Context, index string) (val types.Script, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ScriptKeyPrefix))

	destination := k.nameskeeper.ResolveIndex(ctx, index)
	if destination == "" {
		return val, false
	}
	b := store.Get(types.ScriptKey(destination))
	if b == nil {
		val = types.Script{
			Creator: destination,
			Index:   destination,
			Code:    "",
		}
		k.SetScript(ctx, val)
		return val, true
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveScript removes a script from the store
func (k Keeper) RemoveScript(
	ctx sdk.Context,
	index string,
) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ScriptKeyPrefix))
	store.Delete(types.ScriptKey(
		k.nameskeeper.ResolveIndex(ctx, index),
	))
}

// GetAllScript returns all script
func (k Keeper) GetAllScript(ctx sdk.Context) (list []types.Script) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.ScriptKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Script
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}
	//
	return
}

func (k Keeper) GetSchema(ctx sdk.Context, index string) (val string, found bool) {
	script, found := k.GetScript(ctx, index)
	if !found {
		return "", false
	}
	cmd := exec.Command(
		"python3",
		"schema.py",
	)
	cmd.Stdin = strings.NewReader(script.Code)
	out, runErr := cmd.CombinedOutput()
	if runErr != nil {
		fmt.Printf("GetSchema Output: %s\n", out)
		log.Fatal(runErr)
	}

	temp := strings.Split(strings.TrimSpace(string(out)), "\n")
	response := string(temp[len(temp)-1])
	return response, true
}

func (k Keeper) RunWsgi(goCtx context.Context, index string, httpreq string) (val string, found bool) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	valFound, found := k.GetScript(ctx, index)
	if !found {
		return "", false
	}
	port, srv, err := k.NewRPCServer(goCtx, valFound.Index)
	if err != nil {
		fmt.Printf("NewRPCServer error: %s\n", err)
		return "", false
	}

	blockInfoJson, err := json.Marshal(ctx.BlockHeader())
	if err != nil {
		log.Fatal(err)
	}

	cmd := exec.Command(
		"python3",
		"simplewsgi.py",
		port,
		valFound.Index,
		string(blockInfoJson),
		valFound.Code,
		httpreq,
	)

	cmd.Stdin = strings.NewReader(httpreq)
	var stdout, stderr bytes.Buffer
	cmd.Stdout = &stdout
	cmd.Stderr = &stderr
	cmdErr := cmd.Run()

	if err := srv.Shutdown(context.Background()); err != nil {
		fmt.Printf("shutdown error")
		log.Fatal(err)
	}
	outStr, errStr := string(stdout.Bytes()), string(stderr.Bytes())

	fmt.Println("server stopped")
	fmt.Printf("err: %s\n", outStr)
	fmt.Printf("out: %s\n", errStr)
	if cmdErr != nil {
		return fmt.Sprintf("HTTP/1.1 500\ncontent-type: text/plain\n\n%+v\nout: %s\nerr:%s", cmdErr, outStr, errStr), true
		// log.Fatal(cmdErr)
	}

	return string(outStr[:]), true
}

type ResultException struct {
	Msg    string `json:"msg"`
	Lineno int    `json:"lineno"`
	Col    int    `json:"col"`
}
type EvalResult struct {
	NodesCalled uint64          `json:"nodes_called"`
	CumSize     uint64          `json:"cumsize"`
	Exception   ResultException `json:"exception"`
}

func (k Keeper) NewRPCServer(goCtx context.Context, index string) (string, *http.Server, error) {
	s := rpc.NewServer()
	s.RegisterCodec(rpcjson.NewCodec(), "application/json")
	s.RegisterCodec(rpcjson.NewCodec(), "application/json;charset=UTF-8")
	rpcservice := new(RpcService)
	rpcservice.k = &k
	rpcservice.m = &msgServer{Keeper: k}
	rpcservice.ctx = goCtx
	add, err := sdk.AccAddressFromBech32(k.nameskeeper.ResolveIndex(sdk.UnwrapSDKContext(goCtx), index))
	if err != nil {
		return "", nil, sdkerrors.Wrap(sdkerrors.ErrUnknownAddress, fmt.Sprintf("Could not resolve: %+v", index))
	}
	rpcservice.ScriptAddress = add

	s.RegisterService(rpcservice, "")
	r := mux.NewRouter()
	r.Handle("/rpc", s)
	srv := &http.Server{Handler: r}

	listener, err := net.Listen("tcp", "localhost:0")
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Using port:", listener.Addr().(*net.TCPAddr).Port)

	go func() {
		fmt.Println("start ListenAndServe")
		srv.Serve(listener)
		fmt.Println("end ListenAndServe")
	}()
	fmt.Println("running dysvm")
	port := strconv.Itoa(listener.Addr().(*net.TCPAddr).Port)
	return port, srv, nil
}

func (k Keeper) EvalScript(goCtx context.Context, scriptCtx *EvalScriptContext, raiseRunErr bool) (resp *EvalScriptResponse, err error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	cachedCtx, Write := ctx.CacheContext()
	defer func() {
		if r := recover(); r != nil {
			err = handleRunRecovery(r, ctx)
		}

		if err == nil {
			Write()
		} else {
			if raiseRunErr == true {
				resp = nil
			} else {
				resp = &EvalScriptResponse{Response: string(err.Error())}
				err = nil
			}
		}

		k.Logger(ctx).Info(fmt.Sprintf("last defer, resp: %+v  err: %+v", resp, err))
	}()

	resp, err = k.evalScript(sdk.WrapSDKContext(cachedCtx), scriptCtx, raiseRunErr)
	ctx.GasMeter().ConsumeGas(cachedCtx.GasMeter().GasConsumed(), "EvalScript gas")
	return
}

func (k Keeper) evalScript(goCtx context.Context, scriptCtx *EvalScriptContext, raiseRunErr bool) (*EvalScriptResponse, error) {
	k.currentDepth += 1

	if k.currentDepth > 3 {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Maximum Run recusion depth")
	}
	ctx := sdk.UnwrapSDKContext(goCtx)

	resolvedIndex := k.nameskeeper.ResolveIndex(ctx, scriptCtx.Index)
	if resolvedIndex == "" {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("Script at address %v not set or expired", scriptCtx.Index))
	}

	valFound, isFound := k.GetScript(ctx, resolvedIndex)

	if !isFound {
		if scriptCtx.Index == scriptCtx.Sender {
			k.SetScript(ctx, types.Script{
				Index:   scriptCtx.Sender,
				Creator: scriptCtx.Sender,
				Code:    "",
			})
			valFound, isFound = k.GetScript(ctx, resolvedIndex)
			if !isFound {
				// This shouldn't happen
				fmt.Println(fmt.Sprintf("Script at address really %v not set", resolvedIndex))
				return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, fmt.Sprintf("Script at address really %v not set", resolvedIndex))
			}
		}
	}
	if scriptCtx.Sender != valFound.Index {
		if scriptCtx.ExtraLines != "" {
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, fmt.Sprintf("ExtraLines forbidden: Script.Index %v != Sender %v", valFound.Index, scriptCtx.Sender))
		}
	}
	port, srv, err := k.NewRPCServer(goCtx, valFound.Index)
	if err != nil {
		return nil, err
	}
	now := time.Now()
	defer func() {
		fmt.Println(fmt.Sprintf("Elapsed time %s", time.Since(now)))
		k.currentDepth -= 1
	}()

	coins, err := sdk.ParseCoinsNormalized(scriptCtx.Coins)
	if err != nil {
		return nil, err
	}

	coinsJson, err := coins.MarshalJSON()
	if err != nil {
		return nil, err
	}
	if len(coins) > 0 {
		toAddr, err := sdk.AccAddressFromBech32(valFound.Index)
		if err != nil {
			return nil, err
		}
		fromAddr, err := sdk.AccAddressFromBech32(scriptCtx.Sender)
		if err != nil {
			return nil, err
		}

		sendmsg := banktypes.NewMsgSend(fromAddr, toAddr, coins)
		err = sendmsg.ValidateBasic()
		if err != nil {
			return nil, err
		}

		_, err = bankkeeper.NewMsgServerImpl(k.bankkeeper).Send(goCtx, sendmsg)

		if err != nil {
			return nil, err
		}
	}
	nfts, err := parseNFTs(scriptCtx.Nfts)
	if err != nil {
		return nil, err
	}

	for _, nft := range nfts {

		msgSend := &nftmodule.MsgSend{
			Sender:   scriptCtx.Sender,
			Receiver: valFound.Index,
			ClassId:  nft.ClassId,
			Id:       nft.Id,
		}
		err = msgSend.ValidateBasic()
		if err != nil {
			return nil, err
		}

		_, err = k.cosmosnftv1beta1keeper.Send(goCtx, msgSend)
		if err != nil {
			return nil, err
		}
	}

	nftsJson, err := json.Marshal(nfts)
	if err != nil {
		return nil, err
	}
	blockInfoJson, err := json.Marshal(ctx.BlockHeader())
	if err != nil {
		return nil, err
	}

	out, runErr := exec.Command(
		"python3",
		"dysvm_server.py",
		port,
		scriptCtx.Sender,
		valFound.Index,
		string(coinsJson),
		string(nftsJson),
		string(blockInfoJson),
		scriptCtx.FunctionName,
		scriptCtx.Args,
		scriptCtx.Kwargs,
		scriptCtx.ExtraLines,
		valFound.Code,
	).CombinedOutput()

	temp := strings.Split(string(out), "\n")
	response := string(temp[len(temp)-1])

	fmt.Println("worker finished")
	fmt.Printf("Output: %s\n", out)
	fmt.Printf("Response: %s\n", response)
	evalResult := EvalResult{}
	err1 := json.Unmarshal([]byte(response), &evalResult)
	if err1 != nil {
		fmt.Println(err1.Error())
	}
	// ctx.GasMeter().ConsumeGas(evalResult.NodesCalled, "nodes_called")
	fmt.Printf("ctx.GasMeter().GasConsumed(): %v\n", ctx.GasMeter().GasConsumed())
	fmt.Printf("cumsize: %v\n", evalResult.CumSize)
	fmt.Printf("nodes called: %v\n", evalResult.NodesCalled)
	fmt.Printf("currentDepth: %v\n", k.currentDepth)
	if err := srv.Shutdown(context.Background()); err != nil {
		fmt.Printf("shutdown error")
		log.Fatal(err)
	}
	fmt.Println("server stopped")

	ctx.EventManager().EmitEvent(
		sdk.NewEvent("run",
			sdk.NewAttribute("caller", scriptCtx.Sender),
			sdk.NewAttribute("script", valFound.Index),
			sdk.NewAttribute("function_name", scriptCtx.FunctionName),
			sdk.NewAttribute("response", response),
		),
	)
	if (runErr != nil) && (raiseRunErr == true) {
		fmt.Printf("Output: %s\n", out)
		return nil, sdkerrors.Wrapf(types.ScriptError, "%s on col: %v line:%v \nOutput:\n%s", evalResult.Exception.Msg, evalResult.Exception.Lineno, evalResult.Exception.Col, response)
	}

	return &EvalScriptResponse{Response: response}, nil
}

func handleRunRecovery(r interface{}, sdkCtx sdk.Context) error {
	switch r := r.(type) {
	case sdk.ErrorOutOfGas:
		return sdkerrors.Wrapf(sdkerrors.ErrOutOfGas,
			"ErrorOutofGas script out of gas in location: %v; gasWanted: %d, gasUsed: %d",
			r.Descriptor, sdkCtx.GasMeter().Limit(), sdkCtx.GasMeter().GasConsumed(),
		)

	default:
		return sdkerrors.ErrPanic.Wrapf("script recovered: %v", r)
	}
}
