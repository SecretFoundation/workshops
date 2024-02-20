import * as fm from "../../../fetch.pb";
export declare type MsgUnjail = {
    validator_addr?: string;
};
export declare type MsgUnjailResponse = {};
export declare class Msg {
    static Unjail(req: MsgUnjail, initReq?: fm.InitReq): Promise<MsgUnjailResponse>;
}
//# sourceMappingURL=tx.pb.d.ts.map