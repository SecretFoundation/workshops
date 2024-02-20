import * as fm from "../../../../fetch.pb";
import * as GoogleProtobufAny from "../../../../google/protobuf/any.pb";
export declare type MsgCreateClient = {
    client_state?: GoogleProtobufAny.Any;
    consensus_state?: GoogleProtobufAny.Any;
    signer?: string;
};
export declare type MsgCreateClientResponse = {};
export declare type MsgUpdateClient = {
    client_id?: string;
    header?: GoogleProtobufAny.Any;
    signer?: string;
};
export declare type MsgUpdateClientResponse = {};
export declare type MsgUpgradeClient = {
    client_id?: string;
    client_state?: GoogleProtobufAny.Any;
    consensus_state?: GoogleProtobufAny.Any;
    proof_upgrade_client?: Uint8Array;
    proof_upgrade_consensus_state?: Uint8Array;
    signer?: string;
};
export declare type MsgUpgradeClientResponse = {};
export declare type MsgSubmitMisbehaviour = {
    client_id?: string;
    misbehaviour?: GoogleProtobufAny.Any;
    signer?: string;
};
export declare type MsgSubmitMisbehaviourResponse = {};
export declare class Msg {
    static CreateClient(req: MsgCreateClient, initReq?: fm.InitReq): Promise<MsgCreateClientResponse>;
    static UpdateClient(req: MsgUpdateClient, initReq?: fm.InitReq): Promise<MsgUpdateClientResponse>;
    static UpgradeClient(req: MsgUpgradeClient, initReq?: fm.InitReq): Promise<MsgUpgradeClientResponse>;
    static SubmitMisbehaviour(req: MsgSubmitMisbehaviour, initReq?: fm.InitReq): Promise<MsgSubmitMisbehaviourResponse>;
}
//# sourceMappingURL=tx.pb.d.ts.map