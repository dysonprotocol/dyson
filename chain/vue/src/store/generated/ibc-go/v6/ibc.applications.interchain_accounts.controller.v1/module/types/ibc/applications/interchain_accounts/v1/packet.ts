/* eslint-disable */
import { Any } from '../../../../google/protobuf/any'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'ibc.applications.interchain_accounts.v1'

/**
 * Type defines a classification of message issued from a controller chain to its associated interchain accounts
 * host
 */
export enum Type {
  /** TYPE_UNSPECIFIED - Default zero value enumeration */
  TYPE_UNSPECIFIED = 0,
  /** TYPE_EXECUTE_TX - Execute a transaction on an interchain accounts host chain */
  TYPE_EXECUTE_TX = 1,
  UNRECOGNIZED = -1,
}

export function typeFromJSON(object: any): Type {
  switch (object) {
    case 0:
    case 'TYPE_UNSPECIFIED':
      return Type.TYPE_UNSPECIFIED
    case 1:
    case 'TYPE_EXECUTE_TX':
      return Type.TYPE_EXECUTE_TX
    case -1:
    case 'UNRECOGNIZED':
    default:
      return Type.UNRECOGNIZED
  }
}

export function typeToJSON(object: Type): string {
  switch (object) {
    case Type.TYPE_UNSPECIFIED:
      return 'TYPE_UNSPECIFIED'
    case Type.TYPE_EXECUTE_TX:
      return 'TYPE_EXECUTE_TX'
    default:
      return 'UNKNOWN'
  }
}

/** InterchainAccountPacketData is comprised of a raw transaction, type of transaction and optional memo field. */
export interface InterchainAccountPacketData {
  type: Type
  data: Uint8Array
  memo: string
}

/** CosmosTx contains a list of sdk.Msg's. It should be used when sending transactions to an SDK host chain. */
export interface CosmosTx {
  messages: Any[]
}

const baseInterchainAccountPacketData: object = { type: 0, memo: '' }

export const InterchainAccountPacketData = {
  encode(
    message: InterchainAccountPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type)
    }
    if (message.data.length !== 0) {
      writer.uint32(18).bytes(message.data)
    }
    if (message.memo !== '') {
      writer.uint32(26).string(message.memo)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): InterchainAccountPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseInterchainAccountPacketData,
    } as InterchainAccountPacketData
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any
          break
        case 2:
          message.data = reader.bytes()
          break
        case 3:
          message.memo = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): InterchainAccountPacketData {
    const message = {
      ...baseInterchainAccountPacketData,
    } as InterchainAccountPacketData
    if (object.type !== undefined && object.type !== null) {
      message.type = typeFromJSON(object.type)
    } else {
      message.type = 0
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data)
    }
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = String(object.memo)
    } else {
      message.memo = ''
    }
    return message
  },

  toJSON(message: InterchainAccountPacketData): unknown {
    const obj: any = {}
    message.type !== undefined && (obj.type = typeToJSON(message.type))
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : new Uint8Array()
      ))
    message.memo !== undefined && (obj.memo = message.memo)
    return obj
  },

  fromPartial(
    object: DeepPartial<InterchainAccountPacketData>
  ): InterchainAccountPacketData {
    const message = {
      ...baseInterchainAccountPacketData,
    } as InterchainAccountPacketData
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type
    } else {
      message.type = 0
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data
    } else {
      message.data = new Uint8Array()
    }
    if (object.memo !== undefined && object.memo !== null) {
      message.memo = object.memo
    } else {
      message.memo = ''
    }
    return message
  },
}

const baseCosmosTx: object = {}

export const CosmosTx = {
  encode(message: CosmosTx, writer: Writer = Writer.create()): Writer {
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): CosmosTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseCosmosTx } as CosmosTx
    message.messages = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CosmosTx {
    const message = { ...baseCosmosTx } as CosmosTx
    message.messages = []
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(Any.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: CosmosTx): unknown {
    const obj: any = {}
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? Any.toJSON(e) : undefined
      )
    } else {
      obj.messages = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<CosmosTx>): CosmosTx {
    const message = { ...baseCosmosTx } as CosmosTx
    message.messages = []
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(Any.fromPartial(e))
      }
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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'))
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64)
  const arr = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i)
  }
  return arr
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'))
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = []
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]))
  }
  return btoa(bin.join(''))
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
