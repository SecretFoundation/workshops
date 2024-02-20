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
exports.Snip20Querier = void 0;
const __1 = require("../../");
class Snip20Querier extends __1.ComputeQuerier {
    constructor() {
        super(...arguments);
        this.getSnip20Params = ({ contract, }) => __awaiter(this, void 0, void 0, function* () {
            return yield this.queryContract({
                contract_address: contract.address,
                code_hash: contract.code_hash,
                query: {
                    token_info: {},
                },
            });
        });
        this.getBalance = ({ contract, address, auth, }) => __awaiter(this, void 0, void 0, function* () {
            if (auth.key) {
                return yield this.queryContract({
                    contract_address: contract.address,
                    code_hash: contract.code_hash,
                    query: {
                        balance: {
                            address,
                            key: auth.key,
                        },
                    },
                });
            }
            else if (auth.permit) {
                return yield this.queryContract({
                    contract_address: contract.address,
                    code_hash: contract.code_hash,
                    query: {
                        with_permit: {
                            permit: auth.permit,
                            query: {
                                balance: {},
                            },
                        },
                    },
                });
            }
            throw new Error("Empty auth parameter for authenticated query: GetBalance");
        });
        this.getTransferHistory = ({ contract, address, auth, page, page_size, should_filter_decoys, }) => __awaiter(this, void 0, void 0, function* () {
            if (auth.key) {
                return yield this.queryContract({
                    contract_address: contract.address,
                    code_hash: contract.code_hash,
                    query: {
                        transfer_history: {
                            address,
                            key: auth.key,
                            page,
                            page_size,
                            should_filter_decoys,
                        },
                    },
                });
            }
            else if (auth.permit) {
                return yield this.queryContract({
                    contract_address: contract.address,
                    code_hash: contract.code_hash,
                    query: {
                        with_permit: {
                            permit: auth.permit,
                            query: {
                                transfer_history: {
                                    page,
                                    page_size,
                                    should_filter_decoys,
                                },
                            },
                        },
                    },
                });
            }
            throw new Error("Empty auth parameter for authenticated query: getTransferHistory");
        });
        this.getTransactionHistory = ({ contract, address, auth, page, page_size, should_filter_decoys, }) => __awaiter(this, void 0, void 0, function* () {
            if (auth.key) {
                return yield this.queryContract({
                    contract_address: contract.address,
                    code_hash: contract.code_hash,
                    query: {
                        transaction_history: {
                            address,
                            key: auth.key,
                            page,
                            page_size,
                            should_filter_decoys,
                        },
                    },
                });
            }
            else if (auth.permit) {
                return yield this.queryContract({
                    contract_address: contract.address,
                    code_hash: contract.code_hash,
                    query: {
                        with_permit: {
                            permit: auth.permit,
                            query: {
                                transaction_history: {
                                    page,
                                    page_size,
                                    should_filter_decoys,
                                },
                            },
                        },
                    },
                });
            }
            throw new Error("Empty auth parameter for authenticated query: getTransactionHistory");
        });
        this.GetAllowance = ({ contract, owner, spender, auth, }) => __awaiter(this, void 0, void 0, function* () {
            if (auth.key) {
                return yield this.queryContract({
                    contract_address: contract.address,
                    code_hash: contract.code_hash,
                    query: {
                        allowance: {
                            owner,
                            spender,
                            key: auth.key,
                        },
                    },
                });
            }
            else if (auth.permit) {
                return yield this.queryContract({
                    contract_address: contract.address,
                    code_hash: contract.code_hash,
                    query: {
                        with_permit: {
                            permit: auth.permit,
                            query: {
                                allowance: {
                                    owner,
                                    spender,
                                },
                            },
                        },
                    },
                });
            }
            throw new Error("Empty auth parameter for authenticated query: GetAllowance");
        });
    }
}
exports.Snip20Querier = Snip20Querier;
//# sourceMappingURL=query.js.map