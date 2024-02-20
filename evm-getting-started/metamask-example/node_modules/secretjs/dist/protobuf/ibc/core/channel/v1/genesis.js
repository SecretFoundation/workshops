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
exports.PacketSequence = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const channel_1 = require("./channel");
exports.protobufPackage = "ibc.core.channel.v1";
function createBaseGenesisState() {
    return {
        channels: [],
        acknowledgements: [],
        commitments: [],
        receipts: [],
        send_sequences: [],
        recv_sequences: [],
        ack_sequences: [],
        next_channel_sequence: "0",
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.channels) {
            channel_1.IdentifiedChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.acknowledgements) {
            channel_1.PacketState.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.commitments) {
            channel_1.PacketState.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.receipts) {
            channel_1.PacketState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.send_sequences) {
            exports.PacketSequence.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.recv_sequences) {
            exports.PacketSequence.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.ack_sequences) {
            exports.PacketSequence.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.next_channel_sequence !== "0") {
            writer.uint32(64).uint64(message.next_channel_sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channels.push(channel_1.IdentifiedChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.acknowledgements.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.commitments.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.receipts.push(channel_1.PacketState.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.send_sequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.recv_sequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.ack_sequences.push(exports.PacketSequence.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.next_channel_sequence = longToString(reader.uint64());
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
            acknowledgements: Array.isArray(object === null || object === void 0 ? void 0 : object.acknowledgements)
                ? object.acknowledgements.map((e) => channel_1.PacketState.fromJSON(e))
                : [],
            commitments: Array.isArray(object === null || object === void 0 ? void 0 : object.commitments)
                ? object.commitments.map((e) => channel_1.PacketState.fromJSON(e))
                : [],
            receipts: Array.isArray(object === null || object === void 0 ? void 0 : object.receipts)
                ? object.receipts.map((e) => channel_1.PacketState.fromJSON(e))
                : [],
            send_sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.send_sequences)
                ? object.send_sequences.map((e) => exports.PacketSequence.fromJSON(e))
                : [],
            recv_sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.recv_sequences)
                ? object.recv_sequences.map((e) => exports.PacketSequence.fromJSON(e))
                : [],
            ack_sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.ack_sequences)
                ? object.ack_sequences.map((e) => exports.PacketSequence.fromJSON(e))
                : [],
            next_channel_sequence: isSet(object.next_channel_sequence)
                ? String(object.next_channel_sequence)
                : "0",
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
        if (message.acknowledgements) {
            obj.acknowledgements = message.acknowledgements.map((e) => e ? channel_1.PacketState.toJSON(e) : undefined);
        }
        else {
            obj.acknowledgements = [];
        }
        if (message.commitments) {
            obj.commitments = message.commitments.map((e) => e ? channel_1.PacketState.toJSON(e) : undefined);
        }
        else {
            obj.commitments = [];
        }
        if (message.receipts) {
            obj.receipts = message.receipts.map((e) => e ? channel_1.PacketState.toJSON(e) : undefined);
        }
        else {
            obj.receipts = [];
        }
        if (message.send_sequences) {
            obj.send_sequences = message.send_sequences.map((e) => e ? exports.PacketSequence.toJSON(e) : undefined);
        }
        else {
            obj.send_sequences = [];
        }
        if (message.recv_sequences) {
            obj.recv_sequences = message.recv_sequences.map((e) => e ? exports.PacketSequence.toJSON(e) : undefined);
        }
        else {
            obj.recv_sequences = [];
        }
        if (message.ack_sequences) {
            obj.ack_sequences = message.ack_sequences.map((e) => e ? exports.PacketSequence.toJSON(e) : undefined);
        }
        else {
            obj.ack_sequences = [];
        }
        message.next_channel_sequence !== undefined &&
            (obj.next_channel_sequence = message.next_channel_sequence);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseGenesisState();
        message.channels =
            ((_a = object.channels) === null || _a === void 0 ? void 0 : _a.map((e) => channel_1.IdentifiedChannel.fromPartial(e))) || [];
        message.acknowledgements =
            ((_b = object.acknowledgements) === null || _b === void 0 ? void 0 : _b.map((e) => channel_1.PacketState.fromPartial(e))) || [];
        message.commitments =
            ((_c = object.commitments) === null || _c === void 0 ? void 0 : _c.map((e) => channel_1.PacketState.fromPartial(e))) || [];
        message.receipts =
            ((_d = object.receipts) === null || _d === void 0 ? void 0 : _d.map((e) => channel_1.PacketState.fromPartial(e))) || [];
        message.send_sequences =
            ((_e = object.send_sequences) === null || _e === void 0 ? void 0 : _e.map((e) => exports.PacketSequence.fromPartial(e))) || [];
        message.recv_sequences =
            ((_f = object.recv_sequences) === null || _f === void 0 ? void 0 : _f.map((e) => exports.PacketSequence.fromPartial(e))) || [];
        message.ack_sequences =
            ((_g = object.ack_sequences) === null || _g === void 0 ? void 0 : _g.map((e) => exports.PacketSequence.fromPartial(e))) || [];
        message.next_channel_sequence = (_h = object.next_channel_sequence) !== null && _h !== void 0 ? _h : "0";
        return message;
    },
};
function createBasePacketSequence() {
    return { port_id: "", channel_id: "", sequence: "0" };
}
exports.PacketSequence = {
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
        const message = createBasePacketSequence();
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
        const message = createBasePacketSequence();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        message.sequence = (_c = object.sequence) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
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
//# sourceMappingURL=genesis.js.map