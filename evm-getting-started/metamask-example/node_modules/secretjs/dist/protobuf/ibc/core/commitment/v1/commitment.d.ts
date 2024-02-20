import * as _m0 from "protobufjs/minimal";
import { CommitmentProof } from "../../../../confio/proofs";
export declare const protobufPackage = "ibc.core.commitment.v1";
/**
 * MerkleRoot defines a merkle root hash.
 * In the Cosmos SDK, the AppHash of a block header becomes the root.
 */
export interface MerkleRoot {
    hash: Uint8Array;
}
/**
 * MerklePrefix is merkle path prefixed to the key.
 * The constructed key from the Path and the key will be append(Path.KeyPath,
 * append(Path.KeyPrefix, key...))
 */
export interface MerklePrefix {
    key_prefix: Uint8Array;
}
/**
 * MerklePath is the path used to verify commitment proofs, which can be an
 * arbitrary structured object (defined by a commitment type).
 * MerklePath is represented from root-to-leaf
 */
export interface MerklePath {
    key_path: string[];
}
/**
 * MerkleProof is a wrapper type over a chain of CommitmentProofs.
 * It demonstrates membership or non-membership for an element or set of
 * elements, verifiable in conjunction with a known commitment root. Proofs
 * should be succinct.
 * MerkleProofs are ordered from leaf-to-root
 */
