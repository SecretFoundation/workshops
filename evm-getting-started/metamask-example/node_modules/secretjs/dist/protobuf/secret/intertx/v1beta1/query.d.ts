import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "secret.intertx.v1beta1";
/** QueryInterchainAccountFromAddressRequest is the request type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountFromAddressRequest {
    owner: string;
    connection_id: string;
}
/** QueryInterchainAccountFromAddressResponse the response type for the Query/InterchainAccountAddress RPC */
export interface QueryInterchainAccountFromAddressResponse {
    interchain_account_address: string;
}
export declare const QueryInterchainAccountFromAddressRequest: {
    encode(message: QueryInterchainAccountFromAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryInterchainAccountFromAddressRequest;
    fromJSON(object: any): QueryInterchainAccountFromAddressRequest;
    toJSON(message: QueryInterchainAccountFromAddressRequest): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        connection_id?: string | undefined;
    } & {
        owner?: string | undefined;
        connection_id?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryInterchainAccountFromAddressRequest>, never>>(object: I): QueryInterchainAccountFromAddressRequest;
};
export declare const QueryInterchainAccountFromAddressResponse: {
    encode(message: QueryInterchainAccountFromAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryInterchainAccountFromAddressResponse;
    fromJSON(object: any): QueryInterchainAccountFromAddressResponse;
    toJSON(message: QueryInterchainAccountFromAddressResponse): unknown;
    fromPartial<I extends {
        interchain_account_address?: string | undefined;
    } & {
        interchain_account_address?: string | undefined;
    } & Record<Exclude<keyof I, "interchain_account_address">, never>>(object: I): QueryInterchainAccountFromAddressResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** QueryInterchainAccountFromAddress returns the interchain account for given owner address on a given connection pair */
    InterchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    InterchainAccountFromAddress(request: QueryInterchainAccountFromAddressRequest): Promise<QueryInterchainAccountFromAddressResponse>;
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