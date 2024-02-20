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
exports.QueryClientImpl = exports.QuerySigningInfosResponse = exports.QuerySigningInfosRequest = exports.QuerySigningInfoResponse = exports.QuerySigningInfoRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const slashing_1 = require("./slashing");
const pagination_1 = require("../../base/query/v1beta1/pagination");
exports.protobufPackage = "cosmos.slashing.v1beta1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsRequest();
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
        const message = createBaseQueryParamsRequest();
        return message;
    },
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            slashing_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = slashing_1.Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? slashing_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? slashing_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? slashing_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseQuerySigningInfoRequest() {
    return { cons_address: "" };
}
exports.QuerySigningInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.cons_address !== "") {
            writer.uint32(10).string(message.cons_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySigningInfoRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cons_address = reader.string();
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
            cons_address: isSet(object.cons_address)
                ? String(object.cons_address)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.cons_address !== undefined &&
            (obj.cons_address = message.cons_address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySigningInfoRequest();
        message.cons_address = (_a = object.cons_address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQuerySigningInfoResponse() {
    return { val_signing_info: undefined };
}
exports.QuerySigningInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.val_signing_info !== undefined) {
            slashing_1.ValidatorSigningInfo.encode(message.val_signing_info, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySigningInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.val_signing_info = slashing_1.ValidatorSigningInfo.decode(reader, reader.uint32());
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
            val_signing_info: isSet(object.val_signing_info)
                ? slashing_1.ValidatorSigningInfo.fromJSON(object.val_signing_info)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.val_signing_info !== undefined &&
            (obj.val_signing_info = message.val_signing_info
                ? slashing_1.ValidatorSigningInfo.toJSON(message.val_signing_info)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySigningInfoResponse();
        message.val_signing_info =
            object.val_signing_info !== undefined && object.val_signing_info !== null
                ? slashing_1.ValidatorSigningInfo.fromPartial(object.val_signing_info)
                : undefined;
        return message;
    },
};
function createBaseQuerySigningInfosRequest() {
    return { pagination: undefined };
}
exports.QuerySigningInfosRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySigningInfosRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQuerySigningInfosRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQuerySigningInfosResponse() {
    return { info: [], pagination: undefined };
}
exports.QuerySigningInfosResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.info) {
            slashing_1.ValidatorSigningInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySigningInfosResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.info.push(slashing_1.ValidatorSigningInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            info: Array.isArray(object === null || object === void 0 ? void 0 : object.info)
                ? object.info.map((e) => slashing_1.ValidatorSigningInfo.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.info) {
            obj.info = message.info.map((e) => e ? slashing_1.ValidatorSigningInfo.toJSON(e) : undefined);
        }
        else {
            obj.info = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySigningInfosResponse();
        message.info =
            ((_a = object.info) === null || _a === void 0 ? void 0 : _a.map((e) => slashing_1.ValidatorSigningInfo.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.SigningInfo = this.SigningInfo.bind(this);
        this.SigningInfos = this.SigningInfos.bind(this);
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
    SigningInfo(request) {
        const data = exports.QuerySigningInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfo", data);
        return promise.then((data) => exports.QuerySigningInfoResponse.decode(new _m0.Reader(data)));
    }
    SigningInfos(request) {
        const data = exports.QuerySigningInfosRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.slashing.v1beta1.Query", "SigningInfos", data);
        return promise.then((data) => exports.QuerySigningInfosResponse.decode(new _m0.Reader(data)));
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