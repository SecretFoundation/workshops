import * as GoogleProtobufTimestamp from "../../google/protobuf/timestamp.pb";
import * as TendermintTypesTypes from "./types.pb";
export declare type CanonicalBlockID = {
    hash?: Uint8Array;
    part_set_header?: CanonicalPartSetHeader;
};
export declare type CanonicalPartSetHeader = {
    total?: number;
    hash?: Uint8Array;
};
export declare type CanonicalProposal = {
    type?: TendermintTypesTypes.SignedMsgType;
    height?: string;
    round?: string;
    pol_round?: string;
    block_id?: CanonicalBlockID;
    timestamp?: GoogleProtobufTimestamp.Timestamp;
    chain_id?: string;
};
export declare type CanonicalVote = {
    type?: TendermintTypesTypes.SignedMsgType;
    height?: string;
    round?: string;
    block_id?: CanonicalBlockID;
    timestamp?: GoogleProtobufTimestamp.Timestamp;
    chain_id?: string;
};
//# sourceMappingURL=canonical.pb.d.ts.map