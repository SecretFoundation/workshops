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
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const any_1 = require("../../../google/protobuf/any");
exports.protobufPackage = "cosmos.evidence.v1beta1";
function createBaseGenesisState() {
    return { evidence: [] };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.evidence) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence.push(any_1.Any.decode(reader, reader.uint32()));
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
            evidence: Array.isArray(object === null || object === void 0 ? void 0 : object.evidence)
                ? object.evidence.map((e) => any_1.Any.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map((e) => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.evidence = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState();
        message.evidence = ((_a = object.evidence) === null || _a === void 0 ? void 0 : _a.map((e) => any_1.Any.fromPartial(e))) || [];
        return message;
    },
};
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
//# sourceMappingURL=genesis.js.map