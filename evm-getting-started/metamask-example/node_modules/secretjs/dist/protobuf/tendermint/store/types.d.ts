import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "tendermint.store";
export interface BlockStoreState {
    base: string;
    height: string;
}
export declare const BlockStoreState: {
    encode(message: BlockStoreState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BlockStoreState;
    fromJSON(object: any): BlockStoreState;
    toJSON(message: BlockStoreState): unknown;
    fromPartial<I extends {
        base?: string | undefined;
        height?: string | undefined;
    } & {
        base?: string | undefined;
        height?: string | undefined;
    } & Record<Exclude<keyof I, keyof BlockStoreState>, never>>(object: I): BlockStoreState;
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