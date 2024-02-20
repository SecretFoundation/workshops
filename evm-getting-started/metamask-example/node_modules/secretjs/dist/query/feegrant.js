"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeegrantQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/cosmos/feegrant/v1beta1/query.pb");
class FeegrantQuerier {
    constructor(url) {
        this.url = url;
    }
    allowance(req, headers) {
        return query_pb_1.Query.Allowance(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    allowances(req, headers) {
        return query_pb_1.Query.Allowances(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    allowancesByGranter(req, headers) {
        return query_pb_1.Query.AllowancesByGranter(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.FeegrantQuerier = FeegrantQuerier;
//# sourceMappingURL=feegrant.js.map