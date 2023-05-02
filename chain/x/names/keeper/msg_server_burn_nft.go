package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/names/types"
)

func (k msgServer) BurnNft(goCtx context.Context, msg *types.MsgBurnNft) (*types.MsgBurnNftResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	dysName := getDysName(msg.Id)
	// Check if the value exists
	name, isFound := k.GetName(
		ctx,
		dysName,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "Name not found")
	}

	// Checks if the the msg owner is the same as the current owner
	if msg.ClassOwner != name.Owner {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect nft class owner")
	}

	ownerAddr, err := sdk.AccAddressFromBech32(msg.ClassOwner)
	if err != nil {
		return nil, err
	}
	// check if the NFT is owned by the sender
	if !k.nftKeeper.GetOwner(ctx, msg.ClassId, msg.Id).Equals(ownerAddr) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect nft owner")
	}

	// get the NFT
	nft, found := k.nftKeeper.GetNFT(ctx, msg.ClassId, msg.Id)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "NFT not found")
	}

	err = k.nftKeeper.Burn(ctx, nft.ClassId, nft.Id)
	if err != nil {
		return nil, err
	}

	return &types.MsgBurnNftResponse{}, nil
}
