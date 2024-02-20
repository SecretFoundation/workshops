import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "cosmos.upgrade.v1beta1";
/** Plan specifies information about a planned upgrade and when it should occur. */
export interface Plan {
    /**
     * Sets the name for the upgrade. This name will be used by the upgraded
     * version of the software to apply any special "on-upgrade" commands during
     * the first BeginBlock method after the upgrade is applied. It is also used
     * to detect whether a software version can handle a given upgrade. If no
     * upgrade handler with this name has been set in the software, it will be
     * assumed that the software is out-of-date when the upgrade Time or Height is
     * reached and the software will exit.
     */
    name: string;
    /**
     * Deprecated: Time based upgrades have been deprecated. Time based upgrade logic
     * has been removed from the SDK.
     * If this field is not empty, an error will be thrown.
     *
     * @deprecated
     */
    time?: Timestamp;
    /**
     * The height at which the upgrade must be performed.
     * Only used if Time is not set.
     */
    height: string;
    /**
     * Any application specific upgrade info to be included on-chain
     * such as a git commit that validators could automatically upgrade to
     */
    info: string;
    /**
     * Deprecated: UpgradedClientState field has been deprecated. IBC upgrade logic has been
     * moved to the IBC module in the sub module 02-client.
     * If this field is not empty, an error will be thrown.
     *
     * @deprecated
     */
    upgraded_client_state?: Any;
}
/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 */
export interface SoftwareUpgradeProposal {
    title: string;
    description: string;
    plan?: Plan;
}
/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 */
export interface CancelSoftwareUpgradeProposal {
    title: string;
    description: string;
}
/**
 * ModuleVersion specifies a module and its consensus version.
 *
 * Since: cosmos-sdk 0.43
 */
export interface ModuleVersion {
    /** name of the app module */
    name: string;
    /** consensus version of the app module */
    version: string;
}
export declare const Plan: {
    encode(message: Plan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Plan;
    fromJSON(object: any): Plan;
    toJSON(message: Plan): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        time?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
        height?: string | undefined;
        info?: string | undefined;
        upgraded_client_state?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        name?: string | undefined;
        time?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["time"], keyof Timestamp>, never>) | undefined;
        height?: string | undefined;
        info?: string | undefined;
        upgraded_client_state?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["upgraded_client_state"], keyof Any>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Plan>, never>>(object: I): Plan;
};
export declare const SoftwareUpgradeProposal: {
    encode(message: SoftwareUpgradeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SoftwareUpgradeProposal;
    fromJSON(object: any): SoftwareUpgradeProposal;
    toJSON(message: SoftwareUpgradeProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        plan?: {
            name?: string | undefined;
            time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            height?: string | undefined;
            info?: string | undefined;
            upgraded_client_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        plan?: ({
            name?: string | undefined;
            time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            height?: string | undefined;
            info?: string | undefined;
            upgraded_client_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            name?: string | undefined;
            time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["plan"]["time"], keyof Timestamp>, never>) | undefined;
            height?: string | undefined;
            info?: string | undefined;
            upgraded_client_state?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["plan"]["upgraded_client_state"], keyof Any>, never>) | undefined;
        } & Record<Exclude<keyof I["plan"], keyof Plan>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof SoftwareUpgradeProposal>, never>>(object: I): SoftwareUpgradeProposal;
};
export declare const CancelSoftwareUpgradeProposal: {
    encode(message: CancelSoftwareUpgradeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CancelSoftwareUpgradeProposal;
    fromJSON(object: any): CancelSoftwareUpgradeProposal;
    toJSON(message: CancelSoftwareUpgradeProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
    } & Record<Exclude<keyof I, keyof CancelSoftwareUpgradeProposal>, never>>(object: I): CancelSoftwareUpgradeProposal;
};
export declare const ModuleVersion: {
    encode(message: ModuleVersion, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModuleVersion;
    fromJSON(object: any): ModuleVersion;
    toJSON(message: ModuleVersion): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        version?: string | undefined;
    } & {
        name?: string | undefined;
        version?: string | undefined;
    } & Record<Exclude<keyof I, keyof ModuleVersion>, never>>(object: I): ModuleVersion;
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
//# sourceMappingURL=upgrade.d.ts.map