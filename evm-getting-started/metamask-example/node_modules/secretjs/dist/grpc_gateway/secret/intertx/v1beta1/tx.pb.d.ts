import * as fm from "../../../fetch.pb";
import * as GoogleProtobufAny from "../../../google/protobuf/any.pb";
export declare type MsgRegisterAccount = {
    owner?: string;
    connection_id?: string;
    version?: string;
};
export declare type MsgRegisterAccountResponse = {};
export declare type MsgSubmitTx = {
    owner?: Uint8Array;
    connection_id?: string;
    msg?: GoogleProtobufAny.Any;
};
export declare type MsgSubmitTxResponse = {};
export declare class Msg {
    static RegisterAccount(req: MsgRegisterAccount, initReq?: fm.InitReq): Promise<MsgRegisterAccountResponse>;
    static SubmitTx(req: MsgSubmitTx, initReq?: fm.InitReq): Promise<MsgSubmitTxResponse>;
}
//# sourceMappingURL=tx.pb.d.ts.map