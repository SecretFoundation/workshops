import { BaseAccount, ModuleAccount } from "../grpc_gateway/cosmos/auth/v1beta1/auth.pb";
import { QueryAccountRequest, QueryAccountsRequest, QueryParamsRequest, QueryParamsResponse } from "../grpc_gateway/cosmos/auth/v1beta1/query.pb";
import { PageResponse } from "../grpc_gateway/cosmos/base/query/v1beta1/pagination.pb";
import { ContinuousVestingAccount, DelayedVestingAccount } from "../grpc_gateway/cosmos/vesting/v1beta1/vesting.pb";
import { QueryModuleAccountByNameRequest } from "../protobuf/cosmos/auth/v1beta1/query";
export declare type Account = {
    "@type": "/cosmos.auth.v1beta1.BaseAccount" | "/cosmos.auth.v1beta1.ModuleAccount" | "/cosmos.vesting.v1beta1.ContinuousVestingAccount" | "/cosmos.vesting.v1beta1.DelayedVestingAccount";
} & (BaseAccount | ModuleAccount | ContinuousVestingAccount | DelayedVestingAccount);
/** AuthQuerier is the query interface for the x/auth module */
export declare class AuthQuerier {
    private url;
    constructor(url: string);
    accounts(req: QueryAccountsRequest, headers?: HeadersInit): Promise<{
        accounts?: Account[];
        pagination?: PageResponse;
    }>;
    account(req: QueryAccountRequest, headers?: HeadersInit): Promise<{
        account?: Account;
    }>;
    params(req: QueryParamsRequest, headers?: HeadersInit): Promise<QueryParamsResponse>;
    moduleAccountByName(req: QueryModuleAccountByNameRequest, headers?: HeadersInit): Promise<{
        account?: Account;
    }>;
}
//# sourceMappingURL=auth.d.ts.map