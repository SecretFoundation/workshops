import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "secret.compute.v1beta1";
export declare enum AccessType {
    UNDEFINED = 0,
    NOBODY = 1,
    ONLY_ADDRESS = 2,
    EVERYBODY = 3,
    UNRECOGNIZED = -1
}
export declare function accessTypeFromJSON(object: any): AccessType;
export declare function accessTypeToJSON(object: AccessType): string;
/** ContractCodeHistoryOperationType actions that caused a code change */
export declare enum ContractCodeHistoryOperationType {
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED - ContractCodeHistoryOperationTypeUnspecified placeholder for empty value */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED = 0,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT - ContractCodeHistoryOperationTypeInit on chain contract instantiation */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT = 1,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE - ContractCodeHistoryOperationTypeMigrate code migration */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE = 2,
    /** CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS - ContractCodeHistoryOperationTypeGenesis based on genesis data */
    CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS = 3,
    UNRECOGNIZED = -1
}
export declare function contractCodeHistoryOperationTypeFromJSON(object: any): ContractCodeHistoryOperationType;
export declare function contractCodeHistoryOperationTypeToJSON(object: ContractCodeHistoryOperationType): string;
export interface AccessTypeParam {
    value: AccessType;
}
/** CodeInfo is data for the uploaded contract WASM code */
export interface CodeInfo {
    code_hash: Uint8Array;
    creator: Uint8Array;
    source: string;
    builder: string;
}
export interface ContractKey {
    og_contract_key: Uint8Array;
    current_contract_key: Uint8Array;
    current_contract_key_proof: Uint8Array;
}
export interface ContractCustomInfo {
    enclave_key?: ContractKey;
    label: string;
}
/** ContractInfo stores a WASM contract instance */
export interface ContractInfo {
    /** CodeID is the reference to the stored Wasm code */
    code_id: string;
    /** Creator address who initially instantiated the contract */
    creator: Uint8Array;
    /** Label is mandatory metadata to be stored with a contract instance. */
    label: string;
    /** Created Tx position when the contract was instantiated. */
    created?: AbsoluteTxPosition;
    ibc_port_id: string;
    /** Admin is an optional address that can execute migrations */
    admin: string;
    /** Proof that enclave executed the instantiate command */
    admin_proof: Uint8Array;
}
/** AbsoluteTxPosition can be used to sort contracts */
export interface AbsoluteTxPosition {
    /** BlockHeight is the block the contract was created at */
    block_height: string;
    /** TxIndex is a monotonic counter within the block (actual transaction index, or gas consumed) */
    tx_index: string;
}
/** Model is a struct that holds a KV pair */
export interface Model {
    /** hex-encode key to read it better (this is often ascii) */
    Key: Uint8Array;
    /** base64-encode raw value */
    Value: Uint8Array;
}
/** ContractCodeHistoryEntry metadata to a contract. */
export interface ContractCodeHistoryEntry {
    operation: ContractCodeHistoryOperationType;
    /** CodeID is the reference to the stored WASM code */
    code_id: string;
    /** Updated Tx position when the operation was executed. */
    updated?: AbsoluteTxPosition;
    msg: Uint8Array;
}
export declare const AccessTypeParam: {
    encode(message: AccessTypeParam, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AccessTypeParam;
    fromJSON(object: any): AccessTypeParam;
    toJSON(message: AccessTypeParam): unknown;
    fromPartial<I extends {
        value?: AccessType | undefined;
    } & {
        value?: AccessType | undefined;
    } & Record<Exclude<keyof I, "value">, never>>(object: I): AccessTypeParam;
};
export declare const CodeInfo: {
    encode(message: CodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CodeInfo;
    fromJSON(object: any): CodeInfo;
    toJSON(message: CodeInfo): unknown;
    fromPartial<I extends {
        code_hash?: Uint8Array | undefined;
        creator?: Uint8Array | undefined;
        source?: string | undefined;
        builder?: string | undefined;
    } & {
        code_hash?: Uint8Array | undefined;
        creator?: Uint8Array | undefined;
        source?: string | undefined;
        builder?: string | undefined;
    } & Record<Exclude<keyof I, keyof CodeInfo>, never>>(object: I): CodeInfo;
};
export declare const ContractKey: {
    encode(message: ContractKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ContractKey;
    fromJSON(object: any): ContractKey;
    toJSON(message: ContractKey): unknown;
    fromPartial<I extends {
        og_contract_key?: Uint8Array | undefined;
        current_contract_key?: Uint8Array | undefined;
        current_contract_key_proof?: Uint8Array | undefined;
    } & {
        og_contract_key?: Uint8Array | undefined;
        current_contract_key?: Uint8Array | undefined;
        current_contract_key_proof?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof ContractKey>, never>>(object: I): ContractKey;
};
export declare const ContractCustomInfo: {
    encode(message: ContractCustomInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ContractCustomInfo;
    fromJSON(object: any): ContractCustomInfo;
    toJSON(message: ContractCustomInfo): unknown;
    fromPartial<I extends {
        enclave_key?: {
            og_contract_key?: Uint8Array | undefined;
            current_contract_key?: Uint8Array | undefined;
            current_contract_key_proof?: Uint8Array | undefined;
        } | undefined;
        label?: string | undefined;
    } & {
        enclave_key?: ({
            og_contract_key?: Uint8Array | undefined;
            current_contract_key?: Uint8Array | undefined;
            current_contract_key_proof?: Uint8Array | undefined;
        } & {
            og_contract_key?: Uint8Array | undefined;
            current_contract_key?: Uint8Array | undefined;
            current_contract_key_proof?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["enclave_key"], keyof ContractKey>, never>) | undefined;
        label?: string | undefined;
    } & Record<Exclude<keyof I, keyof ContractCustomInfo>, never>>(object: I): ContractCustomInfo;
};
export declare const ContractInfo: {
    encode(message: ContractInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ContractInfo;
    fromJSON(object: any): ContractInfo;
    toJSON(message: ContractInfo): unknown;
    fromPartial<I extends {
        code_id?: string | undefined;
        creator?: Uint8Array | undefined;
        label?: string | undefined;
        created?: {
            block_height?: string | undefined;
            tx_index?: string | undefined;
        } | undefined;
        ibc_port_id?: string | undefined;
        admin?: string | undefined;
        admin_proof?: Uint8Array | undefined;
    } & {
        code_id?: string | undefined;
        creator?: Uint8Array | undefined;
        label?: string | undefined;
        created?: ({
            block_height?: string | undefined;
            tx_index?: string | undefined;
        } & {
            block_height?: string | undefined;
            tx_index?: string | undefined;
        } & Record<Exclude<keyof I["created"], keyof AbsoluteTxPosition>, never>) | undefined;
        ibc_port_id?: string | undefined;
        admin?: string | undefined;
        admin_proof?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof ContractInfo>, never>>(object: I): ContractInfo;
};
export declare const AbsoluteTxPosition: {
    encode(message: AbsoluteTxPosition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AbsoluteTxPosition;
    fromJSON(object: any): AbsoluteTxPosition;
    toJSON(message: AbsoluteTxPosition): unknown;
    fromPartial<I extends {
        block_height?: string | undefined;
        tx_index?: string | undefined;
    } & {
        block_height?: string | undefined;
        tx_index?: string | undefined;
    } & Record<Exclude<keyof I, keyof AbsoluteTxPosition>, never>>(object: I): AbsoluteTxPosition;
};
export declare const Model: {
    encode(message: Model, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Model;
    fromJSON(object: any): Model;
    toJSON(message: Model): unknown;
    fromPartial<I extends {
        Key?: Uint8Array | undefined;
        Value?: Uint8Array | undefined;
    } & {
        Key?: Uint8Array | undefined;
        Value?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof Model>, never>>(object: I): Model;
};
export declare const ContractCodeHistoryEntry: {
    encode(message: ContractCodeHistoryEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ContractCodeHistoryEntry;
    fromJSON(object: any): ContractCodeHistoryEntry;
    toJSON(message: ContractCodeHistoryEntry): unknown;
    fromPartial<I extends {
        operation?: ContractCodeHistoryOperationType | undefined;
        code_id?: string | undefined;
        updated?: {
            block_height?: string | undefined;
            tx_index?: string | undefined;
        } | undefined;
        msg?: Uint8Array | undefined;
    } & {
        operation?: ContractCodeHistoryOperationType | undefined;
        code_id?: string | undefined;
        updated?: ({
            block_height?: string | undefined;
            tx_index?: string | undefined;
        } & {
            block_height?: string | undefined;
            tx_index?: string | undefined;
        } & Record<Exclude<keyof I["updated"], keyof AbsoluteTxPosition>, never>) | undefined;
        msg?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof ContractCodeHistoryEntry>, never>>(object: I): ContractCodeHistoryEntry;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
//# sourceMappingURL=types.d.ts.map