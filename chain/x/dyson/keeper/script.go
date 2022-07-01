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
	"runtime/debug"
	"strconv"
	"strings"
	"time"

	bankkeeper "github.com/cosmos/cosmos-sdk/x/bank/keeper"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/gorilla/mux"
	"github.com/gorilla/rpc"
	rpcjson "github.com/gorilla/rpc/json"
	"github.com/org/dyson/x/dyson/types"
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

	b := store.Get(types.ScriptKey(
		index,
	))
	if b == nil {
		return val, false
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
		index,
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
		fmt.Printf("Output: %s\n", out)
		log.Fatal(runErr)
	}
	return string(out[:]), true

}

func (k Keeper) RunWsgi(goCtx context.Context, index string, httpreq string) (val string, found bool) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	valFound, found := k.GetScript(ctx, index)
	if !found {
		return "", false
	}
	port, srv, err := k.NewRPCServer(goCtx, valFound.Index)
	if err != nil {
		log.Fatal(err)
	}

	blockInfoJson, err := json.Marshal(ctx.BlockHeader())
	if err != nil {
		log.Fatal(err)
	}
	cmd := exec.Command(
		"python3",
		"simplewsgi.py",
		port,
		index,
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
		//log.Fatal(cmdErr)
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
	add, err := sdk.AccAddressFromBech32(index)
	if err != nil {
		return "", nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, fmt.Sprintf("Invalid script address: %+v", add))
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
	startingGas := ctx.GasMeter().GasConsumed()
	k.Logger(ctx).Info(fmt.Sprintf("startingGas: %+v", startingGas))
	k.Logger(ctx).Info(fmt.Sprintf("limit: %+v", ctx.GasMeter().Limit()))
	defer func() {
		if r := recover(); r != nil {
			err = handleRunRecovery(r, ctx)
		}

		if err == nil {
			events := cachedCtx.EventManager().Events()
			ctx.EventManager().EmitEvents(events)
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
	return
}

func (k Keeper) evalScript(goCtx context.Context, scriptCtx *EvalScriptContext, raiseRunErr bool) (*EvalScriptResponse, error) {
	k.currentDepth += 1

	if k.currentDepth > 5 {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "Maximum Run recusion depth")
	}
	ctx := sdk.UnwrapSDKContext(goCtx)
	valFound, isFound := k.GetScript(ctx, scriptCtx.Index)
	if !isFound {
		fmt.Println(fmt.Sprintf("Script at address %v not set", scriptCtx.Index))
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, fmt.Sprintf("Script at address %v not set", scriptCtx.Index))
	}
	if (scriptCtx.Sender != valFound.Index) && (scriptCtx.ExtraLines != "") {
		fmt.Println(fmt.Sprintf("Only if Script.Index==Sender can use ExtraLines %v", scriptCtx))
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, fmt.Sprintf("Only if Script.Index==Sender can use ExtraLines %v", scriptCtx))
	}
	port, srv, err := k.NewRPCServer(goCtx, valFound.Index)
	if err != nil {
		log.Fatal(err)
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
	fmt.Println(fmt.Sprintf("coins to send: %+v", coins))

	if len(coins) > 0 {
		fmt.Printf("%v => %v, '%v'\n", scriptCtx.Coins, coinsJson, string(coinsJson))
		toAddr, err := sdk.AccAddressFromBech32(scriptCtx.Index)
		if err != nil {
			return nil, err
		}
		fromAddr, err := sdk.AccAddressFromBech32(scriptCtx.Sender)
		if err != nil {
			return nil, err
		}

		sendmsg := banktypes.NewMsgSend(fromAddr, toAddr, coins)
		_, err = bankkeeper.NewMsgServerImpl(k.bankkeeper).Send(goCtx, sendmsg)

		if err != nil {
			return nil, err
		}
	}
	blockInfoJson, err := json.Marshal(ctx.BlockHeader())
	if err != nil {
		return nil, err
	}

	out, runErr := exec.Command(
		//TODO: should specify python binary?
		"python3",
		"dysvm_server.py",
		port,
		scriptCtx.Sender,
		scriptCtx.Index,
		string(coinsJson),
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
	//ctx.GasMeter().ConsumeGas(evalResult.NodesCalled, "nodes_called")
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
			sdk.NewAttribute("response", string(response)),
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
			"script out of gas in location: %v; gasWanted: %d, gasUsed: %d",
			r.Descriptor, sdkCtx.GasMeter().Limit(), sdkCtx.GasMeter().GasConsumed(),
		)

	default:
		return sdkerrors.ErrPanic.Wrapf(
			"script recovered: %v\nstack:\n%v", r, string(debug.Stack()))
	}
}
