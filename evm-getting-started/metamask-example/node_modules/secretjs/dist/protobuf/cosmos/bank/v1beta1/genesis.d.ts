import * as _m0 from "protobufjs/minimal";
import { Params, Metadata } from "./bank";
import { Coin } from "../../base/v1beta1/coin";
export declare const protobufPackage = "cosmos.bank.v1beta1";
/** GenesisState defines the bank module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params?: Params;
    /** balances is an array containing the balances of all the accounts. */
    balances: Balance[];
    /**
     * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
     * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
     */
    supply: Coin[];
    /** denom_metadata defines the metadata of the differents coins. */
    denom_metadata: Metadata[];
}
/**
 * Balance defines an account address and balance pair used in the bank module's
 * genesis state.
 */
export interface Balance {
    /** address is the address of the balance holder. */
    address: string;
    /** coins defines the different coins this balance holds. */
    coins: Coin[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            send_enabled?: {
                denom?: string | undefined;
                enabled?: boolean | undefined;
            }[] | undefined;
            default_send_enabled?: boolean | undefined;
        } | undefined;
        balances?: {
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        supply?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        denom_metadata?: {
            description?: string | undefined;
            denom_units?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
        }[] | undefined;
    } & {
        params?: ({
            send_enabled?: {
                denom?: string | undefined;
                enabled?: boolean | undefined;
            }[] | undefined;
            default_send_enabled?: boolean | undefined;
        } & {
            send_enabled?: ({
                denom?: string | undefined;
                enabled?: boolean | undefined;
            }[] & ({
                denom?: string | undefined;
                enabled?: boolean | undefined;
            } & {
                denom?: string | undefined;
                enabled?: boolean | undefined;
            } & Record<Exclude<keyof I["params"]["send_enabled"][number], keyof import("./bank").SendEnabled>, never>)[] & Record<Exclude<keyof I["params"]["send_enabled"], keyof {
                denom?: string | undefined;
                enabled?: boolean | undefined;
            }[]>, never>) | undefined;
            default_send_enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        balances?: ({
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] & ({
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            address?: string | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["balances"][number]["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["balances"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["balances"][number], keyof Balance>, never>)[] & Record<Exclude<keyof I["balances"], keyof {
            address?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        supply?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["supply"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["supply"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        denom_metadata?: ({
            description?: string | undefined;
            denom_units?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
        }[] & ({
            description?: string | undefined;
            denom_units?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
        } & {
            description?: string | undefined;
            denom_units?: ({
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] & ({
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            } & {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: (string[] & string[] & Record<Exclude<keyof I["denom_metadata"][number]["denom_units"][number]["aliases"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["denom_metadata"][number]["denom_units"][number], keyof import("./bank").DenomUnit>, never>)[] & Record<Exclude<keyof I["denom_metadata"][number]["denom_units"], keyof {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[]>, never>) | undefined;
            base?: string | undefined;
            display?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
        } & Record<Exclude<keyof I["denom_metadata"][number], keyof Metadata>, never>)[] & Record<Exclude<keyof I["denom_metadata"], keyof {
            description?: string | undefined;
            denom_units?: {
                denom?: string | undefined;
                exponent?: number | undefined;
                aliases?: string[] | undefined;
            }[] | undefined;
            base?: string | undefined;
            display?: string | undefined;
            name?: string | undefined;
            symbol?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const Balance: {
    encode(message: Balance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Balance;
    fromJSON(object: any): Balance;
    toJSON(message: Balance): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        coins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        address?: string | undefined;
        coins?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["coins"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["coins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Balance>, never>>(object: I): Balance;
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