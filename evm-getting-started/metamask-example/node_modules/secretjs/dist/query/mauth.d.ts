import { QueryInterchainAccountFromAddressRequest, QueryInterchainAccountFromAddressResponse } from "../grpc_gateway/secret/intertx/v1beta1/query.pb";
export declare class MauthQuerier {
    private url;
    constructor(url: string);
    interchainAccountFromAddress(req: QueryInterchainAccountFromAddressRequest, headers?: HeadersInit): Promise<QueryInterchainAccountFromAddressResponse>;
}
//# sourceMappingURL=mauth.d.ts.map