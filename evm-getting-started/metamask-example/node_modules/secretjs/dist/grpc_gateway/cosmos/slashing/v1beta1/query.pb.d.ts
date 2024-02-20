import * as fm from "../../../fetch.pb";
import * as CosmosBaseQueryV1beta1Pagination from "../../base/query/v1beta1/pagination.pb";
import * as CosmosSlashingV1beta1Slashing from "./slashing.pb";
export declare type QueryParamsRequest = {};
export declare type QueryParamsResponse = {
    params?: CosmosSlashingV1beta1Slashing.Params;
};
export declare type QuerySigningInfoRequest = {
    cons_address?: string;
};
export declare type QuerySigningInfoResponse = {
    val_signing_info?: CosmosSlashingV1beta1Slashing.ValidatorSigningInfo;
};
export declare type QuerySigningInfosRequest = {
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QuerySigningInfosResponse = {
    info?: CosmosSlashingV1beta1Slashing.ValidatorSigningInfo[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare class Query {
    static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse>;
    static SigningInfo(req: QuerySigningInfoRequest, initReq?: fm.InitReq): Promise<QuerySigningInfoResponse>;
    static SigningInfos(req: QuerySigningInfosRequest, initReq?: fm.InitReq): Promise<QuerySigningInfosResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map