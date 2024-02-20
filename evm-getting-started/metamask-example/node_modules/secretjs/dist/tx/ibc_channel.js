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
exports.MsgChannelCloseConfirm = exports.MsgChannelCloseInit = exports.MsgChannelOpenConfirm = exports.MsgChannelOpenAck = exports.MsgChannelOpenTry = exports.MsgAcknowledgement = exports.MsgChannelOpenInit = exports.MsgTimeoutOnClose = exports.MsgTimeout = exports.MsgRecvPacket = void 0;
/** MsgRecvPacket receives incoming IBC packet */
class MsgRecvPacket {
    constructor(msg) {
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.core.channel.v1.MsgRecvPacket",
                value: this.msg,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/channel/v1/tx")))).MsgRecvPacket.encode(this.msg).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("MsgRecvPacket doesn't support Amino encoding.");
        });
    }
}
exports.MsgRecvPacket = MsgRecvPacket;
/** MsgTimeout receives timed-out packet */
class MsgTimeout {
    constructor(msg) {
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.core.channel.v1.MsgTimeout",
                value: this.msg,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/channel/v1/tx")))).MsgTimeout.encode(this.msg).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("MsgTimeout doesn't support Amino encoding.");
        });
    }
}
exports.MsgTimeout = MsgTimeout;
/** MsgTimeoutOnClose timed-out packet upon counterparty channel closure. */
class MsgTimeoutOnClose {
    constructor(msg) {
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.core.channel.v1.MsgTimeoutOnClose",
                value: this.msg,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/channel/v1/tx")))).MsgTimeoutOnClose.encode(this.msg).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("MsgTimeoutOnClose doesn't support Amino encoding.");
        });
    }
}
exports.MsgTimeoutOnClose = MsgTimeoutOnClose;
/**
 * MsgChannelOpenInit defines an sdk.Msg to initialize a channel handshake. It
 * is called by a relayer on Chain A.
 */
class MsgChannelOpenInit {
    constructor(msg) {
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.core.channel.v1.MsgChannelOpenInit",
                value: this.msg,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/channel/v1/tx")))).MsgChannelOpenInit.encode(this.msg).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("MsgChannelOpenInit doesn't support Amino encoding.");
        });
    }
}
exports.MsgChannelOpenInit = MsgChannelOpenInit;
/** MsgAcknowledgement receives incoming IBC acknowledgement */
class MsgAcknowledgement {
    constructor(msg) {
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.core.channel.v1.MsgAcknowledgement",
                value: this.msg,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/channel/v1/tx")))).MsgAcknowledgement.encode(this.msg).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("MsgAcknowledgement doesn't support Amino encoding.");
        });
    }
}
exports.MsgAcknowledgement = MsgAcknowledgement;
/**
 * MsgChannelOpenInit defines a msg sent by a Relayer to try to open a channel
 * on Chain B.
 */
class MsgChannelOpenTry {
    constructor(msg) {
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.core.channel.v1.MsgChannelOpenTry",
                value: this.msg,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/channel/v1/tx")))).MsgChannelOpenTry.encode(this.msg).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("MsgChannelOpenTry doesn't support Amino encoding.");
        });
    }
}
exports.MsgChannelOpenTry = MsgChannelOpenTry;
/**
 * MsgChannelOpenAck defines a msg sent by a Relayer to Chain A to acknowledge
 * the change of channel state to TRYOPEN on Chain B.
 */
class MsgChannelOpenAck {
    constructor(msg) {
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.core.channel.v1.MsgChannelOpenAck",
                value: this.msg,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/channel/v1/tx")))).MsgChannelOpenAck.encode(this.msg).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("MsgChannelOpenAck doesn't support Amino encoding.");
        });
    }
}
exports.MsgChannelOpenAck = MsgChannelOpenAck;
/**
 * MsgChannelOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of channel state to OPEN on Chain A.
 */
class MsgChannelOpenConfirm {
    constructor(msg) {
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
                value: this.msg,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/channel/v1/tx")))).MsgChannelOpenConfirm.encode(this.msg).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("MsgChannelOpenConfirm doesn't support Amino encoding.");
        });
    }
}
exports.MsgChannelOpenConfirm = MsgChannelOpenConfirm;
/**
 * MsgChannelCloseInit defines a msg sent by a Relayer to Chain A
 * to close a channel with Chain B.
 */
class MsgChannelCloseInit {
    constructor(msg) {
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.core.channel.v1.MsgChannelCloseInit",
                value: this.msg,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/channel/v1/tx")))).MsgChannelCloseInit.encode(this.msg).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("MsgChannelCloseInit doesn't support Amino encoding.");
        });
    }
}
exports.MsgChannelCloseInit = MsgChannelCloseInit;
/** MsgChannelCloseConfirm defines a msg sent by a Relayer to Chain B to acknowledge the change of channel state to CLOSED on Chain A. */
class MsgChannelCloseConfirm {
    constructor(msg) {
        this.msg = msg;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
                value: this.msg,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/core/channel/v1/tx")))).MsgChannelCloseConfirm.encode(this.msg).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error("MsgChannelCloseConfirm doesn't support Amino encoding.");
        });
    }
}
exports.MsgChannelCloseConfirm = MsgChannelCloseConfirm;
//# sourceMappingURL=ibc_channel.js.map