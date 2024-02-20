import { QueryInterchainAccountRequest, QueryInterchainAccountResponse, QueryParamsRequest, QueryParamsResponse } from "../grpc_gateway/ibc/applications/interchain_accounts/controller/v1/query.pb";
export declare class IbcInterchainAccountsControllerQuerier {
    private url;
    constructor(url: string);
    params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    interchainAccount(req: QueryInterchainAccountRequest, headers?: HeadersInit): Promise<QueryInterchainAccountResponse>;
}
//# sourceMappingURL=ibc_interchain_accounts_controller.d.ts.map