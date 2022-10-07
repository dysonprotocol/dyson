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
	NameRegex     = `^[a-z][a-z0-9-]{1,62}[a-z0-9]$`
)

var ForbiddenNames = [...]string{"ibc", "dys", "dyson", "root", "admin", "www", "api", "docs", "sybil", "coin"}

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
	if strings.Contains(name, "dys") {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, fmt.Sprintf("name must not contain the substring 'dys'"))
	}
	for _, v := range ForbiddenNames {
		if v == name {
			return sdkerrors.Wrapf(sdkerrors.ErrInvalidRequest, "name is forbidden: %s", name)
		}
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
