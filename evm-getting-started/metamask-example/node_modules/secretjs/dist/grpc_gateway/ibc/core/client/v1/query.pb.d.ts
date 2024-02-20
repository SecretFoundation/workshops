import * as CosmosBaseQueryV1beta1Pagination from "../../../../cosmos/base/query/v1beta1/pagination.pb";
import * as fm from "../../../../fetch.pb";
import * as GoogleProtobufAny from "../../../../google/protobuf/any.pb";
import * as IbcCoreClientV1Client from "./client.pb";
export declare type QueryClientStateRequest = {
    client_id?: string;
};
export declare type QueryClientStateResponse = {
    client_state?: GoogleProtobufAny.Any;
    proof?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
};
export declare type QueryClientStatesRequest = {
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryClientStatesResponse = {
    client_states?: IbcCoreClientV1Client.IdentifiedClientState[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryConsensusStateRequest = {
    client_id?: string;
    revision_number?: string;
    revision_height?: string;
    latest_height?: boolean;
};
export declare type QueryConsensusStateResponse = {
    consensus_state?: GoogleProtobufAny.Any;
    proof?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
};
export declare type QueryConsensusStatesRequest = {
    client_id?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryConsensusStatesResponse = {
    consensus_states?: IbcCoreClientV1Client.ConsensusStateWithHeight[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryConsensusStateHeightsRequest = {
    client_id?: string;
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryConsensusStateHeightsResponse = {
    consensus_state_heights?: IbcCoreClientV1Client.Height[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
};
export declare type QueryClientStatusRequest = {
    client_id?: string;
};
export declare type QueryClientStatusResponse = {
    status?: string;
};
export declare type QueryClientParamsRequest = {};
export declare type QueryClientParamsResponse = {
    params?: IbcCoreClientV1Client.Params;
};
export declare type QueryUpgradedClientStateRequest = {};
export declare type QueryUpgradedClientStateResponse = {
    upgraded_client_state?: GoogleProtobufAny.Any;
};
export declare type QueryUpgradedConsensusStateRequest = {};
export declare type QueryUpgradedConsensusStateResponse = {
    upgraded_consensus_state?: GoogleProtobufAny.Any;
};
export declare class Query {
    static ClientState(req: QueryClientStateRequest, initReq?: fm.InitReq): Promise<QueryClientStateResponse>;
    static ClientStates(req: QueryClientStatesRequest, initReq?: fm.InitReq): Promise<QueryClientStatesResponse>;
    static ConsensusState(req: QueryConsensusStateRequest, initReq?: fm.InitReq): Promise<QueryConsensusStateResponse>;
    static ConsensusStates(req: QueryConsensusStatesRequest, initReq?: fm.InitReq): Promise<QueryConsensusStatesResponse>;
    static ConsensusStateHeights(req: QueryConsensusStateHeightsRequest, initReq?: fm.InitReq): Promise<QueryConsensusStateHeightsResponse>;
    static ClientStatus(req: QueryClientStatusRequest, initReq?: fm.InitReq): Promise<QueryClientStatusResponse>;
    static ClientParams(req: QueryClientParamsRequest, initReq?: fm.InitReq): Promise<QueryClientParamsResponse>;
    static UpgradedClientState(req: QueryUpgradedClientStateRequest, initReq?: fm.InitReq): Promise<QueryUpgradedClientStateResponse>;
    static UpgradedConsensusState(req: QueryUpgradedConsensusStateRequest, initReq?: fm.InitReq): Promise<QueryUpgradedConsensusStateResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map