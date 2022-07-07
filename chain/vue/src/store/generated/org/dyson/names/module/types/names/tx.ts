/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'
import { Timestamp } from '../google/protobuf/timestamp'
import { Name } from '../names/name'

export const protobufPackage = 'names'

export interface MsgRegister {
  owner: string
  /** The Shake256(salt + name) hexdigest */
  commit: string
  /** The price that this name is valued at and can be purchaced for. The yearly fee is 1% of this price. */
  price: string
}

export interface MsgRegisterResponse {
  /** fee paid which is 1% of the price */
  fee: string
  /** when this name expires */
  expires: Date | undefined
}

export interface MsgCreateName {
  owner: string
  name: string
  destination: string
  price: string
  expires: Date | undefined
  authorized: string
  commit: string
  salt: string
}

export interface MsgCreateNameResponse {}

export interface MsgUpdateName {
  owner: string
  name: string
  destination: string
  price: string
  expires: Date | undefined
  authorized: string
  commit: string
  salt: string
}

export interface MsgUpdateNameResponse {}

export interface MsgDeleteName {
  owner: string
  name: string
}

export interface MsgDeleteNameResponse {}

export interface MsgReveal {
  owner: string
  name: string
  salt: string
}

export interface MsgRevealResponse {
  name: Name | undefined
}

export interface MsgSetPriceAndExtend {
  owner: string
  name: string
  price: string
}

export interface MsgSetPriceAndExtendResponse {
  expiry: Date | undefined
}

export interface MsgOfferTo {
  owner: string
  name: string
  newOwner: string
}

export interface MsgOfferToResponse {}

export interface MsgAccept {
  newOwner: string
  name: string
}

export interface MsgAcceptResponse {}

export interface MsgBuy {
  buyer: string
  name: string
}

export interface MsgBuyResponse {}

export interface MsgMintCoins {
  owner: string
  amount: string
  denom: string
}

export interface MsgMintCoinsResponse {}

export interface MsgBurnCoins {
  owner: string
  amount: string
  denom: string
}

export interface MsgBurnCoinsResponse {}

export interface MsgForceTransfer {
  owner: string
  from: string
  to: string
  amount: string
  denom: string
}

export interface MsgForceTransferResponse {}

const baseMsgRegister: object = { owner: '', commit: '', price: '' }

export const MsgRegister = {
  encode(message: MsgRegister, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.commit !== '') {
      writer.uint32(18).string(message.commit)
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
          message.commit = reader.string()
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
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = String(object.commit)
    } else {
      message.commit = ''
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
    message.commit !== undefined && (obj.commit = message.commit)
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
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = object.commit
    } else {
      message.commit = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price
    } else {
      message.price = ''
    }
    return message
  }
}

const baseMsgRegisterResponse: object = { fee: '' }

