import * as TendermintLibsBitsTypes from "../libs/bits/types.pb";
import * as TendermintTypesTypes from "../types/types.pb";
declare type Absent<T, K extends keyof T> = {
    [k in Exclude<keyof T, K>]?: undefined;
};
declare type OneOf<T> = {
    [k in keyof T]?: undefined;
} | (keyof T extends infer K ? (K extends string & keyof T ? {
    [k in K]: T[K];
} & Absent<T, K> : never) : never);
export declare type NewRoundStep = {
    height?: string;
    round?: number;
    step?: number;
    seconds_since_start_time?: string;
    last_commit_round?: number;
};
export declare type NewValidBlock = {
    height?: string;
    round?: number;
    block_part_set_header?: TendermintTypesTypes.PartSetHeader;
    block_parts?: TendermintLibsBitsTypes.BitArray;
    is_commit?: boolean;
};
export declare type Proposal = {
    proposal?: TendermintTypesTypes.Proposal;
};
export declare type ProposalPOL = {
    height?: string;
    proposal_pol_round?: number;
    proposal_pol?: TendermintLibsBitsTypes.BitArray;
};
export declare type BlockPart = {
    height?: string;
    round?: number;
    part?: TendermintTypesTypes.Part;
};
export declare type Vote = {
    vote?: TendermintTypesTypes.Vote;
};
export declare type HasVote = {
    height?: string;
    round?: number;
    type?: TendermintTypesTypes.SignedMsgType;
    index?: number;
};
export declare type VoteSetMaj23 = {
    height?: string;
    round?: number;
    type?: TendermintTypesTypes.SignedMsgType;
    block_id?: TendermintTypesTypes.BlockID;
};
export declare type VoteSetBits = {
    height?: string;
    round?: number;
    type?: TendermintTypesTypes.SignedMsgType;
    block_id?: TendermintTypesTypes.BlockID;
    votes?: TendermintLibsBitsTypes.BitArray;
};
declare type BaseMessage = {};
export declare type Message = BaseMessage & OneOf<{
    new_round_step: NewRoundStep;
    new_valid_block: NewValidBlock;
    proposal: Proposal;
    proposal_pol: ProposalPOL;
    block_part: BlockPart;
    vote: Vote;
    has_vote: HasVote;
    vote_set_maj23: VoteSetMaj23;
    vote_set_bits: VoteSetBits;
}>;
export {};
//# sourceMappingURL=types.pb.d.ts.map