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
exports.Service = exports.BroadcastMode = exports.OrderBy = void 0;
const fm = __importStar(require("../../../fetch.pb"));
var OrderBy;
(function (OrderBy) {
    OrderBy["ORDER_BY_UNSPECIFIED"] = "ORDER_BY_UNSPECIFIED";
    OrderBy["ORDER_BY_ASC"] = "ORDER_BY_ASC";
    OrderBy["ORDER_BY_DESC"] = "ORDER_BY_DESC";
})(OrderBy = exports.OrderBy || (exports.OrderBy = {}));
var BroadcastMode;
(function (BroadcastMode) {
    BroadcastMode["BROADCAST_MODE_UNSPECIFIED"] = "BROADCAST_MODE_UNSPECIFIED";
    BroadcastMode["BROADCAST_MODE_BLOCK"] = "BROADCAST_MODE_BLOCK";
    BroadcastMode["BROADCAST_MODE_SYNC"] = "BROADCAST_MODE_SYNC";
    BroadcastMode["BROADCAST_MODE_ASYNC"] = "BROADCAST_MODE_ASYNC";
})(BroadcastMode = exports.BroadcastMode || (exports.BroadcastMode = {}));
class Service {
    static Simulate(req, initReq) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/simulate`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static GetTx(req, initReq) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/txs/${req["hash"]}?${fm.renderURLSearchParams(req, ["hash"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static BroadcastTx(req, initReq) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/txs`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static GetTxsEvent(req, initReq) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/txs?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static GetBlockWithTxs(req, initReq) {
        return fm.fetchReq(`/cosmos/tx/v1beta1/txs/block/${req["height"]}?${fm.renderURLSearchParams(req, ["height"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
}
exports.Service = Service;
//# sourceMappingURL=service.pb.js.map