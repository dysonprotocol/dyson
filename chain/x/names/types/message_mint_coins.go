package types

import (
	"fmt"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"regexp"
)


const (
    // Make sure this matche NameRegex
	reDnmString = `[^/]*([/][a-z0-9]{1,8}){0,1}`
)

var reDnm = regexp.MustCompile(fmt.Sprintf(`^%s$`, reDnmString))

func ValidateDenom(denom string) error {
	if !reDnm.MatchString(denom) {
		return fmt.Errorf("invalid denom (%s) must match: %s", denom, reDnmString)
	}
	return nil
}

const TypeMsgMintCoins = "mint_coins"

var _ sdk.Msg = &MsgMintCoins{}

func NewMsgMintCoins(owner string, amount string) *MsgMintCoins {
	return &MsgMintCoins{
		Owner:  owner,
		Amount: amount,
	}
}

func (msg *MsgMintCoins) Route() string {
	return RouterKey
}

func (msg *MsgMintCoins) Type() string {
	return TypeMsgMintCoins
}

func (msg *MsgMintCoins) GetSigners() []sdk.AccAddress {
	owner, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{owner}
}

func (msg *MsgMintCoins) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgMintCoins) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Owner)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid owner address (%s)", err)
	}

	coin, err := sdk.ParseCoinNormalized(msg.Amount)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidCoins, "invalid coin (%s)", err)
	}
	err = ValidateDenom(coin.Denom)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidCoins, "invalid coin %s", err)
	}
	return nil
}
