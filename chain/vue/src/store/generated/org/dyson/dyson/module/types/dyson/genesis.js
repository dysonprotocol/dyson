/* eslint-disable */
import { Script } from '../dyson/script';
import { Storage } from '../dyson/storage';
import { SchedualedRun } from '../dyson/schedualed_run';
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'dyson';
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.scriptList) {
            Script.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.storageList) {
            Storage.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.schedualedRunList) {
            SchedualedRun.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.scriptList = [];
        message.storageList = [];
        message.schedualedRunList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scriptList.push(Script.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.storageList.push(Storage.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.schedualedRunList.push(SchedualedRun.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.scriptList = [];
        message.storageList = [];
        message.schedualedRunList = [];
        if (object.scriptList !== undefined && object.scriptList !== null) {
            for (const e of object.scriptList) {
                message.scriptList.push(Script.fromJSON(e));
            }
        }
        if (object.storageList !== undefined && object.storageList !== null) {
            for (const e of object.storageList) {
                message.storageList.push(Storage.fromJSON(e));
            }
        }
        if (object.schedualedRunList !== undefined && object.schedualedRunList !== null) {
            for (const e of object.schedualedRunList) {
                message.schedualedRunList.push(SchedualedRun.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.scriptList) {
            obj.scriptList = message.scriptList.map((e) => (e ? Script.toJSON(e) : undefined));
        }
        else {
            obj.scriptList = [];
        }
        if (message.storageList) {
            obj.storageList = message.storageList.map((e) => (e ? Storage.toJSON(e) : undefined));
        }
        else {
            obj.storageList = [];
        }
        if (message.schedualedRunList) {
            obj.schedualedRunList = message.schedualedRunList.map((e) => (e ? SchedualedRun.toJSON(e) : undefined));
        }
        else {
            obj.schedualedRunList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.scriptList = [];
        message.storageList = [];
        message.schedualedRunList = [];
        if (object.scriptList !== undefined && object.scriptList !== null) {
            for (const e of object.scriptList) {
                message.scriptList.push(Script.fromPartial(e));
            }
        }
        if (object.storageList !== undefined && object.storageList !== null) {
            for (const e of object.storageList) {
                message.storageList.push(Storage.fromPartial(e));
            }
        }
        if (object.schedualedRunList !== undefined && object.schedualedRunList !== null) {
            for (const e of object.schedualedRunList) {
                message.schedualedRunList.push(SchedualedRun.fromPartial(e));
            }
        }
        return message;
    }
};
