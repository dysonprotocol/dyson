import { StdFee } from "@cosmjs/launchpad";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgRegister } from "./types/names/tx";
import { MsgBuy } from "./types/names/tx";
import { MsgAccept } from "./types/names/tx";
import { MsgBurnCoins } from "./types/names/tx";
import { MsgMintCoins } from "./types/names/tx";
import { MsgForceTransfer } from "./types/names/tx";
import { MsgReveal } from "./types/names/tx";
import { MsgOfferTo } from "./types/names/tx";
import { MsgDeleteName } from "./types/names/tx";
import { MsgSetPriceAndExtend } from "./types/names/tx";
import { MsgUpdateName } from "./types/names/tx";
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
    msgBuy: (data: MsgBuy) => EncodeObject;
    msgAccept: (data: MsgAccept) => EncodeObject;
    msgBurnCoins: (data: MsgBurnCoins) => EncodeObject;
    msgMintCoins: (data: MsgMintCoins) => EncodeObject;
    msgForceTransfer: (data: MsgForceTransfer) => EncodeObject;
    msgReveal: (data: MsgReveal) => EncodeObject;
    msgOfferTo: (data: MsgOfferTo) => EncodeObject;
    msgDeleteName: (data: MsgDeleteName) => EncodeObject;
    msgSetPriceAndExtend: (data: MsgSetPriceAndExtend) => EncodeObject;
    msgUpdateName: (data: MsgUpdateName) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
