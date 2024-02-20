import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Duration } from "../../../google/protobuf/duration";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
export declare const protobufPackage = "cosmos.feegrant.v1beta1";
/** Since: cosmos-sdk 0.43 */
/**
 * BasicAllowance implements Allowance with a one-time grant of tokens
 * that optionally expires. The grantee can use up to SpendLimit to cover fees.
 */
export interface BasicAllowance {
    /**
     * spend_limit specifies the maximum amount of tokens that can be spent
     * by this allowance and will be updated as tokens are spent. If it is
     * empty, there is no spend limit and any amount of coins can be spent.
     */
    spend_limit: Coin[];
    /** expiration specifies an optional time when this allowance expires */
    expiration?: Timestamp;
}
/**
 * PeriodicAllowance extends Allowance to allow for both a maximum cap,
 * as well as a limit per time period.
 */
export interface PeriodicAllowance {
    /** basic specifies a struct of `BasicAllowance` */
    basic?: BasicAllowance;
    /**
     * period specifies the time duration in which period_spend_limit coins can
     * be spent before that allowance is reset
     */
    period?: Duration;
    /**
     * period_spend_limit specifies the maximum number of coins that can be spent
     * in the period
     */
    period_spend_limit: Coin[];
    /** period_can_spend is the number of coins left to be spent before the period_reset time */
    period_can_spend: Coin[];
    /**
     * period_reset is the time at which this period resets and a new one begins,
     * it is calculated from the start time of the first transaction after the
     * last period ended
     */
    period_reset?: Timestamp;
}
/** AllowedMsgAllowance creates allowance only for specified message types. */
export interface AllowedMsgAllowance {
    /** allowance can be any of basic and filtered fee allowance. */
    allowance?: Any;
    /** allowed_messages are the messages for which the grantee has the access. */
    allowed_messages: string[];
}
/** Grant is stored in the KVStore to record a grant with full context */
export interface Grant {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic and filtered fee allowance. */
    allowance?: Any;
}
export declare const BasicAllowance: {
    encode(message: BasicAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BasicAllowance;
    fromJSON(object: any): BasicAllowance;
    toJSON(message: BasicAllowance): unknown;
    fromPartial<I extends {
        spend_limit?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        expiration?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        spend_limit?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["spend_limit"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["spend_limit"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        expiration?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["expiration"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof BasicAllowance>, never>>(object: I): BasicAllowance;
};
export declare const PeriodicAllowance: {
    encode(message: PeriodicAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PeriodicAllowance;
    fromJSON(object: any): PeriodicAllowance;
    toJSON(message: PeriodicAllowance): unknown;
    fromPartial<I extends {
        basic?: {
            spend_limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            expiration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        period?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
        period_spend_limit?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        period_can_spend?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        period_reset?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        basic?: ({
            spend_limit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            expiration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            spend_limit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["basic"]["spend_limit"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["basic"]["spend_limit"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            expiration?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["basic"]["expiration"], keyof Timestamp>, never>) | undefined;
        } & Record<Exclude<keyof I["basic"], keyof BasicAllowance>, never>) | undefined;
        period?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["period"], keyof Duration>, never>) | undefined;
        period_spend_limit?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["period_spend_limit"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["period_spend_limit"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        period_can_spend?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["period_can_spend"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["period_can_spend"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        period_reset?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["period_reset"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof PeriodicAllowance>, never>>(object: I): PeriodicAllowance;
};
export declare const AllowedMsgAllowance: {
    encode(message: AllowedMsgAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AllowedMsgAllowance;
    fromJSON(object: any): AllowedMsgAllowance;
    toJSON(message: AllowedMsgAllowance): unknown;
    fromPartial<I extends {
        allowance?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        allowed_messages?: string[] | undefined;
    } & {
        allowance?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["allowance"], keyof Any>, never>) | undefined;
        allowed_messages?: (string[] & string[] & Record<Exclude<keyof I["allowed_messages"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof AllowedMsgAllowance>, never>>(object: I): AllowedMsgAllowance;
};
export declare const Grant: {
    encode(message: Grant, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Grant;
    fromJSON(object: any): Grant;
    toJSON(message: Grant): unknown;
    fromPartial<I extends {
        granter?: string | undefined;
        grantee?: string | undefined;
        allowance?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        granter?: string | undefined;
        grantee?: string | undefined;
        allowance?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["allowance"], keyof Any>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Grant>, never>>(object: I): Grant;
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
//# sourceMappingURL=feegrant.d.ts.map