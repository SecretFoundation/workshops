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
exports.NextSequenceRecvData = exports.PacketReceiptAbsenceData = exports.PacketAcknowledgementData = exports.PacketCommitmentData = exports.ChannelStateData = exports.ConnectionStateData = exports.ConsensusStateData = exports.ClientStateData = exports.HeaderData = exports.SignBytes = exports.TimestampedSignatureData = exports.SignatureAndData = exports.Misbehaviour = exports.Header = exports.ConsensusState = exports.ClientState = exports.dataTypeToJSON = exports.dataTypeFromJSON = exports.DataType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const any_1 = require("../../../../google/protobuf/any");
const connection_1 = require("../../../core/connection/v1/connection");
const channel_1 = require("../../../core/channel/v1/channel");
exports.protobufPackage = "ibc.lightclients.solomachine.v2";
/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 */
var DataType;
(function (DataType) {
    /** DATA_TYPE_UNINITIALIZED_UNSPECIFIED - Default State */
    DataType[DataType["DATA_TYPE_UNINITIALIZED_UNSPECIFIED"] = 0] = "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
    /** DATA_TYPE_CLIENT_STATE - Data type for client state verification */
    DataType[DataType["DATA_TYPE_CLIENT_STATE"] = 1] = "DATA_TYPE_CLIENT_STATE";
    /** DATA_TYPE_CONSENSUS_STATE - Data type for consensus state verification */
    DataType[DataType["DATA_TYPE_CONSENSUS_STATE"] = 2] = "DATA_TYPE_CONSENSUS_STATE";
    /** DATA_TYPE_CONNECTION_STATE - Data type for connection state verification */
    DataType[DataType["DATA_TYPE_CONNECTION_STATE"] = 3] = "DATA_TYPE_CONNECTION_STATE";
    /** DATA_TYPE_CHANNEL_STATE - Data type for channel state verification */
    DataType[DataType["DATA_TYPE_CHANNEL_STATE"] = 4] = "DATA_TYPE_CHANNEL_STATE";
    /** DATA_TYPE_PACKET_COMMITMENT - Data type for packet commitment verification */
    DataType[DataType["DATA_TYPE_PACKET_COMMITMENT"] = 5] = "DATA_TYPE_PACKET_COMMITMENT";
    /** DATA_TYPE_PACKET_ACKNOWLEDGEMENT - Data type for packet acknowledgement verification */
    DataType[DataType["DATA_TYPE_PACKET_ACKNOWLEDGEMENT"] = 6] = "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
    /** DATA_TYPE_PACKET_RECEIPT_ABSENCE - Data type for packet receipt absence verification */
    DataType[DataType["DATA_TYPE_PACKET_RECEIPT_ABSENCE"] = 7] = "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
    /** DATA_TYPE_NEXT_SEQUENCE_RECV - Data type for next sequence recv verification */
    DataType[DataType["DATA_TYPE_NEXT_SEQUENCE_RECV"] = 8] = "DATA_TYPE_NEXT_SEQUENCE_RECV";
    /** DATA_TYPE_HEADER - Data type for header verification */
    DataType[DataType["DATA_TYPE_HEADER"] = 9] = "DATA_TYPE_HEADER";
    DataType[DataType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DataType = exports.DataType || (exports.DataType = {}));
function dataTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "DATA_TYPE_UNINITIALIZED_UNSPECIFIED":
            return DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED;
        case 1:
        case "DATA_TYPE_CLIENT_STATE":
            return DataType.DATA_TYPE_CLIENT_STATE;
        case 2:
        case "DATA_TYPE_CONSENSUS_STATE":
            return DataType.DATA_TYPE_CONSENSUS_STATE;
        case 3:
        case "DATA_TYPE_CONNECTION_STATE":
            return DataType.DATA_TYPE_CONNECTION_STATE;
        case 4:
        case "DATA_TYPE_CHANNEL_STATE":
            return DataType.DATA_TYPE_CHANNEL_STATE;
        case 5:
        case "DATA_TYPE_PACKET_COMMITMENT":
            return DataType.DATA_TYPE_PACKET_COMMITMENT;
        case 6:
        case "DATA_TYPE_PACKET_ACKNOWLEDGEMENT":
            return DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT;
        case 7:
        case "DATA_TYPE_PACKET_RECEIPT_ABSENCE":
            return DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE;
        case 8:
        case "DATA_TYPE_NEXT_SEQUENCE_RECV":
            return DataType.DATA_TYPE_NEXT_SEQUENCE_RECV;
        case 9:
        case "DATA_TYPE_HEADER":
            return DataType.DATA_TYPE_HEADER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DataType.UNRECOGNIZED;
    }
}
exports.dataTypeFromJSON = dataTypeFromJSON;
function dataTypeToJSON(object) {
    switch (object) {
        case DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED:
            return "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
        case DataType.DATA_TYPE_CLIENT_STATE:
            return "DATA_TYPE_CLIENT_STATE";
        case DataType.DATA_TYPE_CONSENSUS_STATE:
            return "DATA_TYPE_CONSENSUS_STATE";
        case DataType.DATA_TYPE_CONNECTION_STATE:
            return "DATA_TYPE_CONNECTION_STATE";
        case DataType.DATA_TYPE_CHANNEL_STATE:
            return "DATA_TYPE_CHANNEL_STATE";
        case DataType.DATA_TYPE_PACKET_COMMITMENT:
            return "DATA_TYPE_PACKET_COMMITMENT";
        case DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT:
            return "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
        case DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE:
            return "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
        case DataType.DATA_TYPE_NEXT_SEQUENCE_RECV:
            return "DATA_TYPE_NEXT_SEQUENCE_RECV";
        case DataType.DATA_TYPE_HEADER:
            return "DATA_TYPE_HEADER";
        default:
            return "UNKNOWN";
    }
}
exports.dataTypeToJSON = dataTypeToJSON;
function createBaseClientState() {
    return {
        sequence: "0",
        is_frozen: false,
        consensus_state: undefined,
        allow_update_after_proposal: false,
    };
}
exports.ClientState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sequence !== "0") {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.is_frozen === true) {
            writer.uint32(16).bool(message.is_frozen);
        }
        if (message.consensus_state !== undefined) {
            exports.ConsensusState.encode(message.consensus_state, writer.uint32(26).fork()).ldelim();
        }
        if (message.allow_update_after_proposal === true) {
            writer.uint32(32).bool(message.allow_update_after_proposal);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = longToString(reader.uint64());
                    break;
                case 2:
                    message.is_frozen = reader.bool();
                    break;
                case 3:
                    message.consensus_state = exports.ConsensusState.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.allow_update_after_proposal = reader.bool();
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
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
            is_frozen: isSet(object.is_frozen) ? Boolean(object.is_frozen) : false,
            consensus_state: isSet(object.consensus_state)
                ? exports.ConsensusState.fromJSON(object.consensus_state)
                : undefined,
            allow_update_after_proposal: isSet(object.allow_update_after_proposal)
                ? Boolean(object.allow_update_after_proposal)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = message.sequence);
        message.is_frozen !== undefined && (obj.is_frozen = message.is_frozen);
        message.consensus_state !== undefined &&
            (obj.consensus_state = message.consensus_state
                ? exports.ConsensusState.toJSON(message.consensus_state)
                : undefined);
        message.allow_update_after_proposal !== undefined &&
            (obj.allow_update_after_proposal = message.allow_update_after_proposal);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseClientState();
        message.sequence = (_a = object.sequence) !== null && _a !== void 0 ? _a : "0";
        message.is_frozen = (_b = object.is_frozen) !== null && _b !== void 0 ? _b : false;
        message.consensus_state =
            object.consensus_state !== undefined && object.consensus_state !== null
                ? exports.ConsensusState.fromPartial(object.consensus_state)
                : undefined;
        message.allow_update_after_proposal =
            (_c = object.allow_update_after_proposal) !== null && _c !== void 0 ? _c : false;
        return message;
    },
};
function createBaseConsensusState() {
    return { public_key: undefined, diversifier: "", timestamp: "0" };
}
exports.ConsensusState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.public_key !== undefined) {
            any_1.Any.encode(message.public_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.diversifier !== "") {
            writer.uint32(18).string(message.diversifier);
        }
        if (message.timestamp !== "0") {
            writer.uint32(24).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.public_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.diversifier = reader.string();
                    break;
                case 3:
                    message.timestamp = longToString(reader.uint64());
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
            diversifier: isSet(object.diversifier) ? String(object.diversifier) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.public_key !== undefined &&
            (obj.public_key = message.public_key
                ? any_1.Any.toJSON(message.public_key)
                : undefined);
        message.diversifier !== undefined &&
            (obj.diversifier = message.diversifier);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseConsensusState();
        message.public_key =
            object.public_key !== undefined && object.public_key !== null
                ? any_1.Any.fromPartial(object.public_key)
                : undefined;
        message.diversifier = (_a = object.diversifier) !== null && _a !== void 0 ? _a : "";
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseHeader() {
    return {
        sequence: "0",
        timestamp: "0",
        signature: new Uint8Array(),
        new_public_key: undefined,
        new_diversifier: "",
    };
}
exports.Header = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sequence !== "0") {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.timestamp !== "0") {
            writer.uint32(16).uint64(message.timestamp);
        }
        if (message.signature.length !== 0) {
            writer.uint32(26).bytes(message.signature);
        }
        if (message.new_public_key !== undefined) {
            any_1.Any.encode(message.new_public_key, writer.uint32(34).fork()).ldelim();
        }
        if (message.new_diversifier !== "") {
            writer.uint32(42).string(message.new_diversifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeader();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = longToString(reader.uint64());
                    break;
                case 2:
                    message.timestamp = longToString(reader.uint64());
                    break;
                case 3:
                    message.signature = reader.bytes();
                    break;
                case 4:
                    message.new_public_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.new_diversifier = reader.string();
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
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
            signature: isSet(object.signature)
                ? bytesFromBase64(object.signature)
                : new Uint8Array(),
            new_public_key: isSet(object.new_public_key)
                ? any_1.Any.fromJSON(object.new_public_key)
                : undefined,
            new_diversifier: isSet(object.new_diversifier)
                ? String(object.new_diversifier)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = message.sequence);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.new_public_key !== undefined &&
            (obj.new_public_key = message.new_public_key
                ? any_1.Any.toJSON(message.new_public_key)
                : undefined);
        message.new_diversifier !== undefined &&
            (obj.new_diversifier = message.new_diversifier);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseHeader();
        message.sequence = (_a = object.sequence) !== null && _a !== void 0 ? _a : "0";
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : "0";
        message.signature = (_c = object.signature) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.new_public_key =
            object.new_public_key !== undefined && object.new_public_key !== null
                ? any_1.Any.fromPartial(object.new_public_key)
                : undefined;
        message.new_diversifier = (_d = object.new_diversifier) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMisbehaviour() {
    return {
        client_id: "",
        sequence: "0",
        signature_one: undefined,
        signature_two: undefined,
    };
}
exports.Misbehaviour = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.sequence !== "0") {
            writer.uint32(16).uint64(message.sequence);
        }
        if (message.signature_one !== undefined) {
            exports.SignatureAndData.encode(message.signature_one, writer.uint32(26).fork()).ldelim();
        }
        if (message.signature_two !== undefined) {
            exports.SignatureAndData.encode(message.signature_two, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMisbehaviour();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.client_id = reader.string();
                    break;
                case 2:
                    message.sequence = longToString(reader.uint64());
                    break;
                case 3:
                    message.signature_one = exports.SignatureAndData.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.signature_two = exports.SignatureAndData.decode(reader, reader.uint32());
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
            client_id: isSet(object.client_id) ? String(object.client_id) : "",
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
            signature_one: isSet(object.signature_one)
                ? exports.SignatureAndData.fromJSON(object.signature_one)
                : undefined,
            signature_two: isSet(object.signature_two)
                ? exports.SignatureAndData.fromJSON(object.signature_two)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.sequence !== undefined && (obj.sequence = message.sequence);
        message.signature_one !== undefined &&
            (obj.signature_one = message.signature_one
                ? exports.SignatureAndData.toJSON(message.signature_one)
                : undefined);
        message.signature_two !== undefined &&
            (obj.signature_two = message.signature_two
                ? exports.SignatureAndData.toJSON(message.signature_two)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMisbehaviour();
        message.client_id = (_a = object.client_id) !== null && _a !== void 0 ? _a : "";
        message.sequence = (_b = object.sequence) !== null && _b !== void 0 ? _b : "0";
        message.signature_one =
            object.signature_one !== undefined && object.signature_one !== null
                ? exports.SignatureAndData.fromPartial(object.signature_one)
                : undefined;
        message.signature_two =
            object.signature_two !== undefined && object.signature_two !== null
                ? exports.SignatureAndData.fromPartial(object.signature_two)
                : undefined;
        return message;
    },
};
function createBaseSignatureAndData() {
    return {
        signature: new Uint8Array(),
        data_type: 0,
        data: new Uint8Array(),
        timestamp: "0",
    };
}
exports.SignatureAndData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.signature.length !== 0) {
            writer.uint32(10).bytes(message.signature);
        }
        if (message.data_type !== 0) {
            writer.uint32(16).int32(message.data_type);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        if (message.timestamp !== "0") {
            writer.uint32(32).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignatureAndData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signature = reader.bytes();
                    break;
                case 2:
                    message.data_type = reader.int32();
                    break;
                case 3:
                    message.data = reader.bytes();
                    break;
                case 4:
                    message.timestamp = longToString(reader.uint64());
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
            signature: isSet(object.signature)
                ? bytesFromBase64(object.signature)
                : new Uint8Array(),
            data_type: isSet(object.data_type)
                ? dataTypeFromJSON(object.data_type)
                : 0,
            data: isSet(object.data)
                ? bytesFromBase64(object.data)
                : new Uint8Array(),
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.data_type !== undefined &&
            (obj.data_type = dataTypeToJSON(message.data_type));
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSignatureAndData();
        message.signature = (_a = object.signature) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.data_type = (_b = object.data_type) !== null && _b !== void 0 ? _b : 0;
        message.data = (_c = object.data) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.timestamp = (_d = object.timestamp) !== null && _d !== void 0 ? _d : "0";
        return message;
    },
};
function createBaseTimestampedSignatureData() {
    return { signature_data: new Uint8Array(), timestamp: "0" };
}
exports.TimestampedSignatureData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.signature_data.length !== 0) {
            writer.uint32(10).bytes(message.signature_data);
        }
        if (message.timestamp !== "0") {
            writer.uint32(16).uint64(message.timestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimestampedSignatureData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signature_data = reader.bytes();
                    break;
                case 2:
                    message.timestamp = longToString(reader.uint64());
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
            signature_data: isSet(object.signature_data)
                ? bytesFromBase64(object.signature_data)
                : new Uint8Array(),
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.signature_data !== undefined &&
            (obj.signature_data = base64FromBytes(message.signature_data !== undefined
                ? message.signature_data
                : new Uint8Array()));
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseTimestampedSignatureData();
        message.signature_data = (_a = object.signature_data) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : "0";
        return message;
    },
};
function createBaseSignBytes() {
    return {
        sequence: "0",
        timestamp: "0",
        diversifier: "",
        data_type: 0,
        data: new Uint8Array(),
    };
}
exports.SignBytes = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sequence !== "0") {
            writer.uint32(8).uint64(message.sequence);
        }
        if (message.timestamp !== "0") {
            writer.uint32(16).uint64(message.timestamp);
        }
        if (message.diversifier !== "") {
            writer.uint32(26).string(message.diversifier);
        }
        if (message.data_type !== 0) {
            writer.uint32(32).int32(message.data_type);
        }
        if (message.data.length !== 0) {
            writer.uint32(42).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSignBytes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sequence = longToString(reader.uint64());
                    break;
                case 2:
                    message.timestamp = longToString(reader.uint64());
                    break;
                case 3:
                    message.diversifier = reader.string();
                    break;
                case 4:
                    message.data_type = reader.int32();
                    break;
                case 5:
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
            sequence: isSet(object.sequence) ? String(object.sequence) : "0",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "0",
            diversifier: isSet(object.diversifier) ? String(object.diversifier) : "",
            data_type: isSet(object.data_type)
                ? dataTypeFromJSON(object.data_type)
                : 0,
            data: isSet(object.data)
                ? bytesFromBase64(object.data)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.sequence !== undefined && (obj.sequence = message.sequence);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.diversifier !== undefined &&
            (obj.diversifier = message.diversifier);
        message.data_type !== undefined &&
            (obj.data_type = dataTypeToJSON(message.data_type));
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseSignBytes();
        message.sequence = (_a = object.sequence) !== null && _a !== void 0 ? _a : "0";
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : "0";
        message.diversifier = (_c = object.diversifier) !== null && _c !== void 0 ? _c : "";
        message.data_type = (_d = object.data_type) !== null && _d !== void 0 ? _d : 0;
        message.data = (_e = object.data) !== null && _e !== void 0 ? _e : new Uint8Array();
        return message;
    },
};
function createBaseHeaderData() {
    return { new_pub_key: undefined, new_diversifier: "" };
}
exports.HeaderData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.new_pub_key !== undefined) {
            any_1.Any.encode(message.new_pub_key, writer.uint32(10).fork()).ldelim();
        }
        if (message.new_diversifier !== "") {
            writer.uint32(18).string(message.new_diversifier);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseHeaderData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.new_pub_key = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.new_diversifier = reader.string();
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
            new_pub_key: isSet(object.new_pub_key)
                ? any_1.Any.fromJSON(object.new_pub_key)
                : undefined,
            new_diversifier: isSet(object.new_diversifier)
                ? String(object.new_diversifier)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.new_pub_key !== undefined &&
            (obj.new_pub_key = message.new_pub_key
                ? any_1.Any.toJSON(message.new_pub_key)
                : undefined);
        message.new_diversifier !== undefined &&
            (obj.new_diversifier = message.new_diversifier);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseHeaderData();
        message.new_pub_key =
            object.new_pub_key !== undefined && object.new_pub_key !== null
                ? any_1.Any.fromPartial(object.new_pub_key)
                : undefined;
        message.new_diversifier = (_a = object.new_diversifier) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseClientStateData() {
    return { path: new Uint8Array(), client_state: undefined };
}
exports.ClientStateData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.client_state !== undefined) {
            any_1.Any.encode(message.client_state, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseClientStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.client_state = any_1.Any.decode(reader, reader.uint32());
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
            path: isSet(object.path)
                ? bytesFromBase64(object.path)
                : new Uint8Array(),
            client_state: isSet(object.client_state)
                ? any_1.Any.fromJSON(object.client_state)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined &&
            (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.client_state !== undefined &&
            (obj.client_state = message.client_state
                ? any_1.Any.toJSON(message.client_state)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseClientStateData();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.client_state =
            object.client_state !== undefined && object.client_state !== null
                ? any_1.Any.fromPartial(object.client_state)
                : undefined;
        return message;
    },
};
function createBaseConsensusStateData() {
    return { path: new Uint8Array(), consensus_state: undefined };
}
exports.ConsensusStateData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.consensus_state !== undefined) {
            any_1.Any.encode(message.consensus_state, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConsensusStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.consensus_state = any_1.Any.decode(reader, reader.uint32());
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
            path: isSet(object.path)
                ? bytesFromBase64(object.path)
                : new Uint8Array(),
            consensus_state: isSet(object.consensus_state)
                ? any_1.Any.fromJSON(object.consensus_state)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined &&
            (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.consensus_state !== undefined &&
            (obj.consensus_state = message.consensus_state
                ? any_1.Any.toJSON(message.consensus_state)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseConsensusStateData();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.consensus_state =
            object.consensus_state !== undefined && object.consensus_state !== null
                ? any_1.Any.fromPartial(object.consensus_state)
                : undefined;
        return message;
    },
};
function createBaseConnectionStateData() {
    return { path: new Uint8Array(), connection: undefined };
}
exports.ConnectionStateData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.connection !== undefined) {
            connection_1.ConnectionEnd.encode(message.connection, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConnectionStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.connection = connection_1.ConnectionEnd.decode(reader, reader.uint32());
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
            path: isSet(object.path)
                ? bytesFromBase64(object.path)
                : new Uint8Array(),
            connection: isSet(object.connection)
                ? connection_1.ConnectionEnd.fromJSON(object.connection)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined &&
            (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.connection !== undefined &&
            (obj.connection = message.connection
                ? connection_1.ConnectionEnd.toJSON(message.connection)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseConnectionStateData();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.connection =
            object.connection !== undefined && object.connection !== null
                ? connection_1.ConnectionEnd.fromPartial(object.connection)
                : undefined;
        return message;
    },
};
function createBaseChannelStateData() {
    return { path: new Uint8Array(), channel: undefined };
}
exports.ChannelStateData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.channel !== undefined) {
            channel_1.Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseChannelStateData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.channel = channel_1.Channel.decode(reader, reader.uint32());
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
            path: isSet(object.path)
                ? bytesFromBase64(object.path)
                : new Uint8Array(),
            channel: isSet(object.channel)
                ? channel_1.Channel.fromJSON(object.channel)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined &&
            (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.channel !== undefined &&
            (obj.channel = message.channel
                ? channel_1.Channel.toJSON(message.channel)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseChannelStateData();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.channel =
            object.channel !== undefined && object.channel !== null
                ? channel_1.Channel.fromPartial(object.channel)
                : undefined;
        return message;
    },
};
function createBasePacketCommitmentData() {
    return { path: new Uint8Array(), commitment: new Uint8Array() };
}
exports.PacketCommitmentData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.commitment.length !== 0) {
            writer.uint32(18).bytes(message.commitment);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketCommitmentData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.commitment = reader.bytes();
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
            path: isSet(object.path)
                ? bytesFromBase64(object.path)
                : new Uint8Array(),
            commitment: isSet(object.commitment)
                ? bytesFromBase64(object.commitment)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined &&
            (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.commitment !== undefined &&
            (obj.commitment = base64FromBytes(message.commitment !== undefined
                ? message.commitment
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePacketCommitmentData();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.commitment = (_b = object.commitment) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBasePacketAcknowledgementData() {
    return { path: new Uint8Array(), acknowledgement: new Uint8Array() };
}
exports.PacketAcknowledgementData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.acknowledgement.length !== 0) {
            writer.uint32(18).bytes(message.acknowledgement);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketAcknowledgementData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.acknowledgement = reader.bytes();
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
            path: isSet(object.path)
                ? bytesFromBase64(object.path)
                : new Uint8Array(),
            acknowledgement: isSet(object.acknowledgement)
                ? bytesFromBase64(object.acknowledgement)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined &&
            (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.acknowledgement !== undefined &&
            (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined
                ? message.acknowledgement
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePacketAcknowledgementData();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.acknowledgement = (_b = object.acknowledgement) !== null && _b !== void 0 ? _b : new Uint8Array();
        return message;
    },
};
function createBasePacketReceiptAbsenceData() {
    return { path: new Uint8Array() };
}
exports.PacketReceiptAbsenceData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePacketReceiptAbsenceData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
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
            path: isSet(object.path)
                ? bytesFromBase64(object.path)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined &&
            (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePacketReceiptAbsenceData();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseNextSequenceRecvData() {
    return { path: new Uint8Array(), next_seq_recv: "0" };
}
exports.NextSequenceRecvData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.path.length !== 0) {
            writer.uint32(10).bytes(message.path);
        }
        if (message.next_seq_recv !== "0") {
            writer.uint32(16).uint64(message.next_seq_recv);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNextSequenceRecvData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.path = reader.bytes();
                    break;
                case 2:
                    message.next_seq_recv = longToString(reader.uint64());
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
            path: isSet(object.path)
                ? bytesFromBase64(object.path)
                : new Uint8Array(),
            next_seq_recv: isSet(object.next_seq_recv)
                ? String(object.next_seq_recv)
                : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.path !== undefined &&
            (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
        message.next_seq_recv !== undefined &&
            (obj.next_seq_recv = message.next_seq_recv);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseNextSequenceRecvData();
        message.path = (_a = object.path) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.next_seq_recv = (_b = object.next_seq_recv) !== null && _b !== void 0 ? _b : "0";
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
//# sourceMappingURL=solomachine.js.map