import { Reader, Writer } from 'protobufjs/minimal';
import { Params } from '../names/params';
import { Name } from '../names/name';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "names";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export interface QueryGetNameRequest {
    name: string;
}
export interface QueryGetNameResponse {
    name: Name | undefined;
}
export interface QueryAllNameRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllNameResponse {
    name: Name[];
    pagination: PageResponse | undefined;
}
export interface QueryResolveRequest {
    name: string;
}
export interface QueryResolveResponse {
    address: string;
}
export interface QueryGenerateCommitRequest {
    owner: string;
    name: string;
    salt: string;
}
export interface QueryGenerateCommitResponse {
    commit: string;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse;
};
export declare const QueryGetNameRequest: {
    encode(message: QueryGetNameRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetNameRequest;
    fromJSON(object: any): QueryGetNameRequest;
    toJSON(message: QueryGetNameRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetNameRequest>): QueryGetNameRequest;
};
export declare const QueryGetNameResponse: {
    encode(message: QueryGetNameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetNameResponse;
    fromJSON(object: any): QueryGetNameResponse;
    toJSON(message: QueryGetNameResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetNameResponse>): QueryGetNameResponse;
};
export declare const QueryAllNameRequest: {
    encode(message: QueryAllNameRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllNameRequest;
    fromJSON(object: any): QueryAllNameRequest;
    toJSON(message: QueryAllNameRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllNameRequest>): QueryAllNameRequest;
};
export declare const QueryAllNameResponse: {
    encode(message: QueryAllNameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllNameResponse;
    fromJSON(object: any): QueryAllNameResponse;
    toJSON(message: QueryAllNameResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllNameResponse>): QueryAllNameResponse;
};
export declare const QueryResolveRequest: {
    encode(message: QueryResolveRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryResolveRequest;
    fromJSON(object: any): QueryResolveRequest;
    toJSON(message: QueryResolveRequest): unknown;
    fromPartial(object: DeepPartial<QueryResolveRequest>): QueryResolveRequest;
};
export declare const QueryResolveResponse: {
    encode(message: QueryResolveResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryResolveResponse;
    fromJSON(object: any): QueryResolveResponse;
    toJSON(message: QueryResolveResponse): unknown;
    fromPartial(object: DeepPartial<QueryResolveResponse>): QueryResolveResponse;
};
export declare const QueryGenerateCommitRequest: {
    encode(message: QueryGenerateCommitRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGenerateCommitRequest;
    fromJSON(object: any): QueryGenerateCommitRequest;
    toJSON(message: QueryGenerateCommitRequest): unknown;
    fromPartial(object: DeepPartial<QueryGenerateCommitRequest>): QueryGenerateCommitRequest;
};
export declare const QueryGenerateCommitResponse: {
    encode(message: QueryGenerateCommitResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGenerateCommitResponse;
    fromJSON(object: any): QueryGenerateCommitResponse;
    toJSON(message: QueryGenerateCommitResponse): unknown;
    fromPartial(object: DeepPartial<QueryGenerateCommitResponse>): QueryGenerateCommitResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Queries a Name by index. */
    Name(request: QueryGetNameRequest): Promise<QueryGetNameResponse>;
    /** Queries a list of Name items. */
    NameAll(request: QueryAllNameRequest): Promise<QueryAllNameResponse>;
    /** Queries a list of Resolve items. */
    Resolve(request: QueryResolveRequest): Promise<QueryResolveResponse>;
    /** Queries a list of GenerateCommit items. */
    GenerateCommit(request: QueryGenerateCommitRequest): Promise<QueryGenerateCommitResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Name(request: QueryGetNameRequest): Promise<QueryGetNameResponse>;
    NameAll(request: QueryAllNameRequest): Promise<QueryAllNameResponse>;
    Resolve(request: QueryResolveRequest): Promise<QueryResolveResponse>;
    GenerateCommit(request: QueryGenerateCommitRequest): Promise<QueryGenerateCommitResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
