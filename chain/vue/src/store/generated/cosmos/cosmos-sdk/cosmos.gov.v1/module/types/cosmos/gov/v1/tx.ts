/* eslint-disable */
import {
  VoteOption,
  WeightedVoteOption,
  voteOptionFromJSON,
  voteOptionToJSON,
} from '../../../cosmos/gov/v1/gov'
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Any } from '../../../google/protobuf/any'
import { Coin } from '../../../cosmos/base/v1beta1/coin'

export const protobufPackage = 'cosmos.gov.v1'

/** Since: cosmos-sdk 0.46 */

/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposal {
  messages: Any[]
  initial_deposit: Coin[]
  proposer: string
  /** metadata is any arbitrary metadata attached to the proposal. */
  metadata: string
}

/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
  proposal_id: number
}

/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 */
export interface MsgExecLegacyContent {
  /** content is the proposal's content. */
  content: Any | undefined
  /** authority must be the gov module address. */
  authority: string
}

/** MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type. */
export interface MsgExecLegacyContentResponse {}

/** MsgVote defines a message to cast a vote. */
export interface MsgVote {
  proposal_id: number
  voter: string
  option: VoteOption
  metadata: string
}

/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponse {}

/** MsgVoteWeighted defines a message to cast a vote. */
export interface MsgVoteWeighted {
  proposal_id: number
  voter: string
  options: WeightedVoteOption[]
  metadata: string
}

/** MsgVoteWeightedResponse defines the Msg/VoteWeighted response type. */
export interface MsgVoteWeightedResponse {}

/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDeposit {
  proposal_id: number
  depositor: string
  amount: Coin[]
}

/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {}

const baseMsgSubmitProposal: object = { proposer: '', metadata: '' }

export const MsgSubmitProposal = {
  encode(message: MsgSubmitProposal, writer: Writer = Writer.create()): Writer {
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    for (const v of message.initial_deposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    if (message.proposer !== '') {
      writer.uint32(26).string(message.proposer)
    }
    if (message.metadata !== '') {
      writer.uint32(34).string(message.metadata)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSubmitProposal } as MsgSubmitProposal
    message.messages = []
    message.initial_deposit = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()))
          break
        case 2:
          message.initial_deposit.push(Coin.decode(reader, reader.uint32()))
          break
        case 3:
          message.proposer = reader.string()
          break
        case 4:
          message.metadata = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgSubmitProposal {
    const message = { ...baseMsgSubmitProposal } as MsgSubmitProposal
    message.messages = []
    message.initial_deposit = []
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(Any.fromJSON(e))
      }
    }
    if (
      object.initial_deposit !== undefined &&
      object.initial_deposit !== null
    ) {
      for (const e of object.initial_deposit) {
        message.initial_deposit.push(Coin.fromJSON(e))
      }
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = String(object.proposer)
    } else {
      message.proposer = ''
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = String(object.metadata)
    } else {
      message.metadata = ''
    }
    return message
  },

  toJSON(message: MsgSubmitProposal): unknown {
    const obj: any = {}
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? Any.toJSON(e) : undefined
      )
    } else {
      obj.messages = []
    }
    if (message.initial_deposit) {
      obj.initial_deposit = message.initial_deposit.map((e) =>
        e ? Coin.toJSON(e) : undefined
      )
    } else {
      obj.initial_deposit = []
    }
    message.proposer !== undefined && (obj.proposer = message.proposer)
    message.metadata !== undefined && (obj.metadata = message.metadata)
    return obj
  },

  fromPartial(object: DeepPartial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = { ...baseMsgSubmitProposal } as MsgSubmitProposal
    message.messages = []
    message.initial_deposit = []
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(Any.fromPartial(e))
      }
    }
    if (
      object.initial_deposit !== undefined &&
      object.initial_deposit !== null
    ) {
      for (const e of object.initial_deposit) {
        message.initial_deposit.push(Coin.fromPartial(e))
      }
    }
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer
    } else {
      message.proposer = ''
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata
    } else {
      message.metadata = ''
    }
    return message
  },
}

const baseMsgSubmitProposalResponse: object = { proposal_id: 0 }

