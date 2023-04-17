package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/names/types"
)

func (k msgServer) UpdateNft(goCtx context.Context, msg *types.MsgUpdateNft) (*types.MsgUpdateNftResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	name, isFound := k.GetName(
		ctx,
		msg.ClassId, // the class Id is the dyson name
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "Name not found")
	}

	// Checks if the the msg owner is the same as the current owner
	if msg.ClassOwner != name.Owner {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	// get the NFT
	nft, found := k.nftKeeper.GetNFT(ctx, msg.ClassId, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "NFT not found")
	}

	// update the NFT
	nft.Uri = msg.Uri
	nft.UriHash = msg.Urihash

	k.nftKeeper.Update(ctx, nft)

	return &types.MsgUpdateNftResponse{}, nil
}
