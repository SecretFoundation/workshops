import * as CosmosBaseQueryV1beta1Pagination from "../../../../cosmos/base/query/v1beta1/pagination.pb";
import * as fm from "../../../../fetch.pb";
import * as GoogleProtobufAny from "../../../../google/protobuf/any.pb";
import * as IbcCoreClientV1Client from "../../client/v1/client.pb";
import * as IbcCoreConnectionV1Connection from "./connection.pb";
export declare type QueryConnectionRequest = {
    connection_id?: string;
};
export declare type QueryConnectionResponse = {
    connection?: IbcCoreConnectionV1Connection.ConnectionEnd;
    proof?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
};
export declare type QueryConnectionsRequest = {
    pagination?: CosmosBaseQueryV1beta1Pagination.PageRequest;
};
export declare type QueryConnectionsResponse = {
    connections?: IbcCoreConnectionV1Connection.IdentifiedConnection[];
    pagination?: CosmosBaseQueryV1beta1Pagination.PageResponse;
    height?: IbcCoreClientV1Client.Height;
};
export declare type QueryClientConnectionsRequest = {
    client_id?: string;
};
export declare type QueryClientConnectionsResponse = {
    connection_paths?: string[];
    proof?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
};
export declare type QueryConnectionClientStateRequest = {
    connection_id?: string;
};
export declare type QueryConnectionClientStateResponse = {
    identified_client_state?: IbcCoreClientV1Client.IdentifiedClientState;
    proof?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
};
export declare type QueryConnectionConsensusStateRequest = {
    connection_id?: string;
    revision_number?: string;
    revision_height?: string;
};
export declare type QueryConnectionConsensusStateResponse = {
    consensus_state?: GoogleProtobufAny.Any;
    client_id?: string;
    proof?: Uint8Array;
    proof_height?: IbcCoreClientV1Client.Height;
};
export declare class Query {
    static Connection(req: QueryConnectionRequest, initReq?: fm.InitReq): Promise<QueryConnectionResponse>;
    static Connections(req: QueryConnectionsRequest, initReq?: fm.InitReq): Promise<QueryConnectionsResponse>;
    static ClientConnections(req: QueryClientConnectionsRequest, initReq?: fm.InitReq): Promise<QueryClientConnectionsResponse>;
    static ConnectionClientState(req: QueryConnectionClientStateRequest, initReq?: fm.InitReq): Promise<QueryConnectionClientStateResponse>;
    static ConnectionConsensusState(req: QueryConnectionConsensusStateRequest, initReq?: fm.InitReq): Promise<QueryConnectionConsensusStateResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map