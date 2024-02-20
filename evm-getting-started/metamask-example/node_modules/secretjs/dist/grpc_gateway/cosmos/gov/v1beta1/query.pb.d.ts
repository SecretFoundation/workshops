import * as fm from "../../../fetch.pb";
import * as CosmosBaseQueryV1beta1Pagination from "../../base/query/v1beta1/pagination.pb";
import * as CosmosGovV1beta1Gov from "./gov.pb";
export declare type QueryProposalRequest = {
    proposal_id?: string;
};
export declare type QueryProposalResponse = {
    proposal?: CosmosGovV1beta1Gov.Proposal;
};
export declare type QueryProposalsRequest = {
    proposal_status?: CosmosGovV1beta1Gov.ProposalStatus;
    voter?: string;
    depositor?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryProposalsResponse = {
    proposals?: CosmosGovV1beta1Gov.Proposal[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryVoteRequest = {
    proposal_id?: string;
    voter?: string;
};
export declare type QueryVoteResponse = {
    vote?: CosmosGovV1beta1Gov.Vote;
};
export declare type QueryVotesRequest = {
    proposal_id?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryVotesResponse = {
    votes?: CosmosGovV1beta1Gov.Vote[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryParamsRequest = {
    params_type?: string;
};
export declare type QueryParamsResponse = {
    voting_params?: CosmosGovV1beta1Gov.VotingParams;
    deposit_params?: CosmosGovV1beta1Gov.DepositParams;
    tally_params?: CosmosGovV1beta1Gov.TallyParams;
};
export declare type QueryDepositRequest = {
    proposal_id?: string;
    depositor?: string;
};
export declare type QueryDepositResponse = {
    deposit?: CosmosGovV1beta1Gov.Deposit;
};
export declare type QueryDepositsRequest = {
    proposal_id?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryDepositsResponse = {
    deposits?: CosmosGovV1beta1Gov.Deposit[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryTallyResultRequest = {
    proposal_id?: string;
};
export declare type QueryTallyResultResponse = {
    tally?: CosmosGovV1beta1Gov.TallyResult;
};
export declare class Query {
    static Proposal(req: QueryProposalRequest, initReq?: fm.InitReq): Promise<QueryProposalResponse>;
    static Proposals(req: QueryProposalsRequest, initReq?: fm.InitReq): Promise<QueryProposalsResponse>;
    static Vote(req: QueryVoteRequest, initReq?: fm.InitReq): Promise<QueryVoteResponse>;
    static Votes(req: QueryVotesRequest, initReq?: fm.InitReq): Promise<QueryVotesResponse>;
    static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse>;
    static Deposit(req: QueryDepositRequest, initReq?: fm.InitReq): Promise<QueryDepositResponse>;
    static Deposits(req: QueryDepositsRequest, initReq?: fm.InitReq): Promise<QueryDepositsResponse>;
    static TallyResult(req: QueryTallyResultRequest, initReq?: fm.InitReq): Promise<QueryTallyResultResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map