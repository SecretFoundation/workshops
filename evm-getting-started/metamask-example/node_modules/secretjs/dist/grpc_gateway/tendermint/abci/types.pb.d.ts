import * as fm from "../../fetch.pb";
import * as GoogleProtobufTimestamp from "../../google/protobuf/timestamp.pb";
import * as TendermintCryptoKeys from "../crypto/keys.pb";
import * as TendermintCryptoProof from "../crypto/proof.pb";
import * as TendermintTypesParams from "../types/params.pb";
import * as TendermintTypesTypes from "../types/types.pb";
declare type Absent<T, K extends keyof T> = {
    [k in Exclude<keyof T, K>]?: undefined;
};
declare type OneOf<T> = {
    [k in keyof T]?: undefined;
} | (keyof T extends infer K ? (K extends string & keyof T ? {
    [k in K]: T[K];
} & Absent<T, K> : never) : never);
export declare enum CheckTxType {
    NEW = "NEW",
    RECHECK = "RECHECK"
}
export declare enum EvidenceType {
    UNKNOWN = "UNKNOWN",
    DUPLICATE_VOTE = "DUPLICATE_VOTE",
    LIGHT_CLIENT_ATTACK = "LIGHT_CLIENT_ATTACK"
}
export declare enum ResponseOfferSnapshotResult {
    UNKNOWN = "UNKNOWN",
    ACCEPT = "ACCEPT",
    ABORT = "ABORT",
    REJECT = "REJECT",
    REJECT_FORMAT = "REJECT_FORMAT",
    REJECT_SENDER = "REJECT_SENDER"
}
export declare enum ResponseApplySnapshotChunkResult {
    UNKNOWN = "UNKNOWN",
    ACCEPT = "ACCEPT",
    ABORT = "ABORT",
    RETRY = "RETRY",
    RETRY_SNAPSHOT = "RETRY_SNAPSHOT",
    REJECT_SNAPSHOT = "REJECT_SNAPSHOT"
}
declare type BaseRequest = {};
export declare type Request = BaseRequest & OneOf<{
    echo: RequestEcho;
    flush: RequestFlush;
    info: RequestInfo;
    set_option: RequestSetOption;
    init_chain: RequestInitChain;
    query: RequestQuery;
    begin_block: RequestBeginBlock;
    check_tx: RequestCheckTx;
    deliver_tx: RequestDeliverTx;
    end_block: RequestEndBlock;
    commit: RequestCommit;
    list_snapshots: RequestListSnapshots;
    offer_snapshot: RequestOfferSnapshot;
    load_snapshot_chunk: RequestLoadSnapshotChunk;
    apply_snapshot_chunk: RequestApplySnapshotChunk;
}>;
export declare type RequestEcho = {
    message?: string;
};
export declare type RequestFlush = {};
export declare type RequestInfo = {
    version?: string;
    block_version?: string;
    p2p_version?: string;
};
export declare type RequestSetOption = {
    key?: string;
    value?: string;
};
export declare type RequestInitChain = {
    time?: GoogleProtobufTimestamp.Timestamp;
    chain_id?: string;
    consensus_params?: ConsensusParams;
    validators?: ValidatorUpdate[];
    app_state_bytes?: Uint8Array;
    initial_height?: string;
};
export declare type RequestQuery = {
    data?: Uint8Array;
    path?: string;
    height?: string;
    prove?: boolean;
};
export declare type RequestBeginBlock = {
    hash?: Uint8Array;
    header?: TendermintTypesTypes.Header;
    last_commit_info?: LastCommitInfo;
    byzantine_validators?: Evidence[];
    commit?: TendermintTypesTypes.Commit;
    txs?: Uint8Array[];
};
export declare type RequestCheckTx = {
    tx?: Uint8Array;
    type?: CheckTxType;
};
export declare type RequestDeliverTx = {
    tx?: Uint8Array;
};
export declare type RequestEndBlock = {
    height?: string;
};
export declare type RequestCommit = {};
export declare type RequestListSnapshots = {};
export declare type RequestOfferSnapshot = {
    snapshot?: Snapshot;
    app_hash?: Uint8Array;
};
export declare type RequestLoadSnapshotChunk = {
    height?: string;
    format?: number;
    chunk?: number;
};
export declare type RequestApplySnapshotChunk = {
    index?: number;
    chunk?: Uint8Array;
    sender?: string;
};
declare type BaseResponse = {};
export declare type Response = BaseResponse & OneOf<{
    exception: ResponseException;
    echo: ResponseEcho;
    flush: ResponseFlush;
    info: ResponseInfo;
    set_option: ResponseSetOption;
    init_chain: ResponseInitChain;
    query: ResponseQuery;
    begin_block: ResponseBeginBlock;
    check_tx: ResponseCheckTx;
    deliver_tx: ResponseDeliverTx;
    end_block: ResponseEndBlock;
    commit: ResponseCommit;
    list_snapshots: ResponseListSnapshots;
    offer_snapshot: ResponseOfferSnapshot;
    load_snapshot_chunk: ResponseLoadSnapshotChunk;
    apply_snapshot_chunk: ResponseApplySnapshotChunk;
}>;
export declare type ResponseException = {
    error?: string;
};
export declare type ResponseEcho = {
    message?: string;
};
export declare type ResponseFlush = {};
export declare type ResponseInfo = {
    data?: string;
    version?: string;
    app_version?: string;
    last_block_height?: string;
    last_block_app_hash?: Uint8Array;
};
export declare type ResponseSetOption = {
    code?: number;
    log?: string;
    info?: string;
};
export declare type ResponseInitChain = {
    consensus_params?: ConsensusParams;
    validators?: ValidatorUpdate[];
    app_hash?: Uint8Array;
};
export declare type ResponseQuery = {
    code?: number;
    log?: string;
    info?: string;
    index?: string;
    key?: Uint8Array;
    value?: Uint8Array;
    proof_ops?: TendermintCryptoProof.ProofOps;
    height?: string;
    codespace?: string;
};
export declare type ResponseBeginBlock = {
    events?: Event[];
};
export declare type ResponseCheckTx = {
    code?: number;
    data?: Uint8Array;
    log?: string;
    info?: string;
    gas_wanted?: string;
    gas_used?: string;
    events?: Event[];
    codespace?: string;
    sender?: string;
    priority?: string;
    mempool_error?: string;
};
export declare type ResponseDeliverTx = {
    code?: number;
    data?: Uint8Array;
    log?: string;
    info?: string;
    gas_wanted?: string;
    gas_used?: string;
    events?: Event[];
    codespace?: string;
};
export declare type ResponseEndBlock = {
    validator_updates?: ValidatorUpdate[];
    consensus_param_updates?: ConsensusParams;
    events?: Event[];
};
export declare type ResponseCommit = {
    data?: Uint8Array;
    retain_height?: string;
};
export declare type ResponseListSnapshots = {
    snapshots?: Snapshot[];
};
export declare type ResponseOfferSnapshot = {
    result?: ResponseOfferSnapshotResult;
};
export declare type ResponseLoadSnapshotChunk = {
    chunk?: Uint8Array;
};
export declare type ResponseApplySnapshotChunk = {
    result?: ResponseApplySnapshotChunkResult;
    refetch_chunks?: number[];
    reject_senders?: string[];
};
export declare type ConsensusParams = {
    block?: BlockParams;
    evidence?: TendermintTypesParams.EvidenceParams;
    validator?: TendermintTypesParams.ValidatorParams;
    version?: TendermintTypesParams.VersionParams;
};
export declare type BlockParams = {
    max_bytes?: string;
    max_gas?: string;
};
export declare type LastCommitInfo = {
    round?: number;
    votes?: VoteInfo[];
};
export declare type Event = {
    type?: string;
    attributes?: EventAttribute[];
};
export declare type EventAttribute = {
    key?: Uint8Array;
    value?: Uint8Array;
    index?: boolean;
};
export declare type TxResult = {
    height?: string;
    index?: number;
    tx?: Uint8Array;
    result?: ResponseDeliverTx;
};
export declare type Validator = {
    address?: Uint8Array;
    power?: string;
};
export declare type ValidatorUpdate = {
    pub_key?: TendermintCryptoKeys.PublicKey;
    power?: string;
};
export declare type VoteInfo = {
    validator?: Validator;
    signed_last_block?: boolean;
};
export declare type Evidence = {
    type?: EvidenceType;
    validator?: Validator;
    height?: string;
    time?: GoogleProtobufTimestamp.Timestamp;
    total_voting_power?: string;
};
export declare type Snapshot = {
    height?: string;
    format?: number;
    chunks?: number;
    hash?: Uint8Array;
    metadata?: Uint8Array;
};
export declare class ABCIApplication {
    static Echo(req: RequestEcho, initReq?: fm.InitReq): Promise<ResponseEcho>;
    static Flush(req: RequestFlush, initReq?: fm.InitReq): Promise<ResponseFlush>;
    static Info(req: RequestInfo, initReq?: fm.InitReq): Promise<ResponseInfo>;
    static SetOption(req: RequestSetOption, initReq?: fm.InitReq): Promise<ResponseSetOption>;
    static DeliverTx(req: RequestDeliverTx, initReq?: fm.InitReq): Promise<ResponseDeliverTx>;
    static CheckTx(req: RequestCheckTx, initReq?: fm.InitReq): Promise<ResponseCheckTx>;
    static Query(req: RequestQuery, initReq?: fm.InitReq): Promise<ResponseQuery>;
    static Commit(req: RequestCommit, initReq?: fm.InitReq): Promise<ResponseCommit>;
    static InitChain(req: RequestInitChain, initReq?: fm.InitReq): Promise<ResponseInitChain>;
    static BeginBlock(req: RequestBeginBlock, initReq?: fm.InitReq): Promise<ResponseBeginBlock>;
    static EndBlock(req: RequestEndBlock, initReq?: fm.InitReq): Promise<ResponseEndBlock>;
    static ListSnapshots(req: RequestListSnapshots, initReq?: fm.InitReq): Promise<ResponseListSnapshots>;
    static OfferSnapshot(req: RequestOfferSnapshot, initReq?: fm.InitReq): Promise<ResponseOfferSnapshot>;
    static LoadSnapshotChunk(req: RequestLoadSnapshotChunk, initReq?: fm.InitReq): Promise<ResponseLoadSnapshotChunk>;
    static ApplySnapshotChunk(req: RequestApplySnapshotChunk, initReq?: fm.InitReq): Promise<ResponseApplySnapshotChunk>;
}
export {};
//# sourceMappingURL=types.pb.d.ts.map