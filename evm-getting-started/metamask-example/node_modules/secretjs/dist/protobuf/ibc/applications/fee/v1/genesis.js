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
exports.ForwardRelayerAddress = exports.RegisteredCounterpartyPayee = exports.RegisteredPayee = exports.FeeEnabledChannel = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const channel_1 = require("../../../core/channel/v1/channel");
const fee_1 = require("./fee");
exports.protobufPackage = "ibc.applications.fee.v1";
function createBaseGenesisState() {
    return {
        identified_fees: [],
        fee_enabled_channels: [],
        registered_payees: [],
        registered_counterparty_payees: [],
        forward_relayers: [],
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.identified_fees) {
            fee_1.IdentifiedPacketFees.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.fee_enabled_channels) {
            exports.FeeEnabledChannel.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.registered_payees) {
            exports.RegisteredPayee.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.registered_counterparty_payees) {
            exports.RegisteredCounterpartyPayee.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.forward_relayers) {
            exports.ForwardRelayerAddress.encode(v, writer.uint32(42).fork()).ldelim();
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
                    message.identified_fees.push(fee_1.IdentifiedPacketFees.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fee_enabled_channels.push(exports.FeeEnabledChannel.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.registered_payees.push(exports.RegisteredPayee.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.registered_counterparty_payees.push(exports.RegisteredCounterpartyPayee.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.forward_relayers.push(exports.ForwardRelayerAddress.decode(reader, reader.uint32()));
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
            identified_fees: Array.isArray(object === null || object === void 0 ? void 0 : object.identified_fees)
                ? object.identified_fees.map((e) => fee_1.IdentifiedPacketFees.fromJSON(e))
                : [],
            fee_enabled_channels: Array.isArray(object === null || object === void 0 ? void 0 : object.fee_enabled_channels)
                ? object.fee_enabled_channels.map((e) => exports.FeeEnabledChannel.fromJSON(e))
                : [],
            registered_payees: Array.isArray(object === null || object === void 0 ? void 0 : object.registered_payees)
                ? object.registered_payees.map((e) => exports.RegisteredPayee.fromJSON(e))
                : [],
            registered_counterparty_payees: Array.isArray(object === null || object === void 0 ? void 0 : object.registered_counterparty_payees)
                ? object.registered_counterparty_payees.map((e) => exports.RegisteredCounterpartyPayee.fromJSON(e))
                : [],
            forward_relayers: Array.isArray(object === null || object === void 0 ? void 0 : object.forward_relayers)
                ? object.forward_relayers.map((e) => exports.ForwardRelayerAddress.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.identified_fees) {
            obj.identified_fees = message.identified_fees.map((e) => e ? fee_1.IdentifiedPacketFees.toJSON(e) : undefined);
        }
        else {
            obj.identified_fees = [];
        }
        if (message.fee_enabled_channels) {
            obj.fee_enabled_channels = message.fee_enabled_channels.map((e) => e ? exports.FeeEnabledChannel.toJSON(e) : undefined);
        }
        else {
            obj.fee_enabled_channels = [];
        }
        if (message.registered_payees) {
            obj.registered_payees = message.registered_payees.map((e) => e ? exports.RegisteredPayee.toJSON(e) : undefined);
        }
        else {
            obj.registered_payees = [];
        }
        if (message.registered_counterparty_payees) {
            obj.registered_counterparty_payees =
                message.registered_counterparty_payees.map((e) => e ? exports.RegisteredCounterpartyPayee.toJSON(e) : undefined);
        }
        else {
            obj.registered_counterparty_payees = [];
        }
        if (message.forward_relayers) {
            obj.forward_relayers = message.forward_relayers.map((e) => e ? exports.ForwardRelayerAddress.toJSON(e) : undefined);
        }
        else {
            obj.forward_relayers = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseGenesisState();
        message.identified_fees =
            ((_a = object.identified_fees) === null || _a === void 0 ? void 0 : _a.map((e) => fee_1.IdentifiedPacketFees.fromPartial(e))) ||
                [];
        message.fee_enabled_channels =
            ((_b = object.fee_enabled_channels) === null || _b === void 0 ? void 0 : _b.map((e) => exports.FeeEnabledChannel.fromPartial(e))) || [];
        message.registered_payees =
            ((_c = object.registered_payees) === null || _c === void 0 ? void 0 : _c.map((e) => exports.RegisteredPayee.fromPartial(e))) ||
                [];
        message.registered_counterparty_payees =
            ((_d = object.registered_counterparty_payees) === null || _d === void 0 ? void 0 : _d.map((e) => exports.RegisteredCounterpartyPayee.fromPartial(e))) || [];
        message.forward_relayers =
            ((_e = object.forward_relayers) === null || _e === void 0 ? void 0 : _e.map((e) => exports.ForwardRelayerAddress.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFeeEnabledChannel() {
    return { port_id: "", channel_id: "" };
}
exports.FeeEnabledChannel = {
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
        const message = createBaseFeeEnabledChannel();
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
        const message = createBaseFeeEnabledChannel();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRegisteredPayee() {
    return { channel_id: "", relayer: "", payee: "" };
}
exports.RegisteredPayee = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.channel_id !== "") {
            writer.uint32(10).string(message.channel_id);
        }
        if (message.relayer !== "") {
            writer.uint32(18).string(message.relayer);
        }
        if (message.payee !== "") {
            writer.uint32(26).string(message.payee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisteredPayee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channel_id = reader.string();
                    break;
                case 2:
                    message.relayer = reader.string();
                    break;
                case 3:
                    message.payee = reader.string();
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
            payee: isSet(object.payee) ? String(object.payee) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.relayer !== undefined && (obj.relayer = message.relayer);
        message.payee !== undefined && (obj.payee = message.payee);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRegisteredPayee();
        message.channel_id = (_a = object.channel_id) !== null && _a !== void 0 ? _a : "";
        message.relayer = (_b = object.relayer) !== null && _b !== void 0 ? _b : "";
        message.payee = (_c = object.payee) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRegisteredCounterpartyPayee() {
    return { channel_id: "", relayer: "", counterparty_payee: "" };
}
exports.RegisteredCounterpartyPayee = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.channel_id !== "") {
            writer.uint32(10).string(message.channel_id);
        }
        if (message.relayer !== "") {
            writer.uint32(18).string(message.relayer);
        }
        if (message.counterparty_payee !== "") {
            writer.uint32(26).string(message.counterparty_payee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisteredCounterpartyPayee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channel_id = reader.string();
                    break;
                case 2:
                    message.relayer = reader.string();
                    break;
                case 3:
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
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            relayer: isSet(object.relayer) ? String(object.relayer) : "",
            counterparty_payee: isSet(object.counterparty_payee)
                ? String(object.counterparty_payee)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.relayer !== undefined && (obj.relayer = message.relayer);
        message.counterparty_payee !== undefined &&
            (obj.counterparty_payee = message.counterparty_payee);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRegisteredCounterpartyPayee();
        message.channel_id = (_a = object.channel_id) !== null && _a !== void 0 ? _a : "";
        message.relayer = (_b = object.relayer) !== null && _b !== void 0 ? _b : "";
        message.counterparty_payee = (_c = object.counterparty_payee) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseForwardRelayerAddress() {
    return { address: "", packet_id: undefined };
}
exports.ForwardRelayerAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.packet_id !== undefined) {
            channel_1.PacketId.encode(message.packet_id, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseForwardRelayerAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
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
            address: isSet(object.address) ? String(object.address) : "",
            packet_id: isSet(object.packet_id)
                ? channel_1.PacketId.fromJSON(object.packet_id)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.packet_id !== undefined &&
            (obj.packet_id = message.packet_id
                ? channel_1.PacketId.toJSON(message.packet_id)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseForwardRelayerAddress();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.packet_id =
            object.packet_id !== undefined && object.packet_id !== null
                ? channel_1.PacketId.fromPartial(object.packet_id)
                : undefined;
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
//# sourceMappingURL=genesis.js.map