/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { Params } from '../names/params'
import { Name } from '../names/name'
import {
  PageRequest,
  PageResponse,
} from '../cosmos/base/query/v1beta1/pagination'
import { Expirations } from '../names/expirations'

export const protobufPackage = 'names'

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined
}

export interface QueryGetNameRequest {
  name: string
}

export interface QueryGetNameResponse {
  name: Name | undefined
}

export interface QueryAllNameRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllNameResponse {
  name: Name[]
  pagination: PageResponse | undefined
}

export interface QueryResolveRequest {
  name: string
}

export interface QueryResolveResponse {
  address: string
}

export interface QueryGenerateCommitRequest {
  owner: string
  name: string
  salt: string
}

export interface QueryGenerateCommitResponse {
  commit: string
}

export interface QueryGetExpirationsRequest {
  blockHeight: string
}

export interface QueryGetExpirationsResponse {
  expirations: Expirations | undefined
}

export interface QueryAllExpirationsRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllExpirationsResponse {
  expirations: Expirations[]
  pagination: PageResponse | undefined
}

const baseQueryParamsRequest: object = {}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest
    return message
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest
    return message
  },
}

const baseQueryParamsResponse: object = {}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params)
    } else {
      message.params = undefined
    }
    return message
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {}
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params)
    } else {
      message.params = undefined
    }
    return message
  },
}

const baseQueryGetNameRequest: object = { name: '' }

export const QueryGetNameRequest = {
  encode(
    message: QueryGetNameRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNameRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetNameRequest } as QueryGetNameRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetNameRequest {
    const message = { ...baseQueryGetNameRequest } as QueryGetNameRequest
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    return message
  },

  toJSON(message: QueryGetNameRequest): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetNameRequest>): QueryGetNameRequest {
    const message = { ...baseQueryGetNameRequest } as QueryGetNameRequest
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    return message
  },
}

const baseQueryGetNameResponse: object = {}

