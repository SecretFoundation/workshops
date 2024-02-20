import { QueryParamsRequest, QueryParamsResponse } from "../grpc_gateway/ibc/applications/packetforward/v1/query.pb";
export declare class IbcPacketForwardQuerier {
    private url;
    constructor(url: string);
    params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
}
//# sourceMappingURL=ibc_packet_forward.d.ts.map