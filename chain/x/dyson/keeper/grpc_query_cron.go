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

func (k Keeper) CronAll(c context.Context, req *types.QueryAllCronRequest) (*types.QueryAllCronResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var crons []types.Cron
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	cronStore := prefix.NewStore(store, types.KeyPrefix(types.CronKeyPrefix))

	pageRes, err := query.Paginate(cronStore, req.Pagination, func(key []byte, value []byte) error {
		var cron types.Cron
		if err := k.cdc.Unmarshal(value, &cron); err != nil {
			return err
		}

		crons = append(crons, cron)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllCronResponse{Cron: crons, Pagination: pageRes}, nil
}

func (k Keeper) Cron(c context.Context, req *types.QueryGetCronRequest) (*types.QueryGetCronResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetCron(
	    ctx,
	    req.BlockHeight,
        )
	if !found {
	    return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetCronResponse{Cron: val}, nil
}