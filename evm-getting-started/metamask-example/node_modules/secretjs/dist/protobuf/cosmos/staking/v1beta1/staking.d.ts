import * as _m0 from "protobufjs/minimal";
import { Header } from "../../../tendermint/types/types";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any } from "../../../google/protobuf/any";
import { Duration } from "../../../google/protobuf/duration";
import { Coin } from "../../base/v1beta1/coin";
export declare const protobufPackage = "cosmos.staking.v1beta1";
/** BondStatus is the status of a validator. */
export declare enum BondStatus {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BOND_STATUS_UNSPECIFIED = 0,
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BOND_STATUS_UNBONDED = 1,
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BOND_STATUS_UNBONDING = 2,
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BOND_STATUS_BONDED = 3,
    UNRECOGNIZED = -1
}
export declare function bondStatusFromJSON(object: any): BondStatus;
export declare function bondStatusToJSON(object: BondStatus): string;
/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of staking module's state, which persists the `n` most
 * recent HistoricalInfo
 * (`n` is set by the staking module's `historical_entries` parameter).
 */
export interface HistoricalInfo {
    header?: Header;
    valset: Validator[];
}
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export interface CommissionRates {
    /** rate is the commission rate charged to delegators, as a fraction. */
    rate: string;
    /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
    max_rate: string;
    /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
    max_change_rate: string;
}
/** Commission defines commission parameters for a given validator. */
export interface Commission {
    /** commission_rates defines the initial commission rates to be used for creating a validator. */
    commission_rates?: CommissionRates;
    /** update_time is the last time the commission rate was changed. */
    update_time?: Timestamp;
}
/** Description defines a validator description. */
export interface Description {
    /** moniker defines a human-readable name for the validator. */
    moniker: string;
    /** identity defines an optional identity signature (ex. UPort or Keybase). */
    identity: string;
    /** website defines an optional website link. */
    website: string;
    /** security_contact defines an optional email for security contact. */
    security_contact: string;
    /** details define other optional details. */
    details: string;
}
/**
 * Validator defines a validator, together with the total amount of the
 * Validator's bond shares and their exchange rate to coins. Slashing results in
 * a decrease in the exchange rate, allowing correct calculation of future
 * undelegations without iterating over delegators. When coins are delegated to
 * this validator, the validator is credited with a delegation whose number of
 * bond shares is based on the amount of coins delegated divided by the current
 * exchange rate. Voting power can be calculated as total bonded shares
 * multiplied by exchange rate.
 */
export interface Validator {
    /** operator_address defines the address of the validator's operator; bech encoded in JSON. */
    operator_address: string;
    /** consensus_pubkey is the consensus public key of the validator, as a Protobuf Any. */
    consensus_pubkey?: Any;
    /** jailed defined whether the validator has been jailed from bonded status or not. */
    jailed: boolean;
    /** status is the validator status (bonded/unbonding/unbonded). */
    status: BondStatus;
    /** tokens define the delegated tokens (incl. self-delegation). */
    tokens: string;
    /** delegator_shares defines total shares issued to a validator's delegators. */
    delegator_shares: string;
    /** description defines the description terms for the validator. */
    description?: Description;
    /** unbonding_height defines, if unbonding, the height at which this validator has begun unbonding. */
    unbonding_height: string;
    /** unbonding_time defines, if unbonding, the min time for the validator to complete unbonding. */
    unbonding_time?: Timestamp;
    /** commission defines the commission parameters. */
    commission?: Commission;
    /** min_self_delegation is the validator's self declared minimum self delegation. */
    min_self_delegation: string;
}
/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddresses {
    addresses: string[];
}
/**
 * DVPair is struct that just has a delegator-validator pair with no other data.
 * It is intended to be used as a marshalable pointer. For example, a DVPair can
 * be used to construct the key to getting an UnbondingDelegation from state.
 */
export interface DVPair {
    delegator_address: string;
    validator_address: string;
}
/** DVPairs defines an array of DVPair objects. */
export interface DVPairs {
    pairs: DVPair[];
}
/**
 * DVVTriplet is struct that just has a delegator-validator-validator triplet
 * with no other data. It is intended to be used as a marshalable pointer. For
 * example, a DVVTriplet can be used to construct the key to getting a
 * Redelegation from state.
 */
export interface DVVTriplet {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
}
/** DVVTriplets defines an array of DVVTriplet objects. */
export interface DVVTriplets {
    triplets: DVVTriplet[];
}
/**
 * Delegation represents the bond with tokens held by an account. It is
 * owned by one delegator, and is associated with the voting power of one
 * validator.
 */
export interface Delegation {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validator_address: string;
    /** shares define the delegation shares received. */
    shares: string;
}
/**
 * UnbondingDelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface UnbondingDelegation {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address: string;
    /** validator_address is the bech32-encoded address of the validator. */
    validator_address: string;
    /** entries are the unbonding delegation entries. */
    entries: UnbondingDelegationEntry[];
}
/** UnbondingDelegationEntry defines an unbonding object with relevant metadata. */
export interface UnbondingDelegationEntry {
    /** creation_height is the height which the unbonding took place. */
    creation_height: string;
    /** completion_time is the unix time for unbonding completion. */
    completion_time?: Timestamp;
    /** initial_balance defines the tokens initially scheduled to receive at completion. */
    initial_balance: string;
    /** balance defines the tokens to receive at completion. */
    balance: string;
}
/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntry {
    /** creation_height  defines the height which the redelegation took place. */
    creation_height: string;
    /** completion_time defines the unix time for redelegation completion. */
    completion_time?: Timestamp;
    /** initial_balance defines the initial balance when redelegation started. */
    initial_balance: string;
    /** shares_dst is the amount of destination-validator shares created by redelegation. */
    shares_dst: string;
}
/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface Redelegation {
    /** delegator_address is the bech32-encoded address of the delegator. */
    delegator_address: string;
    /** validator_src_address is the validator redelegation source operator address. */
    validator_src_address: string;
    /** validator_dst_address is the validator redelegation destination operator address. */
    validator_dst_address: string;
    /** entries are the redelegation entries. */
    entries: RedelegationEntry[];
}
/** Params defines the parameters for the staking module. */
export interface Params {
    /** unbonding_time is the time duration of unbonding. */
    unbonding_time?: Duration;
    /** max_validators is the maximum number of validators. */
    max_validators: number;
    /** max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). */
    max_entries: number;
    /** historical_entries is the number of historical entries to persist. */
    historical_entries: number;
    /** bond_denom defines the bondable coin denomination. */
    bond_denom: string;
}
/**
 * DelegationResponse is equivalent to Delegation except that it contains a
 * balance in addition to shares which is more suitable for client responses.
 */
