"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MintQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/cosmos/mint/v1beta1/query.pb");
class MintQuerier {
    constructor(url) {
        this.url = url;
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    inflation(req, headers) {
        return query_pb_1.Query.Inflation(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    annualProvisions(req, headers) {
        return query_pb_1.Query.AnnualProvisions(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.MintQuerier = MintQuerier;
//# sourceMappingURL=mint.js.map