export const MsgSubmitProposalResponse = {
  encode(
    message: MsgSubmitProposalResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.proposal_id !== 0) {
      writer.uint32(8).uint64(message.proposal_id)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSubmitProposalResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgSubmitProposalResponse,
    } as MsgSubmitProposalResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgSubmitProposalResponse {
    const message = {
      ...baseMsgSubmitProposalResponse,
    } as MsgSubmitProposalResponse
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposal_id = Number(object.proposal_id)
    } else {
      message.proposal_id = 0
    }
    return message
  },

  toJSON(message: MsgSubmitProposalResponse): unknown {
    const obj: any = {}
    message.proposal_id !== undefined && (obj.proposal_id = message.proposal_id)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgSubmitProposalResponse>
  ): MsgSubmitProposalResponse {
    const message = {
      ...baseMsgSubmitProposalResponse,
    } as MsgSubmitProposalResponse
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposal_id = object.proposal_id
    } else {
      message.proposal_id = 0
    }
    return message
  },
}

const baseMsgExecLegacyContent: object = { authority: '' }

export const MsgExecLegacyContent = {
  encode(
    message: MsgExecLegacyContent,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.content !== undefined) {
      Any.encode(message.content, writer.uint32(10).fork()).ldelim()
    }
    if (message.authority !== '') {
      writer.uint32(18).string(message.authority)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgExecLegacyContent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgExecLegacyContent } as MsgExecLegacyContent
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.content = Any.decode(reader, reader.uint32())
          break
        case 2:
          message.authority = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgExecLegacyContent {
    const message = { ...baseMsgExecLegacyContent } as MsgExecLegacyContent
    if (object.content !== undefined && object.content !== null) {
      message.content = Any.fromJSON(object.content)
    } else {
      message.content = undefined
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = String(object.authority)
    } else {
      message.authority = ''
    }
    return message
  },

  toJSON(message: MsgExecLegacyContent): unknown {
    const obj: any = {}
    message.content !== undefined &&
      (obj.content = message.content ? Any.toJSON(message.content) : undefined)
    message.authority !== undefined && (obj.authority = message.authority)
    return obj
  },

  fromPartial(object: DeepPartial<MsgExecLegacyContent>): MsgExecLegacyContent {
    const message = { ...baseMsgExecLegacyContent } as MsgExecLegacyContent
    if (object.content !== undefined && object.content !== null) {
      message.content = Any.fromPartial(object.content)
    } else {
      message.content = undefined
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority
    } else {
      message.authority = ''
    }
    return message
  },
}

const baseMsgExecLegacyContentResponse: object = {}

export const MsgExecLegacyContentResponse = {
  encode(
    _: MsgExecLegacyContentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgExecLegacyContentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgExecLegacyContentResponse,
    } as MsgExecLegacyContentResponse
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

  fromJSON(_: any): MsgExecLegacyContentResponse {
    const message = {
      ...baseMsgExecLegacyContentResponse,
    } as MsgExecLegacyContentResponse
    return message
  },

  toJSON(_: MsgExecLegacyContentResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgExecLegacyContentResponse>
  ): MsgExecLegacyContentResponse {
    const message = {
      ...baseMsgExecLegacyContentResponse,
    } as MsgExecLegacyContentResponse
    return message
  },
}

const baseMsgVote: object = {
  proposal_id: 0,
  voter: '',
  option: 0,
  metadata: '',
}

