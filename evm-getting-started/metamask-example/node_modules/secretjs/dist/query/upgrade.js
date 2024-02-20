"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpgradeQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/cosmos/upgrade/v1beta1/query.pb");
class UpgradeQuerier {
    constructor(url) {
        this.url = url;
    }
    currentPlan(req, headers) {
        return query_pb_1.Query.CurrentPlan(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    appliedPlan(req, headers) {
        return query_pb_1.Query.AppliedPlan(req, {
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
    moduleVersions(req, headers) {
        return query_pb_1.Query.ModuleVersions(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.UpgradeQuerier = UpgradeQuerier;
//# sourceMappingURL=upgrade.js.map