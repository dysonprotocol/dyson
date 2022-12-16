/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface DysonCron {
  blockHeight?: string;
  indexes?: string[];
}

export interface DysonMsgBetterSubmitProposalResponse {
  /** @format uint64 */
  proposal_id?: string;
}

export interface DysonMsgCreateScheduledRunResponse {
  index?: string;
}

export interface DysonMsgCreateScriptResponse {
  address?: string;
}

export type DysonMsgCreateStorageResponse = object;

export type DysonMsgDeleteScriptResponse = object;

export type DysonMsgDeleteStorageResponse = object;

export interface DysonMsgRun {
  creator?: string;
  address?: string;
  extra_lines?: string;
  function_name?: string;
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

export type DysonMsgUpdateStorageResponse = object;

export interface DysonQueryAllCronResponse {
  cron?: DysonCron[];

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

export interface DysonQueryAllScheduledRunResponse {
  scheduled_run?: DysonScheduledRun[];

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

export interface DysonQueryGetCronResponse {
  cron?: DysonCron;
}

export interface DysonQueryGetScheduledRunResponse {
  scheduled_run?: DysonScheduledRun;
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

export interface DysonQueryScheduledGasPriceAndFeeAtBlockResponse {
  /**
   * DecCoin defines a token with a denomination and a decimal amount.
   *
   * NOTE: The amount field is an Dec which implements the custom method
   * signatures required by gogoproto.
   */
  gasprice?: V1Beta1DecCoin;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  gasfee?: V1Beta1Coin;
}

export interface DysonQueryWsgiResponse {
  httpresponse?: string;
}

export interface DysonScheduledRun {
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
   * DecCoin defines a token with a denomination and a decimal amount.
   *
   * NOTE: The amount field is an Dec which implements the custom method
   * signatures required by gogoproto.
   */
  gasprice?: V1Beta1DecCoin;

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
* DecCoin defines a token with a denomination and a decimal amount.

NOTE: The amount field is an Dec which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1DecCoin {
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
  count_total?: boolean;

  /**
   * reverse is set to true if results are to be returned in the descending order.
   *
   * Since: cosmos-sdk 0.43
   */
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
  /**
   * next_key is the key to be passed to PageRequest.key to
   * query the next page most efficiently. It will be empty if
   * there are no more results.
   * @format byte
   */
  next_key?: string;

  /** @format uint64 */
  total?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

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

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType = null as any;
  private securityWorker: null | ApiConfig<SecurityDataType>["securityWorker"] = null;
  private abortControllers = new Map<CancelToken, AbortController>();

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType) => {
    this.securityData = data;
  };

  private addQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];

    return (
      encodeURIComponent(key) +
      "=" +
      encodeURIComponent(Array.isArray(value) ? value.join(",") : typeof value === "number" ? value : `${value}`)
    );
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) =>
        typeof query[key] === "object" && !Array.isArray(query[key])
          ? this.toQueryString(query[key] as QueryParamsType)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((data, key) => {
        data.append(key, input[key]);
        return data;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format = "json",
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams = (secure && this.securityWorker && this.securityWorker(this.securityData)) || {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];

    return fetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = (null as unknown) as T;
      r.error = (null as unknown) as E;

      const data = await response[format]()
        .then((data) => {
          if (r.ok) {
            r.data = data;
          } else {
            r.error = data;
          }
          return r;
        })
        .catch((e) => {
          r.error = e;
          return r;
        });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title dyson/cron.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryCron
   * @summary Queries a Cron by index.
   * @request GET:/dyson/cron
   */
  queryCron = (query?: { blockHeight?: string }, params: RequestParams = {}) =>
    this.request<DysonQueryGetCronResponse, RpcStatus>({
      path: `/dyson/cron`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCronAll
   * @summary Queries a list of Cron items.
   * @request GET:/dyson/cronAll
   */
  queryCronAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<DysonQueryAllCronResponse, RpcStatus>({
      path: `/dyson/cronAll`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryQueryScript
   * @summary Queries a script by index.
   * @request GET:/dyson/query
   */
  queryQueryScript = (
    query?: {
      creator?: string;
      address?: string;
      extra_lines?: string;
      function_name?: string;
      args?: string;
      kwargs?: string;
      coins?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<DysonMsgRunResponse, RpcStatus>({
      path: `/dyson/query`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryScheduledRun
   * @summary Queries a scheduledRun by index.
   * @request GET:/dyson/scheduledRun
   */
  queryScheduledRun = (query?: { index?: string }, params: RequestParams = {}) =>
    this.request<DysonQueryGetScheduledRunResponse, RpcStatus>({
      path: `/dyson/scheduledRun`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryScheduledRunAll
   * @summary Queries a list of scheduledRun items.
   * @request GET:/dyson/scheduledRunAll
   */
  queryScheduledRunAll = (
    query?: {
      index?: string;
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<DysonQueryAllScheduledRunResponse, RpcStatus>({
      path: `/dyson/scheduledRunAll`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryScheduledGasPriceAndFeeAtBlock
   * @summary Queries a list of ScheduledGasPriceAtBlock items.
   * @request GET:/dyson/scheduled_gas_price_at_block
   */
  queryScheduledGasPriceAndFeeAtBlock = (
    query?: { blockheight?: string; gaswanted?: string },
    params: RequestParams = {},
  ) =>
    this.request<DysonQueryScheduledGasPriceAndFeeAtBlockResponse, RpcStatus>({
      path: `/dyson/scheduled_gas_price_at_block`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QuerySchema
   * @summary Queries a script schema by index.
   * @request GET:/dyson/schema
   */
  querySchema = (query?: { index?: string }, params: RequestParams = {}) =>
    this.request<DysonQueryGetSchemaResponse, RpcStatus>({
      path: `/dyson/schema`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryScript
   * @summary Queries a script by index.
   * @request GET:/dyson/script
   */
  queryScript = (query?: { index?: string }, params: RequestParams = {}) =>
    this.request<DysonQueryGetScriptResponse, RpcStatus>({
      path: `/dyson/script`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryScriptAll
   * @summary Queries a list of script items.
   * @request GET:/dyson/scriptAll
   */
  queryScriptAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<DysonQueryAllScriptResponse, RpcStatus>({
      path: `/dyson/scriptAll`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryStorage
   * @summary Queries a storage by index.
   * @request GET:/dyson/storage
   */
  queryStorage = (query?: { index?: string }, params: RequestParams = {}) =>
    this.request<DysonQueryGetStorageResponse, RpcStatus>({
      path: `/dyson/storage`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryStorageAll
   * @summary Queries a list of storage items.
   * @request GET:/dyson/storageAll
   */
  queryStorageAll = (
    query?: {
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<DysonQueryAllStorageResponse, RpcStatus>({
      path: `/dyson/storageAll`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryPrefixStorage
   * @request GET:/dyson/storageprefix
   */
  queryPrefixStorage = (
    query?: {
      prefix?: string;
      "pagination.key"?: string;
      "pagination.offset"?: string;
      "pagination.limit"?: string;
      "pagination.count_total"?: boolean;
      "pagination.reverse"?: boolean;
    },
    params: RequestParams = {},
  ) =>
    this.request<DysonQueryPrefixStorageResponse, RpcStatus>({
      path: `/dyson/storageprefix`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryWsgi
   * @summary Queries a script wsgi app by index.
   * @request GET:/dyson/wsgi
   */
  queryWsgi = (query?: { index?: string; httprequest?: string; gaslimit?: string }, params: RequestParams = {}) =>
    this.request<DysonQueryWsgiResponse, RpcStatus>({
      path: `/dyson/wsgi`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
