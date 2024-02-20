import { QueryClientConnectionsRequest, QueryClientConnectionsResponse, QueryConnectionClientStateRequest, QueryConnectionClientStateResponse, QueryConnectionConsensusStateRequest, QueryConnectionConsensusStateResponse, QueryConnectionRequest, QueryConnectionResponse, QueryConnectionsRequest, QueryConnectionsResponse } from "../grpc_gateway/ibc/core/connection/v1/query.pb";
export declare class IbcConnectionQuerier {
    private url;
    constructor(url: string);
    connection(req: QueryConnectionRequest, headers?: HeadersInit): Promise<QueryConnectionResponse>;
    connections(req: QueryConnectionsRequest, headers?: HeadersInit): Promise<QueryConnectionsResponse>;
    clientConnections(req: QueryClientConnectionsRequest, headers?: HeadersInit): Promise<QueryClientConnectionsResponse>;
    connectionClientState(req: QueryConnectionClientStateRequest, headers?: HeadersInit): Promise<QueryConnectionClientStateResponse>;
    connectionConsensusState(req: QueryConnectionConsensusStateRequest, headers?: HeadersInit): Promise<QueryConnectionConsensusStateResponse>;
}
//# sourceMappingURL=ibc_connection.d.ts.map