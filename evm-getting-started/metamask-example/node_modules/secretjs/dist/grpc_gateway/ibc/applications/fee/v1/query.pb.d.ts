import * as CosmosBaseQueryV1beta1Pagination from "../../../../cosmos/base/query/v1beta1/pagination.pb";
import * as CosmosBaseV1beta1Coin from "../../../../cosmos/base/v1beta1/coin.pb";
import * as fm from "../../../../fetch.pb";
import * as IbcCoreChannelV1Channel from "../../../core/channel/v1/channel.pb";
import * as IbcApplicationsFeeV1Fee from "./fee.pb";
import * as IbcApplicationsFeeV1Genesis from "./genesis.pb";
export declare type QueryIncentivizedPacketsRequest = {
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
    query_height?: string;
};
export declare type QueryIncentivizedPacketsResponse = {
    incentivized_packets?: IbcApplicationsFeeV1Fee.IdentifiedPacketFees[];
};
export declare type QueryIncentivizedPacketRequest = {
    packet_id?: IbcCoreChannelV1Channel.PacketId;
    query_height?: string;
};
export declare type QueryIncentivizedPacketResponse = {
    incentivized_packet?: IbcApplicationsFeeV1Fee.IdentifiedPacketFees;
};
export declare type QueryIncentivizedPacketsForChannelRequest = {
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
    port_id?: string;
    channel_id?: string;
    query_height?: string;
};
export declare type QueryIncentivizedPacketsForChannelResponse = {
    incentivized_packets?: IbcApplicationsFeeV1Fee.IdentifiedPacketFees[];
};
export declare type QueryTotalRecvFeesRequest = {
    packet_id?: IbcCoreChannelV1Channel.PacketId;
};
export declare type QueryTotalRecvFeesResponse = {
    recv_fees?: CosmosBaseV1beta1Coin.Coin[];
};
export declare type QueryTotalAckFeesRequest = {
    packet_id?: IbcCoreChannelV1Channel.PacketId;
};
export declare type QueryTotalAckFeesResponse = {
    ack_fees?: CosmosBaseV1beta1Coin.Coin[];
};
export declare type QueryTotalTimeoutFeesRequest = {
    packet_id?: IbcCoreChannelV1Channel.PacketId;
};
export declare type QueryTotalTimeoutFeesResponse = {
    timeout_fees?: CosmosBaseV1beta1Coin.Coin[];
};
export declare type QueryPayeeRequest = {
    channel_id?: string;
    relayer?: string;
};
export declare type QueryPayeeResponse = {
    payee_address?: string;
};
export declare type QueryCounterpartyPayeeRequest = {
    channel_id?: string;
    relayer?: string;
};
export declare type QueryCounterpartyPayeeResponse = {
    counterparty_payee?: string;
};
export declare type QueryFeeEnabledChannelsRequest = {
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
    query_height?: string;
};
export declare type QueryFeeEnabledChannelsResponse = {
    fee_enabled_channels?: IbcApplicationsFeeV1Genesis.FeeEnabledChannel[];
};
export declare type QueryFeeEnabledChannelRequest = {
    port_id?: string;
    channel_id?: string;
};
export declare type QueryFeeEnabledChannelResponse = {
    fee_enabled?: boolean;
};
export declare class Query {
    static IncentivizedPackets(req: QueryIncentivizedPacketsRequest, initReq?: fm.InitReq): Promise<QueryIncentivizedPacketsResponse>;
    static IncentivizedPacket(req: QueryIncentivizedPacketRequest, initReq?: fm.InitReq): Promise<QueryIncentivizedPacketResponse>;
    static IncentivizedPacketsForChannel(req: QueryIncentivizedPacketsForChannelRequest, initReq?: fm.InitReq): Promise<QueryIncentivizedPacketsForChannelResponse>;
    static TotalRecvFees(req: QueryTotalRecvFeesRequest, initReq?: fm.InitReq): Promise<QueryTotalRecvFeesResponse>;
    static TotalAckFees(req: QueryTotalAckFeesRequest, initReq?: fm.InitReq): Promise<QueryTotalAckFeesResponse>;
    static TotalTimeoutFees(req: QueryTotalTimeoutFeesRequest, initReq?: fm.InitReq): Promise<QueryTotalTimeoutFeesResponse>;
    static Payee(req: QueryPayeeRequest, initReq?: fm.InitReq): Promise<QueryPayeeResponse>;
    static CounterpartyPayee(req: QueryCounterpartyPayeeRequest, initReq?: fm.InitReq): Promise<QueryCounterpartyPayeeResponse>;
    static FeeEnabledChannels(req: QueryFeeEnabledChannelsRequest, initReq?: fm.InitReq): Promise<QueryFeeEnabledChannelsResponse>;
    static FeeEnabledChannel(req: QueryFeeEnabledChannelRequest, initReq?: fm.InitReq): Promise<QueryFeeEnabledChannelResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map