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
exports.Params = exports.Height = exports.UpgradeProposal = exports.ClientUpdateProposal = exports.ClientConsensusStates = exports.ConsensusStateWithHeight = exports.IdentifiedClientState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const any_1 = require("../../../../google/protobuf/any");
const upgrade_1 = require("../../../../cosmos/upgrade/v1beta1/upgrade");
exports.protobufPackage = "ibc.core.client.v1";
function createBaseIdentifiedClientState() {
    return { client_id: "", client_state: undefined };
}
exports.IdentifiedClientState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIdentifiedClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
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
            client_state: isSet(object.client_state)
                ? any_1.Any.fromJSON(object.client_state)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.client_state !== undefined &&
            (obj.client_state = message.client_state
                ? any_1.Any.toJSON(message.client_state)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseIdentifiedClientState();
        message.client_id = (_a = object.client_id) !== null && _a !== void 0 ? _a : "";
        message.client_state =
            object.client_state !== undefined && object.client_state !== null
                ? any_1.Any.fromPartial(object.client_state)
                : undefined;
        return message;
    },
};
function createBaseConsensusStateWithHeight() {
    return { height: undefined, consensus_state: undefined };
}
exports.ConsensusStateWithHeight = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== undefined) {
            exports.Height.encode(message.height, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensus_state !== undefined) {
            any_1.Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusStateWithHeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = exports.Height.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.consensus_state = any_1.Any.decode(reader, reader.uint32());
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
            height: isSet(object.height) ? exports.Height.fromJSON(object.height) : undefined,
            consensus_state: isSet(object.consensus_state)
                ? any_1.Any.fromJSON(object.consensus_state)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined &&
            (obj.height = message.height ? exports.Height.toJSON(message.height) : undefined);
        message.consensus_state !== undefined &&
            (obj.consensus_state = message.consensus_state
                ? any_1.Any.toJSON(message.consensus_state)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConsensusStateWithHeight();
        message.height =
            object.height !== undefined && object.height !== null
                ? exports.Height.fromPartial(object.height)
                : undefined;
        message.consensus_state =
            object.consensus_state !== undefined && object.consensus_state !== null
                ? any_1.Any.fromPartial(object.consensus_state)
                : undefined;
        return message;
    },
};
function createBaseClientConsensusStates() {
    return { client_id: "", consensus_states: [] };
}
exports.ClientConsensusStates = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        for (const v of message.consensus_states) {
            exports.ConsensusStateWithHeight.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientConsensusStates();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.consensus_states.push(exports.ConsensusStateWithHeight.decode(reader, reader.uint32()));
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
            consensus_states: Array.isArray(object === null || object === void 0 ? void 0 : object.consensus_states)
                ? object.consensus_states.map((e) => exports.ConsensusStateWithHeight.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        if (message.consensus_states) {
            obj.consensus_states = message.consensus_states.map((e) => e ? exports.ConsensusStateWithHeight.toJSON(e) : undefined);
        }
        else {
            obj.consensus_states = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseClientConsensusStates();
        message.client_id = (_a = object.client_id) !== null && _a !== void 0 ? _a : "";
        message.consensus_states =
            ((_b = object.consensus_states) === null || _b === void 0 ? void 0 : _b.map((e) => exports.ConsensusStateWithHeight.fromPartial(e))) || [];
        return message;
    },
};
function createBaseClientUpdateProposal() {
    return {
        title: "",
        description: "",
        subject_client_id: "",
        substitute_client_id: "",
    };
}
exports.ClientUpdateProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.subject_client_id !== "") {
            writer.uint32(26).string(message.subject_client_id);
        }
        if (message.substitute_client_id !== "") {
            writer.uint32(34).string(message.substitute_client_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientUpdateProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.subject_client_id = reader.string();
                    break;
                case 4:
                    message.substitute_client_id = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            subject_client_id: isSet(object.subject_client_id)
                ? String(object.subject_client_id)
                : "",
            substitute_client_id: isSet(object.substitute_client_id)
                ? String(object.substitute_client_id)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.subject_client_id !== undefined &&
            (obj.subject_client_id = message.subject_client_id);
        message.substitute_client_id !== undefined &&
            (obj.substitute_client_id = message.substitute_client_id);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseClientUpdateProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.subject_client_id = (_c = object.subject_client_id) !== null && _c !== void 0 ? _c : "";
        message.substitute_client_id = (_d = object.substitute_client_id) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseUpgradeProposal() {
    return {
        title: "",
        description: "",
        plan: undefined,
        upgraded_client_state: undefined,
    };
}
exports.UpgradeProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.plan !== undefined) {
            upgrade_1.Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
        }
        if (message.upgraded_client_state !== undefined) {
            any_1.Any.encode(message.upgraded_client_state, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpgradeProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.plan = upgrade_1.Plan.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.upgraded_client_state = any_1.Any.decode(reader, reader.uint32());
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            plan: isSet(object.plan) ? upgrade_1.Plan.fromJSON(object.plan) : undefined,
            upgraded_client_state: isSet(object.upgraded_client_state)
                ? any_1.Any.fromJSON(object.upgraded_client_state)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.plan !== undefined &&
            (obj.plan = message.plan ? upgrade_1.Plan.toJSON(message.plan) : undefined);
        message.upgraded_client_state !== undefined &&
            (obj.upgraded_client_state = message.upgraded_client_state
                ? any_1.Any.toJSON(message.upgraded_client_state)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpgradeProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.plan =
            object.plan !== undefined && object.plan !== null
                ? upgrade_1.Plan.fromPartial(object.plan)
                : undefined;
        message.upgraded_client_state =
            object.upgraded_client_state !== undefined &&
                object.upgraded_client_state !== null
                ? any_1.Any.fromPartial(object.upgraded_client_state)
                : undefined;
        return message;
    },
};
function createBaseHeight() {
    return { revision_number: "0", revision_height: "0" };
}
exports.Height = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.revision_number !== "0") {
            writer.uint32(8).uint64(message.revision_number);
        }
        if (message.revision_height !== "0") {
            writer.uint32(16).uint64(message.revision_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.revision_number = longToString(reader.uint64());
                    break;
                case 2:
                    message.revision_height = longToString(reader.uint64());
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
            revision_number: isSet(object.revision_number)
                ? String(object.revision_number)
                : "0",
            revision_height: isSet(object.revision_height)
                ? String(object.revision_height)
                : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.revision_number !== undefined &&
            (obj.revision_number = message.revision_number);
        message.revision_height !== undefined &&
            (obj.revision_height = message.revision_height);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseHeight();
        message.revision_number = (_a = object.revision_number) !== null && _a !== void 0 ? _a : "0";
        message.revision_height = (_b = object.revision_height) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseParams() {
    return { allowed_clients: [] };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.allowed_clients) {
            writer.uint32(10).string(v);
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
                    message.allowed_clients.push(reader.string());
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
            allowed_clients: Array.isArray(object === null || object === void 0 ? void 0 : object.allowed_clients)
                ? object.allowed_clients.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.allowed_clients) {
            obj.allowed_clients = message.allowed_clients.map((e) => e);
        }
        else {
            obj.allowed_clients = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseParams();
        message.allowed_clients = ((_a = object.allowed_clients) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
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
//# sourceMappingURL=client.js.map