import { QueryDelegationRequest, QueryDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryPoolRequest, QueryPoolResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse } from "../grpc_gateway/cosmos/staking/v1beta1/query.pb";
export declare class StakingQuerier {
    private url;
    constructor(url: string);
    validators(req: QueryValidatorsRequest, headers?: HeadersInit): Promise<QueryValidatorsResponse>;
    validator(req: QueryValidatorRequest, headers?: HeadersInit): Promise<QueryValidatorResponse>;
    validatorDelegations(req: QueryValidatorDelegationsRequest, headers?: HeadersInit): Promise<QueryValidatorDelegationsResponse>;
    validatorUnbondingDelegations(req: QueryValidatorUnbondingDelegationsRequest, headers?: HeadersInit): Promise<QueryValidatorUnbondingDelegationsResponse>;
    delegation(req: QueryDelegationRequest, headers?: HeadersInit): Promise<QueryDelegationResponse>;
    unbondingDelegation(req: QueryUnbondingDelegationRequest, headers?: HeadersInit): Promise<QueryUnbondingDelegationResponse>;
    delegatorDelegations(req: QueryDelegatorDelegationsRequest, headers?: HeadersInit): Promise<QueryDelegatorDelegationsResponse>;
    delegatorUnbondingDelegations(req: QueryDelegatorUnbondingDelegationsRequest, headers?: HeadersInit): Promise<QueryDelegatorUnbondingDelegationsResponse>;
    redelegations(req: QueryRedelegationsRequest, headers?: HeadersInit): Promise<QueryRedelegationsResponse>;
    delegatorValidators(req: QueryDelegatorValidatorsRequest, headers?: HeadersInit): Promise<QueryDelegatorValidatorsResponse>;
    delegatorValidator(req: QueryDelegatorValidatorRequest, headers?: HeadersInit): Promise<QueryDelegatorValidatorResponse>;
    historicalInfo(req: QueryHistoricalInfoRequest, headers?: HeadersInit): Promise<QueryHistoricalInfoResponse>;
    pool(req: QueryPoolRequest, headers?: HeadersInit): Promise<QueryPoolResponse>;
    params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
}
//# sourceMappingURL=staking.d.ts.map