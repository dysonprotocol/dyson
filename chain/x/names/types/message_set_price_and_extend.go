package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSetPriceAndExtend = "set_price_and_extend"

var _ sdk.Msg = &MsgSetPriceAndExtend{}

func NewMsgSetPriceAndExtend(owner string, name string, price string) *MsgSetPriceAndExtend {
	return &MsgSetPriceAndExtend{
		Owner: owner,
		Name:  name,
		Price: price,
	}
}

func (msg *MsgSetPriceAndExtend) Route() string {
	return RouterKey
}

func (msg *MsgSetPriceAndExtend) Type() string {
	return TypeMsgSetPriceAndExtend
}

func (msg *MsgSetPriceAndExtend) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSetPriceAndExtend) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSetPriceAndExtend) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}
	return nil
}
