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
exports.HashedParams = exports.VersionParams = exports.ValidatorParams = exports.EvidenceParams = exports.BlockParams = exports.ConsensusParams = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const duration_1 = require("../../google/protobuf/duration");
exports.protobufPackage = "tendermint.types";
function createBaseConsensusParams() {
    return {
        block: undefined,
        evidence: undefined,
        validator: undefined,
        version: undefined,
    };
}
exports.ConsensusParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.block !== undefined) {
            exports.BlockParams.encode(message.block, writer.uint32(10).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            exports.EvidenceParams.encode(message.evidence, writer.uint32(18).fork()).ldelim();
        }
        if (message.validator !== undefined) {
            exports.ValidatorParams.encode(message.validator, writer.uint32(26).fork()).ldelim();
        }
        if (message.version !== undefined) {
            exports.VersionParams.encode(message.version, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block = exports.BlockParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.evidence = exports.EvidenceParams.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.validator = exports.ValidatorParams.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.version = exports.VersionParams.decode(reader, reader.uint32());
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
            block: isSet(object.block)
                ? exports.BlockParams.fromJSON(object.block)
                : undefined,
            evidence: isSet(object.evidence)
                ? exports.EvidenceParams.fromJSON(object.evidence)
                : undefined,
            validator: isSet(object.validator)
                ? exports.ValidatorParams.fromJSON(object.validator)
                : undefined,
            version: isSet(object.version)
                ? exports.VersionParams.fromJSON(object.version)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.block !== undefined &&
            (obj.block = message.block
                ? exports.BlockParams.toJSON(message.block)
                : undefined);
        message.evidence !== undefined &&
            (obj.evidence = message.evidence
                ? exports.EvidenceParams.toJSON(message.evidence)
                : undefined);
        message.validator !== undefined &&
            (obj.validator = message.validator
                ? exports.ValidatorParams.toJSON(message.validator)
                : undefined);
        message.version !== undefined &&
            (obj.version = message.version
                ? exports.VersionParams.toJSON(message.version)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusParams();
        message.block =
            object.block !== undefined && object.block !== null
                ? exports.BlockParams.fromPartial(object.block)
                : undefined;
        message.evidence =
            object.evidence !== undefined && object.evidence !== null
                ? exports.EvidenceParams.fromPartial(object.evidence)
                : undefined;
        message.validator =
            object.validator !== undefined && object.validator !== null
                ? exports.ValidatorParams.fromPartial(object.validator)
                : undefined;
        message.version =
            object.version !== undefined && object.version !== null
                ? exports.VersionParams.fromPartial(object.version)
                : undefined;
        return message;
    },
};
function createBaseBlockParams() {
    return { max_bytes: "0", max_gas: "0", time_iota_ms: "0" };
}
exports.BlockParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.max_bytes !== "0") {
            writer.uint32(8).int64(message.max_bytes);
        }
        if (message.max_gas !== "0") {
            writer.uint32(16).int64(message.max_gas);
        }
        if (message.time_iota_ms !== "0") {
            writer.uint32(24).int64(message.time_iota_ms);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_bytes = longToString(reader.int64());
                    break;
                case 2:
                    message.max_gas = longToString(reader.int64());
                    break;
                case 3:
                    message.time_iota_ms = longToString(reader.int64());
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
            max_bytes: isSet(object.max_bytes) ? String(object.max_bytes) : "0",
            max_gas: isSet(object.max_gas) ? String(object.max_gas) : "0",
            time_iota_ms: isSet(object.time_iota_ms)
                ? String(object.time_iota_ms)
                : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.max_bytes !== undefined && (obj.max_bytes = message.max_bytes);
        message.max_gas !== undefined && (obj.max_gas = message.max_gas);
        message.time_iota_ms !== undefined &&
            (obj.time_iota_ms = message.time_iota_ms);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseBlockParams();
        message.max_bytes = (_a = object.max_bytes) !== null && _a !== void 0 ? _a : "0";
        message.max_gas = (_b = object.max_gas) !== null && _b !== void 0 ? _b : "0";
        message.time_iota_ms = (_c = object.time_iota_ms) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseEvidenceParams() {
    return {
        max_age_num_blocks: "0",
        max_age_duration: undefined,
        max_bytes: "0",
    };
}
exports.EvidenceParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.max_age_num_blocks !== "0") {
            writer.uint32(8).int64(message.max_age_num_blocks);
        }
        if (message.max_age_duration !== undefined) {
            duration_1.Duration.encode(message.max_age_duration, writer.uint32(18).fork()).ldelim();
        }
        if (message.max_bytes !== "0") {
            writer.uint32(24).int64(message.max_bytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidenceParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_age_num_blocks = longToString(reader.int64());
                    break;
                case 2:
                    message.max_age_duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.max_bytes = longToString(reader.int64());
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
            max_age_num_blocks: isSet(object.max_age_num_blocks)
                ? String(object.max_age_num_blocks)
                : "0",
            max_age_duration: isSet(object.max_age_duration)
                ? duration_1.Duration.fromJSON(object.max_age_duration)
                : undefined,
            max_bytes: isSet(object.max_bytes) ? String(object.max_bytes) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.max_age_num_blocks !== undefined &&
            (obj.max_age_num_blocks = message.max_age_num_blocks);
        message.max_age_duration !== undefined &&
            (obj.max_age_duration = message.max_age_duration
                ? duration_1.Duration.toJSON(message.max_age_duration)
                : undefined);
        message.max_bytes !== undefined && (obj.max_bytes = message.max_bytes);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEvidenceParams();
        message.max_age_num_blocks = (_a = object.max_age_num_blocks) !== null && _a !== void 0 ? _a : "0";
        message.max_age_duration =
            object.max_age_duration !== undefined && object.max_age_duration !== null
                ? duration_1.Duration.fromPartial(object.max_age_duration)
                : undefined;
        message.max_bytes = (_b = object.max_bytes) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseValidatorParams() {
    return { pub_key_types: [] };
}
exports.ValidatorParams = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pub_key_types) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pub_key_types.push(reader.string());
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
            pub_key_types: Array.isArray(object === null || object === void 0 ? void 0 : object.pub_key_types)
                ? object.pub_key_types.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pub_key_types) {
            obj.pub_key_types = message.pub_key_types.map((e) => e);
        }
        else {
            obj.pub_key_types = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorParams();
        message.pub_key_types = ((_a = object.pub_key_types) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseVersionParams() {
    return { app_version: "0" };
}
exports.VersionParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.app_version !== "0") {
            writer.uint32(8).uint64(message.app_version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersionParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.app_version = longToString(reader.uint64());
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
            app_version: isSet(object.app_version) ? String(object.app_version) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.app_version !== undefined &&
            (obj.app_version = message.app_version);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseVersionParams();
        message.app_version = (_a = object.app_version) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseHashedParams() {
    return { block_max_bytes: "0", block_max_gas: "0" };
}
exports.HashedParams = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.block_max_bytes !== "0") {
            writer.uint32(8).int64(message.block_max_bytes);
        }
        if (message.block_max_gas !== "0") {
            writer.uint32(16).int64(message.block_max_gas);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHashedParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_max_bytes = longToString(reader.int64());
                    break;
                case 2:
                    message.block_max_gas = longToString(reader.int64());
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
            block_max_bytes: isSet(object.block_max_bytes)
                ? String(object.block_max_bytes)
                : "0",
            block_max_gas: isSet(object.block_max_gas)
                ? String(object.block_max_gas)
                : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_max_bytes !== undefined &&
            (obj.block_max_bytes = message.block_max_bytes);
        message.block_max_gas !== undefined &&
            (obj.block_max_gas = message.block_max_gas);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseHashedParams();
        message.block_max_bytes = (_a = object.block_max_bytes) !== null && _a !== void 0 ? _a : "0";
        message.block_max_gas = (_b = object.block_max_gas) !== null && _b !== void 0 ? _b : "0";
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
//# sourceMappingURL=params.js.map