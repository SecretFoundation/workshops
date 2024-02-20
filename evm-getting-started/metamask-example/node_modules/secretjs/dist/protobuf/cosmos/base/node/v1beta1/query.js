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
exports.ServiceClientImpl = exports.ConfigResponse = exports.ConfigRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.base.node.v1beta1";
function createBaseConfigRequest() {
    return {};
}
exports.ConfigRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigRequest();
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
        const message = createBaseConfigRequest();
        return message;
    },
};
function createBaseConfigResponse() {
    return { minimum_gas_price: "" };
}
exports.ConfigResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.minimum_gas_price !== "") {
            writer.uint32(10).string(message.minimum_gas_price);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfigResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.minimum_gas_price = reader.string();
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
            minimum_gas_price: isSet(object.minimum_gas_price)
                ? String(object.minimum_gas_price)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.minimum_gas_price !== undefined &&
            (obj.minimum_gas_price = message.minimum_gas_price);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseConfigResponse();
        message.minimum_gas_price = (_a = object.minimum_gas_price) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
class ServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Config = this.Config.bind(this);
    }
    Config(request) {
        const data = exports.ConfigRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.node.v1beta1.Service", "Config", data);
        return promise.then((data) => exports.ConfigResponse.decode(new _m0.Reader(data)));
    }
}
exports.ServiceClientImpl = ServiceClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map