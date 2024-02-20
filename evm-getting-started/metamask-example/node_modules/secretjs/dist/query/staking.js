"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakingQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/cosmos/staking/v1beta1/query.pb");
class StakingQuerier {
    constructor(url) {
        this.url = url;
    }
    validators(req, headers) {
        return query_pb_1.Query.Validators(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    validator(req, headers) {
        return query_pb_1.Query.Validator(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    validatorDelegations(req, headers) {
        return query_pb_1.Query.ValidatorDelegations(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    validatorUnbondingDelegations(req, headers) {
        return query_pb_1.Query.ValidatorUnbondingDelegations(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    delegation(req, headers) {
        return query_pb_1.Query.Delegation(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    unbondingDelegation(req, headers) {
        return query_pb_1.Query.UnbondingDelegation(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    delegatorDelegations(req, headers) {
        return query_pb_1.Query.DelegatorDelegations(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    delegatorUnbondingDelegations(req, headers) {
        return query_pb_1.Query.DelegatorUnbondingDelegations(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    redelegations(req, headers) {
        return query_pb_1.Query.Redelegations(req, {
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
    delegatorValidator(req, headers) {
        return query_pb_1.Query.DelegatorValidator(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    historicalInfo(req, headers) {
        return query_pb_1.Query.HistoricalInfo(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    pool(req, headers) {
        return query_pb_1.Query.Pool(req, {
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
}
exports.StakingQuerier = StakingQuerier;
//# sourceMappingURL=staking.js.map