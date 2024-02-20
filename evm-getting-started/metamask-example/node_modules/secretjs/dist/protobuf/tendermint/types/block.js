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
exports.Block = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("./types");
const evidence_1 = require("./evidence");
exports.protobufPackage = "tendermint.types";
function createBaseBlock() {
    return {
        header: undefined,
        data: undefined,
        evidence: undefined,
        last_commit: undefined,
    };
}
exports.Block = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.header !== undefined) {
            types_1.Header.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.data !== undefined) {
            types_1.Data.encode(message.data, writer.uint32(18).fork()).ldelim();
        }
        if (message.evidence !== undefined) {
            evidence_1.EvidenceList.encode(message.evidence, writer.uint32(26).fork()).ldelim();
        }
        if (message.last_commit !== undefined) {
            types_1.Commit.encode(message.last_commit, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBlock();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = types_1.Header.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.data = types_1.Data.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.evidence = evidence_1.EvidenceList.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.last_commit = types_1.Commit.decode(reader, reader.uint32());
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
            header: isSet(object.header) ? types_1.Header.fromJSON(object.header) : undefined,
            data: isSet(object.data) ? types_1.Data.fromJSON(object.data) : undefined,
            evidence: isSet(object.evidence)
                ? evidence_1.EvidenceList.fromJSON(object.evidence)
                : undefined,
            last_commit: isSet(object.last_commit)
                ? types_1.Commit.fromJSON(object.last_commit)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined &&
            (obj.header = message.header ? types_1.Header.toJSON(message.header) : undefined);
        message.data !== undefined &&
            (obj.data = message.data ? types_1.Data.toJSON(message.data) : undefined);
        message.evidence !== undefined &&
            (obj.evidence = message.evidence
                ? evidence_1.EvidenceList.toJSON(message.evidence)
                : undefined);
        message.last_commit !== undefined &&
            (obj.last_commit = message.last_commit
                ? types_1.Commit.toJSON(message.last_commit)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseBlock();
        message.header =
            object.header !== undefined && object.header !== null
                ? types_1.Header.fromPartial(object.header)
                : undefined;
        message.data =
            object.data !== undefined && object.data !== null
                ? types_1.Data.fromPartial(object.data)
                : undefined;
        message.evidence =
            object.evidence !== undefined && object.evidence !== null
                ? evidence_1.EvidenceList.fromPartial(object.evidence)
                : undefined;
        message.last_commit =
            object.last_commit !== undefined && object.last_commit !== null
                ? types_1.Commit.fromPartial(object.last_commit)
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
//# sourceMappingURL=block.js.map