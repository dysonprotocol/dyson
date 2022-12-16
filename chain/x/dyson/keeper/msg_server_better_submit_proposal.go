package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/org/dyson/x/dyson/types"
)

func (k msgServer) BetterSubmitProposal(goCtx context.Context, msg *types.MsgBetterSubmitProposal) (*types.MsgBetterSubmitProposalResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgBetterSubmitProposalResponse{}, nil
}
