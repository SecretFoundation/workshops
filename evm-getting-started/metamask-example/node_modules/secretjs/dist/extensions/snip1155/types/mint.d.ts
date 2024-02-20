import { Balance } from "./misc";
export declare type Snip1155MintTokensOptions = {
    mint_tokens: {
        mint_tokens: [
            {
                token_id: string;
                balances: Balance[];
            }
        ];
        memo?: string;
        padding?: string;
    };
};
export declare type Snip1155BurnTokensOptions = {
    burn_tokens: {
        burn_tokens: [
            {
                token_id: string;
                balances: Balance[];
            }
        ];
        memo?: string;
        padding?: string;
    };
};
//# sourceMappingURL=mint.d.ts.map