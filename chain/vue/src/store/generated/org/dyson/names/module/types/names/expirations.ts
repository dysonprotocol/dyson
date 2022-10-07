/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "names";

export interface Expirations {
  blockHeight: string;
  names: string[];
}

const baseExpirations: object = { blockHeight: "", names: "" };

export const Expirations = {
  encode(message: Expirations, writer: Writer = Writer.create()): Writer {
    if (message.blockHeight !== "") {
      writer.uint32(10).string(message.blockHeight);
    }
    for (const v of message.names) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Expirations {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExpirations } as Expirations;
    message.names = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.string();
          break;
        case 2:
          message.names.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Expirations {
    const message = { ...baseExpirations } as Expirations;
    message.names = [];
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = String(object.blockHeight);
    } else {
      message.blockHeight = "";
    }
    if (object.names !== undefined && object.names !== null) {
      for (const e of object.names) {
        message.names.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: Expirations): unknown {
    const obj: any = {};
    message.blockHeight !== undefined &&
      (obj.blockHeight = message.blockHeight);
    if (message.names) {
      obj.names = message.names.map((e) => e);
    } else {
      obj.names = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<Expirations>): Expirations {
    const message = { ...baseExpirations } as Expirations;
    message.names = [];
    if (object.blockHeight !== undefined && object.blockHeight !== null) {
      message.blockHeight = object.blockHeight;
    } else {
      message.blockHeight = "";
    }
    if (object.names !== undefined && object.names !== null) {
      for (const e of object.names) {
        message.names.push(e);
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
