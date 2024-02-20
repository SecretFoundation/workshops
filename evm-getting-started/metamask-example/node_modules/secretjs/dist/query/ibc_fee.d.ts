import { QueryIncentivizedPacketsRequest, QueryIncentivizedPacketsResponse, QueryIncentivizedPacketRequest, QueryIncentivizedPacketResponse, QueryIncentivizedPacketsForChannelRequest, QueryIncentivizedPacketsForChannelResponse, QueryTotalRecvFeesRequest, QueryTotalRecvFeesResponse, QueryTotalAckFeesRequest, QueryTotalAckFeesResponse, QueryTotalTimeoutFeesRequest, QueryTotalTimeoutFeesResponse, QueryPayeeRequest, QueryPayeeResponse, QueryCounterpartyPayeeRequest, QueryCounterpartyPayeeResponse, QueryFeeEnabledChannelsRequest, QueryFeeEnabledChannelsResponse, QueryFeeEnabledChannelRequest, QueryFeeEnabledChannelResponse } from "../grpc_gateway/ibc/applications/fee/v1/query.pb";
export declare class IbcFeeQuerier {
    private url;
    constructor(url: string);
    incentivizedPackets(req: QueryIncentivizedPacketsRequest, headers?: HeadersInit): Promise<QueryIncentivizedPacketsResponse>;
    incentivizedPacket(req: QueryIncentivizedPacketRequest, headers?: HeadersInit): Promise<QueryIncentivizedPacketResponse>;
    incentivizedPacketsForChannel(req: QueryIncentivizedPacketsForChannelRequest, headers?: HeadersInit): Promise<QueryIncentivizedPacketsForChannelResponse>;
    totalRecvFees(req: QueryTotalRecvFeesRequest, headers?: HeadersInit): Promise<QueryTotalRecvFeesResponse>;
    totalAckFees(req: QueryTotalAckFeesRequest, headers?: HeadersInit): Promise<QueryTotalAckFeesResponse>;
    totalTimeoutFees(req: QueryTotalTimeoutFeesRequest, headers?: HeadersInit): Promise<QueryTotalTimeoutFeesResponse>;
    payee(req: QueryPayeeRequest, headers?: HeadersInit): Promise<QueryPayeeResponse>;
    counterpartyPayee(req: QueryCounterpartyPayeeRequest, headers?: HeadersInit): Promise<QueryCounterpartyPayeeResponse>;
    feeEnabledChannels(req: QueryFeeEnabledChannelsRequest, headers?: HeadersInit): Promise<QueryFeeEnabledChannelsResponse>;
    feeEnabledChannel(req: QueryFeeEnabledChannelRequest, headers?: HeadersInit): Promise<QueryFeeEnabledChannelResponse>;
}
//# sourceMappingURL=ibc_fee.d.ts.map