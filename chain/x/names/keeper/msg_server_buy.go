package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/names/types"
)

func (k msgServer) Buy(goCtx context.Context, msg *types.MsgBuy) (*types.MsgBuyResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	name, isFound := k.GetName(
		ctx,
		msg.Name,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "name not found")
	}

	coin, err := sdk.ParseCoinNormalized(name.Price)
	if err != nil {
		return nil, err
	}
	from, err := sdk.AccAddressFromBech32(msg.Buyer)
	if err != nil {
		return nil, err
	}
	to, err := sdk.AccAddressFromBech32(name.Owner)
	if err != nil {
		return nil, err
	}
	// check if is expired, then FREE!
	if name.ExpirationHeight > uint64(ctx.BlockHeight()) {
		err = k.bankKeeper.SendCoins(ctx, from, to, sdk.Coins{coin})
		if err != nil {
			return nil, sdkerrors.Wrapf(sdkerrors.ErrInsufficientFunds, err.Error())
		}
	}
	//change owner
	name.Owner = msg.Buyer
	// Reset authorized
	name.Authorized = ""

	k.SetName(
		ctx,
		name,
	)

	return &types.MsgBuyResponse{}, nil
}
