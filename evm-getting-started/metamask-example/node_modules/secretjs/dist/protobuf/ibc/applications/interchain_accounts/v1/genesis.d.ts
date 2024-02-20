import * as _m0 from "protobufjs/minimal";
import { Params } from "../controller/v1/controller";
import { Params as Params1 } from "../host/v1/host";
export declare const protobufPackage = "ibc.applications.interchain_accounts.v1";
/** GenesisState defines the interchain accounts genesis state */
export interface GenesisState {
    controller_genesis_state?: ControllerGenesisState;
    host_genesis_state?: HostGenesisState;
}
/** ControllerGenesisState defines the interchain accounts controller genesis state */
export interface ControllerGenesisState {
    active_channels: ActiveChannel[];
    interchain_accounts: RegisteredInterchainAccount[];
    ports: string[];
    params?: Params;
}
/** HostGenesisState defines the interchain accounts host genesis state */
export interface HostGenesisState {
    active_channels: ActiveChannel[];
    interchain_accounts: RegisteredInterchainAccount[];
    port: string;
    params?: Params1;
}
/** ActiveChannel contains a connection ID, port ID and associated active channel ID */
export interface ActiveChannel {
    connection_id: string;
    port_id: string;
    channel_id: string;
}
/** RegisteredInterchainAccount contains a connection ID, port ID and associated interchain account address */
export interface RegisteredInterchainAccount {
    connection_id: string;
    port_id: string;
    account_address: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        controller_genesis_state?: {
            active_channels?: {
                connection_id?: string | undefined;
                port_id?: string | undefined;
                channel_id?: string | undefined;
            }[] | undefined;
            interchain_accounts?: {
                connection_id?: string | undefined;
                port_id?: string | undefined;
                account_address?: string | undefined;
            }[] | undefined;
            ports?: string[] | undefined;
            params?: {
                controller_enabled?: boolean | undefined;
            } | undefined;
        } | undefined;
        host_genesis_state?: {
            active_channels?: {
                connection_id?: string | undefined;
                port_id?: string | undefined;
                channel_id?: string | undefined;
            }[] | undefined;
            interchain_accounts?: {
                connection_id?: string | undefined;
                port_id?: string | undefined;
                account_address?: string | undefined;
            }[] | undefined;
            port?: string | undefined;
            params?: {
                host_enabled?: boolean | undefined;
                allow_messages?: string[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        controller_genesis_state?: ({
            active_channels?: {
                connection_id?: string | undefined;
                port_id?: string | undefined;
                channel_id?: string | undefined;
            }[] | undefined;
            interchain_accounts?: {
                connection_id?: string | undefined;
                port_id?: string | undefined;
                account_address?: string | undefined;
            }[] | undefined;
            ports?: string[] | undefined;
            params?: {
                controller_enabled?: boolean | undefined;
            } | undefined;
        } & {
            active_channels?: ({
                connection_id?: string | undefined;
                port_id?: string | undefined;
                channel_id?: string | undefined;
            }[] & ({
                connection_id?: string | undefined;
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } & {
                connection_id?: string | undefined;
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } & Record<Exclude<keyof I["controller_genesis_state"]["active_channels"][number], keyof ActiveChannel>, never>)[] & Record<Exclude<keyof I["controller_genesis_state"]["active_channels"], keyof {
                connection_id?: string | undefined;
                port_id?: string | undefined;
                channel_id?: string | undefined;
            }[]>, never>) | undefined;
            interchain_accounts?: ({
                connection_id?: string | undefined;
                port_id?: string | undefined;
                account_address?: string | undefined;
            }[] & ({
                connection_id?: string | undefined;
                port_id?: string | undefined;
                account_address?: string | undefined;
            } & {
                connection_id?: string | undefined;
                port_id?: string | undefined;
                account_address?: string | undefined;
            } & Record<Exclude<keyof I["controller_genesis_state"]["interchain_accounts"][number], keyof RegisteredInterchainAccount>, never>)[] & Record<Exclude<keyof I["controller_genesis_state"]["interchain_accounts"], keyof {
                connection_id?: string | undefined;
                port_id?: string | undefined;
                account_address?: string | undefined;
            }[]>, never>) | undefined;
            ports?: (string[] & string[] & Record<Exclude<keyof I["controller_genesis_state"]["ports"], keyof string[]>, never>) | undefined;
            params?: ({
                controller_enabled?: boolean | undefined;
            } & {
                controller_enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["controller_genesis_state"]["params"], "controller_enabled">, never>) | undefined;
        } & Record<Exclude<keyof I["controller_genesis_state"], keyof ControllerGenesisState>, never>) | undefined;
        host_genesis_state?: ({
            active_channels?: {
                connection_id?: string | undefined;
                port_id?: string | undefined;
                channel_id?: string | undefined;
            }[] | undefined;
            interchain_accounts?: {
                connection_id?: string | undefined;
                port_id?: string | undefined;
                account_address?: string | undefined;
            }[] | undefined;
            port?: string | undefined;
            params?: {
                host_enabled?: boolean | undefined;
                allow_messages?: string[] | undefined;
            } | undefined;
        } & {
            active_channels?: ({
                connection_id?: string | undefined;
                port_id?: string | undefined;
                channel_id?: string | undefined;
            }[] & ({
                connection_id?: string | undefined;
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } & {
                connection_id?: string | undefined;
                port_id?: string | undefined;
                channel_id?: string | undefined;
            } & Record<Exclude<keyof I["host_genesis_state"]["active_channels"][number], keyof ActiveChannel>, never>)[] & Record<Exclude<keyof I["host_genesis_state"]["active_channels"], keyof {
                connection_id?: string | undefined;
                port_id?: string | undefined;
                channel_id?: string | undefined;
            }[]>, never>) | undefined;
            interchain_accounts?: ({
                connection_id?: string | undefined;
                port_id?: string | undefined;
                account_address?: string | undefined;
            }[] & ({
                connection_id?: string | undefined;
                port_id?: string | undefined;
                account_address?: string | undefined;
            } & {
                connection_id?: string | undefined;
                port_id?: string | undefined;
                account_address?: string | undefined;
            } & Record<Exclude<keyof I["host_genesis_state"]["interchain_accounts"][number], keyof RegisteredInterchainAccount>, never>)[] & Record<Exclude<keyof I["host_genesis_state"]["interchain_accounts"], keyof {
                connection_id?: string | undefined;
                port_id?: string | undefined;
                account_address?: string | undefined;
            }[]>, never>) | undefined;
            port?: string | undefined;
            params?: ({
                host_enabled?: boolean | undefined;
                allow_messages?: string[] | undefined;
            } & {
                host_enabled?: boolean | undefined;
                allow_messages?: (string[] & string[] & Record<Exclude<keyof I["host_genesis_state"]["params"]["allow_messages"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["host_genesis_state"]["params"], keyof Params1>, never>) | undefined;
        } & Record<Exclude<keyof I["host_genesis_state"], keyof HostGenesisState>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const ControllerGenesisState: {
    encode(message: ControllerGenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ControllerGenesisState;
    fromJSON(object: any): ControllerGenesisState;
    toJSON(message: ControllerGenesisState): unknown;
    fromPartial<I extends {
        active_channels?: {
            connection_id?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        }[] | undefined;
        interchain_accounts?: {
            connection_id?: string | undefined;
            port_id?: string | undefined;
            account_address?: string | undefined;
        }[] | undefined;
        ports?: string[] | undefined;
        params?: {
            controller_enabled?: boolean | undefined;
        } | undefined;
    } & {
        active_channels?: ({
            connection_id?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        }[] & ({
            connection_id?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        } & {
            connection_id?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        } & Record<Exclude<keyof I["active_channels"][number], keyof ActiveChannel>, never>)[] & Record<Exclude<keyof I["active_channels"], keyof {
            connection_id?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        }[]>, never>) | undefined;
        interchain_accounts?: ({
            connection_id?: string | undefined;
            port_id?: string | undefined;
            account_address?: string | undefined;
        }[] & ({
            connection_id?: string | undefined;
            port_id?: string | undefined;
            account_address?: string | undefined;
        } & {
            connection_id?: string | undefined;
            port_id?: string | undefined;
            account_address?: string | undefined;
        } & Record<Exclude<keyof I["interchain_accounts"][number], keyof RegisteredInterchainAccount>, never>)[] & Record<Exclude<keyof I["interchain_accounts"], keyof {
            connection_id?: string | undefined;
            port_id?: string | undefined;
            account_address?: string | undefined;
        }[]>, never>) | undefined;
        ports?: (string[] & string[] & Record<Exclude<keyof I["ports"], keyof string[]>, never>) | undefined;
        params?: ({
            controller_enabled?: boolean | undefined;
        } & {
            controller_enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["params"], "controller_enabled">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ControllerGenesisState>, never>>(object: I): ControllerGenesisState;
};
export declare const HostGenesisState: {
    encode(message: HostGenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HostGenesisState;
    fromJSON(object: any): HostGenesisState;
    toJSON(message: HostGenesisState): unknown;
    fromPartial<I extends {
        active_channels?: {
            connection_id?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        }[] | undefined;
        interchain_accounts?: {
            connection_id?: string | undefined;
            port_id?: string | undefined;
            account_address?: string | undefined;
        }[] | undefined;
        port?: string | undefined;
        params?: {
            host_enabled?: boolean | undefined;
            allow_messages?: string[] | undefined;
        } | undefined;
    } & {
        active_channels?: ({
            connection_id?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        }[] & ({
            connection_id?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        } & {
            connection_id?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        } & Record<Exclude<keyof I["active_channels"][number], keyof ActiveChannel>, never>)[] & Record<Exclude<keyof I["active_channels"], keyof {
            connection_id?: string | undefined;
            port_id?: string | undefined;
            channel_id?: string | undefined;
        }[]>, never>) | undefined;
        interchain_accounts?: ({
            connection_id?: string | undefined;
            port_id?: string | undefined;
            account_address?: string | undefined;
        }[] & ({
            connection_id?: string | undefined;
            port_id?: string | undefined;
            account_address?: string | undefined;
        } & {
            connection_id?: string | undefined;
            port_id?: string | undefined;
            account_address?: string | undefined;
        } & Record<Exclude<keyof I["interchain_accounts"][number], keyof RegisteredInterchainAccount>, never>)[] & Record<Exclude<keyof I["interchain_accounts"], keyof {
            connection_id?: string | undefined;
            port_id?: string | undefined;
            account_address?: string | undefined;
        }[]>, never>) | undefined;
        port?: string | undefined;
        params?: ({
            host_enabled?: boolean | undefined;
            allow_messages?: string[] | undefined;
        } & {
            host_enabled?: boolean | undefined;
            allow_messages?: (string[] & string[] & Record<Exclude<keyof I["params"]["allow_messages"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params1>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof HostGenesisState>, never>>(object: I): HostGenesisState;
};
export declare const ActiveChannel: {
    encode(message: ActiveChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActiveChannel;
    fromJSON(object: any): ActiveChannel;
    toJSON(message: ActiveChannel): unknown;
    fromPartial<I extends {
        connection_id?: string | undefined;
        port_id?: string | undefined;
        channel_id?: string | undefined;
    } & {
        connection_id?: string | undefined;
        port_id?: string | undefined;
        channel_id?: string | undefined;
    } & Record<Exclude<keyof I, keyof ActiveChannel>, never>>(object: I): ActiveChannel;
};
export declare const RegisteredInterchainAccount: {
    encode(message: RegisteredInterchainAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisteredInterchainAccount;
    fromJSON(object: any): RegisteredInterchainAccount;
    toJSON(message: RegisteredInterchainAccount): unknown;
    fromPartial<I extends {
        connection_id?: string | undefined;
        port_id?: string | undefined;
        account_address?: string | undefined;
    } & {
        connection_id?: string | undefined;
        port_id?: string | undefined;
        account_address?: string | undefined;
    } & Record<Exclude<keyof I, keyof RegisteredInterchainAccount>, never>>(object: I): RegisteredInterchainAccount;
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