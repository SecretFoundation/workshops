import * as _m0 from "protobufjs/minimal";
import { Minter, Params } from "./mint";
export declare const protobufPackage = "cosmos.mint.v1beta1";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
    /** minter is a space for holding current inflation information. */
    minter?: Minter;
    /** params defines all the paramaters of the module. */
    params?: Params;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        minter?: {
            inflation?: string | undefined;
            annual_provisions?: string | undefined;
        } | undefined;
        params?: {
            mint_denom?: string | undefined;
            inflation_rate_change?: string | undefined;
            inflation_max?: string | undefined;
            inflation_min?: string | undefined;
            goal_bonded?: string | undefined;
            blocks_per_year?: string | undefined;
        } | undefined;
    } & {
        minter?: ({
            inflation?: string | undefined;
            annual_provisions?: string | undefined;
        } & {
            inflation?: string | undefined;
            annual_provisions?: string | undefined;
        } & Record<Exclude<keyof I["minter"], keyof Minter>, never>) | undefined;
        params?: ({
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
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
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