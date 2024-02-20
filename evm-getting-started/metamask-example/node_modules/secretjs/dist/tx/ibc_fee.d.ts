import { MsgParams } from ".";
import { Fee, PacketFee } from "../protobuf/ibc/applications/fee/v1/fee";
import { PacketId } from "../protobuf/ibc/core/channel/v1/channel";
import { AminoMsg, Msg, ProtoMsg } from "./types";
export interface MsgRegisterPayeeParams extends MsgParams {
    /** unique port identifier */
    port_id: string;
    /** unique channel identifier */
    channel_id: string;
    /** the relayer address */
    relayer: string;
    /** the payee address */
    payee: string;
}
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
export declare class MsgRegisterPayee implements Msg {
    params: MsgRegisterPayeeParams;
    constructor(params: MsgRegisterPayeeParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
export interface MsgRegisterCounterpartyPayeeParams extends MsgParams {
    /** unique port identifier */
    port_id: string;
    /** unique channel identifier */
    channel_id: string;
    /** the relayer address */
    relayer: string;
    /** the counterparty payee address */
    counterparty_payee: string;
}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
export declare class MsgRegisterCounterpartyPayee implements Msg {
    params: MsgRegisterCounterpartyPayeeParams;
    constructor(params: MsgRegisterCounterpartyPayeeParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
export interface MsgPayPacketFeeParams extends MsgParams {
    /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
    fee: Fee;
    /** the source port unique identifier */
    source_port_id: string;
    /** the source channel unique identifer */
    source_channel_id: string;
    /** account address to refund fee if necessary */
    signer: string;
    /** optional list of relayers permitted to the receive packet fees */
    relayers?: string[];
}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export declare class MsgPayPacketFee implements Msg {
    params: MsgPayPacketFeeParams;
    constructor(params: MsgPayPacketFeeParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
export interface MsgPayPacketFeeAsyncParams extends MsgParams {
    /** unique packet identifier comprised of the channel ID, port ID and sequence */
    packet_id: PacketId;
    /** the packet fee associated with a particular IBC packet */
    packet_fee: PacketFee;
}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export declare class MsgPayPacketFeeAsync implements Msg {
    params: MsgPayPacketFeeAsyncParams;
    constructor(params: MsgPayPacketFeeAsyncParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
//# sourceMappingURL=ibc_fee.d.ts.map