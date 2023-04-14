/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { ScheduledRun } from '../dyson/scheduled_run'
import {
  PageRequest,
  PageResponse,
} from '../cosmos/base/query/v1beta1/pagination'
import { Storage } from '../dyson/storage'
import { Script } from '../dyson/script'
import { DecCoin, Coin } from '../cosmos/base/v1beta1/coin'
import { Cron } from '../dyson/cron'
import { MsgRunResponse, MsgRun } from '../dyson/msgrun'

export const protobufPackage = 'dyson'

export interface QueryGetScheduledRunRequest {
  /** index is the script address */
  index: string
}

export interface QueryGetScheduledRunResponse {
  scheduled_run: ScheduledRun | undefined
}

export interface QueryAllScheduledRunRequest {
  index: string
  pagination: PageRequest | undefined
}

export interface QueryAllScheduledRunResponse {
  scheduled_run: ScheduledRun[]
  pagination: PageResponse | undefined
}

export interface QueryGetStorageRequest {
  index: string
}

export interface QueryGetStorageResponse {
  storage: Storage | undefined
}

export interface QueryAllStorageRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllStorageResponse {
  storage: Storage[]
  pagination: PageResponse | undefined
}

export interface QueryGetScriptRequest {
  index: string
}

export interface QueryGetScriptResponse {
  script: Script | undefined
}

export interface QueryGetSchemaRequest {
  index: string
}

export interface QueryGetSchemaResponse {
  schema: string
}

export interface QueryWsgiRequest {
  index: string
  httprequest: string
  /** Gas to allow the WSGI request */
  gaslimit: number
}

export interface QueryWsgiResponse {
  httpresponse: string
}

export interface QueryAllScriptRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllScriptResponse {
  Script: Script[]
  pagination: PageResponse | undefined
}

export interface QueryPrefixStorageRequest {
  prefix: string
  pagination: PageRequest | undefined
}

export interface QueryPrefixStorageResponse {
  storage: Storage[]
  pagination: PageResponse | undefined
}

export interface QueryScheduledGasPriceAndFeeAtBlockRequest {
  blockheight: number
  gaswanted: number
}

export interface QueryScheduledGasPriceAndFeeAtBlockResponse {
  gasprice: DecCoin | undefined
  gasfee: Coin | undefined
}

export interface QueryGetCronRequest {
  blockHeight: string
}

export interface QueryGetCronResponse {
  cron: Cron | undefined
}

export interface QueryAllCronRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllCronResponse {
  cron: Cron[]
  pagination: PageResponse | undefined
}

export interface QueryEncodeProtoAnyRequest {
  type_url: string
  json_value: string
}

export interface QueryEncodeProtoAnyResponse {
  type_url: string
  value: string
}

const baseQueryGetScheduledRunRequest: object = { index: '' }

export const QueryGetScheduledRunRequest = {
  encode(
    message: QueryGetScheduledRunRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetScheduledRunRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetScheduledRunRequest,
    } as QueryGetScheduledRunRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetScheduledRunRequest {
    const message = {
      ...baseQueryGetScheduledRunRequest,
    } as QueryGetScheduledRunRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetScheduledRunRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetScheduledRunRequest>
  ): QueryGetScheduledRunRequest {
    const message = {
      ...baseQueryGetScheduledRunRequest,
    } as QueryGetScheduledRunRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  },
}

const baseQueryGetScheduledRunResponse: object = {}

