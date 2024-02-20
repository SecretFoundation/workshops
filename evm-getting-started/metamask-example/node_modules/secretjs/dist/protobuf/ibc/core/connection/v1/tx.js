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
exports.MsgClientImpl = exports.MsgConnectionOpenConfirmResponse = exports.MsgConnectionOpenConfirm = exports.MsgConnectionOpenAckResponse = exports.MsgConnectionOpenAck = exports.MsgConnectionOpenTryResponse = exports.MsgConnectionOpenTry = exports.MsgConnectionOpenInitResponse = exports.MsgConnectionOpenInit = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const connection_1 = require("./connection");
const any_1 = require("../../../../google/protobuf/any");
const client_1 = require("../../client/v1/client");
exports.protobufPackage = "ibc.core.connection.v1";
function createBaseMsgConnectionOpenInit() {
    return {
        client_id: "",
        counterparty: undefined,
        version: undefined,
        delay_period: "0",
        signer: "",
    };
}
exports.MsgConnectionOpenInit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.counterparty !== undefined) {
            connection_1.Counterparty.encode(message.counterparty, writer.uint32(18).fork()).ldelim();
        }
        if (message.version !== undefined) {
            connection_1.Version.encode(message.version, writer.uint32(26).fork()).ldelim();
        }
        if (message.delay_period !== "0") {
            writer.uint32(32).uint64(message.delay_period);
        }
        if (message.signer !== "") {
            writer.uint32(42).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenInit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.counterparty = connection_1.Counterparty.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.version = connection_1.Version.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.delay_period = longToString(reader.uint64());
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
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            counterparty: isSet(object.counterparty)
                ? connection_1.Counterparty.fromJSON(object.counterparty)
                : undefined,
            version: isSet(object.version)
                ? connection_1.Version.fromJSON(object.version)
                : undefined,
            delay_period: isSet(object.delay_period)
                ? String(object.delay_period)
                : "0",
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty
                ? connection_1.Counterparty.toJSON(message.counterparty)
                : undefined);
        message.version !== undefined &&
            (obj.version = message.version
                ? connection_1.Version.toJSON(message.version)
                : undefined);
        message.delay_period !== undefined &&
            (obj.delay_period = message.delay_period);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgConnectionOpenInit();
        message.client_id = (_a = object.client_id) !== null && _a !== void 0 ? _a : "";
        message.counterparty =
            object.counterparty !== undefined && object.counterparty !== null
                ? connection_1.Counterparty.fromPartial(object.counterparty)
                : undefined;
        message.version =
            object.version !== undefined && object.version !== null
                ? connection_1.Version.fromPartial(object.version)
                : undefined;
        message.delay_period = (_b = object.delay_period) !== null && _b !== void 0 ? _b : "0";
        message.signer = (_c = object.signer) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgConnectionOpenInitResponse() {
    return {};
}
exports.MsgConnectionOpenInitResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenInitResponse();
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
        const message = createBaseMsgConnectionOpenInitResponse();
        return message;
    },
};
function createBaseMsgConnectionOpenTry() {
    return {
        client_id: "",
        previous_connection_id: "",
        client_state: undefined,
        counterparty: undefined,
        delay_period: "0",
        counterparty_versions: [],
        proof_height: undefined,
        proof_init: new Uint8Array(),
        proof_client: new Uint8Array(),
        proof_consensus: new Uint8Array(),
        consensus_height: undefined,
        signer: "",
    };
}
exports.MsgConnectionOpenTry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.previous_connection_id !== "") {
            writer.uint32(18).string(message.previous_connection_id);
        }
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(26).fork()).ldelim();
        }
        if (message.counterparty !== undefined) {
            connection_1.Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
        }
        if (message.delay_period !== "0") {
            writer.uint32(40).uint64(message.delay_period);
        }
        for (const v of message.counterparty_versions) {
            connection_1.Version.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(58).fork()).ldelim();
        }
        if (message.proof_init.length !== 0) {
            writer.uint32(66).bytes(message.proof_init);
        }
        if (message.proof_client.length !== 0) {
            writer.uint32(74).bytes(message.proof_client);
        }
        if (message.proof_consensus.length !== 0) {
            writer.uint32(82).bytes(message.proof_consensus);
        }
        if (message.consensus_height !== undefined) {
            client_1.Height.encode(message.consensus_height, writer.uint32(90).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(98).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenTry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.previous_connection_id = reader.string();
                    break;
                case 3:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.counterparty = connection_1.Counterparty.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.delay_period = longToString(reader.uint64());
                    break;
                case 6:
                    message.counterparty_versions.push(connection_1.Version.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.proof_init = reader.bytes();
                    break;
                case 9:
                    message.proof_client = reader.bytes();
                    break;
                case 10:
                    message.proof_consensus = reader.bytes();
                    break;
                case 11:
                    message.consensus_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 12:
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
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            previous_connection_id: isSet(object.previous_connection_id)
                ? String(object.previous_connection_id)
                : "",
            client_state: isSet(object.client_state)
                ? any_1.Any.fromJSON(object.client_state)
                : undefined,
            counterparty: isSet(object.counterparty)
                ? connection_1.Counterparty.fromJSON(object.counterparty)
                : undefined,
            delay_period: isSet(object.delay_period)
                ? String(object.delay_period)
                : "0",
            counterparty_versions: Array.isArray(object === null || object === void 0 ? void 0 : object.counterparty_versions)
                ? object.counterparty_versions.map((e) => connection_1.Version.fromJSON(e))
                : [],
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
            proof_init: isSet(object.proof_init)
                ? bytesFromBase64(object.proof_init)
                : new Uint8Array(),
            proof_client: isSet(object.proof_client)
                ? bytesFromBase64(object.proof_client)
                : new Uint8Array(),
            proof_consensus: isSet(object.proof_consensus)
                ? bytesFromBase64(object.proof_consensus)
                : new Uint8Array(),
            consensus_height: isSet(object.consensus_height)
                ? client_1.Height.fromJSON(object.consensus_height)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.previous_connection_id !== undefined &&
            (obj.previous_connection_id = message.previous_connection_id);
        message.client_state !== undefined &&
            (obj.client_state = message.client_state
                ? any_1.Any.toJSON(message.client_state)
                : undefined);
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty
                ? connection_1.Counterparty.toJSON(message.counterparty)
                : undefined);
        message.delay_period !== undefined &&
            (obj.delay_period = message.delay_period);
        if (message.counterparty_versions) {
            obj.counterparty_versions = message.counterparty_versions.map((e) => e ? connection_1.Version.toJSON(e) : undefined);
        }
        else {
            obj.counterparty_versions = [];
        }
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        message.proof_init !== undefined &&
            (obj.proof_init = base64FromBytes(message.proof_init !== undefined
                ? message.proof_init
                : new Uint8Array()));
        message.proof_client !== undefined &&
            (obj.proof_client = base64FromBytes(message.proof_client !== undefined
                ? message.proof_client
                : new Uint8Array()));
        message.proof_consensus !== undefined &&
            (obj.proof_consensus = base64FromBytes(message.proof_consensus !== undefined
                ? message.proof_consensus
                : new Uint8Array()));
        message.consensus_height !== undefined &&
            (obj.consensus_height = message.consensus_height
                ? client_1.Height.toJSON(message.consensus_height)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseMsgConnectionOpenTry();
        message.client_id = (_a = object.client_id) !== null && _a !== void 0 ? _a : "";
        message.previous_connection_id = (_b = object.previous_connection_id) !== null && _b !== void 0 ? _b : "";
        message.client_state =
            object.client_state !== undefined && object.client_state !== null
                ? any_1.Any.fromPartial(object.client_state)
                : undefined;
        message.counterparty =
            object.counterparty !== undefined && object.counterparty !== null
                ? connection_1.Counterparty.fromPartial(object.counterparty)
                : undefined;
        message.delay_period = (_c = object.delay_period) !== null && _c !== void 0 ? _c : "0";
        message.counterparty_versions =
            ((_d = object.counterparty_versions) === null || _d === void 0 ? void 0 : _d.map((e) => connection_1.Version.fromPartial(e))) || [];
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        message.proof_init = (_e = object.proof_init) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.proof_client = (_f = object.proof_client) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.proof_consensus = (_g = object.proof_consensus) !== null && _g !== void 0 ? _g : new Uint8Array();
        message.consensus_height =
            object.consensus_height !== undefined && object.consensus_height !== null
                ? client_1.Height.fromPartial(object.consensus_height)
                : undefined;
        message.signer = (_h = object.signer) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseMsgConnectionOpenTryResponse() {
    return {};
}
exports.MsgConnectionOpenTryResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenTryResponse();
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
        const message = createBaseMsgConnectionOpenTryResponse();
        return message;
    },
};
function createBaseMsgConnectionOpenAck() {
    return {
        connection_id: "",
        counterparty_connection_id: "",
        version: undefined,
        client_state: undefined,
        proof_height: undefined,
        proof_try: new Uint8Array(),
        proof_client: new Uint8Array(),
        proof_consensus: new Uint8Array(),
        consensus_height: undefined,
        signer: "",
    };
}
exports.MsgConnectionOpenAck = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        if (message.counterparty_connection_id !== "") {
            writer.uint32(18).string(message.counterparty_connection_id);
        }
        if (message.version !== undefined) {
            connection_1.Version.encode(message.version, writer.uint32(26).fork()).ldelim();
        }
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(34).fork()).ldelim();
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(42).fork()).ldelim();
        }
        if (message.proof_try.length !== 0) {
            writer.uint32(50).bytes(message.proof_try);
        }
        if (message.proof_client.length !== 0) {
            writer.uint32(58).bytes(message.proof_client);
        }
        if (message.proof_consensus.length !== 0) {
            writer.uint32(66).bytes(message.proof_consensus);
        }
        if (message.consensus_height !== undefined) {
            client_1.Height.encode(message.consensus_height, writer.uint32(74).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(82).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenAck();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
                    break;
                case 2:
                    message.counterparty_connection_id = reader.string();
                    break;
                case 3:
                    message.version = connection_1.Version.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.proof_try = reader.bytes();
                    break;
                case 7:
                    message.proof_client = reader.bytes();
                    break;
                case 8:
                    message.proof_consensus = reader.bytes();
                    break;
                case 9:
                    message.consensus_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 10:
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
            connection_id: isSet(object.connection_id)
                ? String(object.connection_id)
                : "",
            counterparty_connection_id: isSet(object.counterparty_connection_id)
                ? String(object.counterparty_connection_id)
                : "",
            version: isSet(object.version)
                ? connection_1.Version.fromJSON(object.version)
                : undefined,
            client_state: isSet(object.client_state)
                ? any_1.Any.fromJSON(object.client_state)
                : undefined,
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
            proof_try: isSet(object.proof_try)
                ? bytesFromBase64(object.proof_try)
                : new Uint8Array(),
            proof_client: isSet(object.proof_client)
                ? bytesFromBase64(object.proof_client)
                : new Uint8Array(),
            proof_consensus: isSet(object.proof_consensus)
                ? bytesFromBase64(object.proof_consensus)
                : new Uint8Array(),
            consensus_height: isSet(object.consensus_height)
                ? client_1.Height.fromJSON(object.consensus_height)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined &&
            (obj.connection_id = message.connection_id);
        message.counterparty_connection_id !== undefined &&
            (obj.counterparty_connection_id = message.counterparty_connection_id);
        message.version !== undefined &&
            (obj.version = message.version
                ? connection_1.Version.toJSON(message.version)
                : undefined);
        message.client_state !== undefined &&
            (obj.client_state = message.client_state
                ? any_1.Any.toJSON(message.client_state)
                : undefined);
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        message.proof_try !== undefined &&
            (obj.proof_try = base64FromBytes(message.proof_try !== undefined ? message.proof_try : new Uint8Array()));
        message.proof_client !== undefined &&
            (obj.proof_client = base64FromBytes(message.proof_client !== undefined
                ? message.proof_client
                : new Uint8Array()));
        message.proof_consensus !== undefined &&
            (obj.proof_consensus = base64FromBytes(message.proof_consensus !== undefined
                ? message.proof_consensus
                : new Uint8Array()));
        message.consensus_height !== undefined &&
            (obj.consensus_height = message.consensus_height
                ? client_1.Height.toJSON(message.consensus_height)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMsgConnectionOpenAck();
        message.connection_id = (_a = object.connection_id) !== null && _a !== void 0 ? _a : "";
        message.counterparty_connection_id =
            (_b = object.counterparty_connection_id) !== null && _b !== void 0 ? _b : "";
        message.version =
            object.version !== undefined && object.version !== null
                ? connection_1.Version.fromPartial(object.version)
                : undefined;
        message.client_state =
            object.client_state !== undefined && object.client_state !== null
                ? any_1.Any.fromPartial(object.client_state)
                : undefined;
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        message.proof_try = (_c = object.proof_try) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.proof_client = (_d = object.proof_client) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.proof_consensus = (_e = object.proof_consensus) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.consensus_height =
            object.consensus_height !== undefined && object.consensus_height !== null
                ? client_1.Height.fromPartial(object.consensus_height)
                : undefined;
        message.signer = (_f = object.signer) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseMsgConnectionOpenAckResponse() {
    return {};
}
exports.MsgConnectionOpenAckResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenAckResponse();
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
        const message = createBaseMsgConnectionOpenAckResponse();
        return message;
    },
};
function createBaseMsgConnectionOpenConfirm() {
    return {
        connection_id: "",
        proof_ack: new Uint8Array(),
        proof_height: undefined,
        signer: "",
    };
}
exports.MsgConnectionOpenConfirm = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        if (message.proof_ack.length !== 0) {
            writer.uint32(18).bytes(message.proof_ack);
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
        const message = createBaseMsgConnectionOpenConfirm();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
                    break;
                case 2:
                    message.proof_ack = reader.bytes();
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
            connection_id: isSet(object.connection_id)
                ? String(object.connection_id)
                : "",
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
        message.connection_id !== undefined &&
            (obj.connection_id = message.connection_id);
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
        var _a, _b, _c;
        const message = createBaseMsgConnectionOpenConfirm();
        message.connection_id = (_a = object.connection_id) !== null && _a !== void 0 ? _a : "";
        message.proof_ack = (_b = object.proof_ack) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        message.signer = (_c = object.signer) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgConnectionOpenConfirmResponse() {
    return {};
}
exports.MsgConnectionOpenConfirmResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgConnectionOpenConfirmResponse();
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
        const message = createBaseMsgConnectionOpenConfirmResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.ConnectionOpenInit = this.ConnectionOpenInit.bind(this);
        this.ConnectionOpenTry = this.ConnectionOpenTry.bind(this);
        this.ConnectionOpenAck = this.ConnectionOpenAck.bind(this);
        this.ConnectionOpenConfirm = this.ConnectionOpenConfirm.bind(this);
    }
    ConnectionOpenInit(request) {
        const data = exports.MsgConnectionOpenInit.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenInit", data);
        return promise.then((data) => exports.MsgConnectionOpenInitResponse.decode(new _m0.Reader(data)));
    }
    ConnectionOpenTry(request) {
        const data = exports.MsgConnectionOpenTry.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenTry", data);
        return promise.then((data) => exports.MsgConnectionOpenTryResponse.decode(new _m0.Reader(data)));
    }
    ConnectionOpenAck(request) {
        const data = exports.MsgConnectionOpenAck.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenAck", data);
        return promise.then((data) => exports.MsgConnectionOpenAckResponse.decode(new _m0.Reader(data)));
    }
    ConnectionOpenConfirm(request) {
        const data = exports.MsgConnectionOpenConfirm.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Msg", "ConnectionOpenConfirm", data);
        return promise.then((data) => exports.MsgConnectionOpenConfirmResponse.decode(new _m0.Reader(data)));
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