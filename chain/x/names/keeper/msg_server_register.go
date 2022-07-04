package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/names/types"
)

func (k msgServer) Register(goCtx context.Context, msg *types.MsgRegister) (*types.MsgRegisterResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	namename := "COMMIT:" + msg.Commit
	_, isFound := k.GetName(
		ctx,
		namename,
	)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "name alrady registered")
	}

	var name = types.Name{
		Owner:  msg.Owner,
		Name:   namename,
		Price:  msg.Price,
		Commit: msg.Commit,
	}

	k.SetName(
		ctx,
		name,
	)

	return &types.MsgRegisterResponse{}, nil
}
