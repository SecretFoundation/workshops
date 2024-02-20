"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthzQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/cosmos/authz/v1beta1/query.pb");
class AuthzQuerier {
    constructor(url) {
        this.url = url;
    }
    grants(req, headers) {
        return query_pb_1.Query.Grants(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    granterGrants(req, headers) {
        return query_pb_1.Query.GranterGrants(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    granteeGrants(req, headers) {
        return query_pb_1.Query.GranteeGrants(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.AuthzQuerier = AuthzQuerier;
//# sourceMappingURL=authz.js.map