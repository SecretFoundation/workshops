import * as CosmosBaseV1beta1Coin from "../../base/v1beta1/coin.pb";
export declare type Params = {
    community_tax?: string;
    base_proposer_reward?: string;
    bonus_proposer_reward?: string;
    withdraw_addr_enabled?: boolean;
    secret_foundation_tax?: string;
    secret_foundation_address?: string;
    minimum_restake_threshold?: string;
    restake_period?: string;
};
export declare type ValidatorHistoricalRewards = {
    cumulative_reward_ratio?: CosmosBaseV1beta1Coin.DecCoin[];
    reference_count?: number;
};
export declare type ValidatorCurrentRewards = {
    rewards?: CosmosBaseV1beta1Coin.DecCoin[];
    period?: string;
};
export declare type ValidatorAccumulatedCommission = {
    commission?: CosmosBaseV1beta1Coin.DecCoin[];
};
export declare type ValidatorOutstandingRewards = {
    rewards?: CosmosBaseV1beta1Coin.DecCoin[];
};
export declare type ValidatorSlashEvent = {
    validator_period?: string;
    fraction?: string;
};
export declare type ValidatorSlashEvents = {
    validator_slash_events?: ValidatorSlashEvent[];
};
export declare type FeePool = {
    community_pool?: CosmosBaseV1beta1Coin.DecCoin[];
};
export declare type CommunityPoolSpendProposal = {
    title?: string;
    description?: string;
    recipient?: string;
    amount?: CosmosBaseV1beta1Coin.Coin[];
};
export declare type DelegatorStartingInfo = {
    previous_period?: string;
    stake?: string;
    height?: string;
};
export declare type DelegationDelegatorReward = {
    validator_address?: string;
    reward?: CosmosBaseV1beta1Coin.DecCoin[];
};
export declare type CommunityPoolSpendProposalWithDeposit = {
    title?: string;
    description?: string;
    recipient?: string;
    amount?: string;
    deposit?: string;
};
//# sourceMappingURL=distribution.pb.d.ts.map