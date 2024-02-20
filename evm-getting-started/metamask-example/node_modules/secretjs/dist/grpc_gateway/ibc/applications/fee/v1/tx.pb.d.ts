import * as fm from "../../../../fetch.pb";
import * as IbcCoreChannelV1Channel from "../../../core/channel/v1/channel.pb";
import * as IbcApplicationsFeeV1Fee from "./fee.pb";
export declare type MsgRegisterPayee = {
    port_id?: string;
    channel_id?: string;
    relayer?: string;
    payee?: string;
};
export declare type MsgRegisterPayeeResponse = {};
export declare type MsgRegisterCounterpartyPayee = {
    port_id?: string;
    channel_id?: string;
    relayer?: string;
    counterparty_payee?: string;
};
export declare type MsgRegisterCounterpartyPayeeResponse = {};
export declare type MsgPayPacketFee = {
    fee?: IbcApplicationsFeeV1Fee.Fee;
    source_port_id?: string;
    source_channel_id?: string;
    signer?: string;
    relayers?: string[];
};
export declare type MsgPayPacketFeeResponse = {};
export declare type MsgPayPacketFeeAsync = {
    packet_id?: IbcCoreChannelV1Channel.PacketId;
    packet_fee?: IbcApplicationsFeeV1Fee.PacketFee;
};
export declare type MsgPayPacketFeeAsyncResponse = {};
export declare class Msg {
    static RegisterPayee(req: MsgRegisterPayee, initReq?: fm.InitReq): Promise<MsgRegisterPayeeResponse>;
    static RegisterCounterpartyPayee(req: MsgRegisterCounterpartyPayee, initReq?: fm.InitReq): Promise<MsgRegisterCounterpartyPayeeResponse>;
    static PayPacketFee(req: MsgPayPacketFee, initReq?: fm.InitReq): Promise<MsgPayPacketFeeResponse>;
    static PayPacketFeeAsync(req: MsgPayPacketFeeAsync, initReq?: fm.InitReq): Promise<MsgPayPacketFeeAsyncResponse>;
}
//# sourceMappingURL=tx.pb.d.ts.map