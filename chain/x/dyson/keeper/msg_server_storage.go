package keeper

import (
	"context"
	"fmt"
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/dyson/types"
)

func (k msgServer) CreateStorage(goCtx context.Context, msg *types.MsgCreateStorage) (*types.MsgCreateStorageResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	prefix := msg.Creator + "/"
	if !strings.HasPrefix(msg.Index, prefix) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, fmt.Sprintf("index %v must start with prefix: %s ", msg.Index, prefix))

	}

	if !msg.Force {
		// Check if the value already exists
		_, isFound := k.GetStorage(ctx, msg.Index)
		if isFound {
			return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, fmt.Sprintf("index %v already set", msg.Index))
		}
	}

	var storage = types.Storage{
		Index:   msg.Index,
		Creator: msg.Creator,
		Data:    msg.Data,
	}

	k.SetStorage(
		ctx,
		storage,
	)
	return &types.MsgCreateStorageResponse{}, nil
}

func (k msgServer) UpdateStorage(goCtx context.Context, msg *types.MsgUpdateStorage) (*types.MsgUpdateStorageResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	prefix := msg.Creator + "/"
	if !strings.HasPrefix(msg.Index, prefix) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, fmt.Sprintf("index %v must start with prefix: %s ", msg.Index, prefix))
	}
	// Check if the value exists
	valFound, isFound := k.GetStorage(ctx, msg.Index)
	if !msg.Force {
		if !isFound {
			return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("index %v not set", msg.Index))
		}
	}

	// Checks if the the msg sender is the same as the current owner if it exists
	if isFound && msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	var storage = types.Storage{
		Index:   msg.Index,
		Creator: msg.Creator,
		Data:    msg.Data,
	}

	k.SetStorage(ctx, storage)

	return &types.MsgUpdateStorageResponse{}, nil
}

func (k msgServer) DeleteStorage(goCtx context.Context, msg *types.MsgDeleteStorage) (*types.MsgDeleteStorageResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	prefix := msg.Creator + "/"
	if !strings.HasPrefix(msg.Index, prefix) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, fmt.Sprintf("index %v must start with prefix: %s ", msg.Index, prefix))

	}

	// Check if the value exists
	valFound, isFound := k.GetStorage(ctx, msg.Index)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("index %v not set", msg.Index))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveStorage(ctx, msg.Index)

	return &types.MsgDeleteStorageResponse{}, nil
}
