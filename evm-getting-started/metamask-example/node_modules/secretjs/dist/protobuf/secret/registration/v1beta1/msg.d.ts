import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "secret.registration.v1beta1";
export interface RaAuthenticate {
    sender: Uint8Array;
    certificate: Uint8Array;
}
export interface MasterKey {
    bytes: Uint8Array;
}
export interface Key {
    key: Uint8Array;
}
export declare const RaAuthenticate: {
    encode(message: RaAuthenticate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RaAuthenticate;
    fromJSON(object: any): RaAuthenticate;
    toJSON(message: RaAuthenticate): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        certificate?: Uint8Array | undefined;
    } & {
        sender?: Uint8Array | undefined;
        certificate?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof RaAuthenticate>, never>>(object: I): RaAuthenticate;
};
export declare const MasterKey: {
    encode(message: MasterKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MasterKey;
    fromJSON(object: any): MasterKey;
    toJSON(message: MasterKey): unknown;
    fromPartial<I extends {
        bytes?: Uint8Array | undefined;
    } & {
        bytes?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "bytes">, never>>(object: I): MasterKey;
};
export declare const Key: {
    encode(message: Key, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Key;
    fromJSON(object: any): Key;
    toJSON(message: Key): unknown;
    fromPartial<I extends {
        key?: Uint8Array | undefined;
    } & {
        key?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "key">, never>>(object: I): Key;
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
//# sourceMappingURL=msg.d.ts.map