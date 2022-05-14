import { Reader, Writer } from 'protobufjs/minimal';
import { MsgRun, MsgRunResponse } from '../dyson/msgrun';
export declare const protobufPackage = "dyson";
export interface MsgCreateSchedualedRun {
    creator: string;
    height: number;
    gas: number;
    msg: MsgRun | undefined;
}
export interface MsgCreateSchedualedRunResponse {
}
export interface MsgUpdateSchedualedRun {
    creator: string;
    index: string;
    msg: MsgRun | undefined;
}
export interface MsgUpdateSchedualedRunResponse {
}
export interface MsgDeleteSchedualedRun {
    creator: string;
    index: string;
}
export interface MsgDeleteSchedualedRunResponse {
}
/** Create a new storage of arbitrary text */
export interface MsgCreateStorage {
    /** The address signing this transaction */
    creator: string;
    /** Name of the Storage, must be prefixed with the creators address (for example: "dys..1a3/some_name") */
    index: string;
    /** data to stor at this index */
    data: string;
    /** If true, force will always store the data at this address regardless of already existing storage */
    force: boolean;
}
export interface MsgCreateStorageResponse {
}
export interface MsgUpdateStorage {
    creator: string;
    index: string;
    data: string;
    force: boolean;
}
export interface MsgUpdateStorageResponse {
}
export interface MsgDeleteStorage {
    creator: string;
    index: string;
}
export interface MsgDeleteStorageResponse {
}
export interface MsgCreateScript {
    creator: string;
    code: string;
}
export interface MsgCreateScriptResponse {
    address: string;
}
export interface MsgUpdateScript {
    creator: string;
    code: string;
}
export interface MsgUpdateScriptResponse {
    address: string;
}
export interface MsgDeleteScript {
    creator: string;
}
export interface MsgDeleteScriptResponse {
}
export declare const MsgCreateSchedualedRun: {
    encode(message: MsgCreateSchedualedRun, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSchedualedRun;
    fromJSON(object: any): MsgCreateSchedualedRun;
    toJSON(message: MsgCreateSchedualedRun): unknown;
    fromPartial(object: DeepPartial<MsgCreateSchedualedRun>): MsgCreateSchedualedRun;
};
export declare const MsgCreateSchedualedRunResponse: {
    encode(_: MsgCreateSchedualedRunResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateSchedualedRunResponse;
    fromJSON(_: any): MsgCreateSchedualedRunResponse;
    toJSON(_: MsgCreateSchedualedRunResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateSchedualedRunResponse>): MsgCreateSchedualedRunResponse;
};
export declare const MsgUpdateSchedualedRun: {
    encode(message: MsgUpdateSchedualedRun, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSchedualedRun;
    fromJSON(object: any): MsgUpdateSchedualedRun;
    toJSON(message: MsgUpdateSchedualedRun): unknown;
    fromPartial(object: DeepPartial<MsgUpdateSchedualedRun>): MsgUpdateSchedualedRun;
};
export declare const MsgUpdateSchedualedRunResponse: {
    encode(_: MsgUpdateSchedualedRunResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateSchedualedRunResponse;
    fromJSON(_: any): MsgUpdateSchedualedRunResponse;
    toJSON(_: MsgUpdateSchedualedRunResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateSchedualedRunResponse>): MsgUpdateSchedualedRunResponse;
};
export declare const MsgDeleteSchedualedRun: {
    encode(message: MsgDeleteSchedualedRun, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSchedualedRun;
    fromJSON(object: any): MsgDeleteSchedualedRun;
    toJSON(message: MsgDeleteSchedualedRun): unknown;
    fromPartial(object: DeepPartial<MsgDeleteSchedualedRun>): MsgDeleteSchedualedRun;
};
export declare const MsgDeleteSchedualedRunResponse: {
    encode(_: MsgDeleteSchedualedRunResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteSchedualedRunResponse;
    fromJSON(_: any): MsgDeleteSchedualedRunResponse;
    toJSON(_: MsgDeleteSchedualedRunResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteSchedualedRunResponse>): MsgDeleteSchedualedRunResponse;
};
export declare const MsgCreateStorage: {
    encode(message: MsgCreateStorage, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateStorage;
    fromJSON(object: any): MsgCreateStorage;
    toJSON(message: MsgCreateStorage): unknown;
    fromPartial(object: DeepPartial<MsgCreateStorage>): MsgCreateStorage;
};
export declare const MsgCreateStorageResponse: {
    encode(_: MsgCreateStorageResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateStorageResponse;
    fromJSON(_: any): MsgCreateStorageResponse;
    toJSON(_: MsgCreateStorageResponse): unknown;
    fromPartial(_: DeepPartial<MsgCreateStorageResponse>): MsgCreateStorageResponse;
};
export declare const MsgUpdateStorage: {
    encode(message: MsgUpdateStorage, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateStorage;
    fromJSON(object: any): MsgUpdateStorage;
    toJSON(message: MsgUpdateStorage): unknown;
    fromPartial(object: DeepPartial<MsgUpdateStorage>): MsgUpdateStorage;
};
export declare const MsgUpdateStorageResponse: {
    encode(_: MsgUpdateStorageResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateStorageResponse;
    fromJSON(_: any): MsgUpdateStorageResponse;
    toJSON(_: MsgUpdateStorageResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateStorageResponse>): MsgUpdateStorageResponse;
};
export declare const MsgDeleteStorage: {
    encode(message: MsgDeleteStorage, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteStorage;
    fromJSON(object: any): MsgDeleteStorage;
    toJSON(message: MsgDeleteStorage): unknown;
    fromPartial(object: DeepPartial<MsgDeleteStorage>): MsgDeleteStorage;
};
export declare const MsgDeleteStorageResponse: {
    encode(_: MsgDeleteStorageResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteStorageResponse;
    fromJSON(_: any): MsgDeleteStorageResponse;
    toJSON(_: MsgDeleteStorageResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteStorageResponse>): MsgDeleteStorageResponse;
};
export declare const MsgCreateScript: {
    encode(message: MsgCreateScript, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateScript;
    fromJSON(object: any): MsgCreateScript;
    toJSON(message: MsgCreateScript): unknown;
    fromPartial(object: DeepPartial<MsgCreateScript>): MsgCreateScript;
};
export declare const MsgCreateScriptResponse: {
    encode(message: MsgCreateScriptResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateScriptResponse;
    fromJSON(object: any): MsgCreateScriptResponse;
    toJSON(message: MsgCreateScriptResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateScriptResponse>): MsgCreateScriptResponse;
};
export declare const MsgUpdateScript: {
    encode(message: MsgUpdateScript, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateScript;
    fromJSON(object: any): MsgUpdateScript;
    toJSON(message: MsgUpdateScript): unknown;
    fromPartial(object: DeepPartial<MsgUpdateScript>): MsgUpdateScript;
};
export declare const MsgUpdateScriptResponse: {
    encode(message: MsgUpdateScriptResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateScriptResponse;
    fromJSON(object: any): MsgUpdateScriptResponse;
    toJSON(message: MsgUpdateScriptResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateScriptResponse>): MsgUpdateScriptResponse;
};
export declare const MsgDeleteScript: {
    encode(message: MsgDeleteScript, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteScript;
    fromJSON(object: any): MsgDeleteScript;
    toJSON(message: MsgDeleteScript): unknown;
    fromPartial(object: DeepPartial<MsgDeleteScript>): MsgDeleteScript;
};
export declare const MsgDeleteScriptResponse: {
    encode(_: MsgDeleteScriptResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteScriptResponse;
    fromJSON(_: any): MsgDeleteScriptResponse;
    toJSON(_: MsgDeleteScriptResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteScriptResponse>): MsgDeleteScriptResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateSchedualedRun(request: MsgCreateSchedualedRun): Promise<MsgCreateSchedualedRunResponse>;
    /**
     * rpc UpdateSchedualedRun(MsgUpdateSchedualedRun) returns (MsgUpdateSchedualedRunResponse);
     * rpc DeleteSchedualedRun(MsgDeleteSchedualedRun) returns (MsgDeleteSchedualedRunResponse);
     * this line is used by starport scaffolding # proto/tx/rpc
     */
    CreateStorage(request: MsgCreateStorage): Promise<MsgCreateStorageResponse>;
    UpdateStorage(request: MsgUpdateStorage): Promise<MsgUpdateStorageResponse>;
    DeleteStorage(request: MsgDeleteStorage): Promise<MsgDeleteStorageResponse>;
    CreateScript(request: MsgCreateScript): Promise<MsgCreateScriptResponse>;
    UpdateScript(request: MsgUpdateScript): Promise<MsgUpdateScriptResponse>;
    DeleteScript(request: MsgDeleteScript): Promise<MsgDeleteScriptResponse>;
    Run(request: MsgRun): Promise<MsgRunResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateSchedualedRun(request: MsgCreateSchedualedRun): Promise<MsgCreateSchedualedRunResponse>;
    CreateStorage(request: MsgCreateStorage): Promise<MsgCreateStorageResponse>;
    UpdateStorage(request: MsgUpdateStorage): Promise<MsgUpdateStorageResponse>;
    DeleteStorage(request: MsgDeleteStorage): Promise<MsgDeleteStorageResponse>;
    CreateScript(request: MsgCreateScript): Promise<MsgCreateScriptResponse>;
    UpdateScript(request: MsgUpdateScript): Promise<MsgUpdateScriptResponse>;
    DeleteScript(request: MsgDeleteScript): Promise<MsgDeleteScriptResponse>;
    Run(request: MsgRun): Promise<MsgRunResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
