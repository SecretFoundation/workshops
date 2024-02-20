import * as _m0 from "protobufjs/minimal";
import { PublicKey } from "../crypto/keys";
import { Vote, Proposal } from "../types/types";
export declare const protobufPackage = "tendermint.privval";
export declare enum Errors {
    ERRORS_UNKNOWN = 0,
    ERRORS_UNEXPECTED_RESPONSE = 1,
    ERRORS_NO_CONNECTION = 2,
    ERRORS_CONNECTION_TIMEOUT = 3,
    ERRORS_READ_TIMEOUT = 4,
    ERRORS_WRITE_TIMEOUT = 5,
    UNRECOGNIZED = -1
}
export declare function errorsFromJSON(object: any): Errors;
export declare function errorsToJSON(object: Errors): string;
export interface RemoteSignerError {
    code: number;
    description: string;
}
/** PubKeyRequest requests the consensus public key from the remote signer. */
export interface PubKeyRequest {
    chain_id: string;
}
/** PubKeyResponse is a response message containing the public key. */
export interface PubKeyResponse {
    pub_key?: PublicKey;
    error?: RemoteSignerError;
}
/** SignVoteRequest is a request to sign a vote */
export interface SignVoteRequest {
    vote?: Vote;
    chain_id: string;
}
/** SignedVoteResponse is a response containing a signed vote or an error */
export interface SignedVoteResponse {
    vote?: Vote;
    error?: RemoteSignerError;
}
/** SignProposalRequest is a request to sign a proposal */
export interface SignProposalRequest {
    proposal?: Proposal;
    chain_id: string;
}
/** SignedProposalResponse is response containing a signed proposal or an error */
export interface SignedProposalResponse {
    proposal?: Proposal;
    error?: RemoteSignerError;
}
/** PingRequest is a request to confirm that the connection is alive. */
export interface PingRequest {
}
/** PingResponse is a response to confirm that the connection is alive. */
export interface PingResponse {
}
export interface Message {
    pub_key_request?: PubKeyRequest | undefined;
    pub_key_response?: PubKeyResponse | undefined;
    sign_vote_request?: SignVoteRequest | undefined;
    signed_vote_response?: SignedVoteResponse | undefined;
    sign_proposal_request?: SignProposalRequest | undefined;
    signed_proposal_response?: SignedProposalResponse | undefined;
    ping_request?: PingRequest | undefined;
    ping_response?: PingResponse | undefined;
}
export declare const RemoteSignerError: {
    encode(message: RemoteSignerError, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RemoteSignerError;
    fromJSON(object: any): RemoteSignerError;
    toJSON(message: RemoteSignerError): unknown;
    fromPartial<I extends {
        code?: number | undefined;
        description?: string | undefined;
    } & {
        code?: number | undefined;
        description?: string | undefined;
    } & Record<Exclude<keyof I, keyof RemoteSignerError>, never>>(object: I): RemoteSignerError;
};
export declare const PubKeyRequest: {
    encode(message: PubKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PubKeyRequest;
    fromJSON(object: any): PubKeyRequest;
    toJSON(message: PubKeyRequest): unknown;
    fromPartial<I extends {
        chain_id?: string | undefined;
    } & {
        chain_id?: string | undefined;
    } & Record<Exclude<keyof I, "chain_id">, never>>(object: I): PubKeyRequest;
};
export declare const PubKeyResponse: {
    encode(message: PubKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PubKeyResponse;
    fromJSON(object: any): PubKeyResponse;
    toJSON(message: PubKeyResponse): unknown;
    fromPartial<I extends {
        pub_key?: {
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } | undefined;
        error?: {
            code?: number | undefined;
            description?: string | undefined;
        } | undefined;
    } & {
        pub_key?: ({
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } & {
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["pub_key"], keyof PublicKey>, never>) | undefined;
        error?: ({
            code?: number | undefined;
            description?: string | undefined;
        } & {
            code?: number | undefined;
            description?: string | undefined;
        } & Record<Exclude<keyof I["error"], keyof RemoteSignerError>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof PubKeyResponse>, never>>(object: I): PubKeyResponse;
};
export declare const SignVoteRequest: {
    encode(message: SignVoteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignVoteRequest;
    fromJSON(object: any): SignVoteRequest;
    toJSON(message: SignVoteRequest): unknown;
    fromPartial<I extends {
        vote?: {
            type?: import("../types/types").SignedMsgType | undefined;
            height?: string | undefined;
            round?: number | undefined;
            block_id?: {
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            validator_address?: Uint8Array | undefined;
            validator_index?: number | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
        chain_id?: string | undefined;
    } & {
        vote?: ({
            type?: import("../types/types").SignedMsgType | undefined;
            height?: string | undefined;
            round?: number | undefined;
            block_id?: {
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            validator_address?: Uint8Array | undefined;
            validator_index?: number | undefined;
            signature?: Uint8Array | undefined;
        } & {
            type?: import("../types/types").SignedMsgType | undefined;
            height?: string | undefined;
            round?: number | undefined;
            block_id?: ({
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } & {
                hash?: Uint8Array | undefined;
                part_set_header?: ({
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["vote"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["vote"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
            timestamp?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["vote"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            validator_address?: Uint8Array | undefined;
            validator_index?: number | undefined;
            signature?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["vote"], keyof Vote>, never>) | undefined;
        chain_id?: string | undefined;
    } & Record<Exclude<keyof I, keyof SignVoteRequest>, never>>(object: I): SignVoteRequest;
};
export declare const SignedVoteResponse: {
    encode(message: SignedVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignedVoteResponse;
    fromJSON(object: any): SignedVoteResponse;
    toJSON(message: SignedVoteResponse): unknown;
    fromPartial<I extends {
        vote?: {
            type?: import("../types/types").SignedMsgType | undefined;
            height?: string | undefined;
            round?: number | undefined;
            block_id?: {
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            validator_address?: Uint8Array | undefined;
            validator_index?: number | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
        error?: {
            code?: number | undefined;
            description?: string | undefined;
        } | undefined;
    } & {
        vote?: ({
            type?: import("../types/types").SignedMsgType | undefined;
            height?: string | undefined;
            round?: number | undefined;
            block_id?: {
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            validator_address?: Uint8Array | undefined;
            validator_index?: number | undefined;
            signature?: Uint8Array | undefined;
        } & {
            type?: import("../types/types").SignedMsgType | undefined;
            height?: string | undefined;
            round?: number | undefined;
            block_id?: ({
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } & {
                hash?: Uint8Array | undefined;
                part_set_header?: ({
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["vote"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["vote"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
            timestamp?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["vote"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            validator_address?: Uint8Array | undefined;
            validator_index?: number | undefined;
            signature?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["vote"], keyof Vote>, never>) | undefined;
        error?: ({
            code?: number | undefined;
            description?: string | undefined;
        } & {
            code?: number | undefined;
            description?: string | undefined;
        } & Record<Exclude<keyof I["error"], keyof RemoteSignerError>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof SignedVoteResponse>, never>>(object: I): SignedVoteResponse;
};
export declare const SignProposalRequest: {
    encode(message: SignProposalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignProposalRequest;
    fromJSON(object: any): SignProposalRequest;
    toJSON(message: SignProposalRequest): unknown;
    fromPartial<I extends {
        proposal?: {
            type?: import("../types/types").SignedMsgType | undefined;
            height?: string | undefined;
            round?: number | undefined;
            pol_round?: number | undefined;
            block_id?: {
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
        chain_id?: string | undefined;
    } & {
        proposal?: ({
            type?: import("../types/types").SignedMsgType | undefined;
            height?: string | undefined;
            round?: number | undefined;
            pol_round?: number | undefined;
            block_id?: {
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            signature?: Uint8Array | undefined;
        } & {
            type?: import("../types/types").SignedMsgType | undefined;
            height?: string | undefined;
            round?: number | undefined;
            pol_round?: number | undefined;
            block_id?: ({
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } & {
                hash?: Uint8Array | undefined;
                part_set_header?: ({
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["proposal"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["proposal"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
            timestamp?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["proposal"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            signature?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["proposal"], keyof Proposal>, never>) | undefined;
        chain_id?: string | undefined;
    } & Record<Exclude<keyof I, keyof SignProposalRequest>, never>>(object: I): SignProposalRequest;
};
export declare const SignedProposalResponse: {
    encode(message: SignedProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignedProposalResponse;
    fromJSON(object: any): SignedProposalResponse;
    toJSON(message: SignedProposalResponse): unknown;
    fromPartial<I extends {
        proposal?: {
            type?: import("../types/types").SignedMsgType | undefined;
            height?: string | undefined;
            round?: number | undefined;
            pol_round?: number | undefined;
            block_id?: {
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            signature?: Uint8Array | undefined;
        } | undefined;
        error?: {
            code?: number | undefined;
            description?: string | undefined;
        } | undefined;
    } & {
        proposal?: ({
            type?: import("../types/types").SignedMsgType | undefined;
            height?: string | undefined;
            round?: number | undefined;
            pol_round?: number | undefined;
            block_id?: {
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            timestamp?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            signature?: Uint8Array | undefined;
        } & {
            type?: import("../types/types").SignedMsgType | undefined;
            height?: string | undefined;
            round?: number | undefined;
            pol_round?: number | undefined;
            block_id?: ({
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } & {
                hash?: Uint8Array | undefined;
                part_set_header?: ({
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["proposal"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["proposal"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
            timestamp?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["proposal"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            signature?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["proposal"], keyof Proposal>, never>) | undefined;
        error?: ({
            code?: number | undefined;
            description?: string | undefined;
        } & {
            code?: number | undefined;
            description?: string | undefined;
        } & Record<Exclude<keyof I["error"], keyof RemoteSignerError>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof SignedProposalResponse>, never>>(object: I): SignedProposalResponse;
};
export declare const PingRequest: {
    encode(_: PingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PingRequest;
    fromJSON(_: any): PingRequest;
    toJSON(_: PingRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): PingRequest;
};
export declare const PingResponse: {
    encode(_: PingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PingResponse;
    fromJSON(_: any): PingResponse;
    toJSON(_: PingResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): PingResponse;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial<I extends {
        pub_key_request?: {
            chain_id?: string | undefined;
        } | undefined;
        pub_key_response?: {
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                description?: string | undefined;
            } | undefined;
        } | undefined;
        sign_vote_request?: {
            vote?: {
                type?: import("../types/types").SignedMsgType | undefined;
                height?: string | undefined;
                round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                validator_address?: Uint8Array | undefined;
                validator_index?: number | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            chain_id?: string | undefined;
        } | undefined;
        signed_vote_response?: {
            vote?: {
                type?: import("../types/types").SignedMsgType | undefined;
                height?: string | undefined;
                round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                validator_address?: Uint8Array | undefined;
                validator_index?: number | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                description?: string | undefined;
            } | undefined;
        } | undefined;
        sign_proposal_request?: {
            proposal?: {
                type?: import("../types/types").SignedMsgType | undefined;
                height?: string | undefined;
                round?: number | undefined;
                pol_round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            chain_id?: string | undefined;
        } | undefined;
        signed_proposal_response?: {
            proposal?: {
                type?: import("../types/types").SignedMsgType | undefined;
                height?: string | undefined;
                round?: number | undefined;
                pol_round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                description?: string | undefined;
            } | undefined;
        } | undefined;
        ping_request?: {} | undefined;
        ping_response?: {} | undefined;
    } & {
        pub_key_request?: ({
            chain_id?: string | undefined;
        } & {
            chain_id?: string | undefined;
        } & Record<Exclude<keyof I["pub_key_request"], "chain_id">, never>) | undefined;
        pub_key_response?: ({
            pub_key?: {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                description?: string | undefined;
            } | undefined;
        } & {
            pub_key?: ({
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & {
                ed25519?: Uint8Array | undefined;
                secp256k1?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["pub_key_response"]["pub_key"], keyof PublicKey>, never>) | undefined;
            error?: ({
                code?: number | undefined;
                description?: string | undefined;
            } & {
                code?: number | undefined;
                description?: string | undefined;
            } & Record<Exclude<keyof I["pub_key_response"]["error"], keyof RemoteSignerError>, never>) | undefined;
        } & Record<Exclude<keyof I["pub_key_response"], keyof PubKeyResponse>, never>) | undefined;
        sign_vote_request?: ({
            vote?: {
                type?: import("../types/types").SignedMsgType | undefined;
                height?: string | undefined;
                round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                validator_address?: Uint8Array | undefined;
                validator_index?: number | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            chain_id?: string | undefined;
        } & {
            vote?: ({
                type?: import("../types/types").SignedMsgType | undefined;
                height?: string | undefined;
                round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                validator_address?: Uint8Array | undefined;
                validator_index?: number | undefined;
                signature?: Uint8Array | undefined;
            } & {
                type?: import("../types/types").SignedMsgType | undefined;
                height?: string | undefined;
                round?: number | undefined;
                block_id?: ({
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    part_set_header?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["sign_vote_request"]["vote"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["sign_vote_request"]["vote"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
                timestamp?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["sign_vote_request"]["vote"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                validator_address?: Uint8Array | undefined;
                validator_index?: number | undefined;
                signature?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["sign_vote_request"]["vote"], keyof Vote>, never>) | undefined;
            chain_id?: string | undefined;
        } & Record<Exclude<keyof I["sign_vote_request"], keyof SignVoteRequest>, never>) | undefined;
        signed_vote_response?: ({
            vote?: {
                type?: import("../types/types").SignedMsgType | undefined;
                height?: string | undefined;
                round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                validator_address?: Uint8Array | undefined;
                validator_index?: number | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                description?: string | undefined;
            } | undefined;
        } & {
            vote?: ({
                type?: import("../types/types").SignedMsgType | undefined;
                height?: string | undefined;
                round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                validator_address?: Uint8Array | undefined;
                validator_index?: number | undefined;
                signature?: Uint8Array | undefined;
            } & {
                type?: import("../types/types").SignedMsgType | undefined;
                height?: string | undefined;
                round?: number | undefined;
                block_id?: ({
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    part_set_header?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["signed_vote_response"]["vote"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["signed_vote_response"]["vote"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
                timestamp?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["signed_vote_response"]["vote"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                validator_address?: Uint8Array | undefined;
                validator_index?: number | undefined;
                signature?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["signed_vote_response"]["vote"], keyof Vote>, never>) | undefined;
            error?: ({
                code?: number | undefined;
                description?: string | undefined;
            } & {
                code?: number | undefined;
                description?: string | undefined;
            } & Record<Exclude<keyof I["signed_vote_response"]["error"], keyof RemoteSignerError>, never>) | undefined;
        } & Record<Exclude<keyof I["signed_vote_response"], keyof SignedVoteResponse>, never>) | undefined;
        sign_proposal_request?: ({
            proposal?: {
                type?: import("../types/types").SignedMsgType | undefined;
                height?: string | undefined;
                round?: number | undefined;
                pol_round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            chain_id?: string | undefined;
        } & {
            proposal?: ({
                type?: import("../types/types").SignedMsgType | undefined;
                height?: string | undefined;
                round?: number | undefined;
                pol_round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            } & {
                type?: import("../types/types").SignedMsgType | undefined;
                height?: string | undefined;
                round?: number | undefined;
                pol_round?: number | undefined;
                block_id?: ({
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    part_set_header?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["sign_proposal_request"]["proposal"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["sign_proposal_request"]["proposal"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
                timestamp?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["sign_proposal_request"]["proposal"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                signature?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["sign_proposal_request"]["proposal"], keyof Proposal>, never>) | undefined;
            chain_id?: string | undefined;
        } & Record<Exclude<keyof I["sign_proposal_request"], keyof SignProposalRequest>, never>) | undefined;
        signed_proposal_response?: ({
            proposal?: {
                type?: import("../types/types").SignedMsgType | undefined;
                height?: string | undefined;
                round?: number | undefined;
                pol_round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            } | undefined;
            error?: {
                code?: number | undefined;
                description?: string | undefined;
            } | undefined;
        } & {
            proposal?: ({
                type?: import("../types/types").SignedMsgType | undefined;
                height?: string | undefined;
                round?: number | undefined;
                pol_round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            } & {
                type?: import("../types/types").SignedMsgType | undefined;
                height?: string | undefined;
                round?: number | undefined;
                pol_round?: number | undefined;
                block_id?: ({
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    hash?: Uint8Array | undefined;
                    part_set_header?: ({
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["signed_proposal_response"]["proposal"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["signed_proposal_response"]["proposal"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
                timestamp?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["signed_proposal_response"]["proposal"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                signature?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["signed_proposal_response"]["proposal"], keyof Proposal>, never>) | undefined;
            error?: ({
                code?: number | undefined;
                description?: string | undefined;
            } & {
                code?: number | undefined;
                description?: string | undefined;
            } & Record<Exclude<keyof I["signed_proposal_response"]["error"], keyof RemoteSignerError>, never>) | undefined;
        } & Record<Exclude<keyof I["signed_proposal_response"], keyof SignedProposalResponse>, never>) | undefined;
        ping_request?: ({} & {} & Record<Exclude<keyof I["ping_request"], never>, never>) | undefined;
        ping_response?: ({} & {} & Record<Exclude<keyof I["ping_response"], never>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Message>, never>>(object: I): Message;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
//# sourceMappingURL=types.d.ts.map