export interface DelegationResponse {
    delegation?: Delegation;
    balance?: Coin;
}
/**
 * RedelegationEntryResponse is equivalent to a RedelegationEntry except that it
 * contains a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationEntryResponse {
    redelegation_entry?: RedelegationEntry;
    balance: string;
}
/**
 * RedelegationResponse is equivalent to a Redelegation except that its entries
 * contain a balance in addition to shares which is more suitable for client
 * responses.
 */
export interface RedelegationResponse {
    redelegation?: Redelegation;
    entries: RedelegationEntryResponse[];
}
/**
 * Pool is used for tracking bonded and not-bonded token supply of the bond
 * denomination.
 */
export interface Pool {
    not_bonded_tokens: string;
    bonded_tokens: string;
}
export declare const HistoricalInfo: {
    encode(message: HistoricalInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HistoricalInfo;
    fromJSON(object: any): HistoricalInfo;
    toJSON(message: HistoricalInfo): unknown;
    fromPartial<I extends {
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
            status?: BondStatus | undefined;
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
            } & Record<Exclude<keyof I["header"]["version"], keyof import("../../../tendermint/version/types").Consensus>, never>) | undefined;
            chain_id?: string | undefined;
            height?: string | undefined;
            time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["header"]["time"], keyof Timestamp>, never>) | undefined;
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
                } & Record<Exclude<keyof I["header"]["last_block_id"]["part_set_header"], keyof import("../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["header"]["last_block_id"], keyof import("../../../tendermint/types/types").BlockID>, never>) | undefined;
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
            } & Record<Exclude<keyof I["header"]["encrypted_random"], keyof import("../../../tendermint/types/types").EncryptedRandom>, never>) | undefined;
        } & Record<Exclude<keyof I["header"], keyof Header>, never>) | undefined;
        valset?: ({
            operator_address?: string | undefined;
            consensus_pubkey?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: BondStatus | undefined;
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
            status?: BondStatus | undefined;
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
            } & Record<Exclude<keyof I["valset"][number]["consensus_pubkey"], keyof Any>, never>) | undefined;
            jailed?: boolean | undefined;
            status?: BondStatus | undefined;
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
            } & Record<Exclude<keyof I["valset"][number]["description"], keyof Description>, never>) | undefined;
            unbonding_height?: string | undefined;
            unbonding_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["valset"][number]["unbonding_time"], keyof Timestamp>, never>) | undefined;
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
                } & Record<Exclude<keyof I["valset"][number]["commission"]["commission_rates"], keyof CommissionRates>, never>) | undefined;
                update_time?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["valset"][number]["commission"]["update_time"], keyof Timestamp>, never>) | undefined;
            } & Record<Exclude<keyof I["valset"][number]["commission"], keyof Commission>, never>) | undefined;
            min_self_delegation?: string | undefined;
        } & Record<Exclude<keyof I["valset"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["valset"], keyof {
            operator_address?: string | undefined;
            consensus_pubkey?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            jailed?: boolean | undefined;
            status?: BondStatus | undefined;
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
    } & Record<Exclude<keyof I, keyof HistoricalInfo>, never>>(object: I): HistoricalInfo;
};
export declare const CommissionRates: {
    encode(message: CommissionRates, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CommissionRates;
    fromJSON(object: any): CommissionRates;
    toJSON(message: CommissionRates): unknown;
    fromPartial<I extends {
        rate?: string | undefined;
        max_rate?: string | undefined;
        max_change_rate?: string | undefined;
    } & {
        rate?: string | undefined;
        max_rate?: string | undefined;
        max_change_rate?: string | undefined;
    } & Record<Exclude<keyof I, keyof CommissionRates>, never>>(object: I): CommissionRates;
};
export declare const Commission: {
    encode(message: Commission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Commission;
    fromJSON(object: any): Commission;
    toJSON(message: Commission): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["commission_rates"], keyof CommissionRates>, never>) | undefined;
        update_time?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["update_time"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Commission>, never>>(object: I): Commission;
};
export declare const Description: {
    encode(message: Description, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Description;
    fromJSON(object: any): Description;
    toJSON(message: Description): unknown;
    fromPartial<I extends {
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
    } & Record<Exclude<keyof I, keyof Description>, never>>(object: I): Description;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    fromPartial<I extends {
        operator_address?: string | undefined;
        consensus_pubkey?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        jailed?: boolean | undefined;
        status?: BondStatus | undefined;
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
        } & Record<Exclude<keyof I["consensus_pubkey"], keyof Any>, never>) | undefined;
        jailed?: boolean | undefined;
        status?: BondStatus | undefined;
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
        } & Record<Exclude<keyof I["description"], keyof Description>, never>) | undefined;
        unbonding_height?: string | undefined;
        unbonding_time?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["unbonding_time"], keyof Timestamp>, never>) | undefined;
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
            } & Record<Exclude<keyof I["commission"]["commission_rates"], keyof CommissionRates>, never>) | undefined;
            update_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["commission"]["update_time"], keyof Timestamp>, never>) | undefined;
        } & Record<Exclude<keyof I["commission"], keyof Commission>, never>) | undefined;
        min_self_delegation?: string | undefined;
    } & Record<Exclude<keyof I, keyof Validator>, never>>(object: I): Validator;
};
export declare const ValAddresses: {
    encode(message: ValAddresses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ValAddresses;
    fromJSON(object: any): ValAddresses;
    toJSON(message: ValAddresses): unknown;
    fromPartial<I extends {
        addresses?: string[] | undefined;
    } & {
        addresses?: (string[] & string[] & Record<Exclude<keyof I["addresses"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "addresses">, never>>(object: I): ValAddresses;
};
export declare const DVPair: {
    encode(message: DVPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DVPair;
    fromJSON(object: any): DVPair;
    toJSON(message: DVPair): unknown;
    fromPartial<I extends {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
    } & {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
    } & Record<Exclude<keyof I, keyof DVPair>, never>>(object: I): DVPair;
};
export declare const DVPairs: {
    encode(message: DVPairs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DVPairs;
    fromJSON(object: any): DVPairs;
    toJSON(message: DVPairs): unknown;
    fromPartial<I extends {
        pairs?: {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
        }[] | undefined;
    } & {
        pairs?: ({
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
        }[] & ({
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
        } & {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
        } & Record<Exclude<keyof I["pairs"][number], keyof DVPair>, never>)[] & Record<Exclude<keyof I["pairs"], keyof {
            delegator_address?: string | undefined;
            validator_address?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "pairs">, never>>(object: I): DVPairs;
};
export declare const DVVTriplet: {
    encode(message: DVVTriplet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DVVTriplet;
    fromJSON(object: any): DVVTriplet;
    toJSON(message: DVVTriplet): unknown;
    fromPartial<I extends {
        delegator_address?: string | undefined;
        validator_src_address?: string | undefined;
        validator_dst_address?: string | undefined;
    } & {
        delegator_address?: string | undefined;
        validator_src_address?: string | undefined;
        validator_dst_address?: string | undefined;
    } & Record<Exclude<keyof I, keyof DVVTriplet>, never>>(object: I): DVVTriplet;
};
export declare const DVVTriplets: {
    encode(message: DVVTriplets, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DVVTriplets;
    fromJSON(object: any): DVVTriplets;
    toJSON(message: DVVTriplets): unknown;
    fromPartial<I extends {
        triplets?: {
            delegator_address?: string | undefined;
            validator_src_address?: string | undefined;
            validator_dst_address?: string | undefined;
        }[] | undefined;
    } & {
        triplets?: ({
            delegator_address?: string | undefined;
            validator_src_address?: string | undefined;
            validator_dst_address?: string | undefined;
        }[] & ({
            delegator_address?: string | undefined;
            validator_src_address?: string | undefined;
            validator_dst_address?: string | undefined;
        } & {
            delegator_address?: string | undefined;
            validator_src_address?: string | undefined;
            validator_dst_address?: string | undefined;
        } & Record<Exclude<keyof I["triplets"][number], keyof DVVTriplet>, never>)[] & Record<Exclude<keyof I["triplets"], keyof {
            delegator_address?: string | undefined;
            validator_src_address?: string | undefined;
            validator_dst_address?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "triplets">, never>>(object: I): DVVTriplets;
};
export declare const Delegation: {
    encode(message: Delegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Delegation;
    fromJSON(object: any): Delegation;
    toJSON(message: Delegation): unknown;
    fromPartial<I extends {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        shares?: string | undefined;
    } & {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        shares?: string | undefined;
    } & Record<Exclude<keyof I, keyof Delegation>, never>>(object: I): Delegation;
};
export declare const UnbondingDelegation: {
    encode(message: UnbondingDelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UnbondingDelegation;
    fromJSON(object: any): UnbondingDelegation;
    toJSON(message: UnbondingDelegation): unknown;
    fromPartial<I extends {
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
            } & Record<Exclude<keyof I["entries"][number]["completion_time"], keyof Timestamp>, never>) | undefined;
            initial_balance?: string | undefined;
            balance?: string | undefined;
        } & Record<Exclude<keyof I["entries"][number], keyof UnbondingDelegationEntry>, never>)[] & Record<Exclude<keyof I["entries"], keyof {
            creation_height?: string | undefined;
            completion_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            initial_balance?: string | undefined;
            balance?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof UnbondingDelegation>, never>>(object: I): UnbondingDelegation;
};
export declare const UnbondingDelegationEntry: {
    encode(message: UnbondingDelegationEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UnbondingDelegationEntry;
    fromJSON(object: any): UnbondingDelegationEntry;
    toJSON(message: UnbondingDelegationEntry): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["completion_time"], keyof Timestamp>, never>) | undefined;
        initial_balance?: string | undefined;
        balance?: string | undefined;
    } & Record<Exclude<keyof I, keyof UnbondingDelegationEntry>, never>>(object: I): UnbondingDelegationEntry;
};
export declare const RedelegationEntry: {
    encode(message: RedelegationEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RedelegationEntry;
    fromJSON(object: any): RedelegationEntry;
    toJSON(message: RedelegationEntry): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["completion_time"], keyof Timestamp>, never>) | undefined;
        initial_balance?: string | undefined;
        shares_dst?: string | undefined;
    } & Record<Exclude<keyof I, keyof RedelegationEntry>, never>>(object: I): RedelegationEntry;
};
export declare const Redelegation: {
    encode(message: Redelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Redelegation;
    fromJSON(object: any): Redelegation;
    toJSON(message: Redelegation): unknown;
    fromPartial<I extends {
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
            } & Record<Exclude<keyof I["entries"][number]["completion_time"], keyof Timestamp>, never>) | undefined;
            initial_balance?: string | undefined;
            shares_dst?: string | undefined;
        } & Record<Exclude<keyof I["entries"][number], keyof RedelegationEntry>, never>)[] & Record<Exclude<keyof I["entries"], keyof {
            creation_height?: string | undefined;
            completion_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            initial_balance?: string | undefined;
            shares_dst?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Redelegation>, never>>(object: I): Redelegation;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["unbonding_time"], keyof Duration>, never>) | undefined;
        max_validators?: number | undefined;
        max_entries?: number | undefined;
        historical_entries?: number | undefined;
        bond_denom?: string | undefined;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
};
export declare const DelegationResponse: {
    encode(message: DelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DelegationResponse;
    fromJSON(object: any): DelegationResponse;
    toJSON(message: DelegationResponse): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["delegation"], keyof Delegation>, never>) | undefined;
        balance?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["balance"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof DelegationResponse>, never>>(object: I): DelegationResponse;
};
export declare const RedelegationEntryResponse: {
    encode(message: RedelegationEntryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RedelegationEntryResponse;
    fromJSON(object: any): RedelegationEntryResponse;
    toJSON(message: RedelegationEntryResponse): unknown;
    fromPartial<I extends {
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
            } & Record<Exclude<keyof I["redelegation_entry"]["completion_time"], keyof Timestamp>, never>) | undefined;
            initial_balance?: string | undefined;
            shares_dst?: string | undefined;
        } & Record<Exclude<keyof I["redelegation_entry"], keyof RedelegationEntry>, never>) | undefined;
        balance?: string | undefined;
    } & Record<Exclude<keyof I, keyof RedelegationEntryResponse>, never>>(object: I): RedelegationEntryResponse;
};
export declare const RedelegationResponse: {
    encode(message: RedelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RedelegationResponse;
    fromJSON(object: any): RedelegationResponse;
    toJSON(message: RedelegationResponse): unknown;
    fromPartial<I extends {
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
                } & Record<Exclude<keyof I["redelegation"]["entries"][number]["completion_time"], keyof Timestamp>, never>) | undefined;
                initial_balance?: string | undefined;
                shares_dst?: string | undefined;
            } & Record<Exclude<keyof I["redelegation"]["entries"][number], keyof RedelegationEntry>, never>)[] & Record<Exclude<keyof I["redelegation"]["entries"], keyof {
                creation_height?: string | undefined;
                completion_time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                initial_balance?: string | undefined;
                shares_dst?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["redelegation"], keyof Redelegation>, never>) | undefined;
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
                } & Record<Exclude<keyof I["entries"][number]["redelegation_entry"]["completion_time"], keyof Timestamp>, never>) | undefined;
                initial_balance?: string | undefined;
                shares_dst?: string | undefined;
            } & Record<Exclude<keyof I["entries"][number]["redelegation_entry"], keyof RedelegationEntry>, never>) | undefined;
            balance?: string | undefined;
        } & Record<Exclude<keyof I["entries"][number], keyof RedelegationEntryResponse>, never>)[] & Record<Exclude<keyof I["entries"], keyof {
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
    } & Record<Exclude<keyof I, keyof RedelegationResponse>, never>>(object: I): RedelegationResponse;
};
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    fromPartial<I extends {
        not_bonded_tokens?: string | undefined;
        bonded_tokens?: string | undefined;
    } & {
        not_bonded_tokens?: string | undefined;
        bonded_tokens?: string | undefined;
    } & Record<Exclude<keyof I, keyof Pool>, never>>(object: I): Pool;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
//# sourceMappingURL=staking.d.ts.map