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
exports.protobufPackage = "secret.emergencybutton.v1beta1";
function createBaseParams() {
    return { switch_status: "", pauser_address: "" };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.switch_status !== "") {
            writer.uint32(10).string(message.switch_status);
        }
        if (message.pauser_address !== "") {
            writer.uint32(18).string(message.pauser_address);
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
                    message.switch_status = reader.string();
                    break;
                case 2:
                    message.pauser_address = reader.string();
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
            switch_status: isSet(object.switch_status)
                ? String(object.switch_status)
                : "",
            pauser_address: isSet(object.pauser_address)
                ? String(object.pauser_address)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.switch_status !== undefined &&
            (obj.switch_status = message.switch_status);
        message.pauser_address !== undefined &&
            (obj.pauser_address = message.pauser_address);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseParams();
        message.switch_status = (_a = object.switch_status) !== null && _a !== void 0 ? _a : "";
        message.pauser_address = (_b = object.pauser_address) !== null && _b !== void 0 ? _b : "";
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
//# sourceMappingURL=params.js.map