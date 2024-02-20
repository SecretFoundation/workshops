import * as CosmosBaseV1beta1Coin from "../../../../cosmos/base/v1beta1/coin.pb";
import * as IbcCoreChannelV1Channel from "../../../core/channel/v1/channel.pb";
export declare type Fee = {
    recv_fee?: CosmosBaseV1beta1Coin.Coin[];
    ack_fee?: CosmosBaseV1beta1Coin.Coin[];
    timeout_fee?: CosmosBaseV1beta1Coin.Coin[];
};
export declare type PacketFee = {
    fee?: Fee;
    refund_address?: string;
    relayers?: string[];
};
export declare type PacketFees = {
    packet_fees?: PacketFee[];
};
export declare type IdentifiedPacketFees = {
    packet_id?: IbcCoreChannelV1Channel.PacketId;
    packet_fees?: PacketFee[];
};
//# sourceMappingURL=fee.pb.d.ts.map