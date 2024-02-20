import * as fm from "../../../../fetch.pb";
import * as GoogleProtobufAny from "../../../../google/protobuf/any.pb";
import * as IbcCoreClientV1Client from "../../client/v1/client.pb";
import * as IbcCoreConnectionV1Connection from "./connection.pb";
export declare type MsgConnectionOpenInit = {
    client_id?: string;
    counterparty?: IbcCoreConnectionV1Connection.Counterparty;
    version?: IbcCoreConnectionV1Connection.Version;
    delay_period?: string;
    signer?: string;
};
export declare type MsgConnectionOpenInitResponse = {};
export declare type MsgConnectionOpenTry = {
    client_id?: string;
    previous_connection_id?: string;
    client_state?: GoogleProtobufAny.Any;
    counterparty?: IbcCoreConnectionV1Connection.Counterparty;
    delay_period?: string;
    counterparty_versions?: IbcCoreConnectionV1Connection.Version[];
    proof_height?: IbcCoreClientV1Client.Height;
    proof_init?: Uint8Array;
    proof_client?: Uint8Array;
    proof_consensus?: Uint8Array;
    consensus_height?: IbcCoreClientV1Client.Height;
    signer?: string;
};
export declare type MsgConnectionOpenTryResponse = {};
export declare type MsgConnectionOpenAck = {
    connection_id?: string;
    counterparty_connection_id?: string;
    version?: IbcCoreConnectionV1Connection.Version;
    client_state?: GoogleProtobufAny.Any;
    proof_height?: IbcCoreClientV1Client.Height;
    proof_try?: Uint8Array;
    proof_client?: Uint8Array;
    proof_consensus?: Uint8Array;
    consensus_height?: IbcCoreClientV1Client.Height;
    signer?: string;
};
export declare type MsgConnectionOpenAckResponse = {};
export declare type MsgConnectionOpenConfirm = {
    connection_id?: string;
    proof_ack?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
    signer?: string;
};
export declare type MsgConnectionOpenConfirmResponse = {};
export declare class Msg {
    static ConnectionOpenInit(req: MsgConnectionOpenInit, initReq?: fm.InitReq): Promise<MsgConnectionOpenInitResponse>;
    static ConnectionOpenTry(req: MsgConnectionOpenTry, initReq?: fm.InitReq): Promise<MsgConnectionOpenTryResponse>;
    static ConnectionOpenAck(req: MsgConnectionOpenAck, initReq?: fm.InitReq): Promise<MsgConnectionOpenAckResponse>;
    static ConnectionOpenConfirm(req: MsgConnectionOpenConfirm, initReq?: fm.InitReq): Promise<MsgConnectionOpenConfirmResponse>;
}
//# sourceMappingURL=tx.pb.d.ts.map