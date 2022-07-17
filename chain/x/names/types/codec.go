package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgRegister{}, "names/Register", nil)
	cdc.RegisterConcrete(&MsgUpdateName{}, "names/UpdateName", nil)
	cdc.RegisterConcrete(&MsgDeleteName{}, "names/DeleteName", nil)
	cdc.RegisterConcrete(&MsgReveal{}, "names/Reveal", nil)
	cdc.RegisterConcrete(&MsgSetPriceAndExtend{}, "names/SetPriceAndExtend", nil)
	cdc.RegisterConcrete(&MsgOfferTo{}, "names/OfferTo", nil)
	cdc.RegisterConcrete(&MsgAccept{}, "names/Accept", nil)
	cdc.RegisterConcrete(&MsgBuy{}, "names/Buy", nil)
	cdc.RegisterConcrete(&MsgMintCoins{}, "names/MintCoins", nil)
	cdc.RegisterConcrete(&MsgBurnCoins{}, "names/BurnCoins", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgRegister{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUpdateName{},
		&MsgDeleteName{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgReveal{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSetPriceAndExtend{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgOfferTo{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgAccept{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgBuy{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgMintCoins{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgBurnCoins{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
