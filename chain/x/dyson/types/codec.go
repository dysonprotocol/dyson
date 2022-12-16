package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateScript{}, "dyson/CreateScript", nil)
	cdc.RegisterConcrete(&MsgUpdateScript{}, "dyson/UpdateScript", nil)
	cdc.RegisterConcrete(&MsgDeleteScript{}, "dyson/DeleteScript", nil)
	cdc.RegisterConcrete(&MsgCreateStorage{}, "dyson/CreateStorage", nil)
	cdc.RegisterConcrete(&MsgUpdateStorage{}, "dyson/UpdateStorage", nil)
	cdc.RegisterConcrete(&MsgDeleteStorage{}, "dyson/DeleteStorage", nil)
	cdc.RegisterConcrete(&MsgRun{}, "dys/Run", nil)
	cdc.RegisterConcrete(&MsgCreateScheduledRun{}, "dyson/CreateScheduledRun", nil)
	cdc.RegisterConcrete(&MsgUpdateScheduledRun{}, "dyson/UpdateScheduledRun", nil)
	cdc.RegisterConcrete(&MsgDeleteScheduledRun{}, "dyson/DeleteScheduledRun", nil)
	cdc.RegisterConcrete(&MsgBetterSubmitProposal{}, "dyson/BetterSubmitProposal", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateScript{},
		&MsgUpdateScript{},
		&MsgDeleteScript{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateStorage{},
		&MsgUpdateStorage{},
		&MsgDeleteStorage{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateScheduledRun{},
		&MsgUpdateScheduledRun{},
		&MsgDeleteScheduledRun{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgBetterSubmitProposal{},
	)
	// this line is used by starport scaffolding # 3
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRun{},
	)

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
