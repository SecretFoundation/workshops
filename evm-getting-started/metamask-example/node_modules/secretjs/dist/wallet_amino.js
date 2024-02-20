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
exports.isDirectSigner = exports.isSignDocCamelCase = exports.isSignDoc = exports.serializeStdSignDoc = exports.sortObject = exports.encodeSecp256k1Pubkey = exports.encodeSecp256k1Signature = exports.AminoWallet = exports.SECRET_BECH32_PREFIX = exports.SECRET_COIN_TYPE = void 0;
const encoding_1 = require("@cosmjs/encoding");
const sha256_1 = require("@noble/hashes/sha256");
const secp256k1 = __importStar(require("@noble/secp256k1"));
const bip32 = __importStar(require("bip32"));
const bip39 = __importStar(require("bip39"));
const _1 = require(".");
exports.SECRET_COIN_TYPE = 529;
exports.SECRET_BECH32_PREFIX = "secret";
/**
 * AminoWallet is a wallet capable of signing on the legacy Amino encoding.
 * Amino encoding is still a must-use when signing with Ledger and thus still
 * supported in the chain, but is phased out slowly.
 *
 * In secret.js AminoWallet is mainly used for testing and should not be used
 * for anything else. The reason is that some Msg types don't support Amino
 * encoding anymore and thus won't work with this wallet (and Ledger).
 * Msgs that do support Amino encoding also must encode with Protobuf,
 * so if a Msg is working as intended with AminoWallet, it'll also work with {@link Wallet}.
 *
 * For reference, even txs that are signed using Amino, are sent to the chain
 * using Protobuf encoding, so inside the chain the tx is converted to Amino
 * in order to verify the signature.
 * */
class AminoWallet {
    /**
     * @param {String} mnemonic Import mnemonic or generate random if empty
     * @param {Number} [options.hdAccountIndex] The account index in the HD derivation path. Defaults to `0`.
     * @param {Number} [options.coinType] The coin type in the HD derivation path. Defaults to Secret's `529`.
     * @param {String} [options.bech32Prefix] The bech32 prefix for the account's address. Defaults tp `"secret"`
     */
    constructor(mnemonic = "", options = {}) {
        var _a, _b, _c;
        if (mnemonic === "") {
            mnemonic = bip39.generateMnemonic(256 /* 24 words */);
        }
        this.mnemonic = mnemonic;
        this.hdAccountIndex = (_a = options.hdAccountIndex) !== null && _a !== void 0 ? _a : 0;
        this.coinType = (_b = options.coinType) !== null && _b !== void 0 ? _b : exports.SECRET_COIN_TYPE;
        this.bech32Prefix = (_c = options.bech32Prefix) !== null && _c !== void 0 ? _c : exports.SECRET_BECH32_PREFIX;
        const seed = bip39.mnemonicToSeedSync(this.mnemonic);
        const node = bip32.fromSeed(seed);
        const secretHD = node.derivePath(`m/44'/${this.coinType}'/0'/0/${this.hdAccountIndex}`);
        const privateKey = secretHD.privateKey;
        if (!privateKey) {
            throw new Error("Failed to derive key pair");
        }
        this.privateKey = new Uint8Array(privateKey);
        this.publicKey = secp256k1.getPublicKey(this.privateKey, true);
        this.address = (0, _1.pubkeyToAddress)(this.publicKey, this.bech32Prefix);
    }
    getAccounts() {
        return __awaiter(this, void 0, void 0, function* () {
            return [
                {
                    address: this.address,
                    algo: "secp256k1",
                    pubkey: this.publicKey,
                },
            ];
        });
    }
    signAmino(signerAddress, signDoc) {
        return __awaiter(this, void 0, void 0, function* () {
            if (signerAddress !== this.address) {
                throw new Error(`Address ${signerAddress} not found in wallet`);
            }
            const messageHash = (0, sha256_1.sha256)(serializeStdSignDoc(signDoc));
            const signature = yield secp256k1.sign(messageHash, this.privateKey, {
                extraEntropy: true,
                der: false,
            });
            return {
                signed: signDoc,
                signature: encodeSecp256k1Signature(this.publicKey, signature),
            };
        });
    }
}
exports.AminoWallet = AminoWallet;
/**
 * Takes a binary pubkey and signature to create a signature object
 *
 * @param pubkey a compressed secp256k1 public key
 * @param signature a 64 byte fixed length representation of secp256k1 signature components r and s
 */
function encodeSecp256k1Signature(pubkey, signature) {
    if (signature.length !== 64) {
        throw new Error("Signature must be 64 bytes long. Cosmos SDK uses a 2x32 byte fixed length encoding for the secp256k1 signature integers r and s.");
    }
    return {
        pub_key: encodeSecp256k1Pubkey(pubkey),
        signature: (0, encoding_1.toBase64)(signature),
    };
}
exports.encodeSecp256k1Signature = encodeSecp256k1Signature;
function encodeSecp256k1Pubkey(pubkey) {
    if (pubkey.length !== 33 || (pubkey[0] !== 0x02 && pubkey[0] !== 0x03)) {
        throw new Error("Public key must be compressed secp256k1, i.e. 33 bytes starting with 0x02 or 0x03");
    }
    return {
        type: "tendermint/PubKeySecp256k1",
        value: (0, encoding_1.toBase64)(pubkey),
    };
}
exports.encodeSecp256k1Pubkey = encodeSecp256k1Pubkey;
function sortObject(obj) {
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map(sortObject);
    }
    const sortedKeys = Object.keys(obj).sort();
    const result = {};
    // NOTE: Use forEach instead of reduce for performance with large objects eg Wasm code
    sortedKeys.forEach((key) => {
        result[key] = sortObject(obj[key]);
    });
    return result;
}
exports.sortObject = sortObject;
/** Returns a JSON string with objects sorted by key, used for Amino signing */
function jsonSortedStringify(obj) {
    return JSON.stringify(sortObject(obj));
}
function serializeStdSignDoc(signDoc) {
    return (0, encoding_1.toUtf8)(jsonSortedStringify(signDoc));
}
exports.serializeStdSignDoc = serializeStdSignDoc;
function isSignDoc(object) {
    return ("body_bytes" in object &&
        "auth_info_bytes" in object &&
        "chain_id" in object &&
        "account_number" in object);
}
exports.isSignDoc = isSignDoc;
function isSignDocCamelCase(object) {
    return ("bodyBytes" in object &&
        "authInfoBytes" in object &&
        "chainId" in object &&
        "accountNumber" in object);
}
exports.isSignDocCamelCase = isSignDocCamelCase;
function isDirectSigner(signer) {
    return signer.signDirect !== undefined;
}
exports.isDirectSigner = isDirectSigner;
//# sourceMappingURL=wallet_amino.js.map