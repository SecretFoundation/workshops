import { QueryAllEvidenceRequest, QueryAllEvidenceResponse, QueryEvidenceRequest, QueryEvidenceResponse } from "../grpc_gateway/cosmos/evidence/v1beta1/query.pb";
export declare class EvidenceQuerier {
    private url;
    constructor(url: string);
    evidence(req: QueryEvidenceRequest, headers?: HeadersInit): Promise<QueryEvidenceResponse>;
    allEvidence(req: QueryAllEvidenceRequest, headers?: HeadersInit): Promise<QueryAllEvidenceResponse>;
}
//# sourceMappingURL=evidence.d.ts.map