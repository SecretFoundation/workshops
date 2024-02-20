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
exports.Message = exports.VoteSetBits = exports.VoteSetMaj23 = exports.HasVote = exports.Vote = exports.BlockPart = exports.ProposalPOL = exports.Proposal = exports.NewValidBlock = exports.NewRoundStep = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("../types/types");
const types_2 = require("../libs/bits/types");
exports.protobufPackage = "tendermint.consensus";
function createBaseNewRoundStep() {
    return {
        height: "0",
        round: 0,
        step: 0,
        seconds_since_start_time: "0",
        last_commit_round: 0,
    };
}
exports.NewRoundStep = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.step !== 0) {
            writer.uint32(24).uint32(message.step);
        }
        if (message.seconds_since_start_time !== "0") {
            writer.uint32(32).int64(message.seconds_since_start_time);
        }
        if (message.last_commit_round !== 0) {
            writer.uint32(40).int32(message.last_commit_round);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNewRoundStep();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.step = reader.uint32();
                    break;
                case 4:
                    message.seconds_since_start_time = longToString(reader.int64());
                    break;
                case 5:
                    message.last_commit_round = reader.int32();
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
            round: isSet(object.round) ? Number(object.round) : 0,
            step: isSet(object.step) ? Number(object.step) : 0,
            seconds_since_start_time: isSet(object.seconds_since_start_time)
                ? String(object.seconds_since_start_time)
                : "0",
            last_commit_round: isSet(object.last_commit_round)
                ? Number(object.last_commit_round)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.step !== undefined && (obj.step = Math.round(message.step));
        message.seconds_since_start_time !== undefined &&
            (obj.seconds_since_start_time = message.seconds_since_start_time);
        message.last_commit_round !== undefined &&
            (obj.last_commit_round = Math.round(message.last_commit_round));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseNewRoundStep();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.step = (_c = object.step) !== null && _c !== void 0 ? _c : 0;
        message.seconds_since_start_time = (_d = object.seconds_since_start_time) !== null && _d !== void 0 ? _d : "0";
        message.last_commit_round = (_e = object.last_commit_round) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseNewValidBlock() {
    return {
        height: "0",
        round: 0,
        block_part_set_header: undefined,
        block_parts: undefined,
        is_commit: false,
    };
}
exports.NewValidBlock = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.block_part_set_header !== undefined) {
            types_1.PartSetHeader.encode(message.block_part_set_header, writer.uint32(26).fork()).ldelim();
        }
        if (message.block_parts !== undefined) {
            types_2.BitArray.encode(message.block_parts, writer.uint32(34).fork()).ldelim();
        }
        if (message.is_commit === true) {
            writer.uint32(40).bool(message.is_commit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNewValidBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.block_part_set_header = types_1.PartSetHeader.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.block_parts = types_2.BitArray.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.is_commit = reader.bool();
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
            round: isSet(object.round) ? Number(object.round) : 0,
            block_part_set_header: isSet(object.block_part_set_header)
                ? types_1.PartSetHeader.fromJSON(object.block_part_set_header)
                : undefined,
            block_parts: isSet(object.block_parts)
                ? types_2.BitArray.fromJSON(object.block_parts)
                : undefined,
            is_commit: isSet(object.is_commit) ? Boolean(object.is_commit) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.block_part_set_header !== undefined &&
            (obj.block_part_set_header = message.block_part_set_header
                ? types_1.PartSetHeader.toJSON(message.block_part_set_header)
                : undefined);
        message.block_parts !== undefined &&
            (obj.block_parts = message.block_parts
                ? types_2.BitArray.toJSON(message.block_parts)
                : undefined);
        message.is_commit !== undefined && (obj.is_commit = message.is_commit);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseNewValidBlock();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.block_part_set_header =
            object.block_part_set_header !== undefined &&
                object.block_part_set_header !== null
                ? types_1.PartSetHeader.fromPartial(object.block_part_set_header)
                : undefined;
        message.block_parts =
            object.block_parts !== undefined && object.block_parts !== null
                ? types_2.BitArray.fromPartial(object.block_parts)
                : undefined;
        message.is_commit = (_c = object.is_commit) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseProposal() {
    return { proposal: undefined };
}
exports.Proposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposal !== undefined) {
            types_1.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = types_1.Proposal.decode(reader, reader.uint32());
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
            proposal: isSet(object.proposal)
                ? types_1.Proposal.fromJSON(object.proposal)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal !== undefined &&
            (obj.proposal = message.proposal
                ? types_1.Proposal.toJSON(message.proposal)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseProposal();
        message.proposal =
            object.proposal !== undefined && object.proposal !== null
                ? types_1.Proposal.fromPartial(object.proposal)
                : undefined;
        return message;
    },
};
function createBaseProposalPOL() {
    return { height: "0", proposal_pol_round: 0, proposal_pol: undefined };
}
exports.ProposalPOL = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.proposal_pol_round !== 0) {
            writer.uint32(16).int32(message.proposal_pol_round);
        }
        if (message.proposal_pol !== undefined) {
            types_2.BitArray.encode(message.proposal_pol, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProposalPOL();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
                    break;
                case 2:
                    message.proposal_pol_round = reader.int32();
                    break;
                case 3:
                    message.proposal_pol = types_2.BitArray.decode(reader, reader.uint32());
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
            proposal_pol_round: isSet(object.proposal_pol_round)
                ? Number(object.proposal_pol_round)
                : 0,
            proposal_pol: isSet(object.proposal_pol)
                ? types_2.BitArray.fromJSON(object.proposal_pol)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.proposal_pol_round !== undefined &&
            (obj.proposal_pol_round = Math.round(message.proposal_pol_round));
        message.proposal_pol !== undefined &&
            (obj.proposal_pol = message.proposal_pol
                ? types_2.BitArray.toJSON(message.proposal_pol)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseProposalPOL();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.proposal_pol_round = (_b = object.proposal_pol_round) !== null && _b !== void 0 ? _b : 0;
        message.proposal_pol =
            object.proposal_pol !== undefined && object.proposal_pol !== null
                ? types_2.BitArray.fromPartial(object.proposal_pol)
                : undefined;
        return message;
    },
};
function createBaseBlockPart() {
    return { height: "0", round: 0, part: undefined };
}
exports.BlockPart = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.part !== undefined) {
            types_1.Part.encode(message.part, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockPart();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.part = types_1.Part.decode(reader, reader.uint32());
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
            round: isSet(object.round) ? Number(object.round) : 0,
            part: isSet(object.part) ? types_1.Part.fromJSON(object.part) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.part !== undefined &&
            (obj.part = message.part ? types_1.Part.toJSON(message.part) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBlockPart();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.part =
            object.part !== undefined && object.part !== null
                ? types_1.Part.fromPartial(object.part)
                : undefined;
        return message;
    },
};
function createBaseVote() {
    return { vote: undefined };
}
exports.Vote = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vote !== undefined) {
            types_1.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = types_1.Vote.decode(reader, reader.uint32());
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
            vote: isSet(object.vote) ? types_1.Vote.fromJSON(object.vote) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote !== undefined &&
            (obj.vote = message.vote ? types_1.Vote.toJSON(message.vote) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseVote();
        message.vote =
            object.vote !== undefined && object.vote !== null
                ? types_1.Vote.fromPartial(object.vote)
                : undefined;
        return message;
    },
};
function createBaseHasVote() {
    return { height: "0", round: 0, type: 0, index: 0 };
}
exports.HasVote = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.index !== 0) {
            writer.uint32(32).int32(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHasVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.index = reader.int32();
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
            round: isSet(object.round) ? Number(object.round) : 0,
            type: isSet(object.type) ? (0, types_1.signedMsgTypeFromJSON)(object.type) : 0,
            index: isSet(object.index) ? Number(object.index) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.type !== undefined &&
            (obj.type = (0, types_1.signedMsgTypeToJSON)(message.type));
        message.index !== undefined && (obj.index = Math.round(message.index));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseHasVote();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        message.index = (_d = object.index) !== null && _d !== void 0 ? _d : 0;
        return message;
    },
};
function createBaseVoteSetMaj23() {
    return { height: "0", round: 0, type: 0, block_id: undefined };
}
exports.VoteSetMaj23 = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.block_id !== undefined) {
            types_1.BlockID.encode(message.block_id, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoteSetMaj23();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.block_id = types_1.BlockID.decode(reader, reader.uint32());
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
            round: isSet(object.round) ? Number(object.round) : 0,
            type: isSet(object.type) ? (0, types_1.signedMsgTypeFromJSON)(object.type) : 0,
            block_id: isSet(object.block_id)
                ? types_1.BlockID.fromJSON(object.block_id)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.type !== undefined &&
            (obj.type = (0, types_1.signedMsgTypeToJSON)(message.type));
        message.block_id !== undefined &&
            (obj.block_id = message.block_id
                ? types_1.BlockID.toJSON(message.block_id)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseVoteSetMaj23();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        message.block_id =
            object.block_id !== undefined && object.block_id !== null
                ? types_1.BlockID.fromPartial(object.block_id)
                : undefined;
        return message;
    },
};
function createBaseVoteSetBits() {
    return {
        height: "0",
        round: 0,
        type: 0,
        block_id: undefined,
        votes: undefined,
    };
}
exports.VoteSetBits = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(16).int32(message.round);
        }
        if (message.type !== 0) {
            writer.uint32(24).int32(message.type);
        }
        if (message.block_id !== undefined) {
            types_1.BlockID.encode(message.block_id, writer.uint32(34).fork()).ldelim();
        }
        if (message.votes !== undefined) {
            types_2.BitArray.encode(message.votes, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoteSetBits();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
                    break;
                case 2:
                    message.round = reader.int32();
                    break;
                case 3:
                    message.type = reader.int32();
                    break;
                case 4:
                    message.block_id = types_1.BlockID.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.votes = types_2.BitArray.decode(reader, reader.uint32());
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
            round: isSet(object.round) ? Number(object.round) : 0,
            type: isSet(object.type) ? (0, types_1.signedMsgTypeFromJSON)(object.type) : 0,
            block_id: isSet(object.block_id)
                ? types_1.BlockID.fromJSON(object.block_id)
                : undefined,
            votes: isSet(object.votes) ? types_2.BitArray.fromJSON(object.votes) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.type !== undefined &&
            (obj.type = (0, types_1.signedMsgTypeToJSON)(message.type));
        message.block_id !== undefined &&
            (obj.block_id = message.block_id
                ? types_1.BlockID.toJSON(message.block_id)
                : undefined);
        message.votes !== undefined &&
            (obj.votes = message.votes ? types_2.BitArray.toJSON(message.votes) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseVoteSetBits();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.type = (_c = object.type) !== null && _c !== void 0 ? _c : 0;
        message.block_id =
            object.block_id !== undefined && object.block_id !== null
                ? types_1.BlockID.fromPartial(object.block_id)
                : undefined;
        message.votes =
            object.votes !== undefined && object.votes !== null
                ? types_2.BitArray.fromPartial(object.votes)
                : undefined;
        return message;
    },
};
function createBaseMessage() {
    return {
        new_round_step: undefined,
        new_valid_block: undefined,
        proposal: undefined,
        proposal_pol: undefined,
        block_part: undefined,
        vote: undefined,
        has_vote: undefined,
        vote_set_maj23: undefined,
        vote_set_bits: undefined,
    };
}
exports.Message = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.new_round_step !== undefined) {
            exports.NewRoundStep.encode(message.new_round_step, writer.uint32(10).fork()).ldelim();
        }
        if (message.new_valid_block !== undefined) {
            exports.NewValidBlock.encode(message.new_valid_block, writer.uint32(18).fork()).ldelim();
        }
        if (message.proposal !== undefined) {
            exports.Proposal.encode(message.proposal, writer.uint32(26).fork()).ldelim();
        }
        if (message.proposal_pol !== undefined) {
            exports.ProposalPOL.encode(message.proposal_pol, writer.uint32(34).fork()).ldelim();
        }
        if (message.block_part !== undefined) {
            exports.BlockPart.encode(message.block_part, writer.uint32(42).fork()).ldelim();
        }
        if (message.vote !== undefined) {
            exports.Vote.encode(message.vote, writer.uint32(50).fork()).ldelim();
        }
        if (message.has_vote !== undefined) {
            exports.HasVote.encode(message.has_vote, writer.uint32(58).fork()).ldelim();
        }
        if (message.vote_set_maj23 !== undefined) {
            exports.VoteSetMaj23.encode(message.vote_set_maj23, writer.uint32(66).fork()).ldelim();
        }
        if (message.vote_set_bits !== undefined) {
            exports.VoteSetBits.encode(message.vote_set_bits, writer.uint32(74).fork()).ldelim();
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
                    message.new_round_step = exports.NewRoundStep.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.new_valid_block = exports.NewValidBlock.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.proposal = exports.Proposal.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.proposal_pol = exports.ProposalPOL.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.block_part = exports.BlockPart.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.vote = exports.Vote.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.has_vote = exports.HasVote.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.vote_set_maj23 = exports.VoteSetMaj23.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.vote_set_bits = exports.VoteSetBits.decode(reader, reader.uint32());
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
            new_round_step: isSet(object.new_round_step)
                ? exports.NewRoundStep.fromJSON(object.new_round_step)
                : undefined,
            new_valid_block: isSet(object.new_valid_block)
                ? exports.NewValidBlock.fromJSON(object.new_valid_block)
                : undefined,
            proposal: isSet(object.proposal)
                ? exports.Proposal.fromJSON(object.proposal)
                : undefined,
            proposal_pol: isSet(object.proposal_pol)
                ? exports.ProposalPOL.fromJSON(object.proposal_pol)
                : undefined,
            block_part: isSet(object.block_part)
                ? exports.BlockPart.fromJSON(object.block_part)
                : undefined,
            vote: isSet(object.vote) ? exports.Vote.fromJSON(object.vote) : undefined,
            has_vote: isSet(object.has_vote)
                ? exports.HasVote.fromJSON(object.has_vote)
                : undefined,
            vote_set_maj23: isSet(object.vote_set_maj23)
                ? exports.VoteSetMaj23.fromJSON(object.vote_set_maj23)
                : undefined,
            vote_set_bits: isSet(object.vote_set_bits)
                ? exports.VoteSetBits.fromJSON(object.vote_set_bits)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.new_round_step !== undefined &&
            (obj.new_round_step = message.new_round_step
                ? exports.NewRoundStep.toJSON(message.new_round_step)
                : undefined);
        message.new_valid_block !== undefined &&
            (obj.new_valid_block = message.new_valid_block
                ? exports.NewValidBlock.toJSON(message.new_valid_block)
                : undefined);
        message.proposal !== undefined &&
            (obj.proposal = message.proposal
                ? exports.Proposal.toJSON(message.proposal)
                : undefined);
        message.proposal_pol !== undefined &&
            (obj.proposal_pol = message.proposal_pol
                ? exports.ProposalPOL.toJSON(message.proposal_pol)
                : undefined);
        message.block_part !== undefined &&
            (obj.block_part = message.block_part
                ? exports.BlockPart.toJSON(message.block_part)
                : undefined);
        message.vote !== undefined &&
            (obj.vote = message.vote ? exports.Vote.toJSON(message.vote) : undefined);
        message.has_vote !== undefined &&
            (obj.has_vote = message.has_vote
                ? exports.HasVote.toJSON(message.has_vote)
                : undefined);
        message.vote_set_maj23 !== undefined &&
            (obj.vote_set_maj23 = message.vote_set_maj23
                ? exports.VoteSetMaj23.toJSON(message.vote_set_maj23)
                : undefined);
        message.vote_set_bits !== undefined &&
            (obj.vote_set_bits = message.vote_set_bits
                ? exports.VoteSetBits.toJSON(message.vote_set_bits)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMessage();
        message.new_round_step =
            object.new_round_step !== undefined && object.new_round_step !== null
                ? exports.NewRoundStep.fromPartial(object.new_round_step)
                : undefined;
        message.new_valid_block =
            object.new_valid_block !== undefined && object.new_valid_block !== null
                ? exports.NewValidBlock.fromPartial(object.new_valid_block)
                : undefined;
        message.proposal =
            object.proposal !== undefined && object.proposal !== null
                ? exports.Proposal.fromPartial(object.proposal)
                : undefined;
        message.proposal_pol =
            object.proposal_pol !== undefined && object.proposal_pol !== null
                ? exports.ProposalPOL.fromPartial(object.proposal_pol)
                : undefined;
        message.block_part =
            object.block_part !== undefined && object.block_part !== null
                ? exports.BlockPart.fromPartial(object.block_part)
                : undefined;
        message.vote =
            object.vote !== undefined && object.vote !== null
                ? exports.Vote.fromPartial(object.vote)
                : undefined;
        message.has_vote =
            object.has_vote !== undefined && object.has_vote !== null
                ? exports.HasVote.fromPartial(object.has_vote)
                : undefined;
        message.vote_set_maj23 =
            object.vote_set_maj23 !== undefined && object.vote_set_maj23 !== null
                ? exports.VoteSetMaj23.fromPartial(object.vote_set_maj23)
                : undefined;
        message.vote_set_bits =
            object.vote_set_bits !== undefined && object.vote_set_bits !== null
                ? exports.VoteSetBits.fromPartial(object.vote_set_bits)
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