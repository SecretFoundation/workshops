import { QueryAnnualProvisionsRequest, QueryAnnualProvisionsResponse, QueryInflationRequest, QueryInflationResponse, QueryParamsRequest, QueryParamsResponse } from "../grpc_gateway/cosmos/mint/v1beta1/query.pb";
export declare class MintQuerier {
    private url;
    constructor(url: string);
    params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    inflation(req: QueryInflationRequest, headers?: HeadersInit): Promise<QueryInflationResponse>;
    annualProvisions(req: QueryAnnualProvisionsRequest, headers?: HeadersInit): Promise<QueryAnnualProvisionsResponse>;
}
//# sourceMappingURL=mint.d.ts.map