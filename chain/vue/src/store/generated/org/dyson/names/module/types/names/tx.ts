/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'

export const protobufPackage = 'names'

export interface MsgRegister {
  owner: string
  name: string
  destination: string
  price: string
}

export interface MsgRegisterResponse {}

export interface MsgCreateName {
  owner: string
  name: string
  destination: string
  price: string
  expires: string
  authorized: string
  precommit: string
  salt: string
}

export interface MsgCreateNameResponse {}

export interface MsgUpdateName {
  owner: string
  name: string
  destination: string
  price: string
  expires: string
  authorized: string
  precommit: string
  salt: string
}

export interface MsgUpdateNameResponse {}

export interface MsgDeleteName {
  owner: string
  name: string
}

export interface MsgDeleteNameResponse {}

const baseMsgRegister: object = { owner: '', name: '', destination: '', price: '' }

export const MsgRegister = {
  encode(message: MsgRegister, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.destination !== '') {
      writer.uint32(26).string(message.destination)
    }
    if (message.price !== '') {
      writer.uint32(34).string(message.price)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRegister {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRegister } as MsgRegister
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
          message.destination = reader.string()
          break
        case 4:
          message.price = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgRegister {
    const message = { ...baseMsgRegister } as MsgRegister
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
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = String(object.destination)
    } else {
      message.destination = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price)
    } else {
      message.price = ''
    }
    return message
  },

  toJSON(message: MsgRegister): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.name !== undefined && (obj.name = message.name)
    message.destination !== undefined && (obj.destination = message.destination)
    message.price !== undefined && (obj.price = message.price)
    return obj
  },

  fromPartial(object: DeepPartial<MsgRegister>): MsgRegister {
    const message = { ...baseMsgRegister } as MsgRegister
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
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = object.destination
    } else {
      message.destination = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price
    } else {
      message.price = ''
    }
    return message
  }
}

const baseMsgRegisterResponse: object = {}

export const MsgRegisterResponse = {
  encode(_: MsgRegisterResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRegisterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRegisterResponse } as MsgRegisterResponse
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

  fromJSON(_: any): MsgRegisterResponse {
    const message = { ...baseMsgRegisterResponse } as MsgRegisterResponse
    return message
  },

  toJSON(_: MsgRegisterResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgRegisterResponse>): MsgRegisterResponse {
    const message = { ...baseMsgRegisterResponse } as MsgRegisterResponse
    return message
  }
}

const baseMsgCreateName: object = { owner: '', name: '', destination: '', price: '', expires: '', authorized: '', precommit: '', salt: '' }

export const MsgCreateName = {
  encode(message: MsgCreateName, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.destination !== '') {
      writer.uint32(26).string(message.destination)
    }
    if (message.price !== '') {
      writer.uint32(34).string(message.price)
    }
    if (message.expires !== '') {
      writer.uint32(42).string(message.expires)
    }
    if (message.authorized !== '') {
      writer.uint32(50).string(message.authorized)
    }
    if (message.precommit !== '') {
      writer.uint32(58).string(message.precommit)
    }
    if (message.salt !== '') {
      writer.uint32(66).string(message.salt)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateName } as MsgCreateName
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
          message.destination = reader.string()
          break
        case 4:
          message.price = reader.string()
          break
        case 5:
          message.expires = reader.string()
          break
        case 6:
          message.authorized = reader.string()
          break
        case 7:
          message.precommit = reader.string()
          break
        case 8:
          message.salt = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateName {
    const message = { ...baseMsgCreateName } as MsgCreateName
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
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = String(object.destination)
    } else {
      message.destination = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price)
    } else {
      message.price = ''
    }
    if (object.expires !== undefined && object.expires !== null) {
      message.expires = String(object.expires)
    } else {
      message.expires = ''
    }
    if (object.authorized !== undefined && object.authorized !== null) {
      message.authorized = String(object.authorized)
    } else {
      message.authorized = ''
    }
    if (object.precommit !== undefined && object.precommit !== null) {
      message.precommit = String(object.precommit)
    } else {
      message.precommit = ''
    }
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = String(object.salt)
    } else {
      message.salt = ''
    }
    return message
  },

  toJSON(message: MsgCreateName): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.name !== undefined && (obj.name = message.name)
    message.destination !== undefined && (obj.destination = message.destination)
    message.price !== undefined && (obj.price = message.price)
    message.expires !== undefined && (obj.expires = message.expires)
    message.authorized !== undefined && (obj.authorized = message.authorized)
    message.precommit !== undefined && (obj.precommit = message.precommit)
    message.salt !== undefined && (obj.salt = message.salt)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateName>): MsgCreateName {
    const message = { ...baseMsgCreateName } as MsgCreateName
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
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = object.destination
    } else {
      message.destination = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price
    } else {
      message.price = ''
    }
    if (object.expires !== undefined && object.expires !== null) {
      message.expires = object.expires
    } else {
      message.expires = ''
    }
    if (object.authorized !== undefined && object.authorized !== null) {
      message.authorized = object.authorized
    } else {
      message.authorized = ''
    }
    if (object.precommit !== undefined && object.precommit !== null) {
      message.precommit = object.precommit
    } else {
      message.precommit = ''
    }
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = object.salt
    } else {
      message.salt = ''
    }
    return message
  }
}

