import { Permit } from "../../access_control";
export declare type QueryBalanceWithViewingKey = {
    balance: {
        owner: string;
        viewer: string;
        key: string;
        token_id: string;
    };
};
export declare type QueryBalanceWithPermit = {
    with_permit: {
        permit: Permit;
        query: {
            balance: {
                owner: string;
                token_id: string;
            };
        };
    };
};
export declare type QueryBalanceResponse = {
    balance: {
        amount: string;
    };
};
export declare type QueryAllBalancesWithViewingKey = {
    all_balances: {
        owner: string;
        key: string;
        tx_history_page?: number;
        tx_history_page_size?: number;
    };
};
export declare type QueryAllBalancesWithPermit = {
    with_permit: {
        permit: Permit;
        query: {
            all_balances: {
                tx_history_page?: number;
                tx_history_page_size?: number;
            };
        };
    };
};
export declare type QueryAllBalancesResponse = {
    all_balances: [
        {
            token_id: string;
            amount: string;
        }
    ];
};
//# sourceMappingURL=getBalance.d.ts.map