"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlashingQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/cosmos/slashing/v1beta1/query.pb");
class SlashingQuerier {
    constructor(url) {
        this.url = url;
    }
    params(req, headers) {
        return query_pb_1.Query.Params(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    signingInfo(req, headers) {
        return query_pb_1.Query.SigningInfo(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    signingInfos(req, headers) {
        return query_pb_1.Query.SigningInfos(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.SlashingQuerier = SlashingQuerier;
//# sourceMappingURL=slashing.js.map