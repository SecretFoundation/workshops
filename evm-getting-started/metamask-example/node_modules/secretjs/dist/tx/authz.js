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
exports.MsgRevoke = exports.MsgExec = exports.MsgGrant = exports.StakeAuthorizationType = exports.MsgGrantAuthorization = void 0;
const authz_1 = require("../protobuf/cosmos/authz/v1beta1/authz");
const tx_1 = require("../protobuf/cosmos/authz/v1beta1/tx");
const authz_2 = require("../protobuf/cosmos/bank/v1beta1/authz");
const authz_3 = require("../protobuf/cosmos/staking/v1beta1/authz");
var MsgGrantAuthorization;
(function (MsgGrantAuthorization) {
    MsgGrantAuthorization["MsgAcknowledgement"] = "/ibc.core.channel.v1.MsgAcknowledgement";
    MsgGrantAuthorization["MsgBeginRedelegate"] = "/cosmos.staking.v1beta1.MsgBeginRedelegate";
    MsgGrantAuthorization["MsgChannelCloseConfirm"] = "/ibc.core.channel.v1.MsgChannelCloseConfirm";
    MsgGrantAuthorization["MsgChannelCloseInit"] = "/ibc.core.channel.v1.MsgChannelCloseInit";
    MsgGrantAuthorization["MsgChannelOpenAck"] = "/ibc.core.channel.v1.MsgChannelOpenAck";
    MsgGrantAuthorization["MsgChannelOpenConfirm"] = "/ibc.core.channel.v1.MsgChannelOpenConfirm";
    MsgGrantAuthorization["MsgChannelOpenInit"] = "/ibc.core.channel.v1.MsgChannelOpenInit";
    MsgGrantAuthorization["MsgChannelOpenTry"] = "/ibc.core.channel.v1.MsgChannelOpenTry";
    MsgGrantAuthorization["MsgConnectionOpenAck"] = "/ibc.core.connection.v1.MsgConnectionOpenAck";
    MsgGrantAuthorization["MsgConnectionOpenConfirm"] = "/ibc.core.connection.v1.MsgConnectionOpenConfirm";
    MsgGrantAuthorization["MsgConnectionOpenInit"] = "/ibc.core.connection.v1.MsgConnectionOpenInit";
    MsgGrantAuthorization["MsgConnectionOpenTry"] = "/ibc.core.connection.v1.MsgConnectionOpenTry";
    MsgGrantAuthorization["MsgCreateClient"] = "/ibc.core.client.v1.MsgCreateClient";
    MsgGrantAuthorization["MsgCreateValidator"] = "/cosmos.staking.v1beta1.MsgCreateValidator";
    MsgGrantAuthorization["MsgDelegate"] = "/cosmos.staking.v1beta1.MsgDelegate";
    MsgGrantAuthorization["MsgDeposit"] = "/cosmos.gov.v1beta1.MsgDeposit";
    MsgGrantAuthorization["MsgEditValidator"] = "/cosmos.staking.v1beta1.MsgEditValidator";
    MsgGrantAuthorization["MsgExec"] = "/cosmos.authz.v1beta1.MsgExec";
    MsgGrantAuthorization["MsgExecuteContract"] = "/secret.compute.v1beta1.MsgExecuteContract";
    MsgGrantAuthorization["MsgFundCommunityPool"] = "/cosmos.distribution.v1beta1.MsgFundCommunityPool";
    MsgGrantAuthorization["MsgGrant"] = "/cosmos.authz.v1beta1.MsgGrant";
    MsgGrantAuthorization["MsgGrantAllowance"] = "/cosmos.feegrant.v1beta1.MsgGrantAllowance";
    MsgGrantAuthorization["MsgInstantiateContract"] = "/secret.compute.v1beta1.MsgInstantiateContract";
    MsgGrantAuthorization["MsgMultiSend"] = "/cosmos.bank.v1beta1.MsgMultiSend";
    MsgGrantAuthorization["MsgRecvPacket"] = "/ibc.core.channel.v1.MsgRecvPacket";
    MsgGrantAuthorization["MsgRevoke"] = "/cosmos.authz.v1beta1.MsgRevoke";
    MsgGrantAuthorization["MsgRevokeAllowance"] = "/cosmos.feegrant.v1beta1.MsgRevokeAllowance";
    MsgGrantAuthorization["MsgSend"] = "/cosmos.bank.v1beta1.MsgSend";
    MsgGrantAuthorization["MsgSetWithdrawAddress"] = "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress";
    MsgGrantAuthorization["MsgStoreCode"] = "/secret.compute.v1beta1.MsgStoreCode";
    MsgGrantAuthorization["MsgSubmitEvidence"] = "/cosmos.evidence.v1beta1.MsgSubmitEvidence";
    MsgGrantAuthorization["MsgSubmitMisbehaviour"] = "/ibc.core.client.v1.MsgSubmitMisbehaviour";
    MsgGrantAuthorization["MsgSubmitProposal"] = "/cosmos.gov.v1beta1.MsgSubmitProposal";
    MsgGrantAuthorization["MsgTimeout"] = "/ibc.core.channel.v1.MsgTimeout";
    MsgGrantAuthorization["MsgTimeoutOnClose"] = "/ibc.core.channel.v1.MsgTimeoutOnClose";
    MsgGrantAuthorization["MsgTransfer"] = "/ibc.applications.transfer.v1.MsgTransfer";
    MsgGrantAuthorization["MsgUndelegate"] = "/cosmos.staking.v1beta1.MsgUndelegate";
    MsgGrantAuthorization["MsgUnjail"] = "/cosmos.slashing.v1beta1.MsgUnjail";
    MsgGrantAuthorization["MsgUpdateClient"] = "/ibc.core.client.v1.MsgUpdateClient";
    MsgGrantAuthorization["MsgUpgradeClient"] = "/ibc.core.client.v1.MsgUpgradeClient";
    MsgGrantAuthorization["MsgVerifyInvariant"] = "/cosmos.crisis.v1beta1.MsgVerifyInvariant";
    MsgGrantAuthorization["MsgVote"] = "/cosmos.gov.v1beta1.MsgVote";
    MsgGrantAuthorization["MsgVoteWeighted"] = "/cosmos.gov.v1beta1.MsgVoteWeighted";
    MsgGrantAuthorization["MsgWithdrawDelegatorReward"] = "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward";
    MsgGrantAuthorization["MsgWithdrawValidatorCommission"] = "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission";
})(MsgGrantAuthorization = exports.MsgGrantAuthorization || (exports.MsgGrantAuthorization = {}));
function isGenericAuthorization(object) {
    return "msg" in object;
}
function isSendAuthorization(object) {
    return "spend_limit" in object;
}
function isStakeAuthorization(object) {
    return ("max_tokens" in object &&
        "allow_list" in object &&
        "deny_list" in object &&
        "authorization_type" in object);
}
/** AuthorizationType defines the type of staking module authorization type */
var StakeAuthorizationType;
(function (StakeAuthorizationType) {
    /** defines an authorization type for MsgDelegate */
    StakeAuthorizationType[StakeAuthorizationType["Delegate"] = 1] = "Delegate";
    /** defines an authorization type for MsgUndelegate */
    StakeAuthorizationType[StakeAuthorizationType["Undelegate"] = 2] = "Undelegate";
    /** defines an authorization type for MsgBeginRedelegate */
    StakeAuthorizationType[StakeAuthorizationType["Redelegate"] = 3] = "Redelegate";
})(StakeAuthorizationType = exports.StakeAuthorizationType || (exports.StakeAuthorizationType = {}));
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
class MsgGrant {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let grant;
            const expiration = {
                seconds: String(Math.floor(this.params.expiration)),
                nanos: 0,
            };
            if (isSendAuthorization(this.params.authorization)) {
                grant = {
                    authorization: {
                        type_url: "/cosmos.bank.v1beta1.SendAuthorization",
                        value: authz_2.SendAuthorization.encode(this.params.authorization).finish(),
                    },
                    expiration,
                };
            }
            else if (isStakeAuthorization(this.params.authorization)) {
                let allow_list = undefined;
                let deny_list = undefined;
                if (((_a = this.params.authorization.allow_list) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    allow_list = { address: this.params.authorization.allow_list };
                }
                else if (((_b = this.params.authorization.deny_list) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                    deny_list = { address: this.params.authorization.deny_list };
                }
                grant = {
                    authorization: {
                        type_url: "/cosmos.staking.v1beta1.StakeAuthorization",
                        value: authz_3.StakeAuthorization.encode({
                            max_tokens: this.params.authorization.max_tokens,
                            allow_list,
                            deny_list,
                            authorization_type: Number(this.params.authorization.authorization_type),
                        }).finish(),
                    },
                    expiration,
                };
            }
            else if (isGenericAuthorization(this.params.authorization)) {
                grant = {
                    authorization: {
                        type_url: "/cosmos.authz.v1beta1.GenericAuthorization",
                        value: authz_1.GenericAuthorization.encode({
                            msg: String(this.params.authorization.msg),
                        }).finish(),
                    },
                    expiration,
                };
            }
            else {
                throw new Error("Unknown authorization type.");
            }
            const msgContent = {
                granter: this.params.granter,
                grantee: this.params.grantee,
                grant: grant,
            };
            return {
                type_url: "/cosmos.authz.v1beta1.MsgGrant",
                value: msgContent,
                encode: () => __awaiter(this, void 0, void 0, function* () { return tx_1.MsgGrant.encode(msgContent).finish(); }),
            };
        });
    }
    toAmino() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let grant = {
                type: "cosmos-sdk/MsgGrant",
                value: {
                    granter: this.params.granter,
                    grantee: this.params.grantee,
                    grant: {
                        //@ts-ignore
                        authorization: {},
                        expiration: new Date(Math.floor(this.params.expiration) * 1000)
                            .toISOString()
                            .replace(/\.\d+Z/, "Z"),
                    },
                },
            };
            if (isSendAuthorization(this.params.authorization)) {
                grant.value.grant.authorization = {
                    type: "cosmos-sdk/SendAuthorization",
                    value: {
                        spend_limit: this.params.authorization.spend_limit,
                    },
                };
            }
            else if (isStakeAuthorization(this.params.authorization)) {
                let Validators;
                if (((_a = this.params.authorization.allow_list) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    Validators = {
                        type: "cosmos-sdk/StakeAuthorization/AllowList",
                        value: {
                            allow_list: {
                                address: this.params.authorization.allow_list,
                            },
                        },
                    };
                }
                else if (((_b = this.params.authorization.deny_list) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                    Validators = {
                        type: "cosmos-sdk/StakeAuthorization/DenyList",
                        value: {
                            deny_list: {
                                address: this.params.authorization.deny_list,
                            },
                        },
                    };
                }
                else {
                    throw new Error("Must pass in allow_list or deny_list.");
                }
                grant.value.grant.authorization = {
                    type: "cosmos-sdk/StakeAuthorization",
                    value: {
                        max_tokens: this.params.authorization.max_tokens,
                        authorization_type: this.params.authorization.authorization_type,
                        Validators,
                    },
                };
            }
            else if (isGenericAuthorization(this.params.authorization)) {
                grant.value.grant.authorization = {
                    type: "cosmos-sdk/GenericAuthorization",
                    value: {
                        msg: this.params.authorization.msg,
                    },
                };
            }
            else {
                throw new Error("Unknown authorization type.");
            }
            return grant;
        });
    }
}
exports.MsgGrant = MsgGrant;
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
class MsgExec {
    constructor(params) {
        this.params = params;
    }
    toProto(encryptionUtils) {
        return __awaiter(this, void 0, void 0, function* () {
            const msgs = [];
            for (const m of this.params.msgs) {
                const asProto = yield m.toProto(encryptionUtils);
                msgs.push({
                    type_url: asProto.type_url,
                    value: yield asProto.encode(),
                });
            }
            const msgContent = {
                grantee: this.params.grantee,
                msgs,
            };
            return {
                type_url: "/cosmos.authz.v1beta1.MsgExec",
                value: msgContent,
                encode: () => __awaiter(this, void 0, void 0, function* () { return tx_1.MsgExec.encode(msgContent).finish(); }),
            };
        });
    }
    toAmino(encryptionUtils) {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgExec",
                value: {
                    grantee: this.params.grantee,
                    msgs: yield Promise.all(this.params.msgs.map((m) => m.toAmino(encryptionUtils))),
                },
            };
        });
    }
}
exports.MsgExec = MsgExec;
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
class MsgRevoke {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            const msgContent = {
                granter: this.params.granter,
                grantee: this.params.grantee,
                msg_type_url: String(this.params.msg),
            };
            return {
                type_url: "/cosmos.authz.v1beta1.MsgRevoke",
                value: msgContent,
                encode: () => __awaiter(this, void 0, void 0, function* () { return tx_1.MsgRevoke.encode(msgContent).finish(); }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgRevoke",
                value: {
                    granter: this.params.granter,
                    grantee: this.params.grantee,
                    msg_type_url: String(this.params.msg),
                },
            };
        });
    }
}
exports.MsgRevoke = MsgRevoke;
//# sourceMappingURL=authz.js.map