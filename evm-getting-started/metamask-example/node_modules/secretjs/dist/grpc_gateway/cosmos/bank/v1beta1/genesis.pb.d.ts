import * as CosmosBaseV1beta1Coin from "../../base/v1beta1/coin.pb";
import * as CosmosBankV1beta1Bank from "./bank.pb";
export declare type GenesisState = {
    params?: CosmosBankV1beta1Bank.Params;
    balances?: Balance[];
    supply?: CosmosBaseV1beta1Coin.Coin[];
    denom_metadata?: CosmosBankV1beta1Bank.Metadata[];
};
export declare type Balance = {
    address?: string;
    coins?: CosmosBaseV1beta1Coin.Coin[];
};
//# sourceMappingURL=genesis.pb.d.ts.map