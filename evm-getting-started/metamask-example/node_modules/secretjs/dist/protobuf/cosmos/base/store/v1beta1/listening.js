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
exports.StoreKVPair = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.base.store.v1beta1";
function createBaseStoreKVPair() {
    return {
        store_key: "",
        delete: false,
        key: new Uint8Array(),
        value: new Uint8Array(),
    };
}
exports.StoreKVPair = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.store_key !== "") {
            writer.uint32(10).string(message.store_key);
        }
        if (message.delete === true) {
            writer.uint32(16).bool(message.delete);
        }
        if (message.key.length !== 0) {
            writer.uint32(26).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(34).bytes(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStoreKVPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.store_key = reader.string();
                    break;
                case 2:
                    message.delete = reader.bool();
                    break;
                case 3:
                    message.key = reader.bytes();
                    break;
                case 4:
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
            store_key: isSet(object.store_key) ? String(object.store_key) : "",
            delete: isSet(object.delete) ? Boolean(object.delete) : false,
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            value: isSet(object.value)
                ? bytesFromBase64(object.value)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.store_key !== undefined && (obj.store_key = message.store_key);
        message.delete !== undefined && (obj.delete = message.delete);
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseStoreKVPair();
        message.store_key = (_a = object.store_key) !== null && _a !== void 0 ? _a : "";
        message.delete = (_b = object.delete) !== null && _b !== void 0 ? _b : false;
        message.key = (_c = object.key) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.value = (_d = object.value) !== null && _d !== void 0 ? _d : new Uint8Array();
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
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=listening.js.map