package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSetNftClass = "set_nft_class"

var _ sdk.Msg = &MsgSetNftClass{}

func NewMsgSetNftClass(owner string, id string, name string, symbol string, description string, uri string, urihash string) *MsgSetNftClass {
	return &MsgSetNftClass{
		Owner:       owner,
		Id:          id,
		Name:        name,
		Symbol:      symbol,
		Description: description,
		Uri:         uri,
		Urihash:     urihash,
	}
}

func (msg *MsgSetNftClass) Route() string {
	return RouterKey
}

func (msg *MsgSetNftClass) Type() string {
	return TypeMsgSetNftClass
}

func (msg *MsgSetNftClass) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{owner}
}

func (msg *MsgSetNftClass) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSetNftClass) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}
	return nil
}
