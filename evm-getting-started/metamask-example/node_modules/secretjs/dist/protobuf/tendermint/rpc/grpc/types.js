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
exports.BroadcastAPIClientImpl = exports.ResponseBroadcastTx = exports.ResponsePing = exports.RequestBroadcastTx = exports.RequestPing = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("../../abci/types");
exports.protobufPackage = "tendermint.rpc.grpc";
function createBaseRequestPing() {
    return {};
}
exports.RequestPing = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestPing();
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
        const message = createBaseRequestPing();
        return message;
    },
};
function createBaseRequestBroadcastTx() {
    return { tx: new Uint8Array() };
}
exports.RequestBroadcastTx = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.tx.length !== 0) {
            writer.uint32(10).bytes(message.tx);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRequestBroadcastTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx = reader.bytes();
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
            tx: isSet(object.tx) ? bytesFromBase64(object.tx) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.tx !== undefined &&
            (obj.tx = base64FromBytes(message.tx !== undefined ? message.tx : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRequestBroadcastTx();
        message.tx = (_a = object.tx) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseResponsePing() {
    return {};
}
exports.ResponsePing = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponsePing();
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
        const message = createBaseResponsePing();
        return message;
    },
};
function createBaseResponseBroadcastTx() {
    return { check_tx: undefined, deliver_tx: undefined };
}
exports.ResponseBroadcastTx = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.check_tx !== undefined) {
            types_1.ResponseCheckTx.encode(message.check_tx, writer.uint32(10).fork()).ldelim();
        }
        if (message.deliver_tx !== undefined) {
            types_1.ResponseDeliverTx.encode(message.deliver_tx, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResponseBroadcastTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.check_tx = types_1.ResponseCheckTx.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.deliver_tx = types_1.ResponseDeliverTx.decode(reader, reader.uint32());
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
            check_tx: isSet(object.check_tx)
                ? types_1.ResponseCheckTx.fromJSON(object.check_tx)
                : undefined,
            deliver_tx: isSet(object.deliver_tx)
                ? types_1.ResponseDeliverTx.fromJSON(object.deliver_tx)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.check_tx !== undefined &&
            (obj.check_tx = message.check_tx
                ? types_1.ResponseCheckTx.toJSON(message.check_tx)
                : undefined);
        message.deliver_tx !== undefined &&
            (obj.deliver_tx = message.deliver_tx
                ? types_1.ResponseDeliverTx.toJSON(message.deliver_tx)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResponseBroadcastTx();
        message.check_tx =
            object.check_tx !== undefined && object.check_tx !== null
                ? types_1.ResponseCheckTx.fromPartial(object.check_tx)
                : undefined;
        message.deliver_tx =
            object.deliver_tx !== undefined && object.deliver_tx !== null
                ? types_1.ResponseDeliverTx.fromPartial(object.deliver_tx)
                : undefined;
        return message;
    },
};
class BroadcastAPIClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Ping = this.Ping.bind(this);
        this.BroadcastTx = this.BroadcastTx.bind(this);
    }
    Ping(request) {
        const data = exports.RequestPing.encode(request).finish();
        const promise = this.rpc.request("tendermint.rpc.grpc.BroadcastAPI", "Ping", data);
        return promise.then((data) => exports.ResponsePing.decode(new _m0.Reader(data)));
    }
    BroadcastTx(request) {
        const data = exports.RequestBroadcastTx.encode(request).finish();
        const promise = this.rpc.request("tendermint.rpc.grpc.BroadcastAPI", "BroadcastTx", data);
        return promise.then((data) => exports.ResponseBroadcastTx.decode(new _m0.Reader(data)));
    }
}
exports.BroadcastAPIClientImpl = BroadcastAPIClientImpl;
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