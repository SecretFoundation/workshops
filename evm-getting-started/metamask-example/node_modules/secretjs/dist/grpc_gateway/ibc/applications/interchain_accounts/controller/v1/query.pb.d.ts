import * as fm from "../../../../../fetch.pb";
import * as IbcApplicationsInterchain_accountsControllerV1Controller from "./controller.pb";
export declare type QueryInterchainAccountRequest = {
    owner?: string;
    connection_id?: string;
};
export declare type QueryInterchainAccountResponse = {
    address?: string;
};
export declare type QueryParamsRequest = {};
export declare type QueryParamsResponse = {
    params?: IbcApplicationsInterchain_accountsControllerV1Controller.Params;
};
export declare class Query {
    static InterchainAccount(req: QueryInterchainAccountRequest, initReq?: fm.InitReq): Promise<QueryInterchainAccountResponse>;
    static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map