export const MsgRegisterResponse = {
  encode(message: MsgRegisterResponse, writer: Writer = Writer.create()): Writer {
    if (message.fee !== '') {
      writer.uint32(10).string(message.fee)
    }
    if (message.expires !== undefined) {
      Timestamp.encode(toTimestamp(message.expires), writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRegisterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRegisterResponse } as MsgRegisterResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.fee = reader.string()
          break
        case 2:
          message.expires = fromTimestamp(Timestamp.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgRegisterResponse {
    const message = { ...baseMsgRegisterResponse } as MsgRegisterResponse
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = String(object.fee)
    } else {
      message.fee = ''
    }
    if (object.expires !== undefined && object.expires !== null) {
      message.expires = fromJsonTimestamp(object.expires)
    } else {
      message.expires = undefined
    }
    return message
  },

  toJSON(message: MsgRegisterResponse): unknown {
    const obj: any = {}
    message.fee !== undefined && (obj.fee = message.fee)
    message.expires !== undefined && (obj.expires = message.expires !== undefined ? message.expires.toISOString() : null)
    return obj
  },

  fromPartial(object: DeepPartial<MsgRegisterResponse>): MsgRegisterResponse {
    const message = { ...baseMsgRegisterResponse } as MsgRegisterResponse
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee
    } else {
      message.fee = ''
    }
    if (object.expires !== undefined && object.expires !== null) {
      message.expires = object.expires
    } else {
      message.expires = undefined
    }
    return message
  }
}

const baseMsgCreateName: object = { owner: '', name: '', destination: '', price: '', authorized: '', commit: '', salt: '' }

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
    if (message.expires !== undefined) {
      Timestamp.encode(toTimestamp(message.expires), writer.uint32(42).fork()).ldelim()
    }
    if (message.authorized !== '') {
      writer.uint32(50).string(message.authorized)
    }
    if (message.commit !== '') {
      writer.uint32(58).string(message.commit)
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
          message.expires = fromTimestamp(Timestamp.decode(reader, reader.uint32()))
          break
        case 6:
          message.authorized = reader.string()
          break
        case 7:
          message.commit = reader.string()
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
      message.expires = fromJsonTimestamp(object.expires)
    } else {
      message.expires = undefined
    }
    if (object.authorized !== undefined && object.authorized !== null) {
      message.authorized = String(object.authorized)
    } else {
      message.authorized = ''
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = String(object.commit)
    } else {
      message.commit = ''
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
    message.expires !== undefined && (obj.expires = message.expires !== undefined ? message.expires.toISOString() : null)
    message.authorized !== undefined && (obj.authorized = message.authorized)
    message.commit !== undefined && (obj.commit = message.commit)
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
      message.expires = undefined
    }
    if (object.authorized !== undefined && object.authorized !== null) {
      message.authorized = object.authorized
    } else {
      message.authorized = ''
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = object.commit
    } else {
      message.commit = ''
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

const baseMsgUpdateName: object = { owner: '', name: '', destination: '', price: '', authorized: '', commit: '', salt: '' }

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
    if (message.expires !== undefined) {
      Timestamp.encode(toTimestamp(message.expires), writer.uint32(42).fork()).ldelim()
    }
    if (message.authorized !== '') {
      writer.uint32(50).string(message.authorized)
    }
    if (message.commit !== '') {
      writer.uint32(58).string(message.commit)
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
          message.expires = fromTimestamp(Timestamp.decode(reader, reader.uint32()))
          break
        case 6:
          message.authorized = reader.string()
          break
        case 7:
          message.commit = reader.string()
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
      message.expires = fromJsonTimestamp(object.expires)
    } else {
      message.expires = undefined
    }
    if (object.authorized !== undefined && object.authorized !== null) {
      message.authorized = String(object.authorized)
    } else {
      message.authorized = ''
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = String(object.commit)
    } else {
      message.commit = ''
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
    message.expires !== undefined && (obj.expires = message.expires !== undefined ? message.expires.toISOString() : null)
    message.authorized !== undefined && (obj.authorized = message.authorized)
    message.commit !== undefined && (obj.commit = message.commit)
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
      message.expires = undefined
    }
    if (object.authorized !== undefined && object.authorized !== null) {
      message.authorized = object.authorized
    } else {
      message.authorized = ''
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = object.commit
    } else {
      message.commit = ''
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

const baseMsgReveal: object = { owner: '', name: '', salt: '' }

export const MsgReveal = {
  encode(message: MsgReveal, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgReveal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgReveal } as MsgReveal
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

  fromJSON(object: any): MsgReveal {
    const message = { ...baseMsgReveal } as MsgReveal
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

  toJSON(message: MsgReveal): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.name !== undefined && (obj.name = message.name)
    message.salt !== undefined && (obj.salt = message.salt)
    return obj
  },

  fromPartial(object: DeepPartial<MsgReveal>): MsgReveal {
    const message = { ...baseMsgReveal } as MsgReveal
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
  }
}

const baseMsgRevealResponse: object = {}

export const MsgRevealResponse = {
  encode(message: MsgRevealResponse, writer: Writer = Writer.create()): Writer {
    if (message.name !== undefined) {
      Name.encode(message.name, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRevealResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRevealResponse } as MsgRevealResponse
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

  fromJSON(object: any): MsgRevealResponse {
    const message = { ...baseMsgRevealResponse } as MsgRevealResponse
    if (object.name !== undefined && object.name !== null) {
      message.name = Name.fromJSON(object.name)
    } else {
      message.name = undefined
    }
    return message
  },

  toJSON(message: MsgRevealResponse): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name ? Name.toJSON(message.name) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MsgRevealResponse>): MsgRevealResponse {
    const message = { ...baseMsgRevealResponse } as MsgRevealResponse
    if (object.name !== undefined && object.name !== null) {
      message.name = Name.fromPartial(object.name)
    } else {
      message.name = undefined
    }
    return message
  }
}

const baseMsgSetPriceAndExtend: object = { owner: '', name: '', price: '' }

export const MsgSetPriceAndExtend = {
  encode(message: MsgSetPriceAndExtend, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.price !== '') {
      writer.uint32(26).string(message.price)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetPriceAndExtend {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSetPriceAndExtend } as MsgSetPriceAndExtend
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
          message.price = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgSetPriceAndExtend {
    const message = { ...baseMsgSetPriceAndExtend } as MsgSetPriceAndExtend
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
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price)
    } else {
      message.price = ''
    }
    return message
  },

  toJSON(message: MsgSetPriceAndExtend): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.name !== undefined && (obj.name = message.name)
    message.price !== undefined && (obj.price = message.price)
    return obj
  },

  fromPartial(object: DeepPartial<MsgSetPriceAndExtend>): MsgSetPriceAndExtend {
    const message = { ...baseMsgSetPriceAndExtend } as MsgSetPriceAndExtend
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
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price
    } else {
      message.price = ''
    }
    return message
  }
}

const baseMsgSetPriceAndExtendResponse: object = {}

export const MsgSetPriceAndExtendResponse = {
  encode(message: MsgSetPriceAndExtendResponse, writer: Writer = Writer.create()): Writer {
    if (message.expiry !== undefined) {
      Timestamp.encode(toTimestamp(message.expiry), writer.uint32(42).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetPriceAndExtendResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSetPriceAndExtendResponse } as MsgSetPriceAndExtendResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 5:
          message.expiry = fromTimestamp(Timestamp.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgSetPriceAndExtendResponse {
    const message = { ...baseMsgSetPriceAndExtendResponse } as MsgSetPriceAndExtendResponse
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = fromJsonTimestamp(object.expiry)
    } else {
      message.expiry = undefined
    }
    return message
  },

  toJSON(message: MsgSetPriceAndExtendResponse): unknown {
    const obj: any = {}
    message.expiry !== undefined && (obj.expiry = message.expiry !== undefined ? message.expiry.toISOString() : null)
    return obj
  },

  fromPartial(object: DeepPartial<MsgSetPriceAndExtendResponse>): MsgSetPriceAndExtendResponse {
    const message = { ...baseMsgSetPriceAndExtendResponse } as MsgSetPriceAndExtendResponse
    if (object.expiry !== undefined && object.expiry !== null) {
      message.expiry = object.expiry
    } else {
      message.expiry = undefined
    }
    return message
  }
}

const baseMsgOfferTo: object = { owner: '', name: '', newOwner: '' }

export const MsgOfferTo = {
  encode(message: MsgOfferTo, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.newOwner !== '') {
      writer.uint32(26).string(message.newOwner)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgOfferTo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgOfferTo } as MsgOfferTo
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
          message.newOwner = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgOfferTo {
    const message = { ...baseMsgOfferTo } as MsgOfferTo
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
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = String(object.newOwner)
    } else {
      message.newOwner = ''
    }
    return message
  },

  toJSON(message: MsgOfferTo): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.name !== undefined && (obj.name = message.name)
    message.newOwner !== undefined && (obj.newOwner = message.newOwner)
    return obj
  },

  fromPartial(object: DeepPartial<MsgOfferTo>): MsgOfferTo {
    const message = { ...baseMsgOfferTo } as MsgOfferTo
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
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = object.newOwner
    } else {
      message.newOwner = ''
    }
    return message
  }
}

