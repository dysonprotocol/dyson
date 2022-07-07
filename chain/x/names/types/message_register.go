package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgRegister = "register"

var _ sdk.Msg = &MsgRegister{}

func NewMsgRegister(owner string, commit string, price string) *MsgRegister {
	return &MsgRegister{
		Owner:  owner,
		Commit: commit,
		Price:  price,
	}
}

func (msg *MsgRegister) Route() string {
	return RouterKey
}

func (msg *MsgRegister) Type() string {
	return TypeMsgRegister
}

func (msg *MsgRegister) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{owner}
}

func (msg *MsgRegister) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRegister) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}
	coin, err := sdk.ParseCoinNormalized(msg.Price)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid coins (%s): %s", msg.Price, err)
	}
	if coin.Denom != "dys" {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid coin denom, must be 'dys': %s", coin.Denom)
	}
	return nil
}
