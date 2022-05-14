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

func (k Keeper) StorageAll(c context.Context, req *types.QueryAllStorageRequest) (*types.QueryAllStorageResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var storages []*types.Storage
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	storageStore := prefix.NewStore(store, types.KeyPrefix(types.StorageKeyPrefix))

	pageRes, err := query.Paginate(storageStore, req.Pagination, func(key []byte, value []byte) error {
		var storage types.Storage
		if err := k.cdc.Unmarshal(value, &storage); err != nil {
			return err
		}

		storages = append(storages, &storage)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllStorageResponse{Storage: storages, Pagination: pageRes}, nil
}
func (k Keeper) PrefixStorage(c context.Context, req *types.QueryPrefixStorageRequest) (*types.QueryPrefixStorageResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var storages []*types.Storage
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	storageStore := prefix.NewStore(prefix.NewStore(store, types.KeyPrefix(types.StorageKeyPrefix)), types.KeyPrefix(req.Prefix))

	pageRes, err := query.Paginate(storageStore, req.Pagination, func(key []byte, value []byte) error {
		var storage types.Storage
		if err := k.cdc.Unmarshal(value, &storage); err != nil {
			return err
		}

		storages = append(storages, &storage)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryPrefixStorageResponse{Storage: storages, Pagination: pageRes}, nil
}

func (k Keeper) Storage(c context.Context, req *types.QueryGetStorageRequest) (*types.QueryGetStorageResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetStorage(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetStorageResponse{Storage: &val}, nil
}