const baseMsgOfferToResponse: object = {}

export const MsgOfferToResponse = {
  encode(_: MsgOfferToResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgOfferToResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgOfferToResponse } as MsgOfferToResponse
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

  fromJSON(_: any): MsgOfferToResponse {
    const message = { ...baseMsgOfferToResponse } as MsgOfferToResponse
    return message
  },

  toJSON(_: MsgOfferToResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgOfferToResponse>): MsgOfferToResponse {
    const message = { ...baseMsgOfferToResponse } as MsgOfferToResponse
    return message
  }
}

const baseMsgAccept: object = { newOwner: '', name: '' }

export const MsgAccept = {
  encode(message: MsgAccept, writer: Writer = Writer.create()): Writer {
    if (message.newOwner !== '') {
      writer.uint32(10).string(message.newOwner)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAccept {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgAccept } as MsgAccept
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.newOwner = reader.string()
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

  fromJSON(object: any): MsgAccept {
    const message = { ...baseMsgAccept } as MsgAccept
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = String(object.newOwner)
    } else {
      message.newOwner = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    return message
  },

  toJSON(message: MsgAccept): unknown {
    const obj: any = {}
    message.newOwner !== undefined && (obj.newOwner = message.newOwner)
    message.name !== undefined && (obj.name = message.name)
    return obj
  },

  fromPartial(object: DeepPartial<MsgAccept>): MsgAccept {
    const message = { ...baseMsgAccept } as MsgAccept
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = object.newOwner
    } else {
      message.newOwner = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    return message
  }
}

const baseMsgAcceptResponse: object = {}

export const MsgAcceptResponse = {
  encode(_: MsgAcceptResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAcceptResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgAcceptResponse } as MsgAcceptResponse
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

  fromJSON(_: any): MsgAcceptResponse {
    const message = { ...baseMsgAcceptResponse } as MsgAcceptResponse
    return message
  },

  toJSON(_: MsgAcceptResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgAcceptResponse>): MsgAcceptResponse {
    const message = { ...baseMsgAcceptResponse } as MsgAcceptResponse
    return message
  }
}

const baseMsgBuy: object = { buyer: '', name: '' }

export const MsgBuy = {
  encode(message: MsgBuy, writer: Writer = Writer.create()): Writer {
    if (message.buyer !== '') {
      writer.uint32(10).string(message.buyer)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuy {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBuy } as MsgBuy
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.buyer = reader.string()
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

  fromJSON(object: any): MsgBuy {
    const message = { ...baseMsgBuy } as MsgBuy
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer)
    } else {
      message.buyer = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    return message
  },

  toJSON(message: MsgBuy): unknown {
    const obj: any = {}
    message.buyer !== undefined && (obj.buyer = message.buyer)
    message.name !== undefined && (obj.name = message.name)
    return obj
  },

  fromPartial(object: DeepPartial<MsgBuy>): MsgBuy {
    const message = { ...baseMsgBuy } as MsgBuy
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer
    } else {
      message.buyer = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    return message
  }
}

const baseMsgBuyResponse: object = {}

export const MsgBuyResponse = {
  encode(_: MsgBuyResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBuyResponse } as MsgBuyResponse
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

  fromJSON(_: any): MsgBuyResponse {
    const message = { ...baseMsgBuyResponse } as MsgBuyResponse
    return message
  },

  toJSON(_: MsgBuyResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgBuyResponse>): MsgBuyResponse {
    const message = { ...baseMsgBuyResponse } as MsgBuyResponse
    return message
  }
}

const baseMsgMintCoins: object = { owner: '', amount: '', denom: '' }

export const MsgMintCoins = {
  encode(message: MsgMintCoins, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.amount !== '') {
      writer.uint32(18).string(message.amount)
    }
    if (message.denom !== '') {
      writer.uint32(26).string(message.denom)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintCoins {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgMintCoins } as MsgMintCoins
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string()
          break
        case 2:
          message.amount = reader.string()
          break
        case 3:
          message.denom = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgMintCoins {
    const message = { ...baseMsgMintCoins } as MsgMintCoins
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    return message
  },

  toJSON(message: MsgMintCoins): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.amount !== undefined && (obj.amount = message.amount)
    message.denom !== undefined && (obj.denom = message.denom)
    return obj
  },

  fromPartial(object: DeepPartial<MsgMintCoins>): MsgMintCoins {
    const message = { ...baseMsgMintCoins } as MsgMintCoins
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    return message
  }
}

const baseMsgMintCoinsResponse: object = {}

export const MsgMintCoinsResponse = {
  encode(_: MsgMintCoinsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintCoinsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgMintCoinsResponse } as MsgMintCoinsResponse
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

  fromJSON(_: any): MsgMintCoinsResponse {
    const message = { ...baseMsgMintCoinsResponse } as MsgMintCoinsResponse
    return message
  },

  toJSON(_: MsgMintCoinsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgMintCoinsResponse>): MsgMintCoinsResponse {
    const message = { ...baseMsgMintCoinsResponse } as MsgMintCoinsResponse
    return message
  }
}

const baseMsgBurnCoins: object = { owner: '', amount: '', denom: '' }

export const MsgBurnCoins = {
  encode(message: MsgBurnCoins, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.amount !== '') {
      writer.uint32(18).string(message.amount)
    }
    if (message.denom !== '') {
      writer.uint32(26).string(message.denom)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnCoins {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBurnCoins } as MsgBurnCoins
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string()
          break
        case 2:
          message.amount = reader.string()
          break
        case 3:
          message.denom = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgBurnCoins {
    const message = { ...baseMsgBurnCoins } as MsgBurnCoins
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    return message
  },

  toJSON(message: MsgBurnCoins): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.amount !== undefined && (obj.amount = message.amount)
    message.denom !== undefined && (obj.denom = message.denom)
    return obj
  },

  fromPartial(object: DeepPartial<MsgBurnCoins>): MsgBurnCoins {
    const message = { ...baseMsgBurnCoins } as MsgBurnCoins
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    return message
  }
}

const baseMsgBurnCoinsResponse: object = {}

export const MsgBurnCoinsResponse = {
  encode(_: MsgBurnCoinsResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnCoinsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBurnCoinsResponse } as MsgBurnCoinsResponse
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

  fromJSON(_: any): MsgBurnCoinsResponse {
    const message = { ...baseMsgBurnCoinsResponse } as MsgBurnCoinsResponse
    return message
  },

  toJSON(_: MsgBurnCoinsResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgBurnCoinsResponse>): MsgBurnCoinsResponse {
    const message = { ...baseMsgBurnCoinsResponse } as MsgBurnCoinsResponse
    return message
  }
}

const baseMsgForceTransfer: object = { owner: '', from: '', to: '', amount: '', denom: '' }

export const MsgForceTransfer = {
  encode(message: MsgForceTransfer, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.from !== '') {
      writer.uint32(18).string(message.from)
    }
    if (message.to !== '') {
      writer.uint32(26).string(message.to)
    }
    if (message.amount !== '') {
      writer.uint32(34).string(message.amount)
    }
    if (message.denom !== '') {
      writer.uint32(42).string(message.denom)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgForceTransfer {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgForceTransfer } as MsgForceTransfer
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string()
          break
        case 2:
          message.from = reader.string()
          break
        case 3:
          message.to = reader.string()
          break
        case 4:
          message.amount = reader.string()
          break
        case 5:
          message.denom = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgForceTransfer {
    const message = { ...baseMsgForceTransfer } as MsgForceTransfer
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from)
    } else {
      message.from = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to)
    } else {
      message.to = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom)
    } else {
      message.denom = ''
    }
    return message
  },

  toJSON(message: MsgForceTransfer): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.from !== undefined && (obj.from = message.from)
    message.to !== undefined && (obj.to = message.to)
    message.amount !== undefined && (obj.amount = message.amount)
    message.denom !== undefined && (obj.denom = message.denom)
    return obj
  },

  fromPartial(object: DeepPartial<MsgForceTransfer>): MsgForceTransfer {
    const message = { ...baseMsgForceTransfer } as MsgForceTransfer
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from
    } else {
      message.from = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to
    } else {
      message.to = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom
    } else {
      message.denom = ''
    }
    return message
  }
}

