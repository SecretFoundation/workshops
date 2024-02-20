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
exports.MsgDeposit = exports.MsgVoteWeighted = exports.MsgVote = exports.MsgSubmitProposal = exports.ProposalType = exports.ProposalStatus = exports.VoteOption = void 0;
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const any_1 = require("../protobuf/google/protobuf/any");
/** VoteOption enumerates the valid vote options for a given governance proposal. */
var VoteOption;
(function (VoteOption) {
    /** VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
    /** VOTE_OPTION_YES defines a yes vote option. */
    VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
    /** VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
    /** VOTE_OPTION_NO defines a no vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
    /** VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
})(VoteOption = exports.VoteOption || (exports.VoteOption = {}));
/** ProposalStatus enumerates the valid statuses of a proposal. */
var ProposalStatus;
(function (ProposalStatus) {
    /** PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
    /** PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit period. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    /** PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting period. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
    /** PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has passed. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
    /** PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has been rejected. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
    /** PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has failed. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
    ProposalStatus[ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalStatus = exports.ProposalStatus || (exports.ProposalStatus = {}));
var ProposalType;
(function (ProposalType) {
    ProposalType["TextProposal"] = "TextProposal";
    ProposalType["CommunityPoolSpendProposal"] = "CommunityPoolSpendProposal";
    /**
     * @see {@link https://docs.scrt.network/guides/governance} for possible subspaces, keys and values.
     */
    ProposalType["ParameterChangeProposal"] = "ParameterChangeProposal";
    /** Not supported with Amino signer. */
    ProposalType["ClientUpdateProposal"] = "ClientUpdateProposal";
    /** Not supported with Amino signer. */
    ProposalType["UpgradeProposal"] = "UpgradeProposal";
    ProposalType["SoftwareUpgradeProposal"] = "SoftwareUpgradeProposal";
    ProposalType["CancelSoftwareUpgradeProposal"] = "CancelSoftwareUpgradeProposal";
})(ProposalType = exports.ProposalType || (exports.ProposalType = {}));
const proposalTypeToAminoType = new Map([
    [ProposalType.TextProposal, "cosmos-sdk/TextProposal"],
    [
        ProposalType.CommunityPoolSpendProposal,
        "cosmos-sdk/CommunityPoolSpendProposal",
    ],
    [ProposalType.ParameterChangeProposal, "cosmos-sdk/ParameterChangeProposal"],
    [ProposalType.SoftwareUpgradeProposal, "cosmos-sdk/SoftwareUpgradeProposal"],
    [
        ProposalType.CancelSoftwareUpgradeProposal,
        "cosmos-sdk/CancelSoftwareUpgradeProposal",
    ],
]);
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
class MsgSubmitProposal {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let content;
            switch (this.params.type) {
                case ProposalType.TextProposal:
                    const { TextProposal } = yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/gov/v1beta1/gov")));
                    content = any_1.Any.fromPartial({
                        type_url: "/cosmos.gov.v1beta1.TextProposal",
                        value: TextProposal.encode(TextProposal.fromPartial(this.params.content)).finish(),
                    });
                    break;
                case ProposalType.CommunityPoolSpendProposal:
                    const { CommunityPoolSpendProposal } = yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/distribution/v1beta1/distribution")));
                    content = any_1.Any.fromPartial({
                        type_url: "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal",
                        value: CommunityPoolSpendProposal.encode(CommunityPoolSpendProposal.fromPartial(this.params.content)).finish(),
                    });
                    break;
                case ProposalType.ParameterChangeProposal:
                    const { ParameterChangeProposal } = yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/params/v1beta1/params")));
                    content = any_1.Any.fromPartial({
                        type_url: "/cosmos.params.v1beta1.ParameterChangeProposal",
                        value: ParameterChangeProposal.encode(ParameterChangeProposal.fromPartial(this.params.content)).finish(),
                    });
                    break;
                case ProposalType.ClientUpdateProposal:
                    const { ClientUpdateProposal } = yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/client/v1/client")));
                    content = any_1.Any.fromPartial({
                        type_url: "/ibc.core.client.v1.ClientUpdateProposal",
                        value: ClientUpdateProposal.encode(ClientUpdateProposal.fromPartial(this.params.content)).finish(),
                    });
                    break;
                case ProposalType.UpgradeProposal:
                    const { UpgradeProposal } = yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/client/v1/client")));
                    content = any_1.Any.fromPartial({
                        type_url: "/ibc.core.client.v1.UpgradeProposal",
                        value: UpgradeProposal.encode(UpgradeProposal.fromPartial(this.params.content)).finish(),
                    });
                    break;
                case ProposalType.SoftwareUpgradeProposal:
                    const { SoftwareUpgradeProposal } = yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/upgrade/v1beta1/upgrade")));
                    content = any_1.Any.fromPartial({
                        type_url: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
                        value: SoftwareUpgradeProposal.encode(SoftwareUpgradeProposal.fromPartial(this.params.content)).finish(),
                    });
                    break;
                case ProposalType.CancelSoftwareUpgradeProposal:
                    const { CancelSoftwareUpgradeProposal } = yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/upgrade/v1beta1/upgrade")));
                    content = any_1.Any.fromPartial({
                        type_url: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
                        value: CancelSoftwareUpgradeProposal.encode(CancelSoftwareUpgradeProposal.fromPartial(this.params.content)).finish(),
                    });
                    break;
                default:
                    throw new Error(`Unknown proposal type: "${this.params.type}" - ${JSON.stringify(this.params.content)}`);
            }
            const msgContent = {
                content: content,
                initial_deposit: this.params.initial_deposit,
                proposer: this.params.proposer,
                is_expedited: (_a = this.params.is_expedited) !== null && _a !== void 0 ? _a : false,
            };
            return {
                type_url: `/cosmos.gov.v1beta1.MsgSubmitProposal`,
                value: msgContent,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/gov/v1beta1/tx")))).MsgSubmitProposal.encode(msgContent).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            const contentType = proposalTypeToAminoType.get(this.params.type);
            if (!contentType) {
                throw new Error(`Proposal of type "${String(this.params.type)}" is not supported with an Amino signer.`);
            }
            let content = this.params.content;
            if (this.params.type === ProposalType.SoftwareUpgradeProposal) {
                if (content.plan) {
                    content = Object.assign(Object.assign({}, content), { plan: Object.assign(Object.assign({}, content.plan), { time: "0001-01-01T00:00:00Z" }) });
                }
            }
            return {
                type: "cosmos-sdk/MsgSubmitProposal",
                value: {
                    content: {
                        type: contentType,
                        value: content,
                    },
                    initial_deposit: this.params.initial_deposit,
                    proposer: this.params.proposer,
                    is_expedited: this.params.is_expedited ? true : undefined,
                },
            };
        });
    }
}
exports.MsgSubmitProposal = MsgSubmitProposal;
class MsgVote {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: `/cosmos.gov.v1beta1.MsgVote`,
                value: this.params,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/gov/v1beta1/tx")))).MsgVote.encode(this.params).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgVote",
                value: this.params,
            };
        });
    }
}
exports.MsgVote = MsgVote;
/** MsgVoteWeighted defines a message to cast a vote, with an option to split the vote. */
class MsgVoteWeighted {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            const msgContent = {
                voter: this.params.voter,
                proposal_id: this.params.proposal_id,
                options: this.params.options.map((o) => ({
                    option: o.option,
                    weight: new bignumber_js_1.default(o.weight).toFixed(18).replace(/0\.0*/, ""),
                })),
            };
            return {
                type_url: `/cosmos.gov.v1beta1.MsgVoteWeighted`,
                value: msgContent,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/gov/v1beta1/tx")))).MsgVoteWeighted.encode(msgContent).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            const msgContent = {
                voter: this.params.voter,
                proposal_id: this.params.proposal_id,
                options: this.params.options.map((o) => ({
                    option: o.option,
                    weight: new bignumber_js_1.default(o.weight).toFixed(18),
                })),
            };
            return {
                type: "cosmos-sdk/MsgVoteWeighted",
                value: msgContent,
            };
        });
    }
}
exports.MsgVoteWeighted = MsgVoteWeighted;
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
class MsgDeposit {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: `/cosmos.gov.v1beta1.MsgDeposit`,
                value: this.params,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/gov/v1beta1/tx")))).MsgDeposit.encode(this.params).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgDeposit",
                value: this.params,
            };
        });
    }
}
exports.MsgDeposit = MsgDeposit;
//# sourceMappingURL=gov.js.map