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
exports.QueryClientImpl = exports.QueryFeeEnabledChannelResponse = exports.QueryFeeEnabledChannelRequest = exports.QueryFeeEnabledChannelsResponse = exports.QueryFeeEnabledChannelsRequest = exports.QueryCounterpartyPayeeResponse = exports.QueryCounterpartyPayeeRequest = exports.QueryPayeeResponse = exports.QueryPayeeRequest = exports.QueryTotalTimeoutFeesResponse = exports.QueryTotalTimeoutFeesRequest = exports.QueryTotalAckFeesResponse = exports.QueryTotalAckFeesRequest = exports.QueryTotalRecvFeesResponse = exports.QueryTotalRecvFeesRequest = exports.QueryIncentivizedPacketsForChannelResponse = exports.QueryIncentivizedPacketsForChannelRequest = exports.QueryIncentivizedPacketResponse = exports.QueryIncentivizedPacketRequest = exports.QueryIncentivizedPacketsResponse = exports.QueryIncentivizedPacketsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const channel_1 = require("../../../core/channel/v1/channel");
const fee_1 = require("./fee");
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const genesis_1 = require("./genesis");
exports.protobufPackage = "ibc.applications.fee.v1";
function createBaseQueryIncentivizedPacketsRequest() {
    return { pagination: undefined, query_height: "0" };
}
exports.QueryIncentivizedPacketsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.query_height !== "0") {
            writer.uint32(16).uint64(message.query_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.query_height = longToString(reader.uint64());
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
            query_height: isSet(object.query_height)
                ? String(object.query_height)
                : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        message.query_height !== undefined &&
            (obj.query_height = message.query_height);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryIncentivizedPacketsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.query_height = (_a = object.query_height) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryIncentivizedPacketsResponse() {
    return { incentivized_packets: [] };
}
exports.QueryIncentivizedPacketsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.incentivized_packets) {
            fee_1.IdentifiedPacketFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentivized_packets.push(fee_1.IdentifiedPacketFees.decode(reader, reader.uint32()));
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
            incentivized_packets: Array.isArray(object === null || object === void 0 ? void 0 : object.incentivized_packets)
                ? object.incentivized_packets.map((e) => fee_1.IdentifiedPacketFees.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.incentivized_packets) {
            obj.incentivized_packets = message.incentivized_packets.map((e) => e ? fee_1.IdentifiedPacketFees.toJSON(e) : undefined);
        }
        else {
            obj.incentivized_packets = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryIncentivizedPacketsResponse();
        message.incentivized_packets =
            ((_a = object.incentivized_packets) === null || _a === void 0 ? void 0 : _a.map((e) => fee_1.IdentifiedPacketFees.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryIncentivizedPacketRequest() {
    return { packet_id: undefined, query_height: "0" };
}
exports.QueryIncentivizedPacketRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packet_id !== undefined) {
            channel_1.PacketId.encode(message.packet_id, writer.uint32(10).fork()).ldelim();
        }
        if (message.query_height !== "0") {
            writer.uint32(16).uint64(message.query_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet_id = channel_1.PacketId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.query_height = longToString(reader.uint64());
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
            packet_id: isSet(object.packet_id)
                ? channel_1.PacketId.fromJSON(object.packet_id)
                : undefined,
            query_height: isSet(object.query_height)
                ? String(object.query_height)
                : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet_id !== undefined &&
            (obj.packet_id = message.packet_id
                ? channel_1.PacketId.toJSON(message.packet_id)
                : undefined);
        message.query_height !== undefined &&
            (obj.query_height = message.query_height);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryIncentivizedPacketRequest();
        message.packet_id =
            object.packet_id !== undefined && object.packet_id !== null
                ? channel_1.PacketId.fromPartial(object.packet_id)
                : undefined;
        message.query_height = (_a = object.query_height) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryIncentivizedPacketResponse() {
    return { incentivized_packet: undefined };
}
exports.QueryIncentivizedPacketResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.incentivized_packet !== undefined) {
            fee_1.IdentifiedPacketFees.encode(message.incentivized_packet, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentivized_packet = fee_1.IdentifiedPacketFees.decode(reader, reader.uint32());
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
            incentivized_packet: isSet(object.incentivized_packet)
                ? fee_1.IdentifiedPacketFees.fromJSON(object.incentivized_packet)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.incentivized_packet !== undefined &&
            (obj.incentivized_packet = message.incentivized_packet
                ? fee_1.IdentifiedPacketFees.toJSON(message.incentivized_packet)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryIncentivizedPacketResponse();
        message.incentivized_packet =
            object.incentivized_packet !== undefined &&
                object.incentivized_packet !== null
                ? fee_1.IdentifiedPacketFees.fromPartial(object.incentivized_packet)
                : undefined;
        return message;
    },
};
function createBaseQueryIncentivizedPacketsForChannelRequest() {
    return {
        pagination: undefined,
        port_id: "",
        channel_id: "",
        query_height: "0",
    };
}
exports.QueryIncentivizedPacketsForChannelRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.port_id !== "") {
            writer.uint32(18).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(26).string(message.channel_id);
        }
        if (message.query_height !== "0") {
            writer.uint32(32).uint64(message.query_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketsForChannelRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.port_id = reader.string();
                    break;
                case 3:
                    message.channel_id = reader.string();
                    break;
                case 4:
                    message.query_height = longToString(reader.uint64());
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            query_height: isSet(object.query_height)
                ? String(object.query_height)
                : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.query_height !== undefined &&
            (obj.query_height = message.query_height);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryIncentivizedPacketsForChannelRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        message.query_height = (_c = object.query_height) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseQueryIncentivizedPacketsForChannelResponse() {
    return { incentivized_packets: [] };
}
exports.QueryIncentivizedPacketsForChannelResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.incentivized_packets) {
            fee_1.IdentifiedPacketFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryIncentivizedPacketsForChannelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.incentivized_packets.push(fee_1.IdentifiedPacketFees.decode(reader, reader.uint32()));
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
            incentivized_packets: Array.isArray(object === null || object === void 0 ? void 0 : object.incentivized_packets)
                ? object.incentivized_packets.map((e) => fee_1.IdentifiedPacketFees.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.incentivized_packets) {
            obj.incentivized_packets = message.incentivized_packets.map((e) => e ? fee_1.IdentifiedPacketFees.toJSON(e) : undefined);
        }
        else {
            obj.incentivized_packets = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryIncentivizedPacketsForChannelResponse();
        message.incentivized_packets =
            ((_a = object.incentivized_packets) === null || _a === void 0 ? void 0 : _a.map((e) => fee_1.IdentifiedPacketFees.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryTotalRecvFeesRequest() {
    return { packet_id: undefined };
}
exports.QueryTotalRecvFeesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packet_id !== undefined) {
            channel_1.PacketId.encode(message.packet_id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalRecvFeesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet_id = channel_1.PacketId.decode(reader, reader.uint32());
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
            packet_id: isSet(object.packet_id)
                ? channel_1.PacketId.fromJSON(object.packet_id)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet_id !== undefined &&
            (obj.packet_id = message.packet_id
                ? channel_1.PacketId.toJSON(message.packet_id)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalRecvFeesRequest();
        message.packet_id =
            object.packet_id !== undefined && object.packet_id !== null
                ? channel_1.PacketId.fromPartial(object.packet_id)
                : undefined;
        return message;
    },
};
function createBaseQueryTotalRecvFeesResponse() {
    return { recv_fees: [] };
}
exports.QueryTotalRecvFeesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.recv_fees) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalRecvFeesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recv_fees.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            recv_fees: Array.isArray(object === null || object === void 0 ? void 0 : object.recv_fees)
                ? object.recv_fees.map((e) => coin_1.Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.recv_fees) {
            obj.recv_fees = message.recv_fees.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.recv_fees = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTotalRecvFeesResponse();
        message.recv_fees = ((_a = object.recv_fees) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryTotalAckFeesRequest() {
    return { packet_id: undefined };
}
exports.QueryTotalAckFeesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packet_id !== undefined) {
            channel_1.PacketId.encode(message.packet_id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalAckFeesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet_id = channel_1.PacketId.decode(reader, reader.uint32());
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
            packet_id: isSet(object.packet_id)
                ? channel_1.PacketId.fromJSON(object.packet_id)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet_id !== undefined &&
            (obj.packet_id = message.packet_id
                ? channel_1.PacketId.toJSON(message.packet_id)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalAckFeesRequest();
        message.packet_id =
            object.packet_id !== undefined && object.packet_id !== null
                ? channel_1.PacketId.fromPartial(object.packet_id)
                : undefined;
        return message;
    },
};
function createBaseQueryTotalAckFeesResponse() {
    return { ack_fees: [] };
}
exports.QueryTotalAckFeesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.ack_fees) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalAckFeesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ack_fees.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            ack_fees: Array.isArray(object === null || object === void 0 ? void 0 : object.ack_fees)
                ? object.ack_fees.map((e) => coin_1.Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ack_fees) {
            obj.ack_fees = message.ack_fees.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.ack_fees = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTotalAckFeesResponse();
        message.ack_fees = ((_a = object.ack_fees) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryTotalTimeoutFeesRequest() {
    return { packet_id: undefined };
}
exports.QueryTotalTimeoutFeesRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packet_id !== undefined) {
            channel_1.PacketId.encode(message.packet_id, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalTimeoutFeesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet_id = channel_1.PacketId.decode(reader, reader.uint32());
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
            packet_id: isSet(object.packet_id)
                ? channel_1.PacketId.fromJSON(object.packet_id)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet_id !== undefined &&
            (obj.packet_id = message.packet_id
                ? channel_1.PacketId.toJSON(message.packet_id)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryTotalTimeoutFeesRequest();
        message.packet_id =
            object.packet_id !== undefined && object.packet_id !== null
                ? channel_1.PacketId.fromPartial(object.packet_id)
                : undefined;
        return message;
    },
};
function createBaseQueryTotalTimeoutFeesResponse() {
    return { timeout_fees: [] };
}
exports.QueryTotalTimeoutFeesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.timeout_fees) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryTotalTimeoutFeesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.timeout_fees.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            timeout_fees: Array.isArray(object === null || object === void 0 ? void 0 : object.timeout_fees)
                ? object.timeout_fees.map((e) => coin_1.Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.timeout_fees) {
            obj.timeout_fees = message.timeout_fees.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.timeout_fees = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryTotalTimeoutFeesResponse();
        message.timeout_fees =
            ((_a = object.timeout_fees) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryPayeeRequest() {
    return { channel_id: "", relayer: "" };
}
exports.QueryPayeeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.channel_id !== "") {
            writer.uint32(10).string(message.channel_id);
        }
        if (message.relayer !== "") {
            writer.uint32(18).string(message.relayer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPayeeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channel_id = reader.string();
                    break;
                case 2:
                    message.relayer = reader.string();
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
            relayer: isSet(object.relayer) ? String(object.relayer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.relayer !== undefined && (obj.relayer = message.relayer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryPayeeRequest();
        message.channel_id = (_a = object.channel_id) !== null && _a !== void 0 ? _a : "";
        message.relayer = (_b = object.relayer) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryPayeeResponse() {
    return { payee_address: "" };
}
exports.QueryPayeeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.payee_address !== "") {
            writer.uint32(10).string(message.payee_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPayeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.payee_address = reader.string();
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
            payee_address: isSet(object.payee_address)
                ? String(object.payee_address)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.payee_address !== undefined &&
            (obj.payee_address = message.payee_address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryPayeeResponse();
        message.payee_address = (_a = object.payee_address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryCounterpartyPayeeRequest() {
    return { channel_id: "", relayer: "" };
}
exports.QueryCounterpartyPayeeRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.channel_id !== "") {
            writer.uint32(10).string(message.channel_id);
        }
        if (message.relayer !== "") {
            writer.uint32(18).string(message.relayer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCounterpartyPayeeRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channel_id = reader.string();
                    break;
                case 2:
                    message.relayer = reader.string();
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
            relayer: isSet(object.relayer) ? String(object.relayer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.relayer !== undefined && (obj.relayer = message.relayer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryCounterpartyPayeeRequest();
        message.channel_id = (_a = object.channel_id) !== null && _a !== void 0 ? _a : "";
        message.relayer = (_b = object.relayer) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryCounterpartyPayeeResponse() {
    return { counterparty_payee: "" };
}
exports.QueryCounterpartyPayeeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.counterparty_payee !== "") {
            writer.uint32(10).string(message.counterparty_payee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCounterpartyPayeeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.counterparty_payee = reader.string();
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
            counterparty_payee: isSet(object.counterparty_payee)
                ? String(object.counterparty_payee)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.counterparty_payee !== undefined &&
            (obj.counterparty_payee = message.counterparty_payee);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryCounterpartyPayeeResponse();
        message.counterparty_payee = (_a = object.counterparty_payee) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryFeeEnabledChannelsRequest() {
    return { pagination: undefined, query_height: "0" };
}
exports.QueryFeeEnabledChannelsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.query_height !== "0") {
            writer.uint32(16).uint64(message.query_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeEnabledChannelsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.query_height = longToString(reader.uint64());
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
            query_height: isSet(object.query_height)
                ? String(object.query_height)
                : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        message.query_height !== undefined &&
            (obj.query_height = message.query_height);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryFeeEnabledChannelsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.query_height = (_a = object.query_height) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryFeeEnabledChannelsResponse() {
    return { fee_enabled_channels: [] };
}
exports.QueryFeeEnabledChannelsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.fee_enabled_channels) {
            genesis_1.FeeEnabledChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeEnabledChannelsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fee_enabled_channels.push(genesis_1.FeeEnabledChannel.decode(reader, reader.uint32()));
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
            fee_enabled_channels: Array.isArray(object === null || object === void 0 ? void 0 : object.fee_enabled_channels)
                ? object.fee_enabled_channels.map((e) => genesis_1.FeeEnabledChannel.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.fee_enabled_channels) {
            obj.fee_enabled_channels = message.fee_enabled_channels.map((e) => e ? genesis_1.FeeEnabledChannel.toJSON(e) : undefined);
        }
        else {
            obj.fee_enabled_channels = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryFeeEnabledChannelsResponse();
        message.fee_enabled_channels =
            ((_a = object.fee_enabled_channels) === null || _a === void 0 ? void 0 : _a.map((e) => genesis_1.FeeEnabledChannel.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryFeeEnabledChannelRequest() {
    return { port_id: "", channel_id: "" };
}
exports.QueryFeeEnabledChannelRequest = {
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
        const message = createBaseQueryFeeEnabledChannelRequest();
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
        const message = createBaseQueryFeeEnabledChannelRequest();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryFeeEnabledChannelResponse() {
    return { fee_enabled: false };
}
exports.QueryFeeEnabledChannelResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fee_enabled === true) {
            writer.uint32(8).bool(message.fee_enabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryFeeEnabledChannelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fee_enabled = reader.bool();
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
            fee_enabled: isSet(object.fee_enabled)
                ? Boolean(object.fee_enabled)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.fee_enabled !== undefined &&
            (obj.fee_enabled = message.fee_enabled);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryFeeEnabledChannelResponse();
        message.fee_enabled = (_a = object.fee_enabled) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.IncentivizedPackets = this.IncentivizedPackets.bind(this);
        this.IncentivizedPacket = this.IncentivizedPacket.bind(this);
        this.IncentivizedPacketsForChannel =
            this.IncentivizedPacketsForChannel.bind(this);
        this.TotalRecvFees = this.TotalRecvFees.bind(this);
        this.TotalAckFees = this.TotalAckFees.bind(this);
        this.TotalTimeoutFees = this.TotalTimeoutFees.bind(this);
        this.Payee = this.Payee.bind(this);
        this.CounterpartyPayee = this.CounterpartyPayee.bind(this);
        this.FeeEnabledChannels = this.FeeEnabledChannels.bind(this);
        this.FeeEnabledChannel = this.FeeEnabledChannel.bind(this);
    }
    IncentivizedPackets(request) {
        const data = exports.QueryIncentivizedPacketsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPackets", data);
        return promise.then((data) => exports.QueryIncentivizedPacketsResponse.decode(new _m0.Reader(data)));
    }
    IncentivizedPacket(request) {
        const data = exports.QueryIncentivizedPacketRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPacket", data);
        return promise.then((data) => exports.QueryIncentivizedPacketResponse.decode(new _m0.Reader(data)));
    }
    IncentivizedPacketsForChannel(request) {
        const data = exports.QueryIncentivizedPacketsForChannelRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "IncentivizedPacketsForChannel", data);
        return promise.then((data) => exports.QueryIncentivizedPacketsForChannelResponse.decode(new _m0.Reader(data)));
    }
    TotalRecvFees(request) {
        const data = exports.QueryTotalRecvFeesRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalRecvFees", data);
        return promise.then((data) => exports.QueryTotalRecvFeesResponse.decode(new _m0.Reader(data)));
    }
    TotalAckFees(request) {
        const data = exports.QueryTotalAckFeesRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalAckFees", data);
        return promise.then((data) => exports.QueryTotalAckFeesResponse.decode(new _m0.Reader(data)));
    }
    TotalTimeoutFees(request) {
        const data = exports.QueryTotalTimeoutFeesRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "TotalTimeoutFees", data);
        return promise.then((data) => exports.QueryTotalTimeoutFeesResponse.decode(new _m0.Reader(data)));
    }
    Payee(request) {
        const data = exports.QueryPayeeRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "Payee", data);
        return promise.then((data) => exports.QueryPayeeResponse.decode(new _m0.Reader(data)));
    }
    CounterpartyPayee(request) {
        const data = exports.QueryCounterpartyPayeeRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "CounterpartyPayee", data);
        return promise.then((data) => exports.QueryCounterpartyPayeeResponse.decode(new _m0.Reader(data)));
    }
    FeeEnabledChannels(request) {
        const data = exports.QueryFeeEnabledChannelsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "FeeEnabledChannels", data);
        return promise.then((data) => exports.QueryFeeEnabledChannelsResponse.decode(new _m0.Reader(data)));
    }
    FeeEnabledChannel(request) {
        const data = exports.QueryFeeEnabledChannelRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Query", "FeeEnabledChannel", data);
        return promise.then((data) => exports.QueryFeeEnabledChannelResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
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