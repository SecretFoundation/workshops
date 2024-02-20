"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgAcknowledgementResponse = exports.MsgAcknowledgement = exports.MsgTimeoutOnCloseResponse = exports.MsgTimeoutOnClose = exports.MsgTimeoutResponse = exports.MsgTimeout = exports.MsgRecvPacketResponse = exports.MsgRecvPacket = exports.MsgChannelCloseConfirmResponse = exports.MsgChannelCloseConfirm = exports.MsgChannelCloseInitResponse = exports.MsgChannelCloseInit = exports.MsgChannelOpenConfirmResponse = exports.MsgChannelOpenConfirm = exports.MsgChannelOpenAckResponse = exports.MsgChannelOpenAck = exports.MsgChannelOpenTryResponse = exports.MsgChannelOpenTry = exports.MsgChannelOpenInitResponse = exports.MsgChannelOpenInit = exports.responseResultTypeToJSON = exports.responseResultTypeFromJSON = exports.ResponseResultType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const channel_1 = require("./channel");
const client_1 = require("../../client/v1/client");
exports.protobufPackage = "ibc.core.channel.v1";
/** ResponseResultType defines the possible outcomes of the execution of a message */
var ResponseResultType;
(function (ResponseResultType) {
    /** RESPONSE_RESULT_TYPE_UNSPECIFIED - Default zero value enumeration */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_UNSPECIFIED"] = 0] = "RESPONSE_RESULT_TYPE_UNSPECIFIED";
    /** RESPONSE_RESULT_TYPE_NOOP - The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_NOOP"] = 1] = "RESPONSE_RESULT_TYPE_NOOP";
    /** RESPONSE_RESULT_TYPE_SUCCESS - The message was executed successfully */
    ResponseResultType[ResponseResultType["RESPONSE_RESULT_TYPE_SUCCESS"] = 2] = "RESPONSE_RESULT_TYPE_SUCCESS";
    ResponseResultType[ResponseResultType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResponseResultType = exports.ResponseResultType || (exports.ResponseResultType = {}));
function responseResultTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "RESPONSE_RESULT_TYPE_UNSPECIFIED":
            return ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED;
        case 1:
        case "RESPONSE_RESULT_TYPE_NOOP":
            return ResponseResultType.RESPONSE_RESULT_TYPE_NOOP;
        case 2:
        case "RESPONSE_RESULT_TYPE_SUCCESS":
            return ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResponseResultType.UNRECOGNIZED;
    }
}
exports.responseResultTypeFromJSON = responseResultTypeFromJSON;
function responseResultTypeToJSON(object) {
    switch (object) {
        case ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED:
            return "RESPONSE_RESULT_TYPE_UNSPECIFIED";
        case ResponseResultType.RESPONSE_RESULT_TYPE_NOOP:
            return "RESPONSE_RESULT_TYPE_NOOP";
        case ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS:
            return "RESPONSE_RESULT_TYPE_SUCCESS";
        default:
            return "UNKNOWN";
    }
}
exports.responseResultTypeToJSON = responseResultTypeToJSON;
function createBaseMsgChannelOpenInit() {
    return { port_id: "", channel: undefined, signer: "" };
}
exports.MsgChannelOpenInit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel: isSet(object.channel)
                ? channel_1.Channel.fromJSON(object.channel)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel !== undefined &&
            (obj.channel = message.channel
                ? channel_1.Channel.toJSON(message.channel)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgChannelOpenInit();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel =
            object.channel !== undefined && object.channel !== null
                ? channel_1.Channel.fromPartial(object.channel)
                : undefined;
        message.signer = (_b = object.signer) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgChannelOpenInitResponse() {
    return { channel_id: "", version: "" };
}
exports.MsgChannelOpenInitResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.channel_id !== "") {
            writer.uint32(10).string(message.channel_id);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenInitResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channel_id = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            version: isSet(object.version) ? String(object.version) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgChannelOpenInitResponse();
        message.channel_id = (_a = object.channel_id) !== null && _a !== void 0 ? _a : "";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgChannelOpenTry() {
    return {
        port_id: "",
        previous_channel_id: "",
        channel: undefined,
        counterparty_version: "",
        proof_init: new Uint8Array(),
        proof_height: undefined,
        signer: "",
    };
}
exports.MsgChannelOpenTry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.previous_channel_id !== "") {
            writer.uint32(18).string(message.previous_channel_id);
        }
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(26).fork()).ldelim();
        }
        if (message.counterparty_version !== "") {
            writer.uint32(34).string(message.counterparty_version);
        }
        if (message.proof_init.length !== 0) {
            writer.uint32(42).bytes(message.proof_init);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenTry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.previous_channel_id = reader.string();
                    break;
                case 3:
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.counterparty_version = reader.string();
                    break;
                case 5:
                    message.proof_init = reader.bytes();
                    break;
                case 6:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            previous_channel_id: isSet(object.previous_channel_id)
                ? String(object.previous_channel_id)
                : "",
            channel: isSet(object.channel)
                ? channel_1.Channel.fromJSON(object.channel)
                : undefined,
            counterparty_version: isSet(object.counterparty_version)
                ? String(object.counterparty_version)
                : "",
            proof_init: isSet(object.proof_init)
                ? bytesFromBase64(object.proof_init)
                : new Uint8Array(),
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.previous_channel_id !== undefined &&
            (obj.previous_channel_id = message.previous_channel_id);
        message.channel !== undefined &&
            (obj.channel = message.channel
                ? channel_1.Channel.toJSON(message.channel)
                : undefined);
        message.counterparty_version !== undefined &&
            (obj.counterparty_version = message.counterparty_version);
        message.proof_init !== undefined &&
            (obj.proof_init = base64FromBytes(message.proof_init !== undefined
                ? message.proof_init
                : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseMsgChannelOpenTry();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.previous_channel_id = (_b = object.previous_channel_id) !== null && _b !== void 0 ? _b : "";
        message.channel =
            object.channel !== undefined && object.channel !== null
                ? channel_1.Channel.fromPartial(object.channel)
                : undefined;
        message.counterparty_version = (_c = object.counterparty_version) !== null && _c !== void 0 ? _c : "";
        message.proof_init = (_d = object.proof_init) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        message.signer = (_e = object.signer) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseMsgChannelOpenTryResponse() {
    return { version: "" };
}
exports.MsgChannelOpenTryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenTryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            version: isSet(object.version) ? String(object.version) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgChannelOpenTryResponse();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgChannelOpenAck() {
    return {
        port_id: "",
        channel_id: "",
        counterparty_channel_id: "",
        counterparty_version: "",
        proof_try: new Uint8Array(),
        proof_height: undefined,
        signer: "",
    };
}
exports.MsgChannelOpenAck = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.counterparty_channel_id !== "") {
            writer.uint32(26).string(message.counterparty_channel_id);
        }
        if (message.counterparty_version !== "") {
            writer.uint32(34).string(message.counterparty_version);
        }
        if (message.proof_try.length !== 0) {
            writer.uint32(42).bytes(message.proof_try);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(50).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(58).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenAck();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    message.counterparty_channel_id = reader.string();
                    break;
                case 4:
                    message.counterparty_version = reader.string();
                    break;
                case 5:
                    message.proof_try = reader.bytes();
                    break;
                case 6:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            counterparty_channel_id: isSet(object.counterparty_channel_id)
                ? String(object.counterparty_channel_id)
                : "",
            counterparty_version: isSet(object.counterparty_version)
                ? String(object.counterparty_version)
                : "",
            proof_try: isSet(object.proof_try)
                ? bytesFromBase64(object.proof_try)
                : new Uint8Array(),
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.counterparty_channel_id !== undefined &&
            (obj.counterparty_channel_id = message.counterparty_channel_id);
        message.counterparty_version !== undefined &&
            (obj.counterparty_version = message.counterparty_version);
        message.proof_try !== undefined &&
            (obj.proof_try = base64FromBytes(message.proof_try !== undefined ? message.proof_try : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMsgChannelOpenAck();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        message.counterparty_channel_id = (_c = object.counterparty_channel_id) !== null && _c !== void 0 ? _c : "";
        message.counterparty_version = (_d = object.counterparty_version) !== null && _d !== void 0 ? _d : "";
        message.proof_try = (_e = object.proof_try) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        message.signer = (_f = object.signer) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseMsgChannelOpenAckResponse() {
    return {};
}
exports.MsgChannelOpenAckResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenAckResponse();
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
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgChannelOpenAckResponse();
        return message;
    },
};
function createBaseMsgChannelOpenConfirm() {
    return {
        port_id: "",
        channel_id: "",
        proof_ack: new Uint8Array(),
        proof_height: undefined,
        signer: "",
    };
}
exports.MsgChannelOpenConfirm = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.proof_ack.length !== 0) {
            writer.uint32(26).bytes(message.proof_ack);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    message.proof_ack = reader.bytes();
                    break;
                case 4:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            proof_ack: isSet(object.proof_ack)
                ? bytesFromBase64(object.proof_ack)
                : new Uint8Array(),
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.proof_ack !== undefined &&
            (obj.proof_ack = base64FromBytes(message.proof_ack !== undefined ? message.proof_ack : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgChannelOpenConfirm();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        message.proof_ack = (_c = object.proof_ack) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        message.signer = (_d = object.signer) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgChannelOpenConfirmResponse() {
    return {};
}
exports.MsgChannelOpenConfirmResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelOpenConfirmResponse();
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
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgChannelOpenConfirmResponse();
        return message;
    },
};
function createBaseMsgChannelCloseInit() {
    return { port_id: "", channel_id: "", signer: "" };
}
exports.MsgChannelCloseInit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgChannelCloseInit();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        message.signer = (_c = object.signer) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgChannelCloseInitResponse() {
    return {};
}
exports.MsgChannelCloseInitResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseInitResponse();
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
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgChannelCloseInitResponse();
        return message;
    },
};
function createBaseMsgChannelCloseConfirm() {
    return {
        port_id: "",
        channel_id: "",
        proof_init: new Uint8Array(),
        proof_height: undefined,
        signer: "",
    };
}
exports.MsgChannelCloseConfirm = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.proof_init.length !== 0) {
            writer.uint32(26).bytes(message.proof_init);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    message.proof_init = reader.bytes();
                    break;
                case 4:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            proof_init: isSet(object.proof_init)
                ? bytesFromBase64(object.proof_init)
                : new Uint8Array(),
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.proof_init !== undefined &&
            (obj.proof_init = base64FromBytes(message.proof_init !== undefined
                ? message.proof_init
                : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgChannelCloseConfirm();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        message.proof_init = (_c = object.proof_init) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        message.signer = (_d = object.signer) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgChannelCloseConfirmResponse() {
    return {};
}
exports.MsgChannelCloseConfirmResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgChannelCloseConfirmResponse();
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
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgChannelCloseConfirmResponse();
        return message;
    },
};
function createBaseMsgRecvPacket() {
    return {
        packet: undefined,
        proof_commitment: new Uint8Array(),
        proof_height: undefined,
        signer: "",
    };
}
exports.MsgRecvPacket = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof_commitment.length !== 0) {
            writer.uint32(18).bytes(message.proof_commitment);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecvPacket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof_commitment = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            packet: isSet(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            proof_commitment: isSet(object.proof_commitment)
                ? bytesFromBase64(object.proof_commitment)
                : new Uint8Array(),
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined &&
            (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
        message.proof_commitment !== undefined &&
            (obj.proof_commitment = base64FromBytes(message.proof_commitment !== undefined
                ? message.proof_commitment
                : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgRecvPacket();
        message.packet =
            object.packet !== undefined && object.packet !== null
                ? channel_1.Packet.fromPartial(object.packet)
                : undefined;
        message.proof_commitment = (_a = object.proof_commitment) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        message.signer = (_b = object.signer) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgRecvPacketResponse() {
    return { result: 0 };
}
exports.MsgRecvPacketResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRecvPacketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            result: isSet(object.result)
                ? responseResultTypeFromJSON(object.result)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = responseResultTypeToJSON(message.result));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgRecvPacketResponse();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseMsgTimeout() {
    return {
        packet: undefined,
        proof_unreceived: new Uint8Array(),
        proof_height: undefined,
        next_sequence_recv: "0",
        signer: "",
    };
}
exports.MsgTimeout = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof_unreceived.length !== 0) {
            writer.uint32(18).bytes(message.proof_unreceived);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        if (message.next_sequence_recv !== "0") {
            writer.uint32(32).uint64(message.next_sequence_recv);
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeout();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof_unreceived = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.next_sequence_recv = longToString(reader.uint64());
                    break;
                case 5:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            packet: isSet(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            proof_unreceived: isSet(object.proof_unreceived)
                ? bytesFromBase64(object.proof_unreceived)
                : new Uint8Array(),
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
            next_sequence_recv: isSet(object.next_sequence_recv)
                ? String(object.next_sequence_recv)
                : "0",
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined &&
            (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
        message.proof_unreceived !== undefined &&
            (obj.proof_unreceived = base64FromBytes(message.proof_unreceived !== undefined
                ? message.proof_unreceived
                : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        message.next_sequence_recv !== undefined &&
            (obj.next_sequence_recv = message.next_sequence_recv);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgTimeout();
        message.packet =
            object.packet !== undefined && object.packet !== null
                ? channel_1.Packet.fromPartial(object.packet)
                : undefined;
        message.proof_unreceived = (_a = object.proof_unreceived) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        message.next_sequence_recv = (_b = object.next_sequence_recv) !== null && _b !== void 0 ? _b : "0";
        message.signer = (_c = object.signer) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgTimeoutResponse() {
    return { result: 0 };
}
exports.MsgTimeoutResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            result: isSet(object.result)
                ? responseResultTypeFromJSON(object.result)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = responseResultTypeToJSON(message.result));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgTimeoutResponse();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseMsgTimeoutOnClose() {
    return {
        packet: undefined,
        proof_unreceived: new Uint8Array(),
        proof_close: new Uint8Array(),
        proof_height: undefined,
        next_sequence_recv: "0",
        signer: "",
    };
}
exports.MsgTimeoutOnClose = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof_unreceived.length !== 0) {
            writer.uint32(18).bytes(message.proof_unreceived);
        }
        if (message.proof_close.length !== 0) {
            writer.uint32(26).bytes(message.proof_close);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        if (message.next_sequence_recv !== "0") {
            writer.uint32(40).uint64(message.next_sequence_recv);
        }
        if (message.signer !== "") {
            writer.uint32(50).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutOnClose();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof_unreceived = reader.bytes();
                    break;
                case 3:
                    message.proof_close = reader.bytes();
                    break;
                case 4:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.next_sequence_recv = longToString(reader.uint64());
                    break;
                case 6:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            packet: isSet(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            proof_unreceived: isSet(object.proof_unreceived)
                ? bytesFromBase64(object.proof_unreceived)
                : new Uint8Array(),
            proof_close: isSet(object.proof_close)
                ? bytesFromBase64(object.proof_close)
                : new Uint8Array(),
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
            next_sequence_recv: isSet(object.next_sequence_recv)
                ? String(object.next_sequence_recv)
                : "0",
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined &&
            (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
        message.proof_unreceived !== undefined &&
            (obj.proof_unreceived = base64FromBytes(message.proof_unreceived !== undefined
                ? message.proof_unreceived
                : new Uint8Array()));
        message.proof_close !== undefined &&
            (obj.proof_close = base64FromBytes(message.proof_close !== undefined
                ? message.proof_close
                : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        message.next_sequence_recv !== undefined &&
            (obj.next_sequence_recv = message.next_sequence_recv);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgTimeoutOnClose();
        message.packet =
            object.packet !== undefined && object.packet !== null
                ? channel_1.Packet.fromPartial(object.packet)
                : undefined;
        message.proof_unreceived = (_a = object.proof_unreceived) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proof_close = (_b = object.proof_close) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        message.next_sequence_recv = (_c = object.next_sequence_recv) !== null && _c !== void 0 ? _c : "0";
        message.signer = (_d = object.signer) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgTimeoutOnCloseResponse() {
    return { result: 0 };
}
exports.MsgTimeoutOnCloseResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTimeoutOnCloseResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            result: isSet(object.result)
                ? responseResultTypeFromJSON(object.result)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = responseResultTypeToJSON(message.result));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgTimeoutOnCloseResponse();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseMsgAcknowledgement() {
    return {
        packet: undefined,
        acknowledgement: new Uint8Array(),
        proof_acked: new Uint8Array(),
        proof_height: undefined,
        signer: "",
    };
}
exports.MsgAcknowledgement = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packet !== undefined) {
            channel_1.Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
        }
        if (message.acknowledgement.length !== 0) {
            writer.uint32(18).bytes(message.acknowledgement);
        }
        if (message.proof_acked.length !== 0) {
            writer.uint32(26).bytes(message.proof_acked);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcknowledgement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet = channel_1.Packet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.acknowledgement = reader.bytes();
                    break;
                case 3:
                    message.proof_acked = reader.bytes();
                    break;
                case 4:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.signer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            packet: isSet(object.packet) ? channel_1.Packet.fromJSON(object.packet) : undefined,
            acknowledgement: isSet(object.acknowledgement)
                ? bytesFromBase64(object.acknowledgement)
                : new Uint8Array(),
            proof_acked: isSet(object.proof_acked)
                ? bytesFromBase64(object.proof_acked)
                : new Uint8Array(),
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet !== undefined &&
            (obj.packet = message.packet ? channel_1.Packet.toJSON(message.packet) : undefined);
        message.acknowledgement !== undefined &&
            (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined
                ? message.acknowledgement
                : new Uint8Array()));
        message.proof_acked !== undefined &&
            (obj.proof_acked = base64FromBytes(message.proof_acked !== undefined
                ? message.proof_acked
                : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgAcknowledgement();
        message.packet =
            object.packet !== undefined && object.packet !== null
                ? channel_1.Packet.fromPartial(object.packet)
                : undefined;
        message.acknowledgement = (_a = object.acknowledgement) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proof_acked = (_b = object.proof_acked) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        message.signer = (_c = object.signer) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgAcknowledgementResponse() {
    return { result: 0 };
}
exports.MsgAcknowledgementResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== 0) {
            writer.uint32(8).int32(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgAcknowledgementResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            result: isSet(object.result)
                ? responseResultTypeFromJSON(object.result)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = responseResultTypeToJSON(message.result));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgAcknowledgementResponse();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.ChannelOpenInit = this.ChannelOpenInit.bind(this);
        this.ChannelOpenTry = this.ChannelOpenTry.bind(this);
        this.ChannelOpenAck = this.ChannelOpenAck.bind(this);
        this.ChannelOpenConfirm = this.ChannelOpenConfirm.bind(this);
        this.ChannelCloseInit = this.ChannelCloseInit.bind(this);
        this.ChannelCloseConfirm = this.ChannelCloseConfirm.bind(this);
        this.RecvPacket = this.RecvPacket.bind(this);
        this.Timeout = this.Timeout.bind(this);
        this.TimeoutOnClose = this.TimeoutOnClose.bind(this);
        this.Acknowledgement = this.Acknowledgement.bind(this);
    }
    ChannelOpenInit(request) {
        const data = exports.MsgChannelOpenInit.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenInit", data);
        return promise.then((data) => exports.MsgChannelOpenInitResponse.decode(new _m0.Reader(data)));
    }
    ChannelOpenTry(request) {
        const data = exports.MsgChannelOpenTry.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenTry", data);
        return promise.then((data) => exports.MsgChannelOpenTryResponse.decode(new _m0.Reader(data)));
    }
    ChannelOpenAck(request) {
        const data = exports.MsgChannelOpenAck.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenAck", data);
        return promise.then((data) => exports.MsgChannelOpenAckResponse.decode(new _m0.Reader(data)));
    }
    ChannelOpenConfirm(request) {
        const data = exports.MsgChannelOpenConfirm.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelOpenConfirm", data);
        return promise.then((data) => exports.MsgChannelOpenConfirmResponse.decode(new _m0.Reader(data)));
    }
    ChannelCloseInit(request) {
        const data = exports.MsgChannelCloseInit.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseInit", data);
        return promise.then((data) => exports.MsgChannelCloseInitResponse.decode(new _m0.Reader(data)));
    }
    ChannelCloseConfirm(request) {
        const data = exports.MsgChannelCloseConfirm.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Msg", "ChannelCloseConfirm", data);
        return promise.then((data) => exports.MsgChannelCloseConfirmResponse.decode(new _m0.Reader(data)));
    }
    RecvPacket(request) {
        const data = exports.MsgRecvPacket.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Msg", "RecvPacket", data);
        return promise.then((data) => exports.MsgRecvPacketResponse.decode(new _m0.Reader(data)));
    }
    Timeout(request) {
        const data = exports.MsgTimeout.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Msg", "Timeout", data);
        return promise.then((data) => exports.MsgTimeoutResponse.decode(new _m0.Reader(data)));
    }
    TimeoutOnClose(request) {
        const data = exports.MsgTimeoutOnClose.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Msg", "TimeoutOnClose", data);
        return promise.then((data) => exports.MsgTimeoutOnCloseResponse.decode(new _m0.Reader(data)));
    }
    Acknowledgement(request) {
        const data = exports.MsgAcknowledgement.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Msg", "Acknowledgement", data);
        return promise.then((data) => exports.MsgAcknowledgementResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(""));
}
function longToString(long) {
    return long.toString();
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map