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
exports.RegistrationNodeInfo = exports.LegacySeedConfig = exports.SeedConfig = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "secret.registration.v1beta1";
function createBaseSeedConfig() {
    return { master_key: "", encrypted_key: "", version: 0 };
}
exports.SeedConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.master_key !== "") {
            writer.uint32(10).string(message.master_key);
        }
        if (message.encrypted_key !== "") {
            writer.uint32(18).string(message.encrypted_key);
        }
        if (message.version !== 0) {
            writer.uint32(24).uint32(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSeedConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.master_key = reader.string();
                    break;
                case 2:
                    message.encrypted_key = reader.string();
                    break;
                case 3:
                    message.version = reader.uint32();
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
            master_key: isSet(object.master_key) ? String(object.master_key) : "",
            encrypted_key: isSet(object.encrypted_key)
                ? String(object.encrypted_key)
                : "",
            version: isSet(object.version) ? Number(object.version) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.master_key !== undefined && (obj.master_key = message.master_key);
        message.encrypted_key !== undefined &&
            (obj.encrypted_key = message.encrypted_key);
        message.version !== undefined &&
            (obj.version = Math.round(message.version));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseSeedConfig();
        message.master_key = (_a = object.master_key) !== null && _a !== void 0 ? _a : "";
        message.encrypted_key = (_b = object.encrypted_key) !== null && _b !== void 0 ? _b : "";
        message.version = (_c = object.version) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseLegacySeedConfig() {
    return { master_cert: "", encrypted_key: "" };
}
exports.LegacySeedConfig = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.master_cert !== "") {
            writer.uint32(10).string(message.master_cert);
        }
        if (message.encrypted_key !== "") {
            writer.uint32(18).string(message.encrypted_key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLegacySeedConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.master_cert = reader.string();
                    break;
                case 2:
                    message.encrypted_key = reader.string();
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
            master_cert: isSet(object.master_cert) ? String(object.master_cert) : "",
            encrypted_key: isSet(object.encrypted_key)
                ? String(object.encrypted_key)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.master_cert !== undefined &&
            (obj.master_cert = message.master_cert);
        message.encrypted_key !== undefined &&
            (obj.encrypted_key = message.encrypted_key);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLegacySeedConfig();
        message.master_cert = (_a = object.master_cert) !== null && _a !== void 0 ? _a : "";
        message.encrypted_key = (_b = object.encrypted_key) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRegistrationNodeInfo() {
    return { certificate: new Uint8Array(), encrypted_seed: new Uint8Array() };
}
exports.RegistrationNodeInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.certificate.length !== 0) {
            writer.uint32(10).bytes(message.certificate);
        }
        if (message.encrypted_seed.length !== 0) {
            writer.uint32(18).bytes(message.encrypted_seed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegistrationNodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.certificate = reader.bytes();
                    break;
                case 2:
                    message.encrypted_seed = reader.bytes();
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
            certificate: isSet(object.certificate)
                ? bytesFromBase64(object.certificate)
                : new Uint8Array(),
            encrypted_seed: isSet(object.encrypted_seed)
                ? bytesFromBase64(object.encrypted_seed)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.certificate !== undefined &&
            (obj.certificate = base64FromBytes(message.certificate !== undefined
                ? message.certificate
                : new Uint8Array()));
        message.encrypted_seed !== undefined &&
            (obj.encrypted_seed = base64FromBytes(message.encrypted_seed !== undefined
                ? message.encrypted_seed
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRegistrationNodeInfo();
        message.certificate = (_a = object.certificate) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.encrypted_seed = (_b = object.encrypted_seed) !== null && _b !== void 0 ? _b : new Uint8Array();
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
//# sourceMappingURL=types.js.map