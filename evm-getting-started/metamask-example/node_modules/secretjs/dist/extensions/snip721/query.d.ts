import { ComputeQuerier } from "../../query";
import { Permit, ViewingKey } from "../access_control";
import { GetTokenInfoResponse } from "./msg/GetTokenInfo";
import { Snip721GetTokensResponse } from "./msg/GetTokens";
interface SecretContract {
    address: string;
    codeHash: string;
}
interface Auth {
    permit?: Permit;
    viewer?: {
        viewing_key: ViewingKey;
        address: string;
    };
}
export declare class Snip721Querier extends ComputeQuerier {
    GetTokenInfo: ({ contract, auth, token_id, }: {
        contract: SecretContract;
        auth: Auth;
        token_id: string;
    }) => Promise<GetTokenInfoResponse>;
    GetOwnedTokens: ({ contract, auth, owner, }: {
        contract: SecretContract;
        auth: Auth;
        owner: string;
    }) => Promise<Snip721GetTokensResponse>;
}
export {};
//# sourceMappingURL=query.d.ts.map