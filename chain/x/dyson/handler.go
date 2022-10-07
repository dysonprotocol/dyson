package dyson

import (
	"fmt"
	"log"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/org/dyson/x/dyson/keeper"
	"github.com/org/dyson/x/dyson/types"
)

// NewHandler ...
func NewHandler(k keeper.Keeper) sdk.Handler {
	msgServer := keeper.NewMsgServerImpl(k)

	return func(ctx sdk.Context, msg sdk.Msg) (*sdk.Result, error) {
		ctx = ctx.WithEventManager(sdk.NewEventManager())

		switch msg := msg.(type) {
		case *types.MsgCreateScript:
			res, err := msgServer.CreateScript(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgUpdateScript:
			res, err := msgServer.UpdateScript(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgDeleteScript:
			res, err := msgServer.DeleteScript(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgCreateStorage:
			res, err := msgServer.CreateStorage(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgUpdateStorage:
			res, err := msgServer.UpdateStorage(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgDeleteStorage:
			res, err := msgServer.DeleteStorage(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		case *types.MsgCreateScheduledRun:
			res, err := msgServer.CreateScheduledRun(sdk.WrapSDKContext(ctx), msg)
			return sdk.WrapServiceResult(ctx, res, err)
		//case *types.MsgUpdateScheduledRun:
		//	res, err := msgServer.UpdateScheduledRun(sdk.WrapSDKContext(ctx), msg)
		//	return sdk.WrapServiceResult(ctx, res, err)
		//case *types.MsgDeleteScheduledRun:
		//	res, err := msgServer.DeleteScheduledRun(sdk.WrapSDKContext(ctx), msg)
		//	return sdk.WrapServiceResult(ctx, res, err)
		// this line is used by starport scaffolding # 1
		case *types.MsgRun:
			res, err := msgServer.Run(sdk.WrapSDKContext(ctx), msg)
			wrappedRes, e := sdk.WrapServiceResult(ctx, res, err)
			if e == nil {
				log.Printf("wrappedRes: %s", string(wrappedRes.Data))
			}
			return wrappedRes, e

		default:
			errMsg := fmt.Sprintf("unrecognized %s message type: %T", types.ModuleName, msg)
			return nil, sdkerrors.Wrap(sdkerrors.ErrUnknownRequest, errMsg)
		}
	}
}
