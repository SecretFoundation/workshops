"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvidenceQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/cosmos/evidence/v1beta1/query.pb");
class EvidenceQuerier {
    constructor(url) {
        this.url = url;
    }
    evidence(req, headers) {
        return query_pb_1.Query.Evidence(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    allEvidence(req, headers) {
        return query_pb_1.Query.AllEvidence(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.EvidenceQuerier = EvidenceQuerier;
//# sourceMappingURL=evidence.js.map