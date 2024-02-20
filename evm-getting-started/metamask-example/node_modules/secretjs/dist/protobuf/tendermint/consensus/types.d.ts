import * as _m0 from "protobufjs/minimal";
import { PartSetHeader, Proposal as Proposal1, Part, Vote as Vote2, SignedMsgType, BlockID } from "../types/types";
import { BitArray } from "../libs/bits/types";
export declare const protobufPackage = "tendermint.consensus";
/**
 * NewRoundStep is sent for every step taken in the ConsensusState.
 * For every height/round/step transition
 */
export interface NewRoundStep {
    height: string;
    round: number;
    step: number;
    seconds_since_start_time: string;
    last_commit_round: number;
}
/**
 * NewValidBlock is sent when a validator observes a valid block B in some round r,
 * i.e., there is a Proposal for block B and 2/3+ prevotes for the block B in the round r.
 * In case the block is also committed, then IsCommit flag is set to true.
 */
export interface NewValidBlock {
    height: string;
    round: number;
    block_part_set_header?: PartSetHeader;
    block_parts?: BitArray;
    is_commit: boolean;
}
/** Proposal is sent when a new block is proposed. */
export interface Proposal {
    proposal?: Proposal1;
}
/** ProposalPOL is sent when a previous proposal is re-proposed. */
export interface ProposalPOL {
    height: string;
    proposal_pol_round: number;
    proposal_pol?: BitArray;
}
/** BlockPart is sent when gossipping a piece of the proposed block. */
export interface BlockPart {
    height: string;
    round: number;
    part?: Part;
}
/** Vote is sent when voting for a proposal (or lack thereof). */
export interface Vote {
    vote?: Vote2;
}
/** HasVote is sent to indicate that a particular vote has been received. */
export interface HasVote {
    height: string;
    round: number;
    type: SignedMsgType;
    index: number;
}
/** VoteSetMaj23 is sent to indicate that a given BlockID has seen +2/3 votes. */
export interface VoteSetMaj23 {
    height: string;
    round: number;
    type: SignedMsgType;
    block_id?: BlockID;
}
/** VoteSetBits is sent to communicate the bit-array of votes seen for the BlockID. */
export interface VoteSetBits {
    height: string;
    round: number;
    type: SignedMsgType;
    block_id?: BlockID;
    votes?: BitArray;
}
export interface Message {
    new_round_step?: NewRoundStep | undefined;
    new_valid_block?: NewValidBlock | undefined;
    proposal?: Proposal | undefined;
    proposal_pol?: ProposalPOL | undefined;
    block_part?: BlockPart | undefined;
    vote?: Vote | undefined;
    has_vote?: HasVote | undefined;
    vote_set_maj23?: VoteSetMaj23 | undefined;
    vote_set_bits?: VoteSetBits | undefined;
}
export declare const NewRoundStep: {
    encode(message: NewRoundStep, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NewRoundStep;
    fromJSON(object: any): NewRoundStep;
    toJSON(message: NewRoundStep): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        round?: number | undefined;
        step?: number | undefined;
        seconds_since_start_time?: string | undefined;
        last_commit_round?: number | undefined;
    } & {
        height?: string | undefined;
        round?: number | undefined;
        step?: number | undefined;
        seconds_since_start_time?: string | undefined;
        last_commit_round?: number | undefined;
    } & Record<Exclude<keyof I, keyof NewRoundStep>, never>>(object: I): NewRoundStep;
};
export declare const NewValidBlock: {
    encode(message: NewValidBlock, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NewValidBlock;
    fromJSON(object: any): NewValidBlock;
    toJSON(message: NewValidBlock): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        round?: number | undefined;
        block_part_set_header?: {
            total?: number | undefined;
            hash?: Uint8Array | undefined;
        } | undefined;
        block_parts?: {
            bits?: string | undefined;
            elems?: string[] | undefined;
        } | undefined;
        is_commit?: boolean | undefined;
    } & {
        height?: string | undefined;
        round?: number | undefined;
        block_part_set_header?: ({
            total?: number | undefined;
            hash?: Uint8Array | undefined;
        } & {
            total?: number | undefined;
            hash?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["block_part_set_header"], keyof PartSetHeader>, never>) | undefined;
        block_parts?: ({
            bits?: string | undefined;
            elems?: string[] | undefined;
        } & {
            bits?: string | undefined;
            elems?: (string[] & string[] & Record<Exclude<keyof I["block_parts"]["elems"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["block_parts"], keyof BitArray>, never>) | undefined;
        is_commit?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof NewValidBlock>, never>>(object: I): NewValidBlock;
};
export declare const Proposal: {
    encode(message: Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Proposal;
    fromJSON(object: any): Proposal;
    toJSON(message: Proposal): unknown;
    fromPartial<I extends {
        proposal?: {
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
        } | undefined;
    } & {
        proposal?: ({
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
                } & Record<Exclude<keyof I["proposal"]["block_id"]["part_set_header"], keyof PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["proposal"]["block_id"], keyof BlockID>, never>) | undefined;
            timestamp?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["proposal"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            signature?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["proposal"], keyof Proposal1>, never>) | undefined;
    } & Record<Exclude<keyof I, "proposal">, never>>(object: I): Proposal;
};
export declare const ProposalPOL: {
    encode(message: ProposalPOL, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProposalPOL;
    fromJSON(object: any): ProposalPOL;
    toJSON(message: ProposalPOL): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        proposal_pol_round?: number | undefined;
        proposal_pol?: {
            bits?: string | undefined;
            elems?: string[] | undefined;
        } | undefined;
    } & {
        height?: string | undefined;
        proposal_pol_round?: number | undefined;
        proposal_pol?: ({
            bits?: string | undefined;
            elems?: string[] | undefined;
        } & {
            bits?: string | undefined;
            elems?: (string[] & string[] & Record<Exclude<keyof I["proposal_pol"]["elems"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["proposal_pol"], keyof BitArray>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ProposalPOL>, never>>(object: I): ProposalPOL;
};
export declare const BlockPart: {
    encode(message: BlockPart, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): BlockPart;
    fromJSON(object: any): BlockPart;
    toJSON(message: BlockPart): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        round?: number | undefined;
        part?: {
            index?: number | undefined;
            bytes?: Uint8Array | undefined;
            proof?: {
                total?: string | undefined;
                index?: string | undefined;
                leaf_hash?: Uint8Array | undefined;
                aunts?: Uint8Array[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        height?: string | undefined;
        round?: number | undefined;
        part?: ({
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
                aunts?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["part"]["proof"]["aunts"], keyof Uint8Array[]>, never>) | undefined;
            } & Record<Exclude<keyof I["part"]["proof"], keyof import("../crypto/proof").Proof>, never>) | undefined;
        } & Record<Exclude<keyof I["part"], keyof Part>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof BlockPart>, never>>(object: I): BlockPart;
};
export declare const Vote: {
    encode(message: Vote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Vote;
    fromJSON(object: any): Vote;
    toJSON(message: Vote): unknown;
    fromPartial<I extends {
        vote?: {
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
        } | undefined;
    } & {
        vote?: ({
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
                } & Record<Exclude<keyof I["vote"]["block_id"]["part_set_header"], keyof PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["vote"]["block_id"], keyof BlockID>, never>) | undefined;
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
        } & Record<Exclude<keyof I["vote"], keyof Vote2>, never>) | undefined;
    } & Record<Exclude<keyof I, "vote">, never>>(object: I): Vote;
};
export declare const HasVote: {
    encode(message: HasVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HasVote;
    fromJSON(object: any): HasVote;
    toJSON(message: HasVote): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        round?: number | undefined;
        type?: SignedMsgType | undefined;
        index?: number | undefined;
    } & {
        height?: string | undefined;
        round?: number | undefined;
        type?: SignedMsgType | undefined;
        index?: number | undefined;
    } & Record<Exclude<keyof I, keyof HasVote>, never>>(object: I): HasVote;
};
export declare const VoteSetMaj23: {
    encode(message: VoteSetMaj23, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VoteSetMaj23;
    fromJSON(object: any): VoteSetMaj23;
    toJSON(message: VoteSetMaj23): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        round?: number | undefined;
        type?: SignedMsgType | undefined;
        block_id?: {
            hash?: Uint8Array | undefined;
            part_set_header?: {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
    } & {
        height?: string | undefined;
        round?: number | undefined;
        type?: SignedMsgType | undefined;
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
    } & Record<Exclude<keyof I, keyof VoteSetMaj23>, never>>(object: I): VoteSetMaj23;
};
export declare const VoteSetBits: {
    encode(message: VoteSetBits, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VoteSetBits;
    fromJSON(object: any): VoteSetBits;
    toJSON(message: VoteSetBits): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        round?: number | undefined;
        type?: SignedMsgType | undefined;
        block_id?: {
            hash?: Uint8Array | undefined;
            part_set_header?: {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        votes?: {
            bits?: string | undefined;
            elems?: string[] | undefined;
        } | undefined;
    } & {
        height?: string | undefined;
        round?: number | undefined;
        type?: SignedMsgType | undefined;
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
        votes?: ({
            bits?: string | undefined;
            elems?: string[] | undefined;
        } & {
            bits?: string | undefined;
            elems?: (string[] & string[] & Record<Exclude<keyof I["votes"]["elems"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["votes"], keyof BitArray>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof VoteSetBits>, never>>(object: I): VoteSetBits;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial<I extends {
        new_round_step?: {
            height?: string | undefined;
            round?: number | undefined;
            step?: number | undefined;
            seconds_since_start_time?: string | undefined;
            last_commit_round?: number | undefined;
        } | undefined;
        new_valid_block?: {
            height?: string | undefined;
            round?: number | undefined;
            block_part_set_header?: {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
            block_parts?: {
                bits?: string | undefined;
                elems?: string[] | undefined;
            } | undefined;
            is_commit?: boolean | undefined;
        } | undefined;
        proposal?: {
            proposal?: {
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
            } | undefined;
        } | undefined;
        proposal_pol?: {
            height?: string | undefined;
            proposal_pol_round?: number | undefined;
            proposal_pol?: {
                bits?: string | undefined;
                elems?: string[] | undefined;
            } | undefined;
        } | undefined;
        block_part?: {
            height?: string | undefined;
            round?: number | undefined;
            part?: {
                index?: number | undefined;
                bytes?: Uint8Array | undefined;
                proof?: {
                    total?: string | undefined;
                    index?: string | undefined;
                    leaf_hash?: Uint8Array | undefined;
                    aunts?: Uint8Array[] | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        vote?: {
            vote?: {
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
            } | undefined;
        } | undefined;
        has_vote?: {
            height?: string | undefined;
            round?: number | undefined;
            type?: SignedMsgType | undefined;
            index?: number | undefined;
        } | undefined;
        vote_set_maj23?: {
            height?: string | undefined;
            round?: number | undefined;
            type?: SignedMsgType | undefined;
            block_id?: {
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        vote_set_bits?: {
            height?: string | undefined;
            round?: number | undefined;
            type?: SignedMsgType | undefined;
            block_id?: {
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            votes?: {
                bits?: string | undefined;
                elems?: string[] | undefined;
            } | undefined;
        } | undefined;
    } & {
        new_round_step?: ({
            height?: string | undefined;
            round?: number | undefined;
            step?: number | undefined;
            seconds_since_start_time?: string | undefined;
            last_commit_round?: number | undefined;
        } & {
            height?: string | undefined;
            round?: number | undefined;
            step?: number | undefined;
            seconds_since_start_time?: string | undefined;
            last_commit_round?: number | undefined;
        } & Record<Exclude<keyof I["new_round_step"], keyof NewRoundStep>, never>) | undefined;
        new_valid_block?: ({
            height?: string | undefined;
            round?: number | undefined;
            block_part_set_header?: {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } | undefined;
            block_parts?: {
                bits?: string | undefined;
                elems?: string[] | undefined;
            } | undefined;
            is_commit?: boolean | undefined;
        } & {
            height?: string | undefined;
            round?: number | undefined;
            block_part_set_header?: ({
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } & {
                total?: number | undefined;
                hash?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["new_valid_block"]["block_part_set_header"], keyof PartSetHeader>, never>) | undefined;
            block_parts?: ({
                bits?: string | undefined;
                elems?: string[] | undefined;
            } & {
                bits?: string | undefined;
                elems?: (string[] & string[] & Record<Exclude<keyof I["new_valid_block"]["block_parts"]["elems"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["new_valid_block"]["block_parts"], keyof BitArray>, never>) | undefined;
            is_commit?: boolean | undefined;
        } & Record<Exclude<keyof I["new_valid_block"], keyof NewValidBlock>, never>) | undefined;
        proposal?: ({
            proposal?: {
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
            } | undefined;
        } & {
            proposal?: ({
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
                    } & Record<Exclude<keyof I["proposal"]["proposal"]["block_id"]["part_set_header"], keyof PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["proposal"]["proposal"]["block_id"], keyof BlockID>, never>) | undefined;
                timestamp?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["proposal"]["proposal"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                signature?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["proposal"]["proposal"], keyof Proposal1>, never>) | undefined;
        } & Record<Exclude<keyof I["proposal"], "proposal">, never>) | undefined;
        proposal_pol?: ({
            height?: string | undefined;
            proposal_pol_round?: number | undefined;
            proposal_pol?: {
                bits?: string | undefined;
                elems?: string[] | undefined;
            } | undefined;
        } & {
            height?: string | undefined;
            proposal_pol_round?: number | undefined;
            proposal_pol?: ({
                bits?: string | undefined;
                elems?: string[] | undefined;
            } & {
                bits?: string | undefined;
                elems?: (string[] & string[] & Record<Exclude<keyof I["proposal_pol"]["proposal_pol"]["elems"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["proposal_pol"]["proposal_pol"], keyof BitArray>, never>) | undefined;
        } & Record<Exclude<keyof I["proposal_pol"], keyof ProposalPOL>, never>) | undefined;
        block_part?: ({
            height?: string | undefined;
            round?: number | undefined;
            part?: {
                index?: number | undefined;
                bytes?: Uint8Array | undefined;
                proof?: {
                    total?: string | undefined;
                    index?: string | undefined;
                    leaf_hash?: Uint8Array | undefined;
                    aunts?: Uint8Array[] | undefined;
                } | undefined;
            } | undefined;
        } & {
            height?: string | undefined;
            round?: number | undefined;
            part?: ({
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
                    aunts?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["block_part"]["part"]["proof"]["aunts"], keyof Uint8Array[]>, never>) | undefined;
                } & Record<Exclude<keyof I["block_part"]["part"]["proof"], keyof import("../crypto/proof").Proof>, never>) | undefined;
            } & Record<Exclude<keyof I["block_part"]["part"], keyof Part>, never>) | undefined;
        } & Record<Exclude<keyof I["block_part"], keyof BlockPart>, never>) | undefined;
        vote?: ({
            vote?: {
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
            } | undefined;
        } & {
            vote?: ({
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
                    } & Record<Exclude<keyof I["vote"]["vote"]["block_id"]["part_set_header"], keyof PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["vote"]["vote"]["block_id"], keyof BlockID>, never>) | undefined;
                timestamp?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["vote"]["vote"]["timestamp"], keyof import("../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
                validator_address?: Uint8Array | undefined;
                validator_index?: number | undefined;
                signature?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["vote"]["vote"], keyof Vote2>, never>) | undefined;
        } & Record<Exclude<keyof I["vote"], "vote">, never>) | undefined;
        has_vote?: ({
            height?: string | undefined;
            round?: number | undefined;
            type?: SignedMsgType | undefined;
            index?: number | undefined;
        } & {
            height?: string | undefined;
            round?: number | undefined;
            type?: SignedMsgType | undefined;
            index?: number | undefined;
        } & Record<Exclude<keyof I["has_vote"], keyof HasVote>, never>) | undefined;
        vote_set_maj23?: ({
            height?: string | undefined;
            round?: number | undefined;
            type?: SignedMsgType | undefined;
            block_id?: {
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
        } & {
            height?: string | undefined;
            round?: number | undefined;
            type?: SignedMsgType | undefined;
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
                } & Record<Exclude<keyof I["vote_set_maj23"]["block_id"]["part_set_header"], keyof PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["vote_set_maj23"]["block_id"], keyof BlockID>, never>) | undefined;
        } & Record<Exclude<keyof I["vote_set_maj23"], keyof VoteSetMaj23>, never>) | undefined;
        vote_set_bits?: ({
            height?: string | undefined;
            round?: number | undefined;
            type?: SignedMsgType | undefined;
            block_id?: {
                hash?: Uint8Array | undefined;
                part_set_header?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            votes?: {
                bits?: string | undefined;
                elems?: string[] | undefined;
            } | undefined;
        } & {
            height?: string | undefined;
            round?: number | undefined;
            type?: SignedMsgType | undefined;
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
                } & Record<Exclude<keyof I["vote_set_bits"]["block_id"]["part_set_header"], keyof PartSetHeader>, never>) | undefined;
            } & Record<Exclude<keyof I["vote_set_bits"]["block_id"], keyof BlockID>, never>) | undefined;
            votes?: ({
                bits?: string | undefined;
                elems?: string[] | undefined;
            } & {
                bits?: string | undefined;
                elems?: (string[] & string[] & Record<Exclude<keyof I["vote_set_bits"]["votes"]["elems"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["vote_set_bits"]["votes"], keyof BitArray>, never>) | undefined;
        } & Record<Exclude<keyof I["vote_set_bits"], keyof VoteSetBits>, never>) | undefined;
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