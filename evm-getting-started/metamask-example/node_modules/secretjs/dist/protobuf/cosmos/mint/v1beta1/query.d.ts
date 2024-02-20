import * as _m0 from "protobufjs/minimal";
import { Params } from "./mint";
export declare const protobufPackage = "cosmos.mint.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/** QueryInflationRequest is the request type for the Query/Inflation RPC method. */
export interface QueryInflationRequest {
}
/**
 * QueryInflationResponse is the response type for the Query/Inflation RPC
 * method.
 */
export interface QueryInflationResponse {
    /** inflation is the current minting inflation value. */
    inflation: Uint8Array;
}
/**
 * QueryAnnualProvisionsRequest is the request type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsRequest {
}
/**
 * QueryAnnualProvisionsResponse is the response type for the
 * Query/AnnualProvisions RPC method.
 */
export interface QueryAnnualProvisionsResponse {
    /** annual_provisions is the current minting annual provisions value. */
    annual_provisions: Uint8Array;
}
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
            mint_denom?: string | undefined;
            inflation_rate_change?: string | undefined;
            inflation_max?: string | undefined;
            inflation_min?: string | undefined;
            goal_bonded?: string | undefined;
            blocks_per_year?: string | undefined;
        } | undefined;
    } & {
        params?: ({
            mint_denom?: string | undefined;
            inflation_rate_change?: string | undefined;
            inflation_max?: string | undefined;
            inflation_min?: string | undefined;
            goal_bonded?: string | undefined;
            blocks_per_year?: string | undefined;
        } & {
            mint_denom?: string | undefined;
            inflation_rate_change?: string | undefined;
            inflation_max?: string | undefined;
            inflation_min?: string | undefined;
            goal_bonded?: string | undefined;
            blocks_per_year?: string | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const QueryInflationRequest: {
    encode(_: QueryInflationRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryInflationRequest;
    fromJSON(_: any): QueryInflationRequest;
    toJSON(_: QueryInflationRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryInflationRequest;
};
export declare const QueryInflationResponse: {
    encode(message: QueryInflationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryInflationResponse;
    fromJSON(object: any): QueryInflationResponse;
    toJSON(message: QueryInflationResponse): unknown;
    fromPartial<I extends {
        inflation?: Uint8Array | undefined;
    } & {
        inflation?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "inflation">, never>>(object: I): QueryInflationResponse;
};
export declare const QueryAnnualProvisionsRequest: {
    encode(_: QueryAnnualProvisionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryAnnualProvisionsRequest;
    fromJSON(_: any): QueryAnnualProvisionsRequest;
    toJSON(_: QueryAnnualProvisionsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryAnnualProvisionsRequest;
};
export declare const QueryAnnualProvisionsResponse: {
    encode(message: QueryAnnualProvisionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryAnnualProvisionsResponse;
    fromJSON(object: any): QueryAnnualProvisionsResponse;
    toJSON(message: QueryAnnualProvisionsResponse): unknown;
    fromPartial<I extends {
        annual_provisions?: Uint8Array | undefined;
    } & {
        annual_provisions?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "annual_provisions">, never>>(object: I): QueryAnnualProvisionsResponse;
};
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** Params returns the total set of minting parameters. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Inflation returns the current minting inflation value. */
    Inflation(request: QueryInflationRequest): Promise<QueryInflationResponse>;
    /** AnnualProvisions current minting annual provisions value. */
    AnnualProvisions(request: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Inflation(request: QueryInflationRequest): Promise<QueryInflationResponse>;
    AnnualProvisions(request: QueryAnnualProvisionsRequest): Promise<QueryAnnualProvisionsResponse>;
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