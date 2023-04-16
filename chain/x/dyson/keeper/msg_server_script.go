package keeper

import (
	"context"
	"crypto/sha256"
	"fmt"
	"os/exec"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/dyson/types"
)

const DeployAutonomousScriptGasCost uint64 = 10000000

func (k msgServer) DeployAutonomousScript(goCtx context.Context, msg *types.MsgDeployAutonomousScript) (*types.MsgDeployAutonomousScriptResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	hash := sha256.Sum256([]byte(msg.Creator + msg.Code))
	address := sdk.AccAddress(hash[:])

	scriptAddress := address.String()
	_, isFound := k.GetScript(ctx, scriptAddress)
	if isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, fmt.Sprintf("Script %v already set", scriptAddress))
	}

	var script = types.Script{
		Index:   scriptAddress,
		Creator: msg.Creator,
		Code:    msg.Code,
	}

	fmt.Println("DeployAutonomousScript", scriptAddress, msg.Creator, msg.Code)
	k.SetScript(
		ctx,
		script,
	)
	ctx.GasMeter().ConsumeGas(DeployAutonomousScriptGasCost, "DeployAutonomousScript")
	ctx.EventManager().EmitEvent(
		sdk.NewEvent("DeployAutonomousScript",
			sdk.NewAttribute("address", scriptAddress),
		),
	)
	return &types.MsgDeployAutonomousScriptResponse{Address: scriptAddress}, nil
}

func (k msgServer) UpdateScript(goCtx context.Context, msg *types.MsgUpdateScript) (*types.MsgUpdateScriptResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	out, err := exec.Command("black", "-q", "-t", "py38", "-c", msg.Code).CombinedOutput()

	if err != nil {
		k.Logger(ctx).Info(fmt.Sprintf("black formatting error: %s", string(out)))
	} else {
		msg.Code = string(out)
	}

	var script = types.Script{
		Index:   msg.Creator,
		Creator: msg.Creator,
		Code:    msg.Code,
	}

	k.SetScript(ctx, script)

	return &types.MsgUpdateScriptResponse{Address: msg.Creator}, nil
}

func (k msgServer) DeleteScript(goCtx context.Context, msg *types.MsgDeleteScript) (*types.MsgDeleteScriptResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// Check if the value exists
	valFound, isFound := k.GetScript(ctx, msg.Creator)
	if !isFound {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("index %v not set", msg.Creator))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != valFound.Creator {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveScript(ctx, msg.Creator)

	return &types.MsgDeleteScriptResponse{}, nil
}
