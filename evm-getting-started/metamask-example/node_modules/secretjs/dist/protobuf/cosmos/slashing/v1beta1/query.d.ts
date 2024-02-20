import * as _m0 from "protobufjs/minimal";
import { Params, ValidatorSigningInfo } from "./slashing";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
export declare const protobufPackage = "cosmos.slashing.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
    params?: Params;
}
/**
 * QuerySigningInfoRequest is the request type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoRequest {
    /** cons_address is the address to query signing info of */
    cons_address: string;
}
/**
 * QuerySigningInfoResponse is the response type for the Query/SigningInfo RPC
 * method
 */
export interface QuerySigningInfoResponse {
    /** val_signing_info is the signing info of requested val cons address */
    val_signing_info?: ValidatorSigningInfo;
}
/**
 * QuerySigningInfosRequest is the request type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosRequest {
    pagination?: PageRequest;
}
/**
 * QuerySigningInfosResponse is the response type for the Query/SigningInfos RPC
 * method
 */
export interface QuerySigningInfosResponse {
    /** info is the signing info of all validators */
    info: ValidatorSigningInfo[];
    pagination?: PageResponse;
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
            signed_blocks_window?: string | undefined;
            min_signed_per_window?: Uint8Array | undefined;
            downtime_jail_duration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            slash_fraction_double_sign?: Uint8Array | undefined;
            slash_fraction_downtime?: Uint8Array | undefined;
        } | undefined;
    } & {
        params?: ({
            signed_blocks_window?: string | undefined;
            min_signed_per_window?: Uint8Array | undefined;
            downtime_jail_duration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            slash_fraction_double_sign?: Uint8Array | undefined;
            slash_fraction_downtime?: Uint8Array | undefined;
        } & {
            signed_blocks_window?: string | undefined;
            min_signed_per_window?: Uint8Array | undefined;
            downtime_jail_duration?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["params"]["downtime_jail_duration"], keyof import("../../../google/protobuf/duration").Duration>, never>) | undefined;
            slash_fraction_double_sign?: Uint8Array | undefined;
            slash_fraction_downtime?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const QuerySigningInfoRequest: {
    encode(message: QuerySigningInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QuerySigningInfoRequest;
    fromJSON(object: any): QuerySigningInfoRequest;
    toJSON(message: QuerySigningInfoRequest): unknown;
    fromPartial<I extends {
        cons_address?: string | undefined;
    } & {
        cons_address?: string | undefined;
    } & Record<Exclude<keyof I, "cons_address">, never>>(object: I): QuerySigningInfoRequest;
};
export declare const QuerySigningInfoResponse: {
    encode(message: QuerySigningInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QuerySigningInfoResponse;
    fromJSON(object: any): QuerySigningInfoResponse;
    toJSON(message: QuerySigningInfoResponse): unknown;
    fromPartial<I extends {
        val_signing_info?: {
            address?: string | undefined;
            start_height?: string | undefined;
            index_offset?: string | undefined;
            jailed_until?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            tombstoned?: boolean | undefined;
            missed_blocks_counter?: string | undefined;
        } | undefined;
    } & {
        val_signing_info?: ({
            address?: string | undefined;
            start_height?: string | undefined;
            index_offset?: string | undefined;
            jailed_until?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            tombstoned?: boolean | undefined;
            missed_blocks_counter?: string | undefined;
        } & {
            address?: string | undefined;
            start_height?: string | undefined;
            index_offset?: string | undefined;
            jailed_until?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["val_signing_info"]["jailed_until"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            tombstoned?: boolean | undefined;
            missed_blocks_counter?: string | undefined;
        } & Record<Exclude<keyof I["val_signing_info"], keyof ValidatorSigningInfo>, never>) | undefined;
    } & Record<Exclude<keyof I, "val_signing_info">, never>>(object: I): QuerySigningInfoResponse;
};
export declare const QuerySigningInfosRequest: {
    encode(message: QuerySigningInfosRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QuerySigningInfosRequest;
    fromJSON(object: any): QuerySigningInfosRequest;
    toJSON(message: QuerySigningInfosRequest): unknown;
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
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QuerySigningInfosRequest;
};
export declare const QuerySigningInfosResponse: {
    encode(message: QuerySigningInfosResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QuerySigningInfosResponse;
    fromJSON(object: any): QuerySigningInfosResponse;
    toJSON(message: QuerySigningInfosResponse): unknown;
    fromPartial<I extends {
        info?: {
            address?: string | undefined;
            start_height?: string | undefined;
            index_offset?: string | undefined;
            jailed_until?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            tombstoned?: boolean | undefined;
            missed_blocks_counter?: string | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        info?: ({
            address?: string | undefined;
            start_height?: string | undefined;
            index_offset?: string | undefined;
            jailed_until?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            tombstoned?: boolean | undefined;
            missed_blocks_counter?: string | undefined;
        }[] & ({
            address?: string | undefined;
            start_height?: string | undefined;
            index_offset?: string | undefined;
            jailed_until?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            tombstoned?: boolean | undefined;
            missed_blocks_counter?: string | undefined;
        } & {
            address?: string | undefined;
            start_height?: string | undefined;
            index_offset?: string | undefined;
            jailed_until?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["info"][number]["jailed_until"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            tombstoned?: boolean | undefined;
            missed_blocks_counter?: string | undefined;
        } & Record<Exclude<keyof I["info"][number], keyof ValidatorSigningInfo>, never>)[] & Record<Exclude<keyof I["info"], keyof {
            address?: string | undefined;
            start_height?: string | undefined;
            index_offset?: string | undefined;
            jailed_until?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            tombstoned?: boolean | undefined;
            missed_blocks_counter?: string | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QuerySigningInfosResponse>, never>>(object: I): QuerySigningInfosResponse;
};
/** Query provides defines the gRPC querier service */
export interface Query {
    /** Params queries the parameters of slashing module */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** SigningInfo queries the signing info of given cons address */
    SigningInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse>;
    /** SigningInfos queries signing info of all validators */
    SigningInfos(request: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    SigningInfo(request: QuerySigningInfoRequest): Promise<QuerySigningInfoResponse>;
    SigningInfos(request: QuerySigningInfosRequest): Promise<QuerySigningInfosResponse>;
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