import * as CosmosBaseQueryV1beta1Pagination from "../../../../cosmos/base/query/v1beta1/pagination.pb";
import * as fm from "../../../../fetch.pb";
import * as IbcApplicationsTransferV1Transfer from "./transfer.pb";
export declare type QueryDenomTraceRequest = {
    hash?: string;
};
export declare type QueryDenomTraceResponse = {
    denom_trace?: IbcApplicationsTransferV1Transfer.DenomTrace;
};
export declare type QueryDenomTracesRequest = {
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryDenomTracesResponse = {
    denom_traces?: IbcApplicationsTransferV1Transfer.DenomTrace[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryParamsRequest = {};
export declare type QueryParamsResponse = {
    params?: IbcApplicationsTransferV1Transfer.Params;
};
export declare type QueryDenomHashRequest = {
    trace?: string;
};
export declare type QueryDenomHashResponse = {
    hash?: string;
};
export declare type QueryEscrowAddressRequest = {
    port_id?: string;
    channel_id?: string;
};
export declare type QueryEscrowAddressResponse = {
    escrow_address?: string;
};
export declare class Query {
    static DenomTrace(req: QueryDenomTraceRequest, initReq?: fm.InitReq): Promise<QueryDenomTraceResponse>;
    static DenomTraces(req: QueryDenomTracesRequest, initReq?: fm.InitReq): Promise<QueryDenomTracesResponse>;
    static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse>;
    static DenomHash(req: QueryDenomHashRequest, initReq?: fm.InitReq): Promise<QueryDenomHashResponse>;
    static EscrowAddress(req: QueryEscrowAddressRequest, initReq?: fm.InitReq): Promise<QueryEscrowAddressResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map