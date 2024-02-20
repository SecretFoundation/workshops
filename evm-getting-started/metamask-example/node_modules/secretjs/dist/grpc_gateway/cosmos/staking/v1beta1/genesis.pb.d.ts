import * as CosmosStakingV1beta1Staking from "./staking.pb";
export declare type GenesisState = {
    params?: CosmosStakingV1beta1Staking.Params;
    last_total_power?: Uint8Array;
    last_validator_powers?: LastValidatorPower[];
    validators?: CosmosStakingV1beta1Staking.Validator[];
    delegations?: CosmosStakingV1beta1Staking.Delegation[];
    unbonding_delegations?: CosmosStakingV1beta1Staking.UnbondingDelegation[];
    redelegations?: CosmosStakingV1beta1Staking.Redelegation[];
    exported?: boolean;
};
export declare type LastValidatorPower = {
    address?: string;
    power?: string;
};
//# sourceMappingURL=genesis.pb.d.ts.map