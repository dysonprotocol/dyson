package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/dyson/types"
)

func (k msgServer) Run(goCtx context.Context, msg *types.MsgRun) (*types.MsgRunResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	_, isFound := k.GetScript(ctx, msg.Address)
	if !isFound {
		fmt.Println(fmt.Sprintf("Script at address %v not found", msg.Address))
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("Script at address %v not set", msg.Address))
	}
	fmt.Println(fmt.Sprintf("Script at address %v found", msg.Address))
	res, err := k.EvalScript(goCtx, &EvalScriptContext{
		Sender:       msg.Creator,
		Index:        msg.Address,
		ExtraLines:   msg.ExtraLines,
		FunctionName: msg.FunctionName,
		Args:         msg.Args,
		Kwargs:       msg.Kwargs,
		Coins:        msg.Coins,
		Nfts:         msg.Nfts,
	}, true)
	if err != nil {
		return nil, err
	}

	k.Logger(ctx).Info(fmt.Sprintf("Run, res: %+v  err: %+v", res, err))
	return &types.MsgRunResponse{Response: res.Response}, nil
}

/*
func (rpcservice *RpcService) Query(moduleName string, req abci.RequestQuery) (abci.ResponseQuery, error) {

	#handler := rpcservice.k.grpcQueryRouter.Route(moduleName)
	if handler == nil {
		return abci.ResponseQuery{}, sdkerrors.ErrUnknownRequest.Wrapf("unrecognized query name: %s", moduleName)
	}

	msgResp, err := handler(rpcservice.ctx, req)
	fmt.Println(fmt.Sprintf("req %+v", req))
	fmt.Println(fmt.Sprintf("msgResp %+v", msgResp))
	fmt.Println(fmt.Sprintf("err %+v", err))
	if err != nil {
		return abci.ResponseQuery{}, sdkerrors.Wrapf(err, "failed to query request %v", req)
	}

	return msgResp, nil

}

func (rpcservice *RpcService) Handle(msg sdk.Msg) (*sdk.Result, error) {
	msgErr := msg.ValidateBasic()
	if msgErr != nil {
		return nil, msgErr
	}
	signers := msg.GetSigners()
	if len(signers) != 1 {
		return nil, sdkerrors.ErrInvalidRequest.Wrap("Can only handle one signer per msg")
	}
	signer := signers[0]

	// if granter != grantee then check authorization.Accept, otherwise we implicitly accept.
	if !signer.Equals(rpcservice.ScriptAddress) {
	}

	handler := rpcservice.k.router.Handler(msg)
	if handler == nil {
		return nil, sdkerrors.ErrUnknownRequest.Wrapf("unrecognized message route: %s", sdk.MsgTypeURL(msg))
	}

	msgResp, err := handler(rpcservice.ctx, msg)
	if err != nil {
		return nil, sdkerrors.Wrapf(err, "failed to execute message; message %v", msg)
	}

	// emit the events from the dispatched actions
	events := msgResp.Events
	sdkEvents := make([]sdk.Event, 0, len(events))
	for i := 0; i < len(events); i++ {
		sdkEvents = append(sdkEvents, sdk.Event(events[i]))
	}
	rpcservice.ctx.EventManager().EmitEvents(sdkEvents)
	return msgResp, nil

}
*/
