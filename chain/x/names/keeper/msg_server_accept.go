package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/names/types"
)

func (k msgServer) Accept(goCtx context.Context, msg *types.MsgAccept) (*types.MsgAcceptResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	name, isFound := k.GetName(
		ctx,
		msg.Name,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "name not found")
	}

	// Checks if the the msg owner is the same as the authorize account
	if msg.NewOwner != name.Authorized {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "signer is not authorized to accept this name")
	}

	name.Owner = msg.NewOwner
	name.Authorized = ""

	k.SetName(
		ctx,
		name,
	)

	return &types.MsgAcceptResponse{}, nil
}
