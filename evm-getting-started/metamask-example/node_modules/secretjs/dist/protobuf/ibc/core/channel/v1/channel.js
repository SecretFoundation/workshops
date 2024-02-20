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
exports.Acknowledgement = exports.PacketId = exports.PacketState = exports.Packet = exports.Counterparty = exports.IdentifiedChannel = exports.Channel = exports.orderToJSON = exports.orderFromJSON = exports.Order = exports.stateToJSON = exports.stateFromJSON = exports.State = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const client_1 = require("../../client/v1/client");
exports.protobufPackage = "ibc.core.channel.v1";
/**
 * State defines if a channel is in one of the following states:
 * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
var State;
(function (State) {
    /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
    State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
    /** STATE_INIT - A channel has just started the opening handshake. */
    State[State["STATE_INIT"] = 1] = "STATE_INIT";
    /** STATE_TRYOPEN - A channel has acknowledged the handshake step on the counterparty chain. */
    State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
    /**
     * STATE_OPEN - A channel has completed the handshake. Open channels are
     * ready to send and receive packets.
     */
    State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
    /**
     * STATE_CLOSED - A channel has been closed and can no longer be used to send or receive
     * packets.
     */
    State[State["STATE_CLOSED"] = 4] = "STATE_CLOSED";
    State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State = exports.State || (exports.State = {}));
