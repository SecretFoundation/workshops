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
exports.MsgClientImpl = exports.MsgMultiSendResponse = exports.MsgMultiSend = exports.MsgSendResponse = exports.MsgSend = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../base/v1beta1/coin");
const bank_1 = require("./bank");
exports.protobufPackage = "cosmos.bank.v1beta1";
function createBaseMsgSend() {
    return { from_address: "", to_address: "", amount: [] };
}
exports.MsgSend = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.from_address !== "") {
            writer.uint32(10).string(message.from_address);
        }
        if (message.to_address !== "") {
            writer.uint32(18).string(message.to_address);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.from_address = reader.string();
                    break;
                case 2:
                    message.to_address = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
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
            from_address: isSet(object.from_address)
                ? String(object.from_address)
                : "",
            to_address: isSet(object.to_address) ? String(object.to_address) : "",
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount)
                ? object.amount.map((e) => coin_1.Coin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.from_address !== undefined &&
            (obj.from_address = message.from_address);
        message.to_address !== undefined && (obj.to_address = message.to_address);
        if (message.amount) {
            obj.amount = message.amount.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgSend();
        message.from_address = (_a = object.from_address) !== null && _a !== void 0 ? _a : "";
        message.to_address = (_b = object.to_address) !== null && _b !== void 0 ? _b : "";
        message.amount = ((_c = object.amount) === null || _c === void 0 ? void 0 : _c.map((e) => coin_1.Coin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgSendResponse() {
    return {};
}
exports.MsgSendResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSendResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgSendResponse();
        return message;
    },
};
function createBaseMsgMultiSend() {
    return { inputs: [], outputs: [] };
}
exports.MsgMultiSend = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.inputs) {
            bank_1.Input.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.outputs) {
            bank_1.Output.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMultiSend();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.inputs.push(bank_1.Input.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.outputs.push(bank_1.Output.decode(reader, reader.uint32()));
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
            inputs: Array.isArray(object === null || object === void 0 ? void 0 : object.inputs)
                ? object.inputs.map((e) => bank_1.Input.fromJSON(e))
                : [],
            outputs: Array.isArray(object === null || object === void 0 ? void 0 : object.outputs)
                ? object.outputs.map((e) => bank_1.Output.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.inputs) {
            obj.inputs = message.inputs.map((e) => (e ? bank_1.Input.toJSON(e) : undefined));
        }
        else {
            obj.inputs = [];
        }
        if (message.outputs) {
            obj.outputs = message.outputs.map((e) => e ? bank_1.Output.toJSON(e) : undefined);
        }
        else {
            obj.outputs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgMultiSend();
        message.inputs = ((_a = object.inputs) === null || _a === void 0 ? void 0 : _a.map((e) => bank_1.Input.fromPartial(e))) || [];
        message.outputs = ((_b = object.outputs) === null || _b === void 0 ? void 0 : _b.map((e) => bank_1.Output.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMsgMultiSendResponse() {
    return {};
}
exports.MsgMultiSendResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMultiSendResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgMultiSendResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Send = this.Send.bind(this);
        this.MultiSend = this.MultiSend.bind(this);
    }
    Send(request) {
        const data = exports.MsgSend.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "Send", data);
        return promise.then((data) => exports.MsgSendResponse.decode(new _m0.Reader(data)));
    }
    MultiSend(request) {
        const data = exports.MsgMultiSend.encode(request).finish();
        const promise = this.rpc.request("cosmos.bank.v1beta1.Msg", "MultiSend", data);
        return promise.then((data) => exports.MsgMultiSendResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map