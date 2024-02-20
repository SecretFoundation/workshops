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
exports.MsgClientImpl = exports.MsgTransferResponse = exports.MsgTransfer = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../../cosmos/base/v1beta1/coin");
const client_1 = require("../../../core/client/v1/client");
exports.protobufPackage = "ibc.applications.transfer.v1";
function createBaseMsgTransfer() {
    return {
        source_port: "",
        source_channel: "",
        token: undefined,
        sender: "",
        receiver: "",
        timeout_height: undefined,
        timeout_timestamp: "0",
        memo: "",
    };
}
exports.MsgTransfer = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.source_port !== "") {
            writer.uint32(10).string(message.source_port);
        }
        if (message.source_channel !== "") {
            writer.uint32(18).string(message.source_channel);
        }
        if (message.token !== undefined) {
            coin_1.Coin.encode(message.token, writer.uint32(26).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        if (message.receiver !== "") {
            writer.uint32(42).string(message.receiver);
        }
        if (message.timeout_height !== undefined) {
            client_1.Height.encode(message.timeout_height, writer.uint32(50).fork()).ldelim();
        }
        if (message.timeout_timestamp !== "0") {
            writer.uint32(56).uint64(message.timeout_timestamp);
        }
        if (message.memo !== "") {
            writer.uint32(66).string(message.memo);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransfer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.source_port = reader.string();
                    break;
                case 2:
                    message.source_channel = reader.string();
                    break;
                case 3:
                    message.token = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.sender = reader.string();
                    break;
                case 5:
                    message.receiver = reader.string();
                    break;
                case 6:
                    message.timeout_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.timeout_timestamp = longToString(reader.uint64());
                    break;
                case 8:
                    message.memo = reader.string();
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
            source_port: isSet(object.source_port) ? String(object.source_port) : "",
            source_channel: isSet(object.source_channel)
                ? String(object.source_channel)
                : "",
            token: isSet(object.token) ? coin_1.Coin.fromJSON(object.token) : undefined,
            sender: isSet(object.sender) ? String(object.sender) : "",
            receiver: isSet(object.receiver) ? String(object.receiver) : "",
            timeout_height: isSet(object.timeout_height)
                ? client_1.Height.fromJSON(object.timeout_height)
                : undefined,
            timeout_timestamp: isSet(object.timeout_timestamp)
                ? String(object.timeout_timestamp)
                : "0",
            memo: isSet(object.memo) ? String(object.memo) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.source_port !== undefined &&
            (obj.source_port = message.source_port);
        message.source_channel !== undefined &&
            (obj.source_channel = message.source_channel);
        message.token !== undefined &&
            (obj.token = message.token ? coin_1.Coin.toJSON(message.token) : undefined);
        message.sender !== undefined && (obj.sender = message.sender);
        message.receiver !== undefined && (obj.receiver = message.receiver);
        message.timeout_height !== undefined &&
            (obj.timeout_height = message.timeout_height
                ? client_1.Height.toJSON(message.timeout_height)
                : undefined);
        message.timeout_timestamp !== undefined &&
            (obj.timeout_timestamp = message.timeout_timestamp);
        message.memo !== undefined && (obj.memo = message.memo);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMsgTransfer();
        message.source_port = (_a = object.source_port) !== null && _a !== void 0 ? _a : "";
        message.source_channel = (_b = object.source_channel) !== null && _b !== void 0 ? _b : "";
        message.token =
            object.token !== undefined && object.token !== null
                ? coin_1.Coin.fromPartial(object.token)
                : undefined;
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : "";
        message.receiver = (_d = object.receiver) !== null && _d !== void 0 ? _d : "";
        message.timeout_height =
            object.timeout_height !== undefined && object.timeout_height !== null
                ? client_1.Height.fromPartial(object.timeout_height)
                : undefined;
        message.timeout_timestamp = (_e = object.timeout_timestamp) !== null && _e !== void 0 ? _e : "0";
        message.memo = (_f = object.memo) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseMsgTransferResponse() {
    return { sequence: "0" };
}
exports.MsgTransferResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sequence !== "0") {
            writer.uint32(8).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgTransferResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = longToString(reader.uint64());
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
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = message.sequence);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgTransferResponse();
        message.sequence = (_a = object.sequence) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Transfer = this.Transfer.bind(this);
    }
    Transfer(request) {
        const data = exports.MsgTransfer.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.transfer.v1.Msg", "Transfer", data);
        return promise.then((data) => exports.MsgTransferResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
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
//# sourceMappingURL=tx.js.map