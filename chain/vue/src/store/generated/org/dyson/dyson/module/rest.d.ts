export declare type DysonMsgCreateSchedualedRunResponse = object;
export interface DysonMsgCreateScriptResponse {
    address?: string;
}
export declare type DysonMsgCreateStorageResponse = object;
export declare type DysonMsgDeleteScriptResponse = object;
export declare type DysonMsgDeleteStorageResponse = object;
export interface DysonMsgRun {
    creator?: string;
    address?: string;
    extraLines?: string;
    functionName?: string;
    args?: string;
    kwargs?: string;
    coins?: string;
}
export interface DysonMsgRunResponse {
    response?: string;
}
export interface DysonMsgUpdateScriptResponse {
    address?: string;
}
export declare type DysonMsgUpdateStorageResponse = object;
export interface DysonQueryAllSchedualedRunResponse {
    schedualedRun?: DysonSchedualedRun[];
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
export interface DysonQueryAllScriptResponse {
    Script?: DysonScript[];
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
export interface DysonQueryAllStorageResponse {
    storage?: DysonStorage[];
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
export interface DysonQueryGetSchedualedRunResponse {
    schedualedRun?: DysonSchedualedRun;
}
export interface DysonQueryGetSchemaResponse {
    schema?: string;
}
export interface DysonQueryGetScriptResponse {
    script?: DysonScript;
}
export interface DysonQueryGetStorageResponse {
    storage?: DysonStorage;
}
export interface DysonQueryPrefixStorageResponse {
    storage?: DysonStorage[];
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
export interface DysonQueryWsgiResponse {
    httpresponse?: string;
}
export interface DysonSchedualedRun {
    index?: string;
    creator?: string;
    /** @format uint64 */
    height?: string;
    /** @format uint64 */
    gas?: string;
    msg?: DysonMsgRun;
    resp?: DysonMsgRunResponse;
    error?: string;
    /**
     * Coin defines a token with a denomination and an amount.
     *
     * NOTE: The amount field is an Int which implements the custom method
     * signatures required by gogoproto.
     */
    gasprice?: V1Beta1Coin;
    /**
     * Coin defines a token with a denomination and an amount.
     *
     * NOTE: The amount field is an Int which implements the custom method
     * signatures required by gogoproto.
     */
    fee?: V1Beta1Coin;
}
export interface DysonScript {
    creator?: string;
    index?: string;
    code?: string;
}
export interface DysonStorage {
    creator?: string;
    index?: string;
    data?: string;
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
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
    denom?: string;
    amount?: string;
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
 * @title dyson/genesis.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryQueryScript
     * @summary Queries a script by index.
     * @request GET:/dyson/query
     */
    queryQueryScript: (query?: {
        creator?: string;
        address?: string;
        extraLines?: string;
        functionName?: string;
        args?: string;
        kwargs?: string;
        coins?: string;
    }, params?: RequestParams) => Promise<HttpResponse<DysonMsgRunResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySchema
     * @summary Queries a script schema by index.
     * @request GET:/dyson/schema
     */
    querySchema: (query?: {
        index?: string;
    }, params?: RequestParams) => Promise<HttpResponse<DysonQueryGetSchemaResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryScript
     * @summary Queries a script by index.
     * @request GET:/dyson/script
     */
    queryScript: (query?: {
        index?: string;
    }, params?: RequestParams) => Promise<HttpResponse<DysonQueryGetScriptResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryScriptAll
     * @summary Queries a list of script items.
     * @request GET:/dyson/scriptiAll
     */
    queryScriptAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<DysonQueryAllScriptResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryStorage
     * @summary Queries a storage by index.
     * @request GET:/dyson/storage
     */
    queryStorage: (query?: {
        index?: string;
    }, params?: RequestParams) => Promise<HttpResponse<DysonQueryGetStorageResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryStorageAll
     * @summary Queries a list of storage items.
     * @request GET:/dyson/storageAll
     */
    queryStorageAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<DysonQueryAllStorageResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPrefixStorage
     * @request GET:/dyson/storageprefix
     */
    queryPrefixStorage: (query?: {
        prefix?: string;
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<DysonQueryPrefixStorageResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryWsgi
     * @summary Queries a script wsgi app by index.
     * @request GET:/dyson/wsgi
     */
    queryWsgi: (query?: {
        index?: string;
        httprequest?: string;
    }, params?: RequestParams) => Promise<HttpResponse<DysonQueryWsgiResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySchedualedRun
     * @summary Queries a schedualedRun by index.
     * @request GET:/org/dyson/dyson/schedualedRun
     */
    querySchedualedRun: (query?: {
        index?: string;
    }, params?: RequestParams) => Promise<HttpResponse<DysonQueryGetSchedualedRunResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QuerySchedualedRunAll
     * @summary Queries a list of schedualedRun items.
     * @request GET:/org/dyson/dyson/schedualedRunAll
     */
    querySchedualedRunAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
        "pagination.reverse"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<DysonQueryAllSchedualedRunResponse, RpcStatus>>;
}
export {};
