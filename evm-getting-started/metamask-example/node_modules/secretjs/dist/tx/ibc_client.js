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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgCreateClient = exports.MsgSubmitMisbehaviour = exports.MsgUpgradeClient = exports.MsgUpdateClient = void 0;
/** MsgUpdateClient defines an sdk.Msg to update a IBC client state using the given header. */
class MsgUpdateClient {
    constructor(msg) {
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.core.client.v1.MsgUpdateClient",
                value: this.msg,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/client/v1/tx")))).MsgUpdateClient.encode(this.msg).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("MsgUpdateClient doesn't support Amino encoding.");
        });
    }
}
exports.MsgUpdateClient = MsgUpdateClient;
/** MsgUpdateClient defines an sdk.Msg to update a IBC client state using the given header. */
class MsgUpgradeClient {
    constructor(msg) {
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.core.client.v1.MsgUpgradeClient",
                value: this.msg,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/client/v1/tx")))).MsgUpgradeClient.encode(this.msg).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("MsgUpgradeClient doesn't support Amino encoding.");
        });
    }
}
exports.MsgUpgradeClient = MsgUpgradeClient;
/** MsgSubmitMisbehaviour defines an sdk.Msg type that submits Evidence for light client misbehaviour. */
class MsgSubmitMisbehaviour {
    constructor(msg) {
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
                value: this.msg,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/client/v1/tx")))).MsgSubmitMisbehaviour.encode(this.msg).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("MsgSubmitMisbehaviour doesn't support Amino encoding.");
        });
    }
}
exports.MsgSubmitMisbehaviour = MsgSubmitMisbehaviour;
/** MsgCreateClient defines a message to create an IBC client */
class MsgCreateClient {
    constructor(msg) {
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.core.client.v1.MsgCreateClient",
                value: this.msg,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/client/v1/tx")))).MsgCreateClient.encode(this.msg).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("MsgCreateClient doesn't support Amino encoding.");
        });
    }
}
exports.MsgCreateClient = MsgCreateClient;
//# sourceMappingURL=ibc_client.js.map