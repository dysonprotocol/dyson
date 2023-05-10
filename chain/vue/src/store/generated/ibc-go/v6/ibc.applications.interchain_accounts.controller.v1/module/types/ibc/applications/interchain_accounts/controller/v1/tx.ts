/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { InterchainAccountPacketData } from '../../../../../ibc/applications/interchain_accounts/v1/packet'

export const protobufPackage =
  'ibc.applications.interchain_accounts.controller.v1'

/** MsgRegisterInterchainAccount defines the payload for Msg/MsgRegisterInterchainAccount */
export interface MsgRegisterInterchainAccount {
  owner: string
  connection_id: string
  version: string
}

/** MsgRegisterInterchainAccountResponse defines the response for Msg/MsgRegisterInterchainAccountResponse */
export interface MsgRegisterInterchainAccountResponse {
  channel_id: string
}

/** MsgSendTx defines the payload for Msg/SendTx */
export interface MsgSendTx {
  owner: string
  connection_id: string
  packet_data: InterchainAccountPacketData | undefined
  /**
   * Relative timeout timestamp provided will be added to the current block time during transaction execution.
   * The timeout timestamp must be non-zero.
   */
  relative_timeout: number
}

/** MsgSendTxResponse defines the response for MsgSendTx */
export interface MsgSendTxResponse {
  sequence: number
}

const baseMsgRegisterInterchainAccount: object = {
  owner: '',
  connection_id: '',
  version: '',
}

export const MsgRegisterInterchainAccount = {
  encode(
    message: MsgRegisterInterchainAccount,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.connection_id !== '') {
      writer.uint32(18).string(message.connection_id)
    }
    if (message.version !== '') {
      writer.uint32(26).string(message.version)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRegisterInterchainAccount {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgRegisterInterchainAccount,
    } as MsgRegisterInterchainAccount
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string()
          break
        case 2:
          message.connection_id = reader.string()
          break
        case 3:
          message.version = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgRegisterInterchainAccount {
    const message = {
      ...baseMsgRegisterInterchainAccount,
    } as MsgRegisterInterchainAccount
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connection_id = String(object.connection_id)
    } else {
      message.connection_id = ''
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = String(object.version)
    } else {
      message.version = ''
    }
    return message
  },

  toJSON(message: MsgRegisterInterchainAccount): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.connection_id !== undefined &&
      (obj.connection_id = message.connection_id)
    message.version !== undefined && (obj.version = message.version)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgRegisterInterchainAccount>
  ): MsgRegisterInterchainAccount {
    const message = {
      ...baseMsgRegisterInterchainAccount,
    } as MsgRegisterInterchainAccount
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connection_id = object.connection_id
    } else {
      message.connection_id = ''
    }
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version
    } else {
      message.version = ''
    }
    return message
  },
}

const baseMsgRegisterInterchainAccountResponse: object = { channel_id: '' }

export const MsgRegisterInterchainAccountResponse = {
  encode(
    message: MsgRegisterInterchainAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.channel_id !== '') {
      writer.uint32(10).string(message.channel_id)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRegisterInterchainAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgRegisterInterchainAccountResponse,
    } as MsgRegisterInterchainAccountResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.channel_id = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgRegisterInterchainAccountResponse {
    const message = {
      ...baseMsgRegisterInterchainAccountResponse,
    } as MsgRegisterInterchainAccountResponse
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = String(object.channel_id)
    } else {
      message.channel_id = ''
    }
    return message
  },

  toJSON(message: MsgRegisterInterchainAccountResponse): unknown {
    const obj: any = {}
    message.channel_id !== undefined && (obj.channel_id = message.channel_id)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgRegisterInterchainAccountResponse>
  ): MsgRegisterInterchainAccountResponse {
    const message = {
      ...baseMsgRegisterInterchainAccountResponse,
    } as MsgRegisterInterchainAccountResponse
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channel_id = object.channel_id
    } else {
      message.channel_id = ''
    }
    return message
  },
}

const baseMsgSendTx: object = {
  owner: '',
  connection_id: '',
  relative_timeout: 0,
}

