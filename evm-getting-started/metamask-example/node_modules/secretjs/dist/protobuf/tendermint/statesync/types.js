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
exports.ChunkResponse = exports.ChunkRequest = exports.SnapshotsResponse = exports.SnapshotsRequest = exports.Message = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.statesync";
function createBaseMessage() {
    return {
        snapshots_request: undefined,
        snapshots_response: undefined,
        chunk_request: undefined,
        chunk_response: undefined,
    };
}
exports.Message = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.snapshots_request !== undefined) {
            exports.SnapshotsRequest.encode(message.snapshots_request, writer.uint32(10).fork()).ldelim();
        }
        if (message.snapshots_response !== undefined) {
            exports.SnapshotsResponse.encode(message.snapshots_response, writer.uint32(18).fork()).ldelim();
        }
        if (message.chunk_request !== undefined) {
            exports.ChunkRequest.encode(message.chunk_request, writer.uint32(26).fork()).ldelim();
        }
        if (message.chunk_response !== undefined) {
            exports.ChunkResponse.encode(message.chunk_response, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.snapshots_request = exports.SnapshotsRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.snapshots_response = exports.SnapshotsResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.chunk_request = exports.ChunkRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.chunk_response = exports.ChunkResponse.decode(reader, reader.uint32());
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
            snapshots_request: isSet(object.snapshots_request)
                ? exports.SnapshotsRequest.fromJSON(object.snapshots_request)
                : undefined,
            snapshots_response: isSet(object.snapshots_response)
                ? exports.SnapshotsResponse.fromJSON(object.snapshots_response)
                : undefined,
            chunk_request: isSet(object.chunk_request)
                ? exports.ChunkRequest.fromJSON(object.chunk_request)
                : undefined,
            chunk_response: isSet(object.chunk_response)
                ? exports.ChunkResponse.fromJSON(object.chunk_response)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.snapshots_request !== undefined &&
            (obj.snapshots_request = message.snapshots_request
                ? exports.SnapshotsRequest.toJSON(message.snapshots_request)
                : undefined);
        message.snapshots_response !== undefined &&
            (obj.snapshots_response = message.snapshots_response
                ? exports.SnapshotsResponse.toJSON(message.snapshots_response)
                : undefined);
        message.chunk_request !== undefined &&
            (obj.chunk_request = message.chunk_request
                ? exports.ChunkRequest.toJSON(message.chunk_request)
                : undefined);
        message.chunk_response !== undefined &&
            (obj.chunk_response = message.chunk_response
                ? exports.ChunkResponse.toJSON(message.chunk_response)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMessage();
        message.snapshots_request =
            object.snapshots_request !== undefined &&
                object.snapshots_request !== null
                ? exports.SnapshotsRequest.fromPartial(object.snapshots_request)
                : undefined;
        message.snapshots_response =
            object.snapshots_response !== undefined &&
                object.snapshots_response !== null
                ? exports.SnapshotsResponse.fromPartial(object.snapshots_response)
                : undefined;
        message.chunk_request =
            object.chunk_request !== undefined && object.chunk_request !== null
                ? exports.ChunkRequest.fromPartial(object.chunk_request)
                : undefined;
        message.chunk_response =
            object.chunk_response !== undefined && object.chunk_response !== null
                ? exports.ChunkResponse.fromPartial(object.chunk_response)
                : undefined;
        return message;
    },
};
function createBaseSnapshotsRequest() {
    return {};
}
exports.SnapshotsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotsRequest();
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
        const message = createBaseSnapshotsRequest();
        return message;
    },
};
function createBaseSnapshotsResponse() {
    return {
        height: "0",
        format: 0,
        chunks: 0,
        hash: new Uint8Array(),
        metadata: new Uint8Array(),
    };
}
exports.SnapshotsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.chunks !== 0) {
            writer.uint32(24).uint32(message.chunks);
        }
        if (message.hash.length !== 0) {
            writer.uint32(34).bytes(message.hash);
        }
        if (message.metadata.length !== 0) {
            writer.uint32(42).bytes(message.metadata);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSnapshotsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.uint64());
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.chunks = reader.uint32();
                    break;
                case 4:
                    message.hash = reader.bytes();
                    break;
                case 5:
                    message.metadata = reader.bytes();
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
            height: isSet(object.height) ? String(object.height) : "0",
            format: isSet(object.format) ? Number(object.format) : 0,
            chunks: isSet(object.chunks) ? Number(object.chunks) : 0,
            hash: isSet(object.hash)
                ? bytesFromBase64(object.hash)
                : new Uint8Array(),
            metadata: isSet(object.metadata)
                ? bytesFromBase64(object.metadata)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.chunks !== undefined && (obj.chunks = Math.round(message.chunks));
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.metadata !== undefined &&
            (obj.metadata = base64FromBytes(message.metadata !== undefined ? message.metadata : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseSnapshotsResponse();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.format = (_b = object.format) !== null && _b !== void 0 ? _b : 0;
        message.chunks = (_c = object.chunks) !== null && _c !== void 0 ? _c : 0;
        message.hash = (_d = object.hash) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.metadata = (_e = object.metadata) !== null && _e !== void 0 ? _e : new Uint8Array();
        return message;
    },
};
function createBaseChunkRequest() {
    return { height: "0", format: 0, index: 0 };
}
exports.ChunkRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.index !== 0) {
            writer.uint32(24).uint32(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChunkRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.uint64());
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.index = reader.uint32();
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
            height: isSet(object.height) ? String(object.height) : "0",
            format: isSet(object.format) ? Number(object.format) : 0,
            index: isSet(object.index) ? Number(object.index) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.index !== undefined && (obj.index = Math.round(message.index));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseChunkRequest();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.format = (_b = object.format) !== null && _b !== void 0 ? _b : 0;
        message.index = (_c = object.index) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseChunkResponse() {
    return {
        height: "0",
        format: 0,
        index: 0,
        chunk: new Uint8Array(),
        missing: false,
    };
}
exports.ChunkResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).uint64(message.height);
        }
        if (message.format !== 0) {
            writer.uint32(16).uint32(message.format);
        }
        if (message.index !== 0) {
            writer.uint32(24).uint32(message.index);
        }
        if (message.chunk.length !== 0) {
            writer.uint32(34).bytes(message.chunk);
        }
        if (message.missing === true) {
            writer.uint32(40).bool(message.missing);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChunkResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.uint64());
                    break;
                case 2:
                    message.format = reader.uint32();
                    break;
                case 3:
                    message.index = reader.uint32();
                    break;
                case 4:
                    message.chunk = reader.bytes();
                    break;
                case 5:
                    message.missing = reader.bool();
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
            height: isSet(object.height) ? String(object.height) : "0",
            format: isSet(object.format) ? Number(object.format) : 0,
            index: isSet(object.index) ? Number(object.index) : 0,
            chunk: isSet(object.chunk)
                ? bytesFromBase64(object.chunk)
                : new Uint8Array(),
            missing: isSet(object.missing) ? Boolean(object.missing) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.format !== undefined && (obj.format = Math.round(message.format));
        message.index !== undefined && (obj.index = Math.round(message.index));
        message.chunk !== undefined &&
            (obj.chunk = base64FromBytes(message.chunk !== undefined ? message.chunk : new Uint8Array()));
        message.missing !== undefined && (obj.missing = message.missing);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseChunkResponse();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.format = (_b = object.format) !== null && _b !== void 0 ? _b : 0;
        message.index = (_c = object.index) !== null && _c !== void 0 ? _c : 0;
        message.chunk = (_d = object.chunk) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.missing = (_e = object.missing) !== null && _e !== void 0 ? _e : false;
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