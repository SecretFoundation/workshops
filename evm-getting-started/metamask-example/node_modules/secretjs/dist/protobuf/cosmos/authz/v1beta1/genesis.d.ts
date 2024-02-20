import * as _m0 from "protobufjs/minimal";
import { GrantAuthorization } from "./authz";
export declare const protobufPackage = "cosmos.authz.v1beta1";
/** Since: cosmos-sdk 0.43 */
/** GenesisState defines the authz module's genesis state. */
export interface GenesisState {
    authorization: GrantAuthorization[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        authorization?: {
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
        }[] | undefined;
    } & {
        authorization?: ({
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
        }[] & ({
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
            } & Record<Exclude<keyof I["authorization"][number]["authorization"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
            expiration?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["authorization"][number]["expiration"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
        } & Record<Exclude<keyof I["authorization"][number], keyof GrantAuthorization>, never>)[] & Record<Exclude<keyof I["authorization"], keyof {
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
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "authorization">, never>>(object: I): GenesisState;
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