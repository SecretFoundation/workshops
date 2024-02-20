import * as IbcCoreChannelV1Channel from "./channel.pb";
export declare type GenesisState = {
    channels?: IbcCoreChannelV1Channel.IdentifiedChannel[];
    acknowledgements?: IbcCoreChannelV1Channel.PacketState[];
    commitments?: IbcCoreChannelV1Channel.PacketState[];
    receipts?: IbcCoreChannelV1Channel.PacketState[];
    send_sequences?: PacketSequence[];
    recv_sequences?: PacketSequence[];
    ack_sequences?: PacketSequence[];
    next_channel_sequence?: string;
};
export declare type PacketSequence = {
    port_id?: string;
    channel_id?: string;
    sequence?: string;
};
//# sourceMappingURL=genesis.pb.d.ts.map