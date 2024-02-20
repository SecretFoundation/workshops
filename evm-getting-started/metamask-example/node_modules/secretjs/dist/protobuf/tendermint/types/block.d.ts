import * as _m0 from "protobufjs/minimal";
import { Header, Data, Commit } from "./types";
import { EvidenceList } from "./evidence";
export declare const protobufPackage = "tendermint.types";
export interface Block {
    header?: Header;
    data?: Data;
    evidence?: EvidenceList;
    last_commit?: Commit;
}
export declare const Block: {
    encode(message: Block, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Block;
    fromJSON(object: any): Block;
    toJSON(message: Block): unknown;
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
        data?: {
            txs?: Uint8Array[] | undefined;
        } | undefined;
        evidence?: {
            evidence?: {
                duplicate_vote_evidence?: {
                    vote_a?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | undefined;
                        round?: number | undefined;
                        block_id?: {
                            hash?: Uint8Array | undefined;
                            part_set_header?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validator_address?: Uint8Array | undefined;
                        validator_index?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    vote_b?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | undefined;
                        round?: number | undefined;
                        block_id?: {
                            hash?: Uint8Array | undefined;
                            part_set_header?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validator_address?: Uint8Array | undefined;
                        validator_index?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    total_voting_power?: string | undefined;
                    validator_power?: string | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                light_client_attack_evidence?: {
                    conflicting_block?: {
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
                                    block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                    } | undefined;
                    common_height?: string | undefined;
                    byzantine_validators?: {
                        address?: Uint8Array | undefined;
                        pub_key?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        voting_power?: string | undefined;
                        proposer_priority?: string | undefined;
                    }[] | undefined;
                    total_voting_power?: string | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
        last_commit?: {
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
                block_id_flag?: import("./types").BlockIDFlag | undefined;
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
            } & Record<Exclude<keyof I["header"]["version"], keyof import("../version/types").Consensus>, never>) | undefined;
            chain_id?: string | undefined;
            height?: string | undefined;
            time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["header"]["time"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
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
                } & Record<Exclude<keyof I["header"]["last_block_id"]["part_set_header"], keyof import("./types").PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["header"]["last_block_id"], keyof import("./types").BlockID>, never>) | undefined;
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
            } & Record<Exclude<keyof I["header"]["encrypted_random"], keyof import("./types").EncryptedRandom>, never>) | undefined;
        } & Record<Exclude<keyof I["header"], keyof Header>, never>) | undefined;
        data?: ({
            txs?: Uint8Array[] | undefined;
        } & {
            txs?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["data"]["txs"], keyof Uint8Array[]>, never>) | undefined;
        } & Record<Exclude<keyof I["data"], "txs">, never>) | undefined;
        evidence?: ({
            evidence?: {
                duplicate_vote_evidence?: {
                    vote_a?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | undefined;
                        round?: number | undefined;
                        block_id?: {
                            hash?: Uint8Array | undefined;
                            part_set_header?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validator_address?: Uint8Array | undefined;
                        validator_index?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    vote_b?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | undefined;
                        round?: number | undefined;
                        block_id?: {
                            hash?: Uint8Array | undefined;
                            part_set_header?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validator_address?: Uint8Array | undefined;
                        validator_index?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    total_voting_power?: string | undefined;
                    validator_power?: string | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                light_client_attack_evidence?: {
                    conflicting_block?: {
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
                                    block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                    } | undefined;
                    common_height?: string | undefined;
                    byzantine_validators?: {
                        address?: Uint8Array | undefined;
                        pub_key?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        voting_power?: string | undefined;
                        proposer_priority?: string | undefined;
                    }[] | undefined;
                    total_voting_power?: string | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            evidence?: ({
                duplicate_vote_evidence?: {
                    vote_a?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | undefined;
                        round?: number | undefined;
                        block_id?: {
                            hash?: Uint8Array | undefined;
                            part_set_header?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validator_address?: Uint8Array | undefined;
                        validator_index?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    vote_b?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | undefined;
                        round?: number | undefined;
                        block_id?: {
                            hash?: Uint8Array | undefined;
                            part_set_header?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validator_address?: Uint8Array | undefined;
                        validator_index?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    total_voting_power?: string | undefined;
                    validator_power?: string | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                light_client_attack_evidence?: {
                    conflicting_block?: {
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
                                    block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                    } | undefined;
                    common_height?: string | undefined;
                    byzantine_validators?: {
                        address?: Uint8Array | undefined;
                        pub_key?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        voting_power?: string | undefined;
                        proposer_priority?: string | undefined;
                    }[] | undefined;
                    total_voting_power?: string | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            }[] & ({
                duplicate_vote_evidence?: {
                    vote_a?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | undefined;
                        round?: number | undefined;
                        block_id?: {
                            hash?: Uint8Array | undefined;
                            part_set_header?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validator_address?: Uint8Array | undefined;
                        validator_index?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    vote_b?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | undefined;
                        round?: number | undefined;
                        block_id?: {
                            hash?: Uint8Array | undefined;
                            part_set_header?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validator_address?: Uint8Array | undefined;
                        validator_index?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    total_voting_power?: string | undefined;
                    validator_power?: string | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                light_client_attack_evidence?: {
                    conflicting_block?: {
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
                                    block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                    } | undefined;
                    common_height?: string | undefined;
                    byzantine_validators?: {
                        address?: Uint8Array | undefined;
                        pub_key?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        voting_power?: string | undefined;
                        proposer_priority?: string | undefined;
                    }[] | undefined;
                    total_voting_power?: string | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            } & {
                duplicate_vote_evidence?: ({
                    vote_a?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | undefined;
                        round?: number | undefined;
                        block_id?: {
                            hash?: Uint8Array | undefined;
                            part_set_header?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validator_address?: Uint8Array | undefined;
                        validator_index?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    vote_b?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | undefined;
                        round?: number | undefined;
                        block_id?: {
                            hash?: Uint8Array | undefined;
                            part_set_header?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validator_address?: Uint8Array | undefined;
                        validator_index?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    total_voting_power?: string | undefined;
                    validator_power?: string | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    vote_a?: ({
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | undefined;
                        round?: number | undefined;
                        block_id?: {
                            hash?: Uint8Array | undefined;
                            part_set_header?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validator_address?: Uint8Array | undefined;
                        validator_index?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } & {
                        type?: import("./types").SignedMsgType | undefined;
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
                            } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_a"]["block_id"]["part_set_header"], keyof import("./types").PartSetHeader>, never>) | undefined;
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_a"]["block_id"], keyof import("./types").BlockID>, never>) | undefined;
                        timestamp?: ({
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_a"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                        validator_address?: Uint8Array | undefined;
                        validator_index?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_a"], keyof import("./types").Vote>, never>) | undefined;
                    vote_b?: ({
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | undefined;
                        round?: number | undefined;
                        block_id?: {
                            hash?: Uint8Array | undefined;
                            part_set_header?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validator_address?: Uint8Array | undefined;
                        validator_index?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } & {
                        type?: import("./types").SignedMsgType | undefined;
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
                            } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_b"]["block_id"]["part_set_header"], keyof import("./types").PartSetHeader>, never>) | undefined;
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_b"]["block_id"], keyof import("./types").BlockID>, never>) | undefined;
                        timestamp?: ({
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_b"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                        validator_address?: Uint8Array | undefined;
                        validator_index?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_b"], keyof import("./types").Vote>, never>) | undefined;
                    total_voting_power?: string | undefined;
                    validator_power?: string | undefined;
                    timestamp?: ({
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicate_vote_evidence"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["duplicate_vote_evidence"], keyof import("./evidence").DuplicateVoteEvidence>, never>) | undefined;
                light_client_attack_evidence?: ({
                    conflicting_block?: {
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
                                    block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                    } | undefined;
                    common_height?: string | undefined;
                    byzantine_validators?: {
                        address?: Uint8Array | undefined;
                        pub_key?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        voting_power?: string | undefined;
                        proposer_priority?: string | undefined;
                    }[] | undefined;
                    total_voting_power?: string | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    conflicting_block?: ({
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
                                    block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                                    block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["version"], keyof import("../version/types").Consensus>, never>) | undefined;
                                chain_id?: string | undefined;
                                height?: string | undefined;
                                time?: ({
                                    seconds?: string | undefined;
                                    nanos?: number | undefined;
                                } & {
                                    seconds?: string | undefined;
                                    nanos?: number | undefined;
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["time"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["last_block_id"]["part_set_header"], keyof import("./types").PartSetHeader>, never>) | undefined;
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["last_block_id"], keyof import("./types").BlockID>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["encrypted_random"], keyof import("./types").EncryptedRandom>, never>) | undefined;
                            } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"], keyof Header>, never>) | undefined;
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
                                    block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["block_id"]["part_set_header"], keyof import("./types").PartSetHeader>, never>) | undefined;
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["block_id"], keyof import("./types").BlockID>, never>) | undefined;
                                signatures?: ({
                                    block_id_flag?: import("./types").BlockIDFlag | undefined;
                                    validator_address?: Uint8Array | undefined;
                                    timestamp?: {
                                        seconds?: string | undefined;
                                        nanos?: number | undefined;
                                    } | undefined;
                                    signature?: Uint8Array | undefined;
                                }[] & ({
                                    block_id_flag?: import("./types").BlockIDFlag | undefined;
                                    validator_address?: Uint8Array | undefined;
                                    timestamp?: {
                                        seconds?: string | undefined;
                                        nanos?: number | undefined;
                                    } | undefined;
                                    signature?: Uint8Array | undefined;
                                } & {
                                    block_id_flag?: import("./types").BlockIDFlag | undefined;
                                    validator_address?: Uint8Array | undefined;
                                    timestamp?: ({
                                        seconds?: string | undefined;
                                        nanos?: number | undefined;
                                    } & {
                                        seconds?: string | undefined;
                                        nanos?: number | undefined;
                                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["signatures"][number]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                                    signature?: Uint8Array | undefined;
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["signatures"][number], keyof import("./types").CommitSig>, never>)[] & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["signatures"], keyof {
                                    block_id_flag?: import("./types").BlockIDFlag | undefined;
                                    validator_address?: Uint8Array | undefined;
                                    timestamp?: {
                                        seconds?: string | undefined;
                                        nanos?: number | undefined;
                                    } | undefined;
                                    signature?: Uint8Array | undefined;
                                }[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"], keyof Commit>, never>) | undefined;
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"], keyof import("./types").SignedHeader>, never>) | undefined;
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
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["validators"][number]["pub_key"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                                voting_power?: string | undefined;
                                proposer_priority?: string | undefined;
                            } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["validators"][number], keyof import("./validator").Validator>, never>)[] & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["validators"], keyof {
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
                                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["proposer"]["pub_key"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                                voting_power?: string | undefined;
                                proposer_priority?: string | undefined;
                            } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["proposer"], keyof import("./validator").Validator>, never>) | undefined;
                            total_voting_power?: string | undefined;
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"], keyof import("./validator").ValidatorSet>, never>) | undefined;
                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"], keyof import("./types").LightBlock>, never>) | undefined;
                    common_height?: string | undefined;
                    byzantine_validators?: ({
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
                        } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["byzantine_validators"][number]["pub_key"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                        voting_power?: string | undefined;
                        proposer_priority?: string | undefined;
                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["byzantine_validators"][number], keyof import("./validator").Validator>, never>)[] & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["byzantine_validators"], keyof {
                        address?: Uint8Array | undefined;
                        pub_key?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        voting_power?: string | undefined;
                        proposer_priority?: string | undefined;
                    }[]>, never>) | undefined;
                    total_voting_power?: string | undefined;
                    timestamp?: ({
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                } & Record<Exclude<keyof I["evidence"]["evidence"][number]["light_client_attack_evidence"], keyof import("./evidence").LightClientAttackEvidence>, never>) | undefined;
            } & Record<Exclude<keyof I["evidence"]["evidence"][number], keyof import("./evidence").Evidence>, never>)[] & Record<Exclude<keyof I["evidence"]["evidence"], keyof {
                duplicate_vote_evidence?: {
                    vote_a?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | undefined;
                        round?: number | undefined;
                        block_id?: {
                            hash?: Uint8Array | undefined;
                            part_set_header?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validator_address?: Uint8Array | undefined;
                        validator_index?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    vote_b?: {
                        type?: import("./types").SignedMsgType | undefined;
                        height?: string | undefined;
                        round?: number | undefined;
                        block_id?: {
                            hash?: Uint8Array | undefined;
                            part_set_header?: {
                                total?: number | undefined;
                                hash?: Uint8Array | undefined;
                            } | undefined;
                        } | undefined;
                        timestamp?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                        validator_address?: Uint8Array | undefined;
                        validator_index?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } | undefined;
                    total_voting_power?: string | undefined;
                    validator_power?: string | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
                light_client_attack_evidence?: {
                    conflicting_block?: {
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
                                    block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                    } | undefined;
                    common_height?: string | undefined;
                    byzantine_validators?: {
                        address?: Uint8Array | undefined;
                        pub_key?: {
                            ed25519?: Uint8Array | undefined;
                            secp256k1?: Uint8Array | undefined;
                        } | undefined;
                        voting_power?: string | undefined;
                        proposer_priority?: string | undefined;
                    }[] | undefined;
                    total_voting_power?: string | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["evidence"], "evidence">, never>) | undefined;
        last_commit?: ({
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
                block_id_flag?: import("./types").BlockIDFlag | undefined;
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
                } & Record<Exclude<keyof I["last_commit"]["block_id"]["part_set_header"], keyof import("./types").PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["last_commit"]["block_id"], keyof import("./types").BlockID>, never>) | undefined;
            signatures?: ({
                block_id_flag?: import("./types").BlockIDFlag | undefined;
                validator_address?: Uint8Array | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            }[] & ({
                block_id_flag?: import("./types").BlockIDFlag | undefined;
                validator_address?: Uint8Array | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            } & {
                block_id_flag?: import("./types").BlockIDFlag | undefined;
                validator_address?: Uint8Array | undefined;
                timestamp?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["last_commit"]["signatures"][number]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                signature?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["last_commit"]["signatures"][number], keyof import("./types").CommitSig>, never>)[] & Record<Exclude<keyof I["last_commit"]["signatures"], keyof {
                block_id_flag?: import("./types").BlockIDFlag | undefined;
                validator_address?: Uint8Array | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["last_commit"], keyof Commit>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Block>, never>>(object: I): Block;
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
//# sourceMappingURL=block.d.ts.map