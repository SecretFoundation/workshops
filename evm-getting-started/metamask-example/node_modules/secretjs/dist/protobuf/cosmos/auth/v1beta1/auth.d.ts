import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "cosmos.auth.v1beta1";
/**
 * BaseAccount defines a base account type. It contains all the necessary fields
 * for basic account functionality. Any custom account type should extend this
 * type for additional functionality (e.g. vesting).
 */
export interface BaseAccount {
    address: string;
    pub_key?: Any;
    account_number: string;
    sequence: string;
}
/** ModuleAccount defines an account for modules that holds coins on a pool. */
export interface ModuleAccount {
    base_account?: BaseAccount;
    name: string;
    permissions: string[];
}
/** Params defines the parameters for the auth module. */
export interface Params {
    max_memo_characters: string;
    tx_sig_limit: string;
    tx_size_cost_per_byte: string;
    sig_verify_cost_ed25519: string;
    sig_verify_cost_secp256k1: string;
}
export declare const BaseAccount: {
    encode(message: BaseAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BaseAccount;
    fromJSON(object: any): BaseAccount;
    toJSON(message: BaseAccount): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        pub_key?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        account_number?: string | undefined;
        sequence?: string | undefined;
    } & {
        address?: string | undefined;
        pub_key?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["pub_key"], keyof Any>, never>) | undefined;
        account_number?: string | undefined;
        sequence?: string | undefined;
    } & Record<Exclude<keyof I, keyof BaseAccount>, never>>(object: I): BaseAccount;
};
export declare const ModuleAccount: {
    encode(message: ModuleAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ModuleAccount;
    fromJSON(object: any): ModuleAccount;
    toJSON(message: ModuleAccount): unknown;
    fromPartial<I extends {
        base_account?: {
            address?: string | undefined;
            pub_key?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            account_number?: string | undefined;
            sequence?: string | undefined;
        } | undefined;
        name?: string | undefined;
        permissions?: string[] | undefined;
    } & {
        base_account?: ({
            address?: string | undefined;
            pub_key?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            account_number?: string | undefined;
            sequence?: string | undefined;
        } & {
            address?: string | undefined;
            pub_key?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["base_account"]["pub_key"], keyof Any>, never>) | undefined;
            account_number?: string | undefined;
            sequence?: string | undefined;
        } & Record<Exclude<keyof I["base_account"], keyof BaseAccount>, never>) | undefined;
        name?: string | undefined;
        permissions?: (string[] & string[] & Record<Exclude<keyof I["permissions"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ModuleAccount>, never>>(object: I): ModuleAccount;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        max_memo_characters?: string | undefined;
        tx_sig_limit?: string | undefined;
        tx_size_cost_per_byte?: string | undefined;
        sig_verify_cost_ed25519?: string | undefined;
        sig_verify_cost_secp256k1?: string | undefined;
    } & {
        max_memo_characters?: string | undefined;
        tx_sig_limit?: string | undefined;
        tx_size_cost_per_byte?: string | undefined;
        sig_verify_cost_ed25519?: string | undefined;
        sig_verify_cost_secp256k1?: string | undefined;
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
//# sourceMappingURL=auth.d.ts.map