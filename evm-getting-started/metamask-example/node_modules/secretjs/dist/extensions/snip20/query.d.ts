import { ComputeQuerier } from "../../";
import { Permit, ViewingKey } from "../access_control";
import { GetAllowanceResponse, GetBalanceResponse, GetTokenParamsResponse, TransactionHistoryResponse, TransferHistoryResponse } from "./types";
interface SecretContract {
    address: string;
    code_hash: string;
}
export declare class Snip20Querier extends ComputeQuerier {
    getSnip20Params: ({ contract, }: {
        contract: SecretContract;
    }) => Promise<GetTokenParamsResponse>;
    getBalance: ({ contract, address, auth, }: {
        contract: SecretContract;
        address: string;
        auth: {
            permit?: Permit;
            key?: ViewingKey;
        };
    }) => Promise<GetBalanceResponse>;
    getTransferHistory: ({ contract, address, auth, page, page_size, should_filter_decoys, }: {
        contract: SecretContract;
        address: string;
        auth: {
            permit?: Permit;
            key?: ViewingKey;
        };
        page?: number | undefined;
        page_size: number;
        should_filter_decoys?: boolean | undefined;
    }) => Promise<TransferHistoryResponse>;
    getTransactionHistory: ({ contract, address, auth, page, page_size, should_filter_decoys, }: {
        contract: SecretContract;
        address: string;
        auth: {
            permit?: Permit;
            key?: ViewingKey;
        };
        page?: number | undefined;
        page_size: number;
        should_filter_decoys?: boolean | undefined;
    }) => Promise<TransactionHistoryResponse>;
    GetAllowance: ({ contract, owner, spender, auth, }: {
        contract: SecretContract;
        owner: string;
        spender: string;
        auth: {
            permit?: Permit;
            key?: ViewingKey;
        };
    }) => Promise<GetAllowanceResponse>;
}
export {};
//# sourceMappingURL=query.d.ts.map