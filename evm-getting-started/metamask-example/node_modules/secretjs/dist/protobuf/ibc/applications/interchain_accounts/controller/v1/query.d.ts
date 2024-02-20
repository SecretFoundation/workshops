import * as _m0 from "protobufjs/minimal";
import { Params } from "./controller";
export declare const protobufPackage = "ibc.applications.interchain_accounts.controller.v1";
/** QueryInterchainAccountRequest is the request type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountRequest {
    owner: string;
    connection_id: string;
}
/** QueryInterchainAccountResponse the response type for the Query/InterchainAccount RPC method. */
export interface QueryInterchainAccountResponse {
    address: string;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
export declare const QueryInterchainAccountRequest: {
    encode(message: QueryInterchainAccountRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryInterchainAccountRequest;
    fromJSON(object: any): QueryInterchainAccountRequest;
    toJSON(message: QueryInterchainAccountRequest): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        connection_id?: string | undefined;
    } & {
        owner?: string | undefined;
        connection_id?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryInterchainAccountRequest>, never>>(object: I): QueryInterchainAccountRequest;
};
export declare const QueryInterchainAccountResponse: {
    encode(message: QueryInterchainAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryInterchainAccountResponse;
    fromJSON(object: any): QueryInterchainAccountResponse;
    toJSON(message: QueryInterchainAccountResponse): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): QueryInterchainAccountResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            controller_enabled?: boolean | undefined;
        } | undefined;
    } & {
        params?: ({
            controller_enabled?: boolean | undefined;
        } & {
            controller_enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["params"], "controller_enabled">, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** InterchainAccount returns the interchain account address for a given owner address on a given connection */
    InterchainAccount(request: QueryInterchainAccountRequest): Promise<QueryInterchainAccountResponse>;
    /** Params queries all parameters of the ICA controller submodule. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    InterchainAccount(request: QueryInterchainAccountRequest): Promise<QueryInterchainAccountResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
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