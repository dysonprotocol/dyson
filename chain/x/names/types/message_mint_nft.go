package types

import (
	"regexp"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMintNft = "mint_nft"

const MAX_URI_SIZE = 3000
const MAX_URIHASH_SIZE = 300

var _ sdk.Msg = &MsgMintNft{}

func NewMsgMintNft(classOwner string, classId string, id string, uri string, urihash string) *MsgMintNft {
	return &MsgMintNft{
		ClassOwner: classOwner,
		ClassId:    classId,
		Id:         id,
		Uri:        uri,
		UriHash:    urihash,
	}
}

func (msg *MsgMintNft) Route() string {
	return RouterKey
}

func (msg *MsgMintNft) Type() string {
	return TypeMsgMintNft
}

func (msg *MsgMintNft) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.ClassOwner)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{owner}
}

func (msg *MsgMintNft) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMintNft) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.ClassOwner)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid classOwner address (%s)", err)
	}

	// assert the id is less than 64 characters
	if len(msg.Id) > 64 {
		return sdkerrors.Wrapf(ErrInvalidNftId, "id too long (max 64)")
	}

	pattern := "^[a-zA-Z0-9-]+$"
	match, err := regexp.MatchString(pattern, msg.Id)
	if err != nil {
		return err
	}
	if !match {
		return sdkerrors.Wrapf(ErrInvalidNftId, "id must match regex %s", pattern)
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
