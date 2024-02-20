import { MsgParams } from ".";
import { Any } from "../protobuf/google/protobuf/any";
import { AminoMsg, Msg, ProtoMsg } from "./types";
export interface MsgSubmitEvidenceParams extends MsgParams {
    submitter: string;
    evidence: Any;
}
/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 */
export declare class MsgSubmitEvidence implements Msg {
    params: MsgSubmitEvidenceParams;
    constructor(params: MsgSubmitEvidenceParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
//# sourceMappingURL=evidence.d.ts.map