/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { SchedualedRun } from '../dyson/schedualed_run';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
import { Storage } from '../dyson/storage';
import { Script } from '../dyson/script';
import { MsgRunResponse, MsgRun } from '../dyson/msgrun';
export const protobufPackage = 'dyson';
const baseQueryGetSchedualedRunRequest = { index: '' };
export const QueryGetSchedualedRunRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSchedualedRunRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSchedualedRunRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSchedualedRunRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetSchedualedRunResponse = {};
export const QueryGetSchedualedRunResponse = {
    encode(message, writer = Writer.create()) {
        if (message.schedualedRun !== undefined) {
            SchedualedRun.encode(message.schedualedRun, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSchedualedRunResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.schedualedRun = SchedualedRun.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSchedualedRunResponse };
        if (object.schedualedRun !== undefined && object.schedualedRun !== null) {
            message.schedualedRun = SchedualedRun.fromJSON(object.schedualedRun);
        }
        else {
            message.schedualedRun = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.schedualedRun !== undefined && (obj.schedualedRun = message.schedualedRun ? SchedualedRun.toJSON(message.schedualedRun) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSchedualedRunResponse };
        if (object.schedualedRun !== undefined && object.schedualedRun !== null) {
            message.schedualedRun = SchedualedRun.fromPartial(object.schedualedRun);
        }
        else {
            message.schedualedRun = undefined;
        }
        return message;
    }
};
const baseQueryAllSchedualedRunRequest = {};
export const QueryAllSchedualedRunRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSchedualedRunRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllSchedualedRunRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSchedualedRunRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllSchedualedRunResponse = {};
export const QueryAllSchedualedRunResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.schedualedRun) {
            SchedualedRun.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllSchedualedRunResponse };
        message.schedualedRun = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.schedualedRun.push(SchedualedRun.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllSchedualedRunResponse };
        message.schedualedRun = [];
        if (object.schedualedRun !== undefined && object.schedualedRun !== null) {
            for (const e of object.schedualedRun) {
                message.schedualedRun.push(SchedualedRun.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.schedualedRun) {
            obj.schedualedRun = message.schedualedRun.map((e) => (e ? SchedualedRun.toJSON(e) : undefined));
        }
        else {
            obj.schedualedRun = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllSchedualedRunResponse };
        message.schedualedRun = [];
        if (object.schedualedRun !== undefined && object.schedualedRun !== null) {
            for (const e of object.schedualedRun) {
                message.schedualedRun.push(SchedualedRun.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetStorageRequest = { index: '' };
export const QueryGetStorageRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetStorageRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetStorageRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetStorageRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetStorageResponse = {};
export const QueryGetStorageResponse = {
    encode(message, writer = Writer.create()) {
        if (message.storage !== undefined) {
            Storage.encode(message.storage, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetStorageResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage = Storage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetStorageResponse };
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = Storage.fromJSON(object.storage);
        }
        else {
            message.storage = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.storage !== undefined && (obj.storage = message.storage ? Storage.toJSON(message.storage) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetStorageResponse };
        if (object.storage !== undefined && object.storage !== null) {
            message.storage = Storage.fromPartial(object.storage);
        }
        else {
            message.storage = undefined;
        }
        return message;
    }
};
const baseQueryAllStorageRequest = {};
export const QueryAllStorageRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllStorageRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllStorageRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllStorageRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllStorageResponse = {};
export const QueryAllStorageResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.storage) {
            Storage.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllStorageResponse };
        message.storage = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage.push(Storage.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllStorageResponse };
        message.storage = [];
        if (object.storage !== undefined && object.storage !== null) {
            for (const e of object.storage) {
                message.storage.push(Storage.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.storage) {
            obj.storage = message.storage.map((e) => (e ? Storage.toJSON(e) : undefined));
        }
        else {
            obj.storage = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllStorageResponse };
        message.storage = [];
        if (object.storage !== undefined && object.storage !== null) {
            for (const e of object.storage) {
                message.storage.push(Storage.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryGetScriptRequest = { index: '' };
export const QueryGetScriptRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetScriptRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetScriptRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetScriptRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetScriptResponse = {};
export const QueryGetScriptResponse = {
    encode(message, writer = Writer.create()) {
        if (message.script !== undefined) {
            Script.encode(message.script, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetScriptResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.script = Script.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetScriptResponse };
        if (object.script !== undefined && object.script !== null) {
            message.script = Script.fromJSON(object.script);
        }
        else {
            message.script = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.script !== undefined && (obj.script = message.script ? Script.toJSON(message.script) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetScriptResponse };
        if (object.script !== undefined && object.script !== null) {
            message.script = Script.fromPartial(object.script);
        }
        else {
            message.script = undefined;
        }
        return message;
    }
};
const baseQueryGetSchemaRequest = { index: '' };
export const QueryGetSchemaRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSchemaRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSchemaRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSchemaRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        return message;
    }
};
const baseQueryGetSchemaResponse = { schema: '' };
export const QueryGetSchemaResponse = {
    encode(message, writer = Writer.create()) {
        if (message.schema !== '') {
            writer.uint32(10).string(message.schema);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetSchemaResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.schema = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetSchemaResponse };
        if (object.schema !== undefined && object.schema !== null) {
            message.schema = String(object.schema);
        }
        else {
            message.schema = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.schema !== undefined && (obj.schema = message.schema);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetSchemaResponse };
        if (object.schema !== undefined && object.schema !== null) {
            message.schema = object.schema;
        }
        else {
            message.schema = '';
        }
        return message;
    }
};
const baseQueryWsgiRequest = { index: '', httprequest: '' };
export const QueryWsgiRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        if (message.httprequest !== '') {
            writer.uint32(18).string(message.httprequest);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryWsgiRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.httprequest = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryWsgiRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.httprequest !== undefined && object.httprequest !== null) {
            message.httprequest = String(object.httprequest);
        }
        else {
            message.httprequest = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.httprequest !== undefined && (obj.httprequest = message.httprequest);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryWsgiRequest };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.httprequest !== undefined && object.httprequest !== null) {
            message.httprequest = object.httprequest;
        }
        else {
            message.httprequest = '';
        }
        return message;
    }
};
const baseQueryWsgiResponse = { httpresponse: '' };
export const QueryWsgiResponse = {
    encode(message, writer = Writer.create()) {
        if (message.httpresponse !== '') {
            writer.uint32(10).string(message.httpresponse);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryWsgiResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.httpresponse = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryWsgiResponse };
        if (object.httpresponse !== undefined && object.httpresponse !== null) {
            message.httpresponse = String(object.httpresponse);
        }
        else {
            message.httpresponse = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.httpresponse !== undefined && (obj.httpresponse = message.httpresponse);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryWsgiResponse };
        if (object.httpresponse !== undefined && object.httpresponse !== null) {
            message.httpresponse = object.httpresponse;
        }
        else {
            message.httpresponse = '';
        }
        return message;
    }
};
const baseQueryAllScriptRequest = {};
export const QueryAllScriptRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllScriptRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllScriptRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllScriptRequest };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryAllScriptResponse = {};
export const QueryAllScriptResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.Script) {
            Script.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryAllScriptResponse };
        message.Script = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Script.push(Script.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryAllScriptResponse };
        message.Script = [];
        if (object.Script !== undefined && object.Script !== null) {
            for (const e of object.Script) {
                message.Script.push(Script.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.Script) {
            obj.Script = message.Script.map((e) => (e ? Script.toJSON(e) : undefined));
        }
        else {
            obj.Script = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryAllScriptResponse };
        message.Script = [];
        if (object.Script !== undefined && object.Script !== null) {
            for (const e of object.Script) {
                message.Script.push(Script.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryPrefixStorageRequest = { prefix: '' };
export const QueryPrefixStorageRequest = {
    encode(message, writer = Writer.create()) {
        if (message.prefix !== '') {
            writer.uint32(10).string(message.prefix);
        }
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPrefixStorageRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.prefix = reader.string();
                    break;
                case 2:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryPrefixStorageRequest };
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = String(object.prefix);
        }
        else {
            message.prefix = '';
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.prefix !== undefined && (obj.prefix = message.prefix);
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryPrefixStorageRequest };
        if (object.prefix !== undefined && object.prefix !== null) {
            message.prefix = object.prefix;
        }
        else {
            message.prefix = '';
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
const baseQueryPrefixStorageResponse = {};
export const QueryPrefixStorageResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.storage) {
            Storage.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryPrefixStorageResponse };
        message.storage = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storage.push(Storage.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryPrefixStorageResponse };
        message.storage = [];
        if (object.storage !== undefined && object.storage !== null) {
            for (const e of object.storage) {
                message.storage.push(Storage.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.storage) {
            obj.storage = message.storage.map((e) => (e ? Storage.toJSON(e) : undefined));
        }
        else {
            obj.storage = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryPrefixStorageResponse };
        message.storage = [];
        if (object.storage !== undefined && object.storage !== null) {
            for (const e of object.storage) {
                message.storage.push(Storage.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    }
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    SchedualedRun(request) {
        const data = QueryGetSchedualedRunRequest.encode(request).finish();
        const promise = this.rpc.request('dyson.Query', 'SchedualedRun', data);
        return promise.then((data) => QueryGetSchedualedRunResponse.decode(new Reader(data)));
    }
    SchedualedRunAll(request) {
        const data = QueryAllSchedualedRunRequest.encode(request).finish();
        const promise = this.rpc.request('dyson.Query', 'SchedualedRunAll', data);
        return promise.then((data) => QueryAllSchedualedRunResponse.decode(new Reader(data)));
    }
    Storage(request) {
        const data = QueryGetStorageRequest.encode(request).finish();
        const promise = this.rpc.request('dyson.Query', 'Storage', data);
        return promise.then((data) => QueryGetStorageResponse.decode(new Reader(data)));
    }
    StorageAll(request) {
        const data = QueryAllStorageRequest.encode(request).finish();
        const promise = this.rpc.request('dyson.Query', 'StorageAll', data);
        return promise.then((data) => QueryAllStorageResponse.decode(new Reader(data)));
    }
    Script(request) {
        const data = QueryGetScriptRequest.encode(request).finish();
        const promise = this.rpc.request('dyson.Query', 'Script', data);
        return promise.then((data) => QueryGetScriptResponse.decode(new Reader(data)));
    }
    Schema(request) {
        const data = QueryGetSchemaRequest.encode(request).finish();
        const promise = this.rpc.request('dyson.Query', 'Schema', data);
        return promise.then((data) => QueryGetSchemaResponse.decode(new Reader(data)));
    }
    Wsgi(request) {
        const data = QueryWsgiRequest.encode(request).finish();
        const promise = this.rpc.request('dyson.Query', 'Wsgi', data);
        return promise.then((data) => QueryWsgiResponse.decode(new Reader(data)));
    }
    QueryScript(request) {
        const data = MsgRun.encode(request).finish();
        const promise = this.rpc.request('dyson.Query', 'QueryScript', data);
        return promise.then((data) => MsgRunResponse.decode(new Reader(data)));
    }
    ScriptAll(request) {
        const data = QueryAllScriptRequest.encode(request).finish();
        const promise = this.rpc.request('dyson.Query', 'ScriptAll', data);
        return promise.then((data) => QueryAllScriptResponse.decode(new Reader(data)));
    }
    PrefixStorage(request) {
        const data = QueryPrefixStorageRequest.encode(request).finish();
        const promise = this.rpc.request('dyson.Query', 'PrefixStorage', data);
        return promise.then((data) => QueryPrefixStorageResponse.decode(new Reader(data)));
    }
}
