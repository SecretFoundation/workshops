import * as fm from "../../../fetch.pb";
import * as CosmosMintV1beta1Mint from "./mint.pb";
export declare type QueryParamsRequest = {};
export declare type QueryParamsResponse = {
    params?: CosmosMintV1beta1Mint.Params;
};
export declare type QueryInflationRequest = {};
export declare type QueryInflationResponse = {
    inflation?: Uint8Array;
};
export declare type QueryAnnualProvisionsRequest = {};
export declare type QueryAnnualProvisionsResponse = {
    annual_provisions?: Uint8Array;
};
export declare class Query {
    static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse>;
    static Inflation(req: QueryInflationRequest, initReq?: fm.InitReq): Promise<QueryInflationResponse>;
    static AnnualProvisions(req: QueryAnnualProvisionsRequest, initReq?: fm.InitReq): Promise<QueryAnnualProvisionsResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map