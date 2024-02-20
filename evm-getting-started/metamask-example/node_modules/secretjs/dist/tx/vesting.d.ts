import { MsgParams } from ".";
import { AminoMsg, Coin, Msg, ProtoMsg } from "./types";
export interface MsgCreateVestingAccountParams extends MsgParams {
    from_address: string;
    to_address: string;
    amount: Coin[];
    /** end of vesting as unix time (in seconds). */
    end_time: string;
    delayed: boolean;
}
/** MsgCreateVestingAccount defines a message that enables creating a vesting account. */
export declare class MsgCreateVestingAccount implements Msg {
    params: MsgCreateVestingAccountParams;
    constructor(params: MsgCreateVestingAccountParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
//# sourceMappingURL=vesting.d.ts.map