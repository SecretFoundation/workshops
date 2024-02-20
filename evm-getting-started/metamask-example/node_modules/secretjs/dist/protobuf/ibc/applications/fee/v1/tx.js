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
exports.MsgClientImpl = exports.MsgPayPacketFeeAsyncResponse = exports.MsgPayPacketFeeAsync = exports.MsgPayPacketFeeResponse = exports.MsgPayPacketFee = exports.MsgRegisterCounterpartyPayeeResponse = exports.MsgRegisterCounterpartyPayee = exports.MsgRegisterPayeeResponse = exports.MsgRegisterPayee = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const fee_1 = require("./fee");
const channel_1 = require("../../../core/channel/v1/channel");
exports.protobufPackage = "ibc.applications.fee.v1";
function createBaseMsgRegisterPayee() {
    return { port_id: "", channel_id: "", relayer: "", payee: "" };
}
exports.MsgRegisterPayee = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.relayer !== "") {
            writer.uint32(26).string(message.relayer);
        }
        if (message.payee !== "") {
            writer.uint32(34).string(message.payee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterPayee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    message.relayer = reader.string();
                    break;
                case 4:
                    message.payee = reader.string();
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
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            relayer: isSet(object.relayer) ? String(object.relayer) : "",
            payee: isSet(object.payee) ? String(object.payee) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.relayer !== undefined && (obj.relayer = message.relayer);
        message.payee !== undefined && (obj.payee = message.payee);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgRegisterPayee();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        message.relayer = (_c = object.relayer) !== null && _c !== void 0 ? _c : "";
        message.payee = (_d = object.payee) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgRegisterPayeeResponse() {
    return {};
}
exports.MsgRegisterPayeeResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterPayeeResponse();
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
        const message = createBaseMsgRegisterPayeeResponse();
        return message;
    },
};
function createBaseMsgRegisterCounterpartyPayee() {
    return { port_id: "", channel_id: "", relayer: "", counterparty_payee: "" };
}
exports.MsgRegisterCounterpartyPayee = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.port_id !== "") {
            writer.uint32(10).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(18).string(message.channel_id);
        }
        if (message.relayer !== "") {
            writer.uint32(26).string(message.relayer);
        }
        if (message.counterparty_payee !== "") {
            writer.uint32(34).string(message.counterparty_payee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterCounterpartyPayee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.port_id = reader.string();
                    break;
                case 2:
                    message.channel_id = reader.string();
                    break;
                case 3:
                    message.relayer = reader.string();
                    break;
                case 4:
                    message.counterparty_payee = reader.string();
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
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
            relayer: isSet(object.relayer) ? String(object.relayer) : "",
            counterparty_payee: isSet(object.counterparty_payee)
                ? String(object.counterparty_payee)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        message.relayer !== undefined && (obj.relayer = message.relayer);
        message.counterparty_payee !== undefined &&
            (obj.counterparty_payee = message.counterparty_payee);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgRegisterCounterpartyPayee();
        message.port_id = (_a = object.port_id) !== null && _a !== void 0 ? _a : "";
        message.channel_id = (_b = object.channel_id) !== null && _b !== void 0 ? _b : "";
        message.relayer = (_c = object.relayer) !== null && _c !== void 0 ? _c : "";
        message.counterparty_payee = (_d = object.counterparty_payee) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgRegisterCounterpartyPayeeResponse() {
    return {};
}
exports.MsgRegisterCounterpartyPayeeResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgRegisterCounterpartyPayeeResponse();
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
        const message = createBaseMsgRegisterCounterpartyPayeeResponse();
        return message;
    },
};
function createBaseMsgPayPacketFee() {
    return {
        fee: undefined,
        source_port_id: "",
        source_channel_id: "",
        signer: "",
        relayers: [],
    };
}
exports.MsgPayPacketFee = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.fee !== undefined) {
            fee_1.Fee.encode(message.fee, writer.uint32(10).fork()).ldelim();
        }
        if (message.source_port_id !== "") {
            writer.uint32(18).string(message.source_port_id);
        }
        if (message.source_channel_id !== "") {
            writer.uint32(26).string(message.source_channel_id);
        }
        if (message.signer !== "") {
            writer.uint32(34).string(message.signer);
        }
        for (const v of message.relayers) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPayPacketFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.fee = fee_1.Fee.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.source_port_id = reader.string();
                    break;
                case 3:
                    message.source_channel_id = reader.string();
                    break;
                case 4:
                    message.signer = reader.string();
                    break;
                case 5:
                    message.relayers.push(reader.string());
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
            fee: isSet(object.fee) ? fee_1.Fee.fromJSON(object.fee) : undefined,
            source_port_id: isSet(object.source_port_id)
                ? String(object.source_port_id)
                : "",
            source_channel_id: isSet(object.source_channel_id)
                ? String(object.source_channel_id)
                : "",
            signer: isSet(object.signer) ? String(object.signer) : "",
            relayers: Array.isArray(object === null || object === void 0 ? void 0 : object.relayers)
                ? object.relayers.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.fee !== undefined &&
            (obj.fee = message.fee ? fee_1.Fee.toJSON(message.fee) : undefined);
        message.source_port_id !== undefined &&
            (obj.source_port_id = message.source_port_id);
        message.source_channel_id !== undefined &&
            (obj.source_channel_id = message.source_channel_id);
        message.signer !== undefined && (obj.signer = message.signer);
        if (message.relayers) {
            obj.relayers = message.relayers.map((e) => e);
        }
        else {
            obj.relayers = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgPayPacketFee();
        message.fee =
            object.fee !== undefined && object.fee !== null
                ? fee_1.Fee.fromPartial(object.fee)
                : undefined;
        message.source_port_id = (_a = object.source_port_id) !== null && _a !== void 0 ? _a : "";
        message.source_channel_id = (_b = object.source_channel_id) !== null && _b !== void 0 ? _b : "";
        message.signer = (_c = object.signer) !== null && _c !== void 0 ? _c : "";
        message.relayers = ((_d = object.relayers) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
function createBaseMsgPayPacketFeeResponse() {
    return {};
}
exports.MsgPayPacketFeeResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPayPacketFeeResponse();
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
        const message = createBaseMsgPayPacketFeeResponse();
        return message;
    },
};
function createBaseMsgPayPacketFeeAsync() {
    return { packet_id: undefined, packet_fee: undefined };
}
exports.MsgPayPacketFeeAsync = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packet_id !== undefined) {
            channel_1.PacketId.encode(message.packet_id, writer.uint32(10).fork()).ldelim();
        }
        if (message.packet_fee !== undefined) {
            fee_1.PacketFee.encode(message.packet_fee, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPayPacketFeeAsync();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet_id = channel_1.PacketId.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.packet_fee = fee_1.PacketFee.decode(reader, reader.uint32());
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
            packet_id: isSet(object.packet_id)
                ? channel_1.PacketId.fromJSON(object.packet_id)
                : undefined,
            packet_fee: isSet(object.packet_fee)
                ? fee_1.PacketFee.fromJSON(object.packet_fee)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet_id !== undefined &&
            (obj.packet_id = message.packet_id
                ? channel_1.PacketId.toJSON(message.packet_id)
                : undefined);
        message.packet_fee !== undefined &&
            (obj.packet_fee = message.packet_fee
                ? fee_1.PacketFee.toJSON(message.packet_fee)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMsgPayPacketFeeAsync();
        message.packet_id =
            object.packet_id !== undefined && object.packet_id !== null
                ? channel_1.PacketId.fromPartial(object.packet_id)
                : undefined;
        message.packet_fee =
            object.packet_fee !== undefined && object.packet_fee !== null
                ? fee_1.PacketFee.fromPartial(object.packet_fee)
                : undefined;
        return message;
    },
};
function createBaseMsgPayPacketFeeAsyncResponse() {
    return {};
}
exports.MsgPayPacketFeeAsyncResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgPayPacketFeeAsyncResponse();
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
        const message = createBaseMsgPayPacketFeeAsyncResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.RegisterPayee = this.RegisterPayee.bind(this);
        this.RegisterCounterpartyPayee = this.RegisterCounterpartyPayee.bind(this);
        this.PayPacketFee = this.PayPacketFee.bind(this);
        this.PayPacketFeeAsync = this.PayPacketFeeAsync.bind(this);
    }
    RegisterPayee(request) {
        const data = exports.MsgRegisterPayee.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "RegisterPayee", data);
        return promise.then((data) => exports.MsgRegisterPayeeResponse.decode(new _m0.Reader(data)));
    }
    RegisterCounterpartyPayee(request) {
        const data = exports.MsgRegisterCounterpartyPayee.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "RegisterCounterpartyPayee", data);
        return promise.then((data) => exports.MsgRegisterCounterpartyPayeeResponse.decode(new _m0.Reader(data)));
    }
    PayPacketFee(request) {
        const data = exports.MsgPayPacketFee.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "PayPacketFee", data);
        return promise.then((data) => exports.MsgPayPacketFeeResponse.decode(new _m0.Reader(data)));
    }
    PayPacketFeeAsync(request) {
        const data = exports.MsgPayPacketFeeAsync.encode(request).finish();
        const promise = this.rpc.request("ibc.applications.fee.v1.Msg", "PayPacketFeeAsync", data);
        return promise.then((data) => exports.MsgPayPacketFeeAsyncResponse.decode(new _m0.Reader(data)));
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