import { ParamsRequest, ParamsResponse } from "../grpc_gateway/secret/emergencybutton/v1beta1/query.pb";
export declare class EmergencyButtonQuerier {
    private url;
    constructor(url: string);
    params(req: ParamsRequest, headers?: HeadersInit): Promise<ParamsResponse>;
}
//# sourceMappingURL=emergency_button.d.ts.map