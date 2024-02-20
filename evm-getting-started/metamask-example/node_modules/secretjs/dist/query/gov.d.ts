import { QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryParamsRequest, QueryParamsResponse, QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryTallyResultRequest, QueryTallyResultResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse } from "../grpc_gateway/cosmos/gov/v1beta1/query.pb";
export declare class GovQuerier {
    private url;
    constructor(url: string);
    proposal(req: QueryProposalRequest, headers?: HeadersInit): Promise<QueryProposalResponse>;
    proposals(req: QueryProposalsRequest, headers?: HeadersInit): Promise<QueryProposalsResponse>;
    vote(req: QueryVoteRequest, headers?: HeadersInit): Promise<QueryVoteResponse>;
    votes(req: QueryVotesRequest, headers?: HeadersInit): Promise<QueryVotesResponse>;
    params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    deposit(req: QueryDepositRequest, headers?: HeadersInit): Promise<QueryDepositResponse>;
    deposits(req: QueryDepositsRequest, headers?: HeadersInit): Promise<QueryDepositsResponse>;
    tallyResult(req: QueryTallyResultRequest, headers?: HeadersInit): Promise<QueryTallyResultResponse>;
}
//# sourceMappingURL=gov.d.ts.map