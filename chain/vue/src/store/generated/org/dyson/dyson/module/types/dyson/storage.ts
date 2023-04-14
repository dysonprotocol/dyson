/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'dyson'

export interface Storage {
  creator: string
  index: string
  data: string
}

const baseStorage: object = { creator: '', index: '', data: '' }

export const Storage = {
  encode(message: Storage, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.data !== '') {
      writer.uint32(26).string(message.data)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Storage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseStorage } as Storage
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.index = reader.string()
          break
        case 3:
          message.data = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Storage {
    const message = { ...baseStorage } as Storage
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index)
    } else {
      message.index = ''
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data)
    } else {
      message.data = ''
    }
    return message
  },

  toJSON(message: Storage): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.data !== undefined && (obj.data = message.data)
    return obj
  },

  fromPartial(object: DeepPartial<Storage>): Storage {
    const message = { ...baseStorage } as Storage
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = ''
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data
    } else {
      message.data = ''
    }
    return message
  },
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
