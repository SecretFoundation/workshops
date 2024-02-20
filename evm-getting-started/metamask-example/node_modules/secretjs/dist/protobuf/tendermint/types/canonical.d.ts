import * as _m0 from "protobufjs/minimal";
import { SignedMsgType } from "./types";
import { Timestamp } from "../../google/protobuf/timestamp";
export declare const protobufPackage = "tendermint.types";
export interface CanonicalBlockID {
    hash: Uint8Array;
    part_set_header?: CanonicalPartSetHeader;
}
export interface CanonicalPartSetHeader {
    total: number;
    hash: Uint8Array;
}
export interface CanonicalProposal {
    /** type alias for byte */
    type: SignedMsgType;
    /** canonicalization requires fixed size encoding here */
    height: string;
    /** canonicalization requires fixed size encoding here */
    round: string;
    pol_round: string;
    block_id?: CanonicalBlockID;
    timestamp?: Timestamp;
    chain_id: string;
}
export interface CanonicalVote {
    /** type alias for byte */
    type: SignedMsgType;
    /** canonicalization requires fixed size encoding here */
    height: string;
    /** canonicalization requires fixed size encoding here */
    round: string;
    block_id?: CanonicalBlockID;
    timestamp?: Timestamp;
    chain_id: string;
}
export declare const CanonicalBlockID: {
    encode(message: CanonicalBlockID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CanonicalBlockID;
    fromJSON(object: any): CanonicalBlockID;
    toJSON(message: CanonicalBlockID): unknown;
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
        } & Record<Exclude<keyof I["part_set_header"], keyof CanonicalPartSetHeader>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof CanonicalBlockID>, never>>(object: I): CanonicalBlockID;
};
export declare const CanonicalPartSetHeader: {
    encode(message: CanonicalPartSetHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CanonicalPartSetHeader;
    fromJSON(object: any): CanonicalPartSetHeader;
    toJSON(message: CanonicalPartSetHeader): unknown;
    fromPartial<I extends {
        total?: number | undefined;
        hash?: Uint8Array | undefined;
    } & {
        total?: number | undefined;
        hash?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof CanonicalPartSetHeader>, never>>(object: I): CanonicalPartSetHeader;
};
export declare const CanonicalProposal: {
    encode(message: CanonicalProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CanonicalProposal;
    fromJSON(object: any): CanonicalProposal;
    toJSON(message: CanonicalProposal): unknown;
    fromPartial<I extends {
        type?: SignedMsgType | undefined;
        height?: string | undefined;
        round?: string | undefined;
        pol_round?: string | undefined;
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
        chain_id?: string | undefined;
    } & {
        type?: SignedMsgType | undefined;
        height?: string | undefined;
        round?: string | undefined;
        pol_round?: string | undefined;
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
            } & Record<Exclude<keyof I["block_id"]["part_set_header"], keyof CanonicalPartSetHeader>, never>) | undefined;
        } & Record<Exclude<keyof I["block_id"], keyof CanonicalBlockID>, never>) | undefined;
        timestamp?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["timestamp"], keyof Timestamp>, never>) | undefined;
        chain_id?: string | undefined;
    } & Record<Exclude<keyof I, keyof CanonicalProposal>, never>>(object: I): CanonicalProposal;
};
export declare const CanonicalVote: {
    encode(message: CanonicalVote, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CanonicalVote;
    fromJSON(object: any): CanonicalVote;
    toJSON(message: CanonicalVote): unknown;
    fromPartial<I extends {
        type?: SignedMsgType | undefined;
        height?: string | undefined;
        round?: string | undefined;
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
        chain_id?: string | undefined;
    } & {
        type?: SignedMsgType | undefined;
        height?: string | undefined;
        round?: string | undefined;
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
            } & Record<Exclude<keyof I["block_id"]["part_set_header"], keyof CanonicalPartSetHeader>, never>) | undefined;
        } & Record<Exclude<keyof I["block_id"], keyof CanonicalBlockID>, never>) | undefined;
        timestamp?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["timestamp"], keyof Timestamp>, never>) | undefined;
        chain_id?: string | undefined;
    } & Record<Exclude<keyof I, keyof CanonicalVote>, never>>(object: I): CanonicalVote;
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
//# sourceMappingURL=canonical.d.ts.map