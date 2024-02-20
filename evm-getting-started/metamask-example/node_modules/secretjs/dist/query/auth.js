"use strict";
// For future wanderers:
// This file is written manually with a few goals in mind:
// 1. Proxy the auto-generated QueryClientImpl from "src/protobuf/cosmos/auth/v1beta1/query.tx" (See the "scripts/generate_protobuf.sh" script)
// 2. Convert the "account: Any" in the underlying types to the acctual account type
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/cosmos/auth/v1beta1/query.pb");
/** AuthQuerier is the query interface for the x/auth module */
class AuthQuerier {
    constructor(url) {
        this.url = url;
    }
    accounts(req, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            //@ts-ignore
            return query_pb_1.Query.Accounts(req, {
                headers,
                pathPrefix: this.url,
            });
        });
    }
    account(req, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            //@ts-ignore
            return query_pb_1.Query.Account(req, {
                headers,
                pathPrefix: this.url,
            });
        });
    }
    params(req, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return query_pb_1.Query.Params(req, {
                headers,
                pathPrefix: this.url,
            });
        });
    }
    moduleAccountByName(req, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            //@ts-ignore
            return query_pb_1.Query.ModuleAccountByName(req, {
                headers,
                pathPrefix: this.url,
            });
        });
    }
}
exports.AuthQuerier = AuthQuerier;
//# sourceMappingURL=auth.js.map