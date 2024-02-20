"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/cosmos/bank/v1beta1/query.pb");
class BankQuerier {
    constructor(url) {
        this.url = url;
    }
    balance(req, headers) {
        return query_pb_1.Query.Balance(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    allBalances(req, headers) {
        return query_pb_1.Query.AllBalances(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    spendableBalances(req, headers) {
        return query_pb_1.Query.SpendableBalances(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    totalSupply(req, headers) {
        return query_pb_1.Query.TotalSupply(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    supplyOf(req, headers) {
        return query_pb_1.Query.SupplyOf(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    denomMetadata(req, headers) {
        return query_pb_1.Query.DenomMetadata(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    denomsMetadata(req, headers) {
        return query_pb_1.Query.DenomsMetadata(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.BankQuerier = BankQuerier;
//# sourceMappingURL=bank.js.map