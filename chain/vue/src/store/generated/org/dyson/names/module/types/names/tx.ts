/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Name } from '../names/name'

export const protobufPackage = 'names'

export interface MsgRegister {
  /** The Shake256(owner+name+salt) hexdigest */
  commit: string
  /** Address of the owner */
  owner: string
  /** The price that this name is valued at and can be purchased for example 100dys. The monthly fee is 1% of this price. */
  price: string
  /** Should the name be automatically renewed */
  auto_renew: boolean
}

export interface MsgRegisterResponse {
  /** fee paid which is 1% of the price */
  fee: string
  expiration_height: number
}

export interface MsgUpdateName {
  name: string
  owner: string
  destination: string
  authorized: string
  auto_renew: boolean
}

export interface MsgUpdateNameResponse {}

export interface MsgDeleteName {
  name: string
  owner: string
}

export interface MsgDeleteNameResponse {}

export interface MsgReveal {
  name: string
  owner: string
  salt: string
}

export interface MsgRevealResponse {
  name: Name | undefined
}

export interface MsgSetPriceAndExtend {
  name: string
  owner: string
  price: string
}

export interface MsgSetPriceAndExtendResponse {}

export interface MsgOfferTo {
  name: string
  owner: string
  newOwner: string
}

export interface MsgOfferToResponse {}

export interface MsgAccept {
  name: string
  newOwner: string
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
}

export interface MsgMintCoinsResponse {}

export interface MsgBurnCoins {
  owner: string
  amount: string
}

export interface MsgBurnCoinsResponse {}

const baseMsgRegister: object = {
  commit: '',
  owner: '',
  price: '',
  auto_renew: false,
}

export const MsgRegister = {
  encode(message: MsgRegister, writer: Writer = Writer.create()): Writer {
    if (message.commit !== '') {
      writer.uint32(18).string(message.commit)
    }
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.price !== '') {
      writer.uint32(34).string(message.price)
    }
    if (message.auto_renew === true) {
      writer.uint32(40).bool(message.auto_renew)
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
        case 2:
          message.commit = reader.string()
          break
        case 1:
          message.owner = reader.string()
          break
        case 4:
          message.price = reader.string()
          break
        case 5:
          message.auto_renew = reader.bool()
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
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = String(object.commit)
    } else {
      message.commit = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price)
    } else {
      message.price = ''
    }
    if (object.auto_renew !== undefined && object.auto_renew !== null) {
      message.auto_renew = Boolean(object.auto_renew)
    } else {
      message.auto_renew = false
    }
    return message
  },

  toJSON(message: MsgRegister): unknown {
    const obj: any = {}
    message.commit !== undefined && (obj.commit = message.commit)
    message.owner !== undefined && (obj.owner = message.owner)
    message.price !== undefined && (obj.price = message.price)
    message.auto_renew !== undefined && (obj.auto_renew = message.auto_renew)
    return obj
  },

  fromPartial(object: DeepPartial<MsgRegister>): MsgRegister {
    const message = { ...baseMsgRegister } as MsgRegister
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = object.commit
    } else {
      message.commit = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price
    } else {
      message.price = ''
    }
    if (object.auto_renew !== undefined && object.auto_renew !== null) {
      message.auto_renew = object.auto_renew
    } else {
      message.auto_renew = false
    }
    return message
  },
}

const baseMsgRegisterResponse: object = { fee: '', expiration_height: 0 }

export const MsgRegisterResponse = {
  encode(
    message: MsgRegisterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.fee !== '') {
      writer.uint32(10).string(message.fee)
    }
    if (message.expiration_height !== 0) {
      writer.uint32(24).uint64(message.expiration_height)
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
        case 3:
          message.expiration_height = longToNumber(reader.uint64() as Long)
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
    if (
      object.expiration_height !== undefined &&
      object.expiration_height !== null
    ) {
      message.expiration_height = Number(object.expiration_height)
    } else {
      message.expiration_height = 0
    }
    return message
  },

  toJSON(message: MsgRegisterResponse): unknown {
    const obj: any = {}
    message.fee !== undefined && (obj.fee = message.fee)
    message.expiration_height !== undefined &&
      (obj.expiration_height = message.expiration_height)
    return obj
  },

  fromPartial(object: DeepPartial<MsgRegisterResponse>): MsgRegisterResponse {
    const message = { ...baseMsgRegisterResponse } as MsgRegisterResponse
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee
    } else {
      message.fee = ''
    }
    if (
      object.expiration_height !== undefined &&
      object.expiration_height !== null
    ) {
      message.expiration_height = object.expiration_height
    } else {
      message.expiration_height = 0
    }
    return message
  },
}

const baseMsgUpdateName: object = {
  name: '',
  owner: '',
  destination: '',
  authorized: '',
  auto_renew: false,
}

