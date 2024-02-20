"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgRevokeAllowance = exports.MsgGrantAllowance = void 0;
const feegrant_1 = require("../protobuf/cosmos/feegrant/v1beta1/feegrant");
const tx_1 = require("../protobuf/cosmos/feegrant/v1beta1/tx");
function isBasicAllowance(obj) {
    return "spend_limit" in obj;
}
function isPeriodicAllowance(obj) {
    return "period_spend_limit" in obj;
}
function isAllowedMsgAllowance(obj) {
    return "allowed_messages" in obj;
}
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
class MsgGrantAllowance {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            let allowance;
            if (isBasicAllowance(this.params.allowance)) {
                allowance = {
                    type_url: "/cosmos.feegrant.v1beta1.BasicAllowance",
                    value: feegrant_1.BasicAllowance.encode(this.params.allowance).finish(),
                };
            }
            else if (isPeriodicAllowance(this.params.allowance)) {
                allowance = {
                    type_url: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
                    value: feegrant_1.PeriodicAllowance.encode(this.params.allowance).finish(),
                };
            }
            else if (isAllowedMsgAllowance(this.params.allowance)) {
                let internalAllowance;
                if (isBasicAllowance(this.params.allowance.allowance)) {
                    internalAllowance = {
                        type_url: "/cosmos.feegrant.v1beta1.BasicAllowance",
                        value: feegrant_1.BasicAllowance.encode(this.params.allowance.allowance).finish(),
                    };
                }
                else if (isPeriodicAllowance(this.params.allowance.allowance)) {
                    internalAllowance = {
                        type_url: "/cosmos.feegrant.v1beta1.PeriodicAllowance",
                        value: feegrant_1.PeriodicAllowance.encode(this.params.allowance.allowance).finish(),
                    };
                }
                else {
                    throw new Error(`PeriodicAllowance: Cannot cast allowance into 'BasicAllowance' or 'PeriodicAllowance': ${JSON.stringify(this.params.allowance.allowance)}`);
                }
                allowance = {
                    type_url: "/cosmos.feegrant.v1beta1.AllowedMsgAllowance",
                    value: feegrant_1.AllowedMsgAllowance.encode({
                        allowed_messages: this.params.allowance.allowed_messages,
                        allowance: internalAllowance,
                    }).finish(),
                };
            }
            else {
                throw new Error(`Cannot cast allowance into 'BasicAllowance', 'PeriodicAllowance' or 'AllowedMsgAllowance': ${JSON.stringify(this.params.allowance)}`);
            }
            return {
                type_url: "/cosmos.feegrant.v1beta1.MsgGrantAllowance",
                value: this.params,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return tx_1.MsgGrantAllowance.encode({
                        grantee: this.params.grantee,
                        granter: this.params.granter,
                        allowance,
                    }).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            let allowance;
            if (isBasicAllowance(this.params.allowance)) {
                allowance = {
                    type: "cosmos-sdk/BasicAllowance",
                    value: {
                        spend_limit: this.params.allowance.spend_limit,
                        expiration: this.params.allowance.expiration,
                    },
                };
            }
            else if (isPeriodicAllowance(this.params.allowance)) {
                allowance = {
                    type: "cosmos-sdk/PeriodicAllowance",
                    value: {
                        basic: this.params.allowance.basic,
                        period: this.params.allowance.period,
                        period_spend_limit: this.params.allowance.period_spend_limit,
                        period_can_spend: this.params.allowance.period_can_spend,
                        period_reset: this.params.allowance.period_reset,
                    },
                };
            }
            else if (isAllowedMsgAllowance(this.params.allowance)) {
                let internalAllowance;
                if (isBasicAllowance(this.params.allowance.allowance)) {
                    internalAllowance = {
                        type: "cosmos-sdk/BasicAllowance",
                        value: {
                            spend_limit: this.params.allowance.allowance.spend_limit,
                            expiration: this.params.allowance.allowance.expiration,
                        },
                    };
                }
                else if (isPeriodicAllowance(this.params.allowance.allowance)) {
                    internalAllowance = {
                        type: "cosmos-sdk/PeriodicAllowance",
                        value: {
                            basic: this.params.allowance.allowance.basic,
                            period: this.params.allowance.allowance.period,
                            period_spend_limit: this.params.allowance.allowance.period_spend_limit,
                            period_can_spend: this.params.allowance.allowance.period_can_spend,
                            period_reset: this.params.allowance.allowance.period_reset,
                        },
                    };
                }
                else {
                    throw new Error(`PeriodicAllowance: Cannot cast allowance into 'BasicAllowance' or 'PeriodicAllowance': ${JSON.stringify(this.params.allowance.allowance)}`);
                }
                allowance = {
                    type: "cosmos-sdk/AllowedMsgAllowance",
                    value: {
                        allowed_messages: this.params.allowance.allowed_messages,
                        allowance: internalAllowance,
                    },
                };
            }
            else {
                throw new Error(`Cannot cast allowance into 'BasicAllowance', 'PeriodicAllowance' or 'AllowedMsgAllowance': ${JSON.stringify(this.params.allowance)}`);
            }
            return {
                type: "cosmos-sdk/MsgGrantAllowance",
                value: {
                    granter: this.params.granter,
                    grantee: this.params.grantee,
                    allowance: allowance,
                },
            };
        });
    }
}
exports.MsgGrantAllowance = MsgGrantAllowance;
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
class MsgRevokeAllowance {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance",
                value: this.params,
                encode: () => __awaiter(this, void 0, void 0, function* () { return tx_1.MsgRevokeAllowance.encode(this.params).finish(); }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgRevokeAllowance",
                value: this.params,
            };
        });
    }
}
exports.MsgRevokeAllowance = MsgRevokeAllowance;
//# sourceMappingURL=feegrant.js.map