const baseMsgCreateNameResponse: object = {}

export const MsgCreateNameResponse = {
  encode(_: MsgCreateNameResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateNameResponse } as MsgCreateNameResponse
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

  fromJSON(_: any): MsgCreateNameResponse {
    const message = { ...baseMsgCreateNameResponse } as MsgCreateNameResponse
    return message
  },

  toJSON(_: MsgCreateNameResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgCreateNameResponse>): MsgCreateNameResponse {
    const message = { ...baseMsgCreateNameResponse } as MsgCreateNameResponse
    return message
  }
}

const baseMsgUpdateName: object = { owner: '', name: '', destination: '', price: '', expires: '', authorized: '', precommit: '', salt: '' }

export const MsgUpdateName = {
  encode(message: MsgUpdateName, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.destination !== '') {
      writer.uint32(26).string(message.destination)
    }
    if (message.price !== '') {
      writer.uint32(34).string(message.price)
    }
    if (message.expires !== '') {
      writer.uint32(42).string(message.expires)
    }
    if (message.authorized !== '') {
      writer.uint32(50).string(message.authorized)
    }
    if (message.precommit !== '') {
      writer.uint32(58).string(message.precommit)
    }
    if (message.salt !== '') {
      writer.uint32(66).string(message.salt)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateName } as MsgUpdateName
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
          message.destination = reader.string()
          break
        case 4:
          message.price = reader.string()
          break
        case 5:
          message.expires = reader.string()
          break
        case 6:
          message.authorized = reader.string()
          break
        case 7:
          message.precommit = reader.string()
          break
        case 8:
          message.salt = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateName {
    const message = { ...baseMsgUpdateName } as MsgUpdateName
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
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = String(object.destination)
    } else {
      message.destination = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price)
    } else {
      message.price = ''
    }
    if (object.expires !== undefined && object.expires !== null) {
      message.expires = String(object.expires)
    } else {
      message.expires = ''
    }
    if (object.authorized !== undefined && object.authorized !== null) {
      message.authorized = String(object.authorized)
    } else {
      message.authorized = ''
    }
    if (object.precommit !== undefined && object.precommit !== null) {
      message.precommit = String(object.precommit)
    } else {
      message.precommit = ''
    }
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = String(object.salt)
    } else {
      message.salt = ''
    }
    return message
  },

  toJSON(message: MsgUpdateName): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.name !== undefined && (obj.name = message.name)
    message.destination !== undefined && (obj.destination = message.destination)
    message.price !== undefined && (obj.price = message.price)
    message.expires !== undefined && (obj.expires = message.expires)
    message.authorized !== undefined && (obj.authorized = message.authorized)
    message.precommit !== undefined && (obj.precommit = message.precommit)
    message.salt !== undefined && (obj.salt = message.salt)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateName>): MsgUpdateName {
    const message = { ...baseMsgUpdateName } as MsgUpdateName
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
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = object.destination
    } else {
      message.destination = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price
    } else {
      message.price = ''
    }
    if (object.expires !== undefined && object.expires !== null) {
      message.expires = object.expires
    } else {
      message.expires = ''
    }
    if (object.authorized !== undefined && object.authorized !== null) {
      message.authorized = object.authorized
    } else {
      message.authorized = ''
    }
    if (object.precommit !== undefined && object.precommit !== null) {
      message.precommit = object.precommit
    } else {
      message.precommit = ''
    }
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = object.salt
    } else {
      message.salt = ''
    }
    return message
  }
}

