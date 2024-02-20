import * as fm from "../../../fetch.pb";
import * as GoogleProtobufAny from "../../../google/protobuf/any.pb";
import * as CosmosBaseV1beta1Coin from "../../base/v1beta1/coin.pb";
import * as CosmosGovV1beta1Gov from "./gov.pb";
export declare type MsgSubmitProposal = {
    content?: GoogleProtobufAny.Any;
    initial_deposit?: CosmosBaseV1beta1Coin.Coin[];
    proposer?: string;
    is_expedited?: boolean;
};
export declare type MsgSubmitProposalResponse = {
    proposal_id?: string;
};
export declare type MsgVote = {
    proposal_id?: string;
    voter?: string;
    option?: CosmosGovV1beta1Gov.VoteOption;
};
export declare type MsgVoteResponse = {};
export declare type MsgVoteWeighted = {
    proposal_id?: string;
    voter?: string;
    options?: CosmosGovV1beta1Gov.WeightedVoteOption[];
};
export declare type MsgVoteWeightedResponse = {};
export declare type MsgDeposit = {
    proposal_id?: string;
    depositor?: string;
    amount?: CosmosBaseV1beta1Coin.Coin[];
};
export declare type MsgDepositResponse = {};
export declare class Msg {
    static SubmitProposal(req: MsgSubmitProposal, initReq?: fm.InitReq): Promise<MsgSubmitProposalResponse>;
    static Vote(req: MsgVote, initReq?: fm.InitReq): Promise<MsgVoteResponse>;
    static VoteWeighted(req: MsgVoteWeighted, initReq?: fm.InitReq): Promise<MsgVoteWeightedResponse>;
    static Deposit(req: MsgDeposit, initReq?: fm.InitReq): Promise<MsgDepositResponse>;
}
//# sourceMappingURL=tx.pb.d.ts.map