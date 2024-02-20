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
exports.State = exports.Version = exports.ConsensusParamsInfo = exports.ValidatorsInfo = exports.ABCIResponses = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("../abci/types");
const validator_1 = require("../types/validator");
const params_1 = require("../types/params");
const types_2 = require("../version/types");
const types_3 = require("../types/types");
const timestamp_1 = require("../../google/protobuf/timestamp");
exports.protobufPackage = "tendermint.state";
function createBaseABCIResponses() {
    return { deliver_txs: [], end_block: undefined, begin_block: undefined };
}
exports.ABCIResponses = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.deliver_txs) {
            types_1.ResponseDeliverTx.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.end_block !== undefined) {
            types_1.ResponseEndBlock.encode(message.end_block, writer.uint32(18).fork()).ldelim();
        }
        if (message.begin_block !== undefined) {
            types_1.ResponseBeginBlock.encode(message.begin_block, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseABCIResponses();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deliver_txs.push(types_1.ResponseDeliverTx.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.end_block = types_1.ResponseEndBlock.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.begin_block = types_1.ResponseBeginBlock.decode(reader, reader.uint32());
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
            deliver_txs: Array.isArray(object === null || object === void 0 ? void 0 : object.deliver_txs)
                ? object.deliver_txs.map((e) => types_1.ResponseDeliverTx.fromJSON(e))
                : [],
            end_block: isSet(object.end_block)
                ? types_1.ResponseEndBlock.fromJSON(object.end_block)
                : undefined,
            begin_block: isSet(object.begin_block)
                ? types_1.ResponseBeginBlock.fromJSON(object.begin_block)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.deliver_txs) {
            obj.deliver_txs = message.deliver_txs.map((e) => e ? types_1.ResponseDeliverTx.toJSON(e) : undefined);
        }
        else {
            obj.deliver_txs = [];
        }
        message.end_block !== undefined &&
            (obj.end_block = message.end_block
                ? types_1.ResponseEndBlock.toJSON(message.end_block)
                : undefined);
        message.begin_block !== undefined &&
            (obj.begin_block = message.begin_block
                ? types_1.ResponseBeginBlock.toJSON(message.begin_block)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseABCIResponses();
        message.deliver_txs =
            ((_a = object.deliver_txs) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.ResponseDeliverTx.fromPartial(e))) || [];
        message.end_block =
            object.end_block !== undefined && object.end_block !== null
                ? types_1.ResponseEndBlock.fromPartial(object.end_block)
                : undefined;
        message.begin_block =
            object.begin_block !== undefined && object.begin_block !== null
                ? types_1.ResponseBeginBlock.fromPartial(object.begin_block)
                : undefined;
        return message;
    },
};
function createBaseValidatorsInfo() {
    return { validator_set: undefined, last_height_changed: "0" };
}
exports.ValidatorsInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_set !== undefined) {
            validator_1.ValidatorSet.encode(message.validator_set, writer.uint32(10).fork()).ldelim();
        }
        if (message.last_height_changed !== "0") {
            writer.uint32(16).int64(message.last_height_changed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorsInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_set = validator_1.ValidatorSet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.last_height_changed = longToString(reader.int64());
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
            validator_set: isSet(object.validator_set)
                ? validator_1.ValidatorSet.fromJSON(object.validator_set)
                : undefined,
            last_height_changed: isSet(object.last_height_changed)
                ? String(object.last_height_changed)
                : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_set !== undefined &&
            (obj.validator_set = message.validator_set
                ? validator_1.ValidatorSet.toJSON(message.validator_set)
                : undefined);
        message.last_height_changed !== undefined &&
            (obj.last_height_changed = message.last_height_changed);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorsInfo();
        message.validator_set =
            object.validator_set !== undefined && object.validator_set !== null
                ? validator_1.ValidatorSet.fromPartial(object.validator_set)
                : undefined;
        message.last_height_changed = (_a = object.last_height_changed) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseConsensusParamsInfo() {
    return { consensus_params: undefined, last_height_changed: "0" };
}
exports.ConsensusParamsInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.consensus_params !== undefined) {
            params_1.ConsensusParams.encode(message.consensus_params, writer.uint32(10).fork()).ldelim();
        }
        if (message.last_height_changed !== "0") {
            writer.uint32(16).int64(message.last_height_changed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusParamsInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_params = params_1.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.last_height_changed = longToString(reader.int64());
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
            consensus_params: isSet(object.consensus_params)
                ? params_1.ConsensusParams.fromJSON(object.consensus_params)
                : undefined,
            last_height_changed: isSet(object.last_height_changed)
                ? String(object.last_height_changed)
                : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensus_params !== undefined &&
            (obj.consensus_params = message.consensus_params
                ? params_1.ConsensusParams.toJSON(message.consensus_params)
                : undefined);
        message.last_height_changed !== undefined &&
            (obj.last_height_changed = message.last_height_changed);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseConsensusParamsInfo();
        message.consensus_params =
            object.consensus_params !== undefined && object.consensus_params !== null
                ? params_1.ConsensusParams.fromPartial(object.consensus_params)
                : undefined;
        message.last_height_changed = (_a = object.last_height_changed) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseVersion() {
    return { consensus: undefined, software: "" };
}
exports.Version = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.consensus !== undefined) {
            types_2.Consensus.encode(message.consensus, writer.uint32(10).fork()).ldelim();
        }
        if (message.software !== "") {
            writer.uint32(18).string(message.software);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus = types_2.Consensus.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.software = reader.string();
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
            consensus: isSet(object.consensus)
                ? types_2.Consensus.fromJSON(object.consensus)
                : undefined,
            software: isSet(object.software) ? String(object.software) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensus !== undefined &&
            (obj.consensus = message.consensus
                ? types_2.Consensus.toJSON(message.consensus)
                : undefined);
        message.software !== undefined && (obj.software = message.software);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseVersion();
        message.consensus =
            object.consensus !== undefined && object.consensus !== null
                ? types_2.Consensus.fromPartial(object.consensus)
                : undefined;
        message.software = (_a = object.software) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseState() {
    return {
        version: undefined,
        chain_id: "",
        initial_height: "0",
        last_block_height: "0",
        last_block_id: undefined,
        last_block_time: undefined,
        next_validators: undefined,
        validators: undefined,
        last_validators: undefined,
        last_height_validators_changed: "0",
        consensus_params: undefined,
        last_height_consensus_params_changed: "0",
        last_results_hash: new Uint8Array(),
        app_hash: new Uint8Array(),
    };
}
exports.State = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.version !== undefined) {
            exports.Version.encode(message.version, writer.uint32(10).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(18).string(message.chain_id);
        }
        if (message.initial_height !== "0") {
            writer.uint32(112).int64(message.initial_height);
        }
        if (message.last_block_height !== "0") {
            writer.uint32(24).int64(message.last_block_height);
        }
        if (message.last_block_id !== undefined) {
            types_3.BlockID.encode(message.last_block_id, writer.uint32(34).fork()).ldelim();
        }
        if (message.last_block_time !== undefined) {
            timestamp_1.Timestamp.encode(message.last_block_time, writer.uint32(42).fork()).ldelim();
        }
        if (message.next_validators !== undefined) {
            validator_1.ValidatorSet.encode(message.next_validators, writer.uint32(50).fork()).ldelim();
        }
        if (message.validators !== undefined) {
            validator_1.ValidatorSet.encode(message.validators, writer.uint32(58).fork()).ldelim();
        }
        if (message.last_validators !== undefined) {
            validator_1.ValidatorSet.encode(message.last_validators, writer.uint32(66).fork()).ldelim();
        }
        if (message.last_height_validators_changed !== "0") {
            writer.uint32(72).int64(message.last_height_validators_changed);
        }
        if (message.consensus_params !== undefined) {
            params_1.ConsensusParams.encode(message.consensus_params, writer.uint32(82).fork()).ldelim();
        }
        if (message.last_height_consensus_params_changed !== "0") {
            writer.uint32(88).int64(message.last_height_consensus_params_changed);
        }
        if (message.last_results_hash.length !== 0) {
            writer.uint32(98).bytes(message.last_results_hash);
        }
        if (message.app_hash.length !== 0) {
            writer.uint32(106).bytes(message.app_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = exports.Version.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chain_id = reader.string();
                    break;
                case 14:
                    message.initial_height = longToString(reader.int64());
                    break;
                case 3:
                    message.last_block_height = longToString(reader.int64());
                    break;
                case 4:
                    message.last_block_id = types_3.BlockID.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.last_block_time = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.next_validators = validator_1.ValidatorSet.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.validators = validator_1.ValidatorSet.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.last_validators = validator_1.ValidatorSet.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.last_height_validators_changed = longToString(reader.int64());
                    break;
                case 10:
                    message.consensus_params = params_1.ConsensusParams.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.last_height_consensus_params_changed = longToString(reader.int64());
                    break;
                case 12:
                    message.last_results_hash = reader.bytes();
                    break;
                case 13:
                    message.app_hash = reader.bytes();
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
            version: isSet(object.version)
                ? exports.Version.fromJSON(object.version)
                : undefined,
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            initial_height: isSet(object.initial_height)
                ? String(object.initial_height)
                : "0",
            last_block_height: isSet(object.last_block_height)
                ? String(object.last_block_height)
                : "0",
            last_block_id: isSet(object.last_block_id)
                ? types_3.BlockID.fromJSON(object.last_block_id)
                : undefined,
            last_block_time: isSet(object.last_block_time)
                ? fromJsonTimestamp(object.last_block_time)
                : undefined,
            next_validators: isSet(object.next_validators)
                ? validator_1.ValidatorSet.fromJSON(object.next_validators)
                : undefined,
            validators: isSet(object.validators)
                ? validator_1.ValidatorSet.fromJSON(object.validators)
                : undefined,
            last_validators: isSet(object.last_validators)
                ? validator_1.ValidatorSet.fromJSON(object.last_validators)
                : undefined,
            last_height_validators_changed: isSet(object.last_height_validators_changed)
                ? String(object.last_height_validators_changed)
                : "0",
            consensus_params: isSet(object.consensus_params)
                ? params_1.ConsensusParams.fromJSON(object.consensus_params)
                : undefined,
            last_height_consensus_params_changed: isSet(object.last_height_consensus_params_changed)
                ? String(object.last_height_consensus_params_changed)
                : "0",
            last_results_hash: isSet(object.last_results_hash)
                ? bytesFromBase64(object.last_results_hash)
                : new Uint8Array(),
            app_hash: isSet(object.app_hash)
                ? bytesFromBase64(object.app_hash)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined &&
            (obj.version = message.version
                ? exports.Version.toJSON(message.version)
                : undefined);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.initial_height !== undefined &&
            (obj.initial_height = message.initial_height);
        message.last_block_height !== undefined &&
            (obj.last_block_height = message.last_block_height);
        message.last_block_id !== undefined &&
            (obj.last_block_id = message.last_block_id
                ? types_3.BlockID.toJSON(message.last_block_id)
                : undefined);
        message.last_block_time !== undefined &&
            (obj.last_block_time = fromTimestamp(message.last_block_time).toISOString());
        message.next_validators !== undefined &&
            (obj.next_validators = message.next_validators
                ? validator_1.ValidatorSet.toJSON(message.next_validators)
                : undefined);
        message.validators !== undefined &&
            (obj.validators = message.validators
                ? validator_1.ValidatorSet.toJSON(message.validators)
                : undefined);
        message.last_validators !== undefined &&
            (obj.last_validators = message.last_validators
                ? validator_1.ValidatorSet.toJSON(message.last_validators)
                : undefined);
        message.last_height_validators_changed !== undefined &&
            (obj.last_height_validators_changed =
                message.last_height_validators_changed);
        message.consensus_params !== undefined &&
            (obj.consensus_params = message.consensus_params
                ? params_1.ConsensusParams.toJSON(message.consensus_params)
                : undefined);
        message.last_height_consensus_params_changed !== undefined &&
            (obj.last_height_consensus_params_changed =
                message.last_height_consensus_params_changed);
        message.last_results_hash !== undefined &&
            (obj.last_results_hash = base64FromBytes(message.last_results_hash !== undefined
                ? message.last_results_hash
                : new Uint8Array()));
        message.app_hash !== undefined &&
            (obj.app_hash = base64FromBytes(message.app_hash !== undefined ? message.app_hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseState();
        message.version =
            object.version !== undefined && object.version !== null
                ? exports.Version.fromPartial(object.version)
                : undefined;
        message.chain_id = (_a = object.chain_id) !== null && _a !== void 0 ? _a : "";
        message.initial_height = (_b = object.initial_height) !== null && _b !== void 0 ? _b : "0";
        message.last_block_height = (_c = object.last_block_height) !== null && _c !== void 0 ? _c : "0";
        message.last_block_id =
            object.last_block_id !== undefined && object.last_block_id !== null
                ? types_3.BlockID.fromPartial(object.last_block_id)
                : undefined;
        message.last_block_time =
            object.last_block_time !== undefined && object.last_block_time !== null
                ? timestamp_1.Timestamp.fromPartial(object.last_block_time)
                : undefined;
        message.next_validators =
            object.next_validators !== undefined && object.next_validators !== null
                ? validator_1.ValidatorSet.fromPartial(object.next_validators)
                : undefined;
        message.validators =
            object.validators !== undefined && object.validators !== null
                ? validator_1.ValidatorSet.fromPartial(object.validators)
                : undefined;
        message.last_validators =
            object.last_validators !== undefined && object.last_validators !== null
                ? validator_1.ValidatorSet.fromPartial(object.last_validators)
                : undefined;
        message.last_height_validators_changed =
            (_d = object.last_height_validators_changed) !== null && _d !== void 0 ? _d : "0";
        message.consensus_params =
            object.consensus_params !== undefined && object.consensus_params !== null
                ? params_1.ConsensusParams.fromPartial(object.consensus_params)
                : undefined;
        message.last_height_consensus_params_changed =
            (_e = object.last_height_consensus_params_changed) !== null && _e !== void 0 ? _e : "0";
        message.last_results_hash = (_f = object.last_results_hash) !== null && _f !== void 0 ? _f : new Uint8Array();
        message.app_hash = (_g = object.app_hash) !== null && _g !== void 0 ? _g : new Uint8Array();
        return message;
    },
};
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
function toTimestamp(date) {
    const seconds = Math.trunc(date.getTime() / 1000).toString();
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = Number(t.seconds) * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return toTimestamp(o);
    }
    else if (typeof o === "string") {
        return toTimestamp(new Date(o));
    }
    else {
        return timestamp_1.Timestamp.fromJSON(o);
    }
}
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