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
exports.Snip721Querier = void 0;
const query_1 = require("../../query");
class Snip721Querier extends query_1.ComputeQuerier {
    constructor() {
        super(...arguments);
        this.GetTokenInfo = ({ contract, auth, token_id, }) => __awaiter(this, void 0, void 0, function* () {
            if (auth.viewer) {
                return yield this.queryContract({
                    contract_address: contract.address,
                    code_hash: contract.codeHash,
                    query: {
                        all_nft_info: {
                            token_id,
                            viewer: auth.viewer,
                        },
                    },
                });
            }
            else if (auth.permit) {
                return yield this.queryContract({
                    contract_address: contract.address,
                    code_hash: contract.codeHash,
                    query: {
                        with_permit: {
                            permit: auth.permit,
                            query: {
                                all_nft_info: {
                                    token_id,
                                },
                            },
                        },
                    },
                });
            }
            throw new Error("Empty auth parameter for authenticated query: GetTokenInfo");
        });
        this.GetOwnedTokens = ({ contract, auth, owner, }) => __awaiter(this, void 0, void 0, function* () {
            if (auth.viewer) {
                return yield this.queryContract({
                    contract_address: contract.address,
                    code_hash: contract.codeHash,
                    query: {
                        tokens: {
                            owner,
                            viewing_key: auth.viewer.viewing_key,
                        },
                    },
                });
            }
            else if (auth.permit) {
                return yield this.queryContract({
                    contract_address: contract.address,
                    code_hash: contract.codeHash,
                    query: {
                        with_permit: {
                            permit: auth.permit,
                            query: {
                                tokens: {
                                    owner,
                                },
                            },
                        },
                    },
                });
            }
            throw new Error("Empty auth parameter for authenticated query: GetOwnedTokens");
        });
    }
}
exports.Snip721Querier = Snip721Querier;
//# sourceMappingURL=query.js.map