/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { MsgRun, MsgRunResponse } from "../dyson/msgrun";

export const protobufPackage = "dyson";

export interface MsgCreateScheduledRun {
  creator: string;
  height: number;
  gas: number;
  msg: MsgRun | undefined;
}

export interface MsgCreateScheduledRunResponse {}

export interface MsgUpdateScheduledRun {
  creator: string;
  index: string;
  msg: MsgRun | undefined;
}

export interface MsgUpdateScheduledRunResponse {}

export interface MsgDeleteScheduledRun {
  creator: string;
  index: string;
}

export interface MsgDeleteScheduledRunResponse {}

/** Create a new storage of arbitrary text */
export interface MsgCreateStorage {
  /** The address signing this transaction */
  creator: string;
  /** Name of the Storage, must be prefixed with the creators address (for example: "dys..1a3/some_name") */
  index: string;
  /** data to stor at this index */
  data: string;
  /** If true, force will always store the data at this address regardless of already existing storage */
  force: boolean;
}

export interface MsgCreateStorageResponse {}

export interface MsgUpdateStorage {
  creator: string;
  index: string;
  data: string;
  force: boolean;
}

export interface MsgUpdateStorageResponse {}

export interface MsgDeleteStorage {
  creator: string;
  index: string;
}

export interface MsgDeleteStorageResponse {}

export interface MsgCreateScript {
  creator: string;
  code: string;
}

export interface MsgCreateScriptResponse {
  address: string;
}

export interface MsgUpdateScript {
  creator: string;
  code: string;
}

export interface MsgUpdateScriptResponse {
  address: string;
}

export interface MsgDeleteScript {
  creator: string;
}

export interface MsgDeleteScriptResponse {}

const baseMsgCreateScheduledRun: object = { creator: "", height: 0, gas: 0 };