export const MsgVote = {
  encode(message: MsgVote, writer: Writer = Writer.create()): Writer {
    if (message.proposal_id !== 0) {
      writer.uint32(8).uint64(message.proposal_id)
    }
    if (message.voter !== '') {
      writer.uint32(18).string(message.voter)
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option)
    }
    if (message.metadata !== '') {
      writer.uint32(34).string(message.metadata)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgVote } as MsgVote
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.voter = reader.string()
          break
        case 3:
          message.option = reader.int32() as any
          break
        case 4:
          message.metadata = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgVote {
    const message = { ...baseMsgVote } as MsgVote
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposal_id = Number(object.proposal_id)
    } else {
      message.proposal_id = 0
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter)
    } else {
      message.voter = ''
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = voteOptionFromJSON(object.option)
    } else {
      message.option = 0
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = String(object.metadata)
    } else {
      message.metadata = ''
    }
    return message
  },

  toJSON(message: MsgVote): unknown {
    const obj: any = {}
    message.proposal_id !== undefined && (obj.proposal_id = message.proposal_id)
    message.voter !== undefined && (obj.voter = message.voter)
    message.option !== undefined &&
      (obj.option = voteOptionToJSON(message.option))
    message.metadata !== undefined && (obj.metadata = message.metadata)
    return obj
  },

  fromPartial(object: DeepPartial<MsgVote>): MsgVote {
    const message = { ...baseMsgVote } as MsgVote
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposal_id = object.proposal_id
    } else {
      message.proposal_id = 0
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter
    } else {
      message.voter = ''
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = object.option
    } else {
      message.option = 0
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata
    } else {
      message.metadata = ''
    }
    return message
  },
}

const baseMsgVoteResponse: object = {}

export const MsgVoteResponse = {
  encode(_: MsgVoteResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgVoteResponse } as MsgVoteResponse
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

  fromJSON(_: any): MsgVoteResponse {
    const message = { ...baseMsgVoteResponse } as MsgVoteResponse
    return message
  },

  toJSON(_: MsgVoteResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgVoteResponse>): MsgVoteResponse {
    const message = { ...baseMsgVoteResponse } as MsgVoteResponse
    return message
  },
}

const baseMsgVoteWeighted: object = { proposal_id: 0, voter: '', metadata: '' }

export const MsgVoteWeighted = {
  encode(message: MsgVoteWeighted, writer: Writer = Writer.create()): Writer {
    if (message.proposal_id !== 0) {
      writer.uint32(8).uint64(message.proposal_id)
    }
    if (message.voter !== '') {
      writer.uint32(18).string(message.voter)
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    if (message.metadata !== '') {
      writer.uint32(34).string(message.metadata)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgVoteWeighted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgVoteWeighted } as MsgVoteWeighted
    message.options = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.voter = reader.string()
          break
        case 3:
          message.options.push(
            WeightedVoteOption.decode(reader, reader.uint32())
          )
          break
        case 4:
          message.metadata = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgVoteWeighted {
    const message = { ...baseMsgVoteWeighted } as MsgVoteWeighted
    message.options = []
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposal_id = Number(object.proposal_id)
    } else {
      message.proposal_id = 0
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter)
    } else {
      message.voter = ''
    }
    if (object.options !== undefined && object.options !== null) {
      for (const e of object.options) {
        message.options.push(WeightedVoteOption.fromJSON(e))
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = String(object.metadata)
    } else {
      message.metadata = ''
    }
    return message
  },

  toJSON(message: MsgVoteWeighted): unknown {
    const obj: any = {}
    message.proposal_id !== undefined && (obj.proposal_id = message.proposal_id)
    message.voter !== undefined && (obj.voter = message.voter)
    if (message.options) {
      obj.options = message.options.map((e) =>
        e ? WeightedVoteOption.toJSON(e) : undefined
      )
    } else {
      obj.options = []
    }
    message.metadata !== undefined && (obj.metadata = message.metadata)
    return obj
  },

  fromPartial(object: DeepPartial<MsgVoteWeighted>): MsgVoteWeighted {
    const message = { ...baseMsgVoteWeighted } as MsgVoteWeighted
    message.options = []
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposal_id = object.proposal_id
    } else {
      message.proposal_id = 0
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter
    } else {
      message.voter = ''
    }
    if (object.options !== undefined && object.options !== null) {
      for (const e of object.options) {
        message.options.push(WeightedVoteOption.fromPartial(e))
      }
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata
    } else {
      message.metadata = ''
    }
    return message
  },
}

const baseMsgVoteWeightedResponse: object = {}

export const MsgVoteWeightedResponse = {
  encode(_: MsgVoteWeightedResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgVoteWeightedResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgVoteWeightedResponse,
    } as MsgVoteWeightedResponse
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

  fromJSON(_: any): MsgVoteWeightedResponse {
    const message = {
      ...baseMsgVoteWeightedResponse,
    } as MsgVoteWeightedResponse
    return message
  },

  toJSON(_: MsgVoteWeightedResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgVoteWeightedResponse>
  ): MsgVoteWeightedResponse {
    const message = {
      ...baseMsgVoteWeightedResponse,
    } as MsgVoteWeightedResponse
    return message
  },
}

