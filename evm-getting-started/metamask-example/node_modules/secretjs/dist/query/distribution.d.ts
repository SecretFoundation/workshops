import { QueryCommunityPoolRequest, QueryCommunityPoolResponse, QueryDelegationRewardsRequest, QueryDelegationRewardsResponse, QueryDelegationTotalRewardsRequest, QueryDelegationTotalRewardsResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryFoundationTaxRequest, QueryFoundationTaxResponse, QueryParamsRequest, QueryParamsResponse, QueryRestakeEntriesRequest, QueryRestakingEntriesResponse, QueryRestakeThresholdRequest, QueryRestakeThresholdResponse, QueryValidatorCommissionRequest, QueryValidatorCommissionResponse, QueryValidatorOutstandingRewardsRequest, QueryValidatorOutstandingRewardsResponse, QueryValidatorSlashesRequest, QueryValidatorSlashesResponse } from "../grpc_gateway/cosmos/distribution/v1beta1/query.pb";
export declare class DistributionQuerier {
    private url;
    constructor(url: string);
    params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    validatorOutstandingRewards(req: QueryValidatorOutstandingRewardsRequest, headers?: HeadersInit): Promise<QueryValidatorOutstandingRewardsResponse>;
    validatorCommission(req: QueryValidatorCommissionRequest, headers?: HeadersInit): Promise<QueryValidatorCommissionResponse>;
    validatorSlashes(req: QueryValidatorSlashesRequest, headers?: HeadersInit): Promise<QueryValidatorSlashesResponse>;
    delegationRewards(req: QueryDelegationRewardsRequest, headers?: HeadersInit): Promise<QueryDelegationRewardsResponse>;
    delegationTotalRewards(req: QueryDelegationTotalRewardsRequest, headers?: HeadersInit): Promise<QueryDelegationTotalRewardsResponse>;
    delegatorValidators(req: QueryDelegatorValidatorsRequest, headers?: HeadersInit): Promise<QueryDelegatorValidatorsResponse>;
    delegatorWithdrawAddress(req: QueryDelegatorWithdrawAddressRequest, headers?: HeadersInit): Promise<QueryDelegatorWithdrawAddressResponse>;
    communityPool(req: QueryCommunityPoolRequest, headers?: HeadersInit): Promise<QueryCommunityPoolResponse>;
    foundationTax(req: QueryFoundationTaxRequest, headers?: HeadersInit): Promise<QueryFoundationTaxResponse>;
    restakeThreshold(req: QueryRestakeThresholdRequest, headers?: HeadersInit): Promise<QueryRestakeThresholdResponse>;
    restakingEntries(req: QueryRestakeEntriesRequest, headers?: HeadersInit): Promise<QueryRestakingEntriesResponse>;
}
//# sourceMappingURL=distribution.d.ts.map