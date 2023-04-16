/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import {
  GroupInfo,
  GroupMember,
  GroupPolicyInfo,
  Proposal,
  Vote,
} from '../../../cosmos/group/v1/types'

export const protobufPackage = 'cosmos.group.v1'

/** Since: cosmos-sdk 0.46 */

/** GenesisState defines the group module's genesis state. */
export interface GenesisState {
  /**
   * group_seq is the group table orm.Sequence,
   * it is used to get the next group ID.
   */
  group_seq: number
  /** groups is the list of groups info. */
  groups: GroupInfo[]
  /** group_members is the list of groups members. */
  group_members: GroupMember[]
  /**
   * group_policy_seq is the group policy table orm.Sequence,
   * it is used to generate the next group policy account address.
   */
  group_policy_seq: number
  /** group_policies is the list of group policies info. */
  group_policies: GroupPolicyInfo[]
  /**
   * proposal_seq is the proposal table orm.Sequence,
   * it is used to get the next proposal ID.
   */
  proposal_seq: number
  /** proposals is the list of proposals. */
  proposals: Proposal[]
  /** votes is the list of votes. */
  votes: Vote[]
}

const baseGenesisState: object = {
  group_seq: 0,
  group_policy_seq: 0,
  proposal_seq: 0,
}

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.group_seq !== 0) {
      writer.uint32(8).uint64(message.group_seq)
    }
    for (const v of message.groups) {
      GroupInfo.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.group_members) {
      GroupMember.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    if (message.group_policy_seq !== 0) {
      writer.uint32(32).uint64(message.group_policy_seq)
    }
    for (const v of message.group_policies) {
      GroupPolicyInfo.encode(v!, writer.uint32(42).fork()).ldelim()
    }
    if (message.proposal_seq !== 0) {
      writer.uint32(48).uint64(message.proposal_seq)
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(58).fork()).ldelim()
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(66).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.groups = []
    message.group_members = []
    message.group_policies = []
    message.proposals = []
    message.votes = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.group_seq = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.groups.push(GroupInfo.decode(reader, reader.uint32()))
          break
        case 3:
          message.group_members.push(
            GroupMember.decode(reader, reader.uint32())
          )
          break
        case 4:
          message.group_policy_seq = longToNumber(reader.uint64() as Long)
          break
        case 5:
          message.group_policies.push(
            GroupPolicyInfo.decode(reader, reader.uint32())
          )
          break
        case 6:
          message.proposal_seq = longToNumber(reader.uint64() as Long)
          break
        case 7:
          message.proposals.push(Proposal.decode(reader, reader.uint32()))
          break
        case 8:
          message.votes.push(Vote.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.groups = []
    message.group_members = []
    message.group_policies = []
    message.proposals = []
    message.votes = []
    if (object.group_seq !== undefined && object.group_seq !== null) {
      message.group_seq = Number(object.group_seq)
    } else {
      message.group_seq = 0
    }
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(GroupInfo.fromJSON(e))
      }
    }
    if (object.group_members !== undefined && object.group_members !== null) {
      for (const e of object.group_members) {
        message.group_members.push(GroupMember.fromJSON(e))
      }
    }
    if (
      object.group_policy_seq !== undefined &&
      object.group_policy_seq !== null
    ) {
      message.group_policy_seq = Number(object.group_policy_seq)
    } else {
      message.group_policy_seq = 0
    }
    if (object.group_policies !== undefined && object.group_policies !== null) {
      for (const e of object.group_policies) {
        message.group_policies.push(GroupPolicyInfo.fromJSON(e))
      }
    }
    if (object.proposal_seq !== undefined && object.proposal_seq !== null) {
      message.proposal_seq = Number(object.proposal_seq)
    } else {
      message.proposal_seq = 0
    }
    if (object.proposals !== undefined && object.proposals !== null) {
      for (const e of object.proposals) {
        message.proposals.push(Proposal.fromJSON(e))
      }
    }
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    message.group_seq !== undefined && (obj.group_seq = message.group_seq)
    if (message.groups) {
      obj.groups = message.groups.map((e) =>
        e ? GroupInfo.toJSON(e) : undefined
      )
    } else {
      obj.groups = []
    }
    if (message.group_members) {
      obj.group_members = message.group_members.map((e) =>
        e ? GroupMember.toJSON(e) : undefined
      )
    } else {
      obj.group_members = []
    }
    message.group_policy_seq !== undefined &&
      (obj.group_policy_seq = message.group_policy_seq)
    if (message.group_policies) {
      obj.group_policies = message.group_policies.map((e) =>
        e ? GroupPolicyInfo.toJSON(e) : undefined
      )
    } else {
      obj.group_policies = []
    }
    message.proposal_seq !== undefined &&
      (obj.proposal_seq = message.proposal_seq)
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) =>
        e ? Proposal.toJSON(e) : undefined
      )
    } else {
      obj.proposals = []
    }
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined))
    } else {
      obj.votes = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.groups = []
    message.group_members = []
    message.group_policies = []
    message.proposals = []
    message.votes = []
    if (object.group_seq !== undefined && object.group_seq !== null) {
      message.group_seq = object.group_seq
    } else {
      message.group_seq = 0
    }
    if (object.groups !== undefined && object.groups !== null) {
      for (const e of object.groups) {
        message.groups.push(GroupInfo.fromPartial(e))
      }
    }
    if (object.group_members !== undefined && object.group_members !== null) {
      for (const e of object.group_members) {
        message.group_members.push(GroupMember.fromPartial(e))
      }
    }
    if (
      object.group_policy_seq !== undefined &&
      object.group_policy_seq !== null
    ) {
      message.group_policy_seq = object.group_policy_seq
    } else {
      message.group_policy_seq = 0
    }
    if (object.group_policies !== undefined && object.group_policies !== null) {
      for (const e of object.group_policies) {
        message.group_policies.push(GroupPolicyInfo.fromPartial(e))
      }
    }
    if (object.proposal_seq !== undefined && object.proposal_seq !== null) {
      message.proposal_seq = object.proposal_seq
    } else {
      message.proposal_seq = 0
    }
    if (object.proposals !== undefined && object.proposals !== null) {
      for (const e of object.proposals) {
        message.proposals.push(Proposal.fromPartial(e))
      }
    }
    if (object.votes !== undefined && object.votes !== null) {
      for (const e of object.votes) {
        message.votes.push(Vote.fromPartial(e))
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