const baseMsgForceTransferResponse: object = {}

export const MsgForceTransferResponse = {
  encode(_: MsgForceTransferResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgForceTransferResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgForceTransferResponse } as MsgForceTransferResponse
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

  fromJSON(_: any): MsgForceTransferResponse {
    const message = { ...baseMsgForceTransferResponse } as MsgForceTransferResponse
    return message
  },

  toJSON(_: MsgForceTransferResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgForceTransferResponse>): MsgForceTransferResponse {
    const message = { ...baseMsgForceTransferResponse } as MsgForceTransferResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  Register(request: MsgRegister): Promise<MsgRegisterResponse>
  CreateName(request: MsgCreateName): Promise<MsgCreateNameResponse>
  UpdateName(request: MsgUpdateName): Promise<MsgUpdateNameResponse>
  DeleteName(request: MsgDeleteName): Promise<MsgDeleteNameResponse>
  Reveal(request: MsgReveal): Promise<MsgRevealResponse>
  SetPriceAndExtend(request: MsgSetPriceAndExtend): Promise<MsgSetPriceAndExtendResponse>
  OfferTo(request: MsgOfferTo): Promise<MsgOfferToResponse>
  Accept(request: MsgAccept): Promise<MsgAcceptResponse>
  Buy(request: MsgBuy): Promise<MsgBuyResponse>
  MintCoins(request: MsgMintCoins): Promise<MsgMintCoinsResponse>
  BurnCoins(request: MsgBurnCoins): Promise<MsgBurnCoinsResponse>
  /** this line is used by starport scaffolding # proto/tx/rpc */
  ForceTransfer(request: MsgForceTransfer): Promise<MsgForceTransferResponse>
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

  Reveal(request: MsgReveal): Promise<MsgRevealResponse> {
    const data = MsgReveal.encode(request).finish()
    const promise = this.rpc.request('names.Msg', 'Reveal', data)
    return promise.then((data) => MsgRevealResponse.decode(new Reader(data)))
  }

  SetPriceAndExtend(request: MsgSetPriceAndExtend): Promise<MsgSetPriceAndExtendResponse> {
    const data = MsgSetPriceAndExtend.encode(request).finish()
    const promise = this.rpc.request('names.Msg', 'SetPriceAndExtend', data)
    return promise.then((data) => MsgSetPriceAndExtendResponse.decode(new Reader(data)))
  }

  OfferTo(request: MsgOfferTo): Promise<MsgOfferToResponse> {
    const data = MsgOfferTo.encode(request).finish()
    const promise = this.rpc.request('names.Msg', 'OfferTo', data)
    return promise.then((data) => MsgOfferToResponse.decode(new Reader(data)))
  }

  Accept(request: MsgAccept): Promise<MsgAcceptResponse> {
    const data = MsgAccept.encode(request).finish()
    const promise = this.rpc.request('names.Msg', 'Accept', data)
    return promise.then((data) => MsgAcceptResponse.decode(new Reader(data)))
  }

  Buy(request: MsgBuy): Promise<MsgBuyResponse> {
    const data = MsgBuy.encode(request).finish()
    const promise = this.rpc.request('names.Msg', 'Buy', data)
    return promise.then((data) => MsgBuyResponse.decode(new Reader(data)))
  }

  MintCoins(request: MsgMintCoins): Promise<MsgMintCoinsResponse> {
    const data = MsgMintCoins.encode(request).finish()
    const promise = this.rpc.request('names.Msg', 'MintCoins', data)
    return promise.then((data) => MsgMintCoinsResponse.decode(new Reader(data)))
  }

  BurnCoins(request: MsgBurnCoins): Promise<MsgBurnCoinsResponse> {
    const data = MsgBurnCoins.encode(request).finish()
    const promise = this.rpc.request('names.Msg', 'BurnCoins', data)
    return promise.then((data) => MsgBurnCoinsResponse.decode(new Reader(data)))
  }

  ForceTransfer(request: MsgForceTransfer): Promise<MsgForceTransferResponse> {
    const data = MsgForceTransfer.encode(request).finish()
    const promise = this.rpc.request('names.Msg', 'ForceTransfer', data)
    return promise.then((data) => MsgForceTransferResponse.decode(new Reader(data)))
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
