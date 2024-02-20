import { QueryClientParamsRequest, QueryClientParamsResponse, QueryClientStateRequest, QueryClientStateResponse, QueryClientStatesRequest, QueryClientStatesResponse, QueryClientStatusRequest, QueryClientStatusResponse, QueryConsensusStateHeightsRequest, QueryConsensusStateHeightsResponse, QueryConsensusStateRequest, QueryConsensusStateResponse, QueryConsensusStatesRequest, QueryConsensusStatesResponse, QueryUpgradedClientStateRequest, QueryUpgradedClientStateResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "../grpc_gateway/ibc/core/client/v1/query.pb";
export declare class IbcClientQuerier {
    private url;
    constructor(url: string);
    clientState(req: QueryClientStateRequest, headers?: HeadersInit): Promise<QueryClientStateResponse>;
    clientStates(req: QueryClientStatesRequest, headers?: HeadersInit): Promise<QueryClientStatesResponse>;
    consensusState(req: QueryConsensusStateRequest, headers?: HeadersInit): Promise<QueryConsensusStateResponse>;
    consensusStates(req: QueryConsensusStatesRequest, headers?: HeadersInit): Promise<QueryConsensusStatesResponse>;
    clientStatus(req: QueryClientStatusRequest, headers?: HeadersInit): Promise<QueryClientStatusResponse>;
    clientParams(req: QueryClientParamsRequest, headers?: HeadersInit): Promise<QueryClientParamsResponse>;
    upgradedClientState(req: QueryUpgradedClientStateRequest, headers?: HeadersInit): Promise<QueryUpgradedClientStateResponse>;
    upgradedConsensusState(req: QueryUpgradedConsensusStateRequest, headers?: HeadersInit): Promise<QueryUpgradedConsensusStateResponse>;
    consensusStateHeights(req: QueryConsensusStateHeightsRequest, headers?: HeadersInit): Promise<QueryConsensusStateHeightsResponse>;
}
//# sourceMappingURL=ibc_client.d.ts.map