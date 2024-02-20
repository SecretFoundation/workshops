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
exports.IncentivizedAcknowledgement = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.applications.fee.v1";
function createBaseIncentivizedAcknowledgement() {
    return {
        app_acknowledgement: new Uint8Array(),
        forward_relayer_address: "",
        underlying_app_success: false,
    };
}
exports.IncentivizedAcknowledgement = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.app_acknowledgement.length !== 0) {
            writer.uint32(10).bytes(message.app_acknowledgement);
        }
        if (message.forward_relayer_address !== "") {
            writer.uint32(18).string(message.forward_relayer_address);
        }
        if (message.underlying_app_success === true) {
            writer.uint32(24).bool(message.underlying_app_success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIncentivizedAcknowledgement();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.app_acknowledgement = reader.bytes();
                    break;
                case 2:
                    message.forward_relayer_address = reader.string();
                    break;
                case 3:
                    message.underlying_app_success = reader.bool();
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
            app_acknowledgement: isSet(object.app_acknowledgement)
                ? bytesFromBase64(object.app_acknowledgement)
                : new Uint8Array(),
            forward_relayer_address: isSet(object.forward_relayer_address)
                ? String(object.forward_relayer_address)
                : "",
            underlying_app_success: isSet(object.underlying_app_success)
                ? Boolean(object.underlying_app_success)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.app_acknowledgement !== undefined &&
            (obj.app_acknowledgement = base64FromBytes(message.app_acknowledgement !== undefined
                ? message.app_acknowledgement
                : new Uint8Array()));
        message.forward_relayer_address !== undefined &&
            (obj.forward_relayer_address = message.forward_relayer_address);
        message.underlying_app_success !== undefined &&
            (obj.underlying_app_success = message.underlying_app_success);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseIncentivizedAcknowledgement();
        message.app_acknowledgement =
            (_a = object.app_acknowledgement) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.forward_relayer_address = (_b = object.forward_relayer_address) !== null && _b !== void 0 ? _b : "";
        message.underlying_app_success = (_c = object.underlying_app_success) !== null && _c !== void 0 ? _c : false;
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
//# sourceMappingURL=ack.js.map