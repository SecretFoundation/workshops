import * as _m0 from "protobufjs/minimal";
import { ConnectionEnd, IdentifiedConnection } from "./connection";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
export declare const protobufPackage = "ibc.core.connection.v1";
/**
 * QueryConnectionRequest is the request type for the Query/Connection RPC
 * method
 */
export interface QueryConnectionRequest {
    /** connection unique identifier */
    connection_id: string;
}
/**
 * QueryConnectionResponse is the response type for the Query/Connection RPC
 * method. Besides the connection end, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryConnectionResponse {
    /** connection associated with the request identifier */
    connection?: ConnectionEnd;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: Height;
}
/**
 * QueryConnectionsRequest is the request type for the Query/Connections RPC
 * method
 */
export interface QueryConnectionsRequest {
    pagination?: PageRequest;
}
/**
 * QueryConnectionsResponse is the response type for the Query/Connections RPC
 * method.
 */
export interface QueryConnectionsResponse {
    /** list of stored connections of the chain. */
    connections: IdentifiedConnection[];
    /** pagination response */
    pagination?: PageResponse;
    /** query block height */
    height?: Height;
}
/**
 * QueryClientConnectionsRequest is the request type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsRequest {
    /** client identifier associated with a connection */
    client_id: string;
}
/**
 * QueryClientConnectionsResponse is the response type for the
 * Query/ClientConnections RPC method
 */
export interface QueryClientConnectionsResponse {
    /** slice of all the connection paths associated with a client. */
    connection_paths: string[];
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was generated */
    proof_height?: Height;
}
/**
 * QueryConnectionClientStateRequest is the request type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateRequest {
    /** connection identifier */
    connection_id: string;
}
/**
 * QueryConnectionClientStateResponse is the response type for the
 * Query/ConnectionClientState RPC method
 */
export interface QueryConnectionClientStateResponse {
    /** client state associated with the channel */
    identified_client_state?: IdentifiedClientState;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: Height;
}
/**
 * QueryConnectionConsensusStateRequest is the request type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateRequest {
    /** connection identifier */
    connection_id: string;
    revision_number: string;
    revision_height: string;
}
/**
 * QueryConnectionConsensusStateResponse is the response type for the
 * Query/ConnectionConsensusState RPC method
 */
