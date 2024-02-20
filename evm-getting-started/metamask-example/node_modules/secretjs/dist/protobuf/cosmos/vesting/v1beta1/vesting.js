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
exports.PermanentLockedAccount = exports.PeriodicVestingAccount = exports.Period = exports.DelayedVestingAccount = exports.ContinuousVestingAccount = exports.BaseVestingAccount = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const auth_1 = require("../../auth/v1beta1/auth");
const coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.vesting.v1beta1";
function createBaseBaseVestingAccount() {
    return {
        base_account: undefined,
        original_vesting: [],
        delegated_free: [],
        delegated_vesting: [],
        end_time: "0",
    };
}
exports.BaseVestingAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.base_account !== undefined) {
            auth_1.BaseAccount.encode(message.base_account, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.original_vesting) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegated_free) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.delegated_vesting) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (message.end_time !== "0") {
            writer.uint32(40).int64(message.end_time);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBaseVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_account = auth_1.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.original_vesting.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.delegated_free.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.delegated_vesting.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.end_time = longToString(reader.int64());
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
            base_account: isSet(object.base_account)
                ? auth_1.BaseAccount.fromJSON(object.base_account)
                : undefined,
            original_vesting: Array.isArray(object === null || object === void 0 ? void 0 : object.original_vesting)
                ? object.original_vesting.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            delegated_free: Array.isArray(object === null || object === void 0 ? void 0 : object.delegated_free)
                ? object.delegated_free.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            delegated_vesting: Array.isArray(object === null || object === void 0 ? void 0 : object.delegated_vesting)
                ? object.delegated_vesting.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            end_time: isSet(object.end_time) ? String(object.end_time) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.base_account !== undefined &&
            (obj.base_account = message.base_account
                ? auth_1.BaseAccount.toJSON(message.base_account)
                : undefined);
        if (message.original_vesting) {
            obj.original_vesting = message.original_vesting.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.original_vesting = [];
        }
        if (message.delegated_free) {
            obj.delegated_free = message.delegated_free.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.delegated_free = [];
        }
        if (message.delegated_vesting) {
            obj.delegated_vesting = message.delegated_vesting.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.delegated_vesting = [];
        }
        message.end_time !== undefined && (obj.end_time = message.end_time);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseBaseVestingAccount();
        message.base_account =
            object.base_account !== undefined && object.base_account !== null
                ? auth_1.BaseAccount.fromPartial(object.base_account)
                : undefined;
        message.original_vesting =
            ((_a = object.original_vesting) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.delegated_free =
            ((_b = object.delegated_free) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.delegated_vesting =
            ((_c = object.delegated_vesting) === null || _c === void 0 ? void 0 : _c.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.end_time = (_d = object.end_time) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseContinuousVestingAccount() {
    return { base_vesting_account: undefined, start_time: "0" };
}
exports.ContinuousVestingAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.base_vesting_account !== undefined) {
            exports.BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
        }
        if (message.start_time !== "0") {
            writer.uint32(16).int64(message.start_time);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContinuousVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_vesting_account = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.start_time = longToString(reader.int64());
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
            base_vesting_account: isSet(object.base_vesting_account)
                ? exports.BaseVestingAccount.fromJSON(object.base_vesting_account)
                : undefined,
            start_time: isSet(object.start_time) ? String(object.start_time) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.base_vesting_account !== undefined &&
            (obj.base_vesting_account = message.base_vesting_account
                ? exports.BaseVestingAccount.toJSON(message.base_vesting_account)
                : undefined);
        message.start_time !== undefined && (obj.start_time = message.start_time);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseContinuousVestingAccount();
        message.base_vesting_account =
            object.base_vesting_account !== undefined &&
                object.base_vesting_account !== null
                ? exports.BaseVestingAccount.fromPartial(object.base_vesting_account)
                : undefined;
        message.start_time = (_a = object.start_time) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseDelayedVestingAccount() {
    return { base_vesting_account: undefined };
}
exports.DelayedVestingAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.base_vesting_account !== undefined) {
            exports.BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelayedVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_vesting_account = exports.BaseVestingAccount.decode(reader, reader.uint32());
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
            base_vesting_account: isSet(object.base_vesting_account)
                ? exports.BaseVestingAccount.fromJSON(object.base_vesting_account)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.base_vesting_account !== undefined &&
            (obj.base_vesting_account = message.base_vesting_account
                ? exports.BaseVestingAccount.toJSON(message.base_vesting_account)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelayedVestingAccount();
        message.base_vesting_account =
            object.base_vesting_account !== undefined &&
                object.base_vesting_account !== null
                ? exports.BaseVestingAccount.fromPartial(object.base_vesting_account)
                : undefined;
        return message;
    },
};
function createBasePeriod() {
    return { length: "0", amount: [] };
}
exports.Period = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.length !== "0") {
            writer.uint32(8).int64(message.length);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriod();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.length = longToString(reader.int64());
                    break;
                case 2:
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
            length: isSet(object.length) ? String(object.length) : "0",
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount)
                ? object.amount.map((e) => coin_1.Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.length !== undefined && (obj.length = message.length);
        if (message.amount) {
            obj.amount = message.amount.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePeriod();
        message.length = (_a = object.length) !== null && _a !== void 0 ? _a : "0";
        message.amount = ((_b = object.amount) === null || _b === void 0 ? void 0 : _b.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBasePeriodicVestingAccount() {
    return {
        base_vesting_account: undefined,
        start_time: "0",
        vesting_periods: [],
    };
}
exports.PeriodicVestingAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.base_vesting_account !== undefined) {
            exports.BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
        }
        if (message.start_time !== "0") {
            writer.uint32(16).int64(message.start_time);
        }
        for (const v of message.vesting_periods) {
            exports.Period.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePeriodicVestingAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_vesting_account = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.start_time = longToString(reader.int64());
                    break;
                case 3:
                    message.vesting_periods.push(exports.Period.decode(reader, reader.uint32()));
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
            base_vesting_account: isSet(object.base_vesting_account)
                ? exports.BaseVestingAccount.fromJSON(object.base_vesting_account)
                : undefined,
            start_time: isSet(object.start_time) ? String(object.start_time) : "0",
            vesting_periods: Array.isArray(object === null || object === void 0 ? void 0 : object.vesting_periods)
                ? object.vesting_periods.map((e) => exports.Period.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.base_vesting_account !== undefined &&
            (obj.base_vesting_account = message.base_vesting_account
                ? exports.BaseVestingAccount.toJSON(message.base_vesting_account)
                : undefined);
        message.start_time !== undefined && (obj.start_time = message.start_time);
        if (message.vesting_periods) {
            obj.vesting_periods = message.vesting_periods.map((e) => e ? exports.Period.toJSON(e) : undefined);
        }
        else {
            obj.vesting_periods = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePeriodicVestingAccount();
        message.base_vesting_account =
            object.base_vesting_account !== undefined &&
                object.base_vesting_account !== null
                ? exports.BaseVestingAccount.fromPartial(object.base_vesting_account)
                : undefined;
        message.start_time = (_a = object.start_time) !== null && _a !== void 0 ? _a : "0";
        message.vesting_periods =
            ((_b = object.vesting_periods) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Period.fromPartial(e))) || [];
        return message;
    },
};
function createBasePermanentLockedAccount() {
    return { base_vesting_account: undefined };
}
exports.PermanentLockedAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.base_vesting_account !== undefined) {
            exports.BaseVestingAccount.encode(message.base_vesting_account, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePermanentLockedAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base_vesting_account = exports.BaseVestingAccount.decode(reader, reader.uint32());
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
            base_vesting_account: isSet(object.base_vesting_account)
                ? exports.BaseVestingAccount.fromJSON(object.base_vesting_account)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.base_vesting_account !== undefined &&
            (obj.base_vesting_account = message.base_vesting_account
                ? exports.BaseVestingAccount.toJSON(message.base_vesting_account)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePermanentLockedAccount();
        message.base_vesting_account =
            object.base_vesting_account !== undefined &&
                object.base_vesting_account !== null
                ? exports.BaseVestingAccount.fromPartial(object.base_vesting_account)
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
//# sourceMappingURL=vesting.js.map