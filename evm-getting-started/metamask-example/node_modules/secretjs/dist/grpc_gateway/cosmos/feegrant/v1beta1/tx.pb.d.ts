import * as fm from "../../../fetch.pb";
import * as GoogleProtobufAny from "../../../google/protobuf/any.pb";
export declare type MsgGrantAllowance = {
    granter?: string;
    grantee?: string;
    allowance?: GoogleProtobufAny.Any;
};
export declare type MsgGrantAllowanceResponse = {};
export declare type MsgRevokeAllowance = {
    granter?: string;
    grantee?: string;
};
export declare type MsgRevokeAllowanceResponse = {};
export declare class Msg {
    static GrantAllowance(req: MsgGrantAllowance, initReq?: fm.InitReq): Promise<MsgGrantAllowanceResponse>;
    static RevokeAllowance(req: MsgRevokeAllowance, initReq?: fm.InitReq): Promise<MsgRevokeAllowanceResponse>;
}
//# sourceMappingURL=tx.pb.d.ts.map