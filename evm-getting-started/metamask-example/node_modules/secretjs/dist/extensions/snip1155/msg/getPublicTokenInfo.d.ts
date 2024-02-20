import { Metadata, Snip1155TokenConfig } from "../types/misc";
export declare type QueryTokenIdPublicInfo = {
    token_id_public_info: {
        token_id: string;
    };
};
export declare type QueryTokenIdPublicInfoResponse = {
    token_id_public_info: {
        token_id_info: {
            token_id: string;
            name: string;
            symbol: string;
            token_config: Snip1155TokenConfig;
            public_metadata: Metadata;
            private_metadata: null;
            curator: string;
        };
        total_supply?: string;
        owner?: string;
    };
};
//# sourceMappingURL=getPublicTokenInfo.d.ts.map