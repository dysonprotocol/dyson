import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "dyson";
export interface Foobar {
    index: string;
    creator: string;
}
export declare const Foobar: {
    encode(message: Foobar, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Foobar;
    fromJSON(object: any): Foobar;
    toJSON(message: Foobar): unknown;
    fromPartial(object: DeepPartial<Foobar>): Foobar;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
