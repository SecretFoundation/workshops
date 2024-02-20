declare type Absent<T, K extends keyof T> = {
    [k in Exclude<keyof T, K>]?: undefined;
};
declare type OneOf<T> = {
    [k in keyof T]?: undefined;
} | (keyof T extends infer K ? (K extends string & keyof T ? {
    [k in K]: T[K];
} & Absent<T, K> : never) : never);
export declare enum HashOp {
    NO_HASH = "NO_HASH",
    SHA256 = "SHA256",
    SHA512 = "SHA512",
    KECCAK = "KECCAK",
    RIPEMD160 = "RIPEMD160",
    BITCOIN = "BITCOIN"
}
export declare enum LengthOp {
    NO_PREFIX = "NO_PREFIX",
    VAR_PROTO = "VAR_PROTO",
    VAR_RLP = "VAR_RLP",
    FIXED32_BIG = "FIXED32_BIG",
    FIXED32_LITTLE = "FIXED32_LITTLE",
    FIXED64_BIG = "FIXED64_BIG",
    FIXED64_LITTLE = "FIXED64_LITTLE",
    REQUIRE_32_BYTES = "REQUIRE_32_BYTES",
    REQUIRE_64_BYTES = "REQUIRE_64_BYTES"
}
export declare type ExistenceProof = {
    key?: Uint8Array;
    value?: Uint8Array;
    leaf?: LeafOp;
    path?: InnerOp[];
};
export declare type NonExistenceProof = {
    key?: Uint8Array;
    left?: ExistenceProof;
    right?: ExistenceProof;
};
declare type BaseCommitmentProof = {};
export declare type CommitmentProof = BaseCommitmentProof & OneOf<{
    exist: ExistenceProof;
    nonexist: NonExistenceProof;
    batch: BatchProof;
    compressed: CompressedBatchProof;
}>;
export declare type LeafOp = {
    hash?: HashOp;
    prehash_key?: HashOp;
    prehash_value?: HashOp;
    length?: LengthOp;
    prefix?: Uint8Array;
};
export declare type InnerOp = {
    hash?: HashOp;
    prefix?: Uint8Array;
    suffix?: Uint8Array;
};
export declare type ProofSpec = {
    leaf_spec?: LeafOp;
    inner_spec?: InnerSpec;
    max_depth?: number;
    min_depth?: number;
};
export declare type InnerSpec = {
    child_order?: number[];
    child_size?: number;
    min_prefix_length?: number;
    max_prefix_length?: number;
    empty_child?: Uint8Array;
    hash?: HashOp;
};
export declare type BatchProof = {
    entries?: BatchEntry[];
};
declare type BaseBatchEntry = {};
export declare type BatchEntry = BaseBatchEntry & OneOf<{
    exist: ExistenceProof;
    nonexist: NonExistenceProof;
}>;
export declare type CompressedBatchProof = {
    entries?: CompressedBatchEntry[];
    lookup_inners?: InnerOp[];
};
declare type BaseCompressedBatchEntry = {};
export declare type CompressedBatchEntry = BaseCompressedBatchEntry & OneOf<{
    exist: CompressedExistenceProof;
    nonexist: CompressedNonExistenceProof;
}>;
export declare type CompressedExistenceProof = {
    key?: Uint8Array;
    value?: Uint8Array;
    leaf?: LeafOp;
    path?: number[];
};
export declare type CompressedNonExistenceProof = {
    key?: Uint8Array;
    left?: CompressedExistenceProof;
    right?: CompressedExistenceProof;
};
export {};
//# sourceMappingURL=proofs.pb.d.ts.map