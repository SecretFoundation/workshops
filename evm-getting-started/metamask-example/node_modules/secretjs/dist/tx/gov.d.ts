import { Coin, MsgParams } from "..";
import { AminoMsg, Msg, ProtoMsg } from "./types";
export declare type ProposalContent = import("../protobuf/cosmos/gov/v1beta1/gov").TextProposal | import("../protobuf/cosmos/distribution/v1beta1/distribution").CommunityPoolSpendProposal | import("../protobuf/cosmos/params/v1beta1/params").ParameterChangeProposal | import("../protobuf/ibc/core/client/v1/client").ClientUpdateProposal | import("../protobuf/ibc/core/client/v1/client").UpgradeProposal | import("../protobuf/cosmos/upgrade/v1beta1/upgrade").SoftwareUpgradeProposal | import("../protobuf/cosmos/upgrade/v1beta1/upgrade").CancelSoftwareUpgradeProposal;
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export declare enum VoteOption {
    /** VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VOTE_OPTION_UNSPECIFIED = 0,
    /** VOTE_OPTION_YES defines a yes vote option. */
    VOTE_OPTION_YES = 1,
    /** VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VOTE_OPTION_ABSTAIN = 2,
    /** VOTE_OPTION_NO defines a no vote option. */
    VOTE_OPTION_NO = 3,
    /** VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VOTE_OPTION_NO_WITH_VETO = 4
}
/** ProposalStatus enumerates the valid statuses of a proposal. */
export declare enum ProposalStatus {
    /** PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status. */
    PROPOSAL_STATUS_UNSPECIFIED = 0,
    /** PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit period. */
    PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
    /** PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting period. */
    PROPOSAL_STATUS_VOTING_PERIOD = 2,
    /** PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has passed. */
    PROPOSAL_STATUS_PASSED = 3,
    /** PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has been rejected. */
    PROPOSAL_STATUS_REJECTED = 4,
    /** PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has failed. */
    PROPOSAL_STATUS_FAILED = 5,
    UNRECOGNIZED = -1
}
/** ParamChange defines an individual parameter change, for use in ParameterChangeProposal. */
export declare type ParamChange = {
    subspace: string;
    key: string;
    value: string;
};
export declare enum ProposalType {
    TextProposal = "TextProposal",
    CommunityPoolSpendProposal = "CommunityPoolSpendProposal",
    /**
     * @see {@link https://docs.scrt.network/guides/governance} for possible subspaces, keys and values.
     */
    ParameterChangeProposal = "ParameterChangeProposal",
    /** Not supported with Amino signer. */
    ClientUpdateProposal = "ClientUpdateProposal",
    /** Not supported with Amino signer. */
    UpgradeProposal = "UpgradeProposal",
    SoftwareUpgradeProposal = "SoftwareUpgradeProposal",
    CancelSoftwareUpgradeProposal = "CancelSoftwareUpgradeProposal"
}
export interface MsgSubmitProposalParams {
    type: ProposalType;
    content: ProposalContent;
    initial_deposit: Coin[];
    proposer: string;
    is_expedited?: boolean;
}
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export declare class MsgSubmitProposal implements Msg {
    params: MsgSubmitProposalParams;
    constructor(params: MsgSubmitProposalParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVoteParams extends MsgParams {
    proposal_id: string;
    voter: string;
    option: VoteOption;
}
export declare class MsgVote implements Msg {
    params: MsgVoteParams;
    constructor(params: MsgVoteParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOption {
    /** option is a {@link VoteOption}. */
    option: VoteOption;
    /** weight is a number between 0 and 1 with precision of 18 decimals. */
    weight: number;
}
export interface MsgVoteWeightedParams extends MsgParams {
    voter: string;
    proposal_id: string;
    options: WeightedVoteOption[];
}
/** MsgVoteWeighted defines a message to cast a vote, with an option to split the vote. */
export declare class MsgVoteWeighted implements Msg {
    params: MsgVoteWeightedParams;
    constructor(params: MsgVoteWeightedParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
export interface MsgDepositParams extends MsgParams {
    proposal_id: string;
    depositor: string;
    amount: Coin[];
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export declare class MsgDeposit implements Msg {
    params: MsgDepositParams;
    constructor(params: MsgDepositParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
//# sourceMappingURL=gov.d.ts.map