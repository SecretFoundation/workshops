import * as IbcCoreCommitmentV1Commitment from "../../commitment/v1/commitment.pb";
export declare enum State {
    STATE_UNINITIALIZED_UNSPECIFIED = "STATE_UNINITIALIZED_UNSPECIFIED",
    STATE_INIT = "STATE_INIT",
    STATE_TRYOPEN = "STATE_TRYOPEN",
    STATE_OPEN = "STATE_OPEN"
}
export declare type ConnectionEnd = {
    client_id?: string;
    versions?: Version[];
    state?: State;
    counterparty?: Counterparty;
    delay_period?: string;
};
export declare type IdentifiedConnection = {
    id?: string;
    client_id?: string;
    versions?: Version[];
    state?: State;
    counterparty?: Counterparty;
    delay_period?: string;
};
export declare type Counterparty = {
    client_id?: string;
    connection_id?: string;
    prefix?: IbcCoreCommitmentV1Commitment.MerklePrefix;
};
export declare type ClientPaths = {
    paths?: string[];
};
export declare type ConnectionPaths = {
    client_id?: string;
    paths?: string[];
};
export declare type Version = {
    identifier?: string;
    features?: string[];
};
export declare type Params = {
    max_expected_time_per_block?: string;
};
//# sourceMappingURL=connection.pb.d.ts.map