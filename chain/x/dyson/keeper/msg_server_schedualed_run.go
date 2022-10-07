package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/dyson/types"
)

const MAX_FUTURE_BLOCKS = 60 * 60 // 5min
func (k msgServer) CreateScheduledRun(goCtx context.Context, msg *types.MsgCreateScheduledRun) (*types.MsgCreateScheduledRunResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	count, gasPrice, gasFee := k.GetScheduledGasPriceAndFee(ctx, msg.Height, msg.Gas)

	if msg.Height <= uint64(ctx.BlockHeight()) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "scheduled block height must be greater than the current block height")
	}

	if msg.Height > uint64(ctx.BlockHeight()+MAX_FUTURE_BLOCKS) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, fmt.Sprintf("scheduled block height must be less than %v block in the future", MAX_FUTURE_BLOCKS))
	}

	index := fmt.Sprintf("%v/%v/%v", msg.Creator, msg.Height, count)
	// Check if the value already exists but it shouldn't
	_, isFound := k.GetScheduledRun(
		ctx,
		index,
	)
	if isFound {
		// This should never happen
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "ScheduledRun already set")
	}

	from, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}

	ctx.Logger().Info(fmt.Sprintf("from: %+v %+v", from, msg.Creator))

	err = k.DeductFees(ctx, from, sdk.NewCoins(gasFee))
	if err != nil {
		return nil, err
	}

	// Finished paying
	var scheduledRun = types.ScheduledRun{
		Creator:  msg.Creator,
		Index:    index,
		Height:   msg.Height,
		Msg:      msg.Msg,
		Gas:      msg.Gas,
		Gasprice: &gasPrice,
		Fee:      &gasFee,
	}

	k.SetScheduledRun(
		ctx,
		scheduledRun,
	)
	return &types.MsgCreateScheduledRunResponse{}, nil
}

func (k msgServer) UpdateScheduledRun(goCtx context.Context, msg *types.MsgUpdateScheduledRun) (*types.MsgUpdateScheduledRunResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	// TODO: only update runmsg

	// Check if the value exists
	valFound, isFound := k.GetScheduledRun(
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

	var scheduledRun = types.ScheduledRun{
		Creator: msg.Creator,
		Index:   msg.Index,
	}

	k.SetScheduledRun(ctx, scheduledRun)

	return &types.MsgUpdateScheduledRunResponse{}, nil
}

func (k msgServer) DeleteScheduledRun(goCtx context.Context, msg *types.MsgDeleteScheduledRun) (*types.MsgDeleteScheduledRunResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetScheduledRun(
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

	k.RemoveScheduledRun(
		ctx,
		msg.Index,
	)

	return &types.MsgDeleteScheduledRunResponse{}, nil
}
