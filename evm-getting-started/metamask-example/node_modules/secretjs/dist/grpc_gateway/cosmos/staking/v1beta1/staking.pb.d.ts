import * as GoogleProtobufAny from "../../../google/protobuf/any.pb";
import * as GoogleProtobufDuration from "../../../google/protobuf/duration.pb";
import * as GoogleProtobufTimestamp from "../../../google/protobuf/timestamp.pb";
import * as TendermintTypesTypes from "../../../tendermint/types/types.pb";
import * as CosmosBaseV1beta1Coin from "../../base/v1beta1/coin.pb";
export declare enum BondStatus {
    BOND_STATUS_UNSPECIFIED = "BOND_STATUS_UNSPECIFIED",
    BOND_STATUS_UNBONDED = "BOND_STATUS_UNBONDED",
    BOND_STATUS_UNBONDING = "BOND_STATUS_UNBONDING",
    BOND_STATUS_BONDED = "BOND_STATUS_BONDED"
}
export declare type HistoricalInfo = {
    header?: TendermintTypesTypes.Header;
    valset?: Validator[];
};
export declare type CommissionRates = {
    rate?: string;
    max_rate?: string;
    max_change_rate?: string;
};
export declare type Commission = {
    commission_rates?: CommissionRates;
    update_time?: GoogleProtobufTimestamp.Timestamp;
};
export declare type Description = {
    moniker?: string;
    identity?: string;
    website?: string;
    security_contact?: string;
    details?: string;
};
export declare type Validator = {
    operator_address?: string;
    consensus_pubkey?: GoogleProtobufAny.Any;
    jailed?: boolean;
    status?: BondStatus;
    tokens?: string;
    delegator_shares?: string;
    description?: Description;
    unbonding_height?: string;
    unbonding_time?: GoogleProtobufTimestamp.Timestamp;
    commission?: Commission;
    min_self_delegation?: string;
};
export declare type ValAddresses = {
    addresses?: string[];
};
export declare type DVPair = {
    delegator_address?: string;
    validator_address?: string;
};
export declare type DVPairs = {
    pairs?: DVPair[];
};
export declare type DVVTriplet = {
    delegator_address?: string;
    validator_src_address?: string;
    validator_dst_address?: string;
};
export declare type DVVTriplets = {
    triplets?: DVVTriplet[];
};
export declare type Delegation = {
    delegator_address?: string;
    validator_address?: string;
    shares?: string;
};
export declare type UnbondingDelegation = {
    delegator_address?: string;
    validator_address?: string;
    entries?: UnbondingDelegationEntry[];
};
export declare type UnbondingDelegationEntry = {
    creation_height?: string;
    completion_time?: GoogleProtobufTimestamp.Timestamp;
    initial_balance?: string;
    balance?: string;
};
export declare type RedelegationEntry = {
    creation_height?: string;
    completion_time?: GoogleProtobufTimestamp.Timestamp;
    initial_balance?: string;
    shares_dst?: string;
};
export declare type Redelegation = {
    delegator_address?: string;
    validator_src_address?: string;
    validator_dst_address?: string;
    entries?: RedelegationEntry[];
};
export declare type Params = {
    unbonding_time?: GoogleProtobufDuration.Duration;
    max_validators?: number;
    max_entries?: number;
    historical_entries?: number;
    bond_denom?: string;
};
export declare type DelegationResponse = {
    delegation?: Delegation;
    balance?: CosmosBaseV1beta1Coin.Coin;
};
export declare type RedelegationEntryResponse = {
    redelegation_entry?: RedelegationEntry;
    balance?: string;
};
export declare type RedelegationResponse = {
    redelegation?: Redelegation;
    entries?: RedelegationEntryResponse[];
};
export declare type Pool = {
    not_bonded_tokens?: string;
    bonded_tokens?: string;
};
//# sourceMappingURL=staking.pb.d.ts.map