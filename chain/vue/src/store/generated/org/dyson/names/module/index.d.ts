import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgRegister } from "./types/names/tx";
import { MsgDeleteName } from "./types/names/tx";
import { MsgUpdateName } from "./types/names/tx";
import { MsgReveal } from "./types/names/tx";
import { MsgCreateName } from "./types/names/tx";
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
    msgRegister: (data: MsgRegister) => EncodeObject;
    msgDeleteName: (data: MsgDeleteName) => EncodeObject;
    msgUpdateName: (data: MsgUpdateName) => EncodeObject;
    msgReveal: (data: MsgReveal) => EncodeObject;
    msgCreateName: (data: MsgCreateName) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
