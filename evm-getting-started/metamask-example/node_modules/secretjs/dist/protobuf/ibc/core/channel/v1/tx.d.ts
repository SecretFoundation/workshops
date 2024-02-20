import * as _m0 from "protobufjs/minimal";
import { Channel, Packet } from "./channel";
import { Height } from "../../client/v1/client";
export declare const protobufPackage = "ibc.core.channel.v1";
/** ResponseResultType defines the possible outcomes of the execution of a message */
export declare enum ResponseResultType {
    /** RESPONSE_RESULT_TYPE_UNSPECIFIED - Default zero value enumeration */
    RESPONSE_RESULT_TYPE_UNSPECIFIED = 0,
    /** RESPONSE_RESULT_TYPE_NOOP - The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) */
    RESPONSE_RESULT_TYPE_NOOP = 1,
    /** RESPONSE_RESULT_TYPE_SUCCESS - The message was executed successfully */
    RESPONSE_RESULT_TYPE_SUCCESS = 2,
    UNRECOGNIZED = -1
}
export declare function responseResultTypeFromJSON(object: any): ResponseResultType;
export declare function responseResultTypeToJSON(object: ResponseResultType): string;
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export interface MsgChannelOpenInit {
    port_id: string;
    channel?: Channel;
    signer: string;
}
/** MsgChannelOpenInitResponse defines the Msg/ChannelOpenInit response type. */
export interface MsgChannelOpenInitResponse {
    channel_id: string;
    version: string;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B. The version field within the Channel field has been deprecated. Its
 * value will be ignored by core IBC.
 */
export interface MsgChannelOpenTry {
    port_id: string;
    /**
     * Deprecated: this field is unused. Crossing hello's are no longer supported in core IBC.
     *
     * @deprecated
     */
    previous_channel_id: string;
    /** NOTE: the version field within the channel has been deprecated. Its value will be ignored by core IBC. */
    channel?: Channel;
    counterparty_version: string;
    proof_init: Uint8Array;
    proof_height?: Height;
    signer: string;
}
/** MsgChannelOpenTryResponse defines the Msg/ChannelOpenTry response type. */
export interface MsgChannelOpenTryResponse {
    version: string;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export interface MsgChannelOpenAck {
    port_id: string;
    channel_id: string;
    counterparty_channel_id: string;
    counterparty_version: string;
    proof_try: Uint8Array;
    proof_height?: Height;
    signer: string;
}
/** MsgChannelOpenAckResponse defines the Msg/ChannelOpenAck response type. */
export interface MsgChannelOpenAckResponse {
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export interface MsgChannelOpenConfirm {
    port_id: string;
    channel_id: string;
    proof_ack: Uint8Array;
    proof_height?: Height;
    signer: string;
}
/**
 * MsgChannelOpenConfirmResponse defines the Msg/ChannelOpenConfirm response
 * type.
 */
export interface MsgChannelOpenConfirmResponse {
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export interface MsgChannelCloseInit {
    port_id: string;
    channel_id: string;
    signer: string;
}
/** MsgChannelCloseInitResponse defines the Msg/ChannelCloseInit response type. */
export interface MsgChannelCloseInitResponse {
}
/**
 * MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B
 * to acknowledge the change of channel state to CLOSED on Chain A.
 */
export interface MsgChannelCloseConfirm {
    port_id: string;
    channel_id: string;
    proof_init: Uint8Array;
    proof_height?: Height;
    signer: string;
}
/**
 * MsgChannelCloseConfirmResponse defines the Msg/ChannelCloseConfirm response
 * type.
 */
export interface MsgChannelCloseConfirmResponse {
}
/** MsgRecvPacket receives incoming IBC packet */
export interface MsgRecvPacket {
    packet?: Packet;
    proof_commitment: Uint8Array;
    proof_height?: Height;
    signer: string;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponse {
    result: ResponseResultType;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeout {
    packet?: Packet;
    proof_unreceived: Uint8Array;
    proof_height?: Height;
    next_sequence_recv: string;
    signer: string;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponse {
    result: ResponseResultType;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export interface MsgTimeoutOnClose {
    packet?: Packet;
    proof_unreceived: Uint8Array;
    proof_close: Uint8Array;
    proof_height?: Height;
    next_sequence_recv: string;
    signer: string;
}
/** MsgTimeoutOnCloseResponse defines the Msg/TimeoutOnClose response type. */
export interface MsgTimeoutOnCloseResponse {
    result: ResponseResultType;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export interface MsgAcknowledgement {
    packet?: Packet;
    acknowledgement: Uint8Array;
    proof_acked: Uint8Array;
    proof_height?: Height;
    signer: string;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponse {
    result: ResponseResultType;
}
export declare const MsgChannelOpenInit: {
    encode(message: MsgChannelOpenInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgChannelOpenInit;
    fromJSON(object: any): MsgChannelOpenInit;
    toJSON(message: MsgChannelOpenInit): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
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
        signer?: string | undefined;
    } & {
        port_id?: string | undefined;
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
        signer?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgChannelOpenInit>, never>>(object: I): MsgChannelOpenInit;
};
export declare const MsgChannelOpenInitResponse: {
    encode(message: MsgChannelOpenInitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgChannelOpenInitResponse;
    fromJSON(object: any): MsgChannelOpenInitResponse;
    toJSON(message: MsgChannelOpenInitResponse): unknown;
    fromPartial<I extends {
        channel_id?: string | undefined;
        version?: string | undefined;
    } & {
        channel_id?: string | undefined;
        version?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgChannelOpenInitResponse>, never>>(object: I): MsgChannelOpenInitResponse;
};
export declare const MsgChannelOpenTry: {
    encode(message: MsgChannelOpenTry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgChannelOpenTry;
    fromJSON(object: any): MsgChannelOpenTry;
    toJSON(message: MsgChannelOpenTry): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        previous_channel_id?: string | undefined;
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
        counterparty_version?: string | undefined;
        proof_init?: Uint8Array | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
        signer?: string | undefined;
    } & {
        port_id?: string | undefined;
        previous_channel_id?: string | undefined;
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
        counterparty_version?: string | undefined;
        proof_init?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
        signer?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgChannelOpenTry>, never>>(object: I): MsgChannelOpenTry;
};
export declare const MsgChannelOpenTryResponse: {
    encode(message: MsgChannelOpenTryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgChannelOpenTryResponse;
    fromJSON(object: any): MsgChannelOpenTryResponse;
    toJSON(message: MsgChannelOpenTryResponse): unknown;
    fromPartial<I extends {
        version?: string | undefined;
    } & {
        version?: string | undefined;
    } & Record<Exclude<keyof I, "version">, never>>(object: I): MsgChannelOpenTryResponse;
};
export declare const MsgChannelOpenAck: {
    encode(message: MsgChannelOpenAck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgChannelOpenAck;
    fromJSON(object: any): MsgChannelOpenAck;
    toJSON(message: MsgChannelOpenAck): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        counterparty_channel_id?: string | undefined;
        counterparty_version?: string | undefined;
        proof_try?: Uint8Array | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
        signer?: string | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        counterparty_channel_id?: string | undefined;
        counterparty_version?: string | undefined;
        proof_try?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
        signer?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgChannelOpenAck>, never>>(object: I): MsgChannelOpenAck;
};
export declare const MsgChannelOpenAckResponse: {
    encode(_: MsgChannelOpenAckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgChannelOpenAckResponse;
    fromJSON(_: any): MsgChannelOpenAckResponse;
    toJSON(_: MsgChannelOpenAckResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgChannelOpenAckResponse;
};
export declare const MsgChannelOpenConfirm: {
    encode(message: MsgChannelOpenConfirm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgChannelOpenConfirm;
    fromJSON(object: any): MsgChannelOpenConfirm;
    toJSON(message: MsgChannelOpenConfirm): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        proof_ack?: Uint8Array | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
        signer?: string | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        proof_ack?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
        signer?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgChannelOpenConfirm>, never>>(object: I): MsgChannelOpenConfirm;
};
export declare const MsgChannelOpenConfirmResponse: {
    encode(_: MsgChannelOpenConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgChannelOpenConfirmResponse;
    fromJSON(_: any): MsgChannelOpenConfirmResponse;
    toJSON(_: MsgChannelOpenConfirmResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgChannelOpenConfirmResponse;
};
export declare const MsgChannelCloseInit: {
    encode(message: MsgChannelCloseInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgChannelCloseInit;
    fromJSON(object: any): MsgChannelCloseInit;
    toJSON(message: MsgChannelCloseInit): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        signer?: string | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        signer?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgChannelCloseInit>, never>>(object: I): MsgChannelCloseInit;
};
export declare const MsgChannelCloseInitResponse: {
    encode(_: MsgChannelCloseInitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgChannelCloseInitResponse;
    fromJSON(_: any): MsgChannelCloseInitResponse;
    toJSON(_: MsgChannelCloseInitResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgChannelCloseInitResponse;
};
export declare const MsgChannelCloseConfirm: {
    encode(message: MsgChannelCloseConfirm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgChannelCloseConfirm;
    fromJSON(object: any): MsgChannelCloseConfirm;
    toJSON(message: MsgChannelCloseConfirm): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        proof_init?: Uint8Array | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
        signer?: string | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        proof_init?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
        signer?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgChannelCloseConfirm>, never>>(object: I): MsgChannelCloseConfirm;
};
export declare const MsgChannelCloseConfirmResponse: {
    encode(_: MsgChannelCloseConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgChannelCloseConfirmResponse;
    fromJSON(_: any): MsgChannelCloseConfirmResponse;
    toJSON(_: MsgChannelCloseConfirmResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgChannelCloseConfirmResponse;
};
export declare const MsgRecvPacket: {
    encode(message: MsgRecvPacket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgRecvPacket;
    fromJSON(object: any): MsgRecvPacket;
    toJSON(message: MsgRecvPacket): unknown;
    fromPartial<I extends {
        packet?: {
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
        } | undefined;
        proof_commitment?: Uint8Array | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
        signer?: string | undefined;
    } & {
        packet?: ({
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
            } & Record<Exclude<keyof I["packet"]["timeout_height"], keyof Height>, never>) | undefined;
            timeout_timestamp?: string | undefined;
        } & Record<Exclude<keyof I["packet"], keyof Packet>, never>) | undefined;
        proof_commitment?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
        signer?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgRecvPacket>, never>>(object: I): MsgRecvPacket;
};
export declare const MsgRecvPacketResponse: {
    encode(message: MsgRecvPacketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgRecvPacketResponse;
    fromJSON(object: any): MsgRecvPacketResponse;
    toJSON(message: MsgRecvPacketResponse): unknown;
    fromPartial<I extends {
        result?: ResponseResultType | undefined;
    } & {
        result?: ResponseResultType | undefined;
    } & Record<Exclude<keyof I, "result">, never>>(object: I): MsgRecvPacketResponse;
};
export declare const MsgTimeout: {
    encode(message: MsgTimeout, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgTimeout;
    fromJSON(object: any): MsgTimeout;
    toJSON(message: MsgTimeout): unknown;
    fromPartial<I extends {
        packet?: {
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
        } | undefined;
        proof_unreceived?: Uint8Array | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
        next_sequence_recv?: string | undefined;
        signer?: string | undefined;
    } & {
        packet?: ({
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
            } & Record<Exclude<keyof I["packet"]["timeout_height"], keyof Height>, never>) | undefined;
            timeout_timestamp?: string | undefined;
        } & Record<Exclude<keyof I["packet"], keyof Packet>, never>) | undefined;
        proof_unreceived?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
        next_sequence_recv?: string | undefined;
        signer?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgTimeout>, never>>(object: I): MsgTimeout;
};
export declare const MsgTimeoutResponse: {
    encode(message: MsgTimeoutResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgTimeoutResponse;
    fromJSON(object: any): MsgTimeoutResponse;
    toJSON(message: MsgTimeoutResponse): unknown;
    fromPartial<I extends {
        result?: ResponseResultType | undefined;
    } & {
        result?: ResponseResultType | undefined;
    } & Record<Exclude<keyof I, "result">, never>>(object: I): MsgTimeoutResponse;
};
export declare const MsgTimeoutOnClose: {
    encode(message: MsgTimeoutOnClose, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgTimeoutOnClose;
    fromJSON(object: any): MsgTimeoutOnClose;
    toJSON(message: MsgTimeoutOnClose): unknown;
    fromPartial<I extends {
        packet?: {
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
        } | undefined;
        proof_unreceived?: Uint8Array | undefined;
        proof_close?: Uint8Array | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
        next_sequence_recv?: string | undefined;
        signer?: string | undefined;
    } & {
        packet?: ({
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
            } & Record<Exclude<keyof I["packet"]["timeout_height"], keyof Height>, never>) | undefined;
            timeout_timestamp?: string | undefined;
        } & Record<Exclude<keyof I["packet"], keyof Packet>, never>) | undefined;
        proof_unreceived?: Uint8Array | undefined;
        proof_close?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
        next_sequence_recv?: string | undefined;
        signer?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgTimeoutOnClose>, never>>(object: I): MsgTimeoutOnClose;
};
export declare const MsgTimeoutOnCloseResponse: {
    encode(message: MsgTimeoutOnCloseResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgTimeoutOnCloseResponse;
    fromJSON(object: any): MsgTimeoutOnCloseResponse;
    toJSON(message: MsgTimeoutOnCloseResponse): unknown;
    fromPartial<I extends {
        result?: ResponseResultType | undefined;
    } & {
        result?: ResponseResultType | undefined;
    } & Record<Exclude<keyof I, "result">, never>>(object: I): MsgTimeoutOnCloseResponse;
};
export declare const MsgAcknowledgement: {
    encode(message: MsgAcknowledgement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgAcknowledgement;
    fromJSON(object: any): MsgAcknowledgement;
    toJSON(message: MsgAcknowledgement): unknown;
    fromPartial<I extends {
        packet?: {
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
        } | undefined;
        acknowledgement?: Uint8Array | undefined;
        proof_acked?: Uint8Array | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
        signer?: string | undefined;
    } & {
        packet?: ({
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
            } & Record<Exclude<keyof I["packet"]["timeout_height"], keyof Height>, never>) | undefined;
            timeout_timestamp?: string | undefined;
        } & Record<Exclude<keyof I["packet"], keyof Packet>, never>) | undefined;
        acknowledgement?: Uint8Array | undefined;
        proof_acked?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
        signer?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgAcknowledgement>, never>>(object: I): MsgAcknowledgement;
};
export declare const MsgAcknowledgementResponse: {
    encode(message: MsgAcknowledgementResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgAcknowledgementResponse;
    fromJSON(object: any): MsgAcknowledgementResponse;
    toJSON(message: MsgAcknowledgementResponse): unknown;
    fromPartial<I extends {
        result?: ResponseResultType | undefined;
    } & {
        result?: ResponseResultType | undefined;
    } & Record<Exclude<keyof I, "result">, never>>(object: I): MsgAcknowledgementResponse;
};
/** Msg defines the ibc/channel Msg service. */
export interface Msg {
    /** ChannelOpenInit defines a rpc handler method for MsgChannelOpenInit. */
    ChannelOpenInit(request: MsgChannelOpenInit): Promise<MsgChannelOpenInitResponse>;
    /** ChannelOpenTry defines a rpc handler method for MsgChannelOpenTry. */
    ChannelOpenTry(request: MsgChannelOpenTry): Promise<MsgChannelOpenTryResponse>;
    /** ChannelOpenAck defines a rpc handler method for MsgChannelOpenAck. */
    ChannelOpenAck(request: MsgChannelOpenAck): Promise<MsgChannelOpenAckResponse>;
    /** ChannelOpenConfirm defines a rpc handler method for MsgChannelOpenConfirm. */
    ChannelOpenConfirm(request: MsgChannelOpenConfirm): Promise<MsgChannelOpenConfirmResponse>;
    /** ChannelCloseInit defines a rpc handler method for MsgChannelCloseInit. */
    ChannelCloseInit(request: MsgChannelCloseInit): Promise<MsgChannelCloseInitResponse>;
    /**
     * ChannelCloseConfirm defines a rpc handler method for
     * MsgChannelCloseConfirm.
     */
    ChannelCloseConfirm(request: MsgChannelCloseConfirm): Promise<MsgChannelCloseConfirmResponse>;
    /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
    RecvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponse>;
    /** Timeout defines a rpc handler method for MsgTimeout. */
    Timeout(request: MsgTimeout): Promise<MsgTimeoutResponse>;
    /** TimeoutOnClose defines a rpc handler method for MsgTimeoutOnClose. */
    TimeoutOnClose(request: MsgTimeoutOnClose): Promise<MsgTimeoutOnCloseResponse>;
    /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
    Acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    ChannelOpenInit(request: MsgChannelOpenInit): Promise<MsgChannelOpenInitResponse>;
    ChannelOpenTry(request: MsgChannelOpenTry): Promise<MsgChannelOpenTryResponse>;
    ChannelOpenAck(request: MsgChannelOpenAck): Promise<MsgChannelOpenAckResponse>;
    ChannelOpenConfirm(request: MsgChannelOpenConfirm): Promise<MsgChannelOpenConfirmResponse>;
    ChannelCloseInit(request: MsgChannelCloseInit): Promise<MsgChannelCloseInitResponse>;
    ChannelCloseConfirm(request: MsgChannelCloseConfirm): Promise<MsgChannelCloseConfirmResponse>;
    RecvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponse>;
    Timeout(request: MsgTimeout): Promise<MsgTimeoutResponse>;
    TimeoutOnClose(request: MsgTimeoutOnClose): Promise<MsgTimeoutOnCloseResponse>;
    Acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponse>;
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
//# sourceMappingURL=tx.d.ts.map