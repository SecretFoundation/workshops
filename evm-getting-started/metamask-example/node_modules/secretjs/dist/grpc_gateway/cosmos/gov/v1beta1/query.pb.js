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
    static Proposal(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${req["proposal_id"]}?${fm.renderURLSearchParams(req, ["proposal_id"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static Proposals(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static Vote(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${req["proposal_id"]}/votes/${req["voter"]}?${fm.renderURLSearchParams(req, ["proposal_id", "voter"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static Votes(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${req["proposal_id"]}/votes?${fm.renderURLSearchParams(req, ["proposal_id"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static Params(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/params/${req["params_type"]}?${fm.renderURLSearchParams(req, ["params_type"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static Deposit(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${req["proposal_id"]}/deposits/${req["depositor"]}?${fm.renderURLSearchParams(req, ["proposal_id", "depositor"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static Deposits(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${req["proposal_id"]}/deposits?${fm.renderURLSearchParams(req, ["proposal_id"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static TallyResult(req, initReq) {
        return fm.fetchReq(`/cosmos/gov/v1beta1/proposals/${req["proposal_id"]}/tally?${fm.renderURLSearchParams(req, ["proposal_id"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
}
exports.Query = Query;
//# sourceMappingURL=query.pb.js.map