import * as fm from "../../../../fetch.pb";
import * as PacketforwardV1Genesis from "./genesis.pb";
export declare type QueryParamsRequest = {};
export declare type QueryParamsResponse = {
    params?: PacketforwardV1Genesis.Params;
};
export declare class Query {
    static Params(req: QueryParamsRequest, initReq?: fm.InitReq): Promise<QueryParamsResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map