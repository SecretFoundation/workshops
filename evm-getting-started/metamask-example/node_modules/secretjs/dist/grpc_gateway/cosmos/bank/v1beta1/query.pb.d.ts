import * as fm from "../../../fetch.pb";
import * as CosmosBaseQueryV1beta1Pagination from "../../base/query/v1beta1/pagination.pb";
import * as CosmosBaseV1beta1Coin from "../../base/v1beta1/coin.pb";
import * as CosmosBankV1beta1Bank from "./bank.pb";
export declare type QueryBalanceRequest = {
    address?: string;
    denom?: string;
};
export declare type QueryBalanceResponse = {
    balance?: CosmosBaseV1beta1Coin.Coin;
};
export declare type QueryAllBalancesRequest = {
    address?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryAllBalancesResponse = {
    balances?: CosmosBaseV1beta1Coin.Coin[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QuerySpendableBalancesRequest = {
    address?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QuerySpendableBalancesResponse = {
    balances?: CosmosBaseV1beta1Coin.Coin[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryTotalSupplyRequest = {
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryTotalSupplyResponse = {
    supply?: CosmosBaseV1beta1Coin.Coin[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QuerySupplyOfRequest = {
    denom?: string;
};
export declare type QuerySupplyOfResponse = {
    amount?: CosmosBaseV1beta1Coin.Coin;
};
export declare type QueryParamsRequest = {};
export declare type QueryParamsResponse = {
    params?: CosmosBankV1beta1Bank.Params;
};
export declare type QueryDenomsMetadataRequest = {
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryDenomsMetadataResponse = {
    metadatas?: CosmosBankV1beta1Bank.Metadata[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryDenomMetadataRequest = {
    denom?: string;
};
export declare type QueryDenomMetadataResponse = {
    metadata?: CosmosBankV1beta1Bank.Metadata;
};
export declare class Query {
    static Balance(req: QueryBalanceRequest, initReq?: fm.InitReq): Promise<QueryBalanceResponse>;
    static AllBalances(req: QueryAllBalancesRequest, initReq?: fm.InitReq): Promise<QueryAllBalancesResponse>;
    static SpendableBalances(req: QuerySpendableBalancesRequest, initReq?: fm.InitReq): Promise<QuerySpendableBalancesResponse>;
    static TotalSupply(req: QueryTotalSupplyRequest, initReq?: fm.InitReq): Promise<QueryTotalSupplyResponse>;
    static SupplyOf(req: QuerySupplyOfRequest, initReq?: fm.InitReq): Promise<QuerySupplyOfResponse>;
    static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse>;
    static DenomMetadata(req: QueryDenomMetadataRequest, initReq?: fm.InitReq): Promise<QueryDenomMetadataResponse>;
    static DenomsMetadata(req: QueryDenomsMetadataRequest, initReq?: fm.InitReq): Promise<QueryDenomsMetadataResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map