package keeper

import (
	"context"
	"encoding/hex"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/names/types"
	"golang.org/x/crypto/sha3"
)

func (k msgServer) Reveal(goCtx context.Context, msg *types.MsgReveal) (*types.MsgRevealResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	out := make([]byte, 16)

	c1 := sha3.NewShake256()
	c1.Write([]byte(msg.Owner))
	c1.Write([]byte(msg.Name))
	c1.Write([]byte(msg.Salt))
	c1.Read(out)
	commit := hex.EncodeToString(out)

	name, isFound := k.GetName(
		ctx,
		"SHAKE256:"+commit,
	)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "name not registered")
	}

	existingName, isFound := k.GetName(
		ctx,
		msg.Name,
	)
	if isFound {
		if existingName.Height <= name.Height {
			return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "name alrady registered")
		}

	}

	// remove commit name
	k.RemoveName(ctx, name.Name)

	//update Name.name
	name.Name = msg.Name

	// set the new revealed name, overwriting and existing one if it is newer
	k.SetName(
		ctx,
		name,
	)

	return &types.MsgRevealResponse{Name: &name}, nil
}
