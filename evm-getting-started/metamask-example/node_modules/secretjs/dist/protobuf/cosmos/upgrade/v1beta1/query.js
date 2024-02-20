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
exports.QueryClientImpl = exports.QueryModuleVersionsResponse = exports.QueryModuleVersionsRequest = exports.QueryUpgradedConsensusStateResponse = exports.QueryUpgradedConsensusStateRequest = exports.QueryAppliedPlanResponse = exports.QueryAppliedPlanRequest = exports.QueryCurrentPlanResponse = exports.QueryCurrentPlanRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const upgrade_1 = require("./upgrade");
exports.protobufPackage = "cosmos.upgrade.v1beta1";
function createBaseQueryCurrentPlanRequest() {
    return {};
}
exports.QueryCurrentPlanRequest = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentPlanRequest();
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
        const message = createBaseQueryCurrentPlanRequest();
        return message;
    },
};
function createBaseQueryCurrentPlanResponse() {
    return { plan: undefined };
}
exports.QueryCurrentPlanResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.plan !== undefined) {
            upgrade_1.Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryCurrentPlanResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.plan = upgrade_1.Plan.decode(reader, reader.uint32());
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
            plan: isSet(object.plan) ? upgrade_1.Plan.fromJSON(object.plan) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.plan !== undefined &&
            (obj.plan = message.plan ? upgrade_1.Plan.toJSON(message.plan) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryCurrentPlanResponse();
        message.plan =
            object.plan !== undefined && object.plan !== null
                ? upgrade_1.Plan.fromPartial(object.plan)
                : undefined;
        return message;
    },
};
function createBaseQueryAppliedPlanRequest() {
    return { name: "" };
}
exports.QueryAppliedPlanRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppliedPlanRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
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
            name: isSet(object.name) ? String(object.name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryAppliedPlanRequest();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryAppliedPlanResponse() {
    return { height: "0" };
}
exports.QueryAppliedPlanResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.height !== "0") {
            writer.uint32(8).int64(message.height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAppliedPlanResponse();
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
        const message = createBaseQueryAppliedPlanResponse();
        message.height = (_a = object.height) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryUpgradedConsensusStateRequest() {
    return { last_height: "0" };
}
exports.QueryUpgradedConsensusStateRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.last_height !== "0") {
            writer.uint32(8).int64(message.last_height);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.last_height = longToString(reader.int64());
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
            last_height: isSet(object.last_height) ? String(object.last_height) : "0",
        };
    },
    toJSON(message) {
        const obj = {};
        message.last_height !== undefined &&
            (obj.last_height = message.last_height);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryUpgradedConsensusStateRequest();
        message.last_height = (_a = object.last_height) !== null && _a !== void 0 ? _a : "0";
        return message;
    },
};
function createBaseQueryUpgradedConsensusStateResponse() {
    return { upgraded_consensus_state: new Uint8Array() };
}
exports.QueryUpgradedConsensusStateResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.upgraded_consensus_state.length !== 0) {
            writer.uint32(18).bytes(message.upgraded_consensus_state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryUpgradedConsensusStateResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.upgraded_consensus_state = reader.bytes();
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
            upgraded_consensus_state: isSet(object.upgraded_consensus_state)
                ? bytesFromBase64(object.upgraded_consensus_state)
                : new Uint8Array(),
        };
    },
    toJSON(message) {
        const obj = {};
        message.upgraded_consensus_state !== undefined &&
            (obj.upgraded_consensus_state = base64FromBytes(message.upgraded_consensus_state !== undefined
                ? message.upgraded_consensus_state
                : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryUpgradedConsensusStateResponse();
        message.upgraded_consensus_state =
            (_a = object.upgraded_consensus_state) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
function createBaseQueryModuleVersionsRequest() {
    return { module_name: "" };
}
exports.QueryModuleVersionsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.module_name !== "") {
            writer.uint32(10).string(message.module_name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleVersionsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module_name = reader.string();
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
            module_name: isSet(object.module_name) ? String(object.module_name) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.module_name !== undefined &&
            (obj.module_name = message.module_name);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryModuleVersionsRequest();
        message.module_name = (_a = object.module_name) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseQueryModuleVersionsResponse() {
    return { module_versions: [] };
}
exports.QueryModuleVersionsResponse = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.module_versions) {
            upgrade_1.ModuleVersion.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryModuleVersionsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.module_versions.push(upgrade_1.ModuleVersion.decode(reader, reader.uint32()));
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
            module_versions: Array.isArray(object === null || object === void 0 ? void 0 : object.module_versions)
                ? object.module_versions.map((e) => upgrade_1.ModuleVersion.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.module_versions) {
            obj.module_versions = message.module_versions.map((e) => e ? upgrade_1.ModuleVersion.toJSON(e) : undefined);
        }
        else {
            obj.module_versions = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseQueryModuleVersionsResponse();
        message.module_versions =
            ((_a = object.module_versions) === null || _a === void 0 ? void 0 : _a.map((e) => upgrade_1.ModuleVersion.fromPartial(e))) || [];
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CurrentPlan = this.CurrentPlan.bind(this);
        this.AppliedPlan = this.AppliedPlan.bind(this);
        this.UpgradedConsensusState = this.UpgradedConsensusState.bind(this);
        this.ModuleVersions = this.ModuleVersions.bind(this);
    }
    CurrentPlan(request) {
        const data = exports.QueryCurrentPlanRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "CurrentPlan", data);
        return promise.then((data) => exports.QueryCurrentPlanResponse.decode(new _m0.Reader(data)));
    }
    AppliedPlan(request) {
        const data = exports.QueryAppliedPlanRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "AppliedPlan", data);
        return promise.then((data) => exports.QueryAppliedPlanResponse.decode(new _m0.Reader(data)));
    }
    UpgradedConsensusState(request) {
        const data = exports.QueryUpgradedConsensusStateRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "UpgradedConsensusState", data);
        return promise.then((data) => exports.QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data)));
    }
    ModuleVersions(request) {
        const data = exports.QueryModuleVersionsRequest.encode(request).finish();
        const promise = this.rpc.request("cosmos.upgrade.v1beta1.Query", "ModuleVersions", data);
        return promise.then((data) => exports.QueryModuleVersionsResponse.decode(new _m0.Reader(data)));
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