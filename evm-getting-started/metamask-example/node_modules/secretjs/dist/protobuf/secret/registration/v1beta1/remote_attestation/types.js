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
exports.PlatformInfoBlob = exports.SGXEC256Signature = exports.EndorsedAttestationReport = exports.QuoteReportData = exports.QuoteReportBody = exports.QuoteReport = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "secret.registration.remote_attestation.v1beta1";
function createBaseQuoteReport() {
    return {
        id: "",
        timestamp: "",
        version: "0",
        isv_enclave_quote_status: "",
        platform_info_blob: "",
        isv_enclave_quote_body: "",
        advisory_ids: [],
    };
}
exports.QuoteReport = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.timestamp !== "") {
            writer.uint32(18).string(message.timestamp);
        }
        if (message.version !== "0") {
            writer.uint32(24).uint64(message.version);
        }
        if (message.isv_enclave_quote_status !== "") {
            writer.uint32(34).string(message.isv_enclave_quote_status);
        }
        if (message.platform_info_blob !== "") {
            writer.uint32(42).string(message.platform_info_blob);
        }
        if (message.isv_enclave_quote_body !== "") {
            writer.uint32(50).string(message.isv_enclave_quote_body);
        }
        for (const v of message.advisory_ids) {
            writer.uint32(58).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuoteReport();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.timestamp = reader.string();
                    break;
                case 3:
                    message.version = longToString(reader.uint64());
                    break;
                case 4:
                    message.isv_enclave_quote_status = reader.string();
                    break;
                case 5:
                    message.platform_info_blob = reader.string();
                    break;
                case 6:
                    message.isv_enclave_quote_body = reader.string();
                    break;
                case 7:
                    message.advisory_ids.push(reader.string());
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
            id: isSet(object.id) ? String(object.id) : "",
            timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
            version: isSet(object.version) ? String(object.version) : "0",
            isv_enclave_quote_status: isSet(object.isv_enclave_quote_status)
                ? String(object.isv_enclave_quote_status)
                : "",
            platform_info_blob: isSet(object.platform_info_blob)
                ? String(object.platform_info_blob)
                : "",
            isv_enclave_quote_body: isSet(object.isv_enclave_quote_body)
                ? String(object.isv_enclave_quote_body)
                : "",
            advisory_ids: Array.isArray(object === null || object === void 0 ? void 0 : object.advisory_ids)
                ? object.advisory_ids.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.timestamp !== undefined && (obj.timestamp = message.timestamp);
        message.version !== undefined && (obj.version = message.version);
        message.isv_enclave_quote_status !== undefined &&
            (obj.isv_enclave_quote_status = message.isv_enclave_quote_status);
        message.platform_info_blob !== undefined &&
            (obj.platform_info_blob = message.platform_info_blob);
        message.isv_enclave_quote_body !== undefined &&
            (obj.isv_enclave_quote_body = message.isv_enclave_quote_body);
        if (message.advisory_ids) {
            obj.advisory_ids = message.advisory_ids.map((e) => e);
        }
        else {
            obj.advisory_ids = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseQuoteReport();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.timestamp = (_b = object.timestamp) !== null && _b !== void 0 ? _b : "";
        message.version = (_c = object.version) !== null && _c !== void 0 ? _c : "0";
        message.isv_enclave_quote_status = (_d = object.isv_enclave_quote_status) !== null && _d !== void 0 ? _d : "";
        message.platform_info_blob = (_e = object.platform_info_blob) !== null && _e !== void 0 ? _e : "";
        message.isv_enclave_quote_body = (_f = object.isv_enclave_quote_body) !== null && _f !== void 0 ? _f : "";
        message.advisory_ids = ((_g = object.advisory_ids) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        return message;
    },
};
function createBaseQuoteReportBody() {
    return { mr_enclave: "", mr_signer: "", report_data: "" };
}
exports.QuoteReportBody = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.mr_enclave !== "") {
            writer.uint32(10).string(message.mr_enclave);
        }
        if (message.mr_signer !== "") {
            writer.uint32(18).string(message.mr_signer);
        }
        if (message.report_data !== "") {
            writer.uint32(26).string(message.report_data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuoteReportBody();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.mr_enclave = reader.string();
                    break;
                case 2:
                    message.mr_signer = reader.string();
                    break;
                case 3:
                    message.report_data = reader.string();
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
            mr_enclave: isSet(object.mr_enclave) ? String(object.mr_enclave) : "",
            mr_signer: isSet(object.mr_signer) ? String(object.mr_signer) : "",
            report_data: isSet(object.report_data) ? String(object.report_data) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.mr_enclave !== undefined && (obj.mr_enclave = message.mr_enclave);
        message.mr_signer !== undefined && (obj.mr_signer = message.mr_signer);
        message.report_data !== undefined &&
            (obj.report_data = message.report_data);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseQuoteReportBody();
        message.mr_enclave = (_a = object.mr_enclave) !== null && _a !== void 0 ? _a : "";
        message.mr_signer = (_b = object.mr_signer) !== null && _b !== void 0 ? _b : "";
        message.report_data = (_c = object.report_data) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseQuoteReportData() {
    return { version: "0", sign_type: "0", report_body: undefined };
}
exports.QuoteReportData = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.version !== "0") {
            writer.uint32(8).uint64(message.version);
        }
        if (message.sign_type !== "0") {
            writer.uint32(16).uint64(message.sign_type);
        }
        if (message.report_body !== undefined) {
            exports.QuoteReportBody.encode(message.report_body, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQuoteReportData();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = longToString(reader.uint64());
                    break;
                case 2:
                    message.sign_type = longToString(reader.uint64());
                    break;
                case 3:
                    message.report_body = exports.QuoteReportBody.decode(reader, reader.uint32());
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
            version: isSet(object.version) ? String(object.version) : "0",
            sign_type: isSet(object.sign_type) ? String(object.sign_type) : "0",
            report_body: isSet(object.report_body)
                ? exports.QuoteReportBody.fromJSON(object.report_body)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.sign_type !== undefined && (obj.sign_type = message.sign_type);
        message.report_body !== undefined &&
            (obj.report_body = message.report_body
                ? exports.QuoteReportBody.toJSON(message.report_body)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseQuoteReportData();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "0";
        message.sign_type = (_b = object.sign_type) !== null && _b !== void 0 ? _b : "0";
        message.report_body =
            object.report_body !== undefined && object.report_body !== null
                ? exports.QuoteReportBody.fromPartial(object.report_body)
                : undefined;
        return message;
    },
};
function createBaseEndorsedAttestationReport() {
    return {
        report: new Uint8Array(),
        signature: new Uint8Array(),
        signing_cert: new Uint8Array(),
    };
}
exports.EndorsedAttestationReport = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.report.length !== 0) {
            writer.uint32(10).bytes(message.report);
        }
        if (message.signature.length !== 0) {
            writer.uint32(18).bytes(message.signature);
        }
        if (message.signing_cert.length !== 0) {
            writer.uint32(26).bytes(message.signing_cert);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEndorsedAttestationReport();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.report = reader.bytes();
                    break;
                case 2:
                    message.signature = reader.bytes();
                    break;
                case 3:
                    message.signing_cert = reader.bytes();
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
            report: isSet(object.report)
                ? bytesFromBase64(object.report)
                : new Uint8Array(),
            signature: isSet(object.signature)
                ? bytesFromBase64(object.signature)
                : new Uint8Array(),
            signing_cert: isSet(object.signing_cert)
                ? bytesFromBase64(object.signing_cert)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.report !== undefined &&
            (obj.report = base64FromBytes(message.report !== undefined ? message.report : new Uint8Array()));
        message.signature !== undefined &&
            (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
        message.signing_cert !== undefined &&
            (obj.signing_cert = base64FromBytes(message.signing_cert !== undefined
                ? message.signing_cert
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEndorsedAttestationReport();
        message.report = (_a = object.report) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.signature = (_b = object.signature) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.signing_cert = (_c = object.signing_cert) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    },
};
function createBaseSGXEC256Signature() {
    return { gx: "", gy: "" };
}
exports.SGXEC256Signature = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.gx !== "") {
            writer.uint32(10).string(message.gx);
        }
        if (message.gy !== "") {
            writer.uint32(18).string(message.gy);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSGXEC256Signature();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.gx = reader.string();
                    break;
                case 2:
                    message.gy = reader.string();
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
            gx: isSet(object.gx) ? String(object.gx) : "",
            gy: isSet(object.gy) ? String(object.gy) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.gx !== undefined && (obj.gx = message.gx);
        message.gy !== undefined && (obj.gy = message.gy);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseSGXEC256Signature();
        message.gx = (_a = object.gx) !== null && _a !== void 0 ? _a : "";
        message.gy = (_b = object.gy) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBasePlatformInfoBlob() {
    return {
        sgx_epid_group_flags: 0,
        sgx_tcb_evaluation_flags: 0,
        pse_evaluation_flags: 0,
        latest_equivalent_tcb_psvn: "",
        latest_pse_isvsvn: "",
        latest_psda_svn: "",
        xeid: 0,
        gid: 0,
        sgx_ec256_signature_t: undefined,
    };
}
exports.PlatformInfoBlob = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.sgx_epid_group_flags !== 0) {
            writer.uint32(8).uint32(message.sgx_epid_group_flags);
        }
        if (message.sgx_tcb_evaluation_flags !== 0) {
            writer.uint32(16).uint32(message.sgx_tcb_evaluation_flags);
        }
        if (message.pse_evaluation_flags !== 0) {
            writer.uint32(24).uint32(message.pse_evaluation_flags);
        }
        if (message.latest_equivalent_tcb_psvn !== "") {
            writer.uint32(34).string(message.latest_equivalent_tcb_psvn);
        }
        if (message.latest_pse_isvsvn !== "") {
            writer.uint32(42).string(message.latest_pse_isvsvn);
        }
        if (message.latest_psda_svn !== "") {
            writer.uint32(50).string(message.latest_psda_svn);
        }
        if (message.xeid !== 0) {
            writer.uint32(56).uint32(message.xeid);
        }
        if (message.gid !== 0) {
            writer.uint32(64).uint32(message.gid);
        }
        if (message.sgx_ec256_signature_t !== undefined) {
            exports.SGXEC256Signature.encode(message.sgx_ec256_signature_t, writer.uint32(74).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePlatformInfoBlob();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sgx_epid_group_flags = reader.uint32();
                    break;
                case 2:
                    message.sgx_tcb_evaluation_flags = reader.uint32();
                    break;
                case 3:
                    message.pse_evaluation_flags = reader.uint32();
                    break;
                case 4:
                    message.latest_equivalent_tcb_psvn = reader.string();
                    break;
                case 5:
                    message.latest_pse_isvsvn = reader.string();
                    break;
                case 6:
                    message.latest_psda_svn = reader.string();
                    break;
                case 7:
                    message.xeid = reader.uint32();
                    break;
                case 8:
                    message.gid = reader.uint32();
                    break;
                case 9:
                    message.sgx_ec256_signature_t = exports.SGXEC256Signature.decode(reader, reader.uint32());
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
            sgx_epid_group_flags: isSet(object.sgx_epid_group_flags)
                ? Number(object.sgx_epid_group_flags)
                : 0,
            sgx_tcb_evaluation_flags: isSet(object.sgx_tcb_evaluation_flags)
                ? Number(object.sgx_tcb_evaluation_flags)
                : 0,
            pse_evaluation_flags: isSet(object.pse_evaluation_flags)
                ? Number(object.pse_evaluation_flags)
                : 0,
            latest_equivalent_tcb_psvn: isSet(object.latest_equivalent_tcb_psvn)
                ? String(object.latest_equivalent_tcb_psvn)
                : "",
            latest_pse_isvsvn: isSet(object.latest_pse_isvsvn)
                ? String(object.latest_pse_isvsvn)
                : "",
            latest_psda_svn: isSet(object.latest_psda_svn)
                ? String(object.latest_psda_svn)
                : "",
            xeid: isSet(object.xeid) ? Number(object.xeid) : 0,
            gid: isSet(object.gid) ? Number(object.gid) : 0,
            sgx_ec256_signature_t: isSet(object.sgx_ec256_signature_t)
                ? exports.SGXEC256Signature.fromJSON(object.sgx_ec256_signature_t)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.sgx_epid_group_flags !== undefined &&
            (obj.sgx_epid_group_flags = Math.round(message.sgx_epid_group_flags));
        message.sgx_tcb_evaluation_flags !== undefined &&
            (obj.sgx_tcb_evaluation_flags = Math.round(message.sgx_tcb_evaluation_flags));
        message.pse_evaluation_flags !== undefined &&
            (obj.pse_evaluation_flags = Math.round(message.pse_evaluation_flags));
        message.latest_equivalent_tcb_psvn !== undefined &&
            (obj.latest_equivalent_tcb_psvn = message.latest_equivalent_tcb_psvn);
        message.latest_pse_isvsvn !== undefined &&
            (obj.latest_pse_isvsvn = message.latest_pse_isvsvn);
        message.latest_psda_svn !== undefined &&
            (obj.latest_psda_svn = message.latest_psda_svn);
        message.xeid !== undefined && (obj.xeid = Math.round(message.xeid));
        message.gid !== undefined && (obj.gid = Math.round(message.gid));
        message.sgx_ec256_signature_t !== undefined &&
            (obj.sgx_ec256_signature_t = message.sgx_ec256_signature_t
                ? exports.SGXEC256Signature.toJSON(message.sgx_ec256_signature_t)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBasePlatformInfoBlob();
        message.sgx_epid_group_flags = (_a = object.sgx_epid_group_flags) !== null && _a !== void 0 ? _a : 0;
        message.sgx_tcb_evaluation_flags = (_b = object.sgx_tcb_evaluation_flags) !== null && _b !== void 0 ? _b : 0;
        message.pse_evaluation_flags = (_c = object.pse_evaluation_flags) !== null && _c !== void 0 ? _c : 0;
        message.latest_equivalent_tcb_psvn =
            (_d = object.latest_equivalent_tcb_psvn) !== null && _d !== void 0 ? _d : "";
        message.latest_pse_isvsvn = (_e = object.latest_pse_isvsvn) !== null && _e !== void 0 ? _e : "";
        message.latest_psda_svn = (_f = object.latest_psda_svn) !== null && _f !== void 0 ? _f : "";
        message.xeid = (_g = object.xeid) !== null && _g !== void 0 ? _g : 0;
        message.gid = (_h = object.gid) !== null && _h !== void 0 ? _h : 0;
        message.sgx_ec256_signature_t =
            object.sgx_ec256_signature_t !== undefined &&
                object.sgx_ec256_signature_t !== null
                ? exports.SGXEC256Signature.fromPartial(object.sgx_ec256_signature_t)
                : undefined;
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