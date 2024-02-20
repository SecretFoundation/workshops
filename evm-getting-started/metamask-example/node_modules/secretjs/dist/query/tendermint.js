"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TendermintQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/cosmos/base/tendermint/v1beta1/query.pb");
class TendermintQuerier {
    constructor(url) {
        this.url = url;
    }
    getNodeInfo(req, headers) {
        return query_pb_1.Service.GetNodeInfo(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    getSyncing(req, headers) {
        return query_pb_1.Service.GetSyncing(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    getLatestBlock(req, headers) {
        return query_pb_1.Service.GetLatestBlock(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    getBlockByHeight(req, headers) {
        return query_pb_1.Service.GetBlockByHeight(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    getLatestValidatorSet(req, headers) {
        return query_pb_1.Service.GetLatestValidatorSet(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    getValidatorSetByHeight(req, headers) {
        return query_pb_1.Service.GetValidatorSetByHeight(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.TendermintQuerier = TendermintQuerier;
//# sourceMappingURL=tendermint.js.map