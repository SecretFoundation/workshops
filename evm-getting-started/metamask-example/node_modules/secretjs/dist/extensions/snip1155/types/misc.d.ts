export declare type Snip1155NFTTokenConfig = {
    nft: {
        minters: string[];
        public_total_supply: boolean;
        owner_is_public: boolean;
        enable_burn: boolean;
        owner_may_update_metadata: boolean;
        minter_may_update_metadata: boolean;
    };
};
export declare type Snip1155FungibleTokenConfig = {
    fungible: {
        minters: string[];
        decimals: number;
        public_total_supply: boolean;
        enable_mint: boolean;
        enable_burn: boolean;
        minter_may_update_metadata: boolean;
    };
};
export declare type Snip1155TokenConfig = Snip1155NFTTokenConfig | Snip1155FungibleTokenConfig;
export declare type Metadata = {
    token_uri?: string;
    extension?: any;
};
export declare type Snip1155TokenInfo = {
    token_id: string;
    name: string;
    symbol: string;
    token_config: Snip1155TokenConfig;
    public_metadata?: Metadata;
    private_metadata?: Metadata;
};
export declare type Balance = {
    address: string;
    amount: string;
};
export declare type Snip1155InitalToken = {
    token_info: Snip1155TokenInfo;
    balances: Balance[];
};
export declare type Snip1155InitMessageOptions = {
    has_admin: boolean;
    admin?: string;
    curators: string[];
    initial_tokens: Snip1155InitalToken[];
    entropy: string;
};
//# sourceMappingURL=misc.d.ts.map