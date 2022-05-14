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

func (k Keeper) SchedualedRunAll(c context.Context, req *types.QueryAllSchedualedRunRequest) (*types.QueryAllSchedualedRunResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var schedualedRuns []types.SchedualedRun
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	schedualedRunStore := prefix.NewStore(store, types.KeyPrefix(types.SchedualedRunKeyPrefix))

	pageRes, err := query.Paginate(schedualedRunStore, req.Pagination, func(key []byte, value []byte) error {
		var schedualedRun types.SchedualedRun
		if err := k.cdc.Unmarshal(value, &schedualedRun); err != nil {
			return err
		}

		schedualedRuns = append(schedualedRuns, schedualedRun)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllSchedualedRunResponse{SchedualedRun: schedualedRuns, Pagination: pageRes}, nil
}

func (k Keeper) SchedualedRun(c context.Context, req *types.QueryGetSchedualedRunRequest) (*types.QueryGetSchedualedRunResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetSchedualedRun(
	    ctx,
	    req.Index,
        )
	if !found {
	    return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetSchedualedRunResponse{SchedualedRun: val}, nil
}