const baseMsgDeposit: object = { proposal_id: 0, depositor: '' }

export const MsgDeposit = {
  encode(message: MsgDeposit, writer: Writer = Writer.create()): Writer {
    if (message.proposal_id !== 0) {
      writer.uint32(8).uint64(message.proposal_id)
    }
    if (message.depositor !== '') {
      writer.uint32(18).string(message.depositor)
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeposit } as MsgDeposit
    message.amount = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.proposal_id = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.depositor = reader.string()
          break
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeposit {
    const message = { ...baseMsgDeposit } as MsgDeposit
    message.amount = []
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposal_id = Number(object.proposal_id)
    } else {
      message.proposal_id = 0
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = String(object.depositor)
    } else {
      message.depositor = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: MsgDeposit): unknown {
    const obj: any = {}
    message.proposal_id !== undefined && (obj.proposal_id = message.proposal_id)
    message.depositor !== undefined && (obj.depositor = message.depositor)
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined))
    } else {
      obj.amount = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit {
    const message = { ...baseMsgDeposit } as MsgDeposit
    message.amount = []
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposal_id = object.proposal_id
    } else {
      message.proposal_id = 0
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor
    } else {
      message.depositor = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e))
      }
    }
    return message
  },
}

const baseMsgDepositResponse: object = {}

export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDepositResponse } as MsgDepositResponse
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

  fromJSON(_: any): MsgDepositResponse {
    const message = { ...baseMsgDepositResponse } as MsgDepositResponse
    return message
  },

  toJSON(_: MsgDepositResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse {
    const message = { ...baseMsgDepositResponse } as MsgDepositResponse
    return message
  },
}

/** Msg defines the gov Msg service. */
export interface Msg {
  /** SubmitProposal defines a method to create new proposal given a content. */
  SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>
  /**
   * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
   * to execute a legacy content-based proposal.
   */
  ExecLegacyContent(
    request: MsgExecLegacyContent
  ): Promise<MsgExecLegacyContentResponse>
  /** Vote defines a method to add a vote on a specific proposal. */
  Vote(request: MsgVote): Promise<MsgVoteResponse>
  /** VoteWeighted defines a method to add a weighted vote on a specific proposal. */
  VoteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse>
  /** Deposit defines a method to add deposit on a specific proposal. */
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  SubmitProposal(
    request: MsgSubmitProposal
  ): Promise<MsgSubmitProposalResponse> {
    const data = MsgSubmitProposal.encode(request).finish()
    const promise = this.rpc.request(
      'cosmos.gov.v1.Msg',
      'SubmitProposal',
      data
    )
    return promise.then((data) =>
      MsgSubmitProposalResponse.decode(new Reader(data))
    )
  }

  ExecLegacyContent(
    request: MsgExecLegacyContent
  ): Promise<MsgExecLegacyContentResponse> {
    const data = MsgExecLegacyContent.encode(request).finish()
    const promise = this.rpc.request(
      'cosmos.gov.v1.Msg',
      'ExecLegacyContent',
      data
    )
    return promise.then((data) =>
      MsgExecLegacyContentResponse.decode(new Reader(data))
    )
  }

  Vote(request: MsgVote): Promise<MsgVoteResponse> {
    const data = MsgVote.encode(request).finish()
    const promise = this.rpc.request('cosmos.gov.v1.Msg', 'Vote', data)
    return promise.then((data) => MsgVoteResponse.decode(new Reader(data)))
  }

  VoteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse> {
    const data = MsgVoteWeighted.encode(request).finish()
    const promise = this.rpc.request('cosmos.gov.v1.Msg', 'VoteWeighted', data)
    return promise.then((data) =>
      MsgVoteWeightedResponse.decode(new Reader(data))
    )
  }

  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish()
    const promise = this.rpc.request('cosmos.gov.v1.Msg', 'Deposit', data)
    return promise.then((data) => MsgDepositResponse.decode(new Reader(data)))
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
