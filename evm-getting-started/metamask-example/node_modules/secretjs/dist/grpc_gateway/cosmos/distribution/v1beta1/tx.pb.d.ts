import * as fm from "../../../fetch.pb";
import * as CosmosBaseV1beta1Coin from "../../base/v1beta1/coin.pb";
export declare type MsgSetWithdrawAddress = {
    delegator_address?: string;
    withdraw_address?: string;
};
export declare type MsgSetAutoRestake = {
    delegator_address?: string;
    validator_address?: string;
    enabled?: boolean;
};
export declare type MsgSetAutoRestakeResponse = {};
export declare type MsgSetWithdrawAddressResponse = {};
export declare type MsgWithdrawDelegatorReward = {
    delegator_address?: string;
    validator_address?: string;
};
export declare type MsgWithdrawDelegatorRewardResponse = {};
export declare type MsgWithdrawValidatorCommission = {
    validator_address?: string;
};
export declare type MsgWithdrawValidatorCommissionResponse = {};
export declare type MsgFundCommunityPool = {
    amount?: CosmosBaseV1beta1Coin.Coin[];
    depositor?: string;
};
export declare type MsgFundCommunityPoolResponse = {};
export declare class Msg {
    static SetWithdrawAddress(req: MsgSetWithdrawAddress, initReq?: fm.InitReq): Promise<MsgSetWithdrawAddressResponse>;
    static WithdrawDelegatorReward(req: MsgWithdrawDelegatorReward, initReq?: fm.InitReq): Promise<MsgWithdrawDelegatorRewardResponse>;
    static WithdrawValidatorCommission(req: MsgWithdrawValidatorCommission, initReq?: fm.InitReq): Promise<MsgWithdrawValidatorCommissionResponse>;
    static FundCommunityPool(req: MsgFundCommunityPool, initReq?: fm.InitReq): Promise<MsgFundCommunityPoolResponse>;
    static SetAutoRestake(req: MsgSetAutoRestake, initReq?: fm.InitReq): Promise<MsgSetAutoRestakeResponse>;
}
//# sourceMappingURL=tx.pb.d.ts.map