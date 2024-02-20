import * as fm from "../../../fetch.pb";
import * as CosmosUpgradeV1beta1Upgrade from "./upgrade.pb";
export declare type QueryCurrentPlanRequest = {};
export declare type QueryCurrentPlanResponse = {
    plan?: CosmosUpgradeV1beta1Upgrade.Plan;
};
export declare type QueryAppliedPlanRequest = {
    name?: string;
};
export declare type QueryAppliedPlanResponse = {
    height?: string;
};
export declare type QueryUpgradedConsensusStateRequest = {
    last_height?: string;
};
export declare type QueryUpgradedConsensusStateResponse = {
    upgraded_consensus_state?: Uint8Array;
};
export declare type QueryModuleVersionsRequest = {
    module_name?: string;
};
export declare type QueryModuleVersionsResponse = {
    module_versions?: CosmosUpgradeV1beta1Upgrade.ModuleVersion[];
};
export declare class Query {
    static CurrentPlan(req: QueryCurrentPlanRequest, initReq?: fm.InitReq): Promise<QueryCurrentPlanResponse>;
    static AppliedPlan(req: QueryAppliedPlanRequest, initReq?: fm.InitReq): Promise<QueryAppliedPlanResponse>;
    static UpgradedConsensusState(req: QueryUpgradedConsensusStateRequest, initReq?: fm.InitReq): Promise<QueryUpgradedConsensusStateResponse>;
    static ModuleVersions(req: QueryModuleVersionsRequest, initReq?: fm.InitReq): Promise<QueryModuleVersionsResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map