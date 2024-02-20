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
exports.Equivocation = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const timestamp_1 = require("../../../google/protobuf/timestamp");
exports.protobufPackage = "cosmos.evidence.v1beta1";
function createBaseEquivocation() {
    return { height: "0", time: undefined, power: "0", consensus_address: "" };
}
exports.Equivocation = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        if (message.time !== undefined) {
            timestamp_1.Timestamp.encode(message.time, writer.uint32(18).fork()).ldelim();
        }
        if (message.power !== "0") {
            writer.uint32(24).int64(message.power);
        }
        if (message.consensus_address !== "") {
            writer.uint32(34).string(message.consensus_address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEquivocation();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.height = longToString(reader.int64());
                    break;
                case 2:
                    message.time = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.power = longToString(reader.int64());
                    break;
                case 4:
                    message.consensus_address = reader.string();
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
            time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
            power: isSet(object.power) ? String(object.power) : "0",
            consensus_address: isSet(object.consensus_address)
                ? String(object.consensus_address)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.height !== undefined && (obj.height = message.height);
        message.time !== undefined &&
            (obj.time = fromTimestamp(message.time).toISOString());
        message.power !== undefined && (obj.power = message.power);
        message.consensus_address !== undefined &&
            (obj.consensus_address = message.consensus_address);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEquivocation();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        message.time =
            object.time !== undefined && object.time !== null
                ? timestamp_1.Timestamp.fromPartial(object.time)
                : undefined;
        message.power = (_b = object.power) !== null && _b !== void 0 ? _b : "0";
        message.consensus_address = (_c = object.consensus_address) !== null && _c !== void 0 ? _c : "";
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
//# sourceMappingURL=evidence.js.map