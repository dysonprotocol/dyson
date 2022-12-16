package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/org/dyson/x/dyson/types"
	gov "github.com/cosmos/cosmos-sdk/x/gov/types/v1"
	govkeeper "github.com/cosmos/cosmos-sdk/x/gov/keeper"
	 

)

func (k msgServer) BetterSubmitProposal(goCtx context.Context, msg *types.MsgBetterSubmitProposal) (*types.MsgBetterSubmitProposalResponse, error) {
	//ctx := sdk.UnwrapSDKContext(goCtx)


	msgs := make([]sdk.Msg, len(msg.Messages))
	for i, anyJSON := range msg.Messages {
		var msg sdk.Msg
		err := k.cdc.UnmarshalInterfaceJSON([]byte(anyJSON), &msg)
		if err != nil {
			return nil, err
		}

		msgs[i] = msg
	}
	proposal, err := gov.NewMsgSubmitProposal(msgs, msg.InitialDeposit, msg.Proposer, msg.Metadata)
	if err != nil {
		return nil, err
	}
	govMsgServer := govkeeper.NewMsgServerImpl(k.cosmosgovv1keeper)
	resp, err := govMsgServer.SubmitProposal(goCtx, proposal)
	
	if err != nil {
		return nil, err
	}

	return &types.MsgBetterSubmitProposalResponse{ProposalId: resp.ProposalId}, nil
}
