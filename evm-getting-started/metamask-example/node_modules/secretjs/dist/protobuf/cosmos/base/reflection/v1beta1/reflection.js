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
exports.ReflectionServiceClientImpl = exports.ListImplementationsResponse = exports.ListImplementationsRequest = exports.ListAllInterfacesResponse = exports.ListAllInterfacesRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.base.reflection.v1beta1";
function createBaseListAllInterfacesRequest() {
    return {};
}
exports.ListAllInterfacesRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListAllInterfacesRequest();
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
        const message = createBaseListAllInterfacesRequest();
        return message;
    },
};
function createBaseListAllInterfacesResponse() {
    return { interface_names: [] };
}
exports.ListAllInterfacesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.interface_names) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListAllInterfacesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interface_names.push(reader.string());
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
            interface_names: Array.isArray(object === null || object === void 0 ? void 0 : object.interface_names)
                ? object.interface_names.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.interface_names) {
            obj.interface_names = message.interface_names.map((e) => e);
        }
        else {
            obj.interface_names = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListAllInterfacesResponse();
        message.interface_names = ((_a = object.interface_names) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseListImplementationsRequest() {
    return { interface_name: "" };
}
exports.ListImplementationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.interface_name !== "") {
            writer.uint32(10).string(message.interface_name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListImplementationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.interface_name = reader.string();
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
            interface_name: isSet(object.interface_name)
                ? String(object.interface_name)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.interface_name !== undefined &&
            (obj.interface_name = message.interface_name);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListImplementationsRequest();
        message.interface_name = (_a = object.interface_name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseListImplementationsResponse() {
    return { implementation_message_names: [] };
}
exports.ListImplementationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.implementation_message_names) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListImplementationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.implementation_message_names.push(reader.string());
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
            implementation_message_names: Array.isArray(object === null || object === void 0 ? void 0 : object.implementation_message_names)
                ? object.implementation_message_names.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.implementation_message_names) {
            obj.implementation_message_names =
                message.implementation_message_names.map((e) => e);
        }
        else {
            obj.implementation_message_names = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListImplementationsResponse();
        message.implementation_message_names =
            ((_a = object.implementation_message_names) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
class ReflectionServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.ListAllInterfaces = this.ListAllInterfaces.bind(this);
        this.ListImplementations = this.ListImplementations.bind(this);
    }
    ListAllInterfaces(request) {
        const data = exports.ListAllInterfacesRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.reflection.v1beta1.ReflectionService", "ListAllInterfaces", data);
        return promise.then((data) => exports.ListAllInterfacesResponse.decode(new _m0.Reader(data)));
    }
    ListImplementations(request) {
        const data = exports.ListImplementationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.reflection.v1beta1.ReflectionService", "ListImplementations", data);
        return promise.then((data) => exports.ListImplementationsResponse.decode(new _m0.Reader(data)));
    }
}
exports.ReflectionServiceClientImpl = ReflectionServiceClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=reflection.js.map