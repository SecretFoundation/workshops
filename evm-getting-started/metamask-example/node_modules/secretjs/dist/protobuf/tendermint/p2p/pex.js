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
exports.Message = exports.PexAddrs = exports.PexRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("./types");
exports.protobufPackage = "tendermint.p2p";
function createBasePexRequest() {
    return {};
}
exports.PexRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePexRequest();
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
        const message = createBasePexRequest();
        return message;
    },
};
function createBasePexAddrs() {
    return { addrs: [] };
}
exports.PexAddrs = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.addrs) {
            types_1.NetAddress.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePexAddrs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.addrs.push(types_1.NetAddress.decode(reader, reader.uint32()));
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
            addrs: Array.isArray(object === null || object === void 0 ? void 0 : object.addrs)
                ? object.addrs.map((e) => types_1.NetAddress.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.addrs) {
            obj.addrs = message.addrs.map((e) => e ? types_1.NetAddress.toJSON(e) : undefined);
        }
        else {
            obj.addrs = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePexAddrs();
        message.addrs = ((_a = object.addrs) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.NetAddress.fromPartial(e))) || [];
        return message;
    },
};
function createBaseMessage() {
    return { pex_request: undefined, pex_addrs: undefined };
}
exports.Message = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pex_request !== undefined) {
            exports.PexRequest.encode(message.pex_request, writer.uint32(10).fork()).ldelim();
        }
        if (message.pex_addrs !== undefined) {
            exports.PexAddrs.encode(message.pex_addrs, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pex_request = exports.PexRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pex_addrs = exports.PexAddrs.decode(reader, reader.uint32());
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
            pex_request: isSet(object.pex_request)
                ? exports.PexRequest.fromJSON(object.pex_request)
                : undefined,
            pex_addrs: isSet(object.pex_addrs)
                ? exports.PexAddrs.fromJSON(object.pex_addrs)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pex_request !== undefined &&
            (obj.pex_request = message.pex_request
                ? exports.PexRequest.toJSON(message.pex_request)
                : undefined);
        message.pex_addrs !== undefined &&
            (obj.pex_addrs = message.pex_addrs
                ? exports.PexAddrs.toJSON(message.pex_addrs)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseMessage();
        message.pex_request =
            object.pex_request !== undefined && object.pex_request !== null
                ? exports.PexRequest.fromPartial(object.pex_request)
                : undefined;
        message.pex_addrs =
            object.pex_addrs !== undefined && object.pex_addrs !== null
                ? exports.PexAddrs.fromPartial(object.pex_addrs)
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
//# sourceMappingURL=pex.js.map