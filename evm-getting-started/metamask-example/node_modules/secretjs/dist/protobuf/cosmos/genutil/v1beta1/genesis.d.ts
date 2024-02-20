import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.genutil.v1beta1";
/** GenesisState defines the raw genesis transaction in JSON. */
export interface GenesisState {
    /** gen_txs defines the genesis transactions. */
    gen_txs: Uint8Array[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        gen_txs?: Uint8Array[] | undefined;
    } & {
        gen_txs?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["gen_txs"], keyof Uint8Array[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "gen_txs">, never>>(object: I): GenesisState;
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
//# sourceMappingURL=genesis.d.ts.map