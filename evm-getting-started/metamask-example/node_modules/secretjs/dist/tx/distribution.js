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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgSetAutoRestake = exports.MsgFundCommunityPool = exports.MsgWithdrawValidatorCommission = exports.MsgWithdrawDelegatorReward = exports.MsgWithdrawDelegationReward = exports.MsgModifyWithdrawAddress = exports.MsgSetWithdrawAddress = void 0;
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
class MsgSetWithdrawAddress {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress",
                value: this.params,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/distribution/v1beta1/tx")))).MsgSetWithdrawAddress.encode(this.params).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgModifyWithdrawAddress",
                value: this.params,
            };
        });
    }
}
exports.MsgSetWithdrawAddress = MsgSetWithdrawAddress;
exports.MsgModifyWithdrawAddress = MsgSetWithdrawAddress;
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
class MsgWithdrawDelegatorReward {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward",
                value: this.params,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/distribution/v1beta1/tx")))).MsgWithdrawDelegatorReward.encode(this.params).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgWithdrawDelegationReward",
                value: this.params,
            };
        });
    }
}
exports.MsgWithdrawDelegatorReward = MsgWithdrawDelegatorReward;
exports.MsgWithdrawDelegationReward = MsgWithdrawDelegatorReward;
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
class MsgWithdrawValidatorCommission {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission",
                value: this.params,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/distribution/v1beta1/tx")))).MsgWithdrawValidatorCommission.encode(this.params).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgWithdrawValidatorCommission",
                value: this.params,
            };
        });
    }
}
exports.MsgWithdrawValidatorCommission = MsgWithdrawValidatorCommission;
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
class MsgFundCommunityPool {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/cosmos.distribution.v1beta1.MsgFundCommunityPool",
                value: this.params,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/distribution/v1beta1/tx")))).MsgFundCommunityPool.encode(this.params).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgFundCommunityPool",
                value: this.params,
            };
        });
    }
}
exports.MsgFundCommunityPool = MsgFundCommunityPool;
/**
 * MsgSetAutoRestake enables or disables auto-restaking for
 * a delegator-validator pair.
 */
class MsgSetAutoRestake {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/cosmos.distribution.v1beta1.MsgSetAutoRestake",
                value: this.params,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/distribution/v1beta1/tx")))).MsgSetAutoRestake.encode(this.params).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgSetAutoRestake",
                value: Object.assign({}, this.params, {
                    enabled: this.params.enabled ? true : undefined,
                }),
            };
        });
    }
}
exports.MsgSetAutoRestake = MsgSetAutoRestake;
//# sourceMappingURL=distribution.js.map