import * as GoogleProtobufDuration from "../../google/protobuf/duration.pb";
export declare type ConsensusParams = {
    block?: BlockParams;
    evidence?: EvidenceParams;
    validator?: ValidatorParams;
    version?: VersionParams;
};
export declare type BlockParams = {
    max_bytes?: string;
    max_gas?: string;
    time_iota_ms?: string;
};
export declare type EvidenceParams = {
    max_age_num_blocks?: string;
    max_age_duration?: GoogleProtobufDuration.Duration;
    max_bytes?: string;
};
export declare type ValidatorParams = {
    pub_key_types?: string[];
};
export declare type VersionParams = {
    app_version?: string;
};
export declare type HashedParams = {
    block_max_bytes?: string;
    block_max_gas?: string;
};
//# sourceMappingURL=params.pb.d.ts.map