package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgMintNft = "mint_nft"

const MAX_DATA_SIZE = 1024
const MAX_URI_SIZE = 1024
const MAX_URIHASH_SIZE = 300

var _ sdk.Msg = &MsgMintNft{}

func NewMsgMintNft(classOwner string, classId string, id string, uri string, urihash string, data string) *MsgMintNft {
	return &MsgMintNft{
		ClassOwner: classOwner,
		ClassId:    classId,
		Id:         id,
		Uri:        uri,
		Urihash:    urihash,
		Data:       data,
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
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}
	// assert the data is not too long
	if len(msg.Data) > MAX_DATA_SIZE {
		return sdkerrors.Wrapf(ErrInvalidNftData, "data too long (max %d)", MAX_DATA_SIZE)
	}
	// assert the uri is not too long
	if len(msg.Uri) > MAX_URI_SIZE {
		return sdkerrors.Wrapf(ErrInvalidNftUri, "uri too long (max %d)", MAX_URI_SIZE)
	}
	// assert the urihash is not too long
	if len(msg.Urihash) > MAX_URI_SIZE {
		return sdkerrors.Wrapf(ErrInvalidNftUrihash, "urihash too long (max %d)", MAX_URI_SIZE)
	}

	return nil
}
