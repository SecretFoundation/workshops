import { MsgExecuteContract } from "../../../tx";
export interface SetViewingKeyOptions {
    set_viewing_key: {
        key: string;
        padding?: string;
    };
}
export interface CreateViewingKeyOptions {
    create_viewing_key: {
        entropy: string;
        padding?: string;
    };
}
export declare class MsgSetViewingKey extends MsgExecuteContract<SetViewingKeyOptions> {
}
export declare class MsgCreateViewingKey extends MsgExecuteContract<CreateViewingKeyOptions> {
}
//# sourceMappingURL=msgs.d.ts.map