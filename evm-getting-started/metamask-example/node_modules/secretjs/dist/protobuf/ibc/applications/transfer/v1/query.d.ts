import * as _m0 from "protobufjs/minimal";
import { DenomTrace, Params } from "./transfer";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "ibc.applications.transfer.v1";
/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequest {
    /** hash (in hex format) or denom (full denom with ibc prefix) of the denomination trace information. */
    hash: string;
}
/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponse {
    /** denom_trace returns the requested denomination trace information. */
    denom_trace?: DenomTrace;
}
/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
}
/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponse {
    /** denom_traces returns all denominations trace information. */
    denom_traces: DenomTrace[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/**
 * QueryDenomHashRequest is the request type for the Query/DenomHash RPC
 * method
 */
export interface QueryDenomHashRequest {
    /** The denomination trace ([port_id]/[channel_id])+/[denom] */
    trace: string;
}
/**
 * QueryDenomHashResponse is the response type for the Query/DenomHash RPC
 * method.
 */
export interface QueryDenomHashResponse {
    /** hash (in hex format) of the denomination trace information. */
    hash: string;
}
/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequest {
    /** unique port identifier */
    port_id: string;
    /** unique channel identifier */
    channel_id: string;
}
/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponse {
    /** the escrow account address */
    escrow_address: string;
}
export declare const QueryDenomTraceRequest: {
    encode(message: QueryDenomTraceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDenomTraceRequest;
    fromJSON(object: any): QueryDenomTraceRequest;
    toJSON(message: QueryDenomTraceRequest): unknown;
    fromPartial<I extends {
        hash?: string | undefined;
    } & {
        hash?: string | undefined;
    } & Record<Exclude<keyof I, "hash">, never>>(object: I): QueryDenomTraceRequest;
};
export declare const QueryDenomTraceResponse: {
    encode(message: QueryDenomTraceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDenomTraceResponse;
    fromJSON(object: any): QueryDenomTraceResponse;
    toJSON(message: QueryDenomTraceResponse): unknown;
    fromPartial<I extends {
        denom_trace?: {
            path?: string | undefined;
            base_denom?: string | undefined;
        } | undefined;
    } & {
        denom_trace?: ({
            path?: string | undefined;
            base_denom?: string | undefined;
        } & {
            path?: string | undefined;
            base_denom?: string | undefined;
        } & Record<Exclude<keyof I["denom_trace"], keyof DenomTrace>, never>) | undefined;
    } & Record<Exclude<keyof I, "denom_trace">, never>>(object: I): QueryDenomTraceResponse;
};
export declare const QueryDenomTracesRequest: {
    encode(message: QueryDenomTracesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDenomTracesRequest;
    fromJSON(object: any): QueryDenomTracesRequest;
    toJSON(message: QueryDenomTracesRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryDenomTracesRequest;
};
export declare const QueryDenomTracesResponse: {
    encode(message: QueryDenomTracesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDenomTracesResponse;
    fromJSON(object: any): QueryDenomTracesResponse;
    toJSON(message: QueryDenomTracesResponse): unknown;
    fromPartial<I extends {
        denom_traces?: {
            path?: string | undefined;
            base_denom?: string | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        denom_traces?: ({
            path?: string | undefined;
            base_denom?: string | undefined;
        }[] & ({
            path?: string | undefined;
            base_denom?: string | undefined;
        } & {
            path?: string | undefined;
            base_denom?: string | undefined;
        } & Record<Exclude<keyof I["denom_traces"][number], keyof DenomTrace>, never>)[] & Record<Exclude<keyof I["denom_traces"], keyof {
            path?: string | undefined;
            base_denom?: string | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryDenomTracesResponse>, never>>(object: I): QueryDenomTracesResponse;
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
            send_enabled?: boolean | undefined;
            receive_enabled?: boolean | undefined;
        } | undefined;
    } & {
        params?: ({
            send_enabled?: boolean | undefined;
            receive_enabled?: boolean | undefined;
        } & {
            send_enabled?: boolean | undefined;
            receive_enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const QueryDenomHashRequest: {
    encode(message: QueryDenomHashRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDenomHashRequest;
    fromJSON(object: any): QueryDenomHashRequest;
    toJSON(message: QueryDenomHashRequest): unknown;
    fromPartial<I extends {
        trace?: string | undefined;
    } & {
        trace?: string | undefined;
    } & Record<Exclude<keyof I, "trace">, never>>(object: I): QueryDenomHashRequest;
};
export declare const QueryDenomHashResponse: {
    encode(message: QueryDenomHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryDenomHashResponse;
    fromJSON(object: any): QueryDenomHashResponse;
    toJSON(message: QueryDenomHashResponse): unknown;
    fromPartial<I extends {
        hash?: string | undefined;
    } & {
        hash?: string | undefined;
    } & Record<Exclude<keyof I, "hash">, never>>(object: I): QueryDenomHashResponse;
};
export declare const QueryEscrowAddressRequest: {
    encode(message: QueryEscrowAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryEscrowAddressRequest;
    fromJSON(object: any): QueryEscrowAddressRequest;
    toJSON(message: QueryEscrowAddressRequest): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryEscrowAddressRequest>, never>>(object: I): QueryEscrowAddressRequest;
};
export declare const QueryEscrowAddressResponse: {
    encode(message: QueryEscrowAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryEscrowAddressResponse;
    fromJSON(object: any): QueryEscrowAddressResponse;
    toJSON(message: QueryEscrowAddressResponse): unknown;
    fromPartial<I extends {
        escrow_address?: string | undefined;
    } & {
        escrow_address?: string | undefined;
    } & Record<Exclude<keyof I, "escrow_address">, never>>(object: I): QueryEscrowAddressResponse;
};
/** Query provides defines the gRPC querier service. */
export interface Query {
    /** DenomTrace queries a denomination trace information. */
    DenomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
    /** DenomTraces queries all denomination traces. */
    DenomTraces(request: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
    /** Params queries all parameters of the ibc-transfer module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** DenomHash queries a denomination hash information. */
    DenomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
    /** EscrowAddress returns the escrow address for a particular port and channel id. */
    EscrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    DenomTrace(request: QueryDenomTraceRequest): Promise<QueryDenomTraceResponse>;
    DenomTraces(request: QueryDenomTracesRequest): Promise<QueryDenomTracesResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    DenomHash(request: QueryDenomHashRequest): Promise<QueryDenomHashResponse>;
    EscrowAddress(request: QueryEscrowAddressRequest): Promise<QueryEscrowAddressResponse>;
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