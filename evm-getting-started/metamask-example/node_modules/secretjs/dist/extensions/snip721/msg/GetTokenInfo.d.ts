import { Permit } from "../../access_control";
import { Extension, ViewerInfo } from "../types";
export interface GetTokenInfoRequest {
    all_nft_info: {
        token_id: string;
        viewer?: ViewerInfo;
    };
}
export interface GetTokenInfoRequestWithPermit {
    with_permit: {
        query: {
            all_nft_info: {
                token_id: string;
            };
        };
        permit: Permit;
    };
}
export interface Metadata {
    token_uri?: string;
    extension?: Extension;
}
export interface Cw721OwnerOfResponse {
    owner?: string;
    approvals: string[];
}
export interface GetTokenInfoResponse {
    all_nft_info: {
        access: Cw721OwnerOfResponse;
        info?: Metadata;
    };
    token_id: string;
}
//# sourceMappingURL=GetTokenInfo.d.ts.map