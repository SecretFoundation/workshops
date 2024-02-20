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
exports.Snip1155Querier = void 0;
const query_1 = require("../../query");
class Snip1155Querier extends query_1.ComputeQuerier {
    constructor() {
        super(...arguments);
        this.getBalance = ({ contract, token_id, owner, auth, }) => __awaiter(this, void 0, void 0, function* () {
            if (auth.viewer) {
                return yield this.queryContract({
                    contract_address: contract.address,
                    code_hash: contract.code_hash,
                    query: {
                        balance: {
                            token_id,
                            owner,
                            viewer: auth.viewer.address,
                            key: auth.viewer.viewing_key,
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
                                balance: {
                                    token_id,
                                    owner,
                                },
                            },
                        },
                    },
                });
            }
            throw new Error("Empty auth parameter for authenticated query: GetBalance");
        });
        this.getAllBalances = ({ contract, auth, owner, tx_history_page, tx_history_page_size, }) => __awaiter(this, void 0, void 0, function* () {
            if (auth.viewer && owner) {
                if (auth.viewer.address !== owner) {
                    throw new Error("only owner can query all balances");
                }
                return yield this.queryContract({
                    contract_address: contract.address,
                    code_hash: contract.code_hash,
                    query: {
                        all_balances: {
                            owner,
                            key: auth.viewer.viewing_key,
                            tx_history_page,
                            tx_history_page_size,
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
                                all_balances: {
                                    tx_history_page,
                                    tx_history_page_size,
                                },
                            },
                        },
                    },
                });
            }
            throw new Error("Empty auth parameter for authenticated query: GetAllBalances");
        });
        this.getTransactionHistory = ({ contract, auth, page_size, page, }) => __awaiter(this, void 0, void 0, function* () {
            if (auth.viewer) {
                return this.queryContract({
                    contract_address: contract.address,
                    code_hash: contract.code_hash,
                    query: {
                        transaction_history: {
                            key: auth.viewer.viewing_key,
                            address: auth.viewer.address,
                            page_size,
                            page,
                        },
                    },
                });
            }
            else if (auth.permit) {
                return this.queryContract({
                    contract_address: contract.address,
                    code_hash: contract.code_hash,
                    query: {
                        with_permit: {
                            permit: auth.permit,
                            query: {
                                transaction_history: {
                                    page_size,
                                    page,
                                },
                            },
                        },
                    },
                });
            }
            throw new Error("Empty auth parameter for authenticated query: getTransactionHistory");
        });
        this.getPublicTokenInfo = ({ contract, token_id, }) => __awaiter(this, void 0, void 0, function* () {
            return yield this.queryContract({
                contract_address: contract.address,
                code_hash: contract.code_hash,
                query: {
                    token_id_public_info: {
                        token_id,
                    },
                },
            });
        });
        this.getPrivateTokenInfo = ({ contract, token_id, auth, }) => __awaiter(this, void 0, void 0, function* () {
            if (auth.viewer) {
                return yield this.queryContract({
                    contract_address: contract.address,
                    code_hash: contract.code_hash,
                    query: {
                        token_id_private_info: {
                            token_id,
                            address: auth.viewer.address,
                            key: auth.viewer.viewing_key,
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
                                token_id_private_info: {
                                    token_id,
                                },
                            },
                        },
                    },
                });
            }
            throw new Error("Empty auth parameter for authenticated query: getTransactionHistory");
        });
    }
}
exports.Snip1155Querier = Snip1155Querier;
//# sourceMappingURL=query.js.map