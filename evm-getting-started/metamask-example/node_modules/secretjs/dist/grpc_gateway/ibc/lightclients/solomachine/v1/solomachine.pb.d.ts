import * as GoogleProtobufAny from "../../../../google/protobuf/any.pb";
import * as IbcCoreChannelV1Channel from "../../../core/channel/v1/channel.pb";
import * as IbcCoreConnectionV1Connection from "../../../core/connection/v1/connection.pb";
export declare enum DataType {
    DATA_TYPE_UNINITIALIZED_UNSPECIFIED = "DATA_TYPE_UNINITIALIZED_UNSPECIFIED",
    DATA_TYPE_CLIENT_STATE = "DATA_TYPE_CLIENT_STATE",
    DATA_TYPE_CONSENSUS_STATE = "DATA_TYPE_CONSENSUS_STATE",
    DATA_TYPE_CONNECTION_STATE = "DATA_TYPE_CONNECTION_STATE",
    DATA_TYPE_CHANNEL_STATE = "DATA_TYPE_CHANNEL_STATE",
    DATA_TYPE_PACKET_COMMITMENT = "DATA_TYPE_PACKET_COMMITMENT",
    DATA_TYPE_PACKET_ACKNOWLEDGEMENT = "DATA_TYPE_PACKET_ACKNOWLEDGEMENT",
    DATA_TYPE_PACKET_RECEIPT_ABSENCE = "DATA_TYPE_PACKET_RECEIPT_ABSENCE",
    DATA_TYPE_NEXT_SEQUENCE_RECV = "DATA_TYPE_NEXT_SEQUENCE_RECV",
    DATA_TYPE_HEADER = "DATA_TYPE_HEADER"
}
export declare type ClientState = {
    sequence?: string;
    frozen_sequence?: string;
    consensus_state?: ConsensusState;
    allow_update_after_proposal?: boolean;
};
export declare type ConsensusState = {
    public_key?: GoogleProtobufAny.Any;
    diversifier?: string;
    timestamp?: string;
};
export declare type Header = {
    sequence?: string;
    timestamp?: string;
    signature?: Uint8Array;
    new_public_key?: GoogleProtobufAny.Any;
    new_diversifier?: string;
};
export declare type Misbehaviour = {
    client_id?: string;
    sequence?: string;
    signature_one?: SignatureAndData;
    signature_two?: SignatureAndData;
};
export declare type SignatureAndData = {
    signature?: Uint8Array;
    data_type?: DataType;
    data?: Uint8Array;
    timestamp?: string;
};
export declare type TimestampedSignatureData = {
    signature_data?: Uint8Array;
    timestamp?: string;
};
export declare type SignBytes = {
    sequence?: string;
    timestamp?: string;
    diversifier?: string;
    data_type?: DataType;
    data?: Uint8Array;
};
export declare type HeaderData = {
    new_pub_key?: GoogleProtobufAny.Any;
    new_diversifier?: string;
};
export declare type ClientStateData = {
    path?: Uint8Array;
    client_state?: GoogleProtobufAny.Any;
};
export declare type ConsensusStateData = {
    path?: Uint8Array;
    consensus_state?: GoogleProtobufAny.Any;
};
export declare type ConnectionStateData = {
    path?: Uint8Array;
    connection?: IbcCoreConnectionV1Connection.ConnectionEnd;
};
export declare type ChannelStateData = {
    path?: Uint8Array;
    channel?: IbcCoreChannelV1Channel.Channel;
};
export declare type PacketCommitmentData = {
    path?: Uint8Array;
    commitment?: Uint8Array;
};
export declare type PacketAcknowledgementData = {
    path?: Uint8Array;
    acknowledgement?: Uint8Array;
};
export declare type PacketReceiptAbsenceData = {
    path?: Uint8Array;
};
export declare type NextSequenceRecvData = {
    path?: Uint8Array;
    next_seq_recv?: string;
};
//# sourceMappingURL=solomachine.pb.d.ts.map