export const MsgUpdateName = {
  encode(message: MsgUpdateName, writer: Writer = Writer.create()): Writer {
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.destination !== '') {
      writer.uint32(26).string(message.destination)
    }
    if (message.authorized !== '') {
      writer.uint32(50).string(message.authorized)
    }
    if (message.auto_renew === true) {
      writer.uint32(56).bool(message.auto_renew)
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
        case 2:
          message.name = reader.string()
          break
        case 1:
          message.owner = reader.string()
          break
        case 3:
          message.destination = reader.string()
          break
        case 6:
          message.authorized = reader.string()
          break
        case 7:
          message.auto_renew = reader.bool()
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = String(object.destination)
    } else {
      message.destination = ''
    }
    if (object.authorized !== undefined && object.authorized !== null) {
      message.authorized = String(object.authorized)
    } else {
      message.authorized = ''
    }
    if (object.auto_renew !== undefined && object.auto_renew !== null) {
      message.auto_renew = Boolean(object.auto_renew)
    } else {
      message.auto_renew = false
    }
    return message
  },

  toJSON(message: MsgUpdateName): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.owner !== undefined && (obj.owner = message.owner)
    message.destination !== undefined && (obj.destination = message.destination)
    message.authorized !== undefined && (obj.authorized = message.authorized)
    message.auto_renew !== undefined && (obj.auto_renew = message.auto_renew)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateName>): MsgUpdateName {
    const message = { ...baseMsgUpdateName } as MsgUpdateName
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.destination !== undefined && object.destination !== null) {
      message.destination = object.destination
    } else {
      message.destination = ''
    }
    if (object.authorized !== undefined && object.authorized !== null) {
      message.authorized = object.authorized
    } else {
      message.authorized = ''
    }
    if (object.auto_renew !== undefined && object.auto_renew !== null) {
      message.auto_renew = object.auto_renew
    } else {
      message.auto_renew = false
    }
    return message
  },
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
  },
}

const baseMsgDeleteName: object = { name: '', owner: '' }

export const MsgDeleteName = {
  encode(message: MsgDeleteName, writer: Writer = Writer.create()): Writer {
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
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
        case 2:
          message.name = reader.string()
          break
        case 1:
          message.owner = reader.string()
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
    }
    return message
  },

  toJSON(message: MsgDeleteName): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.owner !== undefined && (obj.owner = message.owner)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteName>): MsgDeleteName {
    const message = { ...baseMsgDeleteName } as MsgDeleteName
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    return message
  },
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
  },
}

const baseMsgReveal: object = { name: '', owner: '', salt: '' }

export const MsgReveal = {
  encode(message: MsgReveal, writer: Writer = Writer.create()): Writer {
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
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
        case 2:
          message.name = reader.string()
          break
        case 1:
          message.owner = reader.string()
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
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
    message.name !== undefined && (obj.name = message.name)
    message.owner !== undefined && (obj.owner = message.owner)
    message.salt !== undefined && (obj.salt = message.salt)
    return obj
  },

  fromPartial(object: DeepPartial<MsgReveal>): MsgReveal {
    const message = { ...baseMsgReveal } as MsgReveal
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = object.salt
    } else {
      message.salt = ''
    }
    return message
  },
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
    message.name !== undefined &&
      (obj.name = message.name ? Name.toJSON(message.name) : undefined)
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
  },
}

const baseMsgSetPriceAndExtend: object = { name: '', owner: '', price: '' }

export const MsgSetPriceAndExtend = {
  encode(
    message: MsgSetPriceAndExtend,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
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
        case 2:
          message.name = reader.string()
          break
        case 1:
          message.owner = reader.string()
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
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
    message.name !== undefined && (obj.name = message.name)
    message.owner !== undefined && (obj.owner = message.owner)
    message.price !== undefined && (obj.price = message.price)
    return obj
  },

  fromPartial(object: DeepPartial<MsgSetPriceAndExtend>): MsgSetPriceAndExtend {
    const message = { ...baseMsgSetPriceAndExtend } as MsgSetPriceAndExtend
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price
    } else {
      message.price = ''
    }
    return message
  },
}

const baseMsgSetPriceAndExtendResponse: object = {}

export const MsgSetPriceAndExtendResponse = {
  encode(
    _: MsgSetPriceAndExtendResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSetPriceAndExtendResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgSetPriceAndExtendResponse,
    } as MsgSetPriceAndExtendResponse
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

  fromJSON(_: any): MsgSetPriceAndExtendResponse {
    const message = {
      ...baseMsgSetPriceAndExtendResponse,
    } as MsgSetPriceAndExtendResponse
    return message
  },

  toJSON(_: MsgSetPriceAndExtendResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgSetPriceAndExtendResponse>
  ): MsgSetPriceAndExtendResponse {
    const message = {
      ...baseMsgSetPriceAndExtendResponse,
    } as MsgSetPriceAndExtendResponse
    return message
  },
}

const baseMsgOfferTo: object = { name: '', owner: '', newOwner: '' }

