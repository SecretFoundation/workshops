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
exports.QueryClientImpl = exports.QueryInterchainAccountFromAddressResponse = exports.QueryInterchainAccountFromAddressRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "secret.intertx.v1beta1";
function createBaseQueryInterchainAccountFromAddressRequest() {
    return { owner: "", connection_id: "" };
}
exports.QueryInterchainAccountFromAddressRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.connection_id !== "") {
            writer.uint32(18).string(message.connection_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInterchainAccountFromAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.connection_id = reader.string();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.connection_id !== undefined &&
            (obj.connection_id = message.connection_id);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryInterchainAccountFromAddressRequest();
        message.owner = (_a = object.owner) !== null && _a !== void 0 ? _a : "";
        message.connection_id = (_b = object.connection_id) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryInterchainAccountFromAddressResponse() {
    return { interchain_account_address: "" };
}
exports.QueryInterchainAccountFromAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.interchain_account_address !== "") {
            writer.uint32(10).string(message.interchain_account_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryInterchainAccountFromAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interchain_account_address = reader.string();
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
            interchain_account_address: isSet(object.interchain_account_address)
                ? String(object.interchain_account_address)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.interchain_account_address !== undefined &&
            (obj.interchain_account_address = message.interchain_account_address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryInterchainAccountFromAddressResponse();
        message.interchain_account_address =
            (_a = object.interchain_account_address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.InterchainAccountFromAddress =
            this.InterchainAccountFromAddress.bind(this);
    }
    InterchainAccountFromAddress(request) {
        const data = exports.QueryInterchainAccountFromAddressRequest.encode(request).finish();
        const promise = this.rpc.request("secret.intertx.v1beta1.Query", "InterchainAccountFromAddress", data);
        return promise.then((data) => exports.QueryInterchainAccountFromAddressResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map