/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'dyson'

/** MsgRun runs a script at a specific address */
export interface MsgRun {
  /** The account sending the transaction */
  creator: string
  /** dys address of the scrit to call */
  address: string
  /** optional extra source code to append to the end of the script before running */
  extraLines: string
  /** optional function to call */
  functionName: string
  /** optional args to call the function with */
  args: string
  /** optional kwargs to run */
  kwargs: string
  /** optional comma seperated list of coins to send the script (for example "123dys,456token") */
  coins: string
}

export interface MsgRunResponse {
  response: string
}

const baseMsgRun: object = { creator: '', address: '', extraLines: '', functionName: '', args: '', kwargs: '', coins: '' }

export const MsgRun = {
  encode(message: MsgRun, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address)
    }
    if (message.extraLines !== '') {
      writer.uint32(26).string(message.extraLines)
    }
    if (message.functionName !== '') {
      writer.uint32(34).string(message.functionName)
    }
    if (message.args !== '') {
      writer.uint32(42).string(message.args)
    }
    if (message.kwargs !== '') {
      writer.uint32(50).string(message.kwargs)
    }
    if (message.coins !== '') {
      writer.uint32(58).string(message.coins)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRun {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRun } as MsgRun
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.address = reader.string()
          break
        case 3:
          message.extraLines = reader.string()
          break
        case 4:
          message.functionName = reader.string()
          break
        case 5:
          message.args = reader.string()
          break
        case 6:
          message.kwargs = reader.string()
          break
        case 7:
          message.coins = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgRun {
    const message = { ...baseMsgRun } as MsgRun
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address)
    } else {
      message.address = ''
    }
    if (object.extraLines !== undefined && object.extraLines !== null) {
      message.extraLines = String(object.extraLines)
    } else {
      message.extraLines = ''
    }
    if (object.functionName !== undefined && object.functionName !== null) {
      message.functionName = String(object.functionName)
    } else {
      message.functionName = ''
    }
    if (object.args !== undefined && object.args !== null) {
      message.args = String(object.args)
    } else {
      message.args = ''
    }
    if (object.kwargs !== undefined && object.kwargs !== null) {
      message.kwargs = String(object.kwargs)
    } else {
      message.kwargs = ''
    }
    if (object.coins !== undefined && object.coins !== null) {
      message.coins = String(object.coins)
    } else {
      message.coins = ''
    }
    return message
  },

  toJSON(message: MsgRun): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.address !== undefined && (obj.address = message.address)
    message.extraLines !== undefined && (obj.extraLines = message.extraLines)
    message.functionName !== undefined && (obj.functionName = message.functionName)
    message.args !== undefined && (obj.args = message.args)
    message.kwargs !== undefined && (obj.kwargs = message.kwargs)
    message.coins !== undefined && (obj.coins = message.coins)
    return obj
  },

  fromPartial(object: DeepPartial<MsgRun>): MsgRun {
    const message = { ...baseMsgRun } as MsgRun
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address
    } else {
      message.address = ''
    }
    if (object.extraLines !== undefined && object.extraLines !== null) {
      message.extraLines = object.extraLines
    } else {
      message.extraLines = ''
    }
    if (object.functionName !== undefined && object.functionName !== null) {
      message.functionName = object.functionName
    } else {
      message.functionName = ''
    }
    if (object.args !== undefined && object.args !== null) {
      message.args = object.args
    } else {
      message.args = ''
    }
    if (object.kwargs !== undefined && object.kwargs !== null) {
      message.kwargs = object.kwargs
    } else {
      message.kwargs = ''
    }
    if (object.coins !== undefined && object.coins !== null) {
      message.coins = object.coins
    } else {
      message.coins = ''
    }
    return message
  }
}

const baseMsgRunResponse: object = { response: '' }

export const MsgRunResponse = {
  encode(message: MsgRunResponse, writer: Writer = Writer.create()): Writer {
    if (message.response !== '') {
      writer.uint32(10).string(message.response)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRunResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRunResponse } as MsgRunResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.response = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgRunResponse {
    const message = { ...baseMsgRunResponse } as MsgRunResponse
    if (object.response !== undefined && object.response !== null) {
      message.response = String(object.response)
    } else {
      message.response = ''
    }
    return message
  },

  toJSON(message: MsgRunResponse): unknown {
    const obj: any = {}
    message.response !== undefined && (obj.response = message.response)
    return obj
  },

  fromPartial(object: DeepPartial<MsgRunResponse>): MsgRunResponse {
    const message = { ...baseMsgRunResponse } as MsgRunResponse
    if (object.response !== undefined && object.response !== null) {
      message.response = object.response
    } else {
      message.response = ''
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
