import * as TendermintCryptoKeys from "../crypto/keys.pb";
import * as TendermintTypesTypes from "../types/types.pb";
declare type Absent<T, K extends keyof T> = {
    [k in Exclude<keyof T, K>]?: undefined;
};
declare type OneOf<T> = {
    [k in keyof T]?: undefined;
} | (keyof T extends infer K ? (K extends string & keyof T ? {
    [k in K]: T[K];
} & Absent<T, K> : never) : never);
export declare enum Errors {
    ERRORS_UNKNOWN = "ERRORS_UNKNOWN",
    ERRORS_UNEXPECTED_RESPONSE = "ERRORS_UNEXPECTED_RESPONSE",
    ERRORS_NO_CONNECTION = "ERRORS_NO_CONNECTION",
    ERRORS_CONNECTION_TIMEOUT = "ERRORS_CONNECTION_TIMEOUT",
    ERRORS_READ_TIMEOUT = "ERRORS_READ_TIMEOUT",
    ERRORS_WRITE_TIMEOUT = "ERRORS_WRITE_TIMEOUT"
}
export declare type RemoteSignerError = {
    code?: number;
    description?: string;
};
export declare type PubKeyRequest = {
    chain_id?: string;
};
export declare type PubKeyResponse = {
    pub_key?: TendermintCryptoKeys.PublicKey;
    error?: RemoteSignerError;
};
export declare type SignVoteRequest = {
    vote?: TendermintTypesTypes.Vote;
    chain_id?: string;
};
export declare type SignedVoteResponse = {
    vote?: TendermintTypesTypes.Vote;
    error?: RemoteSignerError;
};
export declare type SignProposalRequest = {
    proposal?: TendermintTypesTypes.Proposal;
    chain_id?: string;
};
export declare type SignedProposalResponse = {
    proposal?: TendermintTypesTypes.Proposal;
    error?: RemoteSignerError;
};
export declare type PingRequest = {};
export declare type PingResponse = {};
declare type BaseMessage = {};
export declare type Message = BaseMessage & OneOf<{
    pub_key_request: PubKeyRequest;
    pub_key_response: PubKeyResponse;
    sign_vote_request: SignVoteRequest;
    signed_vote_response: SignedVoteResponse;
    sign_proposal_request: SignProposalRequest;
    signed_proposal_response: SignedProposalResponse;
    ping_request: PingRequest;
    ping_response: PingResponse;
}>;
export {};
//# sourceMappingURL=types.pb.d.ts.map