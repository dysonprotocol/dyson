package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/names module sentinel errors
var (
	ErrSample            = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrInvalidNftUri     = sdkerrors.Register(ModuleName, 1101, "invalid nft uri")
	ErrInvalidNftData    = sdkerrors.Register(ModuleName, 1102, "invalid nft data")
	ErrInvalidNftUrihash = sdkerrors.Register(ModuleName, 1103, "invalid nft uri hash")
	ErrInvalidNftId      = sdkerrors.Register(ModuleName, 1104, "invalid nft id")
)
