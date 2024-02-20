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
exports.EvidenceList = exports.LightClientAttackEvidence = exports.DuplicateVoteEvidence = exports.Evidence = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("./types");
const timestamp_1 = require("../../google/protobuf/timestamp");
const validator_1 = require("./validator");
exports.protobufPackage = "tendermint.types";
function createBaseEvidence() {
    return {
        duplicate_vote_evidence: undefined,
        light_client_attack_evidence: undefined,
    };
}
exports.Evidence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.duplicate_vote_evidence !== undefined) {
            exports.DuplicateVoteEvidence.encode(message.duplicate_vote_evidence, writer.uint32(10).fork()).ldelim();
        }
        if (message.light_client_attack_evidence !== undefined) {
            exports.LightClientAttackEvidence.encode(message.light_client_attack_evidence, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.duplicate_vote_evidence = exports.DuplicateVoteEvidence.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.light_client_attack_evidence =
                        exports.LightClientAttackEvidence.decode(reader, reader.uint32());
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
            duplicate_vote_evidence: isSet(object.duplicate_vote_evidence)
                ? exports.DuplicateVoteEvidence.fromJSON(object.duplicate_vote_evidence)
                : undefined,
            light_client_attack_evidence: isSet(object.light_client_attack_evidence)
                ? exports.LightClientAttackEvidence.fromJSON(object.light_client_attack_evidence)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.duplicate_vote_evidence !== undefined &&
            (obj.duplicate_vote_evidence = message.duplicate_vote_evidence
                ? exports.DuplicateVoteEvidence.toJSON(message.duplicate_vote_evidence)
                : undefined);
        message.light_client_attack_evidence !== undefined &&
            (obj.light_client_attack_evidence = message.light_client_attack_evidence
                ? exports.LightClientAttackEvidence.toJSON(message.light_client_attack_evidence)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseEvidence();
        message.duplicate_vote_evidence =
            object.duplicate_vote_evidence !== undefined &&
                object.duplicate_vote_evidence !== null
                ? exports.DuplicateVoteEvidence.fromPartial(object.duplicate_vote_evidence)
                : undefined;
        message.light_client_attack_evidence =
            object.light_client_attack_evidence !== undefined &&
                object.light_client_attack_evidence !== null
                ? exports.LightClientAttackEvidence.fromPartial(object.light_client_attack_evidence)
                : undefined;
        return message;
    },
};
function createBaseDuplicateVoteEvidence() {
    return {
        vote_a: undefined,
        vote_b: undefined,
        total_voting_power: "0",
        validator_power: "0",
        timestamp: undefined,
    };
}
exports.DuplicateVoteEvidence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vote_a !== undefined) {
            types_1.Vote.encode(message.vote_a, writer.uint32(10).fork()).ldelim();
        }
        if (message.vote_b !== undefined) {
            types_1.Vote.encode(message.vote_b, writer.uint32(18).fork()).ldelim();
        }
        if (message.total_voting_power !== "0") {
            writer.uint32(24).int64(message.total_voting_power);
        }
        if (message.validator_power !== "0") {
            writer.uint32(32).int64(message.validator_power);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDuplicateVoteEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote_a = types_1.Vote.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.vote_b = types_1.Vote.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.total_voting_power = longToString(reader.int64());
                    break;
                case 4:
                    message.validator_power = longToString(reader.int64());
                    break;
                case 5:
                    message.timestamp = timestamp_1.Timestamp.decode(reader, reader.uint32());
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
            vote_a: isSet(object.vote_a) ? types_1.Vote.fromJSON(object.vote_a) : undefined,
            vote_b: isSet(object.vote_b) ? types_1.Vote.fromJSON(object.vote_b) : undefined,
            total_voting_power: isSet(object.total_voting_power)
                ? String(object.total_voting_power)
                : "0",
            validator_power: isSet(object.validator_power)
                ? String(object.validator_power)
                : "0",
            timestamp: isSet(object.timestamp)
                ? fromJsonTimestamp(object.timestamp)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote_a !== undefined &&
            (obj.vote_a = message.vote_a ? types_1.Vote.toJSON(message.vote_a) : undefined);
        message.vote_b !== undefined &&
            (obj.vote_b = message.vote_b ? types_1.Vote.toJSON(message.vote_b) : undefined);
        message.total_voting_power !== undefined &&
            (obj.total_voting_power = message.total_voting_power);
        message.validator_power !== undefined &&
            (obj.validator_power = message.validator_power);
        message.timestamp !== undefined &&
            (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDuplicateVoteEvidence();
        message.vote_a =
            object.vote_a !== undefined && object.vote_a !== null
                ? types_1.Vote.fromPartial(object.vote_a)
                : undefined;
        message.vote_b =
            object.vote_b !== undefined && object.vote_b !== null
                ? types_1.Vote.fromPartial(object.vote_b)
                : undefined;
        message.total_voting_power = (_a = object.total_voting_power) !== null && _a !== void 0 ? _a : "0";
        message.validator_power = (_b = object.validator_power) !== null && _b !== void 0 ? _b : "0";
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? timestamp_1.Timestamp.fromPartial(object.timestamp)
                : undefined;
        return message;
    },
};
function createBaseLightClientAttackEvidence() {
    return {
        conflicting_block: undefined,
        common_height: "0",
        byzantine_validators: [],
        total_voting_power: "0",
        timestamp: undefined,
    };
}
exports.LightClientAttackEvidence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.conflicting_block !== undefined) {
            types_1.LightBlock.encode(message.conflicting_block, writer.uint32(10).fork()).ldelim();
        }
        if (message.common_height !== "0") {
            writer.uint32(16).int64(message.common_height);
        }
        for (const v of message.byzantine_validators) {
            validator_1.Validator.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.total_voting_power !== "0") {
            writer.uint32(32).int64(message.total_voting_power);
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLightClientAttackEvidence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.conflicting_block = types_1.LightBlock.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.common_height = longToString(reader.int64());
                    break;
                case 3:
                    message.byzantine_validators.push(validator_1.Validator.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.total_voting_power = longToString(reader.int64());
                    break;
                case 5:
                    message.timestamp = timestamp_1.Timestamp.decode(reader, reader.uint32());
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
            conflicting_block: isSet(object.conflicting_block)
                ? types_1.LightBlock.fromJSON(object.conflicting_block)
                : undefined,
            common_height: isSet(object.common_height)
                ? String(object.common_height)
                : "0",
            byzantine_validators: Array.isArray(object === null || object === void 0 ? void 0 : object.byzantine_validators)
                ? object.byzantine_validators.map((e) => validator_1.Validator.fromJSON(e))
                : [],
            total_voting_power: isSet(object.total_voting_power)
                ? String(object.total_voting_power)
                : "0",
            timestamp: isSet(object.timestamp)
                ? fromJsonTimestamp(object.timestamp)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.conflicting_block !== undefined &&
            (obj.conflicting_block = message.conflicting_block
                ? types_1.LightBlock.toJSON(message.conflicting_block)
                : undefined);
        message.common_height !== undefined &&
            (obj.common_height = message.common_height);
        if (message.byzantine_validators) {
            obj.byzantine_validators = message.byzantine_validators.map((e) => e ? validator_1.Validator.toJSON(e) : undefined);
        }
        else {
            obj.byzantine_validators = [];
        }
        message.total_voting_power !== undefined &&
            (obj.total_voting_power = message.total_voting_power);
        message.timestamp !== undefined &&
            (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseLightClientAttackEvidence();
        message.conflicting_block =
            object.conflicting_block !== undefined &&
                object.conflicting_block !== null
                ? types_1.LightBlock.fromPartial(object.conflicting_block)
                : undefined;
        message.common_height = (_a = object.common_height) !== null && _a !== void 0 ? _a : "0";
        message.byzantine_validators =
            ((_b = object.byzantine_validators) === null || _b === void 0 ? void 0 : _b.map((e) => validator_1.Validator.fromPartial(e))) || [];
        message.total_voting_power = (_c = object.total_voting_power) !== null && _c !== void 0 ? _c : "0";
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? timestamp_1.Timestamp.fromPartial(object.timestamp)
                : undefined;
        return message;
    },
};
function createBaseEvidenceList() {
    return { evidence: [] };
}
exports.EvidenceList = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.evidence) {
            exports.Evidence.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEvidenceList();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence.push(exports.Evidence.decode(reader, reader.uint32()));
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
            evidence: Array.isArray(object === null || object === void 0 ? void 0 : object.evidence)
                ? object.evidence.map((e) => exports.Evidence.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map((e) => e ? exports.Evidence.toJSON(e) : undefined);
        }
        else {
            obj.evidence = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEvidenceList();
        message.evidence =
            ((_a = object.evidence) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Evidence.fromPartial(e))) || [];
        return message;
    },
};
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
//# sourceMappingURL=evidence.js.map