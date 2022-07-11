/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { SchedualedRun } from '../dyson/schedualed_run'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'
import { Storage } from '../dyson/storage'
import { Script } from '../dyson/script'
import { MsgRunResponse, MsgRun } from '../dyson/msgrun'

export const protobufPackage = 'dyson'

export interface QueryGetSchedualedRunRequest {
  /** inxex is the script address */
  index: string
}

export interface QueryGetSchedualedRunResponse {
  schedualedRun: SchedualedRun | undefined
}

export interface QueryAllSchedualedRunRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllSchedualedRunResponse {
  schedualedRun: SchedualedRun[]
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

const baseQueryGetSchedualedRunRequest: object = { index: '' }

export const QueryGetSchedualedRunRequest = {
  encode(message: QueryGetSchedualedRunRequest, writer: Writer = Writer.create()): Writer {
    if (message.index !== '') {
      writer.uint32(10).string(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSchedualedRunRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSchedualedRunRequest } as QueryGetSchedualedRunRequest
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

  fromJSON(object: any): QueryGetSchedualedRunRequest {
    const message = { ...baseQueryGetSchedualedRunRequest } as QueryGetSchedualedRunRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    return message
  },

  toJSON(message: QueryGetSchedualedRunRequest): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSchedualedRunRequest>): QueryGetSchedualedRunRequest {
    const message = { ...baseQueryGetSchedualedRunRequest } as QueryGetSchedualedRunRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetSchedualedRunResponse: object = {}

export const QueryGetSchedualedRunResponse = {
  encode(message: QueryGetSchedualedRunResponse, writer: Writer = Writer.create()): Writer {
    if (message.schedualedRun !== undefined) {
      SchedualedRun.encode(message.schedualedRun, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetSchedualedRunResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetSchedualedRunResponse } as QueryGetSchedualedRunResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.schedualedRun = SchedualedRun.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetSchedualedRunResponse {
    const message = { ...baseQueryGetSchedualedRunResponse } as QueryGetSchedualedRunResponse
    if (object.schedualedRun !== undefined && object.schedualedRun !== null) {
      message.schedualedRun = SchedualedRun.fromJSON(object.schedualedRun)
    } else {
      message.schedualedRun = undefined
    }
    return message
  },

  toJSON(message: QueryGetSchedualedRunResponse): unknown {
    const obj: any = {}
    message.schedualedRun !== undefined && (obj.schedualedRun = message.schedualedRun ? SchedualedRun.toJSON(message.schedualedRun) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetSchedualedRunResponse>): QueryGetSchedualedRunResponse {
    const message = { ...baseQueryGetSchedualedRunResponse } as QueryGetSchedualedRunResponse
    if (object.schedualedRun !== undefined && object.schedualedRun !== null) {
      message.schedualedRun = SchedualedRun.fromPartial(object.schedualedRun)
    } else {
      message.schedualedRun = undefined
    }
    return message
  }
}

const baseQueryAllSchedualedRunRequest: object = {}

export const QueryAllSchedualedRunRequest = {
  encode(message: QueryAllSchedualedRunRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSchedualedRunRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSchedualedRunRequest } as QueryAllSchedualedRunRequest
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

  fromJSON(object: any): QueryAllSchedualedRunRequest {
    const message = { ...baseQueryAllSchedualedRunRequest } as QueryAllSchedualedRunRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSchedualedRunRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSchedualedRunRequest>): QueryAllSchedualedRunRequest {
    const message = { ...baseQueryAllSchedualedRunRequest } as QueryAllSchedualedRunRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllSchedualedRunResponse: object = {}

export const QueryAllSchedualedRunResponse = {
  encode(message: QueryAllSchedualedRunResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.schedualedRun) {
      SchedualedRun.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllSchedualedRunResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllSchedualedRunResponse } as QueryAllSchedualedRunResponse
    message.schedualedRun = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.schedualedRun.push(SchedualedRun.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllSchedualedRunResponse {
    const message = { ...baseQueryAllSchedualedRunResponse } as QueryAllSchedualedRunResponse
    message.schedualedRun = []
    if (object.schedualedRun !== undefined && object.schedualedRun !== null) {
      for (const e of object.schedualedRun) {
        message.schedualedRun.push(SchedualedRun.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllSchedualedRunResponse): unknown {
    const obj: any = {}
    if (message.schedualedRun) {
      obj.schedualedRun = message.schedualedRun.map((e) => (e ? SchedualedRun.toJSON(e) : undefined))
    } else {
      obj.schedualedRun = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllSchedualedRunResponse>): QueryAllSchedualedRunResponse {
    const message = { ...baseQueryAllSchedualedRunResponse } as QueryAllSchedualedRunResponse
    message.schedualedRun = []
    if (object.schedualedRun !== undefined && object.schedualedRun !== null) {
      for (const e of object.schedualedRun) {
        message.schedualedRun.push(SchedualedRun.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryGetStorageRequest: object = { index: '' }

export const QueryGetStorageRequest = {
  encode(message: QueryGetStorageRequest, writer: Writer = Writer.create()): Writer {
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

  fromPartial(object: DeepPartial<QueryGetStorageRequest>): QueryGetStorageRequest {
    const message = { ...baseQueryGetStorageRequest } as QueryGetStorageRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetStorageResponse: object = {}

export const QueryGetStorageResponse = {
  encode(message: QueryGetStorageResponse, writer: Writer = Writer.create()): Writer {
    if (message.storage !== undefined) {
      Storage.encode(message.storage, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetStorageResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetStorageResponse } as QueryGetStorageResponse
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
    const message = { ...baseQueryGetStorageResponse } as QueryGetStorageResponse
    if (object.storage !== undefined && object.storage !== null) {
      message.storage = Storage.fromJSON(object.storage)
    } else {
      message.storage = undefined
    }
    return message
  },

  toJSON(message: QueryGetStorageResponse): unknown {
    const obj: any = {}
    message.storage !== undefined && (obj.storage = message.storage ? Storage.toJSON(message.storage) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetStorageResponse>): QueryGetStorageResponse {
    const message = { ...baseQueryGetStorageResponse } as QueryGetStorageResponse
    if (object.storage !== undefined && object.storage !== null) {
      message.storage = Storage.fromPartial(object.storage)
    } else {
      message.storage = undefined
    }
    return message
  }
}

const baseQueryAllStorageRequest: object = {}

export const QueryAllStorageRequest = {
  encode(message: QueryAllStorageRequest, writer: Writer = Writer.create()): Writer {
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
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllStorageRequest>): QueryAllStorageRequest {
    const message = { ...baseQueryAllStorageRequest } as QueryAllStorageRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllStorageResponse: object = {}

export const QueryAllStorageResponse = {
  encode(message: QueryAllStorageResponse, writer: Writer = Writer.create()): Writer {
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
    const message = { ...baseQueryAllStorageResponse } as QueryAllStorageResponse
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
    const message = { ...baseQueryAllStorageResponse } as QueryAllStorageResponse
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
      obj.storage = message.storage.map((e) => (e ? Storage.toJSON(e) : undefined))
    } else {
      obj.storage = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllStorageResponse>): QueryAllStorageResponse {
    const message = { ...baseQueryAllStorageResponse } as QueryAllStorageResponse
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
  }
}

const baseQueryGetScriptRequest: object = { index: '' }

export const QueryGetScriptRequest = {
  encode(message: QueryGetScriptRequest, writer: Writer = Writer.create()): Writer {
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

  fromPartial(object: DeepPartial<QueryGetScriptRequest>): QueryGetScriptRequest {
    const message = { ...baseQueryGetScriptRequest } as QueryGetScriptRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetScriptResponse: object = {}

export const QueryGetScriptResponse = {
  encode(message: QueryGetScriptResponse, writer: Writer = Writer.create()): Writer {
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
    message.script !== undefined && (obj.script = message.script ? Script.toJSON(message.script) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetScriptResponse>): QueryGetScriptResponse {
    const message = { ...baseQueryGetScriptResponse } as QueryGetScriptResponse
    if (object.script !== undefined && object.script !== null) {
      message.script = Script.fromPartial(object.script)
    } else {
      message.script = undefined
    }
    return message
  }
}

const baseQueryGetSchemaRequest: object = { index: '' }

export const QueryGetSchemaRequest = {
  encode(message: QueryGetSchemaRequest, writer: Writer = Writer.create()): Writer {
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

  fromPartial(object: DeepPartial<QueryGetSchemaRequest>): QueryGetSchemaRequest {
    const message = { ...baseQueryGetSchemaRequest } as QueryGetSchemaRequest
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    return message
  }
}

const baseQueryGetSchemaResponse: object = { schema: '' }

export const QueryGetSchemaResponse = {
  encode(message: QueryGetSchemaResponse, writer: Writer = Writer.create()): Writer {
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

  fromPartial(object: DeepPartial<QueryGetSchemaResponse>): QueryGetSchemaResponse {
    const message = { ...baseQueryGetSchemaResponse } as QueryGetSchemaResponse
    if (object.schema !== undefined && object.schema !== null) {
      message.schema = object.schema
    } else {
      message.schema = ''
    }
    return message
  }
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
  }
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
    message.httpresponse !== undefined && (obj.httpresponse = message.httpresponse)
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
  }
}

const baseQueryAllScriptRequest: object = {}

export const QueryAllScriptRequest = {
  encode(message: QueryAllScriptRequest, writer: Writer = Writer.create()): Writer {
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
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllScriptRequest>): QueryAllScriptRequest {
    const message = { ...baseQueryAllScriptRequest } as QueryAllScriptRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllScriptResponse: object = {}

export const QueryAllScriptResponse = {
  encode(message: QueryAllScriptResponse, writer: Writer = Writer.create()): Writer {
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
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllScriptResponse>): QueryAllScriptResponse {
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
  }
}

const baseQueryPrefixStorageRequest: object = { prefix: '' }

export const QueryPrefixStorageRequest = {
  encode(message: QueryPrefixStorageRequest, writer: Writer = Writer.create()): Writer {
    if (message.prefix !== '') {
      writer.uint32(10).string(message.prefix)
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryPrefixStorageRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryPrefixStorageRequest } as QueryPrefixStorageRequest
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
    const message = { ...baseQueryPrefixStorageRequest } as QueryPrefixStorageRequest
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
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryPrefixStorageRequest>): QueryPrefixStorageRequest {
    const message = { ...baseQueryPrefixStorageRequest } as QueryPrefixStorageRequest
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
  }
}

const baseQueryPrefixStorageResponse: object = {}

export const QueryPrefixStorageResponse = {
  encode(message: QueryPrefixStorageResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.storage) {
      Storage.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryPrefixStorageResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryPrefixStorageResponse } as QueryPrefixStorageResponse
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
    const message = { ...baseQueryPrefixStorageResponse } as QueryPrefixStorageResponse
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
      obj.storage = message.storage.map((e) => (e ? Storage.toJSON(e) : undefined))
    } else {
      obj.storage = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryPrefixStorageResponse>): QueryPrefixStorageResponse {
    const message = { ...baseQueryPrefixStorageResponse } as QueryPrefixStorageResponse
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
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a schedualedRun by index. */
  SchedualedRun(request: QueryGetSchedualedRunRequest): Promise<QueryGetSchedualedRunResponse>
  /** Queries a list of schedualedRun items. */
  SchedualedRunAll(request: QueryAllSchedualedRunRequest): Promise<QueryAllSchedualedRunResponse>
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
  PrefixStorage(request: QueryPrefixStorageRequest): Promise<QueryPrefixStorageResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  SchedualedRun(request: QueryGetSchedualedRunRequest): Promise<QueryGetSchedualedRunResponse> {
    const data = QueryGetSchedualedRunRequest.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'SchedualedRun', data)
    return promise.then((data) => QueryGetSchedualedRunResponse.decode(new Reader(data)))
  }

  SchedualedRunAll(request: QueryAllSchedualedRunRequest): Promise<QueryAllSchedualedRunResponse> {
    const data = QueryAllSchedualedRunRequest.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'SchedualedRunAll', data)
    return promise.then((data) => QueryAllSchedualedRunResponse.decode(new Reader(data)))
  }

  Storage(request: QueryGetStorageRequest): Promise<QueryGetStorageResponse> {
    const data = QueryGetStorageRequest.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'Storage', data)
    return promise.then((data) => QueryGetStorageResponse.decode(new Reader(data)))
  }

  StorageAll(request: QueryAllStorageRequest): Promise<QueryAllStorageResponse> {
    const data = QueryAllStorageRequest.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'StorageAll', data)
    return promise.then((data) => QueryAllStorageResponse.decode(new Reader(data)))
  }

  Script(request: QueryGetScriptRequest): Promise<QueryGetScriptResponse> {
    const data = QueryGetScriptRequest.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'Script', data)
    return promise.then((data) => QueryGetScriptResponse.decode(new Reader(data)))
  }

  Schema(request: QueryGetSchemaRequest): Promise<QueryGetSchemaResponse> {
    const data = QueryGetSchemaRequest.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'Schema', data)
    return promise.then((data) => QueryGetSchemaResponse.decode(new Reader(data)))
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
    return promise.then((data) => QueryAllScriptResponse.decode(new Reader(data)))
  }

  PrefixStorage(request: QueryPrefixStorageRequest): Promise<QueryPrefixStorageResponse> {
    const data = QueryPrefixStorageRequest.encode(request).finish()
    const promise = this.rpc.request('dyson.Query', 'PrefixStorage', data)
    return promise.then((data) => QueryPrefixStorageResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
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
