import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../base/v1beta1/coin";
export declare const protobufPackage = "cosmos.distribution.v1beta1";
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
    delegator_address: string;
    withdraw_address: string;
}
/**
 * MsgEnableAutoRestake enables auto-restaking for a
 * a delegator-validator pair.
 */
export interface MsgSetAutoRestake {
    delegator_address: string;
    validator_address: string;
    enabled: boolean;
}
/** MsgAutoRestakeResponse defines the Msg/AutoRestakeResponse response type. */
export interface MsgSetAutoRestakeResponse {
}
/** MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type. */
export interface MsgSetWithdrawAddressResponse {
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export interface MsgWithdrawDelegatorReward {
    delegator_address: string;
    validator_address: string;
}
/** MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type. */
export interface MsgWithdrawDelegatorRewardResponse {
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export interface MsgWithdrawValidatorCommission {
    validator_address: string;
}
/** MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type. */
export interface MsgWithdrawValidatorCommissionResponse {
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export interface MsgFundCommunityPool {
    amount: Coin[];
    depositor: string;
}
/** MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type. */
export interface MsgFundCommunityPoolResponse {
}
export declare const MsgSetWithdrawAddress: {
    encode(message: MsgSetWithdrawAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgSetWithdrawAddress;
    fromJSON(object: any): MsgSetWithdrawAddress;
    toJSON(message: MsgSetWithdrawAddress): unknown;
    fromPartial<I extends {
        delegator_address?: string | undefined;
        withdraw_address?: string | undefined;
    } & {
        delegator_address?: string | undefined;
        withdraw_address?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgSetWithdrawAddress>, never>>(object: I): MsgSetWithdrawAddress;
};
export declare const MsgSetAutoRestake: {
    encode(message: MsgSetAutoRestake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgSetAutoRestake;
    fromJSON(object: any): MsgSetAutoRestake;
    toJSON(message: MsgSetAutoRestake): unknown;
    fromPartial<I extends {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        enabled?: boolean | undefined;
    } & {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
        enabled?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof MsgSetAutoRestake>, never>>(object: I): MsgSetAutoRestake;
};
export declare const MsgSetAutoRestakeResponse: {
    encode(_: MsgSetAutoRestakeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgSetAutoRestakeResponse;
    fromJSON(_: any): MsgSetAutoRestakeResponse;
    toJSON(_: MsgSetAutoRestakeResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSetAutoRestakeResponse;
};
export declare const MsgSetWithdrawAddressResponse: {
    encode(_: MsgSetWithdrawAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgSetWithdrawAddressResponse;
    fromJSON(_: any): MsgSetWithdrawAddressResponse;
    toJSON(_: MsgSetWithdrawAddressResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSetWithdrawAddressResponse;
};
export declare const MsgWithdrawDelegatorReward: {
    encode(message: MsgWithdrawDelegatorReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgWithdrawDelegatorReward;
    fromJSON(object: any): MsgWithdrawDelegatorReward;
    toJSON(message: MsgWithdrawDelegatorReward): unknown;
    fromPartial<I extends {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
    } & {
        delegator_address?: string | undefined;
        validator_address?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgWithdrawDelegatorReward>, never>>(object: I): MsgWithdrawDelegatorReward;
};
export declare const MsgWithdrawDelegatorRewardResponse: {
    encode(_: MsgWithdrawDelegatorRewardResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgWithdrawDelegatorRewardResponse;
    fromJSON(_: any): MsgWithdrawDelegatorRewardResponse;
    toJSON(_: MsgWithdrawDelegatorRewardResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgWithdrawDelegatorRewardResponse;
};
export declare const MsgWithdrawValidatorCommission: {
    encode(message: MsgWithdrawValidatorCommission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgWithdrawValidatorCommission;
    fromJSON(object: any): MsgWithdrawValidatorCommission;
    toJSON(message: MsgWithdrawValidatorCommission): unknown;
    fromPartial<I extends {
        validator_address?: string | undefined;
    } & {
        validator_address?: string | undefined;
    } & Record<Exclude<keyof I, "validator_address">, never>>(object: I): MsgWithdrawValidatorCommission;
};
export declare const MsgWithdrawValidatorCommissionResponse: {
    encode(_: MsgWithdrawValidatorCommissionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgWithdrawValidatorCommissionResponse;
    fromJSON(_: any): MsgWithdrawValidatorCommissionResponse;
    toJSON(_: MsgWithdrawValidatorCommissionResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgWithdrawValidatorCommissionResponse;
};
export declare const MsgFundCommunityPool: {
    encode(message: MsgFundCommunityPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgFundCommunityPool;
    fromJSON(object: any): MsgFundCommunityPool;
    toJSON(message: MsgFundCommunityPool): unknown;
    fromPartial<I extends {
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        depositor?: string | undefined;
    } & {
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
        depositor?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgFundCommunityPool>, never>>(object: I): MsgFundCommunityPool;
};
export declare const MsgFundCommunityPoolResponse: {
    encode(_: MsgFundCommunityPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgFundCommunityPoolResponse;
    fromJSON(_: any): MsgFundCommunityPoolResponse;
    toJSON(_: MsgFundCommunityPoolResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgFundCommunityPoolResponse;
};
/** Msg defines the distribution Msg service. */
export interface Msg {
    /**
     * SetWithdrawAddress defines a method to change the withdraw address
     * for a delegator (or validator self-delegation).
     */
    SetWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
    /**
     * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
     * from a single validator.
     */
    WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;
    /**
     * WithdrawValidatorCommission defines a method to withdraw the
     * full commission to the validator address.
     */
    WithdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse>;
    /**
     * FundCommunityPool defines a method to allow an account to directly
     * fund the community pool.
     */
    FundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
    /**
     * SetAutoRestake enables or disables automatic restaking for a delegator
     * validator pair
     */
    SetAutoRestake(request: MsgSetAutoRestake): Promise<MsgSetAutoRestakeResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    SetWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;
    WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;
    WithdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse>;
    FundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
    SetAutoRestake(request: MsgSetAutoRestake): Promise<MsgSetAutoRestakeResponse>;
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