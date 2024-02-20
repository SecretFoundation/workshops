import * as TendermintTypesEvidence from "./evidence.pb";
import * as TendermintTypesTypes from "./types.pb";
export declare type Block = {
    header?: TendermintTypesTypes.Header;
    data?: TendermintTypesTypes.Data;
    evidence?: TendermintTypesEvidence.EvidenceList;
    last_commit?: TendermintTypesTypes.Commit;
};
//# sourceMappingURL=block.pb.d.ts.map