export const MsgCreateScheduledRun = {
  encode(
    message: MsgCreateScheduledRun,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint64(message.height);
    }
    if (message.gas !== 0) {
      writer.uint32(24).uint64(message.gas);
    }
    if (message.msg !== undefined) {
      MsgRun.encode(message.msg, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateScheduledRun {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateScheduledRun } as MsgCreateScheduledRun;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.gas = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.msg = MsgRun.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateScheduledRun {
    const message = { ...baseMsgCreateScheduledRun } as MsgCreateScheduledRun;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height);
    } else {
      message.height = 0;
    }
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = Number(object.gas);
    } else {
      message.gas = 0;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgRun.fromJSON(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },

  toJSON(message: MsgCreateScheduledRun): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.height !== undefined && (obj.height = message.height);
    message.gas !== undefined && (obj.gas = message.gas);
    message.msg !== undefined &&
      (obj.msg = message.msg ? MsgRun.toJSON(message.msg) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateScheduledRun>
  ): MsgCreateScheduledRun {
    const message = { ...baseMsgCreateScheduledRun } as MsgCreateScheduledRun;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height;
    } else {
      message.height = 0;
    }
    if (object.gas !== undefined && object.gas !== null) {
      message.gas = object.gas;
    } else {
      message.gas = 0;
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgRun.fromPartial(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },
};

const baseMsgCreateScheduledRunResponse: object = {};

export const MsgCreateScheduledRunResponse = {
  encode(
    _: MsgCreateScheduledRunResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateScheduledRunResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateScheduledRunResponse,
    } as MsgCreateScheduledRunResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateScheduledRunResponse {
    const message = {
      ...baseMsgCreateScheduledRunResponse,
    } as MsgCreateScheduledRunResponse;
    return message;
  },

  toJSON(_: MsgCreateScheduledRunResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateScheduledRunResponse>
  ): MsgCreateScheduledRunResponse {
    const message = {
      ...baseMsgCreateScheduledRunResponse,
    } as MsgCreateScheduledRunResponse;
    return message;
  },
};

const baseMsgUpdateScheduledRun: object = { creator: "", index: "" };

export const MsgUpdateScheduledRun = {
  encode(
    message: MsgUpdateScheduledRun,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.msg !== undefined) {
      MsgRun.encode(message.msg, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateScheduledRun {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateScheduledRun } as MsgUpdateScheduledRun;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.msg = MsgRun.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateScheduledRun {
    const message = { ...baseMsgUpdateScheduledRun } as MsgUpdateScheduledRun;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgRun.fromJSON(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateScheduledRun): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.msg !== undefined &&
      (obj.msg = message.msg ? MsgRun.toJSON(message.msg) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateScheduledRun>
  ): MsgUpdateScheduledRun {
    const message = { ...baseMsgUpdateScheduledRun } as MsgUpdateScheduledRun;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = MsgRun.fromPartial(object.msg);
    } else {
      message.msg = undefined;
    }
    return message;
  },
};

const baseMsgUpdateScheduledRunResponse: object = {};

export const MsgUpdateScheduledRunResponse = {
  encode(
    _: MsgUpdateScheduledRunResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateScheduledRunResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateScheduledRunResponse,
    } as MsgUpdateScheduledRunResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateScheduledRunResponse {
    const message = {
      ...baseMsgUpdateScheduledRunResponse,
    } as MsgUpdateScheduledRunResponse;
    return message;
  },

  toJSON(_: MsgUpdateScheduledRunResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateScheduledRunResponse>
  ): MsgUpdateScheduledRunResponse {
    const message = {
      ...baseMsgUpdateScheduledRunResponse,
    } as MsgUpdateScheduledRunResponse;
    return message;
  },
};

const baseMsgDeleteScheduledRun: object = { creator: "", index: "" };

export const MsgDeleteScheduledRun = {
  encode(
    message: MsgDeleteScheduledRun,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteScheduledRun {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteScheduledRun } as MsgDeleteScheduledRun;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteScheduledRun {
    const message = { ...baseMsgDeleteScheduledRun } as MsgDeleteScheduledRun;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteScheduledRun): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeleteScheduledRun>
  ): MsgDeleteScheduledRun {
    const message = { ...baseMsgDeleteScheduledRun } as MsgDeleteScheduledRun;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgDeleteScheduledRunResponse: object = {};

export const MsgDeleteScheduledRunResponse = {
  encode(
    _: MsgDeleteScheduledRunResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteScheduledRunResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteScheduledRunResponse,
    } as MsgDeleteScheduledRunResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteScheduledRunResponse {
    const message = {
      ...baseMsgDeleteScheduledRunResponse,
    } as MsgDeleteScheduledRunResponse;
    return message;
  },

  toJSON(_: MsgDeleteScheduledRunResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteScheduledRunResponse>
  ): MsgDeleteScheduledRunResponse {
    const message = {
      ...baseMsgDeleteScheduledRunResponse,
    } as MsgDeleteScheduledRunResponse;
    return message;
  },
};

const baseMsgCreateStorage: object = {
  creator: "",
  index: "",
  data: "",
  force: false,
};

export const MsgCreateStorage = {
  encode(message: MsgCreateStorage, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    if (message.force === true) {
      writer.uint32(32).bool(message.force);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateStorage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateStorage } as MsgCreateStorage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.data = reader.string();
          break;
        case 4:
          message.force = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateStorage {
    const message = { ...baseMsgCreateStorage } as MsgCreateStorage;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    if (object.force !== undefined && object.force !== null) {
      message.force = Boolean(object.force);
    } else {
      message.force = false;
    }
    return message;
  },

  toJSON(message: MsgCreateStorage): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.data !== undefined && (obj.data = message.data);
    message.force !== undefined && (obj.force = message.force);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateStorage>): MsgCreateStorage {
    const message = { ...baseMsgCreateStorage } as MsgCreateStorage;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
    if (object.force !== undefined && object.force !== null) {
      message.force = object.force;
    } else {
      message.force = false;
    }
    return message;
  },
};

const baseMsgCreateStorageResponse: object = {};

export const MsgCreateStorageResponse = {
  encode(
    _: MsgCreateStorageResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateStorageResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateStorageResponse,
    } as MsgCreateStorageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateStorageResponse {
    const message = {
      ...baseMsgCreateStorageResponse,
    } as MsgCreateStorageResponse;
    return message;
  },

  toJSON(_: MsgCreateStorageResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateStorageResponse>
  ): MsgCreateStorageResponse {
    const message = {
      ...baseMsgCreateStorageResponse,
    } as MsgCreateStorageResponse;
    return message;
  },
};

const baseMsgUpdateStorage: object = {
  creator: "",
  index: "",
  data: "",
  force: false,
};

export const MsgUpdateStorage = {
  encode(message: MsgUpdateStorage, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    if (message.data !== "") {
      writer.uint32(26).string(message.data);
    }
    if (message.force === true) {
      writer.uint32(32).bool(message.force);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateStorage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateStorage } as MsgUpdateStorage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        case 3:
          message.data = reader.string();
          break;
        case 4:
          message.force = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateStorage {
    const message = { ...baseMsgUpdateStorage } as MsgUpdateStorage;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    if (object.force !== undefined && object.force !== null) {
      message.force = Boolean(object.force);
    } else {
      message.force = false;
    }
    return message;
  },

  toJSON(message: MsgUpdateStorage): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    message.data !== undefined && (obj.data = message.data);
    message.force !== undefined && (obj.force = message.force);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateStorage>): MsgUpdateStorage {
    const message = { ...baseMsgUpdateStorage } as MsgUpdateStorage;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
    if (object.force !== undefined && object.force !== null) {
      message.force = object.force;
    } else {
      message.force = false;
    }
    return message;
  },
};

const baseMsgUpdateStorageResponse: object = {};

export const MsgUpdateStorageResponse = {
  encode(
    _: MsgUpdateStorageResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateStorageResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateStorageResponse,
    } as MsgUpdateStorageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateStorageResponse {
    const message = {
      ...baseMsgUpdateStorageResponse,
    } as MsgUpdateStorageResponse;
    return message;
  },

  toJSON(_: MsgUpdateStorageResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateStorageResponse>
  ): MsgUpdateStorageResponse {
    const message = {
      ...baseMsgUpdateStorageResponse,
    } as MsgUpdateStorageResponse;
    return message;
  },
};

const baseMsgDeleteStorage: object = { creator: "", index: "" };

export const MsgDeleteStorage = {
  encode(message: MsgDeleteStorage, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.index !== "") {
      writer.uint32(18).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteStorage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteStorage } as MsgDeleteStorage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteStorage {
    const message = { ...baseMsgDeleteStorage } as MsgDeleteStorage;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteStorage): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteStorage>): MsgDeleteStorage {
    const message = { ...baseMsgDeleteStorage } as MsgDeleteStorage;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseMsgDeleteStorageResponse: object = {};

export const MsgDeleteStorageResponse = {
  encode(
    _: MsgDeleteStorageResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteStorageResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteStorageResponse,
    } as MsgDeleteStorageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteStorageResponse {
    const message = {
      ...baseMsgDeleteStorageResponse,
    } as MsgDeleteStorageResponse;
    return message;
  },

  toJSON(_: MsgDeleteStorageResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteStorageResponse>
  ): MsgDeleteStorageResponse {
    const message = {
      ...baseMsgDeleteStorageResponse,
    } as MsgDeleteStorageResponse;
    return message;
  },
};

const baseMsgCreateScript: object = { creator: "", code: "" };

export const MsgCreateScript = {
  encode(message: MsgCreateScript, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.code !== "") {
      writer.uint32(26).string(message.code);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateScript {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateScript } as MsgCreateScript;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.code = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateScript {
    const message = { ...baseMsgCreateScript } as MsgCreateScript;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    return message;
  },

  toJSON(message: MsgCreateScript): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.code !== undefined && (obj.code = message.code);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateScript>): MsgCreateScript {
    const message = { ...baseMsgCreateScript } as MsgCreateScript;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    return message;
  },
};

const baseMsgCreateScriptResponse: object = { address: "" };

export const MsgCreateScriptResponse = {
  encode(
    message: MsgCreateScriptResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateScriptResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateScriptResponse,
    } as MsgCreateScriptResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateScriptResponse {
    const message = {
      ...baseMsgCreateScriptResponse,
    } as MsgCreateScriptResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgCreateScriptResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateScriptResponse>
  ): MsgCreateScriptResponse {
    const message = {
      ...baseMsgCreateScriptResponse,
    } as MsgCreateScriptResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgUpdateScript: object = { creator: "", code: "" };

export const MsgUpdateScript = {
  encode(message: MsgUpdateScript, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.code !== "") {
      writer.uint32(26).string(message.code);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateScript {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateScript } as MsgUpdateScript;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 3:
          message.code = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateScript {
    const message = { ...baseMsgUpdateScript } as MsgUpdateScript;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateScript): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.code !== undefined && (obj.code = message.code);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateScript>): MsgUpdateScript {
    const message = { ...baseMsgUpdateScript } as MsgUpdateScript;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    return message;
  },
};

const baseMsgUpdateScriptResponse: object = { address: "" };

export const MsgUpdateScriptResponse = {
  encode(
    message: MsgUpdateScriptResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateScriptResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateScriptResponse,
    } as MsgUpdateScriptResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateScriptResponse {
    const message = {
      ...baseMsgUpdateScriptResponse,
    } as MsgUpdateScriptResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateScriptResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateScriptResponse>
  ): MsgUpdateScriptResponse {
    const message = {
      ...baseMsgUpdateScriptResponse,
    } as MsgUpdateScriptResponse;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgDeleteScript: object = { creator: "" };

export const MsgDeleteScript = {
  encode(message: MsgDeleteScript, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteScript {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteScript } as MsgDeleteScript;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteScript {
    const message = { ...baseMsgDeleteScript } as MsgDeleteScript;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteScript): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteScript>): MsgDeleteScript {
    const message = { ...baseMsgDeleteScript } as MsgDeleteScript;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgDeleteScriptResponse: object = {};

export const MsgDeleteScriptResponse = {
  encode(_: MsgDeleteScriptResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteScriptResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteScriptResponse,
    } as MsgDeleteScriptResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteScriptResponse {
    const message = {
      ...baseMsgDeleteScriptResponse,
    } as MsgDeleteScriptResponse;
    return message;
  },

  toJSON(_: MsgDeleteScriptResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteScriptResponse>
  ): MsgDeleteScriptResponse {
    const message = {
      ...baseMsgDeleteScriptResponse,
    } as MsgDeleteScriptResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateScheduledRun(
    request: MsgCreateScheduledRun
  ): Promise<MsgCreateScheduledRunResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateStorage(request: MsgCreateStorage): Promise<MsgCreateStorageResponse>;
  UpdateStorage(request: MsgUpdateStorage): Promise<MsgUpdateStorageResponse>;
  DeleteStorage(request: MsgDeleteStorage): Promise<MsgDeleteStorageResponse>;
  CreateScript(request: MsgCreateScript): Promise<MsgCreateScriptResponse>;
  UpdateScript(request: MsgUpdateScript): Promise<MsgUpdateScriptResponse>;
  DeleteScript(request: MsgDeleteScript): Promise<MsgDeleteScriptResponse>;
  Run(request: MsgRun): Promise<MsgRunResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateScheduledRun(
    request: MsgCreateScheduledRun
  ): Promise<MsgCreateScheduledRunResponse> {
    const data = MsgCreateScheduledRun.encode(request).finish();
    const promise = this.rpc.request("dyson.Msg", "CreateScheduledRun", data);
    return promise.then((data) =>
      MsgCreateScheduledRunResponse.decode(new Reader(data))
    );
  }

  CreateStorage(request: MsgCreateStorage): Promise<MsgCreateStorageResponse> {
    const data = MsgCreateStorage.encode(request).finish();
    const promise = this.rpc.request("dyson.Msg", "CreateStorage", data);
    return promise.then((data) =>
      MsgCreateStorageResponse.decode(new Reader(data))
    );
  }

  UpdateStorage(request: MsgUpdateStorage): Promise<MsgUpdateStorageResponse> {
    const data = MsgUpdateStorage.encode(request).finish();
    const promise = this.rpc.request("dyson.Msg", "UpdateStorage", data);
    return promise.then((data) =>
      MsgUpdateStorageResponse.decode(new Reader(data))
    );
  }

  DeleteStorage(request: MsgDeleteStorage): Promise<MsgDeleteStorageResponse> {
    const data = MsgDeleteStorage.encode(request).finish();
    const promise = this.rpc.request("dyson.Msg", "DeleteStorage", data);
    return promise.then((data) =>
      MsgDeleteStorageResponse.decode(new Reader(data))
    );
  }

  CreateScript(request: MsgCreateScript): Promise<MsgCreateScriptResponse> {
    const data = MsgCreateScript.encode(request).finish();
    const promise = this.rpc.request("dyson.Msg", "CreateScript", data);
    return promise.then((data) =>
      MsgCreateScriptResponse.decode(new Reader(data))
    );
  }

  UpdateScript(request: MsgUpdateScript): Promise<MsgUpdateScriptResponse> {
    const data = MsgUpdateScript.encode(request).finish();
    const promise = this.rpc.request("dyson.Msg", "UpdateScript", data);
    return promise.then((data) =>
      MsgUpdateScriptResponse.decode(new Reader(data))
    );
  }

  DeleteScript(request: MsgDeleteScript): Promise<MsgDeleteScriptResponse> {
    const data = MsgDeleteScript.encode(request).finish();
    const promise = this.rpc.request("dyson.Msg", "DeleteScript", data);
    return promise.then((data) =>
      MsgDeleteScriptResponse.decode(new Reader(data))
    );
  }

  Run(request: MsgRun): Promise<MsgRunResponse> {
    const data = MsgRun.encode(request).finish();
    const promise = this.rpc.request("dyson.Msg", "Run", data);
    return promise.then((data) => MsgRunResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
