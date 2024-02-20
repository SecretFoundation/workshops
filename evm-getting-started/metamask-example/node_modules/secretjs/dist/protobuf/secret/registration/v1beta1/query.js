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
exports.QueryClientImpl = exports.QueryEncryptedSeedResponse = exports.QueryEncryptedSeedRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const msg_1 = require("./msg");
const empty_1 = require("../../../google/protobuf/empty");
exports.protobufPackage = "secret.registration.v1beta1";
function createBaseQueryEncryptedSeedRequest() {
    return { pub_key: new Uint8Array() };
}
exports.QueryEncryptedSeedRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pub_key.length !== 0) {
            writer.uint32(10).bytes(message.pub_key);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEncryptedSeedRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pub_key = reader.bytes();
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
            pub_key: isSet(object.pub_key)
                ? bytesFromBase64(object.pub_key)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.pub_key !== undefined &&
            (obj.pub_key = base64FromBytes(message.pub_key !== undefined ? message.pub_key : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryEncryptedSeedRequest();
        message.pub_key = (_a = object.pub_key) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseQueryEncryptedSeedResponse() {
    return { encrypted_seed: new Uint8Array() };
}
exports.QueryEncryptedSeedResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.encrypted_seed.length !== 0) {
            writer.uint32(10).bytes(message.encrypted_seed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEncryptedSeedResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            encrypted_seed: isSet(object.encrypted_seed)
                ? bytesFromBase64(object.encrypted_seed)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.encrypted_seed !== undefined &&
            (obj.encrypted_seed = base64FromBytes(message.encrypted_seed !== undefined
                ? message.encrypted_seed
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryEncryptedSeedResponse();
        message.encrypted_seed = (_a = object.encrypted_seed) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.TxKey = this.TxKey.bind(this);
        this.RegistrationKey = this.RegistrationKey.bind(this);
        this.EncryptedSeed = this.EncryptedSeed.bind(this);
    }
    TxKey(request) {
        const data = empty_1.Empty.encode(request).finish();
        const promise = this.rpc.request("secret.registration.v1beta1.Query", "TxKey", data);
        return promise.then((data) => msg_1.Key.decode(new _m0.Reader(data)));
    }
    RegistrationKey(request) {
        const data = empty_1.Empty.encode(request).finish();
        const promise = this.rpc.request("secret.registration.v1beta1.Query", "RegistrationKey", data);
        return promise.then((data) => msg_1.Key.decode(new _m0.Reader(data)));
    }
    EncryptedSeed(request) {
        const data = exports.QueryEncryptedSeedRequest.encode(request).finish();
        const promise = this.rpc.request("secret.registration.v1beta1.Query", "EncryptedSeed", data);
        return promise.then((data) => exports.QueryEncryptedSeedResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
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
//# sourceMappingURL=query.js.map