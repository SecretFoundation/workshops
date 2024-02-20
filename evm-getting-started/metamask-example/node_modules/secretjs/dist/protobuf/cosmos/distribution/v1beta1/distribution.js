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
exports.CommunityPoolSpendProposalWithDeposit = exports.DelegationDelegatorReward = exports.DelegatorStartingInfo = exports.CommunityPoolSpendProposal = exports.FeePool = exports.ValidatorSlashEvents = exports.ValidatorSlashEvent = exports.ValidatorOutstandingRewards = exports.ValidatorAccumulatedCommission = exports.ValidatorCurrentRewards = exports.ValidatorHistoricalRewards = exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.distribution.v1beta1";
function createBaseParams() {
    return {
        community_tax: "",
        base_proposer_reward: "",
        bonus_proposer_reward: "",
        withdraw_addr_enabled: false,
        secret_foundation_tax: "",
        secret_foundation_address: "",
        minimum_restake_threshold: "",
        restake_period: "",
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.community_tax !== "") {
            writer.uint32(10).string(message.community_tax);
        }
        if (message.base_proposer_reward !== "") {
            writer.uint32(18).string(message.base_proposer_reward);
        }
        if (message.bonus_proposer_reward !== "") {
            writer.uint32(26).string(message.bonus_proposer_reward);
        }
        if (message.withdraw_addr_enabled === true) {
            writer.uint32(32).bool(message.withdraw_addr_enabled);
        }
        if (message.secret_foundation_tax !== "") {
            writer.uint32(42).string(message.secret_foundation_tax);
        }
        if (message.secret_foundation_address !== "") {
            writer.uint32(50).string(message.secret_foundation_address);
        }
        if (message.minimum_restake_threshold !== "") {
            writer.uint32(58).string(message.minimum_restake_threshold);
        }
        if (message.restake_period !== "") {
            writer.uint32(66).string(message.restake_period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.community_tax = reader.string();
                    break;
                case 2:
                    message.base_proposer_reward = reader.string();
                    break;
                case 3:
                    message.bonus_proposer_reward = reader.string();
                    break;
                case 4:
                    message.withdraw_addr_enabled = reader.bool();
                    break;
                case 5:
                    message.secret_foundation_tax = reader.string();
                    break;
                case 6:
                    message.secret_foundation_address = reader.string();
                    break;
                case 7:
                    message.minimum_restake_threshold = reader.string();
                    break;
                case 8:
                    message.restake_period = reader.string();
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
            community_tax: isSet(object.community_tax)
                ? String(object.community_tax)
                : "",
            base_proposer_reward: isSet(object.base_proposer_reward)
                ? String(object.base_proposer_reward)
                : "",
            bonus_proposer_reward: isSet(object.bonus_proposer_reward)
                ? String(object.bonus_proposer_reward)
                : "",
            withdraw_addr_enabled: isSet(object.withdraw_addr_enabled)
                ? Boolean(object.withdraw_addr_enabled)
                : false,
            secret_foundation_tax: isSet(object.secret_foundation_tax)
                ? String(object.secret_foundation_tax)
                : "",
            secret_foundation_address: isSet(object.secret_foundation_address)
                ? String(object.secret_foundation_address)
                : "",
            minimum_restake_threshold: isSet(object.minimum_restake_threshold)
                ? String(object.minimum_restake_threshold)
                : "",
            restake_period: isSet(object.restake_period)
                ? String(object.restake_period)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.community_tax !== undefined &&
            (obj.community_tax = message.community_tax);
        message.base_proposer_reward !== undefined &&
            (obj.base_proposer_reward = message.base_proposer_reward);
        message.bonus_proposer_reward !== undefined &&
            (obj.bonus_proposer_reward = message.bonus_proposer_reward);
        message.withdraw_addr_enabled !== undefined &&
            (obj.withdraw_addr_enabled = message.withdraw_addr_enabled);
        message.secret_foundation_tax !== undefined &&
            (obj.secret_foundation_tax = message.secret_foundation_tax);
        message.secret_foundation_address !== undefined &&
            (obj.secret_foundation_address = message.secret_foundation_address);
        message.minimum_restake_threshold !== undefined &&
            (obj.minimum_restake_threshold = message.minimum_restake_threshold);
        message.restake_period !== undefined &&
            (obj.restake_period = message.restake_period);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseParams();
        message.community_tax = (_a = object.community_tax) !== null && _a !== void 0 ? _a : "";
        message.base_proposer_reward = (_b = object.base_proposer_reward) !== null && _b !== void 0 ? _b : "";
        message.bonus_proposer_reward = (_c = object.bonus_proposer_reward) !== null && _c !== void 0 ? _c : "";
        message.withdraw_addr_enabled = (_d = object.withdraw_addr_enabled) !== null && _d !== void 0 ? _d : false;
        message.secret_foundation_tax = (_e = object.secret_foundation_tax) !== null && _e !== void 0 ? _e : "";
        message.secret_foundation_address = (_f = object.secret_foundation_address) !== null && _f !== void 0 ? _f : "";
        message.minimum_restake_threshold = (_g = object.minimum_restake_threshold) !== null && _g !== void 0 ? _g : "";
        message.restake_period = (_h = object.restake_period) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseValidatorHistoricalRewards() {
    return { cumulative_reward_ratio: [], reference_count: 0 };
}
exports.ValidatorHistoricalRewards = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.cumulative_reward_ratio) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.reference_count !== 0) {
            writer.uint32(16).uint32(message.reference_count);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorHistoricalRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.cumulative_reward_ratio.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.reference_count = reader.uint32();
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
            cumulative_reward_ratio: Array.isArray(object === null || object === void 0 ? void 0 : object.cumulative_reward_ratio)
                ? object.cumulative_reward_ratio.map((e) => coin_1.DecCoin.fromJSON(e))
                : [],
            reference_count: isSet(object.reference_count)
                ? Number(object.reference_count)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.cumulative_reward_ratio) {
            obj.cumulative_reward_ratio = message.cumulative_reward_ratio.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.cumulative_reward_ratio = [];
        }
        message.reference_count !== undefined &&
            (obj.reference_count = Math.round(message.reference_count));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseValidatorHistoricalRewards();
        message.cumulative_reward_ratio =
            ((_a = object.cumulative_reward_ratio) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.DecCoin.fromPartial(e))) || [];
        message.reference_count = (_b = object.reference_count) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseValidatorCurrentRewards() {
    return { rewards: [], period: "0" };
}
exports.ValidatorCurrentRewards = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.period !== "0") {
            writer.uint32(16).uint64(message.period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorCurrentRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.period = longToString(reader.uint64());
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
            rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards)
                ? object.rewards.map((e) => coin_1.DecCoin.fromJSON(e))
                : [],
            period: isSet(object.period) ? String(object.period) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        message.period !== undefined && (obj.period = message.period);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseValidatorCurrentRewards();
        message.rewards = ((_a = object.rewards) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.DecCoin.fromPartial(e))) || [];
        message.period = (_b = object.period) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseValidatorAccumulatedCommission() {
    return { commission: [] };
}
exports.ValidatorAccumulatedCommission = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.commission) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorAccumulatedCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            commission: Array.isArray(object === null || object === void 0 ? void 0 : object.commission)
                ? object.commission.map((e) => coin_1.DecCoin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.commission) {
            obj.commission = message.commission.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.commission = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorAccumulatedCommission();
        message.commission =
            ((_a = object.commission) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.DecCoin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseValidatorOutstandingRewards() {
    return { rewards: [] };
}
exports.ValidatorOutstandingRewards = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.rewards) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorOutstandingRewards();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rewards.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            rewards: Array.isArray(object === null || object === void 0 ? void 0 : object.rewards)
                ? object.rewards.map((e) => coin_1.DecCoin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.rewards) {
            obj.rewards = message.rewards.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.rewards = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorOutstandingRewards();
        message.rewards = ((_a = object.rewards) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.DecCoin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseValidatorSlashEvent() {
    return { validator_period: "0", fraction: "" };
}
exports.ValidatorSlashEvent = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_period !== "0") {
            writer.uint32(8).uint64(message.validator_period);
        }
        if (message.fraction !== "") {
            writer.uint32(18).string(message.fraction);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEvent();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_period = longToString(reader.uint64());
                    break;
                case 2:
                    message.fraction = reader.string();
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
            validator_period: isSet(object.validator_period)
                ? String(object.validator_period)
                : "0",
            fraction: isSet(object.fraction) ? String(object.fraction) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_period !== undefined &&
            (obj.validator_period = message.validator_period);
        message.fraction !== undefined && (obj.fraction = message.fraction);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseValidatorSlashEvent();
        message.validator_period = (_a = object.validator_period) !== null && _a !== void 0 ? _a : "0";
        message.fraction = (_b = object.fraction) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseValidatorSlashEvents() {
    return { validator_slash_events: [] };
}
exports.ValidatorSlashEvents = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.validator_slash_events) {
            exports.ValidatorSlashEvent.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSlashEvents();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_slash_events.push(exports.ValidatorSlashEvent.decode(reader, reader.uint32()));
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
            validator_slash_events: Array.isArray(object === null || object === void 0 ? void 0 : object.validator_slash_events)
                ? object.validator_slash_events.map((e) => exports.ValidatorSlashEvent.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.validator_slash_events) {
            obj.validator_slash_events = message.validator_slash_events.map((e) => e ? exports.ValidatorSlashEvent.toJSON(e) : undefined);
        }
        else {
            obj.validator_slash_events = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValidatorSlashEvents();
        message.validator_slash_events =
            ((_a = object.validator_slash_events) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ValidatorSlashEvent.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFeePool() {
    return { community_pool: [] };
}
exports.FeePool = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.community_pool) {
            coin_1.DecCoin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFeePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.community_pool.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            community_pool: Array.isArray(object === null || object === void 0 ? void 0 : object.community_pool)
                ? object.community_pool.map((e) => coin_1.DecCoin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.community_pool) {
            obj.community_pool = message.community_pool.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.community_pool = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFeePool();
        message.community_pool =
            ((_a = object.community_pool) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.DecCoin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCommunityPoolSpendProposal() {
    return { title: "", description: "", recipient: "", amount: [] };
}
exports.CommunityPoolSpendProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommunityPoolSpendProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount)
                ? object.amount.map((e) => coin_1.Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        if (message.amount) {
            obj.amount = message.amount.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCommunityPoolSpendProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.recipient = (_c = object.recipient) !== null && _c !== void 0 ? _c : "";
        message.amount = ((_d = object.amount) === null || _d === void 0 ? void 0 : _d.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseDelegatorStartingInfo() {
    return { previous_period: "0", stake: "", height: "0" };
}
exports.DelegatorStartingInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.previous_period !== "0") {
            writer.uint32(8).uint64(message.previous_period);
        }
        if (message.stake !== "") {
            writer.uint32(18).string(message.stake);
        }
        if (message.height !== "0") {
            writer.uint32(24).uint64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegatorStartingInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.previous_period = longToString(reader.uint64());
                    break;
                case 2:
                    message.stake = reader.string();
                    break;
                case 3:
                    message.height = longToString(reader.uint64());
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
            previous_period: isSet(object.previous_period)
                ? String(object.previous_period)
                : "0",
            stake: isSet(object.stake) ? String(object.stake) : "",
            height: isSet(object.height) ? String(object.height) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.previous_period !== undefined &&
            (obj.previous_period = message.previous_period);
        message.stake !== undefined && (obj.stake = message.stake);
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDelegatorStartingInfo();
        message.previous_period = (_a = object.previous_period) !== null && _a !== void 0 ? _a : "0";
        message.stake = (_b = object.stake) !== null && _b !== void 0 ? _b : "";
        message.height = (_c = object.height) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseDelegationDelegatorReward() {
    return { validator_address: "", reward: [] };
}
exports.DelegationDelegatorReward = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.validator_address !== "") {
            writer.uint32(10).string(message.validator_address);
        }
        for (const v of message.reward) {
            coin_1.DecCoin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegationDelegatorReward();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.validator_address = reader.string();
                    break;
                case 2:
                    message.reward.push(coin_1.DecCoin.decode(reader, reader.uint32()));
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
            reward: Array.isArray(object === null || object === void 0 ? void 0 : object.reward)
                ? object.reward.map((e) => coin_1.DecCoin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        if (message.reward) {
            obj.reward = message.reward.map((e) => e ? coin_1.DecCoin.toJSON(e) : undefined);
        }
        else {
            obj.reward = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDelegationDelegatorReward();
        message.validator_address = (_a = object.validator_address) !== null && _a !== void 0 ? _a : "";
        message.reward = ((_b = object.reward) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.DecCoin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCommunityPoolSpendProposalWithDeposit() {
    return { title: "", description: "", recipient: "", amount: "", deposit: "" };
}
exports.CommunityPoolSpendProposalWithDeposit = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.recipient !== "") {
            writer.uint32(26).string(message.recipient);
        }
        if (message.amount !== "") {
            writer.uint32(34).string(message.amount);
        }
        if (message.deposit !== "") {
            writer.uint32(42).string(message.deposit);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommunityPoolSpendProposalWithDeposit();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.recipient = reader.string();
                    break;
                case 4:
                    message.amount = reader.string();
                    break;
                case 5:
                    message.deposit = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            recipient: isSet(object.recipient) ? String(object.recipient) : "",
            amount: isSet(object.amount) ? String(object.amount) : "",
            deposit: isSet(object.deposit) ? String(object.deposit) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        message.amount !== undefined && (obj.amount = message.amount);
        message.deposit !== undefined && (obj.deposit = message.deposit);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCommunityPoolSpendProposalWithDeposit();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.recipient = (_c = object.recipient) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "";
        message.deposit = (_e = object.deposit) !== null && _e !== void 0 ? _e : "";
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
//# sourceMappingURL=distribution.js.map