export const MsgOfferTo = {
  encode(message: MsgOfferTo, writer: Writer = Writer.create()): Writer {
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
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
        case 2:
          message.name = reader.string()
          break
        case 1:
          message.owner = reader.string()
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner)
    } else {
      message.owner = ''
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
    message.name !== undefined && (obj.name = message.name)
    message.owner !== undefined && (obj.owner = message.owner)
    message.newOwner !== undefined && (obj.newOwner = message.newOwner)
    return obj
  },

  fromPartial(object: DeepPartial<MsgOfferTo>): MsgOfferTo {
    const message = { ...baseMsgOfferTo } as MsgOfferTo
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner
    } else {
      message.owner = ''
    }
    if (object.newOwner !== undefined && object.newOwner !== null) {
      message.newOwner = object.newOwner
    } else {
      message.newOwner = ''
    }
    return message
  },
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
  },
}

const baseMsgAccept: object = { name: '', newOwner: '' }

export const MsgAccept = {
  encode(message: MsgAccept, writer: Writer = Writer.create()): Writer {
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.newOwner !== '') {
      writer.uint32(10).string(message.newOwner)
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
        case 2:
          message.name = reader.string()
          break
        case 1:
          message.newOwner = reader.string()
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

  toJSON(message: MsgAccept): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.newOwner !== undefined && (obj.newOwner = message.newOwner)
    return obj
  },

  fromPartial(object: DeepPartial<MsgAccept>): MsgAccept {
    const message = { ...baseMsgAccept } as MsgAccept
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
  },
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
  },
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
  },
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
  },
}

const baseMsgMintCoins: object = { owner: '', amount: '' }

export const MsgMintCoins = {
  encode(message: MsgMintCoins, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.amount !== '') {
      writer.uint32(18).string(message.amount)
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
    return message
  },

  toJSON(message: MsgMintCoins): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.amount !== undefined && (obj.amount = message.amount)
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
    return message
  },
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
  },
}

const baseMsgBurnCoins: object = { owner: '', amount: '' }

export const MsgBurnCoins = {
  encode(message: MsgBurnCoins, writer: Writer = Writer.create()): Writer {
    if (message.owner !== '') {
      writer.uint32(10).string(message.owner)
    }
    if (message.amount !== '') {
      writer.uint32(18).string(message.amount)
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
    return message
  },

  toJSON(message: MsgBurnCoins): unknown {
    const obj: any = {}
    message.owner !== undefined && (obj.owner = message.owner)
    message.amount !== undefined && (obj.amount = message.amount)
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
    return message
  },
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
  },
}

/** Msg defines the Msg service. */
export interface Msg {
  Register(request: MsgRegister): Promise<MsgRegisterResponse>
  UpdateName(request: MsgUpdateName): Promise<MsgUpdateNameResponse>
  DeleteName(request: MsgDeleteName): Promise<MsgDeleteNameResponse>
  Reveal(request: MsgReveal): Promise<MsgRevealResponse>
  SetPriceAndExtend(
    request: MsgSetPriceAndExtend
  ): Promise<MsgSetPriceAndExtendResponse>
  OfferTo(request: MsgOfferTo): Promise<MsgOfferToResponse>
  Accept(request: MsgAccept): Promise<MsgAcceptResponse>
  Buy(request: MsgBuy): Promise<MsgBuyResponse>
  MintCoins(request: MsgMintCoins): Promise<MsgMintCoinsResponse>
  /** this line is used by starport scaffolding # proto/tx/rpc */
  BurnCoins(request: MsgBurnCoins): Promise<MsgBurnCoinsResponse>
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

  UpdateName(request: MsgUpdateName): Promise<MsgUpdateNameResponse> {
    const data = MsgUpdateName.encode(request).finish()
    const promise = this.rpc.request('names.Msg', 'UpdateName', data)
    return promise.then((data) =>
      MsgUpdateNameResponse.decode(new Reader(data))
    )
  }

  DeleteName(request: MsgDeleteName): Promise<MsgDeleteNameResponse> {
    const data = MsgDeleteName.encode(request).finish()
    const promise = this.rpc.request('names.Msg', 'DeleteName', data)
    return promise.then((data) =>
      MsgDeleteNameResponse.decode(new Reader(data))
    )
  }

  Reveal(request: MsgReveal): Promise<MsgRevealResponse> {
    const data = MsgReveal.encode(request).finish()
    const promise = this.rpc.request('names.Msg', 'Reveal', data)
    return promise.then((data) => MsgRevealResponse.decode(new Reader(data)))
  }

  SetPriceAndExtend(
    request: MsgSetPriceAndExtend
  ): Promise<MsgSetPriceAndExtendResponse> {
    const data = MsgSetPriceAndExtend.encode(request).finish()
    const promise = this.rpc.request('names.Msg', 'SetPriceAndExtend', data)
    return promise.then((data) =>
      MsgSetPriceAndExtendResponse.decode(new Reader(data))
    )
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
