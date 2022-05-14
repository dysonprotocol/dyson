import { Writer, Reader } from 'protobufjs/minimal';
import { MsgRun, MsgRunResponse } from '../dyson/msgrun';
import { Coin } from '../cosmos/base/v1beta1/coin';
export declare const protobufPackage = "dyson";
export interface SchedualedRun {
    index: string;
    creator: string;
    height: number;
    gas: number;
    msg: MsgRun | undefined;
    resp: MsgRunResponse | undefined;
    error: string;
    gasprice: Coin | undefined;
    fee: Coin | undefined;
}
export declare const SchedualedRun: {
    encode(message: SchedualedRun, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): SchedualedRun;
    fromJSON(object: any): SchedualedRun;
    toJSON(message: SchedualedRun): unknown;
    fromPartial(object: DeepPartial<SchedualedRun>): SchedualedRun;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
