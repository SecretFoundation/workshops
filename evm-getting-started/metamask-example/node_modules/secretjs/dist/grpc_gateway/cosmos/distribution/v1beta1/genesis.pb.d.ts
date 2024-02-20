import * as CosmosBaseV1beta1Coin from "../../base/v1beta1/coin.pb";
import * as CosmosDistributionV1beta1Distribution from "./distribution.pb";
export declare type DelegatorWithdrawInfo = {
    delegator_address?: string;
    withdraw_address?: string;
};
export declare type ValidatorOutstandingRewardsRecord = {
    validator_address?: string;
    outstanding_rewards?: CosmosBaseV1beta1Coin.DecCoin[];
};
export declare type ValidatorAccumulatedCommissionRecord = {
    validator_address?: string;
    accumulated?: CosmosDistributionV1beta1Distribution.ValidatorAccumulatedCommission;
};
export declare type ValidatorHistoricalRewardsRecord = {
    validator_address?: string;
    period?: string;
    rewards?: CosmosDistributionV1beta1Distribution.ValidatorHistoricalRewards;
};
export declare type ValidatorCurrentRewardsRecord = {
    validator_address?: string;
    rewards?: CosmosDistributionV1beta1Distribution.ValidatorCurrentRewards;
};
export declare type DelegatorStartingInfoRecord = {
    delegator_address?: string;
    validator_address?: string;
    starting_info?: CosmosDistributionV1beta1Distribution.DelegatorStartingInfo;
};
export declare type ValidatorSlashEventRecord = {
    validator_address?: string;
    height?: string;
    period?: string;
    validator_slash_event?: CosmosDistributionV1beta1Distribution.ValidatorSlashEvent;
};
export declare type GenesisState = {
    params?: CosmosDistributionV1beta1Distribution.Params;
    fee_pool?: CosmosDistributionV1beta1Distribution.FeePool;
    delegator_withdraw_infos?: DelegatorWithdrawInfo[];
    previous_proposer?: string;
    outstanding_rewards?: ValidatorOutstandingRewardsRecord[];
    validator_accumulated_commissions?: ValidatorAccumulatedCommissionRecord[];
    validator_historical_rewards?: ValidatorHistoricalRewardsRecord[];
    validator_current_rewards?: ValidatorCurrentRewardsRecord[];
    delegator_starting_infos?: DelegatorStartingInfoRecord[];
    validator_slash_events?: ValidatorSlashEventRecord[];
};
//# sourceMappingURL=genesis.pb.d.ts.map