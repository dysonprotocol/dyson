package keeper

import (
	"context"
	"fmt"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/org/dyson/x/dyson/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

const MAX_QUERY_GAS = uint64(10000000)

func (k Keeper) ScriptAll(c context.Context, req *types.QueryAllScriptRequest) (*types.QueryAllScriptResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var scripts []*types.Script
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	scriptStore := prefix.NewStore(store, types.KeyPrefix(types.ScriptKeyPrefix))

	pageRes, err := query.Paginate(scriptStore, req.Pagination, func(key []byte, value []byte) error {
		var script types.Script
		if err := k.cdc.Unmarshal(value, &script); err != nil {
			return err
		}

		scripts = append(scripts, &script)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllScriptResponse{Script: scripts, Pagination: pageRes}, nil
}

func (k Keeper) Script(c context.Context, req *types.QueryGetScriptRequest) (*types.QueryGetScriptResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetScript(ctx, req.Index)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetScriptResponse{Script: &val}, nil
}

func (k Keeper) Schema(c context.Context, req *types.QueryGetSchemaRequest) (*types.QueryGetSchemaResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetSchema(ctx, req.Index)
	if !found {
		return nil, status.Error(codes.InvalidArgument, "not found")
	}

	return &types.QueryGetSchemaResponse{Schema: val}, nil
}

func (k Keeper) Wsgi(goCtx context.Context, req *types.QueryWsgiRequest) (*types.QueryWsgiResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(goCtx)
	ctx, _ = ctx.CacheContext()
	if ctx.GasMeter().Limit() < 1 || ctx.GasMeter().Limit() > MAX_QUERY_GAS {
		ctx = ctx.WithGasMeter(sdk.NewGasMeter(MAX_QUERY_GAS))
	}
	goCtx = sdk.WrapSDKContext(ctx)
	val, found := k.RunWsgi(goCtx, req.Index, req.Httprequest)
	if !found {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("Script at address %v not set", req.Index))
	}

	return &types.QueryWsgiResponse{Httpresponse: val}, nil
}

func (k Keeper) QueryScript(goCtx context.Context, msg *types.MsgRun) (*types.MsgRunResponse, error) {

	ctx, _ := sdk.UnwrapSDKContext(goCtx).CacheContext()
	if ctx.GasMeter().Limit() < 1 || ctx.GasMeter().Limit() > MAX_QUERY_GAS {
		ctx = ctx.WithGasMeter(sdk.NewGasMeter(MAX_QUERY_GAS))
	}
	goCtx = sdk.WrapSDKContext(ctx)
	//_, isFound := k.GetScript(ctx, msg.Address)
	//if !isFound {
	//	fmt.Println(fmt.Sprintf("Script at address %v not found", msg.Address))
	//	return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("Script at address %v not set", msg.Address))
	//}
	//fmt.Println(fmt.Sprintf("Script at address %v found", msg.Address))

	res, err := k.EvalScript(goCtx, &EvalScriptContext{
		Sender:       msg.Creator,
		Index:        msg.Address,
		ExtraLines:   msg.ExtraLines,
		FunctionName: msg.FunctionName,
		Args:         msg.Args,
		Kwargs:       msg.Kwargs,
		Coins:        msg.Coins,
		Nfts:         msg.Nfts,
	}, k.currentDepth != 0)
	if err != nil {
		return nil, err
	}
	return &types.MsgRunResponse{Response: res.Response}, nil
}
