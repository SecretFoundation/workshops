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
exports.Params = exports.ValidatorSigningInfo = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const timestamp_1 = require("../../../google/protobuf/timestamp");
const duration_1 = require("../../../google/protobuf/duration");
exports.protobufPackage = "cosmos.slashing.v1beta1";
function createBaseValidatorSigningInfo() {
    return {
        address: "",
        start_height: "0",
        index_offset: "0",
        jailed_until: undefined,
        tombstoned: false,
        missed_blocks_counter: "0",
    };
}
exports.ValidatorSigningInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        if (message.start_height !== "0") {
            writer.uint32(16).int64(message.start_height);
        }
        if (message.index_offset !== "0") {
            writer.uint32(24).int64(message.index_offset);
        }
        if (message.jailed_until !== undefined) {
            timestamp_1.Timestamp.encode(message.jailed_until, writer.uint32(34).fork()).ldelim();
        }
        if (message.tombstoned === true) {
            writer.uint32(40).bool(message.tombstoned);
        }
        if (message.missed_blocks_counter !== "0") {
            writer.uint32(48).int64(message.missed_blocks_counter);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseValidatorSigningInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.start_height = longToString(reader.int64());
                    break;
                case 3:
                    message.index_offset = longToString(reader.int64());
                    break;
                case 4:
                    message.jailed_until = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.tombstoned = reader.bool();
                    break;
                case 6:
                    message.missed_blocks_counter = longToString(reader.int64());
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
            start_height: isSet(object.start_height)
                ? String(object.start_height)
                : "0",
            index_offset: isSet(object.index_offset)
                ? String(object.index_offset)
                : "0",
            jailed_until: isSet(object.jailed_until)
                ? fromJsonTimestamp(object.jailed_until)
                : undefined,
            tombstoned: isSet(object.tombstoned) ? Boolean(object.tombstoned) : false,
            missed_blocks_counter: isSet(object.missed_blocks_counter)
                ? String(object.missed_blocks_counter)
                : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.address !== undefined && (obj.address = message.address);
        message.start_height !== undefined &&
            (obj.start_height = message.start_height);
        message.index_offset !== undefined &&
            (obj.index_offset = message.index_offset);
        message.jailed_until !== undefined &&
            (obj.jailed_until = fromTimestamp(message.jailed_until).toISOString());
        message.tombstoned !== undefined && (obj.tombstoned = message.tombstoned);
        message.missed_blocks_counter !== undefined &&
            (obj.missed_blocks_counter = message.missed_blocks_counter);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseValidatorSigningInfo();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        message.start_height = (_b = object.start_height) !== null && _b !== void 0 ? _b : "0";
        message.index_offset = (_c = object.index_offset) !== null && _c !== void 0 ? _c : "0";
        message.jailed_until =
            object.jailed_until !== undefined && object.jailed_until !== null
                ? timestamp_1.Timestamp.fromPartial(object.jailed_until)
                : undefined;
        message.tombstoned = (_d = object.tombstoned) !== null && _d !== void 0 ? _d : false;
        message.missed_blocks_counter = (_e = object.missed_blocks_counter) !== null && _e !== void 0 ? _e : "0";
        return message;
    },
};
function createBaseParams() {
    return {
        signed_blocks_window: "0",
        min_signed_per_window: new Uint8Array(),
        downtime_jail_duration: undefined,
        slash_fraction_double_sign: new Uint8Array(),
        slash_fraction_downtime: new Uint8Array(),
    };
}
exports.Params = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.signed_blocks_window !== "0") {
            writer.uint32(8).int64(message.signed_blocks_window);
        }
        if (message.min_signed_per_window.length !== 0) {
            writer.uint32(18).bytes(message.min_signed_per_window);
        }
        if (message.downtime_jail_duration !== undefined) {
            duration_1.Duration.encode(message.downtime_jail_duration, writer.uint32(26).fork()).ldelim();
        }
        if (message.slash_fraction_double_sign.length !== 0) {
            writer.uint32(34).bytes(message.slash_fraction_double_sign);
        }
        if (message.slash_fraction_downtime.length !== 0) {
            writer.uint32(42).bytes(message.slash_fraction_downtime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseParams();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.signed_blocks_window = longToString(reader.int64());
                    break;
                case 2:
                    message.min_signed_per_window = reader.bytes();
                    break;
                case 3:
                    message.downtime_jail_duration = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.slash_fraction_double_sign = reader.bytes();
                    break;
                case 5:
                    message.slash_fraction_downtime = reader.bytes();
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
            signed_blocks_window: isSet(object.signed_blocks_window)
                ? String(object.signed_blocks_window)
                : "0",
            min_signed_per_window: isSet(object.min_signed_per_window)
                ? bytesFromBase64(object.min_signed_per_window)
                : new Uint8Array(),
            downtime_jail_duration: isSet(object.downtime_jail_duration)
                ? duration_1.Duration.fromJSON(object.downtime_jail_duration)
                : undefined,
            slash_fraction_double_sign: isSet(object.slash_fraction_double_sign)
                ? bytesFromBase64(object.slash_fraction_double_sign)
                : new Uint8Array(),
            slash_fraction_downtime: isSet(object.slash_fraction_downtime)
                ? bytesFromBase64(object.slash_fraction_downtime)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.signed_blocks_window !== undefined &&
            (obj.signed_blocks_window = message.signed_blocks_window);
        message.min_signed_per_window !== undefined &&
            (obj.min_signed_per_window = base64FromBytes(message.min_signed_per_window !== undefined
                ? message.min_signed_per_window
                : new Uint8Array()));
        message.downtime_jail_duration !== undefined &&
            (obj.downtime_jail_duration = message.downtime_jail_duration
                ? duration_1.Duration.toJSON(message.downtime_jail_duration)
                : undefined);
        message.slash_fraction_double_sign !== undefined &&
            (obj.slash_fraction_double_sign = base64FromBytes(message.slash_fraction_double_sign !== undefined
                ? message.slash_fraction_double_sign
                : new Uint8Array()));
        message.slash_fraction_downtime !== undefined &&
            (obj.slash_fraction_downtime = base64FromBytes(message.slash_fraction_downtime !== undefined
                ? message.slash_fraction_downtime
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseParams();
        message.signed_blocks_window = (_a = object.signed_blocks_window) !== null && _a !== void 0 ? _a : "0";
        message.min_signed_per_window =
            (_b = object.min_signed_per_window) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.downtime_jail_duration =
            object.downtime_jail_duration !== undefined &&
                object.downtime_jail_duration !== null
                ? duration_1.Duration.fromPartial(object.downtime_jail_duration)
                : undefined;
        message.slash_fraction_double_sign =
            (_c = object.slash_fraction_double_sign) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.slash_fraction_downtime =
            (_d = object.slash_fraction_downtime) !== null && _d !== void 0 ? _d : new Uint8Array();
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
//# sourceMappingURL=slashing.js.map