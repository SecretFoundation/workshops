"use strict";
// For future wanderers:
// This file is written manually with a few goals in mind:
// 1. Proxy the auto-generated QueryClientImpl from "src/protobuf/secret/compute/v1beta1/query.tx" (See the "scripts/generate_protobuf.sh" script)
// 2. Abstract "address: Uint8Array" in the underlying types as "address: string".
// 3. Add Secret Network encryption
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
exports.ComputeQuerier = void 0;
const encoding_1 = require("@cosmjs/encoding");
const __1 = require("..");
const encryption_1 = require("../encryption");
const query_pb_1 = require("../grpc_gateway/secret/compute/v1beta1/query.pb");
class ComputeQuerier {
    constructor(url, encryption) {
        this.url = url;
        this.encryption = encryption;
        this.codeHashCache = new Map();
        if (!this.encryption) {
            this.encryption = new encryption_1.EncryptionUtilsImpl(url);
        }
    }
    contractInfo(req, headers) {
        return query_pb_1.Query.ContractInfo(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    contractsByCodeId(req, headers) {
        return query_pb_1.Query.ContractsByCodeId(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    code(req, headers) {
        return query_pb_1.Query.Code(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    codes(req, headers) {
        return query_pb_1.Query.Codes(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    codeHashByContractAddress(req, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            let code_hash = this.codeHashCache.get(req.contract_address);
            if (!code_hash) {
                ({ code_hash } = yield query_pb_1.Query.CodeHashByContractAddress(req, {
                    headers,
                    pathPrefix: this.url,
                }));
                this.codeHashCache.set(req.contract_address, code_hash);
            }
            return { code_hash };
        });
    }
    codeHashByCodeId(req, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            let code_hash = this.codeHashCache.get(req.code_id);
            if (!code_hash) {
                ({ code_hash } = yield query_pb_1.Query.CodeHashByCodeId({ code_id: req.code_id }, {
                    headers,
                    pathPrefix: this.url,
                }));
                this.codeHashCache.set(req.code_id, code_hash);
            }
            return { code_hash };
        });
    }
    labelByAddress(req, headers) {
        return query_pb_1.Query.LabelByAddress(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    addressByLabel(req, headers) {
        return query_pb_1.Query.AddressByLabel(req, {
            headers,
            pathPrefix: this.url,
        });
    }
    /**
     * Query a Secret Contract.
     * May return a string on error.
     */
    queryContract({ contract_address: contractAddress, code_hash: codeHash, query, }, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!codeHash) {
                console.warn((0, __1.getMissingCodeHashWarning)("queryContract()"));
                ({ code_hash: codeHash } = yield this.codeHashByContractAddress({
                    contract_address: contractAddress,
                }));
            }
            codeHash = codeHash.replace("0x", "").toLowerCase();
            const encryptedQuery = yield this.encryption.encrypt(codeHash, query);
            const nonce = encryptedQuery.slice(0, 32);
            try {
                const { data: encryptedResult } = yield query_pb_1.Query.QuerySecretContract({
                    contract_address: contractAddress,
                    query: encryptedQuery,
                }, {
                    headers,
                    pathPrefix: this.url,
                });
                const decryptedBase64Result = yield this.encryption.decrypt((0, encoding_1.fromBase64)(encryptedResult), nonce);
                // Don't try to parse JSON in case the result is empty.
                // This seems kinda stupid but if the contract for some reason returns `Binary::default()`
                // the JSON parsing will fail (empty bytes)
                if (!(decryptedBase64Result === null || decryptedBase64Result === void 0 ? void 0 : decryptedBase64Result.length)) {
                    return {};
                }
                return JSON.parse((0, encoding_1.fromUtf8)((0, encoding_1.fromBase64)((0, encoding_1.fromUtf8)(decryptedBase64Result))));
            }
            catch (err) {
                try {
                    const errorMessageRgx = /encrypted: (.+?): (?:instantiate|execute|query|reply to|migrate) contract failed/g;
                    const rgxMatches = errorMessageRgx.exec(err.message);
                    if (rgxMatches == null || (rgxMatches === null || rgxMatches === void 0 ? void 0 : rgxMatches.length) != 2) {
                        throw err;
                    }
                    const encryptedError = (0, encoding_1.fromBase64)(rgxMatches[1]);
                    const decryptedBase64Error = yield this.encryption.decrypt(encryptedError, nonce);
                    try {
                        //@ts-ignore
                        // return the error string
                        return (0, encoding_1.fromUtf8)((0, encoding_1.fromBase64)((0, encoding_1.fromUtf8)(decryptedBase64Error)));
                    }
                    catch (parseError) {
                        if (parseError.message === "Invalid base64 string format") {
                            //@ts-ignore
                            // return the error string
                            return (0, encoding_1.fromUtf8)(decryptedBase64Error);
                        }
                        else {
                            throw err;
                        }
                    }
                }
                catch (decryptionError) {
                    throw err;
                }
            }
        });
    }
    contractHistory(req, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            const { entries } = yield query_pb_1.Query.ContractHistory(req, {
                headers,
                pathPrefix: this.url,
            });
            let decryptedEntries = [];
            for (const entry of entries !== null && entries !== void 0 ? entries : []) {
                let msg = entry.msg;
                try {
                    const encryptedInput = (0, encoding_1.fromBase64)(msg);
                    const nonce = encryptedInput.slice(0, 32);
                    const encryptedInitMsg = encryptedInput.slice(64);
                    const plaintextInitMsg = yield this.encryption.decrypt(encryptedInitMsg, nonce);
                    msg = (0, encoding_1.fromUtf8)(plaintextInitMsg).slice(64);
                }
                catch (err) { }
                decryptedEntries.push({
                    operation: entry.operation,
                    code_id: entry.code_id,
                    updated: entry.updated,
                    msg,
                });
            }
            return { entries: decryptedEntries };
        });
    }
}
exports.ComputeQuerier = ComputeQuerier;
//# sourceMappingURL=compute.js.map