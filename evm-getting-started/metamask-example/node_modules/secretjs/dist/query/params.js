"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamsQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/cosmos/params/v1beta1/query.pb");
class ParamsQuerier {
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
exports.ParamsQuerier = ParamsQuerier;
//# sourceMappingURL=params.js.map