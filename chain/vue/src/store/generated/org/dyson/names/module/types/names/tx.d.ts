import { Reader, Writer } from 'protobufjs/minimal';
import { Name } from '../names/name';
export declare const protobufPackage = "names";
export interface MsgRegister {
    owner: string;
    /** The Shake256(owner+name+salt) hexdigest */
    commit: string;
    /** The price that this name is valued at and can be purchaced for. The yearly fee is 1% of this price. */
    price: string;
}
export interface MsgRegisterResponse {
    /** fee paid which is 1% of the price */
    fee: string;
    /** when this name expires */
    expires: Date | undefined;
}
export interface MsgUpdateName {
    owner: string;
    name: string;
    destination: string;
    price: string;
    expires: Date | undefined;
    authorized: string;
    commit: string;
    salt: string;
}
export interface MsgUpdateNameResponse {
}
export interface MsgDeleteName {
    owner: string;
    name: string;
}
export interface MsgDeleteNameResponse {
}
export interface MsgReveal {
    owner: string;
    name: string;
    salt: string;
}
export interface MsgRevealResponse {
    name: Name | undefined;
}
export interface MsgSetPriceAndExtend {
    owner: string;
    name: string;
    price: string;
}
export interface MsgSetPriceAndExtendResponse {
    expiry: Date | undefined;
}
export interface MsgOfferTo {
    owner: string;
    name: string;
    newOwner: string;
}
export interface MsgOfferToResponse {
}
export interface MsgAccept {
    newOwner: string;
    name: string;
}
export interface MsgAcceptResponse {
}
export interface MsgBuy {
    buyer: string;
    name: string;
}
export interface MsgBuyResponse {
}
export interface MsgMintCoins {
    owner: string;
    amount: string;
    denom: string;
}
export interface MsgMintCoinsResponse {
}
export interface MsgBurnCoins {
    owner: string;
    amount: string;
    denom: string;
}
export interface MsgBurnCoinsResponse {
}
export interface MsgForceTransfer {
    owner: string;
    from: string;
    to: string;
    amount: string;
    denom: string;
}
export interface MsgForceTransferResponse {
}
export declare const MsgRegister: {
    encode(message: MsgRegister, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRegister;
    fromJSON(object: any): MsgRegister;
    toJSON(message: MsgRegister): unknown;
    fromPartial(object: DeepPartial<MsgRegister>): MsgRegister;
};
export declare const MsgRegisterResponse: {
    encode(message: MsgRegisterResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRegisterResponse;
    fromJSON(object: any): MsgRegisterResponse;
    toJSON(message: MsgRegisterResponse): unknown;
    fromPartial(object: DeepPartial<MsgRegisterResponse>): MsgRegisterResponse;
};
export declare const MsgUpdateName: {
    encode(message: MsgUpdateName, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateName;
    fromJSON(object: any): MsgUpdateName;
    toJSON(message: MsgUpdateName): unknown;
    fromPartial(object: DeepPartial<MsgUpdateName>): MsgUpdateName;
};
export declare const MsgUpdateNameResponse: {
    encode(_: MsgUpdateNameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateNameResponse;
    fromJSON(_: any): MsgUpdateNameResponse;
    toJSON(_: MsgUpdateNameResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateNameResponse>): MsgUpdateNameResponse;
};
export declare const MsgDeleteName: {
    encode(message: MsgDeleteName, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteName;
    fromJSON(object: any): MsgDeleteName;
    toJSON(message: MsgDeleteName): unknown;
    fromPartial(object: DeepPartial<MsgDeleteName>): MsgDeleteName;
};
export declare const MsgDeleteNameResponse: {
    encode(_: MsgDeleteNameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteNameResponse;
    fromJSON(_: any): MsgDeleteNameResponse;
    toJSON(_: MsgDeleteNameResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteNameResponse>): MsgDeleteNameResponse;
};
export declare const MsgReveal: {
    encode(message: MsgReveal, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgReveal;
    fromJSON(object: any): MsgReveal;
    toJSON(message: MsgReveal): unknown;
    fromPartial(object: DeepPartial<MsgReveal>): MsgReveal;
};
export declare const MsgRevealResponse: {
    encode(message: MsgRevealResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRevealResponse;
    fromJSON(object: any): MsgRevealResponse;
    toJSON(message: MsgRevealResponse): unknown;
    fromPartial(object: DeepPartial<MsgRevealResponse>): MsgRevealResponse;
};
export declare const MsgSetPriceAndExtend: {
    encode(message: MsgSetPriceAndExtend, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetPriceAndExtend;
    fromJSON(object: any): MsgSetPriceAndExtend;
    toJSON(message: MsgSetPriceAndExtend): unknown;
    fromPartial(object: DeepPartial<MsgSetPriceAndExtend>): MsgSetPriceAndExtend;
};
export declare const MsgSetPriceAndExtendResponse: {
    encode(message: MsgSetPriceAndExtendResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetPriceAndExtendResponse;
    fromJSON(object: any): MsgSetPriceAndExtendResponse;
    toJSON(message: MsgSetPriceAndExtendResponse): unknown;
    fromPartial(object: DeepPartial<MsgSetPriceAndExtendResponse>): MsgSetPriceAndExtendResponse;
};
export declare const MsgOfferTo: {
    encode(message: MsgOfferTo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgOfferTo;
    fromJSON(object: any): MsgOfferTo;
    toJSON(message: MsgOfferTo): unknown;
    fromPartial(object: DeepPartial<MsgOfferTo>): MsgOfferTo;
};
export declare const MsgOfferToResponse: {
    encode(_: MsgOfferToResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgOfferToResponse;
    fromJSON(_: any): MsgOfferToResponse;
    toJSON(_: MsgOfferToResponse): unknown;
    fromPartial(_: DeepPartial<MsgOfferToResponse>): MsgOfferToResponse;
};
export declare const MsgAccept: {
    encode(message: MsgAccept, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAccept;
    fromJSON(object: any): MsgAccept;
    toJSON(message: MsgAccept): unknown;
    fromPartial(object: DeepPartial<MsgAccept>): MsgAccept;
};
export declare const MsgAcceptResponse: {
    encode(_: MsgAcceptResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAcceptResponse;
    fromJSON(_: any): MsgAcceptResponse;
    toJSON(_: MsgAcceptResponse): unknown;
    fromPartial(_: DeepPartial<MsgAcceptResponse>): MsgAcceptResponse;
};
export declare const MsgBuy: {
    encode(message: MsgBuy, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuy;
    fromJSON(object: any): MsgBuy;
    toJSON(message: MsgBuy): unknown;
    fromPartial(object: DeepPartial<MsgBuy>): MsgBuy;
};
export declare const MsgBuyResponse: {
    encode(_: MsgBuyResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBuyResponse;
    fromJSON(_: any): MsgBuyResponse;
    toJSON(_: MsgBuyResponse): unknown;
    fromPartial(_: DeepPartial<MsgBuyResponse>): MsgBuyResponse;
};
export declare const MsgMintCoins: {
    encode(message: MsgMintCoins, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMintCoins;
    fromJSON(object: any): MsgMintCoins;
    toJSON(message: MsgMintCoins): unknown;
    fromPartial(object: DeepPartial<MsgMintCoins>): MsgMintCoins;
};
export declare const MsgMintCoinsResponse: {
    encode(_: MsgMintCoinsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgMintCoinsResponse;
    fromJSON(_: any): MsgMintCoinsResponse;
    toJSON(_: MsgMintCoinsResponse): unknown;
    fromPartial(_: DeepPartial<MsgMintCoinsResponse>): MsgMintCoinsResponse;
};
export declare const MsgBurnCoins: {
    encode(message: MsgBurnCoins, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBurnCoins;
    fromJSON(object: any): MsgBurnCoins;
    toJSON(message: MsgBurnCoins): unknown;
    fromPartial(object: DeepPartial<MsgBurnCoins>): MsgBurnCoins;
};
export declare const MsgBurnCoinsResponse: {
    encode(_: MsgBurnCoinsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgBurnCoinsResponse;
    fromJSON(_: any): MsgBurnCoinsResponse;
    toJSON(_: MsgBurnCoinsResponse): unknown;
    fromPartial(_: DeepPartial<MsgBurnCoinsResponse>): MsgBurnCoinsResponse;
};
export declare const MsgForceTransfer: {
    encode(message: MsgForceTransfer, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgForceTransfer;
    fromJSON(object: any): MsgForceTransfer;
    toJSON(message: MsgForceTransfer): unknown;
    fromPartial(object: DeepPartial<MsgForceTransfer>): MsgForceTransfer;
};
export declare const MsgForceTransferResponse: {
    encode(_: MsgForceTransferResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgForceTransferResponse;
    fromJSON(_: any): MsgForceTransferResponse;
    toJSON(_: MsgForceTransferResponse): unknown;
    fromPartial(_: DeepPartial<MsgForceTransferResponse>): MsgForceTransferResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    Register(request: MsgRegister): Promise<MsgRegisterResponse>;
    UpdateName(request: MsgUpdateName): Promise<MsgUpdateNameResponse>;
    DeleteName(request: MsgDeleteName): Promise<MsgDeleteNameResponse>;
    Reveal(request: MsgReveal): Promise<MsgRevealResponse>;
    SetPriceAndExtend(request: MsgSetPriceAndExtend): Promise<MsgSetPriceAndExtendResponse>;
    OfferTo(request: MsgOfferTo): Promise<MsgOfferToResponse>;
    Accept(request: MsgAccept): Promise<MsgAcceptResponse>;
    Buy(request: MsgBuy): Promise<MsgBuyResponse>;
    MintCoins(request: MsgMintCoins): Promise<MsgMintCoinsResponse>;
    BurnCoins(request: MsgBurnCoins): Promise<MsgBurnCoinsResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    ForceTransfer(request: MsgForceTransfer): Promise<MsgForceTransferResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    Register(request: MsgRegister): Promise<MsgRegisterResponse>;
    UpdateName(request: MsgUpdateName): Promise<MsgUpdateNameResponse>;
    DeleteName(request: MsgDeleteName): Promise<MsgDeleteNameResponse>;
    Reveal(request: MsgReveal): Promise<MsgRevealResponse>;
    SetPriceAndExtend(request: MsgSetPriceAndExtend): Promise<MsgSetPriceAndExtendResponse>;
    OfferTo(request: MsgOfferTo): Promise<MsgOfferToResponse>;
    Accept(request: MsgAccept): Promise<MsgAcceptResponse>;
    Buy(request: MsgBuy): Promise<MsgBuyResponse>;
    MintCoins(request: MsgMintCoins): Promise<MsgMintCoinsResponse>;
    BurnCoins(request: MsgBurnCoins): Promise<MsgBurnCoinsResponse>;
    ForceTransfer(request: MsgForceTransfer): Promise<MsgForceTransferResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
