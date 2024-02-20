import { QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryCurrentPlanRequest, QueryCurrentPlanResponse, QueryModuleVersionsRequest, QueryModuleVersionsResponse, QueryUpgradedConsensusStateRequest, QueryUpgradedConsensusStateResponse } from "../grpc_gateway/cosmos/upgrade/v1beta1/query.pb";
export declare class UpgradeQuerier {
    private url;
    constructor(url: string);
    currentPlan(req: QueryCurrentPlanRequest, headers?: HeadersInit): Promise<QueryCurrentPlanResponse>;
    appliedPlan(req: QueryAppliedPlanRequest, headers?: HeadersInit): Promise<QueryAppliedPlanResponse>;
    upgradedConsensusState(req: QueryUpgradedConsensusStateRequest, headers?: HeadersInit): Promise<QueryUpgradedConsensusStateResponse>;
    moduleVersions(req: QueryModuleVersionsRequest, headers?: HeadersInit): Promise<QueryModuleVersionsResponse>;
}
//# sourceMappingURL=upgrade.d.ts.map