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
	err = k.bankKeeper.SendCoins(ctx, from, to, sdk.Coins{coin})
	if err != nil {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrInsufficientFunds, err.Error())
	}

	name.Owner = msg.Buyer
	name.Authorized = ""
	name.Destination = ""

	k.SetName(
		ctx,
		name,
	)

	return &types.MsgBuyResponse{}, nil
}
