import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateStorage } from "./types/dyson/tx";
import { MsgDeleteStorage } from "./types/dyson/tx";
import { MsgCreateSchedualedRun } from "./types/dyson/tx";
import { MsgUpdateSchedualedRun } from "./types/dyson/tx";
import { MsgDeleteSchedualedRun } from "./types/dyson/tx";
import { MsgCreateScript } from "./types/dyson/tx";
import { MsgUpdateScript } from "./types/dyson/tx";
import { MsgDeleteScript } from "./types/dyson/tx";
import { MsgCreateStorage } from "./types/dyson/tx";
import { MsgRun } from "./types/dyson/msgrun";
export declare const MissingWalletError: Error;
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => any;
    msgUpdateStorage: (data: MsgUpdateStorage) => EncodeObject;
    msgDeleteStorage: (data: MsgDeleteStorage) => EncodeObject;
    msgCreateSchedualedRun: (data: MsgCreateSchedualedRun) => EncodeObject;
    msgUpdateSchedualedRun: (data: MsgUpdateSchedualedRun) => EncodeObject;
    msgDeleteSchedualedRun: (data: MsgDeleteSchedualedRun) => EncodeObject;
    msgCreateScript: (data: MsgCreateScript) => EncodeObject;
    msgUpdateScript: (data: MsgUpdateScript) => EncodeObject;
    msgDeleteScript: (data: MsgDeleteScript) => EncodeObject;
    msgCreateStorage: (data: MsgCreateStorage) => EncodeObject;
    msgRun: (data: MsgRun) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
