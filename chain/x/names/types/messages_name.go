package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const (
	TypeMsgUpdateName = "update_name"
	TypeMsgDeleteName = "delete_name"
)

var _ sdk.Msg = &MsgUpdateName{}

func NewMsgUpdateName(
	owner string,
	name string,
	destination string,
	authorized string,

) *MsgUpdateName {
	return &MsgUpdateName{
		Owner:       owner,
		Name:        name,
		Destination: destination,
		Authorized:  authorized,
	}
}

func (msg *MsgUpdateName) Route() string {
	return RouterKey
}

func (msg *MsgUpdateName) Type() string {
	return TypeMsgUpdateName
}

func (msg *MsgUpdateName) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{owner}
}

func (msg *MsgUpdateName) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateName) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteName{}

func NewMsgDeleteName(
	owner string,
	name string,

) *MsgDeleteName {
	return &MsgDeleteName{
		Owner: owner,
		Name:  name,
	}
}
func (msg *MsgDeleteName) Route() string {
	return RouterKey
}

func (msg *MsgDeleteName) Type() string {
	return TypeMsgDeleteName
}

func (msg *MsgDeleteName) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{owner}
}

func (msg *MsgDeleteName) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteName) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}
	return nil
}
