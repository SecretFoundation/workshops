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
    static IncentivizedPackets(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/incentivized_packets?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static IncentivizedPacket(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/channels/${req["packet_id.channel_id"]}/ports/${req["packet_id.port_id"]}/sequences/${req["packet_id.sequence"]}/incentivized_packet?${fm.renderURLSearchParams(req, ["packet_id.channel_id", "packet_id.port_id", "packet_id.sequence"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static IncentivizedPacketsForChannel(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/incentivized_packets?${fm.renderURLSearchParams(req, ["channel_id", "port_id"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static TotalRecvFees(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/channels/${req["packet_id.channel_id"]}/ports/${req["packet_id.port_id"]}/sequences/${req["packet_id.sequence"]}/total_recv_fees?${fm.renderURLSearchParams(req, ["packet_id.channel_id", "packet_id.port_id", "packet_id.sequence"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static TotalAckFees(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/channels/${req["packet_id.channel_id"]}/ports/${req["packet_id.port_id"]}/sequences/${req["packet_id.sequence"]}/total_ack_fees?${fm.renderURLSearchParams(req, ["packet_id.channel_id", "packet_id.port_id", "packet_id.sequence"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static TotalTimeoutFees(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/channels/${req["packet_id.channel_id"]}/ports/${req["packet_id.port_id"]}/sequences/${req["packet_id.sequence"]}/total_timeout_fees?${fm.renderURLSearchParams(req, ["packet_id.channel_id", "packet_id.port_id", "packet_id.sequence"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static Payee(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/channels/${req["channel_id"]}/relayers/${req["relayer"]}/payee?${fm.renderURLSearchParams(req, ["channel_id", "relayer"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static CounterpartyPayee(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/channels/${req["channel_id"]}/relayers/${req["relayer"]}/counterparty_payee?${fm.renderURLSearchParams(req, ["channel_id", "relayer"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static FeeEnabledChannels(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/fee_enabled?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static FeeEnabledChannel(req, initReq) {
        return fm.fetchReq(`/ibc/apps/fee/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/fee_enabled?${fm.renderURLSearchParams(req, ["channel_id", "port_id"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
}
exports.Query = Query;
//# sourceMappingURL=query.pb.js.map