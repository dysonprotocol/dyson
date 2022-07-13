import { Reader, Writer } from 'protobufjs/minimal';
import { SchedualedRun } from '../dyson/schedualed_run';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Storage } from '../dyson/storage';
import { Script } from '../dyson/script';
import { MsgRunResponse, MsgRun } from '../dyson/msgrun';
export declare const protobufPackage = "dyson";
export interface QueryGetSchedualedRunRequest {
    /** inxex is the script address */
    index: string;
}
export interface QueryGetSchedualedRunResponse {
    schedualedRun: SchedualedRun | undefined;
}
export interface QueryAllSchedualedRunRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllSchedualedRunResponse {
    schedualedRun: SchedualedRun[];
    pagination: PageResponse | undefined;
}
export interface QueryGetStorageRequest {
    index: string;
}
export interface QueryGetStorageResponse {
    storage: Storage | undefined;
}
export interface QueryAllStorageRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllStorageResponse {
    storage: Storage[];
    pagination: PageResponse | undefined;
}
export interface QueryGetScriptRequest {
    index: string;
}
export interface QueryGetScriptResponse {
    script: Script | undefined;
}
export interface QueryGetSchemaRequest {
    index: string;
}
export interface QueryGetSchemaResponse {
    schema: string;
}
export interface QueryWsgiRequest {
    index: string;
    httprequest: string;
    /** Gas to allow the WSGI request */
    gaslimit: number;
}
export interface QueryWsgiResponse {
    httpresponse: string;
}
export interface QueryAllScriptRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllScriptResponse {
    Script: Script[];
    pagination: PageResponse | undefined;
}
export interface QueryPrefixStorageRequest {
    prefix: string;
    pagination: PageRequest | undefined;
}
export interface QueryPrefixStorageResponse {
    storage: Storage[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetSchedualedRunRequest: {
    encode(message: QueryGetSchedualedRunRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSchedualedRunRequest;
    fromJSON(object: any): QueryGetSchedualedRunRequest;
    toJSON(message: QueryGetSchedualedRunRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSchedualedRunRequest>): QueryGetSchedualedRunRequest;
};
export declare const QueryGetSchedualedRunResponse: {
    encode(message: QueryGetSchedualedRunResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSchedualedRunResponse;
    fromJSON(object: any): QueryGetSchedualedRunResponse;
    toJSON(message: QueryGetSchedualedRunResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSchedualedRunResponse>): QueryGetSchedualedRunResponse;
};
export declare const QueryAllSchedualedRunRequest: {
    encode(message: QueryAllSchedualedRunRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSchedualedRunRequest;
    fromJSON(object: any): QueryAllSchedualedRunRequest;
    toJSON(message: QueryAllSchedualedRunRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllSchedualedRunRequest>): QueryAllSchedualedRunRequest;
};
export declare const QueryAllSchedualedRunResponse: {
    encode(message: QueryAllSchedualedRunResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllSchedualedRunResponse;
    fromJSON(object: any): QueryAllSchedualedRunResponse;
    toJSON(message: QueryAllSchedualedRunResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllSchedualedRunResponse>): QueryAllSchedualedRunResponse;
};
export declare const QueryGetStorageRequest: {
    encode(message: QueryGetStorageRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetStorageRequest;
    fromJSON(object: any): QueryGetStorageRequest;
    toJSON(message: QueryGetStorageRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetStorageRequest>): QueryGetStorageRequest;
};
export declare const QueryGetStorageResponse: {
    encode(message: QueryGetStorageResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetStorageResponse;
    fromJSON(object: any): QueryGetStorageResponse;
    toJSON(message: QueryGetStorageResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetStorageResponse>): QueryGetStorageResponse;
};
export declare const QueryAllStorageRequest: {
    encode(message: QueryAllStorageRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllStorageRequest;
    fromJSON(object: any): QueryAllStorageRequest;
    toJSON(message: QueryAllStorageRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllStorageRequest>): QueryAllStorageRequest;
};
export declare const QueryAllStorageResponse: {
    encode(message: QueryAllStorageResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllStorageResponse;
    fromJSON(object: any): QueryAllStorageResponse;
    toJSON(message: QueryAllStorageResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllStorageResponse>): QueryAllStorageResponse;
};
export declare const QueryGetScriptRequest: {
    encode(message: QueryGetScriptRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetScriptRequest;
    fromJSON(object: any): QueryGetScriptRequest;
    toJSON(message: QueryGetScriptRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetScriptRequest>): QueryGetScriptRequest;
};
export declare const QueryGetScriptResponse: {
    encode(message: QueryGetScriptResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetScriptResponse;
    fromJSON(object: any): QueryGetScriptResponse;
    toJSON(message: QueryGetScriptResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetScriptResponse>): QueryGetScriptResponse;
};
export declare const QueryGetSchemaRequest: {
    encode(message: QueryGetSchemaRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSchemaRequest;
    fromJSON(object: any): QueryGetSchemaRequest;
    toJSON(message: QueryGetSchemaRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetSchemaRequest>): QueryGetSchemaRequest;
};
export declare const QueryGetSchemaResponse: {
    encode(message: QueryGetSchemaResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetSchemaResponse;
    fromJSON(object: any): QueryGetSchemaResponse;
    toJSON(message: QueryGetSchemaResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetSchemaResponse>): QueryGetSchemaResponse;
};
export declare const QueryWsgiRequest: {
    encode(message: QueryWsgiRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryWsgiRequest;
    fromJSON(object: any): QueryWsgiRequest;
    toJSON(message: QueryWsgiRequest): unknown;
    fromPartial(object: DeepPartial<QueryWsgiRequest>): QueryWsgiRequest;
};
export declare const QueryWsgiResponse: {
    encode(message: QueryWsgiResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryWsgiResponse;
    fromJSON(object: any): QueryWsgiResponse;
    toJSON(message: QueryWsgiResponse): unknown;
    fromPartial(object: DeepPartial<QueryWsgiResponse>): QueryWsgiResponse;
};
export declare const QueryAllScriptRequest: {
    encode(message: QueryAllScriptRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllScriptRequest;
    fromJSON(object: any): QueryAllScriptRequest;
    toJSON(message: QueryAllScriptRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllScriptRequest>): QueryAllScriptRequest;
};
export declare const QueryAllScriptResponse: {
    encode(message: QueryAllScriptResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllScriptResponse;
    fromJSON(object: any): QueryAllScriptResponse;
    toJSON(message: QueryAllScriptResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllScriptResponse>): QueryAllScriptResponse;
};
export declare const QueryPrefixStorageRequest: {
    encode(message: QueryPrefixStorageRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryPrefixStorageRequest;
    fromJSON(object: any): QueryPrefixStorageRequest;
    toJSON(message: QueryPrefixStorageRequest): unknown;
    fromPartial(object: DeepPartial<QueryPrefixStorageRequest>): QueryPrefixStorageRequest;
};
export declare const QueryPrefixStorageResponse: {
    encode(message: QueryPrefixStorageResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryPrefixStorageResponse;
    fromJSON(object: any): QueryPrefixStorageResponse;
    toJSON(message: QueryPrefixStorageResponse): unknown;
    fromPartial(object: DeepPartial<QueryPrefixStorageResponse>): QueryPrefixStorageResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a schedualedRun by index. */
    SchedualedRun(request: QueryGetSchedualedRunRequest): Promise<QueryGetSchedualedRunResponse>;
    /** Queries a list of schedualedRun items. */
    SchedualedRunAll(request: QueryAllSchedualedRunRequest): Promise<QueryAllSchedualedRunResponse>;
    /** Queries a storage by index. */
    Storage(request: QueryGetStorageRequest): Promise<QueryGetStorageResponse>;
    /** Queries a list of storage items. */
    StorageAll(request: QueryAllStorageRequest): Promise<QueryAllStorageResponse>;
    /** Queries a script by index. */
    Script(request: QueryGetScriptRequest): Promise<QueryGetScriptResponse>;
    /** Queries a script schema by index. */
    Schema(request: QueryGetSchemaRequest): Promise<QueryGetSchemaResponse>;
    /** Queries a script wsgi app by index. */
    Wsgi(request: QueryWsgiRequest): Promise<QueryWsgiResponse>;
    /** Queries a script by index. */
    QueryScript(request: MsgRun): Promise<MsgRunResponse>;
    /** Queries a list of script items. */
    ScriptAll(request: QueryAllScriptRequest): Promise<QueryAllScriptResponse>;
    PrefixStorage(request: QueryPrefixStorageRequest): Promise<QueryPrefixStorageResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    SchedualedRun(request: QueryGetSchedualedRunRequest): Promise<QueryGetSchedualedRunResponse>;
    SchedualedRunAll(request: QueryAllSchedualedRunRequest): Promise<QueryAllSchedualedRunResponse>;
    Storage(request: QueryGetStorageRequest): Promise<QueryGetStorageResponse>;
    StorageAll(request: QueryAllStorageRequest): Promise<QueryAllStorageResponse>;
    Script(request: QueryGetScriptRequest): Promise<QueryGetScriptResponse>;
    Schema(request: QueryGetSchemaRequest): Promise<QueryGetSchemaResponse>;
    Wsgi(request: QueryWsgiRequest): Promise<QueryWsgiResponse>;
    QueryScript(request: MsgRun): Promise<MsgRunResponse>;
    ScriptAll(request: QueryAllScriptRequest): Promise<QueryAllScriptResponse>;
    PrefixStorage(request: QueryPrefixStorageRequest): Promise<QueryPrefixStorageResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
