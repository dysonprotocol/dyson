package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateSchedualedRun{}

func NewMsgCreateSchedualedRun(
	creator string,
	height uint64,
	gas uint64,
	address string,
	functionName string,
	args string,
	kwargs string,
	extraLines string,
	coins string) *MsgCreateSchedualedRun {
	return &MsgCreateSchedualedRun{
		Creator: creator,
		Height:  height,
		Gas:     gas,
		Msg: NewMsgRun(creator,
			address,
			functionName,
			args, kwargs,
			extraLines,
			coins),
	}
}

func (msg *MsgCreateSchedualedRun) Route() string {
	return RouterKey
}

func (msg *MsgCreateSchedualedRun) Type() string {
	return "CreateSchedualedRun"
}

func (msg *MsgCreateSchedualedRun) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateSchedualedRun) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateSchedualedRun) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateSchedualedRun{}

func NewMsgUpdateSchedualedRun(
	creator string,
	index string,

) *MsgUpdateSchedualedRun {
	return &MsgUpdateSchedualedRun{
		Creator: creator,
		Index:   index,
	}
}

func (msg *MsgUpdateSchedualedRun) Route() string {
	return RouterKey
}

func (msg *MsgUpdateSchedualedRun) Type() string {
	return "UpdateSchedualedRun"
}

func (msg *MsgUpdateSchedualedRun) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateSchedualedRun) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateSchedualedRun) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteSchedualedRun{}

func NewMsgDeleteSchedualedRun(
	creator string,
	index string,

) *MsgDeleteSchedualedRun {
	return &MsgDeleteSchedualedRun{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteSchedualedRun) Route() string {
	return RouterKey
}

func (msg *MsgDeleteSchedualedRun) Type() string {
	return "DeleteSchedualedRun"
}

func (msg *MsgDeleteSchedualedRun) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteSchedualedRun) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteSchedualedRun) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
