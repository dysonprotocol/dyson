package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/org/dyson/x/names/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) ExpirationsAll(c context.Context, req *types.QueryAllExpirationsRequest) (*types.QueryAllExpirationsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var expirationss []types.Expirations
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	expirationsStore := prefix.NewStore(store, types.KeyPrefix(types.ExpirationsKeyPrefix))

	pageRes, err := query.Paginate(expirationsStore, req.Pagination, func(key []byte, value []byte) error {
		var expirations types.Expirations
		if err := k.cdc.Unmarshal(value, &expirations); err != nil {
			return err
		}

		expirationss = append(expirationss, expirations)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllExpirationsResponse{Expirations: expirationss, Pagination: pageRes}, nil
}

func (k Keeper) Expirations(c context.Context, req *types.QueryGetExpirationsRequest) (*types.QueryGetExpirationsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetExpirations(
		ctx,
		req.BlockHeight,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetExpirationsResponse{Expirations: val}, nil
}
