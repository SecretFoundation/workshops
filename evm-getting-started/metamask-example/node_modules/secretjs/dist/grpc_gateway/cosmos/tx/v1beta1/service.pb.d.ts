import * as fm from "../../../fetch.pb";
import * as TendermintTypesBlock from "../../../tendermint/types/block.pb";
import * as TendermintTypesTypes from "../../../tendermint/types/types.pb";
import * as CosmosBaseAbciV1beta1Abci from "../../base/abci/v1beta1/abci.pb";
import * as CosmosBaseQueryV1beta1Pagination from "../../base/query/v1beta1/pagination.pb";
import * as CosmosTxV1beta1Tx from "./tx.pb";
export declare enum OrderBy {
    ORDER_BY_UNSPECIFIED = "ORDER_BY_UNSPECIFIED",
    ORDER_BY_ASC = "ORDER_BY_ASC",
    ORDER_BY_DESC = "ORDER_BY_DESC"
}
export declare enum BroadcastMode {
    BROADCAST_MODE_UNSPECIFIED = "BROADCAST_MODE_UNSPECIFIED",
    BROADCAST_MODE_BLOCK = "BROADCAST_MODE_BLOCK",
    BROADCAST_MODE_SYNC = "BROADCAST_MODE_SYNC",
    BROADCAST_MODE_ASYNC = "BROADCAST_MODE_ASYNC"
}
export declare type GetTxsEventRequest = {
    events?: string[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
    order_by?: OrderBy;
};
export declare type GetTxsEventResponse = {
    txs?: CosmosTxV1beta1Tx.Tx[];
    tx_responses?: CosmosBaseAbciV1beta1Abci.TxResponse[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type BroadcastTxRequest = {
    tx_bytes?: Uint8Array;
    mode?: BroadcastMode;
};
export declare type BroadcastTxResponse = {
    tx_response?: CosmosBaseAbciV1beta1Abci.TxResponse;
};
export declare type SimulateRequest = {
    tx?: CosmosTxV1beta1Tx.Tx;
    tx_bytes?: Uint8Array;
};
export declare type SimulateResponse = {
    gas_info?: CosmosBaseAbciV1beta1Abci.GasInfo;
    result?: CosmosBaseAbciV1beta1Abci.Result;
};
export declare type GetTxRequest = {
    hash?: string;
};
export declare type GetTxResponse = {
    tx?: CosmosTxV1beta1Tx.Tx;
    tx_response?: CosmosBaseAbciV1beta1Abci.TxResponse;
};
export declare type GetBlockWithTxsRequest = {
    height?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type GetBlockWithTxsResponse = {
    txs?: CosmosTxV1beta1Tx.Tx[];
    block_id?: TendermintTypesTypes.BlockID;
    block?: TendermintTypesBlock.Block;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare class Service {
    static Simulate(req: SimulateRequest, initReq?: fm.InitReq): Promise<SimulateResponse>;
    static GetTx(req: GetTxRequest, initReq?: fm.InitReq): Promise<GetTxResponse>;
    static BroadcastTx(req: BroadcastTxRequest, initReq?: fm.InitReq): Promise<BroadcastTxResponse>;
    static GetTxsEvent(req: GetTxsEventRequest, initReq?: fm.InitReq): Promise<GetTxsEventResponse>;
    static GetBlockWithTxs(req: GetBlockWithTxsRequest, initReq?: fm.InitReq): Promise<GetBlockWithTxsResponse>;
}
//# sourceMappingURL=service.pb.d.ts.map