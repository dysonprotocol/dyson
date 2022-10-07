/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "dyson";

export interface Cron {
  blockHeight: string;
  indexes: string[];
}

const baseCron: object = { blockHeight: "", indexes: "" };

export const Cron = {
  encode(message: Cron, writer: Writer = Writer.create()): Writer {
    if (message.blockHeight !== "") {
      writer.uint32(10).string(message.blockHeight);
    }
    for (const v of message.indexes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Cron {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCron } as Cron;
    message.indexes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.string();
          break;
        case 2:
          message.indexes.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Cron {
    const message = { ...baseCron } as Cron;
    message.indexes = [];
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = String(object.blockHeight);
    } else {
      message.blockHeight = "";
    }
    if (object.indexes !== undefined && object.indexes !== null) {
      for (const e of object.indexes) {
        message.indexes.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Cron): unknown {
    const obj: any = {};
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    if (message.indexes) {
      obj.indexes = message.indexes.map((e) => e);
    } else {
      obj.indexes = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Cron>): Cron {
    const message = { ...baseCron } as Cron;
    message.indexes = [];
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    } else {
      message.blockHeight = "";
    }
    if (object.indexes !== undefined && object.indexes !== null) {
      for (const e of object.indexes) {
        message.indexes.push(e);
      }
    }
    return message;
  },
};

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
