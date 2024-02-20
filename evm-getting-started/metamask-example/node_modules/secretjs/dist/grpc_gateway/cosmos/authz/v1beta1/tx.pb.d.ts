import * as fm from "../../../fetch.pb";
import * as GoogleProtobufAny from "../../../google/protobuf/any.pb";
import * as CosmosAuthzV1beta1Authz from "./authz.pb";
export declare type MsgGrant = {
    granter?: string;
    grantee?: string;
    grant?: CosmosAuthzV1beta1Authz.Grant;
};
export declare type MsgExecResponse = {
    results?: Uint8Array[];
};
export declare type MsgExec = {
    grantee?: string;
    msgs?: GoogleProtobufAny.Any[];
};
export declare type MsgGrantResponse = {};
export declare type MsgRevoke = {
    granter?: string;
    grantee?: string;
    msg_type_url?: string;
};
export declare type MsgRevokeResponse = {};
export declare class Msg {
    static Grant(req: MsgGrant, initReq?: fm.InitReq): Promise<MsgGrantResponse>;
    static Exec(req: MsgExec, initReq?: fm.InitReq): Promise<MsgExecResponse>;
    static Revoke(req: MsgRevoke, initReq?: fm.InitReq): Promise<MsgRevokeResponse>;
}
//# sourceMappingURL=tx.pb.d.ts.map