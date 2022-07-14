package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgForceTransfer = "force_transfer"

var _ sdk.Msg = &MsgForceTransfer{}

func NewMsgForceTransfer(owner string, from string, to string, amount string) *MsgForceTransfer {
	return &MsgForceTransfer{
		Owner:  owner,
		From:   from,
		To:     to,
		Amount: amount,
	}
}

func (msg *MsgForceTransfer) Route() string {
	return RouterKey
}

func (msg *MsgForceTransfer) Type() string {
	return TypeMsgForceTransfer
}

func (msg *MsgForceTransfer) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{owner}
}

func (msg *MsgForceTransfer) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgForceTransfer) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}
	_, err = sdk.AccAddressFromBech32(msg.From)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid from address (%s)", err)
	}
	_, err = sdk.AccAddressFromBech32(msg.To)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid to address (%s)", err)
	}
	return nil
}
