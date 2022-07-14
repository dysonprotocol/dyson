/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal';
import { Timestamp } from '../google/protobuf/timestamp';
import { Name } from '../names/name';
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
const baseMsgRegisterResponse = { fee: '' };
export const MsgRegisterResponse = {
    encode(message, writer = Writer.create()) {
        if (message.fee !== '') {
            writer.uint32(10).string(message.fee);
        }
        if (message.expires !== undefined) {
            Timestamp.encode(toTimestamp(message.expires), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRegisterResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fee = reader.string();
                    break;
                case 2:
                    message.expires = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRegisterResponse };
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = String(object.fee);
        }
        else {
            message.fee = '';
        }
        if (object.expires !== undefined && object.expires !== null) {
            message.expires = fromJsonTimestamp(object.expires);
        }
        else {
            message.expires = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.fee !== undefined && (obj.fee = message.fee);
        message.expires !== undefined && (obj.expires = message.expires !== undefined ? message.expires.toISOString() : null);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRegisterResponse };
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = object.fee;
        }
        else {
            message.fee = '';
        }
        if (object.expires !== undefined && object.expires !== null) {
            message.expires = object.expires;
        }
        else {
            message.expires = undefined;
        }
        return message;
    }
};
const baseMsgUpdateName = { owner: '', name: '', destination: '', price: '', authorized: '', commit: '', salt: '' };
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
        if (message.expires !== undefined) {
            Timestamp.encode(toTimestamp(message.expires), writer.uint32(42).fork()).ldelim();
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
                    message.expires = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
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
        message.expires !== undefined && (obj.expires = message.expires !== undefined ? message.expires.toISOString() : null);
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
            message.expires = undefined;
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
const baseMsgReveal = { owner: '', name: '', salt: '' };
export const MsgReveal = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
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
                    message.owner = reader.string();
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
        message.salt !== undefined && (obj.salt = message.salt);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgReveal };
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
    encode(message, writer = Writer.create()) {
        if (message.name !== undefined) {
            Name.encode(message.name, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRevealResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = Name.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgRevealResponse };
        if (object.name !== undefined && object.name !== null) {
            message.name = Name.fromJSON(object.name);
        }
        else {
            message.name = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name ? Name.toJSON(message.name) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRevealResponse };
        if (object.name !== undefined && object.name !== null) {
            message.name = Name.fromPartial(object.name);
        }
        else {
            message.name = undefined;
        }
        return message;
    }
};
const baseMsgSetPriceAndExtend = { owner: '', name: '', price: '' };
export const MsgSetPriceAndExtend = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.price !== '') {
            writer.uint32(26).string(message.price);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSetPriceAndExtend };
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
        const message = { ...baseMsgSetPriceAndExtend };
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
        message.name !== undefined && (obj.name = message.name);
        message.price !== undefined && (obj.price = message.price);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSetPriceAndExtend };
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
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = '';
        }
        return message;
    }
};
const baseMsgSetPriceAndExtendResponse = {};
export const MsgSetPriceAndExtendResponse = {
    encode(message, writer = Writer.create()) {
        if (message.expiry !== undefined) {
            Timestamp.encode(toTimestamp(message.expiry), writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSetPriceAndExtendResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 5:
                    message.expiry = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSetPriceAndExtendResponse };
        if (object.expiry !== undefined && object.expiry !== null) {
            message.expiry = fromJsonTimestamp(object.expiry);
        }
        else {
            message.expiry = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.expiry !== undefined && (obj.expiry = message.expiry !== undefined ? message.expiry.toISOString() : null);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSetPriceAndExtendResponse };
        if (object.expiry !== undefined && object.expiry !== null) {
            message.expiry = object.expiry;
        }
        else {
            message.expiry = undefined;
        }
        return message;
    }
};
const baseMsgOfferTo = { owner: '', name: '', newOwner: '' };
export const MsgOfferTo = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.newOwner !== '') {
            writer.uint32(26).string(message.newOwner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgOfferTo };
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
                    message.newOwner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgOfferTo };
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
        if (object.newOwner !== undefined && object.newOwner !== null) {
            message.newOwner = String(object.newOwner);
        }
        else {
            message.newOwner = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.name !== undefined && (obj.name = message.name);
        message.newOwner !== undefined && (obj.newOwner = message.newOwner);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgOfferTo };
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
        if (object.newOwner !== undefined && object.newOwner !== null) {
            message.newOwner = object.newOwner;
        }
        else {
            message.newOwner = '';
        }
        return message;
    }
};
const baseMsgOfferToResponse = {};
export const MsgOfferToResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgOfferToResponse };
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
        const message = { ...baseMsgOfferToResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgOfferToResponse };
        return message;
    }
};
const baseMsgAccept = { newOwner: '', name: '' };
export const MsgAccept = {
    encode(message, writer = Writer.create()) {
        if (message.newOwner !== '') {
            writer.uint32(10).string(message.newOwner);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAccept };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.newOwner = reader.string();
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
        const message = { ...baseMsgAccept };
        if (object.newOwner !== undefined && object.newOwner !== null) {
            message.newOwner = String(object.newOwner);
        }
        else {
            message.newOwner = '';
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
        message.newOwner !== undefined && (obj.newOwner = message.newOwner);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAccept };
        if (object.newOwner !== undefined && object.newOwner !== null) {
            message.newOwner = object.newOwner;
        }
        else {
            message.newOwner = '';
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
const baseMsgAcceptResponse = {};
export const MsgAcceptResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAcceptResponse };
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
        const message = { ...baseMsgAcceptResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgAcceptResponse };
        return message;
    }
};
const baseMsgBuy = { buyer: '', name: '' };
export const MsgBuy = {
    encode(message, writer = Writer.create()) {
        if (message.buyer !== '') {
            writer.uint32(10).string(message.buyer);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBuy };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.buyer = reader.string();
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
        const message = { ...baseMsgBuy };
        if (object.buyer !== undefined && object.buyer !== null) {
            message.buyer = String(object.buyer);
        }
        else {
            message.buyer = '';
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
        message.buyer !== undefined && (obj.buyer = message.buyer);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgBuy };
        if (object.buyer !== undefined && object.buyer !== null) {
            message.buyer = object.buyer;
        }
        else {
            message.buyer = '';
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
const baseMsgBuyResponse = {};
export const MsgBuyResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBuyResponse };
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
        const message = { ...baseMsgBuyResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgBuyResponse };
        return message;
    }
};
const baseMsgMintCoins = { owner: '', amount: '', denom: '' };
export const MsgMintCoins = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.amount !== '') {
            writer.uint32(18).string(message.amount);
        }
        if (message.denom !== '') {
            writer.uint32(26).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMintCoins };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgMintCoins };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgMintCoins };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        return message;
    }
};
const baseMsgMintCoinsResponse = {};
export const MsgMintCoinsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgMintCoinsResponse };
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
        const message = { ...baseMsgMintCoinsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgMintCoinsResponse };
        return message;
    }
};
const baseMsgBurnCoins = { owner: '', amount: '', denom: '' };
export const MsgBurnCoins = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.amount !== '') {
            writer.uint32(18).string(message.amount);
        }
        if (message.denom !== '') {
            writer.uint32(26).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBurnCoins };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.amount = reader.string();
                    break;
                case 3:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgBurnCoins };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgBurnCoins };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        return message;
    }
};
const baseMsgBurnCoinsResponse = {};
export const MsgBurnCoinsResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgBurnCoinsResponse };
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
        const message = { ...baseMsgBurnCoinsResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgBurnCoinsResponse };
        return message;
    }
};
const baseMsgForceTransfer = { owner: '', from: '', to: '', amount: '', denom: '' };
export const MsgForceTransfer = {
    encode(message, writer = Writer.create()) {
        if (message.owner !== '') {
            writer.uint32(10).string(message.owner);
        }
        if (message.from !== '') {
            writer.uint32(18).string(message.from);
        }
        if (message.to !== '') {
            writer.uint32(26).string(message.to);
        }
        if (message.amount !== '') {
            writer.uint32(34).string(message.amount);
        }
        if (message.denom !== '') {
            writer.uint32(42).string(message.denom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgForceTransfer };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.from = reader.string();
                    break;
                case 3:
                    message.to = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.denom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgForceTransfer };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = '';
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = String(object.from);
        }
        else {
            message.from = '';
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = String(object.to);
        }
        else {
            message.to = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = String(object.denom);
        }
        else {
            message.denom = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.from !== undefined && (obj.from = message.from);
        message.to !== undefined && (obj.to = message.to);
        message.amount !== undefined && (obj.amount = message.amount);
        message.denom !== undefined && (obj.denom = message.denom);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgForceTransfer };
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = '';
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        else {
            message.from = '';
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = object.to;
        }
        else {
            message.to = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = object.denom;
        }
        else {
            message.denom = '';
        }
        return message;
    }
};
const baseMsgForceTransferResponse = {};
export const MsgForceTransferResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgForceTransferResponse };
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
        const message = { ...baseMsgForceTransferResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgForceTransferResponse };
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
    SetPriceAndExtend(request) {
        const data = MsgSetPriceAndExtend.encode(request).finish();
        const promise = this.rpc.request('names.Msg', 'SetPriceAndExtend', data);
        return promise.then((data) => MsgSetPriceAndExtendResponse.decode(new Reader(data)));
    }
    OfferTo(request) {
        const data = MsgOfferTo.encode(request).finish();
        const promise = this.rpc.request('names.Msg', 'OfferTo', data);
        return promise.then((data) => MsgOfferToResponse.decode(new Reader(data)));
    }
    Accept(request) {
        const data = MsgAccept.encode(request).finish();
        const promise = this.rpc.request('names.Msg', 'Accept', data);
        return promise.then((data) => MsgAcceptResponse.decode(new Reader(data)));
    }
    Buy(request) {
        const data = MsgBuy.encode(request).finish();
        const promise = this.rpc.request('names.Msg', 'Buy', data);
        return promise.then((data) => MsgBuyResponse.decode(new Reader(data)));
    }
    MintCoins(request) {
        const data = MsgMintCoins.encode(request).finish();
        const promise = this.rpc.request('names.Msg', 'MintCoins', data);
        return promise.then((data) => MsgMintCoinsResponse.decode(new Reader(data)));
    }
    BurnCoins(request) {
        const data = MsgBurnCoins.encode(request).finish();
        const promise = this.rpc.request('names.Msg', 'BurnCoins', data);
        return promise.then((data) => MsgBurnCoinsResponse.decode(new Reader(data)));
    }
    ForceTransfer(request) {
        const data = MsgForceTransfer.encode(request).finish();
        const promise = this.rpc.request('names.Msg', 'ForceTransfer', data);
        return promise.then((data) => MsgForceTransferResponse.decode(new Reader(data)));
    }
}
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
