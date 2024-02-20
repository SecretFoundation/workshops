import * as CosmosBaseQueryV1beta1Pagination from "../../../../cosmos/base/query/v1beta1/pagination.pb";
import * as fm from "../../../../fetch.pb";
import * as GoogleProtobufAny from "../../../../google/protobuf/any.pb";
import * as IbcCoreClientV1Client from "../../client/v1/client.pb";
import * as IbcCoreChannelV1Channel from "./channel.pb";
export declare type QueryChannelRequest = {
    port_id?: string;
    channel_id?: string;
};
export declare type QueryChannelResponse = {
    channel?: IbcCoreChannelV1Channel.Channel;
    proof?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
};
export declare type QueryChannelsRequest = {
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryChannelsResponse = {
    channels?: IbcCoreChannelV1Channel.IdentifiedChannel[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
    height?: IbcCoreClientV1Client.Height;
};
export declare type QueryConnectionChannelsRequest = {
    connection?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryConnectionChannelsResponse = {
    channels?: IbcCoreChannelV1Channel.IdentifiedChannel[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
    height?: IbcCoreClientV1Client.Height;
};
export declare type QueryChannelClientStateRequest = {
    port_id?: string;
    channel_id?: string;
};
export declare type QueryChannelClientStateResponse = {
    identified_client_state?: IbcCoreClientV1Client.IdentifiedClientState;
    proof?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
};
export declare type QueryChannelConsensusStateRequest = {
    port_id?: string;
    channel_id?: string;
    revision_number?: string;
    revision_height?: string;
};
export declare type QueryChannelConsensusStateResponse = {
    consensus_state?: GoogleProtobufAny.Any;
    client_id?: string;
    proof?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
};
export declare type QueryPacketCommitmentRequest = {
    port_id?: string;
    channel_id?: string;
    sequence?: string;
};
export declare type QueryPacketCommitmentResponse = {
    commitment?: Uint8Array;
    proof?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
};
export declare type QueryPacketCommitmentsRequest = {
    port_id?: string;
    channel_id?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryPacketCommitmentsResponse = {
    commitments?: IbcCoreChannelV1Channel.PacketState[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
    height?: IbcCoreClientV1Client.Height;
};
export declare type QueryPacketReceiptRequest = {
    port_id?: string;
    channel_id?: string;
    sequence?: string;
};
export declare type QueryPacketReceiptResponse = {
    received?: boolean;
    proof?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
};
export declare type QueryPacketAcknowledgementRequest = {
    port_id?: string;
    channel_id?: string;
    sequence?: string;
};
export declare type QueryPacketAcknowledgementResponse = {
    acknowledgement?: Uint8Array;
    proof?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
};
export declare type QueryPacketAcknowledgementsRequest = {
    port_id?: string;
    channel_id?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
    packet_commitment_sequences?: string[];
};
export declare type QueryPacketAcknowledgementsResponse = {
    acknowledgements?: IbcCoreChannelV1Channel.PacketState[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
    height?: IbcCoreClientV1Client.Height;
};
export declare type QueryUnreceivedPacketsRequest = {
    port_id?: string;
    channel_id?: string;
    packet_commitment_sequences?: string[];
};
export declare type QueryUnreceivedPacketsResponse = {
    sequences?: string[];
    height?: IbcCoreClientV1Client.Height;
};
export declare type QueryUnreceivedAcksRequest = {
    port_id?: string;
    channel_id?: string;
    packet_ack_sequences?: string[];
};
export declare type QueryUnreceivedAcksResponse = {
    sequences?: string[];
    height?: IbcCoreClientV1Client.Height;
};
export declare type QueryNextSequenceReceiveRequest = {
    port_id?: string;
    channel_id?: string;
};
export declare type QueryNextSequenceReceiveResponse = {
    next_sequence_receive?: string;
    proof?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
};
export declare class Query {
    static Channel(req: QueryChannelRequest, initReq?: fm.InitReq): Promise<QueryChannelResponse>;
    static Channels(req: QueryChannelsRequest, initReq?: fm.InitReq): Promise<QueryChannelsResponse>;
    static ConnectionChannels(req: QueryConnectionChannelsRequest, initReq?: fm.InitReq): Promise<QueryConnectionChannelsResponse>;
    static ChannelClientState(req: QueryChannelClientStateRequest, initReq?: fm.InitReq): Promise<QueryChannelClientStateResponse>;
    static ChannelConsensusState(req: QueryChannelConsensusStateRequest, initReq?: fm.InitReq): Promise<QueryChannelConsensusStateResponse>;
    static PacketCommitment(req: QueryPacketCommitmentRequest, initReq?: fm.InitReq): Promise<QueryPacketCommitmentResponse>;
    static PacketCommitments(req: QueryPacketCommitmentsRequest, initReq?: fm.InitReq): Promise<QueryPacketCommitmentsResponse>;
    static PacketReceipt(req: QueryPacketReceiptRequest, initReq?: fm.InitReq): Promise<QueryPacketReceiptResponse>;
    static PacketAcknowledgement(req: QueryPacketAcknowledgementRequest, initReq?: fm.InitReq): Promise<QueryPacketAcknowledgementResponse>;
    static PacketAcknowledgements(req: QueryPacketAcknowledgementsRequest, initReq?: fm.InitReq): Promise<QueryPacketAcknowledgementsResponse>;
    static UnreceivedPackets(req: QueryUnreceivedPacketsRequest, initReq?: fm.InitReq): Promise<QueryUnreceivedPacketsResponse>;
    static UnreceivedAcks(req: QueryUnreceivedAcksRequest, initReq?: fm.InitReq): Promise<QueryUnreceivedAcksResponse>;
    static NextSequenceReceive(req: QueryNextSequenceReceiveRequest, initReq?: fm.InitReq): Promise<QueryNextSequenceReceiveResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map