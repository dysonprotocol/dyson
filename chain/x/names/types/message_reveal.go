package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgReveal = "reveal"

var _ sdk.Msg = &MsgReveal{}

func NewMsgReveal(creator string, name string, salt string) *MsgReveal {
	return &MsgReveal{
		Creator: creator,
		Name:    name,
		Salt:    salt,
	}
}

func (msg *MsgReveal) Route() string {
	return RouterKey
}

func (msg *MsgReveal) Type() string {
	return TypeMsgReveal
}

func (msg *MsgReveal) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgReveal) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgReveal) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
