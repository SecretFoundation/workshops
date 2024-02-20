"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Metadata = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.applications.interchain_accounts.v1";
function createBaseMetadata() {
    return {
        version: "",
        controller_connection_id: "",
        host_connection_id: "",
        address: "",
        encoding: "",
        tx_type: "",
    };
}
exports.Metadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.controller_connection_id !== "") {
            writer.uint32(18).string(message.controller_connection_id);
        }
        if (message.host_connection_id !== "") {
            writer.uint32(26).string(message.host_connection_id);
        }
        if (message.address !== "") {
            writer.uint32(34).string(message.address);
        }
        if (message.encoding !== "") {
            writer.uint32(42).string(message.encoding);
        }
        if (message.tx_type !== "") {
            writer.uint32(50).string(message.tx_type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.controller_connection_id = reader.string();
                    break;
                case 3:
                    message.host_connection_id = reader.string();
                    break;
                case 4:
                    message.address = reader.string();
                    break;
                case 5:
                    message.encoding = reader.string();
                    break;
                case 6:
                    message.tx_type = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            version: isSet(object.version) ? String(object.version) : "",
            controller_connection_id: isSet(object.controller_connection_id)
                ? String(object.controller_connection_id)
                : "",
            host_connection_id: isSet(object.host_connection_id)
                ? String(object.host_connection_id)
                : "",
            address: isSet(object.address) ? String(object.address) : "",
            encoding: isSet(object.encoding) ? String(object.encoding) : "",
            tx_type: isSet(object.tx_type) ? String(object.tx_type) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.controller_connection_id !== undefined &&
            (obj.controller_connection_id = message.controller_connection_id);
        message.host_connection_id !== undefined &&
            (obj.host_connection_id = message.host_connection_id);
        message.address !== undefined && (obj.address = message.address);
        message.encoding !== undefined && (obj.encoding = message.encoding);
        message.tx_type !== undefined && (obj.tx_type = message.tx_type);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMetadata();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.controller_connection_id = (_b = object.controller_connection_id) !== null && _b !== void 0 ? _b : "";
        message.host_connection_id = (_c = object.host_connection_id) !== null && _c !== void 0 ? _c : "";
        message.address = (_d = object.address) !== null && _d !== void 0 ? _d : "";
        message.encoding = (_e = object.encoding) !== null && _e !== void 0 ? _e : "";
        message.tx_type = (_f = object.tx_type) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=metadata.js.map