export interface MerkleProof {
    proofs: CommitmentProof[];
}
export declare const MerkleRoot: {
    encode(message: MerkleRoot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MerkleRoot;
    fromJSON(object: any): MerkleRoot;
    toJSON(message: MerkleRoot): unknown;
    fromPartial<I extends {
        hash?: Uint8Array | undefined;
    } & {
        hash?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "hash">, never>>(object: I): MerkleRoot;
};
export declare const MerklePrefix: {
    encode(message: MerklePrefix, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MerklePrefix;
    fromJSON(object: any): MerklePrefix;
    toJSON(message: MerklePrefix): unknown;
    fromPartial<I extends {
        key_prefix?: Uint8Array | undefined;
    } & {
        key_prefix?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "key_prefix">, never>>(object: I): MerklePrefix;
};
export declare const MerklePath: {
    encode(message: MerklePath, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MerklePath;
    fromJSON(object: any): MerklePath;
    toJSON(message: MerklePath): unknown;
    fromPartial<I extends {
        key_path?: string[] | undefined;
    } & {
        key_path?: (string[] & string[] & Record<Exclude<keyof I["key_path"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "key_path">, never>>(object: I): MerklePath;
};
export declare const MerkleProof: {
    encode(message: MerkleProof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MerkleProof;
    fromJSON(object: any): MerkleProof;
    toJSON(message: MerkleProof): unknown;
    fromPartial<I extends {
        proofs?: {
            exist?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                    prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                    length?: import("../../../../confio/proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            nonexist?: {
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookup_inners?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        proofs?: ({
            exist?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                    prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                    length?: import("../../../../confio/proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            nonexist?: {
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookup_inners?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[] & ({
            exist?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                    prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                    length?: import("../../../../confio/proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            nonexist?: {
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookup_inners?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            exist?: ({
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                    prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                    length?: import("../../../../confio/proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: ({
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
                } & Record<Exclude<keyof I["proofs"][number]["exist"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>, never>) | undefined;
                path?: ({
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] & ({
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["exist"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["exist"]["path"], keyof {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["proofs"][number]["exist"], keyof import("../../../../confio/proofs").ExistenceProof>, never>) | undefined;
            nonexist?: ({
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                key?: Uint8Array | undefined;
                left?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: ({
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
                    } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["left"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>, never>) | undefined;
                    path?: ({
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] & ({
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["left"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["nonexist"]["left"]["path"], keyof {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["left"], keyof import("../../../../confio/proofs").ExistenceProof>, never>) | undefined;
                right?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: ({
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
                    } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["right"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>, never>) | undefined;
                    path?: ({
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] & ({
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["right"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["nonexist"]["right"]["path"], keyof {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["nonexist"]["right"], keyof import("../../../../confio/proofs").ExistenceProof>, never>) | undefined;
            } & Record<Exclude<keyof I["proofs"][number]["nonexist"], keyof import("../../../../confio/proofs").NonExistenceProof>, never>) | undefined;
            batch?: ({
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                entries?: ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] & ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    exist?: ({
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: ({
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
                        } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>, never>) | undefined;
                        path?: ({
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] & ({
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        } & {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"]["path"], keyof {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["exist"], keyof import("../../../../confio/proofs").ExistenceProof>, never>) | undefined;
                    nonexist?: ({
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        left?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
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
                            } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>, never>) | undefined;
                            path?: ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] & ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"]["path"], keyof {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["left"], keyof import("../../../../confio/proofs").ExistenceProof>, never>) | undefined;
                        right?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
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
                            } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>, never>) | undefined;
                            path?: ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] & ({
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["path"][number], keyof import("../../../../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"]["path"], keyof {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"]["right"], keyof import("../../../../confio/proofs").ExistenceProof>, never>) | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number]["nonexist"], keyof import("../../../../confio/proofs").NonExistenceProof>, never>) | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"][number], keyof import("../../../../confio/proofs").BatchEntry>, never>)[] & Record<Exclude<keyof I["proofs"][number]["batch"]["entries"], keyof {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["proofs"][number]["batch"], "entries">, never>) | undefined;
            compressed?: ({
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookup_inners?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                entries?: ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] & ({
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    exist?: ({
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: ({
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
                        } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["exist"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>, never>) | undefined;
                        path?: (number[] & number[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["exist"]["path"], keyof number[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["exist"], keyof import("../../../../confio/proofs").CompressedExistenceProof>, never>) | undefined;
                    nonexist?: ({
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        left?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
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
                            } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>, never>) | undefined;
                            path?: (number[] & number[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"]["path"], keyof number[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["left"], keyof import("../../../../confio/proofs").CompressedExistenceProof>, never>) | undefined;
                        right?: ({
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } & {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: ({
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
                            } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"]["leaf"], keyof import("../../../../confio/proofs").LeafOp>, never>) | undefined;
                            path?: (number[] & number[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"]["path"], keyof number[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"]["right"], keyof import("../../../../confio/proofs").CompressedExistenceProof>, never>) | undefined;
                    } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number]["nonexist"], keyof import("../../../../confio/proofs").CompressedNonExistenceProof>, never>) | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"][number], keyof import("../../../../confio/proofs").CompressedBatchEntry>, never>)[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["entries"], keyof {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
                lookup_inners?: ({
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] & ({
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["proofs"][number]["compressed"]["lookup_inners"][number], keyof import("../../../../confio/proofs").InnerOp>, never>)[] & Record<Exclude<keyof I["proofs"][number]["compressed"]["lookup_inners"], keyof {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["proofs"][number]["compressed"], keyof import("../../../../confio/proofs").CompressedBatchProof>, never>) | undefined;
        } & Record<Exclude<keyof I["proofs"][number], keyof CommitmentProof>, never>)[] & Record<Exclude<keyof I["proofs"], keyof {
            exist?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
                leaf?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                    prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                    length?: import("../../../../confio/proofs").LengthOp | undefined;
                    prefix?: Uint8Array | undefined;
                } | undefined;
                path?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
            nonexist?: {
                key?: Uint8Array | undefined;
                left?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
                right?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    leaf?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                        prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                        length?: import("../../../../confio/proofs").LengthOp | undefined;
                        prefix?: Uint8Array | undefined;
                    } | undefined;
                    path?: {
                        hash?: import("../../../../confio/proofs").HashOp | undefined;
                        prefix?: Uint8Array | undefined;
                        suffix?: Uint8Array | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            batch?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prefix?: Uint8Array | undefined;
                            suffix?: Uint8Array | undefined;
                        }[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prefix?: Uint8Array | undefined;
                                suffix?: Uint8Array | undefined;
                            }[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
            compressed?: {
                entries?: {
                    exist?: {
                        key?: Uint8Array | undefined;
                        value?: Uint8Array | undefined;
                        leaf?: {
                            hash?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                            prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                            length?: import("../../../../confio/proofs").LengthOp | undefined;
                            prefix?: Uint8Array | undefined;
                        } | undefined;
                        path?: number[] | undefined;
                    } | undefined;
                    nonexist?: {
                        key?: Uint8Array | undefined;
                        left?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                        right?: {
                            key?: Uint8Array | undefined;
                            value?: Uint8Array | undefined;
                            leaf?: {
                                hash?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_key?: import("../../../../confio/proofs").HashOp | undefined;
                                prehash_value?: import("../../../../confio/proofs").HashOp | undefined;
                                length?: import("../../../../confio/proofs").LengthOp | undefined;
                                prefix?: Uint8Array | undefined;
                            } | undefined;
                            path?: number[] | undefined;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                lookup_inners?: {
                    hash?: import("../../../../confio/proofs").HashOp | undefined;
                    prefix?: Uint8Array | undefined;
                    suffix?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "proofs">, never>>(object: I): MerkleProof;
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
//# sourceMappingURL=commitment.d.ts.map