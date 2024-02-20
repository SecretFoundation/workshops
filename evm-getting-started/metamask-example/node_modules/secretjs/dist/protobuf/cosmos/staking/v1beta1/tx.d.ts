import * as _m0 from "protobufjs/minimal";
import { Description, CommissionRates } from "./staking";
import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
export declare const protobufPackage = "cosmos.staking.v1beta1";
/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidator {
    description?: Description;
    commission?: CommissionRates;
    min_self_delegation: string;
    delegator_address: string;
    validator_address: string;
    pubkey?: Any;
    value?: Coin;
}
/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponse {
}
/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidator {
    description?: Description;
    validator_address: string;
    /**
     * We pass a reference to the new commission rate and min self delegation as
     * it's not mandatory to update. If not updated, the deserialized rate will be
     * zero with no way to distinguish if an update was intended.
     * REF: #2373
     */
    commission_rate: string;
    min_self_delegation: string;
}
/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponse {
}
/**
 * MsgDelegate defines a SDK message for performing a delegation of coins
 * from a delegator to a validator.
 */
export interface MsgDelegate {
    delegator_address: string;
    validator_address: string;
    amount?: Coin;
}
/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponse {
}
/**
 * MsgBeginRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgBeginRedelegate {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
    amount?: Coin;
}
/** MsgBeginRedelegateResponse defines the Msg/BeginRedelegate response type. */
export interface MsgBeginRedelegateResponse {
    completion_time?: Timestamp;
}
/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegate {
    delegator_address: string;
    validator_address: string;
    amount?: Coin;
}
/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponse {
    completion_time?: Timestamp;
}
export declare const MsgCreateValidator: {
    encode(message: MsgCreateValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateValidator;
    fromJSON(object: any): MsgCreateValidator;
    toJSON(message: MsgCreateValidator): unknown;
    fromPartial<I extends {
        description?: {
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
        } | undefined;
        commission?: {
            rate?: string | undefined;
            max_rate?: string | undefined;
            max_change_rate?: string | undefined;
        } | undefined;
        min_self_delegation?: string | undefined;
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        pubkey?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        value?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        description?: ({
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
        } & {
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
        } & Record<Exclude<keyof I["description"], keyof Description>, never>) | undefined;
        commission?: ({
            rate?: string | undefined;
            max_rate?: string | undefined;
            max_change_rate?: string | undefined;
        } & {
            rate?: string | undefined;
            max_rate?: string | undefined;
            max_change_rate?: string | undefined;
        } & Record<Exclude<keyof I["commission"], keyof CommissionRates>, never>) | undefined;
        min_self_delegation?: string | undefined;
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        pubkey?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["pubkey"], keyof Any>, never>) | undefined;
        value?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["value"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgCreateValidator>, never>>(object: I): MsgCreateValidator;
};
export declare const MsgCreateValidatorResponse: {
    encode(_: MsgCreateValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgCreateValidatorResponse;
    fromJSON(_: any): MsgCreateValidatorResponse;
    toJSON(_: MsgCreateValidatorResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgCreateValidatorResponse;
};
export declare const MsgEditValidator: {
    encode(message: MsgEditValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgEditValidator;
    fromJSON(object: any): MsgEditValidator;
    toJSON(message: MsgEditValidator): unknown;
    fromPartial<I extends {
        description?: {
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
        } | undefined;
        validator_address?: string | undefined;
        commission_rate?: string | undefined;
        min_self_delegation?: string | undefined;
    } & {
        description?: ({
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
        } & {
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            security_contact?: string | undefined;
            details?: string | undefined;
        } & Record<Exclude<keyof I["description"], keyof Description>, never>) | undefined;
        validator_address?: string | undefined;
        commission_rate?: string | undefined;
        min_self_delegation?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgEditValidator>, never>>(object: I): MsgEditValidator;
};
export declare const MsgEditValidatorResponse: {
    encode(_: MsgEditValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgEditValidatorResponse;
    fromJSON(_: any): MsgEditValidatorResponse;
    toJSON(_: MsgEditValidatorResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgEditValidatorResponse;
};
export declare const MsgDelegate: {
    encode(message: MsgDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDelegate;
    fromJSON(object: any): MsgDelegate;
    toJSON(message: MsgDelegate): unknown;
    fromPartial<I extends {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgDelegate>, never>>(object: I): MsgDelegate;
};
export declare const MsgDelegateResponse: {
    encode(_: MsgDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgDelegateResponse;
    fromJSON(_: any): MsgDelegateResponse;
    toJSON(_: MsgDelegateResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDelegateResponse;
};
export declare const MsgBeginRedelegate: {
    encode(message: MsgBeginRedelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgBeginRedelegate;
    fromJSON(object: any): MsgBeginRedelegate;
    toJSON(message: MsgBeginRedelegate): unknown;
    fromPartial<I extends {
        delegator_address?: string | undefined;
        validator_src_address?: string | undefined;
        validator_dst_address?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        delegator_address?: string | undefined;
        validator_src_address?: string | undefined;
        validator_dst_address?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgBeginRedelegate>, never>>(object: I): MsgBeginRedelegate;
};
export declare const MsgBeginRedelegateResponse: {
    encode(message: MsgBeginRedelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgBeginRedelegateResponse;
    fromJSON(object: any): MsgBeginRedelegateResponse;
    toJSON(message: MsgBeginRedelegateResponse): unknown;
    fromPartial<I extends {
        completion_time?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        completion_time?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["completion_time"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, "completion_time">, never>>(object: I): MsgBeginRedelegateResponse;
};
export declare const MsgUndelegate: {
    encode(message: MsgUndelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUndelegate;
    fromJSON(object: any): MsgUndelegate;
    toJSON(message: MsgUndelegate): unknown;
    fromPartial<I extends {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["amount"], keyof Coin>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgUndelegate>, never>>(object: I): MsgUndelegate;
};
export declare const MsgUndelegateResponse: {
    encode(message: MsgUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUndelegateResponse;
    fromJSON(object: any): MsgUndelegateResponse;
    toJSON(message: MsgUndelegateResponse): unknown;
    fromPartial<I extends {
        completion_time?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
    } & {
        completion_time?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["completion_time"], keyof Timestamp>, never>) | undefined;
    } & Record<Exclude<keyof I, "completion_time">, never>>(object: I): MsgUndelegateResponse;
};
/** Msg defines the staking Msg service. */
export interface Msg {
    /** CreateValidator defines a method for creating a new validator. */
    CreateValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
    /** EditValidator defines a method for editing an existing validator. */
    EditValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
    /**
     * Delegate defines a method for performing a delegation of coins
     * from a delegator to a validator.
     */
    Delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
    /**
     * BeginRedelegate defines a method for performing a redelegation
     * of coins from a delegator and source validator to a destination validator.
     */
    BeginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse>;
    /**
     * Undelegate defines a method for performing an undelegation from a
     * delegate and a validator.
     */
    Undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
    EditValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
    Delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
    BeginRedelegate(request: MsgBeginRedelegate): Promise<MsgBeginRedelegateResponse>;
    Undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
//# sourceMappingURL=tx.d.ts.map