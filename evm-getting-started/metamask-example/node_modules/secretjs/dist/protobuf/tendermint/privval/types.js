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
exports.Message = exports.PingResponse = exports.PingRequest = exports.SignedProposalResponse = exports.SignProposalRequest = exports.SignedVoteResponse = exports.SignVoteRequest = exports.PubKeyResponse = exports.PubKeyRequest = exports.RemoteSignerError = exports.errorsToJSON = exports.errorsFromJSON = exports.Errors = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const keys_1 = require("../crypto/keys");
const types_1 = require("../types/types");
exports.protobufPackage = "tendermint.privval";
var Errors;
(function (Errors) {
    Errors[Errors["ERRORS_UNKNOWN"] = 0] = "ERRORS_UNKNOWN";
    Errors[Errors["ERRORS_UNEXPECTED_RESPONSE"] = 1] = "ERRORS_UNEXPECTED_RESPONSE";
    Errors[Errors["ERRORS_NO_CONNECTION"] = 2] = "ERRORS_NO_CONNECTION";
    Errors[Errors["ERRORS_CONNECTION_TIMEOUT"] = 3] = "ERRORS_CONNECTION_TIMEOUT";
    Errors[Errors["ERRORS_READ_TIMEOUT"] = 4] = "ERRORS_READ_TIMEOUT";
    Errors[Errors["ERRORS_WRITE_TIMEOUT"] = 5] = "ERRORS_WRITE_TIMEOUT";
    Errors[Errors["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Errors = exports.Errors || (exports.Errors = {}));
function errorsFromJSON(object) {
    switch (object) {
        case 0:
        case "ERRORS_UNKNOWN":
            return Errors.ERRORS_UNKNOWN;
        case 1:
        case "ERRORS_UNEXPECTED_RESPONSE":
            return Errors.ERRORS_UNEXPECTED_RESPONSE;
        case 2:
        case "ERRORS_NO_CONNECTION":
            return Errors.ERRORS_NO_CONNECTION;
        case 3:
        case "ERRORS_CONNECTION_TIMEOUT":
            return Errors.ERRORS_CONNECTION_TIMEOUT;
        case 4:
        case "ERRORS_READ_TIMEOUT":
            return Errors.ERRORS_READ_TIMEOUT;
        case 5:
        case "ERRORS_WRITE_TIMEOUT":
            return Errors.ERRORS_WRITE_TIMEOUT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Errors.UNRECOGNIZED;
    }
}
exports.errorsFromJSON = errorsFromJSON;
function errorsToJSON(object) {
    switch (object) {
        case Errors.ERRORS_UNKNOWN:
            return "ERRORS_UNKNOWN";
        case Errors.ERRORS_UNEXPECTED_RESPONSE:
            return "ERRORS_UNEXPECTED_RESPONSE";
        case Errors.ERRORS_NO_CONNECTION:
            return "ERRORS_NO_CONNECTION";
        case Errors.ERRORS_CONNECTION_TIMEOUT:
            return "ERRORS_CONNECTION_TIMEOUT";
        case Errors.ERRORS_READ_TIMEOUT:
            return "ERRORS_READ_TIMEOUT";
        case Errors.ERRORS_WRITE_TIMEOUT:
            return "ERRORS_WRITE_TIMEOUT";
        default:
            return "UNKNOWN";
    }
}
exports.errorsToJSON = errorsToJSON;
function createBaseRemoteSignerError() {
    return { code: 0, description: "" };
}
exports.RemoteSignerError = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code !== 0) {
            writer.uint32(8).int32(message.code);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoteSignerError();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.description = reader.string();
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
            code: isSet(object.code) ? Number(object.code) : 0,
            description: isSet(object.description) ? String(object.description) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = Math.round(message.code));
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRemoteSignerError();
        message.code = (_a = object.code) !== null && _a !== void 0 ? _a : 0;
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBasePubKeyRequest() {
    return { chain_id: "" };
}
exports.PubKeyRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePubKeyRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.chain_id = reader.string();
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
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePubKeyRequest();
        message.chain_id = (_a = object.chain_id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBasePubKeyResponse() {
    return { pub_key: undefined, error: undefined };
}
exports.PubKeyResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pub_key !== undefined) {
            keys_1.PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.error !== undefined) {
            exports.RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePubKeyResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pub_key = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.error = exports.RemoteSignerError.decode(reader, reader.uint32());
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
            pub_key: isSet(object.pub_key)
                ? keys_1.PublicKey.fromJSON(object.pub_key)
                : undefined,
            error: isSet(object.error)
                ? exports.RemoteSignerError.fromJSON(object.error)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pub_key !== undefined &&
            (obj.pub_key = message.pub_key
                ? keys_1.PublicKey.toJSON(message.pub_key)
                : undefined);
        message.error !== undefined &&
            (obj.error = message.error
                ? exports.RemoteSignerError.toJSON(message.error)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePubKeyResponse();
        message.pub_key =
            object.pub_key !== undefined && object.pub_key !== null
                ? keys_1.PublicKey.fromPartial(object.pub_key)
                : undefined;
        message.error =
            object.error !== undefined && object.error !== null
                ? exports.RemoteSignerError.fromPartial(object.error)
                : undefined;
        return message;
    },
};
function createBaseSignVoteRequest() {
    return { vote: undefined, chain_id: "" };
}
exports.SignVoteRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vote !== undefined) {
            types_1.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(18).string(message.chain_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignVoteRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = types_1.Vote.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chain_id = reader.string();
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
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote !== undefined &&
            (obj.vote = message.vote ? types_1.Vote.toJSON(message.vote) : undefined);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSignVoteRequest();
        message.vote =
            object.vote !== undefined && object.vote !== null
                ? types_1.Vote.fromPartial(object.vote)
                : undefined;
        message.chain_id = (_a = object.chain_id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSignedVoteResponse() {
    return { vote: undefined, error: undefined };
}
exports.SignedVoteResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.vote !== undefined) {
            types_1.Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
        }
        if (message.error !== undefined) {
            exports.RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignedVoteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote = types_1.Vote.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.error = exports.RemoteSignerError.decode(reader, reader.uint32());
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
            error: isSet(object.error)
                ? exports.RemoteSignerError.fromJSON(object.error)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.vote !== undefined &&
            (obj.vote = message.vote ? types_1.Vote.toJSON(message.vote) : undefined);
        message.error !== undefined &&
            (obj.error = message.error
                ? exports.RemoteSignerError.toJSON(message.error)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignedVoteResponse();
        message.vote =
            object.vote !== undefined && object.vote !== null
                ? types_1.Vote.fromPartial(object.vote)
                : undefined;
        message.error =
            object.error !== undefined && object.error !== null
                ? exports.RemoteSignerError.fromPartial(object.error)
                : undefined;
        return message;
    },
};
function createBaseSignProposalRequest() {
    return { proposal: undefined, chain_id: "" };
}
exports.SignProposalRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposal !== undefined) {
            types_1.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(18).string(message.chain_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignProposalRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = types_1.Proposal.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.chain_id = reader.string();
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
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal !== undefined &&
            (obj.proposal = message.proposal
                ? types_1.Proposal.toJSON(message.proposal)
                : undefined);
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSignProposalRequest();
        message.proposal =
            object.proposal !== undefined && object.proposal !== null
                ? types_1.Proposal.fromPartial(object.proposal)
                : undefined;
        message.chain_id = (_a = object.chain_id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseSignedProposalResponse() {
    return { proposal: undefined, error: undefined };
}
exports.SignedProposalResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.proposal !== undefined) {
            types_1.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        if (message.error !== undefined) {
            exports.RemoteSignerError.encode(message.error, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignedProposalResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = types_1.Proposal.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.error = exports.RemoteSignerError.decode(reader, reader.uint32());
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
            error: isSet(object.error)
                ? exports.RemoteSignerError.fromJSON(object.error)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.proposal !== undefined &&
            (obj.proposal = message.proposal
                ? types_1.Proposal.toJSON(message.proposal)
                : undefined);
        message.error !== undefined &&
            (obj.error = message.error
                ? exports.RemoteSignerError.toJSON(message.error)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseSignedProposalResponse();
        message.proposal =
            object.proposal !== undefined && object.proposal !== null
                ? types_1.Proposal.fromPartial(object.proposal)
                : undefined;
        message.error =
            object.error !== undefined && object.error !== null
                ? exports.RemoteSignerError.fromPartial(object.error)
                : undefined;
        return message;
    },
};
function createBasePingRequest() {
    return {};
}
exports.PingRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePingRequest();
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
        const message = createBasePingRequest();
        return message;
    },
};
function createBasePingResponse() {
    return {};
}
exports.PingResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePingResponse();
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
        const message = createBasePingResponse();
        return message;
    },
};
function createBaseMessage() {
    return {
        pub_key_request: undefined,
        pub_key_response: undefined,
        sign_vote_request: undefined,
        signed_vote_response: undefined,
        sign_proposal_request: undefined,
        signed_proposal_response: undefined,
        ping_request: undefined,
        ping_response: undefined,
    };
}
exports.Message = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pub_key_request !== undefined) {
            exports.PubKeyRequest.encode(message.pub_key_request, writer.uint32(10).fork()).ldelim();
        }
        if (message.pub_key_response !== undefined) {
            exports.PubKeyResponse.encode(message.pub_key_response, writer.uint32(18).fork()).ldelim();
        }
        if (message.sign_vote_request !== undefined) {
            exports.SignVoteRequest.encode(message.sign_vote_request, writer.uint32(26).fork()).ldelim();
        }
        if (message.signed_vote_response !== undefined) {
            exports.SignedVoteResponse.encode(message.signed_vote_response, writer.uint32(34).fork()).ldelim();
        }
        if (message.sign_proposal_request !== undefined) {
            exports.SignProposalRequest.encode(message.sign_proposal_request, writer.uint32(42).fork()).ldelim();
        }
        if (message.signed_proposal_response !== undefined) {
            exports.SignedProposalResponse.encode(message.signed_proposal_response, writer.uint32(50).fork()).ldelim();
        }
        if (message.ping_request !== undefined) {
            exports.PingRequest.encode(message.ping_request, writer.uint32(58).fork()).ldelim();
        }
        if (message.ping_response !== undefined) {
            exports.PingResponse.encode(message.ping_response, writer.uint32(66).fork()).ldelim();
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
                    message.pub_key_request = exports.PubKeyRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pub_key_response = exports.PubKeyResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sign_vote_request = exports.SignVoteRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signed_vote_response = exports.SignedVoteResponse.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.sign_proposal_request = exports.SignProposalRequest.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.signed_proposal_response = exports.SignedProposalResponse.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.ping_request = exports.PingRequest.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.ping_response = exports.PingResponse.decode(reader, reader.uint32());
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
            pub_key_request: isSet(object.pub_key_request)
                ? exports.PubKeyRequest.fromJSON(object.pub_key_request)
                : undefined,
            pub_key_response: isSet(object.pub_key_response)
                ? exports.PubKeyResponse.fromJSON(object.pub_key_response)
                : undefined,
            sign_vote_request: isSet(object.sign_vote_request)
                ? exports.SignVoteRequest.fromJSON(object.sign_vote_request)
                : undefined,
            signed_vote_response: isSet(object.signed_vote_response)
                ? exports.SignedVoteResponse.fromJSON(object.signed_vote_response)
                : undefined,
            sign_proposal_request: isSet(object.sign_proposal_request)
                ? exports.SignProposalRequest.fromJSON(object.sign_proposal_request)
                : undefined,
            signed_proposal_response: isSet(object.signed_proposal_response)
                ? exports.SignedProposalResponse.fromJSON(object.signed_proposal_response)
                : undefined,
            ping_request: isSet(object.ping_request)
                ? exports.PingRequest.fromJSON(object.ping_request)
                : undefined,
            ping_response: isSet(object.ping_response)
                ? exports.PingResponse.fromJSON(object.ping_response)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pub_key_request !== undefined &&
            (obj.pub_key_request = message.pub_key_request
                ? exports.PubKeyRequest.toJSON(message.pub_key_request)
                : undefined);
        message.pub_key_response !== undefined &&
            (obj.pub_key_response = message.pub_key_response
                ? exports.PubKeyResponse.toJSON(message.pub_key_response)
                : undefined);
        message.sign_vote_request !== undefined &&
            (obj.sign_vote_request = message.sign_vote_request
                ? exports.SignVoteRequest.toJSON(message.sign_vote_request)
                : undefined);
        message.signed_vote_response !== undefined &&
            (obj.signed_vote_response = message.signed_vote_response
                ? exports.SignedVoteResponse.toJSON(message.signed_vote_response)
                : undefined);
        message.sign_proposal_request !== undefined &&
            (obj.sign_proposal_request = message.sign_proposal_request
                ? exports.SignProposalRequest.toJSON(message.sign_proposal_request)
                : undefined);
        message.signed_proposal_response !== undefined &&
            (obj.signed_proposal_response = message.signed_proposal_response
                ? exports.SignedProposalResponse.toJSON(message.signed_proposal_response)
                : undefined);
        message.ping_request !== undefined &&
            (obj.ping_request = message.ping_request
                ? exports.PingRequest.toJSON(message.ping_request)
                : undefined);
        message.ping_response !== undefined &&
            (obj.ping_response = message.ping_response
                ? exports.PingResponse.toJSON(message.ping_response)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMessage();
        message.pub_key_request =
            object.pub_key_request !== undefined && object.pub_key_request !== null
                ? exports.PubKeyRequest.fromPartial(object.pub_key_request)
                : undefined;
        message.pub_key_response =
            object.pub_key_response !== undefined && object.pub_key_response !== null
                ? exports.PubKeyResponse.fromPartial(object.pub_key_response)
                : undefined;
        message.sign_vote_request =
            object.sign_vote_request !== undefined &&
                object.sign_vote_request !== null
                ? exports.SignVoteRequest.fromPartial(object.sign_vote_request)
                : undefined;
        message.signed_vote_response =
            object.signed_vote_response !== undefined &&
                object.signed_vote_response !== null
                ? exports.SignedVoteResponse.fromPartial(object.signed_vote_response)
                : undefined;
        message.sign_proposal_request =
            object.sign_proposal_request !== undefined &&
                object.sign_proposal_request !== null
                ? exports.SignProposalRequest.fromPartial(object.sign_proposal_request)
                : undefined;
        message.signed_proposal_response =
            object.signed_proposal_response !== undefined &&
                object.signed_proposal_response !== null
                ? exports.SignedProposalResponse.fromPartial(object.signed_proposal_response)
                : undefined;
        message.ping_request =
            object.ping_request !== undefined && object.ping_request !== null
                ? exports.PingRequest.fromPartial(object.ping_request)
                : undefined;
        message.ping_response =
            object.ping_response !== undefined && object.ping_response !== null
                ? exports.PingResponse.fromPartial(object.ping_response)
                : undefined;
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=types.js.map