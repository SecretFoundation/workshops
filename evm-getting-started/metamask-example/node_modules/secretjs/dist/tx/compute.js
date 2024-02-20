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
exports.MsgClearAdmin = exports.MsgUpdateAdmin = exports.MsgMigrateContract = exports.MsgStoreCode = exports.MsgExecuteContract = exports.MsgInstantiateContract = exports.getMissingCodeHashWarning = void 0;
const encoding_1 = require("@cosmjs/encoding");
const utils_1 = require("../utils");
function getMissingCodeHashWarning(method) {
    return `${new Date().toISOString()} WARNING: ${method} was used without the "code_hash" parameter. This is discouraged and will result in much slower execution times for your app.`;
}
exports.getMissingCodeHashWarning = getMissingCodeHashWarning;
/** Instantiate a contract from code id */
class MsgInstantiateContract {
    constructor({ sender, code_id, label, init_msg, init_funds, code_hash, admin, }) {
        this.warnCodeHash = false;
        this.sender = sender;
        this.codeId = String(code_id);
        this.label = label;
        this.initMsg = init_msg;
        this.initMsgEncrypted = null;
        this.initFunds = init_funds !== null && init_funds !== void 0 ? init_funds : [];
        this.admin = admin !== null && admin !== void 0 ? admin : "";
        if (code_hash) {
            this.codeHash = code_hash.replace(/^0x/, "").toLowerCase();
        }
        else {
            // codeHash will be set in SecretNetworkClient before invoking toProto() & toAimno()
            this.codeHash = "";
            this.warnCodeHash = true;
            console.warn(getMissingCodeHashWarning("MsgInstantiateContract"));
        }
    }
    toProto(utils) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.warnCodeHash) {
                console.warn(getMissingCodeHashWarning("MsgInstantiateContract"));
            }
            if (!this.initMsgEncrypted) {
                // The encryption uses a random nonce
                // toProto() & toAmino() are called multiple times during signing
                // so to keep the msg consistant across calls we encrypt the msg only once
                this.initMsgEncrypted = yield utils.encrypt(this.codeHash, this.initMsg);
            }
            const msgContent = {
                sender: (0, utils_1.addressToBytes)(this.sender),
                code_id: this.codeId,
                label: this.label,
                init_msg: this.initMsgEncrypted,
                init_funds: this.initFunds,
                // callback_sig & callback_code_hash are internal stuff that doesn't matter here
                callback_sig: new Uint8Array(0),
                callback_code_hash: "",
                admin: this.admin,
            };
            return {
                type_url: "/secret.compute.v1beta1.MsgInstantiateContract",
                value: msgContent,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/secret/compute/v1beta1/msg")))).MsgInstantiateContract.encode(msgContent).finish();
                }),
            };
        });
    }
    toAmino(utils) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.warnCodeHash) {
                console.warn(getMissingCodeHashWarning("MsgInstantiateContract"));
            }
            if (!this.initMsgEncrypted) {
                // The encryption uses a random nonce
                // toProto() & toAmino() are called multiple times during signing
                // so to keep the msg consistant across calls we encrypt the msg only once
                this.initMsgEncrypted = yield utils.encrypt(this.codeHash, this.initMsg);
            }
            return {
                type: "wasm/MsgInstantiateContract",
                value: {
                    sender: this.sender,
                    code_id: this.codeId,
                    label: this.label,
                    init_msg: (0, encoding_1.toBase64)(this.initMsgEncrypted),
                    init_funds: this.initFunds,
                    admin: this.admin.length > 0 ? this.admin : undefined,
                },
            };
        });
    }
}
exports.MsgInstantiateContract = MsgInstantiateContract;
/** Execute a function on a contract */
class MsgExecuteContract {
    constructor({ sender, contract_address: contractAddress, msg, sent_funds: sentFunds, code_hash: codeHash, }) {
        this.warnCodeHash = false;
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.msg = msg;
        this.msgEncrypted = null;
        this.sentFunds = sentFunds !== null && sentFunds !== void 0 ? sentFunds : [];
        if (codeHash) {
            this.codeHash = codeHash.replace(/^0x/, "").toLowerCase();
        }
        else {
            // codeHash will be set in SecretNetworkClient before invoking toProto() & toAimno()
            this.codeHash = "";
            this.warnCodeHash = true;
            console.warn(getMissingCodeHashWarning("MsgExecuteContract"));
        }
    }
    toProto(utils) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.warnCodeHash) {
                console.warn(getMissingCodeHashWarning("MsgExecuteContract"));
            }
            if (!this.msgEncrypted) {
                // The encryption uses a random nonce
                // toProto() & toAmino() are called multiple times during signing
                // so to keep the msg consistant across calls we encrypt the msg only once
                this.msgEncrypted = yield utils.encrypt(this.codeHash, this.msg);
            }
            const msgContent = {
                sender: (0, utils_1.addressToBytes)(this.sender),
                contract: (0, utils_1.addressToBytes)(this.contractAddress),
                msg: this.msgEncrypted,
                sent_funds: this.sentFunds,
                // callback_sig & callback_code_hash are internal stuff that doesn't matter here
                callback_sig: new Uint8Array(),
                callback_code_hash: "",
            };
            return {
                type_url: "/secret.compute.v1beta1.MsgExecuteContract",
                value: msgContent,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/secret/compute/v1beta1/msg")))).MsgExecuteContract.encode(msgContent).finish();
                }),
            };
        });
    }
    toAmino(utils) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.warnCodeHash) {
                console.warn(getMissingCodeHashWarning("MsgExecuteContract"));
            }
            if (!this.msgEncrypted) {
                // The encryption uses a random nonce
                // toProto() & toAmino() are called multiple times during signing
                // so to keep the msg consistant across calls we encrypt the msg only once
                this.msgEncrypted = yield utils.encrypt(this.codeHash, this.msg);
            }
            return {
                type: "wasm/MsgExecuteContract",
                value: {
                    sender: this.sender,
                    contract: this.contractAddress,
                    msg: (0, encoding_1.toBase64)(this.msgEncrypted),
                    sent_funds: this.sentFunds,
                },
            };
        });
    }
}
exports.MsgExecuteContract = MsgExecuteContract;
/** Upload a compiled contract to Secret Network */
class MsgStoreCode {
    constructor({ sender, wasm_byte_code: wasmByteCode, source, builder, }) {
        this.sender = sender;
        this.source = source;
        this.builder = builder;
        this.wasmByteCode = wasmByteCode;
    }
    gzipWasm() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0, utils_1.is_gzip)(this.wasmByteCode)) {
                const pako = yield Promise.resolve().then(() => __importStar(require("pako")));
                this.wasmByteCode = pako.gzip(this.wasmByteCode, { level: 9 });
            }
        });
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.gzipWasm();
            const msgContent = {
                sender: (0, utils_1.addressToBytes)(this.sender),
                wasm_byte_code: this.wasmByteCode,
                source: this.source,
                builder: this.builder,
            };
            return {
                type_url: "/secret.compute.v1beta1.MsgStoreCode",
                value: msgContent,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/secret/compute/v1beta1/msg")))).MsgStoreCode.encode(msgContent).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.gzipWasm();
            return {
                type: "wasm/MsgStoreCode",
                value: {
                    sender: this.sender,
                    wasm_byte_code: (0, encoding_1.toBase64)(this.wasmByteCode),
                    source: this.source.length > 0 ? this.source : undefined,
                    builder: this.builder.length > 0 ? this.builder : undefined,
                },
            };
        });
    }
}
exports.MsgStoreCode = MsgStoreCode;
/** Execute a function on a contract */
class MsgMigrateContract {
    constructor({ sender, contract_address: contractAddress, msg, code_id: codeId, code_hash: codeHash, }) {
        this.warnCodeHash = false;
        this.sender = sender;
        this.contractAddress = contractAddress;
        this.msg = msg;
        this.msgEncrypted = null;
        this.codeId = String(codeId);
        if (codeHash) {
            this.codeHash = codeHash.replace(/^0x/, "").toLowerCase();
        }
        else {
            // codeHash will be set in SecretNetworkClient before invoking toProto() & toAimno()
            this.codeHash = "";
            this.warnCodeHash = true;
            console.warn(getMissingCodeHashWarning("MsgMigrateContract"));
        }
    }
    toProto(utils) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.warnCodeHash) {
                console.warn(getMissingCodeHashWarning("MsgMigrateContract"));
            }
            if (!this.msgEncrypted) {
                // The encryption uses a random nonce
                // toProto() & toAmino() are called multiple times during signing
                // so to keep the msg consistant across calls we encrypt the msg only once
                this.msgEncrypted = yield utils.encrypt(this.codeHash, this.msg);
            }
            const msgContent = {
                sender: this.sender,
                contract: this.contractAddress,
                msg: this.msgEncrypted,
                code_id: this.codeId,
                // callback_sig & callback_code_hash are internal stuff that doesn't matter here
                callback_sig: new Uint8Array(),
                callback_code_hash: "",
            };
            return {
                type_url: "/secret.compute.v1beta1.MsgMigrateContract",
                value: msgContent,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/secret/compute/v1beta1/msg")))).MsgMigrateContract.encode(msgContent).finish();
                }),
            };
        });
    }
    toAmino(utils) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.warnCodeHash) {
                console.warn(getMissingCodeHashWarning("MsgMigrateContract"));
            }
            if (!this.msgEncrypted) {
                // The encryption uses a random nonce
                // toProto() & toAmino() are called multiple times during signing
                // so to keep the msg consistant across calls we encrypt the msg only once
                this.msgEncrypted = yield utils.encrypt(this.codeHash, this.msg);
            }
            return {
                type: "wasm/MsgMigrateContract",
                value: {
                    sender: this.sender,
                    contract: this.contractAddress,
                    msg: (0, encoding_1.toBase64)(this.msgEncrypted),
                    code_id: this.codeId,
                },
            };
        });
    }
}
exports.MsgMigrateContract = MsgMigrateContract;
/** MsgUpdateAdmin sets a new admin for a secret contract. */
class MsgUpdateAdmin {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/secret.compute.v1beta1.MsgUpdateAdmin",
                value: this.params,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/secret/compute/v1beta1/msg")))).MsgUpdateAdmin.encode({
                        sender: this.params.sender,
                        new_admin: this.params.new_admin,
                        contract: this.params.contract_address,
                        // callback_sig is internal stuff that doesn't matter here
                        callback_sig: new Uint8Array(),
                    }).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "wasm/MsgUpdateAdmin",
                value: {
                    sender: this.params.sender,
                    new_admin: this.params.new_admin,
                    contract: this.params.contract_address,
                },
            };
        });
    }
}
exports.MsgUpdateAdmin = MsgUpdateAdmin;
/** MsgClearAdmin removes any admin stored for a secret contract. */
class MsgClearAdmin {
    constructor(params) {
        this.params = params;
    }
    toProto() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type_url: "/secret.compute.v1beta1.MsgClearAdmin",
                value: this.params,
                encode: () => __awaiter(this, void 0, void 0, function* () {
                    return (yield Promise.resolve().then(() => __importStar(require("../protobuf/secret/compute/v1beta1/msg")))).MsgClearAdmin.encode({
                        sender: this.params.sender,
                        contract: this.params.contract_address,
                        // callback_sig is internal stuff that doesn't matter here
                        callback_sig: new Uint8Array(),
                    }).finish();
                }),
            };
        });
    }
    toAmino() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                type: "wasm/MsgClearAdmin",
                value: {
                    sender: this.params.sender,
                    contract: this.params.contract_address,
                },
            };
        });
    }
}
exports.MsgClearAdmin = MsgClearAdmin;
//# sourceMappingURL=compute.js.map