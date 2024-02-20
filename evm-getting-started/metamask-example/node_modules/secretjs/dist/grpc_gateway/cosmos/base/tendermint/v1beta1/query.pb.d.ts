import * as fm from "../../../../fetch.pb";
import * as GoogleProtobufAny from "../../../../google/protobuf/any.pb";
import * as TendermintP2pTypes from "../../../../tendermint/p2p/types.pb";
import * as TendermintTypesBlock from "../../../../tendermint/types/block.pb";
import * as TendermintTypesTypes from "../../../../tendermint/types/types.pb";
import * as CosmosBaseQueryV1beta1Pagination from "../../query/v1beta1/pagination.pb";
export declare type GetValidatorSetByHeightRequest = {
    height?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type GetValidatorSetByHeightResponse = {
    block_height?: string;
    validators?: Validator[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type GetLatestValidatorSetRequest = {
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type GetLatestValidatorSetResponse = {
    block_height?: string;
    validators?: Validator[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type Validator = {
    address?: string;
    pub_key?: GoogleProtobufAny.Any;
    voting_power?: string;
    proposer_priority?: string;
};
export declare type GetBlockByHeightRequest = {
    height?: string;
};
export declare type GetBlockByHeightResponse = {
    block_id?: TendermintTypesTypes.BlockID;
    block?: TendermintTypesBlock.Block;
};
export declare type GetLatestBlockRequest = {};
export declare type GetLatestBlockResponse = {
    block_id?: TendermintTypesTypes.BlockID;
    block?: TendermintTypesBlock.Block;
};
export declare type GetSyncingRequest = {};
export declare type GetSyncingResponse = {
    syncing?: boolean;
};
export declare type GetNodeInfoRequest = {};
export declare type GetNodeInfoResponse = {
    default_node_info?: TendermintP2pTypes.DefaultNodeInfo;
    application_version?: VersionInfo;
};
export declare type VersionInfo = {
    name?: string;
    app_name?: string;
    version?: string;
    git_commit?: string;
    build_tags?: string;
    go_version?: string;
    build_deps?: Module[];
    cosmos_sdk_version?: string;
};
export declare type Module = {
    path?: string;
    version?: string;
    sum?: string;
};
export declare class Service {
    static GetNodeInfo(req: GetNodeInfoRequest, initReq?: fm.InitReq): Promise<GetNodeInfoResponse>;
    static GetSyncing(req: GetSyncingRequest, initReq?: fm.InitReq): Promise<GetSyncingResponse>;
    static GetLatestBlock(req: GetLatestBlockRequest, initReq?: fm.InitReq): Promise<GetLatestBlockResponse>;
    static GetBlockByHeight(req: GetBlockByHeightRequest, initReq?: fm.InitReq): Promise<GetBlockByHeightResponse>;
    static GetLatestValidatorSet(req: GetLatestValidatorSetRequest, initReq?: fm.InitReq): Promise<GetLatestValidatorSetResponse>;
    static GetValidatorSetByHeight(req: GetValidatorSetByHeightRequest, initReq?: fm.InitReq): Promise<GetValidatorSetByHeightResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map