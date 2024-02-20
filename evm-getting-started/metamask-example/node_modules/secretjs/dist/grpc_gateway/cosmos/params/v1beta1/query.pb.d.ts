import * as fm from "../../../fetch.pb";
import * as CosmosParamsV1beta1Params from "./params.pb";
export declare type QueryParamsRequest = {
    subspace?: string;
    key?: string;
};
export declare type QueryParamsResponse = {
    param?: CosmosParamsV1beta1Params.ParamChange;
};
export declare class Query {
    static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map