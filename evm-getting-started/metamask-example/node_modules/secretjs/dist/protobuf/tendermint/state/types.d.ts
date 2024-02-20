import * as _m0 from "protobufjs/minimal";
import { ResponseEndBlock, ResponseBeginBlock, ResponseDeliverTx } from "../abci/types";
import { ValidatorSet } from "../types/validator";
import { ConsensusParams } from "../types/params";
import { Consensus } from "../version/types";
import { BlockID } from "../types/types";
import { Timestamp } from "../../google/protobuf/timestamp";
export declare const protobufPackage = "tendermint.state";
/**
 * ABCIResponses retains the responses
 * of the various ABCI calls during block processing.
 * It is persisted to disk for each height before calling Commit.
 */
export interface ABCIResponses {
    deliver_txs: ResponseDeliverTx[];
    end_block?: ResponseEndBlock;
    begin_block?: ResponseBeginBlock;
}
/** ValidatorsInfo represents the latest validator set, or the last height it changed */
export interface ValidatorsInfo {
    validator_set?: ValidatorSet;
    last_height_changed: string;
}
/** ConsensusParamsInfo represents the latest consensus params, or the last height it changed */
export interface ConsensusParamsInfo {
    consensus_params?: ConsensusParams;
    last_height_changed: string;
}
export interface Version {
    consensus?: Consensus;
    software: string;
}
export interface State {
    version?: Version;
    /** immutable */
    chain_id: string;
    initial_height: string;
    /** LastBlockHeight=0 at genesis (ie. block(H=0) does not exist) */
    last_block_height: string;
    last_block_id?: BlockID;
    last_block_time?: Timestamp;
    /**
     * LastValidators is used to validate block.LastCommit.
     * Validators are persisted to the database separately every time they change,
     * so we can query for historical validator sets.
     * Note that if s.LastBlockHeight causes a valset change,
     * we set s.LastHeightValidatorsChanged = s.LastBlockHeight + 1 + 1
     * Extra +1 due to nextValSet delay.
     */
    next_validators?: ValidatorSet;
    validators?: ValidatorSet;
    last_validators?: ValidatorSet;
    last_height_validators_changed: string;
    /**
     * Consensus parameters used for validating blocks.
     * Changes returned by EndBlock and updated after Commit.
     */
    consensus_params?: ConsensusParams;
    last_height_consensus_params_changed: string;
    /** Merkle root of the results from executing prev block */
    last_results_hash: Uint8Array;
    /** the latest AppHash we've received from calling abci.Commit() */
    app_hash: Uint8Array;
}
export declare const ABCIResponses: {
    encode(message: ABCIResponses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ABCIResponses;
    fromJSON(object: any): ABCIResponses;
    toJSON(message: ABCIResponses): unknown;
    fromPartial<I extends {
        deliver_txs?: {
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
        }[] | undefined;
        end_block?: {
            validator_updates?: {
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] | undefined;
            consensus_param_updates?: {
                block?: {
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } | undefined;
                evidence?: {
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    max_bytes?: string | undefined;
                } | undefined;
                validator?: {
                    pub_key_types?: string[] | undefined;
                } | undefined;
                version?: {
                    app_version?: string | undefined;
                } | undefined;
            } | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
        begin_block?: {
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        deliver_txs?: ({
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
        }[] & ({
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
        } & {
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & Record<Exclude<keyof I["deliver_txs"][number]["events"][number]["attributes"][number], keyof import("../abci/types").EventAttribute>, never>)[] & Record<Exclude<keyof I["deliver_txs"][number]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["deliver_txs"][number]["events"][number], keyof import("../abci/types").Event>, never>)[] & Record<Exclude<keyof I["deliver_txs"][number]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
            codespace?: string | undefined;
        } & Record<Exclude<keyof I["deliver_txs"][number], keyof ResponseDeliverTx>, never>)[] & Record<Exclude<keyof I["deliver_txs"], keyof {
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
        }[]>, never>) | undefined;
        end_block?: ({
            validator_updates?: {
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] | undefined;
            consensus_param_updates?: {
                block?: {
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } | undefined;
                evidence?: {
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    max_bytes?: string | undefined;
                } | undefined;
                validator?: {
                    pub_key_types?: string[] | undefined;
                } | undefined;
                version?: {
                    app_version?: string | undefined;
                } | undefined;
            } | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            validator_updates?: ({
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[] & ({
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            } & {
                pub_key?: ({
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["end_block"]["validator_updates"][number]["pub_key"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                power?: string | undefined;
            } & Record<Exclude<keyof I["end_block"]["validator_updates"][number], keyof import("../abci/types").ValidatorUpdate>, never>)[] & Record<Exclude<keyof I["end_block"]["validator_updates"], keyof {
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                power?: string | undefined;
            }[]>, never>) | undefined;
            consensus_param_updates?: ({
                block?: {
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } | undefined;
                evidence?: {
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    max_bytes?: string | undefined;
                } | undefined;
                validator?: {
                    pub_key_types?: string[] | undefined;
                } | undefined;
                version?: {
                    app_version?: string | undefined;
                } | undefined;
            } & {
                block?: ({
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } & {
                    max_bytes?: string | undefined;
                    max_gas?: string | undefined;
                } & Record<Exclude<keyof I["end_block"]["consensus_param_updates"]["block"], keyof import("../abci/types").BlockParams>, never>) | undefined;
                evidence?: ({
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    max_bytes?: string | undefined;
                } & {
                    max_age_num_blocks?: string | undefined;
                    max_age_duration?: ({
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["end_block"]["consensus_param_updates"]["evidence"]["max_age_duration"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
                    max_bytes?: string | undefined;
                } & Record<Exclude<keyof I["end_block"]["consensus_param_updates"]["evidence"], keyof import("../types/params").EvidenceParams>, never>) | undefined;
                validator?: ({
                    pub_key_types?: string[] | undefined;
                } & {
                    pub_key_types?: (string[] & string[] & Record<Exclude<keyof I["end_block"]["consensus_param_updates"]["validator"]["pub_key_types"], keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["end_block"]["consensus_param_updates"]["validator"], "pub_key_types">, never>) | undefined;
                version?: ({
                    app_version?: string | undefined;
                } & {
                    app_version?: string | undefined;
                } & Record<Exclude<keyof I["end_block"]["consensus_param_updates"]["version"], "app_version">, never>) | undefined;
            } & Record<Exclude<keyof I["end_block"]["consensus_param_updates"], keyof import("../abci/types").ConsensusParams>, never>) | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & Record<Exclude<keyof I["end_block"]["events"][number]["attributes"][number], keyof import("../abci/types").EventAttribute>, never>)[] & Record<Exclude<keyof I["end_block"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["end_block"]["events"][number], keyof import("../abci/types").Event>, never>)[] & Record<Exclude<keyof I["end_block"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["end_block"], keyof ResponseEndBlock>, never>) | undefined;
        begin_block?: ({
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & Record<Exclude<keyof I["begin_block"]["events"][number]["attributes"][number], keyof import("../abci/types").EventAttribute>, never>)[] & Record<Exclude<keyof I["begin_block"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["begin_block"]["events"][number], keyof import("../abci/types").Event>, never>)[] & Record<Exclude<keyof I["begin_block"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["begin_block"], "events">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ABCIResponses>, never>>(object: I): ABCIResponses;
};
export declare const ValidatorsInfo: {
    encode(message: ValidatorsInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ValidatorsInfo;
    fromJSON(object: any): ValidatorsInfo;
    toJSON(message: ValidatorsInfo): unknown;
    fromPartial<I extends {
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
        last_height_changed?: string | undefined;
    } & {
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
                } & Record<Exclude<keyof I["validator_set"]["validators"][number]["pub_key"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & Record<Exclude<keyof I["validator_set"]["validators"][number], keyof import("../types/validator").Validator>, never>)[] & Record<Exclude<keyof I["validator_set"]["validators"], keyof {
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
                } & Record<Exclude<keyof I["validator_set"]["proposer"]["pub_key"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & Record<Exclude<keyof I["validator_set"]["proposer"], keyof import("../types/validator").Validator>, never>) | undefined;
            total_voting_power?: string | undefined;
        } & Record<Exclude<keyof I["validator_set"], keyof ValidatorSet>, never>) | undefined;
        last_height_changed?: string | undefined;
    } & Record<Exclude<keyof I, keyof ValidatorsInfo>, never>>(object: I): ValidatorsInfo;
};
export declare const ConsensusParamsInfo: {
    encode(message: ConsensusParamsInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConsensusParamsInfo;
    fromJSON(object: any): ConsensusParamsInfo;
    toJSON(message: ConsensusParamsInfo): unknown;
    fromPartial<I extends {
        consensus_params?: {
            block?: {
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
                time_iota_ms?: string | undefined;
            } | undefined;
            evidence?: {
                max_age_num_blocks?: string | undefined;
                max_age_duration?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                max_bytes?: string | undefined;
            } | undefined;
            validator?: {
                pub_key_types?: string[] | undefined;
            } | undefined;
            version?: {
                app_version?: string | undefined;
            } | undefined;
        } | undefined;
        last_height_changed?: string | undefined;
    } & {
        consensus_params?: ({
            block?: {
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
                time_iota_ms?: string | undefined;
            } | undefined;
            evidence?: {
                max_age_num_blocks?: string | undefined;
                max_age_duration?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                max_bytes?: string | undefined;
            } | undefined;
            validator?: {
                pub_key_types?: string[] | undefined;
            } | undefined;
            version?: {
                app_version?: string | undefined;
            } | undefined;
        } & {
            block?: ({
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
                time_iota_ms?: string | undefined;
            } & {
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
                time_iota_ms?: string | undefined;
            } & Record<Exclude<keyof I["consensus_params"]["block"], keyof import("../types/params").BlockParams>, never>) | undefined;
            evidence?: ({
                max_age_num_blocks?: string | undefined;
                max_age_duration?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                max_bytes?: string | undefined;
            } & {
                max_age_num_blocks?: string | undefined;
                max_age_duration?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["consensus_params"]["evidence"]["max_age_duration"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
                max_bytes?: string | undefined;
            } & Record<Exclude<keyof I["consensus_params"]["evidence"], keyof import("../types/params").EvidenceParams>, never>) | undefined;
            validator?: ({
                pub_key_types?: string[] | undefined;
            } & {
                pub_key_types?: (string[] & string[] & Record<Exclude<keyof I["consensus_params"]["validator"]["pub_key_types"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["consensus_params"]["validator"], "pub_key_types">, never>) | undefined;
            version?: ({
                app_version?: string | undefined;
            } & {
                app_version?: string | undefined;
            } & Record<Exclude<keyof I["consensus_params"]["version"], "app_version">, never>) | undefined;
        } & Record<Exclude<keyof I["consensus_params"], keyof ConsensusParams>, never>) | undefined;
        last_height_changed?: string | undefined;
    } & Record<Exclude<keyof I, keyof ConsensusParamsInfo>, never>>(object: I): ConsensusParamsInfo;
};
export declare const Version: {
    encode(message: Version, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Version;
    fromJSON(object: any): Version;
    toJSON(message: Version): unknown;
    fromPartial<I extends {
        consensus?: {
            block?: string | undefined;
            app?: string | undefined;
        } | undefined;
        software?: string | undefined;
    } & {
        consensus?: ({
            block?: string | undefined;
            app?: string | undefined;
        } & {
            block?: string | undefined;
            app?: string | undefined;
        } & Record<Exclude<keyof I["consensus"], keyof Consensus>, never>) | undefined;
        software?: string | undefined;
    } & Record<Exclude<keyof I, keyof Version>, never>>(object: I): Version;
};
export declare const State: {
    encode(message: State, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): State;
    fromJSON(object: any): State;
    toJSON(message: State): unknown;
    fromPartial<I extends {
        version?: {
            consensus?: {
                block?: string | undefined;
                app?: string | undefined;
            } | undefined;
            software?: string | undefined;
        } | undefined;
        chain_id?: string | undefined;
        initial_height?: string | undefined;
        last_block_height?: string | undefined;
        last_block_id?: {
            hash?: Uint8Array | undefined;
            part_set_header?: {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        last_block_time?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
        next_validators?: {
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
        validators?: {
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
        last_validators?: {
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
        last_height_validators_changed?: string | undefined;
        consensus_params?: {
            block?: {
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
                time_iota_ms?: string | undefined;
            } | undefined;
            evidence?: {
                max_age_num_blocks?: string | undefined;
                max_age_duration?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                max_bytes?: string | undefined;
            } | undefined;
            validator?: {
                pub_key_types?: string[] | undefined;
            } | undefined;
            version?: {
                app_version?: string | undefined;
            } | undefined;
        } | undefined;
        last_height_consensus_params_changed?: string | undefined;
        last_results_hash?: Uint8Array | undefined;
        app_hash?: Uint8Array | undefined;
    } & {
        version?: ({
            consensus?: {
                block?: string | undefined;
                app?: string | undefined;
            } | undefined;
            software?: string | undefined;
        } & {
            consensus?: ({
                block?: string | undefined;
                app?: string | undefined;
            } & {
                block?: string | undefined;
                app?: string | undefined;
            } & Record<Exclude<keyof I["version"]["consensus"], keyof Consensus>, never>) | undefined;
            software?: string | undefined;
        } & Record<Exclude<keyof I["version"], keyof Version>, never>) | undefined;
        chain_id?: string | undefined;
        initial_height?: string | undefined;
        last_block_height?: string | undefined;
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
            } & Record<Exclude<keyof I["last_block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
        } & Record<Exclude<keyof I["last_block_id"], keyof BlockID>, never>) | undefined;
        last_block_time?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["last_block_time"], keyof Timestamp>, never>) | undefined;
        next_validators?: ({
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
                } & Record<Exclude<keyof I["next_validators"]["validators"][number]["pub_key"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & Record<Exclude<keyof I["next_validators"]["validators"][number], keyof import("../types/validator").Validator>, never>)[] & Record<Exclude<keyof I["next_validators"]["validators"], keyof {
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
                } & Record<Exclude<keyof I["next_validators"]["proposer"]["pub_key"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & Record<Exclude<keyof I["next_validators"]["proposer"], keyof import("../types/validator").Validator>, never>) | undefined;
            total_voting_power?: string | undefined;
        } & Record<Exclude<keyof I["next_validators"], keyof ValidatorSet>, never>) | undefined;
        validators?: ({
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
                } & Record<Exclude<keyof I["validators"]["validators"][number]["pub_key"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & Record<Exclude<keyof I["validators"]["validators"][number], keyof import("../types/validator").Validator>, never>)[] & Record<Exclude<keyof I["validators"]["validators"], keyof {
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
                } & Record<Exclude<keyof I["validators"]["proposer"]["pub_key"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & Record<Exclude<keyof I["validators"]["proposer"], keyof import("../types/validator").Validator>, never>) | undefined;
            total_voting_power?: string | undefined;
        } & Record<Exclude<keyof I["validators"], keyof ValidatorSet>, never>) | undefined;
        last_validators?: ({
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
                } & Record<Exclude<keyof I["last_validators"]["validators"][number]["pub_key"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & Record<Exclude<keyof I["last_validators"]["validators"][number], keyof import("../types/validator").Validator>, never>)[] & Record<Exclude<keyof I["last_validators"]["validators"], keyof {
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
                } & Record<Exclude<keyof I["last_validators"]["proposer"]["pub_key"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & Record<Exclude<keyof I["last_validators"]["proposer"], keyof import("../types/validator").Validator>, never>) | undefined;
            total_voting_power?: string | undefined;
        } & Record<Exclude<keyof I["last_validators"], keyof ValidatorSet>, never>) | undefined;
        last_height_validators_changed?: string | undefined;
        consensus_params?: ({
            block?: {
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
                time_iota_ms?: string | undefined;
            } | undefined;
            evidence?: {
                max_age_num_blocks?: string | undefined;
                max_age_duration?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                max_bytes?: string | undefined;
            } | undefined;
            validator?: {
                pub_key_types?: string[] | undefined;
            } | undefined;
            version?: {
                app_version?: string | undefined;
            } | undefined;
        } & {
            block?: ({
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
                time_iota_ms?: string | undefined;
            } & {
                max_bytes?: string | undefined;
                max_gas?: string | undefined;
                time_iota_ms?: string | undefined;
            } & Record<Exclude<keyof I["consensus_params"]["block"], keyof import("../types/params").BlockParams>, never>) | undefined;
            evidence?: ({
                max_age_num_blocks?: string | undefined;
                max_age_duration?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                max_bytes?: string | undefined;
            } & {
                max_age_num_blocks?: string | undefined;
                max_age_duration?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["consensus_params"]["evidence"]["max_age_duration"], keyof import("../../google/protobuf/duration").Duration>, never>) | undefined;
                max_bytes?: string | undefined;
            } & Record<Exclude<keyof I["consensus_params"]["evidence"], keyof import("../types/params").EvidenceParams>, never>) | undefined;
            validator?: ({
                pub_key_types?: string[] | undefined;
            } & {
                pub_key_types?: (string[] & string[] & Record<Exclude<keyof I["consensus_params"]["validator"]["pub_key_types"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["consensus_params"]["validator"], "pub_key_types">, never>) | undefined;
            version?: ({
                app_version?: string | undefined;
            } & {
                app_version?: string | undefined;
            } & Record<Exclude<keyof I["consensus_params"]["version"], "app_version">, never>) | undefined;
        } & Record<Exclude<keyof I["consensus_params"], keyof ConsensusParams>, never>) | undefined;
        last_height_consensus_params_changed?: string | undefined;
        last_results_hash?: Uint8Array | undefined;
        app_hash?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof State>, never>>(object: I): State;
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
//# sourceMappingURL=types.d.ts.map