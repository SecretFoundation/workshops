import { QueryGranteeGrantsRequest, QueryGranteeGrantsResponse, QueryGranterGrantsRequest, QueryGranterGrantsResponse, QueryGrantsRequest, QueryGrantsResponse } from "../grpc_gateway/cosmos/authz/v1beta1/query.pb";
export declare class AuthzQuerier {
    private url;
    constructor(url: string);
    grants(req: QueryGrantsRequest, headers?: HeadersInit): Promise<QueryGrantsResponse>;
    granterGrants(req: QueryGranterGrantsRequest, headers?: HeadersInit): Promise<QueryGranterGrantsResponse>;
    granteeGrants(req: QueryGranteeGrantsRequest, headers?: HeadersInit): Promise<QueryGranteeGrantsResponse>;
}
//# sourceMappingURL=authz.d.ts.map