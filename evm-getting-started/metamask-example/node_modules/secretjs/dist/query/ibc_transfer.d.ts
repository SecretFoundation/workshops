import { QueryDenomHashRequest, QueryDenomHashResponse, QueryDenomTraceRequest, QueryDenomTraceResponse, QueryDenomTracesRequest, QueryDenomTracesResponse, QueryParamsRequest, QueryParamsResponse, QueryEscrowAddressRequest, QueryEscrowAddressResponse } from "../grpc_gateway/ibc/applications/transfer/v1/query.pb";
export declare class IbcTransferQuerier {
    private url;
    constructor(url: string);
    denomTrace(req: QueryDenomTraceRequest, headers?: HeadersInit): Promise<QueryDenomTraceResponse>;
    denomTraces(req: QueryDenomTracesRequest, headers?: HeadersInit): Promise<QueryDenomTracesResponse>;
    params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    denomHash(req: QueryDenomHashRequest, headers?: HeadersInit): Promise<QueryDenomHashResponse>;
    escrowAddress(req: QueryEscrowAddressRequest, headers?: HeadersInit): Promise<QueryEscrowAddressResponse>;
}
//# sourceMappingURL=ibc_transfer.d.ts.map