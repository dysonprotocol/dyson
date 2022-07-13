package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/org/dyson/x/names/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) Resolve(goCtx context.Context, req *types.QueryResolveRequest) (*types.QueryResolveResponse, error) {
	var address string

	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	//ctx := sdk.UnwrapSDKContext(goCtx)

	// Can we parse this name as an address?
	_, err := sdk.AccAddressFromBech32(req.Name)

	if err != nil {
		// It's not an address, so look it up
		nameResp, err := k.Name(goCtx, &types.QueryGetNameRequest{Name: req.Name})
		if err != nil {
			return nil, err
		}
		address = nameResp.Name.Destination
	} else {
		// it is an address to return it
		address = req.Name
	}
	return &types.QueryResolveResponse{Address: address}, nil
}
