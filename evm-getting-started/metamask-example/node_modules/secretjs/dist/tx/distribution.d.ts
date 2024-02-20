import { Coin, MsgParams } from ".";
import { AminoMsg, Msg, ProtoMsg } from "./types";
export interface MsgSetWithdrawAddressParams extends MsgParams {
    delegator_address: string;
    withdraw_address: string;
}
/**
 * MsgSetWithdrawAddress sets the withdraw address for
 * a delegator (or validator self-delegation).
 */
export declare class MsgSetWithdrawAddress implements Msg {
    params: MsgSetWithdrawAddressParams;
    constructor(params: MsgSetWithdrawAddressParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
export { MsgSetWithdrawAddress as MsgModifyWithdrawAddress };
export { MsgWithdrawDelegatorReward as MsgWithdrawDelegationReward };
export interface MsgWithdrawDelegatorRewardParams extends MsgParams {
    delegator_address: string;
    validator_address: string;
}
/**
 * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 * from a single validator.
 */
export declare class MsgWithdrawDelegatorReward implements Msg {
    params: MsgWithdrawDelegatorRewardParams;
    constructor(params: MsgWithdrawDelegatorRewardParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
export interface MsgWithdrawValidatorCommissionParams extends MsgParams {
    validator_address: string;
}
/**
 * MsgWithdrawValidatorCommission withdraws the full commission to the validator
 * address.
 */
export declare class MsgWithdrawValidatorCommission implements Msg {
    params: MsgWithdrawValidatorCommissionParams;
    constructor(params: MsgWithdrawValidatorCommissionParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
export interface MsgFundCommunityPoolParams extends MsgParams {
    amount: Coin[];
    depositor: string;
}
/**
 * MsgFundCommunityPool allows an account to directly
 * fund the community pool.
 */
export declare class MsgFundCommunityPool implements Msg {
    params: MsgFundCommunityPoolParams;
    constructor(params: MsgFundCommunityPoolParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
export interface MsgSetAutoRestakeParams extends MsgParams {
    delegator_address: string;
    validator_address: string;
    enabled: boolean;
}
/**
 * MsgSetAutoRestake enables or disables auto-restaking for
 * a delegator-validator pair.
 */
export declare class MsgSetAutoRestake implements Msg {
    params: MsgSetAutoRestakeParams;
    constructor(params: MsgSetAutoRestakeParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
//# sourceMappingURL=distribution.d.ts.map