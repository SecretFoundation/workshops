import { MsgParams } from ".";
import { AminoMsg, Msg, ProtoMsg } from "./types";
export interface MsgUnjailParams extends MsgParams {
    validator_addr: string;
}
/** MsgUnjail defines a message to release a validator from jail. */
export declare class MsgUnjail implements Msg {
    params: MsgUnjailParams;
    constructor(params: MsgUnjailParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
//# sourceMappingURL=slashing.d.ts.map