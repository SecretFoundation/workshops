import * as _m0 from "protobufjs/minimal";
import { Duration } from "../../../../google/protobuf/duration";
import { Height } from "../../../core/client/v1/client";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { MerkleRoot } from "../../../core/commitment/v1/commitment";
import { SignedHeader } from "../../../../tendermint/types/types";
import { ValidatorSet } from "../../../../tendermint/types/validator";
import { ProofSpec } from "../../../../confio/proofs";
export declare const protobufPackage = "ibc.lightclients.tendermint.v1";
/**
 * ClientState from Tendermint tracks the current validator set, latest height,
 * and a possible frozen height.
 */
export interface ClientState {
    chain_id: string;
    trust_level?: Fraction;
    /**
     * duration of the period since the LastestTimestamp during which the
     * submitted headers are valid for upgrade
     */
    trusting_period?: Duration;
    /** duration of the staking unbonding period */
    unbonding_period?: Duration;
    /** defines how much new (untrusted) header's Time can drift into the future. */
    max_clock_drift?: Duration;
    /** Block height when the client was frozen due to a misbehaviour */
    frozen_height?: Height;
    /** Latest height the client was updated to */
    latest_height?: Height;
    /** Proof specifications used in verifying counterparty state */
    proof_specs: ProofSpec[];
    /**
     * Path at which next upgraded client will be committed.
     * Each element corresponds to the key for a single CommitmentProof in the
     * chained proof. NOTE: ClientState must stored under
     * `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored
     * under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using
     * the default upgrade module, upgrade_path should be []string{"upgrade",
     * "upgradedIBCState"}`
     */
    upgrade_path: string[];
    /**
     * allow_update_after_expiry is deprecated
     *
     * @deprecated
     */
    allow_update_after_expiry: boolean;
    /**
     * allow_update_after_misbehaviour is deprecated
     *
     * @deprecated
     */
    allow_update_after_misbehaviour: boolean;
}
/** ConsensusState defines the consensus state from Tendermint. */
export interface ConsensusState {
    /**
     * timestamp that corresponds to the block height in which the ConsensusState
     * was stored.
     */
    timestamp?: Timestamp;
    /** commitment root (i.e app hash) */
    root?: MerkleRoot;
    next_validators_hash: Uint8Array;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 */
export interface Misbehaviour {
    client_id: string;
    header_1?: Header;
    header_2?: Header;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 */
export interface Header {
    signed_header?: SignedHeader;
    validator_set?: ValidatorSet;
    trusted_height?: Height;
    trusted_validators?: ValidatorSet;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface Fraction {
    numerator: string;
    denominator: string;
}
export declare const ClientState: {
    encode(message: ClientState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClientState;
    fromJSON(object: any): ClientState;
    toJSON(message: ClientState): unknown;
    fromPartial<I extends {
        chain_id?: string | undefined;
        trust_level?: {
            numerator?: string | undefined;
            denominator?: string | undefined;
        } | undefined;
        trusting_period?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
        unbonding_period?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
        max_clock_drift?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
        frozen_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
        latest_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
        proof_specs?: {
            leaf_spec?: {
                hash?: import("../../../../confio/proofs").HashOp | undefined;
                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                length?: import("../../../../confio/proofs").LengthOp | undefined;
                prefix?: Uint8Array | undefined;
            } | undefined;
            inner_spec?: {
                child_order?: number[] | undefined;
                child_size?: number | undefined;
                min_prefix_length?: number | undefined;
                max_prefix_length?: number | undefined;
                empty_child?: Uint8Array | undefined;
                hash?: import("../../../../confio/proofs").HashOp | undefined;
            } | undefined;
            max_depth?: number | undefined;
            min_depth?: number | undefined;
        }[] | undefined;
        upgrade_path?: string[] | undefined;
        allow_update_after_expiry?: boolean | undefined;
        allow_update_after_misbehaviour?: boolean | undefined;
    } & {
        chain_id?: string | undefined;
        trust_level?: ({
            numerator?: string | undefined;
            denominator?: string | undefined;
        } & {
            numerator?: string | undefined;
            denominator?: string | undefined;
        } & Record<Exclude<keyof I["trust_level"], keyof Fraction>, never>) | undefined;
        trusting_period?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["trusting_period"], keyof Duration>, never>) | undefined;
        unbonding_period?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["unbonding_period"], keyof Duration>, never>) | undefined;
        max_clock_drift?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["max_clock_drift"], keyof Duration>, never>) | undefined;
        frozen_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["frozen_height"], keyof Height>, never>) | undefined;
        latest_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["latest_height"], keyof Height>, never>) | undefined;
        proof_specs?: ({
            leaf_spec?: {
                hash?: import("../../../../confio/proofs").HashOp | undefined;
                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                length?: import("../../../../confio/proofs").LengthOp | undefined;
                prefix?: Uint8Array | undefined;
            } | undefined;
            inner_spec?: {
                child_order?: number[] | undefined;
                child_size?: number | undefined;
                min_prefix_length?: number | undefined;
                max_prefix_length?: number | undefined;
                empty_child?: Uint8Array | undefined;
                hash?: import("../../../../confio/proofs").HashOp | undefined;
            } | undefined;
            max_depth?: number | undefined;
            min_depth?: number | undefined;
        }[] & ({
            leaf_spec?: {
                hash?: import("../../../../confio/proofs").HashOp | undefined;
                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                length?: import("../../../../confio/proofs").LengthOp | undefined;
                prefix?: Uint8Array | undefined;
            } | undefined;
            inner_spec?: {
                child_order?: number[] | undefined;
                child_size?: number | undefined;
                min_prefix_length?: number | undefined;
                max_prefix_length?: number | undefined;
                empty_child?: Uint8Array | undefined;
                hash?: import("../../../../confio/proofs").HashOp | undefined;
            } | undefined;
            max_depth?: number | undefined;
            min_depth?: number | undefined;
        } & {
            leaf_spec?: ({
                hash?: import("../../../../confio/proofs").HashOp | undefined;
                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                length?: import("../../../../confio/proofs").LengthOp | undefined;
                prefix?: Uint8Array | undefined;
            } & {
                hash?: import("../../../../confio/proofs").HashOp | undefined;
                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                length?: import("../../../../confio/proofs").LengthOp | undefined;
                prefix?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["proof_specs"][number]["leaf_spec"], keyof import("../../../../confio/proofs").LeafOp>, never>) | undefined;
            inner_spec?: ({
                child_order?: number[] | undefined;
                child_size?: number | undefined;
                min_prefix_length?: number | undefined;
                max_prefix_length?: number | undefined;
                empty_child?: Uint8Array | undefined;
                hash?: import("../../../../confio/proofs").HashOp | undefined;
            } & {
                child_order?: (number[] & number[] & Record<Exclude<keyof I["proof_specs"][number]["inner_spec"]["child_order"], keyof number[]>, never>) | undefined;
                child_size?: number | undefined;
                min_prefix_length?: number | undefined;
                max_prefix_length?: number | undefined;
                empty_child?: Uint8Array | undefined;
                hash?: import("../../../../confio/proofs").HashOp | undefined;
            } & Record<Exclude<keyof I["proof_specs"][number]["inner_spec"], keyof import("../../../../confio/proofs").InnerSpec>, never>) | undefined;
            max_depth?: number | undefined;
            min_depth?: number | undefined;
        } & Record<Exclude<keyof I["proof_specs"][number], keyof ProofSpec>, never>)[] & Record<Exclude<keyof I["proof_specs"], keyof {
            leaf_spec?: {
                hash?: import("../../../../confio/proofs").HashOp | undefined;
                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                length?: import("../../../../confio/proofs").LengthOp | undefined;
                prefix?: Uint8Array | undefined;
            } | undefined;
            inner_spec?: {
                child_order?: number[] | undefined;
                child_size?: number | undefined;
                min_prefix_length?: number | undefined;
                max_prefix_length?: number | undefined;
                empty_child?: Uint8Array | undefined;
                hash?: import("../../../../confio/proofs").HashOp | undefined;
            } | undefined;
            max_depth?: number | undefined;
            min_depth?: number | undefined;
        }[]>, never>) | undefined;
        upgrade_path?: (string[] & string[] & Record<Exclude<keyof I["upgrade_path"], keyof string[]>, never>) | undefined;
        allow_update_after_expiry?: boolean | undefined;
        allow_update_after_misbehaviour?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof ClientState>, never>>(object: I): ClientState;
};
export declare const ConsensusState: {
    encode(message: ConsensusState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConsensusState;
    fromJSON(object: any): ConsensusState;
    toJSON(message: ConsensusState): unknown;
    fromPartial<I extends {
        timestamp?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
        root?: {
            hash?: Uint8Array | undefined;
        } | undefined;
        next_validators_hash?: Uint8Array | undefined;
    } & {
        timestamp?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["timestamp"], keyof Timestamp>, never>) | undefined;
        root?: ({
            hash?: Uint8Array | undefined;
        } & {
            hash?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["root"], "hash">, never>) | undefined;
        next_validators_hash?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof ConsensusState>, never>>(object: I): ConsensusState;
};
export declare const Misbehaviour: {
    encode(message: Misbehaviour, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Misbehaviour;
    fromJSON(object: any): Misbehaviour;
    toJSON(message: Misbehaviour): unknown;
    fromPartial<I extends {
        client_id?: string | undefined;
        header_1?: {
            signed_header?: {
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
                commit?: {
                    height?: string | undefined;
                    round?: number | undefined;
                    block_id?: {
                        hash?: Uint8Array | undefined;
                        part_set_header?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    signatures?: {
                        block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            validator_set?: {
                validators?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[] | undefined;
                proposer?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } | undefined;
                total_voting_power?: string | undefined;
            } | undefined;
            trusted_height?: {
                revision_number?: string | undefined;
                revision_height?: string | undefined;
            } | undefined;
            trusted_validators?: {
                validators?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[] | undefined;
                proposer?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } | undefined;
                total_voting_power?: string | undefined;
            } | undefined;
        } | undefined;
        header_2?: {
            signed_header?: {
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
                commit?: {
                    height?: string | undefined;
                    round?: number | undefined;
                    block_id?: {
                        hash?: Uint8Array | undefined;
                        part_set_header?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    signatures?: {
                        block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            validator_set?: {
                validators?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[] | undefined;
                proposer?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } | undefined;
                total_voting_power?: string | undefined;
            } | undefined;
            trusted_height?: {
                revision_number?: string | undefined;
                revision_height?: string | undefined;
            } | undefined;
            trusted_validators?: {
                validators?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[] | undefined;
                proposer?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } | undefined;
                total_voting_power?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        client_id?: string | undefined;
        header_1?: ({
            signed_header?: {
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
                commit?: {
                    height?: string | undefined;
                    round?: number | undefined;
                    block_id?: {
                        hash?: Uint8Array | undefined;
                        part_set_header?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    signatures?: {
                        block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            validator_set?: {
                validators?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[] | undefined;
                proposer?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } | undefined;
                total_voting_power?: string | undefined;
            } | undefined;
            trusted_height?: {
                revision_number?: string | undefined;
                revision_height?: string | undefined;
            } | undefined;
            trusted_validators?: {
                validators?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[] | undefined;
                proposer?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } | undefined;
                total_voting_power?: string | undefined;
            } | undefined;
        } & {
            signed_header?: ({
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
                commit?: {
                    height?: string | undefined;
                    round?: number | undefined;
                    block_id?: {
                        hash?: Uint8Array | undefined;
                        part_set_header?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    signatures?: {
                        block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
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
                    } & Record<Exclude<keyof I["header_1"]["signed_header"]["header"]["version"], keyof import("../../../../tendermint/version/types").Consensus>, never>) | undefined;
                    chain_id?: string | undefined;
                    height?: string | undefined;
                    time?: ({
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["header_1"]["signed_header"]["header"]["time"], keyof Timestamp>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["header_1"]["signed_header"]["header"]["last_block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                    } & Record<Exclude<keyof I["header_1"]["signed_header"]["header"]["last_block_id"], keyof import("../../../../tendermint/types/types").BlockID>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["header_1"]["signed_header"]["header"]["encrypted_random"], keyof import("../../../../tendermint/types/types").EncryptedRandom>, never>) | undefined;
                } & Record<Exclude<keyof I["header_1"]["signed_header"]["header"], keyof import("../../../../tendermint/types/types").Header>, never>) | undefined;
                commit?: ({
                    height?: string | undefined;
                    round?: number | undefined;
                    block_id?: {
                        hash?: Uint8Array | undefined;
                        part_set_header?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    signatures?: {
                        block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] | undefined;
                } & {
                    height?: string | undefined;
                    round?: number | undefined;
                    block_id?: ({
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
                        } & Record<Exclude<keyof I["header_1"]["signed_header"]["commit"]["block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                    } & Record<Exclude<keyof I["header_1"]["signed_header"]["commit"]["block_id"], keyof import("../../../../tendermint/types/types").BlockID>, never>) | undefined;
                    signatures?: ({
                        block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] & ({
                        block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    } & {
                        block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: ({
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["header_1"]["signed_header"]["commit"]["signatures"][number]["timestamp"], keyof Timestamp>, never>) | undefined;
                        signature?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["header_1"]["signed_header"]["commit"]["signatures"][number], keyof import("../../../../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I["header_1"]["signed_header"]["commit"]["signatures"], keyof {
                        block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["header_1"]["signed_header"]["commit"], keyof import("../../../../tendermint/types/types").Commit>, never>) | undefined;
            } & Record<Exclude<keyof I["header_1"]["signed_header"], keyof SignedHeader>, never>) | undefined;
            validator_set?: ({
                validators?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[] | undefined;
                proposer?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } | undefined;
                total_voting_power?: string | undefined;
            } & {
                validators?: ({
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[] & ({
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } & {
                    address?: Uint8Array | undefined;
                    pub_key?: ({
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["header_1"]["validator_set"]["validators"][number]["pub_key"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>) | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } & Record<Exclude<keyof I["header_1"]["validator_set"]["validators"][number], keyof import("../../../../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I["header_1"]["validator_set"]["validators"], keyof {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[]>, never>) | undefined;
                proposer?: ({
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } & {
                    address?: Uint8Array | undefined;
                    pub_key?: ({
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["header_1"]["validator_set"]["proposer"]["pub_key"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>) | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } & Record<Exclude<keyof I["header_1"]["validator_set"]["proposer"], keyof import("../../../../tendermint/types/validator").Validator>, never>) | undefined;
                total_voting_power?: string | undefined;
            } & Record<Exclude<keyof I["header_1"]["validator_set"], keyof ValidatorSet>, never>) | undefined;
            trusted_height?: ({
                revision_number?: string | undefined;
                revision_height?: string | undefined;
            } & {
                revision_number?: string | undefined;
                revision_height?: string | undefined;
            } & Record<Exclude<keyof I["header_1"]["trusted_height"], keyof Height>, never>) | undefined;
            trusted_validators?: ({
                validators?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[] | undefined;
                proposer?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } | undefined;
                total_voting_power?: string | undefined;
            } & {
                validators?: ({
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[] & ({
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } & {
                    address?: Uint8Array | undefined;
                    pub_key?: ({
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["header_1"]["trusted_validators"]["validators"][number]["pub_key"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>) | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } & Record<Exclude<keyof I["header_1"]["trusted_validators"]["validators"][number], keyof import("../../../../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I["header_1"]["trusted_validators"]["validators"], keyof {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[]>, never>) | undefined;
                proposer?: ({
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } & {
                    address?: Uint8Array | undefined;
                    pub_key?: ({
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["header_1"]["trusted_validators"]["proposer"]["pub_key"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>) | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } & Record<Exclude<keyof I["header_1"]["trusted_validators"]["proposer"], keyof import("../../../../tendermint/types/validator").Validator>, never>) | undefined;
                total_voting_power?: string | undefined;
            } & Record<Exclude<keyof I["header_1"]["trusted_validators"], keyof ValidatorSet>, never>) | undefined;
        } & Record<Exclude<keyof I["header_1"], keyof Header>, never>) | undefined;
        header_2?: ({
            signed_header?: {
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
                commit?: {
                    height?: string | undefined;
                    round?: number | undefined;
                    block_id?: {
                        hash?: Uint8Array | undefined;
                        part_set_header?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    signatures?: {
                        block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            validator_set?: {
                validators?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[] | undefined;
                proposer?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } | undefined;
                total_voting_power?: string | undefined;
            } | undefined;
            trusted_height?: {
                revision_number?: string | undefined;
                revision_height?: string | undefined;
            } | undefined;
            trusted_validators?: {
                validators?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[] | undefined;
                proposer?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } | undefined;
                total_voting_power?: string | undefined;
            } | undefined;
        } & {
            signed_header?: ({
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
                commit?: {
                    height?: string | undefined;
                    round?: number | undefined;
                    block_id?: {
                        hash?: Uint8Array | undefined;
                        part_set_header?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    signatures?: {
                        block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
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
                    } & Record<Exclude<keyof I["header_2"]["signed_header"]["header"]["version"], keyof import("../../../../tendermint/version/types").Consensus>, never>) | undefined;
                    chain_id?: string | undefined;
                    height?: string | undefined;
                    time?: ({
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["header_2"]["signed_header"]["header"]["time"], keyof Timestamp>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["header_2"]["signed_header"]["header"]["last_block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                    } & Record<Exclude<keyof I["header_2"]["signed_header"]["header"]["last_block_id"], keyof import("../../../../tendermint/types/types").BlockID>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["header_2"]["signed_header"]["header"]["encrypted_random"], keyof import("../../../../tendermint/types/types").EncryptedRandom>, never>) | undefined;
                } & Record<Exclude<keyof I["header_2"]["signed_header"]["header"], keyof import("../../../../tendermint/types/types").Header>, never>) | undefined;
                commit?: ({
                    height?: string | undefined;
                    round?: number | undefined;
                    block_id?: {
                        hash?: Uint8Array | undefined;
                        part_set_header?: {
                            total?: number | undefined;
                            hash?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    signatures?: {
                        block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] | undefined;
                } & {
                    height?: string | undefined;
                    round?: number | undefined;
                    block_id?: ({
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
                        } & Record<Exclude<keyof I["header_2"]["signed_header"]["commit"]["block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                    } & Record<Exclude<keyof I["header_2"]["signed_header"]["commit"]["block_id"], keyof import("../../../../tendermint/types/types").BlockID>, never>) | undefined;
                    signatures?: ({
                        block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[] & ({
                        block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    } & {
                        block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: ({
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["header_2"]["signed_header"]["commit"]["signatures"][number]["timestamp"], keyof Timestamp>, never>) | undefined;
                        signature?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["header_2"]["signed_header"]["commit"]["signatures"][number], keyof import("../../../../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I["header_2"]["signed_header"]["commit"]["signatures"], keyof {
                        block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                        validator_address?: Uint8Array | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        signature?: Uint8Array | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["header_2"]["signed_header"]["commit"], keyof import("../../../../tendermint/types/types").Commit>, never>) | undefined;
            } & Record<Exclude<keyof I["header_2"]["signed_header"], keyof SignedHeader>, never>) | undefined;
            validator_set?: ({
                validators?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[] | undefined;
                proposer?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } | undefined;
                total_voting_power?: string | undefined;
            } & {
                validators?: ({
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[] & ({
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } & {
                    address?: Uint8Array | undefined;
                    pub_key?: ({
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["header_2"]["validator_set"]["validators"][number]["pub_key"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>) | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } & Record<Exclude<keyof I["header_2"]["validator_set"]["validators"][number], keyof import("../../../../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I["header_2"]["validator_set"]["validators"], keyof {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[]>, never>) | undefined;
                proposer?: ({
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } & {
                    address?: Uint8Array | undefined;
                    pub_key?: ({
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["header_2"]["validator_set"]["proposer"]["pub_key"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>) | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } & Record<Exclude<keyof I["header_2"]["validator_set"]["proposer"], keyof import("../../../../tendermint/types/validator").Validator>, never>) | undefined;
                total_voting_power?: string | undefined;
            } & Record<Exclude<keyof I["header_2"]["validator_set"], keyof ValidatorSet>, never>) | undefined;
            trusted_height?: ({
                revision_number?: string | undefined;
                revision_height?: string | undefined;
            } & {
                revision_number?: string | undefined;
                revision_height?: string | undefined;
            } & Record<Exclude<keyof I["header_2"]["trusted_height"], keyof Height>, never>) | undefined;
            trusted_validators?: ({
                validators?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[] | undefined;
                proposer?: {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } | undefined;
                total_voting_power?: string | undefined;
            } & {
                validators?: ({
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[] & ({
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } & {
                    address?: Uint8Array | undefined;
                    pub_key?: ({
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["header_2"]["trusted_validators"]["validators"][number]["pub_key"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>) | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } & Record<Exclude<keyof I["header_2"]["trusted_validators"]["validators"][number], keyof import("../../../../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I["header_2"]["trusted_validators"]["validators"], keyof {
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                }[]>, never>) | undefined;
                proposer?: ({
                    address?: Uint8Array | undefined;
                    pub_key?: {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } & {
                    address?: Uint8Array | undefined;
                    pub_key?: ({
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & {
                        ed25519?: Uint8Array | undefined;
                        secp256k1?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["header_2"]["trusted_validators"]["proposer"]["pub_key"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>) | undefined;
                    voting_power?: string | undefined;
                    proposer_priority?: string | undefined;
                } & Record<Exclude<keyof I["header_2"]["trusted_validators"]["proposer"], keyof import("../../../../tendermint/types/validator").Validator>, never>) | undefined;
                total_voting_power?: string | undefined;
            } & Record<Exclude<keyof I["header_2"]["trusted_validators"], keyof ValidatorSet>, never>) | undefined;
        } & Record<Exclude<keyof I["header_2"], keyof Header>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Misbehaviour>, never>>(object: I): Misbehaviour;
};
export declare const Header: {
    encode(message: Header, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Header;
    fromJSON(object: any): Header;
    toJSON(message: Header): unknown;
    fromPartial<I extends {
        signed_header?: {
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
            commit?: {
                height?: string | undefined;
                round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        validator_set?: {
            validators?: {
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            }[] | undefined;
            proposer?: {
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } | undefined;
            total_voting_power?: string | undefined;
        } | undefined;
        trusted_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
        trusted_validators?: {
            validators?: {
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            }[] | undefined;
            proposer?: {
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } | undefined;
            total_voting_power?: string | undefined;
        } | undefined;
    } & {
        signed_header?: ({
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
            commit?: {
                height?: string | undefined;
                round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
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
                } & Record<Exclude<keyof I["signed_header"]["header"]["version"], keyof import("../../../../tendermint/version/types").Consensus>, never>) | undefined;
                chain_id?: string | undefined;
                height?: string | undefined;
                time?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["signed_header"]["header"]["time"], keyof Timestamp>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["signed_header"]["header"]["last_block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["signed_header"]["header"]["last_block_id"], keyof import("../../../../tendermint/types/types").BlockID>, never>) | undefined;
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
                } & Record<Exclude<keyof I["signed_header"]["header"]["encrypted_random"], keyof import("../../../../tendermint/types/types").EncryptedRandom>, never>) | undefined;
            } & Record<Exclude<keyof I["signed_header"]["header"], keyof import("../../../../tendermint/types/types").Header>, never>) | undefined;
            commit?: ({
                height?: string | undefined;
                round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                height?: string | undefined;
                round?: number | undefined;
                block_id?: ({
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
                    } & Record<Exclude<keyof I["signed_header"]["commit"]["block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["signed_header"]["commit"]["block_id"], keyof import("../../../../tendermint/types/types").BlockID>, never>) | undefined;
                signatures?: ({
                    block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                }[] & ({
                    block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: ({
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["signed_header"]["commit"]["signatures"][number]["timestamp"], keyof Timestamp>, never>) | undefined;
                    signature?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["signed_header"]["commit"]["signatures"][number], keyof import("../../../../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I["signed_header"]["commit"]["signatures"], keyof {
                    block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["signed_header"]["commit"], keyof import("../../../../tendermint/types/types").Commit>, never>) | undefined;
        } & Record<Exclude<keyof I["signed_header"], keyof SignedHeader>, never>) | undefined;
        validator_set?: ({
            validators?: {
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            }[] | undefined;
            proposer?: {
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } | undefined;
            total_voting_power?: string | undefined;
        } & {
            validators?: ({
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            }[] & ({
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & {
                address?: Uint8Array | undefined;
                pub_key?: ({
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["validator_set"]["validators"][number]["pub_key"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>) | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & Record<Exclude<keyof I["validator_set"]["validators"][number], keyof import("../../../../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I["validator_set"]["validators"], keyof {
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            }[]>, never>) | undefined;
            proposer?: ({
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & {
                address?: Uint8Array | undefined;
                pub_key?: ({
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["validator_set"]["proposer"]["pub_key"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>) | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & Record<Exclude<keyof I["validator_set"]["proposer"], keyof import("../../../../tendermint/types/validator").Validator>, never>) | undefined;
            total_voting_power?: string | undefined;
        } & Record<Exclude<keyof I["validator_set"], keyof ValidatorSet>, never>) | undefined;
        trusted_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["trusted_height"], keyof Height>, never>) | undefined;
        trusted_validators?: ({
            validators?: {
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            }[] | undefined;
            proposer?: {
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } | undefined;
            total_voting_power?: string | undefined;
        } & {
            validators?: ({
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            }[] & ({
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & {
                address?: Uint8Array | undefined;
                pub_key?: ({
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["trusted_validators"]["validators"][number]["pub_key"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>) | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & Record<Exclude<keyof I["trusted_validators"]["validators"][number], keyof import("../../../../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I["trusted_validators"]["validators"], keyof {
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            }[]>, never>) | undefined;
            proposer?: ({
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & {
                address?: Uint8Array | undefined;
                pub_key?: ({
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["trusted_validators"]["proposer"]["pub_key"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>) | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & Record<Exclude<keyof I["trusted_validators"]["proposer"], keyof import("../../../../tendermint/types/validator").Validator>, never>) | undefined;
            total_voting_power?: string | undefined;
        } & Record<Exclude<keyof I["trusted_validators"], keyof ValidatorSet>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Header>, never>>(object: I): Header;
};
export declare const Fraction: {
    encode(message: Fraction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Fraction;
    fromJSON(object: any): Fraction;
    toJSON(message: Fraction): unknown;
    fromPartial<I extends {
        numerator?: string | undefined;
        denominator?: string | undefined;
    } & {
        numerator?: string | undefined;
        denominator?: string | undefined;
    } & Record<Exclude<keyof I, keyof Fraction>, never>>(object: I): Fraction;
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
//# sourceMappingURL=tendermint.d.ts.map