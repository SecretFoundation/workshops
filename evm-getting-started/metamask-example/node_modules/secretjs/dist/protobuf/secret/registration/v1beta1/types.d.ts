import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "secret.registration.v1beta1";
export interface SeedConfig {
    master_key: string;
    encrypted_key: string;
    version: number;
}
export interface LegacySeedConfig {
    master_cert: string;
    encrypted_key: string;
}
export interface RegistrationNodeInfo {
    certificate: Uint8Array;
    encrypted_seed: Uint8Array;
}
export declare const SeedConfig: {
    encode(message: SeedConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SeedConfig;
    fromJSON(object: any): SeedConfig;
    toJSON(message: SeedConfig): unknown;
    fromPartial<I extends {
        master_key?: string | undefined;
        encrypted_key?: string | undefined;
        version?: number | undefined;
    } & {
        master_key?: string | undefined;
        encrypted_key?: string | undefined;
        version?: number | undefined;
    } & Record<Exclude<keyof I, keyof SeedConfig>, never>>(object: I): SeedConfig;
};
export declare const LegacySeedConfig: {
    encode(message: LegacySeedConfig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LegacySeedConfig;
    fromJSON(object: any): LegacySeedConfig;
    toJSON(message: LegacySeedConfig): unknown;
    fromPartial<I extends {
        master_cert?: string | undefined;
        encrypted_key?: string | undefined;
    } & {
        master_cert?: string | undefined;
        encrypted_key?: string | undefined;
    } & Record<Exclude<keyof I, keyof LegacySeedConfig>, never>>(object: I): LegacySeedConfig;
};
export declare const RegistrationNodeInfo: {
    encode(message: RegistrationNodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegistrationNodeInfo;
    fromJSON(object: any): RegistrationNodeInfo;
    toJSON(message: RegistrationNodeInfo): unknown;
    fromPartial<I extends {
        certificate?: Uint8Array | undefined;
        encrypted_seed?: Uint8Array | undefined;
    } & {
        certificate?: Uint8Array | undefined;
        encrypted_seed?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof RegistrationNodeInfo>, never>>(object: I): RegistrationNodeInfo;
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
//# sourceMappingURL=types.d.ts.map