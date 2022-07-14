/* eslint-disable */
import { Timestamp } from '../google/protobuf/timestamp';
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'names';
const baseName = { name: '', destination: '', price: '', authorized: '', owner: '', height: 0 };
export const Name = {
    encode(message, writer = Writer.create()) {
        if (message.name !== '') {
            writer.uint32(10).string(message.name);
        }
        if (message.destination !== '') {
            writer.uint32(18).string(message.destination);
        }
        if (message.price !== '') {
            writer.uint32(26).string(message.price);
        }
        if (message.expires !== undefined) {
            Timestamp.encode(toTimestamp(message.expires), writer.uint32(34).fork()).ldelim();
        }
        if (message.authorized !== '') {
            writer.uint32(42).string(message.authorized);
        }
        if (message.owner !== '') {
            writer.uint32(66).string(message.owner);
        }
        if (message.height !== 0) {
            writer.uint32(72).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseName };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.destination = reader.string();
                    break;
                case 3:
                    message.price = reader.string();
                    break;
                case 4:
                    message.expires = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.authorized = reader.string();
                    break;
                case 8:
                    message.owner = reader.string();
                    break;
                case 9:
                    message.height = longToNumber(reader.int64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseName };
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.destination !== undefined && object.destination !== null) {
            message.destination = String(object.destination);
        }
        else {
            message.destination = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = String(object.price);
        }
        else {
            message.price = '';
        }
        if (object.expires !== undefined && object.expires !== null) {
            message.expires = fromJsonTimestamp(object.expires);
        }
        else {
            message.expires = undefined;
        }
        if (object.authorized !== undefined && object.authorized !== null) {
            message.authorized = String(object.authorized);
        }
        else {
            message.authorized = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.destination !== undefined && (obj.destination = message.destination);
        message.price !== undefined && (obj.price = message.price);
        message.expires !== undefined && (obj.expires = message.expires !== undefined ? message.expires.toISOString() : null);
        message.authorized !== undefined && (obj.authorized = message.authorized);
        message.owner !== undefined && (obj.owner = message.owner);
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseName };
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.destination !== undefined && object.destination !== null) {
            message.destination = object.destination;
        }
        else {
            message.destination = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = '';
        }
        if (object.expires !== undefined && object.expires !== null) {
            message.expires = object.expires;
        }
        else {
            message.expires = undefined;
        }
        if (object.authorized !== undefined && object.authorized !== null) {
            message.authorized = object.authorized;
        }
        else {
            message.authorized = '';
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        return message;
    }
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === 'string') {
        return new Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}