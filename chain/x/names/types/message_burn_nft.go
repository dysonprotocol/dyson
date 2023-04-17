package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBurnNft = "burn_nft"

var _ sdk.Msg = &MsgBurnNft{}

func NewMsgBurnNft(classOwner string, classId string, id string) *MsgBurnNft {
	return &MsgBurnNft{
		ClassOwner: classOwner,
		ClassId:    classId,
		Id:         id,
	}
}

func (msg *MsgBurnNft) Route() string {
	return RouterKey
}

func (msg *MsgBurnNft) Type() string {
	return TypeMsgBurnNft
}

func (msg *MsgBurnNft) GetSigners() []sdk.AccAddress {
	classOwner, err := sdk.AccAddressFromBech32(msg.ClassOwner)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{classOwner}
}

func (msg *MsgBurnNft) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBurnNft) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.ClassOwner)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid classOwner address (%s)", err)
	}
	return nil
}
