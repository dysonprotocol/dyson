package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/org/dyson/x/names/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Resolve(goCtx context.Context, req *types.QueryResolveRequest) (*types.QueryResolveResponse, error) {

	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	name := k.ResolveIndex(ctx, req.Name)

	return &types.QueryResolveResponse{Address: name}, nil
}