export const QueryGetScheduledRunResponse = {
  encode(
    message: QueryGetScheduledRunResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.scheduled_run !== undefined) {
      ScheduledRun.encode(
        message.scheduled_run,
        writer.uint32(10).fork()
      ).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetScheduledRunResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetScheduledRunResponse,
    } as QueryGetScheduledRunResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.scheduled_run = ScheduledRun.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetScheduledRunResponse {
    const message = {
      ...baseQueryGetScheduledRunResponse,
    } as QueryGetScheduledRunResponse
    if (object.scheduled_run !== undefined && object.scheduled_run !== null) {
      message.scheduled_run = ScheduledRun.fromJSON(object.scheduled_run)
    } else {
      message.scheduled_run = undefined
    }
    return message
  },

  toJSON(message: QueryGetScheduledRunResponse): unknown {
    const obj: any = {}
    message.scheduled_run !== undefined &&
      (obj.scheduled_run = message.scheduled_run
        ? ScheduledRun.toJSON(message.scheduled_run)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetScheduledRunResponse>
  ): QueryGetScheduledRunResponse {
    const message = {
      ...baseQueryGetScheduledRunResponse,
    } as QueryGetScheduledRunResponse
    if (object.scheduled_run !== undefined && object.scheduled_run !== null) {
      message.scheduled_run = ScheduledRun.fromPartial(object.scheduled_run)
    } else {
      message.scheduled_run = undefined
    }
    return message
  },
}

const baseQueryAllScheduledRunRequest: object = { index: '' }

export const QueryAllScheduledRunRequest = {
  encode(
    message: QueryAllScheduledRunRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllScheduledRunRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllScheduledRunRequest,
    } as QueryAllScheduledRunRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllScheduledRunRequest {
    const message = {
      ...baseQueryAllScheduledRunRequest,
    } as QueryAllScheduledRunRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllScheduledRunRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllScheduledRunRequest>
  ): QueryAllScheduledRunRequest {
    const message = {
      ...baseQueryAllScheduledRunRequest,
    } as QueryAllScheduledRunRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },
}

const baseQueryAllScheduledRunResponse: object = {}

export const QueryAllScheduledRunResponse = {
  encode(
    message: QueryAllScheduledRunResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.scheduled_run) {
      ScheduledRun.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllScheduledRunResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllScheduledRunResponse,
    } as QueryAllScheduledRunResponse
    message.scheduled_run = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.scheduled_run.push(
            ScheduledRun.decode(reader, reader.uint32())
          )
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllScheduledRunResponse {
    const message = {
      ...baseQueryAllScheduledRunResponse,
    } as QueryAllScheduledRunResponse
    message.scheduled_run = []
    if (object.scheduled_run !== undefined && object.scheduled_run !== null) {
      for (const e of object.scheduled_run) {
        message.scheduled_run.push(ScheduledRun.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllScheduledRunResponse): unknown {
    const obj: any = {}
    if (message.scheduled_run) {
      obj.scheduled_run = message.scheduled_run.map((e) =>
        e ? ScheduledRun.toJSON(e) : undefined
      )
    } else {
      obj.scheduled_run = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllScheduledRunResponse>
  ): QueryAllScheduledRunResponse {
    const message = {
      ...baseQueryAllScheduledRunResponse,
    } as QueryAllScheduledRunResponse
    message.scheduled_run = []
    if (object.scheduled_run !== undefined && object.scheduled_run !== null) {
      for (const e of object.scheduled_run) {
        message.scheduled_run.push(ScheduledRun.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },
}

const baseQueryGetStorageRequest: object = { index: '' }

export const QueryGetStorageRequest = {
  encode(
    message: QueryGetStorageRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetStorageRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetStorageRequest } as QueryGetStorageRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetStorageRequest {
    const message = { ...baseQueryGetStorageRequest } as QueryGetStorageRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetStorageRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetStorageRequest>
  ): QueryGetStorageRequest {
    const message = { ...baseQueryGetStorageRequest } as QueryGetStorageRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  },
}

const baseQueryGetStorageResponse: object = {}

export const QueryGetStorageResponse = {
  encode(
    message: QueryGetStorageResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.storage !== undefined) {
      Storage.encode(message.storage, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetStorageResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetStorageResponse,
    } as QueryGetStorageResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.storage = Storage.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetStorageResponse {
    const message = {
      ...baseQueryGetStorageResponse,
    } as QueryGetStorageResponse
    if (object.storage !== undefined && object.storage !== null) {
      message.storage = Storage.fromJSON(object.storage)
    } else {
      message.storage = undefined
    }
    return message
  },

  toJSON(message: QueryGetStorageResponse): unknown {
    const obj: any = {}
    message.storage !== undefined &&
      (obj.storage = message.storage
        ? Storage.toJSON(message.storage)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetStorageResponse>
  ): QueryGetStorageResponse {
    const message = {
      ...baseQueryGetStorageResponse,
    } as QueryGetStorageResponse
    if (object.storage !== undefined && object.storage !== null) {
      message.storage = Storage.fromPartial(object.storage)
    } else {
      message.storage = undefined
    }
    return message
  },
}

const baseQueryAllStorageRequest: object = {}

export const QueryAllStorageRequest = {
  encode(
    message: QueryAllStorageRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllStorageRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllStorageRequest } as QueryAllStorageRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllStorageRequest {
    const message = { ...baseQueryAllStorageRequest } as QueryAllStorageRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllStorageRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllStorageRequest>
  ): QueryAllStorageRequest {
    const message = { ...baseQueryAllStorageRequest } as QueryAllStorageRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },
}

const baseQueryAllStorageResponse: object = {}

export const QueryAllStorageResponse = {
  encode(
    message: QueryAllStorageResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.storage) {
      Storage.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllStorageResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllStorageResponse,
    } as QueryAllStorageResponse
    message.storage = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.storage.push(Storage.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllStorageResponse {
    const message = {
      ...baseQueryAllStorageResponse,
    } as QueryAllStorageResponse
    message.storage = []
    if (object.storage !== undefined && object.storage !== null) {
      for (const e of object.storage) {
        message.storage.push(Storage.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllStorageResponse): unknown {
    const obj: any = {}
    if (message.storage) {
      obj.storage = message.storage.map((e) =>
        e ? Storage.toJSON(e) : undefined
      )
    } else {
      obj.storage = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllStorageResponse>
  ): QueryAllStorageResponse {
    const message = {
      ...baseQueryAllStorageResponse,
    } as QueryAllStorageResponse
    message.storage = []
    if (object.storage !== undefined && object.storage !== null) {
      for (const e of object.storage) {
        message.storage.push(Storage.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },
}

const baseQueryGetScriptRequest: object = { index: '' }

export const QueryGetScriptRequest = {
  encode(
    message: QueryGetScriptRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetScriptRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetScriptRequest } as QueryGetScriptRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetScriptRequest {
    const message = { ...baseQueryGetScriptRequest } as QueryGetScriptRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetScriptRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetScriptRequest>
  ): QueryGetScriptRequest {
    const message = { ...baseQueryGetScriptRequest } as QueryGetScriptRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  },
}

const baseQueryGetScriptResponse: object = {}

export const QueryGetScriptResponse = {
  encode(
    message: QueryGetScriptResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.script !== undefined) {
      Script.encode(message.script, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetScriptResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetScriptResponse } as QueryGetScriptResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.script = Script.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetScriptResponse {
    const message = { ...baseQueryGetScriptResponse } as QueryGetScriptResponse
    if (object.script !== undefined && object.script !== null) {
      message.script = Script.fromJSON(object.script)
    } else {
      message.script = undefined
    }
    return message
  },

  toJSON(message: QueryGetScriptResponse): unknown {
    const obj: any = {}
    message.script !== undefined &&
      (obj.script = message.script ? Script.toJSON(message.script) : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetScriptResponse>
  ): QueryGetScriptResponse {
    const message = { ...baseQueryGetScriptResponse } as QueryGetScriptResponse
    if (object.script !== undefined && object.script !== null) {
      message.script = Script.fromPartial(object.script)
    } else {
      message.script = undefined
    }
    return message
  },
}

const baseQueryGetSchemaRequest: object = { index: '' }

export const QueryGetSchemaRequest = {
  encode(
    message: QueryGetSchemaRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSchemaRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSchemaRequest } as QueryGetSchemaRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSchemaRequest {
    const message = { ...baseQueryGetSchemaRequest } as QueryGetSchemaRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetSchemaRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetSchemaRequest>
  ): QueryGetSchemaRequest {
    const message = { ...baseQueryGetSchemaRequest } as QueryGetSchemaRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  },
}

const baseQueryGetSchemaResponse: object = { schema: '' }

export const QueryGetSchemaResponse = {
  encode(
    message: QueryGetSchemaResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.schema !== '') {
      writer.uint32(10).string(message.schema)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSchemaResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSchemaResponse } as QueryGetSchemaResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.schema = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSchemaResponse {
    const message = { ...baseQueryGetSchemaResponse } as QueryGetSchemaResponse
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = String(object.schema)
    } else {
      message.schema = ''
    }
    return message
  },

  toJSON(message: QueryGetSchemaResponse): unknown {
    const obj: any = {}
    message.schema !== undefined && (obj.schema = message.schema)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetSchemaResponse>
  ): QueryGetSchemaResponse {
    const message = { ...baseQueryGetSchemaResponse } as QueryGetSchemaResponse
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = object.schema
    } else {
      message.schema = ''
    }
    return message
  },
}

const baseQueryWsgiRequest: object = { index: '', httprequest: '', gaslimit: 0 }

export const QueryWsgiRequest = {
  encode(message: QueryWsgiRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    if (message.httprequest !== '') {
      writer.uint32(18).string(message.httprequest)
    }
    if (message.gaslimit !== 0) {
      writer.uint32(24).uint64(message.gaslimit)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryWsgiRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryWsgiRequest } as QueryWsgiRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string()
          break
        case 2:
          message.httprequest = reader.string()
          break
        case 3:
          message.gaslimit = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryWsgiRequest {
    const message = { ...baseQueryWsgiRequest } as QueryWsgiRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.httprequest !== undefined && object.httprequest !== null) {
      message.httprequest = String(object.httprequest)
    } else {
      message.httprequest = ''
    }
    if (object.gaslimit !== undefined && object.gaslimit !== null) {
      message.gaslimit = Number(object.gaslimit)
    } else {
      message.gaslimit = 0
    }
    return message
  },

  toJSON(message: QueryWsgiRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    message.httprequest !== undefined && (obj.httprequest = message.httprequest)
    message.gaslimit !== undefined && (obj.gaslimit = message.gaslimit)
    return obj
  },

  fromPartial(object: DeepPartial<QueryWsgiRequest>): QueryWsgiRequest {
    const message = { ...baseQueryWsgiRequest } as QueryWsgiRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.httprequest !== undefined && object.httprequest !== null) {
      message.httprequest = object.httprequest
    } else {
      message.httprequest = ''
    }
    if (object.gaslimit !== undefined && object.gaslimit !== null) {
      message.gaslimit = object.gaslimit
    } else {
      message.gaslimit = 0
    }
    return message
  },
}

const baseQueryWsgiResponse: object = { httpresponse: '' }

export const QueryWsgiResponse = {
  encode(message: QueryWsgiResponse, writer: Writer = Writer.create()): Writer {
    if (message.httpresponse !== '') {
      writer.uint32(10).string(message.httpresponse)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryWsgiResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryWsgiResponse } as QueryWsgiResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.httpresponse = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryWsgiResponse {
    const message = { ...baseQueryWsgiResponse } as QueryWsgiResponse
    if (object.httpresponse !== undefined && object.httpresponse !== null) {
      message.httpresponse = String(object.httpresponse)
    } else {
      message.httpresponse = ''
    }
    return message
  },

  toJSON(message: QueryWsgiResponse): unknown {
    const obj: any = {}
    message.httpresponse !== undefined &&
      (obj.httpresponse = message.httpresponse)
    return obj
  },

  fromPartial(object: DeepPartial<QueryWsgiResponse>): QueryWsgiResponse {
    const message = { ...baseQueryWsgiResponse } as QueryWsgiResponse
    if (object.httpresponse !== undefined && object.httpresponse !== null) {
      message.httpresponse = object.httpresponse
    } else {
      message.httpresponse = ''
    }
    return message
  },
}

const baseQueryAllScriptRequest: object = {}

export const QueryAllScriptRequest = {
  encode(
    message: QueryAllScriptRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllScriptRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllScriptRequest } as QueryAllScriptRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllScriptRequest {
    const message = { ...baseQueryAllScriptRequest } as QueryAllScriptRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllScriptRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllScriptRequest>
  ): QueryAllScriptRequest {
    const message = { ...baseQueryAllScriptRequest } as QueryAllScriptRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },
}

const baseQueryAllScriptResponse: object = {}

export const QueryAllScriptResponse = {
  encode(
    message: QueryAllScriptResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Script) {
      Script.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllScriptResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllScriptResponse } as QueryAllScriptResponse
    message.Script = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Script.push(Script.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllScriptResponse {
    const message = { ...baseQueryAllScriptResponse } as QueryAllScriptResponse
    message.Script = []
    if (object.Script !== undefined && object.Script !== null) {
      for (const e of object.Script) {
        message.Script.push(Script.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllScriptResponse): unknown {
    const obj: any = {}
    if (message.Script) {
      obj.Script = message.Script.map((e) => (e ? Script.toJSON(e) : undefined))
    } else {
      obj.Script = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllScriptResponse>
  ): QueryAllScriptResponse {
    const message = { ...baseQueryAllScriptResponse } as QueryAllScriptResponse
    message.Script = []
    if (object.Script !== undefined && object.Script !== null) {
      for (const e of object.Script) {
        message.Script.push(Script.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },
}

const baseQueryPrefixStorageRequest: object = { prefix: '' }

export const QueryPrefixStorageRequest = {
  encode(
    message: QueryPrefixStorageRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.prefix !== '') {
      writer.uint32(10).string(message.prefix)
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryPrefixStorageRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryPrefixStorageRequest,
    } as QueryPrefixStorageRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.prefix = reader.string()
          break
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryPrefixStorageRequest {
    const message = {
      ...baseQueryPrefixStorageRequest,
    } as QueryPrefixStorageRequest
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = String(object.prefix)
    } else {
      message.prefix = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryPrefixStorageRequest): unknown {
    const obj: any = {}
    message.prefix !== undefined && (obj.prefix = message.prefix)
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryPrefixStorageRequest>
  ): QueryPrefixStorageRequest {
    const message = {
      ...baseQueryPrefixStorageRequest,
    } as QueryPrefixStorageRequest
    if (object.prefix !== undefined && object.prefix !== null) {
      message.prefix = object.prefix
    } else {
      message.prefix = ''
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },
}

const baseQueryPrefixStorageResponse: object = {}

export const QueryPrefixStorageResponse = {
  encode(
    message: QueryPrefixStorageResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.storage) {
      Storage.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryPrefixStorageResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryPrefixStorageResponse,
    } as QueryPrefixStorageResponse
    message.storage = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.storage.push(Storage.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryPrefixStorageResponse {
    const message = {
      ...baseQueryPrefixStorageResponse,
    } as QueryPrefixStorageResponse
    message.storage = []
    if (object.storage !== undefined && object.storage !== null) {
      for (const e of object.storage) {
        message.storage.push(Storage.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryPrefixStorageResponse): unknown {
    const obj: any = {}
    if (message.storage) {
      obj.storage = message.storage.map((e) =>
        e ? Storage.toJSON(e) : undefined
      )
    } else {
      obj.storage = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryPrefixStorageResponse>
  ): QueryPrefixStorageResponse {
    const message = {
      ...baseQueryPrefixStorageResponse,
    } as QueryPrefixStorageResponse
    message.storage = []
    if (object.storage !== undefined && object.storage !== null) {
      for (const e of object.storage) {
        message.storage.push(Storage.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },
}

const baseQueryScheduledGasPriceAndFeeAtBlockRequest: object = {
  blockheight: 0,
  gaswanted: 0,
}

export const QueryScheduledGasPriceAndFeeAtBlockRequest = {
  encode(
    message: QueryScheduledGasPriceAndFeeAtBlockRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.blockheight !== 0) {
      writer.uint32(8).uint64(message.blockheight)
    }
    if (message.gaswanted !== 0) {
      writer.uint32(16).uint64(message.gaswanted)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryScheduledGasPriceAndFeeAtBlockRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryScheduledGasPriceAndFeeAtBlockRequest,
    } as QueryScheduledGasPriceAndFeeAtBlockRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.blockheight = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.gaswanted = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryScheduledGasPriceAndFeeAtBlockRequest {
    const message = {
      ...baseQueryScheduledGasPriceAndFeeAtBlockRequest,
    } as QueryScheduledGasPriceAndFeeAtBlockRequest
    if (object.blockheight !== undefined && object.blockheight !== null) {
      message.blockheight = Number(object.blockheight)
    } else {
      message.blockheight = 0
    }
    if (object.gaswanted !== undefined && object.gaswanted !== null) {
      message.gaswanted = Number(object.gaswanted)
    } else {
      message.gaswanted = 0
    }
    return message
  },

  toJSON(message: QueryScheduledGasPriceAndFeeAtBlockRequest): unknown {
    const obj: any = {}
    message.blockheight !== undefined && (obj.blockheight = message.blockheight)
    message.gaswanted !== undefined && (obj.gaswanted = message.gaswanted)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryScheduledGasPriceAndFeeAtBlockRequest>
  ): QueryScheduledGasPriceAndFeeAtBlockRequest {
    const message = {
      ...baseQueryScheduledGasPriceAndFeeAtBlockRequest,
    } as QueryScheduledGasPriceAndFeeAtBlockRequest
    if (object.blockheight !== undefined && object.blockheight !== null) {
      message.blockheight = object.blockheight
    } else {
      message.blockheight = 0
    }
    if (object.gaswanted !== undefined && object.gaswanted !== null) {
      message.gaswanted = object.gaswanted
    } else {
      message.gaswanted = 0
    }
    return message
  },
}

const baseQueryScheduledGasPriceAndFeeAtBlockResponse: object = {}

export const QueryScheduledGasPriceAndFeeAtBlockResponse = {
  encode(
    message: QueryScheduledGasPriceAndFeeAtBlockResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.gasprice !== undefined) {
      DecCoin.encode(message.gasprice, writer.uint32(10).fork()).ldelim()
    }
    if (message.gasfee !== undefined) {
      Coin.encode(message.gasfee, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryScheduledGasPriceAndFeeAtBlockResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryScheduledGasPriceAndFeeAtBlockResponse,
    } as QueryScheduledGasPriceAndFeeAtBlockResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.gasprice = DecCoin.decode(reader, reader.uint32())
          break
        case 2:
          message.gasfee = Coin.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryScheduledGasPriceAndFeeAtBlockResponse {
    const message = {
      ...baseQueryScheduledGasPriceAndFeeAtBlockResponse,
    } as QueryScheduledGasPriceAndFeeAtBlockResponse
    if (object.gasprice !== undefined && object.gasprice !== null) {
      message.gasprice = DecCoin.fromJSON(object.gasprice)
    } else {
      message.gasprice = undefined
    }
    if (object.gasfee !== undefined && object.gasfee !== null) {
      message.gasfee = Coin.fromJSON(object.gasfee)
    } else {
      message.gasfee = undefined
    }
    return message
  },

  toJSON(message: QueryScheduledGasPriceAndFeeAtBlockResponse): unknown {
    const obj: any = {}
    message.gasprice !== undefined &&
      (obj.gasprice = message.gasprice
        ? DecCoin.toJSON(message.gasprice)
        : undefined)
    message.gasfee !== undefined &&
      (obj.gasfee = message.gasfee ? Coin.toJSON(message.gasfee) : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryScheduledGasPriceAndFeeAtBlockResponse>
  ): QueryScheduledGasPriceAndFeeAtBlockResponse {
    const message = {
      ...baseQueryScheduledGasPriceAndFeeAtBlockResponse,
    } as QueryScheduledGasPriceAndFeeAtBlockResponse
    if (object.gasprice !== undefined && object.gasprice !== null) {
      message.gasprice = DecCoin.fromPartial(object.gasprice)
    } else {
      message.gasprice = undefined
    }
    if (object.gasfee !== undefined && object.gasfee !== null) {
      message.gasfee = Coin.fromPartial(object.gasfee)
    } else {
      message.gasfee = undefined
    }
    return message
  },
}

const baseQueryGetCronRequest: object = { blockHeight: '' }

export const QueryGetCronRequest = {
  encode(
    message: QueryGetCronRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.blockHeight !== '') {
      writer.uint32(10).string(message.blockHeight)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCronRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCronRequest } as QueryGetCronRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCronRequest {
    const message = { ...baseQueryGetCronRequest } as QueryGetCronRequest
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = String(object.blockHeight)
    } else {
      message.blockHeight = ''
    }
    return message
  },

  toJSON(message: QueryGetCronRequest): unknown {
    const obj: any = {}
    message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCronRequest>): QueryGetCronRequest {
    const message = { ...baseQueryGetCronRequest } as QueryGetCronRequest
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight
    } else {
      message.blockHeight = ''
    }
    return message
  },
}

const baseQueryGetCronResponse: object = {}

export const QueryGetCronResponse = {
  encode(
    message: QueryGetCronResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.cron !== undefined) {
      Cron.encode(message.cron, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetCronResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetCronResponse } as QueryGetCronResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.cron = Cron.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetCronResponse {
    const message = { ...baseQueryGetCronResponse } as QueryGetCronResponse
    if (object.cron !== undefined && object.cron !== null) {
      message.cron = Cron.fromJSON(object.cron)
    } else {
      message.cron = undefined
    }
    return message
  },

  toJSON(message: QueryGetCronResponse): unknown {
    const obj: any = {}
    message.cron !== undefined &&
      (obj.cron = message.cron ? Cron.toJSON(message.cron) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetCronResponse>): QueryGetCronResponse {
    const message = { ...baseQueryGetCronResponse } as QueryGetCronResponse
    if (object.cron !== undefined && object.cron !== null) {
      message.cron = Cron.fromPartial(object.cron)
    } else {
      message.cron = undefined
    }
    return message
  },
}

const baseQueryAllCronRequest: object = {}

export const QueryAllCronRequest = {
  encode(
    message: QueryAllCronRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCronRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCronRequest } as QueryAllCronRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllCronRequest {
    const message = { ...baseQueryAllCronRequest } as QueryAllCronRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCronRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCronRequest>): QueryAllCronRequest {
    const message = { ...baseQueryAllCronRequest } as QueryAllCronRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },
}

const baseQueryAllCronResponse: object = {}

export const QueryAllCronResponse = {
  encode(
    message: QueryAllCronResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.cron) {
      Cron.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllCronResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllCronResponse } as QueryAllCronResponse
    message.cron = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.cron.push(Cron.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllCronResponse {
    const message = { ...baseQueryAllCronResponse } as QueryAllCronResponse
    message.cron = []
    if (object.cron !== undefined && object.cron !== null) {
      for (const e of object.cron) {
        message.cron.push(Cron.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllCronResponse): unknown {
    const obj: any = {}
    if (message.cron) {
      obj.cron = message.cron.map((e) => (e ? Cron.toJSON(e) : undefined))
    } else {
      obj.cron = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllCronResponse>): QueryAllCronResponse {
    const message = { ...baseQueryAllCronResponse } as QueryAllCronResponse
    message.cron = []
    if (object.cron !== undefined && object.cron !== null) {
      for (const e of object.cron) {
        message.cron.push(Cron.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },
}

const baseQueryEncodeProtoAnyRequest: object = { type_url: '', json_value: '' }

export const QueryEncodeProtoAnyRequest = {
  encode(
    message: QueryEncodeProtoAnyRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.type_url !== '') {
      writer.uint32(10).string(message.type_url)
    }
    if (message.json_value !== '') {
      writer.uint32(18).string(message.json_value)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryEncodeProtoAnyRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryEncodeProtoAnyRequest,
    } as QueryEncodeProtoAnyRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.type_url = reader.string()
          break
        case 2:
          message.json_value = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryEncodeProtoAnyRequest {
    const message = {
      ...baseQueryEncodeProtoAnyRequest,
    } as QueryEncodeProtoAnyRequest
    if (object.type_url !== undefined && object.type_url !== null) {
      message.type_url = String(object.type_url)
    } else {
      message.type_url = ''
    }
    if (object.json_value !== undefined && object.json_value !== null) {
      message.json_value = String(object.json_value)
    } else {
      message.json_value = ''
    }
    return message
  },

  toJSON(message: QueryEncodeProtoAnyRequest): unknown {
    const obj: any = {}
    message.type_url !== undefined && (obj.type_url = message.type_url)
    message.json_value !== undefined && (obj.json_value = message.json_value)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryEncodeProtoAnyRequest>
  ): QueryEncodeProtoAnyRequest {
    const message = {
      ...baseQueryEncodeProtoAnyRequest,
    } as QueryEncodeProtoAnyRequest
    if (object.type_url !== undefined && object.type_url !== null) {
      message.type_url = object.type_url
    } else {
      message.type_url = ''
    }
    if (object.json_value !== undefined && object.json_value !== null) {
      message.json_value = object.json_value
    } else {
      message.json_value = ''
    }
    return message
  },
}

const baseQueryEncodeProtoAnyResponse: object = { type_url: '', value: '' }

export const QueryEncodeProtoAnyResponse = {
  encode(
    message: QueryEncodeProtoAnyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.type_url !== '') {
      writer.uint32(10).string(message.type_url)
    }
    if (message.value !== '') {
      writer.uint32(18).string(message.value)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryEncodeProtoAnyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryEncodeProtoAnyResponse,
    } as QueryEncodeProtoAnyResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.type_url = reader.string()
          break
        case 2:
          message.value = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryEncodeProtoAnyResponse {
    const message = {
      ...baseQueryEncodeProtoAnyResponse,
    } as QueryEncodeProtoAnyResponse
    if (object.type_url !== undefined && object.type_url !== null) {
      message.type_url = String(object.type_url)
    } else {
      message.type_url = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value)
    } else {
      message.value = ''
    }
    return message
  },

  toJSON(message: QueryEncodeProtoAnyResponse): unknown {
    const obj: any = {}
    message.type_url !== undefined && (obj.type_url = message.type_url)
    message.value !== undefined && (obj.value = message.value)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryEncodeProtoAnyResponse>
  ): QueryEncodeProtoAnyResponse {
    const message = {
      ...baseQueryEncodeProtoAnyResponse,
    } as QueryEncodeProtoAnyResponse
    if (object.type_url !== undefined && object.type_url !== null) {
      message.type_url = object.type_url
    } else {
      message.type_url = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value
    } else {
      message.value = ''
    }
    return message
  },
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a scheduledRun by index. */
  ScheduledRun(
    request: QueryGetScheduledRunRequest
  ): Promise<QueryGetScheduledRunResponse>
  /** Queries a list of scheduledRun items. */
  ScheduledRunAll(
    request: QueryAllScheduledRunRequest
  ): Promise<QueryAllScheduledRunResponse>
  /** Queries a storage by index. */
  Storage(request: QueryGetStorageRequest): Promise<QueryGetStorageResponse>
  /** Queries a list of storage items. */
  StorageAll(request: QueryAllStorageRequest): Promise<QueryAllStorageResponse>
  /** Queries a script by index. */
  Script(request: QueryGetScriptRequest): Promise<QueryGetScriptResponse>
  /** Queries a script schema by index. */
  Schema(request: QueryGetSchemaRequest): Promise<QueryGetSchemaResponse>
  /** Queries a script wsgi app by index. */
  Wsgi(request: QueryWsgiRequest): Promise<QueryWsgiResponse>
  /** Queries a script by index. */
  QueryScript(request: MsgRun): Promise<MsgRunResponse>
  /** Queries a list of script items. */
  ScriptAll(request: QueryAllScriptRequest): Promise<QueryAllScriptResponse>
  PrefixStorage(
    request: QueryPrefixStorageRequest
  ): Promise<QueryPrefixStorageResponse>
  /** Queries a list of ScheduledGasPriceAtBlock items. */
  ScheduledGasPriceAndFeeAtBlock(
    request: QueryScheduledGasPriceAndFeeAtBlockRequest
  ): Promise<QueryScheduledGasPriceAndFeeAtBlockResponse>
  /** Queries a Cron by index. */
  Cron(request: QueryGetCronRequest): Promise<QueryGetCronResponse>
  /** Queries a list of Cron items. */
  CronAll(request: QueryAllCronRequest): Promise<QueryAllCronResponse>
  /** Queries a list of EncodeProtoAny items. */
  EncodeProtoAny(
    request: QueryEncodeProtoAnyRequest
  ): Promise<QueryEncodeProtoAnyResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  ScheduledRun(
    request: QueryGetScheduledRunRequest
  ): Promise<QueryGetScheduledRunResponse> {
    const data = QueryGetScheduledRunRequest.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'ScheduledRun', data)
    return promise.then((data) =>
      QueryGetScheduledRunResponse.decode(new Reader(data))
    )
  }

  ScheduledRunAll(
    request: QueryAllScheduledRunRequest
  ): Promise<QueryAllScheduledRunResponse> {
    const data = QueryAllScheduledRunRequest.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'ScheduledRunAll', data)
    return promise.then((data) =>
      QueryAllScheduledRunResponse.decode(new Reader(data))
    )
  }

  Storage(request: QueryGetStorageRequest): Promise<QueryGetStorageResponse> {
    const data = QueryGetStorageRequest.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'Storage', data)
    return promise.then((data) =>
      QueryGetStorageResponse.decode(new Reader(data))
    )
  }

  StorageAll(
    request: QueryAllStorageRequest
  ): Promise<QueryAllStorageResponse> {
    const data = QueryAllStorageRequest.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'StorageAll', data)
    return promise.then((data) =>
      QueryAllStorageResponse.decode(new Reader(data))
    )
  }

  Script(request: QueryGetScriptRequest): Promise<QueryGetScriptResponse> {
    const data = QueryGetScriptRequest.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'Script', data)
    return promise.then((data) =>
      QueryGetScriptResponse.decode(new Reader(data))
    )
  }

  Schema(request: QueryGetSchemaRequest): Promise<QueryGetSchemaResponse> {
    const data = QueryGetSchemaRequest.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'Schema', data)
    return promise.then((data) =>
      QueryGetSchemaResponse.decode(new Reader(data))
    )
  }

  Wsgi(request: QueryWsgiRequest): Promise<QueryWsgiResponse> {
    const data = QueryWsgiRequest.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'Wsgi', data)
    return promise.then((data) => QueryWsgiResponse.decode(new Reader(data)))
  }

  QueryScript(request: MsgRun): Promise<MsgRunResponse> {
    const data = MsgRun.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'QueryScript', data)
    return promise.then((data) => MsgRunResponse.decode(new Reader(data)))
  }

  ScriptAll(request: QueryAllScriptRequest): Promise<QueryAllScriptResponse> {
    const data = QueryAllScriptRequest.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'ScriptAll', data)
    return promise.then((data) =>
      QueryAllScriptResponse.decode(new Reader(data))
    )
  }

  PrefixStorage(
    request: QueryPrefixStorageRequest
  ): Promise<QueryPrefixStorageResponse> {
    const data = QueryPrefixStorageRequest.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'PrefixStorage', data)
    return promise.then((data) =>
      QueryPrefixStorageResponse.decode(new Reader(data))
    )
  }

  ScheduledGasPriceAndFeeAtBlock(
    request: QueryScheduledGasPriceAndFeeAtBlockRequest
  ): Promise<QueryScheduledGasPriceAndFeeAtBlockResponse> {
    const data = QueryScheduledGasPriceAndFeeAtBlockRequest.encode(
      request
    ).finish()
    const promise = this.rpc.request(
      'dyson.Query',
      'ScheduledGasPriceAndFeeAtBlock',
      data
    )
    return promise.then((data) =>
      QueryScheduledGasPriceAndFeeAtBlockResponse.decode(new Reader(data))
    )
  }

  Cron(request: QueryGetCronRequest): Promise<QueryGetCronResponse> {
    const data = QueryGetCronRequest.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'Cron', data)
    return promise.then((data) => QueryGetCronResponse.decode(new Reader(data)))
  }

  CronAll(request: QueryAllCronRequest): Promise<QueryAllCronResponse> {
    const data = QueryAllCronRequest.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'CronAll', data)
    return promise.then((data) => QueryAllCronResponse.decode(new Reader(data)))
  }

  EncodeProtoAny(
    request: QueryEncodeProtoAnyRequest
  ): Promise<QueryEncodeProtoAnyResponse> {
    const data = QueryEncodeProtoAnyRequest.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'EncodeProtoAny', data)
    return promise.then((data) =>
      QueryEncodeProtoAnyResponse.decode(new Reader(data))
    )
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
