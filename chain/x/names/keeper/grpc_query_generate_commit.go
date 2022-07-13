package keeper

import (
	"context"
	"encoding/hex"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/org/dyson/x/names/types"
	"golang.org/x/crypto/sha3"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GenerateCommit(goCtx context.Context, req *types.QueryGenerateCommitRequest) (*types.QueryGenerateCommitResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	_ = ctx

	out := make([]byte, 16)

	c1 := sha3.NewShake256()
	c1.Write([]byte(req.Owner))
	c1.Write([]byte(req.Name))
	c1.Write([]byte(req.Salt))
	c1.Read(out)

	return &types.QueryGenerateCommitResponse{Commit: hex.EncodeToString(out)}, nil
}
