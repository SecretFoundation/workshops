import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "tendermint.crypto";
export interface Proof {
    total: string;
    index: string;
    leaf_hash: Uint8Array;
    aunts: Uint8Array[];
}
export interface ValueOp {
    /** Encoded in ProofOp.Key. */
    key: Uint8Array;
    /** To encode in ProofOp.Data */
    proof?: Proof;
}
export interface DominoOp {
    key: string;
    input: string;
    output: string;
}
/**
 * ProofOp defines an operation used for calculating Merkle root
 * The data could be arbitrary format, providing nessecary data
 * for example neighbouring node hash
 */
export interface ProofOp {
    type: string;
    key: Uint8Array;
    data: Uint8Array;
}
/** ProofOps is Merkle proof defined by the list of ProofOps */
export interface ProofOps {
    ops: ProofOp[];
}
export declare const Proof: {
    encode(message: Proof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Proof;
    fromJSON(object: any): Proof;
    toJSON(message: Proof): unknown;
    fromPartial<I extends {
        total?: string | undefined;
        index?: string | undefined;
        leaf_hash?: Uint8Array | undefined;
        aunts?: Uint8Array[] | undefined;
    } & {
        total?: string | undefined;
        index?: string | undefined;
        leaf_hash?: Uint8Array | undefined;
        aunts?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["aunts"], keyof Uint8Array[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Proof>, never>>(object: I): Proof;
};
export declare const ValueOp: {
    encode(message: ValueOp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ValueOp;
    fromJSON(object: any): ValueOp;
    toJSON(message: ValueOp): unknown;
    fromPartial<I extends {
        key?: Uint8Array | undefined;
        proof?: {
            total?: string | undefined;
            index?: string | undefined;
            leaf_hash?: Uint8Array | undefined;
            aunts?: Uint8Array[] | undefined;
        } | undefined;
    } & {
        key?: Uint8Array | undefined;
        proof?: ({
            total?: string | undefined;
            index?: string | undefined;
            leaf_hash?: Uint8Array | undefined;
            aunts?: Uint8Array[] | undefined;
        } & {
            total?: string | undefined;
            index?: string | undefined;
            leaf_hash?: Uint8Array | undefined;
            aunts?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["proof"]["aunts"], keyof Uint8Array[]>, never>) | undefined;
        } & Record<Exclude<keyof I["proof"], keyof Proof>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ValueOp>, never>>(object: I): ValueOp;
};
export declare const DominoOp: {
    encode(message: DominoOp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DominoOp;
    fromJSON(object: any): DominoOp;
    toJSON(message: DominoOp): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        input?: string | undefined;
        output?: string | undefined;
    } & {
        key?: string | undefined;
        input?: string | undefined;
        output?: string | undefined;
    } & Record<Exclude<keyof I, keyof DominoOp>, never>>(object: I): DominoOp;
};
export declare const ProofOp: {
    encode(message: ProofOp, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProofOp;
    fromJSON(object: any): ProofOp;
    toJSON(message: ProofOp): unknown;
    fromPartial<I extends {
        type?: string | undefined;
        key?: Uint8Array | undefined;
        data?: Uint8Array | undefined;
    } & {
        type?: string | undefined;
        key?: Uint8Array | undefined;
        data?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof ProofOp>, never>>(object: I): ProofOp;
};
export declare const ProofOps: {
    encode(message: ProofOps, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProofOps;
    fromJSON(object: any): ProofOps;
    toJSON(message: ProofOps): unknown;
    fromPartial<I extends {
        ops?: {
            type?: string | undefined;
            key?: Uint8Array | undefined;
            data?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        ops?: ({
            type?: string | undefined;
            key?: Uint8Array | undefined;
            data?: Uint8Array | undefined;
        }[] & ({
            type?: string | undefined;
            key?: Uint8Array | undefined;
            data?: Uint8Array | undefined;
        } & {
            type?: string | undefined;
            key?: Uint8Array | undefined;
            data?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["ops"][number], keyof ProofOp>, never>)[] & Record<Exclude<keyof I["ops"], keyof {
            type?: string | undefined;
            key?: Uint8Array | undefined;
            data?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "ops">, never>>(object: I): ProofOps;
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
//# sourceMappingURL=proof.d.ts.map