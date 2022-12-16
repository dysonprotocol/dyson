package types

import (
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"regexp"
	"strings"
)

const (
	TypeMsgReveal = "reveal"
	NameRegex     = `^[a-z0-9][a-z0-9-]{0,15}[.]dys$`
)

var _ sdk.Msg = &MsgReveal{}

func NewMsgReveal(owner string, name string, salt string) *MsgReveal {
	return &MsgReveal{
		Owner: owner,
		Name:  name,
		Salt:  salt,
	}
}

func (msg *MsgReveal) Route() string {
	return RouterKey
}

func (msg *MsgReveal) Type() string {
	return TypeMsgReveal
}

func (msg *MsgReveal) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{owner}
}

func (msg *MsgReveal) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func ValidateName(name string) error {
	matched, err := regexp.Match(NameRegex, []byte(name))
	if err != nil {
		return sdkerrors.Wrap(err, "Name regex error")
	}
	if !matched {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, fmt.Sprintf("name must match the regular expression: %s", NameRegex))
	}
	if strings.Contains(strings.TrimSuffix(name, ".dys"), "dys") {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, fmt.Sprintf("main name cannot contain 'dys'"))
	}

	return nil
}

func (msg *MsgReveal) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}
	return ValidateName(msg.Name)
}
