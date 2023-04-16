/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'names'

export interface Name {
  name: string
  destination: string
  price: string
  authorized: string
  owner: string
  expiration_height: number
  registration_height: number
  auto_renew: boolean
}

const baseName: object = {
  name: '',
  destination: '',
  price: '',
  authorized: '',
  owner: '',
  expiration_height: 0,
  registration_height: 0,
  auto_renew: false,
}

export const Name = {
  encode(message: Name, writer: Writer = Writer.create()): Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    if (message.destination !== '') {
      writer.uint32(18).string(message.destination)
    }
    if (message.price !== '') {
      writer.uint32(26).string(message.price)
    }
    if (message.authorized !== '') {
      writer.uint32(42).string(message.authorized)
    }
    if (message.owner !== '') {
      writer.uint32(66).string(message.owner)
    }
    if (message.expiration_height !== 0) {
      writer.uint32(88).uint64(message.expiration_height)
    }
    if (message.registration_height !== 0) {
      writer.uint32(96).uint64(message.registration_height)
    }
    if (message.auto_renew === true) {
      writer.uint32(104).bool(message.auto_renew)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Name {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseName } as Name
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
          break
        case 2:
          message.destination = reader.string()
          break
        case 3:
          message.price = reader.string()
          break
        case 5:
          message.authorized = reader.string()
          break
        case 8:
          message.owner = reader.string()
          break
        case 11:
          message.expiration_height = longToNumber(reader.uint64() as Long)
          break
        case 12:
          message.registration_height = longToNumber(reader.uint64() as Long)
          break
        case 13:
          message.auto_renew = reader.bool()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Name {
    const message = { ...baseName } as Name
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
    if (object.authorized !== undefined && object.authorized !== null) {
      message.authorized = String(object.authorized)
    } else {
      message.authorized = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    if (
      object.expiration_height !== undefined &&
      object.expiration_height !== null
    ) {
      message.expiration_height = Number(object.expiration_height)
    } else {
      message.expiration_height = 0
    }
    if (
      object.registration_height !== undefined &&
      object.registration_height !== null
    ) {
      message.registration_height = Number(object.registration_height)
    } else {
      message.registration_height = 0
    }
    if (object.auto_renew !== undefined && object.auto_renew !== null) {
      message.auto_renew = Boolean(object.auto_renew)
    } else {
      message.auto_renew = false
    }
    return message
  },

  toJSON(message: Name): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.destination !== undefined && (obj.destination = message.destination)
    message.price !== undefined && (obj.price = message.price)
    message.authorized !== undefined && (obj.authorized = message.authorized)
    message.owner !== undefined && (obj.owner = message.owner)
    message.expiration_height !== undefined &&
      (obj.expiration_height = message.expiration_height)
    message.registration_height !== undefined &&
      (obj.registration_height = message.registration_height)
    message.auto_renew !== undefined && (obj.auto_renew = message.auto_renew)
    return obj
  },

  fromPartial(object: DeepPartial<Name>): Name {
    const message = { ...baseName } as Name
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
    if (object.authorized !== undefined && object.authorized !== null) {
      message.authorized = object.authorized
    } else {
      message.authorized = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (
      object.expiration_height !== undefined &&
      object.expiration_height !== null
    ) {
      message.expiration_height = object.expiration_height
    } else {
      message.expiration_height = 0
    }
    if (
      object.registration_height !== undefined &&
      object.registration_height !== null
    ) {
      message.registration_height = object.registration_height
    } else {
      message.registration_height = 0
    }
    if (object.auto_renew !== undefined && object.auto_renew !== null) {
      message.auto_renew = object.auto_renew
    } else {
      message.auto_renew = false
    }
    return message
  },
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
