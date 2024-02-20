import * as fm from "../../../fetch.pb";
export declare type MsgToggleIbcSwitch = {
    sender?: string;
};
export declare type MsgToggleIbcSwitchResponse = {};
export declare class Msg {
    static ToggleIbcSwitch(req: MsgToggleIbcSwitch, initReq?: fm.InitReq): Promise<MsgToggleIbcSwitchResponse>;
}
//# sourceMappingURL=tx.pb.d.ts.map