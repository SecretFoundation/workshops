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
exports.Fee = exports.ModeInfo_Multi = exports.ModeInfo_Single = exports.ModeInfo = exports.SignerInfo = exports.AuthInfo = exports.TxBody = exports.SignDoc = exports.TxRaw = exports.Tx = exports.Txs = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const any_1 = require("../../../google/protobuf/any");
const signing_1 = require("../signing/v1beta1/signing");
const multisig_1 = require("../../crypto/multisig/v1beta1/multisig");
const coin_1 = require("../../base/v1beta1/coin");
exports.protobufPackage = "cosmos.tx.v1beta1";
function createBaseTxs() {
    return { tx: [] };
}
exports.Txs = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.tx) {
            writer.uint32(10).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxs();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.tx.push(reader.bytes());
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
            tx: Array.isArray(object === null || object === void 0 ? void 0 : object.tx)
                ? object.tx.map((e) => bytesFromBase64(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tx) {
            obj.tx = message.tx.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.tx = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTxs();
        message.tx = ((_a = object.tx) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseTx() {
    return { body: undefined, auth_info: undefined, signatures: [] };
}
exports.Tx = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.body !== undefined) {
            exports.TxBody.encode(message.body, writer.uint32(10).fork()).ldelim();
        }
        if (message.auth_info !== undefined) {
            exports.AuthInfo.encode(message.auth_info, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTx();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body = exports.TxBody.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.auth_info = exports.AuthInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.signatures.push(reader.bytes());
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
            body: isSet(object.body) ? exports.TxBody.fromJSON(object.body) : undefined,
            auth_info: isSet(object.auth_info)
                ? exports.AuthInfo.fromJSON(object.auth_info)
                : undefined,
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures)
                ? object.signatures.map((e) => bytesFromBase64(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.body !== undefined &&
            (obj.body = message.body ? exports.TxBody.toJSON(message.body) : undefined);
        message.auth_info !== undefined &&
            (obj.auth_info = message.auth_info
                ? exports.AuthInfo.toJSON(message.auth_info)
                : undefined);
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTx();
        message.body =
            object.body !== undefined && object.body !== null
                ? exports.TxBody.fromPartial(object.body)
                : undefined;
        message.auth_info =
            object.auth_info !== undefined && object.auth_info !== null
                ? exports.AuthInfo.fromPartial(object.auth_info)
                : undefined;
        message.signatures = ((_a = object.signatures) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseTxRaw() {
    return {
        body_bytes: new Uint8Array(),
        auth_info_bytes: new Uint8Array(),
        signatures: [],
    };
}
exports.TxRaw = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.body_bytes.length !== 0) {
            writer.uint32(10).bytes(message.body_bytes);
        }
        if (message.auth_info_bytes.length !== 0) {
            writer.uint32(18).bytes(message.auth_info_bytes);
        }
        for (const v of message.signatures) {
            writer.uint32(26).bytes(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxRaw();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body_bytes = reader.bytes();
                    break;
                case 2:
                    message.auth_info_bytes = reader.bytes();
                    break;
                case 3:
                    message.signatures.push(reader.bytes());
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
            body_bytes: isSet(object.body_bytes)
                ? bytesFromBase64(object.body_bytes)
                : new Uint8Array(),
            auth_info_bytes: isSet(object.auth_info_bytes)
                ? bytesFromBase64(object.auth_info_bytes)
                : new Uint8Array(),
            signatures: Array.isArray(object === null || object === void 0 ? void 0 : object.signatures)
                ? object.signatures.map((e) => bytesFromBase64(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.body_bytes !== undefined &&
            (obj.body_bytes = base64FromBytes(message.body_bytes !== undefined
                ? message.body_bytes
                : new Uint8Array()));
        message.auth_info_bytes !== undefined &&
            (obj.auth_info_bytes = base64FromBytes(message.auth_info_bytes !== undefined
                ? message.auth_info_bytes
                : new Uint8Array()));
        if (message.signatures) {
            obj.signatures = message.signatures.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
        }
        else {
            obj.signatures = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTxRaw();
        message.body_bytes = (_a = object.body_bytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.auth_info_bytes = (_b = object.auth_info_bytes) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.signatures = ((_c = object.signatures) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseSignDoc() {
    return {
        body_bytes: new Uint8Array(),
        auth_info_bytes: new Uint8Array(),
        chain_id: "",
        account_number: "0",
    };
}
exports.SignDoc = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.body_bytes.length !== 0) {
            writer.uint32(10).bytes(message.body_bytes);
        }
        if (message.auth_info_bytes.length !== 0) {
            writer.uint32(18).bytes(message.auth_info_bytes);
        }
        if (message.chain_id !== "") {
            writer.uint32(26).string(message.chain_id);
        }
        if (message.account_number !== "0") {
            writer.uint32(32).uint64(message.account_number);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignDoc();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.body_bytes = reader.bytes();
                    break;
                case 2:
                    message.auth_info_bytes = reader.bytes();
                    break;
                case 3:
                    message.chain_id = reader.string();
                    break;
                case 4:
                    message.account_number = longToString(reader.uint64());
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
            body_bytes: isSet(object.body_bytes)
                ? bytesFromBase64(object.body_bytes)
                : new Uint8Array(),
            auth_info_bytes: isSet(object.auth_info_bytes)
                ? bytesFromBase64(object.auth_info_bytes)
                : new Uint8Array(),
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            account_number: isSet(object.account_number)
                ? String(object.account_number)
                : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.body_bytes !== undefined &&
            (obj.body_bytes = base64FromBytes(message.body_bytes !== undefined
                ? message.body_bytes
                : new Uint8Array()));
        message.auth_info_bytes !== undefined &&
            (obj.auth_info_bytes = base64FromBytes(message.auth_info_bytes !== undefined
                ? message.auth_info_bytes
                : new Uint8Array()));
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.account_number !== undefined &&
            (obj.account_number = message.account_number);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSignDoc();
        message.body_bytes = (_a = object.body_bytes) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.auth_info_bytes = (_b = object.auth_info_bytes) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.chain_id = (_c = object.chain_id) !== null && _c !== void 0 ? _c : "";
        message.account_number = (_d = object.account_number) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseTxBody() {
    return {
        messages: [],
        memo: "",
        timeout_height: "0",
        extension_options: [],
        non_critical_extension_options: [],
    };
}
exports.TxBody = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.messages) {
            any_1.Any.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.memo !== "") {
            writer.uint32(18).string(message.memo);
        }
        if (message.timeout_height !== "0") {
            writer.uint32(24).uint64(message.timeout_height);
        }
        for (const v of message.extension_options) {
            any_1.Any.encode(v, writer.uint32(8186).fork()).ldelim();
        }
        for (const v of message.non_critical_extension_options) {
            any_1.Any.encode(v, writer.uint32(16378).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTxBody();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.messages.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.memo = reader.string();
                    break;
                case 3:
                    message.timeout_height = longToString(reader.uint64());
                    break;
                case 1023:
                    message.extension_options.push(any_1.Any.decode(reader, reader.uint32()));
                    break;
                case 2047:
                    message.non_critical_extension_options.push(any_1.Any.decode(reader, reader.uint32()));
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
            messages: Array.isArray(object === null || object === void 0 ? void 0 : object.messages)
                ? object.messages.map((e) => any_1.Any.fromJSON(e))
                : [],
            memo: isSet(object.memo) ? String(object.memo) : "",
            timeout_height: isSet(object.timeout_height)
                ? String(object.timeout_height)
                : "0",
            extension_options: Array.isArray(object === null || object === void 0 ? void 0 : object.extension_options)
                ? object.extension_options.map((e) => any_1.Any.fromJSON(e))
                : [],
            non_critical_extension_options: Array.isArray(object === null || object === void 0 ? void 0 : object.non_critical_extension_options)
                ? object.non_critical_extension_options.map((e) => any_1.Any.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.messages) {
            obj.messages = message.messages.map((e) => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        message.memo !== undefined && (obj.memo = message.memo);
        message.timeout_height !== undefined &&
            (obj.timeout_height = message.timeout_height);
        if (message.extension_options) {
            obj.extension_options = message.extension_options.map((e) => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.extension_options = [];
        }
        if (message.non_critical_extension_options) {
            obj.non_critical_extension_options =
                message.non_critical_extension_options.map((e) => e ? any_1.Any.toJSON(e) : undefined);
        }
        else {
            obj.non_critical_extension_options = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseTxBody();
        message.messages = ((_a = object.messages) === null || _a === void 0 ? void 0 : _a.map((e) => any_1.Any.fromPartial(e))) || [];
        message.memo = (_b = object.memo) !== null && _b !== void 0 ? _b : "";
        message.timeout_height = (_c = object.timeout_height) !== null && _c !== void 0 ? _c : "0";
        message.extension_options =
            ((_d = object.extension_options) === null || _d === void 0 ? void 0 : _d.map((e) => any_1.Any.fromPartial(e))) || [];
        message.non_critical_extension_options =
            ((_e = object.non_critical_extension_options) === null || _e === void 0 ? void 0 : _e.map((e) => any_1.Any.fromPartial(e))) ||
                [];
        return message;
    },
};
function createBaseAuthInfo() {
    return { signer_infos: [], fee: undefined };
}
exports.AuthInfo = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.signer_infos) {
            exports.SignerInfo.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            exports.Fee.encode(message.fee, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAuthInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signer_infos.push(exports.SignerInfo.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.fee = exports.Fee.decode(reader, reader.uint32());
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
            signer_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.signer_infos)
                ? object.signer_infos.map((e) => exports.SignerInfo.fromJSON(e))
                : [],
            fee: isSet(object.fee) ? exports.Fee.fromJSON(object.fee) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.signer_infos) {
            obj.signer_infos = message.signer_infos.map((e) => e ? exports.SignerInfo.toJSON(e) : undefined);
        }
        else {
            obj.signer_infos = [];
        }
        message.fee !== undefined &&
            (obj.fee = message.fee ? exports.Fee.toJSON(message.fee) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAuthInfo();
        message.signer_infos =
            ((_a = object.signer_infos) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SignerInfo.fromPartial(e))) || [];
        message.fee =
            object.fee !== undefined && object.fee !== null
                ? exports.Fee.fromPartial(object.fee)
                : undefined;
        return message;
    },
};
function createBaseSignerInfo() {
    return { public_key: undefined, mode_info: undefined, sequence: "0" };
}
exports.SignerInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.public_key !== undefined) {
            any_1.Any.encode(message.public_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.mode_info !== undefined) {
            exports.ModeInfo.encode(message.mode_info, writer.uint32(18).fork()).ldelim();
        }
        if (message.sequence !== "0") {
            writer.uint32(24).uint64(message.sequence);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignerInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.public_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mode_info = exports.ModeInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.sequence = longToString(reader.uint64());
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
            public_key: isSet(object.public_key)
                ? any_1.Any.fromJSON(object.public_key)
                : undefined,
            mode_info: isSet(object.mode_info)
                ? exports.ModeInfo.fromJSON(object.mode_info)
                : undefined,
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.public_key !== undefined &&
            (obj.public_key = message.public_key
                ? any_1.Any.toJSON(message.public_key)
                : undefined);
        message.mode_info !== undefined &&
            (obj.mode_info = message.mode_info
                ? exports.ModeInfo.toJSON(message.mode_info)
                : undefined);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseSignerInfo();
        message.public_key =
            object.public_key !== undefined && object.public_key !== null
                ? any_1.Any.fromPartial(object.public_key)
                : undefined;
        message.mode_info =
            object.mode_info !== undefined && object.mode_info !== null
                ? exports.ModeInfo.fromPartial(object.mode_info)
                : undefined;
        message.sequence = (_a = object.sequence) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseModeInfo() {
    return { single: undefined, multi: undefined };
}
exports.ModeInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.single !== undefined) {
            exports.ModeInfo_Single.encode(message.single, writer.uint32(10).fork()).ldelim();
        }
        if (message.multi !== undefined) {
            exports.ModeInfo_Multi.encode(message.multi, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.single = exports.ModeInfo_Single.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.multi = exports.ModeInfo_Multi.decode(reader, reader.uint32());
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
            single: isSet(object.single)
                ? exports.ModeInfo_Single.fromJSON(object.single)
                : undefined,
            multi: isSet(object.multi)
                ? exports.ModeInfo_Multi.fromJSON(object.multi)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.single !== undefined &&
            (obj.single = message.single
                ? exports.ModeInfo_Single.toJSON(message.single)
                : undefined);
        message.multi !== undefined &&
            (obj.multi = message.multi
                ? exports.ModeInfo_Multi.toJSON(message.multi)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseModeInfo();
        message.single =
            object.single !== undefined && object.single !== null
                ? exports.ModeInfo_Single.fromPartial(object.single)
                : undefined;
        message.multi =
            object.multi !== undefined && object.multi !== null
                ? exports.ModeInfo_Multi.fromPartial(object.multi)
                : undefined;
        return message;
    },
};
function createBaseModeInfo_Single() {
    return { mode: 0 };
}
exports.ModeInfo_Single = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.mode !== 0) {
            writer.uint32(8).int32(message.mode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo_Single();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mode = reader.int32();
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
            mode: isSet(object.mode) ? (0, signing_1.signModeFromJSON)(object.mode) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.mode !== undefined && (obj.mode = (0, signing_1.signModeToJSON)(message.mode));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseModeInfo_Single();
        message.mode = (_a = object.mode) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseModeInfo_Multi() {
    return { bitarray: undefined, mode_infos: [] };
}
exports.ModeInfo_Multi = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.bitarray !== undefined) {
            multisig_1.CompactBitArray.encode(message.bitarray, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.mode_infos) {
            exports.ModeInfo.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModeInfo_Multi();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bitarray = multisig_1.CompactBitArray.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.mode_infos.push(exports.ModeInfo.decode(reader, reader.uint32()));
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
            bitarray: isSet(object.bitarray)
                ? multisig_1.CompactBitArray.fromJSON(object.bitarray)
                : undefined,
            mode_infos: Array.isArray(object === null || object === void 0 ? void 0 : object.mode_infos)
                ? object.mode_infos.map((e) => exports.ModeInfo.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.bitarray !== undefined &&
            (obj.bitarray = message.bitarray
                ? multisig_1.CompactBitArray.toJSON(message.bitarray)
                : undefined);
        if (message.mode_infos) {
            obj.mode_infos = message.mode_infos.map((e) => e ? exports.ModeInfo.toJSON(e) : undefined);
        }
        else {
            obj.mode_infos = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseModeInfo_Multi();
        message.bitarray =
            object.bitarray !== undefined && object.bitarray !== null
                ? multisig_1.CompactBitArray.fromPartial(object.bitarray)
                : undefined;
        message.mode_infos =
            ((_a = object.mode_infos) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ModeInfo.fromPartial(e))) || [];
        return message;
    },
};
function createBaseFee() {
    return { amount: [], gas_limit: "0", payer: "", granter: "" };
}
exports.Fee = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.gas_limit !== "0") {
            writer.uint32(16).uint64(message.gas_limit);
        }
        if (message.payer !== "") {
            writer.uint32(26).string(message.payer);
        }
        if (message.granter !== "") {
            writer.uint32(34).string(message.granter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFee();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.gas_limit = longToString(reader.uint64());
                    break;
                case 3:
                    message.payer = reader.string();
                    break;
                case 4:
                    message.granter = reader.string();
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
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount)
                ? object.amount.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            gas_limit: isSet(object.gas_limit) ? String(object.gas_limit) : "0",
            payer: isSet(object.payer) ? String(object.payer) : "",
            granter: isSet(object.granter) ? String(object.granter) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.amount) {
            obj.amount = message.amount.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.amount = [];
        }
        message.gas_limit !== undefined && (obj.gas_limit = message.gas_limit);
        message.payer !== undefined && (obj.payer = message.payer);
        message.granter !== undefined && (obj.granter = message.granter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseFee();
        message.amount = ((_a = object.amount) === null || _a === void 0 ? void 0 : _a.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.gas_limit = (_b = object.gas_limit) !== null && _b !== void 0 ? _b : "0";
        message.payer = (_c = object.payer) !== null && _c !== void 0 ? _c : "";
        message.granter = (_d = object.granter) !== null && _d !== void 0 ? _d : "";
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
//# sourceMappingURL=tx.js.map