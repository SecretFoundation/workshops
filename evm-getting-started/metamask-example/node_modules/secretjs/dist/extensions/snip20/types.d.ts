import { ViewingKey } from "../access_control";
import { RichTx, Tx } from "./txTypes";
export interface GetAllowanceRequest {
    allowance: {
        owner: string;
        spender: string;
        key: ViewingKey;
    };
}
export interface GetAllowanceRequestWithPermit {
    with_permit: {
        permit: {};
        query: {
            allowance: {
                owner: string;
                spender: string;
            };
        };
    };
}
export interface GetAllowanceResponse {
    allowance: {
        owner: string;
        spender: string;
        allowance: string;
        expiration?: number;
    };
}
export interface GetBalanceRequest {
    balance: {
        address: string;
        key: ViewingKey;
    };
}
export interface GetBalanceRequestWithPermit {
    with_permit: {
        permit: {};
        query: {
            balance: {};
        };
    };
}
export interface GetBalanceResponse {
    balance: {
        amount: string;
    };
}
export interface GetTokenParamsRequest {
    token_info: {};
}
export interface GetTokenParamsResponse {
    token_info: {
        name: string;
        symbol: string;
        decimals: number;
        total_supply?: string;
    };
}
export interface GetTransferHistoryRequest {
    transfer_history: {
        address: string;
        key: string;
        page?: number;
        page_size: number;
        should_filter_decoys?: boolean;
    };
}
export interface GetTransferHistoryRequestWithPermit {
    with_permit: {
        permit: {};
        query: {
            transfer_history: {
                page?: number;
                page_size: number;
                should_filter_decoys?: boolean;
            };
        };
    };
}
export interface GetTransactionHistoryRequest {
    transaction_history: {
        address: string;
        key: string;
        page?: number;
        page_size: number;
        should_filter_decoys?: boolean;
    };
}
export interface GetTransactionHistoryRequestWithPermit {
    with_permit: {
        permit: {};
        query: {
            transaction_history: {
                page?: number;
                page_size: number;
                should_filter_decoys?: boolean;
            };
        };
    };
}
export interface TransferHistoryResponse {
    transfer_history: {
        txs: Tx[];
        total?: number;
    };
}
export interface TransactionHistoryResponse {
    transaction_history: {
        txs: RichTx[];
        total?: number;
    };
}
export interface Snip20SendOptions {
    send: {
        recipient: string;
        amount: string;
        msg?: string;
        padding?: string;
    };
}
export interface Snip20TransferOptions {
    transfer: {
        recipient: string;
        amount: string;
        padding?: string;
    };
}
export interface Snip20IncreaseAllowanceOptions {
    increase_allowance: {
        spender: string;
        amount: string;
        expiration?: number;
        padding?: string;
    };
}
export interface Snip20DecreaseAllowanceOptions {
    decrease_allowance: {
        spender: string;
        amount: string;
        expiration?: number;
        padding?: string;
    };
}
export interface Snip20SetViewingKeyOptions {
    set_viewing_key: {
        key: string;
        padding?: string;
    };
}
//# sourceMappingURL=types.d.ts.map