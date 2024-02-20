import * as _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";
import { Grant, GrantAuthorization } from "./authz";
export declare const protobufPackage = "cosmos.authz.v1beta1";
/** Since: cosmos-sdk 0.43 */
/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequest {
    granter: string;
    grantee: string;
    /** Optional, msg_type_url, when set, will query only grants matching given msg type. */
    msg_type_url: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponse {
    /** authorizations is a list of grants granted for grantee by granter. */
    grants: Grant[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsRequest {
    granter: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsResponse {
    /** grants is a list of grants granted by the granter. */
    grants: GrantAuthorization[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */
export interface QueryGranteeGrantsRequest {
    grantee: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsResponse {
    /** grants is a list of grants granted to the grantee. */
    grants: GrantAuthorization[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
export declare const QueryGrantsRequest: {
    encode(message: QueryGrantsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryGrantsRequest;
    fromJSON(object: any): QueryGrantsRequest;
    toJSON(message: QueryGrantsRequest): unknown;
    fromPartial<I extends {
        granter?: string | undefined;
        grantee?: string | undefined;
        msg_type_url?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        granter?: string | undefined;
        grantee?: string | undefined;
        msg_type_url?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryGrantsRequest>, never>>(object: I): QueryGrantsRequest;
};
export declare const QueryGrantsResponse: {
    encode(message: QueryGrantsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryGrantsResponse;
    fromJSON(object: any): QueryGrantsResponse;
    toJSON(message: QueryGrantsResponse): unknown;
    fromPartial<I extends {
        grants?: {
            authorization?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        grants?: ({
            authorization?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] & ({
            authorization?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            authorization?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["grants"][number]["authorization"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
            expiration?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["grants"][number]["expiration"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
        } & Record<Exclude<keyof I["grants"][number], keyof Grant>, never>)[] & Record<Exclude<keyof I["grants"], keyof {
            authorization?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryGrantsResponse>, never>>(object: I): QueryGrantsResponse;
};
export declare const QueryGranterGrantsRequest: {
    encode(message: QueryGranterGrantsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryGranterGrantsRequest;
    fromJSON(object: any): QueryGranterGrantsRequest;
    toJSON(message: QueryGranterGrantsRequest): unknown;
    fromPartial<I extends {
        granter?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        granter?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryGranterGrantsRequest>, never>>(object: I): QueryGranterGrantsRequest;
};
export declare const QueryGranterGrantsResponse: {
    encode(message: QueryGranterGrantsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryGranterGrantsResponse;
    fromJSON(object: any): QueryGranterGrantsResponse;
    toJSON(message: QueryGranterGrantsResponse): unknown;
    fromPartial<I extends {
        grants?: {
            granter?: string | undefined;
            grantee?: string | undefined;
            authorization?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        grants?: ({
            granter?: string | undefined;
            grantee?: string | undefined;
            authorization?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] & ({
            granter?: string | undefined;
            grantee?: string | undefined;
            authorization?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            granter?: string | undefined;
            grantee?: string | undefined;
            authorization?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["grants"][number]["authorization"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
            expiration?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["grants"][number]["expiration"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
        } & Record<Exclude<keyof I["grants"][number], keyof GrantAuthorization>, never>)[] & Record<Exclude<keyof I["grants"], keyof {
            granter?: string | undefined;
            grantee?: string | undefined;
            authorization?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryGranterGrantsResponse>, never>>(object: I): QueryGranterGrantsResponse;
};
export declare const QueryGranteeGrantsRequest: {
    encode(message: QueryGranteeGrantsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryGranteeGrantsRequest;
    fromJSON(object: any): QueryGranteeGrantsRequest;
    toJSON(message: QueryGranteeGrantsRequest): unknown;
    fromPartial<I extends {
        grantee?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        grantee?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryGranteeGrantsRequest>, never>>(object: I): QueryGranteeGrantsRequest;
};
export declare const QueryGranteeGrantsResponse: {
    encode(message: QueryGranteeGrantsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryGranteeGrantsResponse;
    fromJSON(object: any): QueryGranteeGrantsResponse;
    toJSON(message: QueryGranteeGrantsResponse): unknown;
    fromPartial<I extends {
        grants?: {
            granter?: string | undefined;
            grantee?: string | undefined;
            authorization?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        grants?: ({
            granter?: string | undefined;
            grantee?: string | undefined;
            authorization?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[] & ({
            granter?: string | undefined;
            grantee?: string | undefined;
            authorization?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            granter?: string | undefined;
            grantee?: string | undefined;
            authorization?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["grants"][number]["authorization"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
            expiration?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["grants"][number]["expiration"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
        } & Record<Exclude<keyof I["grants"][number], keyof GrantAuthorization>, never>)[] & Record<Exclude<keyof I["grants"], keyof {
            granter?: string | undefined;
            grantee?: string | undefined;
            authorization?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            expiration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryGranteeGrantsResponse>, never>>(object: I): QueryGranteeGrantsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Returns list of `Authorization`, granted to the grantee by the granter. */
    Grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
    /**
     * GranterGrants returns list of `GrantAuthorization`, granted by granter.
     *
     * Since: cosmos-sdk 0.45.2
     */
    GranterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse>;
    /**
     * GranteeGrants returns a list of `GrantAuthorization` by grantee.
     *
     * Since: cosmos-sdk 0.45.2
     */
    GranteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Grants(request: QueryGrantsRequest): Promise<QueryGrantsResponse>;
    GranterGrants(request: QueryGranterGrantsRequest): Promise<QueryGranterGrantsResponse>;
    GranteeGrants(request: QueryGranteeGrantsRequest): Promise<QueryGranteeGrantsResponse>;
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