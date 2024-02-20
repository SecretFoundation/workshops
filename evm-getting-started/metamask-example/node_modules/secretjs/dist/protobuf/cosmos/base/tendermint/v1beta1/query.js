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
exports.ServiceClientImpl = exports.Module = exports.VersionInfo = exports.GetNodeInfoResponse = exports.GetNodeInfoRequest = exports.GetSyncingResponse = exports.GetSyncingRequest = exports.GetLatestBlockResponse = exports.GetLatestBlockRequest = exports.GetBlockByHeightResponse = exports.GetBlockByHeightRequest = exports.Validator = exports.GetLatestValidatorSetResponse = exports.GetLatestValidatorSetRequest = exports.GetValidatorSetByHeightResponse = exports.GetValidatorSetByHeightRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const pagination_1 = require("../../query/v1beta1/pagination");
const any_1 = require("../../../../google/protobuf/any");
const types_1 = require("../../../../tendermint/types/types");
const block_1 = require("../../../../tendermint/types/block");
const types_2 = require("../../../../tendermint/p2p/types");
exports.protobufPackage = "cosmos.base.tendermint.v1beta1";
function createBaseGetValidatorSetByHeightRequest() {
    return { height: "0", pagination: undefined };
}
exports.GetValidatorSetByHeightRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorSetByHeightRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
                    break;
                case 2:
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
            height: isSet(object.height) ? String(object.height) : "0",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetValidatorSetByHeightRequest();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseGetValidatorSetByHeightResponse() {
    return { block_height: "0", validators: [], pagination: undefined };
}
exports.GetValidatorSetByHeightResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.block_height !== "0") {
            writer.uint32(8).int64(message.block_height);
        }
        for (const v of message.validators) {
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetValidatorSetByHeightResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_height = longToString(reader.int64());
                    break;
                case 2:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
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
            block_height: isSet(object.block_height)
                ? String(object.block_height)
                : "0",
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators)
                ? object.validators.map((e) => exports.Validator.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_height !== undefined &&
            (obj.block_height = message.block_height);
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetValidatorSetByHeightResponse();
        message.block_height = (_a = object.block_height) !== null && _a !== void 0 ? _a : "0";
        message.validators =
            ((_b = object.validators) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Validator.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseGetLatestValidatorSetRequest() {
    return { pagination: undefined };
}
exports.GetLatestValidatorSetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestValidatorSetRequest();
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
        const message = createBaseGetLatestValidatorSetRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseGetLatestValidatorSetResponse() {
    return { block_height: "0", validators: [], pagination: undefined };
}
exports.GetLatestValidatorSetResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.block_height !== "0") {
            writer.uint32(8).int64(message.block_height);
        }
        for (const v of message.validators) {
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestValidatorSetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_height = longToString(reader.int64());
                    break;
                case 2:
                    message.validators.push(exports.Validator.decode(reader, reader.uint32()));
                    break;
                case 3:
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
            block_height: isSet(object.block_height)
                ? String(object.block_height)
                : "0",
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators)
                ? object.validators.map((e) => exports.Validator.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_height !== undefined &&
            (obj.block_height = message.block_height);
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.validators = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetLatestValidatorSetResponse();
        message.block_height = (_a = object.block_height) !== null && _a !== void 0 ? _a : "0";
        message.validators =
            ((_b = object.validators) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Validator.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseValidator() {
    return {
        address: "",
        pub_key: undefined,
        voting_power: "0",
        proposer_priority: "0",
    };
}
exports.Validator = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.pub_key !== undefined) {
            any_1.Any.encode(message.pub_key, writer.uint32(18).fork()).ldelim();
        }
        if (message.voting_power !== "0") {
            writer.uint32(24).int64(message.voting_power);
        }
        if (message.proposer_priority !== "0") {
            writer.uint32(32).int64(message.proposer_priority);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.pub_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.voting_power = longToString(reader.int64());
                    break;
                case 4:
                    message.proposer_priority = longToString(reader.int64());
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
            address: isSet(object.address) ? String(object.address) : "",
            pub_key: isSet(object.pub_key) ? any_1.Any.fromJSON(object.pub_key) : undefined,
            voting_power: isSet(object.voting_power)
                ? String(object.voting_power)
                : "0",
            proposer_priority: isSet(object.proposer_priority)
                ? String(object.proposer_priority)
                : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.pub_key !== undefined &&
            (obj.pub_key = message.pub_key ? any_1.Any.toJSON(message.pub_key) : undefined);
        message.voting_power !== undefined &&
            (obj.voting_power = message.voting_power);
        message.proposer_priority !== undefined &&
            (obj.proposer_priority = message.proposer_priority);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseValidator();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.pub_key =
            object.pub_key !== undefined && object.pub_key !== null
                ? any_1.Any.fromPartial(object.pub_key)
                : undefined;
        message.voting_power = (_b = object.voting_power) !== null && _b !== void 0 ? _b : "0";
        message.proposer_priority = (_c = object.proposer_priority) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseGetBlockByHeightRequest() {
    return { height: "0" };
}
exports.GetBlockByHeightRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockByHeightRequest();
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
        const message = createBaseGetBlockByHeightRequest();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseGetBlockByHeightResponse() {
    return { block_id: undefined, block: undefined };
}
exports.GetBlockByHeightResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.block_id !== undefined) {
            types_1.BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetBlockByHeightResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id = types_1.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
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
            block_id: isSet(object.block_id)
                ? types_1.BlockID.fromJSON(object.block_id)
                : undefined,
            block: isSet(object.block) ? block_1.Block.fromJSON(object.block) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_id !== undefined &&
            (obj.block_id = message.block_id
                ? types_1.BlockID.toJSON(message.block_id)
                : undefined);
        message.block !== undefined &&
            (obj.block = message.block ? block_1.Block.toJSON(message.block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetBlockByHeightResponse();
        message.block_id =
            object.block_id !== undefined && object.block_id !== null
                ? types_1.BlockID.fromPartial(object.block_id)
                : undefined;
        message.block =
            object.block !== undefined && object.block !== null
                ? block_1.Block.fromPartial(object.block)
                : undefined;
        return message;
    },
};
function createBaseGetLatestBlockRequest() {
    return {};
}
exports.GetLatestBlockRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestBlockRequest();
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
        const message = createBaseGetLatestBlockRequest();
        return message;
    },
};
function createBaseGetLatestBlockResponse() {
    return { block_id: undefined, block: undefined };
}
exports.GetLatestBlockResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.block_id !== undefined) {
            types_1.BlockID.encode(message.block_id, writer.uint32(10).fork()).ldelim();
        }
        if (message.block !== undefined) {
            block_1.Block.encode(message.block, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetLatestBlockResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_id = types_1.BlockID.decode(reader, reader.uint32());
                    break;
                case 2:
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
            block_id: isSet(object.block_id)
                ? types_1.BlockID.fromJSON(object.block_id)
                : undefined,
            block: isSet(object.block) ? block_1.Block.fromJSON(object.block) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_id !== undefined &&
            (obj.block_id = message.block_id
                ? types_1.BlockID.toJSON(message.block_id)
                : undefined);
        message.block !== undefined &&
            (obj.block = message.block ? block_1.Block.toJSON(message.block) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetLatestBlockResponse();
        message.block_id =
            object.block_id !== undefined && object.block_id !== null
                ? types_1.BlockID.fromPartial(object.block_id)
                : undefined;
        message.block =
            object.block !== undefined && object.block !== null
                ? block_1.Block.fromPartial(object.block)
                : undefined;
        return message;
    },
};
function createBaseGetSyncingRequest() {
    return {};
}
exports.GetSyncingRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSyncingRequest();
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
        const message = createBaseGetSyncingRequest();
        return message;
    },
};
function createBaseGetSyncingResponse() {
    return { syncing: false };
}
exports.GetSyncingResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.syncing === true) {
            writer.uint32(8).bool(message.syncing);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetSyncingResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.syncing = reader.bool();
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
            syncing: isSet(object.syncing) ? Boolean(object.syncing) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.syncing !== undefined && (obj.syncing = message.syncing);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetSyncingResponse();
        message.syncing = (_a = object.syncing) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseGetNodeInfoRequest() {
    return {};
}
exports.GetNodeInfoRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNodeInfoRequest();
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
        const message = createBaseGetNodeInfoRequest();
        return message;
    },
};
function createBaseGetNodeInfoResponse() {
    return { default_node_info: undefined, application_version: undefined };
}
exports.GetNodeInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.default_node_info !== undefined) {
            types_2.DefaultNodeInfo.encode(message.default_node_info, writer.uint32(10).fork()).ldelim();
        }
        if (message.application_version !== undefined) {
            exports.VersionInfo.encode(message.application_version, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNodeInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.default_node_info = types_2.DefaultNodeInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.application_version = exports.VersionInfo.decode(reader, reader.uint32());
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
            default_node_info: isSet(object.default_node_info)
                ? types_2.DefaultNodeInfo.fromJSON(object.default_node_info)
                : undefined,
            application_version: isSet(object.application_version)
                ? exports.VersionInfo.fromJSON(object.application_version)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.default_node_info !== undefined &&
            (obj.default_node_info = message.default_node_info
                ? types_2.DefaultNodeInfo.toJSON(message.default_node_info)
                : undefined);
        message.application_version !== undefined &&
            (obj.application_version = message.application_version
                ? exports.VersionInfo.toJSON(message.application_version)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGetNodeInfoResponse();
        message.default_node_info =
            object.default_node_info !== undefined &&
                object.default_node_info !== null
                ? types_2.DefaultNodeInfo.fromPartial(object.default_node_info)
                : undefined;
        message.application_version =
            object.application_version !== undefined &&
                object.application_version !== null
                ? exports.VersionInfo.fromPartial(object.application_version)
                : undefined;
        return message;
    },
};
function createBaseVersionInfo() {
    return {
        name: "",
        app_name: "",
        version: "",
        git_commit: "",
        build_tags: "",
        go_version: "",
        build_deps: [],
        cosmos_sdk_version: "",
    };
}
exports.VersionInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.app_name !== "") {
            writer.uint32(18).string(message.app_name);
        }
        if (message.version !== "") {
            writer.uint32(26).string(message.version);
        }
        if (message.git_commit !== "") {
            writer.uint32(34).string(message.git_commit);
        }
        if (message.build_tags !== "") {
            writer.uint32(42).string(message.build_tags);
        }
        if (message.go_version !== "") {
            writer.uint32(50).string(message.go_version);
        }
        for (const v of message.build_deps) {
            exports.Module.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.cosmos_sdk_version !== "") {
            writer.uint32(66).string(message.cosmos_sdk_version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.app_name = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                case 4:
                    message.git_commit = reader.string();
                    break;
                case 5:
                    message.build_tags = reader.string();
                    break;
                case 6:
                    message.go_version = reader.string();
                    break;
                case 7:
                    message.build_deps.push(exports.Module.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.cosmos_sdk_version = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
            app_name: isSet(object.app_name) ? String(object.app_name) : "",
            version: isSet(object.version) ? String(object.version) : "",
            git_commit: isSet(object.git_commit) ? String(object.git_commit) : "",
            build_tags: isSet(object.build_tags) ? String(object.build_tags) : "",
            go_version: isSet(object.go_version) ? String(object.go_version) : "",
            build_deps: Array.isArray(object === null || object === void 0 ? void 0 : object.build_deps)
                ? object.build_deps.map((e) => exports.Module.fromJSON(e))
                : [],
            cosmos_sdk_version: isSet(object.cosmos_sdk_version)
                ? String(object.cosmos_sdk_version)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.app_name !== undefined && (obj.app_name = message.app_name);
        message.version !== undefined && (obj.version = message.version);
        message.git_commit !== undefined && (obj.git_commit = message.git_commit);
        message.build_tags !== undefined && (obj.build_tags = message.build_tags);
        message.go_version !== undefined && (obj.go_version = message.go_version);
        if (message.build_deps) {
            obj.build_deps = message.build_deps.map((e) => e ? exports.Module.toJSON(e) : undefined);
        }
        else {
            obj.build_deps = [];
        }
        message.cosmos_sdk_version !== undefined &&
            (obj.cosmos_sdk_version = message.cosmos_sdk_version);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseVersionInfo();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.app_name = (_b = object.app_name) !== null && _b !== void 0 ? _b : "";
        message.version = (_c = object.version) !== null && _c !== void 0 ? _c : "";
        message.git_commit = (_d = object.git_commit) !== null && _d !== void 0 ? _d : "";
        message.build_tags = (_e = object.build_tags) !== null && _e !== void 0 ? _e : "";
        message.go_version = (_f = object.go_version) !== null && _f !== void 0 ? _f : "";
        message.build_deps =
            ((_g = object.build_deps) === null || _g === void 0 ? void 0 : _g.map((e) => exports.Module.fromPartial(e))) || [];
        message.cosmos_sdk_version = (_h = object.cosmos_sdk_version) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseModule() {
    return { path: "", version: "", sum: "" };
}
exports.Module = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path !== "") {
            writer.uint32(10).string(message.path);
        }
        if (message.version !== "") {
            writer.uint32(18).string(message.version);
        }
        if (message.sum !== "") {
            writer.uint32(26).string(message.sum);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModule();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.string();
                    break;
                case 2:
                    message.version = reader.string();
                    break;
                case 3:
                    message.sum = reader.string();
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
            path: isSet(object.path) ? String(object.path) : "",
            version: isSet(object.version) ? String(object.version) : "",
            sum: isSet(object.sum) ? String(object.sum) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined && (obj.path = message.path);
        message.version !== undefined && (obj.version = message.version);
        message.sum !== undefined && (obj.sum = message.sum);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseModule();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : "";
        message.version = (_b = object.version) !== null && _b !== void 0 ? _b : "";
        message.sum = (_c = object.sum) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
class ServiceClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.GetNodeInfo = this.GetNodeInfo.bind(this);
        this.GetSyncing = this.GetSyncing.bind(this);
        this.GetLatestBlock = this.GetLatestBlock.bind(this);
        this.GetBlockByHeight = this.GetBlockByHeight.bind(this);
        this.GetLatestValidatorSet = this.GetLatestValidatorSet.bind(this);
        this.GetValidatorSetByHeight = this.GetValidatorSetByHeight.bind(this);
    }
    GetNodeInfo(request) {
        const data = exports.GetNodeInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetNodeInfo", data);
        return promise.then((data) => exports.GetNodeInfoResponse.decode(new _m0.Reader(data)));
    }
    GetSyncing(request) {
        const data = exports.GetSyncingRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetSyncing", data);
        return promise.then((data) => exports.GetSyncingResponse.decode(new _m0.Reader(data)));
    }
    GetLatestBlock(request) {
        const data = exports.GetLatestBlockRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestBlock", data);
        return promise.then((data) => exports.GetLatestBlockResponse.decode(new _m0.Reader(data)));
    }
    GetBlockByHeight(request) {
        const data = exports.GetBlockByHeightRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetBlockByHeight", data);
        return promise.then((data) => exports.GetBlockByHeightResponse.decode(new _m0.Reader(data)));
    }
    GetLatestValidatorSet(request) {
        const data = exports.GetLatestValidatorSetRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetLatestValidatorSet", data);
        return promise.then((data) => exports.GetLatestValidatorSetResponse.decode(new _m0.Reader(data)));
    }
    GetValidatorSetByHeight(request) {
        const data = exports.GetValidatorSetByHeightRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.base.tendermint.v1beta1.Service", "GetValidatorSetByHeight", data);
        return promise.then((data) => exports.GetValidatorSetByHeightResponse.decode(new _m0.Reader(data)));
    }
}
exports.ServiceClientImpl = ServiceClientImpl;
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
//# sourceMappingURL=query.js.map