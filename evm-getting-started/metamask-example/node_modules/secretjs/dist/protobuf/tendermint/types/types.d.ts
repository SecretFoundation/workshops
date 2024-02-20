import * as _m0 from "protobufjs/minimal";
import { Proof } from "../crypto/proof";
import { Consensus } from "../version/types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { ValidatorSet } from "./validator";
export declare const protobufPackage = "tendermint.types";
/** BlockIdFlag indicates which BlcokID the signature is for */
export declare enum BlockIDFlag {
    BLOCK_ID_FLAG_UNKNOWN = 0,
    BLOCK_ID_FLAG_ABSENT = 1,
    BLOCK_ID_FLAG_COMMIT = 2,
    BLOCK_ID_FLAG_NIL = 3,
    UNRECOGNIZED = -1
}
export declare function blockIDFlagFromJSON(object: any): BlockIDFlag;
export declare function blockIDFlagToJSON(object: BlockIDFlag): string;
/** SignedMsgType is a type of signed message in the consensus. */
export declare enum SignedMsgType {
    SIGNED_MSG_TYPE_UNKNOWN = 0,
    /** SIGNED_MSG_TYPE_PREVOTE - Votes */
    SIGNED_MSG_TYPE_PREVOTE = 1,
    SIGNED_MSG_TYPE_PRECOMMIT = 2,
    /** SIGNED_MSG_TYPE_PROPOSAL - Proposals */
    SIGNED_MSG_TYPE_PROPOSAL = 32,
    UNRECOGNIZED = -1
}
export declare function signedMsgTypeFromJSON(object: any): SignedMsgType;
export declare function signedMsgTypeToJSON(object: SignedMsgType): string;
/** PartsetHeader */
export interface PartSetHeader {
    total: number;
    hash: Uint8Array;
}
export interface Part {
    index: number;
    bytes: Uint8Array;
    proof?: Proof;
}
/** BlockID */
export interface BlockID {
    hash: Uint8Array;
    part_set_header?: PartSetHeader;
}
/** Header defines the structure of a Tendermint block header. */
export interface Header {
    /** basic block info */
    version?: Consensus;
    chain_id: string;
    height: string;
    time?: Timestamp;
    /** prev block info */
    last_block_id?: BlockID;
    /** hashes of block data */
    last_commit_hash: Uint8Array;
    /** transactions */
    data_hash: Uint8Array;
    /** hashes from the app output from the prev block */
    validators_hash: Uint8Array;
    /** validators for the next block */
    next_validators_hash: Uint8Array;
    /** consensus params for current block */
    consensus_hash: Uint8Array;
    /** state after txs from the previous block */
    app_hash: Uint8Array;
    /** root hash of all results from the txs from the previous block */
    last_results_hash: Uint8Array;
    /** consensus info */
    evidence_hash: Uint8Array;
    /** original proposer of the block */
    proposer_address: Uint8Array;
    /** encrypted random */
    encrypted_random?: EncryptedRandom;
}
/** Data contains the set of transactions included in the block */
export interface EncryptedRandom {
    random: Uint8Array;
    proof: Uint8Array;
}
/** Data contains the set of transactions included in the block */
export interface Data {
    /**
     * Txs that will be applied by state @ block.Height+1.
     * NOTE: not all txs here are valid.  We're just agreeing on the order first.
     * This means that block.AppHash does not include these txs.
     */
    txs: Uint8Array[];
}
/**
 * Vote represents a prevote, precommit, or commit vote from validators for
 * consensus.
 */
