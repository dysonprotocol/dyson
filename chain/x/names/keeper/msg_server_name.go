package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/names/types"
)

func (k msgServer) UpdateName(goCtx context.Context, msg *types.MsgUpdateName) (*types.MsgUpdateNameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	name, isFound := k.GetName(
		ctx,
		msg.Name,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "Name not found")
	}

	// Checks if the the msg owner is the same as the current owner
	if msg.Owner != name.Owner {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	name.Destination = msg.Destination
	name.Authorized = msg.Authorized
	name.AutoRenew = msg.AutoRenew

	k.SetName(ctx, name)

	return &types.MsgUpdateNameResponse{}, nil
}

func (k msgServer) DeleteName(goCtx context.Context, msg *types.MsgDeleteName) (*types.MsgDeleteNameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetName(
		ctx,
		msg.Name,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "Name not found")
	}

	// Checks if the the msg owner is the same as the current owner
	if msg.Owner != valFound.Owner {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveName(
		ctx,
		msg.Name,
	)

	return &types.MsgDeleteNameResponse{}, nil
}
