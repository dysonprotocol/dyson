/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'names'

export interface Name {
  name: string
  destination: string
  price: string
  expires: string
  authorized: string
  precommit: string
  salt: string
  owner: string
}

const baseName: object = { name: '', destination: '', price: '', expires: '', authorized: '', precommit: '', salt: '', owner: '' }

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
    if (message.expires !== '') {
      writer.uint32(34).string(message.expires)
    }
    if (message.authorized !== '') {
      writer.uint32(42).string(message.authorized)
    }
    if (message.precommit !== '') {
      writer.uint32(50).string(message.precommit)
    }
    if (message.salt !== '') {
      writer.uint32(58).string(message.salt)
    }
    if (message.owner !== '') {
      writer.uint32(66).string(message.owner)
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
        case 4:
          message.expires = reader.string()
          break
        case 5:
          message.authorized = reader.string()
          break
        case 6:
          message.precommit = reader.string()
          break
        case 7:
          message.salt = reader.string()
          break
        case 8:
          message.owner = reader.string()
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
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    return message
  },

  toJSON(message: Name): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.destination !== undefined && (obj.destination = message.destination)
    message.price !== undefined && (obj.price = message.price)
    message.expires !== undefined && (obj.expires = message.expires)
    message.authorized !== undefined && (obj.authorized = message.authorized)
    message.precommit !== undefined && (obj.precommit = message.precommit)
    message.salt !== undefined && (obj.salt = message.salt)
    message.owner !== undefined && (obj.owner = message.owner)
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
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    return message
  }
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
