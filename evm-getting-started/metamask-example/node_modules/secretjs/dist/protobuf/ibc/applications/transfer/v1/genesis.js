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
const transfer_1 = require("./transfer");
exports.protobufPackage = "ibc.applications.transfer.v1";
function createBaseGenesisState() {
    return { port_id: "", denom_traces: [], params: undefined };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        for (const v of message.denom_traces) {
            transfer_1.DenomTrace.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.params !== undefined) {
            transfer_1.Params.encode(message.params, writer.uint32(26).fork()).ldelim();
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
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.denom_traces.push(transfer_1.DenomTrace.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.params = transfer_1.Params.decode(reader, reader.uint32());
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
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            denom_traces: Array.isArray(object === null || object === void 0 ? void 0 : object.denom_traces)
                ? object.denom_traces.map((e) => transfer_1.DenomTrace.fromJSON(e))
                : [],
            params: isSet(object.params) ? transfer_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        if (message.denom_traces) {
            obj.denom_traces = message.denom_traces.map((e) => e ? transfer_1.DenomTrace.toJSON(e) : undefined);
        }
        else {
            obj.denom_traces = [];
        }
        message.params !== undefined &&
            (obj.params = message.params ? transfer_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGenesisState();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.denom_traces =
            ((_b = object.denom_traces) === null || _b === void 0 ? void 0 : _b.map((e) => transfer_1.DenomTrace.fromPartial(e))) || [];
        message.params =
            object.params !== undefined && object.params !== null
                ? transfer_1.Params.fromPartial(object.params)
                : undefined;
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
//# sourceMappingURL=genesis.js.map