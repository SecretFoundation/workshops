"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GovQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/cosmos/gov/v1beta1/query.pb");
class GovQuerier {
    constructor(url) {
        this.url = url;
    }
    proposal(req, headers) {
        return query_pb_1.Query.Proposal(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    proposals(req, headers) {
        return query_pb_1.Query.Proposals(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    vote(req, headers) {
        return query_pb_1.Query.Vote(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    votes(req, headers) {
        return query_pb_1.Query.Votes(req, {
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
    deposit(req, headers) {
        return query_pb_1.Query.Deposit(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    deposits(req, headers) {
        return query_pb_1.Query.Deposits(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    tallyResult(req, headers) {
        return query_pb_1.Query.TallyResult(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.GovQuerier = GovQuerier;
//# sourceMappingURL=gov.js.map