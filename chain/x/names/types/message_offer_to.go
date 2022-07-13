package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgOfferTo = "offer_to"

var _ sdk.Msg = &MsgOfferTo{}

func NewMsgOfferTo(owner string, newOwner string) *MsgOfferTo {
	return &MsgOfferTo{
		Owner:    owner,
		NewOwner: newOwner,
	}
}

func (msg *MsgOfferTo) Route() string {
	return RouterKey
}

func (msg *MsgOfferTo) Type() string {
	return TypeMsgOfferTo
}

func (msg *MsgOfferTo) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{owner}
}

func (msg *MsgOfferTo) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgOfferTo) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}
	return nil
}
