import * as IbcApplicationsInterchain_accountsControllerV1Controller from "../controller/v1/controller.pb";
import * as IbcApplicationsInterchain_accountsHostV1Host from "../host/v1/host.pb";
export declare type GenesisState = {
    controller_genesis_state?: ControllerGenesisState;
    host_genesis_state?: HostGenesisState;
};
export declare type ControllerGenesisState = {
    active_channels?: ActiveChannel[];
    interchain_accounts?: RegisteredInterchainAccount[];
    ports?: string[];
    params?: IbcApplicationsInterchain_accountsControllerV1Controller.Params;
};
export declare type HostGenesisState = {
    active_channels?: ActiveChannel[];
    interchain_accounts?: RegisteredInterchainAccount[];
    port?: string;
    params?: IbcApplicationsInterchain_accountsHostV1Host.Params;
};
export declare type ActiveChannel = {
    connection_id?: string;
    port_id?: string;
    channel_id?: string;
};
export declare type RegisteredInterchainAccount = {
    connection_id?: string;
    port_id?: string;
    account_address?: string;
};
//# sourceMappingURL=genesis.pb.d.ts.map