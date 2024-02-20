export declare enum AccessType {
    UNDEFINED = "UNDEFINED",
    NOBODY = "NOBODY",
    ONLY_ADDRESS = "ONLY_ADDRESS",
    EVERYBODY = "EVERYBODY"
}
export declare enum ContractCodeHistoryOperationType {
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED",
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT",
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE",
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS"
}
export declare type AccessTypeParam = {
    value?: AccessType;
};
export declare type CodeInfo = {
    code_hash?: Uint8Array;
    creator?: Uint8Array;
    source?: string;
    builder?: string;
};
export declare type ContractKey = {
    og_contract_key?: Uint8Array;
    current_contract_key?: Uint8Array;
    current_contract_key_proof?: Uint8Array;
};
export declare type ContractCustomInfo = {
    enclave_key?: ContractKey;
    label?: string;
};
export declare type ContractInfo = {
    code_id?: string;
    creator?: Uint8Array;
    label?: string;
    created?: AbsoluteTxPosition;
    ibc_port_id?: string;
    admin?: string;
    admin_proof?: Uint8Array;
};
export declare type AbsoluteTxPosition = {
    block_height?: string;
    tx_index?: string;
};
export declare type Model = {
    Key?: Uint8Array;
    Value?: Uint8Array;
};
export declare type ContractCodeHistoryEntry = {
    operation?: ContractCodeHistoryOperationType;
    code_id?: string;
    updated?: AbsoluteTxPosition;
    msg?: Uint8Array;
};
//# sourceMappingURL=types.pb.d.ts.map