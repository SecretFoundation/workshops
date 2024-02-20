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
    static Channel(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}?${fm.renderURLSearchParams(req, ["channel_id", "port_id"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static Channels(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels?${fm.renderURLSearchParams(req, [])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static ConnectionChannels(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/connections/${req["connection"]}/channels?${fm.renderURLSearchParams(req, ["connection"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static ChannelClientState(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/client_state?${fm.renderURLSearchParams(req, ["channel_id", "port_id"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static ChannelConsensusState(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/consensus_state/revision/${req["revision_number"]}/height/${req["revision_height"]}?${fm.renderURLSearchParams(req, ["channel_id", "port_id", "revision_number", "revision_height"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static PacketCommitment(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/packet_commitments/${req["sequence"]}?${fm.renderURLSearchParams(req, ["channel_id", "port_id", "sequence"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static PacketCommitments(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/packet_commitments?${fm.renderURLSearchParams(req, ["channel_id", "port_id"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static PacketReceipt(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/packet_receipts/${req["sequence"]}?${fm.renderURLSearchParams(req, ["channel_id", "port_id", "sequence"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static PacketAcknowledgement(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/packet_acks/${req["sequence"]}?${fm.renderURLSearchParams(req, ["channel_id", "port_id", "sequence"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static PacketAcknowledgements(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/packet_acknowledgements?${fm.renderURLSearchParams(req, ["channel_id", "port_id"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static UnreceivedPackets(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/packet_commitments/${req["packet_commitment_sequences"]}/unreceived_packets?${fm.renderURLSearchParams(req, ["channel_id", "port_id", "packet_commitment_sequences"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static UnreceivedAcks(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/packet_commitments/${req["packet_ack_sequences"]}/unreceived_acks?${fm.renderURLSearchParams(req, ["channel_id", "port_id", "packet_ack_sequences"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
    static NextSequenceReceive(req, initReq) {
        return fm.fetchReq(`/ibc/core/channel/v1/channels/${req["channel_id"]}/ports/${req["port_id"]}/next_sequence?${fm.renderURLSearchParams(req, ["channel_id", "port_id"])}`, Object.assign(Object.assign({}, initReq), { method: "GET" }));
    }
}
exports.Query = Query;
//# sourceMappingURL=query.pb.js.map