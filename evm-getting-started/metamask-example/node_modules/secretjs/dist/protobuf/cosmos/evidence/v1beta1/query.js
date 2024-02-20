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
exports.QueryClientImpl = exports.QueryAllEvidenceResponse = exports.QueryAllEvidenceRequest = exports.QueryEvidenceResponse = exports.QueryEvidenceRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const any_1 = require("../../../google/protobuf/any");
const pagination_1 = require("../../base/query/v1beta1/pagination");
exports.protobufPackage = "cosmos.evidence.v1beta1";
function createBaseQueryEvidenceRequest() {
    return { evidence_hash: new Uint8Array() };
}
exports.QueryEvidenceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.evidence_hash.length !== 0) {
            writer.uint32(10).bytes(message.evidence_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEvidenceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence_hash = reader.bytes();
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
            evidence_hash: isSet(object.evidence_hash)
                ? bytesFromBase64(object.evidence_hash)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.evidence_hash !== undefined &&
            (obj.evidence_hash = base64FromBytes(message.evidence_hash !== undefined
                ? message.evidence_hash
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryEvidenceRequest();
        message.evidence_hash = (_a = object.evidence_hash) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseQueryEvidenceResponse() {
    return { evidence: undefined };
}
exports.QueryEvidenceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.evidence !== undefined) {
            any_1.Any.encode(message.evidence, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryEvidenceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence = any_1.Any.decode(reader, reader.uint32());
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
            evidence: isSet(object.evidence)
                ? any_1.Any.fromJSON(object.evidence)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.evidence !== undefined &&
            (obj.evidence = message.evidence
                ? any_1.Any.toJSON(message.evidence)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryEvidenceResponse();
        message.evidence =
            object.evidence !== undefined && object.evidence !== null
                ? any_1.Any.fromPartial(object.evidence)
                : undefined;
        return message;
    },
};
function createBaseQueryAllEvidenceRequest() {
    return { pagination: undefined };
}
exports.QueryAllEvidenceRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllEvidenceRequest();
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
        const message = createBaseQueryAllEvidenceRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
function createBaseQueryAllEvidenceResponse() {
    return { evidence: [], pagination: undefined };
}
exports.QueryAllEvidenceResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.evidence) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllEvidenceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.evidence.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            evidence: Array.isArray(object === null || object === void 0 ? void 0 : object.evidence)
                ? object.evidence.map((e) => any_1.Any.fromJSON(e))
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.evidence) {
            obj.evidence = message.evidence.map((e) => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.evidence = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAllEvidenceResponse();
        message.evidence = ((_a = object.evidence) === null || _a === void 0 ? void 0 : _a.map((e) => any_1.Any.fromPartial(e))) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.Evidence = this.Evidence.bind(this);
        this.AllEvidence = this.AllEvidence.bind(this);
    }
    Evidence(request) {
        const data = exports.QueryEvidenceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "Evidence", data);
        return promise.then((data) => exports.QueryEvidenceResponse.decode(new _m0.Reader(data)));
    }
    AllEvidence(request) {
        const data = exports.QueryAllEvidenceRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "AllEvidence", data);
        return promise.then((data) => exports.QueryAllEvidenceResponse.decode(new _m0.Reader(data)));
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
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map