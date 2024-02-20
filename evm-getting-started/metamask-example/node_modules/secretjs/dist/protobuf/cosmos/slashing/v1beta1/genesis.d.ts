import * as _m0 from "protobufjs/minimal";
import { Params, ValidatorSigningInfo } from "./slashing";
export declare const protobufPackage = "cosmos.slashing.v1beta1";
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of related to deposit. */
    params?: Params;
    /**
     * signing_infos represents a map between validator addresses and their
     * signing infos.
     */
    signing_infos: SigningInfo[];
    /**
     * missed_blocks represents a map between validator addresses and their
     * missed blocks.
     */
    missed_blocks: ValidatorMissedBlocks[];
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfo {
    /** address is the validator address. */
    address: string;
    /** validator_signing_info represents the signing info of this validator. */
    validator_signing_info?: ValidatorSigningInfo;
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocks {
    /** address is the validator address. */
    address: string;
    /** missed_blocks is an array of missed blocks by the validator. */
    missed_blocks: MissedBlock[];
}
/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlock {
    /** index is the height at which the block was missed. */
    index: string;
    /** missed is the missed status. */
    missed: boolean;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            signed_blocks_window?: string | undefined;
            min_signed_per_window?: Uint8Array | undefined;
            downtime_jail_duration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            slash_fraction_double_sign?: Uint8Array | undefined;
            slash_fraction_downtime?: Uint8Array | undefined;
        } | undefined;
        signing_infos?: {
            address?: string | undefined;
            validator_signing_info?: {
                address?: string | undefined;
                start_height?: string | undefined;
                index_offset?: string | undefined;
                jailed_until?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                tombstoned?: boolean | undefined;
                missed_blocks_counter?: string | undefined;
            } | undefined;
        }[] | undefined;
        missed_blocks?: {
            address?: string | undefined;
            missed_blocks?: {
                index?: string | undefined;
                missed?: boolean | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        params?: ({
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
            } & Record<Exclude<keyof I["params"]["downtime_jail_duration"], keyof import("../../../google/protobuf/duration").Duration>, never>) | undefined;
            slash_fraction_double_sign?: Uint8Array | undefined;
            slash_fraction_downtime?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        signing_infos?: ({
            address?: string | undefined;
            validator_signing_info?: {
                address?: string | undefined;
                start_height?: string | undefined;
                index_offset?: string | undefined;
                jailed_until?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                tombstoned?: boolean | undefined;
                missed_blocks_counter?: string | undefined;
            } | undefined;
        }[] & ({
            address?: string | undefined;
            validator_signing_info?: {
                address?: string | undefined;
                start_height?: string | undefined;
                index_offset?: string | undefined;
                jailed_until?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                tombstoned?: boolean | undefined;
                missed_blocks_counter?: string | undefined;
            } | undefined;
        } & {
            address?: string | undefined;
            validator_signing_info?: ({
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
                } & Record<Exclude<keyof I["signing_infos"][number]["validator_signing_info"]["jailed_until"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                tombstoned?: boolean | undefined;
                missed_blocks_counter?: string | undefined;
            } & Record<Exclude<keyof I["signing_infos"][number]["validator_signing_info"], keyof ValidatorSigningInfo>, never>) | undefined;
        } & Record<Exclude<keyof I["signing_infos"][number], keyof SigningInfo>, never>)[] & Record<Exclude<keyof I["signing_infos"], keyof {
            address?: string | undefined;
            validator_signing_info?: {
                address?: string | undefined;
                start_height?: string | undefined;
                index_offset?: string | undefined;
                jailed_until?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                tombstoned?: boolean | undefined;
                missed_blocks_counter?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        missed_blocks?: ({
            address?: string | undefined;
            missed_blocks?: {
                index?: string | undefined;
                missed?: boolean | undefined;
            }[] | undefined;
        }[] & ({
            address?: string | undefined;
            missed_blocks?: {
                index?: string | undefined;
                missed?: boolean | undefined;
            }[] | undefined;
        } & {
            address?: string | undefined;
            missed_blocks?: ({
                index?: string | undefined;
                missed?: boolean | undefined;
            }[] & ({
                index?: string | undefined;
                missed?: boolean | undefined;
            } & {
                index?: string | undefined;
                missed?: boolean | undefined;
            } & Record<Exclude<keyof I["missed_blocks"][number]["missed_blocks"][number], keyof MissedBlock>, never>)[] & Record<Exclude<keyof I["missed_blocks"][number]["missed_blocks"], keyof {
                index?: string | undefined;
                missed?: boolean | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["missed_blocks"][number], keyof ValidatorMissedBlocks>, never>)[] & Record<Exclude<keyof I["missed_blocks"], keyof {
            address?: string | undefined;
            missed_blocks?: {
                index?: string | undefined;
                missed?: boolean | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const SigningInfo: {
    encode(message: SigningInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SigningInfo;
    fromJSON(object: any): SigningInfo;
    toJSON(message: SigningInfo): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        validator_signing_info?: {
            address?: string | undefined;
            start_height?: string | undefined;
            index_offset?: string | undefined;
            jailed_until?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            tombstoned?: boolean | undefined;
            missed_blocks_counter?: string | undefined;
        } | undefined;
    } & {
        address?: string | undefined;
        validator_signing_info?: ({
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
            } & Record<Exclude<keyof I["validator_signing_info"]["jailed_until"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            tombstoned?: boolean | undefined;
            missed_blocks_counter?: string | undefined;
        } & Record<Exclude<keyof I["validator_signing_info"], keyof ValidatorSigningInfo>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof SigningInfo>, never>>(object: I): SigningInfo;
};
export declare const ValidatorMissedBlocks: {
    encode(message: ValidatorMissedBlocks, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ValidatorMissedBlocks;
    fromJSON(object: any): ValidatorMissedBlocks;
    toJSON(message: ValidatorMissedBlocks): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        missed_blocks?: {
            index?: string | undefined;
            missed?: boolean | undefined;
        }[] | undefined;
    } & {
        address?: string | undefined;
        missed_blocks?: ({
            index?: string | undefined;
            missed?: boolean | undefined;
        }[] & ({
            index?: string | undefined;
            missed?: boolean | undefined;
        } & {
            index?: string | undefined;
            missed?: boolean | undefined;
        } & Record<Exclude<keyof I["missed_blocks"][number], keyof MissedBlock>, never>)[] & Record<Exclude<keyof I["missed_blocks"], keyof {
            index?: string | undefined;
            missed?: boolean | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ValidatorMissedBlocks>, never>>(object: I): ValidatorMissedBlocks;
};
export declare const MissedBlock: {
    encode(message: MissedBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MissedBlock;
    fromJSON(object: any): MissedBlock;
    toJSON(message: MissedBlock): unknown;
    fromPartial<I extends {
        index?: string | undefined;
        missed?: boolean | undefined;
    } & {
        index?: string | undefined;
        missed?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof MissedBlock>, never>>(object: I): MissedBlock;
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