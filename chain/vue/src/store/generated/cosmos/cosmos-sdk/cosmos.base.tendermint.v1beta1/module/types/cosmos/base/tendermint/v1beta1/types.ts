/* eslint-disable */
import { Timestamp } from '../../../../google/protobuf/timestamp'
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { Data, Commit, BlockID } from '../../../../tendermint/types/types'
import { EvidenceList } from '../../../../tendermint/types/evidence'
import { Consensus } from '../../../../tendermint/version/types'

export const protobufPackage = 'cosmos.base.tendermint.v1beta1'

/**
 * Block is tendermint type Block, with the Header proposer address
 * field converted to bech32 string.
 */
export interface Block {
  header: Header | undefined
  data: Data | undefined
  evidence: EvidenceList | undefined
  last_commit: Commit | undefined
}

/** Header defines the structure of a Tendermint block header. */
export interface Header {
  /** basic block info */
  version: Consensus | undefined
  chain_id: string
  height: number
  time: Date | undefined
  /** prev block info */
  last_block_id: BlockID | undefined
  /** hashes of block data */
  last_commit_hash: Uint8Array
  /** transactions */
  data_hash: Uint8Array
  /** hashes from the app output from the prev block */
  validators_hash: Uint8Array
  /** validators for the next block */
  next_validators_hash: Uint8Array
  /** consensus params for current block */
  consensus_hash: Uint8Array
  /** state after txs from the previous block */
  app_hash: Uint8Array
  /** root hash of all results from the txs from the previous block */
  last_results_hash: Uint8Array
  /** consensus info */
  evidence_hash: Uint8Array
  /**
   * proposer_address is the original block proposer address, formatted as a Bech32 string.
   * In Tendermint, this type is `bytes`, but in the SDK, we convert it to a Bech32 string
   * for better UX.
   */
  proposer_address: string
}

const baseBlock: object = {}

export const Block = {
  encode(message: Block, writer: Writer = Writer.create()): Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim()
    }
    if (message.data !== undefined) {
      Data.encode(message.data, writer.uint32(18).fork()).ldelim()
    }
    if (message.evidence !== undefined) {
      EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim()
    }
    if (message.last_commit !== undefined) {
      Commit.encode(message.last_commit, writer.uint32(34).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Block {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseBlock } as Block
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32())
          break
        case 2:
          message.data = Data.decode(reader, reader.uint32())
          break
        case 3:
          message.evidence = EvidenceList.decode(reader, reader.uint32())
          break
        case 4:
          message.last_commit = Commit.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Block {
    const message = { ...baseBlock } as Block
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromJSON(object.header)
    } else {
      message.header = undefined
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Data.fromJSON(object.data)
    } else {
      message.data = undefined
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = EvidenceList.fromJSON(object.evidence)
    } else {
      message.evidence = undefined
    }
    if (object.last_commit !== undefined && object.last_commit !== null) {
      message.last_commit = Commit.fromJSON(object.last_commit)
    } else {
      message.last_commit = undefined
    }
    return message
  },

  toJSON(message: Block): unknown {
    const obj: any = {}
    message.header !== undefined &&
      (obj.header = message.header ? Header.toJSON(message.header) : undefined)
    message.data !== undefined &&
      (obj.data = message.data ? Data.toJSON(message.data) : undefined)
    message.evidence !== undefined &&
      (obj.evidence = message.evidence
        ? EvidenceList.toJSON(message.evidence)
        : undefined)
    message.last_commit !== undefined &&
      (obj.last_commit = message.last_commit
        ? Commit.toJSON(message.last_commit)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<Block>): Block {
    const message = { ...baseBlock } as Block
    if (object.header !== undefined && object.header !== null) {
      message.header = Header.fromPartial(object.header)
    } else {
      message.header = undefined
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Data.fromPartial(object.data)
    } else {
      message.data = undefined
    }
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = EvidenceList.fromPartial(object.evidence)
    } else {
      message.evidence = undefined
    }
    if (object.last_commit !== undefined && object.last_commit !== null) {
      message.last_commit = Commit.fromPartial(object.last_commit)
    } else {
      message.last_commit = undefined
    }
    return message
  },
}

const baseHeader: object = { chain_id: '', height: 0, proposer_address: '' }

