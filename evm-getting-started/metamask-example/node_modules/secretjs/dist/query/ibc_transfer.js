"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IbcTransferQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/ibc/applications/transfer/v1/query.pb");
class IbcTransferQuerier {
    constructor(url) {
        this.url = url;
    }
    denomTrace(req, headers) {
        return query_pb_1.Query.DenomTrace(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    denomTraces(req, headers) {
        return query_pb_1.Query.DenomTraces(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    denomHash(req, headers) {
        return query_pb_1.Query.DenomHash(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    escrowAddress(req, headers) {
        return query_pb_1.Query.EscrowAddress(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.IbcTransferQuerier = IbcTransferQuerier;
//# sourceMappingURL=ibc_transfer.js.map