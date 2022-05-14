/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { MsgRun, MsgRunResponse } from '../dyson/msgrun';
import { Coin } from '../cosmos/base/v1beta1/coin';
export const protobufPackage = 'dyson';
const baseSchedualedRun = { index: '', creator: '', height: 0, gas: 0, error: '' };
export const SchedualedRun = {
    encode(message, writer = Writer.create()) {
        if (message.index !== '') {
            writer.uint32(10).string(message.index);
        }
        if (message.creator !== '') {
            writer.uint32(18).string(message.creator);
        }
        if (message.height !== 0) {
            writer.uint32(24).uint64(message.height);
        }
        if (message.gas !== 0) {
            writer.uint32(32).uint64(message.gas);
        }
        if (message.msg !== undefined) {
            MsgRun.encode(message.msg, writer.uint32(42).fork()).ldelim();
        }
        if (message.resp !== undefined) {
            MsgRunResponse.encode(message.resp, writer.uint32(50).fork()).ldelim();
        }
        if (message.error !== '') {
            writer.uint32(58).string(message.error);
        }
        if (message.gasprice !== undefined) {
            Coin.encode(message.gasprice, writer.uint32(66).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            Coin.encode(message.fee, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSchedualedRun };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.height = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.gas = longToNumber(reader.uint64());
                    break;
                case 5:
                    message.msg = MsgRun.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.resp = MsgRunResponse.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.error = reader.string();
                    break;
                case 8:
                    message.gasprice = Coin.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.fee = Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseSchedualedRun };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = '';
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = Number(object.height);
        }
        else {
            message.height = 0;
        }
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = Number(object.gas);
        }
        else {
            message.gas = 0;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = MsgRun.fromJSON(object.msg);
        }
        else {
            message.msg = undefined;
        }
        if (object.resp !== undefined && object.resp !== null) {
            message.resp = MsgRunResponse.fromJSON(object.resp);
        }
        else {
            message.resp = undefined;
        }
        if (object.error !== undefined && object.error !== null) {
            message.error = String(object.error);
        }
        else {
            message.error = '';
        }
        if (object.gasprice !== undefined && object.gasprice !== null) {
            message.gasprice = Coin.fromJSON(object.gasprice);
        }
        else {
            message.gasprice = undefined;
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = Coin.fromJSON(object.fee);
        }
        else {
            message.fee = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.creator !== undefined && (obj.creator = message.creator);
        message.height !== undefined && (obj.height = message.height);
        message.gas !== undefined && (obj.gas = message.gas);
        message.msg !== undefined && (obj.msg = message.msg ? MsgRun.toJSON(message.msg) : undefined);
        message.resp !== undefined && (obj.resp = message.resp ? MsgRunResponse.toJSON(message.resp) : undefined);
        message.error !== undefined && (obj.error = message.error);
        message.gasprice !== undefined && (obj.gasprice = message.gasprice ? Coin.toJSON(message.gasprice) : undefined);
        message.fee !== undefined && (obj.fee = message.fee ? Coin.toJSON(message.fee) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseSchedualedRun };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = '';
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.height !== undefined && object.height !== null) {
            message.height = object.height;
        }
        else {
            message.height = 0;
        }
        if (object.gas !== undefined && object.gas !== null) {
            message.gas = object.gas;
        }
        else {
            message.gas = 0;
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = MsgRun.fromPartial(object.msg);
        }
        else {
            message.msg = undefined;
        }
        if (object.resp !== undefined && object.resp !== null) {
            message.resp = MsgRunResponse.fromPartial(object.resp);
        }
        else {
            message.resp = undefined;
        }
        if (object.error !== undefined && object.error !== null) {
            message.error = object.error;
        }
        else {
            message.error = '';
        }
        if (object.gasprice !== undefined && object.gasprice !== null) {
            message.gasprice = Coin.fromPartial(object.gasprice);
        }
        else {
            message.gasprice = undefined;
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = Coin.fromPartial(object.fee);
        }
        else {
            message.fee = undefined;
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
