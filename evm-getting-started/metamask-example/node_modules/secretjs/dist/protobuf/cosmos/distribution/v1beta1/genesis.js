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
exports.GenesisState = exports.ValidatorSlashEventRecord = exports.DelegatorStartingInfoRecord = exports.ValidatorCurrentRewardsRecord = exports.ValidatorHistoricalRewardsRecord = exports.ValidatorAccumulatedCommissionRecord = exports.ValidatorOutstandingRewardsRecord = exports.DelegatorWithdrawInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const distribution_1 = require("./distribution");
const coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.distribution.v1beta1";
function createBaseDelegatorWithdrawInfo() {
    return { delegator_address: "", withdraw_address: "" };
}
exports.DelegatorWithdrawInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.withdraw_address !== "") {
            writer.uint32(18).string(message.withdraw_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorWithdrawInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.withdraw_address = reader.string();
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
            withdraw_address: isSet(object.withdraw_address)
                ? String(object.withdraw_address)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        message.withdraw_address !== undefined &&
            (obj.withdraw_address = message.withdraw_address);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDelegatorWithdrawInfo();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        message.withdraw_address = (_b = object.withdraw_address) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseValidatorOutstandingRewardsRecord() {
    return { validator_address: "", outstanding_rewards: [] };
}
exports.ValidatorOutstandingRewardsRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        for (const v of message.outstanding_rewards) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorOutstandingRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.outstanding_rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            validator_address: isSet(object.validator_address)
                ? String(object.validator_address)
                : "",
            outstanding_rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.outstanding_rewards)
                ? object.outstanding_rewards.map((e) => coin_1.DecCoin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        if (message.outstanding_rewards) {
            obj.outstanding_rewards = message.outstanding_rewards.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.outstanding_rewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseValidatorOutstandingRewardsRecord();
        message.validator_address = (_a = object.validator_address) !== null && _a !== void 0 ? _a : "";
        message.outstanding_rewards =
            ((_b = object.outstanding_rewards) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.DecCoin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseValidatorAccumulatedCommissionRecord() {
    return { validator_address: "", accumulated: undefined };
}
exports.ValidatorAccumulatedCommissionRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.accumulated !== undefined) {
            distribution_1.ValidatorAccumulatedCommission.encode(message.accumulated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorAccumulatedCommissionRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.accumulated = distribution_1.ValidatorAccumulatedCommission.decode(reader, reader.uint32());
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
            validator_address: isSet(object.validator_address)
                ? String(object.validator_address)
                : "",
            accumulated: isSet(object.accumulated)
                ? distribution_1.ValidatorAccumulatedCommission.fromJSON(object.accumulated)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.accumulated !== undefined &&
            (obj.accumulated = message.accumulated
                ? distribution_1.ValidatorAccumulatedCommission.toJSON(message.accumulated)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorAccumulatedCommissionRecord();
        message.validator_address = (_a = object.validator_address) !== null && _a !== void 0 ? _a : "";
        message.accumulated =
            object.accumulated !== undefined && object.accumulated !== null
                ? distribution_1.ValidatorAccumulatedCommission.fromPartial(object.accumulated)
                : undefined;
        return message;
    },
};
function createBaseValidatorHistoricalRewardsRecord() {
    return { validator_address: "", period: "0", rewards: undefined };
}
exports.ValidatorHistoricalRewardsRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.period !== "0") {
            writer.uint32(16).uint64(message.period);
        }
        if (message.rewards !== undefined) {
            distribution_1.ValidatorHistoricalRewards.encode(message.rewards, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorHistoricalRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.period = longToString(reader.uint64());
                    break;
                case 3:
                    message.rewards = distribution_1.ValidatorHistoricalRewards.decode(reader, reader.uint32());
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
            validator_address: isSet(object.validator_address)
                ? String(object.validator_address)
                : "",
            period: isSet(object.period) ? String(object.period) : "0",
            rewards: isSet(object.rewards)
                ? distribution_1.ValidatorHistoricalRewards.fromJSON(object.rewards)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.period !== undefined && (obj.period = message.period);
        message.rewards !== undefined &&
            (obj.rewards = message.rewards
                ? distribution_1.ValidatorHistoricalRewards.toJSON(message.rewards)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseValidatorHistoricalRewardsRecord();
        message.validator_address = (_a = object.validator_address) !== null && _a !== void 0 ? _a : "";
        message.period = (_b = object.period) !== null && _b !== void 0 ? _b : "0";
        message.rewards =
            object.rewards !== undefined && object.rewards !== null
                ? distribution_1.ValidatorHistoricalRewards.fromPartial(object.rewards)
                : undefined;
        return message;
    },
};
function createBaseValidatorCurrentRewardsRecord() {
    return { validator_address: "", rewards: undefined };
}
exports.ValidatorCurrentRewardsRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.rewards !== undefined) {
            distribution_1.ValidatorCurrentRewards.encode(message.rewards, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorCurrentRewardsRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.rewards = distribution_1.ValidatorCurrentRewards.decode(reader, reader.uint32());
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
            validator_address: isSet(object.validator_address)
                ? String(object.validator_address)
                : "",
            rewards: isSet(object.rewards)
                ? distribution_1.ValidatorCurrentRewards.fromJSON(object.rewards)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.rewards !== undefined &&
            (obj.rewards = message.rewards
                ? distribution_1.ValidatorCurrentRewards.toJSON(message.rewards)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorCurrentRewardsRecord();
        message.validator_address = (_a = object.validator_address) !== null && _a !== void 0 ? _a : "";
        message.rewards =
            object.rewards !== undefined && object.rewards !== null
                ? distribution_1.ValidatorCurrentRewards.fromPartial(object.rewards)
                : undefined;
        return message;
    },
};
function createBaseDelegatorStartingInfoRecord() {
    return {
        delegator_address: "",
        validator_address: "",
        starting_info: undefined,
    };
}
exports.DelegatorStartingInfoRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.starting_info !== undefined) {
            distribution_1.DelegatorStartingInfo.encode(message.starting_info, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorStartingInfoRecord();
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
                    message.starting_info = distribution_1.DelegatorStartingInfo.decode(reader, reader.uint32());
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
            starting_info: isSet(object.starting_info)
                ? distribution_1.DelegatorStartingInfo.fromJSON(object.starting_info)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.starting_info !== undefined &&
            (obj.starting_info = message.starting_info
                ? distribution_1.DelegatorStartingInfo.toJSON(message.starting_info)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDelegatorStartingInfoRecord();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        message.validator_address = (_b = object.validator_address) !== null && _b !== void 0 ? _b : "";
        message.starting_info =
            object.starting_info !== undefined && object.starting_info !== null
                ? distribution_1.DelegatorStartingInfo.fromPartial(object.starting_info)
                : undefined;
        return message;
    },
};
function createBaseValidatorSlashEventRecord() {
    return {
        validator_address: "",
        height: "0",
        period: "0",
        validator_slash_event: undefined,
    };
}
exports.ValidatorSlashEventRecord = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        if (message.height !== "0") {
            writer.uint32(16).uint64(message.height);
        }
        if (message.period !== "0") {
            writer.uint32(24).uint64(message.period);
        }
        if (message.validator_slash_event !== undefined) {
            distribution_1.ValidatorSlashEvent.encode(message.validator_slash_event, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEventRecord();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.height = longToString(reader.uint64());
                    break;
                case 3:
                    message.period = longToString(reader.uint64());
                    break;
                case 4:
                    message.validator_slash_event = distribution_1.ValidatorSlashEvent.decode(reader, reader.uint32());
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
            validator_address: isSet(object.validator_address)
                ? String(object.validator_address)
                : "",
            height: isSet(object.height) ? String(object.height) : "0",
            period: isSet(object.period) ? String(object.period) : "0",
            validator_slash_event: isSet(object.validator_slash_event)
                ? distribution_1.ValidatorSlashEvent.fromJSON(object.validator_slash_event)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.height !== undefined && (obj.height = message.height);
        message.period !== undefined && (obj.period = message.period);
        message.validator_slash_event !== undefined &&
            (obj.validator_slash_event = message.validator_slash_event
                ? distribution_1.ValidatorSlashEvent.toJSON(message.validator_slash_event)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseValidatorSlashEventRecord();
        message.validator_address = (_a = object.validator_address) !== null && _a !== void 0 ? _a : "";
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : "0";
        message.period = (_c = object.period) !== null && _c !== void 0 ? _c : "0";
        message.validator_slash_event =
            object.validator_slash_event !== undefined &&
                object.validator_slash_event !== null
                ? distribution_1.ValidatorSlashEvent.fromPartial(object.validator_slash_event)
                : undefined;
        return message;
    },
};
function createBaseGenesisState() {
    return {
        params: undefined,
        fee_pool: undefined,
        delegator_withdraw_infos: [],
        previous_proposer: "",
        outstanding_rewards: [],
        validator_accumulated_commissions: [],
        validator_historical_rewards: [],
        validator_current_rewards: [],
        delegator_starting_infos: [],
        validator_slash_events: [],
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.params !== undefined) {
            distribution_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.fee_pool !== undefined) {
            distribution_1.FeePool.encode(message.fee_pool, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegator_withdraw_infos) {
            exports.DelegatorWithdrawInfo.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.previous_proposer !== "") {
            writer.uint32(34).string(message.previous_proposer);
        }
        for (const v of message.outstanding_rewards) {
            exports.ValidatorOutstandingRewardsRecord.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.validator_accumulated_commissions) {
            exports.ValidatorAccumulatedCommissionRecord.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (const v of message.validator_historical_rewards) {
            exports.ValidatorHistoricalRewardsRecord.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.validator_current_rewards) {
            exports.ValidatorCurrentRewardsRecord.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.delegator_starting_infos) {
            exports.DelegatorStartingInfoRecord.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.validator_slash_events) {
            exports.ValidatorSlashEventRecord.encode(v, writer.uint32(82).fork()).ldelim();
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
                    message.params = distribution_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.fee_pool = distribution_1.FeePool.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delegator_withdraw_infos.push(exports.DelegatorWithdrawInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.previous_proposer = reader.string();
                    break;
                case 5:
                    message.outstanding_rewards.push(exports.ValidatorOutstandingRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.validator_accumulated_commissions.push(exports.ValidatorAccumulatedCommissionRecord.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.validator_historical_rewards.push(exports.ValidatorHistoricalRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.validator_current_rewards.push(exports.ValidatorCurrentRewardsRecord.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.delegator_starting_infos.push(exports.DelegatorStartingInfoRecord.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.validator_slash_events.push(exports.ValidatorSlashEventRecord.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? distribution_1.Params.fromJSON(object.params) : undefined,
            fee_pool: isSet(object.fee_pool)
                ? distribution_1.FeePool.fromJSON(object.fee_pool)
                : undefined,
            delegator_withdraw_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.delegator_withdraw_infos)
                ? object.delegator_withdraw_infos.map((e) => exports.DelegatorWithdrawInfo.fromJSON(e))
                : [],
            previous_proposer: isSet(object.previous_proposer)
                ? String(object.previous_proposer)
                : "",
            outstanding_rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.outstanding_rewards)
                ? object.outstanding_rewards.map((e) => exports.ValidatorOutstandingRewardsRecord.fromJSON(e))
                : [],
            validator_accumulated_commissions: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_accumulated_commissions)
                ? object.validator_accumulated_commissions.map((e) => exports.ValidatorAccumulatedCommissionRecord.fromJSON(e))
                : [],
            validator_historical_rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_historical_rewards)
                ? object.validator_historical_rewards.map((e) => exports.ValidatorHistoricalRewardsRecord.fromJSON(e))
                : [],
            validator_current_rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_current_rewards)
                ? object.validator_current_rewards.map((e) => exports.ValidatorCurrentRewardsRecord.fromJSON(e))
                : [],
            delegator_starting_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.delegator_starting_infos)
                ? object.delegator_starting_infos.map((e) => exports.DelegatorStartingInfoRecord.fromJSON(e))
                : [],
            validator_slash_events: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_slash_events)
                ? object.validator_slash_events.map((e) => exports.ValidatorSlashEventRecord.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? distribution_1.Params.toJSON(message.params) : undefined);
        message.fee_pool !== undefined &&
            (obj.fee_pool = message.fee_pool
                ? distribution_1.FeePool.toJSON(message.fee_pool)
                : undefined);
        if (message.delegator_withdraw_infos) {
            obj.delegator_withdraw_infos = message.delegator_withdraw_infos.map((e) => e ? exports.DelegatorWithdrawInfo.toJSON(e) : undefined);
        }
        else {
            obj.delegator_withdraw_infos = [];
        }
        message.previous_proposer !== undefined &&
            (obj.previous_proposer = message.previous_proposer);
        if (message.outstanding_rewards) {
            obj.outstanding_rewards = message.outstanding_rewards.map((e) => e ? exports.ValidatorOutstandingRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.outstanding_rewards = [];
        }
        if (message.validator_accumulated_commissions) {
            obj.validator_accumulated_commissions =
                message.validator_accumulated_commissions.map((e) => e ? exports.ValidatorAccumulatedCommissionRecord.toJSON(e) : undefined);
        }
        else {
            obj.validator_accumulated_commissions = [];
        }
        if (message.validator_historical_rewards) {
            obj.validator_historical_rewards =
                message.validator_historical_rewards.map((e) => e ? exports.ValidatorHistoricalRewardsRecord.toJSON(e) : undefined);
        }
        else {
            obj.validator_historical_rewards = [];
        }
        if (message.validator_current_rewards) {
            obj.validator_current_rewards = message.validator_current_rewards.map((e) => (e ? exports.ValidatorCurrentRewardsRecord.toJSON(e) : undefined));
        }
        else {
            obj.validator_current_rewards = [];
        }
        if (message.delegator_starting_infos) {
            obj.delegator_starting_infos = message.delegator_starting_infos.map((e) => e ? exports.DelegatorStartingInfoRecord.toJSON(e) : undefined);
        }
        else {
            obj.delegator_starting_infos = [];
        }
        if (message.validator_slash_events) {
            obj.validator_slash_events = message.validator_slash_events.map((e) => e ? exports.ValidatorSlashEventRecord.toJSON(e) : undefined);
        }
        else {
            obj.validator_slash_events = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? distribution_1.Params.fromPartial(object.params)
                : undefined;
        message.fee_pool =
            object.fee_pool !== undefined && object.fee_pool !== null
                ? distribution_1.FeePool.fromPartial(object.fee_pool)
                : undefined;
        message.delegator_withdraw_infos =
            ((_a = object.delegator_withdraw_infos) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DelegatorWithdrawInfo.fromPartial(e))) || [];
        message.previous_proposer = (_b = object.previous_proposer) !== null && _b !== void 0 ? _b : "";
        message.outstanding_rewards =
            ((_c = object.outstanding_rewards) === null || _c === void 0 ? void 0 : _c.map((e) => exports.ValidatorOutstandingRewardsRecord.fromPartial(e))) || [];
        message.validator_accumulated_commissions =
            ((_d = object.validator_accumulated_commissions) === null || _d === void 0 ? void 0 : _d.map((e) => exports.ValidatorAccumulatedCommissionRecord.fromPartial(e))) || [];
        message.validator_historical_rewards =
            ((_e = object.validator_historical_rewards) === null || _e === void 0 ? void 0 : _e.map((e) => exports.ValidatorHistoricalRewardsRecord.fromPartial(e))) || [];
        message.validator_current_rewards =
            ((_f = object.validator_current_rewards) === null || _f === void 0 ? void 0 : _f.map((e) => exports.ValidatorCurrentRewardsRecord.fromPartial(e))) || [];
        message.delegator_starting_infos =
            ((_g = object.delegator_starting_infos) === null || _g === void 0 ? void 0 : _g.map((e) => exports.DelegatorStartingInfoRecord.fromPartial(e))) || [];
        message.validator_slash_events =
            ((_h = object.validator_slash_events) === null || _h === void 0 ? void 0 : _h.map((e) => exports.ValidatorSlashEventRecord.fromPartial(e))) || [];
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