package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
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

	// Check if the value exists
	name, isFound := k.GetName(
		ctx,
		msg.Id, // the name Id is the dyson name
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "Name not found")
	}

	// Checks if the the msg owner is the same as the current owner
	if msg.Owner != name.Owner {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

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
