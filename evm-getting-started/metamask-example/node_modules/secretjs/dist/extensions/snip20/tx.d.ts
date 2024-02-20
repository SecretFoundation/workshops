import { MsgExecuteContract } from "../../tx";
import { Snip20DecreaseAllowanceOptions, Snip20IncreaseAllowanceOptions, Snip20SendOptions, Snip20SetViewingKeyOptions, Snip20TransferOptions } from "./types";
export declare class MsgSnip20Send extends MsgExecuteContract<Snip20SendOptions> {
}
export declare class MsgSnip20Transfer extends MsgExecuteContract<Snip20TransferOptions> {
}
export declare class MsgSnip20IncreaseAllowance extends MsgExecuteContract<Snip20IncreaseAllowanceOptions> {
}
export declare class MsgSnip20DecreaseAllowance extends MsgExecuteContract<Snip20DecreaseAllowanceOptions> {
}
export declare class MsgSnip20SetViewingKey extends MsgExecuteContract<Snip20SetViewingKeyOptions> {
}
//# sourceMappingURL=tx.d.ts.map