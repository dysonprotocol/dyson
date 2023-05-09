package types

import (
	fmt "fmt"
	"regexp"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSetNftClass = "set_nft_class"

var _ sdk.Msg = &MsgSetNftClass{}

func ValidateNftClassId(id string) error {
	pattern := `^([a-z0-9-]{1,100}\.)?([a-z0-9-]+)\.dys$`
	m, err := regexp.MatchString(pattern, id)
	if err != nil {
		return err
	}
	if !m {
		return fmt.Errorf("invalid class id (%s) must match regex: %s", id, pattern)

	}

	return nil
}
func NewMsgSetNftClass(owner string, id string, name string, symbol string, description string, uri string, urihash string) *MsgSetNftClass {
	return &MsgSetNftClass{
		Owner:       owner,
		Id:          id,
		Name:        name,
		Symbol:      symbol,
		Description: description,
		Uri:         uri,
		UriHash:     urihash,
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
	// validate the id is valid
	err = ValidateNftClassId(msg.Id)
	if err != nil {
		return err
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
