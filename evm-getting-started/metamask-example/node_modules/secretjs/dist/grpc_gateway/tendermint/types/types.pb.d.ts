import * as GoogleProtobufTimestamp from "../../google/protobuf/timestamp.pb";
import * as TendermintCryptoProof from "../crypto/proof.pb";
import * as TendermintVersionTypes from "../version/types.pb";
import * as TendermintTypesValidator from "./validator.pb";
export declare enum BlockIDFlag {
    BLOCK_ID_FLAG_UNKNOWN = "BLOCK_ID_FLAG_UNKNOWN",
    BLOCK_ID_FLAG_ABSENT = "BLOCK_ID_FLAG_ABSENT",
    BLOCK_ID_FLAG_COMMIT = "BLOCK_ID_FLAG_COMMIT",
    BLOCK_ID_FLAG_NIL = "BLOCK_ID_FLAG_NIL"
}
export declare enum SignedMsgType {
    SIGNED_MSG_TYPE_UNKNOWN = "SIGNED_MSG_TYPE_UNKNOWN",
    SIGNED_MSG_TYPE_PREVOTE = "SIGNED_MSG_TYPE_PREVOTE",
    SIGNED_MSG_TYPE_PRECOMMIT = "SIGNED_MSG_TYPE_PRECOMMIT",
    SIGNED_MSG_TYPE_PROPOSAL = "SIGNED_MSG_TYPE_PROPOSAL"
}
export declare type PartSetHeader = {
    total?: number;
    hash?: Uint8Array;
};
export declare type Part = {
    index?: number;
    bytes?: Uint8Array;
    proof?: TendermintCryptoProof.Proof;
};
export declare type BlockID = {
    hash?: Uint8Array;
    part_set_header?: PartSetHeader;
};
export declare type Header = {
    version?: TendermintVersionTypes.Consensus;
    chain_id?: string;
    height?: string;
    time?: GoogleProtobufTimestamp.Timestamp;
    last_block_id?: BlockID;
    last_commit_hash?: Uint8Array;
    data_hash?: Uint8Array;
    validators_hash?: Uint8Array;
    next_validators_hash?: Uint8Array;
    consensus_hash?: Uint8Array;
    app_hash?: Uint8Array;
    last_results_hash?: Uint8Array;
    evidence_hash?: Uint8Array;
    proposer_address?: Uint8Array;
    encrypted_random?: EncryptedRandom;
};
export declare type EncryptedRandom = {
    random?: Uint8Array;
    proof?: Uint8Array;
};
export declare type Data = {
    txs?: Uint8Array[];
};
export declare type Vote = {
    type?: SignedMsgType;
    height?: string;
    round?: number;
    block_id?: BlockID;
    timestamp?: GoogleProtobufTimestamp.Timestamp;
    validator_address?: Uint8Array;
    validator_index?: number;
    signature?: Uint8Array;
};
export declare type Commit = {
    height?: string;
    round?: number;
    block_id?: BlockID;
    signatures?: CommitSig[];
};
export declare type CommitSig = {
    block_id_flag?: BlockIDFlag;
    validator_address?: Uint8Array;
    timestamp?: GoogleProtobufTimestamp.Timestamp;
    signature?: Uint8Array;
};
export declare type Proposal = {
    type?: SignedMsgType;
    height?: string;
    round?: number;
    pol_round?: number;
    block_id?: BlockID;
    timestamp?: GoogleProtobufTimestamp.Timestamp;
    signature?: Uint8Array;
};
export declare type SignedHeader = {
    header?: Header;
    commit?: Commit;
};
export declare type LightBlock = {
    signed_header?: SignedHeader;
    validator_set?: TendermintTypesValidator.ValidatorSet;
};
export declare type BlockMeta = {
    block_id?: BlockID;
    block_size?: string;
    header?: Header;
    num_txs?: string;
};
export declare type TxProof = {
    root_hash?: Uint8Array;
    data?: Uint8Array;
    proof?: TendermintCryptoProof.Proof;
};
//# sourceMappingURL=types.pb.d.ts.map