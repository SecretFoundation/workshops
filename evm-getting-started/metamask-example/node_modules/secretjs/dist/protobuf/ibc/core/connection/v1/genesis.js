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
const connection_1 = require("./connection");
exports.protobufPackage = "ibc.core.connection.v1";
function createBaseGenesisState() {
    return {
        connections: [],
        client_connection_paths: [],
        next_connection_sequence: "0",
        params: undefined,
    };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.connections) {
            connection_1.IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.client_connection_paths) {
            connection_1.ConnectionPaths.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.next_connection_sequence !== "0") {
            writer.uint32(24).uint64(message.next_connection_sequence);
        }
        if (message.params !== undefined) {
            connection_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
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
                    message.connections.push(connection_1.IdentifiedConnection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.client_connection_paths.push(connection_1.ConnectionPaths.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.next_connection_sequence = longToString(reader.uint64());
                    break;
                case 4:
                    message.params = connection_1.Params.decode(reader, reader.uint32());
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
            connections: Array.isArray(object === null || object === void 0 ? void 0 : object.connections)
                ? object.connections.map((e) => connection_1.IdentifiedConnection.fromJSON(e))
                : [],
            client_connection_paths: Array.isArray(object === null || object === void 0 ? void 0 : object.client_connection_paths)
                ? object.client_connection_paths.map((e) => connection_1.ConnectionPaths.fromJSON(e))
                : [],
            next_connection_sequence: isSet(object.next_connection_sequence)
                ? String(object.next_connection_sequence)
                : "0",
            params: isSet(object.params) ? connection_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.connections) {
            obj.connections = message.connections.map((e) => e ? connection_1.IdentifiedConnection.toJSON(e) : undefined);
        }
        else {
            obj.connections = [];
        }
        if (message.client_connection_paths) {
            obj.client_connection_paths = message.client_connection_paths.map((e) => e ? connection_1.ConnectionPaths.toJSON(e) : undefined);
        }
        else {
            obj.client_connection_paths = [];
        }
        message.next_connection_sequence !== undefined &&
            (obj.next_connection_sequence = message.next_connection_sequence);
        message.params !== undefined &&
            (obj.params = message.params ? connection_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGenesisState();
        message.connections =
            ((_a = object.connections) === null || _a === void 0 ? void 0 : _a.map((e) => connection_1.IdentifiedConnection.fromPartial(e))) || [];
        message.client_connection_paths =
            ((_b = object.client_connection_paths) === null || _b === void 0 ? void 0 : _b.map((e) => connection_1.ConnectionPaths.fromPartial(e))) || [];
        message.next_connection_sequence = (_c = object.next_connection_sequence) !== null && _c !== void 0 ? _c : "0";
        message.params =
            object.params !== undefined && object.params !== null
                ? connection_1.Params.fromPartial(object.params)
                : undefined;
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
//# sourceMappingURL=genesis.js.map