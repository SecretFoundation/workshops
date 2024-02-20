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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgUndelegate = exports.MsgBeginRedelegate = exports.MsgDelegate = exports.MsgEditValidator = exports.MsgCreateValidator = void 0;
const encoding_1 = require("@cosmjs/encoding");
const bech32_1 = require("bech32");
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const keys_1 = require("../protobuf/cosmos/crypto/ed25519/keys");
const any_1 = require("../protobuf/google/protobuf/any");
/** MsgCreateValidator defines an SDK message for creating a new validator. */
class MsgCreateValidator {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            const msgContent = {
                description: this.params.description,
                commission: {
                    rate: new bignumber_js_1.default(this.params.commission.rate)
                        .toFixed(18)
                        .replace(/0\.0*/, ""),
                    max_rate: new bignumber_js_1.default(this.params.commission.max_rate)
                        .toFixed(18)
                        .replace(/0\.0*/, ""),
                    max_change_rate: new bignumber_js_1.default(this.params.commission.max_change_rate)
                        .toFixed(18)
                        .replace(/0\.0*/, ""),
                },
                min_self_delegation: this.params.min_self_delegation,
                delegator_address: this.params.delegator_address,
                validator_address: bech32_1.bech32.encode("secretvaloper", bech32_1.bech32.decode(this.params.delegator_address).words),
                pubkey: any_1.Any.fromPartial({
                    type_url: "/cosmos.crypto.ed25519.PubKey",
                    value: keys_1.PubKey.encode(keys_1.PubKey.fromPartial({
                        key: (0, encoding_1.fromBase64)(this.params.pubkey),
                    })).finish(),
                }),
                value: this.params.initial_delegation,
            };
            return {
                type_url: `/cosmos.staking.v1beta1.MsgCreateValidator`,
                value: msgContent,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/staking/v1beta1/tx")))).MsgCreateValidator.encode(msgContent).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgCreateValidator",
                value: {
                    description: {
                        moniker: this.params.description.moniker,
                        identity: this.params.description.identity,
                        website: this.params.description.website,
                        security_contact: this.params.description.security_contact,
                        details: this.params.description.details,
                    },
                    commission: {
                        rate: new bignumber_js_1.default(this.params.commission.rate).toFixed(18),
                        max_rate: new bignumber_js_1.default(this.params.commission.max_rate).toFixed(18),
                        max_change_rate: new bignumber_js_1.default(this.params.commission.max_change_rate).toFixed(18),
                    },
                    min_self_delegation: this.params.min_self_delegation,
                    delegator_address: this.params.delegator_address,
                    validator_address: bech32_1.bech32.encode("secretvaloper", bech32_1.bech32.decode(this.params.delegator_address).words),
                    pubkey: {
                        type: "tendermint/PubKeyEd25519",
                        value: this.params.pubkey,
                    },
                    value: this.params.initial_delegation,
                },
            };
        });
    }
}
exports.MsgCreateValidator = MsgCreateValidator;
/** MsgEditValidator defines an SDK message for editing an existing validator. */
class MsgEditValidator {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            const { Description } = yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/staking/v1beta1/staking")));
            const msgContent = {
                validator_address: this.params.validator_address,
                description: Description.fromPartial(this.params.description || {}),
                commission_rate: this.params.commission_rate
                    ? new bignumber_js_1.default(this.params.commission_rate)
                        .toFixed(18)
                        .replace(/0\.0*/, "")
                    : "",
                min_self_delegation: this.params.min_self_delegation || "",
            };
            return {
                type_url: `/cosmos.staking.v1beta1.MsgEditValidator`,
                value: msgContent,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/staking/v1beta1/tx")))).MsgEditValidator.encode(msgContent).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            let description;
            if (this.params.description) {
                description = {
                    moniker: this.params.description.moniker,
                    identity: this.params.description.identity,
                    website: this.params.description.website,
                    security_contact: this.params.description.security_contact,
                    details: this.params.description.details,
                };
            }
            let commission_rate;
            if (this.params.commission_rate) {
                commission_rate = new bignumber_js_1.default(this.params.commission_rate).toFixed(18);
            }
            return {
                type: "cosmos-sdk/MsgEditValidator",
                value: {
                    validator_address: this.params.validator_address,
                    description,
                    commission_rate,
                    min_self_delegation: this.params.min_self_delegation,
                },
            };
        });
    }
}
exports.MsgEditValidator = MsgEditValidator;
/** MsgDelegate defines an SDK message for performing a delegation of coins from a delegator to a validator. */
class MsgDelegate {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: `/cosmos.staking.v1beta1.MsgDelegate`,
                value: this.params,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/staking/v1beta1/tx")))).MsgDelegate.encode(this.params).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgDelegate",
                value: this.params,
            };
        });
    }
}
exports.MsgDelegate = MsgDelegate;
/** MsgBeginRedelegate defines an SDK message for performing a redelegation of coins from a delegator and source validator to a destination validator. */
class MsgBeginRedelegate {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: `/cosmos.staking.v1beta1.MsgBeginRedelegate`,
                value: this.params,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/staking/v1beta1/tx")))).MsgBeginRedelegate.encode(this.params).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgBeginRedelegate",
                value: this.params,
            };
        });
    }
}
exports.MsgBeginRedelegate = MsgBeginRedelegate;
/** MsgUndelegate defines an SDK message for performing an undelegation from a delegate and a validator */
class MsgUndelegate {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: `/cosmos.staking.v1beta1.MsgUndelegate`,
                value: this.params,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/staking/v1beta1/tx")))).MsgUndelegate.encode(this.params).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgUndelegate",
                value: this.params,
            };
        });
    }
}
exports.MsgUndelegate = MsgUndelegate;
//# sourceMappingURL=staking.js.map