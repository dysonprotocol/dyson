package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/names/types"
)

func (k msgServer) SetPriceAndExtend(goCtx context.Context, msg *types.MsgSetPriceAndExtend) (*types.MsgSetPriceAndExtendResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	name, isFound := k.GetName(
		ctx,
		msg.Name,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "name not registered")
	}
	if name.Owner != msg.Owner {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "name.Owner !- msg.Creator")
	}

	name.Expires = ctx.BlockTime().AddDate(0, 1, 0) // expires in one month
	name.Price = msg.Price

	coin, err := sdk.ParseCoinNormalized(msg.Price)
	if err != nil {
		return nil, err
	}
	from, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return nil, err
	}
	if coin.Denom != "dys" {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid denom, must be 'dys'")
	}
	coin.Amount = (coin.Amount.QuoRaw(100)) // divide by 100
	err = k.PayFee(ctx, from, coin)
	if err != nil {
		return nil, err

	}

	// set the new revealed name, overwriting and existing one if it is newer
	k.SetName(
		ctx,
		name,
	)
	return &types.MsgSetPriceAndExtendResponse{Expiry: name.Expires}, nil
}
