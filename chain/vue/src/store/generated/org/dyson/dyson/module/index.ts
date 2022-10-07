// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteStorage } from "./types/dyson/tx";
import { MsgUpdateStorage } from "./types/dyson/tx";
import { MsgCreateStorage } from "./types/dyson/tx";
import { MsgRun } from "./types/dyson/msgrun";
import { MsgCreateScheduledRun } from "./types/dyson/tx";
import { MsgUpdateScript } from "./types/dyson/tx";
import { MsgDeleteScheduledRun } from "./types/dyson/tx";
import { MsgCreateScript } from "./types/dyson/tx";
import { MsgUpdateScheduledRun } from "./types/dyson/tx";
import { MsgDeleteScript } from "./types/dyson/tx";


const types = [
  ["/dyson.MsgDeleteStorage", MsgDeleteStorage],
  ["/dyson.MsgUpdateStorage", MsgUpdateStorage],
  ["/dyson.MsgCreateStorage", MsgCreateStorage],
  ["/dyson.MsgRun", MsgRun],
  ["/dyson.MsgCreateScheduledRun", MsgCreateScheduledRun],
  ["/dyson.MsgUpdateScript", MsgUpdateScript],
  ["/dyson.MsgDeleteScheduledRun", MsgDeleteScheduledRun],
  ["/dyson.MsgCreateScript", MsgCreateScript],
  ["/dyson.MsgUpdateScheduledRun", MsgUpdateScheduledRun],
  ["/dyson.MsgDeleteScript", MsgDeleteScript],
  
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
    msgDeleteStorage: (data: MsgDeleteStorage): EncodeObject => ({ typeUrl: "/dyson.MsgDeleteStorage", value: MsgDeleteStorage.fromPartial( data ) }),
    msgUpdateStorage: (data: MsgUpdateStorage): EncodeObject => ({ typeUrl: "/dyson.MsgUpdateStorage", value: MsgUpdateStorage.fromPartial( data ) }),
    msgCreateStorage: (data: MsgCreateStorage): EncodeObject => ({ typeUrl: "/dyson.MsgCreateStorage", value: MsgCreateStorage.fromPartial( data ) }),
    msgRun: (data: MsgRun): EncodeObject => ({ typeUrl: "/dyson.MsgRun", value: MsgRun.fromPartial( data ) }),
    msgCreateScheduledRun: (data: MsgCreateScheduledRun): EncodeObject => ({ typeUrl: "/dyson.MsgCreateScheduledRun", value: MsgCreateScheduledRun.fromPartial( data ) }),
    msgUpdateScript: (data: MsgUpdateScript): EncodeObject => ({ typeUrl: "/dyson.MsgUpdateScript", value: MsgUpdateScript.fromPartial( data ) }),
    msgDeleteScheduledRun: (data: MsgDeleteScheduledRun): EncodeObject => ({ typeUrl: "/dyson.MsgDeleteScheduledRun", value: MsgDeleteScheduledRun.fromPartial( data ) }),
    msgCreateScript: (data: MsgCreateScript): EncodeObject => ({ typeUrl: "/dyson.MsgCreateScript", value: MsgCreateScript.fromPartial( data ) }),
    msgUpdateScheduledRun: (data: MsgUpdateScheduledRun): EncodeObject => ({ typeUrl: "/dyson.MsgUpdateScheduledRun", value: MsgUpdateScheduledRun.fromPartial( data ) }),
    msgDeleteScript: (data: MsgDeleteScript): EncodeObject => ({ typeUrl: "/dyson.MsgDeleteScript", value: MsgDeleteScript.fromPartial( data ) }),
    
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
