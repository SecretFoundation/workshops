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
    static ContractInfo(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/info/${req["contract_address"]}?${fm.renderURLSearchParams(req, ["contract_address"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static ContractsByCodeId(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/contracts/${req["code_id"]}?${fm.renderURLSearchParams(req, ["code_id"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static QuerySecretContract(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/query/${req["contract_address"]}?${fm.renderURLSearchParams(req, ["contract_address"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static Code(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/code/${req["code_id"]}?${fm.renderURLSearchParams(req, ["code_id"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static Codes(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/codes?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static CodeHashByContractAddress(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/code_hash/by_contract_address/${req["contract_address"]}?${fm.renderURLSearchParams(req, ["contract_address"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static CodeHashByCodeId(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/code_hash/by_code_id/${req["code_id"]}?${fm.renderURLSearchParams(req, ["code_id"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static LabelByAddress(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/label/${req["contract_address"]}?${fm.renderURLSearchParams(req, ["contract_address"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static AddressByLabel(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/contract_address/${req["label"]}?${fm.renderURLSearchParams(req, ["label"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static ContractHistory(req, initReq) {
        return fm.fetchReq(`/compute/v1beta1/contract_history/${req["contract_address"]}?${fm.renderURLSearchParams(req, ["contract_address"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
}
exports.Query = Query;
//# sourceMappingURL=query.pb.js.map