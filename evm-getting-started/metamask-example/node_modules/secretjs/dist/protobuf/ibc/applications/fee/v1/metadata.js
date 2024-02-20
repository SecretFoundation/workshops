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
exports.protobufPackage = "ibc.applications.fee.v1";
function createBaseMetadata() {
    return { fee_version: "", app_version: "" };
}
exports.Metadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fee_version !== "") {
            writer.uint32(10).string(message.fee_version);
        }
        if (message.app_version !== "") {
            writer.uint32(18).string(message.app_version);
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
                    message.fee_version = reader.string();
                    break;
                case 2:
                    message.app_version = reader.string();
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
            fee_version: isSet(object.fee_version) ? String(object.fee_version) : "",
            app_version: isSet(object.app_version) ? String(object.app_version) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.fee_version !== undefined &&
            (obj.fee_version = message.fee_version);
        message.app_version !== undefined &&
            (obj.app_version = message.app_version);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMetadata();
        message.fee_version = (_a = object.fee_version) !== null && _a !== void 0 ? _a : "";
        message.app_version = (_b = object.app_version) !== null && _b !== void 0 ? _b : "";
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