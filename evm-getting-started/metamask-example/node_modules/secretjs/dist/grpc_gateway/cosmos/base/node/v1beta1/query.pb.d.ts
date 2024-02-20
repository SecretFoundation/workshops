import * as fm from "../../../../fetch.pb";
export declare type ConfigRequest = {};
export declare type ConfigResponse = {
    minimum_gas_price?: string;
};
export declare class Service {
    static Config(req: ConfigRequest, initReq?: fm.InitReq): Promise<ConfigResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map