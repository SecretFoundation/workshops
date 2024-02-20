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
exports.QueryClientImpl = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryPoolResponse = exports.QueryPoolRequest = exports.QueryHistoricalInfoResponse = exports.QueryHistoricalInfoRequest = exports.QueryDelegatorValidatorResponse = exports.QueryDelegatorValidatorRequest = exports.QueryDelegatorValidatorsResponse = exports.QueryDelegatorValidatorsRequest = exports.QueryRedelegationsResponse = exports.QueryRedelegationsRequest = exports.QueryDelegatorUnbondingDelegationsResponse = exports.QueryDelegatorUnbondingDelegationsRequest = exports.QueryDelegatorDelegationsResponse = exports.QueryDelegatorDelegationsRequest = exports.QueryUnbondingDelegationResponse = exports.QueryUnbondingDelegationRequest = exports.QueryDelegationResponse = exports.QueryDelegationRequest = exports.QueryValidatorUnbondingDelegationsResponse = exports.QueryValidatorUnbondingDelegationsRequest = exports.QueryValidatorDelegationsResponse = exports.QueryValidatorDelegationsRequest = exports.QueryValidatorResponse = exports.QueryValidatorRequest = exports.QueryValidatorsResponse = exports.QueryValidatorsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const pagination_1 = require("../../base/query/v1beta1/pagination");
const staking_1 = require("./staking");
exports.protobufPackage = "cosmos.staking.v1beta1";
function createBaseQueryValidatorsRequest() {
    return { status: "", pagination: undefined };
}
exports.QueryValidatorsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.status = reader.string();
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
            status: isSet(object.status) ? String(object.status) : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValidatorsRequest();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryValidatorsResponse() {
    return { validators: [], pagination: undefined };
}
exports.QueryValidatorsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validators) {
            staking_1.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(staking_1.Validator.decode(reader, reader.uint32()));
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
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators)
                ? object.validators.map((e) => staking_1.Validator.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? staking_1.Validator.toJSON(e) : undefined);
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
        var _a;
        const message = createBaseQueryValidatorsResponse();
        message.validators =
            ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map((e) => staking_1.Validator.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryValidatorRequest() {
    return { validator_addr: "" };
}
exports.QueryValidatorRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_addr = reader.string();
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
            validator_addr: isSet(object.validator_addr)
                ? String(object.validator_addr)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_addr !== undefined &&
            (obj.validator_addr = message.validator_addr);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValidatorRequest();
        message.validator_addr = (_a = object.validator_addr) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryValidatorResponse() {
    return { validator: undefined };
}
exports.QueryValidatorResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator !== undefined) {
            staking_1.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = staking_1.Validator.decode(reader, reader.uint32());
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
            validator: isSet(object.validator)
                ? staking_1.Validator.fromJSON(object.validator)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined &&
            (obj.validator = message.validator
                ? staking_1.Validator.toJSON(message.validator)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryValidatorResponse();
        message.validator =
            object.validator !== undefined && object.validator !== null
                ? staking_1.Validator.fromPartial(object.validator)
                : undefined;
        return message;
    },
};
function createBaseQueryValidatorDelegationsRequest() {
    return { validator_addr: "", pagination: undefined };
}
exports.QueryValidatorDelegationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_addr = reader.string();
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
            validator_addr: isSet(object.validator_addr)
                ? String(object.validator_addr)
                : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_addr !== undefined &&
            (obj.validator_addr = message.validator_addr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValidatorDelegationsRequest();
        message.validator_addr = (_a = object.validator_addr) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryValidatorDelegationsResponse() {
    return { delegation_responses: [], pagination: undefined };
}
exports.QueryValidatorDelegationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.delegation_responses) {
            staking_1.DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation_responses.push(staking_1.DelegationResponse.decode(reader, reader.uint32()));
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
            delegation_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.delegation_responses)
                ? object.delegation_responses.map((e) => staking_1.DelegationResponse.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.delegation_responses) {
            obj.delegation_responses = message.delegation_responses.map((e) => e ? staking_1.DelegationResponse.toJSON(e) : undefined);
        }
        else {
            obj.delegation_responses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValidatorDelegationsResponse();
        message.delegation_responses =
            ((_a = object.delegation_responses) === null || _a === void 0 ? void 0 : _a.map((e) => staking_1.DelegationResponse.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryValidatorUnbondingDelegationsRequest() {
    return { validator_addr: "", pagination: undefined };
}
exports.QueryValidatorUnbondingDelegationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_addr !== "") {
            writer.uint32(10).string(message.validator_addr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorUnbondingDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_addr = reader.string();
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
            validator_addr: isSet(object.validator_addr)
                ? String(object.validator_addr)
                : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_addr !== undefined &&
            (obj.validator_addr = message.validator_addr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValidatorUnbondingDelegationsRequest();
        message.validator_addr = (_a = object.validator_addr) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryValidatorUnbondingDelegationsResponse() {
    return { unbonding_responses: [], pagination: undefined };
}
exports.QueryValidatorUnbondingDelegationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.unbonding_responses) {
            staking_1.UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryValidatorUnbondingDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbonding_responses.push(staking_1.UnbondingDelegation.decode(reader, reader.uint32()));
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
            unbonding_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.unbonding_responses)
                ? object.unbonding_responses.map((e) => staking_1.UnbondingDelegation.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.unbonding_responses) {
            obj.unbonding_responses = message.unbonding_responses.map((e) => e ? staking_1.UnbondingDelegation.toJSON(e) : undefined);
        }
        else {
            obj.unbonding_responses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryValidatorUnbondingDelegationsResponse();
        message.unbonding_responses =
            ((_a = object.unbonding_responses) === null || _a === void 0 ? void 0 : _a.map((e) => staking_1.UnbondingDelegation.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDelegationRequest() {
    return { delegator_addr: "", validator_addr: "" };
}
exports.QueryDelegationRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.validator_addr !== "") {
            writer.uint32(18).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
                    break;
                case 2:
                    message.validator_addr = reader.string();
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
            delegator_addr: isSet(object.delegator_addr)
                ? String(object.delegator_addr)
                : "",
            validator_addr: isSet(object.validator_addr)
                ? String(object.validator_addr)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined &&
            (obj.delegator_addr = message.delegator_addr);
        message.validator_addr !== undefined &&
            (obj.validator_addr = message.validator_addr);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDelegationRequest();
        message.delegator_addr = (_a = object.delegator_addr) !== null && _a !== void 0 ? _a : "";
        message.validator_addr = (_b = object.validator_addr) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryDelegationResponse() {
    return { delegation_response: undefined };
}
exports.QueryDelegationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegation_response !== undefined) {
            staking_1.DelegationResponse.encode(message.delegation_response, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation_response = staking_1.DelegationResponse.decode(reader, reader.uint32());
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
            delegation_response: isSet(object.delegation_response)
                ? staking_1.DelegationResponse.fromJSON(object.delegation_response)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegation_response !== undefined &&
            (obj.delegation_response = message.delegation_response
                ? staking_1.DelegationResponse.toJSON(message.delegation_response)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegationResponse();
        message.delegation_response =
            object.delegation_response !== undefined &&
                object.delegation_response !== null
                ? staking_1.DelegationResponse.fromPartial(object.delegation_response)
                : undefined;
        return message;
    },
};
function createBaseQueryUnbondingDelegationRequest() {
    return { delegator_addr: "", validator_addr: "" };
}
exports.QueryUnbondingDelegationRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.validator_addr !== "") {
            writer.uint32(18).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnbondingDelegationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
                    break;
                case 2:
                    message.validator_addr = reader.string();
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
            delegator_addr: isSet(object.delegator_addr)
                ? String(object.delegator_addr)
                : "",
            validator_addr: isSet(object.validator_addr)
                ? String(object.validator_addr)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined &&
            (obj.delegator_addr = message.delegator_addr);
        message.validator_addr !== undefined &&
            (obj.validator_addr = message.validator_addr);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryUnbondingDelegationRequest();
        message.delegator_addr = (_a = object.delegator_addr) !== null && _a !== void 0 ? _a : "";
        message.validator_addr = (_b = object.validator_addr) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryUnbondingDelegationResponse() {
    return { unbond: undefined };
}
exports.QueryUnbondingDelegationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.unbond !== undefined) {
            staking_1.UnbondingDelegation.encode(message.unbond, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUnbondingDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbond = staking_1.UnbondingDelegation.decode(reader, reader.uint32());
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
            unbond: isSet(object.unbond)
                ? staking_1.UnbondingDelegation.fromJSON(object.unbond)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.unbond !== undefined &&
            (obj.unbond = message.unbond
                ? staking_1.UnbondingDelegation.toJSON(message.unbond)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryUnbondingDelegationResponse();
        message.unbond =
            object.unbond !== undefined && object.unbond !== null
                ? staking_1.UnbondingDelegation.fromPartial(object.unbond)
                : undefined;
        return message;
    },
};
function createBaseQueryDelegatorDelegationsRequest() {
    return { delegator_addr: "", pagination: undefined };
}
exports.QueryDelegatorDelegationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
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
            delegator_addr: isSet(object.delegator_addr)
                ? String(object.delegator_addr)
                : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined &&
            (obj.delegator_addr = message.delegator_addr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDelegatorDelegationsRequest();
        message.delegator_addr = (_a = object.delegator_addr) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDelegatorDelegationsResponse() {
    return { delegation_responses: [], pagination: undefined };
}
exports.QueryDelegatorDelegationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.delegation_responses) {
            staking_1.DelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation_responses.push(staking_1.DelegationResponse.decode(reader, reader.uint32()));
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
            delegation_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.delegation_responses)
                ? object.delegation_responses.map((e) => staking_1.DelegationResponse.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.delegation_responses) {
            obj.delegation_responses = message.delegation_responses.map((e) => e ? staking_1.DelegationResponse.toJSON(e) : undefined);
        }
        else {
            obj.delegation_responses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDelegatorDelegationsResponse();
        message.delegation_responses =
            ((_a = object.delegation_responses) === null || _a === void 0 ? void 0 : _a.map((e) => staking_1.DelegationResponse.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDelegatorUnbondingDelegationsRequest() {
    return { delegator_addr: "", pagination: undefined };
}
exports.QueryDelegatorUnbondingDelegationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
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
            delegator_addr: isSet(object.delegator_addr)
                ? String(object.delegator_addr)
                : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined &&
            (obj.delegator_addr = message.delegator_addr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDelegatorUnbondingDelegationsRequest();
        message.delegator_addr = (_a = object.delegator_addr) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDelegatorUnbondingDelegationsResponse() {
    return { unbonding_responses: [], pagination: undefined };
}
exports.QueryDelegatorUnbondingDelegationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.unbonding_responses) {
            staking_1.UnbondingDelegation.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbonding_responses.push(staking_1.UnbondingDelegation.decode(reader, reader.uint32()));
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
            unbonding_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.unbonding_responses)
                ? object.unbonding_responses.map((e) => staking_1.UnbondingDelegation.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.unbonding_responses) {
            obj.unbonding_responses = message.unbonding_responses.map((e) => e ? staking_1.UnbondingDelegation.toJSON(e) : undefined);
        }
        else {
            obj.unbonding_responses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDelegatorUnbondingDelegationsResponse();
        message.unbonding_responses =
            ((_a = object.unbonding_responses) === null || _a === void 0 ? void 0 : _a.map((e) => staking_1.UnbondingDelegation.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryRedelegationsRequest() {
    return {
        delegator_addr: "",
        src_validator_addr: "",
        dst_validator_addr: "",
        pagination: undefined,
    };
}
exports.QueryRedelegationsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.src_validator_addr !== "") {
            writer.uint32(18).string(message.src_validator_addr);
        }
        if (message.dst_validator_addr !== "") {
            writer.uint32(26).string(message.dst_validator_addr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRedelegationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
                    break;
                case 2:
                    message.src_validator_addr = reader.string();
                    break;
                case 3:
                    message.dst_validator_addr = reader.string();
                    break;
                case 4:
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
            delegator_addr: isSet(object.delegator_addr)
                ? String(object.delegator_addr)
                : "",
            src_validator_addr: isSet(object.src_validator_addr)
                ? String(object.src_validator_addr)
                : "",
            dst_validator_addr: isSet(object.dst_validator_addr)
                ? String(object.dst_validator_addr)
                : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined &&
            (obj.delegator_addr = message.delegator_addr);
        message.src_validator_addr !== undefined &&
            (obj.src_validator_addr = message.src_validator_addr);
        message.dst_validator_addr !== undefined &&
            (obj.dst_validator_addr = message.dst_validator_addr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryRedelegationsRequest();
        message.delegator_addr = (_a = object.delegator_addr) !== null && _a !== void 0 ? _a : "";
        message.src_validator_addr = (_b = object.src_validator_addr) !== null && _b !== void 0 ? _b : "";
        message.dst_validator_addr = (_c = object.dst_validator_addr) !== null && _c !== void 0 ? _c : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryRedelegationsResponse() {
    return { redelegation_responses: [], pagination: undefined };
}
exports.QueryRedelegationsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.redelegation_responses) {
            staking_1.RedelegationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryRedelegationsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegation_responses.push(staking_1.RedelegationResponse.decode(reader, reader.uint32()));
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
            redelegation_responses: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegation_responses)
                ? object.redelegation_responses.map((e) => staking_1.RedelegationResponse.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.redelegation_responses) {
            obj.redelegation_responses = message.redelegation_responses.map((e) => e ? staking_1.RedelegationResponse.toJSON(e) : undefined);
        }
        else {
            obj.redelegation_responses = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryRedelegationsResponse();
        message.redelegation_responses =
            ((_a = object.redelegation_responses) === null || _a === void 0 ? void 0 : _a.map((e) => staking_1.RedelegationResponse.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDelegatorValidatorsRequest() {
    return { delegator_addr: "", pagination: undefined };
}
exports.QueryDelegatorValidatorsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
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
            delegator_addr: isSet(object.delegator_addr)
                ? String(object.delegator_addr)
                : "",
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined &&
            (obj.delegator_addr = message.delegator_addr);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryDelegatorValidatorsRequest();
        message.delegator_addr = (_a = object.delegator_addr) !== null && _a !== void 0 ? _a : "";
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDelegatorValidatorsResponse() {
    return { validators: [], pagination: undefined };
}
exports.QueryDelegatorValidatorsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validators) {
            staking_1.Validator.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validators.push(staking_1.Validator.decode(reader, reader.uint32()));
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
            validators: Array.isArray(object === null || object === void 0 ? void 0 : object.validators)
                ? object.validators.map((e) => staking_1.Validator.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validators) {
            obj.validators = message.validators.map((e) => e ? staking_1.Validator.toJSON(e) : undefined);
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
        var _a;
        const message = createBaseQueryDelegatorValidatorsResponse();
        message.validators =
            ((_a = object.validators) === null || _a === void 0 ? void 0 : _a.map((e) => staking_1.Validator.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryDelegatorValidatorRequest() {
    return { delegator_addr: "", validator_addr: "" };
}
exports.QueryDelegatorValidatorRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_addr !== "") {
            writer.uint32(10).string(message.delegator_addr);
        }
        if (message.validator_addr !== "") {
            writer.uint32(18).string(message.validator_addr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_addr = reader.string();
                    break;
                case 2:
                    message.validator_addr = reader.string();
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
            delegator_addr: isSet(object.delegator_addr)
                ? String(object.delegator_addr)
                : "",
            validator_addr: isSet(object.validator_addr)
                ? String(object.validator_addr)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_addr !== undefined &&
            (obj.delegator_addr = message.delegator_addr);
        message.validator_addr !== undefined &&
            (obj.validator_addr = message.validator_addr);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryDelegatorValidatorRequest();
        message.delegator_addr = (_a = object.delegator_addr) !== null && _a !== void 0 ? _a : "";
        message.validator_addr = (_b = object.validator_addr) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseQueryDelegatorValidatorResponse() {
    return { validator: undefined };
}
exports.QueryDelegatorValidatorResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator !== undefined) {
            staking_1.Validator.encode(message.validator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryDelegatorValidatorResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator = staking_1.Validator.decode(reader, reader.uint32());
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
            validator: isSet(object.validator)
                ? staking_1.Validator.fromJSON(object.validator)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator !== undefined &&
            (obj.validator = message.validator
                ? staking_1.Validator.toJSON(message.validator)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryDelegatorValidatorResponse();
        message.validator =
            object.validator !== undefined && object.validator !== null
                ? staking_1.Validator.fromPartial(object.validator)
                : undefined;
        return message;
    },
};
function createBaseQueryHistoricalInfoRequest() {
    return { height: "0" };
}
exports.QueryHistoricalInfoRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalInfoRequest();
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
        const message = createBaseQueryHistoricalInfoRequest();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryHistoricalInfoResponse() {
    return { hist: undefined };
}
exports.QueryHistoricalInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hist !== undefined) {
            staking_1.HistoricalInfo.encode(message.hist, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryHistoricalInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hist = staking_1.HistoricalInfo.decode(reader, reader.uint32());
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
            hist: isSet(object.hist)
                ? staking_1.HistoricalInfo.fromJSON(object.hist)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.hist !== undefined &&
            (obj.hist = message.hist
                ? staking_1.HistoricalInfo.toJSON(message.hist)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryHistoricalInfoResponse();
        message.hist =
            object.hist !== undefined && object.hist !== null
                ? staking_1.HistoricalInfo.fromPartial(object.hist)
                : undefined;
        return message;
    },
};
function createBaseQueryPoolRequest() {
    return {};
}
exports.QueryPoolRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolRequest();
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
        const message = createBaseQueryPoolRequest();
        return message;
    },
};
function createBaseQueryPoolResponse() {
    return { pool: undefined };
}
exports.QueryPoolResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pool !== undefined) {
            staking_1.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = staking_1.Pool.decode(reader, reader.uint32());
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
            pool: isSet(object.pool) ? staking_1.Pool.fromJSON(object.pool) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pool !== undefined &&
            (obj.pool = message.pool ? staking_1.Pool.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryPoolResponse();
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? staking_1.Pool.fromPartial(object.pool)
                : undefined;
        return message;
    },
};
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
            staking_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
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
                    message.params = staking_1.Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? staking_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? staking_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? staking_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Validators = this.Validators.bind(this);
        this.Validator = this.Validator.bind(this);
        this.ValidatorDelegations = this.ValidatorDelegations.bind(this);
        this.ValidatorUnbondingDelegations =
            this.ValidatorUnbondingDelegations.bind(this);
        this.Delegation = this.Delegation.bind(this);
        this.UnbondingDelegation = this.UnbondingDelegation.bind(this);
        this.DelegatorDelegations = this.DelegatorDelegations.bind(this);
        this.DelegatorUnbondingDelegations =
            this.DelegatorUnbondingDelegations.bind(this);
        this.Redelegations = this.Redelegations.bind(this);
        this.DelegatorValidators = this.DelegatorValidators.bind(this);
        this.DelegatorValidator = this.DelegatorValidator.bind(this);
        this.HistoricalInfo = this.HistoricalInfo.bind(this);
        this.Pool = this.Pool.bind(this);
        this.Params = this.Params.bind(this);
    }
    Validators(request) {
        const data = exports.QueryValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validators", data);
        return promise.then((data) => exports.QueryValidatorsResponse.decode(new _m0.Reader(data)));
    }
    Validator(request) {
        const data = exports.QueryValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Validator", data);
        return promise.then((data) => exports.QueryValidatorResponse.decode(new _m0.Reader(data)));
    }
    ValidatorDelegations(request) {
        const data = exports.QueryValidatorDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorDelegations", data);
        return promise.then((data) => exports.QueryValidatorDelegationsResponse.decode(new _m0.Reader(data)));
    }
    ValidatorUnbondingDelegations(request) {
        const data = exports.QueryValidatorUnbondingDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "ValidatorUnbondingDelegations", data);
        return promise.then((data) => exports.QueryValidatorUnbondingDelegationsResponse.decode(new _m0.Reader(data)));
    }
    Delegation(request) {
        const data = exports.QueryDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Delegation", data);
        return promise.then((data) => exports.QueryDelegationResponse.decode(new _m0.Reader(data)));
    }
    UnbondingDelegation(request) {
        const data = exports.QueryUnbondingDelegationRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "UnbondingDelegation", data);
        return promise.then((data) => exports.QueryUnbondingDelegationResponse.decode(new _m0.Reader(data)));
    }
    DelegatorDelegations(request) {
        const data = exports.QueryDelegatorDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorDelegations", data);
        return promise.then((data) => exports.QueryDelegatorDelegationsResponse.decode(new _m0.Reader(data)));
    }
    DelegatorUnbondingDelegations(request) {
        const data = exports.QueryDelegatorUnbondingDelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorUnbondingDelegations", data);
        return promise.then((data) => exports.QueryDelegatorUnbondingDelegationsResponse.decode(new _m0.Reader(data)));
    }
    Redelegations(request) {
        const data = exports.QueryRedelegationsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Redelegations", data);
        return promise.then((data) => exports.QueryRedelegationsResponse.decode(new _m0.Reader(data)));
    }
    DelegatorValidators(request) {
        const data = exports.QueryDelegatorValidatorsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidators", data);
        return promise.then((data) => exports.QueryDelegatorValidatorsResponse.decode(new _m0.Reader(data)));
    }
    DelegatorValidator(request) {
        const data = exports.QueryDelegatorValidatorRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "DelegatorValidator", data);
        return promise.then((data) => exports.QueryDelegatorValidatorResponse.decode(new _m0.Reader(data)));
    }
    HistoricalInfo(request) {
        const data = exports.QueryHistoricalInfoRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "HistoricalInfo", data);
        return promise.then((data) => exports.QueryHistoricalInfoResponse.decode(new _m0.Reader(data)));
    }
    Pool(request) {
        const data = exports.QueryPoolRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Pool", data);
        return promise.then((data) => exports.QueryPoolResponse.decode(new _m0.Reader(data)));
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
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