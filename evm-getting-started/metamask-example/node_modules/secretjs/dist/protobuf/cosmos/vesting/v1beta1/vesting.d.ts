import * as _m0 from "protobufjs/minimal";
import { BaseAccount } from "../../auth/v1beta1/auth";
import { Coin } from "../../base/v1beta1/coin";
export declare const protobufPackage = "cosmos.vesting.v1beta1";
/**
 * BaseVestingAccount implements the VestingAccount interface. It contains all
 * the necessary fields needed for any vesting account implementation.
 */
export interface BaseVestingAccount {
    base_account?: BaseAccount;
    original_vesting: Coin[];
    delegated_free: Coin[];
    delegated_vesting: Coin[];
    end_time: string;
}
/**
 * ContinuousVestingAccount implements the VestingAccount interface. It
 * continuously vests by unlocking coins linearly with respect to time.
 */
export interface ContinuousVestingAccount {
    base_vesting_account?: BaseVestingAccount;
    start_time: string;
}
/**
 * DelayedVestingAccount implements the VestingAccount interface. It vests all
 * coins after a specific time, but non prior. In other words, it keeps them
 * locked until a specified time.
 */
export interface DelayedVestingAccount {
    base_vesting_account?: BaseVestingAccount;
}
/** Period defines a length of time and amount of coins that will vest. */
export interface Period {
    length: string;
    amount: Coin[];
}
/**
 * PeriodicVestingAccount implements the VestingAccount interface. It
 * periodically vests by unlocking coins during each specified period.
 */
export interface PeriodicVestingAccount {
    base_vesting_account?: BaseVestingAccount;
    start_time: string;
    vesting_periods: Period[];
}
/**
 * PermanentLockedAccount implements the VestingAccount interface. It does
 * not ever release coins, locking them indefinitely. Coins in this account can
 * still be used for delegating and for governance votes even while locked.
 *
 * Since: cosmos-sdk 0.43
 */
