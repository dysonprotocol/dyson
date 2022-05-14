package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateScript{}

func NewMsgCreateScript(creator string, code string) *MsgCreateScript {
	return &MsgCreateScript{
		Creator: creator,
		Code:    code,
	}
}

func (msg *MsgCreateScript) Route() string {
	return RouterKey
}

func (msg *MsgCreateScript) Type() string {
	return "CreateScript"
}

func (msg *MsgCreateScript) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateScript) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateScript) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateScript{}

func NewMsgUpdateScript(creator string, code string) *MsgUpdateScript {
	return &MsgUpdateScript{
		Creator: creator,
		Code:    code,
	}
}

func (msg *MsgUpdateScript) Route() string {
	return RouterKey
}

func (msg *MsgUpdateScript) Type() string {
	return "UpdateScript"
}

func (msg *MsgUpdateScript) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateScript) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateScript) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteScript{}

func NewMsgDeleteScript(creator string) *MsgDeleteScript {
	return &MsgDeleteScript{
		Creator: creator,
	}
}
func (msg *MsgDeleteScript) Route() string {
	return RouterKey
}

func (msg *MsgDeleteScript) Type() string {
	return "DeleteScript"
}

func (msg *MsgDeleteScript) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteScript) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteScript) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
