import * as _m0 from "protobufjs/minimal";
import { Params, ValidatorOutstandingRewards, ValidatorAccumulatedCommission, ValidatorSlashEvent, DelegationDelegatorReward } from "./distribution";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { DecCoin } from "../../base/v1beta1/coin";
export declare const protobufPackage = "cosmos.distribution.v1beta1";
/** QueryRestakeThresholdRequest is the request type for the Query/Params RPC method. */
export interface QueryRestakeEntriesRequest {
    delegator: string;
}
/** QueryRestakeThresholdResponse is the request type for the Query/Params RPC method. */
export interface QueryRestakingEntriesResponse {
    /** threshold = minimum amount in uscrt that you need to have delegated to enable restaking */
    validators: string[];
}
/** QueryRestakeThresholdRequest is the request type for the Query/Params RPC method. */
export interface QueryRestakeThresholdRequest {
}
/** QueryRestakeThresholdResponse is the request type for the Query/Params RPC method. */
export interface QueryRestakeThresholdResponse {
    /** threshold = minimum amount in uscrt that you need to have delegated to enable restaking */
    threshold: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequest {
    /** validator_address defines the validator address to query for. */
    validator_address: string;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponse {
    rewards?: ValidatorOutstandingRewards;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequest {
    /** validator_address defines the validator address to query for. */
    validator_address: string;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponse {
    /** commission defines the commision the validator received. */
    commission?: ValidatorAccumulatedCommission;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequest {
    /** validator_address defines the validator address to query for. */
    validator_address: string;
    /** starting_height defines the optional starting height to query the slashes. */
    starting_height: string;
    /** starting_height defines the optional ending height to query the slashes. */
    ending_height: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponse {
    /** slashes defines the slashes the validator received. */
    slashes: ValidatorSlashEvent[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequest {
    /** delegator_address defines the delegator address to query for. */
    delegator_address: string;
    /** validator_address defines the validator address to query for. */
    validator_address: string;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponse {
    /** rewards defines the rewards accrued by a delegation. */
    rewards: DecCoin[];
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequest {
    /** delegator_address defines the delegator address to query for. */
    delegator_address: string;
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponse {
    /** rewards defines all the rewards accrued by a delegator. */
    rewards: DelegationDelegatorReward[];
    /** total defines the sum of all the rewards. */
    total: DecCoin[];
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
    /** delegator_address defines the delegator address to query for. */
    delegator_address: string;
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
    /** validators defines the validators a delegator is delegating for. */
    validators: string[];
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequest {
    /** delegator_address defines the delegator address to query for. */
    delegator_address: string;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponse {
    /** withdraw_address defines the delegator address to query for. */
    withdraw_address: string;
}
/**
 * QueryFoundationTaxRequest is the request type for the
 * Query/FoundationTax RPC method.
 */
export interface QueryFoundationTaxRequest {
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryFoundationTaxResponse {
    /** withdraw_address defines the delegator address to query for. */
    tax: string;
    foundation_address: string;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequest {
}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponse {
    /** pool defines community pool's coins. */
    pool: DecCoin[];
}
export declare const QueryRestakeEntriesRequest: {
    encode(message: QueryRestakeEntriesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryRestakeEntriesRequest;
    fromJSON(object: any): QueryRestakeEntriesRequest;
    toJSON(message: QueryRestakeEntriesRequest): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
    } & {
        delegator?: string | undefined;
    } & Record<Exclude<keyof I, "delegator">, never>>(object: I): QueryRestakeEntriesRequest;
};
export declare const QueryRestakingEntriesResponse: {
    encode(message: QueryRestakingEntriesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryRestakingEntriesResponse;
    fromJSON(object: any): QueryRestakingEntriesResponse;
    toJSON(message: QueryRestakingEntriesResponse): unknown;
    fromPartial<I extends {
        validators?: string[] | undefined;
    } & {
        validators?: (string[] & string[] & Record<Exclude<keyof I["validators"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "validators">, never>>(object: I): QueryRestakingEntriesResponse;
};
export declare const QueryRestakeThresholdRequest: {
    encode(_: QueryRestakeThresholdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryRestakeThresholdRequest;
    fromJSON(_: any): QueryRestakeThresholdRequest;
    toJSON(_: QueryRestakeThresholdRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryRestakeThresholdRequest;
};
export declare const QueryRestakeThresholdResponse: {
    encode(message: QueryRestakeThresholdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryRestakeThresholdResponse;
    fromJSON(object: any): QueryRestakeThresholdResponse;
    toJSON(message: QueryRestakeThresholdResponse): unknown;
    fromPartial<I extends {
        threshold?: string | undefined;
    } & {
        threshold?: string | undefined;
    } & Record<Exclude<keyof I, "threshold">, never>>(object: I): QueryRestakeThresholdResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            community_tax?: string | undefined;
            base_proposer_reward?: string | undefined;
            bonus_proposer_reward?: string | undefined;
            withdraw_addr_enabled?: boolean | undefined;
            secret_foundation_tax?: string | undefined;
            secret_foundation_address?: string | undefined;
            minimum_restake_threshold?: string | undefined;
            restake_period?: string | undefined;
        } | undefined;
    } & {
        params?: ({
            community_tax?: string | undefined;
            base_proposer_reward?: string | undefined;
            bonus_proposer_reward?: string | undefined;
            withdraw_addr_enabled?: boolean | undefined;
            secret_foundation_tax?: string | undefined;
            secret_foundation_address?: string | undefined;
            minimum_restake_threshold?: string | undefined;
            restake_period?: string | undefined;
        } & {
            community_tax?: string | undefined;
            base_proposer_reward?: string | undefined;
            bonus_proposer_reward?: string | undefined;
            withdraw_addr_enabled?: boolean | undefined;
            secret_foundation_tax?: string | undefined;
            secret_foundation_address?: string | undefined;
            minimum_restake_threshold?: string | undefined;
            restake_period?: string | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const QueryValidatorOutstandingRewardsRequest: {
    encode(message: QueryValidatorOutstandingRewardsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorOutstandingRewardsRequest;
    fromJSON(object: any): QueryValidatorOutstandingRewardsRequest;
    toJSON(message: QueryValidatorOutstandingRewardsRequest): unknown;
    fromPartial<I extends {
        validator_address?: string | undefined;
    } & {
        validator_address?: string | undefined;
    } & Record<Exclude<keyof I, "validator_address">, never>>(object: I): QueryValidatorOutstandingRewardsRequest;
};
export declare const QueryValidatorOutstandingRewardsResponse: {
    encode(message: QueryValidatorOutstandingRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorOutstandingRewardsResponse;
    fromJSON(object: any): QueryValidatorOutstandingRewardsResponse;
    toJSON(message: QueryValidatorOutstandingRewardsResponse): unknown;
    fromPartial<I extends {
        rewards?: {
            rewards?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        rewards?: ({
            rewards?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            rewards?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["rewards"]["rewards"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["rewards"]["rewards"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["rewards"], "rewards">, never>) | undefined;
    } & Record<Exclude<keyof I, "rewards">, never>>(object: I): QueryValidatorOutstandingRewardsResponse;
};
export declare const QueryValidatorCommissionRequest: {
    encode(message: QueryValidatorCommissionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorCommissionRequest;
    fromJSON(object: any): QueryValidatorCommissionRequest;
    toJSON(message: QueryValidatorCommissionRequest): unknown;
    fromPartial<I extends {
        validator_address?: string | undefined;
    } & {
        validator_address?: string | undefined;
    } & Record<Exclude<keyof I, "validator_address">, never>>(object: I): QueryValidatorCommissionRequest;
};
export declare const QueryValidatorCommissionResponse: {
    encode(message: QueryValidatorCommissionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorCommissionResponse;
    fromJSON(object: any): QueryValidatorCommissionResponse;
    toJSON(message: QueryValidatorCommissionResponse): unknown;
    fromPartial<I extends {
        commission?: {
            commission?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        commission?: ({
            commission?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            commission?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["commission"]["commission"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["commission"]["commission"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["commission"], "commission">, never>) | undefined;
    } & Record<Exclude<keyof I, "commission">, never>>(object: I): QueryValidatorCommissionResponse;
};
export declare const QueryValidatorSlashesRequest: {
    encode(message: QueryValidatorSlashesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorSlashesRequest;
    fromJSON(object: any): QueryValidatorSlashesRequest;
    toJSON(message: QueryValidatorSlashesRequest): unknown;
    fromPartial<I extends {
        validator_address?: string | undefined;
        starting_height?: string | undefined;
        ending_height?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        validator_address?: string | undefined;
        starting_height?: string | undefined;
        ending_height?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryValidatorSlashesRequest>, never>>(object: I): QueryValidatorSlashesRequest;
};
export declare const QueryValidatorSlashesResponse: {
    encode(message: QueryValidatorSlashesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorSlashesResponse;
    fromJSON(object: any): QueryValidatorSlashesResponse;
    toJSON(message: QueryValidatorSlashesResponse): unknown;
    fromPartial<I extends {
        slashes?: {
            validator_period?: string | undefined;
            fraction?: string | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        slashes?: ({
            validator_period?: string | undefined;
            fraction?: string | undefined;
        }[] & ({
            validator_period?: string | undefined;
            fraction?: string | undefined;
        } & {
            validator_period?: string | undefined;
            fraction?: string | undefined;
        } & Record<Exclude<keyof I["slashes"][number], keyof ValidatorSlashEvent>, never>)[] & Record<Exclude<keyof I["slashes"], keyof {
            validator_period?: string | undefined;
            fraction?: string | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryValidatorSlashesResponse>, never>>(object: I): QueryValidatorSlashesResponse;
};
export declare const QueryDelegationRewardsRequest: {
    encode(message: QueryDelegationRewardsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDelegationRewardsRequest;
    fromJSON(object: any): QueryDelegationRewardsRequest;
    toJSON(message: QueryDelegationRewardsRequest): unknown;
    fromPartial<I extends {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
    } & {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryDelegationRewardsRequest>, never>>(object: I): QueryDelegationRewardsRequest;
};
export declare const QueryDelegationRewardsResponse: {
    encode(message: QueryDelegationRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDelegationRewardsResponse;
    fromJSON(object: any): QueryDelegationRewardsResponse;
    toJSON(message: QueryDelegationRewardsResponse): unknown;
    fromPartial<I extends {
        rewards?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        rewards?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["rewards"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["rewards"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "rewards">, never>>(object: I): QueryDelegationRewardsResponse;
};
export declare const QueryDelegationTotalRewardsRequest: {
    encode(message: QueryDelegationTotalRewardsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDelegationTotalRewardsRequest;
    fromJSON(object: any): QueryDelegationTotalRewardsRequest;
    toJSON(message: QueryDelegationTotalRewardsRequest): unknown;
    fromPartial<I extends {
        delegator_address?: string | undefined;
    } & {
        delegator_address?: string | undefined;
    } & Record<Exclude<keyof I, "delegator_address">, never>>(object: I): QueryDelegationTotalRewardsRequest;
};
export declare const QueryDelegationTotalRewardsResponse: {
    encode(message: QueryDelegationTotalRewardsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDelegationTotalRewardsResponse;
    fromJSON(object: any): QueryDelegationTotalRewardsResponse;
    toJSON(message: QueryDelegationTotalRewardsResponse): unknown;
    fromPartial<I extends {
        rewards?: {
            validator_address?: string | undefined;
            reward?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        total?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        rewards?: ({
            validator_address?: string | undefined;
            reward?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] & ({
            validator_address?: string | undefined;
            reward?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            validator_address?: string | undefined;
            reward?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["rewards"][number]["reward"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["rewards"][number]["reward"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["rewards"][number], keyof DelegationDelegatorReward>, never>)[] & Record<Exclude<keyof I["rewards"], keyof {
            validator_address?: string | undefined;
            reward?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        total?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["total"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["total"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryDelegationTotalRewardsResponse>, never>>(object: I): QueryDelegationTotalRewardsResponse;
};
export declare const QueryDelegatorValidatorsRequest: {
    encode(message: QueryDelegatorValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDelegatorValidatorsRequest;
    fromJSON(object: any): QueryDelegatorValidatorsRequest;
    toJSON(message: QueryDelegatorValidatorsRequest): unknown;
    fromPartial<I extends {
        delegator_address?: string | undefined;
    } & {
        delegator_address?: string | undefined;
    } & Record<Exclude<keyof I, "delegator_address">, never>>(object: I): QueryDelegatorValidatorsRequest;
};
export declare const QueryDelegatorValidatorsResponse: {
    encode(message: QueryDelegatorValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDelegatorValidatorsResponse;
    fromJSON(object: any): QueryDelegatorValidatorsResponse;
    toJSON(message: QueryDelegatorValidatorsResponse): unknown;
    fromPartial<I extends {
        validators?: string[] | undefined;
    } & {
        validators?: (string[] & string[] & Record<Exclude<keyof I["validators"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "validators">, never>>(object: I): QueryDelegatorValidatorsResponse;
};
export declare const QueryDelegatorWithdrawAddressRequest: {
    encode(message: QueryDelegatorWithdrawAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDelegatorWithdrawAddressRequest;
    fromJSON(object: any): QueryDelegatorWithdrawAddressRequest;
    toJSON(message: QueryDelegatorWithdrawAddressRequest): unknown;
    fromPartial<I extends {
        delegator_address?: string | undefined;
    } & {
        delegator_address?: string | undefined;
    } & Record<Exclude<keyof I, "delegator_address">, never>>(object: I): QueryDelegatorWithdrawAddressRequest;
};
export declare const QueryDelegatorWithdrawAddressResponse: {
    encode(message: QueryDelegatorWithdrawAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDelegatorWithdrawAddressResponse;
    fromJSON(object: any): QueryDelegatorWithdrawAddressResponse;
    toJSON(message: QueryDelegatorWithdrawAddressResponse): unknown;
    fromPartial<I extends {
        withdraw_address?: string | undefined;
    } & {
        withdraw_address?: string | undefined;
    } & Record<Exclude<keyof I, "withdraw_address">, never>>(object: I): QueryDelegatorWithdrawAddressResponse;
};
export declare const QueryFoundationTaxRequest: {
    encode(_: QueryFoundationTaxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryFoundationTaxRequest;
    fromJSON(_: any): QueryFoundationTaxRequest;
    toJSON(_: QueryFoundationTaxRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryFoundationTaxRequest;
};
export declare const QueryFoundationTaxResponse: {
    encode(message: QueryFoundationTaxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryFoundationTaxResponse;
    fromJSON(object: any): QueryFoundationTaxResponse;
    toJSON(message: QueryFoundationTaxResponse): unknown;
    fromPartial<I extends {
        tax?: string | undefined;
        foundation_address?: string | undefined;
    } & {
        tax?: string | undefined;
        foundation_address?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryFoundationTaxResponse>, never>>(object: I): QueryFoundationTaxResponse;
};
export declare const QueryCommunityPoolRequest: {
    encode(_: QueryCommunityPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCommunityPoolRequest;
    fromJSON(_: any): QueryCommunityPoolRequest;
    toJSON(_: QueryCommunityPoolRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryCommunityPoolRequest;
};
export declare const QueryCommunityPoolResponse: {
    encode(message: QueryCommunityPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCommunityPoolResponse;
    fromJSON(object: any): QueryCommunityPoolResponse;
    toJSON(message: QueryCommunityPoolResponse): unknown;
    fromPartial<I extends {
        pool?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        pool?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["pool"][number], keyof DecCoin>, never>)[] & Record<Exclude<keyof I["pool"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "pool">, never>>(object: I): QueryCommunityPoolResponse;
};
/** Query defines the gRPC querier service for distribution module. */
export interface Query {
    /** Params queries params of the distribution module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** ValidatorOutstandingRewards queries rewards of a validator address. */
    ValidatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse>;
    /** ValidatorCommission queries accumulated commission for a validator. */
    ValidatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;
    /** ValidatorSlashes queries slash events of a validator. */
    ValidatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;
    /** DelegationRewards queries the total rewards accrued by a delegation. */
    DelegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
    /**
     * DelegationTotalRewards queries the total rewards accrued by a each
     * validator.
     */
    DelegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse>;
    /** DelegatorValidators queries the validators of a delegator. */
    DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
    DelegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse>;
    /** CommunityPool queries the community pool coins. */
    CommunityPool(request: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
    /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
    FoundationTax(request: QueryFoundationTaxRequest): Promise<QueryFoundationTaxResponse>;
    /** RestakeThreshold queries the community pool coins. */
    RestakeThreshold(request: QueryRestakeThresholdRequest): Promise<QueryRestakeThresholdResponse>;
    /** RestakeThreshold queries the community pool coins. */
    RestakingEntries(request: QueryRestakeEntriesRequest): Promise<QueryRestakingEntriesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    ValidatorOutstandingRewards(request: QueryValidatorOutstandingRewardsRequest): Promise<QueryValidatorOutstandingRewardsResponse>;
    ValidatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;
    ValidatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;
    DelegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
    DelegationTotalRewards(request: QueryDelegationTotalRewardsRequest): Promise<QueryDelegationTotalRewardsResponse>;
    DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    DelegatorWithdrawAddress(request: QueryDelegatorWithdrawAddressRequest): Promise<QueryDelegatorWithdrawAddressResponse>;
    CommunityPool(request: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
    FoundationTax(request: QueryFoundationTaxRequest): Promise<QueryFoundationTaxResponse>;
    RestakeThreshold(request: QueryRestakeThresholdRequest): Promise<QueryRestakeThresholdResponse>;
    RestakingEntries(request: QueryRestakeEntriesRequest): Promise<QueryRestakingEntriesResponse>;
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