package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/dyson module sentinel errors
var (
	ErrorExtraLinesOrExternalScript = sdkerrors.Register(ModuleName, 1100, "cannot use extralines")
	ScriptError                     = sdkerrors.Register(ModuleName, 1101, "Exception in Script")
	RpcError                        = sdkerrors.Register(ModuleName, 1102, "Error in rpc call")
)
