import { AminoMsg, Msg, ProtoMsg } from "./types";
/** MsgUpdateClient defines an sdk.Msg to update a IBC client state using the given header. */
export declare class MsgUpdateClient implements Msg {
    private msg;
    constructor(msg: import("../protobuf/ibc/core/client/v1/tx").MsgUpdateClient);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
/** MsgUpdateClient defines an sdk.Msg to update a IBC client state using the given header. */
export declare class MsgUpgradeClient implements Msg {
    private msg;
    constructor(msg: import("../protobuf/ibc/core/client/v1/tx").MsgUpgradeClient);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
/** MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for light client misbehaviour. */
export declare class MsgSubmitMisbehaviour implements Msg {
    private msg;
    constructor(msg: import("../protobuf/ibc/core/client/v1/tx").MsgSubmitMisbehaviour);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
/** MsgCreateClient defines a message to create an IBC client */
export declare class MsgCreateClient implements Msg {
    private msg;
    constructor(msg: import("../protobuf/ibc/core/client/v1/tx").MsgCreateClient);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
//# sourceMappingURL=ibc_client.d.ts.map