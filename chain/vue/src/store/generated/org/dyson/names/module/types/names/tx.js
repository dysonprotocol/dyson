/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
export const protobufPackage = 'names';
const baseMsgRegister = { owner: '', commit: '', price: '' };
export const MsgRegister = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.commit !== '') {
            writer.uint32(18).string(message.commit);
        }
        if (message.price !== '') {
            writer.uint32(34).string(message.price);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRegister };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.commit = reader.string();
                    break;
                case 4:
                    message.price = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRegister };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = String(object.commit);
        }
        else {
            message.commit = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = String(object.price);
        }
        else {
            message.price = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.commit !== undefined && (obj.commit = message.commit);
        message.price !== undefined && (obj.price = message.price);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRegister };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = object.commit;
        }
        else {
            message.commit = '';
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = '';
        }
        return message;
    }
};
const baseMsgRegisterResponse = {};
export const MsgRegisterResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRegisterResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgRegisterResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgRegisterResponse };
        return message;
    }
};
const baseMsgCreateName = { owner: '', name: '', destination: '', price: '', expires: '', authorized: '', commit: '', salt: '' };
export const MsgCreateName = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.destination !== '') {
            writer.uint32(26).string(message.destination);
        }
        if (message.price !== '') {
            writer.uint32(34).string(message.price);
        }
        if (message.expires !== '') {
            writer.uint32(42).string(message.expires);
        }
        if (message.authorized !== '') {
            writer.uint32(50).string(message.authorized);
        }
        if (message.commit !== '') {
            writer.uint32(58).string(message.commit);
        }
        if (message.salt !== '') {
            writer.uint32(66).string(message.salt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateName };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.destination = reader.string();
                    break;
                case 4:
                    message.price = reader.string();
                    break;
                case 5:
                    message.expires = reader.string();
                    break;
                case 6:
                    message.authorized = reader.string();
                    break;
                case 7:
                    message.commit = reader.string();
                    break;
                case 8:
                    message.salt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateName };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
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
            message.expires = String(object.expires);
        }
        else {
            message.expires = '';
        }
        if (object.authorized !== undefined && object.authorized !== null) {
            message.authorized = String(object.authorized);
        }
        else {
            message.authorized = '';
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = String(object.commit);
        }
        else {
            message.commit = '';
        }
        if (object.salt !== undefined && object.salt !== null) {
            message.salt = String(object.salt);
        }
        else {
            message.salt = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.name !== undefined && (obj.name = message.name);
        message.destination !== undefined && (obj.destination = message.destination);
        message.price !== undefined && (obj.price = message.price);
        message.expires !== undefined && (obj.expires = message.expires);
        message.authorized !== undefined && (obj.authorized = message.authorized);
        message.commit !== undefined && (obj.commit = message.commit);
        message.salt !== undefined && (obj.salt = message.salt);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateName };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
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
            message.expires = '';
        }
        if (object.authorized !== undefined && object.authorized !== null) {
            message.authorized = object.authorized;
        }
        else {
            message.authorized = '';
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = object.commit;
        }
        else {
            message.commit = '';
        }
        if (object.salt !== undefined && object.salt !== null) {
            message.salt = object.salt;
        }
        else {
            message.salt = '';
        }
        return message;
    }
};
const baseMsgCreateNameResponse = {};
export const MsgCreateNameResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateNameResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgCreateNameResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgCreateNameResponse };
        return message;
    }
};
const baseMsgUpdateName = { owner: '', name: '', destination: '', price: '', expires: '', authorized: '', commit: '', salt: '' };
export const MsgUpdateName = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.destination !== '') {
            writer.uint32(26).string(message.destination);
        }
        if (message.price !== '') {
            writer.uint32(34).string(message.price);
        }
        if (message.expires !== '') {
            writer.uint32(42).string(message.expires);
        }
        if (message.authorized !== '') {
            writer.uint32(50).string(message.authorized);
        }
        if (message.commit !== '') {
            writer.uint32(58).string(message.commit);
        }
        if (message.salt !== '') {
            writer.uint32(66).string(message.salt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateName };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.destination = reader.string();
                    break;
                case 4:
                    message.price = reader.string();
                    break;
                case 5:
                    message.expires = reader.string();
                    break;
                case 6:
                    message.authorized = reader.string();
                    break;
                case 7:
                    message.commit = reader.string();
                    break;
                case 8:
                    message.salt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateName };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
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
            message.expires = String(object.expires);
        }
        else {
            message.expires = '';
        }
        if (object.authorized !== undefined && object.authorized !== null) {
            message.authorized = String(object.authorized);
        }
        else {
            message.authorized = '';
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = String(object.commit);
        }
        else {
            message.commit = '';
        }
        if (object.salt !== undefined && object.salt !== null) {
            message.salt = String(object.salt);
        }
        else {
            message.salt = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.name !== undefined && (obj.name = message.name);
        message.destination !== undefined && (obj.destination = message.destination);
        message.price !== undefined && (obj.price = message.price);
        message.expires !== undefined && (obj.expires = message.expires);
        message.authorized !== undefined && (obj.authorized = message.authorized);
        message.commit !== undefined && (obj.commit = message.commit);
        message.salt !== undefined && (obj.salt = message.salt);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateName };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
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
            message.expires = '';
        }
        if (object.authorized !== undefined && object.authorized !== null) {
            message.authorized = object.authorized;
        }
        else {
            message.authorized = '';
        }
        if (object.commit !== undefined && object.commit !== null) {
            message.commit = object.commit;
        }
        else {
            message.commit = '';
        }
        if (object.salt !== undefined && object.salt !== null) {
            message.salt = object.salt;
        }
        else {
            message.salt = '';
        }
        return message;
    }
};
const baseMsgUpdateNameResponse = {};
export const MsgUpdateNameResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateNameResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgUpdateNameResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateNameResponse };
        return message;
    }
};
const baseMsgDeleteName = { owner: '', name: '' };
export const MsgDeleteName = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteName };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteName };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteName };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        return message;
    }
};
const baseMsgDeleteNameResponse = {};
export const MsgDeleteNameResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteNameResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgDeleteNameResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteNameResponse };
        return message;
    }
};
const baseMsgReveal = { creator: '', name: '', salt: '' };
export const MsgReveal = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.salt !== '') {
            writer.uint32(26).string(message.salt);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgReveal };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.salt = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgReveal };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.salt !== undefined && object.salt !== null) {
            message.salt = String(object.salt);
        }
        else {
            message.salt = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.salt !== undefined && (obj.salt = message.salt);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgReveal };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.salt !== undefined && object.salt !== null) {
            message.salt = object.salt;
        }
        else {
            message.salt = '';
        }
        return message;
    }
};
const baseMsgRevealResponse = {};
export const MsgRevealResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRevealResponse };
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
    fromJSON(_) {
        const message = { ...baseMsgRevealResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgRevealResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Register(request) {
        const data = MsgRegister.encode(request).finish();
        const promise = this.rpc.request('names.Msg', 'Register', data);
        return promise.then((data) => MsgRegisterResponse.decode(new Reader(data)));
    }
    CreateName(request) {
        const data = MsgCreateName.encode(request).finish();
        const promise = this.rpc.request('names.Msg', 'CreateName', data);
        return promise.then((data) => MsgCreateNameResponse.decode(new Reader(data)));
    }
    UpdateName(request) {
        const data = MsgUpdateName.encode(request).finish();
        const promise = this.rpc.request('names.Msg', 'UpdateName', data);
        return promise.then((data) => MsgUpdateNameResponse.decode(new Reader(data)));
    }
    DeleteName(request) {
        const data = MsgDeleteName.encode(request).finish();
        const promise = this.rpc.request('names.Msg', 'DeleteName', data);
        return promise.then((data) => MsgDeleteNameResponse.decode(new Reader(data)));
    }
    Reveal(request) {
        const data = MsgReveal.encode(request).finish();
        const promise = this.rpc.request('names.Msg', 'Reveal', data);
        return promise.then((data) => MsgRevealResponse.decode(new Reader(data)));
    }
}