export const QueryGetNameResponse = {
  encode(
    message: QueryGetNameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== undefined) {
      Name.encode(message.name, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetNameResponse } as QueryGetNameResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = Name.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetNameResponse {
    const message = { ...baseQueryGetNameResponse } as QueryGetNameResponse
    if (object.name !== undefined && object.name !== null) {
      message.name = Name.fromJSON(object.name)
    } else {
      message.name = undefined
    }
    return message
  },

  toJSON(message: QueryGetNameResponse): unknown {
    const obj: any = {}
    message.name !== undefined &&
      (obj.name = message.name ? Name.toJSON(message.name) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetNameResponse>): QueryGetNameResponse {
    const message = { ...baseQueryGetNameResponse } as QueryGetNameResponse
    if (object.name !== undefined && object.name !== null) {
      message.name = Name.fromPartial(object.name)
    } else {
      message.name = undefined
    }
    return message
  },
}

const baseQueryAllNameRequest: object = {}

export const QueryAllNameRequest = {
  encode(
    message: QueryAllNameRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllNameRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllNameRequest } as QueryAllNameRequest
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

  fromJSON(object: any): QueryAllNameRequest {
    const message = { ...baseQueryAllNameRequest } as QueryAllNameRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllNameRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllNameRequest>): QueryAllNameRequest {
    const message = { ...baseQueryAllNameRequest } as QueryAllNameRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },
}

const baseQueryAllNameResponse: object = {}

export const QueryAllNameResponse = {
  encode(
    message: QueryAllNameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.name) {
      Name.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllNameResponse } as QueryAllNameResponse
    message.name = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name.push(Name.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllNameResponse {
    const message = { ...baseQueryAllNameResponse } as QueryAllNameResponse
    message.name = []
    if (object.name !== undefined && object.name !== null) {
      for (const e of object.name) {
        message.name.push(Name.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllNameResponse): unknown {
    const obj: any = {}
    if (message.name) {
      obj.name = message.name.map((e) => (e ? Name.toJSON(e) : undefined))
    } else {
      obj.name = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllNameResponse>): QueryAllNameResponse {
    const message = { ...baseQueryAllNameResponse } as QueryAllNameResponse
    message.name = []
    if (object.name !== undefined && object.name !== null) {
      for (const e of object.name) {
        message.name.push(Name.fromPartial(e))
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

const baseQueryResolveRequest: object = { name: '' }

export const QueryResolveRequest = {
  encode(
    message: QueryResolveRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryResolveRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryResolveRequest } as QueryResolveRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryResolveRequest {
    const message = { ...baseQueryResolveRequest } as QueryResolveRequest
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    return message
  },

  toJSON(message: QueryResolveRequest): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    return obj
  },

  fromPartial(object: DeepPartial<QueryResolveRequest>): QueryResolveRequest {
    const message = { ...baseQueryResolveRequest } as QueryResolveRequest
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    return message
  },
}

const baseQueryResolveResponse: object = { address: '' }

export const QueryResolveResponse = {
  encode(
    message: QueryResolveResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== '') {
      writer.uint32(10).string(message.address)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryResolveResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryResolveResponse } as QueryResolveResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryResolveResponse {
    const message = { ...baseQueryResolveResponse } as QueryResolveResponse
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    return message
  },

  toJSON(message: QueryResolveResponse): unknown {
    const obj: any = {}
    message.address !== undefined && (obj.address = message.address)
    return obj
  },

  fromPartial(object: DeepPartial<QueryResolveResponse>): QueryResolveResponse {
    const message = { ...baseQueryResolveResponse } as QueryResolveResponse
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    return message
  },
}

const baseQueryGenerateCommitRequest: object = { owner: '', name: '', salt: '' }

export const QueryGenerateCommitRequest = {
  encode(
    message: QueryGenerateCommitRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.salt !== '') {
      writer.uint32(26).string(message.salt)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGenerateCommitRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGenerateCommitRequest,
    } as QueryGenerateCommitRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        case 3:
          message.salt = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGenerateCommitRequest {
    const message = {
      ...baseQueryGenerateCommitRequest,
    } as QueryGenerateCommitRequest
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = String(object.salt)
    } else {
      message.salt = ''
    }
    return message
  },

  toJSON(message: QueryGenerateCommitRequest): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.name !== undefined && (obj.name = message.name)
    message.salt !== undefined && (obj.salt = message.salt)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGenerateCommitRequest>
  ): QueryGenerateCommitRequest {
    const message = {
      ...baseQueryGenerateCommitRequest,
    } as QueryGenerateCommitRequest
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = object.salt
    } else {
      message.salt = ''
    }
    return message
  },
}

const baseQueryGenerateCommitResponse: object = { commit: '' }

export const QueryGenerateCommitResponse = {
  encode(
    message: QueryGenerateCommitResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.commit !== '') {
      writer.uint32(10).string(message.commit)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGenerateCommitResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGenerateCommitResponse,
    } as QueryGenerateCommitResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.commit = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGenerateCommitResponse {
    const message = {
      ...baseQueryGenerateCommitResponse,
    } as QueryGenerateCommitResponse
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = String(object.commit)
    } else {
      message.commit = ''
    }
    return message
  },

  toJSON(message: QueryGenerateCommitResponse): unknown {
    const obj: any = {}
    message.commit !== undefined && (obj.commit = message.commit)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGenerateCommitResponse>
  ): QueryGenerateCommitResponse {
    const message = {
      ...baseQueryGenerateCommitResponse,
    } as QueryGenerateCommitResponse
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = object.commit
    } else {
      message.commit = ''
    }
    return message
  },
}

const baseQueryGetExpirationsRequest: object = { blockHeight: '' }

export const QueryGetExpirationsRequest = {
  encode(
    message: QueryGetExpirationsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.blockHeight !== '') {
      writer.uint32(10).string(message.blockHeight)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetExpirationsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetExpirationsRequest,
    } as QueryGetExpirationsRequest
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

  fromJSON(object: any): QueryGetExpirationsRequest {
    const message = {
      ...baseQueryGetExpirationsRequest,
    } as QueryGetExpirationsRequest
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = String(object.blockHeight)
    } else {
      message.blockHeight = ''
    }
    return message
  },

  toJSON(message: QueryGetExpirationsRequest): unknown {
    const obj: any = {}
    message.blockHeight !== undefined && (obj.blockHeight = message.blockHeight)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetExpirationsRequest>
  ): QueryGetExpirationsRequest {
    const message = {
      ...baseQueryGetExpirationsRequest,
    } as QueryGetExpirationsRequest
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight
    } else {
      message.blockHeight = ''
    }
    return message
  },
}

const baseQueryGetExpirationsResponse: object = {}

export const QueryGetExpirationsResponse = {
  encode(
    message: QueryGetExpirationsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.expirations !== undefined) {
      Expirations.encode(message.expirations, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetExpirationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryGetExpirationsResponse,
    } as QueryGetExpirationsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.expirations = Expirations.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetExpirationsResponse {
    const message = {
      ...baseQueryGetExpirationsResponse,
    } as QueryGetExpirationsResponse
    if (object.expirations !== undefined && object.expirations !== null) {
      message.expirations = Expirations.fromJSON(object.expirations)
    } else {
      message.expirations = undefined
    }
    return message
  },

  toJSON(message: QueryGetExpirationsResponse): unknown {
    const obj: any = {}
    message.expirations !== undefined &&
      (obj.expirations = message.expirations
        ? Expirations.toJSON(message.expirations)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryGetExpirationsResponse>
  ): QueryGetExpirationsResponse {
    const message = {
      ...baseQueryGetExpirationsResponse,
    } as QueryGetExpirationsResponse
    if (object.expirations !== undefined && object.expirations !== null) {
      message.expirations = Expirations.fromPartial(object.expirations)
    } else {
      message.expirations = undefined
    }
    return message
  },
}

const baseQueryAllExpirationsRequest: object = {}

export const QueryAllExpirationsRequest = {
  encode(
    message: QueryAllExpirationsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllExpirationsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllExpirationsRequest,
    } as QueryAllExpirationsRequest
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

  fromJSON(object: any): QueryAllExpirationsRequest {
    const message = {
      ...baseQueryAllExpirationsRequest,
    } as QueryAllExpirationsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllExpirationsRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllExpirationsRequest>
  ): QueryAllExpirationsRequest {
    const message = {
      ...baseQueryAllExpirationsRequest,
    } as QueryAllExpirationsRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },
}

const baseQueryAllExpirationsResponse: object = {}

export const QueryAllExpirationsResponse = {
  encode(
    message: QueryAllExpirationsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.expirations) {
      Expirations.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllExpirationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAllExpirationsResponse,
    } as QueryAllExpirationsResponse
    message.expirations = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.expirations.push(Expirations.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllExpirationsResponse {
    const message = {
      ...baseQueryAllExpirationsResponse,
    } as QueryAllExpirationsResponse
    message.expirations = []
    if (object.expirations !== undefined && object.expirations !== null) {
      for (const e of object.expirations) {
        message.expirations.push(Expirations.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllExpirationsResponse): unknown {
    const obj: any = {}
    if (message.expirations) {
      obj.expirations = message.expirations.map((e) =>
        e ? Expirations.toJSON(e) : undefined
      )
    } else {
      obj.expirations = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAllExpirationsResponse>
  ): QueryAllExpirationsResponse {
    const message = {
      ...baseQueryAllExpirationsResponse,
    } as QueryAllExpirationsResponse
    message.expirations = []
    if (object.expirations !== undefined && object.expirations !== null) {
      for (const e of object.expirations) {
        message.expirations.push(Expirations.fromPartial(e))
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>
  /** Queries a Name by index. */
  Name(request: QueryGetNameRequest): Promise<QueryGetNameResponse>
  /** Queries a list of Name items. */
  NameAll(request: QueryAllNameRequest): Promise<QueryAllNameResponse>
  /** Queries a list of Resolve items. */
  Resolve(request: QueryResolveRequest): Promise<QueryResolveResponse>
  /** Queries a list of GenerateCommit items. */
  GenerateCommit(
    request: QueryGenerateCommitRequest
  ): Promise<QueryGenerateCommitResponse>
  /** Queries a Expirations by index. */
  Expirations(
    request: QueryGetExpirationsRequest
  ): Promise<QueryGetExpirationsResponse>
  /** Queries a list of Expirations items. */
  ExpirationsAll(
    request: QueryAllExpirationsRequest
  ): Promise<QueryAllExpirationsResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish()
    const promise = this.rpc.request('names.Query', 'Params', data)
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)))
  }

  Name(request: QueryGetNameRequest): Promise<QueryGetNameResponse> {
    const data = QueryGetNameRequest.encode(request).finish()
    const promise = this.rpc.request('names.Query', 'Name', data)
    return promise.then((data) => QueryGetNameResponse.decode(new Reader(data)))
  }

  NameAll(request: QueryAllNameRequest): Promise<QueryAllNameResponse> {
    const data = QueryAllNameRequest.encode(request).finish()
    const promise = this.rpc.request('names.Query', 'NameAll', data)
    return promise.then((data) => QueryAllNameResponse.decode(new Reader(data)))
  }

  Resolve(request: QueryResolveRequest): Promise<QueryResolveResponse> {
    const data = QueryResolveRequest.encode(request).finish()
    const promise = this.rpc.request('names.Query', 'Resolve', data)
    return promise.then((data) => QueryResolveResponse.decode(new Reader(data)))
  }

  GenerateCommit(
    request: QueryGenerateCommitRequest
  ): Promise<QueryGenerateCommitResponse> {
    const data = QueryGenerateCommitRequest.encode(request).finish()
    const promise = this.rpc.request('names.Query', 'GenerateCommit', data)
    return promise.then((data) =>
      QueryGenerateCommitResponse.decode(new Reader(data))
    )
  }

  Expirations(
    request: QueryGetExpirationsRequest
  ): Promise<QueryGetExpirationsResponse> {
    const data = QueryGetExpirationsRequest.encode(request).finish()
    const promise = this.rpc.request('names.Query', 'Expirations', data)
    return promise.then((data) =>
      QueryGetExpirationsResponse.decode(new Reader(data))
    )
  }

  ExpirationsAll(
    request: QueryAllExpirationsRequest
  ): Promise<QueryAllExpirationsResponse> {
    const data = QueryAllExpirationsRequest.encode(request).finish()
    const promise = this.rpc.request('names.Query', 'ExpirationsAll', data)
    return promise.then((data) =>
      QueryAllExpirationsResponse.decode(new Reader(data))
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
