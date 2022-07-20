package keeper

import (
	"context"
	"encoding/hex"
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/names/types"
	"golang.org/x/crypto/sha3"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"regexp"
)

func (k Keeper) GenerateCommit(goCtx context.Context, req *types.QueryGenerateCommitRequest) (*types.QueryGenerateCommitResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	matched, err := regexp.Match(types.NameRegex, []byte(req.Name))
	if err != nil {
		return nil, sdkerrors.Wrap(err, "Name regex error")
	}
	if !matched {
		return nil, status.Error(codes.InvalidArgument, fmt.Sprintf("name must match regex: %s", types.NameRegex))
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
