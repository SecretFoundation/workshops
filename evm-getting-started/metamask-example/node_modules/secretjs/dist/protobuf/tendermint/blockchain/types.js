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
exports.Message = exports.StatusResponse = exports.StatusRequest = exports.BlockResponse = exports.NoBlockResponse = exports.BlockRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const block_1 = require("../types/block");
exports.protobufPackage = "tendermint.blockchain";
function createBaseBlockRequest() {
    return { height: "0" };
}
exports.BlockRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
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
            height: isSet(object.height) ? String(object.height) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBlockRequest();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseNoBlockResponse() {
    return { height: "0" };
}
exports.NoBlockResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNoBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
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
            height: isSet(object.height) ? String(object.height) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseNoBlockResponse();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseBlockResponse() {
    return { block: undefined };
}
exports.BlockResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = block_1.Block.decode(reader, reader.uint32());
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
            block: isSet(object.block) ? block_1.Block.fromJSON(object.block) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined &&
            (obj.block = message.block ? block_1.Block.toJSON(message.block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlockResponse();
        message.block =
            object.block !== undefined && object.block !== null
                ? block_1.Block.fromPartial(object.block)
                : undefined;
        return message;
    },
};
function createBaseStatusRequest() {
    return {};
}
exports.StatusRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatusRequest();
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
        const message = createBaseStatusRequest();
        return message;
    },
};
function createBaseStatusResponse() {
    return { height: "0", base: "0" };
}
exports.StatusResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.base !== "0") {
            writer.uint32(16).int64(message.base);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
                    break;
                case 2:
                    message.base = longToString(reader.int64());
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
            height: isSet(object.height) ? String(object.height) : "0",
            base: isSet(object.base) ? String(object.base) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.base !== undefined && (obj.base = message.base);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseStatusResponse();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.base = (_b = object.base) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseMessage() {
    return {
        block_request: undefined,
        no_block_response: undefined,
        block_response: undefined,
        status_request: undefined,
        status_response: undefined,
    };
}
exports.Message = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.block_request !== undefined) {
            exports.BlockRequest.encode(message.block_request, writer.uint32(10).fork()).ldelim();
        }
        if (message.no_block_response !== undefined) {
            exports.NoBlockResponse.encode(message.no_block_response, writer.uint32(18).fork()).ldelim();
        }
        if (message.block_response !== undefined) {
            exports.BlockResponse.encode(message.block_response, writer.uint32(26).fork()).ldelim();
        }
        if (message.status_request !== undefined) {
            exports.StatusRequest.encode(message.status_request, writer.uint32(34).fork()).ldelim();
        }
        if (message.status_response !== undefined) {
            exports.StatusResponse.encode(message.status_response, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_request = exports.BlockRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.no_block_response = exports.NoBlockResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.block_response = exports.BlockResponse.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.status_request = exports.StatusRequest.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.status_response = exports.StatusResponse.decode(reader, reader.uint32());
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
            block_request: isSet(object.block_request)
                ? exports.BlockRequest.fromJSON(object.block_request)
                : undefined,
            no_block_response: isSet(object.no_block_response)
                ? exports.NoBlockResponse.fromJSON(object.no_block_response)
                : undefined,
            block_response: isSet(object.block_response)
                ? exports.BlockResponse.fromJSON(object.block_response)
                : undefined,
            status_request: isSet(object.status_request)
                ? exports.StatusRequest.fromJSON(object.status_request)
                : undefined,
            status_response: isSet(object.status_response)
                ? exports.StatusResponse.fromJSON(object.status_response)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_request !== undefined &&
            (obj.block_request = message.block_request
                ? exports.BlockRequest.toJSON(message.block_request)
                : undefined);
        message.no_block_response !== undefined &&
            (obj.no_block_response = message.no_block_response
                ? exports.NoBlockResponse.toJSON(message.no_block_response)
                : undefined);
        message.block_response !== undefined &&
            (obj.block_response = message.block_response
                ? exports.BlockResponse.toJSON(message.block_response)
                : undefined);
        message.status_request !== undefined &&
            (obj.status_request = message.status_request
                ? exports.StatusRequest.toJSON(message.status_request)
                : undefined);
        message.status_response !== undefined &&
            (obj.status_response = message.status_response
                ? exports.StatusResponse.toJSON(message.status_response)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMessage();
        message.block_request =
            object.block_request !== undefined && object.block_request !== null
                ? exports.BlockRequest.fromPartial(object.block_request)
                : undefined;
        message.no_block_response =
            object.no_block_response !== undefined &&
                object.no_block_response !== null
                ? exports.NoBlockResponse.fromPartial(object.no_block_response)
                : undefined;
        message.block_response =
            object.block_response !== undefined && object.block_response !== null
                ? exports.BlockResponse.fromPartial(object.block_response)
                : undefined;
        message.status_request =
            object.status_request !== undefined && object.status_request !== null
                ? exports.StatusRequest.fromPartial(object.status_request)
                : undefined;
        message.status_response =
            object.status_response !== undefined && object.status_response !== null
                ? exports.StatusResponse.fromPartial(object.status_response)
                : undefined;
        return message;
    },
};
function longToString(long) {
    return long.toString();
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=types.js.map