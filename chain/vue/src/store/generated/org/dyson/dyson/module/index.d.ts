import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateScript } from "./types/dyson/tx";
import { MsgUpdateSchedualedRun } from "./types/dyson/tx";
import { MsgCreateStorage } from "./types/dyson/tx";
import { MsgUpdateStorage } from "./types/dyson/tx";
import { MsgCreateScript } from "./types/dyson/tx";
import { MsgDeleteScript } from "./types/dyson/tx";
import { MsgDeleteSchedualedRun } from "./types/dyson/tx";
import { MsgCreateSchedualedRun } from "./types/dyson/tx";
import { MsgRun } from "./types/dyson/msgrun";
import { MsgDeleteStorage } from "./types/dyson/tx";
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
    msgUpdateSchedualedRun: (data: MsgUpdateSchedualedRun) => EncodeObject;
    msgCreateStorage: (data: MsgCreateStorage) => EncodeObject;
    msgUpdateStorage: (data: MsgUpdateStorage) => EncodeObject;
    msgCreateScript: (data: MsgCreateScript) => EncodeObject;
    msgDeleteScript: (data: MsgDeleteScript) => EncodeObject;
    msgDeleteSchedualedRun: (data: MsgDeleteSchedualedRun) => EncodeObject;
    msgCreateSchedualedRun: (data: MsgCreateSchedualedRun) => EncodeObject;
    msgRun: (data: MsgRun) => EncodeObject;
    msgDeleteStorage: (data: MsgDeleteStorage) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
