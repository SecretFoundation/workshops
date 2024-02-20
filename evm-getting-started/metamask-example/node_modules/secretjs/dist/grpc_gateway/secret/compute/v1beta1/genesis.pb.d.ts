import * as SecretComputeV1beta1Types from "./types.pb";
export declare type GenesisState = {
    codes?: Code[];
    contracts?: Contract[];
    sequences?: Sequence[];
};
export declare type Code = {
    code_id?: string;
    code_info?: SecretComputeV1beta1Types.CodeInfo;
    code_bytes?: Uint8Array;
};
export declare type Contract = {
    contract_address?: Uint8Array;
    contract_info?: SecretComputeV1beta1Types.ContractInfo;
    contract_state?: SecretComputeV1beta1Types.Model[];
    contract_custom_info?: SecretComputeV1beta1Types.ContractCustomInfo;
};
export declare type Sequence = {
    id_key?: Uint8Array;
    value?: string;
};
//# sourceMappingURL=genesis.pb.d.ts.map