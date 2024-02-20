import { MsgParams } from ".";
import { AminoMsg, Msg, ProtoMsg } from "./types";
export interface MsgVerifyInvariantParams extends MsgParams {
    sender: string;
    invariant_module_name: string;
    invariant_route: string;
}
/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export declare class MsgVerifyInvariant implements Msg {
    params: MsgVerifyInvariantParams;
    constructor(params: MsgVerifyInvariantParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
//# sourceMappingURL=crisis.d.ts.map