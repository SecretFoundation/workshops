import { Coin, MsgParams } from ".";
import { AminoMsg, Msg, ProtoMsg } from "./types";
/**
 * CommissionRates defines the initial commission rates to be used for creating
 * a validator.
 */
export declare type CommissionRates = {
    /** rate is the commission rate charged to delegators, as a fraction. */
    rate: number;
    /** max_rate defines the maximum commission rate which validator can ever charge, as a fraction. */
    max_rate: number;
    /** max_change_rate defines the maximum daily increase of the validator commission, as a fraction. */
    max_change_rate: number;
};
/** Description defines a validator description. */
export declare type ValidatorDescription = {
    /** moniker defines a human-readable name for the validator. */
    moniker: string;
    /** identity defines an optional identity signature (ex. UPort or Keybase). */
    identity: string;
    /** website defines an optional website link. */
    website: string;
    /** security_contact defines an optional email for security contact. */
    security_contact: string;
    /** details define other optional details. */
    details: string;
};
export interface MsgCreateValidatorParams extends MsgParams {
    description: ValidatorDescription;
    commission: CommissionRates;
    /** minSelfDelegation is the minimum uscrt amount that
     * the self delegator must delegate to its validator. */
    min_self_delegation: string;
    /** selfDelegatorAddress is the self-delegator, which is the owner of the validator */
    delegator_address: string;
    /** pubkey is a base64 string representation of the validator's ed25519 pubkey (32 bytes).*/
    pubkey: string;
    /** initial delegation from the self-delegator to its validator */
    initial_delegation: Coin;
}
/** MsgCreateValidator defines an SDK message for creating a new validator. */
export declare class MsgCreateValidator implements Msg {
    params: MsgCreateValidatorParams;
    constructor(params: MsgCreateValidatorParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
export interface MsgEditValidatorParams extends MsgParams {
    validator_address: string;
    /** if description is provided it updates all values */
    description?: ValidatorDescription;
    commission_rate?: number;
    min_self_delegation?: string;
}
/** MsgEditValidator defines an SDK message for editing an existing validator. */
export declare class MsgEditValidator implements Msg {
    params: MsgEditValidatorParams;
    constructor(params: MsgEditValidatorParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
export interface MsgDelegateParams extends MsgParams {
    delegator_address: string;
    validator_address: string;
    amount: Coin;
}
/** MsgDelegate defines an SDK message for performing a delegation of coins from a delegator to a validator. */
export declare class MsgDelegate implements Msg {
    params: MsgDelegateParams;
    constructor(params: MsgDelegateParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
export interface MsgBeginRedelegateParams extends MsgParams {
    delegator_address: string;
    validator_src_address: string;
    validator_dst_address: string;
    amount: Coin;
}
/** MsgBeginRedelegate defines an SDK message for performing a redelegation of coins from a delegator and source validator to a destination validator. */
export declare class MsgBeginRedelegate implements Msg {
    params: MsgBeginRedelegateParams;
    constructor(params: MsgBeginRedelegateParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
export interface MsgUndelegateParams {
    delegator_address: string;
    validator_address: string;
    amount: Coin;
}
/** MsgUndelegate defines an SDK message for performing an undelegation from a delegate and a validator */
export declare class MsgUndelegate implements Msg {
    params: MsgUndelegateParams;
    constructor(params: MsgUndelegateParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
//# sourceMappingURL=staking.d.ts.map