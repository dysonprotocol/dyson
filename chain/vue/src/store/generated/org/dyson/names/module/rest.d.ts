export declare type NamesMsgAcceptResponse = object;
export declare type NamesMsgBurnCoinsResponse = object;
export declare type NamesMsgBuyResponse = object;
export declare type NamesMsgDeleteNameResponse = object;
export declare type NamesMsgForceTransferResponse = object;
export declare type NamesMsgMintCoinsResponse = object;
export declare type NamesMsgOfferToResponse = object;
export interface NamesMsgRegisterResponse {
    fee?: string;
    /** @format date-time */
    expires?: string;
}
export interface NamesMsgRevealResponse {
    name?: NamesName;
}
export interface NamesMsgSetPriceAndExtendResponse {
    /** @format date-time */
    expiry?: string;
}
export declare type NamesMsgUpdateNameResponse = object;
export interface NamesName {
    name?: string;
    destination?: string;
    price?: string;
    /** @format date-time */
    expires?: string;
    authorized?: string;
    owner?: string;
    /** @format int64 */
    height?: string;
}
/**
 * Params defines the parameters for the module.
 */
export declare type NamesParams = object;
export interface NamesQueryAllNameResponse {
    name?: NamesName[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface NamesQueryGenerateCommitResponse {
    commit?: string;
}
export interface NamesQueryGetNameResponse {
    name?: NamesName;
}
/**
 * QueryParamsResponse is response type for the Query/Params RPC method.
 */
export interface NamesQueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: NamesParams;
}
export interface NamesQueryResolveResponse {
    address?: string;
}
export interface ProtobufAny {
    "@type"?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
    /** reverse is set to true if results are to be returned in the descending order. */
    reverse?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title names/genesis.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryGenerateCommit
     * @summary Queries a list of GenerateCommit items.
     * @request GET:/org/dyson/names/generate_commit/{owner}/{name}/{salt}
     */
    queryGenerateCommit: (owner: string, name: string, salt: string, params?: RequestParams) => Promise<HttpResponse<NamesQueryGenerateCommitResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryName
     * @summary Queries a Name by index.
     * @request GET:/org/dyson/names/name
     */
    queryName: (query?: {
        name?: string;
    }, params?: RequestParams) => Promise<HttpResponse<NamesQueryGetNameResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryNameAll
     * @summary Queries a list of Name items.
     * @request GET:/org/dyson/names/nameall
     */
    queryNameAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<NamesQueryAllNameResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryParams
     * @summary Parameters queries the parameters of the module.
     * @request GET:/org/dyson/names/params
     */
    queryParams: (params?: RequestParams) => Promise<HttpResponse<NamesQueryParamsResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryResolve
     * @summary Queries a list of Resolve items.
     * @request GET:/org/dyson/names/resolve
     */
    queryResolve: (query?: {
        name?: string;
    }, params?: RequestParams) => Promise<HttpResponse<NamesQueryResolveResponse, RpcStatus>>;
}
export {};
