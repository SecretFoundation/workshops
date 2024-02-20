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
exports.IdentifiedGenesisMetadata = exports.GenesisMetadata = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const client_1 = require("./client");
exports.protobufPackage = "ibc.core.client.v1";
function createBaseGenesisState() {
    return {
        clients: [],
        clients_consensus: [],
        clients_metadata: [],
        params: undefined,
        create_localhost: false,
        next_client_sequence: "0",
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.clients) {
            client_1.IdentifiedClientState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.clients_consensus) {
            client_1.ClientConsensusStates.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.clients_metadata) {
            exports.IdentifiedGenesisMetadata.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.params !== undefined) {
            client_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        if (message.create_localhost === true) {
            writer.uint32(40).bool(message.create_localhost);
        }
        if (message.next_client_sequence !== "0") {
            writer.uint32(48).uint64(message.next_client_sequence);
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
                    message.clients.push(client_1.IdentifiedClientState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.clients_consensus.push(client_1.ClientConsensusStates.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.clients_metadata.push(exports.IdentifiedGenesisMetadata.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.params = client_1.Params.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.create_localhost = reader.bool();
                    break;
                case 6:
                    message.next_client_sequence = longToString(reader.uint64());
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
            clients: Array.isArray(object === null || object === void 0 ? void 0 : object.clients)
                ? object.clients.map((e) => client_1.IdentifiedClientState.fromJSON(e))
                : [],
            clients_consensus: Array.isArray(object === null || object === void 0 ? void 0 : object.clients_consensus)
                ? object.clients_consensus.map((e) => client_1.ClientConsensusStates.fromJSON(e))
                : [],
            clients_metadata: Array.isArray(object === null || object === void 0 ? void 0 : object.clients_metadata)
                ? object.clients_metadata.map((e) => exports.IdentifiedGenesisMetadata.fromJSON(e))
                : [],
            params: isSet(object.params) ? client_1.Params.fromJSON(object.params) : undefined,
            create_localhost: isSet(object.create_localhost)
                ? Boolean(object.create_localhost)
                : false,
            next_client_sequence: isSet(object.next_client_sequence)
                ? String(object.next_client_sequence)
                : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.clients) {
            obj.clients = message.clients.map((e) => e ? client_1.IdentifiedClientState.toJSON(e) : undefined);
        }
        else {
            obj.clients = [];
        }
        if (message.clients_consensus) {
            obj.clients_consensus = message.clients_consensus.map((e) => e ? client_1.ClientConsensusStates.toJSON(e) : undefined);
        }
        else {
            obj.clients_consensus = [];
        }
        if (message.clients_metadata) {
            obj.clients_metadata = message.clients_metadata.map((e) => e ? exports.IdentifiedGenesisMetadata.toJSON(e) : undefined);
        }
        else {
            obj.clients_metadata = [];
        }
        message.params !== undefined &&
            (obj.params = message.params ? client_1.Params.toJSON(message.params) : undefined);
        message.create_localhost !== undefined &&
            (obj.create_localhost = message.create_localhost);
        message.next_client_sequence !== undefined &&
            (obj.next_client_sequence = message.next_client_sequence);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseGenesisState();
        message.clients =
            ((_a = object.clients) === null || _a === void 0 ? void 0 : _a.map((e) => client_1.IdentifiedClientState.fromPartial(e))) || [];
        message.clients_consensus =
            ((_b = object.clients_consensus) === null || _b === void 0 ? void 0 : _b.map((e) => client_1.ClientConsensusStates.fromPartial(e))) || [];
        message.clients_metadata =
            ((_c = object.clients_metadata) === null || _c === void 0 ? void 0 : _c.map((e) => exports.IdentifiedGenesisMetadata.fromPartial(e))) || [];
        message.params =
            object.params !== undefined && object.params !== null
                ? client_1.Params.fromPartial(object.params)
                : undefined;
        message.create_localhost = (_d = object.create_localhost) !== null && _d !== void 0 ? _d : false;
        message.next_client_sequence = (_e = object.next_client_sequence) !== null && _e !== void 0 ? _e : "0";
        return message;
    },
};
function createBaseGenesisMetadata() {
    return { key: new Uint8Array(), value: new Uint8Array() };
}
exports.GenesisMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value)
                ? bytesFromBase64(object.value)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGenesisMetadata();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseIdentifiedGenesisMetadata() {
    return { client_id: "", client_metadata: [] };
}
exports.IdentifiedGenesisMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        for (const v of message.client_metadata) {
            exports.GenesisMetadata.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedGenesisMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.client_metadata.push(exports.GenesisMetadata.decode(reader, reader.uint32()));
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
            client_metadata: Array.isArray(object === null || object === void 0 ? void 0 : object.client_metadata)
                ? object.client_metadata.map((e) => exports.GenesisMetadata.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.client_metadata) {
            obj.client_metadata = message.client_metadata.map((e) => e ? exports.GenesisMetadata.toJSON(e) : undefined);
        }
        else {
            obj.client_metadata = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseIdentifiedGenesisMetadata();
        message.client_id = (_a = object.client_id) !== null && _a !== void 0 ? _a : "";
        message.client_metadata =
            ((_b = object.client_metadata) === null || _b === void 0 ? void 0 : _b.map((e) => exports.GenesisMetadata.fromPartial(e))) || [];
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
//# sourceMappingURL=genesis.js.map