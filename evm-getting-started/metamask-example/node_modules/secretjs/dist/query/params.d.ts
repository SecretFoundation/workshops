import { QueryParamsRequest, QueryParamsResponse } from "../grpc_gateway/cosmos/params/v1beta1/query.pb";
export declare class ParamsQuerier {
    private url;
    constructor(url: string);
    params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
}
//# sourceMappingURL=params.d.ts.map