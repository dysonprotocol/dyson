package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/x/nft"
	"github.com/org/dyson/x/names/types"
)

func (k msgServer) MintNft(goCtx context.Context, msg *types.MsgMintNft) (*types.MsgMintNftResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	dysName := getDysName(msg.ClassId)
	// Check if the value exists
	name, isFound := k.GetName(
		ctx,
		dysName,
	)
	if !isFound {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrKeyNotFound, "name not found: %s", dysName)
	}

	// Checks if the the msg owner is the same as the current owner
	if msg.ClassOwner != name.Owner {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	// Mint the NFT
	nft := nft.NFT{
		ClassId: msg.ClassId,
		Id:      msg.Id,
		Uri:     msg.Uri,
		UriHash: msg.UriHash,
	}

	toAddr, err := sdk.AccAddressFromBech32(msg.ClassOwner)
	if err != nil {
		return nil, err
	}
	k.nftKeeper.Mint(ctx, nft, toAddr)

	return &types.MsgMintNftResponse{}, nil
}
