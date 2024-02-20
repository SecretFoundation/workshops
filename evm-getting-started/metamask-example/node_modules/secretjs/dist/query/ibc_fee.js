"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IbcFeeQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/ibc/applications/fee/v1/query.pb");
class IbcFeeQuerier {
    constructor(url) {
        this.url = url;
    }
    incentivizedPackets(req, headers) {
        return query_pb_1.Query.IncentivizedPackets(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    incentivizedPacket(req, headers) {
        return query_pb_1.Query.IncentivizedPacket(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    incentivizedPacketsForChannel(req, headers) {
        return query_pb_1.Query.IncentivizedPacketsForChannel(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    totalRecvFees(req, headers) {
        return query_pb_1.Query.TotalRecvFees(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    totalAckFees(req, headers) {
        return query_pb_1.Query.TotalAckFees(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    totalTimeoutFees(req, headers) {
        return query_pb_1.Query.TotalTimeoutFees(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    payee(req, headers) {
        return query_pb_1.Query.Payee(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    counterpartyPayee(req, headers) {
        return query_pb_1.Query.CounterpartyPayee(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    feeEnabledChannels(req, headers) {
        return query_pb_1.Query.FeeEnabledChannels(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    feeEnabledChannel(req, headers) {
        return query_pb_1.Query.FeeEnabledChannel(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.IbcFeeQuerier = IbcFeeQuerier;
//# sourceMappingURL=ibc_fee.js.map