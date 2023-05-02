package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateScheduledRun{}

func NewMsgCreateScheduledRun(
	creator string,
	height uint64,
	gas uint64,
	address string,
	functionName string,
	args string,
	kwargs string,
	extraLines string,
	coins string,
	nfts string) *MsgCreateScheduledRun {
	return &MsgCreateScheduledRun{
		Creator: creator,
		Height:  height,
		Gas:     gas,
		Msg: NewMsgRun(creator,
			address,
			functionName,
			args, kwargs,
			extraLines,
			coins,
			nfts),
	}
}

func (msg *MsgCreateScheduledRun) Route() string {
	return RouterKey
}

func (msg *MsgCreateScheduledRun) Type() string {
	return "CreateScheduledRun"
}

func (msg *MsgCreateScheduledRun) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateScheduledRun) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateScheduledRun) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Gas < 1 {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid gas")
	}
	if msg.Msg == nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid msg")
	}
	err = msg.Msg.ValidateBasic()
	if err != nil {
		return err
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateScheduledRun{}

func NewMsgUpdateScheduledRun(
	creator string,
	index string,

) *MsgUpdateScheduledRun {
	return &MsgUpdateScheduledRun{
		Creator: creator,
		Index:   index,
	}
}

func (msg *MsgUpdateScheduledRun) Route() string {
	return RouterKey
}

func (msg *MsgUpdateScheduledRun) Type() string {
	return "UpdateScheduledRun"
}

func (msg *MsgUpdateScheduledRun) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateScheduledRun) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateScheduledRun) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Msg == nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid msg")
	}
	err = msg.Msg.ValidateBasic()
	if err != nil {
		return err
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteScheduledRun{}

func NewMsgDeleteScheduledRun(
	creator string,
	index string,

) *MsgDeleteScheduledRun {
	return &MsgDeleteScheduledRun{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteScheduledRun) Route() string {
	return RouterKey
}

func (msg *MsgDeleteScheduledRun) Type() string {
	return "DeleteScheduledRun"
}

func (msg *MsgDeleteScheduledRun) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteScheduledRun) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteScheduledRun) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
