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
    static Grants(req, initReq) {
        return fm.fetchReq(`/cosmos/authz/v1beta1/grants?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static GranterGrants(req, initReq) {
        return fm.fetchReq(`/cosmos/authz/v1beta1/grants/granter/${req["granter"]}?${fm.renderURLSearchParams(req, ["granter"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static GranteeGrants(req, initReq) {
        return fm.fetchReq(`/cosmos/authz/v1beta1/grants/grantee/${req["grantee"]}?${fm.renderURLSearchParams(req, ["grantee"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
}
exports.Query = Query;
//# sourceMappingURL=query.pb.js.map