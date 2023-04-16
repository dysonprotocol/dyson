package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/x/nft"
	"github.com/org/dyson/x/names/types"
)

func (k Keeper) SetClass(ctx sdk.Context, class nft.Class) error {
	found := k.nftKeeper.HasClass(ctx, class.Id)
	if found {
		return k.nftKeeper.UpdateClass(ctx, class)
	} else {
		return k.nftKeeper.SaveClass(ctx, class)
	}
}
func (k msgServer) SetNftClass(goCtx context.Context, msg *types.MsgSetNftClass) (*types.MsgSetNftClassResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	class := nft.Class{
		Id:          msg.Id,
		Name:        msg.Name,
		Description: msg.Description,
		Uri:         msg.Uri,
		UriHash:     msg.Urihash,
	}

	err := k.SetClass(ctx, class)
	if err != nil {
		return nil, err
	}

	return &types.MsgSetNftClassResponse{}, nil
}
