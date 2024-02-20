import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { Height, Params, IdentifiedClientState, ConsensusStateWithHeight } from "./client";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "ibc.core.client.v1";
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequest {
    /** client state unique identifier */
    client_id: string;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponse {
    /** client state associated with the request identifier */
    client_state?: Any;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: Height;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequest {
    /** pagination request */
    pagination?: PageRequest;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponse {
    /** list of stored ClientStates of the chain. */
    client_states: IdentifiedClientState[];
    /** pagination response */
    pagination?: PageResponse;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequest {
    /** client identifier */
    client_id: string;
    /** consensus state revision number */
    revision_number: string;
    /** consensus state revision height */
    revision_height: string;
    /**
     * latest_height overrrides the height field and queries the latest stored
     * ConsensusState
     */
    latest_height: boolean;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponse {
    /** consensus state associated with the client identifier at the given height */
    consensus_state?: Any;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: Height;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequest {
    /** client identifier */
    client_id: string;
    /** pagination request */
    pagination?: PageRequest;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponse {
    /** consensus states associated with the identifier */
    consensus_states: ConsensusStateWithHeight[];
    /** pagination response */
    pagination?: PageResponse;
}
/**
 * QueryConsensusStateHeightsRequest is the request type for Query/ConsensusStateHeights
 * RPC method.
 */
export interface QueryConsensusStateHeightsRequest {
    /** client identifier */
    client_id: string;
    /** pagination request */
    pagination?: PageRequest;
}
/**
 * QueryConsensusStateHeightsResponse is the response type for the
 * Query/ConsensusStateHeights RPC method
 */
export interface QueryConsensusStateHeightsResponse {
    /** consensus state heights */
    consensus_state_heights: Height[];
    /** pagination response */
    pagination?: PageResponse;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 */
export interface QueryClientStatusRequest {
    /** client unique identifier */
    client_id: string;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 */
export interface QueryClientStatusResponse {
    status: string;
}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsRequest {
}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 */
export interface QueryUpgradedClientStateRequest {
}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 */
export interface QueryUpgradedClientStateResponse {
    /** client state associated with the request identifier */
    upgraded_client_state?: Any;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 */
export interface QueryUpgradedConsensusStateRequest {
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 */
export interface QueryUpgradedConsensusStateResponse {
    /** Consensus state associated with the request identifier */
    upgraded_consensus_state?: Any;
}
export declare const QueryClientStateRequest: {
    encode(message: QueryClientStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryClientStateRequest;
    fromJSON(object: any): QueryClientStateRequest;
    toJSON(message: QueryClientStateRequest): unknown;
    fromPartial<I extends {
        client_id?: string | undefined;
    } & {
        client_id?: string | undefined;
    } & Record<Exclude<keyof I, "client_id">, never>>(object: I): QueryClientStateRequest;
};
export declare const QueryClientStateResponse: {
    encode(message: QueryClientStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryClientStateResponse;
    fromJSON(object: any): QueryClientStateResponse;
    toJSON(message: QueryClientStateResponse): unknown;
    fromPartial<I extends {
        client_state?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
    } & {
        client_state?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["client_state"], keyof Any>, never>) | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryClientStateResponse>, never>>(object: I): QueryClientStateResponse;
};
export declare const QueryClientStatesRequest: {
    encode(message: QueryClientStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryClientStatesRequest;
    fromJSON(object: any): QueryClientStatesRequest;
    toJSON(message: QueryClientStatesRequest): unknown;
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
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryClientStatesRequest;
};
export declare const QueryClientStatesResponse: {
    encode(message: QueryClientStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryClientStatesResponse;
    fromJSON(object: any): QueryClientStatesResponse;
    toJSON(message: QueryClientStatesResponse): unknown;
    fromPartial<I extends {
        client_states?: {
            client_id?: string | undefined;
            client_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        client_states?: ({
            client_id?: string | undefined;
            client_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] & ({
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
            } & Record<Exclude<keyof I["client_states"][number]["client_state"], keyof Any>, never>) | undefined;
        } & Record<Exclude<keyof I["client_states"][number], keyof IdentifiedClientState>, never>)[] & Record<Exclude<keyof I["client_states"], keyof {
            client_id?: string | undefined;
            client_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryClientStatesResponse>, never>>(object: I): QueryClientStatesResponse;
};
export declare const QueryConsensusStateRequest: {
    encode(message: QueryConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryConsensusStateRequest;
    fromJSON(object: any): QueryConsensusStateRequest;
    toJSON(message: QueryConsensusStateRequest): unknown;
    fromPartial<I extends {
        client_id?: string | undefined;
        revision_number?: string | undefined;
        revision_height?: string | undefined;
        latest_height?: boolean | undefined;
    } & {
        client_id?: string | undefined;
        revision_number?: string | undefined;
        revision_height?: string | undefined;
        latest_height?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof QueryConsensusStateRequest>, never>>(object: I): QueryConsensusStateRequest;
};
export declare const QueryConsensusStateResponse: {
    encode(message: QueryConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryConsensusStateResponse;
    fromJSON(object: any): QueryConsensusStateResponse;
    toJSON(message: QueryConsensusStateResponse): unknown;
    fromPartial<I extends {
        consensus_state?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
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
        proof?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryConsensusStateResponse>, never>>(object: I): QueryConsensusStateResponse;
};
export declare const QueryConsensusStatesRequest: {
    encode(message: QueryConsensusStatesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryConsensusStatesRequest;
    fromJSON(object: any): QueryConsensusStatesRequest;
    toJSON(message: QueryConsensusStatesRequest): unknown;
    fromPartial<I extends {
        client_id?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        client_id?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryConsensusStatesRequest>, never>>(object: I): QueryConsensusStatesRequest;
};
export declare const QueryConsensusStatesResponse: {
    encode(message: QueryConsensusStatesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryConsensusStatesResponse;
    fromJSON(object: any): QueryConsensusStatesResponse;
    toJSON(message: QueryConsensusStatesResponse): unknown;
    fromPartial<I extends {
        consensus_states?: {
            height?: {
                revision_number?: string | undefined;
                revision_height?: string | undefined;
            } | undefined;
            consensus_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        consensus_states?: ({
            height?: {
                revision_number?: string | undefined;
                revision_height?: string | undefined;
            } | undefined;
            consensus_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[] & ({
            height?: {
                revision_number?: string | undefined;
                revision_height?: string | undefined;
            } | undefined;
            consensus_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        } & {
            height?: ({
                revision_number?: string | undefined;
                revision_height?: string | undefined;
            } & {
                revision_number?: string | undefined;
                revision_height?: string | undefined;
            } & Record<Exclude<keyof I["consensus_states"][number]["height"], keyof Height>, never>) | undefined;
            consensus_state?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["consensus_states"][number]["consensus_state"], keyof Any>, never>) | undefined;
        } & Record<Exclude<keyof I["consensus_states"][number], keyof ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I["consensus_states"], keyof {
            height?: {
                revision_number?: string | undefined;
                revision_height?: string | undefined;
            } | undefined;
            consensus_state?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryConsensusStatesResponse>, never>>(object: I): QueryConsensusStatesResponse;
};
export declare const QueryConsensusStateHeightsRequest: {
    encode(message: QueryConsensusStateHeightsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryConsensusStateHeightsRequest;
    fromJSON(object: any): QueryConsensusStateHeightsRequest;
    toJSON(message: QueryConsensusStateHeightsRequest): unknown;
    fromPartial<I extends {
        client_id?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        client_id?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryConsensusStateHeightsRequest>, never>>(object: I): QueryConsensusStateHeightsRequest;
};
export declare const QueryConsensusStateHeightsResponse: {
    encode(message: QueryConsensusStateHeightsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryConsensusStateHeightsResponse;
    fromJSON(object: any): QueryConsensusStateHeightsResponse;
    toJSON(message: QueryConsensusStateHeightsResponse): unknown;
    fromPartial<I extends {
        consensus_state_heights?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        consensus_state_heights?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        }[] & ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["consensus_state_heights"][number], keyof Height>, never>)[] & Record<Exclude<keyof I["consensus_state_heights"], keyof {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryConsensusStateHeightsResponse>, never>>(object: I): QueryConsensusStateHeightsResponse;
};
export declare const QueryClientStatusRequest: {
    encode(message: QueryClientStatusRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryClientStatusRequest;
    fromJSON(object: any): QueryClientStatusRequest;
    toJSON(message: QueryClientStatusRequest): unknown;
    fromPartial<I extends {
        client_id?: string | undefined;
    } & {
        client_id?: string | undefined;
    } & Record<Exclude<keyof I, "client_id">, never>>(object: I): QueryClientStatusRequest;
};
export declare const QueryClientStatusResponse: {
    encode(message: QueryClientStatusResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryClientStatusResponse;
    fromJSON(object: any): QueryClientStatusResponse;
    toJSON(message: QueryClientStatusResponse): unknown;
    fromPartial<I extends {
        status?: string | undefined;
    } & {
        status?: string | undefined;
    } & Record<Exclude<keyof I, "status">, never>>(object: I): QueryClientStatusResponse;
};
export declare const QueryClientParamsRequest: {
    encode(_: QueryClientParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryClientParamsRequest;
    fromJSON(_: any): QueryClientParamsRequest;
    toJSON(_: QueryClientParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryClientParamsRequest;
};
export declare const QueryClientParamsResponse: {
    encode(message: QueryClientParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryClientParamsResponse;
    fromJSON(object: any): QueryClientParamsResponse;
    toJSON(message: QueryClientParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            allowed_clients?: string[] | undefined;
        } | undefined;
    } & {
        params?: ({
            allowed_clients?: string[] | undefined;
        } & {
            allowed_clients?: (string[] & string[] & Record<Exclude<keyof I["params"]["allowed_clients"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], "allowed_clients">, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryClientParamsResponse;
};
export declare const QueryUpgradedClientStateRequest: {
    encode(_: QueryUpgradedClientStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryUpgradedClientStateRequest;
    fromJSON(_: any): QueryUpgradedClientStateRequest;
    toJSON(_: QueryUpgradedClientStateRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryUpgradedClientStateRequest;
};
export declare const QueryUpgradedClientStateResponse: {
    encode(message: QueryUpgradedClientStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryUpgradedClientStateResponse;
    fromJSON(object: any): QueryUpgradedClientStateResponse;
    toJSON(message: QueryUpgradedClientStateResponse): unknown;
    fromPartial<I extends {
        upgraded_client_state?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        upgraded_client_state?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["upgraded_client_state"], keyof Any>, never>) | undefined;
    } & Record<Exclude<keyof I, "upgraded_client_state">, never>>(object: I): QueryUpgradedClientStateResponse;
};
export declare const QueryUpgradedConsensusStateRequest: {
    encode(_: QueryUpgradedConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryUpgradedConsensusStateRequest;
    fromJSON(_: any): QueryUpgradedConsensusStateRequest;
    toJSON(_: QueryUpgradedConsensusStateRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryUpgradedConsensusStateRequest;
};
export declare const QueryUpgradedConsensusStateResponse: {
    encode(message: QueryUpgradedConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryUpgradedConsensusStateResponse;
    fromJSON(object: any): QueryUpgradedConsensusStateResponse;
    toJSON(message: QueryUpgradedConsensusStateResponse): unknown;
    fromPartial<I extends {
        upgraded_consensus_state?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        upgraded_consensus_state?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["upgraded_consensus_state"], keyof Any>, never>) | undefined;
    } & Record<Exclude<keyof I, "upgraded_consensus_state">, never>>(object: I): QueryUpgradedConsensusStateResponse;
};
/** Query provides defines the gRPC querier service */
export interface Query {
    /** ClientState queries an IBC light client. */
    ClientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
    /** ClientStates queries all the IBC light clients of a chain. */
    ClientStates(request: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
    /**
     * ConsensusState queries a consensus state associated with a client state at
     * a given height.
     */
    ConsensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
    /**
     * ConsensusStates queries all the consensus state associated with a given
     * client.
     */
    ConsensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
    /** ConsensusStateHeights queries the height of every consensus states associated with a given client. */
    ConsensusStateHeights(request: QueryConsensusStateHeightsRequest): Promise<QueryConsensusStateHeightsResponse>;
    /** Status queries the status of an IBC client. */
    ClientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
    /** ClientParams queries all parameters of the ibc client. */
    ClientParams(request: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
    /** UpgradedClientState queries an Upgraded IBC light client. */
    UpgradedClientState(request: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
    /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
    UpgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    ClientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
    ClientStates(request: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
    ConsensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
    ConsensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
    ConsensusStateHeights(request: QueryConsensusStateHeightsRequest): Promise<QueryConsensusStateHeightsResponse>;
    ClientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
    ClientParams(request: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
    UpgradedClientState(request: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
    UpgradedConsensusState(request: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
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