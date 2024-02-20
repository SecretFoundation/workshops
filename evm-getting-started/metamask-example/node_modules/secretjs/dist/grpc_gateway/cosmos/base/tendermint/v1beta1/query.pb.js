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
exports.Service = void 0;
const fm = __importStar(require("../../../../fetch.pb"));
class Service {
    static GetNodeInfo(req, initReq) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/node_info?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static GetSyncing(req, initReq) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/syncing?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static GetLatestBlock(req, initReq) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/blocks/latest?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static GetBlockByHeight(req, initReq) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/blocks/${req["height"]}?${fm.renderURLSearchParams(req, ["height"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static GetLatestValidatorSet(req, initReq) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/validatorsets/latest?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static GetValidatorSetByHeight(req, initReq) {
        return fm.fetchReq(`/cosmos/base/tendermint/v1beta1/validatorsets/${req["height"]}?${fm.renderURLSearchParams(req, ["height"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
}
exports.Service = Service;
//# sourceMappingURL=query.pb.js.map