import * as CosmosAuthV1beta1Auth from "../../auth/v1beta1/auth.pb";
import * as CosmosBaseV1beta1Coin from "../../base/v1beta1/coin.pb";
export declare type BaseVestingAccount = {
    base_account?: CosmosAuthV1beta1Auth.BaseAccount;
    original_vesting?: CosmosBaseV1beta1Coin.Coin[];
    delegated_free?: CosmosBaseV1beta1Coin.Coin[];
    delegated_vesting?: CosmosBaseV1beta1Coin.Coin[];
    end_time?: string;
};
export declare type ContinuousVestingAccount = {
    base_vesting_account?: BaseVestingAccount;
    start_time?: string;
};
export declare type DelayedVestingAccount = {
    base_vesting_account?: BaseVestingAccount;
};
export declare type Period = {
    length?: string;
    amount?: CosmosBaseV1beta1Coin.Coin[];
};
export declare type PeriodicVestingAccount = {
    base_vesting_account?: BaseVestingAccount;
    start_time?: string;
    vesting_periods?: Period[];
};
export declare type PermanentLockedAccount = {
    base_vesting_account?: BaseVestingAccount;
};
//# sourceMappingURL=vesting.pb.d.ts.map