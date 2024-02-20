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
exports.Fraction = exports.Header = exports.Misbehaviour = exports.ConsensusState = exports.ClientState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const duration_1 = require("../../../../google/protobuf/duration");
const client_1 = require("../../../core/client/v1/client");
const timestamp_1 = require("../../../../google/protobuf/timestamp");
const commitment_1 = require("../../../core/commitment/v1/commitment");
const types_1 = require("../../../../tendermint/types/types");
const validator_1 = require("../../../../tendermint/types/validator");
const proofs_1 = require("../../../../confio/proofs");
exports.protobufPackage = "ibc.lightclients.tendermint.v1";
function createBaseClientState() {
    return {
        chain_id: "",
        trust_level: undefined,
        trusting_period: undefined,
        unbonding_period: undefined,
        max_clock_drift: undefined,
        frozen_height: undefined,
        latest_height: undefined,
        proof_specs: [],
        upgrade_path: [],
        allow_update_after_expiry: false,
        allow_update_after_misbehaviour: false,
    };
}
exports.ClientState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.chain_id !== "") {
            writer.uint32(10).string(message.chain_id);
        }
        if (message.trust_level !== undefined) {
            exports.Fraction.encode(message.trust_level, writer.uint32(18).fork()).ldelim();
        }
        if (message.trusting_period !== undefined) {
            duration_1.Duration.encode(message.trusting_period, writer.uint32(26).fork()).ldelim();
        }
        if (message.unbonding_period !== undefined) {
            duration_1.Duration.encode(message.unbonding_period, writer.uint32(34).fork()).ldelim();
        }
        if (message.max_clock_drift !== undefined) {
            duration_1.Duration.encode(message.max_clock_drift, writer.uint32(42).fork()).ldelim();
        }
        if (message.frozen_height !== undefined) {
            client_1.Height.encode(message.frozen_height, writer.uint32(50).fork()).ldelim();
        }
        if (message.latest_height !== undefined) {
            client_1.Height.encode(message.latest_height, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.proof_specs) {
            proofs_1.ProofSpec.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.upgrade_path) {
            writer.uint32(74).string(v);
        }
        if (message.allow_update_after_expiry === true) {
            writer.uint32(80).bool(message.allow_update_after_expiry);
        }
        if (message.allow_update_after_misbehaviour === true) {
            writer.uint32(88).bool(message.allow_update_after_misbehaviour);
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
                    message.chain_id = reader.string();
                    break;
                case 2:
                    message.trust_level = exports.Fraction.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.trusting_period = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.unbonding_period = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.max_clock_drift = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.frozen_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.latest_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.proof_specs.push(proofs_1.ProofSpec.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.upgrade_path.push(reader.string());
                    break;
                case 10:
                    message.allow_update_after_expiry = reader.bool();
                    break;
                case 11:
                    message.allow_update_after_misbehaviour = reader.bool();
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
            chain_id: isSet(object.chain_id) ? String(object.chain_id) : "",
            trust_level: isSet(object.trust_level)
                ? exports.Fraction.fromJSON(object.trust_level)
                : undefined,
            trusting_period: isSet(object.trusting_period)
                ? duration_1.Duration.fromJSON(object.trusting_period)
                : undefined,
            unbonding_period: isSet(object.unbonding_period)
                ? duration_1.Duration.fromJSON(object.unbonding_period)
                : undefined,
            max_clock_drift: isSet(object.max_clock_drift)
                ? duration_1.Duration.fromJSON(object.max_clock_drift)
                : undefined,
            frozen_height: isSet(object.frozen_height)
                ? client_1.Height.fromJSON(object.frozen_height)
                : undefined,
            latest_height: isSet(object.latest_height)
                ? client_1.Height.fromJSON(object.latest_height)
                : undefined,
            proof_specs: Array.isArray(object === null || object === void 0 ? void 0 : object.proof_specs)
                ? object.proof_specs.map((e) => proofs_1.ProofSpec.fromJSON(e))
                : [],
            upgrade_path: Array.isArray(object === null || object === void 0 ? void 0 : object.upgrade_path)
                ? object.upgrade_path.map((e) => String(e))
                : [],
            allow_update_after_expiry: isSet(object.allow_update_after_expiry)
                ? Boolean(object.allow_update_after_expiry)
                : false,
            allow_update_after_misbehaviour: isSet(object.allow_update_after_misbehaviour)
                ? Boolean(object.allow_update_after_misbehaviour)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.chain_id !== undefined && (obj.chain_id = message.chain_id);
        message.trust_level !== undefined &&
            (obj.trust_level = message.trust_level
                ? exports.Fraction.toJSON(message.trust_level)
                : undefined);
        message.trusting_period !== undefined &&
            (obj.trusting_period = message.trusting_period
                ? duration_1.Duration.toJSON(message.trusting_period)
                : undefined);
        message.unbonding_period !== undefined &&
            (obj.unbonding_period = message.unbonding_period
                ? duration_1.Duration.toJSON(message.unbonding_period)
                : undefined);
        message.max_clock_drift !== undefined &&
            (obj.max_clock_drift = message.max_clock_drift
                ? duration_1.Duration.toJSON(message.max_clock_drift)
                : undefined);
        message.frozen_height !== undefined &&
            (obj.frozen_height = message.frozen_height
                ? client_1.Height.toJSON(message.frozen_height)
                : undefined);
        message.latest_height !== undefined &&
            (obj.latest_height = message.latest_height
                ? client_1.Height.toJSON(message.latest_height)
                : undefined);
        if (message.proof_specs) {
            obj.proof_specs = message.proof_specs.map((e) => e ? proofs_1.ProofSpec.toJSON(e) : undefined);
        }
        else {
            obj.proof_specs = [];
        }
        if (message.upgrade_path) {
            obj.upgrade_path = message.upgrade_path.map((e) => e);
        }
        else {
            obj.upgrade_path = [];
        }
        message.allow_update_after_expiry !== undefined &&
            (obj.allow_update_after_expiry = message.allow_update_after_expiry);
        message.allow_update_after_misbehaviour !== undefined &&
            (obj.allow_update_after_misbehaviour =
                message.allow_update_after_misbehaviour);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseClientState();
        message.chain_id = (_a = object.chain_id) !== null && _a !== void 0 ? _a : "";
        message.trust_level =
            object.trust_level !== undefined && object.trust_level !== null
                ? exports.Fraction.fromPartial(object.trust_level)
                : undefined;
        message.trusting_period =
            object.trusting_period !== undefined && object.trusting_period !== null
                ? duration_1.Duration.fromPartial(object.trusting_period)
                : undefined;
        message.unbonding_period =
            object.unbonding_period !== undefined && object.unbonding_period !== null
                ? duration_1.Duration.fromPartial(object.unbonding_period)
                : undefined;
        message.max_clock_drift =
            object.max_clock_drift !== undefined && object.max_clock_drift !== null
                ? duration_1.Duration.fromPartial(object.max_clock_drift)
                : undefined;
        message.frozen_height =
            object.frozen_height !== undefined && object.frozen_height !== null
                ? client_1.Height.fromPartial(object.frozen_height)
                : undefined;
        message.latest_height =
            object.latest_height !== undefined && object.latest_height !== null
                ? client_1.Height.fromPartial(object.latest_height)
                : undefined;
        message.proof_specs =
            ((_b = object.proof_specs) === null || _b === void 0 ? void 0 : _b.map((e) => proofs_1.ProofSpec.fromPartial(e))) || [];
        message.upgrade_path = ((_c = object.upgrade_path) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.allow_update_after_expiry =
            (_d = object.allow_update_after_expiry) !== null && _d !== void 0 ? _d : false;
        message.allow_update_after_misbehaviour =
            (_e = object.allow_update_after_misbehaviour) !== null && _e !== void 0 ? _e : false;
        return message;
    },
};
function createBaseConsensusState() {
    return {
        timestamp: undefined,
        root: undefined,
        next_validators_hash: new Uint8Array(),
    };
}
exports.ConsensusState = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.timestamp !== undefined) {
            timestamp_1.Timestamp.encode(message.timestamp, writer.uint32(10).fork()).ldelim();
        }
        if (message.root !== undefined) {
            commitment_1.MerkleRoot.encode(message.root, writer.uint32(18).fork()).ldelim();
        }
        if (message.next_validators_hash.length !== 0) {
            writer.uint32(26).bytes(message.next_validators_hash);
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
                    message.timestamp = timestamp_1.Timestamp.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.root = commitment_1.MerkleRoot.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.next_validators_hash = reader.bytes();
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
            timestamp: isSet(object.timestamp)
                ? fromJsonTimestamp(object.timestamp)
                : undefined,
            root: isSet(object.root) ? commitment_1.MerkleRoot.fromJSON(object.root) : undefined,
            next_validators_hash: isSet(object.next_validators_hash)
                ? bytesFromBase64(object.next_validators_hash)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.timestamp !== undefined &&
            (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
        message.root !== undefined &&
            (obj.root = message.root ? commitment_1.MerkleRoot.toJSON(message.root) : undefined);
        message.next_validators_hash !== undefined &&
            (obj.next_validators_hash = base64FromBytes(message.next_validators_hash !== undefined
                ? message.next_validators_hash
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseConsensusState();
        message.timestamp =
            object.timestamp !== undefined && object.timestamp !== null
                ? timestamp_1.Timestamp.fromPartial(object.timestamp)
                : undefined;
        message.root =
            object.root !== undefined && object.root !== null
                ? commitment_1.MerkleRoot.fromPartial(object.root)
                : undefined;
        message.next_validators_hash =
            (_a = object.next_validators_hash) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseMisbehaviour() {
    return { client_id: "", header_1: undefined, header_2: undefined };
}
exports.Misbehaviour = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.client_id !== "") {
            writer.uint32(10).string(message.client_id);
        }
        if (message.header_1 !== undefined) {
            exports.Header.encode(message.header_1, writer.uint32(18).fork()).ldelim();
        }
        if (message.header_2 !== undefined) {
            exports.Header.encode(message.header_2, writer.uint32(26).fork()).ldelim();
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
                    message.header_1 = exports.Header.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.header_2 = exports.Header.decode(reader, reader.uint32());
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
            header_1: isSet(object.header_1)
                ? exports.Header.fromJSON(object.header_1)
                : undefined,
            header_2: isSet(object.header_2)
                ? exports.Header.fromJSON(object.header_2)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.client_id !== undefined && (obj.client_id = message.client_id);
        message.header_1 !== undefined &&
            (obj.header_1 = message.header_1
                ? exports.Header.toJSON(message.header_1)
                : undefined);
        message.header_2 !== undefined &&
            (obj.header_2 = message.header_2
                ? exports.Header.toJSON(message.header_2)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseMisbehaviour();
        message.client_id = (_a = object.client_id) !== null && _a !== void 0 ? _a : "";
        message.header_1 =
            object.header_1 !== undefined && object.header_1 !== null
                ? exports.Header.fromPartial(object.header_1)
                : undefined;
        message.header_2 =
            object.header_2 !== undefined && object.header_2 !== null
                ? exports.Header.fromPartial(object.header_2)
                : undefined;
        return message;
    },
};
function createBaseHeader() {
    return {
        signed_header: undefined,
        validator_set: undefined,
        trusted_height: undefined,
        trusted_validators: undefined,
    };
}
exports.Header = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.signed_header !== undefined) {
            types_1.SignedHeader.encode(message.signed_header, writer.uint32(10).fork()).ldelim();
        }
        if (message.validator_set !== undefined) {
            validator_1.ValidatorSet.encode(message.validator_set, writer.uint32(18).fork()).ldelim();
        }
        if (message.trusted_height !== undefined) {
            client_1.Height.encode(message.trusted_height, writer.uint32(26).fork()).ldelim();
        }
        if (message.trusted_validators !== undefined) {
            validator_1.ValidatorSet.encode(message.trusted_validators, writer.uint32(34).fork()).ldelim();
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
                    message.signed_header = types_1.SignedHeader.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.validator_set = validator_1.ValidatorSet.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.trusted_height = client_1.Height.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.trusted_validators = validator_1.ValidatorSet.decode(reader, reader.uint32());
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
            signed_header: isSet(object.signed_header)
                ? types_1.SignedHeader.fromJSON(object.signed_header)
                : undefined,
            validator_set: isSet(object.validator_set)
                ? validator_1.ValidatorSet.fromJSON(object.validator_set)
                : undefined,
            trusted_height: isSet(object.trusted_height)
                ? client_1.Height.fromJSON(object.trusted_height)
                : undefined,
            trusted_validators: isSet(object.trusted_validators)
                ? validator_1.ValidatorSet.fromJSON(object.trusted_validators)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.signed_header !== undefined &&
            (obj.signed_header = message.signed_header
                ? types_1.SignedHeader.toJSON(message.signed_header)
                : undefined);
        message.validator_set !== undefined &&
            (obj.validator_set = message.validator_set
                ? validator_1.ValidatorSet.toJSON(message.validator_set)
                : undefined);
        message.trusted_height !== undefined &&
            (obj.trusted_height = message.trusted_height
                ? client_1.Height.toJSON(message.trusted_height)
                : undefined);
        message.trusted_validators !== undefined &&
            (obj.trusted_validators = message.trusted_validators
                ? validator_1.ValidatorSet.toJSON(message.trusted_validators)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseHeader();
        message.signed_header =
            object.signed_header !== undefined && object.signed_header !== null
                ? types_1.SignedHeader.fromPartial(object.signed_header)
                : undefined;
        message.validator_set =
            object.validator_set !== undefined && object.validator_set !== null
                ? validator_1.ValidatorSet.fromPartial(object.validator_set)
                : undefined;
        message.trusted_height =
            object.trusted_height !== undefined && object.trusted_height !== null
                ? client_1.Height.fromPartial(object.trusted_height)
                : undefined;
        message.trusted_validators =
            object.trusted_validators !== undefined &&
                object.trusted_validators !== null
                ? validator_1.ValidatorSet.fromPartial(object.trusted_validators)
                : undefined;
        return message;
    },
};
function createBaseFraction() {
    return { numerator: "0", denominator: "0" };
}
exports.Fraction = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.numerator !== "0") {
            writer.uint32(8).uint64(message.numerator);
        }
        if (message.denominator !== "0") {
            writer.uint32(16).uint64(message.denominator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFraction();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.numerator = longToString(reader.uint64());
                    break;
                case 2:
                    message.denominator = longToString(reader.uint64());
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
            numerator: isSet(object.numerator) ? String(object.numerator) : "0",
            denominator: isSet(object.denominator) ? String(object.denominator) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.numerator !== undefined && (obj.numerator = message.numerator);
        message.denominator !== undefined &&
            (obj.denominator = message.denominator);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFraction();
        message.numerator = (_a = object.numerator) !== null && _a !== void 0 ? _a : "0";
        message.denominator = (_b = object.denominator) !== null && _b !== void 0 ? _b : "0";
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
//# sourceMappingURL=tendermint.js.map