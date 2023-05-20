// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateGroup } from "./types/cosmos/group/v1/tx";
import { MsgCreateGroupWithPolicy } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupPolicyMetadata } from "./types/cosmos/group/v1/tx";
import { MsgVote } from "./types/cosmos/group/v1/tx";
import { MsgSubmitProposal } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupMembers } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupPolicyDecisionPolicy } from "./types/cosmos/group/v1/tx";
import { MsgExec } from "./types/cosmos/group/v1/tx";
import { MsgLeaveGroup } from "./types/cosmos/group/v1/tx";
import { MsgCreateGroupPolicy } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupPolicyAdmin } from "./types/cosmos/group/v1/tx";
import { MsgWithdrawProposal } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupMetadata } from "./types/cosmos/group/v1/tx";
import { MsgUpdateGroupAdmin } from "./types/cosmos/group/v1/tx";


const types = [
  ["/cosmos.group.v1.MsgCreateGroup", MsgCreateGroup],
  ["/cosmos.group.v1.MsgCreateGroupWithPolicy", MsgCreateGroupWithPolicy],
  ["/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", MsgUpdateGroupPolicyMetadata],
  ["/cosmos.group.v1.MsgVote", MsgVote],
  ["/cosmos.group.v1.MsgSubmitProposal", MsgSubmitProposal],
  ["/cosmos.group.v1.MsgUpdateGroupMembers", MsgUpdateGroupMembers],
  ["/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", MsgUpdateGroupPolicyDecisionPolicy],
  ["/cosmos.group.v1.MsgExec", MsgExec],
  ["/cosmos.group.v1.MsgLeaveGroup", MsgLeaveGroup],
  ["/cosmos.group.v1.MsgCreateGroupPolicy", MsgCreateGroupPolicy],
  ["/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", MsgUpdateGroupPolicyAdmin],
  ["/cosmos.group.v1.MsgWithdrawProposal", MsgWithdrawProposal],
  ["/cosmos.group.v1.MsgUpdateGroupMetadata", MsgUpdateGroupMetadata],
  ["/cosmos.group.v1.MsgUpdateGroupAdmin", MsgUpdateGroupAdmin],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateGroup: (data: MsgCreateGroup): EncodeObject => ({ typeUrl: "/cosmos.group.v1.MsgCreateGroup", value: MsgCreateGroup.fromPartial( data ) }),
    msgCreateGroupWithPolicy: (data: MsgCreateGroupWithPolicy): EncodeObject => ({ typeUrl: "/cosmos.group.v1.MsgCreateGroupWithPolicy", value: MsgCreateGroupWithPolicy.fromPartial( data ) }),
    msgUpdateGroupPolicyMetadata: (data: MsgUpdateGroupPolicyMetadata): EncodeObject => ({ typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata", value: MsgUpdateGroupPolicyMetadata.fromPartial( data ) }),
    msgVote: (data: MsgVote): EncodeObject => ({ typeUrl: "/cosmos.group.v1.MsgVote", value: MsgVote.fromPartial( data ) }),
    msgSubmitProposal: (data: MsgSubmitProposal): EncodeObject => ({ typeUrl: "/cosmos.group.v1.MsgSubmitProposal", value: MsgSubmitProposal.fromPartial( data ) }),
    msgUpdateGroupMembers: (data: MsgUpdateGroupMembers): EncodeObject => ({ typeUrl: "/cosmos.group.v1.MsgUpdateGroupMembers", value: MsgUpdateGroupMembers.fromPartial( data ) }),
    msgUpdateGroupPolicyDecisionPolicy: (data: MsgUpdateGroupPolicyDecisionPolicy): EncodeObject => ({ typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy", value: MsgUpdateGroupPolicyDecisionPolicy.fromPartial( data ) }),
    msgExec: (data: MsgExec): EncodeObject => ({ typeUrl: "/cosmos.group.v1.MsgExec", value: MsgExec.fromPartial( data ) }),
    msgLeaveGroup: (data: MsgLeaveGroup): EncodeObject => ({ typeUrl: "/cosmos.group.v1.MsgLeaveGroup", value: MsgLeaveGroup.fromPartial( data ) }),
    msgCreateGroupPolicy: (data: MsgCreateGroupPolicy): EncodeObject => ({ typeUrl: "/cosmos.group.v1.MsgCreateGroupPolicy", value: MsgCreateGroupPolicy.fromPartial( data ) }),
    msgUpdateGroupPolicyAdmin: (data: MsgUpdateGroupPolicyAdmin): EncodeObject => ({ typeUrl: "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin", value: MsgUpdateGroupPolicyAdmin.fromPartial( data ) }),
    msgWithdrawProposal: (data: MsgWithdrawProposal): EncodeObject => ({ typeUrl: "/cosmos.group.v1.MsgWithdrawProposal", value: MsgWithdrawProposal.fromPartial( data ) }),
    msgUpdateGroupMetadata: (data: MsgUpdateGroupMetadata): EncodeObject => ({ typeUrl: "/cosmos.group.v1.MsgUpdateGroupMetadata", value: MsgUpdateGroupMetadata.fromPartial( data ) }),
    msgUpdateGroupAdmin: (data: MsgUpdateGroupAdmin): EncodeObject => ({ typeUrl: "/cosmos.group.v1.MsgUpdateGroupAdmin", value: MsgUpdateGroupAdmin.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
