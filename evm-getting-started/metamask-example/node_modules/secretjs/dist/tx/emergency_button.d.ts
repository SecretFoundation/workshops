import { MsgParams } from ".";
import { AminoMsg, Msg, ProtoMsg } from "./types";
export interface MsgToggleIbcSwitchParams extends MsgParams {
    sender: string;
}
/** MsgSend represents a message to send coins from one account to another. */
export declare class MsgToggleIbcSwitch implements Msg {
    private params;
    constructor(params: MsgToggleIbcSwitchParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
//# sourceMappingURL=emergency_button.d.ts.map