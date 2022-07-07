package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/names/types"
)

func (k msgServer) OfferTo(goCtx context.Context, msg *types.MsgOfferTo) (*types.MsgOfferToResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	name, isFound := k.GetName(
		ctx,
		msg.Name,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "name not found")
	}

	// Checks if the the msg owner is the same as the current owner
	if msg.Owner != name.Owner {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	name.Authorized = msg.NewOwner
	k.SetName(
		ctx,
		name,
	)

	return &types.MsgOfferToResponse{}, nil
}
