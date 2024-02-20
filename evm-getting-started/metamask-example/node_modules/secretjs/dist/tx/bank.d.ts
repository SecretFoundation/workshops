import { MsgParams } from ".";
import { AminoMsg, Coin, Input, Msg, Output, ProtoMsg } from "./types";
export interface MsgSendParams extends MsgParams {
    from_address: string;
    to_address: string;
    amount: Coin[];
}
/** MsgSend represents a message to send coins from one account to another. */
export declare class MsgSend implements Msg {
    from_address: string;
    to_address: string;
    amount: Coin[];
    constructor({ from_address, to_address, amount }: MsgSendParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
export interface MsgMultiSendParams extends MsgParams {
    inputs: Input[];
    outputs: Output[];
}
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
export declare class MsgMultiSend implements Msg {
    inputs: Input[];
    outputs: Output[];
    constructor({ inputs, outputs }: MsgMultiSendParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
//# sourceMappingURL=bank.d.ts.map