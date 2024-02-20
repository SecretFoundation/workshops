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
exports.EventRevoke = exports.EventGrant = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.authz.v1beta1";
function createBaseEventGrant() {
    return { msg_type_url: "", granter: "", grantee: "" };
}
exports.EventGrant = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.msg_type_url !== "") {
            writer.uint32(18).string(message.msg_type_url);
        }
        if (message.granter !== "") {
            writer.uint32(26).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventGrant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.msg_type_url = reader.string();
                    break;
                case 3:
                    message.granter = reader.string();
                    break;
                case 4:
                    message.grantee = reader.string();
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
            msg_type_url: isSet(object.msg_type_url)
                ? String(object.msg_type_url)
                : "",
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.msg_type_url !== undefined &&
            (obj.msg_type_url = message.msg_type_url);
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEventGrant();
        message.msg_type_url = (_a = object.msg_type_url) !== null && _a !== void 0 ? _a : "";
        message.granter = (_b = object.granter) !== null && _b !== void 0 ? _b : "";
        message.grantee = (_c = object.grantee) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseEventRevoke() {
    return { msg_type_url: "", granter: "", grantee: "" };
}
exports.EventRevoke = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.msg_type_url !== "") {
            writer.uint32(18).string(message.msg_type_url);
        }
        if (message.granter !== "") {
            writer.uint32(26).string(message.granter);
        }
        if (message.grantee !== "") {
            writer.uint32(34).string(message.grantee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEventRevoke();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.msg_type_url = reader.string();
                    break;
                case 3:
                    message.granter = reader.string();
                    break;
                case 4:
                    message.grantee = reader.string();
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
            msg_type_url: isSet(object.msg_type_url)
                ? String(object.msg_type_url)
                : "",
            granter: isSet(object.granter) ? String(object.granter) : "",
            grantee: isSet(object.grantee) ? String(object.grantee) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.msg_type_url !== undefined &&
            (obj.msg_type_url = message.msg_type_url);
        message.granter !== undefined && (obj.granter = message.granter);
        message.grantee !== undefined && (obj.grantee = message.grantee);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEventRevoke();
        message.msg_type_url = (_a = object.msg_type_url) !== null && _a !== void 0 ? _a : "";
        message.granter = (_b = object.granter) !== null && _b !== void 0 ? _b : "";
        message.grantee = (_c = object.grantee) !== null && _c !== void 0 ? _c : "";
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
//# sourceMappingURL=event.js.map