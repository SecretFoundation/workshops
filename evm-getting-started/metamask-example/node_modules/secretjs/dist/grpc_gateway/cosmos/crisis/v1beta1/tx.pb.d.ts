import * as fm from "../../../fetch.pb";
export declare type MsgVerifyInvariant = {
    sender?: string;
    invariant_module_name?: string;
    invariant_route?: string;
};
export declare type MsgVerifyInvariantResponse = {};
export declare class Msg {
    static VerifyInvariant(req: MsgVerifyInvariant, initReq?: fm.InitReq): Promise<MsgVerifyInvariantResponse>;
}
//# sourceMappingURL=tx.pb.d.ts.map