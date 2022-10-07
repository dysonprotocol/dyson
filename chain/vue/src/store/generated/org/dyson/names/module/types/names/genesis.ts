/* eslint-disable */
import { Params } from "../names/params";
import { Name } from "../names/name";
import { Expirations } from "../names/expirations";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "names";

/** GenesisState defines the names module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  nameList: Name[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  expirationsList: Expirations[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.nameList) {
      Name.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.expirationsList) {
      Expirations.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.nameList = [];
    message.expirationsList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.nameList.push(Name.decode(reader, reader.uint32()));
          break;
        case 3:
          message.expirationsList.push(
            Expirations.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.nameList = [];
    message.expirationsList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.nameList !== undefined && object.nameList !== null) {
      for (const e of object.nameList) {
        message.nameList.push(Name.fromJSON(e));
      }
    }
    if (
      object.expirationsList !== undefined &&
      object.expirationsList !== null
    ) {
      for (const e of object.expirationsList) {
        message.expirationsList.push(Expirations.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.nameList) {
      obj.nameList = message.nameList.map((e) =>
        e ? Name.toJSON(e) : undefined
      );
    } else {
      obj.nameList = [];
    }
    if (message.expirationsList) {
      obj.expirationsList = message.expirationsList.map((e) =>
        e ? Expirations.toJSON(e) : undefined
      );
    } else {
      obj.expirationsList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.nameList = [];
    message.expirationsList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.nameList !== undefined && object.nameList !== null) {
      for (const e of object.nameList) {
        message.nameList.push(Name.fromPartial(e));
      }
    }
    if (
      object.expirationsList !== undefined &&
      object.expirationsList !== null
    ) {
      for (const e of object.expirationsList) {
        message.expirationsList.push(Expirations.fromPartial(e));
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
