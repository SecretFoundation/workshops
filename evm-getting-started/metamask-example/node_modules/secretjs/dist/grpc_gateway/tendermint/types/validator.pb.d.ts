import * as TendermintCryptoKeys from "../crypto/keys.pb";
export declare type ValidatorSet = {
    validators?: Validator[];
    proposer?: Validator;
    total_voting_power?: string;
};
export declare type Validator = {
    address?: Uint8Array;
    pub_key?: TendermintCryptoKeys.PublicKey;
    voting_power?: string;
    proposer_priority?: string;
};
export declare type SimpleValidator = {
    pub_key?: TendermintCryptoKeys.PublicKey;
    voting_power?: string;
};
//# sourceMappingURL=validator.pb.d.ts.map