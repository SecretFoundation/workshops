import * as _m0 from "protobufjs/minimal";
import { BaseAccount } from "../../../../cosmos/auth/v1beta1/auth";
export declare const protobufPackage = "ibc.applications.interchain_accounts.v1";
/** An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain */
export interface InterchainAccount {
    base_account?: BaseAccount;
    account_owner: string;
}
export declare const InterchainAccount: {
    encode(message: InterchainAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InterchainAccount;
    fromJSON(object: any): InterchainAccount;
    toJSON(message: InterchainAccount): unknown;
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
        account_owner?: string | undefined;
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
            } & Record<Exclude<keyof I["base_account"]["pub_key"], keyof import("../../../../google/protobuf/any").Any>, never>) | undefined;
            account_number?: string | undefined;
            sequence?: string | undefined;
        } & Record<Exclude<keyof I["base_account"], keyof BaseAccount>, never>) | undefined;
        account_owner?: string | undefined;
    } & Record<Exclude<keyof I, keyof InterchainAccount>, never>>(object: I): InterchainAccount;
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
//# sourceMappingURL=account.d.ts.map