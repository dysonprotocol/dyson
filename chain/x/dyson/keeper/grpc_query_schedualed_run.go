package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/org/dyson/x/dyson/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ScheduledRunAll(c context.Context, req *types.QueryAllScheduledRunRequest) (*types.QueryAllScheduledRunResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var scheduledRuns []types.ScheduledRun
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	scheduledRunStore := prefix.NewStore(prefix.NewStore(store, types.KeyPrefix(types.ScheduledRunKeyPrefix)), types.KeyPrefix(req.Index))

	pageRes, err := query.Paginate(scheduledRunStore, req.Pagination, func(key []byte, value []byte) error {
		var scheduledRun types.ScheduledRun
		if err := k.cdc.Unmarshal(value, &scheduledRun); err != nil {
			return err
		}

		scheduledRuns = append(scheduledRuns, scheduledRun)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllScheduledRunResponse{ScheduledRun: scheduledRuns, Pagination: pageRes}, nil
}

func (k Keeper) ScheduledRun(c context.Context, req *types.QueryGetScheduledRunRequest) (*types.QueryGetScheduledRunResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetScheduledRun(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetScheduledRunResponse{ScheduledRun: val}, nil
}
