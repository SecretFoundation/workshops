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
exports.MsgClientImpl = exports.MsgUndelegateResponse = exports.MsgUndelegate = exports.MsgBeginRedelegateResponse = exports.MsgBeginRedelegate = exports.MsgDelegateResponse = exports.MsgDelegate = exports.MsgEditValidatorResponse = exports.MsgEditValidator = exports.MsgCreateValidatorResponse = exports.MsgCreateValidator = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const staking_1 = require("./staking");
const any_1 = require("../../../google/protobuf/any");
const coin_1 = require("../../base/v1beta1/coin");
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "cosmos.staking.v1beta1";
function createBaseMsgCreateValidator() {
    return {
        description: undefined,
        commission: undefined,
        min_self_delegation: "",
        delegator_address: "",
        validator_address: "",
        pubkey: undefined,
        value: undefined,
    };
}
exports.MsgCreateValidator = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.description !== undefined) {
            staking_1.Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            staking_1.CommissionRates.encode(message.commission, writer.uint32(18).fork()).ldelim();
        }
        if (message.min_self_delegation !== "") {
            writer.uint32(26).string(message.min_self_delegation);
        }
        if (message.delegator_address !== "") {
            writer.uint32(34).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(42).string(message.validator_address);
        }
        if (message.pubkey !== undefined) {
            any_1.Any.encode(message.pubkey, writer.uint32(50).fork()).ldelim();
        }
        if (message.value !== undefined) {
            coin_1.Coin.encode(message.value, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = staking_1.Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.commission = staking_1.CommissionRates.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.min_self_delegation = reader.string();
                    break;
                case 4:
                    message.delegator_address = reader.string();
                    break;
                case 5:
                    message.validator_address = reader.string();
                    break;
                case 6:
                    message.pubkey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.value = coin_1.Coin.decode(reader, reader.uint32());
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
            description: isSet(object.description)
                ? staking_1.Description.fromJSON(object.description)
                : undefined,
            commission: isSet(object.commission)
                ? staking_1.CommissionRates.fromJSON(object.commission)
                : undefined,
            min_self_delegation: isSet(object.min_self_delegation)
                ? String(object.min_self_delegation)
                : "",
            delegator_address: isSet(object.delegator_address)
                ? String(object.delegator_address)
                : "",
            validator_address: isSet(object.validator_address)
                ? String(object.validator_address)
                : "",
            pubkey: isSet(object.pubkey) ? any_1.Any.fromJSON(object.pubkey) : undefined,
            value: isSet(object.value) ? coin_1.Coin.fromJSON(object.value) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description
                ? staking_1.Description.toJSON(message.description)
                : undefined);
        message.commission !== undefined &&
            (obj.commission = message.commission
                ? staking_1.CommissionRates.toJSON(message.commission)
                : undefined);
        message.min_self_delegation !== undefined &&
            (obj.min_self_delegation = message.min_self_delegation);
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.pubkey !== undefined &&
            (obj.pubkey = message.pubkey ? any_1.Any.toJSON(message.pubkey) : undefined);
        message.value !== undefined &&
            (obj.value = message.value ? coin_1.Coin.toJSON(message.value) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgCreateValidator();
        message.description =
            object.description !== undefined && object.description !== null
                ? staking_1.Description.fromPartial(object.description)
                : undefined;
        message.commission =
            object.commission !== undefined && object.commission !== null
                ? staking_1.CommissionRates.fromPartial(object.commission)
                : undefined;
        message.min_self_delegation = (_a = object.min_self_delegation) !== null && _a !== void 0 ? _a : "";
        message.delegator_address = (_b = object.delegator_address) !== null && _b !== void 0 ? _b : "";
        message.validator_address = (_c = object.validator_address) !== null && _c !== void 0 ? _c : "";
        message.pubkey =
            object.pubkey !== undefined && object.pubkey !== null
                ? any_1.Any.fromPartial(object.pubkey)
                : undefined;
        message.value =
            object.value !== undefined && object.value !== null
                ? coin_1.Coin.fromPartial(object.value)
                : undefined;
        return message;
    },
};
function createBaseMsgCreateValidatorResponse() {
    return {};
}
exports.MsgCreateValidatorResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateValidatorResponse();
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
        const message = createBaseMsgCreateValidatorResponse();
        return message;
    },
};
function createBaseMsgEditValidator() {
    return {
        description: undefined,
        validator_address: "",
        commission_rate: "",
        min_self_delegation: "",
    };
}
exports.MsgEditValidator = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.description !== undefined) {
            staking_1.Description.encode(message.description, writer.uint32(10).fork()).ldelim();
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.commission_rate !== "") {
            writer.uint32(26).string(message.commission_rate);
        }
        if (message.min_self_delegation !== "") {
            writer.uint32(34).string(message.min_self_delegation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEditValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.description = staking_1.Description.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.commission_rate = reader.string();
                    break;
                case 4:
                    message.min_self_delegation = reader.string();
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
            description: isSet(object.description)
                ? staking_1.Description.fromJSON(object.description)
                : undefined,
            validator_address: isSet(object.validator_address)
                ? String(object.validator_address)
                : "",
            commission_rate: isSet(object.commission_rate)
                ? String(object.commission_rate)
                : "",
            min_self_delegation: isSet(object.min_self_delegation)
                ? String(object.min_self_delegation)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.description !== undefined &&
            (obj.description = message.description
                ? staking_1.Description.toJSON(message.description)
                : undefined);
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.commission_rate !== undefined &&
            (obj.commission_rate = message.commission_rate);
        message.min_self_delegation !== undefined &&
            (obj.min_self_delegation = message.min_self_delegation);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgEditValidator();
        message.description =
            object.description !== undefined && object.description !== null
                ? staking_1.Description.fromPartial(object.description)
                : undefined;
        message.validator_address = (_a = object.validator_address) !== null && _a !== void 0 ? _a : "";
        message.commission_rate = (_b = object.commission_rate) !== null && _b !== void 0 ? _b : "";
        message.min_self_delegation = (_c = object.min_self_delegation) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseMsgEditValidatorResponse() {
    return {};
}
exports.MsgEditValidatorResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgEditValidatorResponse();
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
        const message = createBaseMsgEditValidatorResponse();
        return message;
    },
};
function createBaseMsgDelegate() {
    return { delegator_address: "", validator_address: "", amount: undefined };
}
exports.MsgDelegate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            delegator_address: isSet(object.delegator_address)
                ? String(object.delegator_address)
                : "",
            validator_address: isSet(object.validator_address)
                ? String(object.validator_address)
                : "",
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgDelegate();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        message.validator_address = (_b = object.validator_address) !== null && _b !== void 0 ? _b : "";
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        return message;
    },
};
function createBaseMsgDelegateResponse() {
    return {};
}
exports.MsgDelegateResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgDelegateResponse();
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
        const message = createBaseMsgDelegateResponse();
        return message;
    },
};
function createBaseMsgBeginRedelegate() {
    return {
        delegator_address: "",
        validator_src_address: "",
        validator_dst_address: "",
        amount: undefined,
    };
}
exports.MsgBeginRedelegate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_src_address !== "") {
            writer.uint32(18).string(message.validator_src_address);
        }
        if (message.validator_dst_address !== "") {
            writer.uint32(26).string(message.validator_dst_address);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginRedelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_src_address = reader.string();
                    break;
                case 3:
                    message.validator_dst_address = reader.string();
                    break;
                case 4:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            delegator_address: isSet(object.delegator_address)
                ? String(object.delegator_address)
                : "",
            validator_src_address: isSet(object.validator_src_address)
                ? String(object.validator_src_address)
                : "",
            validator_dst_address: isSet(object.validator_dst_address)
                ? String(object.validator_dst_address)
                : "",
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        message.validator_src_address !== undefined &&
            (obj.validator_src_address = message.validator_src_address);
        message.validator_dst_address !== undefined &&
            (obj.validator_dst_address = message.validator_dst_address);
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgBeginRedelegate();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        message.validator_src_address = (_b = object.validator_src_address) !== null && _b !== void 0 ? _b : "";
        message.validator_dst_address = (_c = object.validator_dst_address) !== null && _c !== void 0 ? _c : "";
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        return message;
    },
};
function createBaseMsgBeginRedelegateResponse() {
    return { completion_time: undefined };
}
exports.MsgBeginRedelegateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.completion_time !== undefined) {
            timestamp_1.Timestamp.encode(message.completion_time, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgBeginRedelegateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completion_time = timestamp_1.Timestamp.decode(reader, reader.uint32());
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
            completion_time: isSet(object.completion_time)
                ? fromJsonTimestamp(object.completion_time)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.completion_time !== undefined &&
            (obj.completion_time = fromTimestamp(message.completion_time).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgBeginRedelegateResponse();
        message.completion_time =
            object.completion_time !== undefined && object.completion_time !== null
                ? timestamp_1.Timestamp.fromPartial(object.completion_time)
                : undefined;
        return message;
    },
};
function createBaseMsgUndelegate() {
    return { delegator_address: "", validator_address: "", amount: undefined };
}
exports.MsgUndelegate = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.amount !== undefined) {
            coin_1.Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegate();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
                    break;
                case 3:
                    message.amount = coin_1.Coin.decode(reader, reader.uint32());
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
            delegator_address: isSet(object.delegator_address)
                ? String(object.delegator_address)
                : "",
            validator_address: isSet(object.validator_address)
                ? String(object.validator_address)
                : "",
            amount: isSet(object.amount) ? coin_1.Coin.fromJSON(object.amount) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.amount !== undefined &&
            (obj.amount = message.amount ? coin_1.Coin.toJSON(message.amount) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUndelegate();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        message.validator_address = (_b = object.validator_address) !== null && _b !== void 0 ? _b : "";
        message.amount =
            object.amount !== undefined && object.amount !== null
                ? coin_1.Coin.fromPartial(object.amount)
                : undefined;
        return message;
    },
};
function createBaseMsgUndelegateResponse() {
    return { completion_time: undefined };
}
exports.MsgUndelegateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.completion_time !== undefined) {
            timestamp_1.Timestamp.encode(message.completion_time, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUndelegateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.completion_time = timestamp_1.Timestamp.decode(reader, reader.uint32());
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
            completion_time: isSet(object.completion_time)
                ? fromJsonTimestamp(object.completion_time)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.completion_time !== undefined &&
            (obj.completion_time = fromTimestamp(message.completion_time).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgUndelegateResponse();
        message.completion_time =
            object.completion_time !== undefined && object.completion_time !== null
                ? timestamp_1.Timestamp.fromPartial(object.completion_time)
                : undefined;
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateValidator = this.CreateValidator.bind(this);
        this.EditValidator = this.EditValidator.bind(this);
        this.Delegate = this.Delegate.bind(this);
        this.BeginRedelegate = this.BeginRedelegate.bind(this);
        this.Undelegate = this.Undelegate.bind(this);
    }
    CreateValidator(request) {
        const data = exports.MsgCreateValidator.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "CreateValidator", data);
        return promise.then((data) => exports.MsgCreateValidatorResponse.decode(new _m0.Reader(data)));
    }
    EditValidator(request) {
        const data = exports.MsgEditValidator.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "EditValidator", data);
        return promise.then((data) => exports.MsgEditValidatorResponse.decode(new _m0.Reader(data)));
    }
    Delegate(request) {
        const data = exports.MsgDelegate.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Delegate", data);
        return promise.then((data) => exports.MsgDelegateResponse.decode(new _m0.Reader(data)));
    }
    BeginRedelegate(request) {
        const data = exports.MsgBeginRedelegate.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "BeginRedelegate", data);
        return promise.then((data) => exports.MsgBeginRedelegateResponse.decode(new _m0.Reader(data)));
    }
    Undelegate(request) {
        const data = exports.MsgUndelegate.encode(request).finish();
        const promise = this.rpc.request("cosmos.staking.v1beta1.Msg", "Undelegate", data);
        return promise.then((data) => exports.MsgUndelegateResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
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
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map