import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse, QueryAllowancesRequest, QueryAllowancesResponse } from "../grpc_gateway/cosmos/feegrant/v1beta1/query.pb";
export declare class FeegrantQuerier {
    private url;
    constructor(url: string);
    allowance(req: QueryAllowanceRequest, headers?: HeadersInit): Promise<QueryAllowanceResponse>;
    allowances(req: QueryAllowancesRequest, headers?: HeadersInit): Promise<QueryAllowancesResponse>;
    allowancesByGranter(req: QueryAllowancesByGranterRequest, headers?: HeadersInit): Promise<QueryAllowancesByGranterResponse>;
}
//# sourceMappingURL=feegrant.d.ts.map