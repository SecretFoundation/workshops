import * as IbcCoreClientV1Client from "./client.pb";
export declare type GenesisState = {
    clients?: IbcCoreClientV1Client.IdentifiedClientState[];
    clients_consensus?: IbcCoreClientV1Client.ClientConsensusStates[];
    clients_metadata?: IdentifiedGenesisMetadata[];
    params?: IbcCoreClientV1Client.Params;
    create_localhost?: boolean;
    next_client_sequence?: string;
};
export declare type GenesisMetadata = {
    key?: Uint8Array;
    value?: Uint8Array;
};
export declare type IdentifiedGenesisMetadata = {
    client_id?: string;
    client_metadata?: GenesisMetadata[];
};
//# sourceMappingURL=genesis.pb.d.ts.map