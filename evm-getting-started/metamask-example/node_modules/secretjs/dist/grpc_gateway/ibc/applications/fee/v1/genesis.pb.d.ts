import * as IbcCoreChannelV1Channel from "../../../core/channel/v1/channel.pb";
import * as IbcApplicationsFeeV1Fee from "./fee.pb";
export declare type GenesisState = {
    identified_fees?: IbcApplicationsFeeV1Fee.IdentifiedPacketFees[];
    fee_enabled_channels?: FeeEnabledChannel[];
    registered_payees?: RegisteredPayee[];
    registered_counterparty_payees?: RegisteredCounterpartyPayee[];
    forward_relayers?: ForwardRelayerAddress[];
};
export declare type FeeEnabledChannel = {
    port_id?: string;
    channel_id?: string;
};
export declare type RegisteredPayee = {
    channel_id?: string;
    relayer?: string;
    payee?: string;
};
export declare type RegisteredCounterpartyPayee = {
    channel_id?: string;
    relayer?: string;
    counterparty_payee?: string;
};
export declare type ForwardRelayerAddress = {
    address?: string;
    packet_id?: IbcCoreChannelV1Channel.PacketId;
};
//# sourceMappingURL=genesis.pb.d.ts.map