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
exports.ProofOps = exports.ProofOp = exports.DominoOp = exports.ValueOp = exports.Proof = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.crypto";
function createBaseProof() {
    return { total: "0", index: "0", leaf_hash: new Uint8Array(), aunts: [] };
}
exports.Proof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.total !== "0") {
            writer.uint32(8).int64(message.total);
        }
        if (message.index !== "0") {
            writer.uint32(16).int64(message.index);
        }
        if (message.leaf_hash.length !== 0) {
            writer.uint32(26).bytes(message.leaf_hash);
        }
        for (const v of message.aunts) {
            writer.uint32(34).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = longToString(reader.int64());
                    break;
                case 2:
                    message.index = longToString(reader.int64());
                    break;
                case 3:
                    message.leaf_hash = reader.bytes();
                    break;
                case 4:
                    message.aunts.push(reader.bytes());
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
            total: isSet(object.total) ? String(object.total) : "0",
            index: isSet(object.index) ? String(object.index) : "0",
            leaf_hash: isSet(object.leaf_hash)
                ? bytesFromBase64(object.leaf_hash)
                : new Uint8Array(),
            aunts: Array.isArray(object === null || object === void 0 ? void 0 : object.aunts)
                ? object.aunts.map((e) => bytesFromBase64(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.total !== undefined && (obj.total = message.total);
        message.index !== undefined && (obj.index = message.index);
        message.leaf_hash !== undefined &&
            (obj.leaf_hash = base64FromBytes(message.leaf_hash !== undefined ? message.leaf_hash : new Uint8Array()));
        if (message.aunts) {
            obj.aunts = message.aunts.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.aunts = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseProof();
        message.total = (_a = object.total) !== null && _a !== void 0 ? _a : "0";
        message.index = (_b = object.index) !== null && _b !== void 0 ? _b : "0";
        message.leaf_hash = (_c = object.leaf_hash) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.aunts = ((_d = object.aunts) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
function createBaseValueOp() {
    return { key: new Uint8Array(), proof: undefined };
}
exports.ValueOp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.proof !== undefined) {
            exports.Proof.encode(message.proof, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValueOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.proof = exports.Proof.decode(reader, reader.uint32());
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            proof: isSet(object.proof) ? exports.Proof.fromJSON(object.proof) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.proof !== undefined &&
            (obj.proof = message.proof ? exports.Proof.toJSON(message.proof) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseValueOp();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.proof =
            object.proof !== undefined && object.proof !== null
                ? exports.Proof.fromPartial(object.proof)
                : undefined;
        return message;
    },
};
function createBaseDominoOp() {
    return { key: "", input: "", output: "" };
}
exports.DominoOp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key !== "") {
            writer.uint32(10).string(message.key);
        }
        if (message.input !== "") {
            writer.uint32(18).string(message.input);
        }
        if (message.output !== "") {
            writer.uint32(26).string(message.output);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDominoOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.string();
                    break;
                case 2:
                    message.input = reader.string();
                    break;
                case 3:
                    message.output = reader.string();
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
            key: isSet(object.key) ? String(object.key) : "",
            input: isSet(object.input) ? String(object.input) : "",
            output: isSet(object.output) ? String(object.output) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined && (obj.key = message.key);
        message.input !== undefined && (obj.input = message.input);
        message.output !== undefined && (obj.output = message.output);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseDominoOp();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : "";
        message.input = (_b = object.input) !== null && _b !== void 0 ? _b : "";
        message.output = (_c = object.output) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseProofOp() {
    return { type: "", key: new Uint8Array(), data: new Uint8Array() };
}
exports.ProofOp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.key.length !== 0) {
            writer.uint32(18).bytes(message.key);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.key = reader.bytes();
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
            type: isSet(object.type) ? String(object.type) : "",
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            data: isSet(object.data)
                ? bytesFromBase64(object.data)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseProofOp();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.key = (_b = object.key) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.data = (_c = object.data) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseProofOps() {
    return { ops: [] };
}
exports.ProofOps = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.ops) {
            exports.ProofOp.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofOps();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ops.push(exports.ProofOp.decode(reader, reader.uint32()));
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
            ops: Array.isArray(object === null || object === void 0 ? void 0 : object.ops)
                ? object.ops.map((e) => exports.ProofOp.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.ops) {
            obj.ops = message.ops.map((e) => (e ? exports.ProofOp.toJSON(e) : undefined));
        }
        else {
            obj.ops = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseProofOps();
        message.ops = ((_a = object.ops) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ProofOp.fromPartial(e))) || [];
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
//# sourceMappingURL=proof.js.map