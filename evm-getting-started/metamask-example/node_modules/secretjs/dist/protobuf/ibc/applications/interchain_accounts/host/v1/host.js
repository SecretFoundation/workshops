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
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ibc.applications.interchain_accounts.host.v1";
function createBaseParams() {
    return { host_enabled: false, allow_messages: [] };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.host_enabled === true) {
            writer.uint32(8).bool(message.host_enabled);
        }
        for (const v of message.allow_messages) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.host_enabled = reader.bool();
                    break;
                case 2:
                    message.allow_messages.push(reader.string());
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
            host_enabled: isSet(object.host_enabled)
                ? Boolean(object.host_enabled)
                : false,
            allow_messages: Array.isArray(object === null || object === void 0 ? void 0 : object.allow_messages)
                ? object.allow_messages.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.host_enabled !== undefined &&
            (obj.host_enabled = message.host_enabled);
        if (message.allow_messages) {
            obj.allow_messages = message.allow_messages.map((e) => e);
        }
        else {
            obj.allow_messages = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseParams();
        message.host_enabled = (_a = object.host_enabled) !== null && _a !== void 0 ? _a : false;
        message.allow_messages = ((_b = object.allow_messages) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
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
//# sourceMappingURL=host.js.map