import { AminoMsg, Msg, ProtoMsg } from "./types";
/** MsgConnectionOpenInit defines the msg sent by an account on Chain A to initialize a connection with Chain B. */
export declare class MsgConnectionOpenInit implements Msg {
    private msg;
    constructor(msg: import("../protobuf/ibc/core/connection/v1/tx").MsgConnectionOpenInit);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
/** MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a connection on Chain B. */
export declare class MsgConnectionOpenTry implements Msg {
    private msg;
    constructor(msg: import("../protobuf/ibc/core/connection/v1/tx").MsgConnectionOpenTry);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
/** MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to acknowledge the change of connection state to TRYOPEN on Chain B. */
export declare class MsgConnectionOpenAck implements Msg {
    private msg;
    constructor(msg: import("../protobuf/ibc/core/connection/v1/tx").MsgConnectionOpenAck);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
/** MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to acknowledge the change of connection state to OPEN on Chain A. */
export declare class MsgConnectionOpenConfirm implements Msg {
    private msg;
    constructor(msg: import("../protobuf/ibc/core/connection/v1/tx").MsgConnectionOpenConfirm);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
//# sourceMappingURL=ibc_connection.d.ts.map