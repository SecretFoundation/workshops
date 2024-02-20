import { QueryParamsRequest, QueryParamsResponse, QuerySigningInfoRequest, QuerySigningInfoResponse, QuerySigningInfosRequest, QuerySigningInfosResponse } from "../grpc_gateway/cosmos/slashing/v1beta1/query.pb";
export declare class SlashingQuerier {
    private url;
    constructor(url: string);
    params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    signingInfo(req: QuerySigningInfoRequest, headers?: HeadersInit): Promise<QuerySigningInfoResponse>;
    signingInfos(req: QuerySigningInfosRequest, headers?: HeadersInit): Promise<QuerySigningInfosResponse>;
}
//# sourceMappingURL=slashing.d.ts.map