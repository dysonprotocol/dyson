package keeper

import (
	"context"
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/x/nft"
	"github.com/org/dyson/x/names/types"
)

// dysName is the domain and tld without the subdomains
func getDysName(domain string) string {
	domainParts := strings.Split(domain, ".")
	length := len(domainParts)

	if length < 2 {
		return ""
	}

	return domainParts[length-2] + "." + domainParts[length-1]
}
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

	dysName := getDysName(msg.Id)

	// Check if the value exists
	name, isFound := k.GetName(
		ctx,
		dysName,
	)
	if !isFound {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrKeyNotFound, "Name not found: %s", dysName)
	}

	// Checks if the the msg owner is the same as the current owner
	if msg.Owner != name.Owner {
		return nil, sdkerrors.Wrapf(sdkerrors.ErrUnauthorized, "incorrect owner: %s", msg.Owner)
	}

	class := nft.Class{
		Id:          msg.Id,
		Name:        msg.Name,
		Description: msg.Description,
		Symbol:      msg.Symbol,
		Uri:         msg.Uri,
		UriHash:     msg.UriHash,
	}

	err := k.SetClass(ctx, class)
	if err != nil {
		return nil, err
	}

	return &types.MsgSetNftClassResponse{}, nil
}
