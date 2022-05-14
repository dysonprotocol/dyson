import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "dyson";
export interface Storage {
    creator: string;
    index: string;
    data: string;
}
export declare const Storage: {
    encode(message: Storage, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Storage;
    fromJSON(object: any): Storage;
    toJSON(message: Storage): unknown;
    fromPartial(object: DeepPartial<Storage>): Storage;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
