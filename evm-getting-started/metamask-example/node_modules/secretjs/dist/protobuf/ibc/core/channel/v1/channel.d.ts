import * as _m0 from "protobufjs/minimal";
import { Height } from "../../client/v1/client";
export declare const protobufPackage = "ibc.core.channel.v1";
/**
 * State defines if a channel is in one of the following states:
 * CLOSED, INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
export declare enum State {
    /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
    STATE_UNINITIALIZED_UNSPECIFIED = 0,
    /** STATE_INIT - A channel has just started the opening handshake. */
    STATE_INIT = 1,
    /** STATE_TRYOPEN - A channel has acknowledged the handshake step on the counterparty chain. */
    STATE_TRYOPEN = 2,
    /**
     * STATE_OPEN - A channel has completed the handshake. Open channels are
     * ready to send and receive packets.
     */
    STATE_OPEN = 3,
    /**
     * STATE_CLOSED - A channel has been closed and can no longer be used to send or receive
     * packets.
     */
    STATE_CLOSED = 4,
    UNRECOGNIZED = -1
}
export declare function stateFromJSON(object: any): State;
export declare function stateToJSON(object: State): string;
/** Order defines if a channel is ORDERED or UNORDERED */
export declare enum Order {
    /** ORDER_NONE_UNSPECIFIED - zero-value for channel ordering */
    ORDER_NONE_UNSPECIFIED = 0,
    /**
     * ORDER_UNORDERED - packets can be delivered in any order, which may differ from the order in
     * which they were sent.
     */
    ORDER_UNORDERED = 1,
    /** ORDER_ORDERED - packets are delivered exactly in the order which they were sent */
    ORDER_ORDERED = 2,
    UNRECOGNIZED = -1
}
export declare function orderFromJSON(object: any): Order;
export declare function orderToJSON(object: Order): string;
/**
 * Channel defines pipeline for exactly-once packet delivery between specific
 * modules on separate blockchains, which has at least one end capable of
 * sending packets and one end capable of receiving packets.
 */
export interface Channel {
    /** current state of the channel end */
    state: State;
    /** whether the channel is ordered or unordered */
    ordering: Order;
    /** counterparty channel end */
    counterparty?: Counterparty;
    /**
     * list of connection identifiers, in order, along which packets sent on
     * this channel will travel
     */
    connection_hops: string[];
    /** opaque channel version, which is agreed upon during the handshake */
    version: string;
}
/**
 * IdentifiedChannel defines a channel with additional port and channel
 * identifier fields.
 */
export interface IdentifiedChannel {
    /** current state of the channel end */
    state: State;
    /** whether the channel is ordered or unordered */
    ordering: Order;
    /** counterparty channel end */
    counterparty?: Counterparty;
    /**
     * list of connection identifiers, in order, along which packets sent on
     * this channel will travel
     */
    connection_hops: string[];
    /** opaque channel version, which is agreed upon during the handshake */
    version: string;
    /** port identifier */
    port_id: string;
    /** channel identifier */
    channel_id: string;
}
/** Counterparty defines a channel end counterparty */
export interface Counterparty {
    /** port on the counterparty chain which owns the other end of the channel. */
    port_id: string;
    /** channel end on the counterparty chain */
    channel_id: string;
}
/** Packet defines a type that carries data across different chains through IBC */
export interface Packet {
    /**
     * number corresponds to the order of sends and receives, where a Packet
     * with an earlier sequence number must be sent and received before a Packet
     * with a later sequence number.
     */
    sequence: string;
    /** identifies the port on the sending chain. */
    source_port: string;
    /** identifies the channel end on the sending chain. */
    source_channel: string;
    /** identifies the port on the receiving chain. */
    destination_port: string;
    /** identifies the channel end on the receiving chain. */
    destination_channel: string;
    /** actual opaque bytes transferred directly to the application module */
    data: Uint8Array;
    /** block height after which the packet times out */
    timeout_height?: Height;
    /** block timestamp (in nanoseconds) after which the packet times out */
    timeout_timestamp: string;
}
/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 */
export interface PacketState {
    /** channel port identifier. */
    port_id: string;
    /** channel unique identifier. */
    channel_id: string;
    /** packet sequence. */
    sequence: string;
    /** embedded data that represents packet state. */
    data: Uint8Array;
}
/**
 * PacketId is an identifer for a unique Packet
 * Source chains refer to packets by source port/channel
 * Destination chains refer to packets by destination port/channel
 */
export interface PacketId {
    /** channel port identifier */
    port_id: string;
    /** channel unique identifier */
    channel_id: string;
    /** packet sequence */
    sequence: string;
}
/**
 * Acknowledgement is the recommended acknowledgement format to be used by
 * app-specific protocols.
 * NOTE: The field numbers 21 and 22 were explicitly chosen to avoid accidental
 * conflicts with other protobuf message formats used for acknowledgements.
 * The first byte of any message with this format will be the non-ASCII values
 * `0xaa` (result) or `0xb2` (error). Implemented as defined by ICS:
 * https://github.com/cosmos/ibc/tree/master/spec/core/ics-004-channel-and-packet-semantics#acknowledgement-envelope
 */
