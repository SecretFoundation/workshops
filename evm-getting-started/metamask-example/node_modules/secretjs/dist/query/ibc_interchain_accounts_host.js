"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IbcInterchainAccountsHostQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/ibc/applications/interchain_accounts/host/v1/query.pb");
class IbcInterchainAccountsHostQuerier {
    constructor(url) {
        this.url = url;
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.IbcInterchainAccountsHostQuerier = IbcInterchainAccountsHostQuerier;
//# sourceMappingURL=ibc_interchain_accounts_host.js.map