import { QueryChannelClientStateRequest, QueryChannelClientStateResponse, QueryChannelConsensusStateRequest, QueryChannelConsensusStateResponse, QueryChannelRequest, QueryChannelResponse, QueryChannelsRequest, QueryChannelsResponse, QueryConnectionChannelsRequest, QueryConnectionChannelsResponse, QueryNextSequenceReceiveRequest, QueryNextSequenceReceiveResponse, QueryPacketAcknowledgementRequest, QueryPacketAcknowledgementResponse, QueryPacketAcknowledgementsRequest, QueryPacketAcknowledgementsResponse, QueryPacketCommitmentRequest, QueryPacketCommitmentResponse, QueryPacketCommitmentsRequest, QueryPacketCommitmentsResponse, QueryPacketReceiptRequest, QueryPacketReceiptResponse, QueryUnreceivedAcksRequest, QueryUnreceivedAcksResponse, QueryUnreceivedPacketsRequest, QueryUnreceivedPacketsResponse } from "../grpc_gateway/ibc/core/channel/v1/query.pb";
export declare class IbcChannelQuerier {
    private url;
    constructor(url: string);
    channel(req: QueryChannelRequest, headers?: HeadersInit): Promise<QueryChannelResponse>;
    channels(req: QueryChannelsRequest, headers?: HeadersInit): Promise<QueryChannelsResponse>;
    connectionChannels(req: QueryConnectionChannelsRequest, headers?: HeadersInit): Promise<QueryConnectionChannelsResponse>;
    channelClientState(req: QueryChannelClientStateRequest, headers?: HeadersInit): Promise<QueryChannelClientStateResponse>;
    channelConsensusState(req: QueryChannelConsensusStateRequest, headers?: HeadersInit): Promise<QueryChannelConsensusStateResponse>;
    packetCommitment(req: QueryPacketCommitmentRequest, headers?: HeadersInit): Promise<QueryPacketCommitmentResponse>;
    packetCommitments(req: QueryPacketCommitmentsRequest, headers?: HeadersInit): Promise<QueryPacketCommitmentsResponse>;
    packetReceipt(req: QueryPacketReceiptRequest, headers?: HeadersInit): Promise<QueryPacketReceiptResponse>;
    packetAcknowledgement(req: QueryPacketAcknowledgementRequest, headers?: HeadersInit): Promise<QueryPacketAcknowledgementResponse>;
    packetAcknowledgements(req: QueryPacketAcknowledgementsRequest, headers?: HeadersInit): Promise<QueryPacketAcknowledgementsResponse>;
    unreceivedPackets(req: QueryUnreceivedPacketsRequest, headers?: HeadersInit): Promise<QueryUnreceivedPacketsResponse>;
    unreceivedAcks(req: QueryUnreceivedAcksRequest, headers?: HeadersInit): Promise<QueryUnreceivedAcksResponse>;
    nextSequenceReceive(req: QueryNextSequenceReceiveRequest, headers?: HeadersInit): Promise<QueryNextSequenceReceiveResponse>;
}
//# sourceMappingURL=ibc_channel.d.ts.map