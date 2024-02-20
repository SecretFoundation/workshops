"use strict";
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
exports.MsgPayPacketFeeAsync = exports.MsgPayPacketFee = exports.MsgRegisterCounterpartyPayee = exports.MsgRegisterPayee = void 0;
const tx_1 = require("../protobuf/ibc/applications/fee/v1/tx");
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
class MsgRegisterPayee {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.applications.fee.v1.MsgRegisterPayee",
                value: this.params,
                encode: () => __awaiter(this, void 0, void 0, function* () { return tx_1.MsgRegisterPayee.encode(this.params).finish(); }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgRegisterPayee",
                value: this.params,
            };
        });
    }
}
exports.MsgRegisterPayee = MsgRegisterPayee;
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
class MsgRegisterCounterpartyPayee {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee",
                value: this.params,
                encode: () => __awaiter(this, void 0, void 0, function* () { return tx_1.MsgRegisterCounterpartyPayee.encode(this.params).finish(); }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgRegisterCounterpartyPayee",
                value: this.params,
            };
        });
    }
}
exports.MsgRegisterCounterpartyPayee = MsgRegisterCounterpartyPayee;
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
class MsgPayPacketFee {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.applications.fee.v1.MsgPayPacketFee",
                value: this.params,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return tx_1.MsgPayPacketFee.encode({
                        fee: this.params.fee,
                        source_port_id: this.params.source_port_id,
                        source_channel_id: this.params.source_channel_id,
                        signer: this.params.signer,
                        relayers: this.params.relayers || [],
                    }).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgPayPacketFee",
                value: this.params,
            };
        });
    }
}
exports.MsgPayPacketFee = MsgPayPacketFee;
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
class MsgPayPacketFeeAsync {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/ibc.applications.fee.v1.MsgPayPacketFeeAsync",
                value: this.params,
                encode: () => __awaiter(this, void 0, void 0, function* () { return tx_1.MsgPayPacketFeeAsync.encode(this.params).finish(); }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "cosmos-sdk/MsgPayPacketFeeAsync",
                value: this.params,
            };
        });
    }
}
exports.MsgPayPacketFeeAsync = MsgPayPacketFeeAsync;
//# sourceMappingURL=ibc_fee.js.map