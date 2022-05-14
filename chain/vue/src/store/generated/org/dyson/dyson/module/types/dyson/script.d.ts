import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "dyson";
export interface Script {
    creator: string;
    index: string;
    code: string;
}
export declare const Script: {
    encode(message: Script, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Script;
    fromJSON(object: any): Script;
    toJSON(message: Script): unknown;
    fromPartial(object: DeepPartial<Script>): Script;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
