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
exports.ContractCodeHistoryEntry = exports.Model = exports.AbsoluteTxPosition = exports.ContractInfo = exports.ContractCustomInfo = exports.ContractKey = exports.CodeInfo = exports.AccessTypeParam = exports.contractCodeHistoryOperationTypeToJSON = exports.contractCodeHistoryOperationTypeFromJSON = exports.ContractCodeHistoryOperationType = exports.accessTypeToJSON = exports.accessTypeFromJSON = exports.AccessType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "secret.compute.v1beta1";
var AccessType;
(function (AccessType) {
    AccessType[AccessType["UNDEFINED"] = 0] = "UNDEFINED";
    AccessType[AccessType["NOBODY"] = 1] = "NOBODY";
    AccessType[AccessType["ONLY_ADDRESS"] = 2] = "ONLY_ADDRESS";
    AccessType[AccessType["EVERYBODY"] = 3] = "EVERYBODY";
    AccessType[AccessType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccessType = exports.AccessType || (exports.AccessType = {}));
function accessTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "UNDEFINED":
            return AccessType.UNDEFINED;
        case 1:
        case "NOBODY":
            return AccessType.NOBODY;
        case 2:
        case "ONLY_ADDRESS":
            return AccessType.ONLY_ADDRESS;
        case 3:
        case "EVERYBODY":
            return AccessType.EVERYBODY;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AccessType.UNRECOGNIZED;
    }
}
exports.accessTypeFromJSON = accessTypeFromJSON;
function accessTypeToJSON(object) {
    switch (object) {
        case AccessType.UNDEFINED:
            return "UNDEFINED";
        case AccessType.NOBODY:
            return "NOBODY";
        case AccessType.ONLY_ADDRESS:
            return "ONLY_ADDRESS";
        case AccessType.EVERYBODY:
            return "EVERYBODY";
        default:
            return "UNKNOWN";
    }
}
exports.accessTypeToJSON = accessTypeToJSON;
/** ContractCodeHistoryOperationType actions that caused a code change */
var ContractCodeHistoryOperationType;
(function (ContractCodeHistoryOperationType) {
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"] = 0] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT"] = 1] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE"] = 2] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS"] = 3] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
    ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ContractCodeHistoryOperationType = exports.ContractCodeHistoryOperationType || (exports.ContractCodeHistoryOperationType = {}));
function contractCodeHistoryOperationTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED;
        case 1:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT;
        case 2:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE;
        case 3:
        case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS":
            return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ContractCodeHistoryOperationType.UNRECOGNIZED;
    }
}
exports.contractCodeHistoryOperationTypeFromJSON = contractCodeHistoryOperationTypeFromJSON;
function contractCodeHistoryOperationTypeToJSON(object) {
    switch (object) {
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
        case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS:
            return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
        default:
            return "UNKNOWN";
    }
}
exports.contractCodeHistoryOperationTypeToJSON = contractCodeHistoryOperationTypeToJSON;
function createBaseAccessTypeParam() {
    return { value: 0 };
}
exports.AccessTypeParam = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== 0) {
            writer.uint32(8).int32(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAccessTypeParam();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.int32();
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
            value: isSet(object.value) ? accessTypeFromJSON(object.value) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined &&
            (obj.value = accessTypeToJSON(message.value));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAccessTypeParam();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseCodeInfo() {
    return {
        code_hash: new Uint8Array(),
        creator: new Uint8Array(),
        source: "",
        builder: "",
    };
}
exports.CodeInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code_hash.length !== 0) {
            writer.uint32(10).bytes(message.code_hash);
        }
        if (message.creator.length !== 0) {
            writer.uint32(18).bytes(message.creator);
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
        const message = createBaseCodeInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code_hash = reader.bytes();
                    break;
                case 2:
                    message.creator = reader.bytes();
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
            code_hash: isSet(object.code_hash)
                ? bytesFromBase64(object.code_hash)
                : new Uint8Array(),
            creator: isSet(object.creator)
                ? bytesFromBase64(object.creator)
                : new Uint8Array(),
            source: isSet(object.source) ? String(object.source) : "",
            builder: isSet(object.builder) ? String(object.builder) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.code_hash !== undefined &&
            (obj.code_hash = base64FromBytes(message.code_hash !== undefined ? message.code_hash : new Uint8Array()));
        message.creator !== undefined &&
            (obj.creator = base64FromBytes(message.creator !== undefined ? message.creator : new Uint8Array()));
        message.source !== undefined && (obj.source = message.source);
        message.builder !== undefined && (obj.builder = message.builder);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseCodeInfo();
        message.code_hash = (_a = object.code_hash) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.creator = (_b = object.creator) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.source = (_c = object.source) !== null && _c !== void 0 ? _c : "";
        message.builder = (_d = object.builder) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseContractKey() {
    return {
        og_contract_key: new Uint8Array(),
        current_contract_key: new Uint8Array(),
        current_contract_key_proof: new Uint8Array(),
    };
}
exports.ContractKey = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.og_contract_key.length !== 0) {
            writer.uint32(10).bytes(message.og_contract_key);
        }
        if (message.current_contract_key.length !== 0) {
            writer.uint32(18).bytes(message.current_contract_key);
        }
        if (message.current_contract_key_proof.length !== 0) {
            writer.uint32(26).bytes(message.current_contract_key_proof);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractKey();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.og_contract_key = reader.bytes();
                    break;
                case 2:
                    message.current_contract_key = reader.bytes();
                    break;
                case 3:
                    message.current_contract_key_proof = reader.bytes();
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
            og_contract_key: isSet(object.og_contract_key)
                ? bytesFromBase64(object.og_contract_key)
                : new Uint8Array(),
            current_contract_key: isSet(object.current_contract_key)
                ? bytesFromBase64(object.current_contract_key)
                : new Uint8Array(),
            current_contract_key_proof: isSet(object.current_contract_key_proof)
                ? bytesFromBase64(object.current_contract_key_proof)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.og_contract_key !== undefined &&
            (obj.og_contract_key = base64FromBytes(message.og_contract_key !== undefined
                ? message.og_contract_key
                : new Uint8Array()));
        message.current_contract_key !== undefined &&
            (obj.current_contract_key = base64FromBytes(message.current_contract_key !== undefined
                ? message.current_contract_key
                : new Uint8Array()));
        message.current_contract_key_proof !== undefined &&
            (obj.current_contract_key_proof = base64FromBytes(message.current_contract_key_proof !== undefined
                ? message.current_contract_key_proof
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseContractKey();
        message.og_contract_key = (_a = object.og_contract_key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.current_contract_key =
            (_b = object.current_contract_key) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.current_contract_key_proof =
            (_c = object.current_contract_key_proof) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseContractCustomInfo() {
    return { enclave_key: undefined, label: "" };
}
exports.ContractCustomInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.enclave_key !== undefined) {
            exports.ContractKey.encode(message.enclave_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.label !== "") {
            writer.uint32(18).string(message.label);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractCustomInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.enclave_key = exports.ContractKey.decode(reader, reader.uint32());
                    break;
                case 2:
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
            enclave_key: isSet(object.enclave_key)
                ? exports.ContractKey.fromJSON(object.enclave_key)
                : undefined,
            label: isSet(object.label) ? String(object.label) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.enclave_key !== undefined &&
            (obj.enclave_key = message.enclave_key
                ? exports.ContractKey.toJSON(message.enclave_key)
                : undefined);
        message.label !== undefined && (obj.label = message.label);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseContractCustomInfo();
        message.enclave_key =
            object.enclave_key !== undefined && object.enclave_key !== null
                ? exports.ContractKey.fromPartial(object.enclave_key)
                : undefined;
        message.label = (_a = object.label) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseContractInfo() {
    return {
        code_id: "0",
        creator: new Uint8Array(),
        label: "",
        created: undefined,
        ibc_port_id: "",
        admin: "",
        admin_proof: new Uint8Array(),
    };
}
exports.ContractInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.code_id !== "0") {
            writer.uint32(8).uint64(message.code_id);
        }
        if (message.creator.length !== 0) {
            writer.uint32(18).bytes(message.creator);
        }
        if (message.label !== "") {
            writer.uint32(34).string(message.label);
        }
        if (message.created !== undefined) {
            exports.AbsoluteTxPosition.encode(message.created, writer.uint32(42).fork()).ldelim();
        }
        if (message.ibc_port_id !== "") {
            writer.uint32(50).string(message.ibc_port_id);
        }
        if (message.admin !== "") {
            writer.uint32(58).string(message.admin);
        }
        if (message.admin_proof.length !== 0) {
            writer.uint32(66).bytes(message.admin_proof);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.creator = reader.bytes();
                    break;
                case 4:
                    message.label = reader.string();
                    break;
                case 5:
                    message.created = exports.AbsoluteTxPosition.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.ibc_port_id = reader.string();
                    break;
                case 7:
                    message.admin = reader.string();
                    break;
                case 8:
                    message.admin_proof = reader.bytes();
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
            creator: isSet(object.creator)
                ? bytesFromBase64(object.creator)
                : new Uint8Array(),
            label: isSet(object.label) ? String(object.label) : "",
            created: isSet(object.created)
                ? exports.AbsoluteTxPosition.fromJSON(object.created)
                : undefined,
            ibc_port_id: isSet(object.ibc_port_id) ? String(object.ibc_port_id) : "",
            admin: isSet(object.admin) ? String(object.admin) : "",
            admin_proof: isSet(object.admin_proof)
                ? bytesFromBase64(object.admin_proof)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.code_id !== undefined && (obj.code_id = message.code_id);
        message.creator !== undefined &&
            (obj.creator = base64FromBytes(message.creator !== undefined ? message.creator : new Uint8Array()));
        message.label !== undefined && (obj.label = message.label);
        message.created !== undefined &&
            (obj.created = message.created
                ? exports.AbsoluteTxPosition.toJSON(message.created)
                : undefined);
        message.ibc_port_id !== undefined &&
            (obj.ibc_port_id = message.ibc_port_id);
        message.admin !== undefined && (obj.admin = message.admin);
        message.admin_proof !== undefined &&
            (obj.admin_proof = base64FromBytes(message.admin_proof !== undefined
                ? message.admin_proof
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseContractInfo();
        message.code_id = (_a = object.code_id) !== null && _a !== void 0 ? _a : "0";
        message.creator = (_b = object.creator) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.label = (_c = object.label) !== null && _c !== void 0 ? _c : "";
        message.created =
            object.created !== undefined && object.created !== null
                ? exports.AbsoluteTxPosition.fromPartial(object.created)
                : undefined;
        message.ibc_port_id = (_d = object.ibc_port_id) !== null && _d !== void 0 ? _d : "";
        message.admin = (_e = object.admin) !== null && _e !== void 0 ? _e : "";
        message.admin_proof = (_f = object.admin_proof) !== null && _f !== void 0 ? _f : new Uint8Array();
        return message;
    },
};
function createBaseAbsoluteTxPosition() {
    return { block_height: "0", tx_index: "0" };
}
exports.AbsoluteTxPosition = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.block_height !== "0") {
            writer.uint32(8).int64(message.block_height);
        }
        if (message.tx_index !== "0") {
            writer.uint32(16).uint64(message.tx_index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAbsoluteTxPosition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.block_height = longToString(reader.int64());
                    break;
                case 2:
                    message.tx_index = longToString(reader.uint64());
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
            block_height: isSet(object.block_height)
                ? String(object.block_height)
                : "0",
            tx_index: isSet(object.tx_index) ? String(object.tx_index) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.block_height !== undefined &&
            (obj.block_height = message.block_height);
        message.tx_index !== undefined && (obj.tx_index = message.tx_index);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAbsoluteTxPosition();
        message.block_height = (_a = object.block_height) !== null && _a !== void 0 ? _a : "0";
        message.tx_index = (_b = object.tx_index) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseModel() {
    return { Key: new Uint8Array(), Value: new Uint8Array() };
}
exports.Model = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.Key.length !== 0) {
            writer.uint32(10).bytes(message.Key);
        }
        if (message.Value.length !== 0) {
            writer.uint32(18).bytes(message.Value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseModel();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Key = reader.bytes();
                    break;
                case 2:
                    message.Value = reader.bytes();
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
            Key: isSet(object.Key) ? bytesFromBase64(object.Key) : new Uint8Array(),
            Value: isSet(object.Value)
                ? bytesFromBase64(object.Value)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.Key !== undefined &&
            (obj.Key = base64FromBytes(message.Key !== undefined ? message.Key : new Uint8Array()));
        message.Value !== undefined &&
            (obj.Value = base64FromBytes(message.Value !== undefined ? message.Value : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseModel();
        message.Key = (_a = object.Key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.Value = (_b = object.Value) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBaseContractCodeHistoryEntry() {
    return {
        operation: 0,
        code_id: "0",
        updated: undefined,
        msg: new Uint8Array(),
    };
}
exports.ContractCodeHistoryEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.operation !== 0) {
            writer.uint32(8).int32(message.operation);
        }
        if (message.code_id !== "0") {
            writer.uint32(16).uint64(message.code_id);
        }
        if (message.updated !== undefined) {
            exports.AbsoluteTxPosition.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        if (message.msg.length !== 0) {
            writer.uint32(34).bytes(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContractCodeHistoryEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.operation = reader.int32();
                    break;
                case 2:
                    message.code_id = longToString(reader.uint64());
                    break;
                case 3:
                    message.updated = exports.AbsoluteTxPosition.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.msg = reader.bytes();
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
            operation: isSet(object.operation)
                ? contractCodeHistoryOperationTypeFromJSON(object.operation)
                : 0,
            code_id: isSet(object.code_id) ? String(object.code_id) : "0",
            updated: isSet(object.updated)
                ? exports.AbsoluteTxPosition.fromJSON(object.updated)
                : undefined,
            msg: isSet(object.msg) ? bytesFromBase64(object.msg) : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.operation !== undefined &&
            (obj.operation = contractCodeHistoryOperationTypeToJSON(message.operation));
        message.code_id !== undefined && (obj.code_id = message.code_id);
        message.updated !== undefined &&
            (obj.updated = message.updated
                ? exports.AbsoluteTxPosition.toJSON(message.updated)
                : undefined);
        message.msg !== undefined &&
            (obj.msg = base64FromBytes(message.msg !== undefined ? message.msg : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseContractCodeHistoryEntry();
        message.operation = (_a = object.operation) !== null && _a !== void 0 ? _a : 0;
        message.code_id = (_b = object.code_id) !== null && _b !== void 0 ? _b : "0";
        message.updated =
            object.updated !== undefined && object.updated !== null
                ? exports.AbsoluteTxPosition.fromPartial(object.updated)
                : undefined;
        message.msg = (_c = object.msg) !== null && _c !== void 0 ? _c : new Uint8Array();
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
//# sourceMappingURL=types.js.map