import { QueryAllBalancesRequest, QueryAllBalancesResponse, QueryBalanceRequest, QueryBalanceResponse, QueryDenomMetadataRequest, QueryDenomMetadataResponse, QueryDenomsMetadataRequest, QueryDenomsMetadataResponse, QueryParamsRequest, QueryParamsResponse, QuerySpendableBalancesRequest, QuerySpendableBalancesResponse, QuerySupplyOfRequest, QuerySupplyOfResponse, QueryTotalSupplyRequest, QueryTotalSupplyResponse } from "../grpc_gateway/cosmos/bank/v1beta1/query.pb";
export declare class BankQuerier {
    private url;
    constructor(url: string);
    balance(req: QueryBalanceRequest, headers?: HeadersInit): Promise<QueryBalanceResponse>;
    allBalances(req: QueryAllBalancesRequest, headers?: HeadersInit): Promise<QueryAllBalancesResponse>;
    spendableBalances(req: QuerySpendableBalancesRequest, headers?: HeadersInit): Promise<QuerySpendableBalancesResponse>;
    totalSupply(req: QueryTotalSupplyRequest, headers?: HeadersInit): Promise<QueryTotalSupplyResponse>;
    supplyOf(req: QuerySupplyOfRequest, headers?: HeadersInit): Promise<QuerySupplyOfResponse>;
    params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    denomMetadata(req: QueryDenomMetadataRequest, headers?: HeadersInit): Promise<QueryDenomMetadataResponse>;
    denomsMetadata(req: QueryDenomsMetadataRequest, headers?: HeadersInit): Promise<QueryDenomsMetadataResponse>;
}
//# sourceMappingURL=bank.d.ts.map