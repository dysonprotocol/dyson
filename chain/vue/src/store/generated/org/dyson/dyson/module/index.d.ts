import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateScript } from "./types/dyson/tx";
import { MsgCreateStorage } from "./types/dyson/tx";
import { MsgRun } from "./types/dyson/msgrun";
import { MsgDeleteSchedualedRun } from "./types/dyson/tx";
import { MsgUpdateStorage } from "./types/dyson/tx";
import { MsgUpdateSchedualedRun } from "./types/dyson/tx";
import { MsgCreateScript } from "./types/dyson/tx";
import { MsgCreateSchedualedRun } from "./types/dyson/tx";
import { MsgDeleteStorage } from "./types/dyson/tx";
import { MsgDeleteScript } from "./types/dyson/tx";
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
    msgUpdateScript: (data: MsgUpdateScript) => EncodeObject;
    msgCreateStorage: (data: MsgCreateStorage) => EncodeObject;
    msgRun: (data: MsgRun) => EncodeObject;
    msgDeleteSchedualedRun: (data: MsgDeleteSchedualedRun) => EncodeObject;
    msgUpdateStorage: (data: MsgUpdateStorage) => EncodeObject;
    msgUpdateSchedualedRun: (data: MsgUpdateSchedualedRun) => EncodeObject;
    msgCreateScript: (data: MsgCreateScript) => EncodeObject;
    msgCreateSchedualedRun: (data: MsgCreateSchedualedRun) => EncodeObject;
    msgDeleteStorage: (data: MsgDeleteStorage) => EncodeObject;
    msgDeleteScript: (data: MsgDeleteScript) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
