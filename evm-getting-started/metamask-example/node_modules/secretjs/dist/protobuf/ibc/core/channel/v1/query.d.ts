import * as _m0 from "protobufjs/minimal";
import { Channel, IdentifiedChannel, PacketState } from "./channel";
import { Height, IdentifiedClientState } from "../../client/v1/client";
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
export declare const protobufPackage = "ibc.core.channel.v1";
/** QueryChannelRequest is the request type for the Query/Channel RPC method */
export interface QueryChannelRequest {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
}
/**
 * QueryChannelResponse is the response type for the Query/Channel RPC method.
 * Besides the Channel end, it includes a proof and the height from which the
 * proof was retrieved.
 */
export interface QueryChannelResponse {
    /** channel associated with the request identifiers */
    channel?: Channel;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: Height;
}
/** QueryChannelsRequest is the request type for the Query/Channels RPC method */
export interface QueryChannelsRequest {
    /** pagination request */
    pagination?: PageRequest;
}
/** QueryChannelsResponse is the response type for the Query/Channels RPC method. */
export interface QueryChannelsResponse {
    /** list of stored channels of the chain. */
    channels: IdentifiedChannel[];
    /** pagination response */
    pagination?: PageResponse;
    /** query block height */
    height?: Height;
}
/**
 * QueryConnectionChannelsRequest is the request type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsRequest {
    /** connection unique identifier */
    connection: string;
    /** pagination request */
    pagination?: PageRequest;
}
/**
 * QueryConnectionChannelsResponse is the Response type for the
 * Query/QueryConnectionChannels RPC method
 */
export interface QueryConnectionChannelsResponse {
    /** list of channels associated with a connection. */
    channels: IdentifiedChannel[];
    /** pagination response */
    pagination?: PageResponse;
    /** query block height */
    height?: Height;
}
/**
 * QueryChannelClientStateRequest is the request type for the Query/ClientState
 * RPC method
 */
export interface QueryChannelClientStateRequest {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelClientStateResponse {
    /** client state associated with the channel */
    identified_client_state?: IdentifiedClientState;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: Height;
}
/**
 * QueryChannelConsensusStateRequest is the request type for the
 * Query/ConsensusState RPC method
 */
export interface QueryChannelConsensusStateRequest {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** revision number of the consensus state */
    revision_number: string;
    /** revision height of the consensus state */
    revision_height: string;
}
/**
 * QueryChannelClientStateResponse is the Response type for the
 * Query/QueryChannelClientState RPC method
 */
export interface QueryChannelConsensusStateResponse {
    /** consensus state associated with the channel */
    consensus_state?: Any;
    /** client ID associated with the consensus state */
    client_id: string;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: Height;
}
/**
 * QueryPacketCommitmentRequest is the request type for the
 * Query/PacketCommitment RPC method
 */
export interface QueryPacketCommitmentRequest {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** packet sequence */
    sequence: string;
}
/**
 * QueryPacketCommitmentResponse defines the client query response for a packet
 * which also includes a proof and the height from which the proof was
 * retrieved
 */
export interface QueryPacketCommitmentResponse {
    /** packet associated with the request fields */
    commitment: Uint8Array;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: Height;
}
/**
 * QueryPacketCommitmentsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsRequest {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** pagination request */
    pagination?: PageRequest;
}
/**
 * QueryPacketCommitmentsResponse is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketCommitmentsResponse {
    commitments: PacketState[];
    /** pagination response */
    pagination?: PageResponse;
    /** query block height */
    height?: Height;
}
/**
 * QueryPacketReceiptRequest is the request type for the
 * Query/PacketReceipt RPC method
 */
export interface QueryPacketReceiptRequest {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** packet sequence */
    sequence: string;
}
/**
 * QueryPacketReceiptResponse defines the client query response for a packet
 * receipt which also includes a proof, and the height from which the proof was
 * retrieved
 */
export interface QueryPacketReceiptResponse {
    /** success flag for if receipt exists */
    received: boolean;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: Height;
}
/**
 * QueryPacketAcknowledgementRequest is the request type for the
 * Query/PacketAcknowledgement RPC method
 */
export interface QueryPacketAcknowledgementRequest {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** packet sequence */
    sequence: string;
}
/**
 * QueryPacketAcknowledgementResponse defines the client query response for a
 * packet which also includes a proof and the height from which the
 * proof was retrieved
 */
