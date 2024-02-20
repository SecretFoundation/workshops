import { AminoMsg, Msg, ProtoMsg } from "./types";
/** MsgRecvPacket receives incoming IBC packet */
export declare class MsgRecvPacket implements Msg {
    private msg;
    constructor(msg: import("../protobuf/ibc/core/channel/v1/tx").MsgRecvPacket);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
/** MsgTimeout receives timed-out packet */
export declare class MsgTimeout implements Msg {
    private msg;
    constructor(msg: import("../protobuf/ibc/core/channel/v1/tx").MsgTimeout);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
export declare class MsgTimeoutOnClose implements Msg {
    private msg;
    constructor(msg: import("../protobuf/ibc/core/channel/v1/tx").MsgTimeoutOnClose);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
export declare class MsgChannelOpenInit implements Msg {
    private msg;
    constructor(msg: import("../protobuf/ibc/core/channel/v1/tx").MsgChannelOpenInit);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement */
export declare class MsgAcknowledgement implements Msg {
    private msg;
    constructor(msg: import("../protobuf/ibc/core/channel/v1/tx").MsgAcknowledgement);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */
export declare class MsgChannelOpenTry implements Msg {
    private msg;
    constructor(msg: import("../protobuf/ibc/core/channel/v1/tx").MsgChannelOpenTry);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
export declare class MsgChannelOpenAck implements Msg {
    private msg;
    constructor(msg: import("../protobuf/ibc/core/channel/v1/tx").MsgChannelOpenAck);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
export declare class MsgChannelOpenConfirm implements Msg {
    private msg;
    constructor(msg: import("../protobuf/ibc/core/channel/v1/tx").MsgChannelOpenConfirm);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
export declare class MsgChannelCloseInit implements Msg {
    private msg;
    constructor(msg: import("../protobuf/ibc/core/channel/v1/tx").MsgChannelCloseInit);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
/** MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B to acknowledge the change of channel state to CLOSED on Chain A. */
export declare class MsgChannelCloseConfirm implements Msg {
    private msg;
    constructor(msg: import("../protobuf/ibc/core/channel/v1/tx").MsgChannelCloseConfirm);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
//# sourceMappingURL=ibc_channel.d.ts.map