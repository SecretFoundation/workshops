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
exports.MsgTransfer = void 0;
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#data-structures
 */
class MsgTransfer {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            const msgContent = {
                source_port: this.params.source_port,
                source_channel: this.params.source_channel,
                token: this.params.token,
                sender: this.params.sender,
                receiver: this.params.receiver,
                timeout_height: this.params.timeout_height,
                timeout_timestamp: this.params.timeout_timestamp
                    ? `${this.params.timeout_timestamp}000000000` // sec -> ns
                    : "0",
                memo: this.params.memo || "",
            };
            return {
                type_url: "/ibc.applications.transfer.v1.MsgTransfer",
                value: msgContent,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/ibc/applications/transfer/v1/tx")))).MsgTransfer.encode(msgContent).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgTransfer",
                value: {
                    source_port: this.params.source_port,
                    source_channel: this.params.source_channel,
                    token: this.params.token,
                    sender: this.params.sender,
                    receiver: this.params.receiver,
                    timeout_height: this.params.timeout_height
                        ? {
                            revision_number: this.params.timeout_height.revision_number,
                            revision_height: this.params.timeout_height.revision_height,
                        }
                        : {},
                    timeout_timestamp: this.params.timeout_timestamp
                        ? `${this.params.timeout_timestamp}000000000` // sec -> ns
                        : "0",
                    memo: this.params.memo,
                },
            };
        });
    }
}
exports.MsgTransfer = MsgTransfer;
//# sourceMappingURL=ibc_transfer.js.map