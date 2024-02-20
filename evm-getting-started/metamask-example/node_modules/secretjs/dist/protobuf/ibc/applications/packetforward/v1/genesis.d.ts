import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "packetforward.v1";
/** GenesisState defines the packetforward genesis state */
export interface GenesisState {
    params?: Params;
    /**
     * key - information about forwarded packet: src_channel
     * (parsedReceiver.Channel), src_port (parsedReceiver.Port), sequence value -
     * information about original packet for refunding if necessary: retries,
     * srcPacketSender, srcPacket.DestinationChannel, srcPacket.DestinationPort
     */
    in_flight_packets: {
        [key: string]: InFlightPacket;
    };
}
export interface GenesisState_InFlightPacketsEntry {
    key: string;
    value?: InFlightPacket;
}
/** Params defines the set of IBC packetforward parameters. */
export interface Params {
    fee_percentage: string;
}
/**
 * InFlightPacket contains information about original packet for
 * writing the acknowledgement and refunding if necessary.
 */
export interface InFlightPacket {
    original_sender_address: string;
    refund_channel_id: string;
    refund_port_id: string;
    packet_src_channel_id: string;
    packet_src_port_id: string;
    packet_timeout_timestamp: string;
    packet_timeout_height: string;
    packet_data: Uint8Array;
    refund_sequence: string;
    retries_remaining: number;
    timeout: string;
    nonrefundable: boolean;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            fee_percentage?: string | undefined;
        } | undefined;
        in_flight_packets?: {
            [x: string]: {
                original_sender_address?: string | undefined;
                refund_channel_id?: string | undefined;
                refund_port_id?: string | undefined;
                packet_src_channel_id?: string | undefined;
                packet_src_port_id?: string | undefined;
                packet_timeout_timestamp?: string | undefined;
                packet_timeout_height?: string | undefined;
                packet_data?: Uint8Array | undefined;
                refund_sequence?: string | undefined;
                retries_remaining?: number | undefined;
                timeout?: string | undefined;
                nonrefundable?: boolean | undefined;
            } | undefined;
        } | undefined;
    } & {
        params?: ({
            fee_percentage?: string | undefined;
        } & {
            fee_percentage?: string | undefined;
        } & Record<Exclude<keyof I["params"], "fee_percentage">, never>) | undefined;
        in_flight_packets?: ({
            [x: string]: {
                original_sender_address?: string | undefined;
                refund_channel_id?: string | undefined;
                refund_port_id?: string | undefined;
                packet_src_channel_id?: string | undefined;
                packet_src_port_id?: string | undefined;
                packet_timeout_timestamp?: string | undefined;
                packet_timeout_height?: string | undefined;
                packet_data?: Uint8Array | undefined;
                refund_sequence?: string | undefined;
                retries_remaining?: number | undefined;
                timeout?: string | undefined;
                nonrefundable?: boolean | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                original_sender_address?: string | undefined;
                refund_channel_id?: string | undefined;
                refund_port_id?: string | undefined;
                packet_src_channel_id?: string | undefined;
                packet_src_port_id?: string | undefined;
                packet_timeout_timestamp?: string | undefined;
                packet_timeout_height?: string | undefined;
                packet_data?: Uint8Array | undefined;
                refund_sequence?: string | undefined;
                retries_remaining?: number | undefined;
                timeout?: string | undefined;
                nonrefundable?: boolean | undefined;
            } & {
                original_sender_address?: string | undefined;
                refund_channel_id?: string | undefined;
                refund_port_id?: string | undefined;
                packet_src_channel_id?: string | undefined;
                packet_src_port_id?: string | undefined;
                packet_timeout_timestamp?: string | undefined;
                packet_timeout_height?: string | undefined;
                packet_data?: Uint8Array | undefined;
                refund_sequence?: string | undefined;
                retries_remaining?: number | undefined;
                timeout?: string | undefined;
                nonrefundable?: boolean | undefined;
            } & Record<Exclude<keyof I["in_flight_packets"][string], keyof InFlightPacket>, never>) | undefined;
        } & Record<Exclude<keyof I["in_flight_packets"], string | number>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const GenesisState_InFlightPacketsEntry: {
    encode(message: GenesisState_InFlightPacketsEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState_InFlightPacketsEntry;
    fromJSON(object: any): GenesisState_InFlightPacketsEntry;
    toJSON(message: GenesisState_InFlightPacketsEntry): unknown;
    fromPartial<I extends {
        key?: string | undefined;
        value?: {
            original_sender_address?: string | undefined;
            refund_channel_id?: string | undefined;
            refund_port_id?: string | undefined;
            packet_src_channel_id?: string | undefined;
            packet_src_port_id?: string | undefined;
            packet_timeout_timestamp?: string | undefined;
            packet_timeout_height?: string | undefined;
            packet_data?: Uint8Array | undefined;
            refund_sequence?: string | undefined;
            retries_remaining?: number | undefined;
            timeout?: string | undefined;
            nonrefundable?: boolean | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            original_sender_address?: string | undefined;
            refund_channel_id?: string | undefined;
            refund_port_id?: string | undefined;
            packet_src_channel_id?: string | undefined;
            packet_src_port_id?: string | undefined;
            packet_timeout_timestamp?: string | undefined;
            packet_timeout_height?: string | undefined;
            packet_data?: Uint8Array | undefined;
            refund_sequence?: string | undefined;
            retries_remaining?: number | undefined;
            timeout?: string | undefined;
            nonrefundable?: boolean | undefined;
        } & {
            original_sender_address?: string | undefined;
            refund_channel_id?: string | undefined;
            refund_port_id?: string | undefined;
            packet_src_channel_id?: string | undefined;
            packet_src_port_id?: string | undefined;
            packet_timeout_timestamp?: string | undefined;
            packet_timeout_height?: string | undefined;
            packet_data?: Uint8Array | undefined;
            refund_sequence?: string | undefined;
            retries_remaining?: number | undefined;
            timeout?: string | undefined;
            nonrefundable?: boolean | undefined;
        } & Record<Exclude<keyof I["value"], keyof InFlightPacket>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState_InFlightPacketsEntry>, never>>(object: I): GenesisState_InFlightPacketsEntry;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        fee_percentage?: string | undefined;
    } & {
        fee_percentage?: string | undefined;
    } & Record<Exclude<keyof I, "fee_percentage">, never>>(object: I): Params;
};
export declare const InFlightPacket: {
    encode(message: InFlightPacket, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): InFlightPacket;
    fromJSON(object: any): InFlightPacket;
    toJSON(message: InFlightPacket): unknown;
    fromPartial<I extends {
        original_sender_address?: string | undefined;
        refund_channel_id?: string | undefined;
        refund_port_id?: string | undefined;
        packet_src_channel_id?: string | undefined;
        packet_src_port_id?: string | undefined;
        packet_timeout_timestamp?: string | undefined;
        packet_timeout_height?: string | undefined;
        packet_data?: Uint8Array | undefined;
        refund_sequence?: string | undefined;
        retries_remaining?: number | undefined;
        timeout?: string | undefined;
        nonrefundable?: boolean | undefined;
    } & {
        original_sender_address?: string | undefined;
        refund_channel_id?: string | undefined;
        refund_port_id?: string | undefined;
        packet_src_channel_id?: string | undefined;
        packet_src_port_id?: string | undefined;
        packet_timeout_timestamp?: string | undefined;
        packet_timeout_height?: string | undefined;
        packet_data?: Uint8Array | undefined;
        refund_sequence?: string | undefined;
        retries_remaining?: number | undefined;
        timeout?: string | undefined;
        nonrefundable?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof InFlightPacket>, never>>(object: I): InFlightPacket;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
//# sourceMappingURL=genesis.d.ts.map