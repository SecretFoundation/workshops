import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "ibc.applications.fee.v1";
/**
 * Metadata defines the ICS29 channel specific metadata encoded into the channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 */
export interface Metadata {
    /** fee_version defines the ICS29 fee version */
    fee_version: string;
    /** app_version defines the underlying application version, which may or may not be a JSON encoded bytestring */
    app_version: string;
}
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    fromPartial<I extends {
        fee_version?: string | undefined;
        app_version?: string | undefined;
    } & {
        fee_version?: string | undefined;
        app_version?: string | undefined;
    } & Record<Exclude<keyof I, keyof Metadata>, never>>(object: I): Metadata;
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
//# sourceMappingURL=metadata.d.ts.map