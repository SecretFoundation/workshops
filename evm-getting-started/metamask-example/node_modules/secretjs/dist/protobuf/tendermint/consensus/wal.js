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
exports.TimedWALMessage = exports.WALMessage = exports.EndHeight = exports.TimeoutInfo = exports.MsgInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("./types");
const duration_1 = require("../../google/protobuf/duration");
const timestamp_1 = require("../../google/protobuf/timestamp");
const events_1 = require("../types/events");
exports.protobufPackage = "tendermint.consensus";
function createBaseMsgInfo() {
    return { msg: undefined, peer_id: "" };
}
exports.MsgInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.msg !== undefined) {
            types_1.Message.encode(message.msg, writer.uint32(10).fork()).ldelim();
        }
        if (message.peer_id !== "") {
            writer.uint32(18).string(message.peer_id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMsgInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msg = types_1.Message.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.peer_id = reader.string();
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
            msg: isSet(object.msg) ? types_1.Message.fromJSON(object.msg) : undefined,
            peer_id: isSet(object.peer_id) ? String(object.peer_id) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.msg !== undefined &&
            (obj.msg = message.msg ? types_1.Message.toJSON(message.msg) : undefined);
        message.peer_id !== undefined && (obj.peer_id = message.peer_id);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMsgInfo();
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? types_1.Message.fromPartial(object.msg)
                : undefined;
        message.peer_id = (_a = object.peer_id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseTimeoutInfo() {
    return { duration: undefined, height: "0", round: 0, step: 0 };
}
exports.TimeoutInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.duration !== undefined) {
            duration_1.Duration.encode(message.duration, writer.uint32(10).fork()).ldelim();
        }
        if (message.height !== "0") {
            writer.uint32(16).int64(message.height);
        }
        if (message.round !== 0) {
            writer.uint32(24).int32(message.round);
        }
        if (message.step !== 0) {
            writer.uint32(32).uint32(message.step);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimeoutInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.height = longToString(reader.int64());
                    break;
                case 3:
                    message.round = reader.int32();
                    break;
                case 4:
                    message.step = reader.uint32();
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
            duration: isSet(object.duration)
                ? duration_1.Duration.fromJSON(object.duration)
                : undefined,
            height: isSet(object.height) ? String(object.height) : "0",
            round: isSet(object.round) ? Number(object.round) : 0,
            step: isSet(object.step) ? Number(object.step) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.duration !== undefined &&
            (obj.duration = message.duration
                ? duration_1.Duration.toJSON(message.duration)
                : undefined);
        message.height !== undefined && (obj.height = message.height);
        message.round !== undefined && (obj.round = Math.round(message.round));
        message.step !== undefined && (obj.step = Math.round(message.step));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseTimeoutInfo();
        message.duration =
            object.duration !== undefined && object.duration !== null
                ? duration_1.Duration.fromPartial(object.duration)
                : undefined;
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.round = (_b = object.round) !== null && _b !== void 0 ? _b : 0;
        message.step = (_c = object.step) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseEndHeight() {
    return { height: "0" };
}
exports.EndHeight = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEndHeight();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
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
            height: isSet(object.height) ? String(object.height) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseEndHeight();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseWALMessage() {
    return {
        event_data_round_state: undefined,
        msg_info: undefined,
        timeout_info: undefined,
        end_height: undefined,
    };
}
exports.WALMessage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.event_data_round_state !== undefined) {
            events_1.EventDataRoundState.encode(message.event_data_round_state, writer.uint32(10).fork()).ldelim();
        }
        if (message.msg_info !== undefined) {
            exports.MsgInfo.encode(message.msg_info, writer.uint32(18).fork()).ldelim();
        }
        if (message.timeout_info !== undefined) {
            exports.TimeoutInfo.encode(message.timeout_info, writer.uint32(26).fork()).ldelim();
        }
        if (message.end_height !== undefined) {
            exports.EndHeight.encode(message.end_height, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseWALMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.event_data_round_state = events_1.EventDataRoundState.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.msg_info = exports.MsgInfo.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.timeout_info = exports.TimeoutInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.end_height = exports.EndHeight.decode(reader, reader.uint32());
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
            event_data_round_state: isSet(object.event_data_round_state)
                ? events_1.EventDataRoundState.fromJSON(object.event_data_round_state)
                : undefined,
            msg_info: isSet(object.msg_info)
                ? exports.MsgInfo.fromJSON(object.msg_info)
                : undefined,
            timeout_info: isSet(object.timeout_info)
                ? exports.TimeoutInfo.fromJSON(object.timeout_info)
                : undefined,
            end_height: isSet(object.end_height)
                ? exports.EndHeight.fromJSON(object.end_height)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.event_data_round_state !== undefined &&
            (obj.event_data_round_state = message.event_data_round_state
                ? events_1.EventDataRoundState.toJSON(message.event_data_round_state)
                : undefined);
        message.msg_info !== undefined &&
            (obj.msg_info = message.msg_info
                ? exports.MsgInfo.toJSON(message.msg_info)
                : undefined);
        message.timeout_info !== undefined &&
            (obj.timeout_info = message.timeout_info
                ? exports.TimeoutInfo.toJSON(message.timeout_info)
                : undefined);
        message.end_height !== undefined &&
            (obj.end_height = message.end_height
                ? exports.EndHeight.toJSON(message.end_height)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseWALMessage();
        message.event_data_round_state =
            object.event_data_round_state !== undefined &&
                object.event_data_round_state !== null
                ? events_1.EventDataRoundState.fromPartial(object.event_data_round_state)
                : undefined;
        message.msg_info =
            object.msg_info !== undefined && object.msg_info !== null
                ? exports.MsgInfo.fromPartial(object.msg_info)
                : undefined;
        message.timeout_info =
            object.timeout_info !== undefined && object.timeout_info !== null
                ? exports.TimeoutInfo.fromPartial(object.timeout_info)
                : undefined;
        message.end_height =
            object.end_height !== undefined && object.end_height !== null
                ? exports.EndHeight.fromPartial(object.end_height)
                : undefined;
        return message;
    },
};
function createBaseTimedWALMessage() {
    return { time: undefined, msg: undefined };
}
exports.TimedWALMessage = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(message.time, writer.uint32(10).fork()).ldelim();
        }
        if (message.msg !== undefined) {
            exports.WALMessage.encode(message.msg, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTimedWALMessage();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.time = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.msg = exports.WALMessage.decode(reader, reader.uint32());
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
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            msg: isSet(object.msg) ? exports.WALMessage.fromJSON(object.msg) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.time !== undefined &&
            (obj.time = fromTimestamp(message.time).toISOString());
        message.msg !== undefined &&
            (obj.msg = message.msg ? exports.WALMessage.toJSON(message.msg) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseTimedWALMessage();
        message.time =
            object.time !== undefined && object.time !== null
                ? timestamp_1.Timestamp.fromPartial(object.time)
                : undefined;
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? exports.WALMessage.fromPartial(object.msg)
                : undefined;
        return message;
    },
};
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
//# sourceMappingURL=wal.js.map