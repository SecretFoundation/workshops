"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationQuerier = void 0;
const query_pb_1 = require("../grpc_gateway/secret/registration/v1beta1/query.pb");
class RegistrationQuerier {
    constructor(url) {
        this.url = url;
    }
    txKey(req, headers) {
        return query_pb_1.Query.TxKey(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    registrationKey(req, headers) {
        return query_pb_1.Query.RegistrationKey(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    encryptedSeed(req, headers) {
        return query_pb_1.Query.EncryptedSeed(req, {
            headers,
            pathPrefix: this.url,
        });
    }
}
exports.RegistrationQuerier = RegistrationQuerier;
//# sourceMappingURL=registration.js.map