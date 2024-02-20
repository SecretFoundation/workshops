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
exports.DefaultNodeInfoOther = exports.DefaultNodeInfo = exports.ProtocolVersion = exports.NetAddress = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.p2p";
function createBaseNetAddress() {
    return { id: "", ip: "", port: 0 };
}
exports.NetAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.ip !== "") {
            writer.uint32(18).string(message.ip);
        }
        if (message.port !== 0) {
            writer.uint32(24).uint32(message.port);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNetAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.ip = reader.string();
                    break;
                case 3:
                    message.port = reader.uint32();
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
            id: isSet(object.id) ? String(object.id) : "",
            ip: isSet(object.ip) ? String(object.ip) : "",
            port: isSet(object.port) ? Number(object.port) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.ip !== undefined && (obj.ip = message.ip);
        message.port !== undefined && (obj.port = Math.round(message.port));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseNetAddress();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.ip = (_b = object.ip) !== null && _b !== void 0 ? _b : "";
        message.port = (_c = object.port) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseProtocolVersion() {
    return { p2p: "0", block: "0", app: "0" };
}
exports.ProtocolVersion = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.p2p !== "0") {
            writer.uint32(8).uint64(message.p2p);
        }
        if (message.block !== "0") {
            writer.uint32(16).uint64(message.block);
        }
        if (message.app !== "0") {
            writer.uint32(24).uint64(message.app);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProtocolVersion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.p2p = longToString(reader.uint64());
                    break;
                case 2:
                    message.block = longToString(reader.uint64());
                    break;
                case 3:
                    message.app = longToString(reader.uint64());
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
            p2p: isSet(object.p2p) ? String(object.p2p) : "0",
            block: isSet(object.block) ? String(object.block) : "0",
            app: isSet(object.app) ? String(object.app) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.p2p !== undefined && (obj.p2p = message.p2p);
        message.block !== undefined && (obj.block = message.block);
        message.app !== undefined && (obj.app = message.app);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseProtocolVersion();
        message.p2p = (_a = object.p2p) !== null && _a !== void 0 ? _a : "0";
        message.block = (_b = object.block) !== null && _b !== void 0 ? _b : "0";
        message.app = (_c = object.app) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseDefaultNodeInfo() {
    return {
        protocol_version: undefined,
        default_node_id: "",
        listen_addr: "",
        network: "",
        version: "",
        channels: new Uint8Array(),
        moniker: "",
        other: undefined,
    };
}
exports.DefaultNodeInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.protocol_version !== undefined) {
            exports.ProtocolVersion.encode(message.protocol_version, writer.uint32(10).fork()).ldelim();
        }
        if (message.default_node_id !== "") {
            writer.uint32(18).string(message.default_node_id);
        }
        if (message.listen_addr !== "") {
            writer.uint32(26).string(message.listen_addr);
        }
        if (message.network !== "") {
            writer.uint32(34).string(message.network);
        }
        if (message.version !== "") {
            writer.uint32(42).string(message.version);
        }
        if (message.channels.length !== 0) {
            writer.uint32(50).bytes(message.channels);
        }
        if (message.moniker !== "") {
            writer.uint32(58).string(message.moniker);
        }
        if (message.other !== undefined) {
            exports.DefaultNodeInfoOther.encode(message.other, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDefaultNodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.protocol_version = exports.ProtocolVersion.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.default_node_id = reader.string();
                    break;
                case 3:
                    message.listen_addr = reader.string();
                    break;
                case 4:
                    message.network = reader.string();
                    break;
                case 5:
                    message.version = reader.string();
                    break;
                case 6:
                    message.channels = reader.bytes();
                    break;
                case 7:
                    message.moniker = reader.string();
                    break;
                case 8:
                    message.other = exports.DefaultNodeInfoOther.decode(reader, reader.uint32());
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
            protocol_version: isSet(object.protocol_version)
                ? exports.ProtocolVersion.fromJSON(object.protocol_version)
                : undefined,
            default_node_id: isSet(object.default_node_id)
                ? String(object.default_node_id)
                : "",
            listen_addr: isSet(object.listen_addr) ? String(object.listen_addr) : "",
            network: isSet(object.network) ? String(object.network) : "",
            version: isSet(object.version) ? String(object.version) : "",
            channels: isSet(object.channels)
                ? bytesFromBase64(object.channels)
                : new Uint8Array(),
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            other: isSet(object.other)
                ? exports.DefaultNodeInfoOther.fromJSON(object.other)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.protocol_version !== undefined &&
            (obj.protocol_version = message.protocol_version
                ? exports.ProtocolVersion.toJSON(message.protocol_version)
                : undefined);
        message.default_node_id !== undefined &&
            (obj.default_node_id = message.default_node_id);
        message.listen_addr !== undefined &&
            (obj.listen_addr = message.listen_addr);
        message.network !== undefined && (obj.network = message.network);
        message.version !== undefined && (obj.version = message.version);
        message.channels !== undefined &&
            (obj.channels = base64FromBytes(message.channels !== undefined ? message.channels : new Uint8Array()));
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.other !== undefined &&
            (obj.other = message.other
                ? exports.DefaultNodeInfoOther.toJSON(message.other)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseDefaultNodeInfo();
        message.protocol_version =
            object.protocol_version !== undefined && object.protocol_version !== null
                ? exports.ProtocolVersion.fromPartial(object.protocol_version)
                : undefined;
        message.default_node_id = (_a = object.default_node_id) !== null && _a !== void 0 ? _a : "";
        message.listen_addr = (_b = object.listen_addr) !== null && _b !== void 0 ? _b : "";
        message.network = (_c = object.network) !== null && _c !== void 0 ? _c : "";
        message.version = (_d = object.version) !== null && _d !== void 0 ? _d : "";
        message.channels = (_e = object.channels) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.moniker = (_f = object.moniker) !== null && _f !== void 0 ? _f : "";
        message.other =
            object.other !== undefined && object.other !== null
                ? exports.DefaultNodeInfoOther.fromPartial(object.other)
                : undefined;
        return message;
    },
};
function createBaseDefaultNodeInfoOther() {
    return { tx_index: "", rpc_address: "" };
}
exports.DefaultNodeInfoOther = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx_index !== "") {
            writer.uint32(10).string(message.tx_index);
        }
        if (message.rpc_address !== "") {
            writer.uint32(18).string(message.rpc_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDefaultNodeInfoOther();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx_index = reader.string();
                    break;
                case 2:
                    message.rpc_address = reader.string();
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
            tx_index: isSet(object.tx_index) ? String(object.tx_index) : "",
            rpc_address: isSet(object.rpc_address) ? String(object.rpc_address) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx_index !== undefined && (obj.tx_index = message.tx_index);
        message.rpc_address !== undefined &&
            (obj.rpc_address = message.rpc_address);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDefaultNodeInfoOther();
        message.tx_index = (_a = object.tx_index) !== null && _a !== void 0 ? _a : "";
        message.rpc_address = (_b = object.rpc_address) !== null && _b !== void 0 ? _b : "";
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
//# sourceMappingURL=types.js.map