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
exports.MsgClientImpl = exports.MsgClearAdminResponse = exports.MsgClearAdmin = exports.MsgUpdateAdminResponse = exports.MsgUpdateAdmin = exports.MsgMigrateContractResponse = exports.MsgMigrateContract = exports.MsgExecuteContractResponse = exports.MsgExecuteContract = exports.MsgInstantiateContractResponse = exports.MsgInstantiateContract = exports.MsgStoreCodeResponse = exports.MsgStoreCode = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "secret.compute.v1beta1";
function createBaseMsgStoreCode() {
    return {
        sender: new Uint8Array(),
        wasm_byte_code: new Uint8Array(),
        source: "",
        builder: "",
    };
}
exports.MsgStoreCode = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.wasm_byte_code.length !== 0) {
            writer.uint32(18).bytes(message.wasm_byte_code);
        }
        if (message.source !== "") {
            writer.uint32(26).string(message.source);
        }
        if (message.builder !== "") {
            writer.uint32(34).string(message.builder);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStoreCode();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.wasm_byte_code = reader.bytes();
                    break;
                case 3:
                    message.source = reader.string();
                    break;
                case 4:
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
            sender: isSet(object.sender)
                ? bytesFromBase64(object.sender)
                : new Uint8Array(),
            wasm_byte_code: isSet(object.wasm_byte_code)
                ? bytesFromBase64(object.wasm_byte_code)
                : new Uint8Array(),
            source: isSet(object.source) ? String(object.source) : "",
            builder: isSet(object.builder) ? String(object.builder) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.wasm_byte_code !== undefined &&
            (obj.wasm_byte_code = base64FromBytes(message.wasm_byte_code !== undefined
                ? message.wasm_byte_code
                : new Uint8Array()));
        message.source !== undefined && (obj.source = message.source);
        message.builder !== undefined && (obj.builder = message.builder);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgStoreCode();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.wasm_byte_code = (_b = object.wasm_byte_code) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.source = (_c = object.source) !== null && _c !== void 0 ? _c : "";
        message.builder = (_d = object.builder) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMsgStoreCodeResponse() {
    return { code_id: "0" };
}
exports.MsgStoreCodeResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code_id !== "0") {
            writer.uint32(8).uint64(message.code_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgStoreCodeResponse();
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
        const message = createBaseMsgStoreCodeResponse();
        message.code_id = (_a = object.code_id) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseMsgInstantiateContract() {
    return {
        sender: new Uint8Array(),
        callback_code_hash: "",
        code_id: "0",
        label: "",
        init_msg: new Uint8Array(),
        init_funds: [],
        callback_sig: new Uint8Array(),
        admin: "",
    };
}
exports.MsgInstantiateContract = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.callback_code_hash !== "") {
            writer.uint32(18).string(message.callback_code_hash);
        }
        if (message.code_id !== "0") {
            writer.uint32(24).uint64(message.code_id);
        }
        if (message.label !== "") {
            writer.uint32(34).string(message.label);
        }
        if (message.init_msg.length !== 0) {
            writer.uint32(42).bytes(message.init_msg);
        }
        for (const v of message.init_funds) {
            coin_1.Coin.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.callback_sig.length !== 0) {
            writer.uint32(58).bytes(message.callback_sig);
        }
        if (message.admin !== "") {
            writer.uint32(66).string(message.admin);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantiateContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.callback_code_hash = reader.string();
                    break;
                case 3:
                    message.code_id = longToString(reader.uint64());
                    break;
                case 4:
                    message.label = reader.string();
                    break;
                case 5:
                    message.init_msg = reader.bytes();
                    break;
                case 6:
                    message.init_funds.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.callback_sig = reader.bytes();
                    break;
                case 8:
                    message.admin = reader.string();
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
            sender: isSet(object.sender)
                ? bytesFromBase64(object.sender)
                : new Uint8Array(),
            callback_code_hash: isSet(object.callback_code_hash)
                ? String(object.callback_code_hash)
                : "",
            code_id: isSet(object.code_id) ? String(object.code_id) : "0",
            label: isSet(object.label) ? String(object.label) : "",
            init_msg: isSet(object.init_msg)
                ? bytesFromBase64(object.init_msg)
                : new Uint8Array(),
            init_funds: Array.isArray(object === null || object === void 0 ? void 0 : object.init_funds)
                ? object.init_funds.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            callback_sig: isSet(object.callback_sig)
                ? bytesFromBase64(object.callback_sig)
                : new Uint8Array(),
            admin: isSet(object.admin) ? String(object.admin) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.callback_code_hash !== undefined &&
            (obj.callback_code_hash = message.callback_code_hash);
        message.code_id !== undefined && (obj.code_id = message.code_id);
        message.label !== undefined && (obj.label = message.label);
        message.init_msg !== undefined &&
            (obj.init_msg = base64FromBytes(message.init_msg !== undefined ? message.init_msg : new Uint8Array()));
        if (message.init_funds) {
            obj.init_funds = message.init_funds.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.init_funds = [];
        }
        message.callback_sig !== undefined &&
            (obj.callback_sig = base64FromBytes(message.callback_sig !== undefined
                ? message.callback_sig
                : new Uint8Array()));
        message.admin !== undefined && (obj.admin = message.admin);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseMsgInstantiateContract();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.callback_code_hash = (_b = object.callback_code_hash) !== null && _b !== void 0 ? _b : "";
        message.code_id = (_c = object.code_id) !== null && _c !== void 0 ? _c : "0";
        message.label = (_d = object.label) !== null && _d !== void 0 ? _d : "";
        message.init_msg = (_e = object.init_msg) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.init_funds =
            ((_f = object.init_funds) === null || _f === void 0 ? void 0 : _f.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.callback_sig = (_g = object.callback_sig) !== null && _g !== void 0 ? _g : new Uint8Array();
        message.admin = (_h = object.admin) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseMsgInstantiateContractResponse() {
    return { address: "", data: new Uint8Array() };
}
exports.MsgInstantiateContractResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInstantiateContractResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
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
            address: isSet(object.address) ? String(object.address) : "",
            data: isSet(object.data)
                ? bytesFromBase64(object.data)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgInstantiateContractResponse();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.data = (_b = object.data) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseMsgExecuteContract() {
    return {
        sender: new Uint8Array(),
        contract: new Uint8Array(),
        msg: new Uint8Array(),
        callback_code_hash: "",
        sent_funds: [],
        callback_sig: new Uint8Array(),
    };
}
exports.MsgExecuteContract = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.contract.length !== 0) {
            writer.uint32(18).bytes(message.contract);
        }
        if (message.msg.length !== 0) {
            writer.uint32(26).bytes(message.msg);
        }
        if (message.callback_code_hash !== "") {
            writer.uint32(34).string(message.callback_code_hash);
        }
        for (const v of message.sent_funds) {
            coin_1.Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.callback_sig.length !== 0) {
            writer.uint32(50).bytes(message.callback_sig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecuteContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.bytes();
                    break;
                case 2:
                    message.contract = reader.bytes();
                    break;
                case 3:
                    message.msg = reader.bytes();
                    break;
                case 4:
                    message.callback_code_hash = reader.string();
                    break;
                case 5:
                    message.sent_funds.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.callback_sig = reader.bytes();
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
            sender: isSet(object.sender)
                ? bytesFromBase64(object.sender)
                : new Uint8Array(),
            contract: isSet(object.contract)
                ? bytesFromBase64(object.contract)
                : new Uint8Array(),
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
            callback_code_hash: isSet(object.callback_code_hash)
                ? String(object.callback_code_hash)
                : "",
            sent_funds: Array.isArray(object === null || object === void 0 ? void 0 : object.sent_funds)
                ? object.sent_funds.map((e) => coin_1.Coin.fromJSON(e))
                : [],
            callback_sig: isSet(object.callback_sig)
                ? bytesFromBase64(object.callback_sig)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined &&
            (obj.sender = base64FromBytes(message.sender !== undefined ? message.sender : new Uint8Array()));
        message.contract !== undefined &&
            (obj.contract = base64FromBytes(message.contract !== undefined ? message.contract : new Uint8Array()));
        message.msg !== undefined &&
            (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
        message.callback_code_hash !== undefined &&
            (obj.callback_code_hash = message.callback_code_hash);
        if (message.sent_funds) {
            obj.sent_funds = message.sent_funds.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.sent_funds = [];
        }
        message.callback_sig !== undefined &&
            (obj.callback_sig = base64FromBytes(message.callback_sig !== undefined
                ? message.callback_sig
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMsgExecuteContract();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.contract = (_b = object.contract) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.msg = (_c = object.msg) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.callback_code_hash = (_d = object.callback_code_hash) !== null && _d !== void 0 ? _d : "";
        message.sent_funds =
            ((_e = object.sent_funds) === null || _e === void 0 ? void 0 : _e.map((e) => coin_1.Coin.fromPartial(e))) || [];
        message.callback_sig = (_f = object.callback_sig) !== null && _f !== void 0 ? _f : new Uint8Array();
        return message;
    },
};
function createBaseMsgExecuteContractResponse() {
    return { data: new Uint8Array() };
}
exports.MsgExecuteContractResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgExecuteContractResponse();
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
        const message = createBaseMsgExecuteContractResponse();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseMsgMigrateContract() {
    return {
        sender: "",
        contract: "",
        code_id: "0",
        msg: new Uint8Array(),
        callback_sig: new Uint8Array(),
        callback_code_hash: "",
    };
}
exports.MsgMigrateContract = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.contract !== "") {
            writer.uint32(18).string(message.contract);
        }
        if (message.code_id !== "0") {
            writer.uint32(24).uint64(message.code_id);
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        if (message.callback_sig.length !== 0) {
            writer.uint32(58).bytes(message.callback_sig);
        }
        if (message.callback_code_hash !== "") {
            writer.uint32(66).string(message.callback_code_hash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMigrateContract();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.contract = reader.string();
                    break;
                case 3:
                    message.code_id = longToString(reader.uint64());
                    break;
                case 4:
                    message.msg = reader.bytes();
                    break;
                case 7:
                    message.callback_sig = reader.bytes();
                    break;
                case 8:
                    message.callback_code_hash = reader.string();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            contract: isSet(object.contract) ? String(object.contract) : "",
            code_id: isSet(object.code_id) ? String(object.code_id) : "0",
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
            callback_sig: isSet(object.callback_sig)
                ? bytesFromBase64(object.callback_sig)
                : new Uint8Array(),
            callback_code_hash: isSet(object.callback_code_hash)
                ? String(object.callback_code_hash)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.contract !== undefined && (obj.contract = message.contract);
        message.code_id !== undefined && (obj.code_id = message.code_id);
        message.msg !== undefined &&
            (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
        message.callback_sig !== undefined &&
            (obj.callback_sig = base64FromBytes(message.callback_sig !== undefined
                ? message.callback_sig
                : new Uint8Array()));
        message.callback_code_hash !== undefined &&
            (obj.callback_code_hash = message.callback_code_hash);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseMsgMigrateContract();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.contract = (_b = object.contract) !== null && _b !== void 0 ? _b : "";
        message.code_id = (_c = object.code_id) !== null && _c !== void 0 ? _c : "0";
        message.msg = (_d = object.msg) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.callback_sig = (_e = object.callback_sig) !== null && _e !== void 0 ? _e : new Uint8Array();
        message.callback_code_hash = (_f = object.callback_code_hash) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseMsgMigrateContractResponse() {
    return { data: new Uint8Array() };
}
exports.MsgMigrateContractResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgMigrateContractResponse();
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
        const message = createBaseMsgMigrateContractResponse();
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseMsgUpdateAdmin() {
    return {
        sender: "",
        new_admin: "",
        contract: "",
        callback_sig: new Uint8Array(),
    };
}
exports.MsgUpdateAdmin = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.new_admin !== "") {
            writer.uint32(18).string(message.new_admin);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        if (message.callback_sig.length !== 0) {
            writer.uint32(58).bytes(message.callback_sig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 2:
                    message.new_admin = reader.string();
                    break;
                case 3:
                    message.contract = reader.string();
                    break;
                case 7:
                    message.callback_sig = reader.bytes();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            new_admin: isSet(object.new_admin) ? String(object.new_admin) : "",
            contract: isSet(object.contract) ? String(object.contract) : "",
            callback_sig: isSet(object.callback_sig)
                ? bytesFromBase64(object.callback_sig)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.new_admin !== undefined && (obj.new_admin = message.new_admin);
        message.contract !== undefined && (obj.contract = message.contract);
        message.callback_sig !== undefined &&
            (obj.callback_sig = base64FromBytes(message.callback_sig !== undefined
                ? message.callback_sig
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseMsgUpdateAdmin();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.new_admin = (_b = object.new_admin) !== null && _b !== void 0 ? _b : "";
        message.contract = (_c = object.contract) !== null && _c !== void 0 ? _c : "";
        message.callback_sig = (_d = object.callback_sig) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    },
};
function createBaseMsgUpdateAdminResponse() {
    return {};
}
exports.MsgUpdateAdminResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgUpdateAdminResponse();
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
        const message = createBaseMsgUpdateAdminResponse();
        return message;
    },
};
function createBaseMsgClearAdmin() {
    return { sender: "", contract: "", callback_sig: new Uint8Array() };
}
exports.MsgClearAdmin = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sender !== "") {
            writer.uint32(10).string(message.sender);
        }
        if (message.contract !== "") {
            writer.uint32(26).string(message.contract);
        }
        if (message.callback_sig.length !== 0) {
            writer.uint32(58).bytes(message.callback_sig);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClearAdmin();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sender = reader.string();
                    break;
                case 3:
                    message.contract = reader.string();
                    break;
                case 7:
                    message.callback_sig = reader.bytes();
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
            sender: isSet(object.sender) ? String(object.sender) : "",
            contract: isSet(object.contract) ? String(object.contract) : "",
            callback_sig: isSet(object.callback_sig)
                ? bytesFromBase64(object.callback_sig)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.sender !== undefined && (obj.sender = message.sender);
        message.contract !== undefined && (obj.contract = message.contract);
        message.callback_sig !== undefined &&
            (obj.callback_sig = base64FromBytes(message.callback_sig !== undefined
                ? message.callback_sig
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgClearAdmin();
        message.sender = (_a = object.sender) !== null && _a !== void 0 ? _a : "";
        message.contract = (_b = object.contract) !== null && _b !== void 0 ? _b : "";
        message.callback_sig = (_c = object.callback_sig) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseMsgClearAdminResponse() {
    return {};
}
exports.MsgClearAdminResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgClearAdminResponse();
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
        const message = createBaseMsgClearAdminResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.StoreCode = this.StoreCode.bind(this);
        this.InstantiateContract = this.InstantiateContract.bind(this);
        this.ExecuteContract = this.ExecuteContract.bind(this);
        this.MigrateContract = this.MigrateContract.bind(this);
        this.UpdateAdmin = this.UpdateAdmin.bind(this);
        this.ClearAdmin = this.ClearAdmin.bind(this);
    }
    StoreCode(request) {
        const data = exports.MsgStoreCode.encode(request).finish();
        const promise = this.rpc.request("secret.compute.v1beta1.Msg", "StoreCode", data);
        return promise.then((data) => exports.MsgStoreCodeResponse.decode(new _m0.Reader(data)));
    }
    InstantiateContract(request) {
        const data = exports.MsgInstantiateContract.encode(request).finish();
        const promise = this.rpc.request("secret.compute.v1beta1.Msg", "InstantiateContract", data);
        return promise.then((data) => exports.MsgInstantiateContractResponse.decode(new _m0.Reader(data)));
    }
    ExecuteContract(request) {
        const data = exports.MsgExecuteContract.encode(request).finish();
        const promise = this.rpc.request("secret.compute.v1beta1.Msg", "ExecuteContract", data);
        return promise.then((data) => exports.MsgExecuteContractResponse.decode(new _m0.Reader(data)));
    }
    MigrateContract(request) {
        const data = exports.MsgMigrateContract.encode(request).finish();
        const promise = this.rpc.request("secret.compute.v1beta1.Msg", "MigrateContract", data);
        return promise.then((data) => exports.MsgMigrateContractResponse.decode(new _m0.Reader(data)));
    }
    UpdateAdmin(request) {
        const data = exports.MsgUpdateAdmin.encode(request).finish();
        const promise = this.rpc.request("secret.compute.v1beta1.Msg", "UpdateAdmin", data);
        return promise.then((data) => exports.MsgUpdateAdminResponse.decode(new _m0.Reader(data)));
    }
    ClearAdmin(request) {
        const data = exports.MsgClearAdmin.encode(request).finish();
        const promise = this.rpc.request("secret.compute.v1beta1.Msg", "ClearAdmin", data);
        return promise.then((data) => exports.MsgClearAdminResponse.decode(new _m0.Reader(data)));
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
//# sourceMappingURL=msg.js.map