import { ConfigRequest, ConfigResponse } from "../grpc_gateway/cosmos/base/node/v1beta1/query.pb";
export declare class NodeQuerier {
    private url;
    constructor(url: string);
    config(req: ConfigRequest, headers?: HeadersInit): Promise<ConfigResponse>;
}
//# sourceMappingURL=node.d.ts.map