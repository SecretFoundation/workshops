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
exports.IdentifiedPacketFees = exports.PacketFees = exports.PacketFee = exports.Fee = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const channel_1 = require("../../../core/channel/v1/channel");
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "ibc.applications.fee.v1";
function createBaseFee() {
    return { recv_fee: [], ack_fee: [], timeout_fee: [] };
}
exports.Fee = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.recv_fee) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.ack_fee) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.timeout_fee) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.recv_fee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.ack_fee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.timeout_fee.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            recv_fee: Array.isArray(object === null || object === void 0 ? void 0 : object.recv_fee)
                ? object.recv_fee.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            ack_fee: Array.isArray(object === null || object === void 0 ? void 0 : object.ack_fee)
                ? object.ack_fee.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            timeout_fee: Array.isArray(object === null || object === void 0 ? void 0 : object.timeout_fee)
                ? object.timeout_fee.map((e) => coin_1.Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.recv_fee) {
            obj.recv_fee = message.recv_fee.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.recv_fee = [];
        }
        if (message.ack_fee) {
            obj.ack_fee = message.ack_fee.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.ack_fee = [];
        }
        if (message.timeout_fee) {
            obj.timeout_fee = message.timeout_fee.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.timeout_fee = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseFee();
        message.recv_fee = ((_a = object.recv_fee) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.ack_fee = ((_b = object.ack_fee) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.timeout_fee =
            ((_c = object.timeout_fee) === null || _c === void 0 ? void 0 : _c.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBasePacketFee() {
    return { fee: undefined, refund_address: "", relayers: [] };
}
exports.PacketFee = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fee !== undefined) {
            exports.Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
        }
        if (message.refund_address !== "") {
            writer.uint32(18).string(message.refund_address);
        }
        for (const v of message.relayers) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fee = exports.Fee.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.refund_address = reader.string();
                    break;
                case 3:
                    message.relayers.push(reader.string());
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
            fee: isSet(object.fee) ? exports.Fee.fromJSON(object.fee) : undefined,
            refund_address: isSet(object.refund_address)
                ? String(object.refund_address)
                : "",
            relayers: Array.isArray(object === null || object === void 0 ? void 0 : object.relayers)
                ? object.relayers.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.fee !== undefined &&
            (obj.fee = message.fee ? exports.Fee.toJSON(message.fee) : undefined);
        message.refund_address !== undefined &&
            (obj.refund_address = message.refund_address);
        if (message.relayers) {
            obj.relayers = message.relayers.map((e) => e);
        }
        else {
            obj.relayers = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePacketFee();
        message.fee =
            object.fee !== undefined && object.fee !== null
                ? exports.Fee.fromPartial(object.fee)
                : undefined;
        message.refund_address = (_a = object.refund_address) !== null && _a !== void 0 ? _a : "";
        message.relayers = ((_b = object.relayers) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBasePacketFees() {
    return { packet_fees: [] };
}
exports.PacketFees = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.packet_fees) {
            exports.PacketFee.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketFees();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet_fees.push(exports.PacketFee.decode(reader, reader.uint32()));
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
            packet_fees: Array.isArray(object === null || object === void 0 ? void 0 : object.packet_fees)
                ? object.packet_fees.map((e) => exports.PacketFee.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.packet_fees) {
            obj.packet_fees = message.packet_fees.map((e) => e ? exports.PacketFee.toJSON(e) : undefined);
        }
        else {
            obj.packet_fees = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePacketFees();
        message.packet_fees =
            ((_a = object.packet_fees) === null || _a === void 0 ? void 0 : _a.map((e) => exports.PacketFee.fromPartial(e))) || [];
        return message;
    },
};
function createBaseIdentifiedPacketFees() {
    return { packet_id: undefined, packet_fees: [] };
}
exports.IdentifiedPacketFees = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packet_id !== undefined) {
            channel_1.PacketId.encode(message.packet_id, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.packet_fees) {
            exports.PacketFee.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedPacketFees();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet_id = channel_1.PacketId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.packet_fees.push(exports.PacketFee.decode(reader, reader.uint32()));
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
            packet_fees: Array.isArray(object === null || object === void 0 ? void 0 : object.packet_fees)
                ? object.packet_fees.map((e) => exports.PacketFee.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet_id !== undefined &&
            (obj.packet_id = message.packet_id
                ? channel_1.PacketId.toJSON(message.packet_id)
                : undefined);
        if (message.packet_fees) {
            obj.packet_fees = message.packet_fees.map((e) => e ? exports.PacketFee.toJSON(e) : undefined);
        }
        else {
            obj.packet_fees = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseIdentifiedPacketFees();
        message.packet_id =
            object.packet_id !== undefined && object.packet_id !== null
                ? channel_1.PacketId.fromPartial(object.packet_id)
                : undefined;
        message.packet_fees =
            ((_a = object.packet_fees) === null || _a === void 0 ? void 0 : _a.map((e) => exports.PacketFee.fromPartial(e))) || [];
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=fee.js.map