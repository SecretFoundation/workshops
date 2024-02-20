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
const genesis_1 = require("../../client/v1/genesis");
const genesis_2 = require("../../connection/v1/genesis");
const genesis_3 = require("../../channel/v1/genesis");
exports.protobufPackage = "ibc.core.types.v1";
function createBaseGenesisState() {
    return {
        client_genesis: undefined,
        connection_genesis: undefined,
        channel_genesis: undefined,
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_genesis !== undefined) {
            genesis_1.GenesisState.encode(message.client_genesis, writer.uint32(10).fork()).ldelim();
        }
        if (message.connection_genesis !== undefined) {
            genesis_2.GenesisState.encode(message.connection_genesis, writer.uint32(18).fork()).ldelim();
        }
        if (message.channel_genesis !== undefined) {
            genesis_3.GenesisState.encode(message.channel_genesis, writer.uint32(26).fork()).ldelim();
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
                    message.client_genesis = genesis_1.GenesisState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.connection_genesis = genesis_2.GenesisState.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.channel_genesis = genesis_3.GenesisState.decode(reader, reader.uint32());
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
            client_genesis: isSet(object.client_genesis)
                ? genesis_1.GenesisState.fromJSON(object.client_genesis)
                : undefined,
            connection_genesis: isSet(object.connection_genesis)
                ? genesis_2.GenesisState.fromJSON(object.connection_genesis)
                : undefined,
            channel_genesis: isSet(object.channel_genesis)
                ? genesis_3.GenesisState.fromJSON(object.channel_genesis)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_genesis !== undefined &&
            (obj.client_genesis = message.client_genesis
                ? genesis_1.GenesisState.toJSON(message.client_genesis)
                : undefined);
        message.connection_genesis !== undefined &&
            (obj.connection_genesis = message.connection_genesis
                ? genesis_2.GenesisState.toJSON(message.connection_genesis)
                : undefined);
        message.channel_genesis !== undefined &&
            (obj.channel_genesis = message.channel_genesis
                ? genesis_3.GenesisState.toJSON(message.channel_genesis)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.client_genesis =
            object.client_genesis !== undefined && object.client_genesis !== null
                ? genesis_1.GenesisState.fromPartial(object.client_genesis)
                : undefined;
        message.connection_genesis =
            object.connection_genesis !== undefined &&
                object.connection_genesis !== null
                ? genesis_2.GenesisState.fromPartial(object.connection_genesis)
                : undefined;
        message.channel_genesis =
            object.channel_genesis !== undefined && object.channel_genesis !== null
                ? genesis_3.GenesisState.fromPartial(object.channel_genesis)
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