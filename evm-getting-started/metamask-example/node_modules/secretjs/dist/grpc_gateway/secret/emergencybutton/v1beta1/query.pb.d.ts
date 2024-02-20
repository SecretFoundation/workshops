import * as fm from "../../../fetch.pb";
import * as SecretEmergencybuttonV1beta1Params from "./params.pb";
export declare type ParamsRequest = {};
export declare type ParamsResponse = {
    params?: SecretEmergencybuttonV1beta1Params.Params;
};
export declare class Query {
    static Params(req: ParamsRequest, initReq?: fm.InitReq): Promise<ParamsResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map