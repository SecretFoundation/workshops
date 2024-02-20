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
const fm = __importStar(require("../../../../fetch.pb"));
class Query {
    static ClientState(req, initReq) {
        return fm.fetchReq(`/ibc/core/client/v1/client_states/${req["client_id"]}?${fm.renderURLSearchParams(req, ["client_id"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static ClientStates(req, initReq) {
        return fm.fetchReq(`/ibc/core/client/v1/client_states?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static ConsensusState(req, initReq) {
        return fm.fetchReq(`/ibc/core/client/v1/consensus_states/${req["client_id"]}/revision/${req["revision_number"]}/height/${req["revision_height"]}?${fm.renderURLSearchParams(req, ["client_id", "revision_number", "revision_height"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static ConsensusStates(req, initReq) {
        return fm.fetchReq(`/ibc/core/client/v1/consensus_states/${req["client_id"]}?${fm.renderURLSearchParams(req, ["client_id"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static ConsensusStateHeights(req, initReq) {
        return fm.fetchReq(`/ibc/core/client/v1/consensus_states/${req["client_id"]}/heights?${fm.renderURLSearchParams(req, ["client_id"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static ClientStatus(req, initReq) {
        return fm.fetchReq(`/ibc/core/client/v1/client_status/${req["client_id"]}?${fm.renderURLSearchParams(req, ["client_id"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static ClientParams(req, initReq) {
        return fm.fetchReq(`/ibc/client/v1/params?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static UpgradedClientState(req, initReq) {
        return fm.fetchReq(`/ibc/core/client/v1/upgraded_client_states?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static UpgradedConsensusState(req, initReq) {
        return fm.fetchReq(`/ibc/core/client/v1/upgraded_consensus_states?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
}
exports.Query = Query;
//# sourceMappingURL=query.pb.js.map