import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgBuy } from "./types/names/tx";
import { MsgBurnCoins } from "./types/names/tx";
import { MsgOfferTo } from "./types/names/tx";
import { MsgAccept } from "./types/names/tx";
import { MsgDeleteName } from "./types/names/tx";
import { MsgForceTransfer } from "./types/names/tx";
import { MsgUpdateName } from "./types/names/tx";
import { MsgCreateName } from "./types/names/tx";
import { MsgReveal } from "./types/names/tx";
import { MsgMintCoins } from "./types/names/tx";
import { MsgRegister } from "./types/names/tx";
import { MsgSetPriceAndExtend } from "./types/names/tx";
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
    msgBuy: (data: MsgBuy) => EncodeObject;
    msgBurnCoins: (data: MsgBurnCoins) => EncodeObject;
    msgOfferTo: (data: MsgOfferTo) => EncodeObject;
    msgAccept: (data: MsgAccept) => EncodeObject;
    msgDeleteName: (data: MsgDeleteName) => EncodeObject;
    msgForceTransfer: (data: MsgForceTransfer) => EncodeObject;
    msgUpdateName: (data: MsgUpdateName) => EncodeObject;
    msgCreateName: (data: MsgCreateName) => EncodeObject;
    msgReveal: (data: MsgReveal) => EncodeObject;
    msgMintCoins: (data: MsgMintCoins) => EncodeObject;
    msgRegister: (data: MsgRegister) => EncodeObject;
    msgSetPriceAndExtend: (data: MsgSetPriceAndExtend) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
