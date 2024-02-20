import * as _m0 from "protobufjs/minimal";
import { Params, IdentifiedClientState, ClientConsensusStates } from "./client";
export declare const protobufPackage = "ibc.core.client.v1";
/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisState {
    /** client states with their corresponding identifiers */
    clients: IdentifiedClientState[];
    /** consensus states from each client */
    clients_consensus: ClientConsensusStates[];
    /** metadata from each client */
    clients_metadata: IdentifiedGenesisMetadata[];
    params?: Params;
    /** create localhost on initialization */
    create_localhost: boolean;
    /** the sequence for the next generated client identifier */
    next_client_sequence: string;
}
/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadata {
    /** store key of metadata without clientID-prefix */
    key: Uint8Array;
    /** metadata value */
    value: Uint8Array;
}
/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadata {
    client_id: string;
    client_metadata: GenesisMetadata[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
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
            } & Record<Exclude<keyof I["clients"][number]["client_state"], keyof import("../../../../google/protobuf/any").Any>, never>) | undefined;
        } & Record<Exclude<keyof I["clients"][number], keyof IdentifiedClientState>, never>)[] & Record<Exclude<keyof I["clients"], keyof {
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
                } & Record<Exclude<keyof I["clients_consensus"][number]["consensus_states"][number]["height"], keyof import("./client").Height>, never>) | undefined;
                consensus_state?: ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["clients_consensus"][number]["consensus_states"][number]["consensus_state"], keyof import("../../../../google/protobuf/any").Any>, never>) | undefined;
            } & Record<Exclude<keyof I["clients_consensus"][number]["consensus_states"][number], keyof import("./client").ConsensusStateWithHeight>, never>)[] & Record<Exclude<keyof I["clients_consensus"][number]["consensus_states"], keyof {
                height?: {
                    revision_number?: string | undefined;
                    revision_height?: string | undefined;
                } | undefined;
                consensus_state?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["clients_consensus"][number], keyof ClientConsensusStates>, never>)[] & Record<Exclude<keyof I["clients_consensus"], keyof {
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
            } & Record<Exclude<keyof I["clients_metadata"][number]["client_metadata"][number], keyof GenesisMetadata>, never>)[] & Record<Exclude<keyof I["clients_metadata"][number]["client_metadata"], keyof {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["clients_metadata"][number], keyof IdentifiedGenesisMetadata>, never>)[] & Record<Exclude<keyof I["clients_metadata"], keyof {
            client_id?: string | undefined;
            client_metadata?: {
                key?: Uint8Array | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        params?: ({
            allowed_clients?: string[] | undefined;
        } & {
            allowed_clients?: (string[] & string[] & Record<Exclude<keyof I["params"]["allowed_clients"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], "allowed_clients">, never>) | undefined;
        create_localhost?: boolean | undefined;
        next_client_sequence?: string | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const GenesisMetadata: {
    encode(message: GenesisMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisMetadata;
    fromJSON(object: any): GenesisMetadata;
    toJSON(message: GenesisMetadata): unknown;
    fromPartial<I extends {
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
    } & {
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof GenesisMetadata>, never>>(object: I): GenesisMetadata;
};
export declare const IdentifiedGenesisMetadata: {
    encode(message: IdentifiedGenesisMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IdentifiedGenesisMetadata;
    fromJSON(object: any): IdentifiedGenesisMetadata;
    toJSON(message: IdentifiedGenesisMetadata): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["client_metadata"][number], keyof GenesisMetadata>, never>)[] & Record<Exclude<keyof I["client_metadata"], keyof {
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof IdentifiedGenesisMetadata>, never>>(object: I): IdentifiedGenesisMetadata;
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