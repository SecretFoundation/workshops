import * as fm from "../../../fetch.pb";
import * as GoogleProtobufAny from "../../../google/protobuf/any.pb";
import * as CosmosBaseQueryV1beta1Pagination from "../../base/query/v1beta1/pagination.pb";
import * as CosmosAuthV1beta1Auth from "./auth.pb";
export declare type QueryAccountsRequest = {
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryAccountsResponse = {
    accounts?: GoogleProtobufAny.Any[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryAccountRequest = {
    address?: string;
};
export declare type QueryAccountResponse = {
    account?: GoogleProtobufAny.Any;
};
export declare type QueryParamsRequest = {};
export declare type QueryParamsResponse = {
    params?: CosmosAuthV1beta1Auth.Params;
};
export declare type QueryModuleAccountByNameRequest = {
    name?: string;
};
export declare type QueryModuleAccountByNameResponse = {
    account?: GoogleProtobufAny.Any;
};
export declare class Query {
    static Accounts(req: QueryAccountsRequest, initReq?: fm.InitReq): Promise<QueryAccountsResponse>;
    static Account(req: QueryAccountRequest, initReq?: fm.InitReq): Promise<QueryAccountResponse>;
    static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse>;
    static ModuleAccountByName(req: QueryModuleAccountByNameRequest, initReq?: fm.InitReq): Promise<QueryModuleAccountByNameResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map