"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributionQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/cosmos/distribution/v1beta1/query.pb");
class DistributionQuerier {
    constructor(url) {
        this.url = url;
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    validatorOutstandingRewards(req, headers) {
        return query_pb_1.Query.ValidatorOutstandingRewards(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    validatorCommission(req, headers) {
        return query_pb_1.Query.ValidatorCommission(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    validatorSlashes(req, headers) {
        return query_pb_1.Query.ValidatorSlashes(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    delegationRewards(req, headers) {
        return query_pb_1.Query.DelegationRewards(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    delegationTotalRewards(req, headers) {
        return query_pb_1.Query.DelegationTotalRewards(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    delegatorValidators(req, headers) {
        return query_pb_1.Query.DelegatorValidators(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    delegatorWithdrawAddress(req, headers) {
        return query_pb_1.Query.DelegatorWithdrawAddress(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    communityPool(req, headers) {
        return query_pb_1.Query.CommunityPool(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    foundationTax(req, headers) {
        return query_pb_1.Query.FoundationTax(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    restakeThreshold(req, headers) {
        return query_pb_1.Query.RestakeThreshold(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    restakingEntries(req, headers) {
        return query_pb_1.Query.RestakingEntries(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.DistributionQuerier = DistributionQuerier;
//# sourceMappingURL=distribution.js.map