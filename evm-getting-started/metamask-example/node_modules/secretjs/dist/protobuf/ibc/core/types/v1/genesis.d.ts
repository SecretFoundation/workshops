import * as _m0 from "protobufjs/minimal";
import { GenesisState as GenesisState1 } from "../../client/v1/genesis";
import { GenesisState as GenesisState2 } from "../../connection/v1/genesis";
import { GenesisState as GenesisState3 } from "../../channel/v1/genesis";
export declare const protobufPackage = "ibc.core.types.v1";
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisState {
    /** ICS002 - Clients genesis state */
    client_genesis?: GenesisState1;
    /** ICS003 - Connections genesis state */
    connection_genesis?: GenesisState2;
    /** ICS004 - Channel genesis state */
    channel_genesis?: GenesisState3;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        client_genesis?: {
            clients?: {
                client_id?: string | undefined;
                client_state?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
            clients_consensus?: {
                client_id?: string | undefined;
                consensus_states?: {
                    height?: {
                        revision_number?: string | undefined;
                        revision_height?: string | undefined;
                    } | undefined;
                    consensus_state?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
            clients_metadata?: {
                client_id?: string | undefined;
                client_metadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            }[] | undefined;
            params?: {
                allowed_clients?: string[] | undefined;
            } | undefined;
            create_localhost?: boolean | undefined;
            next_client_sequence?: string | undefined;
        } | undefined;
        connection_genesis?: {
            connections?: {
                id?: string | undefined;
                client_id?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: {
                    client_id?: string | undefined;
                    connection_id?: string | undefined;
                    prefix?: {
                        key_prefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delay_period?: string | undefined;
            }[] | undefined;
            client_connection_paths?: {
                client_id?: string | undefined;
                paths?: string[] | undefined;
            }[] | undefined;
            next_connection_sequence?: string | undefined;
            params?: {
                max_expected_time_per_block?: string | undefined;
            } | undefined;
        } | undefined;
        channel_genesis?: {
            channels?: {
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
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
        } | undefined;
    } & {
        client_genesis?: ({
            clients?: {
                client_id?: string | undefined;
                client_state?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] | undefined;
            clients_consensus?: {
                client_id?: string | undefined;
                consensus_states?: {
                    height?: {
                        revision_number?: string | undefined;
                        revision_height?: string | undefined;
                    } | undefined;
                    consensus_state?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
            clients_metadata?: {
                client_id?: string | undefined;
                client_metadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            }[] | undefined;
            params?: {
                allowed_clients?: string[] | undefined;
            } | undefined;
            create_localhost?: boolean | undefined;
            next_client_sequence?: string | undefined;
        } & {
            clients?: ({
                client_id?: string | undefined;
                client_state?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[] & ({
                client_id?: string | undefined;
                client_state?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            } & {
                client_id?: string | undefined;
                client_state?: ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["client_genesis"]["clients"][number]["client_state"], keyof import("../../../../google/protobuf/any").Any>, never>) | undefined;
            } & Record<Exclude<keyof I["client_genesis"]["clients"][number], keyof import("../../client/v1/client").IdentifiedClientState>, never>)[] & Record<Exclude<keyof I["client_genesis"]["clients"], keyof {
                client_id?: string | undefined;
                client_state?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[]>, never>) | undefined;
            clients_consensus?: ({
                client_id?: string | undefined;
                consensus_states?: {
                    height?: {
                        revision_number?: string | undefined;
                        revision_height?: string | undefined;
                    } | undefined;
                    consensus_state?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            }[] & ({
                client_id?: string | undefined;
                consensus_states?: {
                    height?: {
                        revision_number?: string | undefined;
                        revision_height?: string | undefined;
                    } | undefined;
                    consensus_state?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                client_id?: string | undefined;
                consensus_states?: ({
                    height?: {
                        revision_number?: string | undefined;
                        revision_height?: string | undefined;
                    } | undefined;
                    consensus_state?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] & ({
                    height?: {
                        revision_number?: string | undefined;
                        revision_height?: string | undefined;
                    } | undefined;
                    consensus_state?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    height?: ({
                        revision_number?: string | undefined;
                        revision_height?: string | undefined;
                    } & {
                        revision_number?: string | undefined;
                        revision_height?: string | undefined;
                    } & Record<Exclude<keyof I["client_genesis"]["clients_consensus"][number]["consensus_states"][number]["height"], keyof import("../../client/v1/client").Height>, never>) | undefined;
                    consensus_state?: ({
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["client_genesis"]["clients_consensus"][number]["consensus_states"][number]["consensus_state"], keyof import("../../../../google/protobuf/any").Any>, never>) | undefined;
                } & Record<Exclude<keyof I["client_genesis"]["clients_consensus"][number]["consensus_states"][number], keyof import("../../client/v1/client").ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I["client_genesis"]["clients_consensus"][number]["consensus_states"], keyof {
                    height?: {
                        revision_number?: string | undefined;
                        revision_height?: string | undefined;
                    } | undefined;
                    consensus_state?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["client_genesis"]["clients_consensus"][number], keyof import("../../client/v1/client").ClientConsensusStates>, never>)[] & Record<Exclude<keyof I["client_genesis"]["clients_consensus"], keyof {
                client_id?: string | undefined;
                consensus_states?: {
                    height?: {
                        revision_number?: string | undefined;
                        revision_height?: string | undefined;
                    } | undefined;
                    consensus_state?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
            clients_metadata?: ({
                client_id?: string | undefined;
                client_metadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            }[] & ({
                client_id?: string | undefined;
                client_metadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            } & {
                client_id?: string | undefined;
                client_metadata?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["client_genesis"]["clients_metadata"][number]["client_metadata"][number], keyof import("../../client/v1/genesis").GenesisMetadata>, never>)[] & Record<Exclude<keyof I["client_genesis"]["clients_metadata"][number]["client_metadata"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["client_genesis"]["clients_metadata"][number], keyof import("../../client/v1/genesis").IdentifiedGenesisMetadata>, never>)[] & Record<Exclude<keyof I["client_genesis"]["clients_metadata"], keyof {
                client_id?: string | undefined;
                client_metadata?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
            params?: ({
                allowed_clients?: string[] | undefined;
            } & {
                allowed_clients?: (string[] & string[] & Record<Exclude<keyof I["client_genesis"]["params"]["allowed_clients"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["client_genesis"]["params"], "allowed_clients">, never>) | undefined;
            create_localhost?: boolean | undefined;
            next_client_sequence?: string | undefined;
        } & Record<Exclude<keyof I["client_genesis"], keyof GenesisState1>, never>) | undefined;
        connection_genesis?: ({
            connections?: {
                id?: string | undefined;
                client_id?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: {
                    client_id?: string | undefined;
                    connection_id?: string | undefined;
                    prefix?: {
                        key_prefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delay_period?: string | undefined;
            }[] | undefined;
            client_connection_paths?: {
                client_id?: string | undefined;
                paths?: string[] | undefined;
            }[] | undefined;
            next_connection_sequence?: string | undefined;
            params?: {
                max_expected_time_per_block?: string | undefined;
            } | undefined;
        } & {
            connections?: ({
                id?: string | undefined;
                client_id?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: {
                    client_id?: string | undefined;
                    connection_id?: string | undefined;
                    prefix?: {
                        key_prefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delay_period?: string | undefined;
            }[] & ({
                id?: string | undefined;
                client_id?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: {
                    client_id?: string | undefined;
                    connection_id?: string | undefined;
                    prefix?: {
                        key_prefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delay_period?: string | undefined;
            } & {
                id?: string | undefined;
                client_id?: string | undefined;
                versions?: ({
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] & ({
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                } & {
                    identifier?: string | undefined;
                    features?: (string[] & string[] & Record<Exclude<keyof I["connection_genesis"]["connections"][number]["versions"][number]["features"], keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["connection_genesis"]["connections"][number]["versions"][number], keyof import("../../connection/v1/connection").Version>, never>)[] & Record<Exclude<keyof I["connection_genesis"]["connections"][number]["versions"], keyof {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[]>, never>) | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: ({
                    client_id?: string | undefined;
                    connection_id?: string | undefined;
                    prefix?: {
                        key_prefix?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    client_id?: string | undefined;
                    connection_id?: string | undefined;
                    prefix?: ({
                        key_prefix?: Uint8Array | undefined;
                    } & {
                        key_prefix?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["connection_genesis"]["connections"][number]["counterparty"]["prefix"], "key_prefix">, never>) | undefined;
                } & Record<Exclude<keyof I["connection_genesis"]["connections"][number]["counterparty"], keyof import("../../connection/v1/connection").Counterparty>, never>) | undefined;
                delay_period?: string | undefined;
            } & Record<Exclude<keyof I["connection_genesis"]["connections"][number], keyof import("../../connection/v1/connection").IdentifiedConnection>, never>)[] & Record<Exclude<keyof I["connection_genesis"]["connections"], keyof {
                id?: string | undefined;
                client_id?: string | undefined;
                versions?: {
                    identifier?: string | undefined;
                    features?: string[] | undefined;
                }[] | undefined;
                state?: import("../../connection/v1/connection").State | undefined;
                counterparty?: {
                    client_id?: string | undefined;
                    connection_id?: string | undefined;
                    prefix?: {
                        key_prefix?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                delay_period?: string | undefined;
            }[]>, never>) | undefined;
            client_connection_paths?: ({
                client_id?: string | undefined;
                paths?: string[] | undefined;
            }[] & ({
                client_id?: string | undefined;
                paths?: string[] | undefined;
            } & {
                client_id?: string | undefined;
                paths?: (string[] & string[] & Record<Exclude<keyof I["connection_genesis"]["client_connection_paths"][number]["paths"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["connection_genesis"]["client_connection_paths"][number], keyof import("../../connection/v1/connection").ConnectionPaths>, never>)[] & Record<Exclude<keyof I["connection_genesis"]["client_connection_paths"], keyof {
                client_id?: string | undefined;
                paths?: string[] | undefined;
            }[]>, never>) | undefined;
            next_connection_sequence?: string | undefined;
            params?: ({
                max_expected_time_per_block?: string | undefined;
            } & {
                max_expected_time_per_block?: string | undefined;
            } & Record<Exclude<keyof I["connection_genesis"]["params"], "max_expected_time_per_block">, never>) | undefined;
        } & Record<Exclude<keyof I["connection_genesis"], keyof GenesisState2>, never>) | undefined;
        channel_genesis?: ({
            channels?: {
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
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
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: {
                    port_id?: string | undefined;
                    channel_id?: string | undefined;
                } | undefined;
                connection_hops?: string[] | undefined;
                version?: string | undefined;
                port_id?: string | undefined;
                channel_id?: string | undefined;
            }[] & ({
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: {
                    port_id?: string | undefined;
                    channel_id?: string | undefined;
                } | undefined;
                connection_hops?: string[] | undefined;
                version?: string | undefined;
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } & {
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
                counterparty?: ({
                    port_id?: string | undefined;
                    channel_id?: string | undefined;
                } & {
                    port_id?: string | undefined;
                    channel_id?: string | undefined;
                } & Record<Exclude<keyof I["channel_genesis"]["channels"][number]["counterparty"], keyof import("../../channel/v1/channel").Counterparty>, never>) | undefined;
                connection_hops?: (string[] & string[] & Record<Exclude<keyof I["channel_genesis"]["channels"][number]["connection_hops"], keyof string[]>, never>) | undefined;
                version?: string | undefined;
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } & Record<Exclude<keyof I["channel_genesis"]["channels"][number], keyof import("../../channel/v1/channel").IdentifiedChannel>, never>)[] & Record<Exclude<keyof I["channel_genesis"]["channels"], keyof {
                state?: import("../../channel/v1/channel").State | undefined;
                ordering?: import("../../channel/v1/channel").Order | undefined;
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
            } & Record<Exclude<keyof I["channel_genesis"]["acknowledgements"][number], keyof import("../../channel/v1/channel").PacketState>, never>)[] & Record<Exclude<keyof I["channel_genesis"]["acknowledgements"], keyof {
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
            } & Record<Exclude<keyof I["channel_genesis"]["commitments"][number], keyof import("../../channel/v1/channel").PacketState>, never>)[] & Record<Exclude<keyof I["channel_genesis"]["commitments"], keyof {
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
            } & Record<Exclude<keyof I["channel_genesis"]["receipts"][number], keyof import("../../channel/v1/channel").PacketState>, never>)[] & Record<Exclude<keyof I["channel_genesis"]["receipts"], keyof {
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
            } & Record<Exclude<keyof I["channel_genesis"]["send_sequences"][number], keyof import("../../channel/v1/genesis").PacketSequence>, never>)[] & Record<Exclude<keyof I["channel_genesis"]["send_sequences"], keyof {
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
            } & Record<Exclude<keyof I["channel_genesis"]["recv_sequences"][number], keyof import("../../channel/v1/genesis").PacketSequence>, never>)[] & Record<Exclude<keyof I["channel_genesis"]["recv_sequences"], keyof {
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
            } & Record<Exclude<keyof I["channel_genesis"]["ack_sequences"][number], keyof import("../../channel/v1/genesis").PacketSequence>, never>)[] & Record<Exclude<keyof I["channel_genesis"]["ack_sequences"], keyof {
                port_id?: string | undefined;
                channel_id?: string | undefined;
                sequence?: string | undefined;
            }[]>, never>) | undefined;
            next_channel_sequence?: string | undefined;
        } & Record<Exclude<keyof I["channel_genesis"], keyof GenesisState3>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
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