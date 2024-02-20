"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IbcConnectionQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/ibc/core/connection/v1/query.pb");
class IbcConnectionQuerier {
    constructor(url) {
        this.url = url;
    }
    connection(req, headers) {
        return query_pb_1.Query.Connection(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    connections(req, headers) {
        return query_pb_1.Query.Connections(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    clientConnections(req, headers) {
        return query_pb_1.Query.ClientConnections(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    connectionClientState(req, headers) {
        return query_pb_1.Query.ConnectionClientState(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    connectionConsensusState(req, headers) {
        return query_pb_1.Query.ConnectionConsensusState(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.IbcConnectionQuerier = IbcConnectionQuerier;
//# sourceMappingURL=ibc_connection.js.map