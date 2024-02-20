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
exports.AuthSigMessage = exports.Packet = exports.PacketMsg = exports.PacketPong = exports.PacketPing = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const keys_1 = require("../crypto/keys");
exports.protobufPackage = "tendermint.p2p";
function createBasePacketPing() {
    return {};
}
exports.PacketPing = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketPing();
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
        const message = createBasePacketPing();
        return message;
    },
};
function createBasePacketPong() {
    return {};
}
exports.PacketPong = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketPong();
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
        const message = createBasePacketPong();
        return message;
    },
};
function createBasePacketMsg() {
    return { channel_id: 0, eof: false, data: new Uint8Array() };
}
exports.PacketMsg = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.channel_id !== 0) {
            writer.uint32(8).int32(message.channel_id);
        }
        if (message.eof === true) {
            writer.uint32(16).bool(message.eof);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketMsg();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.channel_id = reader.int32();
                    break;
                case 2:
                    message.eof = reader.bool();
                    break;
                case 3:
                    message.data = reader.bytes();
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
            channel_id: isSet(object.channel_id) ? Number(object.channel_id) : 0,
            eof: isSet(object.eof) ? Boolean(object.eof) : false,
            data: isSet(object.data)
                ? bytesFromBase64(object.data)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.channel_id !== undefined &&
            (obj.channel_id = Math.round(message.channel_id));
        message.eof !== undefined && (obj.eof = message.eof);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePacketMsg();
        message.channel_id = (_a = object.channel_id) !== null && _a !== void 0 ? _a : 0;
        message.eof = (_b = object.eof) !== null && _b !== void 0 ? _b : false;
        message.data = (_c = object.data) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBasePacket() {
    return {
        packet_ping: undefined,
        packet_pong: undefined,
        packet_msg: undefined,
    };
}
exports.Packet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.packet_ping !== undefined) {
            exports.PacketPing.encode(message.packet_ping, writer.uint32(10).fork()).ldelim();
        }
        if (message.packet_pong !== undefined) {
            exports.PacketPong.encode(message.packet_pong, writer.uint32(18).fork()).ldelim();
        }
        if (message.packet_msg !== undefined) {
            exports.PacketMsg.encode(message.packet_msg, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacket();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.packet_ping = exports.PacketPing.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.packet_pong = exports.PacketPong.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.packet_msg = exports.PacketMsg.decode(reader, reader.uint32());
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
            packet_ping: isSet(object.packet_ping)
                ? exports.PacketPing.fromJSON(object.packet_ping)
                : undefined,
            packet_pong: isSet(object.packet_pong)
                ? exports.PacketPong.fromJSON(object.packet_pong)
                : undefined,
            packet_msg: isSet(object.packet_msg)
                ? exports.PacketMsg.fromJSON(object.packet_msg)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.packet_ping !== undefined &&
            (obj.packet_ping = message.packet_ping
                ? exports.PacketPing.toJSON(message.packet_ping)
                : undefined);
        message.packet_pong !== undefined &&
            (obj.packet_pong = message.packet_pong
                ? exports.PacketPong.toJSON(message.packet_pong)
                : undefined);
        message.packet_msg !== undefined &&
            (obj.packet_msg = message.packet_msg
                ? exports.PacketMsg.toJSON(message.packet_msg)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePacket();
        message.packet_ping =
            object.packet_ping !== undefined && object.packet_ping !== null
                ? exports.PacketPing.fromPartial(object.packet_ping)
                : undefined;
        message.packet_pong =
            object.packet_pong !== undefined && object.packet_pong !== null
                ? exports.PacketPong.fromPartial(object.packet_pong)
                : undefined;
        message.packet_msg =
            object.packet_msg !== undefined && object.packet_msg !== null
                ? exports.PacketMsg.fromPartial(object.packet_msg)
                : undefined;
        return message;
    },
};
function createBaseAuthSigMessage() {
    return { pub_key: undefined, sig: new Uint8Array() };
}
exports.AuthSigMessage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pub_key !== undefined) {
            keys_1.PublicKey.encode(message.pub_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.sig.length !== 0) {
            writer.uint32(18).bytes(message.sig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthSigMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pub_key = keys_1.PublicKey.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.sig = reader.bytes();
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
            pub_key: isSet(object.pub_key)
                ? keys_1.PublicKey.fromJSON(object.pub_key)
                : undefined,
            sig: isSet(object.sig) ? bytesFromBase64(object.sig) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.pub_key !== undefined &&
            (obj.pub_key = message.pub_key
                ? keys_1.PublicKey.toJSON(message.pub_key)
                : undefined);
        message.sig !== undefined &&
            (obj.sig = base64FromBytes(message.sig !== undefined ? message.sig : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAuthSigMessage();
        message.pub_key =
            object.pub_key !== undefined && object.pub_key !== null
                ? keys_1.PublicKey.fromPartial(object.pub_key)
                : undefined;
        message.sig = (_a = object.sig) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(""));
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=conn.js.map