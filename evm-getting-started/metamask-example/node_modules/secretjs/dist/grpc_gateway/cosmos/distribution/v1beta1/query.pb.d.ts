import * as fm from "../../../fetch.pb";
import * as CosmosBaseQueryV1beta1Pagination from "../../base/query/v1beta1/pagination.pb";
import * as CosmosBaseV1beta1Coin from "../../base/v1beta1/coin.pb";
import * as CosmosDistributionV1beta1Distribution from "./distribution.pb";
export declare type QueryRestakeEntriesRequest = {
    delegator?: string;
};
export declare type QueryRestakingEntriesResponse = {
    validators?: string[];
};
export declare type QueryRestakeThresholdRequest = {};
export declare type QueryRestakeThresholdResponse = {
    threshold?: string;
};
export declare type QueryParamsRequest = {};
export declare type QueryParamsResponse = {
    params?: CosmosDistributionV1beta1Distribution.Params;
};
export declare type QueryValidatorOutstandingRewardsRequest = {
    validator_address?: string;
};
export declare type QueryValidatorOutstandingRewardsResponse = {
    rewards?: CosmosDistributionV1beta1Distribution.ValidatorOutstandingRewards;
};
export declare type QueryValidatorCommissionRequest = {
    validator_address?: string;
};
export declare type QueryValidatorCommissionResponse = {
    commission?: CosmosDistributionV1beta1Distribution.ValidatorAccumulatedCommission;
};
export declare type QueryValidatorSlashesRequest = {
    validator_address?: string;
    starting_height?: string;
    ending_height?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryValidatorSlashesResponse = {
    slashes?: CosmosDistributionV1beta1Distribution.ValidatorSlashEvent[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryDelegationRewardsRequest = {
    delegator_address?: string;
    validator_address?: string;
};
export declare type QueryDelegationRewardsResponse = {
    rewards?: CosmosBaseV1beta1Coin.DecCoin[];
};
export declare type QueryDelegationTotalRewardsRequest = {
    delegator_address?: string;
};
export declare type QueryDelegationTotalRewardsResponse = {
    rewards?: CosmosDistributionV1beta1Distribution.DelegationDelegatorReward[];
    total?: CosmosBaseV1beta1Coin.DecCoin[];
};
export declare type QueryDelegatorValidatorsRequest = {
    delegator_address?: string;
};
export declare type QueryDelegatorValidatorsResponse = {
    validators?: string[];
};
export declare type QueryDelegatorWithdrawAddressRequest = {
    delegator_address?: string;
};
export declare type QueryDelegatorWithdrawAddressResponse = {
    withdraw_address?: string;
};
export declare type QueryFoundationTaxRequest = {};
export declare type QueryFoundationTaxResponse = {
    tax?: string;
    foundation_address?: string;
};
export declare type QueryCommunityPoolRequest = {};
export declare type QueryCommunityPoolResponse = {
    pool?: CosmosBaseV1beta1Coin.DecCoin[];
};
export declare class Query {
    static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse>;
    static ValidatorOutstandingRewards(req: QueryValidatorOutstandingRewardsRequest, initReq?: fm.InitReq): Promise<QueryValidatorOutstandingRewardsResponse>;
    static ValidatorCommission(req: QueryValidatorCommissionRequest, initReq?: fm.InitReq): Promise<QueryValidatorCommissionResponse>;
    static ValidatorSlashes(req: QueryValidatorSlashesRequest, initReq?: fm.InitReq): Promise<QueryValidatorSlashesResponse>;
    static DelegationRewards(req: QueryDelegationRewardsRequest, initReq?: fm.InitReq): Promise<QueryDelegationRewardsResponse>;
    static DelegationTotalRewards(req: QueryDelegationTotalRewardsRequest, initReq?: fm.InitReq): Promise<QueryDelegationTotalRewardsResponse>;
    static DelegatorValidators(req: QueryDelegatorValidatorsRequest, initReq?: fm.InitReq): Promise<QueryDelegatorValidatorsResponse>;
    static DelegatorWithdrawAddress(req: QueryDelegatorWithdrawAddressRequest, initReq?: fm.InitReq): Promise<QueryDelegatorWithdrawAddressResponse>;
    static CommunityPool(req: QueryCommunityPoolRequest, initReq?: fm.InitReq): Promise<QueryCommunityPoolResponse>;
    static FoundationTax(req: QueryFoundationTaxRequest, initReq?: fm.InitReq): Promise<QueryFoundationTaxResponse>;
    static RestakeThreshold(req: QueryRestakeThresholdRequest, initReq?: fm.InitReq): Promise<QueryRestakeThresholdResponse>;
    static RestakingEntries(req: QueryRestakeEntriesRequest, initReq?: fm.InitReq): Promise<QueryRestakingEntriesResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map