import * as fm from "../../../fetch.pb";
import * as GoogleProtobufAny from "../../../google/protobuf/any.pb";
import * as CosmosBaseQueryV1beta1Pagination from "../../base/query/v1beta1/pagination.pb";
export declare type QueryEvidenceRequest = {
    evidence_hash?: Uint8Array;
};
export declare type QueryEvidenceResponse = {
    evidence?: GoogleProtobufAny.Any;
};
export declare type QueryAllEvidenceRequest = {
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryAllEvidenceResponse = {
    evidence?: GoogleProtobufAny.Any[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare class Query {
    static Evidence(req: QueryEvidenceRequest, initReq?: fm.InitReq): Promise<QueryEvidenceResponse>;
    static AllEvidence(req: QueryAllEvidenceRequest, initReq?: fm.InitReq): Promise<QueryAllEvidenceResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map