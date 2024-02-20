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
exports.Pool = exports.RedelegationResponse = exports.RedelegationEntryResponse = exports.DelegationResponse = exports.Params = exports.Redelegation = exports.RedelegationEntry = exports.UnbondingDelegationEntry = exports.UnbondingDelegation = exports.Delegation = exports.DVVTriplets = exports.DVVTriplet = exports.DVPairs = exports.DVPair = exports.ValAddresses = exports.Validator = exports.Description = exports.Commission = exports.CommissionRates = exports.HistoricalInfo = exports.bondStatusToJSON = exports.bondStatusFromJSON = exports.BondStatus = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("../../../tendermint/types/types");
const timestamp_1 = require("../../../google/protobuf/timestamp");
const any_1 = require("../../../google/protobuf/any");
const duration_1 = require("../../../google/protobuf/duration");
const coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.staking.v1beta1";
/** BondStatus is the status of a validator. */
var BondStatus;
(function (BondStatus) {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BondStatus[BondStatus["BOND_STATUS_UNSPECIFIED"] = 0] = "BOND_STATUS_UNSPECIFIED";
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDED"] = 1] = "BOND_STATUS_UNBONDED";
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BondStatus[BondStatus["BOND_STATUS_UNBONDING"] = 2] = "BOND_STATUS_UNBONDING";
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BondStatus[BondStatus["BOND_STATUS_BONDED"] = 3] = "BOND_STATUS_BONDED";
    BondStatus[BondStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BondStatus = exports.BondStatus || (exports.BondStatus = {}));
function bondStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "BOND_STATUS_UNSPECIFIED":
            return BondStatus.BOND_STATUS_UNSPECIFIED;
        case 1:
        case "BOND_STATUS_UNBONDED":
            return BondStatus.BOND_STATUS_UNBONDED;
        case 2:
        case "BOND_STATUS_UNBONDING":
            return BondStatus.BOND_STATUS_UNBONDING;
        case 3:
        case "BOND_STATUS_BONDED":
            return BondStatus.BOND_STATUS_BONDED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BondStatus.UNRECOGNIZED;
    }
}
exports.bondStatusFromJSON = bondStatusFromJSON;
function bondStatusToJSON(object) {
    switch (object) {
        case BondStatus.BOND_STATUS_UNSPECIFIED:
            return "BOND_STATUS_UNSPECIFIED";
        case BondStatus.BOND_STATUS_UNBONDED:
            return "BOND_STATUS_UNBONDED";
        case BondStatus.BOND_STATUS_UNBONDING:
            return "BOND_STATUS_UNBONDING";
        case BondStatus.BOND_STATUS_BONDED:
            return "BOND_STATUS_BONDED";
        default:
            return "UNKNOWN";
    }
}
exports.bondStatusToJSON = bondStatusToJSON;
function createBaseHistoricalInfo() {
    return { header: undefined, valset: [] };
}
exports.HistoricalInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.header !== undefined) {
            types_1.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.valset) {
            exports.Validator.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHistoricalInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = types_1.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.valset.push(exports.Validator.decode(reader, reader.uint32()));
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
            header: isSet(object.header) ? types_1.Header.fromJSON(object.header) : undefined,
            valset: Array.isArray(object === null || object === void 0 ? void 0 : object.valset)
                ? object.valset.map((e) => exports.Validator.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined &&
            (obj.header = message.header ? types_1.Header.toJSON(message.header) : undefined);
        if (message.valset) {
            obj.valset = message.valset.map((e) => e ? exports.Validator.toJSON(e) : undefined);
        }
        else {
            obj.valset = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseHistoricalInfo();
        message.header =
            object.header !== undefined && object.header !== null
                ? types_1.Header.fromPartial(object.header)
                : undefined;
        message.valset = ((_a = object.valset) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Validator.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCommissionRates() {
    return { rate: "", max_rate: "", max_change_rate: "" };
}
exports.CommissionRates = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.rate !== "") {
            writer.uint32(10).string(message.rate);
        }
        if (message.max_rate !== "") {
            writer.uint32(18).string(message.max_rate);
        }
        if (message.max_change_rate !== "") {
            writer.uint32(26).string(message.max_change_rate);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommissionRates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.rate = reader.string();
                    break;
                case 2:
                    message.max_rate = reader.string();
                    break;
                case 3:
                    message.max_change_rate = reader.string();
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
            rate: isSet(object.rate) ? String(object.rate) : "",
            max_rate: isSet(object.max_rate) ? String(object.max_rate) : "",
            max_change_rate: isSet(object.max_change_rate)
                ? String(object.max_change_rate)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.rate !== undefined && (obj.rate = message.rate);
        message.max_rate !== undefined && (obj.max_rate = message.max_rate);
        message.max_change_rate !== undefined &&
            (obj.max_change_rate = message.max_change_rate);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCommissionRates();
        message.rate = (_a = object.rate) !== null && _a !== void 0 ? _a : "";
        message.max_rate = (_b = object.max_rate) !== null && _b !== void 0 ? _b : "";
        message.max_change_rate = (_c = object.max_change_rate) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseCommission() {
    return { commission_rates: undefined, update_time: undefined };
}
exports.Commission = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.commission_rates !== undefined) {
            exports.CommissionRates.encode(message.commission_rates, writer.uint32(10).fork()).ldelim();
        }
        if (message.update_time !== undefined) {
            timestamp_1.Timestamp.encode(message.update_time, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommission();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.commission_rates = exports.CommissionRates.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.update_time = timestamp_1.Timestamp.decode(reader, reader.uint32());
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
            commission_rates: isSet(object.commission_rates)
                ? exports.CommissionRates.fromJSON(object.commission_rates)
                : undefined,
            update_time: isSet(object.update_time)
                ? fromJsonTimestamp(object.update_time)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.commission_rates !== undefined &&
            (obj.commission_rates = message.commission_rates
                ? exports.CommissionRates.toJSON(message.commission_rates)
                : undefined);
        message.update_time !== undefined &&
            (obj.update_time = fromTimestamp(message.update_time).toISOString());
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommission();
        message.commission_rates =
            object.commission_rates !== undefined && object.commission_rates !== null
                ? exports.CommissionRates.fromPartial(object.commission_rates)
                : undefined;
        message.update_time =
            object.update_time !== undefined && object.update_time !== null
                ? timestamp_1.Timestamp.fromPartial(object.update_time)
                : undefined;
        return message;
    },
};
function createBaseDescription() {
    return {
        moniker: "",
        identity: "",
        website: "",
        security_contact: "",
        details: "",
    };
}
exports.Description = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.moniker !== "") {
            writer.uint32(10).string(message.moniker);
        }
        if (message.identity !== "") {
            writer.uint32(18).string(message.identity);
        }
        if (message.website !== "") {
            writer.uint32(26).string(message.website);
        }
        if (message.security_contact !== "") {
            writer.uint32(34).string(message.security_contact);
        }
        if (message.details !== "") {
            writer.uint32(42).string(message.details);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDescription();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.moniker = reader.string();
                    break;
                case 2:
                    message.identity = reader.string();
                    break;
                case 3:
                    message.website = reader.string();
                    break;
                case 4:
                    message.security_contact = reader.string();
                    break;
                case 5:
                    message.details = reader.string();
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
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            identity: isSet(object.identity) ? String(object.identity) : "",
            website: isSet(object.website) ? String(object.website) : "",
            security_contact: isSet(object.security_contact)
                ? String(object.security_contact)
                : "",
            details: isSet(object.details) ? String(object.details) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.identity !== undefined && (obj.identity = message.identity);
        message.website !== undefined && (obj.website = message.website);
        message.security_contact !== undefined &&
            (obj.security_contact = message.security_contact);
        message.details !== undefined && (obj.details = message.details);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseDescription();
        message.moniker = (_a = object.moniker) !== null && _a !== void 0 ? _a : "";
        message.identity = (_b = object.identity) !== null && _b !== void 0 ? _b : "";
        message.website = (_c = object.website) !== null && _c !== void 0 ? _c : "";
        message.security_contact = (_d = object.security_contact) !== null && _d !== void 0 ? _d : "";
        message.details = (_e = object.details) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseValidator() {
    return {
        operator_address: "",
        consensus_pubkey: undefined,
        jailed: false,
        status: 0,
        tokens: "",
        delegator_shares: "",
        description: undefined,
        unbonding_height: "0",
        unbonding_time: undefined,
        commission: undefined,
        min_self_delegation: "",
    };
}
exports.Validator = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.operator_address !== "") {
            writer.uint32(10).string(message.operator_address);
        }
        if (message.consensus_pubkey !== undefined) {
            any_1.Any.encode(message.consensus_pubkey, writer.uint32(18).fork()).ldelim();
        }
        if (message.jailed === true) {
            writer.uint32(24).bool(message.jailed);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.tokens !== "") {
            writer.uint32(42).string(message.tokens);
        }
        if (message.delegator_shares !== "") {
            writer.uint32(50).string(message.delegator_shares);
        }
        if (message.description !== undefined) {
            exports.Description.encode(message.description, writer.uint32(58).fork()).ldelim();
        }
        if (message.unbonding_height !== "0") {
            writer.uint32(64).int64(message.unbonding_height);
        }
        if (message.unbonding_time !== undefined) {
            timestamp_1.Timestamp.encode(message.unbonding_time, writer.uint32(74).fork()).ldelim();
        }
        if (message.commission !== undefined) {
            exports.Commission.encode(message.commission, writer.uint32(82).fork()).ldelim();
        }
        if (message.min_self_delegation !== "") {
            writer.uint32(90).string(message.min_self_delegation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidator();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operator_address = reader.string();
                    break;
                case 2:
                    message.consensus_pubkey = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.jailed = reader.bool();
                    break;
                case 4:
                    message.status = reader.int32();
                    break;
                case 5:
                    message.tokens = reader.string();
                    break;
                case 6:
                    message.delegator_shares = reader.string();
                    break;
                case 7:
                    message.description = exports.Description.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.unbonding_height = longToString(reader.int64());
                    break;
                case 9:
                    message.unbonding_time = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.commission = exports.Commission.decode(reader, reader.uint32());
                    break;
                case 11:
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
            operator_address: isSet(object.operator_address)
                ? String(object.operator_address)
                : "",
            consensus_pubkey: isSet(object.consensus_pubkey)
                ? any_1.Any.fromJSON(object.consensus_pubkey)
                : undefined,
            jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
            status: isSet(object.status) ? bondStatusFromJSON(object.status) : 0,
            tokens: isSet(object.tokens) ? String(object.tokens) : "",
            delegator_shares: isSet(object.delegator_shares)
                ? String(object.delegator_shares)
                : "",
            description: isSet(object.description)
                ? exports.Description.fromJSON(object.description)
                : undefined,
            unbonding_height: isSet(object.unbonding_height)
                ? String(object.unbonding_height)
                : "0",
            unbonding_time: isSet(object.unbonding_time)
                ? fromJsonTimestamp(object.unbonding_time)
                : undefined,
            commission: isSet(object.commission)
                ? exports.Commission.fromJSON(object.commission)
                : undefined,
            min_self_delegation: isSet(object.min_self_delegation)
                ? String(object.min_self_delegation)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.operator_address !== undefined &&
            (obj.operator_address = message.operator_address);
        message.consensus_pubkey !== undefined &&
            (obj.consensus_pubkey = message.consensus_pubkey
                ? any_1.Any.toJSON(message.consensus_pubkey)
                : undefined);
        message.jailed !== undefined && (obj.jailed = message.jailed);
        message.status !== undefined &&
            (obj.status = bondStatusToJSON(message.status));
        message.tokens !== undefined && (obj.tokens = message.tokens);
        message.delegator_shares !== undefined &&
            (obj.delegator_shares = message.delegator_shares);
        message.description !== undefined &&
            (obj.description = message.description
                ? exports.Description.toJSON(message.description)
                : undefined);
        message.unbonding_height !== undefined &&
            (obj.unbonding_height = message.unbonding_height);
        message.unbonding_time !== undefined &&
            (obj.unbonding_time = fromTimestamp(message.unbonding_time).toISOString());
        message.commission !== undefined &&
            (obj.commission = message.commission
                ? exports.Commission.toJSON(message.commission)
                : undefined);
        message.min_self_delegation !== undefined &&
            (obj.min_self_delegation = message.min_self_delegation);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseValidator();
        message.operator_address = (_a = object.operator_address) !== null && _a !== void 0 ? _a : "";
        message.consensus_pubkey =
            object.consensus_pubkey !== undefined && object.consensus_pubkey !== null
                ? any_1.Any.fromPartial(object.consensus_pubkey)
                : undefined;
        message.jailed = (_b = object.jailed) !== null && _b !== void 0 ? _b : false;
        message.status = (_c = object.status) !== null && _c !== void 0 ? _c : 0;
        message.tokens = (_d = object.tokens) !== null && _d !== void 0 ? _d : "";
        message.delegator_shares = (_e = object.delegator_shares) !== null && _e !== void 0 ? _e : "";
        message.description =
            object.description !== undefined && object.description !== null
                ? exports.Description.fromPartial(object.description)
                : undefined;
        message.unbonding_height = (_f = object.unbonding_height) !== null && _f !== void 0 ? _f : "0";
        message.unbonding_time =
            object.unbonding_time !== undefined && object.unbonding_time !== null
                ? timestamp_1.Timestamp.fromPartial(object.unbonding_time)
                : undefined;
        message.commission =
            object.commission !== undefined && object.commission !== null
                ? exports.Commission.fromPartial(object.commission)
                : undefined;
        message.min_self_delegation = (_g = object.min_self_delegation) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseValAddresses() {
    return { addresses: [] };
}
exports.ValAddresses = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.addresses) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValAddresses();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addresses.push(reader.string());
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
            addresses: Array.isArray(object === null || object === void 0 ? void 0 : object.addresses)
                ? object.addresses.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.addresses) {
            obj.addresses = message.addresses.map((e) => e);
        }
        else {
            obj.addresses = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValAddresses();
        message.addresses = ((_a = object.addresses) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseDVPair() {
    return { delegator_address: "", validator_address: "" };
}
exports.DVPair = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVPair();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator_address = reader.string();
                    break;
                case 2:
                    message.validator_address = reader.string();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDVPair();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        message.validator_address = (_b = object.validator_address) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDVPairs() {
    return { pairs: [] };
}
exports.DVPairs = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.pairs) {
            exports.DVPair.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVPairs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pairs.push(exports.DVPair.decode(reader, reader.uint32()));
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
            pairs: Array.isArray(object === null || object === void 0 ? void 0 : object.pairs)
                ? object.pairs.map((e) => exports.DVPair.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.pairs) {
            obj.pairs = message.pairs.map((e) => (e ? exports.DVPair.toJSON(e) : undefined));
        }
        else {
            obj.pairs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDVPairs();
        message.pairs = ((_a = object.pairs) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DVPair.fromPartial(e))) || [];
        return message;
    },
};
function createBaseDVVTriplet() {
    return {
        delegator_address: "",
        validator_src_address: "",
        validator_dst_address: "",
    };
}
exports.DVVTriplet = {
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVVTriplet();
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
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDVVTriplet();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        message.validator_src_address = (_b = object.validator_src_address) !== null && _b !== void 0 ? _b : "";
        message.validator_dst_address = (_c = object.validator_dst_address) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseDVVTriplets() {
    return { triplets: [] };
}
exports.DVVTriplets = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.triplets) {
            exports.DVVTriplet.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDVVTriplets();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.triplets.push(exports.DVVTriplet.decode(reader, reader.uint32()));
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
            triplets: Array.isArray(object === null || object === void 0 ? void 0 : object.triplets)
                ? object.triplets.map((e) => exports.DVVTriplet.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.triplets) {
            obj.triplets = message.triplets.map((e) => e ? exports.DVVTriplet.toJSON(e) : undefined);
        }
        else {
            obj.triplets = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDVVTriplets();
        message.triplets =
            ((_a = object.triplets) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DVVTriplet.fromPartial(e))) || [];
        return message;
    },
};
function createBaseDelegation() {
    return { delegator_address: "", validator_address: "", shares: "" };
}
exports.Delegation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        if (message.shares !== "") {
            writer.uint32(26).string(message.shares);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegation();
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
                    message.shares = reader.string();
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
            shares: isSet(object.shares) ? String(object.shares) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        message.shares !== undefined && (obj.shares = message.shares);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDelegation();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        message.validator_address = (_b = object.validator_address) !== null && _b !== void 0 ? _b : "";
        message.shares = (_c = object.shares) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseUnbondingDelegation() {
    return { delegator_address: "", validator_address: "", entries: [] };
}
exports.UnbondingDelegation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegator_address !== "") {
            writer.uint32(10).string(message.delegator_address);
        }
        if (message.validator_address !== "") {
            writer.uint32(18).string(message.validator_address);
        }
        for (const v of message.entries) {
            exports.UnbondingDelegationEntry.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnbondingDelegation();
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
                    message.entries.push(exports.UnbondingDelegationEntry.decode(reader, reader.uint32()));
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
            entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries)
                ? object.entries.map((e) => exports.UnbondingDelegationEntry.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegator_address !== undefined &&
            (obj.delegator_address = message.delegator_address);
        message.validator_address !== undefined &&
            (obj.validator_address = message.validator_address);
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? exports.UnbondingDelegationEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUnbondingDelegation();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        message.validator_address = (_b = object.validator_address) !== null && _b !== void 0 ? _b : "";
        message.entries =
            ((_c = object.entries) === null || _c === void 0 ? void 0 : _c.map((e) => exports.UnbondingDelegationEntry.fromPartial(e))) || [];
        return message;
    },
};
function createBaseUnbondingDelegationEntry() {
    return {
        creation_height: "0",
        completion_time: undefined,
        initial_balance: "",
        balance: "",
    };
}
exports.UnbondingDelegationEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creation_height !== "0") {
            writer.uint32(8).int64(message.creation_height);
        }
        if (message.completion_time !== undefined) {
            timestamp_1.Timestamp.encode(message.completion_time, writer.uint32(18).fork()).ldelim();
        }
        if (message.initial_balance !== "") {
            writer.uint32(26).string(message.initial_balance);
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUnbondingDelegationEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creation_height = longToString(reader.int64());
                    break;
                case 2:
                    message.completion_time = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.initial_balance = reader.string();
                    break;
                case 4:
                    message.balance = reader.string();
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
            creation_height: isSet(object.creation_height)
                ? String(object.creation_height)
                : "0",
            completion_time: isSet(object.completion_time)
                ? fromJsonTimestamp(object.completion_time)
                : undefined,
            initial_balance: isSet(object.initial_balance)
                ? String(object.initial_balance)
                : "",
            balance: isSet(object.balance) ? String(object.balance) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creation_height !== undefined &&
            (obj.creation_height = message.creation_height);
        message.completion_time !== undefined &&
            (obj.completion_time = fromTimestamp(message.completion_time).toISOString());
        message.initial_balance !== undefined &&
            (obj.initial_balance = message.initial_balance);
        message.balance !== undefined && (obj.balance = message.balance);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUnbondingDelegationEntry();
        message.creation_height = (_a = object.creation_height) !== null && _a !== void 0 ? _a : "0";
        message.completion_time =
            object.completion_time !== undefined && object.completion_time !== null
                ? timestamp_1.Timestamp.fromPartial(object.completion_time)
                : undefined;
        message.initial_balance = (_b = object.initial_balance) !== null && _b !== void 0 ? _b : "";
        message.balance = (_c = object.balance) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRedelegationEntry() {
    return {
        creation_height: "0",
        completion_time: undefined,
        initial_balance: "",
        shares_dst: "",
    };
}
exports.RedelegationEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.creation_height !== "0") {
            writer.uint32(8).int64(message.creation_height);
        }
        if (message.completion_time !== undefined) {
            timestamp_1.Timestamp.encode(message.completion_time, writer.uint32(18).fork()).ldelim();
        }
        if (message.initial_balance !== "") {
            writer.uint32(26).string(message.initial_balance);
        }
        if (message.shares_dst !== "") {
            writer.uint32(34).string(message.shares_dst);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creation_height = longToString(reader.int64());
                    break;
                case 2:
                    message.completion_time = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.initial_balance = reader.string();
                    break;
                case 4:
                    message.shares_dst = reader.string();
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
            creation_height: isSet(object.creation_height)
                ? String(object.creation_height)
                : "0",
            completion_time: isSet(object.completion_time)
                ? fromJsonTimestamp(object.completion_time)
                : undefined,
            initial_balance: isSet(object.initial_balance)
                ? String(object.initial_balance)
                : "",
            shares_dst: isSet(object.shares_dst) ? String(object.shares_dst) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.creation_height !== undefined &&
            (obj.creation_height = message.creation_height);
        message.completion_time !== undefined &&
            (obj.completion_time = fromTimestamp(message.completion_time).toISOString());
        message.initial_balance !== undefined &&
            (obj.initial_balance = message.initial_balance);
        message.shares_dst !== undefined && (obj.shares_dst = message.shares_dst);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRedelegationEntry();
        message.creation_height = (_a = object.creation_height) !== null && _a !== void 0 ? _a : "0";
        message.completion_time =
            object.completion_time !== undefined && object.completion_time !== null
                ? timestamp_1.Timestamp.fromPartial(object.completion_time)
                : undefined;
        message.initial_balance = (_b = object.initial_balance) !== null && _b !== void 0 ? _b : "";
        message.shares_dst = (_c = object.shares_dst) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRedelegation() {
    return {
        delegator_address: "",
        validator_src_address: "",
        validator_dst_address: "",
        entries: [],
    };
}
exports.Redelegation = {
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
        for (const v of message.entries) {
            exports.RedelegationEntry.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegation();
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
                    message.entries.push(exports.RedelegationEntry.decode(reader, reader.uint32()));
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
            entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries)
                ? object.entries.map((e) => exports.RedelegationEntry.fromJSON(e))
                : [],
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
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? exports.RedelegationEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseRedelegation();
        message.delegator_address = (_a = object.delegator_address) !== null && _a !== void 0 ? _a : "";
        message.validator_src_address = (_b = object.validator_src_address) !== null && _b !== void 0 ? _b : "";
        message.validator_dst_address = (_c = object.validator_dst_address) !== null && _c !== void 0 ? _c : "";
        message.entries =
            ((_d = object.entries) === null || _d === void 0 ? void 0 : _d.map((e) => exports.RedelegationEntry.fromPartial(e))) || [];
        return message;
    },
};
function createBaseParams() {
    return {
        unbonding_time: undefined,
        max_validators: 0,
        max_entries: 0,
        historical_entries: 0,
        bond_denom: "",
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.unbonding_time !== undefined) {
            duration_1.Duration.encode(message.unbonding_time, writer.uint32(10).fork()).ldelim();
        }
        if (message.max_validators !== 0) {
            writer.uint32(16).uint32(message.max_validators);
        }
        if (message.max_entries !== 0) {
            writer.uint32(24).uint32(message.max_entries);
        }
        if (message.historical_entries !== 0) {
            writer.uint32(32).uint32(message.historical_entries);
        }
        if (message.bond_denom !== "") {
            writer.uint32(42).string(message.bond_denom);
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
                    message.unbonding_time = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.max_validators = reader.uint32();
                    break;
                case 3:
                    message.max_entries = reader.uint32();
                    break;
                case 4:
                    message.historical_entries = reader.uint32();
                    break;
                case 5:
                    message.bond_denom = reader.string();
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
            unbonding_time: isSet(object.unbonding_time)
                ? duration_1.Duration.fromJSON(object.unbonding_time)
                : undefined,
            max_validators: isSet(object.max_validators)
                ? Number(object.max_validators)
                : 0,
            max_entries: isSet(object.max_entries) ? Number(object.max_entries) : 0,
            historical_entries: isSet(object.historical_entries)
                ? Number(object.historical_entries)
                : 0,
            bond_denom: isSet(object.bond_denom) ? String(object.bond_denom) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.unbonding_time !== undefined &&
            (obj.unbonding_time = message.unbonding_time
                ? duration_1.Duration.toJSON(message.unbonding_time)
                : undefined);
        message.max_validators !== undefined &&
            (obj.max_validators = Math.round(message.max_validators));
        message.max_entries !== undefined &&
            (obj.max_entries = Math.round(message.max_entries));
        message.historical_entries !== undefined &&
            (obj.historical_entries = Math.round(message.historical_entries));
        message.bond_denom !== undefined && (obj.bond_denom = message.bond_denom);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseParams();
        message.unbonding_time =
            object.unbonding_time !== undefined && object.unbonding_time !== null
                ? duration_1.Duration.fromPartial(object.unbonding_time)
                : undefined;
        message.max_validators = (_a = object.max_validators) !== null && _a !== void 0 ? _a : 0;
        message.max_entries = (_b = object.max_entries) !== null && _b !== void 0 ? _b : 0;
        message.historical_entries = (_c = object.historical_entries) !== null && _c !== void 0 ? _c : 0;
        message.bond_denom = (_d = object.bond_denom) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseDelegationResponse() {
    return { delegation: undefined, balance: undefined };
}
exports.DelegationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.delegation !== undefined) {
            exports.Delegation.encode(message.delegation, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== undefined) {
            coin_1.Coin.encode(message.balance, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegation = exports.Delegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.balance = coin_1.Coin.decode(reader, reader.uint32());
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
            delegation: isSet(object.delegation)
                ? exports.Delegation.fromJSON(object.delegation)
                : undefined,
            balance: isSet(object.balance)
                ? coin_1.Coin.fromJSON(object.balance)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.delegation !== undefined &&
            (obj.delegation = message.delegation
                ? exports.Delegation.toJSON(message.delegation)
                : undefined);
        message.balance !== undefined &&
            (obj.balance = message.balance
                ? coin_1.Coin.toJSON(message.balance)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseDelegationResponse();
        message.delegation =
            object.delegation !== undefined && object.delegation !== null
                ? exports.Delegation.fromPartial(object.delegation)
                : undefined;
        message.balance =
            object.balance !== undefined && object.balance !== null
                ? coin_1.Coin.fromPartial(object.balance)
                : undefined;
        return message;
    },
};
function createBaseRedelegationEntryResponse() {
    return { redelegation_entry: undefined, balance: "" };
}
exports.RedelegationEntryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.redelegation_entry !== undefined) {
            exports.RedelegationEntry.encode(message.redelegation_entry, writer.uint32(10).fork()).ldelim();
        }
        if (message.balance !== "") {
            writer.uint32(34).string(message.balance);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationEntryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegation_entry = exports.RedelegationEntry.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.balance = reader.string();
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
            redelegation_entry: isSet(object.redelegation_entry)
                ? exports.RedelegationEntry.fromJSON(object.redelegation_entry)
                : undefined,
            balance: isSet(object.balance) ? String(object.balance) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.redelegation_entry !== undefined &&
            (obj.redelegation_entry = message.redelegation_entry
                ? exports.RedelegationEntry.toJSON(message.redelegation_entry)
                : undefined);
        message.balance !== undefined && (obj.balance = message.balance);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRedelegationEntryResponse();
        message.redelegation_entry =
            object.redelegation_entry !== undefined &&
                object.redelegation_entry !== null
                ? exports.RedelegationEntry.fromPartial(object.redelegation_entry)
                : undefined;
        message.balance = (_a = object.balance) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRedelegationResponse() {
    return { redelegation: undefined, entries: [] };
}
exports.RedelegationResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.redelegation !== undefined) {
            exports.Redelegation.encode(message.redelegation, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.entries) {
            exports.RedelegationEntryResponse.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRedelegationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.redelegation = exports.Redelegation.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.entries.push(exports.RedelegationEntryResponse.decode(reader, reader.uint32()));
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
            redelegation: isSet(object.redelegation)
                ? exports.Redelegation.fromJSON(object.redelegation)
                : undefined,
            entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries)
                ? object.entries.map((e) => exports.RedelegationEntryResponse.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.redelegation !== undefined &&
            (obj.redelegation = message.redelegation
                ? exports.Redelegation.toJSON(message.redelegation)
                : undefined);
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? exports.RedelegationEntryResponse.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRedelegationResponse();
        message.redelegation =
            object.redelegation !== undefined && object.redelegation !== null
                ? exports.Redelegation.fromPartial(object.redelegation)
                : undefined;
        message.entries =
            ((_a = object.entries) === null || _a === void 0 ? void 0 : _a.map((e) => exports.RedelegationEntryResponse.fromPartial(e))) ||
                [];
        return message;
    },
};
function createBasePool() {
    return { not_bonded_tokens: "", bonded_tokens: "" };
}
exports.Pool = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.not_bonded_tokens !== "") {
            writer.uint32(10).string(message.not_bonded_tokens);
        }
        if (message.bonded_tokens !== "") {
            writer.uint32(18).string(message.bonded_tokens);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePool();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.not_bonded_tokens = reader.string();
                    break;
                case 2:
                    message.bonded_tokens = reader.string();
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
            not_bonded_tokens: isSet(object.not_bonded_tokens)
                ? String(object.not_bonded_tokens)
                : "",
            bonded_tokens: isSet(object.bonded_tokens)
                ? String(object.bonded_tokens)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.not_bonded_tokens !== undefined &&
            (obj.not_bonded_tokens = message.not_bonded_tokens);
        message.bonded_tokens !== undefined &&
            (obj.bonded_tokens = message.bonded_tokens);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePool();
        message.not_bonded_tokens = (_a = object.not_bonded_tokens) !== null && _a !== void 0 ? _a : "";
        message.bonded_tokens = (_b = object.bonded_tokens) !== null && _b !== void 0 ? _b : "";
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
//# sourceMappingURL=staking.js.map