import * as _m0 from "protobufjs/minimal";
import { Params, IdentifiedConnection, ConnectionPaths } from "./connection";
export declare const protobufPackage = "ibc.core.connection.v1";
/** GenesisState defines the ibc connection submodule's genesis state. */
export interface GenesisState {
    connections: IdentifiedConnection[];
    client_connection_paths: ConnectionPaths[];
    /** the sequence for the next generated connection identifier */
    next_connection_sequence: string;
    params?: Params;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        connections?: {
            id?: string | undefined;
            client_id?: string | undefined;
            versions?: {
                identifier?: string | undefined;
                features?: string[] | undefined;
            }[] | undefined;
            state?: import("./connection").State | undefined;
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
            state?: import("./connection").State | undefined;
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
            state?: import("./connection").State | undefined;
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
                features?: (string[] & string[] & Record<Exclude<keyof I["connections"][number]["versions"][number]["features"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["connections"][number]["versions"][number], keyof import("./connection").Version>, never>)[] & Record<Exclude<keyof I["connections"][number]["versions"], keyof {
                identifier?: string | undefined;
                features?: string[] | undefined;
            }[]>, never>) | undefined;
            state?: import("./connection").State | undefined;
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
                } & Record<Exclude<keyof I["connections"][number]["counterparty"]["prefix"], "key_prefix">, never>) | undefined;
            } & Record<Exclude<keyof I["connections"][number]["counterparty"], keyof import("./connection").Counterparty>, never>) | undefined;
            delay_period?: string | undefined;
        } & Record<Exclude<keyof I["connections"][number], keyof IdentifiedConnection>, never>)[] & Record<Exclude<keyof I["connections"], keyof {
            id?: string | undefined;
            client_id?: string | undefined;
            versions?: {
                identifier?: string | undefined;
                features?: string[] | undefined;
            }[] | undefined;
            state?: import("./connection").State | undefined;
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
            paths?: (string[] & string[] & Record<Exclude<keyof I["client_connection_paths"][number]["paths"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["client_connection_paths"][number], keyof ConnectionPaths>, never>)[] & Record<Exclude<keyof I["client_connection_paths"], keyof {
            client_id?: string | undefined;
            paths?: string[] | undefined;
        }[]>, never>) | undefined;
        next_connection_sequence?: string | undefined;
        params?: ({
            max_expected_time_per_block?: string | undefined;
        } & {
            max_expected_time_per_block?: string | undefined;
        } & Record<Exclude<keyof I["params"], "max_expected_time_per_block">, never>) | undefined;
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