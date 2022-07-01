// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteName } from "./types/names/tx";
import { MsgCreateName } from "./types/names/tx";
import { MsgRegister } from "./types/names/tx";
import { MsgUpdateName } from "./types/names/tx";


const types = [
  ["/names.MsgDeleteName", MsgDeleteName],
  ["/names.MsgCreateName", MsgCreateName],
  ["/names.MsgRegister", MsgRegister],
  ["/names.MsgUpdateName", MsgUpdateName],
  
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
    msgDeleteName: (data: MsgDeleteName): EncodeObject => ({ typeUrl: "/names.MsgDeleteName", value: MsgDeleteName.fromPartial( data ) }),
    msgCreateName: (data: MsgCreateName): EncodeObject => ({ typeUrl: "/names.MsgCreateName", value: MsgCreateName.fromPartial( data ) }),
    msgRegister: (data: MsgRegister): EncodeObject => ({ typeUrl: "/names.MsgRegister", value: MsgRegister.fromPartial( data ) }),
    msgUpdateName: (data: MsgUpdateName): EncodeObject => ({ typeUrl: "/names.MsgUpdateName", value: MsgUpdateName.fromPartial( data ) }),
    
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
