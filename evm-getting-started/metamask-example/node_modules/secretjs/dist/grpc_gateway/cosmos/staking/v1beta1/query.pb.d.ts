import * as fm from "../../../fetch.pb";
import * as CosmosBaseQueryV1beta1Pagination from "../../base/query/v1beta1/pagination.pb";
import * as CosmosStakingV1beta1Staking from "./staking.pb";
export declare type QueryValidatorsRequest = {
    status?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryValidatorsResponse = {
    validators?: CosmosStakingV1beta1Staking.Validator[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryValidatorRequest = {
    validator_addr?: string;
};
export declare type QueryValidatorResponse = {
    validator?: CosmosStakingV1beta1Staking.Validator;
};
export declare type QueryValidatorDelegationsRequest = {
    validator_addr?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryValidatorDelegationsResponse = {
    delegation_responses?: CosmosStakingV1beta1Staking.DelegationResponse[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryValidatorUnbondingDelegationsRequest = {
    validator_addr?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryValidatorUnbondingDelegationsResponse = {
    unbonding_responses?: CosmosStakingV1beta1Staking.UnbondingDelegation[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryDelegationRequest = {
    delegator_addr?: string;
    validator_addr?: string;
};
export declare type QueryDelegationResponse = {
    delegation_response?: CosmosStakingV1beta1Staking.DelegationResponse;
};
export declare type QueryUnbondingDelegationRequest = {
    delegator_addr?: string;
    validator_addr?: string;
};
export declare type QueryUnbondingDelegationResponse = {
    unbond?: CosmosStakingV1beta1Staking.UnbondingDelegation;
};
export declare type QueryDelegatorDelegationsRequest = {
    delegator_addr?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryDelegatorDelegationsResponse = {
    delegation_responses?: CosmosStakingV1beta1Staking.DelegationResponse[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryDelegatorUnbondingDelegationsRequest = {
    delegator_addr?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryDelegatorUnbondingDelegationsResponse = {
    unbonding_responses?: CosmosStakingV1beta1Staking.UnbondingDelegation[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryRedelegationsRequest = {
    delegator_addr?: string;
    src_validator_addr?: string;
    dst_validator_addr?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryRedelegationsResponse = {
    redelegation_responses?: CosmosStakingV1beta1Staking.RedelegationResponse[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryDelegatorValidatorsRequest = {
    delegator_addr?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryDelegatorValidatorsResponse = {
    validators?: CosmosStakingV1beta1Staking.Validator[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryDelegatorValidatorRequest = {
    delegator_addr?: string;
    validator_addr?: string;
};
export declare type QueryDelegatorValidatorResponse = {
    validator?: CosmosStakingV1beta1Staking.Validator;
};
export declare type QueryHistoricalInfoRequest = {
    height?: string;
};
export declare type QueryHistoricalInfoResponse = {
    hist?: CosmosStakingV1beta1Staking.HistoricalInfo;
};
export declare type QueryPoolRequest = {};
export declare type QueryPoolResponse = {
    pool?: CosmosStakingV1beta1Staking.Pool;
};
export declare type QueryParamsRequest = {};
export declare type QueryParamsResponse = {
    params?: CosmosStakingV1beta1Staking.Params;
};
export declare class Query {
    static Validators(req: QueryValidatorsRequest, initReq?: fm.InitReq): Promise<QueryValidatorsResponse>;
    static Validator(req: QueryValidatorRequest, initReq?: fm.InitReq): Promise<QueryValidatorResponse>;
    static ValidatorDelegations(req: QueryValidatorDelegationsRequest, initReq?: fm.InitReq): Promise<QueryValidatorDelegationsResponse>;
    static ValidatorUnbondingDelegations(req: QueryValidatorUnbondingDelegationsRequest, initReq?: fm.InitReq): Promise<QueryValidatorUnbondingDelegationsResponse>;
    static Delegation(req: QueryDelegationRequest, initReq?: fm.InitReq): Promise<QueryDelegationResponse>;
    static UnbondingDelegation(req: QueryUnbondingDelegationRequest, initReq?: fm.InitReq): Promise<QueryUnbondingDelegationResponse>;
    static DelegatorDelegations(req: QueryDelegatorDelegationsRequest, initReq?: fm.InitReq): Promise<QueryDelegatorDelegationsResponse>;
    static DelegatorUnbondingDelegations(req: QueryDelegatorUnbondingDelegationsRequest, initReq?: fm.InitReq): Promise<QueryDelegatorUnbondingDelegationsResponse>;
    static Redelegations(req: QueryRedelegationsRequest, initReq?: fm.InitReq): Promise<QueryRedelegationsResponse>;
    static DelegatorValidators(req: QueryDelegatorValidatorsRequest, initReq?: fm.InitReq): Promise<QueryDelegatorValidatorsResponse>;
    static DelegatorValidator(req: QueryDelegatorValidatorRequest, initReq?: fm.InitReq): Promise<QueryDelegatorValidatorResponse>;
    static HistoricalInfo(req: QueryHistoricalInfoRequest, initReq?: fm.InitReq): Promise<QueryHistoricalInfoResponse>;
    static Pool(req: QueryPoolRequest, initReq?: fm.InitReq): Promise<QueryPoolResponse>;
    static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map