export interface QueryPacketAcknowledgementResponse {
    /** packet associated with the request fields */
    acknowledgement: Uint8Array;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: Height;
}
/**
 * QueryPacketAcknowledgementsRequest is the request type for the
 * Query/QueryPacketCommitments RPC method
 */
export interface QueryPacketAcknowledgementsRequest {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** pagination request */
    pagination?: PageRequest;
    /** list of packet sequences */
    packet_commitment_sequences: string[];
}
/**
 * QueryPacketAcknowledgemetsResponse is the request type for the
 * Query/QueryPacketAcknowledgements RPC method
 */
export interface QueryPacketAcknowledgementsResponse {
    acknowledgements: PacketState[];
    /** pagination response */
    pagination?: PageResponse;
    /** query block height */
    height?: Height;
}
/**
 * QueryUnreceivedPacketsRequest is the request type for the
 * Query/UnreceivedPackets RPC method
 */
export interface QueryUnreceivedPacketsRequest {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** list of packet sequences */
    packet_commitment_sequences: string[];
}
/**
 * QueryUnreceivedPacketsResponse is the response type for the
 * Query/UnreceivedPacketCommitments RPC method
 */
export interface QueryUnreceivedPacketsResponse {
    /** list of unreceived packet sequences */
    sequences: string[];
    /** query block height */
    height?: Height;
}
/**
 * QueryUnreceivedAcks is the request type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksRequest {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** list of acknowledgement sequences */
    packet_ack_sequences: string[];
}
/**
 * QueryUnreceivedAcksResponse is the response type for the
 * Query/UnreceivedAcks RPC method
 */
export interface QueryUnreceivedAcksResponse {
    /** list of unreceived acknowledgement sequences */
    sequences: string[];
    /** query block height */
    height?: Height;
}
/**
 * QueryNextSequenceReceiveRequest is the request type for the
 * Query/QueryNextSequenceReceiveRequest RPC method
 */
