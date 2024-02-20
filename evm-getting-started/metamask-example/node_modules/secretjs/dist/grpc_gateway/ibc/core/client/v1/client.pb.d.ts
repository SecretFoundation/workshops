import * as CosmosUpgradeV1beta1Upgrade from "../../../../cosmos/upgrade/v1beta1/upgrade.pb";
import * as GoogleProtobufAny from "../../../../google/protobuf/any.pb";
export declare type IdentifiedClientState = {
    client_id?: string;
    client_state?: GoogleProtobufAny.Any;
};
export declare type ConsensusStateWithHeight = {
    height?: Height;
    consensus_state?: GoogleProtobufAny.Any;
};
export declare type ClientConsensusStates = {
    client_id?: string;
    consensus_states?: ConsensusStateWithHeight[];
};
export declare type ClientUpdateProposal = {
    title?: string;
    description?: string;
    subject_client_id?: string;
    substitute_client_id?: string;
};
export declare type UpgradeProposal = {
    title?: string;
    description?: string;
    plan?: CosmosUpgradeV1beta1Upgrade.Plan;
    upgraded_client_state?: GoogleProtobufAny.Any;
};
export declare type Height = {
    revision_number?: string;
    revision_height?: string;
};
export declare type Params = {
    allowed_clients?: string[];
};
//# sourceMappingURL=client.pb.d.ts.map