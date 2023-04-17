package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/names/types"
)

func (k msgServer) BurnNft(goCtx context.Context, msg *types.MsgBurnNft) (*types.MsgBurnNftResponse, error) {
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

	err := k.nftKeeper.Burn(ctx, nft.ClassId, nft.Id)
	if err != nil {
		return nil, err
	}

	return &types.MsgBurnNftResponse{}, nil
}
