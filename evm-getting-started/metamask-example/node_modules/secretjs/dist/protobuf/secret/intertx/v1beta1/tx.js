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
exports.MsgClientImpl = exports.MsgSubmitTxResponse = exports.MsgSubmitTx = exports.MsgRegisterAccountResponse = exports.MsgRegisterAccount = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const any_1 = require("../../../google/protobuf/any");
exports.protobufPackage = "secret.intertx.v1beta1";
function createBaseMsgRegisterAccount() {
    return { owner: "", connection_id: "", version: "" };
}
exports.MsgRegisterAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connection_id !== "") {
            writer.uint32(18).string(message.connection_id);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connection_id = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
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
            owner: isSet(object.owner) ? String(object.owner) : "",
            connection_id: isSet(object.connection_id)
                ? String(object.connection_id)
                : "",
            version: isSet(object.version) ? String(object.version) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.connection_id !== undefined &&
            (obj.connection_id = message.connection_id);
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgRegisterAccount();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.connection_id = (_b = object.connection_id) !== null && _b !== void 0 ? _b : "";
        message.version = (_c = object.version) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgRegisterAccountResponse() {
    return {};
}
exports.MsgRegisterAccountResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterAccountResponse();
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
        const message = createBaseMsgRegisterAccountResponse();
        return message;
    },
};
function createBaseMsgSubmitTx() {
    return { owner: new Uint8Array(), connection_id: "", msg: undefined };
}
exports.MsgSubmitTx = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner.length !== 0) {
            writer.uint32(10).bytes(message.owner);
        }
        if (message.connection_id !== "") {
            writer.uint32(18).string(message.connection_id);
        }
        if (message.msg !== undefined) {
            any_1.Any.encode(message.msg, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.bytes();
                    break;
                case 2:
                    message.connection_id = reader.string();
                    break;
                case 3:
                    message.msg = any_1.Any.decode(reader, reader.uint32());
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
            owner: isSet(object.owner)
                ? bytesFromBase64(object.owner)
                : new Uint8Array(),
            connection_id: isSet(object.connection_id)
                ? String(object.connection_id)
                : "",
            msg: isSet(object.msg) ? any_1.Any.fromJSON(object.msg) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined &&
            (obj.owner = base64FromBytes(message.owner !== undefined ? message.owner : new Uint8Array()));
        message.connection_id !== undefined &&
            (obj.connection_id = message.connection_id);
        message.msg !== undefined &&
            (obj.msg = message.msg ? any_1.Any.toJSON(message.msg) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgSubmitTx();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.connection_id = (_b = object.connection_id) !== null && _b !== void 0 ? _b : "";
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? any_1.Any.fromPartial(object.msg)
                : undefined;
        return message;
    },
};
function createBaseMsgSubmitTxResponse() {
    return {};
}
exports.MsgSubmitTxResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitTxResponse();
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
        const message = createBaseMsgSubmitTxResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.RegisterAccount = this.RegisterAccount.bind(this);
        this.SubmitTx = this.SubmitTx.bind(this);
    }
    RegisterAccount(request) {
        const data = exports.MsgRegisterAccount.encode(request).finish();
        const promise = this.rpc.request("secret.intertx.v1beta1.Msg", "RegisterAccount", data);
        return promise.then((data) => exports.MsgRegisterAccountResponse.decode(new _m0.Reader(data)));
    }
    SubmitTx(request) {
        const data = exports.MsgSubmitTx.encode(request).finish();
        const promise = this.rpc.request("secret.intertx.v1beta1.Msg", "SubmitTx", data);
        return promise.then((data) => exports.MsgSubmitTxResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
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
//# sourceMappingURL=tx.js.map