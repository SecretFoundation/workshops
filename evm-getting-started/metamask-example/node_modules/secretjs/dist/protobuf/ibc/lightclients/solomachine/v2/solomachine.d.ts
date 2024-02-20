import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../../google/protobuf/any";
import { ConnectionEnd } from "../../../core/connection/v1/connection";
import { Channel } from "../../../core/channel/v1/channel";
export declare const protobufPackage = "ibc.lightclients.solomachine.v2";
/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 */
export declare enum DataType {
    /** DATA_TYPE_UNINITIALIZED_UNSPECIFIED - Default State */
    DATA_TYPE_UNINITIALIZED_UNSPECIFIED = 0,
    /** DATA_TYPE_CLIENT_STATE - Data type for client state verification */
    DATA_TYPE_CLIENT_STATE = 1,
    /** DATA_TYPE_CONSENSUS_STATE - Data type for consensus state verification */
    DATA_TYPE_CONSENSUS_STATE = 2,
    /** DATA_TYPE_CONNECTION_STATE - Data type for connection state verification */
    DATA_TYPE_CONNECTION_STATE = 3,
    /** DATA_TYPE_CHANNEL_STATE - Data type for channel state verification */
    DATA_TYPE_CHANNEL_STATE = 4,
    /** DATA_TYPE_PACKET_COMMITMENT - Data type for packet commitment verification */
    DATA_TYPE_PACKET_COMMITMENT = 5,
    /** DATA_TYPE_PACKET_ACKNOWLEDGEMENT - Data type for packet acknowledgement verification */
    DATA_TYPE_PACKET_ACKNOWLEDGEMENT = 6,
    /** DATA_TYPE_PACKET_RECEIPT_ABSENCE - Data type for packet receipt absence verification */
    DATA_TYPE_PACKET_RECEIPT_ABSENCE = 7,
    /** DATA_TYPE_NEXT_SEQUENCE_RECV - Data type for next sequence recv verification */
    DATA_TYPE_NEXT_SEQUENCE_RECV = 8,
    /** DATA_TYPE_HEADER - Data type for header verification */
    DATA_TYPE_HEADER = 9,
    UNRECOGNIZED = -1
}
export declare function dataTypeFromJSON(object: any): DataType;
export declare function dataTypeToJSON(object: DataType): string;
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientState {
    /** latest sequence of the client state */
    sequence: string;
    /** frozen sequence of the solo machine */
    is_frozen: boolean;
    consensus_state?: ConsensusState;
    /**
     * when set to true, will allow governance to update a solo machine client.
     * The client will be unfrozen if it is frozen.
     */
    allow_update_after_proposal: boolean;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusState {
    /** public key of the solo machine */
    public_key?: Any;
    /**
     * diversifier allows the same public key to be re-used across different solo
     * machine clients (potentially on different chains) without being considered
     * misbehaviour.
     */
    diversifier: string;
    timestamp: string;
}
/** Header defines a solo machine consensus header */
export interface Header {
    /** sequence to update solo machine public key at */
    sequence: string;
    timestamp: string;
    signature: Uint8Array;
    new_public_key?: Any;
    new_diversifier: string;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface Misbehaviour {
    client_id: string;
    sequence: string;
    signature_one?: SignatureAndData;
    signature_two?: SignatureAndData;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndData {
    signature: Uint8Array;
    data_type: DataType;
    data: Uint8Array;
    timestamp: string;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureData {
    signature_data: Uint8Array;
    timestamp: string;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytes {
    sequence: string;
    timestamp: string;
    diversifier: string;
    /** type of the data used */
    data_type: DataType;
    /** marshaled data */
    data: Uint8Array;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderData {
    /** header public key */
    new_pub_key?: Any;
    /** header diversifier */
    new_diversifier: string;
}
/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateData {
    path: Uint8Array;
    client_state?: Any;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */
export interface ConsensusStateData {
    path: Uint8Array;
    consensus_state?: Any;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */
export interface ConnectionStateData {
    path: Uint8Array;
    connection?: ConnectionEnd;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */
export interface ChannelStateData {
    path: Uint8Array;
    channel?: Channel;
}
/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 */
export interface PacketCommitmentData {
    path: Uint8Array;
    commitment: Uint8Array;
}
/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 */
export interface PacketAcknowledgementData {
    path: Uint8Array;
    acknowledgement: Uint8Array;
}
/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 */
export interface PacketReceiptAbsenceData {
    path: Uint8Array;
}
/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 */
export interface NextSequenceRecvData {
    path: Uint8Array;
    next_seq_recv: string;
}
export declare const ClientState: {
    encode(message: ClientState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClientState;
    fromJSON(object: any): ClientState;
    toJSON(message: ClientState): unknown;
    fromPartial<I extends {
        sequence?: string | undefined;
        is_frozen?: boolean | undefined;
        consensus_state?: {
            public_key?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            diversifier?: string | undefined;
            timestamp?: string | undefined;
        } | undefined;
        allow_update_after_proposal?: boolean | undefined;
    } & {
        sequence?: string | undefined;
        is_frozen?: boolean | undefined;
        consensus_state?: ({
            public_key?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            diversifier?: string | undefined;
            timestamp?: string | undefined;
        } & {
            public_key?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["consensus_state"]["public_key"], keyof Any>, never>) | undefined;
            diversifier?: string | undefined;
            timestamp?: string | undefined;
        } & Record<Exclude<keyof I["consensus_state"], keyof ConsensusState>, never>) | undefined;
        allow_update_after_proposal?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof ClientState>, never>>(object: I): ClientState;
};
export declare const ConsensusState: {
    encode(message: ConsensusState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConsensusState;
    fromJSON(object: any): ConsensusState;
    toJSON(message: ConsensusState): unknown;
    fromPartial<I extends {
        public_key?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        diversifier?: string | undefined;
        timestamp?: string | undefined;
    } & {
        public_key?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["public_key"], keyof Any>, never>) | undefined;
        diversifier?: string | undefined;
        timestamp?: string | undefined;
    } & Record<Exclude<keyof I, keyof ConsensusState>, never>>(object: I): ConsensusState;
};
export declare const Header: {
    encode(message: Header, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Header;
    fromJSON(object: any): Header;
    toJSON(message: Header): unknown;
    fromPartial<I extends {
        sequence?: string | undefined;
        timestamp?: string | undefined;
        signature?: Uint8Array | undefined;
        new_public_key?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        new_diversifier?: string | undefined;
    } & {
        sequence?: string | undefined;
        timestamp?: string | undefined;
        signature?: Uint8Array | undefined;
        new_public_key?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["new_public_key"], keyof Any>, never>) | undefined;
        new_diversifier?: string | undefined;
    } & Record<Exclude<keyof I, keyof Header>, never>>(object: I): Header;
};
export declare const Misbehaviour: {
    encode(message: Misbehaviour, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Misbehaviour;
    fromJSON(object: any): Misbehaviour;
    toJSON(message: Misbehaviour): unknown;
    fromPartial<I extends {
        client_id?: string | undefined;
        sequence?: string | undefined;
        signature_one?: {
            signature?: Uint8Array | undefined;
            data_type?: DataType | undefined;
            data?: Uint8Array | undefined;
            timestamp?: string | undefined;
        } | undefined;
        signature_two?: {
            signature?: Uint8Array | undefined;
            data_type?: DataType | undefined;
            data?: Uint8Array | undefined;
            timestamp?: string | undefined;
        } | undefined;
    } & {
        client_id?: string | undefined;
        sequence?: string | undefined;
        signature_one?: ({
            signature?: Uint8Array | undefined;
            data_type?: DataType | undefined;
            data?: Uint8Array | undefined;
            timestamp?: string | undefined;
        } & {
            signature?: Uint8Array | undefined;
            data_type?: DataType | undefined;
            data?: Uint8Array | undefined;
            timestamp?: string | undefined;
        } & Record<Exclude<keyof I["signature_one"], keyof SignatureAndData>, never>) | undefined;
        signature_two?: ({
            signature?: Uint8Array | undefined;
            data_type?: DataType | undefined;
            data?: Uint8Array | undefined;
            timestamp?: string | undefined;
        } & {
            signature?: Uint8Array | undefined;
            data_type?: DataType | undefined;
            data?: Uint8Array | undefined;
            timestamp?: string | undefined;
        } & Record<Exclude<keyof I["signature_two"], keyof SignatureAndData>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Misbehaviour>, never>>(object: I): Misbehaviour;
};
export declare const SignatureAndData: {
    encode(message: SignatureAndData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignatureAndData;
    fromJSON(object: any): SignatureAndData;
    toJSON(message: SignatureAndData): unknown;
    fromPartial<I extends {
        signature?: Uint8Array | undefined;
        data_type?: DataType | undefined;
        data?: Uint8Array | undefined;
        timestamp?: string | undefined;
    } & {
        signature?: Uint8Array | undefined;
        data_type?: DataType | undefined;
        data?: Uint8Array | undefined;
        timestamp?: string | undefined;
    } & Record<Exclude<keyof I, keyof SignatureAndData>, never>>(object: I): SignatureAndData;
};
export declare const TimestampedSignatureData: {
    encode(message: TimestampedSignatureData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TimestampedSignatureData;
    fromJSON(object: any): TimestampedSignatureData;
    toJSON(message: TimestampedSignatureData): unknown;
    fromPartial<I extends {
        signature_data?: Uint8Array | undefined;
        timestamp?: string | undefined;
    } & {
        signature_data?: Uint8Array | undefined;
        timestamp?: string | undefined;
    } & Record<Exclude<keyof I, keyof TimestampedSignatureData>, never>>(object: I): TimestampedSignatureData;
};
export declare const SignBytes: {
    encode(message: SignBytes, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignBytes;
    fromJSON(object: any): SignBytes;
    toJSON(message: SignBytes): unknown;
    fromPartial<I extends {
        sequence?: string | undefined;
        timestamp?: string | undefined;
        diversifier?: string | undefined;
        data_type?: DataType | undefined;
        data?: Uint8Array | undefined;
    } & {
        sequence?: string | undefined;
        timestamp?: string | undefined;
        diversifier?: string | undefined;
        data_type?: DataType | undefined;
        data?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof SignBytes>, never>>(object: I): SignBytes;
};
export declare const HeaderData: {
    encode(message: HeaderData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HeaderData;
    fromJSON(object: any): HeaderData;
    toJSON(message: HeaderData): unknown;
    fromPartial<I extends {
        new_pub_key?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        new_diversifier?: string | undefined;
    } & {
        new_pub_key?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["new_pub_key"], keyof Any>, never>) | undefined;
        new_diversifier?: string | undefined;
    } & Record<Exclude<keyof I, keyof HeaderData>, never>>(object: I): HeaderData;
};
export declare const ClientStateData: {
    encode(message: ClientStateData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClientStateData;
    fromJSON(object: any): ClientStateData;
    toJSON(message: ClientStateData): unknown;
    fromPartial<I extends {
        path?: Uint8Array | undefined;
        client_state?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        path?: Uint8Array | undefined;
        client_state?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["client_state"], keyof Any>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ClientStateData>, never>>(object: I): ClientStateData;
};
export declare const ConsensusStateData: {
    encode(message: ConsensusStateData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConsensusStateData;
    fromJSON(object: any): ConsensusStateData;
    toJSON(message: ConsensusStateData): unknown;
    fromPartial<I extends {
        path?: Uint8Array | undefined;
        consensus_state?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        path?: Uint8Array | undefined;
        consensus_state?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["consensus_state"], keyof Any>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ConsensusStateData>, never>>(object: I): ConsensusStateData;
};
export declare const ConnectionStateData: {
    encode(message: ConnectionStateData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConnectionStateData;
    fromJSON(object: any): ConnectionStateData;
    toJSON(message: ConnectionStateData): unknown;
    fromPartial<I extends {
        path?: Uint8Array | undefined;
        connection?: {
            client_id?: string | undefined;
            versions?: {
                identifier?: string | undefined;
                features?: string[] | undefined;
            }[] | undefined;
            state?: import("../../../core/connection/v1/connection").State | undefined;
            counterparty?: {
                client_id?: string | undefined;
                connection_id?: string | undefined;
                prefix?: {
                    key_prefix?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            delay_period?: string | undefined;
        } | undefined;
    } & {
        path?: Uint8Array | undefined;
        connection?: ({
            client_id?: string | undefined;
            versions?: {
                identifier?: string | undefined;
                features?: string[] | undefined;
            }[] | undefined;
            state?: import("../../../core/connection/v1/connection").State | undefined;
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
            } & Record<Exclude<keyof I["connection"]["versions"][number], keyof import("../../../core/connection/v1/connection").Version>, never>)[] & Record<Exclude<keyof I["connection"]["versions"], keyof {
                identifier?: string | undefined;
                features?: string[] | undefined;
            }[]>, never>) | undefined;
            state?: import("../../../core/connection/v1/connection").State | undefined;
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
            } & Record<Exclude<keyof I["connection"]["counterparty"], keyof import("../../../core/connection/v1/connection").Counterparty>, never>) | undefined;
            delay_period?: string | undefined;
        } & Record<Exclude<keyof I["connection"], keyof ConnectionEnd>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ConnectionStateData>, never>>(object: I): ConnectionStateData;
};
export declare const ChannelStateData: {
    encode(message: ChannelStateData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChannelStateData;
    fromJSON(object: any): ChannelStateData;
    toJSON(message: ChannelStateData): unknown;
    fromPartial<I extends {
        path?: Uint8Array | undefined;
        channel?: {
            state?: import("../../../core/channel/v1/channel").State | undefined;
            ordering?: import("../../../core/channel/v1/channel").Order | undefined;
            counterparty?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } | undefined;
            connection_hops?: string[] | undefined;
            version?: string | undefined;
        } | undefined;
    } & {
        path?: Uint8Array | undefined;
        channel?: ({
            state?: import("../../../core/channel/v1/channel").State | undefined;
            ordering?: import("../../../core/channel/v1/channel").Order | undefined;
            counterparty?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } | undefined;
            connection_hops?: string[] | undefined;
            version?: string | undefined;
        } & {
            state?: import("../../../core/channel/v1/channel").State | undefined;
            ordering?: import("../../../core/channel/v1/channel").Order | undefined;
            counterparty?: ({
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } & {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } & Record<Exclude<keyof I["channel"]["counterparty"], keyof import("../../../core/channel/v1/channel").Counterparty>, never>) | undefined;
            connection_hops?: (string[] & string[] & Record<Exclude<keyof I["channel"]["connection_hops"], keyof string[]>, never>) | undefined;
            version?: string | undefined;
        } & Record<Exclude<keyof I["channel"], keyof Channel>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ChannelStateData>, never>>(object: I): ChannelStateData;
};
export declare const PacketCommitmentData: {
    encode(message: PacketCommitmentData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PacketCommitmentData;
    fromJSON(object: any): PacketCommitmentData;
    toJSON(message: PacketCommitmentData): unknown;
    fromPartial<I extends {
        path?: Uint8Array | undefined;
        commitment?: Uint8Array | undefined;
    } & {
        path?: Uint8Array | undefined;
        commitment?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof PacketCommitmentData>, never>>(object: I): PacketCommitmentData;
};
export declare const PacketAcknowledgementData: {
    encode(message: PacketAcknowledgementData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PacketAcknowledgementData;
    fromJSON(object: any): PacketAcknowledgementData;
    toJSON(message: PacketAcknowledgementData): unknown;
    fromPartial<I extends {
        path?: Uint8Array | undefined;
        acknowledgement?: Uint8Array | undefined;
    } & {
        path?: Uint8Array | undefined;
        acknowledgement?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof PacketAcknowledgementData>, never>>(object: I): PacketAcknowledgementData;
};
export declare const PacketReceiptAbsenceData: {
    encode(message: PacketReceiptAbsenceData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PacketReceiptAbsenceData;
    fromJSON(object: any): PacketReceiptAbsenceData;
    toJSON(message: PacketReceiptAbsenceData): unknown;
    fromPartial<I extends {
        path?: Uint8Array | undefined;
    } & {
        path?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "path">, never>>(object: I): PacketReceiptAbsenceData;
};
export declare const NextSequenceRecvData: {
    encode(message: NextSequenceRecvData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NextSequenceRecvData;
    fromJSON(object: any): NextSequenceRecvData;
    toJSON(message: NextSequenceRecvData): unknown;
    fromPartial<I extends {
        path?: Uint8Array | undefined;
        next_seq_recv?: string | undefined;
    } & {
        path?: Uint8Array | undefined;
        next_seq_recv?: string | undefined;
    } & Record<Exclude<keyof I, keyof NextSequenceRecvData>, never>>(object: I): NextSequenceRecvData;
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
//# sourceMappingURL=solomachine.d.ts.map