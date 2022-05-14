import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "dyson";
/** MsgRun runs a script at a specific address */
export interface MsgRun {
    /** The account sending the transaction */
    creator: string;
    /** dys address of the scrit to call */
    address: string;
    /** optional extra source code to append to the end of the script before running */
    extraLines: string;
    /** optional function to call */
    functionName: string;
    /** optional args to call the function with */
    args: string;
    /** optional kwargs to run */
    kwargs: string;
    /** optional comma seperated list of coins to send the script (for example "123dys,456token") */
    coins: string;
}
export interface MsgRunResponse {
    response: string;
}
export declare const MsgRun: {
    encode(message: MsgRun, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRun;
    fromJSON(object: any): MsgRun;
    toJSON(message: MsgRun): unknown;
    fromPartial(object: DeepPartial<MsgRun>): MsgRun;
};
export declare const MsgRunResponse: {
    encode(message: MsgRunResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRunResponse;
    fromJSON(object: any): MsgRunResponse;
    toJSON(message: MsgRunResponse): unknown;
    fromPartial(object: DeepPartial<MsgRunResponse>): MsgRunResponse;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
