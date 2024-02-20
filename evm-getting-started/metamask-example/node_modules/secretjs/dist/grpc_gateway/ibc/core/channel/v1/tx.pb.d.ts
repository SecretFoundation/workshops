import * as fm from "../../../../fetch.pb";
import * as IbcCoreClientV1Client from "../../client/v1/client.pb";
import * as IbcCoreChannelV1Channel from "./channel.pb";
export declare enum ResponseResultType {
    RESPONSE_RESULT_TYPE_UNSPECIFIED = "RESPONSE_RESULT_TYPE_UNSPECIFIED",
    RESPONSE_RESULT_TYPE_NOOP = "RESPONSE_RESULT_TYPE_NOOP",
    RESPONSE_RESULT_TYPE_SUCCESS = "RESPONSE_RESULT_TYPE_SUCCESS"
}
export declare type MsgChannelOpenInit = {
    port_id?: string;
    channel?: IbcCoreChannelV1Channel.Channel;
    signer?: string;
};
export declare type MsgChannelOpenInitResponse = {
    channel_id?: string;
    version?: string;
};
export declare type MsgChannelOpenTry = {
    port_id?: string;
    previous_channel_id?: string;
    channel?: IbcCoreChannelV1Channel.Channel;
    counterparty_version?: string;
    proof_init?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
    signer?: string;
};
export declare type MsgChannelOpenTryResponse = {
    version?: string;
};
export declare type MsgChannelOpenAck = {
    port_id?: string;
    channel_id?: string;
    counterparty_channel_id?: string;
    counterparty_version?: string;
    proof_try?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
    signer?: string;
};
export declare type MsgChannelOpenAckResponse = {};
export declare type MsgChannelOpenConfirm = {
    port_id?: string;
    channel_id?: string;
    proof_ack?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
    signer?: string;
};
export declare type MsgChannelOpenConfirmResponse = {};
export declare type MsgChannelCloseInit = {
    port_id?: string;
    channel_id?: string;
    signer?: string;
};
export declare type MsgChannelCloseInitResponse = {};
export declare type MsgChannelCloseConfirm = {
    port_id?: string;
    channel_id?: string;
    proof_init?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
    signer?: string;
};
export declare type MsgChannelCloseConfirmResponse = {};
export declare type MsgRecvPacket = {
    packet?: IbcCoreChannelV1Channel.Packet;
    proof_commitment?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
    signer?: string;
};
export declare type MsgRecvPacketResponse = {
    result?: ResponseResultType;
};
export declare type MsgTimeout = {
    packet?: IbcCoreChannelV1Channel.Packet;
    proof_unreceived?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
    next_sequence_recv?: string;
    signer?: string;
};
export declare type MsgTimeoutResponse = {
    result?: ResponseResultType;
};
export declare type MsgTimeoutOnClose = {
    packet?: IbcCoreChannelV1Channel.Packet;
    proof_unreceived?: Uint8Array;
    proof_close?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
    next_sequence_recv?: string;
    signer?: string;
};
export declare type MsgTimeoutOnCloseResponse = {
    result?: ResponseResultType;
};
export declare type MsgAcknowledgement = {
    packet?: IbcCoreChannelV1Channel.Packet;
    acknowledgement?: Uint8Array;
    proof_acked?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
    signer?: string;
};
export declare type MsgAcknowledgementResponse = {
    result?: ResponseResultType;
};
export declare class Msg {
    static ChannelOpenInit(req: MsgChannelOpenInit, initReq?: fm.InitReq): Promise<MsgChannelOpenInitResponse>;
    static ChannelOpenTry(req: MsgChannelOpenTry, initReq?: fm.InitReq): Promise<MsgChannelOpenTryResponse>;
    static ChannelOpenAck(req: MsgChannelOpenAck, initReq?: fm.InitReq): Promise<MsgChannelOpenAckResponse>;
    static ChannelOpenConfirm(req: MsgChannelOpenConfirm, initReq?: fm.InitReq): Promise<MsgChannelOpenConfirmResponse>;
    static ChannelCloseInit(req: MsgChannelCloseInit, initReq?: fm.InitReq): Promise<MsgChannelCloseInitResponse>;
    static ChannelCloseConfirm(req: MsgChannelCloseConfirm, initReq?: fm.InitReq): Promise<MsgChannelCloseConfirmResponse>;
    static RecvPacket(req: MsgRecvPacket, initReq?: fm.InitReq): Promise<MsgRecvPacketResponse>;
    static Timeout(req: MsgTimeout, initReq?: fm.InitReq): Promise<MsgTimeoutResponse>;
    static TimeoutOnClose(req: MsgTimeoutOnClose, initReq?: fm.InitReq): Promise<MsgTimeoutOnCloseResponse>;
    static Acknowledgement(req: MsgAcknowledgement, initReq?: fm.InitReq): Promise<MsgAcknowledgementResponse>;
}
//# sourceMappingURL=tx.pb.d.ts.map