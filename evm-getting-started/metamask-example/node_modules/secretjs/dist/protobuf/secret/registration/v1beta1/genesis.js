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
const msg_1 = require("./msg");
const types_1 = require("./types");
exports.protobufPackage = "secret.registration.v1beta1";
function createBaseGenesisState() {
    return {
        registration: [],
        node_exch_master_key: undefined,
        io_master_key: undefined,
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.registration) {
            types_1.RegistrationNodeInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.node_exch_master_key !== undefined) {
            msg_1.MasterKey.encode(message.node_exch_master_key, writer.uint32(18).fork()).ldelim();
        }
        if (message.io_master_key !== undefined) {
            msg_1.MasterKey.encode(message.io_master_key, writer.uint32(26).fork()).ldelim();
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
                    message.registration.push(types_1.RegistrationNodeInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.node_exch_master_key = msg_1.MasterKey.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.io_master_key = msg_1.MasterKey.decode(reader, reader.uint32());
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
            registration: Array.isArray(object === null || object === void 0 ? void 0 : object.registration)
                ? object.registration.map((e) => types_1.RegistrationNodeInfo.fromJSON(e))
                : [],
            node_exch_master_key: isSet(object.node_exch_master_key)
                ? msg_1.MasterKey.fromJSON(object.node_exch_master_key)
                : undefined,
            io_master_key: isSet(object.io_master_key)
                ? msg_1.MasterKey.fromJSON(object.io_master_key)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.registration) {
            obj.registration = message.registration.map((e) => e ? types_1.RegistrationNodeInfo.toJSON(e) : undefined);
        }
        else {
            obj.registration = [];
        }
        message.node_exch_master_key !== undefined &&
            (obj.node_exch_master_key = message.node_exch_master_key
                ? msg_1.MasterKey.toJSON(message.node_exch_master_key)
                : undefined);
        message.io_master_key !== undefined &&
            (obj.io_master_key = message.io_master_key
                ? msg_1.MasterKey.toJSON(message.io_master_key)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGenesisState();
        message.registration =
            ((_a = object.registration) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.RegistrationNodeInfo.fromPartial(e))) ||
                [];
        message.node_exch_master_key =
            object.node_exch_master_key !== undefined &&
                object.node_exch_master_key !== null
                ? msg_1.MasterKey.fromPartial(object.node_exch_master_key)
                : undefined;
        message.io_master_key =
            object.io_master_key !== undefined && object.io_master_key !== null
                ? msg_1.MasterKey.fromPartial(object.io_master_key)
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