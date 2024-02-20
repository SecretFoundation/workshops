export declare type GenesisState = {
    params?: Params;
    in_flight_packets?: {
        [key: string]: InFlightPacket;
    };
};
export declare type Params = {
    fee_percentage?: string;
};
export declare type InFlightPacket = {
    original_sender_address?: string;
    refund_channel_id?: string;
    refund_port_id?: string;
    packet_src_channel_id?: string;
    packet_src_port_id?: string;
    packet_timeout_timestamp?: string;
    packet_timeout_height?: string;
    packet_data?: Uint8Array;
    refund_sequence?: string;
    retries_remaining?: number;
    timeout?: string;
    nonrefundable?: boolean;
};
//# sourceMappingURL=genesis.pb.d.ts.map