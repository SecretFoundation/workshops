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
    static Validators(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static Validator(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${req["validator_addr"]}?${fm.renderURLSearchParams(req, ["validator_addr"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static ValidatorDelegations(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${req["validator_addr"]}/delegations?${fm.renderURLSearchParams(req, ["validator_addr"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static ValidatorUnbondingDelegations(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${req["validator_addr"]}/unbonding_delegations?${fm.renderURLSearchParams(req, ["validator_addr"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static Delegation(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${req["validator_addr"]}/delegations/${req["delegator_addr"]}?${fm.renderURLSearchParams(req, ["validator_addr", "delegator_addr"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static UnbondingDelegation(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/validators/${req["validator_addr"]}/delegations/${req["delegator_addr"]}/unbonding_delegation?${fm.renderURLSearchParams(req, ["validator_addr", "delegator_addr"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static DelegatorDelegations(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegations/${req["delegator_addr"]}?${fm.renderURLSearchParams(req, ["delegator_addr"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static DelegatorUnbondingDelegations(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${req["delegator_addr"]}/unbonding_delegations?${fm.renderURLSearchParams(req, ["delegator_addr"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static Redelegations(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${req["delegator_addr"]}/redelegations?${fm.renderURLSearchParams(req, ["delegator_addr"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static DelegatorValidators(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${req["delegator_addr"]}/validators?${fm.renderURLSearchParams(req, ["delegator_addr"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static DelegatorValidator(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/delegators/${req["delegator_addr"]}/validators/${req["validator_addr"]}?${fm.renderURLSearchParams(req, ["delegator_addr", "validator_addr"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static HistoricalInfo(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/historical_info/${req["height"]}?${fm.renderURLSearchParams(req, ["height"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static Pool(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/pool?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static Params(req, initReq) {
        return fm.fetchReq(`/cosmos/staking/v1beta1/params?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
}
exports.Query = Query;
//# sourceMappingURL=query.pb.js.map