import * as fm from "../../../fetch.pb";
import * as GoogleProtobufAny from "../../../google/protobuf/any.pb";
export declare type MsgSubmitEvidence = {
    submitter?: string;
    evidence?: GoogleProtobufAny.Any;
};
export declare type MsgSubmitEvidenceResponse = {
    hash?: Uint8Array;
};
export declare class Msg {
    static SubmitEvidence(req: MsgSubmitEvidence, initReq?: fm.InitReq): Promise<MsgSubmitEvidenceResponse>;
}
//# sourceMappingURL=tx.pb.d.ts.map