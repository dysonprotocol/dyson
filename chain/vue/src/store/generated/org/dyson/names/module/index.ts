// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgBuy } from "./types/names/tx";
import { MsgDeleteName } from "./types/names/tx";
import { MsgAccept } from "./types/names/tx";
import { MsgSetPriceAndExtend } from "./types/names/tx";
import { MsgSetNftClass } from "./types/names/tx";
import { MsgOfferTo } from "./types/names/tx";
import { MsgMintCoins } from "./types/names/tx";
import { MsgUpdateName } from "./types/names/tx";
import { MsgUpdateNft } from "./types/names/tx";
import { MsgBurnCoins } from "./types/names/tx";
import { MsgRegister } from "./types/names/tx";
import { MsgReveal } from "./types/names/tx";
import { MsgMintNft } from "./types/names/tx";
import { MsgBurnNft } from "./types/names/tx";


const types = [
  ["/names.MsgBuy", MsgBuy],
  ["/names.MsgDeleteName", MsgDeleteName],
  ["/names.MsgAccept", MsgAccept],
  ["/names.MsgSetPriceAndExtend", MsgSetPriceAndExtend],
  ["/names.MsgSetNftClass", MsgSetNftClass],
  ["/names.MsgOfferTo", MsgOfferTo],
  ["/names.MsgMintCoins", MsgMintCoins],
  ["/names.MsgUpdateName", MsgUpdateName],
  ["/names.MsgUpdateNft", MsgUpdateNft],
  ["/names.MsgBurnCoins", MsgBurnCoins],
  ["/names.MsgRegister", MsgRegister],
  ["/names.MsgReveal", MsgReveal],
  ["/names.MsgMintNft", MsgMintNft],
  ["/names.MsgBurnNft", MsgBurnNft],
  
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
    msgBuy: (data: MsgBuy): EncodeObject => ({ typeUrl: "/names.MsgBuy", value: MsgBuy.fromPartial( data ) }),
    msgDeleteName: (data: MsgDeleteName): EncodeObject => ({ typeUrl: "/names.MsgDeleteName", value: MsgDeleteName.fromPartial( data ) }),
    msgAccept: (data: MsgAccept): EncodeObject => ({ typeUrl: "/names.MsgAccept", value: MsgAccept.fromPartial( data ) }),
    msgSetPriceAndExtend: (data: MsgSetPriceAndExtend): EncodeObject => ({ typeUrl: "/names.MsgSetPriceAndExtend", value: MsgSetPriceAndExtend.fromPartial( data ) }),
    msgSetNftClass: (data: MsgSetNftClass): EncodeObject => ({ typeUrl: "/names.MsgSetNftClass", value: MsgSetNftClass.fromPartial( data ) }),
    msgOfferTo: (data: MsgOfferTo): EncodeObject => ({ typeUrl: "/names.MsgOfferTo", value: MsgOfferTo.fromPartial( data ) }),
    msgMintCoins: (data: MsgMintCoins): EncodeObject => ({ typeUrl: "/names.MsgMintCoins", value: MsgMintCoins.fromPartial( data ) }),
    msgUpdateName: (data: MsgUpdateName): EncodeObject => ({ typeUrl: "/names.MsgUpdateName", value: MsgUpdateName.fromPartial( data ) }),
    msgUpdateNft: (data: MsgUpdateNft): EncodeObject => ({ typeUrl: "/names.MsgUpdateNft", value: MsgUpdateNft.fromPartial( data ) }),
    msgBurnCoins: (data: MsgBurnCoins): EncodeObject => ({ typeUrl: "/names.MsgBurnCoins", value: MsgBurnCoins.fromPartial( data ) }),
    msgRegister: (data: MsgRegister): EncodeObject => ({ typeUrl: "/names.MsgRegister", value: MsgRegister.fromPartial( data ) }),
    msgReveal: (data: MsgReveal): EncodeObject => ({ typeUrl: "/names.MsgReveal", value: MsgReveal.fromPartial( data ) }),
    msgMintNft: (data: MsgMintNft): EncodeObject => ({ typeUrl: "/names.MsgMintNft", value: MsgMintNft.fromPartial( data ) }),
    msgBurnNft: (data: MsgBurnNft): EncodeObject => ({ typeUrl: "/names.MsgBurnNft", value: MsgBurnNft.fromPartial( data ) }),
    
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
