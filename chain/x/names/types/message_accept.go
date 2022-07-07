package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAccept = "accept"

var _ sdk.Msg = &MsgAccept{}

func NewMsgAccept(newOwner string, name string) *MsgAccept {
	return &MsgAccept{
		NewOwner: newOwner,
		Name:     name,
	}
}

func (msg *MsgAccept) Route() string {
	return RouterKey
}

func (msg *MsgAccept) Type() string {
	return TypeMsgAccept
}

func (msg *MsgAccept) GetSigners() []sdk.AccAddress {
	newOwner, err := sdk.AccAddressFromBech32(msg.NewOwner)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{newOwner}
}

func (msg *MsgAccept) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAccept) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.NewOwner)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid newOwner address (%s)", err)
	}
	return nil
}
