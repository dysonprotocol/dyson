/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'dyson'

export interface Script {
  creator: string
  index: string
  code: string
}

const baseScript: object = { creator: '', index: '', code: '' }

export const Script = {
  encode(message: Script, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.index !== '') {
      writer.uint32(18).string(message.index)
    }
    if (message.code !== '') {
      writer.uint32(26).string(message.code)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Script {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseScript } as Script
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
          message.code = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Script {
    const message = { ...baseScript } as Script
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
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code)
    } else {
      message.code = ''
    }
    return message
  },

  toJSON(message: Script): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.index !== undefined && (obj.index = message.index)
    message.code !== undefined && (obj.code = message.code)
    return obj
  },

  fromPartial(object: DeepPartial<Script>): Script {
    const message = { ...baseScript } as Script
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
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code
    } else {
      message.code = ''
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
