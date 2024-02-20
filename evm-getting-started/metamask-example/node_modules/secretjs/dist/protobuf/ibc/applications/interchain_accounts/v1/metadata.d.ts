import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "ibc.applications.interchain_accounts.v1";
/**
 * Metadata defines a set of protocol specific data encoded into the ICS27 channel version bytestring
 * See ICS004: https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#Versioning
 */
export interface Metadata {
    /** version defines the ICS27 protocol version */
    version: string;
    /** controller_connection_id is the connection identifier associated with the controller chain */
    controller_connection_id: string;
    /** host_connection_id is the connection identifier associated with the host chain */
    host_connection_id: string;
    /**
     * address defines the interchain account address to be fulfilled upon the OnChanOpenTry handshake step
     * NOTE: the address field is empty on the OnChanOpenInit handshake step
     */
    address: string;
    /** encoding defines the supported codec format */
    encoding: string;
    /** tx_type defines the type of transactions the interchain account can execute */
    tx_type: string;
}
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    fromPartial<I extends {
        version?: string | undefined;
        controller_connection_id?: string | undefined;
        host_connection_id?: string | undefined;
        address?: string | undefined;
        encoding?: string | undefined;
        tx_type?: string | undefined;
    } & {
        version?: string | undefined;
        controller_connection_id?: string | undefined;
        host_connection_id?: string | undefined;
        address?: string | undefined;
        encoding?: string | undefined;
        tx_type?: string | undefined;
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