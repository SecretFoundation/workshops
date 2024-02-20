"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IbcPacketForwardQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/ibc/applications/packetforward/v1/query.pb");
class IbcPacketForwardQuerier {
    constructor(url) {
        this.url = url;
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.IbcPacketForwardQuerier = IbcPacketForwardQuerier;
//# sourceMappingURL=ibc_packet_forward.js.map