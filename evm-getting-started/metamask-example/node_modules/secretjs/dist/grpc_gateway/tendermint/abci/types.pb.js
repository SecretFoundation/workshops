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
exports.ABCIApplication = exports.ResponseApplySnapshotChunkResult = exports.ResponseOfferSnapshotResult = exports.EvidenceType = exports.CheckTxType = void 0;
const fm = __importStar(require("../../fetch.pb"));
var CheckTxType;
(function (CheckTxType) {
    CheckTxType["NEW"] = "NEW";
    CheckTxType["RECHECK"] = "RECHECK";
})(CheckTxType = exports.CheckTxType || (exports.CheckTxType = {}));
var EvidenceType;
(function (EvidenceType) {
    EvidenceType["UNKNOWN"] = "UNKNOWN";
    EvidenceType["DUPLICATE_VOTE"] = "DUPLICATE_VOTE";
    EvidenceType["LIGHT_CLIENT_ATTACK"] = "LIGHT_CLIENT_ATTACK";
})(EvidenceType = exports.EvidenceType || (exports.EvidenceType = {}));
var ResponseOfferSnapshotResult;
(function (ResponseOfferSnapshotResult) {
    ResponseOfferSnapshotResult["UNKNOWN"] = "UNKNOWN";
    ResponseOfferSnapshotResult["ACCEPT"] = "ACCEPT";
    ResponseOfferSnapshotResult["ABORT"] = "ABORT";
    ResponseOfferSnapshotResult["REJECT"] = "REJECT";
    ResponseOfferSnapshotResult["REJECT_FORMAT"] = "REJECT_FORMAT";
    ResponseOfferSnapshotResult["REJECT_SENDER"] = "REJECT_SENDER";
})(ResponseOfferSnapshotResult = exports.ResponseOfferSnapshotResult || (exports.ResponseOfferSnapshotResult = {}));
var ResponseApplySnapshotChunkResult;
(function (ResponseApplySnapshotChunkResult) {
    ResponseApplySnapshotChunkResult["UNKNOWN"] = "UNKNOWN";
    ResponseApplySnapshotChunkResult["ACCEPT"] = "ACCEPT";
    ResponseApplySnapshotChunkResult["ABORT"] = "ABORT";
    ResponseApplySnapshotChunkResult["RETRY"] = "RETRY";
    ResponseApplySnapshotChunkResult["RETRY_SNAPSHOT"] = "RETRY_SNAPSHOT";
    ResponseApplySnapshotChunkResult["REJECT_SNAPSHOT"] = "REJECT_SNAPSHOT";
})(ResponseApplySnapshotChunkResult = exports.ResponseApplySnapshotChunkResult || (exports.ResponseApplySnapshotChunkResult = {}));
class ABCIApplication {
    static Echo(req, initReq) {
        return fm.fetchReq(`/tendermint.abci.ABCIApplication/Echo`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static Flush(req, initReq) {
        return fm.fetchReq(`/tendermint.abci.ABCIApplication/Flush`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static Info(req, initReq) {
        return fm.fetchReq(`/tendermint.abci.ABCIApplication/Info`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static SetOption(req, initReq) {
        return fm.fetchReq(`/tendermint.abci.ABCIApplication/SetOption`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static DeliverTx(req, initReq) {
        return fm.fetchReq(`/tendermint.abci.ABCIApplication/DeliverTx`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static CheckTx(req, initReq) {
        return fm.fetchReq(`/tendermint.abci.ABCIApplication/CheckTx`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static Query(req, initReq) {
        return fm.fetchReq(`/tendermint.abci.ABCIApplication/Query`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static Commit(req, initReq) {
        return fm.fetchReq(`/tendermint.abci.ABCIApplication/Commit`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static InitChain(req, initReq) {
        return fm.fetchReq(`/tendermint.abci.ABCIApplication/InitChain`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static BeginBlock(req, initReq) {
        return fm.fetchReq(`/tendermint.abci.ABCIApplication/BeginBlock`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static EndBlock(req, initReq) {
        return fm.fetchReq(`/tendermint.abci.ABCIApplication/EndBlock`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static ListSnapshots(req, initReq) {
        return fm.fetchReq(`/tendermint.abci.ABCIApplication/ListSnapshots`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static OfferSnapshot(req, initReq) {
        return fm.fetchReq(`/tendermint.abci.ABCIApplication/OfferSnapshot`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static LoadSnapshotChunk(req, initReq) {
        return fm.fetchReq(`/tendermint.abci.ABCIApplication/LoadSnapshotChunk`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
    static ApplySnapshotChunk(req, initReq) {
        return fm.fetchReq(`/tendermint.abci.ABCIApplication/ApplySnapshotChunk`, Object.assign(Object.assign({}, initReq), { method: "POST", body: JSON.stringify(req, fm.replacer) }));
    }
}
exports.ABCIApplication = ABCIApplication;
//# sourceMappingURL=types.pb.js.map