export const MsgSendTx = {
  encode(message: MsgSendTx, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.connection_id !== '') {
      writer.uint32(18).string(message.connection_id)
    }
    if (message.packet_data !== undefined) {
      InterchainAccountPacketData.encode(
        message.packet_data,
        writer.uint32(26).fork()
      ).ldelim()
    }
    if (message.relative_timeout !== 0) {
      writer.uint32(32).uint64(message.relative_timeout)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendTx {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSendTx } as MsgSendTx
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string()
          break
        case 2:
          message.connection_id = reader.string()
          break
        case 3:
          message.packet_data = InterchainAccountPacketData.decode(
            reader,
            reader.uint32()
          )
          break
        case 4:
          message.relative_timeout = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgSendTx {
    const message = { ...baseMsgSendTx } as MsgSendTx
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connection_id = String(object.connection_id)
    } else {
      message.connection_id = ''
    }
    if (object.packet_data !== undefined && object.packet_data !== null) {
      message.packet_data = InterchainAccountPacketData.fromJSON(
        object.packet_data
      )
    } else {
      message.packet_data = undefined
    }
    if (
      object.relative_timeout !== undefined &&
      object.relative_timeout !== null
    ) {
      message.relative_timeout = Number(object.relative_timeout)
    } else {
      message.relative_timeout = 0
    }
    return message
  },

  toJSON(message: MsgSendTx): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.connection_id !== undefined &&
      (obj.connection_id = message.connection_id)
    message.packet_data !== undefined &&
      (obj.packet_data = message.packet_data
        ? InterchainAccountPacketData.toJSON(message.packet_data)
        : undefined)
    message.relative_timeout !== undefined &&
      (obj.relative_timeout = message.relative_timeout)
    return obj
  },

  fromPartial(object: DeepPartial<MsgSendTx>): MsgSendTx {
    const message = { ...baseMsgSendTx } as MsgSendTx
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.connection_id !== undefined && object.connection_id !== null) {
      message.connection_id = object.connection_id
    } else {
      message.connection_id = ''
    }
    if (object.packet_data !== undefined && object.packet_data !== null) {
      message.packet_data = InterchainAccountPacketData.fromPartial(
        object.packet_data
      )
    } else {
      message.packet_data = undefined
    }
    if (
      object.relative_timeout !== undefined &&
      object.relative_timeout !== null
    ) {
      message.relative_timeout = object.relative_timeout
    } else {
      message.relative_timeout = 0
    }
    return message
  },
}

const baseMsgSendTxResponse: object = { sequence: 0 }

export const MsgSendTxResponse = {
  encode(message: MsgSendTxResponse, writer: Writer = Writer.create()): Writer {
    if (message.sequence !== 0) {
      writer.uint32(8).uint64(message.sequence)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendTxResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSendTxResponse } as MsgSendTxResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.sequence = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgSendTxResponse {
    const message = { ...baseMsgSendTxResponse } as MsgSendTxResponse
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Number(object.sequence)
    } else {
      message.sequence = 0
    }
    return message
  },

  toJSON(message: MsgSendTxResponse): unknown {
    const obj: any = {}
    message.sequence !== undefined && (obj.sequence = message.sequence)
    return obj
  },

  fromPartial(object: DeepPartial<MsgSendTxResponse>): MsgSendTxResponse {
    const message = { ...baseMsgSendTxResponse } as MsgSendTxResponse
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence
    } else {
      message.sequence = 0
    }
    return message
  },
}

/** Msg defines the 27-interchain-accounts/controller Msg service. */
export interface Msg {
  /** RegisterInterchainAccount defines a rpc handler for MsgRegisterInterchainAccount. */
  RegisterInterchainAccount(
    request: MsgRegisterInterchainAccount
  ): Promise<MsgRegisterInterchainAccountResponse>
  /** SendTx defines a rpc handler for MsgSendTx. */
  SendTx(request: MsgSendTx): Promise<MsgSendTxResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  RegisterInterchainAccount(
    request: MsgRegisterInterchainAccount
  ): Promise<MsgRegisterInterchainAccountResponse> {
    const data = MsgRegisterInterchainAccount.encode(request).finish()
    const promise = this.rpc.request(
      'ibc.applications.interchain_accounts.controller.v1.Msg',
      'RegisterInterchainAccount',
      data
    )
    return promise.then((data) =>
      MsgRegisterInterchainAccountResponse.decode(new Reader(data))
    )
  }

  SendTx(request: MsgSendTx): Promise<MsgSendTxResponse> {
    const data = MsgSendTx.encode(request).finish()
    const promise = this.rpc.request(
      'ibc.applications.interchain_accounts.controller.v1.Msg',
      'SendTx',
      data
    )
    return promise.then((data) => MsgSendTxResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>
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
