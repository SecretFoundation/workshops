import * as fm from "../../../fetch.pb";
import * as CosmosBaseQueryV1beta1Pagination from "../../base/query/v1beta1/pagination.pb";
import * as CosmosFeegrantV1beta1Feegrant from "./feegrant.pb";
export declare type QueryAllowanceRequest = {
    granter?: string;
    grantee?: string;
};
export declare type QueryAllowanceResponse = {
    allowance?: CosmosFeegrantV1beta1Feegrant.Grant;
};
export declare type QueryAllowancesRequest = {
    grantee?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryAllowancesResponse = {
    allowances?: CosmosFeegrantV1beta1Feegrant.Grant[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryAllowancesByGranterRequest = {
    granter?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryAllowancesByGranterResponse = {
    allowances?: CosmosFeegrantV1beta1Feegrant.Grant[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare class Query {
    static Allowance(req: QueryAllowanceRequest, initReq?: fm.InitReq): Promise<QueryAllowanceResponse>;
    static Allowances(req: QueryAllowancesRequest, initReq?: fm.InitReq): Promise<QueryAllowancesResponse>;
    static AllowancesByGranter(req: QueryAllowancesByGranterRequest, initReq?: fm.InitReq): Promise<QueryAllowancesByGranterResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map