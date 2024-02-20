import { GetBlockByHeightRequest, GetBlockByHeightResponse, GetLatestBlockRequest, GetLatestBlockResponse, GetLatestValidatorSetRequest, GetLatestValidatorSetResponse, GetNodeInfoRequest, GetNodeInfoResponse, GetSyncingRequest, GetSyncingResponse, GetValidatorSetByHeightRequest, GetValidatorSetByHeightResponse } from "../grpc_gateway/cosmos/base/tendermint/v1beta1/query.pb";
export declare class TendermintQuerier {
    private url;
    constructor(url: string);
    getNodeInfo(req: GetNodeInfoRequest, headers?: HeadersInit): Promise<GetNodeInfoResponse>;
    getSyncing(req: GetSyncingRequest, headers?: HeadersInit): Promise<GetSyncingResponse>;
    getLatestBlock(req: GetLatestBlockRequest, headers?: HeadersInit): Promise<GetLatestBlockResponse>;
    getBlockByHeight(req: GetBlockByHeightRequest, headers?: HeadersInit): Promise<GetBlockByHeightResponse>;
    getLatestValidatorSet(req: GetLatestValidatorSetRequest, headers?: HeadersInit): Promise<GetLatestValidatorSetResponse>;
    getValidatorSetByHeight(req: GetValidatorSetByHeightRequest, headers?: HeadersInit): Promise<GetValidatorSetByHeightResponse>;
}
//# sourceMappingURL=tendermint.d.ts.map