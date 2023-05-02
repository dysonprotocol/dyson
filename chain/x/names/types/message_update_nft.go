package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgUpdateNft = "update_nft"

var _ sdk.Msg = &MsgUpdateNft{}

func NewMsgUpdateNft(classOwner string, classId string, id string, uri string, urihash string) *MsgUpdateNft {
	return &MsgUpdateNft{
		ClassOwner: classOwner,
		ClassId:    classId,
		Id:         id,
		Uri:        uri,
		UriHash:    urihash,
	}
}

func (msg *MsgUpdateNft) Route() string {
	return RouterKey
}

func (msg *MsgUpdateNft) Type() string {
	return TypeMsgUpdateNft
}

func (msg *MsgUpdateNft) GetSigners() []sdk.AccAddress {
	classOwner, err := sdk.AccAddressFromBech32(msg.ClassOwner)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{classOwner}
}

func (msg *MsgUpdateNft) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateNft) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.ClassOwner)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid classOwner address (%s)", err)
	}
	// assert the uri is not too long
	if len(msg.Uri) > MAX_URI_SIZE {
		return sdkerrors.Wrapf(ErrInvalidNftUri, "uri too long (max %d)", MAX_URI_SIZE)
	}
	// assert the urihash is not too long
	if len(msg.UriHash) > MAX_URI_SIZE {
		return sdkerrors.Wrapf(ErrInvalidNftUrihash, "urihash too long (max %d)", MAX_URI_SIZE)
	}
	return nil
}