export interface Acknowledgement {
    result: Uint8Array | undefined;
    error: string | undefined;
}
export declare const Channel: {
    encode(message: Channel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Channel;
    fromJSON(object: any): Channel;
    toJSON(message: Channel): unknown;
    fromPartial<I extends {
        state?: State | undefined;
        ordering?: Order | undefined;
        counterparty?: {
            port_id?: string | undefined;
            channel_id?: string | undefined;
        } | undefined;
        connection_hops?: string[] | undefined;
        version?: string | undefined;
    } & {
        state?: State | undefined;
        ordering?: Order | undefined;
        counterparty?: ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
        } & {
            port_id?: string | undefined;
            channel_id?: string | undefined;
        } & Record<Exclude<keyof I["counterparty"], keyof Counterparty>, never>) | undefined;
        connection_hops?: (string[] & string[] & Record<Exclude<keyof I["connection_hops"], keyof string[]>, never>) | undefined;
        version?: string | undefined;
    } & Record<Exclude<keyof I, keyof Channel>, never>>(object: I): Channel;
};
export declare const IdentifiedChannel: {
    encode(message: IdentifiedChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IdentifiedChannel;
    fromJSON(object: any): IdentifiedChannel;
    toJSON(message: IdentifiedChannel): unknown;
    fromPartial<I extends {
        state?: State | undefined;
        ordering?: Order | undefined;
        counterparty?: {
            port_id?: string | undefined;
            channel_id?: string | undefined;
        } | undefined;
        connection_hops?: string[] | undefined;
        version?: string | undefined;
        port_id?: string | undefined;
        channel_id?: string | undefined;
    } & {
        state?: State | undefined;
        ordering?: Order | undefined;
        counterparty?: ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
        } & {
            port_id?: string | undefined;
            channel_id?: string | undefined;
        } & Record<Exclude<keyof I["counterparty"], keyof Counterparty>, never>) | undefined;
        connection_hops?: (string[] & string[] & Record<Exclude<keyof I["connection_hops"], keyof string[]>, never>) | undefined;
        version?: string | undefined;
        port_id?: string | undefined;
        channel_id?: string | undefined;
    } & Record<Exclude<keyof I, keyof IdentifiedChannel>, never>>(object: I): IdentifiedChannel;
};
export declare const Counterparty: {
    encode(message: Counterparty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Counterparty;
    fromJSON(object: any): Counterparty;
    toJSON(message: Counterparty): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
    } & Record<Exclude<keyof I, keyof Counterparty>, never>>(object: I): Counterparty;
};
export declare const Packet: {
    encode(message: Packet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Packet;
    fromJSON(object: any): Packet;
    toJSON(message: Packet): unknown;
    fromPartial<I extends {
        sequence?: string | undefined;
        source_port?: string | undefined;
        source_channel?: string | undefined;
        destination_port?: string | undefined;
        destination_channel?: string | undefined;
        data?: Uint8Array | undefined;
        timeout_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
        timeout_timestamp?: string | undefined;
    } & {
        sequence?: string | undefined;
        source_port?: string | undefined;
        source_channel?: string | undefined;
        destination_port?: string | undefined;
        destination_channel?: string | undefined;
        data?: Uint8Array | undefined;
        timeout_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["timeout_height"], keyof Height>, never>) | undefined;
        timeout_timestamp?: string | undefined;
    } & Record<Exclude<keyof I, keyof Packet>, never>>(object: I): Packet;
};
export declare const PacketState: {
    encode(message: PacketState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PacketState;
    fromJSON(object: any): PacketState;
    toJSON(message: PacketState): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        sequence?: string | undefined;
        data?: Uint8Array | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        sequence?: string | undefined;
        data?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof PacketState>, never>>(object: I): PacketState;
};
export declare const PacketId: {
    encode(message: PacketId, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PacketId;
    fromJSON(object: any): PacketId;
    toJSON(message: PacketId): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        sequence?: string | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        sequence?: string | undefined;
    } & Record<Exclude<keyof I, keyof PacketId>, never>>(object: I): PacketId;
};
export declare const Acknowledgement: {
    encode(message: Acknowledgement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Acknowledgement;
    fromJSON(object: any): Acknowledgement;
    toJSON(message: Acknowledgement): unknown;
    fromPartial<I extends {
        result?: Uint8Array | undefined;
        error?: string | undefined;
    } & {
        result?: Uint8Array | undefined;
        error?: string | undefined;
    } & Record<Exclude<keyof I, keyof Acknowledgement>, never>>(object: I): Acknowledgement;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
//# sourceMappingURL=channel.d.ts.map