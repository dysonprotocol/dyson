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

func (k Keeper) NameAll(c context.Context, req *types.QueryAllNameRequest) (*types.QueryAllNameResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var names []types.Name
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	nameStore := prefix.NewStore(store, types.KeyPrefix(types.NameKeyPrefix))

	pageRes, err := query.Paginate(nameStore, req.Pagination, func(key []byte, value []byte) error {
		var name types.Name
		if err := k.cdc.Unmarshal(value, &name); err != nil {
			return err
		}

		names = append(names, name)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllNameResponse{Name: names, Pagination: pageRes}, nil
}

func (k Keeper) Name(c context.Context, req *types.QueryGetNameRequest) (*types.QueryGetNameResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetName(
		ctx,
		req.Name,
	)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetNameResponse{Name: val}, nil
}
