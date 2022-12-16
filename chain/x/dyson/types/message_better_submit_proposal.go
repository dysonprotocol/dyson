package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBetterSubmitProposal = "better_submit_proposal"

var _ sdk.Msg = &MsgBetterSubmitProposal{}

func NewMsgBetterSubmitProposal(proposer string, messages []string, metadata string, initialDeposit sdk.Coins) *MsgBetterSubmitProposal {
	return &MsgBetterSubmitProposal{
		Proposer: proposer,
		Messages: messages,
		Metadata: metadata,
		InitialDeposit:  initialDeposit,
	}
}

func (msg *MsgBetterSubmitProposal) Route() string {
	return RouterKey
}

func (msg *MsgBetterSubmitProposal) Type() string {
	return TypeMsgBetterSubmitProposal
}

func (msg *MsgBetterSubmitProposal) GetSigners() []sdk.AccAddress {
	proposer, err := sdk.AccAddressFromBech32(msg.Proposer)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{proposer}
}

func (msg *MsgBetterSubmitProposal) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBetterSubmitProposal) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Proposer)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid proposer address (%s)", err)
	}
	return nil
}
