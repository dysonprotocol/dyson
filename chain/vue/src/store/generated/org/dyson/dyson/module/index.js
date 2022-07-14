// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteSchedualedRun } from "./types/dyson/tx";
import { MsgRun } from "./types/dyson/msgrun";
import { MsgCreateSchedualedRun } from "./types/dyson/tx";
import { MsgUpdateStorage } from "./types/dyson/tx";
import { MsgDeleteStorage } from "./types/dyson/tx";
import { MsgCreateScript } from "./types/dyson/tx";
import { MsgUpdateScript } from "./types/dyson/tx";
import { MsgUpdateSchedualedRun } from "./types/dyson/tx";
import { MsgCreateStorage } from "./types/dyson/tx";
import { MsgDeleteScript } from "./types/dyson/tx";
const types = [
    ["/dyson.MsgDeleteSchedualedRun", MsgDeleteSchedualedRun],
    ["/dyson.MsgRun", MsgRun],
    ["/dyson.MsgCreateSchedualedRun", MsgCreateSchedualedRun],
    ["/dyson.MsgUpdateStorage", MsgUpdateStorage],
    ["/dyson.MsgDeleteStorage", MsgDeleteStorage],
    ["/dyson.MsgCreateScript", MsgCreateScript],
    ["/dyson.MsgUpdateScript", MsgUpdateScript],
    ["/dyson.MsgUpdateSchedualedRun", MsgUpdateSchedualedRun],
    ["/dyson.MsgCreateStorage", MsgCreateStorage],
    ["/dyson.MsgDeleteScript", MsgDeleteScript],
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
        msgDeleteSchedualedRun: (data) => ({ typeUrl: "/dyson.MsgDeleteSchedualedRun", value: MsgDeleteSchedualedRun.fromPartial(data) }),
        msgRun: (data) => ({ typeUrl: "/dyson.MsgRun", value: MsgRun.fromPartial(data) }),
        msgCreateSchedualedRun: (data) => ({ typeUrl: "/dyson.MsgCreateSchedualedRun", value: MsgCreateSchedualedRun.fromPartial(data) }),
        msgUpdateStorage: (data) => ({ typeUrl: "/dyson.MsgUpdateStorage", value: MsgUpdateStorage.fromPartial(data) }),
        msgDeleteStorage: (data) => ({ typeUrl: "/dyson.MsgDeleteStorage", value: MsgDeleteStorage.fromPartial(data) }),
        msgCreateScript: (data) => ({ typeUrl: "/dyson.MsgCreateScript", value: MsgCreateScript.fromPartial(data) }),
        msgUpdateScript: (data) => ({ typeUrl: "/dyson.MsgUpdateScript", value: MsgUpdateScript.fromPartial(data) }),
        msgUpdateSchedualedRun: (data) => ({ typeUrl: "/dyson.MsgUpdateSchedualedRun", value: MsgUpdateSchedualedRun.fromPartial(data) }),
        msgCreateStorage: (data) => ({ typeUrl: "/dyson.MsgCreateStorage", value: MsgCreateStorage.fromPartial(data) }),
        msgDeleteScript: (data) => ({ typeUrl: "/dyson.MsgDeleteScript", value: MsgDeleteScript.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
