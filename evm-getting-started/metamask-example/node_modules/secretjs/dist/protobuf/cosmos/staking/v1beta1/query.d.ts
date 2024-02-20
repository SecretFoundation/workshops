import * as _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Validator, DelegationResponse, UnbondingDelegation, HistoricalInfo, Pool, Params, RedelegationResponse } from "./staking";
export declare const protobufPackage = "cosmos.staking.v1beta1";
/** QueryValidatorsRequest is request type for Query/Validators RPC method. */
export interface QueryValidatorsRequest {
    /** status enables to query for validators matching a given status. */
    status: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/** QueryValidatorsResponse is response type for the Query/Validators RPC method */
export interface QueryValidatorsResponse {
    /** validators contains all the queried validators. */
    validators: Validator[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryValidatorRequest is response type for the Query/Validator RPC method */
export interface QueryValidatorRequest {
    /** validator_addr defines the validator address to query for. */
    validator_addr: string;
}
/** QueryValidatorResponse is response type for the Query/Validator RPC method */
export interface QueryValidatorResponse {
    /** validator defines the the validator info. */
    validator?: Validator;
}
/**
 * QueryValidatorDelegationsRequest is request type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsRequest {
    /** validator_addr defines the validator address to query for. */
    validator_addr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryValidatorDelegationsResponse is response type for the
 * Query/ValidatorDelegations RPC method
 */
export interface QueryValidatorDelegationsResponse {
    delegation_responses: DelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryValidatorUnbondingDelegationsRequest is required type for the
 * Query/ValidatorUnbondingDelegations RPC method
 */
export interface QueryValidatorUnbondingDelegationsRequest {
    /** validator_addr defines the validator address to query for. */
    validator_addr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryValidatorUnbondingDelegationsResponse is response type for the
 * Query/ValidatorUnbondingDelegations RPC method.
 */
export interface QueryValidatorUnbondingDelegationsResponse {
    unbonding_responses: UnbondingDelegation[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryDelegationRequest is request type for the Query/Delegation RPC method. */
export interface QueryDelegationRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr: string;
    /** validator_addr defines the validator address to query for. */
    validator_addr: string;
}
/** QueryDelegationResponse is response type for the Query/Delegation RPC method. */
export interface QueryDelegationResponse {
    /** delegation_responses defines the delegation info of a delegation. */
    delegation_response?: DelegationResponse;
}
/**
 * QueryUnbondingDelegationRequest is request type for the
 * Query/UnbondingDelegation RPC method.
 */
export interface QueryUnbondingDelegationRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr: string;
    /** validator_addr defines the validator address to query for. */
    validator_addr: string;
}
/**
 * QueryDelegationResponse is response type for the Query/UnbondingDelegation
 * RPC method.
 */
export interface QueryUnbondingDelegationResponse {
    /** unbond defines the unbonding information of a delegation. */
    unbond?: UnbondingDelegation;
}
/**
 * QueryDelegatorDelegationsRequest is request type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryDelegatorDelegationsResponse is response type for the
 * Query/DelegatorDelegations RPC method.
 */
export interface QueryDelegatorDelegationsResponse {
    /** delegation_responses defines all the delegations' info of a delegator. */
    delegation_responses: DelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryDelegatorUnbondingDelegationsRequest is request type for the
 * Query/DelegatorUnbondingDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryUnbondingDelegatorDelegationsResponse is response type for the
 * Query/UnbondingDelegatorDelegations RPC method.
 */
export interface QueryDelegatorUnbondingDelegationsResponse {
    unbonding_responses: UnbondingDelegation[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryRedelegationsRequest is request type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr: string;
    /** src_validator_addr defines the validator address to redelegate from. */
    src_validator_addr: string;
    /** dst_validator_addr defines the validator address to redelegate to. */
    dst_validator_addr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryRedelegationsResponse is response type for the Query/Redelegations RPC
 * method.
 */
export interface QueryRedelegationsResponse {
    redelegation_responses: RedelegationResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryDelegatorValidatorsRequest is request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr: string;
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryDelegatorValidatorsResponse is response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
    /** validators defines the the validators' info of a delegator. */
    validators: Validator[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/**
 * QueryDelegatorValidatorRequest is request type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorRequest {
    /** delegator_addr defines the delegator address to query for. */
    delegator_addr: string;
    /** validator_addr defines the validator address to query for. */
    validator_addr: string;
}
/**
 * QueryDelegatorValidatorResponse response type for the
 * Query/DelegatorValidator RPC method.
 */
export interface QueryDelegatorValidatorResponse {
    /** validator defines the the validator info. */
    validator?: Validator;
}
/**
 * QueryHistoricalInfoRequest is request type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoRequest {
    /** height defines at which height to query the historical info. */
    height: string;
}
/**
 * QueryHistoricalInfoResponse is response type for the Query/HistoricalInfo RPC
 * method.
 */
export interface QueryHistoricalInfoResponse {
    /** hist defines the historical info at the given height. */
    hist?: HistoricalInfo;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
    /** pool defines the pool info. */
    pool?: Pool;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
export declare const QueryValidatorsRequest: {
    encode(message: QueryValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorsRequest;
    fromJSON(object: any): QueryValidatorsRequest;
    toJSON(message: QueryValidatorsRequest): unknown;
    fromPartial<I extends {
        status?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        status?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryValidatorsRequest>, never>>(object: I): QueryValidatorsRequest;
};
export declare const QueryValidatorsResponse: {
    encode(message: QueryValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorsResponse;
    fromJSON(object: any): QueryValidatorsResponse;
    toJSON(message: QueryValidatorsResponse): unknown;
    fromPartial<I extends {
        validators?: {
            operator_address?: string | undefined;
            consensus_pubkey?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            commission?: {
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            min_self_delegation?: string | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        validators?: ({
            operator_address?: string | undefined;
            consensus_pubkey?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            commission?: {
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            min_self_delegation?: string | undefined;
        }[] & ({
            operator_address?: string | undefined;
            consensus_pubkey?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            commission?: {
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            min_self_delegation?: string | undefined;
        } & {
            operator_address?: string | undefined;
            consensus_pubkey?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["validators"][number]["consensus_pubkey"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: ({
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } & {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } & Record<Exclude<keyof I["validators"][number]["description"], keyof import("./staking").Description>, never>) | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["validators"][number]["unbonding_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            commission?: ({
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                commission_rates?: ({
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } & {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } & Record<Exclude<keyof I["validators"][number]["commission"]["commission_rates"], keyof import("./staking").CommissionRates>, never>) | undefined;
                update_time?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["validators"][number]["commission"]["update_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            } & Record<Exclude<keyof I["validators"][number]["commission"], keyof import("./staking").Commission>, never>) | undefined;
            min_self_delegation?: string | undefined;
        } & Record<Exclude<keyof I["validators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["validators"], keyof {
            operator_address?: string | undefined;
            consensus_pubkey?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            commission?: {
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            min_self_delegation?: string | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryValidatorsResponse>, never>>(object: I): QueryValidatorsResponse;
};
export declare const QueryValidatorRequest: {
    encode(message: QueryValidatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorRequest;
    fromJSON(object: any): QueryValidatorRequest;
    toJSON(message: QueryValidatorRequest): unknown;
    fromPartial<I extends {
        validator_addr?: string | undefined;
    } & {
        validator_addr?: string | undefined;
    } & Record<Exclude<keyof I, "validator_addr">, never>>(object: I): QueryValidatorRequest;
};
export declare const QueryValidatorResponse: {
    encode(message: QueryValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorResponse;
    fromJSON(object: any): QueryValidatorResponse;
    toJSON(message: QueryValidatorResponse): unknown;
    fromPartial<I extends {
        validator?: {
            operator_address?: string | undefined;
            consensus_pubkey?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            commission?: {
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            min_self_delegation?: string | undefined;
        } | undefined;
    } & {
        validator?: ({
            operator_address?: string | undefined;
            consensus_pubkey?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            commission?: {
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            min_self_delegation?: string | undefined;
        } & {
            operator_address?: string | undefined;
            consensus_pubkey?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["validator"]["consensus_pubkey"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: ({
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } & {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } & Record<Exclude<keyof I["validator"]["description"], keyof import("./staking").Description>, never>) | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["validator"]["unbonding_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            commission?: ({
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                commission_rates?: ({
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } & {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } & Record<Exclude<keyof I["validator"]["commission"]["commission_rates"], keyof import("./staking").CommissionRates>, never>) | undefined;
                update_time?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["validator"]["commission"]["update_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            } & Record<Exclude<keyof I["validator"]["commission"], keyof import("./staking").Commission>, never>) | undefined;
            min_self_delegation?: string | undefined;
        } & Record<Exclude<keyof I["validator"], keyof Validator>, never>) | undefined;
    } & Record<Exclude<keyof I, "validator">, never>>(object: I): QueryValidatorResponse;
};
export declare const QueryValidatorDelegationsRequest: {
    encode(message: QueryValidatorDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorDelegationsRequest;
    fromJSON(object: any): QueryValidatorDelegationsRequest;
    toJSON(message: QueryValidatorDelegationsRequest): unknown;
    fromPartial<I extends {
        validator_addr?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        validator_addr?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryValidatorDelegationsRequest>, never>>(object: I): QueryValidatorDelegationsRequest;
};
export declare const QueryValidatorDelegationsResponse: {
    encode(message: QueryValidatorDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorDelegationsResponse;
    fromJSON(object: any): QueryValidatorDelegationsResponse;
    toJSON(message: QueryValidatorDelegationsResponse): unknown;
    fromPartial<I extends {
        delegation_responses?: {
            delegation?: {
                delegator_address?: string | undefined;
                validator_address?: string | undefined;
                shares?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        delegation_responses?: ({
            delegation?: {
                delegator_address?: string | undefined;
                validator_address?: string | undefined;
                shares?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] & ({
            delegation?: {
                delegator_address?: string | undefined;
                validator_address?: string | undefined;
                shares?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            delegation?: ({
                delegator_address?: string | undefined;
                validator_address?: string | undefined;
                shares?: string | undefined;
            } & {
                delegator_address?: string | undefined;
                validator_address?: string | undefined;
                shares?: string | undefined;
            } & Record<Exclude<keyof I["delegation_responses"][number]["delegation"], keyof import("./staking").Delegation>, never>) | undefined;
            balance?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["delegation_responses"][number]["balance"], keyof import("../../base/v1beta1/coin").Coin>, never>) | undefined;
        } & Record<Exclude<keyof I["delegation_responses"][number], keyof DelegationResponse>, never>)[] & Record<Exclude<keyof I["delegation_responses"], keyof {
            delegation?: {
                delegator_address?: string | undefined;
                validator_address?: string | undefined;
                shares?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryValidatorDelegationsResponse>, never>>(object: I): QueryValidatorDelegationsResponse;
};
export declare const QueryValidatorUnbondingDelegationsRequest: {
    encode(message: QueryValidatorUnbondingDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorUnbondingDelegationsRequest;
    fromJSON(object: any): QueryValidatorUnbondingDelegationsRequest;
    toJSON(message: QueryValidatorUnbondingDelegationsRequest): unknown;
    fromPartial<I extends {
        validator_addr?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        validator_addr?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryValidatorUnbondingDelegationsRequest>, never>>(object: I): QueryValidatorUnbondingDelegationsRequest;
};
export declare const QueryValidatorUnbondingDelegationsResponse: {
    encode(message: QueryValidatorUnbondingDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryValidatorUnbondingDelegationsResponse;
    fromJSON(object: any): QueryValidatorUnbondingDelegationsResponse;
    toJSON(message: QueryValidatorUnbondingDelegationsResponse): unknown;
    fromPartial<I extends {
        unbonding_responses?: {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            entries?: {
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        unbonding_responses?: ({
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            entries?: {
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        }[] & ({
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            entries?: {
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        } & {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            entries?: ({
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[] & ({
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            } & {
                creation_height?: string | undefined;
                completion_time?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["unbonding_responses"][number]["entries"][number]["completion_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            } & Record<Exclude<keyof I["unbonding_responses"][number]["entries"][number], keyof import("./staking").UnbondingDelegationEntry>, never>)[] & Record<Exclude<keyof I["unbonding_responses"][number]["entries"], keyof {
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["unbonding_responses"][number], keyof UnbondingDelegation>, never>)[] & Record<Exclude<keyof I["unbonding_responses"], keyof {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            entries?: {
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryValidatorUnbondingDelegationsResponse>, never>>(object: I): QueryValidatorUnbondingDelegationsResponse;
};
export declare const QueryDelegationRequest: {
    encode(message: QueryDelegationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDelegationRequest;
    fromJSON(object: any): QueryDelegationRequest;
    toJSON(message: QueryDelegationRequest): unknown;
    fromPartial<I extends {
        delegator_addr?: string | undefined;
        validator_addr?: string | undefined;
    } & {
        delegator_addr?: string | undefined;
        validator_addr?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryDelegationRequest>, never>>(object: I): QueryDelegationRequest;
};
export declare const QueryDelegationResponse: {
    encode(message: QueryDelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDelegationResponse;
    fromJSON(object: any): QueryDelegationResponse;
    toJSON(message: QueryDelegationResponse): unknown;
    fromPartial<I extends {
        delegation_response?: {
            delegation?: {
                delegator_address?: string | undefined;
                validator_address?: string | undefined;
                shares?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        delegation_response?: ({
            delegation?: {
                delegator_address?: string | undefined;
                validator_address?: string | undefined;
                shares?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            delegation?: ({
                delegator_address?: string | undefined;
                validator_address?: string | undefined;
                shares?: string | undefined;
            } & {
                delegator_address?: string | undefined;
                validator_address?: string | undefined;
                shares?: string | undefined;
            } & Record<Exclude<keyof I["delegation_response"]["delegation"], keyof import("./staking").Delegation>, never>) | undefined;
            balance?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["delegation_response"]["balance"], keyof import("../../base/v1beta1/coin").Coin>, never>) | undefined;
        } & Record<Exclude<keyof I["delegation_response"], keyof DelegationResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, "delegation_response">, never>>(object: I): QueryDelegationResponse;
};
export declare const QueryUnbondingDelegationRequest: {
    encode(message: QueryUnbondingDelegationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryUnbondingDelegationRequest;
    fromJSON(object: any): QueryUnbondingDelegationRequest;
    toJSON(message: QueryUnbondingDelegationRequest): unknown;
    fromPartial<I extends {
        delegator_addr?: string | undefined;
        validator_addr?: string | undefined;
    } & {
        delegator_addr?: string | undefined;
        validator_addr?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryUnbondingDelegationRequest>, never>>(object: I): QueryUnbondingDelegationRequest;
};
export declare const QueryUnbondingDelegationResponse: {
    encode(message: QueryUnbondingDelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryUnbondingDelegationResponse;
    fromJSON(object: any): QueryUnbondingDelegationResponse;
    toJSON(message: QueryUnbondingDelegationResponse): unknown;
    fromPartial<I extends {
        unbond?: {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            entries?: {
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        unbond?: ({
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            entries?: {
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        } & {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            entries?: ({
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[] & ({
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            } & {
                creation_height?: string | undefined;
                completion_time?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["unbond"]["entries"][number]["completion_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            } & Record<Exclude<keyof I["unbond"]["entries"][number], keyof import("./staking").UnbondingDelegationEntry>, never>)[] & Record<Exclude<keyof I["unbond"]["entries"], keyof {
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["unbond"], keyof UnbondingDelegation>, never>) | undefined;
    } & Record<Exclude<keyof I, "unbond">, never>>(object: I): QueryUnbondingDelegationResponse;
};
export declare const QueryDelegatorDelegationsRequest: {
    encode(message: QueryDelegatorDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDelegatorDelegationsRequest;
    fromJSON(object: any): QueryDelegatorDelegationsRequest;
    toJSON(message: QueryDelegatorDelegationsRequest): unknown;
    fromPartial<I extends {
        delegator_addr?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        delegator_addr?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryDelegatorDelegationsRequest>, never>>(object: I): QueryDelegatorDelegationsRequest;
};
export declare const QueryDelegatorDelegationsResponse: {
    encode(message: QueryDelegatorDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDelegatorDelegationsResponse;
    fromJSON(object: any): QueryDelegatorDelegationsResponse;
    toJSON(message: QueryDelegatorDelegationsResponse): unknown;
    fromPartial<I extends {
        delegation_responses?: {
            delegation?: {
                delegator_address?: string | undefined;
                validator_address?: string | undefined;
                shares?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        delegation_responses?: ({
            delegation?: {
                delegator_address?: string | undefined;
                validator_address?: string | undefined;
                shares?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] & ({
            delegation?: {
                delegator_address?: string | undefined;
                validator_address?: string | undefined;
                shares?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            delegation?: ({
                delegator_address?: string | undefined;
                validator_address?: string | undefined;
                shares?: string | undefined;
            } & {
                delegator_address?: string | undefined;
                validator_address?: string | undefined;
                shares?: string | undefined;
            } & Record<Exclude<keyof I["delegation_responses"][number]["delegation"], keyof import("./staking").Delegation>, never>) | undefined;
            balance?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["delegation_responses"][number]["balance"], keyof import("../../base/v1beta1/coin").Coin>, never>) | undefined;
        } & Record<Exclude<keyof I["delegation_responses"][number], keyof DelegationResponse>, never>)[] & Record<Exclude<keyof I["delegation_responses"], keyof {
            delegation?: {
                delegator_address?: string | undefined;
                validator_address?: string | undefined;
                shares?: string | undefined;
            } | undefined;
            balance?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryDelegatorDelegationsResponse>, never>>(object: I): QueryDelegatorDelegationsResponse;
};
export declare const QueryDelegatorUnbondingDelegationsRequest: {
    encode(message: QueryDelegatorUnbondingDelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDelegatorUnbondingDelegationsRequest;
    fromJSON(object: any): QueryDelegatorUnbondingDelegationsRequest;
    toJSON(message: QueryDelegatorUnbondingDelegationsRequest): unknown;
    fromPartial<I extends {
        delegator_addr?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        delegator_addr?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryDelegatorUnbondingDelegationsRequest>, never>>(object: I): QueryDelegatorUnbondingDelegationsRequest;
};
export declare const QueryDelegatorUnbondingDelegationsResponse: {
    encode(message: QueryDelegatorUnbondingDelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDelegatorUnbondingDelegationsResponse;
    fromJSON(object: any): QueryDelegatorUnbondingDelegationsResponse;
    toJSON(message: QueryDelegatorUnbondingDelegationsResponse): unknown;
    fromPartial<I extends {
        unbonding_responses?: {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            entries?: {
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        unbonding_responses?: ({
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            entries?: {
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        }[] & ({
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            entries?: {
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        } & {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            entries?: ({
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[] & ({
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            } & {
                creation_height?: string | undefined;
                completion_time?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["unbonding_responses"][number]["entries"][number]["completion_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            } & Record<Exclude<keyof I["unbonding_responses"][number]["entries"][number], keyof import("./staking").UnbondingDelegationEntry>, never>)[] & Record<Exclude<keyof I["unbonding_responses"][number]["entries"], keyof {
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["unbonding_responses"][number], keyof UnbondingDelegation>, never>)[] & Record<Exclude<keyof I["unbonding_responses"], keyof {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
            entries?: {
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                balance?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryDelegatorUnbondingDelegationsResponse>, never>>(object: I): QueryDelegatorUnbondingDelegationsResponse;
};
export declare const QueryRedelegationsRequest: {
    encode(message: QueryRedelegationsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryRedelegationsRequest;
    fromJSON(object: any): QueryRedelegationsRequest;
    toJSON(message: QueryRedelegationsRequest): unknown;
    fromPartial<I extends {
        delegator_addr?: string | undefined;
        src_validator_addr?: string | undefined;
        dst_validator_addr?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        delegator_addr?: string | undefined;
        src_validator_addr?: string | undefined;
        dst_validator_addr?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryRedelegationsRequest>, never>>(object: I): QueryRedelegationsRequest;
};
export declare const QueryRedelegationsResponse: {
    encode(message: QueryRedelegationsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryRedelegationsResponse;
    fromJSON(object: any): QueryRedelegationsResponse;
    toJSON(message: QueryRedelegationsResponse): unknown;
    fromPartial<I extends {
        redelegation_responses?: {
            redelegation?: {
                delegator_address?: string | undefined;
                validator_src_address?: string | undefined;
                validator_dst_address?: string | undefined;
                entries?: {
                    creation_height?: string | undefined;
                    completion_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initial_balance?: string | undefined;
                    shares_dst?: string | undefined;
                }[] | undefined;
            } | undefined;
            entries?: {
                redelegation_entry?: {
                    creation_height?: string | undefined;
                    completion_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initial_balance?: string | undefined;
                    shares_dst?: string | undefined;
                } | undefined;
                balance?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        redelegation_responses?: ({
            redelegation?: {
                delegator_address?: string | undefined;
                validator_src_address?: string | undefined;
                validator_dst_address?: string | undefined;
                entries?: {
                    creation_height?: string | undefined;
                    completion_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initial_balance?: string | undefined;
                    shares_dst?: string | undefined;
                }[] | undefined;
            } | undefined;
            entries?: {
                redelegation_entry?: {
                    creation_height?: string | undefined;
                    completion_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initial_balance?: string | undefined;
                    shares_dst?: string | undefined;
                } | undefined;
                balance?: string | undefined;
            }[] | undefined;
        }[] & ({
            redelegation?: {
                delegator_address?: string | undefined;
                validator_src_address?: string | undefined;
                validator_dst_address?: string | undefined;
                entries?: {
                    creation_height?: string | undefined;
                    completion_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initial_balance?: string | undefined;
                    shares_dst?: string | undefined;
                }[] | undefined;
            } | undefined;
            entries?: {
                redelegation_entry?: {
                    creation_height?: string | undefined;
                    completion_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initial_balance?: string | undefined;
                    shares_dst?: string | undefined;
                } | undefined;
                balance?: string | undefined;
            }[] | undefined;
        } & {
            redelegation?: ({
                delegator_address?: string | undefined;
                validator_src_address?: string | undefined;
                validator_dst_address?: string | undefined;
                entries?: {
                    creation_height?: string | undefined;
                    completion_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initial_balance?: string | undefined;
                    shares_dst?: string | undefined;
                }[] | undefined;
            } & {
                delegator_address?: string | undefined;
                validator_src_address?: string | undefined;
                validator_dst_address?: string | undefined;
                entries?: ({
                    creation_height?: string | undefined;
                    completion_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initial_balance?: string | undefined;
                    shares_dst?: string | undefined;
                }[] & ({
                    creation_height?: string | undefined;
                    completion_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initial_balance?: string | undefined;
                    shares_dst?: string | undefined;
                } & {
                    creation_height?: string | undefined;
                    completion_time?: ({
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["redelegation_responses"][number]["redelegation"]["entries"][number]["completion_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                    initial_balance?: string | undefined;
                    shares_dst?: string | undefined;
                } & Record<Exclude<keyof I["redelegation_responses"][number]["redelegation"]["entries"][number], keyof import("./staking").RedelegationEntry>, never>)[] & Record<Exclude<keyof I["redelegation_responses"][number]["redelegation"]["entries"], keyof {
                    creation_height?: string | undefined;
                    completion_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initial_balance?: string | undefined;
                    shares_dst?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["redelegation_responses"][number]["redelegation"], keyof import("./staking").Redelegation>, never>) | undefined;
            entries?: ({
                redelegation_entry?: {
                    creation_height?: string | undefined;
                    completion_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initial_balance?: string | undefined;
                    shares_dst?: string | undefined;
                } | undefined;
                balance?: string | undefined;
            }[] & ({
                redelegation_entry?: {
                    creation_height?: string | undefined;
                    completion_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initial_balance?: string | undefined;
                    shares_dst?: string | undefined;
                } | undefined;
                balance?: string | undefined;
            } & {
                redelegation_entry?: ({
                    creation_height?: string | undefined;
                    completion_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initial_balance?: string | undefined;
                    shares_dst?: string | undefined;
                } & {
                    creation_height?: string | undefined;
                    completion_time?: ({
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["redelegation_responses"][number]["entries"][number]["redelegation_entry"]["completion_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                    initial_balance?: string | undefined;
                    shares_dst?: string | undefined;
                } & Record<Exclude<keyof I["redelegation_responses"][number]["entries"][number]["redelegation_entry"], keyof import("./staking").RedelegationEntry>, never>) | undefined;
                balance?: string | undefined;
            } & Record<Exclude<keyof I["redelegation_responses"][number]["entries"][number], keyof import("./staking").RedelegationEntryResponse>, never>)[] & Record<Exclude<keyof I["redelegation_responses"][number]["entries"], keyof {
                redelegation_entry?: {
                    creation_height?: string | undefined;
                    completion_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initial_balance?: string | undefined;
                    shares_dst?: string | undefined;
                } | undefined;
                balance?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["redelegation_responses"][number], keyof RedelegationResponse>, never>)[] & Record<Exclude<keyof I["redelegation_responses"], keyof {
            redelegation?: {
                delegator_address?: string | undefined;
                validator_src_address?: string | undefined;
                validator_dst_address?: string | undefined;
                entries?: {
                    creation_height?: string | undefined;
                    completion_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initial_balance?: string | undefined;
                    shares_dst?: string | undefined;
                }[] | undefined;
            } | undefined;
            entries?: {
                redelegation_entry?: {
                    creation_height?: string | undefined;
                    completion_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    initial_balance?: string | undefined;
                    shares_dst?: string | undefined;
                } | undefined;
                balance?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryRedelegationsResponse>, never>>(object: I): QueryRedelegationsResponse;
};
export declare const QueryDelegatorValidatorsRequest: {
    encode(message: QueryDelegatorValidatorsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDelegatorValidatorsRequest;
    fromJSON(object: any): QueryDelegatorValidatorsRequest;
    toJSON(message: QueryDelegatorValidatorsRequest): unknown;
    fromPartial<I extends {
        delegator_addr?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        delegator_addr?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryDelegatorValidatorsRequest>, never>>(object: I): QueryDelegatorValidatorsRequest;
};
export declare const QueryDelegatorValidatorsResponse: {
    encode(message: QueryDelegatorValidatorsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDelegatorValidatorsResponse;
    fromJSON(object: any): QueryDelegatorValidatorsResponse;
    toJSON(message: QueryDelegatorValidatorsResponse): unknown;
    fromPartial<I extends {
        validators?: {
            operator_address?: string | undefined;
            consensus_pubkey?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            commission?: {
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            min_self_delegation?: string | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        validators?: ({
            operator_address?: string | undefined;
            consensus_pubkey?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            commission?: {
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            min_self_delegation?: string | undefined;
        }[] & ({
            operator_address?: string | undefined;
            consensus_pubkey?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            commission?: {
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            min_self_delegation?: string | undefined;
        } & {
            operator_address?: string | undefined;
            consensus_pubkey?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["validators"][number]["consensus_pubkey"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: ({
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } & {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } & Record<Exclude<keyof I["validators"][number]["description"], keyof import("./staking").Description>, never>) | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["validators"][number]["unbonding_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            commission?: ({
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                commission_rates?: ({
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } & {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } & Record<Exclude<keyof I["validators"][number]["commission"]["commission_rates"], keyof import("./staking").CommissionRates>, never>) | undefined;
                update_time?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["validators"][number]["commission"]["update_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            } & Record<Exclude<keyof I["validators"][number]["commission"], keyof import("./staking").Commission>, never>) | undefined;
            min_self_delegation?: string | undefined;
        } & Record<Exclude<keyof I["validators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["validators"], keyof {
            operator_address?: string | undefined;
            consensus_pubkey?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            commission?: {
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            min_self_delegation?: string | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryDelegatorValidatorsResponse>, never>>(object: I): QueryDelegatorValidatorsResponse;
};
export declare const QueryDelegatorValidatorRequest: {
    encode(message: QueryDelegatorValidatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDelegatorValidatorRequest;
    fromJSON(object: any): QueryDelegatorValidatorRequest;
    toJSON(message: QueryDelegatorValidatorRequest): unknown;
    fromPartial<I extends {
        delegator_addr?: string | undefined;
        validator_addr?: string | undefined;
    } & {
        delegator_addr?: string | undefined;
        validator_addr?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryDelegatorValidatorRequest>, never>>(object: I): QueryDelegatorValidatorRequest;
};
export declare const QueryDelegatorValidatorResponse: {
    encode(message: QueryDelegatorValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDelegatorValidatorResponse;
    fromJSON(object: any): QueryDelegatorValidatorResponse;
    toJSON(message: QueryDelegatorValidatorResponse): unknown;
    fromPartial<I extends {
        validator?: {
            operator_address?: string | undefined;
            consensus_pubkey?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            commission?: {
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            min_self_delegation?: string | undefined;
        } | undefined;
    } & {
        validator?: ({
            operator_address?: string | undefined;
            consensus_pubkey?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            commission?: {
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } | undefined;
            min_self_delegation?: string | undefined;
        } & {
            operator_address?: string | undefined;
            consensus_pubkey?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["validator"]["consensus_pubkey"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
            jailed?: boolean | undefined;
            status?: import("./staking").BondStatus | undefined;
            tokens?: string | undefined;
            delegator_shares?: string | undefined;
            description?: ({
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } & {
                moniker?: string | undefined;
                identity?: string | undefined;
                website?: string | undefined;
                security_contact?: string | undefined;
                details?: string | undefined;
            } & Record<Exclude<keyof I["validator"]["description"], keyof import("./staking").Description>, never>) | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["validator"]["unbonding_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            commission?: ({
                commission_rates?: {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } | undefined;
                update_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
            } & {
                commission_rates?: ({
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } & {
                    rate?: string | undefined;
                    max_rate?: string | undefined;
                    max_change_rate?: string | undefined;
                } & Record<Exclude<keyof I["validator"]["commission"]["commission_rates"], keyof import("./staking").CommissionRates>, never>) | undefined;
                update_time?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["validator"]["commission"]["update_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            } & Record<Exclude<keyof I["validator"]["commission"], keyof import("./staking").Commission>, never>) | undefined;
            min_self_delegation?: string | undefined;
        } & Record<Exclude<keyof I["validator"], keyof Validator>, never>) | undefined;
    } & Record<Exclude<keyof I, "validator">, never>>(object: I): QueryDelegatorValidatorResponse;
};
export declare const QueryHistoricalInfoRequest: {
    encode(message: QueryHistoricalInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryHistoricalInfoRequest;
    fromJSON(object: any): QueryHistoricalInfoRequest;
    toJSON(message: QueryHistoricalInfoRequest): unknown;
    fromPartial<I extends {
        height?: string | undefined;
    } & {
        height?: string | undefined;
    } & Record<Exclude<keyof I, "height">, never>>(object: I): QueryHistoricalInfoRequest;
};
export declare const QueryHistoricalInfoResponse: {
    encode(message: QueryHistoricalInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryHistoricalInfoResponse;
    fromJSON(object: any): QueryHistoricalInfoResponse;
    toJSON(message: QueryHistoricalInfoResponse): unknown;
    fromPartial<I extends {
        hist?: {
            header?: {
                version?: {
                    block?: string | undefined;
                    app?: string | undefined;
                } | undefined;
                chain_id?: string | undefined;
                height?: string | undefined;
                time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                last_block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                last_commit_hash?: Uint8Array | undefined;
                data_hash?: Uint8Array | undefined;
                validators_hash?: Uint8Array | undefined;
                next_validators_hash?: Uint8Array | undefined;
                consensus_hash?: Uint8Array | undefined;
                app_hash?: Uint8Array | undefined;
                last_results_hash?: Uint8Array | undefined;
                evidence_hash?: Uint8Array | undefined;
                proposer_address?: Uint8Array | undefined;
                encrypted_random?: {
                    random?: Uint8Array | undefined;
                    proof?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            valset?: {
                operator_address?: string | undefined;
                consensus_pubkey?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                jailed?: boolean | undefined;
                status?: import("./staking").BondStatus | undefined;
                tokens?: string | undefined;
                delegator_shares?: string | undefined;
                description?: {
                    moniker?: string | undefined;
                    identity?: string | undefined;
                    website?: string | undefined;
                    security_contact?: string | undefined;
                    details?: string | undefined;
                } | undefined;
                unbonding_height?: string | undefined;
                unbonding_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                commission?: {
                    commission_rates?: {
                        rate?: string | undefined;
                        max_rate?: string | undefined;
                        max_change_rate?: string | undefined;
                    } | undefined;
                    update_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                min_self_delegation?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        hist?: ({
            header?: {
                version?: {
                    block?: string | undefined;
                    app?: string | undefined;
                } | undefined;
                chain_id?: string | undefined;
                height?: string | undefined;
                time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                last_block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                last_commit_hash?: Uint8Array | undefined;
                data_hash?: Uint8Array | undefined;
                validators_hash?: Uint8Array | undefined;
                next_validators_hash?: Uint8Array | undefined;
                consensus_hash?: Uint8Array | undefined;
                app_hash?: Uint8Array | undefined;
                last_results_hash?: Uint8Array | undefined;
                evidence_hash?: Uint8Array | undefined;
                proposer_address?: Uint8Array | undefined;
                encrypted_random?: {
                    random?: Uint8Array | undefined;
                    proof?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            valset?: {
                operator_address?: string | undefined;
                consensus_pubkey?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                jailed?: boolean | undefined;
                status?: import("./staking").BondStatus | undefined;
                tokens?: string | undefined;
                delegator_shares?: string | undefined;
                description?: {
                    moniker?: string | undefined;
                    identity?: string | undefined;
                    website?: string | undefined;
                    security_contact?: string | undefined;
                    details?: string | undefined;
                } | undefined;
                unbonding_height?: string | undefined;
                unbonding_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                commission?: {
                    commission_rates?: {
                        rate?: string | undefined;
                        max_rate?: string | undefined;
                        max_change_rate?: string | undefined;
                    } | undefined;
                    update_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                min_self_delegation?: string | undefined;
            }[] | undefined;
        } & {
            header?: ({
                version?: {
                    block?: string | undefined;
                    app?: string | undefined;
                } | undefined;
                chain_id?: string | undefined;
                height?: string | undefined;
                time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                last_block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                last_commit_hash?: Uint8Array | undefined;
                data_hash?: Uint8Array | undefined;
                validators_hash?: Uint8Array | undefined;
                next_validators_hash?: Uint8Array | undefined;
                consensus_hash?: Uint8Array | undefined;
                app_hash?: Uint8Array | undefined;
                last_results_hash?: Uint8Array | undefined;
                evidence_hash?: Uint8Array | undefined;
                proposer_address?: Uint8Array | undefined;
                encrypted_random?: {
                    random?: Uint8Array | undefined;
                    proof?: Uint8Array | undefined;
                } | undefined;
            } & {
                version?: ({
                    block?: string | undefined;
                    app?: string | undefined;
                } & {
                    block?: string | undefined;
                    app?: string | undefined;
                } & Record<Exclude<keyof I["hist"]["header"]["version"], keyof import("../../../tendermint/version/types").Consensus>, never>) | undefined;
                chain_id?: string | undefined;
                height?: string | undefined;
                time?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["hist"]["header"]["time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                last_block_id?: ({
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    part_set_header?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["hist"]["header"]["last_block_id"]["part_set_header"], keyof import("../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["hist"]["header"]["last_block_id"], keyof import("../../../tendermint/types/types").BlockID>, never>) | undefined;
                last_commit_hash?: Uint8Array | undefined;
                data_hash?: Uint8Array | undefined;
                validators_hash?: Uint8Array | undefined;
                next_validators_hash?: Uint8Array | undefined;
                consensus_hash?: Uint8Array | undefined;
                app_hash?: Uint8Array | undefined;
                last_results_hash?: Uint8Array | undefined;
                evidence_hash?: Uint8Array | undefined;
                proposer_address?: Uint8Array | undefined;
                encrypted_random?: ({
                    random?: Uint8Array | undefined;
                    proof?: Uint8Array | undefined;
                } & {
                    random?: Uint8Array | undefined;
                    proof?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["hist"]["header"]["encrypted_random"], keyof import("../../../tendermint/types/types").EncryptedRandom>, never>) | undefined;
            } & Record<Exclude<keyof I["hist"]["header"], keyof import("../../../tendermint/types/types").Header>, never>) | undefined;
            valset?: ({
                operator_address?: string | undefined;
                consensus_pubkey?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                jailed?: boolean | undefined;
                status?: import("./staking").BondStatus | undefined;
                tokens?: string | undefined;
                delegator_shares?: string | undefined;
                description?: {
                    moniker?: string | undefined;
                    identity?: string | undefined;
                    website?: string | undefined;
                    security_contact?: string | undefined;
                    details?: string | undefined;
                } | undefined;
                unbonding_height?: string | undefined;
                unbonding_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                commission?: {
                    commission_rates?: {
                        rate?: string | undefined;
                        max_rate?: string | undefined;
                        max_change_rate?: string | undefined;
                    } | undefined;
                    update_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                min_self_delegation?: string | undefined;
            }[] & ({
                operator_address?: string | undefined;
                consensus_pubkey?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                jailed?: boolean | undefined;
                status?: import("./staking").BondStatus | undefined;
                tokens?: string | undefined;
                delegator_shares?: string | undefined;
                description?: {
                    moniker?: string | undefined;
                    identity?: string | undefined;
                    website?: string | undefined;
                    security_contact?: string | undefined;
                    details?: string | undefined;
                } | undefined;
                unbonding_height?: string | undefined;
                unbonding_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                commission?: {
                    commission_rates?: {
                        rate?: string | undefined;
                        max_rate?: string | undefined;
                        max_change_rate?: string | undefined;
                    } | undefined;
                    update_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                min_self_delegation?: string | undefined;
            } & {
                operator_address?: string | undefined;
                consensus_pubkey?: ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["hist"]["valset"][number]["consensus_pubkey"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
                jailed?: boolean | undefined;
                status?: import("./staking").BondStatus | undefined;
                tokens?: string | undefined;
                delegator_shares?: string | undefined;
                description?: ({
                    moniker?: string | undefined;
                    identity?: string | undefined;
                    website?: string | undefined;
                    security_contact?: string | undefined;
                    details?: string | undefined;
                } & {
                    moniker?: string | undefined;
                    identity?: string | undefined;
                    website?: string | undefined;
                    security_contact?: string | undefined;
                    details?: string | undefined;
                } & Record<Exclude<keyof I["hist"]["valset"][number]["description"], keyof import("./staking").Description>, never>) | undefined;
                unbonding_height?: string | undefined;
                unbonding_time?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["hist"]["valset"][number]["unbonding_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                commission?: ({
                    commission_rates?: {
                        rate?: string | undefined;
                        max_rate?: string | undefined;
                        max_change_rate?: string | undefined;
                    } | undefined;
                    update_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    commission_rates?: ({
                        rate?: string | undefined;
                        max_rate?: string | undefined;
                        max_change_rate?: string | undefined;
                    } & {
                        rate?: string | undefined;
                        max_rate?: string | undefined;
                        max_change_rate?: string | undefined;
                    } & Record<Exclude<keyof I["hist"]["valset"][number]["commission"]["commission_rates"], keyof import("./staking").CommissionRates>, never>) | undefined;
                    update_time?: ({
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["hist"]["valset"][number]["commission"]["update_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                } & Record<Exclude<keyof I["hist"]["valset"][number]["commission"], keyof import("./staking").Commission>, never>) | undefined;
                min_self_delegation?: string | undefined;
            } & Record<Exclude<keyof I["hist"]["valset"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["hist"]["valset"], keyof {
                operator_address?: string | undefined;
                consensus_pubkey?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                jailed?: boolean | undefined;
                status?: import("./staking").BondStatus | undefined;
                tokens?: string | undefined;
                delegator_shares?: string | undefined;
                description?: {
                    moniker?: string | undefined;
                    identity?: string | undefined;
                    website?: string | undefined;
                    security_contact?: string | undefined;
                    details?: string | undefined;
                } | undefined;
                unbonding_height?: string | undefined;
                unbonding_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                commission?: {
                    commission_rates?: {
                        rate?: string | undefined;
                        max_rate?: string | undefined;
                        max_change_rate?: string | undefined;
                    } | undefined;
                    update_time?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                min_self_delegation?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["hist"], keyof HistoricalInfo>, never>) | undefined;
    } & Record<Exclude<keyof I, "hist">, never>>(object: I): QueryHistoricalInfoResponse;
};
export declare const QueryPoolRequest: {
    encode(_: QueryPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPoolRequest;
    fromJSON(_: any): QueryPoolRequest;
    toJSON(_: QueryPoolRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryPoolRequest;
};
export declare const QueryPoolResponse: {
    encode(message: QueryPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPoolResponse;
    fromJSON(object: any): QueryPoolResponse;
    toJSON(message: QueryPoolResponse): unknown;
    fromPartial<I extends {
        pool?: {
            not_bonded_tokens?: string | undefined;
            bonded_tokens?: string | undefined;
        } | undefined;
    } & {
        pool?: ({
            not_bonded_tokens?: string | undefined;
            bonded_tokens?: string | undefined;
        } & {
            not_bonded_tokens?: string | undefined;
            bonded_tokens?: string | undefined;
        } & Record<Exclude<keyof I["pool"], keyof Pool>, never>) | undefined;
    } & Record<Exclude<keyof I, "pool">, never>>(object: I): QueryPoolResponse;
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
            unbonding_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            max_validators?: number | undefined;
            max_entries?: number | undefined;
            historical_entries?: number | undefined;
            bond_denom?: string | undefined;
        } | undefined;
    } & {
        params?: ({
            unbonding_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            max_validators?: number | undefined;
            max_entries?: number | undefined;
            historical_entries?: number | undefined;
            bond_denom?: string | undefined;
        } & {
            unbonding_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["params"]["unbonding_time"], keyof import("../../../google/protobuf/duration").Duration>, never>) | undefined;
            max_validators?: number | undefined;
            max_entries?: number | undefined;
            historical_entries?: number | undefined;
            bond_denom?: string | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Validators queries all validators that match the given status. */
    Validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
    /** Validator queries validator info for given validator address. */
    Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
    /** ValidatorDelegations queries delegate info for given validator. */
    ValidatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse>;
    /** ValidatorUnbondingDelegations queries unbonding delegations of a validator. */
    ValidatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse>;
    /** Delegation queries delegate info for given validator delegator pair. */
    Delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;
    /**
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     */
    UnbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse>;
    /** DelegatorDelegations queries all delegations of a given delegator address. */
    DelegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse>;
    /**
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     */
    DelegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse>;
    /** Redelegations queries redelegations of given address. */
    Redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse>;
    /**
     * DelegatorValidators queries all validators info for given delegator
     * address.
     */
    DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    /**
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     */
    DelegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse>;
    /** HistoricalInfo queries the historical info for given height. */
    HistoricalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>;
    /** Pool queries the pool info. */
    Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    /** Parameters queries the staking parameters. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Validators(request: QueryValidatorsRequest): Promise<QueryValidatorsResponse>;
    Validator(request: QueryValidatorRequest): Promise<QueryValidatorResponse>;
    ValidatorDelegations(request: QueryValidatorDelegationsRequest): Promise<QueryValidatorDelegationsResponse>;
    ValidatorUnbondingDelegations(request: QueryValidatorUnbondingDelegationsRequest): Promise<QueryValidatorUnbondingDelegationsResponse>;
    Delegation(request: QueryDelegationRequest): Promise<QueryDelegationResponse>;
    UnbondingDelegation(request: QueryUnbondingDelegationRequest): Promise<QueryUnbondingDelegationResponse>;
    DelegatorDelegations(request: QueryDelegatorDelegationsRequest): Promise<QueryDelegatorDelegationsResponse>;
    DelegatorUnbondingDelegations(request: QueryDelegatorUnbondingDelegationsRequest): Promise<QueryDelegatorUnbondingDelegationsResponse>;
    Redelegations(request: QueryRedelegationsRequest): Promise<QueryRedelegationsResponse>;
    DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
    DelegatorValidator(request: QueryDelegatorValidatorRequest): Promise<QueryDelegatorValidatorResponse>;
    HistoricalInfo(request: QueryHistoricalInfoRequest): Promise<QueryHistoricalInfoResponse>;
    Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
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