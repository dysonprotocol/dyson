package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/org/dyson/x/dyson/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ScheduledGasPriceAndFeeAtBlock(goCtx context.Context, req *types.QueryScheduledGasPriceAndFeeAtBlockRequest) (*types.QueryScheduledGasPriceAndFeeAtBlockResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	if req.Gaswanted == 0 {
		return nil, status.Error(codes.InvalidArgument, "gas wanted cannot be 0")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	_, gasPrice, gasFee := k.GetScheduledGasPriceAndFee(ctx, req.Blockheight, req.Gaswanted)

	return &types.QueryScheduledGasPriceAndFeeAtBlockResponse{Gasprice: &gasPrice, Gasfee: &gasFee}, nil
}
