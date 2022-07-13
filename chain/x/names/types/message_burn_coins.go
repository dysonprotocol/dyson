package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBurnCoins = "burn_coins"

var _ sdk.Msg = &MsgBurnCoins{}

func NewMsgBurnCoins(owner string, amount string, denom string) *MsgBurnCoins {
	return &MsgBurnCoins{
		Owner:  owner,
		Amount: amount,
		Denom:  denom,
	}
}

func (msg *MsgBurnCoins) Route() string {
	return RouterKey
}

func (msg *MsgBurnCoins) Type() string {
	return TypeMsgBurnCoins
}

func (msg *MsgBurnCoins) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{owner}
}

func (msg *MsgBurnCoins) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBurnCoins) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}
	return nil
}
