// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgMintCoins } from "./types/names/tx";
import { MsgForceTransfer } from "./types/names/tx";
import { MsgCreateName } from "./types/names/tx";
import { MsgReveal } from "./types/names/tx";
import { MsgBuy } from "./types/names/tx";
import { MsgBurnCoins } from "./types/names/tx";
import { MsgUpdateName } from "./types/names/tx";
import { MsgDeleteName } from "./types/names/tx";
import { MsgRegister } from "./types/names/tx";
import { MsgOfferTo } from "./types/names/tx";
import { MsgAccept } from "./types/names/tx";
import { MsgSetPriceAndExtend } from "./types/names/tx";
const types = [
    ["/names.MsgMintCoins", MsgMintCoins],
    ["/names.MsgForceTransfer", MsgForceTransfer],
    ["/names.MsgCreateName", MsgCreateName],
    ["/names.MsgReveal", MsgReveal],
    ["/names.MsgBuy", MsgBuy],
    ["/names.MsgBurnCoins", MsgBurnCoins],
    ["/names.MsgUpdateName", MsgUpdateName],
    ["/names.MsgDeleteName", MsgDeleteName],
    ["/names.MsgRegister", MsgRegister],
    ["/names.MsgOfferTo", MsgOfferTo],
    ["/names.MsgAccept", MsgAccept],
    ["/names.MsgSetPriceAndExtend", MsgSetPriceAndExtend],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgMintCoins: (data) => ({ typeUrl: "/names.MsgMintCoins", value: MsgMintCoins.fromPartial(data) }),
        msgForceTransfer: (data) => ({ typeUrl: "/names.MsgForceTransfer", value: MsgForceTransfer.fromPartial(data) }),
        msgCreateName: (data) => ({ typeUrl: "/names.MsgCreateName", value: MsgCreateName.fromPartial(data) }),
        msgReveal: (data) => ({ typeUrl: "/names.MsgReveal", value: MsgReveal.fromPartial(data) }),
        msgBuy: (data) => ({ typeUrl: "/names.MsgBuy", value: MsgBuy.fromPartial(data) }),
        msgBurnCoins: (data) => ({ typeUrl: "/names.MsgBurnCoins", value: MsgBurnCoins.fromPartial(data) }),
        msgUpdateName: (data) => ({ typeUrl: "/names.MsgUpdateName", value: MsgUpdateName.fromPartial(data) }),
        msgDeleteName: (data) => ({ typeUrl: "/names.MsgDeleteName", value: MsgDeleteName.fromPartial(data) }),
        msgRegister: (data) => ({ typeUrl: "/names.MsgRegister", value: MsgRegister.fromPartial(data) }),
        msgOfferTo: (data) => ({ typeUrl: "/names.MsgOfferTo", value: MsgOfferTo.fromPartial(data) }),
        msgAccept: (data) => ({ typeUrl: "/names.MsgAccept", value: MsgAccept.fromPartial(data) }),
        msgSetPriceAndExtend: (data) => ({ typeUrl: "/names.MsgSetPriceAndExtend", value: MsgSetPriceAndExtend.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
