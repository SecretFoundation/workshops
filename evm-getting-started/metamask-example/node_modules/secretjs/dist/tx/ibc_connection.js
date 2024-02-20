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
exports.MsgConnectionOpenConfirm = exports.MsgConnectionOpenAck = exports.MsgConnectionOpenTry = exports.MsgConnectionOpenInit = void 0;
/** MsgConnectionOpenInit defines the msg sent by an account on Chain A to initialize a connection with Chain B. */
class MsgConnectionOpenInit {
    constructor(msg) {
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.core.connection.v1.MsgConnectionOpenInit",
                value: this.msg,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/connection/v1/tx")))).MsgConnectionOpenInit.encode(this.msg).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("MsgConnectionOpenInit doesn't support Amino encoding.");
        });
    }
}
exports.MsgConnectionOpenInit = MsgConnectionOpenInit;
/** MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a connection on Chain B. */
class MsgConnectionOpenTry {
    constructor(msg) {
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.core.connection.v1.MsgConnectionOpenTry",
                value: this.msg,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/connection/v1/tx")))).MsgConnectionOpenTry.encode(this.msg).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("MsgConnectionOpenTry doesn't support Amino encoding.");
        });
    }
}
exports.MsgConnectionOpenTry = MsgConnectionOpenTry;
/** MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to acknowledge the change of connection state to TRYOPEN on Chain B. */
class MsgConnectionOpenAck {
    constructor(msg) {
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.core.connection.v1.MsgConnectionOpenAck",
                value: this.msg,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/connection/v1/tx")))).MsgConnectionOpenAck.encode(this.msg).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("MsgConnectionOpenAck doesn't support Amino encoding.");
        });
    }
}
exports.MsgConnectionOpenAck = MsgConnectionOpenAck;
/** MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to acknowledge the change of connection state to OPEN on Chain A. */
class MsgConnectionOpenConfirm {
    constructor(msg) {
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
                value: this.msg,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/connection/v1/tx")))).MsgConnectionOpenConfirm.encode(this.msg).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("MsgConnectionOpenConfirm doesn't support Amino encoding.");
        });
    }
}
exports.MsgConnectionOpenConfirm = MsgConnectionOpenConfirm;
//# sourceMappingURL=ibc_connection.js.map