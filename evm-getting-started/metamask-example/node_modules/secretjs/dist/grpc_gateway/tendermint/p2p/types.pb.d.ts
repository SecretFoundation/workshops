export declare type NetAddress = {
    id?: string;
    ip?: string;
    port?: number;
};
export declare type ProtocolVersion = {
    p2p?: string;
    block?: string;
    app?: string;
};
export declare type DefaultNodeInfo = {
    protocol_version?: ProtocolVersion;
    default_node_id?: string;
    listen_addr?: string;
    network?: string;
    version?: string;
    channels?: Uint8Array;
    moniker?: string;
    other?: DefaultNodeInfoOther;
};
export declare type DefaultNodeInfoOther = {
    tx_index?: string;
    rpc_address?: string;
};
//# sourceMappingURL=types.pb.d.ts.map