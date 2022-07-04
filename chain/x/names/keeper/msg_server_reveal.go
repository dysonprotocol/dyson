package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/org/dyson/x/names/types"
)

func (k msgServer) Reveal(goCtx context.Context, msg *types.MsgReveal) (*types.MsgRevealResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgRevealResponse{}, nil
}
