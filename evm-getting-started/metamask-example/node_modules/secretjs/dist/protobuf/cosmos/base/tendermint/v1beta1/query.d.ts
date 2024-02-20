import * as _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { BlockID } from "../../../../tendermint/types/types";
import { Block } from "../../../../tendermint/types/block";
import { DefaultNodeInfo } from "../../../../tendermint/p2p/types";
export declare const protobufPackage = "cosmos.base.tendermint.v1beta1";
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequest {
    height: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponse {
    block_height: string;
    validators: Validator[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequest {
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponse {
    block_height: string;
    validators: Validator[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
/** Validator is the type for the validator-set. */
export interface Validator {
    address: string;
    pub_key?: Any;
    voting_power: string;
    proposer_priority: string;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequest {
    height: string;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponse {
    block_id?: BlockID;
    block?: Block;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequest {
}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponse {
    block_id?: BlockID;
    block?: Block;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequest {
}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponse {
    syncing: boolean;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequest {
}
/** GetNodeInfoResponse is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponse {
    default_node_info?: DefaultNodeInfo;
    application_version?: VersionInfo;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfo {
    name: string;
    app_name: string;
    version: string;
    git_commit: string;
    build_tags: string;
    go_version: string;
    build_deps: Module[];
    /** Since: cosmos-sdk 0.43 */
    cosmos_sdk_version: string;
}
/** Module is the type for VersionInfo */
export interface Module {
    /** module path */
    path: string;
    /** module version */
    version: string;
    /** checksum */
    sum: string;
}
export declare const GetValidatorSetByHeightRequest: {
    encode(message: GetValidatorSetByHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetValidatorSetByHeightRequest;
    fromJSON(object: any): GetValidatorSetByHeightRequest;
    toJSON(message: GetValidatorSetByHeightRequest): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        height?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GetValidatorSetByHeightRequest>, never>>(object: I): GetValidatorSetByHeightRequest;
};
export declare const GetValidatorSetByHeightResponse: {
    encode(message: GetValidatorSetByHeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetValidatorSetByHeightResponse;
    fromJSON(object: any): GetValidatorSetByHeightResponse;
    toJSON(message: GetValidatorSetByHeightResponse): unknown;
    fromPartial<I extends {
        block_height?: string | undefined;
        validators?: {
            address?: string | undefined;
            pub_key?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            voting_power?: string | undefined;
            proposer_priority?: string | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        block_height?: string | undefined;
        validators?: ({
            address?: string | undefined;
            pub_key?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            voting_power?: string | undefined;
            proposer_priority?: string | undefined;
        }[] & ({
            address?: string | undefined;
            pub_key?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            voting_power?: string | undefined;
            proposer_priority?: string | undefined;
        } & {
            address?: string | undefined;
            pub_key?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["validators"][number]["pub_key"], keyof Any>, never>) | undefined;
            voting_power?: string | undefined;
            proposer_priority?: string | undefined;
        } & Record<Exclude<keyof I["validators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["validators"], keyof {
            address?: string | undefined;
            pub_key?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            voting_power?: string | undefined;
            proposer_priority?: string | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GetValidatorSetByHeightResponse>, never>>(object: I): GetValidatorSetByHeightResponse;
};
export declare const GetLatestValidatorSetRequest: {
    encode(message: GetLatestValidatorSetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLatestValidatorSetRequest;
    fromJSON(object: any): GetLatestValidatorSetRequest;
    toJSON(message: GetLatestValidatorSetRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): GetLatestValidatorSetRequest;
};
export declare const GetLatestValidatorSetResponse: {
    encode(message: GetLatestValidatorSetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLatestValidatorSetResponse;
    fromJSON(object: any): GetLatestValidatorSetResponse;
    toJSON(message: GetLatestValidatorSetResponse): unknown;
    fromPartial<I extends {
        block_height?: string | undefined;
        validators?: {
            address?: string | undefined;
            pub_key?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            voting_power?: string | undefined;
            proposer_priority?: string | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        block_height?: string | undefined;
        validators?: ({
            address?: string | undefined;
            pub_key?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            voting_power?: string | undefined;
            proposer_priority?: string | undefined;
        }[] & ({
            address?: string | undefined;
            pub_key?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            voting_power?: string | undefined;
            proposer_priority?: string | undefined;
        } & {
            address?: string | undefined;
            pub_key?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["validators"][number]["pub_key"], keyof Any>, never>) | undefined;
            voting_power?: string | undefined;
            proposer_priority?: string | undefined;
        } & Record<Exclude<keyof I["validators"][number], keyof Validator>, never>)[] & Record<Exclude<keyof I["validators"], keyof {
            address?: string | undefined;
            pub_key?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            voting_power?: string | undefined;
            proposer_priority?: string | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GetLatestValidatorSetResponse>, never>>(object: I): GetLatestValidatorSetResponse;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        pub_key?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        voting_power?: string | undefined;
        proposer_priority?: string | undefined;
    } & {
        address?: string | undefined;
        pub_key?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["pub_key"], keyof Any>, never>) | undefined;
        voting_power?: string | undefined;
        proposer_priority?: string | undefined;
    } & Record<Exclude<keyof I, keyof Validator>, never>>(object: I): Validator;
};
export declare const GetBlockByHeightRequest: {
    encode(message: GetBlockByHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBlockByHeightRequest;
    fromJSON(object: any): GetBlockByHeightRequest;
    toJSON(message: GetBlockByHeightRequest): unknown;
    fromPartial<I extends {
        height?: string | undefined;
    } & {
        height?: string | undefined;
    } & Record<Exclude<keyof I, "height">, never>>(object: I): GetBlockByHeightRequest;
};
export declare const GetBlockByHeightResponse: {
    encode(message: GetBlockByHeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetBlockByHeightResponse;
    fromJSON(object: any): GetBlockByHeightResponse;
    toJSON(message: GetBlockByHeightResponse): unknown;
    fromPartial<I extends {
        block_id?: {
            hash?: Uint8Array | undefined;
            part_set_header?: {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        block?: {
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
    } & {
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
            } & Record<Exclude<keyof I["block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
        } & Record<Exclude<keyof I["block_id"], keyof BlockID>, never>) | undefined;
        block?: ({
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                } & Record<Exclude<keyof I["block"]["header"]["version"], keyof import("../../../../tendermint/version/types").Consensus>, never>) | undefined;
                chain_id?: string | undefined;
                height?: string | undefined;
                time?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["block"]["header"]["time"], keyof import("../../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["block"]["header"]["last_block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["block"]["header"]["last_block_id"], keyof BlockID>, never>) | undefined;
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
                } & Record<Exclude<keyof I["block"]["header"]["encrypted_random"], keyof import("../../../../tendermint/types/types").EncryptedRandom>, never>) | undefined;
            } & Record<Exclude<keyof I["block"]["header"], keyof import("../../../../tendermint/types/types").Header>, never>) | undefined;
            data?: ({
                txs?: Uint8Array[] | undefined;
            } & {
                txs?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["block"]["data"]["txs"], keyof Uint8Array[]>, never>) | undefined;
            } & Record<Exclude<keyof I["block"]["data"], "txs">, never>) | undefined;
            evidence?: ({
                evidence?: {
                    duplicate_vote_evidence?: {
                        vote_a?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_a"]["block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_a"]["block_id"], keyof BlockID>, never>) | undefined;
                            timestamp?: ({
                                seconds?: string | undefined;
                                nanos?: number | undefined;
                            } & {
                                seconds?: string | undefined;
                                nanos?: number | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_a"]["timestamp"], keyof import("../../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_a"], keyof import("../../../../tendermint/types/types").Vote>, never>) | undefined;
                        vote_b?: ({
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_b"]["block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_b"]["block_id"], keyof BlockID>, never>) | undefined;
                            timestamp?: ({
                                seconds?: string | undefined;
                                nanos?: number | undefined;
                            } & {
                                seconds?: string | undefined;
                                nanos?: number | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_b"]["timestamp"], keyof import("../../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_b"], keyof import("../../../../tendermint/types/types").Vote>, never>) | undefined;
                        total_voting_power?: string | undefined;
                        validator_power?: string | undefined;
                        timestamp?: ({
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["timestamp"], keyof import("../../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"], keyof import("../../../../tendermint/types/evidence").DuplicateVoteEvidence>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["version"], keyof import("../../../../tendermint/version/types").Consensus>, never>) | undefined;
                                    chain_id?: string | undefined;
                                    height?: string | undefined;
                                    time?: ({
                                        seconds?: string | undefined;
                                        nanos?: number | undefined;
                                    } & {
                                        seconds?: string | undefined;
                                        nanos?: number | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["time"], keyof import("../../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["last_block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["last_block_id"], keyof BlockID>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["encrypted_random"], keyof import("../../../../tendermint/types/types").EncryptedRandom>, never>) | undefined;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"], keyof import("../../../../tendermint/types/types").Header>, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["block_id"], keyof BlockID>, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["signatures"][number]["timestamp"], keyof import("../../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                                        signature?: Uint8Array | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["signatures"][number], keyof import("../../../../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["signatures"], keyof {
                                        block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validator_address?: Uint8Array | undefined;
                                        timestamp?: {
                                            seconds?: string | undefined;
                                            nanos?: number | undefined;
                                        } | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"], keyof import("../../../../tendermint/types/types").Commit>, never>) | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"], keyof import("../../../../tendermint/types/types").SignedHeader>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["validators"][number]["pub_key"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>) | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["validators"][number], keyof import("../../../../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["validators"], keyof {
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["proposer"]["pub_key"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>) | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["proposer"], keyof import("../../../../tendermint/types/validator").Validator>, never>) | undefined;
                                total_voting_power?: string | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"], keyof import("../../../../tendermint/types/validator").ValidatorSet>, never>) | undefined;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"], keyof import("../../../../tendermint/types/types").LightBlock>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["byzantine_validators"][number]["pub_key"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>) | undefined;
                            voting_power?: string | undefined;
                            proposer_priority?: string | undefined;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["byzantine_validators"][number], keyof import("../../../../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["byzantine_validators"], keyof {
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
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["timestamp"], keyof import("../../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"], keyof import("../../../../tendermint/types/evidence").LightClientAttackEvidence>, never>) | undefined;
                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number], keyof import("../../../../tendermint/types/evidence").Evidence>, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"], keyof {
                    duplicate_vote_evidence?: {
                        vote_a?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
            } & Record<Exclude<keyof I["block"]["evidence"], "evidence">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["block"]["last_commit"]["block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["block"]["last_commit"]["block_id"], keyof BlockID>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["block"]["last_commit"]["signatures"][number]["timestamp"], keyof import("../../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                    signature?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["block"]["last_commit"]["signatures"][number], keyof import("../../../../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I["block"]["last_commit"]["signatures"], keyof {
                    block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["block"]["last_commit"], keyof import("../../../../tendermint/types/types").Commit>, never>) | undefined;
        } & Record<Exclude<keyof I["block"], keyof Block>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GetBlockByHeightResponse>, never>>(object: I): GetBlockByHeightResponse;
};
export declare const GetLatestBlockRequest: {
    encode(_: GetLatestBlockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLatestBlockRequest;
    fromJSON(_: any): GetLatestBlockRequest;
    toJSON(_: GetLatestBlockRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GetLatestBlockRequest;
};
export declare const GetLatestBlockResponse: {
    encode(message: GetLatestBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetLatestBlockResponse;
    fromJSON(object: any): GetLatestBlockResponse;
    toJSON(message: GetLatestBlockResponse): unknown;
    fromPartial<I extends {
        block_id?: {
            hash?: Uint8Array | undefined;
            part_set_header?: {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        block?: {
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
    } & {
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
            } & Record<Exclude<keyof I["block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
        } & Record<Exclude<keyof I["block_id"], keyof BlockID>, never>) | undefined;
        block?: ({
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                } & Record<Exclude<keyof I["block"]["header"]["version"], keyof import("../../../../tendermint/version/types").Consensus>, never>) | undefined;
                chain_id?: string | undefined;
                height?: string | undefined;
                time?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["block"]["header"]["time"], keyof import("../../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["block"]["header"]["last_block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["block"]["header"]["last_block_id"], keyof BlockID>, never>) | undefined;
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
                } & Record<Exclude<keyof I["block"]["header"]["encrypted_random"], keyof import("../../../../tendermint/types/types").EncryptedRandom>, never>) | undefined;
            } & Record<Exclude<keyof I["block"]["header"], keyof import("../../../../tendermint/types/types").Header>, never>) | undefined;
            data?: ({
                txs?: Uint8Array[] | undefined;
            } & {
                txs?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["block"]["data"]["txs"], keyof Uint8Array[]>, never>) | undefined;
            } & Record<Exclude<keyof I["block"]["data"], "txs">, never>) | undefined;
            evidence?: ({
                evidence?: {
                    duplicate_vote_evidence?: {
                        vote_a?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_a"]["block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_a"]["block_id"], keyof BlockID>, never>) | undefined;
                            timestamp?: ({
                                seconds?: string | undefined;
                                nanos?: number | undefined;
                            } & {
                                seconds?: string | undefined;
                                nanos?: number | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_a"]["timestamp"], keyof import("../../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_a"], keyof import("../../../../tendermint/types/types").Vote>, never>) | undefined;
                        vote_b?: ({
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_b"]["block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_b"]["block_id"], keyof BlockID>, never>) | undefined;
                            timestamp?: ({
                                seconds?: string | undefined;
                                nanos?: number | undefined;
                            } & {
                                seconds?: string | undefined;
                                nanos?: number | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_b"]["timestamp"], keyof import("../../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["vote_b"], keyof import("../../../../tendermint/types/types").Vote>, never>) | undefined;
                        total_voting_power?: string | undefined;
                        validator_power?: string | undefined;
                        timestamp?: ({
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"]["timestamp"], keyof import("../../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["duplicate_vote_evidence"], keyof import("../../../../tendermint/types/evidence").DuplicateVoteEvidence>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["version"], keyof import("../../../../tendermint/version/types").Consensus>, never>) | undefined;
                                    chain_id?: string | undefined;
                                    height?: string | undefined;
                                    time?: ({
                                        seconds?: string | undefined;
                                        nanos?: number | undefined;
                                    } & {
                                        seconds?: string | undefined;
                                        nanos?: number | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["time"], keyof import("../../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["last_block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["last_block_id"], keyof BlockID>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"]["encrypted_random"], keyof import("../../../../tendermint/types/types").EncryptedRandom>, never>) | undefined;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["header"], keyof import("../../../../tendermint/types/types").Header>, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["block_id"], keyof BlockID>, never>) | undefined;
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
                                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["signatures"][number]["timestamp"], keyof import("../../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                                        signature?: Uint8Array | undefined;
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["signatures"][number], keyof import("../../../../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"]["signatures"], keyof {
                                        block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                                        validator_address?: Uint8Array | undefined;
                                        timestamp?: {
                                            seconds?: string | undefined;
                                            nanos?: number | undefined;
                                        } | undefined;
                                        signature?: Uint8Array | undefined;
                                    }[]>, never>) | undefined;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"]["commit"], keyof import("../../../../tendermint/types/types").Commit>, never>) | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["signed_header"], keyof import("../../../../tendermint/types/types").SignedHeader>, never>) | undefined;
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["validators"][number]["pub_key"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>) | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["validators"][number], keyof import("../../../../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["validators"], keyof {
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
                                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["proposer"]["pub_key"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>) | undefined;
                                    voting_power?: string | undefined;
                                    proposer_priority?: string | undefined;
                                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"]["proposer"], keyof import("../../../../tendermint/types/validator").Validator>, never>) | undefined;
                                total_voting_power?: string | undefined;
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"]["validator_set"], keyof import("../../../../tendermint/types/validator").ValidatorSet>, never>) | undefined;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["conflicting_block"], keyof import("../../../../tendermint/types/types").LightBlock>, never>) | undefined;
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
                            } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["byzantine_validators"][number]["pub_key"], keyof import("../../../../tendermint/crypto/keys").PublicKey>, never>) | undefined;
                            voting_power?: string | undefined;
                            proposer_priority?: string | undefined;
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["byzantine_validators"][number], keyof import("../../../../tendermint/types/validator").Validator>, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["byzantine_validators"], keyof {
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
                        } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"]["timestamp"], keyof import("../../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                    } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number]["light_client_attack_evidence"], keyof import("../../../../tendermint/types/evidence").LightClientAttackEvidence>, never>) | undefined;
                } & Record<Exclude<keyof I["block"]["evidence"]["evidence"][number], keyof import("../../../../tendermint/types/evidence").Evidence>, never>)[] & Record<Exclude<keyof I["block"]["evidence"]["evidence"], keyof {
                    duplicate_vote_evidence?: {
                        vote_a?: {
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
                            type?: import("../../../../tendermint/types/types").SignedMsgType | undefined;
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
            } & Record<Exclude<keyof I["block"]["evidence"], "evidence">, never>) | undefined;
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
                    } & Record<Exclude<keyof I["block"]["last_commit"]["block_id"]["part_set_header"], keyof import("../../../../tendermint/types/types").PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["block"]["last_commit"]["block_id"], keyof BlockID>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["block"]["last_commit"]["signatures"][number]["timestamp"], keyof import("../../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                    signature?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["block"]["last_commit"]["signatures"][number], keyof import("../../../../tendermint/types/types").CommitSig>, never>)[] & Record<Exclude<keyof I["block"]["last_commit"]["signatures"], keyof {
                    block_id_flag?: import("../../../../tendermint/types/types").BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["block"]["last_commit"], keyof import("../../../../tendermint/types/types").Commit>, never>) | undefined;
        } & Record<Exclude<keyof I["block"], keyof Block>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GetLatestBlockResponse>, never>>(object: I): GetLatestBlockResponse;
};
export declare const GetSyncingRequest: {
    encode(_: GetSyncingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSyncingRequest;
    fromJSON(_: any): GetSyncingRequest;
    toJSON(_: GetSyncingRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GetSyncingRequest;
};
export declare const GetSyncingResponse: {
    encode(message: GetSyncingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetSyncingResponse;
    fromJSON(object: any): GetSyncingResponse;
    toJSON(message: GetSyncingResponse): unknown;
    fromPartial<I extends {
        syncing?: boolean | undefined;
    } & {
        syncing?: boolean | undefined;
    } & Record<Exclude<keyof I, "syncing">, never>>(object: I): GetSyncingResponse;
};
export declare const GetNodeInfoRequest: {
    encode(_: GetNodeInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetNodeInfoRequest;
    fromJSON(_: any): GetNodeInfoRequest;
    toJSON(_: GetNodeInfoRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): GetNodeInfoRequest;
};
export declare const GetNodeInfoResponse: {
    encode(message: GetNodeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GetNodeInfoResponse;
    fromJSON(object: any): GetNodeInfoResponse;
    toJSON(message: GetNodeInfoResponse): unknown;
    fromPartial<I extends {
        default_node_info?: {
            protocol_version?: {
                p2p?: string | undefined;
                block?: string | undefined;
                app?: string | undefined;
            } | undefined;
            default_node_id?: string | undefined;
            listen_addr?: string | undefined;
            network?: string | undefined;
            version?: string | undefined;
            channels?: Uint8Array | undefined;
            moniker?: string | undefined;
            other?: {
                tx_index?: string | undefined;
                rpc_address?: string | undefined;
            } | undefined;
        } | undefined;
        application_version?: {
            name?: string | undefined;
            app_name?: string | undefined;
            version?: string | undefined;
            git_commit?: string | undefined;
            build_tags?: string | undefined;
            go_version?: string | undefined;
            build_deps?: {
                path?: string | undefined;
                version?: string | undefined;
                sum?: string | undefined;
            }[] | undefined;
            cosmos_sdk_version?: string | undefined;
        } | undefined;
    } & {
        default_node_info?: ({
            protocol_version?: {
                p2p?: string | undefined;
                block?: string | undefined;
                app?: string | undefined;
            } | undefined;
            default_node_id?: string | undefined;
            listen_addr?: string | undefined;
            network?: string | undefined;
            version?: string | undefined;
            channels?: Uint8Array | undefined;
            moniker?: string | undefined;
            other?: {
                tx_index?: string | undefined;
                rpc_address?: string | undefined;
            } | undefined;
        } & {
            protocol_version?: ({
                p2p?: string | undefined;
                block?: string | undefined;
                app?: string | undefined;
            } & {
                p2p?: string | undefined;
                block?: string | undefined;
                app?: string | undefined;
            } & Record<Exclude<keyof I["default_node_info"]["protocol_version"], keyof import("../../../../tendermint/p2p/types").ProtocolVersion>, never>) | undefined;
            default_node_id?: string | undefined;
            listen_addr?: string | undefined;
            network?: string | undefined;
            version?: string | undefined;
            channels?: Uint8Array | undefined;
            moniker?: string | undefined;
            other?: ({
                tx_index?: string | undefined;
                rpc_address?: string | undefined;
            } & {
                tx_index?: string | undefined;
                rpc_address?: string | undefined;
            } & Record<Exclude<keyof I["default_node_info"]["other"], keyof import("../../../../tendermint/p2p/types").DefaultNodeInfoOther>, never>) | undefined;
        } & Record<Exclude<keyof I["default_node_info"], keyof DefaultNodeInfo>, never>) | undefined;
        application_version?: ({
            name?: string | undefined;
            app_name?: string | undefined;
            version?: string | undefined;
            git_commit?: string | undefined;
            build_tags?: string | undefined;
            go_version?: string | undefined;
            build_deps?: {
                path?: string | undefined;
                version?: string | undefined;
                sum?: string | undefined;
            }[] | undefined;
            cosmos_sdk_version?: string | undefined;
        } & {
            name?: string | undefined;
            app_name?: string | undefined;
            version?: string | undefined;
            git_commit?: string | undefined;
            build_tags?: string | undefined;
            go_version?: string | undefined;
            build_deps?: ({
                path?: string | undefined;
                version?: string | undefined;
                sum?: string | undefined;
            }[] & ({
                path?: string | undefined;
                version?: string | undefined;
                sum?: string | undefined;
            } & {
                path?: string | undefined;
                version?: string | undefined;
                sum?: string | undefined;
            } & Record<Exclude<keyof I["application_version"]["build_deps"][number], keyof Module>, never>)[] & Record<Exclude<keyof I["application_version"]["build_deps"], keyof {
                path?: string | undefined;
                version?: string | undefined;
                sum?: string | undefined;
            }[]>, never>) | undefined;
            cosmos_sdk_version?: string | undefined;
        } & Record<Exclude<keyof I["application_version"], keyof VersionInfo>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GetNodeInfoResponse>, never>>(object: I): GetNodeInfoResponse;
};
export declare const VersionInfo: {
    encode(message: VersionInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VersionInfo;
    fromJSON(object: any): VersionInfo;
    toJSON(message: VersionInfo): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        app_name?: string | undefined;
        version?: string | undefined;
        git_commit?: string | undefined;
        build_tags?: string | undefined;
        go_version?: string | undefined;
        build_deps?: {
            path?: string | undefined;
            version?: string | undefined;
            sum?: string | undefined;
        }[] | undefined;
        cosmos_sdk_version?: string | undefined;
    } & {
        name?: string | undefined;
        app_name?: string | undefined;
        version?: string | undefined;
        git_commit?: string | undefined;
        build_tags?: string | undefined;
        go_version?: string | undefined;
        build_deps?: ({
            path?: string | undefined;
            version?: string | undefined;
            sum?: string | undefined;
        }[] & ({
            path?: string | undefined;
            version?: string | undefined;
            sum?: string | undefined;
        } & {
            path?: string | undefined;
            version?: string | undefined;
            sum?: string | undefined;
        } & Record<Exclude<keyof I["build_deps"][number], keyof Module>, never>)[] & Record<Exclude<keyof I["build_deps"], keyof {
            path?: string | undefined;
            version?: string | undefined;
            sum?: string | undefined;
        }[]>, never>) | undefined;
        cosmos_sdk_version?: string | undefined;
    } & Record<Exclude<keyof I, keyof VersionInfo>, never>>(object: I): VersionInfo;
};
export declare const Module: {
    encode(message: Module, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Module;
    fromJSON(object: any): Module;
    toJSON(message: Module): unknown;
    fromPartial<I extends {
        path?: string | undefined;
        version?: string | undefined;
        sum?: string | undefined;
    } & {
        path?: string | undefined;
        version?: string | undefined;
        sum?: string | undefined;
    } & Record<Exclude<keyof I, keyof Module>, never>>(object: I): Module;
};
/** Service defines the gRPC querier service for tendermint queries. */
export interface Service {
    /** GetNodeInfo queries the current node info. */
    GetNodeInfo(request: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
    /** GetSyncing queries node syncing. */
    GetSyncing(request: GetSyncingRequest): Promise<GetSyncingResponse>;
    /** GetLatestBlock returns the latest block. */
    GetLatestBlock(request: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
    /** GetBlockByHeight queries block for given height. */
    GetBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
    /** GetLatestValidatorSet queries latest validator-set. */
    GetLatestValidatorSet(request: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
    /** GetValidatorSetByHeight queries validator-set at a given height. */
    GetValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    GetNodeInfo(request: GetNodeInfoRequest): Promise<GetNodeInfoResponse>;
    GetSyncing(request: GetSyncingRequest): Promise<GetSyncingResponse>;
    GetLatestBlock(request: GetLatestBlockRequest): Promise<GetLatestBlockResponse>;
    GetBlockByHeight(request: GetBlockByHeightRequest): Promise<GetBlockByHeightResponse>;
    GetLatestValidatorSet(request: GetLatestValidatorSetRequest): Promise<GetLatestValidatorSetResponse>;
    GetValidatorSetByHeight(request: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
//# sourceMappingURL=query.d.ts.map