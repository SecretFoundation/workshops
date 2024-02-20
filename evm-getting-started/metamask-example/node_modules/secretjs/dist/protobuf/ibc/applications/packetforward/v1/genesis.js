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
exports.InFlightPacket = exports.Params = exports.GenesisState_InFlightPacketsEntry = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "packetforward.v1";
function createBaseGenesisState() {
    return { params: undefined, in_flight_packets: {} };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            exports.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        Object.entries(message.in_flight_packets).forEach(([key, value]) => {
            exports.GenesisState_InFlightPacketsEntry.encode({ key: key, value }, writer.uint32(18).fork()).ldelim();
        });
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
                    message.params = exports.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    const entry2 = exports.GenesisState_InFlightPacketsEntry.decode(reader, reader.uint32());
                    if (entry2.value !== undefined) {
                        message.in_flight_packets[entry2.key] = entry2.value;
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
            params: isSet(object.params) ? exports.Params.fromJSON(object.params) : undefined,
            in_flight_packets: isObject(object.in_flight_packets)
                ? Object.entries(object.in_flight_packets).reduce((acc, [key, value]) => {
                    acc[key] = exports.InFlightPacket.fromJSON(value);
                    return acc;
                }, {})
                : {},
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? exports.Params.toJSON(message.params) : undefined);
        obj.in_flight_packets = {};
        if (message.in_flight_packets) {
            Object.entries(message.in_flight_packets).forEach(([k, v]) => {
                obj.in_flight_packets[k] = exports.InFlightPacket.toJSON(v);
            });
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? exports.Params.fromPartial(object.params)
                : undefined;
        message.in_flight_packets = Object.entries((_a = object.in_flight_packets) !== null && _a !== void 0 ? _a : {}).reduce((acc, [key, value]) => {
            if (value !== undefined) {
                acc[key] = exports.InFlightPacket.fromPartial(value);
            }
            return acc;
        }, {});
        return message;
    },
};
function createBaseGenesisState_InFlightPacketsEntry() {
    return { key: "", value: undefined };
}
exports.GenesisState_InFlightPacketsEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.value !== undefined) {
            exports.InFlightPacket.encode(message.value, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState_InFlightPacketsEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.value = exports.InFlightPacket.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? String(object.key) : "",
            value: isSet(object.value)
                ? exports.InFlightPacket.fromJSON(object.value)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.value !== undefined &&
            (obj.value = message.value
                ? exports.InFlightPacket.toJSON(message.value)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState_InFlightPacketsEntry();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.value =
            object.value !== undefined && object.value !== null
                ? exports.InFlightPacket.fromPartial(object.value)
                : undefined;
        return message;
    },
};
function createBaseParams() {
    return { fee_percentage: "" };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fee_percentage !== "") {
            writer.uint32(10).string(message.fee_percentage);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fee_percentage = reader.string();
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
            fee_percentage: isSet(object.fee_percentage)
                ? String(object.fee_percentage)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.fee_percentage !== undefined &&
            (obj.fee_percentage = message.fee_percentage);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseParams();
        message.fee_percentage = (_a = object.fee_percentage) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseInFlightPacket() {
    return {
        original_sender_address: "",
        refund_channel_id: "",
        refund_port_id: "",
        packet_src_channel_id: "",
        packet_src_port_id: "",
        packet_timeout_timestamp: "0",
        packet_timeout_height: "",
        packet_data: new Uint8Array(),
        refund_sequence: "0",
        retries_remaining: 0,
        timeout: "0",
        nonrefundable: false,
    };
}
exports.InFlightPacket = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.original_sender_address !== "") {
            writer.uint32(10).string(message.original_sender_address);
        }
        if (message.refund_channel_id !== "") {
            writer.uint32(18).string(message.refund_channel_id);
        }
        if (message.refund_port_id !== "") {
            writer.uint32(26).string(message.refund_port_id);
        }
        if (message.packet_src_channel_id !== "") {
            writer.uint32(34).string(message.packet_src_channel_id);
        }
        if (message.packet_src_port_id !== "") {
            writer.uint32(42).string(message.packet_src_port_id);
        }
        if (message.packet_timeout_timestamp !== "0") {
            writer.uint32(48).uint64(message.packet_timeout_timestamp);
        }
        if (message.packet_timeout_height !== "") {
            writer.uint32(58).string(message.packet_timeout_height);
        }
        if (message.packet_data.length !== 0) {
            writer.uint32(66).bytes(message.packet_data);
        }
        if (message.refund_sequence !== "0") {
            writer.uint32(72).uint64(message.refund_sequence);
        }
        if (message.retries_remaining !== 0) {
            writer.uint32(80).int32(message.retries_remaining);
        }
        if (message.timeout !== "0") {
            writer.uint32(88).uint64(message.timeout);
        }
        if (message.nonrefundable === true) {
            writer.uint32(96).bool(message.nonrefundable);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInFlightPacket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.original_sender_address = reader.string();
                    break;
                case 2:
                    message.refund_channel_id = reader.string();
                    break;
                case 3:
                    message.refund_port_id = reader.string();
                    break;
                case 4:
                    message.packet_src_channel_id = reader.string();
                    break;
                case 5:
                    message.packet_src_port_id = reader.string();
                    break;
                case 6:
                    message.packet_timeout_timestamp = longToString(reader.uint64());
                    break;
                case 7:
                    message.packet_timeout_height = reader.string();
                    break;
                case 8:
                    message.packet_data = reader.bytes();
                    break;
                case 9:
                    message.refund_sequence = longToString(reader.uint64());
                    break;
                case 10:
                    message.retries_remaining = reader.int32();
                    break;
                case 11:
                    message.timeout = longToString(reader.uint64());
                    break;
                case 12:
                    message.nonrefundable = reader.bool();
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
            original_sender_address: isSet(object.original_sender_address)
                ? String(object.original_sender_address)
                : "",
            refund_channel_id: isSet(object.refund_channel_id)
                ? String(object.refund_channel_id)
                : "",
            refund_port_id: isSet(object.refund_port_id)
                ? String(object.refund_port_id)
                : "",
            packet_src_channel_id: isSet(object.packet_src_channel_id)
                ? String(object.packet_src_channel_id)
                : "",
            packet_src_port_id: isSet(object.packet_src_port_id)
                ? String(object.packet_src_port_id)
                : "",
            packet_timeout_timestamp: isSet(object.packet_timeout_timestamp)
                ? String(object.packet_timeout_timestamp)
                : "0",
            packet_timeout_height: isSet(object.packet_timeout_height)
                ? String(object.packet_timeout_height)
                : "",
            packet_data: isSet(object.packet_data)
                ? bytesFromBase64(object.packet_data)
                : new Uint8Array(),
            refund_sequence: isSet(object.refund_sequence)
                ? String(object.refund_sequence)
                : "0",
            retries_remaining: isSet(object.retries_remaining)
                ? Number(object.retries_remaining)
                : 0,
            timeout: isSet(object.timeout) ? String(object.timeout) : "0",
            nonrefundable: isSet(object.nonrefundable)
                ? Boolean(object.nonrefundable)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.original_sender_address !== undefined &&
            (obj.original_sender_address = message.original_sender_address);
        message.refund_channel_id !== undefined &&
            (obj.refund_channel_id = message.refund_channel_id);
        message.refund_port_id !== undefined &&
            (obj.refund_port_id = message.refund_port_id);
        message.packet_src_channel_id !== undefined &&
            (obj.packet_src_channel_id = message.packet_src_channel_id);
        message.packet_src_port_id !== undefined &&
            (obj.packet_src_port_id = message.packet_src_port_id);
        message.packet_timeout_timestamp !== undefined &&
            (obj.packet_timeout_timestamp = message.packet_timeout_timestamp);
        message.packet_timeout_height !== undefined &&
            (obj.packet_timeout_height = message.packet_timeout_height);
        message.packet_data !== undefined &&
            (obj.packet_data = base64FromBytes(message.packet_data !== undefined
                ? message.packet_data
                : new Uint8Array()));
        message.refund_sequence !== undefined &&
            (obj.refund_sequence = message.refund_sequence);
        message.retries_remaining !== undefined &&
            (obj.retries_remaining = Math.round(message.retries_remaining));
        message.timeout !== undefined && (obj.timeout = message.timeout);
        message.nonrefundable !== undefined &&
            (obj.nonrefundable = message.nonrefundable);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = createBaseInFlightPacket();
        message.original_sender_address = (_a = object.original_sender_address) !== null && _a !== void 0 ? _a : "";
        message.refund_channel_id = (_b = object.refund_channel_id) !== null && _b !== void 0 ? _b : "";
        message.refund_port_id = (_c = object.refund_port_id) !== null && _c !== void 0 ? _c : "";
        message.packet_src_channel_id = (_d = object.packet_src_channel_id) !== null && _d !== void 0 ? _d : "";
        message.packet_src_port_id = (_e = object.packet_src_port_id) !== null && _e !== void 0 ? _e : "";
        message.packet_timeout_timestamp = (_f = object.packet_timeout_timestamp) !== null && _f !== void 0 ? _f : "0";
        message.packet_timeout_height = (_g = object.packet_timeout_height) !== null && _g !== void 0 ? _g : "";
        message.packet_data = (_h = object.packet_data) !== null && _h !== void 0 ? _h : new Uint8Array();
        message.refund_sequence = (_j = object.refund_sequence) !== null && _j !== void 0 ? _j : "0";
        message.retries_remaining = (_k = object.retries_remaining) !== null && _k !== void 0 ? _k : 0;
        message.timeout = (_l = object.timeout) !== null && _l !== void 0 ? _l : "0";
        message.nonrefundable = (_m = object.nonrefundable) !== null && _m !== void 0 ? _m : false;
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
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map