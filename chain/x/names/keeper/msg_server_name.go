package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/names/types"
)

func (k msgServer) CreateName(goCtx context.Context, msg *types.MsgCreateName) (*types.MsgCreateNameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value already exists
	_, isFound := k.GetName(
		ctx,
		msg.Name,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "name alrady registered")
	}

	var name = types.Name{
		Owner:       msg.Owner,
		Name:        msg.Name,
		Destination: msg.Destination,
		Price:       msg.Price,
		Expires:     msg.Expires,
		Authorized:  msg.Authorized,
		Commit:      msg.Commit,
		Salt:        msg.Salt,
	}

	k.SetName(
		ctx,
		name,
	)
	return &types.MsgCreateNameResponse{}, nil
}

func (k msgServer) UpdateName(goCtx context.Context, msg *types.MsgUpdateName) (*types.MsgUpdateNameResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetName(
		ctx,
		msg.Name,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
	}

	// Checks if the the msg owner is the same as the current owner
	if msg.Owner != valFound.Owner {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var name = types.Name{
		Owner:       msg.Owner,
		Name:        msg.Name,
		Destination: msg.Destination,
		Price:       msg.Price,
		Expires:     msg.Expires,
		Authorized:  msg.Authorized,
		Commit:      msg.Commit,
		Salt:        msg.Salt,
	}

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
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, "index not set")
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
