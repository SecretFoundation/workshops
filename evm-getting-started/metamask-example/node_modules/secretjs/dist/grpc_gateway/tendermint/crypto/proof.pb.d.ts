export declare type Proof = {
    total?: string;
    index?: string;
    leaf_hash?: Uint8Array;
    aunts?: Uint8Array[];
};
export declare type ValueOp = {
    key?: Uint8Array;
    proof?: Proof;
};
export declare type DominoOp = {
    key?: string;
    input?: string;
    output?: string;
};
export declare type ProofOp = {
    type?: string;
    key?: Uint8Array;
    data?: Uint8Array;
};
export declare type ProofOps = {
    ops?: ProofOp[];
};
//# sourceMappingURL=proof.pb.d.ts.map