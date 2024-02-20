import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
export declare const protobufPackage = "cosmos.slashing.v1beta1";
/**
 * ValidatorSigningInfo defines a validator's signing info for monitoring their
 * liveness activity.
 */
export interface ValidatorSigningInfo {
    address: string;
    /** Height at which validator was first a candidate OR was unjailed */
    start_height: string;
    /**
     * Index which is incremented each time the validator was a bonded
     * in a block and may have signed a precommit or not. This in conjunction with the
     * `SignedBlocksWindow` param determines the index in the `MissedBlocksBitArray`.
     */
    index_offset: string;
    /** Timestamp until which the validator is jailed due to liveness downtime. */
    jailed_until?: Timestamp;
    /**
     * Whether or not a validator has been tombstoned (killed out of validator set). It is set
     * once the validator commits an equivocation or for any other configured misbehiavor.
     */
    tombstoned: boolean;
    /**
     * A counter kept to avoid unnecessary array reads.
     * Note that `Sum(MissedBlocksBitArray)` always equals `MissedBlocksCounter`.
     */
    missed_blocks_counter: string;
}
/** Params represents the parameters used for by the slashing module. */
export interface Params {
    signed_blocks_window: string;
    min_signed_per_window: Uint8Array;
    downtime_jail_duration?: Duration;
    slash_fraction_double_sign: Uint8Array;
    slash_fraction_downtime: Uint8Array;
}
export declare const ValidatorSigningInfo: {
    encode(message: ValidatorSigningInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ValidatorSigningInfo;
    fromJSON(object: any): ValidatorSigningInfo;
    toJSON(message: ValidatorSigningInfo): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        start_height?: string | undefined;
        index_offset?: string | undefined;
        jailed_until?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
        tombstoned?: boolean | undefined;
        missed_blocks_counter?: string | undefined;
    } & {
        address?: string | undefined;
        start_height?: string | undefined;
        index_offset?: string | undefined;
        jailed_until?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["jailed_until"], keyof Timestamp>, never>) | undefined;
        tombstoned?: boolean | undefined;
        missed_blocks_counter?: string | undefined;
    } & Record<Exclude<keyof I, keyof ValidatorSigningInfo>, never>>(object: I): ValidatorSigningInfo;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        signed_blocks_window?: string | undefined;
        min_signed_per_window?: Uint8Array | undefined;
        downtime_jail_duration?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
        slash_fraction_double_sign?: Uint8Array | undefined;
        slash_fraction_downtime?: Uint8Array | undefined;
    } & {
        signed_blocks_window?: string | undefined;
        min_signed_per_window?: Uint8Array | undefined;
        downtime_jail_duration?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["downtime_jail_duration"], keyof Duration>, never>) | undefined;
        slash_fraction_double_sign?: Uint8Array | undefined;
        slash_fraction_downtime?: Uint8Array | undefined;
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
//# sourceMappingURL=slashing.d.ts.map