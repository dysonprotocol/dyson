package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/names/types"
)

const REGISTER_BLOCKS = 2628288 // seconds in a month

func (k msgServer) Register(goCtx context.Context, msg *types.MsgRegister) (*types.MsgRegisterResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	namename := "SHAKE256:" + msg.Commit
	_, isFound := k.GetName(
		ctx,
		namename,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "commit alrady registered")
	}

	var name = types.Name{
		Owner:              msg.Owner,
		Name:               namename,
		Destination:        msg.Owner,
		Price:              msg.Price,
		ExpirationHeight:   uint64(ctx.BlockHeight() + REGISTER_BLOCKS),
		RegistrationHeight: uint64(ctx.BlockHeight()),
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

	// calcualte the fee of 1%
	coin.Amount = (coin.Amount.QuoRaw(100)) // divide by 100
	err = k.PayFee(ctx, from, coin)
	if err != nil {
		return nil, err
	}

	k.SetName(
		ctx,
		name,
	)

	return &types.MsgRegisterResponse{
		Fee:              coin.String(),
		ExpirationHeight: name.ExpirationHeight,
	}, nil
}
