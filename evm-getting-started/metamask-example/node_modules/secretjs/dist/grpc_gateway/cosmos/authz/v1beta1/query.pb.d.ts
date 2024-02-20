import * as fm from "../../../fetch.pb";
import * as CosmosBaseQueryV1beta1Pagination from "../../base/query/v1beta1/pagination.pb";
import * as CosmosAuthzV1beta1Authz from "./authz.pb";
export declare type QueryGrantsRequest = {
    granter?: string;
    grantee?: string;
    msg_type_url?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryGrantsResponse = {
    grants?: CosmosAuthzV1beta1Authz.Grant[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryGranterGrantsRequest = {
    granter?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryGranterGrantsResponse = {
    grants?: CosmosAuthzV1beta1Authz.GrantAuthorization[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryGranteeGrantsRequest = {
    grantee?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryGranteeGrantsResponse = {
    grants?: CosmosAuthzV1beta1Authz.GrantAuthorization[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare class Query {
    static Grants(req: QueryGrantsRequest, initReq?: fm.InitReq): Promise<QueryGrantsResponse>;
    static GranterGrants(req: QueryGranterGrantsRequest, initReq?: fm.InitReq): Promise<QueryGranterGrantsResponse>;
    static GranteeGrants(req: QueryGranteeGrantsRequest, initReq?: fm.InitReq): Promise<QueryGranteeGrantsResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map