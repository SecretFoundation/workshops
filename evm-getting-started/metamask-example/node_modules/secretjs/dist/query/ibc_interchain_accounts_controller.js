"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IbcInterchainAccountsControllerQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/ibc/applications/interchain_accounts/controller/v1/query.pb");
class IbcInterchainAccountsControllerQuerier {
    constructor(url) {
        this.url = url;
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    interchainAccount(req, headers) {
        return query_pb_1.Query.InterchainAccount(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.IbcInterchainAccountsControllerQuerier = IbcInterchainAccountsControllerQuerier;
//# sourceMappingURL=ibc_interchain_accounts_controller.js.map