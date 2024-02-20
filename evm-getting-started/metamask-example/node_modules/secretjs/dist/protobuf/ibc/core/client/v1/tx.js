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
exports.MsgClientImpl = exports.MsgSubmitMisbehaviourResponse = exports.MsgSubmitMisbehaviour = exports.MsgUpgradeClientResponse = exports.MsgUpgradeClient = exports.MsgUpdateClientResponse = exports.MsgUpdateClient = exports.MsgCreateClientResponse = exports.MsgCreateClient = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const any_1 = require("../../../../google/protobuf/any");
exports.protobufPackage = "ibc.core.client.v1";
function createBaseMsgCreateClient() {
    return { client_state: undefined, consensus_state: undefined, signer: "" };
}
exports.MsgCreateClient = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.consensus_state !== undefined) {
            any_1.Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateClient();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.consensus_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signer = reader.string();
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
            client_state: isSet(object.client_state)
                ? any_1.Any.fromJSON(object.client_state)
                : undefined,
            consensus_state: isSet(object.consensus_state)
                ? any_1.Any.fromJSON(object.consensus_state)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_state !== undefined &&
            (obj.client_state = message.client_state
                ? any_1.Any.toJSON(message.client_state)
                : undefined);
        message.consensus_state !== undefined &&
            (obj.consensus_state = message.consensus_state
                ? any_1.Any.toJSON(message.consensus_state)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgCreateClient();
        message.client_state =
            object.client_state !== undefined && object.client_state !== null
                ? any_1.Any.fromPartial(object.client_state)
                : undefined;
        message.consensus_state =
            object.consensus_state !== undefined && object.consensus_state !== null
                ? any_1.Any.fromPartial(object.consensus_state)
                : undefined;
        message.signer = (_a = object.signer) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseMsgCreateClientResponse() {
    return {};
}
exports.MsgCreateClientResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgCreateClientResponse();
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
        const message = createBaseMsgCreateClientResponse();
        return message;
    },
};
function createBaseMsgUpdateClient() {
    return { client_id: "", header: undefined, signer: "" };
}
exports.MsgUpdateClient = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.header !== undefined) {
            any_1.Any.encode(message.header, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClient();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.header = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signer = reader.string();
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
            header: isSet(object.header) ? any_1.Any.fromJSON(object.header) : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.header !== undefined &&
            (obj.header = message.header ? any_1.Any.toJSON(message.header) : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUpdateClient();
        message.client_id = (_a = object.client_id) !== null && _a !== void 0 ? _a : "";
        message.header =
            object.header !== undefined && object.header !== null
                ? any_1.Any.fromPartial(object.header)
                : undefined;
        message.signer = (_b = object.signer) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgUpdateClientResponse() {
    return {};
}
exports.MsgUpdateClientResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateClientResponse();
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
        const message = createBaseMsgUpdateClientResponse();
        return message;
    },
};
function createBaseMsgUpgradeClient() {
    return {
        client_id: "",
        client_state: undefined,
        consensus_state: undefined,
        proof_upgrade_client: new Uint8Array(),
        proof_upgrade_consensus_state: new Uint8Array(),
        signer: "",
    };
}
exports.MsgUpgradeClient = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(18).fork()).ldelim();
        }
        if (message.consensus_state !== undefined) {
            any_1.Any.encode(message.consensus_state, writer.uint32(26).fork()).ldelim();
        }
        if (message.proof_upgrade_client.length !== 0) {
            writer.uint32(34).bytes(message.proof_upgrade_client);
        }
        if (message.proof_upgrade_consensus_state.length !== 0) {
            writer.uint32(42).bytes(message.proof_upgrade_consensus_state);
        }
        if (message.signer !== "") {
            writer.uint32(50).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpgradeClient();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.consensus_state = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.proof_upgrade_client = reader.bytes();
                    break;
                case 5:
                    message.proof_upgrade_consensus_state = reader.bytes();
                    break;
                case 6:
                    message.signer = reader.string();
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
            consensus_state: isSet(object.consensus_state)
                ? any_1.Any.fromJSON(object.consensus_state)
                : undefined,
            proof_upgrade_client: isSet(object.proof_upgrade_client)
                ? bytesFromBase64(object.proof_upgrade_client)
                : new Uint8Array(),
            proof_upgrade_consensus_state: isSet(object.proof_upgrade_consensus_state)
                ? bytesFromBase64(object.proof_upgrade_consensus_state)
                : new Uint8Array(),
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.client_state !== undefined &&
            (obj.client_state = message.client_state
                ? any_1.Any.toJSON(message.client_state)
                : undefined);
        message.consensus_state !== undefined &&
            (obj.consensus_state = message.consensus_state
                ? any_1.Any.toJSON(message.consensus_state)
                : undefined);
        message.proof_upgrade_client !== undefined &&
            (obj.proof_upgrade_client = base64FromBytes(message.proof_upgrade_client !== undefined
                ? message.proof_upgrade_client
                : new Uint8Array()));
        message.proof_upgrade_consensus_state !== undefined &&
            (obj.proof_upgrade_consensus_state = base64FromBytes(message.proof_upgrade_consensus_state !== undefined
                ? message.proof_upgrade_consensus_state
                : new Uint8Array()));
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgUpgradeClient();
        message.client_id = (_a = object.client_id) !== null && _a !== void 0 ? _a : "";
        message.client_state =
            object.client_state !== undefined && object.client_state !== null
                ? any_1.Any.fromPartial(object.client_state)
                : undefined;
        message.consensus_state =
            object.consensus_state !== undefined && object.consensus_state !== null
                ? any_1.Any.fromPartial(object.consensus_state)
                : undefined;
        message.proof_upgrade_client =
            (_b = object.proof_upgrade_client) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.proof_upgrade_consensus_state =
            (_c = object.proof_upgrade_consensus_state) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.signer = (_d = object.signer) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgUpgradeClientResponse() {
    return {};
}
exports.MsgUpgradeClientResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpgradeClientResponse();
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
        const message = createBaseMsgUpgradeClientResponse();
        return message;
    },
};
function createBaseMsgSubmitMisbehaviour() {
    return { client_id: "", misbehaviour: undefined, signer: "" };
}
exports.MsgSubmitMisbehaviour = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.misbehaviour !== undefined) {
            any_1.Any.encode(message.misbehaviour, writer.uint32(18).fork()).ldelim();
        }
        if (message.signer !== "") {
            writer.uint32(26).string(message.signer);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitMisbehaviour();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.misbehaviour = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signer = reader.string();
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
            misbehaviour: isSet(object.misbehaviour)
                ? any_1.Any.fromJSON(object.misbehaviour)
                : undefined,
            signer: isSet(object.signer) ? String(object.signer) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.misbehaviour !== undefined &&
            (obj.misbehaviour = message.misbehaviour
                ? any_1.Any.toJSON(message.misbehaviour)
                : undefined);
        message.signer !== undefined && (obj.signer = message.signer);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgSubmitMisbehaviour();
        message.client_id = (_a = object.client_id) !== null && _a !== void 0 ? _a : "";
        message.misbehaviour =
            object.misbehaviour !== undefined && object.misbehaviour !== null
                ? any_1.Any.fromPartial(object.misbehaviour)
                : undefined;
        message.signer = (_b = object.signer) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseMsgSubmitMisbehaviourResponse() {
    return {};
}
exports.MsgSubmitMisbehaviourResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgSubmitMisbehaviourResponse();
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
        const message = createBaseMsgSubmitMisbehaviourResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreateClient = this.CreateClient.bind(this);
        this.UpdateClient = this.UpdateClient.bind(this);
        this.UpgradeClient = this.UpgradeClient.bind(this);
        this.SubmitMisbehaviour = this.SubmitMisbehaviour.bind(this);
    }
    CreateClient(request) {
        const data = exports.MsgCreateClient.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "CreateClient", data);
        return promise.then((data) => exports.MsgCreateClientResponse.decode(new _m0.Reader(data)));
    }
    UpdateClient(request) {
        const data = exports.MsgUpdateClient.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpdateClient", data);
        return promise.then((data) => exports.MsgUpdateClientResponse.decode(new _m0.Reader(data)));
    }
    UpgradeClient(request) {
        const data = exports.MsgUpgradeClient.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "UpgradeClient", data);
        return promise.then((data) => exports.MsgUpgradeClientResponse.decode(new _m0.Reader(data)));
    }
    SubmitMisbehaviour(request) {
        const data = exports.MsgSubmitMisbehaviour.encode(request).finish();
        const promise = this.rpc.request("ibc.core.client.v1.Msg", "SubmitMisbehaviour", data);
        return promise.then((data) => exports.MsgSubmitMisbehaviourResponse.decode(new _m0.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
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
//# sourceMappingURL=tx.js.map