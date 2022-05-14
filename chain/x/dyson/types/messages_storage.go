package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateStorage{}

func NewMsgCreateStorage(creator string, index string, data string) *MsgCreateStorage {
	return &MsgCreateStorage{
		Creator: creator,
		Index:   index,
		Data:    data,
	}
}

func (msg *MsgCreateStorage) Route() string {
	return RouterKey
}

func (msg *MsgCreateStorage) Type() string {
	return "CreateStorage"
}

func (msg *MsgCreateStorage) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateStorage) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateStorage) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateStorage{}

func NewMsgUpdateStorage(creator string, index string, data string) *MsgUpdateStorage {
	return &MsgUpdateStorage{
		Creator: creator,
		Index:   index,
		Data:    data,
	}
}

func (msg *MsgUpdateStorage) Route() string {
	return RouterKey
}

func (msg *MsgUpdateStorage) Type() string {
	return "UpdateStorage"
}

func (msg *MsgUpdateStorage) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateStorage) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateStorage) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteStorage{}

func NewMsgDeleteStorage(creator string, index string) *MsgDeleteStorage {
	return &MsgDeleteStorage{
		Creator: creator,
		Index:   index,
	}
}
func (msg *MsgDeleteStorage) Route() string {
	return RouterKey
}

func (msg *MsgDeleteStorage) Type() string {
	return "DeleteStorage"
}

func (msg *MsgDeleteStorage) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteStorage) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteStorage) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
