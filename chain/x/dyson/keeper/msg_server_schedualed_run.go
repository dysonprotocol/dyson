package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/dyson/types"
)

func (k msgServer) CreateSchedualedRun(goCtx context.Context, msg *types.MsgCreateSchedualedRun) (*types.MsgCreateSchedualedRunResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	count, gp := k.getSchdeualedCountAndGasPrice(ctx, msg.Height, msg.Gas)

	index := fmt.Sprintf("%v/%v", msg.Height, count)
	// Check if the value already exists but it shouldn't
	_, isFound := k.GetSchedualedRun(
		ctx,
		index,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "index already set")
	}

	// Determine the required fees by multiplying each required minimum gas
	// price by the gas limit, where fee = ceil(minGasPrice * gasLimit).
	glDec := sdk.NewInt(int64(msg.Gas))
	fee := gp.Amount.Mul(glDec)
	requiredFee := sdk.NewCoin(gp.Denom, fee)
	// Send payment
	from, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}

	ctx.Logger().Info(fmt.Sprintf("from: %+v %+v", from, msg.Creator))

	err = k.DeductFees(ctx, from, sdk.NewCoins(requiredFee))
	if err != nil {
		return nil, err
	}

	// Finished paying
	var schedualedRun = types.SchedualedRun{
		Creator:  msg.Creator,
		Index:    index,
		Height:   msg.Height,
		Msg:      msg.Msg,
		Gas:      msg.Gas,
		Gasprice: &gp,
		Fee:      &requiredFee,
	}

	k.SetSchedualedRun(
		ctx,
		schedualedRun,
	)
	return &types.MsgCreateSchedualedRunResponse{}, nil
}

func (k msgServer) UpdateSchedualedRun(goCtx context.Context, msg *types.MsgUpdateSchedualedRun) (*types.MsgUpdateSchedualedRunResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	// TODO: only update runmsg

	// Check if the value exists
	valFound, isFound := k.GetSchedualedRun(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var schedualedRun = types.SchedualedRun{
		Creator: msg.Creator,
		Index:   msg.Index,
	}

	k.SetSchedualedRun(ctx, schedualedRun)

	return &types.MsgUpdateSchedualedRunResponse{}, nil
}

func (k msgServer) DeleteSchedualedRun(goCtx context.Context, msg *types.MsgDeleteSchedualedRun) (*types.MsgDeleteSchedualedRunResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetSchedualedRun(
		ctx,
		msg.Index,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg creator is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveSchedualedRun(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteSchedualedRunResponse{}, nil
}
