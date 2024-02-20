import * as Ics23Proofs from "../../../../confio/proofs.pb";
export declare type MerkleRoot = {
    hash?: Uint8Array;
};
export declare type MerklePrefix = {
    key_prefix?: Uint8Array;
};
export declare type MerklePath = {
    key_path?: string[];
};
export declare type MerkleProof = {
    proofs?: Ics23Proofs.CommitmentProof[];
};
//# sourceMappingURL=commitment.pb.d.ts.map