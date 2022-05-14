/* eslint-disable */
import { Writer, Reader } from 'protobufjs/minimal';
export const protobufPackage = 'dyson';
const baseMsgRun = { creator: '', address: '', extraLines: '', functionName: '', args: '', kwargs: '', coins: '' };
export const MsgRun = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.address !== '') {
            writer.uint32(18).string(message.address);
        }
        if (message.extraLines !== '') {
            writer.uint32(26).string(message.extraLines);
        }
        if (message.functionName !== '') {
            writer.uint32(34).string(message.functionName);
        }
        if (message.args !== '') {
            writer.uint32(42).string(message.args);
        }
        if (message.kwargs !== '') {
            writer.uint32(50).string(message.kwargs);
        }
        if (message.coins !== '') {
            writer.uint32(58).string(message.coins);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRun };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.address = reader.string();
                    break;
                case 3:
                    message.extraLines = reader.string();
                    break;
                case 4:
                    message.functionName = reader.string();
                    break;
                case 5:
                    message.args = reader.string();
                    break;
                case 6:
                    message.kwargs = reader.string();
                    break;
                case 7:
                    message.coins = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRun };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = '';
        }
        if (object.extraLines !== undefined && object.extraLines !== null) {
            message.extraLines = String(object.extraLines);
        }
        else {
            message.extraLines = '';
        }
        if (object.functionName !== undefined && object.functionName !== null) {
            message.functionName = String(object.functionName);
        }
        else {
            message.functionName = '';
        }
        if (object.args !== undefined && object.args !== null) {
            message.args = String(object.args);
        }
        else {
            message.args = '';
        }
        if (object.kwargs !== undefined && object.kwargs !== null) {
            message.kwargs = String(object.kwargs);
        }
        else {
            message.kwargs = '';
        }
        if (object.coins !== undefined && object.coins !== null) {
            message.coins = String(object.coins);
        }
        else {
            message.coins = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.address !== undefined && (obj.address = message.address);
        message.extraLines !== undefined && (obj.extraLines = message.extraLines);
        message.functionName !== undefined && (obj.functionName = message.functionName);
        message.args !== undefined && (obj.args = message.args);
        message.kwargs !== undefined && (obj.kwargs = message.kwargs);
        message.coins !== undefined && (obj.coins = message.coins);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRun };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = '';
        }
        if (object.extraLines !== undefined && object.extraLines !== null) {
            message.extraLines = object.extraLines;
        }
        else {
            message.extraLines = '';
        }
        if (object.functionName !== undefined && object.functionName !== null) {
            message.functionName = object.functionName;
        }
        else {
            message.functionName = '';
        }
        if (object.args !== undefined && object.args !== null) {
            message.args = object.args;
        }
        else {
            message.args = '';
        }
        if (object.kwargs !== undefined && object.kwargs !== null) {
            message.kwargs = object.kwargs;
        }
        else {
            message.kwargs = '';
        }
        if (object.coins !== undefined && object.coins !== null) {
            message.coins = object.coins;
        }
        else {
            message.coins = '';
        }
        return message;
    }
};
const baseMsgRunResponse = { response: '' };
export const MsgRunResponse = {
    encode(message, writer = Writer.create()) {
        if (message.response !== '') {
            writer.uint32(10).string(message.response);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRunResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.response = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRunResponse };
        if (object.response !== undefined && object.response !== null) {
            message.response = String(object.response);
        }
        else {
            message.response = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.response !== undefined && (obj.response = message.response);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRunResponse };
        if (object.response !== undefined && object.response !== null) {
            message.response = object.response;
        }
        else {
            message.response = '';
        }
        return message;
    }
};
