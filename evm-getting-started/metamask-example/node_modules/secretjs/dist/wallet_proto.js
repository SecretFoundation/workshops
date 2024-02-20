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
exports.Wallet = void 0;
const sha256_1 = require("@noble/hashes/sha256");
const secp256k1 = __importStar(require("@noble/secp256k1"));
const wallet_amino_1 = require("./wallet_amino");
/**
 * Wallet is a wallet capable of signing on transactions.
 *
 * `Wallet` can just extend `AminoWallet` and be a valid `DirectSigner` because
 * `SecretNetworkClient` checks first for the existence of `signDirect` function
 * before checking for `signAmino` function.
 */
class Wallet extends wallet_amino_1.AminoWallet {
    signDirect(address, signDoc) {
        return __awaiter(this, void 0, void 0, function* () {
            if (address !== this.address) {
                throw new Error(`Address ${address} not found in wallet`);
            }
            const messageHash = (0, sha256_1.sha256)(yield serializeSignDoc(signDoc));
            const signature = yield secp256k1.sign(messageHash, this.privateKey, {
                extraEntropy: true,
                der: false,
            });
            return {
                signed: signDoc,
                signature: (0, wallet_amino_1.encodeSecp256k1Signature)(this.publicKey, signature),
            };
        });
    }
}
exports.Wallet = Wallet;
function serializeSignDoc({ account_number, auth_info_bytes, body_bytes, chain_id, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const { SignDoc } = yield Promise.resolve().then(() => __importStar(require("./protobuf/cosmos/tx/v1beta1/tx")));
        return SignDoc.encode(SignDoc.fromPartial({
            account_number,
            auth_info_bytes,
            body_bytes,
            chain_id,
        })).finish();
    });
}
//# sourceMappingURL=wallet_proto.js.map