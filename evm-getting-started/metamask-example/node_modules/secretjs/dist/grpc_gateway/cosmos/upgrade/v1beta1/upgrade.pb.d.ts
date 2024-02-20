import * as GoogleProtobufAny from "../../../google/protobuf/any.pb";
import * as GoogleProtobufTimestamp from "../../../google/protobuf/timestamp.pb";
export declare type Plan = {
    name?: string;
    time?: GoogleProtobufTimestamp.Timestamp;
    height?: string;
    info?: string;
    upgraded_client_state?: GoogleProtobufAny.Any;
};
export declare type SoftwareUpgradeProposal = {
    title?: string;
    description?: string;
    plan?: Plan;
};
export declare type CancelSoftwareUpgradeProposal = {
    title?: string;
    description?: string;
};
export declare type ModuleVersion = {
    name?: string;
    version?: string;
};
//# sourceMappingURL=upgrade.pb.d.ts.map