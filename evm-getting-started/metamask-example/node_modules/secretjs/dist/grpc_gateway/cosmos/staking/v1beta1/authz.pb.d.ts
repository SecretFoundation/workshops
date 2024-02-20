import * as CosmosBaseV1beta1Coin from "../../base/v1beta1/coin.pb";
declare type Absent<T, K extends keyof T> = {
    [k in Exclude<keyof T, K>]?: undefined;
};
declare type OneOf<T> = {
    [k in keyof T]?: undefined;
} | (keyof T extends infer K ? (K extends string & keyof T ? {
    [k in K]: T[K];
} & Absent<T, K> : never) : never);
export declare enum AuthorizationType {
    AUTHORIZATION_TYPE_UNSPECIFIED = "AUTHORIZATION_TYPE_UNSPECIFIED",
    AUTHORIZATION_TYPE_DELEGATE = "AUTHORIZATION_TYPE_DELEGATE",
    AUTHORIZATION_TYPE_UNDELEGATE = "AUTHORIZATION_TYPE_UNDELEGATE",
    AUTHORIZATION_TYPE_REDELEGATE = "AUTHORIZATION_TYPE_REDELEGATE"
}
export declare type StakeAuthorizationValidators = {
    address?: string[];
};
declare type BaseStakeAuthorization = {
    max_tokens?: CosmosBaseV1beta1Coin.Coin;
    authorization_type?: AuthorizationType;
};
export declare type StakeAuthorization = BaseStakeAuthorization & OneOf<{
    allow_list: StakeAuthorizationValidators;
    deny_list: StakeAuthorizationValidators;
}>;
export {};
//# sourceMappingURL=authz.pb.d.ts.map