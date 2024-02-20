import { QueryParamsRequest, QueryParamsResponse } from "../grpc_gateway/ibc/applications/interchain_accounts/host/v1/query.pb";
export declare class IbcInterchainAccountsHostQuerier {
    private url;
    constructor(url: string);
    params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
}
//# sourceMappingURL=ibc_interchain_accounts_host.d.ts.map