"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IbcChannelQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/ibc/core/channel/v1/query.pb");
class IbcChannelQuerier {
    constructor(url) {
        this.url = url;
    }
    channel(req, headers) {
        return query_pb_1.Query.Channel(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    channels(req, headers) {
        return query_pb_1.Query.Channels(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    connectionChannels(req, headers) {
        return query_pb_1.Query.ConnectionChannels(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    channelClientState(req, headers) {
        return query_pb_1.Query.ChannelClientState(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    channelConsensusState(req, headers) {
        return query_pb_1.Query.ChannelConsensusState(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    packetCommitment(req, headers) {
        return query_pb_1.Query.PacketCommitment(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    packetCommitments(req, headers) {
        return query_pb_1.Query.PacketCommitments(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    packetReceipt(req, headers) {
        return query_pb_1.Query.PacketReceipt(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    packetAcknowledgement(req, headers) {
        return query_pb_1.Query.PacketAcknowledgement(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    packetAcknowledgements(req, headers) {
        return query_pb_1.Query.PacketAcknowledgements(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    unreceivedPackets(req, headers) {
        return query_pb_1.Query.UnreceivedPackets(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    unreceivedAcks(req, headers) {
        return query_pb_1.Query.UnreceivedAcks(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    nextSequenceReceive(req, headers) {
        return query_pb_1.Query.NextSequenceReceive(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.IbcChannelQuerier = IbcChannelQuerier;
//# sourceMappingURL=ibc_channel.js.map