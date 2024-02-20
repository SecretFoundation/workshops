"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MauthQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/secret/intertx/v1beta1/query.pb");
class MauthQuerier {
    constructor(url) {
        this.url = url;
    }
    interchainAccountFromAddress(req, headers) {
        return query_pb_1.Query.InterchainAccountFromAddress(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.MauthQuerier = MauthQuerier;
//# sourceMappingURL=mauth.js.map