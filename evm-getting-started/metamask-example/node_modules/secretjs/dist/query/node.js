"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/cosmos/base/node/v1beta1/query.pb");
class NodeQuerier {
    constructor(url) {
        this.url = url;
    }
    config(req, headers) {
        return query_pb_1.Service.Config(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.NodeQuerier = NodeQuerier;
//# sourceMappingURL=node.js.map