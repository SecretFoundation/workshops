import * as _m0 from "protobufjs/minimal";
import { Proposal, ProposalStatus, Vote, VotingParams, DepositParams, TallyParams, Deposit, TallyResult } from "./gov";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
export declare const protobufPackage = "cosmos.gov.v1beta1";
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: string;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponse {
    proposal?: Proposal;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequest {
    /** proposal_status defines the status of the proposals. */
    proposal_status: ProposalStatus;
    /** voter defines the voter address for the proposals. */
    voter: string;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponse {
    proposals: Proposal[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: string;
    /** voter defines the oter address for the proposals. */
    voter: string;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponse {
    /** vote defined the queried vote. */
    vote?: Vote;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponse {
    /** votes defined the queried votes. */
    votes: Vote[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
    /**
     * params_type defines which parameters to query for, can be one of "voting",
     * "tallying" or "deposit".
     */
    params_type: string;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** voting_params defines the parameters related to voting. */
    voting_params?: VotingParams;
    /** deposit_params defines the parameters related to deposit. */
    deposit_params?: DepositParams;
    /** tally_params defines the parameters related to tally. */
    tally_params?: TallyParams;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: string;
    /** depositor defines the deposit addresses from the proposals. */
    depositor: string;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponse {
    /** deposit defines the requested deposit. */
    deposit?: Deposit;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
    deposits: Deposit[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequest {
    /** proposal_id defines the unique id of the proposal. */
    proposal_id: string;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponse {
    /** tally defines the requested tally. */
    tally?: TallyResult;
}
export declare const QueryProposalRequest: {
    encode(message: QueryProposalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryProposalRequest;
    fromJSON(object: any): QueryProposalRequest;
    toJSON(message: QueryProposalRequest): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
    } & {
        proposal_id?: string | undefined;
    } & Record<Exclude<keyof I, "proposal_id">, never>>(object: I): QueryProposalRequest;
};
export declare const QueryProposalResponse: {
    encode(message: QueryProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryProposalResponse;
    fromJSON(object: any): QueryProposalResponse;
    toJSON(message: QueryProposalResponse): unknown;
    fromPartial<I extends {
        proposal?: {
            proposal_id?: string | undefined;
            content?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            status?: ProposalStatus | undefined;
            final_tally_result?: {
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } | undefined;
            submit_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            deposit_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            total_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            voting_start_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            voting_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            is_expedited?: boolean | undefined;
        } | undefined;
    } & {
        proposal?: ({
            proposal_id?: string | undefined;
            content?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            status?: ProposalStatus | undefined;
            final_tally_result?: {
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } | undefined;
            submit_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            deposit_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            total_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            voting_start_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            voting_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            is_expedited?: boolean | undefined;
        } & {
            proposal_id?: string | undefined;
            content?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["proposal"]["content"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
            status?: ProposalStatus | undefined;
            final_tally_result?: ({
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } & {
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } & Record<Exclude<keyof I["proposal"]["final_tally_result"], keyof TallyResult>, never>) | undefined;
            submit_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["proposal"]["submit_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            deposit_end_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["proposal"]["deposit_end_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            total_deposit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["proposal"]["total_deposit"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["proposal"]["total_deposit"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            voting_start_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["proposal"]["voting_start_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            voting_end_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["proposal"]["voting_end_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            is_expedited?: boolean | undefined;
        } & Record<Exclude<keyof I["proposal"], keyof Proposal>, never>) | undefined;
    } & Record<Exclude<keyof I, "proposal">, never>>(object: I): QueryProposalResponse;
};
export declare const QueryProposalsRequest: {
    encode(message: QueryProposalsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryProposalsRequest;
    fromJSON(object: any): QueryProposalsRequest;
    toJSON(message: QueryProposalsRequest): unknown;
    fromPartial<I extends {
        proposal_status?: ProposalStatus | undefined;
        voter?: string | undefined;
        depositor?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        proposal_status?: ProposalStatus | undefined;
        voter?: string | undefined;
        depositor?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryProposalsRequest>, never>>(object: I): QueryProposalsRequest;
};
export declare const QueryProposalsResponse: {
    encode(message: QueryProposalsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryProposalsResponse;
    fromJSON(object: any): QueryProposalsResponse;
    toJSON(message: QueryProposalsResponse): unknown;
    fromPartial<I extends {
        proposals?: {
            proposal_id?: string | undefined;
            content?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            status?: ProposalStatus | undefined;
            final_tally_result?: {
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } | undefined;
            submit_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            deposit_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            total_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            voting_start_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            voting_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            is_expedited?: boolean | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        proposals?: ({
            proposal_id?: string | undefined;
            content?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            status?: ProposalStatus | undefined;
            final_tally_result?: {
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } | undefined;
            submit_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            deposit_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            total_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            voting_start_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            voting_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            is_expedited?: boolean | undefined;
        }[] & ({
            proposal_id?: string | undefined;
            content?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            status?: ProposalStatus | undefined;
            final_tally_result?: {
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } | undefined;
            submit_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            deposit_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            total_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            voting_start_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            voting_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            is_expedited?: boolean | undefined;
        } & {
            proposal_id?: string | undefined;
            content?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["proposals"][number]["content"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
            status?: ProposalStatus | undefined;
            final_tally_result?: ({
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } & {
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } & Record<Exclude<keyof I["proposals"][number]["final_tally_result"], keyof TallyResult>, never>) | undefined;
            submit_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["proposals"][number]["submit_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            deposit_end_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["proposals"][number]["deposit_end_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            total_deposit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["proposals"][number]["total_deposit"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["proposals"][number]["total_deposit"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            voting_start_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["proposals"][number]["voting_start_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            voting_end_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["proposals"][number]["voting_end_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            is_expedited?: boolean | undefined;
        } & Record<Exclude<keyof I["proposals"][number], keyof Proposal>, never>)[] & Record<Exclude<keyof I["proposals"], keyof {
            proposal_id?: string | undefined;
            content?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            status?: ProposalStatus | undefined;
            final_tally_result?: {
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } | undefined;
            submit_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            deposit_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            total_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            voting_start_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            voting_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            is_expedited?: boolean | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryProposalsResponse>, never>>(object: I): QueryProposalsResponse;
};
export declare const QueryVoteRequest: {
    encode(message: QueryVoteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryVoteRequest;
    fromJSON(object: any): QueryVoteRequest;
    toJSON(message: QueryVoteRequest): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
        voter?: string | undefined;
    } & {
        proposal_id?: string | undefined;
        voter?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryVoteRequest>, never>>(object: I): QueryVoteRequest;
};
export declare const QueryVoteResponse: {
    encode(message: QueryVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryVoteResponse;
    fromJSON(object: any): QueryVoteResponse;
    toJSON(message: QueryVoteResponse): unknown;
    fromPartial<I extends {
        vote?: {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./gov").VoteOption | undefined;
            options?: {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        vote?: ({
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./gov").VoteOption | undefined;
            options?: {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] | undefined;
        } & {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./gov").VoteOption | undefined;
            options?: ({
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] & ({
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            } & {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            } & Record<Exclude<keyof I["vote"]["options"][number], keyof import("./gov").WeightedVoteOption>, never>)[] & Record<Exclude<keyof I["vote"]["options"], keyof {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["vote"], keyof Vote>, never>) | undefined;
    } & Record<Exclude<keyof I, "vote">, never>>(object: I): QueryVoteResponse;
};
export declare const QueryVotesRequest: {
    encode(message: QueryVotesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryVotesRequest;
    fromJSON(object: any): QueryVotesRequest;
    toJSON(message: QueryVotesRequest): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        proposal_id?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryVotesRequest>, never>>(object: I): QueryVotesRequest;
};
export declare const QueryVotesResponse: {
    encode(message: QueryVotesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryVotesResponse;
    fromJSON(object: any): QueryVotesResponse;
    toJSON(message: QueryVotesResponse): unknown;
    fromPartial<I extends {
        votes?: {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./gov").VoteOption | undefined;
            options?: {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        votes?: ({
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./gov").VoteOption | undefined;
            options?: {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] | undefined;
        }[] & ({
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./gov").VoteOption | undefined;
            options?: {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] | undefined;
        } & {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./gov").VoteOption | undefined;
            options?: ({
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] & ({
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            } & {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            } & Record<Exclude<keyof I["votes"][number]["options"][number], keyof import("./gov").WeightedVoteOption>, never>)[] & Record<Exclude<keyof I["votes"][number]["options"], keyof {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["votes"][number], keyof Vote>, never>)[] & Record<Exclude<keyof I["votes"], keyof {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./gov").VoteOption | undefined;
            options?: {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryVotesResponse>, never>>(object: I): QueryVotesResponse;
};
export declare const QueryParamsRequest: {
    encode(message: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryParamsRequest;
    fromJSON(object: any): QueryParamsRequest;
    toJSON(message: QueryParamsRequest): unknown;
    fromPartial<I extends {
        params_type?: string | undefined;
    } & {
        params_type?: string | undefined;
    } & Record<Exclude<keyof I, "params_type">, never>>(object: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        voting_params?: {
            voting_period?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            expedited_voting_period?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        deposit_params?: {
            min_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            max_deposit_period?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            min_expedited_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } | undefined;
        tally_params?: {
            quorum?: Uint8Array | undefined;
            threshold?: Uint8Array | undefined;
            veto_threshold?: Uint8Array | undefined;
            expedited_threshold?: Uint8Array | undefined;
        } | undefined;
    } & {
        voting_params?: ({
            voting_period?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            expedited_voting_period?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            voting_period?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["voting_params"]["voting_period"], keyof import("../../../google/protobuf/duration").Duration>, never>) | undefined;
            expedited_voting_period?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["voting_params"]["expedited_voting_period"], keyof import("../../../google/protobuf/duration").Duration>, never>) | undefined;
        } & Record<Exclude<keyof I["voting_params"], keyof VotingParams>, never>) | undefined;
        deposit_params?: ({
            min_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            max_deposit_period?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            min_expedited_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            min_deposit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["deposit_params"]["min_deposit"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["deposit_params"]["min_deposit"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            max_deposit_period?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["deposit_params"]["max_deposit_period"], keyof import("../../../google/protobuf/duration").Duration>, never>) | undefined;
            min_expedited_deposit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["deposit_params"]["min_expedited_deposit"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["deposit_params"]["min_expedited_deposit"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["deposit_params"], keyof DepositParams>, never>) | undefined;
        tally_params?: ({
            quorum?: Uint8Array | undefined;
            threshold?: Uint8Array | undefined;
            veto_threshold?: Uint8Array | undefined;
            expedited_threshold?: Uint8Array | undefined;
        } & {
            quorum?: Uint8Array | undefined;
            threshold?: Uint8Array | undefined;
            veto_threshold?: Uint8Array | undefined;
            expedited_threshold?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["tally_params"], keyof TallyParams>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryParamsResponse>, never>>(object: I): QueryParamsResponse;
};
export declare const QueryDepositRequest: {
    encode(message: QueryDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDepositRequest;
    fromJSON(object: any): QueryDepositRequest;
    toJSON(message: QueryDepositRequest): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
        depositor?: string | undefined;
    } & {
        proposal_id?: string | undefined;
        depositor?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryDepositRequest>, never>>(object: I): QueryDepositRequest;
};
export declare const QueryDepositResponse: {
    encode(message: QueryDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDepositResponse;
    fromJSON(object: any): QueryDepositResponse;
    toJSON(message: QueryDepositResponse): unknown;
    fromPartial<I extends {
        deposit?: {
            proposal_id?: string | undefined;
            depositor?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        deposit?: ({
            proposal_id?: string | undefined;
            depositor?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            proposal_id?: string | undefined;
            depositor?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["deposit"]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["deposit"]["amount"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["deposit"], keyof Deposit>, never>) | undefined;
    } & Record<Exclude<keyof I, "deposit">, never>>(object: I): QueryDepositResponse;
};
export declare const QueryDepositsRequest: {
    encode(message: QueryDepositsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDepositsRequest;
    fromJSON(object: any): QueryDepositsRequest;
    toJSON(message: QueryDepositsRequest): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        proposal_id?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryDepositsRequest>, never>>(object: I): QueryDepositsRequest;
};
export declare const QueryDepositsResponse: {
    encode(message: QueryDepositsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDepositsResponse;
    fromJSON(object: any): QueryDepositsResponse;
    toJSON(message: QueryDepositsResponse): unknown;
    fromPartial<I extends {
        deposits?: {
            proposal_id?: string | undefined;
            depositor?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        deposits?: ({
            proposal_id?: string | undefined;
            depositor?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] & ({
            proposal_id?: string | undefined;
            depositor?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            proposal_id?: string | undefined;
            depositor?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["deposits"][number]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["deposits"][number]["amount"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["deposits"][number], keyof Deposit>, never>)[] & Record<Exclude<keyof I["deposits"], keyof {
            proposal_id?: string | undefined;
            depositor?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryDepositsResponse>, never>>(object: I): QueryDepositsResponse;
};
export declare const QueryTallyResultRequest: {
    encode(message: QueryTallyResultRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryTallyResultRequest;
    fromJSON(object: any): QueryTallyResultRequest;
    toJSON(message: QueryTallyResultRequest): unknown;
    fromPartial<I extends {
        proposal_id?: string | undefined;
    } & {
        proposal_id?: string | undefined;
    } & Record<Exclude<keyof I, "proposal_id">, never>>(object: I): QueryTallyResultRequest;
};
export declare const QueryTallyResultResponse: {
    encode(message: QueryTallyResultResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryTallyResultResponse;
    fromJSON(object: any): QueryTallyResultResponse;
    toJSON(message: QueryTallyResultResponse): unknown;
    fromPartial<I extends {
        tally?: {
            yes?: string | undefined;
            abstain?: string | undefined;
            no?: string | undefined;
            no_with_veto?: string | undefined;
        } | undefined;
    } & {
        tally?: ({
            yes?: string | undefined;
            abstain?: string | undefined;
            no?: string | undefined;
            no_with_veto?: string | undefined;
        } & {
            yes?: string | undefined;
            abstain?: string | undefined;
            no?: string | undefined;
            no_with_veto?: string | undefined;
        } & Record<Exclude<keyof I["tally"], keyof TallyResult>, never>) | undefined;
    } & Record<Exclude<keyof I, "tally">, never>>(object: I): QueryTallyResultResponse;
};
/** Query defines the gRPC querier service for gov module */
export interface Query {
    /** Proposal queries proposal details based on ProposalID. */
    Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    /** Proposals queries all proposals based on given status. */
    Proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
    /** Vote queries voted information based on proposalID, voterAddr. */
    Vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
    /** Votes queries votes of a given proposal. */
    Votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
    /** Params queries all parameters of the gov module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Deposit queries single deposit information based proposalID, depositAddr. */
    Deposit(request: QueryDepositRequest): Promise<QueryDepositResponse>;
    /** Deposits queries all deposits of a single proposal. */
    Deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
    /** TallyResult queries the tally of a proposal vote. */
    TallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    Proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
    Vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
    Votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Deposit(request: QueryDepositRequest): Promise<QueryDepositResponse>;
    Deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
    TallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
//# sourceMappingURL=query.d.ts.map