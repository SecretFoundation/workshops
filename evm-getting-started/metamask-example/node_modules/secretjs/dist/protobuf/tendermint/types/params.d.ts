import * as _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";
export declare const protobufPackage = "tendermint.types";
/**
 * ConsensusParams contains consensus critical parameters that determine the
 * validity of blocks.
 */
export interface ConsensusParams {
    block?: BlockParams;
    evidence?: EvidenceParams;
    validator?: ValidatorParams;
    version?: VersionParams;
}
/** BlockParams contains limits on the block size. */
export interface BlockParams {
    /**
     * Max block size, in bytes.
     * Note: must be greater than 0
     */
    max_bytes: string;
    /**
     * Max gas per block.
     * Note: must be greater or equal to -1
     */
    max_gas: string;
    /**
     * Minimum time increment between consecutive blocks (in milliseconds) If the
     * block header timestamp is ahead of the system clock, decrease this value.
     *
     * Not exposed to the application.
     */
    time_iota_ms: string;
}
/** EvidenceParams determine how we handle evidence of malfeasance. */
export interface EvidenceParams {
    /**
     * Max age of evidence, in blocks.
     *
     * The basic formula for calculating this is: MaxAgeDuration / {average block
     * time}.
     */
    max_age_num_blocks: string;
    /**
     * Max age of evidence, in time.
     *
     * It should correspond with an app's "unbonding period" or other similar
     * mechanism for handling [Nothing-At-Stake
     * attacks](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ#what-is-the-nothing-at-stake-problem-and-how-can-it-be-fixed).
     */
    max_age_duration?: Duration;
    /**
     * This sets the maximum size of total evidence in bytes that can be committed in a single block.
     * and should fall comfortably under the max block bytes.
     * Default is 1048576 or 1MB
     */
    max_bytes: string;
}
/**
 * ValidatorParams restrict the public key types validators can use.
 * NOTE: uses ABCI pubkey naming, not Amino names.
 */
export interface ValidatorParams {
    pub_key_types: string[];
}
/** VersionParams contains the ABCI application version. */
export interface VersionParams {
    app_version: string;
}
/**
 * HashedParams is a subset of ConsensusParams.
 *
 * It is hashed into the Header.ConsensusHash.
 */
export interface HashedParams {
    block_max_bytes: string;
    block_max_gas: string;
}
export declare const ConsensusParams: {
    encode(message: ConsensusParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConsensusParams;
    fromJSON(object: any): ConsensusParams;
    toJSON(message: ConsensusParams): unknown;
    fromPartial<I extends {
        block?: {
            max_bytes?: string | undefined;
            max_gas?: string | undefined;
            time_iota_ms?: string | undefined;
        } | undefined;
        evidence?: {
            max_age_num_blocks?: string | undefined;
            max_age_duration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            max_bytes?: string | undefined;
        } | undefined;
        validator?: {
            pub_key_types?: string[] | undefined;
        } | undefined;
        version?: {
            app_version?: string | undefined;
        } | undefined;
    } & {
        block?: ({
            max_bytes?: string | undefined;
            max_gas?: string | undefined;
            time_iota_ms?: string | undefined;
        } & {
            max_bytes?: string | undefined;
            max_gas?: string | undefined;
            time_iota_ms?: string | undefined;
        } & Record<Exclude<keyof I["block"], keyof BlockParams>, never>) | undefined;
        evidence?: ({
            max_age_num_blocks?: string | undefined;
            max_age_duration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            max_bytes?: string | undefined;
        } & {
            max_age_num_blocks?: string | undefined;
            max_age_duration?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["evidence"]["max_age_duration"], keyof Duration>, never>) | undefined;
            max_bytes?: string | undefined;
        } & Record<Exclude<keyof I["evidence"], keyof EvidenceParams>, never>) | undefined;
        validator?: ({
            pub_key_types?: string[] | undefined;
        } & {
            pub_key_types?: (string[] & string[] & Record<Exclude<keyof I["validator"]["pub_key_types"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["validator"], "pub_key_types">, never>) | undefined;
        version?: ({
            app_version?: string | undefined;
        } & {
            app_version?: string | undefined;
        } & Record<Exclude<keyof I["version"], "app_version">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ConsensusParams>, never>>(object: I): ConsensusParams;
};
export declare const BlockParams: {
    encode(message: BlockParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BlockParams;
    fromJSON(object: any): BlockParams;
    toJSON(message: BlockParams): unknown;
    fromPartial<I extends {
        max_bytes?: string | undefined;
        max_gas?: string | undefined;
        time_iota_ms?: string | undefined;
    } & {
        max_bytes?: string | undefined;
        max_gas?: string | undefined;
        time_iota_ms?: string | undefined;
    } & Record<Exclude<keyof I, keyof BlockParams>, never>>(object: I): BlockParams;
};
export declare const EvidenceParams: {
    encode(message: EvidenceParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EvidenceParams;
    fromJSON(object: any): EvidenceParams;
    toJSON(message: EvidenceParams): unknown;
    fromPartial<I extends {
        max_age_num_blocks?: string | undefined;
        max_age_duration?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
        max_bytes?: string | undefined;
    } & {
        max_age_num_blocks?: string | undefined;
        max_age_duration?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["max_age_duration"], keyof Duration>, never>) | undefined;
        max_bytes?: string | undefined;
    } & Record<Exclude<keyof I, keyof EvidenceParams>, never>>(object: I): EvidenceParams;
};
export declare const ValidatorParams: {
    encode(message: ValidatorParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ValidatorParams;
    fromJSON(object: any): ValidatorParams;
    toJSON(message: ValidatorParams): unknown;
    fromPartial<I extends {
        pub_key_types?: string[] | undefined;
    } & {
        pub_key_types?: (string[] & string[] & Record<Exclude<keyof I["pub_key_types"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "pub_key_types">, never>>(object: I): ValidatorParams;
};
export declare const VersionParams: {
    encode(message: VersionParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VersionParams;
    fromJSON(object: any): VersionParams;
    toJSON(message: VersionParams): unknown;
    fromPartial<I extends {
        app_version?: string | undefined;
    } & {
        app_version?: string | undefined;
    } & Record<Exclude<keyof I, "app_version">, never>>(object: I): VersionParams;
};
export declare const HashedParams: {
    encode(message: HashedParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HashedParams;
    fromJSON(object: any): HashedParams;
    toJSON(message: HashedParams): unknown;
    fromPartial<I extends {
        block_max_bytes?: string | undefined;
        block_max_gas?: string | undefined;
    } & {
        block_max_bytes?: string | undefined;
        block_max_gas?: string | undefined;
    } & Record<Exclude<keyof I, keyof HashedParams>, never>>(object: I): HashedParams;
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
//# sourceMappingURL=params.d.ts.map