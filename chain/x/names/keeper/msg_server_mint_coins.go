package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/names/types"
)

const COIN_GAS_COST = 1

func (k msgServer) MintCoins(goCtx context.Context, msg *types.MsgMintCoins) (*types.MsgMintCoinsResponse, error) {

	ctx := sdk.UnwrapSDKContext(goCtx)

	coin, err := sdk.ParseCoinNormalized(msg.Amount)
	if err != nil {
		return nil, err
	}
	gasToUse := coin.Amount.MulRaw(COIN_GAS_COST).Uint64()
	ctx.GasMeter().ConsumeGas(gasToUse, "MintCoins")

	dysName := getDysName(coin.Denom)

	name, isFound := k.GetName(
		ctx,
		dysName,
	)
	if !isFound {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrKeyNotFound, "name not found: %s", dysName)
	}

	// Checks if the the msg owner is the same as the current owner
	if msg.Owner != name.Owner {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrUnauthorized, "incorrect owner (%s): %s != %s", name.Name, msg.Owner, name.Owner)
	}
	toAddr, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return nil, err
	}

	err = k.bankKeeper.MintCoins(ctx, "names", sdk.Coins{coin})
	if err != nil {
		return nil, err
	}

	err = k.bankKeeper.SendCoinsFromModuleToAccount(ctx, "names", toAddr, sdk.Coins{coin})

	if err != nil {
		return nil, err
	}

	return &types.MsgMintCoinsResponse{}, nil
}
