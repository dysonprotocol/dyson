package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgRun{}

func NewMsgRun(creator string, address string, functionName string, args string, kwargs string, extraLines string, coins string) *MsgRun {
	return &MsgRun{
		Creator:      creator,
		Address:      address,
		FunctionName: functionName,
		Args:         args,
		Kwargs:       kwargs,
		ExtraLines:   extraLines,
		Coins:        coins,
	}
}

func (msg *MsgRun) Route() string {
	return RouterKey
}

func (msg *MsgRun) Type() string {
	return "Run"
}

func (msg *MsgRun) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgRun) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgRun) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}

	_, err = sdk.AccAddressFromBech32(msg.Address)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid script address (%s)", err)
	}
	if msg.Creator != msg.Address {
		if msg.ExtraLines != "" {
			return sdkerrors.Wrapf(ErrorExtraLinesOrExternalScript, "Cannot send extraLines when calling different script")
		}
	}

	return nil
}
