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
exports.validatePermit = exports.newPermit = exports.newSignDoc = exports.PermissionNotInPermit = exports.SignerIsNotAddress = exports.SignatureInvalid = exports.ContractNotInPermit = exports.PermitError = void 0;
const encoding_1 = require("@cosmjs/encoding");
const sha256_1 = require("@noble/hashes/sha256");
const secp256k1 = __importStar(require("@noble/secp256k1"));
const bech32_1 = require("bech32");
const index_1 = require("../../../index");
const wallet_amino_1 = require("../../../wallet_amino");
class PermitError extends Error {
    constructor(message) {
        super(message);
        this.type = "PermitError";
        this.name = "PermitError";
    }
}
exports.PermitError = PermitError;
class ContractNotInPermit extends PermitError {
    constructor(contract, allowed_contracts) {
        super(`Contract ${contract} is not allowed for this permit`);
        this.name = "ContractNotInPermit";
        this.contract = contract;
        this.allowed_contracts = allowed_contracts;
    }
}
exports.ContractNotInPermit = ContractNotInPermit;
class SignatureInvalid extends PermitError {
    constructor(signature, key) {
        super(`Signature invalid`);
        this.name = "SignatureInvalid";
        this.key = key;
        this.signature = signature;
    }
}
exports.SignatureInvalid = SignatureInvalid;
class SignerIsNotAddress extends PermitError {
    constructor(publicKey, address) {
        super(`Address ${address} is not the permit signer`);
        this.name = "SignerIsNotAddress";
        this.address = address;
        this.publicKey = publicKey;
    }
}
exports.SignerIsNotAddress = SignerIsNotAddress;
class PermissionNotInPermit extends PermitError {
    constructor(permission, permissionsInContract) {
        super("Permit does not contain required the permissions");
        this.name = "PermissionNotInPermit";
        this.permission = permission;
        this.permissionsInContract = permissionsInContract;
    }
}
exports.PermissionNotInPermit = PermissionNotInPermit;
const newSignDoc = (chainId, permit_name, allowed_tokens, permissions) => {
    return {
        chain_id: chainId,
        account_number: "0",
        sequence: "0",
        fee: {
            amount: (0, index_1.stringToCoins)("0uscrt"),
            gas: "1", // Must be 1
        },
        msgs: [
            {
                type: "query_permit",
                value: {
                    permit_name,
                    allowed_tokens,
                    permissions,
                },
            },
        ],
        memo: "", // Must be empty
    };
};
exports.newSignDoc = newSignDoc;
//
const newPermit = (signer, owner, chainId, permitName, allowedTokens, permissions, keplr) => __awaiter(void 0, void 0, void 0, function* () {
    let signature;
    if (!keplr) {
        // Check if the signer has "signPermit" function and use it instead
        signature = typeof signer.signPermit === 'function' ?
            (yield signer.signPermit(owner, (0, exports.newSignDoc)(chainId, permitName, allowedTokens, permissions))).signature :
            (yield signer.signAmino(owner, (0, exports.newSignDoc)(chainId, permitName, allowedTokens, permissions))).signature;
    }
    //@ts-ignore
    else if (!(window === null || window === void 0 ? void 0 : window.keplr)) {
        throw new Error("Cannot sign with Keplr - extension not enabled; enable Keplr or change signing mode");
    }
    else {
        //@ts-ignore
        ({ signature } = yield window.keplr.signAmino(chainId, owner, {
            chain_id: chainId,
            account_number: "0",
            sequence: "0",
            fee: {
                amount: (0, index_1.stringToCoins)("0uscrt"),
                gas: "1", // Must be 1
            },
            msgs: [
                {
                    type: "query_permit",
                    value: {
                        permit_name: permitName,
                        allowed_tokens: allowedTokens,
                        permissions: permissions,
                    },
                },
            ],
            memo: "", // Must be empty
        }, {
            preferNoSetFee: true,
            preferNoSetMemo: true, // Memo must be empty, so hide it from the user
        }));
    }
    return {
        params: {
            chain_id: chainId,
            permit_name: permitName,
            allowed_tokens: allowedTokens,
            permissions,
        },
        signature: signature,
    };
});
exports.newPermit = newPermit;
const validatePermit = (permit, address, contract, permissions, exceptions = true) => {
    // check if contract is valid
    let contractInPermit = permit.params.allowed_tokens.includes(contract);
    if (!contractInPermit) {
        if (!exceptions) {
            return false;
        }
        throw new ContractNotInPermit(contract, permit.params.allowed_tokens);
    }
    let permissionInPermit = permit.params.permissions.find((p) => permissions.includes(p));
    if (!permissionInPermit) {
        if (!exceptions) {
            return false;
        }
        throw new PermissionNotInPermit(permissions, permit.params.permissions);
    }
    let hrp = "";
    try {
        hrp = bech32_1.bech32.decode(address).prefix;
    }
    catch (_a) {
        throw new Error(`Address address=${address} must be a valid bech32 address`);
    }
    let permitAcc = "";
    try {
        permitAcc = (0, index_1.base64PubkeyToAddress)(permit.signature.pub_key.value, hrp);
    }
    catch (e) {
        throw new PermitError("Pubkey invalid");
    }
    if (permitAcc !== address) {
        if (!exceptions) {
            return false;
        }
        throw new SignerIsNotAddress(permit.signature.pub_key, address);
    }
    let sigIsValid = false;
    try {
        sigIsValid = _validate_sig(permit);
    }
    catch (e) {
        if (!exceptions) {
            return false;
        }
        // validation can fail if signature is malformed
        throw new SignatureInvalid(permit.signature.signature, permit.signature.pub_key.value);
    }
    if (!sigIsValid) {
        if (!exceptions) {
            return false;
        }
        throw new SignatureInvalid(permit.signature.signature, permit.signature.pub_key.value);
    }
    return true;
};
exports.validatePermit = validatePermit;
const _validate_sig = (permit) => {
    let signDoc = (0, exports.newSignDoc)(permit.params.chain_id, permit.params.permit_name, permit.params.allowed_tokens, permit.params.permissions);
    const messageHash = (0, sha256_1.sha256)((0, wallet_amino_1.serializeStdSignDoc)(signDoc));
    let sig = secp256k1.Signature.fromCompact((0, encoding_1.fromBase64)(permit.signature.signature));
    return secp256k1.verify(sig, messageHash, (0, encoding_1.fromBase64)(permit.signature.pub_key.value));
};
//# sourceMappingURL=index.js.map