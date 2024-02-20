"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmergencyButtonQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/secret/emergencybutton/v1beta1/query.pb");
class EmergencyButtonQuerier {
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
exports.EmergencyButtonQuerier = EmergencyButtonQuerier;
//# sourceMappingURL=emergency_button.js.map