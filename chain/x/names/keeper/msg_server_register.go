package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/names/types"
)

func (k msgServer) Register(goCtx context.Context, msg *types.MsgRegister) (*types.MsgRegisterResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	namename := "SHAKE256:" + msg.Commit
	_, isFound := k.GetName(
		ctx,
		namename,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "name alrady registered")
	}

	var name = types.Name{
		Owner:   msg.Owner,
		Name:    namename,
		Price:   msg.Price,
		Expires: ctx.BlockTime().AddDate(0, 1, 0), // expires in one month
		Height:  ctx.BlockHeight(),
	}

	coin, err := sdk.ParseCoinNormalized(msg.Price)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid coins")
	}
	from, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid address")
	}
	if coin.Denom != "dys" {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid denom, must be 'dys'")
	}
	coin.Amount = (coin.Amount.QuoRaw(100)) // divide by 100
	err = k.PayFee(ctx, from, coin)
	if err != nil {
		return nil, err

	}

	k.SetName(
		ctx,
		name,
	)

	return &types.MsgRegisterResponse{}, nil
}
