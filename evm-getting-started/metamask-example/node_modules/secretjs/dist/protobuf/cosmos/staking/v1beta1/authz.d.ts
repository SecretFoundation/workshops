import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../base/v1beta1/coin";
export declare const protobufPackage = "cosmos.staking.v1beta1";
/**
 * AuthorizationType defines the type of staking module authorization type
 *
 * Since: cosmos-sdk 0.43
 */
export declare enum AuthorizationType {
    /** AUTHORIZATION_TYPE_UNSPECIFIED - AUTHORIZATION_TYPE_UNSPECIFIED specifies an unknown authorization type */
    AUTHORIZATION_TYPE_UNSPECIFIED = 0,
    /** AUTHORIZATION_TYPE_DELEGATE - AUTHORIZATION_TYPE_DELEGATE defines an authorization type for Msg/Delegate */
    AUTHORIZATION_TYPE_DELEGATE = 1,
    /** AUTHORIZATION_TYPE_UNDELEGATE - AUTHORIZATION_TYPE_UNDELEGATE defines an authorization type for Msg/Undelegate */
    AUTHORIZATION_TYPE_UNDELEGATE = 2,
    /** AUTHORIZATION_TYPE_REDELEGATE - AUTHORIZATION_TYPE_REDELEGATE defines an authorization type for Msg/BeginRedelegate */
    AUTHORIZATION_TYPE_REDELEGATE = 3,
    UNRECOGNIZED = -1
}
export declare function authorizationTypeFromJSON(object: any): AuthorizationType;
export declare function authorizationTypeToJSON(object: AuthorizationType): string;
/**
 * StakeAuthorization defines authorization for delegate/undelegate/redelegate.
 *
 * Since: cosmos-sdk 0.43
 */
export interface StakeAuthorization {
    /**
     * max_tokens specifies the maximum amount of tokens can be delegate to a validator. If it is
     * empty, there is no spend limit and any amount of coins can be delegated.
     */
    max_tokens?: Coin;
    /**
     * allow_list specifies list of validator addresses to whom grantee can delegate tokens on behalf of granter's
     * account.
     */
    allow_list?: StakeAuthorization_Validators | undefined;
    /** deny_list specifies list of validator addresses to whom grantee can not delegate tokens. */
    deny_list?: StakeAuthorization_Validators | undefined;
    /** authorization_type defines one of AuthorizationType. */
    authorization_type: AuthorizationType;
}
/** Validators defines list of validator addresses. */
export interface StakeAuthorization_Validators {
    address: string[];
}
export declare const StakeAuthorization: {
    encode(message: StakeAuthorization, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StakeAuthorization;
    fromJSON(object: any): StakeAuthorization;
    toJSON(message: StakeAuthorization): unknown;
    fromPartial<I extends {
        max_tokens?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        allow_list?: {
            address?: string[] | undefined;
        } | undefined;
        deny_list?: {
            address?: string[] | undefined;
        } | undefined;
        authorization_type?: AuthorizationType | undefined;
    } & {
        max_tokens?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["max_tokens"], keyof Coin>, never>) | undefined;
        allow_list?: ({
            address?: string[] | undefined;
        } & {
            address?: (string[] & string[] & Record<Exclude<keyof I["allow_list"]["address"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["allow_list"], "address">, never>) | undefined;
        deny_list?: ({
            address?: string[] | undefined;
        } & {
            address?: (string[] & string[] & Record<Exclude<keyof I["deny_list"]["address"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["deny_list"], "address">, never>) | undefined;
        authorization_type?: AuthorizationType | undefined;
    } & Record<Exclude<keyof I, keyof StakeAuthorization>, never>>(object: I): StakeAuthorization;
};
export declare const StakeAuthorization_Validators: {
    encode(message: StakeAuthorization_Validators, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StakeAuthorization_Validators;
    fromJSON(object: any): StakeAuthorization_Validators;
    toJSON(message: StakeAuthorization_Validators): unknown;
    fromPartial<I extends {
        address?: string[] | undefined;
    } & {
        address?: (string[] & string[] & Record<Exclude<keyof I["address"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): StakeAuthorization_Validators;
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