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
exports.MsgMultiSend = exports.MsgSend = void 0;
/** MsgSend represents a message to send coins from one account to another. */
class MsgSend {
    constructor({ from_address, to_address, amount }) {
        this.from_address = from_address;
        this.to_address = to_address;
        this.amount = amount;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            const msgContent = {
                from_address: this.from_address,
                to_address: this.to_address,
                amount: this.amount,
            };
            return {
                type_url: "/cosmos.bank.v1beta1.MsgSend",
                value: msgContent,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/bank/v1beta1/tx")))).MsgSend.encode(msgContent).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgSend",
                value: {
                    from_address: this.from_address,
                    to_address: this.to_address,
                    amount: this.amount,
                },
            };
        });
    }
}
exports.MsgSend = MsgSend;
/** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
class MsgMultiSend {
    constructor({ inputs, outputs }) {
        this.inputs = inputs;
        this.outputs = outputs;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            const msgContent = {
                inputs: this.inputs,
                outputs: this.outputs,
            };
            return {
                type_url: "/cosmos.bank.v1beta1.MsgMultiSend",
                value: msgContent,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/cosmos/bank/v1beta1/tx")))).MsgMultiSend.encode(msgContent).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgMultiSend",
                value: {
                    inputs: this.inputs,
                    outputs: this.outputs,
                },
            };
        });
    }
}
exports.MsgMultiSend = MsgMultiSend;
//# sourceMappingURL=bank.js.map