import * as IbcCoreConnectionV1Connection from "./connection.pb";
export declare type GenesisState = {
    connections?: IbcCoreConnectionV1Connection.IdentifiedConnection[];
    client_connection_paths?: IbcCoreConnectionV1Connection.ConnectionPaths[];
    next_connection_sequence?: string;
    params?: IbcCoreConnectionV1Connection.Params;
};
//# sourceMappingURL=genesis.pb.d.ts.map