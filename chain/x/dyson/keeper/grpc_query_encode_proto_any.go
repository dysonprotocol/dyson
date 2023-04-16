package keeper

import (
	"context"
	b64 "encoding/base64"
	"fmt"
	"github.com/org/dyson/x/dyson/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	codectypes "github.com/cosmos/cosmos-sdk/codec/types"
)

func (k Keeper) EncodeProtoAny(goCtx context.Context, req *types.QueryEncodeProtoAnyRequest) (*types.QueryEncodeProtoAnyResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	anyMsg, err := k.registry.Resolve(req.TypeUrl)
	if err != nil {
		return nil, status.Error(codes.InvalidArgument, "invalid typeUrl")
	}
	err = k.cdc.UnmarshalJSON([]byte(req.JsonValue), anyMsg)
	if err != nil {
		return nil, status.Error(codes.InvalidArgument, fmt.Sprintf("UnmarshalJSON err: %v", err))
	}
	a, err := codectypes.NewAnyWithValue(anyMsg)
	if err != nil {
		return nil, status.Error(codes.InvalidArgument, "invalid any")
	}

	return &types.QueryEncodeProtoAnyResponse{
		TypeUrl: req.TypeUrl,
		Value:   b64.StdEncoding.EncodeToString(a.Value)}, nil
}
