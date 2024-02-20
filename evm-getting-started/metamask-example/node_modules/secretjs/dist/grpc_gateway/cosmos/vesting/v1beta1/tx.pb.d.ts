import * as fm from "../../../fetch.pb";
import * as CosmosBaseV1beta1Coin from "../../base/v1beta1/coin.pb";
export declare type MsgCreateVestingAccount = {
    from_address?: string;
    to_address?: string;
    amount?: CosmosBaseV1beta1Coin.Coin[];
    end_time?: string;
    delayed?: boolean;
};
export declare type MsgCreateVestingAccountResponse = {};
export declare class Msg {
    static CreateVestingAccount(req: MsgCreateVestingAccount, initReq?: fm.InitReq): Promise<MsgCreateVestingAccountResponse>;
}
//# sourceMappingURL=tx.pb.d.ts.map