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
exports.CanonicalVote = exports.CanonicalProposal = exports.CanonicalPartSetHeader = exports.CanonicalBlockID = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("./types");
const timestamp_1 = require("../../google/protobuf/timestamp");
exports.protobufPackage = "tendermint.types";
function createBaseCanonicalBlockID() {
    return { hash: new Uint8Array(), part_set_header: undefined };
}
exports.CanonicalBlockID = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.hash.length !== 0) {
            writer.uint32(10).bytes(message.hash);
        }
        if (message.part_set_header !== undefined) {
            exports.CanonicalPartSetHeader.encode(message.part_set_header, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCanonicalBlockID();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.hash = reader.bytes();
                    break;
                case 2:
                    message.part_set_header = exports.CanonicalPartSetHeader.decode(reader, reader.uint32());
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
            hash: isSet(object.hash)
                ? bytesFromBase64(object.hash)
                : new Uint8Array(),
            part_set_header: isSet(object.part_set_header)
                ? exports.CanonicalPartSetHeader.fromJSON(object.part_set_header)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        message.part_set_header !== undefined &&
            (obj.part_set_header = message.part_set_header
                ? exports.CanonicalPartSetHeader.toJSON(message.part_set_header)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCanonicalBlockID();
        message.hash = (_a = object.hash) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.part_set_header =
            object.part_set_header !== undefined && object.part_set_header !== null
                ? exports.CanonicalPartSetHeader.fromPartial(object.part_set_header)
                : undefined;
        return message;
    },
};
function createBaseCanonicalPartSetHeader() {
    return { total: 0, hash: new Uint8Array() };
}
exports.CanonicalPartSetHeader = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.total !== 0) {
            writer.uint32(8).uint32(message.total);
        }
        if (message.hash.length !== 0) {
            writer.uint32(18).bytes(message.hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCanonicalPartSetHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.total = reader.uint32();
                    break;
                case 2:
                    message.hash = reader.bytes();
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
            total: isSet(object.total) ? Number(object.total) : 0,
            hash: isSet(object.hash)
                ? bytesFromBase64(object.hash)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.total !== undefined && (obj.total = Math.round(message.total));
        message.hash !== undefined &&
            (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCanonicalPartSetHeader();
        message.total = (_a = object.total) !== null && _a !== void 0 ? _a : 0;
        message.hash = (_b = object.hash) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseCanonicalProposal() {
    return {
        type: 0,
        height: "0",
        round: "0",
        pol_round: "0",
        block_id: undefined,
        timestamp: undefined,
        chain_id: "",
    };
}
exports.CanonicalProposal = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.height !== "0") {
            writer.uint32(17).sfixed64(message.height);
        }
        if (message.round !== "0") {
            writer.uint32(25).sfixed64(message.round);
        }
        if (message.pol_round !== "0") {
            writer.uint32(32).int64(message.pol_round);
        }
        if (message.block_id !== undefined) {
            exports.CanonicalBlockID.encode(message.block_id, writer.uint32(42).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(message.timestamp, writer.uint32(50).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(58).string(message.chain_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCanonicalProposal();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.height = longToString(reader.sfixed64());
                    break;
                case 3:
                    message.round = longToString(reader.sfixed64());
                    break;
                case 4:
                    message.pol_round = longToString(reader.int64());
                    break;
                case 5:
                    message.block_id = exports.CanonicalBlockID.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.timestamp = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.chain_id = reader.string();
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
            type: isSet(object.type) ? (0, types_1.signedMsgTypeFromJSON)(object.type) : 0,
            height: isSet(object.height) ? String(object.height) : "0",
            round: isSet(object.round) ? String(object.round) : "0",
            pol_round: isSet(object.pol_round) ? String(object.pol_round) : "0",
            block_id: isSet(object.block_id)
                ? exports.CanonicalBlockID.fromJSON(object.block_id)
                : undefined,
            timestamp: isSet(object.timestamp)
                ? fromJsonTimestamp(object.timestamp)
                : undefined,
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = (0, types_1.signedMsgTypeToJSON)(message.type));
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = message.round);
        message.pol_round !== undefined && (obj.pol_round = message.pol_round);
        message.block_id !== undefined &&
            (obj.block_id = message.block_id
                ? exports.CanonicalBlockID.toJSON(message.block_id)
                : undefined);
        message.timestamp !== undefined &&
            (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCanonicalProposal();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : "0";
        message.round = (_c = object.round) !== null && _c !== void 0 ? _c : "0";
        message.pol_round = (_d = object.pol_round) !== null && _d !== void 0 ? _d : "0";
        message.block_id =
            object.block_id !== undefined && object.block_id !== null
                ? exports.CanonicalBlockID.fromPartial(object.block_id)
                : undefined;
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? timestamp_1.Timestamp.fromPartial(object.timestamp)
                : undefined;
        message.chain_id = (_e = object.chain_id) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseCanonicalVote() {
    return {
        type: 0,
        height: "0",
        round: "0",
        block_id: undefined,
        timestamp: undefined,
        chain_id: "",
    };
}
exports.CanonicalVote = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.height !== "0") {
            writer.uint32(17).sfixed64(message.height);
        }
        if (message.round !== "0") {
            writer.uint32(25).sfixed64(message.round);
        }
        if (message.block_id !== undefined) {
            exports.CanonicalBlockID.encode(message.block_id, writer.uint32(34).fork()).ldelim();
        }
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
        }
        if (message.chain_id !== "") {
            writer.uint32(50).string(message.chain_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCanonicalVote();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.height = longToString(reader.sfixed64());
                    break;
                case 3:
                    message.round = longToString(reader.sfixed64());
                    break;
                case 4:
                    message.block_id = exports.CanonicalBlockID.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.timestamp = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.chain_id = reader.string();
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
            type: isSet(object.type) ? (0, types_1.signedMsgTypeFromJSON)(object.type) : 0,
            height: isSet(object.height) ? String(object.height) : "0",
            round: isSet(object.round) ? String(object.round) : "0",
            block_id: isSet(object.block_id)
                ? exports.CanonicalBlockID.fromJSON(object.block_id)
                : undefined,
            timestamp: isSet(object.timestamp)
                ? fromJsonTimestamp(object.timestamp)
                : undefined,
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined &&
            (obj.type = (0, types_1.signedMsgTypeToJSON)(message.type));
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = message.round);
        message.block_id !== undefined &&
            (obj.block_id = message.block_id
                ? exports.CanonicalBlockID.toJSON(message.block_id)
                : undefined);
        message.timestamp !== undefined &&
            (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCanonicalVote();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : "0";
        message.round = (_c = object.round) !== null && _c !== void 0 ? _c : "0";
        message.block_id =
            object.block_id !== undefined && object.block_id !== null
                ? exports.CanonicalBlockID.fromPartial(object.block_id)
                : undefined;
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? timestamp_1.Timestamp.fromPartial(object.timestamp)
                : undefined;
        message.chain_id = (_d = object.chain_id) !== null && _d !== void 0 ? _d : "";
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
function toTimestamp(date) {
    const seconds = Math.trunc(date.getTime() / 1000).toString();
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = Number(t.seconds) * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return toTimestamp(o);
    }
    else if (typeof o === "string") {
        return toTimestamp(new Date(o));
    }
    else {
        return timestamp_1.Timestamp.fromJSON(o);
    }
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
//# sourceMappingURL=canonical.js.map