export interface Vote {
    type: SignedMsgType;
    height: string;
    round: number;
    /** zero if vote is nil. */
    block_id?: BlockID;
    timestamp?: Timestamp;
    validator_address: Uint8Array;
    validator_index: number;
    signature: Uint8Array;
}
/** Commit contains the evidence that a block was committed by a set of validators. */
export interface Commit {
    height: string;
    round: number;
    block_id?: BlockID;
    signatures: CommitSig[];
}
/** CommitSig is a part of the Vote included in a Commit. */
export interface CommitSig {
    block_id_flag: BlockIDFlag;
    validator_address: Uint8Array;
    timestamp?: Timestamp;
    signature: Uint8Array;
}
export interface Proposal {
    type: SignedMsgType;
    height: string;
    round: number;
    pol_round: number;
    block_id?: BlockID;
    timestamp?: Timestamp;
    signature: Uint8Array;
}
export interface SignedHeader {
    header?: Header;
    commit?: Commit;
}
export interface LightBlock {
    signed_header?: SignedHeader;
    validator_set?: ValidatorSet;
}
export interface BlockMeta {
    block_id?: BlockID;
    block_size: string;
    header?: Header;
    num_txs: string;
}
/** TxProof represents a Merkle proof of the presence of a transaction in the Merkle tree. */
export interface TxProof {
    root_hash: Uint8Array;
    data: Uint8Array;
    proof?: Proof;
}
export declare const PartSetHeader: {
    encode(message: PartSetHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PartSetHeader;
    fromJSON(object: any): PartSetHeader;
    toJSON(message: PartSetHeader): unknown;
    fromPartial<I extends {
        total?: number | undefined;
        hash?: Uint8Array | undefined;
    } & {
        total?: number | undefined;
        hash?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof PartSetHeader>, never>>(object: I): PartSetHeader;
};
export declare const Part: {
    encode(message: Part, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Part;
    fromJSON(object: any): Part;
    toJSON(message: Part): unknown;
    fromPartial<I extends {
        index?: number | undefined;
        bytes?: Uint8Array | undefined;
        proof?: {
            total?: string | undefined;
            index?: string | undefined;
            leaf_hash?: Uint8Array | undefined;
            aunts?: Uint8Array[] | undefined;
        } | undefined;
    } & {
        index?: number | undefined;
        bytes?: Uint8Array | undefined;
        proof?: ({
            total?: string | undefined;
            index?: string | undefined;
            leaf_hash?: Uint8Array | undefined;
            aunts?: Uint8Array[] | undefined;
        } & {
            total?: string | undefined;
            index?: string | undefined;
            leaf_hash?: Uint8Array | undefined;
            aunts?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["proof"]["aunts"], keyof Uint8Array[]>, never>) | undefined;
        } & Record<Exclude<keyof I["proof"], keyof Proof>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Part>, never>>(object: I): Part;
};
export declare const BlockID: {
    encode(message: BlockID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BlockID;
    fromJSON(object: any): BlockID;
    toJSON(message: BlockID): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["part_set_header"], keyof PartSetHeader>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof BlockID>, never>>(object: I): BlockID;
};
export declare const Header: {
    encode(message: Header, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Header;
    fromJSON(object: any): Header;
    toJSON(message: Header): unknown;
    fromPartial<I extends {
        version?: {
            block?: string | undefined;
            app?: string | undefined;
        } | undefined;
        chain_id?: string | undefined;
        height?: string | undefined;
        time?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
        last_block_id?: {
            hash?: Uint8Array | undefined;
            part_set_header?: {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        last_commit_hash?: Uint8Array | undefined;
        data_hash?: Uint8Array | undefined;
        validators_hash?: Uint8Array | undefined;
        next_validators_hash?: Uint8Array | undefined;
        consensus_hash?: Uint8Array | undefined;
        app_hash?: Uint8Array | undefined;
        last_results_hash?: Uint8Array | undefined;
        evidence_hash?: Uint8Array | undefined;
        proposer_address?: Uint8Array | undefined;
        encrypted_random?: {
            random?: Uint8Array | undefined;
            proof?: Uint8Array | undefined;
        } | undefined;
    } & {
        version?: ({
            block?: string | undefined;
            app?: string | undefined;
        } & {
            block?: string | undefined;
            app?: string | undefined;
        } & Record<Exclude<keyof I["version"], keyof Consensus>, never>) | undefined;
        chain_id?: string | undefined;
        height?: string | undefined;
        time?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["time"], keyof Timestamp>, never>) | undefined;
        last_block_id?: ({
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
            } & Record<Exclude<keyof I["last_block_id"]["part_set_header"], keyof PartSetHeader>, never>) | undefined;
        } & Record<Exclude<keyof I["last_block_id"], keyof BlockID>, never>) | undefined;
        last_commit_hash?: Uint8Array | undefined;
        data_hash?: Uint8Array | undefined;
        validators_hash?: Uint8Array | undefined;
        next_validators_hash?: Uint8Array | undefined;
        consensus_hash?: Uint8Array | undefined;
        app_hash?: Uint8Array | undefined;
        last_results_hash?: Uint8Array | undefined;
        evidence_hash?: Uint8Array | undefined;
        proposer_address?: Uint8Array | undefined;
        encrypted_random?: ({
            random?: Uint8Array | undefined;
            proof?: Uint8Array | undefined;
        } & {
            random?: Uint8Array | undefined;
            proof?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["encrypted_random"], keyof EncryptedRandom>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Header>, never>>(object: I): Header;
};
export declare const EncryptedRandom: {
    encode(message: EncryptedRandom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EncryptedRandom;
    fromJSON(object: any): EncryptedRandom;
    toJSON(message: EncryptedRandom): unknown;
    fromPartial<I extends {
        random?: Uint8Array | undefined;
        proof?: Uint8Array | undefined;
    } & {
        random?: Uint8Array | undefined;
        proof?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof EncryptedRandom>, never>>(object: I): EncryptedRandom;
};
export declare const Data: {
    encode(message: Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Data;
    fromJSON(object: any): Data;
    toJSON(message: Data): unknown;
    fromPartial<I extends {
        txs?: Uint8Array[] | undefined;
    } & {
        txs?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["txs"], keyof Uint8Array[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "txs">, never>>(object: I): Data;
};
export declare const Vote: {
    encode(message: Vote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Vote;
    fromJSON(object: any): Vote;
    toJSON(message: Vote): unknown;
    fromPartial<I extends {
        type?: SignedMsgType | undefined;
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
        type?: SignedMsgType | undefined;
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
            } & Record<Exclude<keyof I["block_id"]["part_set_header"], keyof PartSetHeader>, never>) | undefined;
        } & Record<Exclude<keyof I["block_id"], keyof BlockID>, never>) | undefined;
        timestamp?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["timestamp"], keyof Timestamp>, never>) | undefined;
        validator_address?: Uint8Array | undefined;
        validator_index?: number | undefined;
        signature?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof Vote>, never>>(object: I): Vote;
};
export declare const Commit: {
    encode(message: Commit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Commit;
    fromJSON(object: any): Commit;
    toJSON(message: Commit): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        round?: number | undefined;
        block_id?: {
            hash?: Uint8Array | undefined;
            part_set_header?: {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        signatures?: {
            block_id_flag?: BlockIDFlag | undefined;
            validator_address?: Uint8Array | undefined;
            timestamp?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            signature?: Uint8Array | undefined;
        }[] | undefined;
    } & {
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
            } & Record<Exclude<keyof I["block_id"]["part_set_header"], keyof PartSetHeader>, never>) | undefined;
        } & Record<Exclude<keyof I["block_id"], keyof BlockID>, never>) | undefined;
        signatures?: ({
            block_id_flag?: BlockIDFlag | undefined;
            validator_address?: Uint8Array | undefined;
            timestamp?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            signature?: Uint8Array | undefined;
        }[] & ({
            block_id_flag?: BlockIDFlag | undefined;
            validator_address?: Uint8Array | undefined;
            timestamp?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            signature?: Uint8Array | undefined;
        } & {
            block_id_flag?: BlockIDFlag | undefined;
            validator_address?: Uint8Array | undefined;
            timestamp?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["signatures"][number]["timestamp"], keyof Timestamp>, never>) | undefined;
            signature?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["signatures"][number], keyof CommitSig>, never>)[] & Record<Exclude<keyof I["signatures"], keyof {
            block_id_flag?: BlockIDFlag | undefined;
            validator_address?: Uint8Array | undefined;
            timestamp?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            signature?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Commit>, never>>(object: I): Commit;
};
export declare const CommitSig: {
    encode(message: CommitSig, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CommitSig;
    fromJSON(object: any): CommitSig;
    toJSON(message: CommitSig): unknown;
    fromPartial<I extends {
        block_id_flag?: BlockIDFlag | undefined;
        validator_address?: Uint8Array | undefined;
        timestamp?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
        signature?: Uint8Array | undefined;
    } & {
        block_id_flag?: BlockIDFlag | undefined;
        validator_address?: Uint8Array | undefined;
        timestamp?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["timestamp"], keyof Timestamp>, never>) | undefined;
        signature?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof CommitSig>, never>>(object: I): CommitSig;
};
export declare const Proposal: {
    encode(message: Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Proposal;
    fromJSON(object: any): Proposal;
    toJSON(message: Proposal): unknown;
    fromPartial<I extends {
        type?: SignedMsgType | undefined;
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
        type?: SignedMsgType | undefined;
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
            } & Record<Exclude<keyof I["block_id"]["part_set_header"], keyof PartSetHeader>, never>) | undefined;
        } & Record<Exclude<keyof I["block_id"], keyof BlockID>, never>) | undefined;
        timestamp?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["timestamp"], keyof Timestamp>, never>) | undefined;
        signature?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof Proposal>, never>>(object: I): Proposal;
};
export declare const SignedHeader: {
    encode(message: SignedHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignedHeader;
    fromJSON(object: any): SignedHeader;
    toJSON(message: SignedHeader): unknown;
    fromPartial<I extends {
        header?: {
            version?: {
                block?: string | undefined;
                app?: string | undefined;
            } | undefined;
            chain_id?: string | undefined;
            height?: string | undefined;
            time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            last_block_id?: {
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            last_commit_hash?: Uint8Array | undefined;
            data_hash?: Uint8Array | undefined;
            validators_hash?: Uint8Array | undefined;
            next_validators_hash?: Uint8Array | undefined;
            consensus_hash?: Uint8Array | undefined;
            app_hash?: Uint8Array | undefined;
            last_results_hash?: Uint8Array | undefined;
            evidence_hash?: Uint8Array | undefined;
            proposer_address?: Uint8Array | undefined;
            encrypted_random?: {
                random?: Uint8Array | undefined;
                proof?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        commit?: {
            height?: string | undefined;
            round?: number | undefined;
            block_id?: {
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            signatures?: {
                block_id_flag?: BlockIDFlag | undefined;
                validator_address?: Uint8Array | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        header?: ({
            version?: {
                block?: string | undefined;
                app?: string | undefined;
            } | undefined;
            chain_id?: string | undefined;
            height?: string | undefined;
            time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            last_block_id?: {
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            last_commit_hash?: Uint8Array | undefined;
            data_hash?: Uint8Array | undefined;
            validators_hash?: Uint8Array | undefined;
            next_validators_hash?: Uint8Array | undefined;
            consensus_hash?: Uint8Array | undefined;
            app_hash?: Uint8Array | undefined;
            last_results_hash?: Uint8Array | undefined;
            evidence_hash?: Uint8Array | undefined;
            proposer_address?: Uint8Array | undefined;
            encrypted_random?: {
                random?: Uint8Array | undefined;
                proof?: Uint8Array | undefined;
            } | undefined;
        } & {
            version?: ({
                block?: string | undefined;
                app?: string | undefined;
            } & {
                block?: string | undefined;
                app?: string | undefined;
            } & Record<Exclude<keyof I["header"]["version"], keyof Consensus>, never>) | undefined;
            chain_id?: string | undefined;
            height?: string | undefined;
            time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["header"]["time"], keyof Timestamp>, never>) | undefined;
            last_block_id?: ({
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
                } & Record<Exclude<keyof I["header"]["last_block_id"]["part_set_header"], keyof PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["header"]["last_block_id"], keyof BlockID>, never>) | undefined;
            last_commit_hash?: Uint8Array | undefined;
            data_hash?: Uint8Array | undefined;
            validators_hash?: Uint8Array | undefined;
            next_validators_hash?: Uint8Array | undefined;
            consensus_hash?: Uint8Array | undefined;
            app_hash?: Uint8Array | undefined;
            last_results_hash?: Uint8Array | undefined;
            evidence_hash?: Uint8Array | undefined;
            proposer_address?: Uint8Array | undefined;
            encrypted_random?: ({
                random?: Uint8Array | undefined;
                proof?: Uint8Array | undefined;
            } & {
                random?: Uint8Array | undefined;
                proof?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["header"]["encrypted_random"], keyof EncryptedRandom>, never>) | undefined;
        } & Record<Exclude<keyof I["header"], keyof Header>, never>) | undefined;
        commit?: ({
            height?: string | undefined;
            round?: number | undefined;
            block_id?: {
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            signatures?: {
                block_id_flag?: BlockIDFlag | undefined;
                validator_address?: Uint8Array | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            }[] | undefined;
        } & {
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
                } & Record<Exclude<keyof I["commit"]["block_id"]["part_set_header"], keyof PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["commit"]["block_id"], keyof BlockID>, never>) | undefined;
            signatures?: ({
                block_id_flag?: BlockIDFlag | undefined;
                validator_address?: Uint8Array | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            }[] & ({
                block_id_flag?: BlockIDFlag | undefined;
                validator_address?: Uint8Array | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            } & {
                block_id_flag?: BlockIDFlag | undefined;
                validator_address?: Uint8Array | undefined;
                timestamp?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["commit"]["signatures"][number]["timestamp"], keyof Timestamp>, never>) | undefined;
                signature?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["commit"]["signatures"][number], keyof CommitSig>, never>)[] & Record<Exclude<keyof I["commit"]["signatures"], keyof {
                block_id_flag?: BlockIDFlag | undefined;
                validator_address?: Uint8Array | undefined;
                timestamp?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                signature?: Uint8Array | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["commit"], keyof Commit>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof SignedHeader>, never>>(object: I): SignedHeader;
};
export declare const LightBlock: {
    encode(message: LightBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LightBlock;
    fromJSON(object: any): LightBlock;
    toJSON(message: LightBlock): unknown;
    fromPartial<I extends {
        signed_header?: {
            header?: {
                version?: {
                    block?: string | undefined;
                    app?: string | undefined;
                } | undefined;
                chain_id?: string | undefined;
                height?: string | undefined;
                time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                last_block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                last_commit_hash?: Uint8Array | undefined;
                data_hash?: Uint8Array | undefined;
                validators_hash?: Uint8Array | undefined;
                next_validators_hash?: Uint8Array | undefined;
                consensus_hash?: Uint8Array | undefined;
                app_hash?: Uint8Array | undefined;
                last_results_hash?: Uint8Array | undefined;
                evidence_hash?: Uint8Array | undefined;
                proposer_address?: Uint8Array | undefined;
                encrypted_random?: {
                    random?: Uint8Array | undefined;
                    proof?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            commit?: {
                height?: string | undefined;
                round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    block_id_flag?: BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        validator_set?: {
            validators?: {
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            }[] | undefined;
            proposer?: {
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } | undefined;
            total_voting_power?: string | undefined;
        } | undefined;
    } & {
        signed_header?: ({
            header?: {
                version?: {
                    block?: string | undefined;
                    app?: string | undefined;
                } | undefined;
                chain_id?: string | undefined;
                height?: string | undefined;
                time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                last_block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                last_commit_hash?: Uint8Array | undefined;
                data_hash?: Uint8Array | undefined;
                validators_hash?: Uint8Array | undefined;
                next_validators_hash?: Uint8Array | undefined;
                consensus_hash?: Uint8Array | undefined;
                app_hash?: Uint8Array | undefined;
                last_results_hash?: Uint8Array | undefined;
                evidence_hash?: Uint8Array | undefined;
                proposer_address?: Uint8Array | undefined;
                encrypted_random?: {
                    random?: Uint8Array | undefined;
                    proof?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            commit?: {
                height?: string | undefined;
                round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    block_id_flag?: BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            header?: ({
                version?: {
                    block?: string | undefined;
                    app?: string | undefined;
                } | undefined;
                chain_id?: string | undefined;
                height?: string | undefined;
                time?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                last_block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                last_commit_hash?: Uint8Array | undefined;
                data_hash?: Uint8Array | undefined;
                validators_hash?: Uint8Array | undefined;
                next_validators_hash?: Uint8Array | undefined;
                consensus_hash?: Uint8Array | undefined;
                app_hash?: Uint8Array | undefined;
                last_results_hash?: Uint8Array | undefined;
                evidence_hash?: Uint8Array | undefined;
                proposer_address?: Uint8Array | undefined;
                encrypted_random?: {
                    random?: Uint8Array | undefined;
                    proof?: Uint8Array | undefined;
                } | undefined;
            } & {
                version?: ({
                    block?: string | undefined;
                    app?: string | undefined;
                } & {
                    block?: string | undefined;
                    app?: string | undefined;
                } & Record<Exclude<keyof I["signed_header"]["header"]["version"], keyof Consensus>, never>) | undefined;
                chain_id?: string | undefined;
                height?: string | undefined;
                time?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["signed_header"]["header"]["time"], keyof Timestamp>, never>) | undefined;
                last_block_id?: ({
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
                    } & Record<Exclude<keyof I["signed_header"]["header"]["last_block_id"]["part_set_header"], keyof PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["signed_header"]["header"]["last_block_id"], keyof BlockID>, never>) | undefined;
                last_commit_hash?: Uint8Array | undefined;
                data_hash?: Uint8Array | undefined;
                validators_hash?: Uint8Array | undefined;
                next_validators_hash?: Uint8Array | undefined;
                consensus_hash?: Uint8Array | undefined;
                app_hash?: Uint8Array | undefined;
                last_results_hash?: Uint8Array | undefined;
                evidence_hash?: Uint8Array | undefined;
                proposer_address?: Uint8Array | undefined;
                encrypted_random?: ({
                    random?: Uint8Array | undefined;
                    proof?: Uint8Array | undefined;
                } & {
                    random?: Uint8Array | undefined;
                    proof?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["signed_header"]["header"]["encrypted_random"], keyof EncryptedRandom>, never>) | undefined;
            } & Record<Exclude<keyof I["signed_header"]["header"], keyof Header>, never>) | undefined;
            commit?: ({
                height?: string | undefined;
                round?: number | undefined;
                block_id?: {
                    hash?: Uint8Array | undefined;
                    part_set_header?: {
                        total?: number | undefined;
                        hash?: Uint8Array | undefined;
                    } | undefined;
                } | undefined;
                signatures?: {
                    block_id_flag?: BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                }[] | undefined;
            } & {
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
                    } & Record<Exclude<keyof I["signed_header"]["commit"]["block_id"]["part_set_header"], keyof PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["signed_header"]["commit"]["block_id"], keyof BlockID>, never>) | undefined;
                signatures?: ({
                    block_id_flag?: BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                }[] & ({
                    block_id_flag?: BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                } & {
                    block_id_flag?: BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: ({
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["signed_header"]["commit"]["signatures"][number]["timestamp"], keyof Timestamp>, never>) | undefined;
                    signature?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["signed_header"]["commit"]["signatures"][number], keyof CommitSig>, never>)[] & Record<Exclude<keyof I["signed_header"]["commit"]["signatures"], keyof {
                    block_id_flag?: BlockIDFlag | undefined;
                    validator_address?: Uint8Array | undefined;
                    timestamp?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                    signature?: Uint8Array | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["signed_header"]["commit"], keyof Commit>, never>) | undefined;
        } & Record<Exclude<keyof I["signed_header"], keyof SignedHeader>, never>) | undefined;
        validator_set?: ({
            validators?: {
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            }[] | undefined;
            proposer?: {
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } | undefined;
            total_voting_power?: string | undefined;
        } & {
            validators?: ({
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            }[] & ({
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & {
                address?: Uint8Array | undefined;
                pub_key?: ({
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["validator_set"]["validators"][number]["pub_key"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & Record<Exclude<keyof I["validator_set"]["validators"][number], keyof import("./validator").Validator>, never>)[] & Record<Exclude<keyof I["validator_set"]["validators"], keyof {
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            }[]>, never>) | undefined;
            proposer?: ({
                address?: Uint8Array | undefined;
                pub_key?: {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & {
                address?: Uint8Array | undefined;
                pub_key?: ({
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & {
                    ed25519?: Uint8Array | undefined;
                    secp256k1?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["validator_set"]["proposer"]["pub_key"], keyof import("../crypto/keys").PublicKey>, never>) | undefined;
                voting_power?: string | undefined;
                proposer_priority?: string | undefined;
            } & Record<Exclude<keyof I["validator_set"]["proposer"], keyof import("./validator").Validator>, never>) | undefined;
            total_voting_power?: string | undefined;
        } & Record<Exclude<keyof I["validator_set"], keyof ValidatorSet>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof LightBlock>, never>>(object: I): LightBlock;
};
export declare const BlockMeta: {
    encode(message: BlockMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BlockMeta;
    fromJSON(object: any): BlockMeta;
    toJSON(message: BlockMeta): unknown;
    fromPartial<I extends {
        block_id?: {
            hash?: Uint8Array | undefined;
            part_set_header?: {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        block_size?: string | undefined;
        header?: {
            version?: {
                block?: string | undefined;
                app?: string | undefined;
            } | undefined;
            chain_id?: string | undefined;
            height?: string | undefined;
            time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            last_block_id?: {
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            last_commit_hash?: Uint8Array | undefined;
            data_hash?: Uint8Array | undefined;
            validators_hash?: Uint8Array | undefined;
            next_validators_hash?: Uint8Array | undefined;
            consensus_hash?: Uint8Array | undefined;
            app_hash?: Uint8Array | undefined;
            last_results_hash?: Uint8Array | undefined;
            evidence_hash?: Uint8Array | undefined;
            proposer_address?: Uint8Array | undefined;
            encrypted_random?: {
                random?: Uint8Array | undefined;
                proof?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        num_txs?: string | undefined;
    } & {
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
            } & Record<Exclude<keyof I["block_id"]["part_set_header"], keyof PartSetHeader>, never>) | undefined;
        } & Record<Exclude<keyof I["block_id"], keyof BlockID>, never>) | undefined;
        block_size?: string | undefined;
        header?: ({
            version?: {
                block?: string | undefined;
                app?: string | undefined;
            } | undefined;
            chain_id?: string | undefined;
            height?: string | undefined;
            time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            last_block_id?: {
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            last_commit_hash?: Uint8Array | undefined;
            data_hash?: Uint8Array | undefined;
            validators_hash?: Uint8Array | undefined;
            next_validators_hash?: Uint8Array | undefined;
            consensus_hash?: Uint8Array | undefined;
            app_hash?: Uint8Array | undefined;
            last_results_hash?: Uint8Array | undefined;
            evidence_hash?: Uint8Array | undefined;
            proposer_address?: Uint8Array | undefined;
            encrypted_random?: {
                random?: Uint8Array | undefined;
                proof?: Uint8Array | undefined;
            } | undefined;
        } & {
            version?: ({
                block?: string | undefined;
                app?: string | undefined;
            } & {
                block?: string | undefined;
                app?: string | undefined;
            } & Record<Exclude<keyof I["header"]["version"], keyof Consensus>, never>) | undefined;
            chain_id?: string | undefined;
            height?: string | undefined;
            time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["header"]["time"], keyof Timestamp>, never>) | undefined;
            last_block_id?: ({
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
                } & Record<Exclude<keyof I["header"]["last_block_id"]["part_set_header"], keyof PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["header"]["last_block_id"], keyof BlockID>, never>) | undefined;
            last_commit_hash?: Uint8Array | undefined;
            data_hash?: Uint8Array | undefined;
            validators_hash?: Uint8Array | undefined;
            next_validators_hash?: Uint8Array | undefined;
            consensus_hash?: Uint8Array | undefined;
            app_hash?: Uint8Array | undefined;
            last_results_hash?: Uint8Array | undefined;
            evidence_hash?: Uint8Array | undefined;
            proposer_address?: Uint8Array | undefined;
            encrypted_random?: ({
                random?: Uint8Array | undefined;
                proof?: Uint8Array | undefined;
            } & {
                random?: Uint8Array | undefined;
                proof?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["header"]["encrypted_random"], keyof EncryptedRandom>, never>) | undefined;
        } & Record<Exclude<keyof I["header"], keyof Header>, never>) | undefined;
        num_txs?: string | undefined;
    } & Record<Exclude<keyof I, keyof BlockMeta>, never>>(object: I): BlockMeta;
};
export declare const TxProof: {
    encode(message: TxProof, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TxProof;
    fromJSON(object: any): TxProof;
    toJSON(message: TxProof): unknown;
    fromPartial<I extends {
        root_hash?: Uint8Array | undefined;
        data?: Uint8Array | undefined;
        proof?: {
            total?: string | undefined;
            index?: string | undefined;
            leaf_hash?: Uint8Array | undefined;
            aunts?: Uint8Array[] | undefined;
        } | undefined;
    } & {
        root_hash?: Uint8Array | undefined;
        data?: Uint8Array | undefined;
        proof?: ({
            total?: string | undefined;
            index?: string | undefined;
            leaf_hash?: Uint8Array | undefined;
            aunts?: Uint8Array[] | undefined;
        } & {
            total?: string | undefined;
            index?: string | undefined;
            leaf_hash?: Uint8Array | undefined;
            aunts?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["proof"]["aunts"], keyof Uint8Array[]>, never>) | undefined;
        } & Record<Exclude<keyof I["proof"], keyof Proof>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof TxProof>, never>>(object: I): TxProof;
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