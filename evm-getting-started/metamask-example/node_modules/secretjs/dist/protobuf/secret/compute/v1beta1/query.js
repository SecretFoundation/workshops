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
exports.QueryClientImpl = exports.QueryContractHistoryResponse = exports.QueryContractHistoryRequest = exports.DecryptedAnswers = exports.DecryptedAnswer = exports.QueryCodeHashResponse = exports.QueryContractLabelResponse = exports.QueryContractAddressResponse = exports.QueryCodesResponse = exports.QueryCodeResponse = exports.CodeInfoResponse = exports.QueryContractsByCodeIdResponse = exports.ContractInfoWithAddress = exports.QueryContractInfoResponse = exports.QuerySecretContractResponse = exports.QueryByCodeIdRequest = exports.QueryByContractAddressRequest = exports.QueryByLabelRequest = exports.QuerySecretContractRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("./types");
const abci_1 = require("../../../cosmos/base/abci/v1beta1/abci");
const empty_1 = require("../../../google/protobuf/empty");
exports.protobufPackage = "secret.compute.v1beta1";
function createBaseQuerySecretContractRequest() {
    return { contract_address: "", query: new Uint8Array() };
}
exports.QuerySecretContractRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contract_address !== "") {
            writer.uint32(10).string(message.contract_address);
        }
        if (message.query.length !== 0) {
            writer.uint32(18).bytes(message.query);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySecretContractRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract_address = reader.string();
                    break;
                case 2:
                    message.query = reader.bytes();
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
                ? String(object.contract_address)
                : "",
            query: isSet(object.query)
                ? bytesFromBase64(object.query)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.contract_address !== undefined &&
            (obj.contract_address = message.contract_address);
        message.query !== undefined &&
            (obj.query = base64FromBytes(message.query !== undefined ? message.query : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQuerySecretContractRequest();
        message.contract_address = (_a = object.contract_address) !== null && _a !== void 0 ? _a : "";
        message.query = (_b = object.query) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseQueryByLabelRequest() {
    return { label: "" };
}
exports.QueryByLabelRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.label !== "") {
            writer.uint32(10).string(message.label);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryByLabelRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.label = reader.string();
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
            label: isSet(object.label) ? String(object.label) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.label !== undefined && (obj.label = message.label);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryByLabelRequest();
        message.label = (_a = object.label) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryByContractAddressRequest() {
    return { contract_address: "" };
}
exports.QueryByContractAddressRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contract_address !== "") {
            writer.uint32(10).string(message.contract_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryByContractAddressRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract_address = reader.string();
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
                ? String(object.contract_address)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.contract_address !== undefined &&
            (obj.contract_address = message.contract_address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryByContractAddressRequest();
        message.contract_address = (_a = object.contract_address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryByCodeIdRequest() {
    return { code_id: "0" };
}
exports.QueryByCodeIdRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code_id !== "0") {
            writer.uint32(8).uint64(message.code_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryByCodeIdRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code_id = longToString(reader.uint64());
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
        };
    },
    toJSON(message) {
        const obj = {};
        message.code_id !== undefined && (obj.code_id = message.code_id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryByCodeIdRequest();
        message.code_id = (_a = object.code_id) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQuerySecretContractResponse() {
    return { data: new Uint8Array() };
}
exports.QuerySecretContractResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuerySecretContractResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            data: isSet(object.data)
                ? bytesFromBase64(object.data)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQuerySecretContractResponse();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseQueryContractInfoResponse() {
    return { contract_address: "", contract_info: undefined };
}
exports.QueryContractInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contract_address !== "") {
            writer.uint32(10).string(message.contract_address);
        }
        if (message.contract_info !== undefined) {
            types_1.ContractInfo.encode(message.contract_info, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract_address = reader.string();
                    break;
                case 2:
                    message.contract_info = types_1.ContractInfo.decode(reader, reader.uint32());
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
                ? String(object.contract_address)
                : "",
            contract_info: isSet(object.contract_info)
                ? types_1.ContractInfo.fromJSON(object.contract_info)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.contract_address !== undefined &&
            (obj.contract_address = message.contract_address);
        message.contract_info !== undefined &&
            (obj.contract_info = message.contract_info
                ? types_1.ContractInfo.toJSON(message.contract_info)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryContractInfoResponse();
        message.contract_address = (_a = object.contract_address) !== null && _a !== void 0 ? _a : "";
        message.contract_info =
            object.contract_info !== undefined && object.contract_info !== null
                ? types_1.ContractInfo.fromPartial(object.contract_info)
                : undefined;
        return message;
    },
};
function createBaseContractInfoWithAddress() {
    return { contract_address: "", contract_info: undefined };
}
exports.ContractInfoWithAddress = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contract_address !== "") {
            writer.uint32(10).string(message.contract_address);
        }
        if (message.contract_info !== undefined) {
            types_1.ContractInfo.encode(message.contract_info, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractInfoWithAddress();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract_address = reader.string();
                    break;
                case 2:
                    message.contract_info = types_1.ContractInfo.decode(reader, reader.uint32());
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
                ? String(object.contract_address)
                : "",
            contract_info: isSet(object.contract_info)
                ? types_1.ContractInfo.fromJSON(object.contract_info)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.contract_address !== undefined &&
            (obj.contract_address = message.contract_address);
        message.contract_info !== undefined &&
            (obj.contract_info = message.contract_info
                ? types_1.ContractInfo.toJSON(message.contract_info)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseContractInfoWithAddress();
        message.contract_address = (_a = object.contract_address) !== null && _a !== void 0 ? _a : "";
        message.contract_info =
            object.contract_info !== undefined && object.contract_info !== null
                ? types_1.ContractInfo.fromPartial(object.contract_info)
                : undefined;
        return message;
    },
};
function createBaseQueryContractsByCodeIdResponse() {
    return { contract_infos: [] };
}
exports.QueryContractsByCodeIdResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.contract_infos) {
            exports.ContractInfoWithAddress.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractsByCodeIdResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract_infos.push(exports.ContractInfoWithAddress.decode(reader, reader.uint32()));
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
            contract_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.contract_infos)
                ? object.contract_infos.map((e) => exports.ContractInfoWithAddress.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.contract_infos) {
            obj.contract_infos = message.contract_infos.map((e) => e ? exports.ContractInfoWithAddress.toJSON(e) : undefined);
        }
        else {
            obj.contract_infos = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryContractsByCodeIdResponse();
        message.contract_infos =
            ((_a = object.contract_infos) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ContractInfoWithAddress.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCodeInfoResponse() {
    return { code_id: "0", creator: "", code_hash: "", source: "", builder: "" };
}
exports.CodeInfoResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code_id !== "0") {
            writer.uint32(8).uint64(message.code_id);
        }
        if (message.creator !== "") {
            writer.uint32(18).string(message.creator);
        }
        if (message.code_hash !== "") {
            writer.uint32(26).string(message.code_hash);
        }
        if (message.source !== "") {
            writer.uint32(34).string(message.source);
        }
        if (message.builder !== "") {
            writer.uint32(42).string(message.builder);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCodeInfoResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.creator = reader.string();
                    break;
                case 3:
                    message.code_hash = reader.string();
                    break;
                case 4:
                    message.source = reader.string();
                    break;
                case 5:
                    message.builder = reader.string();
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            code_hash: isSet(object.code_hash) ? String(object.code_hash) : "",
            source: isSet(object.source) ? String(object.source) : "",
            builder: isSet(object.builder) ? String(object.builder) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.code_id !== undefined && (obj.code_id = message.code_id);
        message.creator !== undefined && (obj.creator = message.creator);
        message.code_hash !== undefined && (obj.code_hash = message.code_hash);
        message.source !== undefined && (obj.source = message.source);
        message.builder !== undefined && (obj.builder = message.builder);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCodeInfoResponse();
        message.code_id = (_a = object.code_id) !== null && _a !== void 0 ? _a : "0";
        message.creator = (_b = object.creator) !== null && _b !== void 0 ? _b : "";
        message.code_hash = (_c = object.code_hash) !== null && _c !== void 0 ? _c : "";
        message.source = (_d = object.source) !== null && _d !== void 0 ? _d : "";
        message.builder = (_e = object.builder) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseQueryCodeResponse() {
    return { code_info: undefined, wasm: new Uint8Array() };
}
exports.QueryCodeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code_info !== undefined) {
            exports.CodeInfoResponse.encode(message.code_info, writer.uint32(10).fork()).ldelim();
        }
        if (message.wasm.length !== 0) {
            writer.uint32(18).bytes(message.wasm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodeResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code_info = exports.CodeInfoResponse.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.wasm = reader.bytes();
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
            code_info: isSet(object.code_info)
                ? exports.CodeInfoResponse.fromJSON(object.code_info)
                : undefined,
            wasm: isSet(object.wasm)
                ? bytesFromBase64(object.wasm)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.code_info !== undefined &&
            (obj.code_info = message.code_info
                ? exports.CodeInfoResponse.toJSON(message.code_info)
                : undefined);
        message.wasm !== undefined &&
            (obj.wasm = base64FromBytes(message.wasm !== undefined ? message.wasm : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryCodeResponse();
        message.code_info =
            object.code_info !== undefined && object.code_info !== null
                ? exports.CodeInfoResponse.fromPartial(object.code_info)
                : undefined;
        message.wasm = (_a = object.wasm) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseQueryCodesResponse() {
    return { code_infos: [] };
}
exports.QueryCodesResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.code_infos) {
            exports.CodeInfoResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code_infos.push(exports.CodeInfoResponse.decode(reader, reader.uint32()));
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
            code_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.code_infos)
                ? object.code_infos.map((e) => exports.CodeInfoResponse.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.code_infos) {
            obj.code_infos = message.code_infos.map((e) => e ? exports.CodeInfoResponse.toJSON(e) : undefined);
        }
        else {
            obj.code_infos = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryCodesResponse();
        message.code_infos =
            ((_a = object.code_infos) === null || _a === void 0 ? void 0 : _a.map((e) => exports.CodeInfoResponse.fromPartial(e))) || [];
        return message;
    },
};
function createBaseQueryContractAddressResponse() {
    return { contract_address: "" };
}
exports.QueryContractAddressResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contract_address !== "") {
            writer.uint32(10).string(message.contract_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractAddressResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract_address = reader.string();
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
                ? String(object.contract_address)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.contract_address !== undefined &&
            (obj.contract_address = message.contract_address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryContractAddressResponse();
        message.contract_address = (_a = object.contract_address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryContractLabelResponse() {
    return { label: "" };
}
exports.QueryContractLabelResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.label !== "") {
            writer.uint32(10).string(message.label);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractLabelResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.label = reader.string();
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
            label: isSet(object.label) ? String(object.label) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.label !== undefined && (obj.label = message.label);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryContractLabelResponse();
        message.label = (_a = object.label) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryCodeHashResponse() {
    return { code_hash: "" };
}
exports.QueryCodeHashResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code_hash !== "") {
            writer.uint32(10).string(message.code_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCodeHashResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code_hash = reader.string();
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
            code_hash: isSet(object.code_hash) ? String(object.code_hash) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.code_hash !== undefined && (obj.code_hash = message.code_hash);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryCodeHashResponse();
        message.code_hash = (_a = object.code_hash) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDecryptedAnswer() {
    return { type: "", input: "", output_data: "", output_data_as_string: "" };
}
exports.DecryptedAnswer = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== "") {
            writer.uint32(10).string(message.type);
        }
        if (message.input !== "") {
            writer.uint32(18).string(message.input);
        }
        if (message.output_data !== "") {
            writer.uint32(26).string(message.output_data);
        }
        if (message.output_data_as_string !== "") {
            writer.uint32(34).string(message.output_data_as_string);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDecryptedAnswer();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.input = reader.string();
                    break;
                case 3:
                    message.output_data = reader.string();
                    break;
                case 4:
                    message.output_data_as_string = reader.string();
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
            input: isSet(object.input) ? String(object.input) : "",
            output_data: isSet(object.output_data) ? String(object.output_data) : "",
            output_data_as_string: isSet(object.output_data_as_string)
                ? String(object.output_data_as_string)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = message.type);
        message.input !== undefined && (obj.input = message.input);
        message.output_data !== undefined &&
            (obj.output_data = message.output_data);
        message.output_data_as_string !== undefined &&
            (obj.output_data_as_string = message.output_data_as_string);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseDecryptedAnswer();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : "";
        message.input = (_b = object.input) !== null && _b !== void 0 ? _b : "";
        message.output_data = (_c = object.output_data) !== null && _c !== void 0 ? _c : "";
        message.output_data_as_string = (_d = object.output_data_as_string) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseDecryptedAnswers() {
    return {
        answers: [],
        output_logs: [],
        output_error: "",
        plaintext_error: "",
    };
}
exports.DecryptedAnswers = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.answers) {
            exports.DecryptedAnswer.encode(v, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.output_logs) {
            abci_1.StringEvent.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.output_error !== "") {
            writer.uint32(26).string(message.output_error);
        }
        if (message.plaintext_error !== "") {
            writer.uint32(34).string(message.plaintext_error);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDecryptedAnswers();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.answers.push(exports.DecryptedAnswer.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.output_logs.push(abci_1.StringEvent.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.output_error = reader.string();
                    break;
                case 4:
                    message.plaintext_error = reader.string();
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
            answers: Array.isArray(object === null || object === void 0 ? void 0 : object.answers)
                ? object.answers.map((e) => exports.DecryptedAnswer.fromJSON(e))
                : [],
            output_logs: Array.isArray(object === null || object === void 0 ? void 0 : object.output_logs)
                ? object.output_logs.map((e) => abci_1.StringEvent.fromJSON(e))
                : [],
            output_error: isSet(object.output_error)
                ? String(object.output_error)
                : "",
            plaintext_error: isSet(object.plaintext_error)
                ? String(object.plaintext_error)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.answers) {
            obj.answers = message.answers.map((e) => e ? exports.DecryptedAnswer.toJSON(e) : undefined);
        }
        else {
            obj.answers = [];
        }
        if (message.output_logs) {
            obj.output_logs = message.output_logs.map((e) => e ? abci_1.StringEvent.toJSON(e) : undefined);
        }
        else {
            obj.output_logs = [];
        }
        message.output_error !== undefined &&
            (obj.output_error = message.output_error);
        message.plaintext_error !== undefined &&
            (obj.plaintext_error = message.plaintext_error);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseDecryptedAnswers();
        message.answers =
            ((_a = object.answers) === null || _a === void 0 ? void 0 : _a.map((e) => exports.DecryptedAnswer.fromPartial(e))) || [];
        message.output_logs =
            ((_b = object.output_logs) === null || _b === void 0 ? void 0 : _b.map((e) => abci_1.StringEvent.fromPartial(e))) || [];
        message.output_error = (_c = object.output_error) !== null && _c !== void 0 ? _c : "";
        message.plaintext_error = (_d = object.plaintext_error) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseQueryContractHistoryRequest() {
    return { contract_address: "" };
}
exports.QueryContractHistoryRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.contract_address !== "") {
            writer.uint32(10).string(message.contract_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractHistoryRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contract_address = reader.string();
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
                ? String(object.contract_address)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.contract_address !== undefined &&
            (obj.contract_address = message.contract_address);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryContractHistoryRequest();
        message.contract_address = (_a = object.contract_address) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryContractHistoryResponse() {
    return { entries: [] };
}
exports.QueryContractHistoryResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.entries) {
            types_1.ContractCodeHistoryEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryContractHistoryResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entries.push(types_1.ContractCodeHistoryEntry.decode(reader, reader.uint32()));
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
                ? object.entries.map((e) => types_1.ContractCodeHistoryEntry.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.entries) {
            obj.entries = message.entries.map((e) => e ? types_1.ContractCodeHistoryEntry.toJSON(e) : undefined);
        }
        else {
            obj.entries = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryContractHistoryResponse();
        message.entries =
            ((_a = object.entries) === null || _a === void 0 ? void 0 : _a.map((e) => types_1.ContractCodeHistoryEntry.fromPartial(e))) || [];
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.ContractInfo = this.ContractInfo.bind(this);
        this.ContractsByCodeId = this.ContractsByCodeId.bind(this);
        this.QuerySecretContract = this.QuerySecretContract.bind(this);
        this.Code = this.Code.bind(this);
        this.Codes = this.Codes.bind(this);
        this.CodeHashByContractAddress = this.CodeHashByContractAddress.bind(this);
        this.CodeHashByCodeId = this.CodeHashByCodeId.bind(this);
        this.LabelByAddress = this.LabelByAddress.bind(this);
        this.AddressByLabel = this.AddressByLabel.bind(this);
        this.ContractHistory = this.ContractHistory.bind(this);
    }
    ContractInfo(request) {
        const data = exports.QueryByContractAddressRequest.encode(request).finish();
        const promise = this.rpc.request("secret.compute.v1beta1.Query", "ContractInfo", data);
        return promise.then((data) => exports.QueryContractInfoResponse.decode(new _m0.Reader(data)));
    }
    ContractsByCodeId(request) {
        const data = exports.QueryByCodeIdRequest.encode(request).finish();
        const promise = this.rpc.request("secret.compute.v1beta1.Query", "ContractsByCodeId", data);
        return promise.then((data) => exports.QueryContractsByCodeIdResponse.decode(new _m0.Reader(data)));
    }
    QuerySecretContract(request) {
        const data = exports.QuerySecretContractRequest.encode(request).finish();
        const promise = this.rpc.request("secret.compute.v1beta1.Query", "QuerySecretContract", data);
        return promise.then((data) => exports.QuerySecretContractResponse.decode(new _m0.Reader(data)));
    }
    Code(request) {
        const data = exports.QueryByCodeIdRequest.encode(request).finish();
        const promise = this.rpc.request("secret.compute.v1beta1.Query", "Code", data);
        return promise.then((data) => exports.QueryCodeResponse.decode(new _m0.Reader(data)));
    }
    Codes(request) {
        const data = empty_1.Empty.encode(request).finish();
        const promise = this.rpc.request("secret.compute.v1beta1.Query", "Codes", data);
        return promise.then((data) => exports.QueryCodesResponse.decode(new _m0.Reader(data)));
    }
    CodeHashByContractAddress(request) {
        const data = exports.QueryByContractAddressRequest.encode(request).finish();
        const promise = this.rpc.request("secret.compute.v1beta1.Query", "CodeHashByContractAddress", data);
        return promise.then((data) => exports.QueryCodeHashResponse.decode(new _m0.Reader(data)));
    }
    CodeHashByCodeId(request) {
        const data = exports.QueryByCodeIdRequest.encode(request).finish();
        const promise = this.rpc.request("secret.compute.v1beta1.Query", "CodeHashByCodeId", data);
        return promise.then((data) => exports.QueryCodeHashResponse.decode(new _m0.Reader(data)));
    }
    LabelByAddress(request) {
        const data = exports.QueryByContractAddressRequest.encode(request).finish();
        const promise = this.rpc.request("secret.compute.v1beta1.Query", "LabelByAddress", data);
        return promise.then((data) => exports.QueryContractLabelResponse.decode(new _m0.Reader(data)));
    }
    AddressByLabel(request) {
        const data = exports.QueryByLabelRequest.encode(request).finish();
        const promise = this.rpc.request("secret.compute.v1beta1.Query", "AddressByLabel", data);
        return promise.then((data) => exports.QueryContractAddressResponse.decode(new _m0.Reader(data)));
    }
    ContractHistory(request) {
        const data = exports.QueryContractHistoryRequest.encode(request).finish();
        const promise = this.rpc.request("secret.compute.v1beta1.Query", "ContractHistory", data);
        return promise.then((data) => exports.QueryContractHistoryResponse.decode(new _m0.Reader(data)));
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