export const Header = {
  encode(message: Header, writer: Writer = Writer.create()): Writer {
    if (message.version !== undefined) {
      Consensus.encode(message.version, writer.uint32(10).fork()).ldelim()
    }
    if (message.chain_id !== '') {
      writer.uint32(18).string(message.chain_id)
    }
    if (message.height !== 0) {
      writer.uint32(24).int64(message.height)
    }
    if (message.time !== undefined) {
      Timestamp.encode(
        toTimestamp(message.time),
        writer.uint32(34).fork()
      ).ldelim()
    }
    if (message.last_block_id !== undefined) {
      BlockID.encode(message.last_block_id, writer.uint32(42).fork()).ldelim()
    }
    if (message.last_commit_hash.length !== 0) {
      writer.uint32(50).bytes(message.last_commit_hash)
    }
    if (message.data_hash.length !== 0) {
      writer.uint32(58).bytes(message.data_hash)
    }
    if (message.validators_hash.length !== 0) {
      writer.uint32(66).bytes(message.validators_hash)
    }
    if (message.next_validators_hash.length !== 0) {
      writer.uint32(74).bytes(message.next_validators_hash)
    }
    if (message.consensus_hash.length !== 0) {
      writer.uint32(82).bytes(message.consensus_hash)
    }
    if (message.app_hash.length !== 0) {
      writer.uint32(90).bytes(message.app_hash)
    }
    if (message.last_results_hash.length !== 0) {
      writer.uint32(98).bytes(message.last_results_hash)
    }
    if (message.evidence_hash.length !== 0) {
      writer.uint32(106).bytes(message.evidence_hash)
    }
    if (message.proposer_address !== '') {
      writer.uint32(114).string(message.proposer_address)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Header {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseHeader } as Header
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.version = Consensus.decode(reader, reader.uint32())
          break
        case 2:
          message.chain_id = reader.string()
          break
        case 3:
          message.height = longToNumber(reader.int64() as Long)
          break
        case 4:
          message.time = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          )
          break
        case 5:
          message.last_block_id = BlockID.decode(reader, reader.uint32())
          break
        case 6:
          message.last_commit_hash = reader.bytes()
          break
        case 7:
          message.data_hash = reader.bytes()
          break
        case 8:
          message.validators_hash = reader.bytes()
          break
        case 9:
          message.next_validators_hash = reader.bytes()
          break
        case 10:
          message.consensus_hash = reader.bytes()
          break
        case 11:
          message.app_hash = reader.bytes()
          break
        case 12:
          message.last_results_hash = reader.bytes()
          break
        case 13:
          message.evidence_hash = reader.bytes()
          break
        case 14:
          message.proposer_address = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Header {
    const message = { ...baseHeader } as Header
    if (object.version !== undefined && object.version !== null) {
      message.version = Consensus.fromJSON(object.version)
    } else {
      message.version = undefined
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chain_id = String(object.chain_id)
    } else {
      message.chain_id = ''
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height)
    } else {
      message.height = 0
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = fromJsonTimestamp(object.time)
    } else {
      message.time = undefined
    }
    if (object.last_block_id !== undefined && object.last_block_id !== null) {
      message.last_block_id = BlockID.fromJSON(object.last_block_id)
    } else {
      message.last_block_id = undefined
    }
    if (
      object.last_commit_hash !== undefined &&
      object.last_commit_hash !== null
    ) {
      message.last_commit_hash = bytesFromBase64(object.last_commit_hash)
    }
    if (object.data_hash !== undefined && object.data_hash !== null) {
      message.data_hash = bytesFromBase64(object.data_hash)
    }
    if (
      object.validators_hash !== undefined &&
      object.validators_hash !== null
    ) {
      message.validators_hash = bytesFromBase64(object.validators_hash)
    }
    if (
      object.next_validators_hash !== undefined &&
      object.next_validators_hash !== null
    ) {
      message.next_validators_hash = bytesFromBase64(
        object.next_validators_hash
      )
    }
    if (object.consensus_hash !== undefined && object.consensus_hash !== null) {
      message.consensus_hash = bytesFromBase64(object.consensus_hash)
    }
    if (object.app_hash !== undefined && object.app_hash !== null) {
      message.app_hash = bytesFromBase64(object.app_hash)
    }
    if (
      object.last_results_hash !== undefined &&
      object.last_results_hash !== null
    ) {
      message.last_results_hash = bytesFromBase64(object.last_results_hash)
    }
    if (object.evidence_hash !== undefined && object.evidence_hash !== null) {
      message.evidence_hash = bytesFromBase64(object.evidence_hash)
    }
    if (
      object.proposer_address !== undefined &&
      object.proposer_address !== null
    ) {
      message.proposer_address = String(object.proposer_address)
    } else {
      message.proposer_address = ''
    }
    return message
  },

  toJSON(message: Header): unknown {
    const obj: any = {}
    message.version !== undefined &&
      (obj.version = message.version
        ? Consensus.toJSON(message.version)
        : undefined)
    message.chain_id !== undefined && (obj.chain_id = message.chain_id)
    message.height !== undefined && (obj.height = message.height)
    message.time !== undefined &&
      (obj.time =
        message.time !== undefined ? message.time.toISOString() : null)
    message.last_block_id !== undefined &&
      (obj.last_block_id = message.last_block_id
        ? BlockID.toJSON(message.last_block_id)
        : undefined)
    message.last_commit_hash !== undefined &&
      (obj.last_commit_hash = base64FromBytes(
        message.last_commit_hash !== undefined
          ? message.last_commit_hash
          : new Uint8Array()
      ))
    message.data_hash !== undefined &&
      (obj.data_hash = base64FromBytes(
        message.data_hash !== undefined ? message.data_hash : new Uint8Array()
      ))
    message.validators_hash !== undefined &&
      (obj.validators_hash = base64FromBytes(
        message.validators_hash !== undefined
          ? message.validators_hash
          : new Uint8Array()
      ))
    message.next_validators_hash !== undefined &&
      (obj.next_validators_hash = base64FromBytes(
        message.next_validators_hash !== undefined
          ? message.next_validators_hash
          : new Uint8Array()
      ))
    message.consensus_hash !== undefined &&
      (obj.consensus_hash = base64FromBytes(
        message.consensus_hash !== undefined
          ? message.consensus_hash
          : new Uint8Array()
      ))
    message.app_hash !== undefined &&
      (obj.app_hash = base64FromBytes(
        message.app_hash !== undefined ? message.app_hash : new Uint8Array()
      ))
    message.last_results_hash !== undefined &&
      (obj.last_results_hash = base64FromBytes(
        message.last_results_hash !== undefined
          ? message.last_results_hash
          : new Uint8Array()
      ))
    message.evidence_hash !== undefined &&
      (obj.evidence_hash = base64FromBytes(
        message.evidence_hash !== undefined
          ? message.evidence_hash
          : new Uint8Array()
      ))
    message.proposer_address !== undefined &&
      (obj.proposer_address = message.proposer_address)
    return obj
  },

  fromPartial(object: DeepPartial<Header>): Header {
    const message = { ...baseHeader } as Header
    if (object.version !== undefined && object.version !== null) {
      message.version = Consensus.fromPartial(object.version)
    } else {
      message.version = undefined
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chain_id = object.chain_id
    } else {
      message.chain_id = ''
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height
    } else {
      message.height = 0
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = object.time
    } else {
      message.time = undefined
    }
    if (object.last_block_id !== undefined && object.last_block_id !== null) {
      message.last_block_id = BlockID.fromPartial(object.last_block_id)
    } else {
      message.last_block_id = undefined
    }
    if (
      object.last_commit_hash !== undefined &&
      object.last_commit_hash !== null
    ) {
      message.last_commit_hash = object.last_commit_hash
    } else {
      message.last_commit_hash = new Uint8Array()
    }
    if (object.data_hash !== undefined && object.data_hash !== null) {
      message.data_hash = object.data_hash
    } else {
      message.data_hash = new Uint8Array()
    }
    if (
      object.validators_hash !== undefined &&
      object.validators_hash !== null
    ) {
      message.validators_hash = object.validators_hash
    } else {
      message.validators_hash = new Uint8Array()
    }
    if (
      object.next_validators_hash !== undefined &&
      object.next_validators_hash !== null
    ) {
      message.next_validators_hash = object.next_validators_hash
    } else {
      message.next_validators_hash = new Uint8Array()
    }
    if (object.consensus_hash !== undefined && object.consensus_hash !== null) {
      message.consensus_hash = object.consensus_hash
    } else {
      message.consensus_hash = new Uint8Array()
    }
    if (object.app_hash !== undefined && object.app_hash !== null) {
      message.app_hash = object.app_hash
    } else {
      message.app_hash = new Uint8Array()
    }
    if (
      object.last_results_hash !== undefined &&
      object.last_results_hash !== null
    ) {
      message.last_results_hash = object.last_results_hash
    } else {
      message.last_results_hash = new Uint8Array()
    }
    if (object.evidence_hash !== undefined && object.evidence_hash !== null) {
      message.evidence_hash = object.evidence_hash
    } else {
      message.evidence_hash = new Uint8Array()
    }
    if (
      object.proposer_address !== undefined &&
      object.proposer_address !== null
    ) {
      message.proposer_address = object.proposer_address
    } else {
      message.proposer_address = ''
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
