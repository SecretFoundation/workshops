import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { Timestamp } from "../../../google/protobuf/timestamp";
export declare const protobufPackage = "cosmos.authz.v1beta1";
/** Since: cosmos-sdk 0.43 */
/**
 * GenericAuthorization gives the grantee unrestricted permissions to execute
 * the provided method on behalf of the granter's account.
 */
export interface GenericAuthorization {
    /** Msg, identified by it's type URL, to grant unrestricted permissions to execute */
    msg: string;
}
/**
 * Grant gives permissions to execute
 * the provide method with expiration time.
 */
export interface Grant {
    authorization?: Any;
    expiration?: Timestamp;
}
/**
 * GrantAuthorization extends a grant with both the addresses of the grantee and granter.
 * It is used in genesis.proto and query.proto
 *
 * Since: cosmos-sdk 0.45.2
 */
export interface GrantAuthorization {
    granter: string;
    grantee: string;
    authorization?: Any;
    expiration?: Timestamp;
}
export declare const GenericAuthorization: {
    encode(message: GenericAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenericAuthorization;
    fromJSON(object: any): GenericAuthorization;
    toJSON(message: GenericAuthorization): unknown;
    fromPartial<I extends {
        msg?: string | undefined;
    } & {
        msg?: string | undefined;
    } & Record<Exclude<keyof I, "msg">, never>>(object: I): GenericAuthorization;
};
export declare const Grant: {
    encode(message: Grant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Grant;
    fromJSON(object: any): Grant;
    toJSON(message: Grant): unknown;
    fromPartial<I extends {
        authorization?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        expiration?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        authorization?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["authorization"], keyof Any>, never>) | undefined;
        expiration?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["expiration"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Grant>, never>>(object: I): Grant;
};
export declare const GrantAuthorization: {
    encode(message: GrantAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GrantAuthorization;
    fromJSON(object: any): GrantAuthorization;
    toJSON(message: GrantAuthorization): unknown;
    fromPartial<I extends {
        granter?: string | undefined;
        grantee?: string | undefined;
        authorization?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        expiration?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        granter?: string | undefined;
        grantee?: string | undefined;
        authorization?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["authorization"], keyof Any>, never>) | undefined;
        expiration?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["expiration"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GrantAuthorization>, never>>(object: I): GrantAuthorization;
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
//# sourceMappingURL=authz.d.ts.map