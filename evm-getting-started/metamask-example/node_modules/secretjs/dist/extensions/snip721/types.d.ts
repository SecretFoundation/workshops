export interface ViewerInfo {
    address: string;
    viewing_key: string;
}
export interface Trait {
    display_type?: string;
    trait_type?: string;
    value: string;
    max_value?: string;
}
export interface Authentication {
    key?: string;
    user?: string;
}
export interface MediaFile {
    file_type?: string;
    extension?: string;
    authentication?: Authentication;
    url: string;
}
export interface Extension {
    image?: string;
    image_data?: string;
    external_url?: string;
    description?: string;
    name?: string;
    attributes?: Trait[];
    media?: MediaFile[];
    protected_attributes: string[];
}
export interface Metadata {
    token_uri?: string;
    extension?: Extension;
}
export interface Snip721SendOptions {
    send_nft: {
        contract: string;
        token_id: string;
        msg?: object;
        memo?: string;
        receiver_info?: {
            recipient_code_hash: string;
            also_implements_batch_receive_nft?: boolean;
        };
    };
}
export interface Snip721AddMinterOptions {
    add_minters: {
        minters: string[];
    };
}
export interface Snip721MintOptions {
    mint_nft: {
        token_id?: string;
        owner?: string;
        public_metadata?: Metadata;
        private_metadata?: Metadata;
        serial_number?: string;
        memo?: string;
        royalty_info?: RoyaltyInfo;
    };
}
interface RoyaltyInfo {
    decimal_places_in_rates: string;
    royalties: Royalty[];
}
interface Royalty {
    recipient: string;
    rate: number;
}
export {};
//# sourceMappingURL=types.d.ts.map