export interface PermanentLockedAccount {
    base_vesting_account?: BaseVestingAccount;
}
export declare const BaseVestingAccount: {
    encode(message: BaseVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BaseVestingAccount;
    fromJSON(object: any): BaseVestingAccount;
    toJSON(message: BaseVestingAccount): unknown;
    fromPartial<I extends {
        base_account?: {
            address?: string | undefined;
            pub_key?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            account_number?: string | undefined;
            sequence?: string | undefined;
        } | undefined;
        original_vesting?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        delegated_free?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        delegated_vesting?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        end_time?: string | undefined;
    } & {
        base_account?: ({
            address?: string | undefined;
            pub_key?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            account_number?: string | undefined;
            sequence?: string | undefined;
        } & {
            address?: string | undefined;
            pub_key?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["base_account"]["pub_key"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
            account_number?: string | undefined;
            sequence?: string | undefined;
        } & Record<Exclude<keyof I["base_account"], keyof BaseAccount>, never>) | undefined;
        original_vesting?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["original_vesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["original_vesting"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        delegated_free?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["delegated_free"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["delegated_free"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        delegated_vesting?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["delegated_vesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["delegated_vesting"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        end_time?: string | undefined;
    } & Record<Exclude<keyof I, keyof BaseVestingAccount>, never>>(object: I): BaseVestingAccount;
};
export declare const ContinuousVestingAccount: {
    encode(message: ContinuousVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ContinuousVestingAccount;
    fromJSON(object: any): ContinuousVestingAccount;
    toJSON(message: ContinuousVestingAccount): unknown;
    fromPartial<I extends {
        base_vesting_account?: {
            base_account?: {
                address?: string | undefined;
                pub_key?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                account_number?: string | undefined;
                sequence?: string | undefined;
            } | undefined;
            original_vesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegated_free?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegated_vesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            end_time?: string | undefined;
        } | undefined;
        start_time?: string | undefined;
    } & {
        base_vesting_account?: ({
            base_account?: {
                address?: string | undefined;
                pub_key?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                account_number?: string | undefined;
                sequence?: string | undefined;
            } | undefined;
            original_vesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegated_free?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegated_vesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            end_time?: string | undefined;
        } & {
            base_account?: ({
                address?: string | undefined;
                pub_key?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                account_number?: string | undefined;
                sequence?: string | undefined;
            } & {
                address?: string | undefined;
                pub_key?: ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["base_vesting_account"]["base_account"]["pub_key"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
                account_number?: string | undefined;
                sequence?: string | undefined;
            } & Record<Exclude<keyof I["base_vesting_account"]["base_account"], keyof BaseAccount>, never>) | undefined;
            original_vesting?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["base_vesting_account"]["original_vesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["base_vesting_account"]["original_vesting"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            delegated_free?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["base_vesting_account"]["delegated_free"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["base_vesting_account"]["delegated_free"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            delegated_vesting?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["base_vesting_account"]["delegated_vesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["base_vesting_account"]["delegated_vesting"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            end_time?: string | undefined;
        } & Record<Exclude<keyof I["base_vesting_account"], keyof BaseVestingAccount>, never>) | undefined;
        start_time?: string | undefined;
    } & Record<Exclude<keyof I, keyof ContinuousVestingAccount>, never>>(object: I): ContinuousVestingAccount;
};
export declare const DelayedVestingAccount: {
    encode(message: DelayedVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DelayedVestingAccount;
    fromJSON(object: any): DelayedVestingAccount;
    toJSON(message: DelayedVestingAccount): unknown;
    fromPartial<I extends {
        base_vesting_account?: {
            base_account?: {
                address?: string | undefined;
                pub_key?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                account_number?: string | undefined;
                sequence?: string | undefined;
            } | undefined;
            original_vesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegated_free?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegated_vesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            end_time?: string | undefined;
        } | undefined;
    } & {
        base_vesting_account?: ({
            base_account?: {
                address?: string | undefined;
                pub_key?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                account_number?: string | undefined;
                sequence?: string | undefined;
            } | undefined;
            original_vesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegated_free?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegated_vesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            end_time?: string | undefined;
        } & {
            base_account?: ({
                address?: string | undefined;
                pub_key?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                account_number?: string | undefined;
                sequence?: string | undefined;
            } & {
                address?: string | undefined;
                pub_key?: ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["base_vesting_account"]["base_account"]["pub_key"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
                account_number?: string | undefined;
                sequence?: string | undefined;
            } & Record<Exclude<keyof I["base_vesting_account"]["base_account"], keyof BaseAccount>, never>) | undefined;
            original_vesting?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["base_vesting_account"]["original_vesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["base_vesting_account"]["original_vesting"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            delegated_free?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["base_vesting_account"]["delegated_free"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["base_vesting_account"]["delegated_free"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            delegated_vesting?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["base_vesting_account"]["delegated_vesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["base_vesting_account"]["delegated_vesting"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            end_time?: string | undefined;
        } & Record<Exclude<keyof I["base_vesting_account"], keyof BaseVestingAccount>, never>) | undefined;
    } & Record<Exclude<keyof I, "base_vesting_account">, never>>(object: I): DelayedVestingAccount;
};
export declare const Period: {
    encode(message: Period, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Period;
    fromJSON(object: any): Period;
    toJSON(message: Period): unknown;
    fromPartial<I extends {
        length?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        length?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["amount"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Period>, never>>(object: I): Period;
};
export declare const PeriodicVestingAccount: {
    encode(message: PeriodicVestingAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PeriodicVestingAccount;
    fromJSON(object: any): PeriodicVestingAccount;
    toJSON(message: PeriodicVestingAccount): unknown;
    fromPartial<I extends {
        base_vesting_account?: {
            base_account?: {
                address?: string | undefined;
                pub_key?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                account_number?: string | undefined;
                sequence?: string | undefined;
            } | undefined;
            original_vesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegated_free?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegated_vesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            end_time?: string | undefined;
        } | undefined;
        start_time?: string | undefined;
        vesting_periods?: {
            length?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        base_vesting_account?: ({
            base_account?: {
                address?: string | undefined;
                pub_key?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                account_number?: string | undefined;
                sequence?: string | undefined;
            } | undefined;
            original_vesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegated_free?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegated_vesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            end_time?: string | undefined;
        } & {
            base_account?: ({
                address?: string | undefined;
                pub_key?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                account_number?: string | undefined;
                sequence?: string | undefined;
            } & {
                address?: string | undefined;
                pub_key?: ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["base_vesting_account"]["base_account"]["pub_key"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
                account_number?: string | undefined;
                sequence?: string | undefined;
            } & Record<Exclude<keyof I["base_vesting_account"]["base_account"], keyof BaseAccount>, never>) | undefined;
            original_vesting?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["base_vesting_account"]["original_vesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["base_vesting_account"]["original_vesting"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            delegated_free?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["base_vesting_account"]["delegated_free"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["base_vesting_account"]["delegated_free"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            delegated_vesting?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["base_vesting_account"]["delegated_vesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["base_vesting_account"]["delegated_vesting"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            end_time?: string | undefined;
        } & Record<Exclude<keyof I["base_vesting_account"], keyof BaseVestingAccount>, never>) | undefined;
        start_time?: string | undefined;
        vesting_periods?: ({
            length?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] & ({
            length?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            length?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["vesting_periods"][number]["amount"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["vesting_periods"][number]["amount"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["vesting_periods"][number], keyof Period>, never>)[] & Record<Exclude<keyof I["vesting_periods"], keyof {
            length?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof PeriodicVestingAccount>, never>>(object: I): PeriodicVestingAccount;
};
export declare const PermanentLockedAccount: {
    encode(message: PermanentLockedAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PermanentLockedAccount;
    fromJSON(object: any): PermanentLockedAccount;
    toJSON(message: PermanentLockedAccount): unknown;
    fromPartial<I extends {
        base_vesting_account?: {
            base_account?: {
                address?: string | undefined;
                pub_key?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                account_number?: string | undefined;
                sequence?: string | undefined;
            } | undefined;
            original_vesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegated_free?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegated_vesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            end_time?: string | undefined;
        } | undefined;
    } & {
        base_vesting_account?: ({
            base_account?: {
                address?: string | undefined;
                pub_key?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                account_number?: string | undefined;
                sequence?: string | undefined;
            } | undefined;
            original_vesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegated_free?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            delegated_vesting?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            end_time?: string | undefined;
        } & {
            base_account?: ({
                address?: string | undefined;
                pub_key?: {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } | undefined;
                account_number?: string | undefined;
                sequence?: string | undefined;
            } & {
                address?: string | undefined;
                pub_key?: ({
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & {
                    type_url?: string | undefined;
                    value?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["base_vesting_account"]["base_account"]["pub_key"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
                account_number?: string | undefined;
                sequence?: string | undefined;
            } & Record<Exclude<keyof I["base_vesting_account"]["base_account"], keyof BaseAccount>, never>) | undefined;
            original_vesting?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["base_vesting_account"]["original_vesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["base_vesting_account"]["original_vesting"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            delegated_free?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["base_vesting_account"]["delegated_free"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["base_vesting_account"]["delegated_free"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            delegated_vesting?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["base_vesting_account"]["delegated_vesting"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["base_vesting_account"]["delegated_vesting"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            end_time?: string | undefined;
        } & Record<Exclude<keyof I["base_vesting_account"], keyof BaseVestingAccount>, never>) | undefined;
    } & Record<Exclude<keyof I, "base_vesting_account">, never>>(object: I): PermanentLockedAccount;
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
//# sourceMappingURL=vesting.d.ts.map