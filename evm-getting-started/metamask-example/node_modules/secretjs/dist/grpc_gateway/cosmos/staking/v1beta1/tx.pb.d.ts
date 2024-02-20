import * as fm from "../../../fetch.pb";
import * as GoogleProtobufAny from "../../../google/protobuf/any.pb";
import * as GoogleProtobufTimestamp from "../../../google/protobuf/timestamp.pb";
import * as CosmosBaseV1beta1Coin from "../../base/v1beta1/coin.pb";
import * as CosmosStakingV1beta1Staking from "./staking.pb";
export declare type MsgCreateValidator = {
    description?: CosmosStakingV1beta1Staking.Description;
    commission?: CosmosStakingV1beta1Staking.CommissionRates;
    min_self_delegation?: string;
    delegator_address?: string;
    validator_address?: string;
    pubkey?: GoogleProtobufAny.Any;
    value?: CosmosBaseV1beta1Coin.Coin;
};
export declare type MsgCreateValidatorResponse = {};
export declare type MsgEditValidator = {
    description?: CosmosStakingV1beta1Staking.Description;
    validator_address?: string;
    commission_rate?: string;
    min_self_delegation?: string;
};
export declare type MsgEditValidatorResponse = {};
export declare type MsgDelegate = {
    delegator_address?: string;
    validator_address?: string;
    amount?: CosmosBaseV1beta1Coin.Coin;
};
export declare type MsgDelegateResponse = {};
export declare type MsgBeginRedelegate = {
    delegator_address?: string;
    validator_src_address?: string;
    validator_dst_address?: string;
    amount?: CosmosBaseV1beta1Coin.Coin;
};
export declare type MsgBeginRedelegateResponse = {
    completion_time?: GoogleProtobufTimestamp.Timestamp;
};
export declare type MsgUndelegate = {
    delegator_address?: string;
    validator_address?: string;
    amount?: CosmosBaseV1beta1Coin.Coin;
};
export declare type MsgUndelegateResponse = {
    completion_time?: GoogleProtobufTimestamp.Timestamp;
};
export declare class Msg {
    static CreateValidator(req: MsgCreateValidator, initReq?: fm.InitReq): Promise<MsgCreateValidatorResponse>;
    static EditValidator(req: MsgEditValidator, initReq?: fm.InitReq): Promise<MsgEditValidatorResponse>;
    static Delegate(req: MsgDelegate, initReq?: fm.InitReq): Promise<MsgDelegateResponse>;
    static BeginRedelegate(req: MsgBeginRedelegate, initReq?: fm.InitReq): Promise<MsgBeginRedelegateResponse>;
    static Undelegate(req: MsgUndelegate, initReq?: fm.InitReq): Promise<MsgUndelegateResponse>;
}
//# sourceMappingURL=tx.pb.d.ts.map