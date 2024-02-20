import * as CosmosBaseV1beta1Coin from "../../base/v1beta1/coin.pb";
export declare type Params = {
    send_enabled?: SendEnabled[];
    default_send_enabled?: boolean;
};
export declare type SendEnabled = {
    denom?: string;
    enabled?: boolean;
};
export declare type Input = {
    address?: string;
    coins?: CosmosBaseV1beta1Coin.Coin[];
};
export declare type Output = {
    address?: string;
    coins?: CosmosBaseV1beta1Coin.Coin[];
};
export declare type Supply = {
    total?: CosmosBaseV1beta1Coin.Coin[];
};
export declare type DenomUnit = {
    denom?: string;
    exponent?: number;
    aliases?: string[];
};
export declare type Metadata = {
    description?: string;
    denom_units?: DenomUnit[];
    base?: string;
    display?: string;
    name?: string;
    symbol?: string;
};
//# sourceMappingURL=bank.pb.d.ts.map