export interface QueryNextSequenceReceiveRequest {
    /** port unique identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
}
/**
 * QuerySequenceResponse is the request type for the
 * Query/QueryNextSequenceReceiveResponse RPC method
 */
export interface QueryNextSequenceReceiveResponse {
    /** next sequence receive number */
    next_sequence_receive: string;
    /** merkle proof of existence */
    proof: Uint8Array;
    /** height at which the proof was retrieved */
    proof_height?: Height;
}
export declare const QueryChannelRequest: {
    encode(message: QueryChannelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryChannelRequest;
    fromJSON(object: any): QueryChannelRequest;
    toJSON(message: QueryChannelRequest): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryChannelRequest>, never>>(object: I): QueryChannelRequest;
};
export declare const QueryChannelResponse: {
    encode(message: QueryChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryChannelResponse;
    fromJSON(object: any): QueryChannelResponse;
    toJSON(message: QueryChannelResponse): unknown;
    fromPartial<I extends {
        channel?: {
            state?: import("./channel").State | undefined;
            ordering?: import("./channel").Order | undefined;
            counterparty?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } | undefined;
            connection_hops?: string[] | undefined;
            version?: string | undefined;
        } | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
    } & {
        channel?: ({
            state?: import("./channel").State | undefined;
            ordering?: import("./channel").Order | undefined;
            counterparty?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } | undefined;
            connection_hops?: string[] | undefined;
            version?: string | undefined;
        } & {
            state?: import("./channel").State | undefined;
            ordering?: import("./channel").Order | undefined;
            counterparty?: ({
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } & {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } & Record<Exclude<keyof I["channel"]["counterparty"], keyof import("./channel").Counterparty>, never>) | undefined;
            connection_hops?: (string[] & string[] & Record<Exclude<keyof I["channel"]["connection_hops"], keyof string[]>, never>) | undefined;
            version?: string | undefined;
        } & Record<Exclude<keyof I["channel"], keyof Channel>, never>) | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryChannelResponse>, never>>(object: I): QueryChannelResponse;
};
export declare const QueryChannelsRequest: {
    encode(message: QueryChannelsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryChannelsRequest;
    fromJSON(object: any): QueryChannelsRequest;
    toJSON(message: QueryChannelsRequest): unknown;
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
    } & Record<Exclude<keyof I, "pagination">, never>>(object: I): QueryChannelsRequest;
};
export declare const QueryChannelsResponse: {
    encode(message: QueryChannelsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryChannelsResponse;
    fromJSON(object: any): QueryChannelsResponse;
    toJSON(message: QueryChannelsResponse): unknown;
    fromPartial<I extends {
        channels?: {
            state?: import("./channel").State | undefined;
            ordering?: import("./channel").Order | undefined;
            counterparty?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } | undefined;
            connection_hops?: string[] | undefined;
            version?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
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
        channels?: ({
            state?: import("./channel").State | undefined;
            ordering?: import("./channel").Order | undefined;
            counterparty?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } | undefined;
            connection_hops?: string[] | undefined;
            version?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        }[] & ({
            state?: import("./channel").State | undefined;
            ordering?: import("./channel").Order | undefined;
            counterparty?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } | undefined;
            connection_hops?: string[] | undefined;
            version?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        } & {
            state?: import("./channel").State | undefined;
            ordering?: import("./channel").Order | undefined;
            counterparty?: ({
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } & {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } & Record<Exclude<keyof I["channels"][number]["counterparty"], keyof import("./channel").Counterparty>, never>) | undefined;
            connection_hops?: (string[] & string[] & Record<Exclude<keyof I["channels"][number]["connection_hops"], keyof string[]>, never>) | undefined;
            version?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        } & Record<Exclude<keyof I["channels"][number], keyof IdentifiedChannel>, never>)[] & Record<Exclude<keyof I["channels"], keyof {
            state?: import("./channel").State | undefined;
            ordering?: import("./channel").Order | undefined;
            counterparty?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } | undefined;
            connection_hops?: string[] | undefined;
            version?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryChannelsResponse>, never>>(object: I): QueryChannelsResponse;
};
export declare const QueryConnectionChannelsRequest: {
    encode(message: QueryConnectionChannelsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryConnectionChannelsRequest;
    fromJSON(object: any): QueryConnectionChannelsRequest;
    toJSON(message: QueryConnectionChannelsRequest): unknown;
    fromPartial<I extends {
        connection?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        connection?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryConnectionChannelsRequest>, never>>(object: I): QueryConnectionChannelsRequest;
};
export declare const QueryConnectionChannelsResponse: {
    encode(message: QueryConnectionChannelsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryConnectionChannelsResponse;
    fromJSON(object: any): QueryConnectionChannelsResponse;
    toJSON(message: QueryConnectionChannelsResponse): unknown;
    fromPartial<I extends {
        channels?: {
            state?: import("./channel").State | undefined;
            ordering?: import("./channel").Order | undefined;
            counterparty?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } | undefined;
            connection_hops?: string[] | undefined;
            version?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
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
        channels?: ({
            state?: import("./channel").State | undefined;
            ordering?: import("./channel").Order | undefined;
            counterparty?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } | undefined;
            connection_hops?: string[] | undefined;
            version?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        }[] & ({
            state?: import("./channel").State | undefined;
            ordering?: import("./channel").Order | undefined;
            counterparty?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } | undefined;
            connection_hops?: string[] | undefined;
            version?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        } & {
            state?: import("./channel").State | undefined;
            ordering?: import("./channel").Order | undefined;
            counterparty?: ({
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } & {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } & Record<Exclude<keyof I["channels"][number]["counterparty"], keyof import("./channel").Counterparty>, never>) | undefined;
            connection_hops?: (string[] & string[] & Record<Exclude<keyof I["channels"][number]["connection_hops"], keyof string[]>, never>) | undefined;
            version?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        } & Record<Exclude<keyof I["channels"][number], keyof IdentifiedChannel>, never>)[] & Record<Exclude<keyof I["channels"], keyof {
            state?: import("./channel").State | undefined;
            ordering?: import("./channel").Order | undefined;
            counterparty?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } | undefined;
            connection_hops?: string[] | undefined;
            version?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryConnectionChannelsResponse>, never>>(object: I): QueryConnectionChannelsResponse;
};
export declare const QueryChannelClientStateRequest: {
    encode(message: QueryChannelClientStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryChannelClientStateRequest;
    fromJSON(object: any): QueryChannelClientStateRequest;
    toJSON(message: QueryChannelClientStateRequest): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryChannelClientStateRequest>, never>>(object: I): QueryChannelClientStateRequest;
};
export declare const QueryChannelClientStateResponse: {
    encode(message: QueryChannelClientStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryChannelClientStateResponse;
    fromJSON(object: any): QueryChannelClientStateResponse;
    toJSON(message: QueryChannelClientStateResponse): unknown;
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
    } & Record<Exclude<keyof I, keyof QueryChannelClientStateResponse>, never>>(object: I): QueryChannelClientStateResponse;
};
export declare const QueryChannelConsensusStateRequest: {
    encode(message: QueryChannelConsensusStateRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryChannelConsensusStateRequest;
    fromJSON(object: any): QueryChannelConsensusStateRequest;
    toJSON(message: QueryChannelConsensusStateRequest): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        revision_number?: string | undefined;
        revision_height?: string | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        revision_number?: string | undefined;
        revision_height?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryChannelConsensusStateRequest>, never>>(object: I): QueryChannelConsensusStateRequest;
};
export declare const QueryChannelConsensusStateResponse: {
    encode(message: QueryChannelConsensusStateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryChannelConsensusStateResponse;
    fromJSON(object: any): QueryChannelConsensusStateResponse;
    toJSON(message: QueryChannelConsensusStateResponse): unknown;
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
    } & Record<Exclude<keyof I, keyof QueryChannelConsensusStateResponse>, never>>(object: I): QueryChannelConsensusStateResponse;
};
export declare const QueryPacketCommitmentRequest: {
    encode(message: QueryPacketCommitmentRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPacketCommitmentRequest;
    fromJSON(object: any): QueryPacketCommitmentRequest;
    toJSON(message: QueryPacketCommitmentRequest): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        sequence?: string | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        sequence?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryPacketCommitmentRequest>, never>>(object: I): QueryPacketCommitmentRequest;
};
export declare const QueryPacketCommitmentResponse: {
    encode(message: QueryPacketCommitmentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPacketCommitmentResponse;
    fromJSON(object: any): QueryPacketCommitmentResponse;
    toJSON(message: QueryPacketCommitmentResponse): unknown;
    fromPartial<I extends {
        commitment?: Uint8Array | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
    } & {
        commitment?: Uint8Array | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryPacketCommitmentResponse>, never>>(object: I): QueryPacketCommitmentResponse;
};
export declare const QueryPacketCommitmentsRequest: {
    encode(message: QueryPacketCommitmentsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPacketCommitmentsRequest;
    fromJSON(object: any): QueryPacketCommitmentsRequest;
    toJSON(message: QueryPacketCommitmentsRequest): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryPacketCommitmentsRequest>, never>>(object: I): QueryPacketCommitmentsRequest;
};
export declare const QueryPacketCommitmentsResponse: {
    encode(message: QueryPacketCommitmentsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPacketCommitmentsResponse;
    fromJSON(object: any): QueryPacketCommitmentsResponse;
    toJSON(message: QueryPacketCommitmentsResponse): unknown;
    fromPartial<I extends {
        commitments?: {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
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
        commitments?: ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        }[] & ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        } & {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["commitments"][number], keyof PacketState>, never>)[] & Record<Exclude<keyof I["commitments"], keyof {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryPacketCommitmentsResponse>, never>>(object: I): QueryPacketCommitmentsResponse;
};
export declare const QueryPacketReceiptRequest: {
    encode(message: QueryPacketReceiptRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPacketReceiptRequest;
    fromJSON(object: any): QueryPacketReceiptRequest;
    toJSON(message: QueryPacketReceiptRequest): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        sequence?: string | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        sequence?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryPacketReceiptRequest>, never>>(object: I): QueryPacketReceiptRequest;
};
export declare const QueryPacketReceiptResponse: {
    encode(message: QueryPacketReceiptResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPacketReceiptResponse;
    fromJSON(object: any): QueryPacketReceiptResponse;
    toJSON(message: QueryPacketReceiptResponse): unknown;
    fromPartial<I extends {
        received?: boolean | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
    } & {
        received?: boolean | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryPacketReceiptResponse>, never>>(object: I): QueryPacketReceiptResponse;
};
export declare const QueryPacketAcknowledgementRequest: {
    encode(message: QueryPacketAcknowledgementRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPacketAcknowledgementRequest;
    fromJSON(object: any): QueryPacketAcknowledgementRequest;
    toJSON(message: QueryPacketAcknowledgementRequest): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        sequence?: string | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        sequence?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryPacketAcknowledgementRequest>, never>>(object: I): QueryPacketAcknowledgementRequest;
};
export declare const QueryPacketAcknowledgementResponse: {
    encode(message: QueryPacketAcknowledgementResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPacketAcknowledgementResponse;
    fromJSON(object: any): QueryPacketAcknowledgementResponse;
    toJSON(message: QueryPacketAcknowledgementResponse): unknown;
    fromPartial<I extends {
        acknowledgement?: Uint8Array | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
    } & {
        acknowledgement?: Uint8Array | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryPacketAcknowledgementResponse>, never>>(object: I): QueryPacketAcknowledgementResponse;
};
export declare const QueryPacketAcknowledgementsRequest: {
    encode(message: QueryPacketAcknowledgementsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPacketAcknowledgementsRequest;
    fromJSON(object: any): QueryPacketAcknowledgementsRequest;
    toJSON(message: QueryPacketAcknowledgementsRequest): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        packet_commitment_sequences?: string[] | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
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
        packet_commitment_sequences?: (string[] & string[] & Record<Exclude<keyof I["packet_commitment_sequences"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryPacketAcknowledgementsRequest>, never>>(object: I): QueryPacketAcknowledgementsRequest;
};
export declare const QueryPacketAcknowledgementsResponse: {
    encode(message: QueryPacketAcknowledgementsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPacketAcknowledgementsResponse;
    fromJSON(object: any): QueryPacketAcknowledgementsResponse;
    toJSON(message: QueryPacketAcknowledgementsResponse): unknown;
    fromPartial<I extends {
        acknowledgements?: {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
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
        acknowledgements?: ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        }[] & ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        } & {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["acknowledgements"][number], keyof PacketState>, never>)[] & Record<Exclude<keyof I["acknowledgements"], keyof {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
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
    } & Record<Exclude<keyof I, keyof QueryPacketAcknowledgementsResponse>, never>>(object: I): QueryPacketAcknowledgementsResponse;
};
export declare const QueryUnreceivedPacketsRequest: {
    encode(message: QueryUnreceivedPacketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryUnreceivedPacketsRequest;
    fromJSON(object: any): QueryUnreceivedPacketsRequest;
    toJSON(message: QueryUnreceivedPacketsRequest): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        packet_commitment_sequences?: string[] | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        packet_commitment_sequences?: (string[] & string[] & Record<Exclude<keyof I["packet_commitment_sequences"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryUnreceivedPacketsRequest>, never>>(object: I): QueryUnreceivedPacketsRequest;
};
export declare const QueryUnreceivedPacketsResponse: {
    encode(message: QueryUnreceivedPacketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryUnreceivedPacketsResponse;
    fromJSON(object: any): QueryUnreceivedPacketsResponse;
    toJSON(message: QueryUnreceivedPacketsResponse): unknown;
    fromPartial<I extends {
        sequences?: string[] | undefined;
        height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
    } & {
        sequences?: (string[] & string[] & Record<Exclude<keyof I["sequences"], keyof string[]>, never>) | undefined;
        height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["height"], keyof Height>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryUnreceivedPacketsResponse>, never>>(object: I): QueryUnreceivedPacketsResponse;
};
export declare const QueryUnreceivedAcksRequest: {
    encode(message: QueryUnreceivedAcksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryUnreceivedAcksRequest;
    fromJSON(object: any): QueryUnreceivedAcksRequest;
    toJSON(message: QueryUnreceivedAcksRequest): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        packet_ack_sequences?: string[] | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        packet_ack_sequences?: (string[] & string[] & Record<Exclude<keyof I["packet_ack_sequences"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryUnreceivedAcksRequest>, never>>(object: I): QueryUnreceivedAcksRequest;
};
export declare const QueryUnreceivedAcksResponse: {
    encode(message: QueryUnreceivedAcksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryUnreceivedAcksResponse;
    fromJSON(object: any): QueryUnreceivedAcksResponse;
    toJSON(message: QueryUnreceivedAcksResponse): unknown;
    fromPartial<I extends {
        sequences?: string[] | undefined;
        height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
    } & {
        sequences?: (string[] & string[] & Record<Exclude<keyof I["sequences"], keyof string[]>, never>) | undefined;
        height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["height"], keyof Height>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryUnreceivedAcksResponse>, never>>(object: I): QueryUnreceivedAcksResponse;
};
export declare const QueryNextSequenceReceiveRequest: {
    encode(message: QueryNextSequenceReceiveRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryNextSequenceReceiveRequest;
    fromJSON(object: any): QueryNextSequenceReceiveRequest;
    toJSON(message: QueryNextSequenceReceiveRequest): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryNextSequenceReceiveRequest>, never>>(object: I): QueryNextSequenceReceiveRequest;
};
export declare const QueryNextSequenceReceiveResponse: {
    encode(message: QueryNextSequenceReceiveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryNextSequenceReceiveResponse;
    fromJSON(object: any): QueryNextSequenceReceiveResponse;
    toJSON(message: QueryNextSequenceReceiveResponse): unknown;
    fromPartial<I extends {
        next_sequence_receive?: string | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
    } & {
        next_sequence_receive?: string | undefined;
        proof?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryNextSequenceReceiveResponse>, never>>(object: I): QueryNextSequenceReceiveResponse;
};
/** Query provides defines the gRPC querier service */
export interface Query {
    /** Channel queries an IBC Channel. */
    Channel(request: QueryChannelRequest): Promise<QueryChannelResponse>;
    /** Channels queries all the IBC channels of a chain. */
    Channels(request: QueryChannelsRequest): Promise<QueryChannelsResponse>;
    /**
     * ConnectionChannels queries all the channels associated with a connection
     * end.
     */
    ConnectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse>;
    /**
     * ChannelClientState queries for the client state for the channel associated
     * with the provided channel identifiers.
     */
    ChannelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse>;
    /**
     * ChannelConsensusState queries for the consensus state for the channel
     * associated with the provided channel identifiers.
     */
    ChannelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse>;
    /** PacketCommitment queries a stored packet commitment hash. */
    PacketCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>;
    /**
     * PacketCommitments returns all the packet commitments hashes associated
     * with a channel.
     */
    PacketCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse>;
    /**
     * PacketReceipt queries if a given packet sequence has been received on the
     * queried chain
     */
    PacketReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>;
    /** PacketAcknowledgement queries a stored packet acknowledgement hash. */
    PacketAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse>;
    /**
     * PacketAcknowledgements returns all the packet acknowledgements associated
     * with a channel.
     */
    PacketAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse>;
    /**
     * UnreceivedPackets returns all the unreceived IBC packets associated with a
     * channel and sequences.
     */
    UnreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse>;
    /**
     * UnreceivedAcks returns all the unreceived IBC acknowledgements associated
     * with a channel and sequences.
     */
    UnreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>;
    /** NextSequenceReceive returns the next receive sequence for a given channel. */
    NextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Channel(request: QueryChannelRequest): Promise<QueryChannelResponse>;
    Channels(request: QueryChannelsRequest): Promise<QueryChannelsResponse>;
    ConnectionChannels(request: QueryConnectionChannelsRequest): Promise<QueryConnectionChannelsResponse>;
    ChannelClientState(request: QueryChannelClientStateRequest): Promise<QueryChannelClientStateResponse>;
    ChannelConsensusState(request: QueryChannelConsensusStateRequest): Promise<QueryChannelConsensusStateResponse>;
    PacketCommitment(request: QueryPacketCommitmentRequest): Promise<QueryPacketCommitmentResponse>;
    PacketCommitments(request: QueryPacketCommitmentsRequest): Promise<QueryPacketCommitmentsResponse>;
    PacketReceipt(request: QueryPacketReceiptRequest): Promise<QueryPacketReceiptResponse>;
    PacketAcknowledgement(request: QueryPacketAcknowledgementRequest): Promise<QueryPacketAcknowledgementResponse>;
    PacketAcknowledgements(request: QueryPacketAcknowledgementsRequest): Promise<QueryPacketAcknowledgementsResponse>;
    UnreceivedPackets(request: QueryUnreceivedPacketsRequest): Promise<QueryUnreceivedPacketsResponse>;
    UnreceivedAcks(request: QueryUnreceivedAcksRequest): Promise<QueryUnreceivedAcksResponse>;
    NextSequenceReceive(request: QueryNextSequenceReceiveRequest): Promise<QueryNextSequenceReceiveResponse>;
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