const baseMsgUpdateNameResponse: object = {}

export const MsgUpdateNameResponse = {
  encode(_: MsgUpdateNameResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateNameResponse } as MsgUpdateNameResponse
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

  fromJSON(_: any): MsgUpdateNameResponse {
    const message = { ...baseMsgUpdateNameResponse } as MsgUpdateNameResponse
    return message
  },

  toJSON(_: MsgUpdateNameResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateNameResponse>): MsgUpdateNameResponse {
    const message = { ...baseMsgUpdateNameResponse } as MsgUpdateNameResponse
    return message
  }
}

const baseMsgDeleteName: object = { owner: '', name: '' }

export const MsgDeleteName = {
  encode(message: MsgDeleteName, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteName {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteName } as MsgDeleteName
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteName {
    const message = { ...baseMsgDeleteName } as MsgDeleteName
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
    return message
  },

  toJSON(message: MsgDeleteName): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.name !== undefined && (obj.name = message.name)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteName>): MsgDeleteName {
    const message = { ...baseMsgDeleteName } as MsgDeleteName
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
    return message
  }
}

const baseMsgDeleteNameResponse: object = {}

export const MsgDeleteNameResponse = {
  encode(_: MsgDeleteNameResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteNameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteNameResponse } as MsgDeleteNameResponse
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

  fromJSON(_: any): MsgDeleteNameResponse {
    const message = { ...baseMsgDeleteNameResponse } as MsgDeleteNameResponse
    return message
  },

  toJSON(_: MsgDeleteNameResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteNameResponse>): MsgDeleteNameResponse {
    const message = { ...baseMsgDeleteNameResponse } as MsgDeleteNameResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  Register(request: MsgRegister): Promise<MsgRegisterResponse>
  CreateName(request: MsgCreateName): Promise<MsgCreateNameResponse>
  UpdateName(request: MsgUpdateName): Promise<MsgUpdateNameResponse>
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteName(request: MsgDeleteName): Promise<MsgDeleteNameResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Register(request: MsgRegister): Promise<MsgRegisterResponse> {
    const data = MsgRegister.encode(request).finish()
    const promise = this.rpc.request('names.Msg', 'Register', data)
    return promise.then((data) => MsgRegisterResponse.decode(new Reader(data)))
  }

  CreateName(request: MsgCreateName): Promise<MsgCreateNameResponse> {
    const data = MsgCreateName.encode(request).finish()
    const promise = this.rpc.request('names.Msg', 'CreateName', data)
    return promise.then((data) => MsgCreateNameResponse.decode(new Reader(data)))
  }

  UpdateName(request: MsgUpdateName): Promise<MsgUpdateNameResponse> {
    const data = MsgUpdateName.encode(request).finish()
    const promise = this.rpc.request('names.Msg', 'UpdateName', data)
    return promise.then((data) => MsgUpdateNameResponse.decode(new Reader(data)))
  }

  DeleteName(request: MsgDeleteName): Promise<MsgDeleteNameResponse> {
    const data = MsgDeleteName.encode(request).finish()
    const promise = this.rpc.request('names.Msg', 'DeleteName', data)
    return promise.then((data) => MsgDeleteNameResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
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
