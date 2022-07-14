package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/names/types"
	"strings"
)

func (k msgServer) ForceTransfer(goCtx context.Context, msg *types.MsgForceTransfer) (*types.MsgForceTransferResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	coin, err := sdk.ParseCoinNormalized(msg.Amount)
	if err != nil {
		return nil, err
	}

	denomParts := strings.Split(coin.Denom, ".")
	baseName := denomParts[0]

	name, isFound := k.GetName(
		ctx,
		baseName,
	)
	if !isFound {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrKeyNotFound, "name not found: %s", baseName)
	}

	// Checks if the the msg owner is the same as the current owner
	if msg.Owner != name.Owner {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrUnauthorized, "incorrect owner (%s): %s != %s", name.Name, msg.Owner, name.Owner)
	}
	fromAddr, err := sdk.AccAddressFromBech32(msg.From)
	if err != nil {
		return nil, err
	}

	toAddr, err := sdk.AccAddressFromBech32(msg.To)
	if err != nil {
		return nil, err
	}

	err = k.bankKeeper.SendCoins(ctx, fromAddr, toAddr, sdk.Coins{coin})

	if err != nil {
		return nil, err
	}

	return &types.MsgForceTransferResponse{}, nil
}
