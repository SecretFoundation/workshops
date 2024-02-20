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
exports.QueryClientImpl = exports.QueryNextSequenceReceiveResponse = exports.QueryNextSequenceReceiveRequest = exports.QueryUnreceivedAcksResponse = exports.QueryUnreceivedAcksRequest = exports.QueryUnreceivedPacketsResponse = exports.QueryUnreceivedPacketsRequest = exports.QueryPacketAcknowledgementsResponse = exports.QueryPacketAcknowledgementsRequest = exports.QueryPacketAcknowledgementResponse = exports.QueryPacketAcknowledgementRequest = exports.QueryPacketReceiptResponse = exports.QueryPacketReceiptRequest = exports.QueryPacketCommitmentsResponse = exports.QueryPacketCommitmentsRequest = exports.QueryPacketCommitmentResponse = exports.QueryPacketCommitmentRequest = exports.QueryChannelConsensusStateResponse = exports.QueryChannelConsensusStateRequest = exports.QueryChannelClientStateResponse = exports.QueryChannelClientStateRequest = exports.QueryConnectionChannelsResponse = exports.QueryConnectionChannelsRequest = exports.QueryChannelsResponse = exports.QueryChannelsRequest = exports.QueryChannelResponse = exports.QueryChannelRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const channel_1 = require("./channel");
const client_1 = require("../../client/v1/client");
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const any_1 = require("../../../../google/protobuf/any");
exports.protobufPackage = "ibc.core.channel.v1";
function createBaseQueryChannelRequest() {
    return { port_id: "", channel_id: "" };
}
exports.QueryChannelRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryChannelRequest();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryChannelResponse() {
    return {
        channel: undefined,
        proof: new Uint8Array(),
        proof_height: undefined,
    };
}
exports.QueryChannelResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            channel: isSet(object.channel)
                ? channel_1.Channel.fromJSON(object.channel)
                : undefined,
            proof: isSet(object.proof)
                ? bytesFromBase64(object.proof)
                : new Uint8Array(),
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel !== undefined &&
            (obj.channel = message.channel
                ? channel_1.Channel.toJSON(message.channel)
                : undefined);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryChannelResponse();
        message.channel =
            object.channel !== undefined && object.channel !== null
                ? channel_1.Channel.fromPartial(object.channel)
                : undefined;
        message.proof = (_a = object.proof) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        return message;
    },
};
function createBaseQueryChannelsRequest() {
    return { pagination: undefined };
}
exports.QueryChannelsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryChannelsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryChannelsResponse() {
    return { channels: [], pagination: undefined, height: undefined };
}
exports.QueryChannelsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.channels) {
            channel_1.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channels.push(channel_1.IdentifiedChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            channels: Array.isArray(object === null || object === void 0 ? void 0 : object.channels)
                ? object.channels.map((e) => channel_1.IdentifiedChannel.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
            height: isSet(object.height) ? client_1.Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map((e) => e ? channel_1.IdentifiedChannel.toJSON(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        message.height !== undefined &&
            (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryChannelsResponse();
        message.channels =
            ((_a = object.channels) === null || _a === void 0 ? void 0 : _a.map((e) => channel_1.IdentifiedChannel.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        message.height =
            object.height !== undefined && object.height !== null
                ? client_1.Height.fromPartial(object.height)
                : undefined;
        return message;
    },
};
function createBaseQueryConnectionChannelsRequest() {
    return { connection: "", pagination: undefined };
}
exports.QueryConnectionChannelsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection !== "") {
            writer.uint32(10).string(message.connection);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionChannelsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            connection: isSet(object.connection) ? String(object.connection) : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined && (obj.connection = message.connection);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConnectionChannelsRequest();
        message.connection = (_a = object.connection) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryConnectionChannelsResponse() {
    return { channels: [], pagination: undefined, height: undefined };
}
exports.QueryConnectionChannelsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.channels) {
            channel_1.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionChannelsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channels.push(channel_1.IdentifiedChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            channels: Array.isArray(object === null || object === void 0 ? void 0 : object.channels)
                ? object.channels.map((e) => channel_1.IdentifiedChannel.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
            height: isSet(object.height) ? client_1.Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.channels) {
            obj.channels = message.channels.map((e) => e ? channel_1.IdentifiedChannel.toJSON(e) : undefined);
        }
        else {
            obj.channels = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        message.height !== undefined &&
            (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConnectionChannelsResponse();
        message.channels =
            ((_a = object.channels) === null || _a === void 0 ? void 0 : _a.map((e) => channel_1.IdentifiedChannel.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        message.height =
            object.height !== undefined && object.height !== null
                ? client_1.Height.fromPartial(object.height)
                : undefined;
        return message;
    },
};
function createBaseQueryChannelClientStateRequest() {
    return { port_id: "", channel_id: "" };
}
exports.QueryChannelClientStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelClientStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryChannelClientStateRequest();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryChannelClientStateResponse() {
    return {
        identified_client_state: undefined,
        proof: new Uint8Array(),
        proof_height: undefined,
    };
}
exports.QueryChannelClientStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.identified_client_state !== undefined) {
            client_1.IdentifiedClientState.encode(message.identified_client_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identified_client_state = client_1.IdentifiedClientState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            identified_client_state: isSet(object.identified_client_state)
                ? client_1.IdentifiedClientState.fromJSON(object.identified_client_state)
                : undefined,
            proof: isSet(object.proof)
                ? bytesFromBase64(object.proof)
                : new Uint8Array(),
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.identified_client_state !== undefined &&
            (obj.identified_client_state = message.identified_client_state
                ? client_1.IdentifiedClientState.toJSON(message.identified_client_state)
                : undefined);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryChannelClientStateResponse();
        message.identified_client_state =
            object.identified_client_state !== undefined &&
                object.identified_client_state !== null
                ? client_1.IdentifiedClientState.fromPartial(object.identified_client_state)
                : undefined;
        message.proof = (_a = object.proof) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        return message;
    },
};
function createBaseQueryChannelConsensusStateRequest() {
    return {
        port_id: "",
        channel_id: "",
        revision_number: "0",
        revision_height: "0",
    };
}
exports.QueryChannelConsensusStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.revision_number !== "0") {
            writer.uint32(24).uint64(message.revision_number);
        }
        if (message.revision_height !== "0") {
            writer.uint32(32).uint64(message.revision_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelConsensusStateRequest();
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
                    message.revision_number = longToString(reader.uint64());
                    break;
                case 4:
                    message.revision_height = longToString(reader.uint64());
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
            revision_number: isSet(object.revision_number)
                ? String(object.revision_number)
                : "0",
            revision_height: isSet(object.revision_height)
                ? String(object.revision_height)
                : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.revision_number !== undefined &&
            (obj.revision_number = message.revision_number);
        message.revision_height !== undefined &&
            (obj.revision_height = message.revision_height);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseQueryChannelConsensusStateRequest();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        message.revision_number = (_c = object.revision_number) !== null && _c !== void 0 ? _c : "0";
        message.revision_height = (_d = object.revision_height) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseQueryChannelConsensusStateResponse() {
    return {
        consensus_state: undefined,
        client_id: "",
        proof: new Uint8Array(),
        proof_height: undefined,
    };
}
exports.QueryChannelConsensusStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.consensus_state !== undefined) {
            any_1.Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.client_id !== "") {
            writer.uint32(18).string(message.client_id);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryChannelConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.client_id = reader.string();
                    break;
                case 3:
                    message.proof = reader.bytes();
                    break;
                case 4:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            consensus_state: isSet(object.consensus_state)
                ? any_1.Any.fromJSON(object.consensus_state)
                : undefined,
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            proof: isSet(object.proof)
                ? bytesFromBase64(object.proof)
                : new Uint8Array(),
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensus_state !== undefined &&
            (obj.consensus_state = message.consensus_state
                ? any_1.Any.toJSON(message.consensus_state)
                : undefined);
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryChannelConsensusStateResponse();
        message.consensus_state =
            object.consensus_state !== undefined && object.consensus_state !== null
                ? any_1.Any.fromPartial(object.consensus_state)
                : undefined;
        message.client_id = (_a = object.client_id) !== null && _a !== void 0 ? _a : "";
        message.proof = (_b = object.proof) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        return message;
    },
};
function createBaseQueryPacketCommitmentRequest() {
    return { port_id: "", channel_id: "", sequence: "0" };
}
exports.QueryPacketCommitmentRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.sequence !== "0") {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentRequest();
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
                    message.sequence = longToString(reader.uint64());
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
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryPacketCommitmentRequest();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        message.sequence = (_c = object.sequence) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseQueryPacketCommitmentResponse() {
    return {
        commitment: new Uint8Array(),
        proof: new Uint8Array(),
        proof_height: undefined,
    };
}
exports.QueryPacketCommitmentResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.commitment.length !== 0) {
            writer.uint32(10).bytes(message.commitment);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commitment = reader.bytes();
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            commitment: isSet(object.commitment)
                ? bytesFromBase64(object.commitment)
                : new Uint8Array(),
            proof: isSet(object.proof)
                ? bytesFromBase64(object.proof)
                : new Uint8Array(),
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.commitment !== undefined &&
            (obj.commitment = base64FromBytes(message.commitment !== undefined
                ? message.commitment
                : new Uint8Array()));
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryPacketCommitmentResponse();
        message.commitment = (_a = object.commitment) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proof = (_b = object.proof) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        return message;
    },
};
function createBaseQueryPacketCommitmentsRequest() {
    return { port_id: "", channel_id: "", pagination: undefined };
}
exports.QueryPacketCommitmentsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentsRequest();
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryPacketCommitmentsRequest();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryPacketCommitmentsResponse() {
    return { commitments: [], pagination: undefined, height: undefined };
}
exports.QueryPacketCommitmentsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.commitments) {
            channel_1.PacketState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketCommitmentsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commitments.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            commitments: Array.isArray(object === null || object === void 0 ? void 0 : object.commitments)
                ? object.commitments.map((e) => channel_1.PacketState.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
            height: isSet(object.height) ? client_1.Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.commitments) {
            obj.commitments = message.commitments.map((e) => e ? channel_1.PacketState.toJSON(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        message.height !== undefined &&
            (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPacketCommitmentsResponse();
        message.commitments =
            ((_a = object.commitments) === null || _a === void 0 ? void 0 : _a.map((e) => channel_1.PacketState.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        message.height =
            object.height !== undefined && object.height !== null
                ? client_1.Height.fromPartial(object.height)
                : undefined;
        return message;
    },
};
function createBaseQueryPacketReceiptRequest() {
    return { port_id: "", channel_id: "", sequence: "0" };
}
exports.QueryPacketReceiptRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.sequence !== "0") {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketReceiptRequest();
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
                    message.sequence = longToString(reader.uint64());
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
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryPacketReceiptRequest();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        message.sequence = (_c = object.sequence) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseQueryPacketReceiptResponse() {
    return { received: false, proof: new Uint8Array(), proof_height: undefined };
}
exports.QueryPacketReceiptResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.received === true) {
            writer.uint32(16).bool(message.received);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketReceiptResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.received = reader.bool();
                    break;
                case 3:
                    message.proof = reader.bytes();
                    break;
                case 4:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            received: isSet(object.received) ? Boolean(object.received) : false,
            proof: isSet(object.proof)
                ? bytesFromBase64(object.proof)
                : new Uint8Array(),
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.received !== undefined && (obj.received = message.received);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryPacketReceiptResponse();
        message.received = (_a = object.received) !== null && _a !== void 0 ? _a : false;
        message.proof = (_b = object.proof) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        return message;
    },
};
function createBaseQueryPacketAcknowledgementRequest() {
    return { port_id: "", channel_id: "", sequence: "0" };
}
exports.QueryPacketAcknowledgementRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.sequence !== "0") {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementRequest();
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
                    message.sequence = longToString(reader.uint64());
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
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryPacketAcknowledgementRequest();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        message.sequence = (_c = object.sequence) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseQueryPacketAcknowledgementResponse() {
    return {
        acknowledgement: new Uint8Array(),
        proof: new Uint8Array(),
        proof_height: undefined,
    };
}
exports.QueryPacketAcknowledgementResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.acknowledgement.length !== 0) {
            writer.uint32(10).bytes(message.acknowledgement);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.acknowledgement = reader.bytes();
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            acknowledgement: isSet(object.acknowledgement)
                ? bytesFromBase64(object.acknowledgement)
                : new Uint8Array(),
            proof: isSet(object.proof)
                ? bytesFromBase64(object.proof)
                : new Uint8Array(),
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.acknowledgement !== undefined &&
            (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined
                ? message.acknowledgement
                : new Uint8Array()));
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryPacketAcknowledgementResponse();
        message.acknowledgement = (_a = object.acknowledgement) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proof = (_b = object.proof) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        return message;
    },
};
function createBaseQueryPacketAcknowledgementsRequest() {
    return {
        port_id: "",
        channel_id: "",
        pagination: undefined,
        packet_commitment_sequences: [],
    };
}
exports.QueryPacketAcknowledgementsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.packet_commitment_sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementsRequest();
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
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.packet_commitment_sequences.push(longToString(reader.uint64()));
                        }
                    }
                    else {
                        message.packet_commitment_sequences.push(longToString(reader.uint64()));
                    }
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
            packet_commitment_sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.packet_commitment_sequences)
                ? object.packet_commitment_sequences.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        if (message.packet_commitment_sequences) {
            obj.packet_commitment_sequences = message.packet_commitment_sequences.map((e) => e);
        }
        else {
            obj.packet_commitment_sequences = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryPacketAcknowledgementsRequest();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.packet_commitment_sequences =
            ((_c = object.packet_commitment_sequences) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryPacketAcknowledgementsResponse() {
    return { acknowledgements: [], pagination: undefined, height: undefined };
}
exports.QueryPacketAcknowledgementsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.acknowledgements) {
            channel_1.PacketState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPacketAcknowledgementsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.acknowledgements.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            acknowledgements: Array.isArray(object === null || object === void 0 ? void 0 : object.acknowledgements)
                ? object.acknowledgements.map((e) => channel_1.PacketState.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
            height: isSet(object.height) ? client_1.Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map((e) => e ? channel_1.PacketState.toJSON(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        message.height !== undefined &&
            (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPacketAcknowledgementsResponse();
        message.acknowledgements =
            ((_a = object.acknowledgements) === null || _a === void 0 ? void 0 : _a.map((e) => channel_1.PacketState.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        message.height =
            object.height !== undefined && object.height !== null
                ? client_1.Height.fromPartial(object.height)
                : undefined;
        return message;
    },
};
function createBaseQueryUnreceivedPacketsRequest() {
    return { port_id: "", channel_id: "", packet_commitment_sequences: [] };
}
exports.QueryUnreceivedPacketsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        writer.uint32(26).fork();
        for (const v of message.packet_commitment_sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedPacketsRequest();
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
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.packet_commitment_sequences.push(longToString(reader.uint64()));
                        }
                    }
                    else {
                        message.packet_commitment_sequences.push(longToString(reader.uint64()));
                    }
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
            packet_commitment_sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.packet_commitment_sequences)
                ? object.packet_commitment_sequences.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        if (message.packet_commitment_sequences) {
            obj.packet_commitment_sequences = message.packet_commitment_sequences.map((e) => e);
        }
        else {
            obj.packet_commitment_sequences = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryUnreceivedPacketsRequest();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        message.packet_commitment_sequences =
            ((_c = object.packet_commitment_sequences) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryUnreceivedPacketsResponse() {
    return { sequences: [], height: undefined };
}
exports.QueryUnreceivedPacketsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedPacketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sequences.push(longToString(reader.uint64()));
                        }
                    }
                    else {
                        message.sequences.push(longToString(reader.uint64()));
                    }
                    break;
                case 2:
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sequences)
                ? object.sequences.map((e) => String(e))
                : [],
            height: isSet(object.height) ? client_1.Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map((e) => e);
        }
        else {
            obj.sequences = [];
        }
        message.height !== undefined &&
            (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryUnreceivedPacketsResponse();
        message.sequences = ((_a = object.sequences) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.height =
            object.height !== undefined && object.height !== null
                ? client_1.Height.fromPartial(object.height)
                : undefined;
        return message;
    },
};
function createBaseQueryUnreceivedAcksRequest() {
    return { port_id: "", channel_id: "", packet_ack_sequences: [] };
}
exports.QueryUnreceivedAcksRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        writer.uint32(26).fork();
        for (const v of message.packet_ack_sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedAcksRequest();
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
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.packet_ack_sequences.push(longToString(reader.uint64()));
                        }
                    }
                    else {
                        message.packet_ack_sequences.push(longToString(reader.uint64()));
                    }
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
            packet_ack_sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.packet_ack_sequences)
                ? object.packet_ack_sequences.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        if (message.packet_ack_sequences) {
            obj.packet_ack_sequences = message.packet_ack_sequences.map((e) => e);
        }
        else {
            obj.packet_ack_sequences = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryUnreceivedAcksRequest();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        message.packet_ack_sequences =
            ((_c = object.packet_ack_sequences) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseQueryUnreceivedAcksResponse() {
    return { sequences: [], height: undefined };
}
exports.QueryUnreceivedAcksResponse = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.sequences) {
            writer.uint64(v);
        }
        writer.ldelim();
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnreceivedAcksResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.sequences.push(longToString(reader.uint64()));
                        }
                    }
                    else {
                        message.sequences.push(longToString(reader.uint64()));
                    }
                    break;
                case 2:
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sequences)
                ? object.sequences.map((e) => String(e))
                : [],
            height: isSet(object.height) ? client_1.Height.fromJSON(object.height) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.sequences) {
            obj.sequences = message.sequences.map((e) => e);
        }
        else {
            obj.sequences = [];
        }
        message.height !== undefined &&
            (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryUnreceivedAcksResponse();
        message.sequences = ((_a = object.sequences) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.height =
            object.height !== undefined && object.height !== null
                ? client_1.Height.fromPartial(object.height)
                : undefined;
        return message;
    },
};
function createBaseQueryNextSequenceReceiveRequest() {
    return { port_id: "", channel_id: "" };
}
exports.QueryNextSequenceReceiveRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNextSequenceReceiveRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryNextSequenceReceiveRequest();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryNextSequenceReceiveResponse() {
    return {
        next_sequence_receive: "0",
        proof: new Uint8Array(),
        proof_height: undefined,
    };
}
exports.QueryNextSequenceReceiveResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.next_sequence_receive !== "0") {
            writer.uint32(8).uint64(message.next_sequence_receive);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryNextSequenceReceiveResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.next_sequence_receive = longToString(reader.uint64());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            next_sequence_receive: isSet(object.next_sequence_receive)
                ? String(object.next_sequence_receive)
                : "0",
            proof: isSet(object.proof)
                ? bytesFromBase64(object.proof)
                : new Uint8Array(),
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.next_sequence_receive !== undefined &&
            (obj.next_sequence_receive = message.next_sequence_receive);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryNextSequenceReceiveResponse();
        message.next_sequence_receive = (_a = object.next_sequence_receive) !== null && _a !== void 0 ? _a : "0";
        message.proof = (_b = object.proof) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Channel = this.Channel.bind(this);
        this.Channels = this.Channels.bind(this);
        this.ConnectionChannels = this.ConnectionChannels.bind(this);
        this.ChannelClientState = this.ChannelClientState.bind(this);
        this.ChannelConsensusState = this.ChannelConsensusState.bind(this);
        this.PacketCommitment = this.PacketCommitment.bind(this);
        this.PacketCommitments = this.PacketCommitments.bind(this);
        this.PacketReceipt = this.PacketReceipt.bind(this);
        this.PacketAcknowledgement = this.PacketAcknowledgement.bind(this);
        this.PacketAcknowledgements = this.PacketAcknowledgements.bind(this);
        this.UnreceivedPackets = this.UnreceivedPackets.bind(this);
        this.UnreceivedAcks = this.UnreceivedAcks.bind(this);
        this.NextSequenceReceive = this.NextSequenceReceive.bind(this);
    }
    Channel(request) {
        const data = exports.QueryChannelRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channel", data);
        return promise.then((data) => exports.QueryChannelResponse.decode(new _m0.Reader(data)));
    }
    Channels(request) {
        const data = exports.QueryChannelsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "Channels", data);
        return promise.then((data) => exports.QueryChannelsResponse.decode(new _m0.Reader(data)));
    }
    ConnectionChannels(request) {
        const data = exports.QueryConnectionChannelsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "ConnectionChannels", data);
        return promise.then((data) => exports.QueryConnectionChannelsResponse.decode(new _m0.Reader(data)));
    }
    ChannelClientState(request) {
        const data = exports.QueryChannelClientStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelClientState", data);
        return promise.then((data) => exports.QueryChannelClientStateResponse.decode(new _m0.Reader(data)));
    }
    ChannelConsensusState(request) {
        const data = exports.QueryChannelConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "ChannelConsensusState", data);
        return promise.then((data) => exports.QueryChannelConsensusStateResponse.decode(new _m0.Reader(data)));
    }
    PacketCommitment(request) {
        const data = exports.QueryPacketCommitmentRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitment", data);
        return promise.then((data) => exports.QueryPacketCommitmentResponse.decode(new _m0.Reader(data)));
    }
    PacketCommitments(request) {
        const data = exports.QueryPacketCommitmentsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketCommitments", data);
        return promise.then((data) => exports.QueryPacketCommitmentsResponse.decode(new _m0.Reader(data)));
    }
    PacketReceipt(request) {
        const data = exports.QueryPacketReceiptRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketReceipt", data);
        return promise.then((data) => exports.QueryPacketReceiptResponse.decode(new _m0.Reader(data)));
    }
    PacketAcknowledgement(request) {
        const data = exports.QueryPacketAcknowledgementRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgement", data);
        return promise.then((data) => exports.QueryPacketAcknowledgementResponse.decode(new _m0.Reader(data)));
    }
    PacketAcknowledgements(request) {
        const data = exports.QueryPacketAcknowledgementsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "PacketAcknowledgements", data);
        return promise.then((data) => exports.QueryPacketAcknowledgementsResponse.decode(new _m0.Reader(data)));
    }
    UnreceivedPackets(request) {
        const data = exports.QueryUnreceivedPacketsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedPackets", data);
        return promise.then((data) => exports.QueryUnreceivedPacketsResponse.decode(new _m0.Reader(data)));
    }
    UnreceivedAcks(request) {
        const data = exports.QueryUnreceivedAcksRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "UnreceivedAcks", data);
        return promise.then((data) => exports.QueryUnreceivedAcksResponse.decode(new _m0.Reader(data)));
    }
    NextSequenceReceive(request) {
        const data = exports.QueryNextSequenceReceiveRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.channel.v1.Query", "NextSequenceReceive", data);
        return promise.then((data) => exports.QueryNextSequenceReceiveResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
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
//# sourceMappingURL=query.js.map