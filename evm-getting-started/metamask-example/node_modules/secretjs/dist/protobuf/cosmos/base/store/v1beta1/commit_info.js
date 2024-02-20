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
exports.CommitID = exports.StoreInfo = exports.CommitInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.base.store.v1beta1";
function createBaseCommitInfo() {
    return { version: "0", store_infos: [] };
}
exports.CommitInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.version !== "0") {
            writer.uint32(8).int64(message.version);
        }
        for (const v of message.store_infos) {
            exports.StoreInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = longToString(reader.int64());
                    break;
                case 2:
                    message.store_infos.push(exports.StoreInfo.decode(reader, reader.uint32()));
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
            version: isSet(object.version) ? String(object.version) : "0",
            store_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.store_infos)
                ? object.store_infos.map((e) => exports.StoreInfo.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        if (message.store_infos) {
            obj.store_infos = message.store_infos.map((e) => e ? exports.StoreInfo.toJSON(e) : undefined);
        }
        else {
            obj.store_infos = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCommitInfo();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "0";
        message.store_infos =
            ((_b = object.store_infos) === null || _b === void 0 ? void 0 : _b.map((e) => exports.StoreInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseStoreInfo() {
    return { name: "", commit_id: undefined };
}
exports.StoreInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.commit_id !== undefined) {
            exports.CommitID.encode(message.commit_id, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.commit_id = exports.CommitID.decode(reader, reader.uint32());
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
            name: isSet(object.name) ? String(object.name) : "",
            commit_id: isSet(object.commit_id)
                ? exports.CommitID.fromJSON(object.commit_id)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.commit_id !== undefined &&
            (obj.commit_id = message.commit_id
                ? exports.CommitID.toJSON(message.commit_id)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStoreInfo();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.commit_id =
            object.commit_id !== undefined && object.commit_id !== null
                ? exports.CommitID.fromPartial(object.commit_id)
                : undefined;
        return message;
    },
};
function createBaseCommitID() {
    return { version: "0", hash: new Uint8Array() };
}
exports.CommitID = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.version !== "0") {
            writer.uint32(8).int64(message.version);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = longToString(reader.int64());
                    break;
                case 2:
                    message.hash = reader.bytes();
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
            version: isSet(object.version) ? String(object.version) : "0",
            hash: isSet(object.hash)
                ? bytesFromBase64(object.hash)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCommitID();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "0";
        message.hash = (_b = object.hash) !== null && _b !== void 0 ? _b : new Uint8Array();
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
//# sourceMappingURL=commit_info.js.map