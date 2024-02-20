"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IbcClientQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/ibc/core/client/v1/query.pb");
class IbcClientQuerier {
    constructor(url) {
        this.url = url;
    }
    clientState(req, headers) {
        return query_pb_1.Query.ClientState(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    clientStates(req, headers) {
        return query_pb_1.Query.ClientStates(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    consensusState(req, headers) {
        return query_pb_1.Query.ConsensusState(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    consensusStates(req, headers) {
        return query_pb_1.Query.ConsensusStates(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    clientStatus(req, headers) {
        return query_pb_1.Query.ClientStatus(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    clientParams(req, headers) {
        return query_pb_1.Query.ClientParams(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    upgradedClientState(req, headers) {
        return query_pb_1.Query.UpgradedClientState(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    upgradedConsensusState(req, headers) {
        return query_pb_1.Query.UpgradedConsensusState(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    consensusStateHeights(req, headers) {
        return query_pb_1.Query.ConsensusStateHeights(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.IbcClientQuerier = IbcClientQuerier;
//# sourceMappingURL=ibc_client.js.map