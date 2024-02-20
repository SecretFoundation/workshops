import * as fm from "../../../fetch.pb";
export declare type QueryInterchainAccountFromAddressRequest = {
    owner?: string;
    connection_id?: string;
};
export declare type QueryInterchainAccountFromAddressResponse = {
    interchain_account_address?: string;
};
export declare class Query {
    static InterchainAccountFromAddress(req: QueryInterchainAccountFromAddressRequest, initReq?: fm.InitReq): Promise<QueryInterchainAccountFromAddressResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map