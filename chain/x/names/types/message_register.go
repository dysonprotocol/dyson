package types

import (
	"encoding/hex"
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

	_, err = hex.DecodeString(msg.Commit)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "Invalid commit hash (%s) should be Shake(owner+name+salt) with the 16 bytes output encoded as hex", err)
	}
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}
	coin, err := sdk.ParseCoinNormalized(msg.Price)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid coins (%s) should be a number ending in 'dys': %s", msg.Price, err)
	}
	if coin.Amount < 100 {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid coin amount, must be greater than 100': %s", coin.Amount)
	}
	if coin.Denom != "dys" {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "invalid coin denom, must be 'dys': %s", coin.Denom)
	}
	return nil
}
