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
exports.Params = exports.Version = exports.ConnectionPaths = exports.ClientPaths = exports.Counterparty = exports.IdentifiedConnection = exports.ConnectionEnd = exports.stateToJSON = exports.stateFromJSON = exports.State = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const commitment_1 = require("../../commitment/v1/commitment");
exports.protobufPackage = "ibc.core.connection.v1";
/**
 * State defines if a connection is in one of the following states:
 * INIT, TRYOPEN, OPEN or UNINITIALIZED.
 */
var State;
(function (State) {
    /** STATE_UNINITIALIZED_UNSPECIFIED - Default State */
    State[State["STATE_UNINITIALIZED_UNSPECIFIED"] = 0] = "STATE_UNINITIALIZED_UNSPECIFIED";
    /** STATE_INIT - A connection end has just started the opening handshake. */
    State[State["STATE_INIT"] = 1] = "STATE_INIT";
    /**
     * STATE_TRYOPEN - A connection end has acknowledged the handshake step on the counterparty
     * chain.
     */
    State[State["STATE_TRYOPEN"] = 2] = "STATE_TRYOPEN";
    /** STATE_OPEN - A connection end has completed the handshake. */
    State[State["STATE_OPEN"] = 3] = "STATE_OPEN";
    State[State["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(State = exports.State || (exports.State = {}));
function stateFromJSON(object) {
    switch (object) {
        case 0:
        case "STATE_UNINITIALIZED_UNSPECIFIED":
            return State.STATE_UNINITIALIZED_UNSPECIFIED;
        case 1:
        case "STATE_INIT":
            return State.STATE_INIT;
        case 2:
        case "STATE_TRYOPEN":
            return State.STATE_TRYOPEN;
        case 3:
        case "STATE_OPEN":
            return State.STATE_OPEN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return State.UNRECOGNIZED;
    }
}
exports.stateFromJSON = stateFromJSON;
function stateToJSON(object) {
    switch (object) {
        case State.STATE_UNINITIALIZED_UNSPECIFIED:
            return "STATE_UNINITIALIZED_UNSPECIFIED";
        case State.STATE_INIT:
            return "STATE_INIT";
        case State.STATE_TRYOPEN:
            return "STATE_TRYOPEN";
        case State.STATE_OPEN:
            return "STATE_OPEN";
        default:
            return "UNKNOWN";
    }
}
exports.stateToJSON = stateToJSON;
function createBaseConnectionEnd() {
    return {
        client_id: "",
        versions: [],
        state: 0,
        counterparty: undefined,
        delay_period: "0",
    };
}
exports.ConnectionEnd = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        for (const v of message.versions) {
            exports.Version.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.counterparty !== undefined) {
            exports.Counterparty.encode(message.counterparty, writer.uint32(34).fork()).ldelim();
        }
        if (message.delay_period !== "0") {
            writer.uint32(40).uint64(message.delay_period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectionEnd();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.versions.push(exports.Version.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.state = reader.int32();
                    break;
                case 4:
                    message.counterparty = exports.Counterparty.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.delay_period = longToString(reader.uint64());
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
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            versions: Array.isArray(object === null || object === void 0 ? void 0 : object.versions)
                ? object.versions.map((e) => exports.Version.fromJSON(e))
                : [],
            state: isSet(object.state) ? stateFromJSON(object.state) : 0,
            counterparty: isSet(object.counterparty)
                ? exports.Counterparty.fromJSON(object.counterparty)
                : undefined,
            delay_period: isSet(object.delay_period)
                ? String(object.delay_period)
                : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.versions) {
            obj.versions = message.versions.map((e) => e ? exports.Version.toJSON(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty
                ? exports.Counterparty.toJSON(message.counterparty)
                : undefined);
        message.delay_period !== undefined &&
            (obj.delay_period = message.delay_period);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseConnectionEnd();
        message.client_id = (_a = object.client_id) !== null && _a !== void 0 ? _a : "";
        message.versions =
            ((_b = object.versions) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Version.fromPartial(e))) || [];
        message.state = (_c = object.state) !== null && _c !== void 0 ? _c : 0;
        message.counterparty =
            object.counterparty !== undefined && object.counterparty !== null
                ? exports.Counterparty.fromPartial(object.counterparty)
                : undefined;
        message.delay_period = (_d = object.delay_period) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseIdentifiedConnection() {
    return {
        id: "",
        client_id: "",
        versions: [],
        state: 0,
        counterparty: undefined,
        delay_period: "0",
    };
}
exports.IdentifiedConnection = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.client_id !== "") {
            writer.uint32(18).string(message.client_id);
        }
        for (const v of message.versions) {
            exports.Version.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.state !== 0) {
            writer.uint32(32).int32(message.state);
        }
        if (message.counterparty !== undefined) {
            exports.Counterparty.encode(message.counterparty, writer.uint32(42).fork()).ldelim();
        }
        if (message.delay_period !== "0") {
            writer.uint32(48).uint64(message.delay_period);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedConnection();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.client_id = reader.string();
                    break;
                case 3:
                    message.versions.push(exports.Version.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.state = reader.int32();
                    break;
                case 5:
                    message.counterparty = exports.Counterparty.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.delay_period = longToString(reader.uint64());
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
            id: isSet(object.id) ? String(object.id) : "",
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            versions: Array.isArray(object === null || object === void 0 ? void 0 : object.versions)
                ? object.versions.map((e) => exports.Version.fromJSON(e))
                : [],
            state: isSet(object.state) ? stateFromJSON(object.state) : 0,
            counterparty: isSet(object.counterparty)
                ? exports.Counterparty.fromJSON(object.counterparty)
                : undefined,
            delay_period: isSet(object.delay_period)
                ? String(object.delay_period)
                : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.versions) {
            obj.versions = message.versions.map((e) => e ? exports.Version.toJSON(e) : undefined);
        }
        else {
            obj.versions = [];
        }
        message.state !== undefined && (obj.state = stateToJSON(message.state));
        message.counterparty !== undefined &&
            (obj.counterparty = message.counterparty
                ? exports.Counterparty.toJSON(message.counterparty)
                : undefined);
        message.delay_period !== undefined &&
            (obj.delay_period = message.delay_period);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseIdentifiedConnection();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.client_id = (_b = object.client_id) !== null && _b !== void 0 ? _b : "";
        message.versions =
            ((_c = object.versions) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Version.fromPartial(e))) || [];
        message.state = (_d = object.state) !== null && _d !== void 0 ? _d : 0;
        message.counterparty =
            object.counterparty !== undefined && object.counterparty !== null
                ? exports.Counterparty.fromPartial(object.counterparty)
                : undefined;
        message.delay_period = (_e = object.delay_period) !== null && _e !== void 0 ? _e : "0";
        return message;
    },
};
function createBaseCounterparty() {
    return { client_id: "", connection_id: "", prefix: undefined };
}
exports.Counterparty = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.connection_id !== "") {
            writer.uint32(18).string(message.connection_id);
        }
        if (message.prefix !== undefined) {
            commitment_1.MerklePrefix.encode(message.prefix, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCounterparty();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.connection_id = reader.string();
                    break;
                case 3:
                    message.prefix = commitment_1.MerklePrefix.decode(reader, reader.uint32());
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
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            connection_id: isSet(object.connection_id)
                ? String(object.connection_id)
                : "",
            prefix: isSet(object.prefix)
                ? commitment_1.MerklePrefix.fromJSON(object.prefix)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.connection_id !== undefined &&
            (obj.connection_id = message.connection_id);
        message.prefix !== undefined &&
            (obj.prefix = message.prefix
                ? commitment_1.MerklePrefix.toJSON(message.prefix)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCounterparty();
        message.client_id = (_a = object.client_id) !== null && _a !== void 0 ? _a : "";
        message.connection_id = (_b = object.connection_id) !== null && _b !== void 0 ? _b : "";
        message.prefix =
            object.prefix !== undefined && object.prefix !== null
                ? commitment_1.MerklePrefix.fromPartial(object.prefix)
                : undefined;
        return message;
    },
};
function createBaseClientPaths() {
    return { paths: [] };
}
exports.ClientPaths = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.paths) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientPaths();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.paths.push(reader.string());
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
            paths: Array.isArray(object === null || object === void 0 ? void 0 : object.paths)
                ? object.paths.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.paths) {
            obj.paths = message.paths.map((e) => e);
        }
        else {
            obj.paths = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseClientPaths();
        message.paths = ((_a = object.paths) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseConnectionPaths() {
    return { client_id: "", paths: [] };
}
exports.ConnectionPaths = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        for (const v of message.paths) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectionPaths();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.paths.push(reader.string());
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
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            paths: Array.isArray(object === null || object === void 0 ? void 0 : object.paths)
                ? object.paths.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.paths) {
            obj.paths = message.paths.map((e) => e);
        }
        else {
            obj.paths = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseConnectionPaths();
        message.client_id = (_a = object.client_id) !== null && _a !== void 0 ? _a : "";
        message.paths = ((_b = object.paths) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseVersion() {
    return { identifier: "", features: [] };
}
exports.Version = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.identifier !== "") {
            writer.uint32(10).string(message.identifier);
        }
        for (const v of message.features) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVersion();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identifier = reader.string();
                    break;
                case 2:
                    message.features.push(reader.string());
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
            identifier: isSet(object.identifier) ? String(object.identifier) : "",
            features: Array.isArray(object === null || object === void 0 ? void 0 : object.features)
                ? object.features.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.identifier !== undefined && (obj.identifier = message.identifier);
        if (message.features) {
            obj.features = message.features.map((e) => e);
        }
        else {
            obj.features = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseVersion();
        message.identifier = (_a = object.identifier) !== null && _a !== void 0 ? _a : "";
        message.features = ((_b = object.features) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseParams() {
    return { max_expected_time_per_block: "0" };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.max_expected_time_per_block !== "0") {
            writer.uint32(8).uint64(message.max_expected_time_per_block);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.max_expected_time_per_block = longToString(reader.uint64());
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
            max_expected_time_per_block: isSet(object.max_expected_time_per_block)
                ? String(object.max_expected_time_per_block)
                : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.max_expected_time_per_block !== undefined &&
            (obj.max_expected_time_per_block = message.max_expected_time_per_block);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseParams();
        message.max_expected_time_per_block =
            (_a = object.max_expected_time_per_block) !== null && _a !== void 0 ? _a : "0";
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
//# sourceMappingURL=connection.js.map