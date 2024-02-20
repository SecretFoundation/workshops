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
exports.MissedBlock = exports.ValidatorMissedBlocks = exports.SigningInfo = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const slashing_1 = require("./slashing");
exports.protobufPackage = "cosmos.slashing.v1beta1";
function createBaseGenesisState() {
    return { params: undefined, signing_infos: [], missed_blocks: [] };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            slashing_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.signing_infos) {
            exports.SigningInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.missed_blocks) {
            exports.ValidatorMissedBlocks.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = slashing_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.signing_infos.push(exports.SigningInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.missed_blocks.push(exports.ValidatorMissedBlocks.decode(reader, reader.uint32()));
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
            signing_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.signing_infos)
                ? object.signing_infos.map((e) => exports.SigningInfo.fromJSON(e))
                : [],
            missed_blocks: Array.isArray(object === null || object === void 0 ? void 0 : object.missed_blocks)
                ? object.missed_blocks.map((e) => exports.ValidatorMissedBlocks.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? slashing_1.Params.toJSON(message.params) : undefined);
        if (message.signing_infos) {
            obj.signing_infos = message.signing_infos.map((e) => e ? exports.SigningInfo.toJSON(e) : undefined);
        }
        else {
            obj.signing_infos = [];
        }
        if (message.missed_blocks) {
            obj.missed_blocks = message.missed_blocks.map((e) => e ? exports.ValidatorMissedBlocks.toJSON(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? slashing_1.Params.fromPartial(object.params)
                : undefined;
        message.signing_infos =
            ((_a = object.signing_infos) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SigningInfo.fromPartial(e))) || [];
        message.missed_blocks =
            ((_b = object.missed_blocks) === null || _b === void 0 ? void 0 : _b.map((e) => exports.ValidatorMissedBlocks.fromPartial(e))) ||
                [];
        return message;
    },
};
function createBaseSigningInfo() {
    return { address: "", validator_signing_info: undefined };
}
exports.SigningInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.validator_signing_info !== undefined) {
            slashing_1.ValidatorSigningInfo.encode(message.validator_signing_info, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSigningInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.validator_signing_info = slashing_1.ValidatorSigningInfo.decode(reader, reader.uint32());
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
            validator_signing_info: isSet(object.validator_signing_info)
                ? slashing_1.ValidatorSigningInfo.fromJSON(object.validator_signing_info)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.validator_signing_info !== undefined &&
            (obj.validator_signing_info = message.validator_signing_info
                ? slashing_1.ValidatorSigningInfo.toJSON(message.validator_signing_info)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSigningInfo();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.validator_signing_info =
            object.validator_signing_info !== undefined &&
                object.validator_signing_info !== null
                ? slashing_1.ValidatorSigningInfo.fromPartial(object.validator_signing_info)
                : undefined;
        return message;
    },
};
function createBaseValidatorMissedBlocks() {
    return { address: "", missed_blocks: [] };
}
exports.ValidatorMissedBlocks = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (const v of message.missed_blocks) {
            exports.MissedBlock.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorMissedBlocks();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.missed_blocks.push(exports.MissedBlock.decode(reader, reader.uint32()));
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
            missed_blocks: Array.isArray(object === null || object === void 0 ? void 0 : object.missed_blocks)
                ? object.missed_blocks.map((e) => exports.MissedBlock.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.missed_blocks) {
            obj.missed_blocks = message.missed_blocks.map((e) => e ? exports.MissedBlock.toJSON(e) : undefined);
        }
        else {
            obj.missed_blocks = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseValidatorMissedBlocks();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.missed_blocks =
            ((_b = object.missed_blocks) === null || _b === void 0 ? void 0 : _b.map((e) => exports.MissedBlock.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMissedBlock() {
    return { index: "0", missed: false };
}
exports.MissedBlock = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.index !== "0") {
            writer.uint32(8).int64(message.index);
        }
        if (message.missed === true) {
            writer.uint32(16).bool(message.missed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMissedBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = longToString(reader.int64());
                    break;
                case 2:
                    message.missed = reader.bool();
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
            index: isSet(object.index) ? String(object.index) : "0",
            missed: isSet(object.missed) ? Boolean(object.missed) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.missed !== undefined && (obj.missed = message.missed);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMissedBlock();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.missed = (_b = object.missed) !== null && _b !== void 0 ? _b : false;
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
//# sourceMappingURL=genesis.js.map