import { MsgParams } from ".";
import { BasicAllowance, PeriodicAllowance } from "../protobuf/cosmos/feegrant/v1beta1/feegrant";
import { AminoMsg, Msg, ProtoMsg } from "./types";
export interface MsgGrantAllowanceParams extends MsgParams {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic and filtered fee allowance. */
    allowance: BasicAllowance | PeriodicAllowance | AllowedMsgAllowance;
}
export interface AllowedMsgAllowance {
    /** allowance can be any of basic and filtered fee allowance. */
    allowance: BasicAllowance | PeriodicAllowance;
    /** allowed_messages are the messages for which the grantee has the access. */
    allowed_messages: string[];
}
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export declare class MsgGrantAllowance implements Msg {
    params: MsgGrantAllowanceParams;
    constructor(params: MsgGrantAllowanceParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
export interface MsgRevokeAllowanceParams extends MsgParams {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export declare class MsgRevokeAllowance implements Msg {
    params: MsgRevokeAllowanceParams;
    constructor(params: MsgRevokeAllowanceParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
//# sourceMappingURL=feegrant.d.ts.map