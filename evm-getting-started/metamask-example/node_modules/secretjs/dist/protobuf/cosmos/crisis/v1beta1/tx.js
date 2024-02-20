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
exports.MsgClientImpl = exports.MsgVerifyInvariantResponse = exports.MsgVerifyInvariant = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.crisis.v1beta1";
function createBaseMsgVerifyInvariant() {
    return { sender: "", invariant_module_name: "", invariant_route: "" };
}
exports.MsgVerifyInvariant = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.invariant_module_name !== "") {
            writer.uint32(18).string(message.invariant_module_name);
        }
        if (message.invariant_route !== "") {
            writer.uint32(26).string(message.invariant_route);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVerifyInvariant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.invariant_module_name = reader.string();
                    break;
                case 3:
                    message.invariant_route = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            invariant_module_name: isSet(object.invariant_module_name)
                ? String(object.invariant_module_name)
                : "",
            invariant_route: isSet(object.invariant_route)
                ? String(object.invariant_route)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.invariant_module_name !== undefined &&
            (obj.invariant_module_name = message.invariant_module_name);
        message.invariant_route !== undefined &&
            (obj.invariant_route = message.invariant_route);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgVerifyInvariant();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.invariant_module_name = (_b = object.invariant_module_name) !== null && _b !== void 0 ? _b : "";
        message.invariant_route = (_c = object.invariant_route) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgVerifyInvariantResponse() {
    return {};
}
exports.MsgVerifyInvariantResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgVerifyInvariantResponse();
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
        const message = createBaseMsgVerifyInvariantResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.VerifyInvariant = this.VerifyInvariant.bind(this);
    }
    VerifyInvariant(request) {
        const data = exports.MsgVerifyInvariant.encode(request).finish();
        const promise = this.rpc.request("cosmos.crisis.v1beta1.Msg", "VerifyInvariant", data);
        return promise.then((data) => exports.MsgVerifyInvariantResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map