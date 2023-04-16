/* eslint-disable */
import { Script } from '../dyson/script'
import { Storage } from '../dyson/storage'
import { ScheduledRun } from '../dyson/scheduled_run'
import { Cron } from '../dyson/cron'
import { Writer, Reader } from 'protobufjs/minimal'

export const protobufPackage = 'dyson'

/** GenesisState defines the dyson module's genesis state. */
export interface GenesisState {
  script_list: Script[]
  storage_list: Storage[]
  scheduled_run_list: ScheduledRun[]
  /** this line is used by starport scaffolding # genesis/proto/state */
  cronList: Cron[]
}

const baseGenesisState: object = {}

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.script_list) {
      Script.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    for (const v of message.storage_list) {
      Storage.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.scheduled_run_list) {
      ScheduledRun.encode(v!, writer.uint32(34).fork()).ldelim()
    }
    for (const v of message.cronList) {
      Cron.encode(v!, writer.uint32(42).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.script_list = []
    message.storage_list = []
    message.scheduled_run_list = []
    message.cronList = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.script_list.push(Script.decode(reader, reader.uint32()))
          break
        case 2:
          message.storage_list.push(Storage.decode(reader, reader.uint32()))
          break
        case 4:
          message.scheduled_run_list.push(
            ScheduledRun.decode(reader, reader.uint32())
          )
          break
        case 5:
          message.cronList.push(Cron.decode(reader, reader.uint32()))
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
    message.script_list = []
    message.storage_list = []
    message.scheduled_run_list = []
    message.cronList = []
    if (object.script_list !== undefined && object.script_list !== null) {
      for (const e of object.script_list) {
        message.script_list.push(Script.fromJSON(e))
      }
    }
    if (object.storage_list !== undefined && object.storage_list !== null) {
      for (const e of object.storage_list) {
        message.storage_list.push(Storage.fromJSON(e))
      }
    }
    if (
      object.scheduled_run_list !== undefined &&
      object.scheduled_run_list !== null
    ) {
      for (const e of object.scheduled_run_list) {
        message.scheduled_run_list.push(ScheduledRun.fromJSON(e))
      }
    }
    if (object.cronList !== undefined && object.cronList !== null) {
      for (const e of object.cronList) {
        message.cronList.push(Cron.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.script_list) {
      obj.script_list = message.script_list.map((e) =>
        e ? Script.toJSON(e) : undefined
      )
    } else {
      obj.script_list = []
    }
    if (message.storage_list) {
      obj.storage_list = message.storage_list.map((e) =>
        e ? Storage.toJSON(e) : undefined
      )
    } else {
      obj.storage_list = []
    }
    if (message.scheduled_run_list) {
      obj.scheduled_run_list = message.scheduled_run_list.map((e) =>
        e ? ScheduledRun.toJSON(e) : undefined
      )
    } else {
      obj.scheduled_run_list = []
    }
    if (message.cronList) {
      obj.cronList = message.cronList.map((e) =>
        e ? Cron.toJSON(e) : undefined
      )
    } else {
      obj.cronList = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.script_list = []
    message.storage_list = []
    message.scheduled_run_list = []
    message.cronList = []
    if (object.script_list !== undefined && object.script_list !== null) {
      for (const e of object.script_list) {
        message.script_list.push(Script.fromPartial(e))
      }
    }
    if (object.storage_list !== undefined && object.storage_list !== null) {
      for (const e of object.storage_list) {
        message.storage_list.push(Storage.fromPartial(e))
      }
    }
    if (
      object.scheduled_run_list !== undefined &&
      object.scheduled_run_list !== null
    ) {
      for (const e of object.scheduled_run_list) {
        message.scheduled_run_list.push(ScheduledRun.fromPartial(e))
      }
    }
    if (object.cronList !== undefined && object.cronList !== null) {
      for (const e of object.cronList) {
        message.cronList.push(Cron.fromPartial(e))
      }
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
