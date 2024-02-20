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
exports.Sequence = exports.Contract = exports.Code = exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("./types");
exports.protobufPackage = "secret.compute.v1beta1";
function createBaseGenesisState() {
    return { codes: [], contracts: [], sequences: [] };
}
exports.GenesisState = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.codes) {
            exports.Code.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.contracts) {
            exports.Contract.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.sequences) {
            exports.Sequence.encode(v, writer.uint32(34).fork()).ldelim();
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
                case 2:
                    message.codes.push(exports.Code.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.contracts.push(exports.Contract.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.sequences.push(exports.Sequence.decode(reader, reader.uint32()));
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
            codes: Array.isArray(object === null || object === void 0 ? void 0 : object.codes)
                ? object.codes.map((e) => exports.Code.fromJSON(e))
                : [],
            contracts: Array.isArray(object === null || object === void 0 ? void 0 : object.contracts)
                ? object.contracts.map((e) => exports.Contract.fromJSON(e))
                : [],
            sequences: Array.isArray(object === null || object === void 0 ? void 0 : object.sequences)
                ? object.sequences.map((e) => exports.Sequence.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.codes) {
            obj.codes = message.codes.map((e) => (e ? exports.Code.toJSON(e) : undefined));
        }
        else {
            obj.codes = [];
        }
        if (message.contracts) {
            obj.contracts = message.contracts.map((e) => e ? exports.Contract.toJSON(e) : undefined);
        }
        else {
            obj.contracts = [];
        }
        if (message.sequences) {
            obj.sequences = message.sequences.map((e) => e ? exports.Sequence.toJSON(e) : undefined);
        }
        else {
            obj.sequences = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGenesisState();
        message.codes = ((_a = object.codes) === null || _a === void 0 ? void 0 : _a.map((e) => exports.Code.fromPartial(e))) || [];
        message.contracts =
            ((_b = object.contracts) === null || _b === void 0 ? void 0 : _b.map((e) => exports.Contract.fromPartial(e))) || [];
        message.sequences =
            ((_c = object.sequences) === null || _c === void 0 ? void 0 : _c.map((e) => exports.Sequence.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCode() {
    return { code_id: "0", code_info: undefined, code_bytes: new Uint8Array() };
}
exports.Code = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code_id !== "0") {
            writer.uint32(8).uint64(message.code_id);
        }
        if (message.code_info !== undefined) {
            types_1.CodeInfo.encode(message.code_info, writer.uint32(18).fork()).ldelim();
        }
        if (message.code_bytes.length !== 0) {
            writer.uint32(26).bytes(message.code_bytes);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.code_info = types_1.CodeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.code_bytes = reader.bytes();
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
            code_id: isSet(object.code_id) ? String(object.code_id) : "0",
            code_info: isSet(object.code_info)
                ? types_1.CodeInfo.fromJSON(object.code_info)
                : undefined,
            code_bytes: isSet(object.code_bytes)
                ? bytesFromBase64(object.code_bytes)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.code_id !== undefined && (obj.code_id = message.code_id);
        message.code_info !== undefined &&
            (obj.code_info = message.code_info
                ? types_1.CodeInfo.toJSON(message.code_info)
                : undefined);
        message.code_bytes !== undefined &&
            (obj.code_bytes = base64FromBytes(message.code_bytes !== undefined
                ? message.code_bytes
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCode();
        message.code_id = (_a = object.code_id) !== null && _a !== void 0 ? _a : "0";
        message.code_info =
            object.code_info !== undefined && object.code_info !== null
                ? types_1.CodeInfo.fromPartial(object.code_info)
                : undefined;
        message.code_bytes = (_b = object.code_bytes) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseContract() {
    return {
        contract_address: new Uint8Array(),
        contract_info: undefined,
        contract_state: [],
        contract_custom_info: undefined,
    };
}
exports.Contract = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contract_address.length !== 0) {
            writer.uint32(10).bytes(message.contract_address);
        }
        if (message.contract_info !== undefined) {
            types_1.ContractInfo.encode(message.contract_info, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.contract_state) {
            types_1.Model.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.contract_custom_info !== undefined) {
            types_1.ContractCustomInfo.encode(message.contract_custom_info, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract_address = reader.bytes();
                    break;
                case 2:
                    message.contract_info = types_1.ContractInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.contract_state.push(types_1.Model.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.contract_custom_info = types_1.ContractCustomInfo.decode(reader, reader.uint32());
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
            contract_address: isSet(object.contract_address)
                ? bytesFromBase64(object.contract_address)
                : new Uint8Array(),
            contract_info: isSet(object.contract_info)
                ? types_1.ContractInfo.fromJSON(object.contract_info)
                : undefined,
            contract_state: Array.isArray(object === null || object === void 0 ? void 0 : object.contract_state)
                ? object.contract_state.map((e) => types_1.Model.fromJSON(e))
                : [],
            contract_custom_info: isSet(object.contract_custom_info)
                ? types_1.ContractCustomInfo.fromJSON(object.contract_custom_info)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.contract_address !== undefined &&
            (obj.contract_address = base64FromBytes(message.contract_address !== undefined
                ? message.contract_address
                : new Uint8Array()));
        message.contract_info !== undefined &&
            (obj.contract_info = message.contract_info
                ? types_1.ContractInfo.toJSON(message.contract_info)
                : undefined);
        if (message.contract_state) {
            obj.contract_state = message.contract_state.map((e) => e ? types_1.Model.toJSON(e) : undefined);
        }
        else {
            obj.contract_state = [];
        }
        message.contract_custom_info !== undefined &&
            (obj.contract_custom_info = message.contract_custom_info
                ? types_1.ContractCustomInfo.toJSON(message.contract_custom_info)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseContract();
        message.contract_address = (_a = object.contract_address) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.contract_info =
            object.contract_info !== undefined && object.contract_info !== null
                ? types_1.ContractInfo.fromPartial(object.contract_info)
                : undefined;
        message.contract_state =
            ((_b = object.contract_state) === null || _b === void 0 ? void 0 : _b.map((e) => types_1.Model.fromPartial(e))) || [];
        message.contract_custom_info =
            object.contract_custom_info !== undefined &&
                object.contract_custom_info !== null
                ? types_1.ContractCustomInfo.fromPartial(object.contract_custom_info)
                : undefined;
        return message;
    },
};
function createBaseSequence() {
    return { id_key: new Uint8Array(), value: "0" };
}
exports.Sequence = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id_key.length !== 0) {
            writer.uint32(10).bytes(message.id_key);
        }
        if (message.value !== "0") {
            writer.uint32(16).uint64(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSequence();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id_key = reader.bytes();
                    break;
                case 2:
                    message.value = longToString(reader.uint64());
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
            id_key: isSet(object.id_key)
                ? bytesFromBase64(object.id_key)
                : new Uint8Array(),
            value: isSet(object.value) ? String(object.value) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.id_key !== undefined &&
            (obj.id_key = base64FromBytes(message.id_key !== undefined ? message.id_key : new Uint8Array()));
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSequence();
        message.id_key = (_a = object.id_key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : "0";
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
//# sourceMappingURL=genesis.js.map