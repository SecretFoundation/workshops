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
exports.MetaMaskWallet = void 0;
const sha3_1 = require("@noble/hashes/sha3");
const secp256k1 = __importStar(require("@noble/secp256k1"));
const sha256_1 = require("@noble/hashes/sha256");
const _1 = require(".");
const wallet_amino_1 = require("./wallet_amino");
/**
 * MetaMaskWallet is a wallet capable of signing on transactions using MetaMask.
 */
class MetaMaskWallet {
    constructor(ethProvider, ethAddress, publicKey) {
        this.ethProvider = ethProvider;
        this.ethAddress = ethAddress;
        this.publicKey = publicKey;
        this.address = (0, _1.pubkeyToAddress)(this.publicKey);
    }
    static create(ethProvider, ethAddress) {
        return __awaiter(this, void 0, void 0, function* () {
            // use localStorage to cache the publicKey to prevent signing request on every MetaMaskWallet.create()
            // if MetaMask is used we assume that there's localStorage in the environment
            const localStorageKey = `secretjs_${ethAddress}_pubkey`;
            const publicKeyHex = localStorage.getItem(localStorageKey);
            if (publicKeyHex) {
                // verify that ethAddress can be derived from publicKeyHex
                // this prevents reading wrong/corrupted data from localStorage
                const ethAddressBytes = ethAddress.slice(2).toLocaleLowerCase();
                const derivedEthAddressBytes = (0, _1.toHex)((0, sha3_1.keccak_256)(decompressSecp256k1PublicKey(publicKeyHex).slice(1)).slice(-20)).toLocaleLowerCase();
                if (derivedEthAddressBytes === ethAddressBytes) {
                    return new MetaMaskWallet(ethProvider, ethAddress, (0, _1.fromHex)(publicKeyHex));
                }
                localStorage.removeItem(localStorageKey);
            }
            // On ETHland pubkeys are recovered from signatures, so we're going to:
            // 1. sign something
            // 2. recover the pubkey from the signature
            // 3. derive a secret address from the the pubkey
            const rawMsg = (0, _1.toUtf8)("Get secret address");
            const msgToSign = `0x${(0, _1.toHex)(rawMsg)}`;
            const sigResult = (yield ethProvider.request({
                method: "personal_sign",
                params: [msgToSign, ethAddress],
            })).toString();
            // strip leading 0x and extract recovery id
            const sig = (0, _1.fromHex)(sigResult.slice(2, -2));
            let recoveryId = parseInt(sigResult.slice(-2), 16) - 27;
            // When a Ledger is used, this value doesn't need to be adjusted
            if (recoveryId < 0) {
                recoveryId += 27;
            }
            const eip191MessagePrefix = (0, _1.toUtf8)("\x19Ethereum Signed Message:\n");
            const rawMsgLength = (0, _1.toUtf8)(String(rawMsg.length));
            const publicKey = secp256k1.recoverPublicKey((0, sha3_1.keccak_256)(new Uint8Array([...eip191MessagePrefix, ...rawMsgLength, ...rawMsg])), sig, recoveryId, true);
            localStorage.setItem(localStorageKey, (0, _1.toHex)(publicKey));
            return new MetaMaskWallet(ethProvider, ethAddress, publicKey);
        });
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
    getSignMode() {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield Promise.resolve().then(() => __importStar(require("./protobuf/cosmos/tx/signing/v1beta1/signing"))))
                .SignMode.SIGN_MODE_EIP_191;
        });
    }
    signAmino(address, signDoc) {
        return __awaiter(this, void 0, void 0, function* () {
            if (address !== (0, _1.pubkeyToAddress)(this.publicKey)) {
                throw new Error(`Address ${address} not found in wallet`);
            }
            const msgToSign = `0x${(0, _1.toHex)(prettySerializeStdSignDoc(signDoc))}`;
            const sigResult = yield this.ethProvider.request({
                method: "personal_sign",
                params: [msgToSign, this.ethAddress],
            });
            // strip leading 0x and trailing recovery id
            const sig = (0, _1.fromHex)(sigResult.slice(2, -2));
            return {
                signed: signDoc,
                signature: (0, wallet_amino_1.encodeSecp256k1Signature)(this.publicKey, sig),
            };
        });
    }
    signPermit(address, signDoc) {
        return __awaiter(this, void 0, void 0, function* () {
            if (address !== (0, _1.pubkeyToAddress)(this.publicKey)) {
                throw new Error(`Address ${address} not found in wallet`);
            }
            const messageHash = (0, sha256_1.sha256)((0, wallet_amino_1.serializeStdSignDoc)(signDoc));
            const sigResult = yield this.ethProvider.request({
                method: "eth_sign",
                params: [this.ethAddress, "0x" + (0, _1.toHex)(messageHash)],
            });
            // strip leading 0x and trailing recovery id
            const sig = (0, _1.fromHex)(sigResult.slice(2, -2));
            return {
                signed: signDoc,
                signature: (0, wallet_amino_1.encodeSecp256k1Signature)(this.publicKey, sig),
            };
        });
    }
}
exports.MetaMaskWallet = MetaMaskWallet;
function decompressSecp256k1PublicKey(publicKeyHex) {
    const point = secp256k1.Point.fromHex(publicKeyHex);
    return point.toRawBytes(false);
}
/** Returns a JSON string with objects sorted by key, used for pretty Amino EIP191 signing */
function prettyJsonSortedStringify(obj) {
    return JSON.stringify((0, wallet_amino_1.sortObject)(obj), null, 4);
}
function prettySerializeStdSignDoc(signDoc) {
    return (0, _1.toUtf8)(prettyJsonSortedStringify(signDoc));
}
//# sourceMappingURL=wallet_metamask.js.map