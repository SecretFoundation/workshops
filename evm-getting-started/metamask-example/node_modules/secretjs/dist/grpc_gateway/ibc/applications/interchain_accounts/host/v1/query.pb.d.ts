import * as fm from "../../../../../fetch.pb";
import * as IbcApplicationsInterchain_accountsHostV1Host from "./host.pb";
export declare type QueryParamsRequest = {};
export declare type QueryParamsResponse = {
    params?: IbcApplicationsInterchain_accountsHostV1Host.Params;
};
export declare class Query {
    static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map