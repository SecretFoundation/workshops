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
exports.BlockStoreState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.store";
function createBaseBlockStoreState() {
    return { base: "0", height: "0" };
}
exports.BlockStoreState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.base !== "0") {
            writer.uint32(8).int64(message.base);
        }
        if (message.height !== "0") {
            writer.uint32(16).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlockStoreState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.base = longToString(reader.int64());
                    break;
                case 2:
                    message.height = longToString(reader.int64());
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
            base: isSet(object.base) ? String(object.base) : "0",
            height: isSet(object.height) ? String(object.height) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.base !== undefined && (obj.base = message.base);
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBlockStoreState();
        message.base = (_a = object.base) !== null && _a !== void 0 ? _a : "0";
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function longToString(long) {
    return long.toString();
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=types.js.map