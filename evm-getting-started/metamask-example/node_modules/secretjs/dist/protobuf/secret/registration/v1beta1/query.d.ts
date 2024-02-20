import * as _m0 from "protobufjs/minimal";
import { Key } from "./msg";
import { Empty } from "../../../google/protobuf/empty";
export declare const protobufPackage = "secret.registration.v1beta1";
export interface QueryEncryptedSeedRequest {
    pub_key: Uint8Array;
}
export interface QueryEncryptedSeedResponse {
    /** [(gogoproto.nullable) = false]; */
    encrypted_seed: Uint8Array;
}
export declare const QueryEncryptedSeedRequest: {
    encode(message: QueryEncryptedSeedRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryEncryptedSeedRequest;
    fromJSON(object: any): QueryEncryptedSeedRequest;
    toJSON(message: QueryEncryptedSeedRequest): unknown;
    fromPartial<I extends {
        pub_key?: Uint8Array | undefined;
    } & {
        pub_key?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "pub_key">, never>>(object: I): QueryEncryptedSeedRequest;
};
export declare const QueryEncryptedSeedResponse: {
    encode(message: QueryEncryptedSeedResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryEncryptedSeedResponse;
    fromJSON(object: any): QueryEncryptedSeedResponse;
    toJSON(message: QueryEncryptedSeedResponse): unknown;
    fromPartial<I extends {
        encrypted_seed?: Uint8Array | undefined;
    } & {
        encrypted_seed?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "encrypted_seed">, never>>(object: I): QueryEncryptedSeedResponse;
};
/** Query provides defines the gRPC querier service */
export interface Query {
    /** Returns the key used for transactions */
    TxKey(request: Empty): Promise<Key>;
    /** Returns the key used for registration */
    RegistrationKey(request: Empty): Promise<Key>;
    /** Returns the encrypted seed for a registered node by public key */
    EncryptedSeed(request: QueryEncryptedSeedRequest): Promise<QueryEncryptedSeedResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    TxKey(request: Empty): Promise<Key>;
    RegistrationKey(request: Empty): Promise<Key>;
    EncryptedSeed(request: QueryEncryptedSeedRequest): Promise<QueryEncryptedSeedResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
//# sourceMappingURL=query.d.ts.map