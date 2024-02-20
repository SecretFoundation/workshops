import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.authz.v1beta1";
/** Since: cosmos-sdk 0.43 */
/** EventGrant is emitted on Msg/Grant */
export interface EventGrant {
    /** Msg type URL for which an autorization is granted */
    msg_type_url: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
/** EventRevoke is emitted on Msg/Revoke */
export interface EventRevoke {
    /** Msg type URL for which an autorization is revoked */
    msg_type_url: string;
    /** Granter account address */
    granter: string;
    /** Grantee account address */
    grantee: string;
}
export declare const EventGrant: {
    encode(message: EventGrant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventGrant;
    fromJSON(object: any): EventGrant;
    toJSON(message: EventGrant): unknown;
    fromPartial<I extends {
        msg_type_url?: string | undefined;
        granter?: string | undefined;
        grantee?: string | undefined;
    } & {
        msg_type_url?: string | undefined;
        granter?: string | undefined;
        grantee?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventGrant>, never>>(object: I): EventGrant;
};
export declare const EventRevoke: {
    encode(message: EventRevoke, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventRevoke;
    fromJSON(object: any): EventRevoke;
    toJSON(message: EventRevoke): unknown;
    fromPartial<I extends {
        msg_type_url?: string | undefined;
        granter?: string | undefined;
        grantee?: string | undefined;
    } & {
        msg_type_url?: string | undefined;
        granter?: string | undefined;
        grantee?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventRevoke>, never>>(object: I): EventRevoke;
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
//# sourceMappingURL=event.d.ts.map