function stateFromJSON(object) {
    switch (object) {
        case 0:
        case "STATE_UNINITIALIZED_UNSPECIFIED":
            return State.STATE_UNINITIALIZED_UNSPECIFIED;
        case 1:
        case "STATE_INIT":
            return State.STATE_INIT;
        case 2:
        case "STATE_TRYOPEN":
            return State.STATE_TRYOPEN;
        case 3:
        case "STATE_OPEN":
            return State.STATE_OPEN;
        case 4:
        case "STATE_CLOSED":
            return State.STATE_CLOSED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return State.UNRECOGNIZED;
    }
}
exports.stateFromJSON = stateFromJSON;
function stateToJSON(object) {
    switch (object) {
        case State.STATE_UNINITIALIZED_UNSPECIFIED:
            return "STATE_UNINITIALIZED_UNSPECIFIED";
        case State.STATE_INIT:
            return "STATE_INIT";
        case State.STATE_TRYOPEN:
            return "STATE_TRYOPEN";
        case State.STATE_OPEN:
            return "STATE_OPEN";
        case State.STATE_CLOSED:
            return "STATE_CLOSED";
        default:
            return "UNKNOWN";
    }
}
exports.stateToJSON = stateToJSON;
/** Order defines if a channel is ORDERED or UNORDERED */
var Order;
(function (Order) {
    /** ORDER_NONE_UNSPECIFIED - zero-value for channel ordering */
    Order[Order["ORDER_NONE_UNSPECIFIED"] = 0] = "ORDER_NONE_UNSPECIFIED";
    /**
     * ORDER_UNORDERED - packets can be delivered in any order, which may differ from the order in
     * which they were sent.
     */
    Order[Order["ORDER_UNORDERED"] = 1] = "ORDER_UNORDERED";
    /** ORDER_ORDERED - packets are delivered exactly in the order which they were sent */
    Order[Order["ORDER_ORDERED"] = 2] = "ORDER_ORDERED";
    Order[Order["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Order = exports.Order || (exports.Order = {}));
function orderFromJSON(object) {
    switch (object) {
        case 0:
        case "ORDER_NONE_UNSPECIFIED":
            return Order.ORDER_NONE_UNSPECIFIED;
        case 1:
        case "ORDER_UNORDERED":
            return Order.ORDER_UNORDERED;
        case 2:
        case "ORDER_ORDERED":
            return Order.ORDER_ORDERED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Order.UNRECOGNIZED;
    }
}
exports.orderFromJSON = orderFromJSON;
function orderToJSON(object) {
    switch (object) {
        case Order.ORDER_NONE_UNSPECIFIED:
            return "ORDER_NONE_UNSPECIFIED";
        case Order.ORDER_UNORDERED:
            return "ORDER_UNORDERED";
        case Order.ORDER_ORDERED:
            return "ORDER_ORDERED";
        default:
            return "UNKNOWN";
    }
}
exports.orderToJSON = orderToJSON;
function createBaseChannel() {
    return {
        state: 0,
        ordering: 0,
        counterparty: undefined,
        connection_hops: [],
        version: "",
    };
}
exports.Channel = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        if (message.ordering !== 0) {
            writer.uint32(16).int32(message.ordering);
        }
        if (message.counterparty !== undefined) {
            exports.Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.connection_hops) {
            writer.uint32(34).string(v);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.ordering = reader.int32();
                    break;
                case 3:
                    message.counterparty = exports.Counterparty.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.connection_hops.push(reader.string());
                    break;
                case 5:
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
            state: isSet(object.state) ? stateFromJSON(object.state) : 0,
            ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : 0,
            counterparty: isSet(object.counterparty)
                ? exports.Counterparty.fromJSON(object.counterparty)
                : undefined,
            connection_hops: Array.isArray(object === null || object === void 0 ? void 0 : object.connection_hops)
                ? object.connection_hops.map((e) => String(e))
                : [],
            version: isSet(object.version) ? String(object.version) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.ordering !== undefined &&
            (obj.ordering = orderToJSON(message.ordering));
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty
                ? exports.Counterparty.toJSON(message.counterparty)
                : undefined);
        if (message.connection_hops) {
            obj.connection_hops = message.connection_hops.map((e) => e);
        }
        else {
            obj.connection_hops = [];
        }
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseChannel();
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        message.ordering = (_b = object.ordering) !== null && _b !== void 0 ? _b : 0;
        message.counterparty =
            object.counterparty !== undefined && object.counterparty !== null
                ? exports.Counterparty.fromPartial(object.counterparty)
                : undefined;
        message.connection_hops = ((_c = object.connection_hops) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.version = (_d = object.version) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseIdentifiedChannel() {
    return {
        state: 0,
        ordering: 0,
        counterparty: undefined,
        connection_hops: [],
        version: "",
        port_id: "",
        channel_id: "",
    };
}
exports.IdentifiedChannel = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        if (message.ordering !== 0) {
            writer.uint32(16).int32(message.ordering);
        }
        if (message.counterparty !== undefined) {
            exports.Counterparty.encode(message.counterparty, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.connection_hops) {
            writer.uint32(34).string(v);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.port_id !== "") {
            writer.uint32(50).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(58).string(message.channel_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.state = reader.int32();
                    break;
                case 2:
                    message.ordering = reader.int32();
                    break;
                case 3:
                    message.counterparty = exports.Counterparty.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.connection_hops.push(reader.string());
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.port_id = reader.string();
                    break;
                case 7:
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
            state: isSet(object.state) ? stateFromJSON(object.state) : 0,
            ordering: isSet(object.ordering) ? orderFromJSON(object.ordering) : 0,
            counterparty: isSet(object.counterparty)
                ? exports.Counterparty.fromJSON(object.counterparty)
                : undefined,
            connection_hops: Array.isArray(object === null || object === void 0 ? void 0 : object.connection_hops)
                ? object.connection_hops.map((e) => String(e))
                : [],
            version: isSet(object.version) ? String(object.version) : "",
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.ordering !== undefined &&
            (obj.ordering = orderToJSON(message.ordering));
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty
                ? exports.Counterparty.toJSON(message.counterparty)
                : undefined);
        if (message.connection_hops) {
            obj.connection_hops = message.connection_hops.map((e) => e);
        }
        else {
            obj.connection_hops = [];
        }
        message.version !== undefined && (obj.version = message.version);
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseIdentifiedChannel();
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        message.ordering = (_b = object.ordering) !== null && _b !== void 0 ? _b : 0;
        message.counterparty =
            object.counterparty !== undefined && object.counterparty !== null
                ? exports.Counterparty.fromPartial(object.counterparty)
                : undefined;
        message.connection_hops = ((_c = object.connection_hops) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.version = (_d = object.version) !== null && _d !== void 0 ? _d : "";
        message.port_id = (_e = object.port_id) !== null && _e !== void 0 ? _e : "";
        message.channel_id = (_f = object.channel_id) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseCounterparty() {
    return { port_id: "", channel_id: "" };
}
exports.Counterparty = {
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
        const message = createBaseCounterparty();
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
        const message = createBaseCounterparty();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBasePacket() {
    return {
        sequence: "0",
        source_port: "",
        source_channel: "",
        destination_port: "",
        destination_channel: "",
        data: new Uint8Array(),
        timeout_height: undefined,
        timeout_timestamp: "0",
    };
}
exports.Packet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sequence !== "0") {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.source_port !== "") {
            writer.uint32(18).string(message.source_port);
        }
        if (message.source_channel !== "") {
            writer.uint32(26).string(message.source_channel);
        }
        if (message.destination_port !== "") {
            writer.uint32(34).string(message.destination_port);
        }
        if (message.destination_channel !== "") {
            writer.uint32(42).string(message.destination_channel);
        }
        if (message.data.length !== 0) {
            writer.uint32(50).bytes(message.data);
        }
        if (message.timeout_height !== undefined) {
            client_1.Height.encode(message.timeout_height, writer.uint32(58).fork()).ldelim();
        }
        if (message.timeout_timestamp !== "0") {
            writer.uint32(64).uint64(message.timeout_timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = longToString(reader.uint64());
                    break;
                case 2:
                    message.source_port = reader.string();
                    break;
                case 3:
                    message.source_channel = reader.string();
                    break;
                case 4:
                    message.destination_port = reader.string();
                    break;
                case 5:
                    message.destination_channel = reader.string();
                    break;
                case 6:
                    message.data = reader.bytes();
                    break;
                case 7:
                    message.timeout_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.timeout_timestamp = longToString(reader.uint64());
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
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
            source_port: isSet(object.source_port) ? String(object.source_port) : "",
            source_channel: isSet(object.source_channel)
                ? String(object.source_channel)
                : "",
            destination_port: isSet(object.destination_port)
                ? String(object.destination_port)
                : "",
            destination_channel: isSet(object.destination_channel)
                ? String(object.destination_channel)
                : "",
            data: isSet(object.data)
                ? bytesFromBase64(object.data)
                : new Uint8Array(),
            timeout_height: isSet(object.timeout_height)
                ? client_1.Height.fromJSON(object.timeout_height)
                : undefined,
            timeout_timestamp: isSet(object.timeout_timestamp)
                ? String(object.timeout_timestamp)
                : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = message.sequence);
        message.source_port !== undefined &&
            (obj.source_port = message.source_port);
        message.source_channel !== undefined &&
            (obj.source_channel = message.source_channel);
        message.destination_port !== undefined &&
            (obj.destination_port = message.destination_port);
        message.destination_channel !== undefined &&
            (obj.destination_channel = message.destination_channel);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.timeout_height !== undefined &&
            (obj.timeout_height = message.timeout_height
                ? client_1.Height.toJSON(message.timeout_height)
                : undefined);
        message.timeout_timestamp !== undefined &&
            (obj.timeout_timestamp = message.timeout_timestamp);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBasePacket();
        message.sequence = (_a = object.sequence) !== null && _a !== void 0 ? _a : "0";
        message.source_port = (_b = object.source_port) !== null && _b !== void 0 ? _b : "";
        message.source_channel = (_c = object.source_channel) !== null && _c !== void 0 ? _c : "";
        message.destination_port = (_d = object.destination_port) !== null && _d !== void 0 ? _d : "";
        message.destination_channel = (_e = object.destination_channel) !== null && _e !== void 0 ? _e : "";
        message.data = (_f = object.data) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.timeout_height =
            object.timeout_height !== undefined && object.timeout_height !== null
                ? client_1.Height.fromPartial(object.timeout_height)
                : undefined;
        message.timeout_timestamp = (_g = object.timeout_timestamp) !== null && _g !== void 0 ? _g : "0";
        return message;
    },
};
function createBasePacketState() {
    return { port_id: "", channel_id: "", sequence: "0", data: new Uint8Array() };
}
exports.PacketState = {
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
        if (message.data.length !== 0) {
            writer.uint32(34).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketState();
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
                case 4:
                    message.data = reader.bytes();
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
            data: isSet(object.data)
                ? bytesFromBase64(object.data)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBasePacketState();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        message.sequence = (_c = object.sequence) !== null && _c !== void 0 ? _c : "0";
        message.data = (_d = object.data) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
function createBasePacketId() {
    return { port_id: "", channel_id: "", sequence: "0" };
}
exports.PacketId = {
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
        const message = createBasePacketId();
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
        const message = createBasePacketId();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        message.sequence = (_c = object.sequence) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseAcknowledgement() {
    return { result: undefined, error: undefined };
}
exports.Acknowledgement = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.result !== undefined) {
            writer.uint32(170).bytes(message.result);
        }
        if (message.error !== undefined) {
            writer.uint32(178).string(message.error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAcknowledgement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 21:
                    message.result = reader.bytes();
                    break;
                case 22:
                    message.error = reader.string();
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
            result: isSet(object.result) ? bytesFromBase64(object.result) : undefined,
            error: isSet(object.error) ? String(object.error) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result =
                message.result !== undefined
                    ? base64FromBytes(message.result)
                    : undefined);
        message.error !== undefined && (obj.error = message.error);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAcknowledgement();
        message.result = (_a = object.result) !== null && _a !== void 0 ? _a : undefined;
        message.error = (_b = object.error) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
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
//# sourceMappingURL=channel.js.map