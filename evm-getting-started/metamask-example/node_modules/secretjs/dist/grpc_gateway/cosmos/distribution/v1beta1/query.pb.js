"use strict";
/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
const fm = __importStar(require("../../../fetch.pb"));
class Query {
    static Params(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/params?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static ValidatorOutstandingRewards(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${req["validator_address"]}/outstanding_rewards?${fm.renderURLSearchParams(req, ["validator_address"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static ValidatorCommission(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${req["validator_address"]}/commission?${fm.renderURLSearchParams(req, ["validator_address"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static ValidatorSlashes(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/validators/${req["validator_address"]}/slashes?${fm.renderURLSearchParams(req, ["validator_address"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static DelegationRewards(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${req["delegator_address"]}/rewards/${req["validator_address"]}?${fm.renderURLSearchParams(req, ["delegator_address", "validator_address"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static DelegationTotalRewards(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${req["delegator_address"]}/rewards?${fm.renderURLSearchParams(req, ["delegator_address"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static DelegatorValidators(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${req["delegator_address"]}/validators?${fm.renderURLSearchParams(req, ["delegator_address"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static DelegatorWithdrawAddress(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/delegators/${req["delegator_address"]}/withdraw_address?${fm.renderURLSearchParams(req, ["delegator_address"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static CommunityPool(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/community_pool?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static FoundationTax(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/foundation_tax?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static RestakeThreshold(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/restake_threshold?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static RestakingEntries(req, initReq) {
        return fm.fetchReq(`/cosmos/distribution/v1beta1/restake_entries?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
}
exports.Query = Query;
//# sourceMappingURL=query.pb.js.map