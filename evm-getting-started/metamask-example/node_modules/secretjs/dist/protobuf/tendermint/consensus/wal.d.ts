import * as _m0 from "protobufjs/minimal";
import { Message } from "./types";
import { Duration } from "../../google/protobuf/duration";
import { Timestamp } from "../../google/protobuf/timestamp";
import { EventDataRoundState } from "../types/events";
export declare const protobufPackage = "tendermint.consensus";
/** MsgInfo are msgs from the reactor which may update the state */
export interface MsgInfo {
    msg?: Message;
    peer_id: string;
}
/** TimeoutInfo internally generated messages which may update the state */
export interface TimeoutInfo {
    duration?: Duration;
    height: string;
    round: number;
    step: number;
}
/**
 * EndHeight marks the end of the given height inside WAL.
 * @internal used by scripts/wal2json util.
 */
export interface EndHeight {
    height: string;
}
export interface WALMessage {
    event_data_round_state?: EventDataRoundState | undefined;
    msg_info?: MsgInfo | undefined;
    timeout_info?: TimeoutInfo | undefined;
    end_height?: EndHeight | undefined;
}
/** TimedWALMessage wraps WALMessage and adds Time for debugging purposes. */
export interface TimedWALMessage {
    time?: Timestamp;
    msg?: WALMessage;
}
export declare const MsgInfo: {
    encode(message: MsgInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgInfo;
    fromJSON(object: any): MsgInfo;
    toJSON(message: MsgInfo): unknown;
    fromPartial<I extends {
        msg?: {
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
            } | undefined;
            has_vote?: {
                height?: string | undefined;
                round?: number | undefined;
                type?: import("../types/types").SignedMsgType | undefined;
                index?: number | undefined;
            } | undefined;
            vote_set_maj23?: {
                height?: string | undefined;
                round?: number | undefined;
                type?: import("../types/types").SignedMsgType | undefined;
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
                type?: import("../types/types").SignedMsgType | undefined;
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
        } | undefined;
        peer_id?: string | undefined;
    } & {
        msg?: ({
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
            } | undefined;
            has_vote?: {
                height?: string | undefined;
                round?: number | undefined;
                type?: import("../types/types").SignedMsgType | undefined;
                index?: number | undefined;
            } | undefined;
            vote_set_maj23?: {
                height?: string | undefined;
                round?: number | undefined;
                type?: import("../types/types").SignedMsgType | undefined;
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
                type?: import("../types/types").SignedMsgType | undefined;
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
            } & Record<Exclude<keyof I["msg"]["new_round_step"], keyof import("./types").NewRoundStep>, never>) | undefined;
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
                } & Record<Exclude<keyof I["msg"]["new_valid_block"]["block_part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
                block_parts?: ({
                    bits?: string | undefined;
                    elems?: string[] | undefined;
                } & {
                    bits?: string | undefined;
                    elems?: (string[] & string[] & Record<Exclude<keyof I["msg"]["new_valid_block"]["block_parts"]["elems"], keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["msg"]["new_valid_block"]["block_parts"], keyof import("../libs/bits/types").BitArray>, never>) | undefined;
                is_commit?: boolean | undefined;
            } & Record<Exclude<keyof I["msg"]["new_valid_block"], keyof import("./types").NewValidBlock>, never>) | undefined;
            proposal?: ({
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
                        } & Record<Exclude<keyof I["msg"]["proposal"]["proposal"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
                    } & Record<Exclude<keyof I["msg"]["proposal"]["proposal"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
                    timestamp?: ({
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["msg"]["proposal"]["proposal"]["timestamp"], keyof Timestamp>, never>) | undefined;
                    signature?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["msg"]["proposal"]["proposal"], keyof import("../types/types").Proposal>, never>) | undefined;
            } & Record<Exclude<keyof I["msg"]["proposal"], "proposal">, never>) | undefined;
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
                    elems?: (string[] & string[] & Record<Exclude<keyof I["msg"]["proposal_pol"]["proposal_pol"]["elems"], keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["msg"]["proposal_pol"]["proposal_pol"], keyof import("../libs/bits/types").BitArray>, never>) | undefined;
            } & Record<Exclude<keyof I["msg"]["proposal_pol"], keyof import("./types").ProposalPOL>, never>) | undefined;
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
                        aunts?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["msg"]["block_part"]["part"]["proof"]["aunts"], keyof Uint8Array[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["msg"]["block_part"]["part"]["proof"], keyof import("../crypto/proof").Proof>, never>) | undefined;
                } & Record<Exclude<keyof I["msg"]["block_part"]["part"], keyof import("../types/types").Part>, never>) | undefined;
            } & Record<Exclude<keyof I["msg"]["block_part"], keyof import("./types").BlockPart>, never>) | undefined;
            vote?: ({
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
                        } & Record<Exclude<keyof I["msg"]["vote"]["vote"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
                    } & Record<Exclude<keyof I["msg"]["vote"]["vote"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
                    timestamp?: ({
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I["msg"]["vote"]["vote"]["timestamp"], keyof Timestamp>, never>) | undefined;
                    validator_address?: Uint8Array | undefined;
                    validator_index?: number | undefined;
                    signature?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["msg"]["vote"]["vote"], keyof import("../types/types").Vote>, never>) | undefined;
            } & Record<Exclude<keyof I["msg"]["vote"], "vote">, never>) | undefined;
            has_vote?: ({
                height?: string | undefined;
                round?: number | undefined;
                type?: import("../types/types").SignedMsgType | undefined;
                index?: number | undefined;
            } & {
                height?: string | undefined;
                round?: number | undefined;
                type?: import("../types/types").SignedMsgType | undefined;
                index?: number | undefined;
            } & Record<Exclude<keyof I["msg"]["has_vote"], keyof import("./types").HasVote>, never>) | undefined;
            vote_set_maj23?: ({
                height?: string | undefined;
                round?: number | undefined;
                type?: import("../types/types").SignedMsgType | undefined;
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
                type?: import("../types/types").SignedMsgType | undefined;
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
                    } & Record<Exclude<keyof I["msg"]["vote_set_maj23"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["msg"]["vote_set_maj23"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
            } & Record<Exclude<keyof I["msg"]["vote_set_maj23"], keyof import("./types").VoteSetMaj23>, never>) | undefined;
            vote_set_bits?: ({
                height?: string | undefined;
                round?: number | undefined;
                type?: import("../types/types").SignedMsgType | undefined;
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
                type?: import("../types/types").SignedMsgType | undefined;
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
                    } & Record<Exclude<keyof I["msg"]["vote_set_bits"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
                } & Record<Exclude<keyof I["msg"]["vote_set_bits"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
                votes?: ({
                    bits?: string | undefined;
                    elems?: string[] | undefined;
                } & {
                    bits?: string | undefined;
                    elems?: (string[] & string[] & Record<Exclude<keyof I["msg"]["vote_set_bits"]["votes"]["elems"], keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["msg"]["vote_set_bits"]["votes"], keyof import("../libs/bits/types").BitArray>, never>) | undefined;
            } & Record<Exclude<keyof I["msg"]["vote_set_bits"], keyof import("./types").VoteSetBits>, never>) | undefined;
        } & Record<Exclude<keyof I["msg"], keyof Message>, never>) | undefined;
        peer_id?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgInfo>, never>>(object: I): MsgInfo;
};
export declare const TimeoutInfo: {
    encode(message: TimeoutInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TimeoutInfo;
    fromJSON(object: any): TimeoutInfo;
    toJSON(message: TimeoutInfo): unknown;
    fromPartial<I extends {
        duration?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
        height?: string | undefined;
        round?: number | undefined;
        step?: number | undefined;
    } & {
        duration?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["duration"], keyof Duration>, never>) | undefined;
        height?: string | undefined;
        round?: number | undefined;
        step?: number | undefined;
    } & Record<Exclude<keyof I, keyof TimeoutInfo>, never>>(object: I): TimeoutInfo;
};
export declare const EndHeight: {
    encode(message: EndHeight, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EndHeight;
    fromJSON(object: any): EndHeight;
    toJSON(message: EndHeight): unknown;
    fromPartial<I extends {
        height?: string | undefined;
    } & {
        height?: string | undefined;
    } & Record<Exclude<keyof I, "height">, never>>(object: I): EndHeight;
};
export declare const WALMessage: {
    encode(message: WALMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): WALMessage;
    fromJSON(object: any): WALMessage;
    toJSON(message: WALMessage): unknown;
    fromPartial<I extends {
        event_data_round_state?: {
            height?: string | undefined;
            round?: number | undefined;
            step?: string | undefined;
        } | undefined;
        msg_info?: {
            msg?: {
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
                } | undefined;
                has_vote?: {
                    height?: string | undefined;
                    round?: number | undefined;
                    type?: import("../types/types").SignedMsgType | undefined;
                    index?: number | undefined;
                } | undefined;
                vote_set_maj23?: {
                    height?: string | undefined;
                    round?: number | undefined;
                    type?: import("../types/types").SignedMsgType | undefined;
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
                    type?: import("../types/types").SignedMsgType | undefined;
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
            } | undefined;
            peer_id?: string | undefined;
        } | undefined;
        timeout_info?: {
            duration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            height?: string | undefined;
            round?: number | undefined;
            step?: number | undefined;
        } | undefined;
        end_height?: {
            height?: string | undefined;
        } | undefined;
    } & {
        event_data_round_state?: ({
            height?: string | undefined;
            round?: number | undefined;
            step?: string | undefined;
        } & {
            height?: string | undefined;
            round?: number | undefined;
            step?: string | undefined;
        } & Record<Exclude<keyof I["event_data_round_state"], keyof EventDataRoundState>, never>) | undefined;
        msg_info?: ({
            msg?: {
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
                } | undefined;
                has_vote?: {
                    height?: string | undefined;
                    round?: number | undefined;
                    type?: import("../types/types").SignedMsgType | undefined;
                    index?: number | undefined;
                } | undefined;
                vote_set_maj23?: {
                    height?: string | undefined;
                    round?: number | undefined;
                    type?: import("../types/types").SignedMsgType | undefined;
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
                    type?: import("../types/types").SignedMsgType | undefined;
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
            } | undefined;
            peer_id?: string | undefined;
        } & {
            msg?: ({
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
                } | undefined;
                has_vote?: {
                    height?: string | undefined;
                    round?: number | undefined;
                    type?: import("../types/types").SignedMsgType | undefined;
                    index?: number | undefined;
                } | undefined;
                vote_set_maj23?: {
                    height?: string | undefined;
                    round?: number | undefined;
                    type?: import("../types/types").SignedMsgType | undefined;
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
                    type?: import("../types/types").SignedMsgType | undefined;
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
                } & Record<Exclude<keyof I["msg_info"]["msg"]["new_round_step"], keyof import("./types").NewRoundStep>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["msg_info"]["msg"]["new_valid_block"]["block_part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
                    block_parts?: ({
                        bits?: string | undefined;
                        elems?: string[] | undefined;
                    } & {
                        bits?: string | undefined;
                        elems?: (string[] & string[] & Record<Exclude<keyof I["msg_info"]["msg"]["new_valid_block"]["block_parts"]["elems"], keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["msg_info"]["msg"]["new_valid_block"]["block_parts"], keyof import("../libs/bits/types").BitArray>, never>) | undefined;
                    is_commit?: boolean | undefined;
                } & Record<Exclude<keyof I["msg_info"]["msg"]["new_valid_block"], keyof import("./types").NewValidBlock>, never>) | undefined;
                proposal?: ({
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
                            } & Record<Exclude<keyof I["msg_info"]["msg"]["proposal"]["proposal"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
                        } & Record<Exclude<keyof I["msg_info"]["msg"]["proposal"]["proposal"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
                        timestamp?: ({
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["msg_info"]["msg"]["proposal"]["proposal"]["timestamp"], keyof Timestamp>, never>) | undefined;
                        signature?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["msg_info"]["msg"]["proposal"]["proposal"], keyof import("../types/types").Proposal>, never>) | undefined;
                } & Record<Exclude<keyof I["msg_info"]["msg"]["proposal"], "proposal">, never>) | undefined;
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
                        elems?: (string[] & string[] & Record<Exclude<keyof I["msg_info"]["msg"]["proposal_pol"]["proposal_pol"]["elems"], keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["msg_info"]["msg"]["proposal_pol"]["proposal_pol"], keyof import("../libs/bits/types").BitArray>, never>) | undefined;
                } & Record<Exclude<keyof I["msg_info"]["msg"]["proposal_pol"], keyof import("./types").ProposalPOL>, never>) | undefined;
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
                            aunts?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["msg_info"]["msg"]["block_part"]["part"]["proof"]["aunts"], keyof Uint8Array[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["msg_info"]["msg"]["block_part"]["part"]["proof"], keyof import("../crypto/proof").Proof>, never>) | undefined;
                    } & Record<Exclude<keyof I["msg_info"]["msg"]["block_part"]["part"], keyof import("../types/types").Part>, never>) | undefined;
                } & Record<Exclude<keyof I["msg_info"]["msg"]["block_part"], keyof import("./types").BlockPart>, never>) | undefined;
                vote?: ({
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
                            } & Record<Exclude<keyof I["msg_info"]["msg"]["vote"]["vote"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
                        } & Record<Exclude<keyof I["msg_info"]["msg"]["vote"]["vote"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
                        timestamp?: ({
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["msg_info"]["msg"]["vote"]["vote"]["timestamp"], keyof Timestamp>, never>) | undefined;
                        validator_address?: Uint8Array | undefined;
                        validator_index?: number | undefined;
                        signature?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["msg_info"]["msg"]["vote"]["vote"], keyof import("../types/types").Vote>, never>) | undefined;
                } & Record<Exclude<keyof I["msg_info"]["msg"]["vote"], "vote">, never>) | undefined;
                has_vote?: ({
                    height?: string | undefined;
                    round?: number | undefined;
                    type?: import("../types/types").SignedMsgType | undefined;
                    index?: number | undefined;
                } & {
                    height?: string | undefined;
                    round?: number | undefined;
                    type?: import("../types/types").SignedMsgType | undefined;
                    index?: number | undefined;
                } & Record<Exclude<keyof I["msg_info"]["msg"]["has_vote"], keyof import("./types").HasVote>, never>) | undefined;
                vote_set_maj23?: ({
                    height?: string | undefined;
                    round?: number | undefined;
                    type?: import("../types/types").SignedMsgType | undefined;
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
                    type?: import("../types/types").SignedMsgType | undefined;
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
                        } & Record<Exclude<keyof I["msg_info"]["msg"]["vote_set_maj23"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
                    } & Record<Exclude<keyof I["msg_info"]["msg"]["vote_set_maj23"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
                } & Record<Exclude<keyof I["msg_info"]["msg"]["vote_set_maj23"], keyof import("./types").VoteSetMaj23>, never>) | undefined;
                vote_set_bits?: ({
                    height?: string | undefined;
                    round?: number | undefined;
                    type?: import("../types/types").SignedMsgType | undefined;
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
                    type?: import("../types/types").SignedMsgType | undefined;
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
                        } & Record<Exclude<keyof I["msg_info"]["msg"]["vote_set_bits"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
                    } & Record<Exclude<keyof I["msg_info"]["msg"]["vote_set_bits"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
                    votes?: ({
                        bits?: string | undefined;
                        elems?: string[] | undefined;
                    } & {
                        bits?: string | undefined;
                        elems?: (string[] & string[] & Record<Exclude<keyof I["msg_info"]["msg"]["vote_set_bits"]["votes"]["elems"], keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["msg_info"]["msg"]["vote_set_bits"]["votes"], keyof import("../libs/bits/types").BitArray>, never>) | undefined;
                } & Record<Exclude<keyof I["msg_info"]["msg"]["vote_set_bits"], keyof import("./types").VoteSetBits>, never>) | undefined;
            } & Record<Exclude<keyof I["msg_info"]["msg"], keyof Message>, never>) | undefined;
            peer_id?: string | undefined;
        } & Record<Exclude<keyof I["msg_info"], keyof MsgInfo>, never>) | undefined;
        timeout_info?: ({
            duration?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            height?: string | undefined;
            round?: number | undefined;
            step?: number | undefined;
        } & {
            duration?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["timeout_info"]["duration"], keyof Duration>, never>) | undefined;
            height?: string | undefined;
            round?: number | undefined;
            step?: number | undefined;
        } & Record<Exclude<keyof I["timeout_info"], keyof TimeoutInfo>, never>) | undefined;
        end_height?: ({
            height?: string | undefined;
        } & {
            height?: string | undefined;
        } & Record<Exclude<keyof I["end_height"], "height">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof WALMessage>, never>>(object: I): WALMessage;
};
export declare const TimedWALMessage: {
    encode(message: TimedWALMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): TimedWALMessage;
    fromJSON(object: any): TimedWALMessage;
    toJSON(message: TimedWALMessage): unknown;
    fromPartial<I extends {
        time?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
        msg?: {
            event_data_round_state?: {
                height?: string | undefined;
                round?: number | undefined;
                step?: string | undefined;
            } | undefined;
            msg_info?: {
                msg?: {
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
                    } | undefined;
                    has_vote?: {
                        height?: string | undefined;
                        round?: number | undefined;
                        type?: import("../types/types").SignedMsgType | undefined;
                        index?: number | undefined;
                    } | undefined;
                    vote_set_maj23?: {
                        height?: string | undefined;
                        round?: number | undefined;
                        type?: import("../types/types").SignedMsgType | undefined;
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
                        type?: import("../types/types").SignedMsgType | undefined;
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
                } | undefined;
                peer_id?: string | undefined;
            } | undefined;
            timeout_info?: {
                duration?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                height?: string | undefined;
                round?: number | undefined;
                step?: number | undefined;
            } | undefined;
            end_height?: {
                height?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        time?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["time"], keyof Timestamp>, never>) | undefined;
        msg?: ({
            event_data_round_state?: {
                height?: string | undefined;
                round?: number | undefined;
                step?: string | undefined;
            } | undefined;
            msg_info?: {
                msg?: {
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
                    } | undefined;
                    has_vote?: {
                        height?: string | undefined;
                        round?: number | undefined;
                        type?: import("../types/types").SignedMsgType | undefined;
                        index?: number | undefined;
                    } | undefined;
                    vote_set_maj23?: {
                        height?: string | undefined;
                        round?: number | undefined;
                        type?: import("../types/types").SignedMsgType | undefined;
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
                        type?: import("../types/types").SignedMsgType | undefined;
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
                } | undefined;
                peer_id?: string | undefined;
            } | undefined;
            timeout_info?: {
                duration?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                height?: string | undefined;
                round?: number | undefined;
                step?: number | undefined;
            } | undefined;
            end_height?: {
                height?: string | undefined;
            } | undefined;
        } & {
            event_data_round_state?: ({
                height?: string | undefined;
                round?: number | undefined;
                step?: string | undefined;
            } & {
                height?: string | undefined;
                round?: number | undefined;
                step?: string | undefined;
            } & Record<Exclude<keyof I["msg"]["event_data_round_state"], keyof EventDataRoundState>, never>) | undefined;
            msg_info?: ({
                msg?: {
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
                    } | undefined;
                    has_vote?: {
                        height?: string | undefined;
                        round?: number | undefined;
                        type?: import("../types/types").SignedMsgType | undefined;
                        index?: number | undefined;
                    } | undefined;
                    vote_set_maj23?: {
                        height?: string | undefined;
                        round?: number | undefined;
                        type?: import("../types/types").SignedMsgType | undefined;
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
                        type?: import("../types/types").SignedMsgType | undefined;
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
                } | undefined;
                peer_id?: string | undefined;
            } & {
                msg?: ({
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
                    } | undefined;
                    has_vote?: {
                        height?: string | undefined;
                        round?: number | undefined;
                        type?: import("../types/types").SignedMsgType | undefined;
                        index?: number | undefined;
                    } | undefined;
                    vote_set_maj23?: {
                        height?: string | undefined;
                        round?: number | undefined;
                        type?: import("../types/types").SignedMsgType | undefined;
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
                        type?: import("../types/types").SignedMsgType | undefined;
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
                    } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["new_round_step"], keyof import("./types").NewRoundStep>, never>) | undefined;
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
                        } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["new_valid_block"]["block_part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
                        block_parts?: ({
                            bits?: string | undefined;
                            elems?: string[] | undefined;
                        } & {
                            bits?: string | undefined;
                            elems?: (string[] & string[] & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["new_valid_block"]["block_parts"]["elems"], keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["new_valid_block"]["block_parts"], keyof import("../libs/bits/types").BitArray>, never>) | undefined;
                        is_commit?: boolean | undefined;
                    } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["new_valid_block"], keyof import("./types").NewValidBlock>, never>) | undefined;
                    proposal?: ({
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
                                } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["proposal"]["proposal"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
                            } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["proposal"]["proposal"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
                            timestamp?: ({
                                seconds?: string | undefined;
                                nanos?: number | undefined;
                            } & {
                                seconds?: string | undefined;
                                nanos?: number | undefined;
                            } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["proposal"]["proposal"]["timestamp"], keyof Timestamp>, never>) | undefined;
                            signature?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["proposal"]["proposal"], keyof import("../types/types").Proposal>, never>) | undefined;
                    } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["proposal"], "proposal">, never>) | undefined;
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
                            elems?: (string[] & string[] & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["proposal_pol"]["proposal_pol"]["elems"], keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["proposal_pol"]["proposal_pol"], keyof import("../libs/bits/types").BitArray>, never>) | undefined;
                    } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["proposal_pol"], keyof import("./types").ProposalPOL>, never>) | undefined;
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
                                aunts?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["block_part"]["part"]["proof"]["aunts"], keyof Uint8Array[]>, never>) | undefined;
                            } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["block_part"]["part"]["proof"], keyof import("../crypto/proof").Proof>, never>) | undefined;
                        } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["block_part"]["part"], keyof import("../types/types").Part>, never>) | undefined;
                    } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["block_part"], keyof import("./types").BlockPart>, never>) | undefined;
                    vote?: ({
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
                                } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["vote"]["vote"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
                            } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["vote"]["vote"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
                            timestamp?: ({
                                seconds?: string | undefined;
                                nanos?: number | undefined;
                            } & {
                                seconds?: string | undefined;
                                nanos?: number | undefined;
                            } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["vote"]["vote"]["timestamp"], keyof Timestamp>, never>) | undefined;
                            validator_address?: Uint8Array | undefined;
                            validator_index?: number | undefined;
                            signature?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["vote"]["vote"], keyof import("../types/types").Vote>, never>) | undefined;
                    } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["vote"], "vote">, never>) | undefined;
                    has_vote?: ({
                        height?: string | undefined;
                        round?: number | undefined;
                        type?: import("../types/types").SignedMsgType | undefined;
                        index?: number | undefined;
                    } & {
                        height?: string | undefined;
                        round?: number | undefined;
                        type?: import("../types/types").SignedMsgType | undefined;
                        index?: number | undefined;
                    } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["has_vote"], keyof import("./types").HasVote>, never>) | undefined;
                    vote_set_maj23?: ({
                        height?: string | undefined;
                        round?: number | undefined;
                        type?: import("../types/types").SignedMsgType | undefined;
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
                        type?: import("../types/types").SignedMsgType | undefined;
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
                            } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["vote_set_maj23"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
                        } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["vote_set_maj23"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
                    } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["vote_set_maj23"], keyof import("./types").VoteSetMaj23>, never>) | undefined;
                    vote_set_bits?: ({
                        height?: string | undefined;
                        round?: number | undefined;
                        type?: import("../types/types").SignedMsgType | undefined;
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
                        type?: import("../types/types").SignedMsgType | undefined;
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
                            } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["vote_set_bits"]["block_id"]["part_set_header"], keyof import("../types/types").PartSetHeader>, never>) | undefined;
                        } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["vote_set_bits"]["block_id"], keyof import("../types/types").BlockID>, never>) | undefined;
                        votes?: ({
                            bits?: string | undefined;
                            elems?: string[] | undefined;
                        } & {
                            bits?: string | undefined;
                            elems?: (string[] & string[] & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["vote_set_bits"]["votes"]["elems"], keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["vote_set_bits"]["votes"], keyof import("../libs/bits/types").BitArray>, never>) | undefined;
                    } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"]["vote_set_bits"], keyof import("./types").VoteSetBits>, never>) | undefined;
                } & Record<Exclude<keyof I["msg"]["msg_info"]["msg"], keyof Message>, never>) | undefined;
                peer_id?: string | undefined;
            } & Record<Exclude<keyof I["msg"]["msg_info"], keyof MsgInfo>, never>) | undefined;
            timeout_info?: ({
                duration?: {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } | undefined;
                height?: string | undefined;
                round?: number | undefined;
                step?: number | undefined;
            } & {
                duration?: ({
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & {
                    seconds?: string | undefined;
                    nanos?: number | undefined;
                } & Record<Exclude<keyof I["msg"]["timeout_info"]["duration"], keyof Duration>, never>) | undefined;
                height?: string | undefined;
                round?: number | undefined;
                step?: number | undefined;
            } & Record<Exclude<keyof I["msg"]["timeout_info"], keyof TimeoutInfo>, never>) | undefined;
            end_height?: ({
                height?: string | undefined;
            } & {
                height?: string | undefined;
            } & Record<Exclude<keyof I["msg"]["end_height"], "height">, never>) | undefined;
        } & Record<Exclude<keyof I["msg"], keyof WALMessage>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof TimedWALMessage>, never>>(object: I): TimedWALMessage;
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
//# sourceMappingURL=wal.d.ts.map