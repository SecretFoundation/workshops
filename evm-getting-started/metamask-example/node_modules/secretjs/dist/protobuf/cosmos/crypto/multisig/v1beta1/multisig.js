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
exports.CompactBitArray = exports.MultiSignature = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.crypto.multisig.v1beta1";
function createBaseMultiSignature() {
    return { signatures: [] };
}
exports.MultiSignature = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.signatures) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMultiSignature();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signatures.push(reader.bytes());
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
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures)
                ? object.signatures.map((e) => bytesFromBase64(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMultiSignature();
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseCompactBitArray() {
    return { extra_bits_stored: 0, elems: new Uint8Array() };
}
exports.CompactBitArray = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.extra_bits_stored !== 0) {
            writer.uint32(8).uint32(message.extra_bits_stored);
        }
        if (message.elems.length !== 0) {
            writer.uint32(18).bytes(message.elems);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompactBitArray();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.extra_bits_stored = reader.uint32();
                    break;
                case 2:
                    message.elems = reader.bytes();
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
            extra_bits_stored: isSet(object.extra_bits_stored)
                ? Number(object.extra_bits_stored)
                : 0,
            elems: isSet(object.elems)
                ? bytesFromBase64(object.elems)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.extra_bits_stored !== undefined &&
            (obj.extra_bits_stored = Math.round(message.extra_bits_stored));
        message.elems !== undefined &&
            (obj.elems = base64FromBytes(message.elems !== undefined ? message.elems : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCompactBitArray();
        message.extra_bits_stored = (_a = object.extra_bits_stored) !== null && _a !== void 0 ? _a : 0;
        message.elems = (_b = object.elems) !== null && _b !== void 0 ? _b : new Uint8Array();
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
//# sourceMappingURL=multisig.js.map