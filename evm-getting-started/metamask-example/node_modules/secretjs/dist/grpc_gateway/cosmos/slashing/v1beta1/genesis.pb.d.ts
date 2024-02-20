import * as CosmosSlashingV1beta1Slashing from "./slashing.pb";
export declare type GenesisState = {
    params?: CosmosSlashingV1beta1Slashing.Params;
    signing_infos?: SigningInfo[];
    missed_blocks?: ValidatorMissedBlocks[];
};
export declare type SigningInfo = {
    address?: string;
    validator_signing_info?: CosmosSlashingV1beta1Slashing.ValidatorSigningInfo;
};
export declare type ValidatorMissedBlocks = {
    address?: string;
    missed_blocks?: MissedBlock[];
};
export declare type MissedBlock = {
    index?: string;
    missed?: boolean;
};
//# sourceMappingURL=genesis.pb.d.ts.map