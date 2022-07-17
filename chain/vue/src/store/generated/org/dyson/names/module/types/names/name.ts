/* eslint-disable */
import { Timestamp } from '../google/protobuf/timestamp'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'names'

export interface Name {
  name: string
  destination: string
  price: string
  expires: Date | undefined
  authorized: string
  owner: string
  registered: Date | undefined
}

const baseName: object = { name: '', destination: '', price: '', authorized: '', owner: '' }

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
    if (message.expires !== undefined) {
      Timestamp.encode(toTimestamp(message.expires), writer.uint32(34).fork()).ldelim()
    }
    if (message.authorized !== '') {
      writer.uint32(42).string(message.authorized)
    }
    if (message.owner !== '') {
      writer.uint32(66).string(message.owner)
    }
    if (message.registered !== undefined) {
      Timestamp.encode(toTimestamp(message.registered), writer.uint32(82).fork()).ldelim()
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
          message.expires = fromTimestamp(Timestamp.decode(reader, reader.uint32()))
          break
        case 5:
          message.authorized = reader.string()
          break
        case 8:
          message.owner = reader.string()
          break
        case 10:
          message.registered = fromTimestamp(Timestamp.decode(reader, reader.uint32()))
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
      message.expires = fromJsonTimestamp(object.expires)
    } else {
      message.expires = undefined
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
    if (object.registered !== undefined && object.registered !== null) {
      message.registered = fromJsonTimestamp(object.registered)
    } else {
      message.registered = undefined
    }
    return message
  },

  toJSON(message: Name): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.destination !== undefined && (obj.destination = message.destination)
    message.price !== undefined && (obj.price = message.price)
    message.expires !== undefined && (obj.expires = message.expires !== undefined ? message.expires.toISOString() : null)
    message.authorized !== undefined && (obj.authorized = message.authorized)
    message.owner !== undefined && (obj.owner = message.owner)
    message.registered !== undefined && (obj.registered = message.registered !== undefined ? message.registered.toISOString() : null)
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
      message.expires = undefined
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
    if (object.registered !== undefined && object.registered !== null) {
      message.registered = object.registered
    } else {
      message.registered = undefined
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000
  const nanos = (date.getTime() % 1_000) * 1_000_000
  return { seconds, nanos }
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000
  millis += t.nanos / 1_000_000
  return new Date(millis)
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o
  } else if (typeof o === 'string') {
    return new Date(o)
  } else {
    return fromTimestamp(Timestamp.fromJSON(o))
  }
}
