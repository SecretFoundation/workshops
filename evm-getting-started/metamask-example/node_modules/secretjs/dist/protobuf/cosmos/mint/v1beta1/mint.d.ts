import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.mint.v1beta1";
/** Minter represents the minting state. */
export interface Minter {
    /** current annual inflation rate */
    inflation: string;
    /** current annual expected provisions */
    annual_provisions: string;
}
/** Params holds parameters for the mint module. */
export interface Params {
    /** type of coin to mint */
    mint_denom: string;
    /** maximum annual change in inflation rate */
    inflation_rate_change: string;
    /** maximum inflation rate */
    inflation_max: string;
    /** minimum inflation rate */
    inflation_min: string;
    /** goal of percent bonded atoms */
    goal_bonded: string;
    /** expected blocks per year */
    blocks_per_year: string;
}
export declare const Minter: {
    encode(message: Minter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Minter;
    fromJSON(object: any): Minter;
    toJSON(message: Minter): unknown;
    fromPartial<I extends {
        inflation?: string | undefined;
        annual_provisions?: string | undefined;
    } & {
        inflation?: string | undefined;
        annual_provisions?: string | undefined;
    } & Record<Exclude<keyof I, keyof Minter>, never>>(object: I): Minter;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        mint_denom?: string | undefined;
        inflation_rate_change?: string | undefined;
        inflation_max?: string | undefined;
        inflation_min?: string | undefined;
        goal_bonded?: string | undefined;
        blocks_per_year?: string | undefined;
    } & {
        mint_denom?: string | undefined;
        inflation_rate_change?: string | undefined;
        inflation_max?: string | undefined;
        inflation_min?: string | undefined;
        goal_bonded?: string | undefined;
        blocks_per_year?: string | undefined;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
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
//# sourceMappingURL=mint.d.ts.map