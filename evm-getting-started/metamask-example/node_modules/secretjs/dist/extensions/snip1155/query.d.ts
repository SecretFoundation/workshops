import { ComputeQuerier } from "../../query";
import { Permit, ViewingKey } from "../access_control";
import { QueryAllBalancesResponse, QueryBalanceResponse } from "./msg/getBalance";
import { QueryPrivateTokenInfoResponse } from "./msg/getPrivateTokenInfo";
import { QueryTokenIdPublicInfoResponse } from "./msg/getPublicTokenInfo";
import { QueryTransactionHistoryResponse } from "./msg/getTransactionHistory";
interface Auth {
    permit?: Permit;
    viewer?: {
        viewing_key: ViewingKey;
        address: string;
    };
}
interface SecretContract {
    address: string;
    code_hash?: string;
}
export declare class Snip1155Querier extends ComputeQuerier {
    getBalance: ({ contract, token_id, owner, auth, }: {
        contract: SecretContract;
        token_id: string;
        owner: string;
        auth: Auth;
    }) => Promise<QueryBalanceResponse>;
    getAllBalances: ({ contract, auth, owner, tx_history_page, tx_history_page_size, }: {
        contract: SecretContract;
        auth: Auth;
        owner?: string | undefined;
        tx_history_page?: number | undefined;
        tx_history_page_size?: number | undefined;
    }) => Promise<QueryAllBalancesResponse>;
    getTransactionHistory: ({ contract, auth, page_size, page, }: {
        contract: SecretContract;
        auth: Auth;
        page_size: number;
        page?: number | undefined;
    }) => Promise<QueryTransactionHistoryResponse>;
    getPublicTokenInfo: ({ contract, token_id, }: {
        contract: SecretContract;
        token_id: string;
    }) => Promise<QueryTokenIdPublicInfoResponse>;
    getPrivateTokenInfo: ({ contract, token_id, auth, }: {
        contract: SecretContract;
        token_id: string;
        auth: Auth;
    }) => Promise<QueryPrivateTokenInfoResponse>;
}
export {};
//# sourceMappingURL=query.d.ts.map