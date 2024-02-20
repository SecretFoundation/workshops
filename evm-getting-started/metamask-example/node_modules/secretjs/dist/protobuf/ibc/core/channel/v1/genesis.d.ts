import * as _m0 from "protobufjs/minimal";
import { IdentifiedChannel, PacketState } from "./channel";
export declare const protobufPackage = "ibc.core.channel.v1";
/** GenesisState defines the ibc channel submodule's genesis state. */
export interface GenesisState {
    channels: IdentifiedChannel[];
    acknowledgements: PacketState[];
    commitments: PacketState[];
    receipts: PacketState[];
    send_sequences: PacketSequence[];
    recv_sequences: PacketSequence[];
    ack_sequences: PacketSequence[];
    /** the sequence for the next generated channel identifier */
    next_channel_sequence: string;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store
 * next send and receive sequences.
 */
export interface PacketSequence {
    port_id: string;
    channel_id: string;
    sequence: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        channels?: {
            state?: import("./channel").State | undefined;
            ordering?: import("./channel").Order | undefined;
            counterparty?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } | undefined;
            connection_hops?: string[] | undefined;
            version?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        }[] | undefined;
        acknowledgements?: {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        }[] | undefined;
        commitments?: {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        }[] | undefined;
        receipts?: {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        }[] | undefined;
        send_sequences?: {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        }[] | undefined;
        recv_sequences?: {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        }[] | undefined;
        ack_sequences?: {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        }[] | undefined;
        next_channel_sequence?: string | undefined;
    } & {
        channels?: ({
            state?: import("./channel").State | undefined;
            ordering?: import("./channel").Order | undefined;
            counterparty?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } | undefined;
            connection_hops?: string[] | undefined;
            version?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        }[] & ({
            state?: import("./channel").State | undefined;
            ordering?: import("./channel").Order | undefined;
            counterparty?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } | undefined;
            connection_hops?: string[] | undefined;
            version?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        } & {
            state?: import("./channel").State | undefined;
            ordering?: import("./channel").Order | undefined;
            counterparty?: ({
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } & {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } & Record<Exclude<keyof I["channels"][number]["counterparty"], keyof import("./channel").Counterparty>, never>) | undefined;
            connection_hops?: (string[] & string[] & Record<Exclude<keyof I["channels"][number]["connection_hops"], keyof string[]>, never>) | undefined;
            version?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        } & Record<Exclude<keyof I["channels"][number], keyof IdentifiedChannel>, never>)[] & Record<Exclude<keyof I["channels"], keyof {
            state?: import("./channel").State | undefined;
            ordering?: import("./channel").Order | undefined;
            counterparty?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } | undefined;
            connection_hops?: string[] | undefined;
            version?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        }[]>, never>) | undefined;
        acknowledgements?: ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        }[] & ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        } & {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["acknowledgements"][number], keyof PacketState>, never>)[] & Record<Exclude<keyof I["acknowledgements"], keyof {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        }[]>, never>) | undefined;
        commitments?: ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        }[] & ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        } & {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["commitments"][number], keyof PacketState>, never>)[] & Record<Exclude<keyof I["commitments"], keyof {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        }[]>, never>) | undefined;
        receipts?: ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        }[] & ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        } & {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["receipts"][number], keyof PacketState>, never>)[] & Record<Exclude<keyof I["receipts"], keyof {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
            data?: Uint8Array | undefined;
        }[]>, never>) | undefined;
        send_sequences?: ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        }[] & ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        } & {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        } & Record<Exclude<keyof I["send_sequences"][number], keyof PacketSequence>, never>)[] & Record<Exclude<keyof I["send_sequences"], keyof {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        }[]>, never>) | undefined;
        recv_sequences?: ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        }[] & ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        } & {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        } & Record<Exclude<keyof I["recv_sequences"][number], keyof PacketSequence>, never>)[] & Record<Exclude<keyof I["recv_sequences"], keyof {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        }[]>, never>) | undefined;
        ack_sequences?: ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        }[] & ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        } & {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        } & Record<Exclude<keyof I["ack_sequences"][number], keyof PacketSequence>, never>)[] & Record<Exclude<keyof I["ack_sequences"], keyof {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        }[]>, never>) | undefined;
        next_channel_sequence?: string | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const PacketSequence: {
    encode(message: PacketSequence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PacketSequence;
    fromJSON(object: any): PacketSequence;
    toJSON(message: PacketSequence): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        sequence?: string | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        sequence?: string | undefined;
    } & Record<Exclude<keyof I, keyof PacketSequence>, never>>(object: I): PacketSequence;
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