export interface QueryConnectionConsensusStateResponse {
    /** consensus state associated with the channel */
    consensus_state?: Any;
    /** client ID associated with the consensus state */
    client_id: string;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: Height;
}
export declare const QueryConnectionRequest: {
    encode(message: QueryConnectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryConnectionRequest;
    fromJSON(object: any): QueryConnectionRequest;
    toJSON(message: QueryConnectionRequest): unknown;
    fromPartial<I extends {
        connection_id?: string | undefined;
    } & {
        connection_id?: string | undefined;
    } & Record<Exclude<keyof I, "connection_id">, never>>(object: I): QueryConnectionRequest;
};
export declare const QueryConnectionResponse: {
    encode(message: QueryConnectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryConnectionResponse;
    fromJSON(object: any): QueryConnectionResponse;
    toJSON(message: QueryConnectionResponse): unknown;
    fromPartial<I extends {
        connection?: {
            client_id?: string | undefined;
            versions?: {
                identifier?: string | undefined;
                features?: string[] | undefined;
            }[] | undefined;
            state?: import("./connection").State | undefined;
            counterparty?: {
                client_id?: string | undefined;
                connection_id?: string | undefined;
                prefix?: {
                    key_prefix?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            delay_period?: string | undefined;
        } | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
    } & {
        connection?: ({
            client_id?: string | undefined;
            versions?: {
                identifier?: string | undefined;
                features?: string[] | undefined;
            }[] | undefined;
            state?: import("./connection").State | undefined;
            counterparty?: {
                client_id?: string | undefined;
                connection_id?: string | undefined;
                prefix?: {
                    key_prefix?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            delay_period?: string | undefined;
        } & {
            client_id?: string | undefined;
            versions?: ({
                identifier?: string | undefined;
                features?: string[] | undefined;
            }[] & ({
                identifier?: string | undefined;
                features?: string[] | undefined;
            } & {
                identifier?: string | undefined;
                features?: (string[] & string[] & Record<Exclude<keyof I["connection"]["versions"][number]["features"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["connection"]["versions"][number], keyof import("./connection").Version>, never>)[] & Record<Exclude<keyof I["connection"]["versions"], keyof {
                identifier?: string | undefined;
                features?: string[] | undefined;
            }[]>, never>) | undefined;
            state?: import("./connection").State | undefined;
            counterparty?: ({
                client_id?: string | undefined;
                connection_id?: string | undefined;
                prefix?: {
                    key_prefix?: Uint8Array | undefined;
                } | undefined;
            } & {
                client_id?: string | undefined;
                connection_id?: string | undefined;
                prefix?: ({
                    key_prefix?: Uint8Array | undefined;
                } & {
                    key_prefix?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["connection"]["counterparty"]["prefix"], "key_prefix">, never>) | undefined;
            } & Record<Exclude<keyof I["connection"]["counterparty"], keyof import("./connection").Counterparty>, never>) | undefined;
            delay_period?: string | undefined;
        } & Record<Exclude<keyof I["connection"], keyof ConnectionEnd>, never>) | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryConnectionResponse>, never>>(object: I): QueryConnectionResponse;
};
export declare const QueryConnectionsRequest: {
    encode(message: QueryConnectionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryConnectionsRequest;
    fromJSON(object: any): QueryConnectionsRequest;
    toJSON(message: QueryConnectionsRequest): unknown;
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
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryConnectionsRequest;
};
export declare const QueryConnectionsResponse: {
    encode(message: QueryConnectionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryConnectionsResponse;
    fromJSON(object: any): QueryConnectionsResponse;
    toJSON(message: QueryConnectionsResponse): unknown;
    fromPartial<I extends {
        connections?: {
            id?: string | undefined;
            client_id?: string | undefined;
            versions?: {
                identifier?: string | undefined;
                features?: string[] | undefined;
            }[] | undefined;
            state?: import("./connection").State | undefined;
            counterparty?: {
                client_id?: string | undefined;
                connection_id?: string | undefined;
                prefix?: {
                    key_prefix?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            delay_period?: string | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
        height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
    } & {
        connections?: ({
            id?: string | undefined;
            client_id?: string | undefined;
            versions?: {
                identifier?: string | undefined;
                features?: string[] | undefined;
            }[] | undefined;
            state?: import("./connection").State | undefined;
            counterparty?: {
                client_id?: string | undefined;
                connection_id?: string | undefined;
                prefix?: {
                    key_prefix?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            delay_period?: string | undefined;
        }[] & ({
            id?: string | undefined;
            client_id?: string | undefined;
            versions?: {
                identifier?: string | undefined;
                features?: string[] | undefined;
            }[] | undefined;
            state?: import("./connection").State | undefined;
            counterparty?: {
                client_id?: string | undefined;
                connection_id?: string | undefined;
                prefix?: {
                    key_prefix?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            delay_period?: string | undefined;
        } & {
            id?: string | undefined;
            client_id?: string | undefined;
            versions?: ({
                identifier?: string | undefined;
                features?: string[] | undefined;
            }[] & ({
                identifier?: string | undefined;
                features?: string[] | undefined;
            } & {
                identifier?: string | undefined;
                features?: (string[] & string[] & Record<Exclude<keyof I["connections"][number]["versions"][number]["features"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["connections"][number]["versions"][number], keyof import("./connection").Version>, never>)[] & Record<Exclude<keyof I["connections"][number]["versions"], keyof {
                identifier?: string | undefined;
                features?: string[] | undefined;
            }[]>, never>) | undefined;
            state?: import("./connection").State | undefined;
            counterparty?: ({
                client_id?: string | undefined;
                connection_id?: string | undefined;
                prefix?: {
                    key_prefix?: Uint8Array | undefined;
                } | undefined;
            } & {
                client_id?: string | undefined;
                connection_id?: string | undefined;
                prefix?: ({
                    key_prefix?: Uint8Array | undefined;
                } & {
                    key_prefix?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["connections"][number]["counterparty"]["prefix"], "key_prefix">, never>) | undefined;
            } & Record<Exclude<keyof I["connections"][number]["counterparty"], keyof import("./connection").Counterparty>, never>) | undefined;
            delay_period?: string | undefined;
        } & Record<Exclude<keyof I["connections"][number], keyof IdentifiedConnection>, never>)[] & Record<Exclude<keyof I["connections"], keyof {
            id?: string | undefined;
            client_id?: string | undefined;
            versions?: {
                identifier?: string | undefined;
                features?: string[] | undefined;
            }[] | undefined;
            state?: import("./connection").State | undefined;
            counterparty?: {
                client_id?: string | undefined;
                connection_id?: string | undefined;
                prefix?: {
                    key_prefix?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            delay_period?: string | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
        height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["height"], keyof Height>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryConnectionsResponse>, never>>(object: I): QueryConnectionsResponse;
};
export declare const QueryClientConnectionsRequest: {
    encode(message: QueryClientConnectionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryClientConnectionsRequest;
    fromJSON(object: any): QueryClientConnectionsRequest;
    toJSON(message: QueryClientConnectionsRequest): unknown;
    fromPartial<I extends {
        client_id?: string | undefined;
    } & {
        client_id?: string | undefined;
    } & Record<Exclude<keyof I, "client_id">, never>>(object: I): QueryClientConnectionsRequest;
};
export declare const QueryClientConnectionsResponse: {
    encode(message: QueryClientConnectionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryClientConnectionsResponse;
    fromJSON(object: any): QueryClientConnectionsResponse;
    toJSON(message: QueryClientConnectionsResponse): unknown;
    fromPartial<I extends {
        connection_paths?: string[] | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
    } & {
        connection_paths?: (string[] & string[] & Record<Exclude<keyof I["connection_paths"], keyof string[]>, never>) | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryClientConnectionsResponse>, never>>(object: I): QueryClientConnectionsResponse;
};
export declare const QueryConnectionClientStateRequest: {
    encode(message: QueryConnectionClientStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryConnectionClientStateRequest;
    fromJSON(object: any): QueryConnectionClientStateRequest;
    toJSON(message: QueryConnectionClientStateRequest): unknown;
    fromPartial<I extends {
        connection_id?: string | undefined;
    } & {
        connection_id?: string | undefined;
    } & Record<Exclude<keyof I, "connection_id">, never>>(object: I): QueryConnectionClientStateRequest;
};
export declare const QueryConnectionClientStateResponse: {
    encode(message: QueryConnectionClientStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryConnectionClientStateResponse;
    fromJSON(object: any): QueryConnectionClientStateResponse;
    toJSON(message: QueryConnectionClientStateResponse): unknown;
    fromPartial<I extends {
        identified_client_state?: {
            client_id?: string | undefined;
            client_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
    } & {
        identified_client_state?: ({
            client_id?: string | undefined;
            client_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            client_id?: string | undefined;
            client_state?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["identified_client_state"]["client_state"], keyof Any>, never>) | undefined;
        } & Record<Exclude<keyof I["identified_client_state"], keyof IdentifiedClientState>, never>) | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryConnectionClientStateResponse>, never>>(object: I): QueryConnectionClientStateResponse;
};
export declare const QueryConnectionConsensusStateRequest: {
    encode(message: QueryConnectionConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryConnectionConsensusStateRequest;
    fromJSON(object: any): QueryConnectionConsensusStateRequest;
    toJSON(message: QueryConnectionConsensusStateRequest): unknown;
    fromPartial<I extends {
        connection_id?: string | undefined;
        revision_number?: string | undefined;
        revision_height?: string | undefined;
    } & {
        connection_id?: string | undefined;
        revision_number?: string | undefined;
        revision_height?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryConnectionConsensusStateRequest>, never>>(object: I): QueryConnectionConsensusStateRequest;
};
export declare const QueryConnectionConsensusStateResponse: {
    encode(message: QueryConnectionConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryConnectionConsensusStateResponse;
    fromJSON(object: any): QueryConnectionConsensusStateResponse;
    toJSON(message: QueryConnectionConsensusStateResponse): unknown;
    fromPartial<I extends {
        consensus_state?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        client_id?: string | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
    } & {
        consensus_state?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["consensus_state"], keyof Any>, never>) | undefined;
        client_id?: string | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryConnectionConsensusStateResponse>, never>>(object: I): QueryConnectionConsensusStateResponse;
};
/** Query provides defines the gRPC querier service */
export interface Query {
    /** Connection queries an IBC connection end. */
    Connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse>;
    /** Connections queries all the IBC connections of a chain. */
    Connections(request: QueryConnectionsRequest): Promise<QueryConnectionsResponse>;
    /**
     * ClientConnections queries the connection paths associated with a client
     * state.
     */
    ClientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse>;
    /**
     * ConnectionClientState queries the client state associated with the
     * connection.
     */
    ConnectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse>;
    /**
     * ConnectionConsensusState queries the consensus state associated with the
     * connection.
     */
    ConnectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Connection(request: QueryConnectionRequest): Promise<QueryConnectionResponse>;
    Connections(request: QueryConnectionsRequest): Promise<QueryConnectionsResponse>;
    ClientConnections(request: QueryClientConnectionsRequest): Promise<QueryClientConnectionsResponse>;
    ConnectionClientState(request: QueryConnectionClientStateRequest): Promise<QueryConnectionClientStateResponse>;
    ConnectionConsensusState(request: QueryConnectionConsensusStateRequest): Promise<QueryConnectionConsensusStateResponse>;
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