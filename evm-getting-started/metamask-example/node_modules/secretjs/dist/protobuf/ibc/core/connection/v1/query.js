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
exports.QueryClientImpl = exports.QueryConnectionConsensusStateResponse = exports.QueryConnectionConsensusStateRequest = exports.QueryConnectionClientStateResponse = exports.QueryConnectionClientStateRequest = exports.QueryClientConnectionsResponse = exports.QueryClientConnectionsRequest = exports.QueryConnectionsResponse = exports.QueryConnectionsRequest = exports.QueryConnectionResponse = exports.QueryConnectionRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const connection_1 = require("./connection");
const client_1 = require("../../client/v1/client");
const pagination_1 = require("../../../../cosmos/base/query/v1beta1/pagination");
const any_1 = require("../../../../google/protobuf/any");
exports.protobufPackage = "ibc.core.connection.v1";
function createBaseQueryConnectionRequest() {
    return { connection_id: "" };
}
exports.QueryConnectionRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined &&
            (obj.connection_id = message.connection_id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConnectionRequest();
        message.connection_id = (_a = object.connection_id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryConnectionResponse() {
    return {
        connection: undefined,
        proof: new Uint8Array(),
        proof_height: undefined,
    };
}
exports.QueryConnectionResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection !== undefined) {
            connection_1.ConnectionEnd.encode(message.connection, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection = connection_1.ConnectionEnd.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            connection: isSet(object.connection)
                ? connection_1.ConnectionEnd.fromJSON(object.connection)
                : undefined,
            proof: isSet(object.proof)
                ? bytesFromBase64(object.proof)
                : new Uint8Array(),
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? connection_1.ConnectionEnd.toJSON(message.connection)
                : undefined);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConnectionResponse();
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? connection_1.ConnectionEnd.fromPartial(object.connection)
                : undefined;
        message.proof = (_a = object.proof) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        return message;
    },
};
function createBaseQueryConnectionsRequest() {
    return { pagination: undefined };
}
exports.QueryConnectionsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryConnectionsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryConnectionsResponse() {
    return { connections: [], pagination: undefined, height: undefined };
}
exports.QueryConnectionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.connections) {
            connection_1.IdentifiedConnection.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        if (message.height !== undefined) {
            client_1.Height.encode(message.height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connections.push(connection_1.IdentifiedConnection.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.height = client_1.Height.decode(reader, reader.uint32());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
            height: isSet(object.height) ? client_1.Height.fromJSON(object.height) : undefined,
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
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        message.height !== undefined &&
            (obj.height = message.height ? client_1.Height.toJSON(message.height) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConnectionsResponse();
        message.connections =
            ((_a = object.connections) === null || _a === void 0 ? void 0 : _a.map((e) => connection_1.IdentifiedConnection.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        message.height =
            object.height !== undefined && object.height !== null
                ? client_1.Height.fromPartial(object.height)
                : undefined;
        return message;
    },
};
function createBaseQueryClientConnectionsRequest() {
    return { client_id: "" };
}
exports.QueryClientConnectionsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientConnectionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryClientConnectionsRequest();
        message.client_id = (_a = object.client_id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryClientConnectionsResponse() {
    return {
        connection_paths: [],
        proof: new Uint8Array(),
        proof_height: undefined,
    };
}
exports.QueryClientConnectionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.connection_paths) {
            writer.uint32(10).string(v);
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryClientConnectionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_paths.push(reader.string());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            connection_paths: Array.isArray(object === null || object === void 0 ? void 0 : object.connection_paths)
                ? object.connection_paths.map((e) => String(e))
                : [],
            proof: isSet(object.proof)
                ? bytesFromBase64(object.proof)
                : new Uint8Array(),
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.connection_paths) {
            obj.connection_paths = message.connection_paths.map((e) => e);
        }
        else {
            obj.connection_paths = [];
        }
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryClientConnectionsResponse();
        message.connection_paths = ((_a = object.connection_paths) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.proof = (_b = object.proof) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        return message;
    },
};
function createBaseQueryConnectionClientStateRequest() {
    return { connection_id: "" };
}
exports.QueryConnectionClientStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionClientStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.connection_id !== undefined &&
            (obj.connection_id = message.connection_id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConnectionClientStateRequest();
        message.connection_id = (_a = object.connection_id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryConnectionClientStateResponse() {
    return {
        identified_client_state: undefined,
        proof: new Uint8Array(),
        proof_height: undefined,
    };
}
exports.QueryConnectionClientStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.identified_client_state !== undefined) {
            client_1.IdentifiedClientState.encode(message.identified_client_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.proof.length !== 0) {
            writer.uint32(18).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionClientStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.identified_client_state = client_1.IdentifiedClientState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proof = reader.bytes();
                    break;
                case 3:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            identified_client_state: isSet(object.identified_client_state)
                ? client_1.IdentifiedClientState.fromJSON(object.identified_client_state)
                : undefined,
            proof: isSet(object.proof)
                ? bytesFromBase64(object.proof)
                : new Uint8Array(),
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.identified_client_state !== undefined &&
            (obj.identified_client_state = message.identified_client_state
                ? client_1.IdentifiedClientState.toJSON(message.identified_client_state)
                : undefined);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryConnectionClientStateResponse();
        message.identified_client_state =
            object.identified_client_state !== undefined &&
                object.identified_client_state !== null
                ? client_1.IdentifiedClientState.fromPartial(object.identified_client_state)
                : undefined;
        message.proof = (_a = object.proof) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        return message;
    },
};
function createBaseQueryConnectionConsensusStateRequest() {
    return { connection_id: "", revision_number: "0", revision_height: "0" };
}
exports.QueryConnectionConsensusStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.connection_id !== "") {
            writer.uint32(10).string(message.connection_id);
        }
        if (message.revision_number !== "0") {
            writer.uint32(16).uint64(message.revision_number);
        }
        if (message.revision_height !== "0") {
            writer.uint32(24).uint64(message.revision_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.connection_id = reader.string();
                    break;
                case 2:
                    message.revision_number = longToString(reader.uint64());
                    break;
                case 3:
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
            connection_id: isSet(object.connection_id)
                ? String(object.connection_id)
                : "",
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
        message.connection_id !== undefined &&
            (obj.connection_id = message.connection_id);
        message.revision_number !== undefined &&
            (obj.revision_number = message.revision_number);
        message.revision_height !== undefined &&
            (obj.revision_height = message.revision_height);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQueryConnectionConsensusStateRequest();
        message.connection_id = (_a = object.connection_id) !== null && _a !== void 0 ? _a : "";
        message.revision_number = (_b = object.revision_number) !== null && _b !== void 0 ? _b : "0";
        message.revision_height = (_c = object.revision_height) !== null && _c !== void 0 ? _c : "0";
        return message;
    },
};
function createBaseQueryConnectionConsensusStateResponse() {
    return {
        consensus_state: undefined,
        client_id: "",
        proof: new Uint8Array(),
        proof_height: undefined,
    };
}
exports.QueryConnectionConsensusStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.consensus_state !== undefined) {
            any_1.Any.encode(message.consensus_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.client_id !== "") {
            writer.uint32(18).string(message.client_id);
        }
        if (message.proof.length !== 0) {
            writer.uint32(26).bytes(message.proof);
        }
        if (message.proof_height !== undefined) {
            client_1.Height.encode(message.proof_height, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryConnectionConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.consensus_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.client_id = reader.string();
                    break;
                case 3:
                    message.proof = reader.bytes();
                    break;
                case 4:
                    message.proof_height = client_1.Height.decode(reader, reader.uint32());
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
            consensus_state: isSet(object.consensus_state)
                ? any_1.Any.fromJSON(object.consensus_state)
                : undefined,
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            proof: isSet(object.proof)
                ? bytesFromBase64(object.proof)
                : new Uint8Array(),
            proof_height: isSet(object.proof_height)
                ? client_1.Height.fromJSON(object.proof_height)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.consensus_state !== undefined &&
            (obj.consensus_state = message.consensus_state
                ? any_1.Any.toJSON(message.consensus_state)
                : undefined);
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.proof !== undefined &&
            (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
        message.proof_height !== undefined &&
            (obj.proof_height = message.proof_height
                ? client_1.Height.toJSON(message.proof_height)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQueryConnectionConsensusStateResponse();
        message.consensus_state =
            object.consensus_state !== undefined && object.consensus_state !== null
                ? any_1.Any.fromPartial(object.consensus_state)
                : undefined;
        message.client_id = (_a = object.client_id) !== null && _a !== void 0 ? _a : "";
        message.proof = (_b = object.proof) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proof_height =
            object.proof_height !== undefined && object.proof_height !== null
                ? client_1.Height.fromPartial(object.proof_height)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Connection = this.Connection.bind(this);
        this.Connections = this.Connections.bind(this);
        this.ClientConnections = this.ClientConnections.bind(this);
        this.ConnectionClientState = this.ConnectionClientState.bind(this);
        this.ConnectionConsensusState = this.ConnectionConsensusState.bind(this);
    }
    Connection(request) {
        const data = exports.QueryConnectionRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connection", data);
        return promise.then((data) => exports.QueryConnectionResponse.decode(new _m0.Reader(data)));
    }
    Connections(request) {
        const data = exports.QueryConnectionsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "Connections", data);
        return promise.then((data) => exports.QueryConnectionsResponse.decode(new _m0.Reader(data)));
    }
    ClientConnections(request) {
        const data = exports.QueryClientConnectionsRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "ClientConnections", data);
        return promise.then((data) => exports.QueryClientConnectionsResponse.decode(new _m0.Reader(data)));
    }
    ConnectionClientState(request) {
        const data = exports.QueryConnectionClientStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionClientState", data);
        return promise.then((data) => exports.QueryConnectionClientStateResponse.decode(new _m0.Reader(data)));
    }
    ConnectionConsensusState(request) {
        const data = exports.QueryConnectionConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("ibc.core.connection.v1.Query", "ConnectionConsensusState", data);
        return promise.then((data) => exports.QueryConnectionConsensusStateResponse.decode(new _m0.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
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
//# sourceMappingURL=query.js.map