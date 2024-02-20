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
exports.CompressedNonExistenceProof = exports.CompressedExistenceProof = exports.CompressedBatchEntry = exports.CompressedBatchProof = exports.BatchEntry = exports.BatchProof = exports.InnerSpec = exports.ProofSpec = exports.InnerOp = exports.LeafOp = exports.CommitmentProof = exports.NonExistenceProof = exports.ExistenceProof = exports.lengthOpToJSON = exports.lengthOpFromJSON = exports.LengthOp = exports.hashOpToJSON = exports.hashOpFromJSON = exports.HashOp = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "ics23";
var HashOp;
(function (HashOp) {
    /** NO_HASH - NO_HASH is the default if no data passed. Note this is an illegal argument some places. */
    HashOp[HashOp["NO_HASH"] = 0] = "NO_HASH";
    HashOp[HashOp["SHA256"] = 1] = "SHA256";
    HashOp[HashOp["SHA512"] = 2] = "SHA512";
    HashOp[HashOp["KECCAK"] = 3] = "KECCAK";
    HashOp[HashOp["RIPEMD160"] = 4] = "RIPEMD160";
    /** BITCOIN - ripemd160(sha256(x)) */
    HashOp[HashOp["BITCOIN"] = 5] = "BITCOIN";
    HashOp[HashOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(HashOp = exports.HashOp || (exports.HashOp = {}));
function hashOpFromJSON(object) {
    switch (object) {
        case 0:
        case "NO_HASH":
            return HashOp.NO_HASH;
        case 1:
        case "SHA256":
            return HashOp.SHA256;
        case 2:
        case "SHA512":
            return HashOp.SHA512;
        case 3:
        case "KECCAK":
            return HashOp.KECCAK;
        case 4:
        case "RIPEMD160":
            return HashOp.RIPEMD160;
        case 5:
        case "BITCOIN":
            return HashOp.BITCOIN;
        case -1:
        case "UNRECOGNIZED":
        default:
            return HashOp.UNRECOGNIZED;
    }
}
exports.hashOpFromJSON = hashOpFromJSON;
function hashOpToJSON(object) {
    switch (object) {
        case HashOp.NO_HASH:
            return "NO_HASH";
        case HashOp.SHA256:
            return "SHA256";
        case HashOp.SHA512:
            return "SHA512";
        case HashOp.KECCAK:
            return "KECCAK";
        case HashOp.RIPEMD160:
            return "RIPEMD160";
        case HashOp.BITCOIN:
            return "BITCOIN";
        default:
            return "UNKNOWN";
    }
}
exports.hashOpToJSON = hashOpToJSON;
/**
 * LengthOp defines how to process the key and value of the LeafOp
 * to include length information. After encoding the length with the given
 * algorithm, the length will be prepended to the key and value bytes.
 * (Each one with it's own encoded length)
 */
var LengthOp;
(function (LengthOp) {
    /** NO_PREFIX - NO_PREFIX don't include any length info */
    LengthOp[LengthOp["NO_PREFIX"] = 0] = "NO_PREFIX";
    /** VAR_PROTO - VAR_PROTO uses protobuf (and go-amino) varint encoding of the length */
    LengthOp[LengthOp["VAR_PROTO"] = 1] = "VAR_PROTO";
    /** VAR_RLP - VAR_RLP uses rlp int encoding of the length */
    LengthOp[LengthOp["VAR_RLP"] = 2] = "VAR_RLP";
    /** FIXED32_BIG - FIXED32_BIG uses big-endian encoding of the length as a 32 bit integer */
    LengthOp[LengthOp["FIXED32_BIG"] = 3] = "FIXED32_BIG";
    /** FIXED32_LITTLE - FIXED32_LITTLE uses little-endian encoding of the length as a 32 bit integer */
    LengthOp[LengthOp["FIXED32_LITTLE"] = 4] = "FIXED32_LITTLE";
    /** FIXED64_BIG - FIXED64_BIG uses big-endian encoding of the length as a 64 bit integer */
    LengthOp[LengthOp["FIXED64_BIG"] = 5] = "FIXED64_BIG";
    /** FIXED64_LITTLE - FIXED64_LITTLE uses little-endian encoding of the length as a 64 bit integer */
    LengthOp[LengthOp["FIXED64_LITTLE"] = 6] = "FIXED64_LITTLE";
    /** REQUIRE_32_BYTES - REQUIRE_32_BYTES is like NONE, but will fail if the input is not exactly 32 bytes (sha256 output) */
    LengthOp[LengthOp["REQUIRE_32_BYTES"] = 7] = "REQUIRE_32_BYTES";
    /** REQUIRE_64_BYTES - REQUIRE_64_BYTES is like NONE, but will fail if the input is not exactly 64 bytes (sha512 output) */
    LengthOp[LengthOp["REQUIRE_64_BYTES"] = 8] = "REQUIRE_64_BYTES";
    LengthOp[LengthOp["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(LengthOp = exports.LengthOp || (exports.LengthOp = {}));
function lengthOpFromJSON(object) {
    switch (object) {
        case 0:
        case "NO_PREFIX":
            return LengthOp.NO_PREFIX;
        case 1:
        case "VAR_PROTO":
            return LengthOp.VAR_PROTO;
        case 2:
        case "VAR_RLP":
            return LengthOp.VAR_RLP;
        case 3:
        case "FIXED32_BIG":
            return LengthOp.FIXED32_BIG;
        case 4:
        case "FIXED32_LITTLE":
            return LengthOp.FIXED32_LITTLE;
        case 5:
        case "FIXED64_BIG":
            return LengthOp.FIXED64_BIG;
        case 6:
        case "FIXED64_LITTLE":
            return LengthOp.FIXED64_LITTLE;
        case 7:
        case "REQUIRE_32_BYTES":
            return LengthOp.REQUIRE_32_BYTES;
        case 8:
        case "REQUIRE_64_BYTES":
            return LengthOp.REQUIRE_64_BYTES;
        case -1:
        case "UNRECOGNIZED":
        default:
            return LengthOp.UNRECOGNIZED;
    }
}
exports.lengthOpFromJSON = lengthOpFromJSON;
function lengthOpToJSON(object) {
    switch (object) {
        case LengthOp.NO_PREFIX:
            return "NO_PREFIX";
        case LengthOp.VAR_PROTO:
            return "VAR_PROTO";
        case LengthOp.VAR_RLP:
            return "VAR_RLP";
        case LengthOp.FIXED32_BIG:
            return "FIXED32_BIG";
        case LengthOp.FIXED32_LITTLE:
            return "FIXED32_LITTLE";
        case LengthOp.FIXED64_BIG:
            return "FIXED64_BIG";
        case LengthOp.FIXED64_LITTLE:
            return "FIXED64_LITTLE";
        case LengthOp.REQUIRE_32_BYTES:
            return "REQUIRE_32_BYTES";
        case LengthOp.REQUIRE_64_BYTES:
            return "REQUIRE_64_BYTES";
        default:
            return "UNKNOWN";
    }
}
exports.lengthOpToJSON = lengthOpToJSON;
function createBaseExistenceProof() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        leaf: undefined,
        path: [],
    };
}
exports.ExistenceProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.leaf !== undefined) {
            exports.LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.path) {
            exports.InnerOp.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.leaf = exports.LeafOp.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.path.push(exports.InnerOp.decode(reader, reader.uint32()));
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
            value: isSet(object.value)
                ? bytesFromBase64(object.value)
                : new Uint8Array(),
            leaf: isSet(object.leaf) ? exports.LeafOp.fromJSON(object.leaf) : undefined,
            path: Array.isArray(object === null || object === void 0 ? void 0 : object.path)
                ? object.path.map((e) => exports.InnerOp.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.leaf !== undefined &&
            (obj.leaf = message.leaf ? exports.LeafOp.toJSON(message.leaf) : undefined);
        if (message.path) {
            obj.path = message.path.map((e) => (e ? exports.InnerOp.toJSON(e) : undefined));
        }
        else {
            obj.path = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseExistenceProof();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.leaf =
            object.leaf !== undefined && object.leaf !== null
                ? exports.LeafOp.fromPartial(object.leaf)
                : undefined;
        message.path = ((_c = object.path) === null || _c === void 0 ? void 0 : _c.map((e) => exports.InnerOp.fromPartial(e))) || [];
        return message;
    },
};
function createBaseNonExistenceProof() {
    return { key: new Uint8Array(), left: undefined, right: undefined };
}
exports.NonExistenceProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.left !== undefined) {
            exports.ExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
        }
        if (message.right !== undefined) {
            exports.ExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNonExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.left = exports.ExistenceProof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.right = exports.ExistenceProof.decode(reader, reader.uint32());
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
            left: isSet(object.left)
                ? exports.ExistenceProof.fromJSON(object.left)
                : undefined,
            right: isSet(object.right)
                ? exports.ExistenceProof.fromJSON(object.right)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.left !== undefined &&
            (obj.left = message.left
                ? exports.ExistenceProof.toJSON(message.left)
                : undefined);
        message.right !== undefined &&
            (obj.right = message.right
                ? exports.ExistenceProof.toJSON(message.right)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseNonExistenceProof();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.left =
            object.left !== undefined && object.left !== null
                ? exports.ExistenceProof.fromPartial(object.left)
                : undefined;
        message.right =
            object.right !== undefined && object.right !== null
                ? exports.ExistenceProof.fromPartial(object.right)
                : undefined;
        return message;
    },
};
function createBaseCommitmentProof() {
    return {
        exist: undefined,
        nonexist: undefined,
        batch: undefined,
        compressed: undefined,
    };
}
exports.CommitmentProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.exist !== undefined) {
            exports.ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            exports.NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        if (message.batch !== undefined) {
            exports.BatchProof.encode(message.batch, writer.uint32(26).fork()).ldelim();
        }
        if (message.compressed !== undefined) {
            exports.CompressedBatchProof.encode(message.compressed, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCommitmentProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exist = exports.ExistenceProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonexist = exports.NonExistenceProof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.batch = exports.BatchProof.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.compressed = exports.CompressedBatchProof.decode(reader, reader.uint32());
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
            exist: isSet(object.exist)
                ? exports.ExistenceProof.fromJSON(object.exist)
                : undefined,
            nonexist: isSet(object.nonexist)
                ? exports.NonExistenceProof.fromJSON(object.nonexist)
                : undefined,
            batch: isSet(object.batch)
                ? exports.BatchProof.fromJSON(object.batch)
                : undefined,
            compressed: isSet(object.compressed)
                ? exports.CompressedBatchProof.fromJSON(object.compressed)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.exist !== undefined &&
            (obj.exist = message.exist
                ? exports.ExistenceProof.toJSON(message.exist)
                : undefined);
        message.nonexist !== undefined &&
            (obj.nonexist = message.nonexist
                ? exports.NonExistenceProof.toJSON(message.nonexist)
                : undefined);
        message.batch !== undefined &&
            (obj.batch = message.batch
                ? exports.BatchProof.toJSON(message.batch)
                : undefined);
        message.compressed !== undefined &&
            (obj.compressed = message.compressed
                ? exports.CompressedBatchProof.toJSON(message.compressed)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCommitmentProof();
        message.exist =
            object.exist !== undefined && object.exist !== null
                ? exports.ExistenceProof.fromPartial(object.exist)
                : undefined;
        message.nonexist =
            object.nonexist !== undefined && object.nonexist !== null
                ? exports.NonExistenceProof.fromPartial(object.nonexist)
                : undefined;
        message.batch =
            object.batch !== undefined && object.batch !== null
                ? exports.BatchProof.fromPartial(object.batch)
                : undefined;
        message.compressed =
            object.compressed !== undefined && object.compressed !== null
                ? exports.CompressedBatchProof.fromPartial(object.compressed)
                : undefined;
        return message;
    },
};
function createBaseLeafOp() {
    return {
        hash: 0,
        prehash_key: 0,
        prehash_value: 0,
        length: 0,
        prefix: new Uint8Array(),
    };
}
exports.LeafOp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== 0) {
            writer.uint32(8).int32(message.hash);
        }
        if (message.prehash_key !== 0) {
            writer.uint32(16).int32(message.prehash_key);
        }
        if (message.prehash_value !== 0) {
            writer.uint32(24).int32(message.prehash_value);
        }
        if (message.length !== 0) {
            writer.uint32(32).int32(message.length);
        }
        if (message.prefix.length !== 0) {
            writer.uint32(42).bytes(message.prefix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLeafOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.int32();
                    break;
                case 2:
                    message.prehash_key = reader.int32();
                    break;
                case 3:
                    message.prehash_value = reader.int32();
                    break;
                case 4:
                    message.length = reader.int32();
                    break;
                case 5:
                    message.prefix = reader.bytes();
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
            hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0,
            prehash_key: isSet(object.prehash_key)
                ? hashOpFromJSON(object.prehash_key)
                : 0,
            prehash_value: isSet(object.prehash_value)
                ? hashOpFromJSON(object.prehash_value)
                : 0,
            length: isSet(object.length) ? lengthOpFromJSON(object.length) : 0,
            prefix: isSet(object.prefix)
                ? bytesFromBase64(object.prefix)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
        message.prehash_key !== undefined &&
            (obj.prehash_key = hashOpToJSON(message.prehash_key));
        message.prehash_value !== undefined &&
            (obj.prehash_value = hashOpToJSON(message.prehash_value));
        message.length !== undefined &&
            (obj.length = lengthOpToJSON(message.length));
        message.prefix !== undefined &&
            (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseLeafOp();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : 0;
        message.prehash_key = (_b = object.prehash_key) !== null && _b !== void 0 ? _b : 0;
        message.prehash_value = (_c = object.prehash_value) !== null && _c !== void 0 ? _c : 0;
        message.length = (_d = object.length) !== null && _d !== void 0 ? _d : 0;
        message.prefix = (_e = object.prefix) !== null && _e !== void 0 ? _e : new Uint8Array();
        return message;
    },
};
function createBaseInnerOp() {
    return { hash: 0, prefix: new Uint8Array(), suffix: new Uint8Array() };
}
exports.InnerOp = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash !== 0) {
            writer.uint32(8).int32(message.hash);
        }
        if (message.prefix.length !== 0) {
            writer.uint32(18).bytes(message.prefix);
        }
        if (message.suffix.length !== 0) {
            writer.uint32(26).bytes(message.suffix);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInnerOp();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.int32();
                    break;
                case 2:
                    message.prefix = reader.bytes();
                    break;
                case 3:
                    message.suffix = reader.bytes();
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
            hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0,
            prefix: isSet(object.prefix)
                ? bytesFromBase64(object.prefix)
                : new Uint8Array(),
            suffix: isSet(object.suffix)
                ? bytesFromBase64(object.suffix)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
        message.prefix !== undefined &&
            (obj.prefix = base64FromBytes(message.prefix !== undefined ? message.prefix : new Uint8Array()));
        message.suffix !== undefined &&
            (obj.suffix = base64FromBytes(message.suffix !== undefined ? message.suffix : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseInnerOp();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : 0;
        message.prefix = (_b = object.prefix) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.suffix = (_c = object.suffix) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseProofSpec() {
    return {
        leaf_spec: undefined,
        inner_spec: undefined,
        max_depth: 0,
        min_depth: 0,
    };
}
exports.ProofSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.leaf_spec !== undefined) {
            exports.LeafOp.encode(message.leaf_spec, writer.uint32(10).fork()).ldelim();
        }
        if (message.inner_spec !== undefined) {
            exports.InnerSpec.encode(message.inner_spec, writer.uint32(18).fork()).ldelim();
        }
        if (message.max_depth !== 0) {
            writer.uint32(24).int32(message.max_depth);
        }
        if (message.min_depth !== 0) {
            writer.uint32(32).int32(message.min_depth);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProofSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.leaf_spec = exports.LeafOp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.inner_spec = exports.InnerSpec.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.max_depth = reader.int32();
                    break;
                case 4:
                    message.min_depth = reader.int32();
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
            leaf_spec: isSet(object.leaf_spec)
                ? exports.LeafOp.fromJSON(object.leaf_spec)
                : undefined,
            inner_spec: isSet(object.inner_spec)
                ? exports.InnerSpec.fromJSON(object.inner_spec)
                : undefined,
            max_depth: isSet(object.max_depth) ? Number(object.max_depth) : 0,
            min_depth: isSet(object.min_depth) ? Number(object.min_depth) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.leaf_spec !== undefined &&
            (obj.leaf_spec = message.leaf_spec
                ? exports.LeafOp.toJSON(message.leaf_spec)
                : undefined);
        message.inner_spec !== undefined &&
            (obj.inner_spec = message.inner_spec
                ? exports.InnerSpec.toJSON(message.inner_spec)
                : undefined);
        message.max_depth !== undefined &&
            (obj.max_depth = Math.round(message.max_depth));
        message.min_depth !== undefined &&
            (obj.min_depth = Math.round(message.min_depth));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseProofSpec();
        message.leaf_spec =
            object.leaf_spec !== undefined && object.leaf_spec !== null
                ? exports.LeafOp.fromPartial(object.leaf_spec)
                : undefined;
        message.inner_spec =
            object.inner_spec !== undefined && object.inner_spec !== null
                ? exports.InnerSpec.fromPartial(object.inner_spec)
                : undefined;
        message.max_depth = (_a = object.max_depth) !== null && _a !== void 0 ? _a : 0;
        message.min_depth = (_b = object.min_depth) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseInnerSpec() {
    return {
        child_order: [],
        child_size: 0,
        min_prefix_length: 0,
        max_prefix_length: 0,
        empty_child: new Uint8Array(),
        hash: 0,
    };
}
exports.InnerSpec = {
    encode(message, writer = _m0.Writer.create()) {
        writer.uint32(10).fork();
        for (const v of message.child_order) {
            writer.int32(v);
        }
        writer.ldelim();
        if (message.child_size !== 0) {
            writer.uint32(16).int32(message.child_size);
        }
        if (message.min_prefix_length !== 0) {
            writer.uint32(24).int32(message.min_prefix_length);
        }
        if (message.max_prefix_length !== 0) {
            writer.uint32(32).int32(message.max_prefix_length);
        }
        if (message.empty_child.length !== 0) {
            writer.uint32(42).bytes(message.empty_child);
        }
        if (message.hash !== 0) {
            writer.uint32(48).int32(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInnerSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.child_order.push(reader.int32());
                        }
                    }
                    else {
                        message.child_order.push(reader.int32());
                    }
                    break;
                case 2:
                    message.child_size = reader.int32();
                    break;
                case 3:
                    message.min_prefix_length = reader.int32();
                    break;
                case 4:
                    message.max_prefix_length = reader.int32();
                    break;
                case 5:
                    message.empty_child = reader.bytes();
                    break;
                case 6:
                    message.hash = reader.int32();
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
            child_order: Array.isArray(object === null || object === void 0 ? void 0 : object.child_order)
                ? object.child_order.map((e) => Number(e))
                : [],
            child_size: isSet(object.child_size) ? Number(object.child_size) : 0,
            min_prefix_length: isSet(object.min_prefix_length)
                ? Number(object.min_prefix_length)
                : 0,
            max_prefix_length: isSet(object.max_prefix_length)
                ? Number(object.max_prefix_length)
                : 0,
            empty_child: isSet(object.empty_child)
                ? bytesFromBase64(object.empty_child)
                : new Uint8Array(),
            hash: isSet(object.hash) ? hashOpFromJSON(object.hash) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.child_order) {
            obj.child_order = message.child_order.map((e) => Math.round(e));
        }
        else {
            obj.child_order = [];
        }
        message.child_size !== undefined &&
            (obj.child_size = Math.round(message.child_size));
        message.min_prefix_length !== undefined &&
            (obj.min_prefix_length = Math.round(message.min_prefix_length));
        message.max_prefix_length !== undefined &&
            (obj.max_prefix_length = Math.round(message.max_prefix_length));
        message.empty_child !== undefined &&
            (obj.empty_child = base64FromBytes(message.empty_child !== undefined
                ? message.empty_child
                : new Uint8Array()));
        message.hash !== undefined && (obj.hash = hashOpToJSON(message.hash));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseInnerSpec();
        message.child_order = ((_a = object.child_order) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.child_size = (_b = object.child_size) !== null && _b !== void 0 ? _b : 0;
        message.min_prefix_length = (_c = object.min_prefix_length) !== null && _c !== void 0 ? _c : 0;
        message.max_prefix_length = (_d = object.max_prefix_length) !== null && _d !== void 0 ? _d : 0;
        message.empty_child = (_e = object.empty_child) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.hash = (_f = object.hash) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
function createBaseBatchProof() {
    return { entries: [] };
}
exports.BatchProof = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.entries) {
            exports.BatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(exports.BatchEntry.decode(reader, reader.uint32()));
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
            entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries)
                ? object.entries.map((e) => exports.BatchEntry.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? exports.BatchEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBatchProof();
        message.entries =
            ((_a = object.entries) === null || _a === void 0 ? void 0 : _a.map((e) => exports.BatchEntry.fromPartial(e))) || [];
        return message;
    },
};
function createBaseBatchEntry() {
    return { exist: undefined, nonexist: undefined };
}
exports.BatchEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.exist !== undefined) {
            exports.ExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            exports.NonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBatchEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exist = exports.ExistenceProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonexist = exports.NonExistenceProof.decode(reader, reader.uint32());
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
            exist: isSet(object.exist)
                ? exports.ExistenceProof.fromJSON(object.exist)
                : undefined,
            nonexist: isSet(object.nonexist)
                ? exports.NonExistenceProof.fromJSON(object.nonexist)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.exist !== undefined &&
            (obj.exist = message.exist
                ? exports.ExistenceProof.toJSON(message.exist)
                : undefined);
        message.nonexist !== undefined &&
            (obj.nonexist = message.nonexist
                ? exports.NonExistenceProof.toJSON(message.nonexist)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBatchEntry();
        message.exist =
            object.exist !== undefined && object.exist !== null
                ? exports.ExistenceProof.fromPartial(object.exist)
                : undefined;
        message.nonexist =
            object.nonexist !== undefined && object.nonexist !== null
                ? exports.NonExistenceProof.fromPartial(object.nonexist)
                : undefined;
        return message;
    },
};
function createBaseCompressedBatchProof() {
    return { entries: [], lookup_inners: [] };
}
exports.CompressedBatchProof = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.entries) {
            exports.CompressedBatchEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.lookup_inners) {
            exports.InnerOp.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedBatchProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(exports.CompressedBatchEntry.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.lookup_inners.push(exports.InnerOp.decode(reader, reader.uint32()));
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
            entries: Array.isArray(object === null || object === void 0 ? void 0 : object.entries)
                ? object.entries.map((e) => exports.CompressedBatchEntry.fromJSON(e))
                : [],
            lookup_inners: Array.isArray(object === null || object === void 0 ? void 0 : object.lookup_inners)
                ? object.lookup_inners.map((e) => exports.InnerOp.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? exports.CompressedBatchEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        if (message.lookup_inners) {
            obj.lookup_inners = message.lookup_inners.map((e) => e ? exports.InnerOp.toJSON(e) : undefined);
        }
        else {
            obj.lookup_inners = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCompressedBatchProof();
        message.entries =
            ((_a = object.entries) === null || _a === void 0 ? void 0 : _a.map((e) => exports.CompressedBatchEntry.fromPartial(e))) || [];
        message.lookup_inners =
            ((_b = object.lookup_inners) === null || _b === void 0 ? void 0 : _b.map((e) => exports.InnerOp.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCompressedBatchEntry() {
    return { exist: undefined, nonexist: undefined };
}
exports.CompressedBatchEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.exist !== undefined) {
            exports.CompressedExistenceProof.encode(message.exist, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonexist !== undefined) {
            exports.CompressedNonExistenceProof.encode(message.nonexist, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedBatchEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.exist = exports.CompressedExistenceProof.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nonexist = exports.CompressedNonExistenceProof.decode(reader, reader.uint32());
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
            exist: isSet(object.exist)
                ? exports.CompressedExistenceProof.fromJSON(object.exist)
                : undefined,
            nonexist: isSet(object.nonexist)
                ? exports.CompressedNonExistenceProof.fromJSON(object.nonexist)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.exist !== undefined &&
            (obj.exist = message.exist
                ? exports.CompressedExistenceProof.toJSON(message.exist)
                : undefined);
        message.nonexist !== undefined &&
            (obj.nonexist = message.nonexist
                ? exports.CompressedNonExistenceProof.toJSON(message.nonexist)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseCompressedBatchEntry();
        message.exist =
            object.exist !== undefined && object.exist !== null
                ? exports.CompressedExistenceProof.fromPartial(object.exist)
                : undefined;
        message.nonexist =
            object.nonexist !== undefined && object.nonexist !== null
                ? exports.CompressedNonExistenceProof.fromPartial(object.nonexist)
                : undefined;
        return message;
    },
};
function createBaseCompressedExistenceProof() {
    return {
        key: new Uint8Array(),
        value: new Uint8Array(),
        leaf: undefined,
        path: [],
    };
}
exports.CompressedExistenceProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.value.length !== 0) {
            writer.uint32(18).bytes(message.value);
        }
        if (message.leaf !== undefined) {
            exports.LeafOp.encode(message.leaf, writer.uint32(26).fork()).ldelim();
        }
        writer.uint32(34).fork();
        for (const v of message.path) {
            writer.int32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.value = reader.bytes();
                    break;
                case 3:
                    message.leaf = exports.LeafOp.decode(reader, reader.uint32());
                    break;
                case 4:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.path.push(reader.int32());
                        }
                    }
                    else {
                        message.path.push(reader.int32());
                    }
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
            value: isSet(object.value)
                ? bytesFromBase64(object.value)
                : new Uint8Array(),
            leaf: isSet(object.leaf) ? exports.LeafOp.fromJSON(object.leaf) : undefined,
            path: Array.isArray(object === null || object === void 0 ? void 0 : object.path)
                ? object.path.map((e) => Number(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.value !== undefined &&
            (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
        message.leaf !== undefined &&
            (obj.leaf = message.leaf ? exports.LeafOp.toJSON(message.leaf) : undefined);
        if (message.path) {
            obj.path = message.path.map((e) => Math.round(e));
        }
        else {
            obj.path = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCompressedExistenceProof();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.leaf =
            object.leaf !== undefined && object.leaf !== null
                ? exports.LeafOp.fromPartial(object.leaf)
                : undefined;
        message.path = ((_c = object.path) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseCompressedNonExistenceProof() {
    return { key: new Uint8Array(), left: undefined, right: undefined };
}
exports.CompressedNonExistenceProof = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.left !== undefined) {
            exports.CompressedExistenceProof.encode(message.left, writer.uint32(18).fork()).ldelim();
        }
        if (message.right !== undefined) {
            exports.CompressedExistenceProof.encode(message.right, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCompressedNonExistenceProof();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.left = exports.CompressedExistenceProof.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.right = exports.CompressedExistenceProof.decode(reader, reader.uint32());
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
            left: isSet(object.left)
                ? exports.CompressedExistenceProof.fromJSON(object.left)
                : undefined,
            right: isSet(object.right)
                ? exports.CompressedExistenceProof.fromJSON(object.right)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.left !== undefined &&
            (obj.left = message.left
                ? exports.CompressedExistenceProof.toJSON(message.left)
                : undefined);
        message.right !== undefined &&
            (obj.right = message.right
                ? exports.CompressedExistenceProof.toJSON(message.right)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCompressedNonExistenceProof();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.left =
            object.left !== undefined && object.left !== null
                ? exports.CompressedExistenceProof.fromPartial(object.left)
                : undefined;
        message.right =
            object.right !== undefined && object.right !== null
                ? exports.CompressedExistenceProof.fromPartial(object.right)
                : undefined;
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
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=proofs.js.map