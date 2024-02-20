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
exports.RegisteredInterchainAccount = exports.ActiveChannel = exports.HostGenesisState = exports.ControllerGenesisState = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const controller_1 = require("../controller/v1/controller");
const host_1 = require("../host/v1/host");
exports.protobufPackage = "ibc.applications.interchain_accounts.v1";
function createBaseGenesisState() {
    return { controller_genesis_state: undefined, host_genesis_state: undefined };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.controller_genesis_state !== undefined) {
            exports.ControllerGenesisState.encode(message.controller_genesis_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.host_genesis_state !== undefined) {
            exports.HostGenesisState.encode(message.host_genesis_state, writer.uint32(18).fork()).ldelim();
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
                    message.controller_genesis_state = exports.ControllerGenesisState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.host_genesis_state = exports.HostGenesisState.decode(reader, reader.uint32());
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
            controller_genesis_state: isSet(object.controller_genesis_state)
                ? exports.ControllerGenesisState.fromJSON(object.controller_genesis_state)
                : undefined,
            host_genesis_state: isSet(object.host_genesis_state)
                ? exports.HostGenesisState.fromJSON(object.host_genesis_state)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.controller_genesis_state !== undefined &&
            (obj.controller_genesis_state = message.controller_genesis_state
                ? exports.ControllerGenesisState.toJSON(message.controller_genesis_state)
                : undefined);
        message.host_genesis_state !== undefined &&
            (obj.host_genesis_state = message.host_genesis_state
                ? exports.HostGenesisState.toJSON(message.host_genesis_state)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.controller_genesis_state =
            object.controller_genesis_state !== undefined &&
                object.controller_genesis_state !== null
                ? exports.ControllerGenesisState.fromPartial(object.controller_genesis_state)
                : undefined;
        message.host_genesis_state =
            object.host_genesis_state !== undefined &&
                object.host_genesis_state !== null
                ? exports.HostGenesisState.fromPartial(object.host_genesis_state)
                : undefined;
        return message;
    },
};
function createBaseControllerGenesisState() {
    return {
        active_channels: [],
        interchain_accounts: [],
        ports: [],
        params: undefined,
    };
}
exports.ControllerGenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.active_channels) {
            exports.ActiveChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.interchain_accounts) {
            exports.RegisteredInterchainAccount.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.ports) {
            writer.uint32(26).string(v);
        }
        if (message.params !== undefined) {
            controller_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseControllerGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.active_channels.push(exports.ActiveChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.interchain_accounts.push(exports.RegisteredInterchainAccount.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.ports.push(reader.string());
                    break;
                case 4:
                    message.params = controller_1.Params.decode(reader, reader.uint32());
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
            active_channels: Array.isArray(object === null || object === void 0 ? void 0 : object.active_channels)
                ? object.active_channels.map((e) => exports.ActiveChannel.fromJSON(e))
                : [],
            interchain_accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.interchain_accounts)
                ? object.interchain_accounts.map((e) => exports.RegisteredInterchainAccount.fromJSON(e))
                : [],
            ports: Array.isArray(object === null || object === void 0 ? void 0 : object.ports)
                ? object.ports.map((e) => String(e))
                : [],
            params: isSet(object.params) ? controller_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.active_channels) {
            obj.active_channels = message.active_channels.map((e) => e ? exports.ActiveChannel.toJSON(e) : undefined);
        }
        else {
            obj.active_channels = [];
        }
        if (message.interchain_accounts) {
            obj.interchain_accounts = message.interchain_accounts.map((e) => e ? exports.RegisteredInterchainAccount.toJSON(e) : undefined);
        }
        else {
            obj.interchain_accounts = [];
        }
        if (message.ports) {
            obj.ports = message.ports.map((e) => e);
        }
        else {
            obj.ports = [];
        }
        message.params !== undefined &&
            (obj.params = message.params ? controller_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseControllerGenesisState();
        message.active_channels =
            ((_a = object.active_channels) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ActiveChannel.fromPartial(e))) || [];
        message.interchain_accounts =
            ((_b = object.interchain_accounts) === null || _b === void 0 ? void 0 : _b.map((e) => exports.RegisteredInterchainAccount.fromPartial(e))) || [];
        message.ports = ((_c = object.ports) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.params =
            object.params !== undefined && object.params !== null
                ? controller_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseHostGenesisState() {
    return {
        active_channels: [],
        interchain_accounts: [],
        port: "",
        params: undefined,
    };
}
exports.HostGenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.active_channels) {
            exports.ActiveChannel.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.interchain_accounts) {
            exports.RegisteredInterchainAccount.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.port !== "") {
            writer.uint32(26).string(message.port);
        }
        if (message.params !== undefined) {
            host_1.Params.encode(message.params, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHostGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.active_channels.push(exports.ActiveChannel.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.interchain_accounts.push(exports.RegisteredInterchainAccount.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.port = reader.string();
                    break;
                case 4:
                    message.params = host_1.Params.decode(reader, reader.uint32());
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
            active_channels: Array.isArray(object === null || object === void 0 ? void 0 : object.active_channels)
                ? object.active_channels.map((e) => exports.ActiveChannel.fromJSON(e))
                : [],
            interchain_accounts: Array.isArray(object === null || object === void 0 ? void 0 : object.interchain_accounts)
                ? object.interchain_accounts.map((e) => exports.RegisteredInterchainAccount.fromJSON(e))
                : [],
            port: isSet(object.port) ? String(object.port) : "",
            params: isSet(object.params)
                ? host_1.Params.fromJSON(object.params)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.active_channels) {
            obj.active_channels = message.active_channels.map((e) => e ? exports.ActiveChannel.toJSON(e) : undefined);
        }
        else {
            obj.active_channels = [];
        }
        if (message.interchain_accounts) {
            obj.interchain_accounts = message.interchain_accounts.map((e) => e ? exports.RegisteredInterchainAccount.toJSON(e) : undefined);
        }
        else {
            obj.interchain_accounts = [];
        }
        message.port !== undefined && (obj.port = message.port);
        message.params !== undefined &&
            (obj.params = message.params
                ? host_1.Params.toJSON(message.params)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseHostGenesisState();
        message.active_channels =
            ((_a = object.active_channels) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ActiveChannel.fromPartial(e))) || [];
        message.interchain_accounts =
            ((_b = object.interchain_accounts) === null || _b === void 0 ? void 0 : _b.map((e) => exports.RegisteredInterchainAccount.fromPartial(e))) || [];
        message.port = (_c = object.port) !== null && _c !== void 0 ? _c : "";
        message.params =
            object.params !== undefined && object.params !== null
                ? host_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
function createBaseActiveChannel() {
    return { connection_id: "", port_id: "", channel_id: "" };
}
exports.ActiveChannel = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        if (message.port_id !== "") {
            writer.uint32(18).string(message.port_id);
        }
        if (message.channel_id !== "") {
            writer.uint32(26).string(message.channel_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActiveChannel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
                    break;
                case 2:
                    message.port_id = reader.string();
                    break;
                case 3:
                    message.channel_id = reader.string();
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
            connection_id: isSet(object.connection_id)
                ? String(object.connection_id)
                : "",
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined &&
            (obj.connection_id = message.connection_id);
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.channel_id !== undefined && (obj.channel_id = message.channel_id);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseActiveChannel();
        message.connection_id = (_a = object.connection_id) !== null && _a !== void 0 ? _a : "";
        message.port_id = (_b = object.port_id) !== null && _b !== void 0 ? _b : "";
        message.channel_id = (_c = object.channel_id) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRegisteredInterchainAccount() {
    return { connection_id: "", port_id: "", account_address: "" };
}
exports.RegisteredInterchainAccount = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        if (message.port_id !== "") {
            writer.uint32(18).string(message.port_id);
        }
        if (message.account_address !== "") {
            writer.uint32(26).string(message.account_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisteredInterchainAccount();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
                    break;
                case 2:
                    message.port_id = reader.string();
                    break;
                case 3:
                    message.account_address = reader.string();
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
            connection_id: isSet(object.connection_id)
                ? String(object.connection_id)
                : "",
            port_id: isSet(object.port_id) ? String(object.port_id) : "",
            account_address: isSet(object.account_address)
                ? String(object.account_address)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined &&
            (obj.connection_id = message.connection_id);
        message.port_id !== undefined && (obj.port_id = message.port_id);
        message.account_address !== undefined &&
            (obj.account_address = message.account_address);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRegisteredInterchainAccount();
        message.connection_id = (_a = object.connection_id) !== null && _a !== void 0 ? _a : "";
        message.port_id = (_b = object.port_id) !== null && _b !== void 0 ? _b : "";
        message.account_address = (_c = object.account_address) !== null && _c !== void 0 ? _c : "";
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