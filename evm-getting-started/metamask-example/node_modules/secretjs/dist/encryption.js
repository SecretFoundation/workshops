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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncryptionUtilsImpl = void 0;
const encoding_1 = require("@cosmjs/encoding");
const hkdf_1 = require("@noble/hashes/hkdf");
const sha256_1 = require("@noble/hashes/sha256");
const curve25519_js_1 = require("curve25519-js");
const miscreant = __importStar(require("miscreant"));
const secure_random_1 = __importDefault(require("secure-random"));
const query_pb_1 = require("./grpc_gateway/secret/registration/v1beta1/query.pb");
const cryptoProvider = new miscreant.PolyfillCryptoProvider();
const hkdfSalt = (0, encoding_1.fromHex)("000000000000000000024bead8df69990852c202db0e0097c1a12ea637d7e96d");
const mainnetConsensusIoPubKey = (0, encoding_1.fromBase64)("79++5YOHfm0SwhlpUDClv7cuCjq9xBZlWqSjDJWkRG8=");
const mainnetChainIds = new Set(["secret-2", "secret-3", "secret-4"]);
class EncryptionUtilsImpl {
    constructor(url, seed, chainId) {
        this.url = url;
        this.consensusIoPubKey = new Uint8Array(); // cache
        if (!seed) {
            this.seed = EncryptionUtilsImpl.GenerateNewSeed();
        }
        else {
            if (seed.length !== 32) {
                throw new Error("encryptionSeed must be a Uint8Array of length 32");
            }
            this.seed = seed;
        }
        const { privkey, pubkey } = EncryptionUtilsImpl.GenerateNewKeyPairFromSeed(this.seed);
        this.privkey = privkey;
        this.pubkey = pubkey;
        // todo: add this again post upgrade
        if (chainId && mainnetChainIds.has(chainId)) {
            // Major speedup
            // TODO: not sure if this is the best approach for detecting mainnet
            this.consensusIoPubKey = mainnetConsensusIoPubKey;
        }
    }
    static GenerateNewKeyPair() {
        return EncryptionUtilsImpl.GenerateNewKeyPairFromSeed(EncryptionUtilsImpl.GenerateNewSeed());
    }
    static GenerateNewSeed() {
        return (0, secure_random_1.default)(32, { type: "Uint8Array" });
    }
    static GenerateNewKeyPairFromSeed(seed) {
        const { private: privkey, public: pubkey } = (0, curve25519_js_1.generateKeyPair)(seed);
        return { privkey, pubkey };
    }
    getConsensusIoPubKey() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.consensusIoPubKey.length === 32) {
                return this.consensusIoPubKey;
            }
            const { key } = yield query_pb_1.Query.TxKey({}, { pathPrefix: this.url });
            this.consensusIoPubKey = (0, encoding_1.fromBase64)(key);
            return this.consensusIoPubKey;
        });
    }
    getTxEncryptionKey(nonce) {
        return __awaiter(this, void 0, void 0, function* () {
            const consensusIoPubKey = yield this.getConsensusIoPubKey();
            const txEncryptionIkm = (0, curve25519_js_1.sharedKey)(this.privkey, consensusIoPubKey);
            const txEncryptionKey = (0, hkdf_1.hkdf)(sha256_1.sha256, Uint8Array.from([...txEncryptionIkm, ...nonce]), hkdfSalt, "", 32);
            return txEncryptionKey;
        });
    }
    encrypt(contractCodeHash, msg) {
        return __awaiter(this, void 0, void 0, function* () {
            const nonce = (0, secure_random_1.default)(32, { type: "Uint8Array" });
            const txEncryptionKey = yield this.getTxEncryptionKey(nonce);
            const siv = yield miscreant.SIV.importKey(txEncryptionKey, "AES-SIV", cryptoProvider);
            const plaintext = (0, encoding_1.toUtf8)(contractCodeHash + JSON.stringify(msg));
            const ciphertext = yield siv.seal(plaintext, [new Uint8Array()]);
            // ciphertext = nonce(32) || wallet_pubkey(32) || ciphertext
            return Uint8Array.from([...nonce, ...this.pubkey, ...ciphertext]);
        });
    }
    decrypt(ciphertext, nonce) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(ciphertext === null || ciphertext === void 0 ? void 0 : ciphertext.length)) {
                return new Uint8Array();
            }
            const txEncryptionKey = yield this.getTxEncryptionKey(nonce);
            const siv = yield miscreant.SIV.importKey(txEncryptionKey, "AES-SIV", cryptoProvider);
            const plaintext = yield siv.open(ciphertext, [new Uint8Array()]);
            return plaintext;
        });
    }
    getPubkey() {
        return Promise.resolve(this.pubkey);
    }
}
exports.EncryptionUtilsImpl = EncryptionUtilsImpl;
//# sourceMappingURL=encryption.js.map