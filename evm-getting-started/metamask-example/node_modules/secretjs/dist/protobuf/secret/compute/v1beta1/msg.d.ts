import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "secret.compute.v1beta1";
export interface MsgStoreCode {
    /** sender is the canonical address of the sender */
    sender: Uint8Array;
    /** WASMByteCode can be raw or gzip compressed */
    wasm_byte_code: Uint8Array;
    /** Source is a valid absolute HTTPS URI to the contract's source code, optional */
    source: string;
    /** Builder is a valid docker image name with tag, optional */
    builder: string;
}
/** MsgStoreCodeResponse returns store result data. */
export interface MsgStoreCodeResponse {
    /** CodeID is the reference to the stored WASM code */
    code_id: string;
}
export interface MsgInstantiateContract {
    /** sender is the canonical address of the sender */
    sender: Uint8Array;
    callback_code_hash: string;
    code_id: string;
    label: string;
    /** init_msg is an encrypted input to pass to the contract on init */
    init_msg: Uint8Array;
    init_funds: Coin[];
    /** used internally for encryption, should always be empty in a signed transaction */
    callback_sig: Uint8Array;
    /** Admin is an optional address that can execute migrations */
    admin: string;
}
/** MsgInstantiateContractResponse return instantiation result data */
export interface MsgInstantiateContractResponse {
    /** Address is the bech32 address of the new contract instance. */
    address: string;
    /** Data contains base64-encoded bytes to returned from the contract */
    data: Uint8Array;
}
export interface MsgExecuteContract {
    /** sender is the canonical address of the sender */
    sender: Uint8Array;
    /** contract is the canonical address of the contract */
    contract: Uint8Array;
    /** msg is an encrypted input to pass to the contract on execute */
    msg: Uint8Array;
    /** used internally for encryption, should always be empty in a signed transaction */
    callback_code_hash: string;
    sent_funds: Coin[];
    /** used internally for encryption, should always be empty in a signed transaction */
    callback_sig: Uint8Array;
}
/** MsgExecuteContractResponse returns execution result data. */
export interface MsgExecuteContractResponse {
    /** Data contains base64-encoded bytes to returned from the contract */
    data: Uint8Array;
}
/** MsgMigrateContract runs a code upgrade/ downgrade for a smart contract */
export interface MsgMigrateContract {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** CodeID references the new WASM code */
    code_id: string;
    /** msg is an encrypted input to pass to the contract on migration */
    msg: Uint8Array;
    /** used internally for encryption, should always be empty in a signed transaction */
    callback_sig: Uint8Array;
    /** used internally for encryption, should always be empty in a signed transaction */
    callback_code_hash: string;
}
/** MsgMigrateContractResponse returns contract migration result data. */
export interface MsgMigrateContractResponse {
    /**
     * Data contains same raw bytes returned as data from the wasm contract.
     * (May be empty)
     */
    data: Uint8Array;
}
/** MsgUpdateAdmin sets a new admin for a smart contract */
export interface MsgUpdateAdmin {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** NewAdmin address to be set */
    new_admin: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** used internally for encryption, should always be empty in a signed transaction */
    callback_sig: Uint8Array;
}
/** MsgUpdateAdminResponse returns empty data */
export interface MsgUpdateAdminResponse {
}
/** MsgClearAdmin removes any admin stored for a smart contract */
export interface MsgClearAdmin {
    /** Sender is the that actor that signed the messages */
    sender: string;
    /** Contract is the address of the smart contract */
    contract: string;
    /** used internally for encryption, should always be empty in a signed transaction */
    callback_sig: Uint8Array;
}
/** MsgClearAdminResponse returns empty data */
export interface MsgClearAdminResponse {
}
export declare const MsgStoreCode: {
    encode(message: MsgStoreCode, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgStoreCode;
    fromJSON(object: any): MsgStoreCode;
    toJSON(message: MsgStoreCode): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        wasm_byte_code?: Uint8Array | undefined;
        source?: string | undefined;
        builder?: string | undefined;
    } & {
        sender?: Uint8Array | undefined;
        wasm_byte_code?: Uint8Array | undefined;
        source?: string | undefined;
        builder?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgStoreCode>, never>>(object: I): MsgStoreCode;
};
export declare const MsgStoreCodeResponse: {
    encode(message: MsgStoreCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgStoreCodeResponse;
    fromJSON(object: any): MsgStoreCodeResponse;
    toJSON(message: MsgStoreCodeResponse): unknown;
    fromPartial<I extends {
        code_id?: string | undefined;
    } & {
        code_id?: string | undefined;
    } & Record<Exclude<keyof I, "code_id">, never>>(object: I): MsgStoreCodeResponse;
};
export declare const MsgInstantiateContract: {
    encode(message: MsgInstantiateContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgInstantiateContract;
    fromJSON(object: any): MsgInstantiateContract;
    toJSON(message: MsgInstantiateContract): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        callback_code_hash?: string | undefined;
        code_id?: string | undefined;
        label?: string | undefined;
        init_msg?: Uint8Array | undefined;
        init_funds?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        callback_sig?: Uint8Array | undefined;
        admin?: string | undefined;
    } & {
        sender?: Uint8Array | undefined;
        callback_code_hash?: string | undefined;
        code_id?: string | undefined;
        label?: string | undefined;
        init_msg?: Uint8Array | undefined;
        init_funds?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["init_funds"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["init_funds"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        callback_sig?: Uint8Array | undefined;
        admin?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgInstantiateContract>, never>>(object: I): MsgInstantiateContract;
};
export declare const MsgInstantiateContractResponse: {
    encode(message: MsgInstantiateContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgInstantiateContractResponse;
    fromJSON(object: any): MsgInstantiateContractResponse;
    toJSON(message: MsgInstantiateContractResponse): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        data?: Uint8Array | undefined;
    } & {
        address?: string | undefined;
        data?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof MsgInstantiateContractResponse>, never>>(object: I): MsgInstantiateContractResponse;
};
export declare const MsgExecuteContract: {
    encode(message: MsgExecuteContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgExecuteContract;
    fromJSON(object: any): MsgExecuteContract;
    toJSON(message: MsgExecuteContract): unknown;
    fromPartial<I extends {
        sender?: Uint8Array | undefined;
        contract?: Uint8Array | undefined;
        msg?: Uint8Array | undefined;
        callback_code_hash?: string | undefined;
        sent_funds?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        callback_sig?: Uint8Array | undefined;
    } & {
        sender?: Uint8Array | undefined;
        contract?: Uint8Array | undefined;
        msg?: Uint8Array | undefined;
        callback_code_hash?: string | undefined;
        sent_funds?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["sent_funds"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["sent_funds"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        callback_sig?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof MsgExecuteContract>, never>>(object: I): MsgExecuteContract;
};
export declare const MsgExecuteContractResponse: {
    encode(message: MsgExecuteContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgExecuteContractResponse;
    fromJSON(object: any): MsgExecuteContractResponse;
    toJSON(message: MsgExecuteContractResponse): unknown;
    fromPartial<I extends {
        data?: Uint8Array | undefined;
    } & {
        data?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "data">, never>>(object: I): MsgExecuteContractResponse;
};
export declare const MsgMigrateContract: {
    encode(message: MsgMigrateContract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgMigrateContract;
    fromJSON(object: any): MsgMigrateContract;
    toJSON(message: MsgMigrateContract): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        contract?: string | undefined;
        code_id?: string | undefined;
        msg?: Uint8Array | undefined;
        callback_sig?: Uint8Array | undefined;
        callback_code_hash?: string | undefined;
    } & {
        sender?: string | undefined;
        contract?: string | undefined;
        code_id?: string | undefined;
        msg?: Uint8Array | undefined;
        callback_sig?: Uint8Array | undefined;
        callback_code_hash?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgMigrateContract>, never>>(object: I): MsgMigrateContract;
};
export declare const MsgMigrateContractResponse: {
    encode(message: MsgMigrateContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgMigrateContractResponse;
    fromJSON(object: any): MsgMigrateContractResponse;
    toJSON(message: MsgMigrateContractResponse): unknown;
    fromPartial<I extends {
        data?: Uint8Array | undefined;
    } & {
        data?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "data">, never>>(object: I): MsgMigrateContractResponse;
};
export declare const MsgUpdateAdmin: {
    encode(message: MsgUpdateAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateAdmin;
    fromJSON(object: any): MsgUpdateAdmin;
    toJSON(message: MsgUpdateAdmin): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        new_admin?: string | undefined;
        contract?: string | undefined;
        callback_sig?: Uint8Array | undefined;
    } & {
        sender?: string | undefined;
        new_admin?: string | undefined;
        contract?: string | undefined;
        callback_sig?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateAdmin>, never>>(object: I): MsgUpdateAdmin;
};
export declare const MsgUpdateAdminResponse: {
    encode(_: MsgUpdateAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgUpdateAdminResponse;
    fromJSON(_: any): MsgUpdateAdminResponse;
    toJSON(_: MsgUpdateAdminResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateAdminResponse;
};
export declare const MsgClearAdmin: {
    encode(message: MsgClearAdmin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgClearAdmin;
    fromJSON(object: any): MsgClearAdmin;
    toJSON(message: MsgClearAdmin): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        contract?: string | undefined;
        callback_sig?: Uint8Array | undefined;
    } & {
        sender?: string | undefined;
        contract?: string | undefined;
        callback_sig?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof MsgClearAdmin>, never>>(object: I): MsgClearAdmin;
};
export declare const MsgClearAdminResponse: {
    encode(_: MsgClearAdminResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgClearAdminResponse;
    fromJSON(_: any): MsgClearAdminResponse;
    toJSON(_: MsgClearAdminResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgClearAdminResponse;
};
/** Msg defines the wasm Msg service. */
export interface Msg {
    /** StoreCode to submit Wasm code to the system */
    StoreCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    /** Instantiate creates a new smart contract instance for the given code id. */
    InstantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
    /** Execute submits the given message data to a smart contract */
    ExecuteContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
    /** Migrate runs a code upgrade/ downgrade for a smart contract */
    MigrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
    /** UpdateAdmin sets a new   admin for a smart contract */
    UpdateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse>;
    /** ClearAdmin removes any admin stored for a smart contract */
    ClearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    StoreCode(request: MsgStoreCode): Promise<MsgStoreCodeResponse>;
    InstantiateContract(request: MsgInstantiateContract): Promise<MsgInstantiateContractResponse>;
    ExecuteContract(request: MsgExecuteContract): Promise<MsgExecuteContractResponse>;
    MigrateContract(request: MsgMigrateContract): Promise<MsgMigrateContractResponse>;
    UpdateAdmin(request: MsgUpdateAdmin): Promise<MsgUpdateAdminResponse>;
    ClearAdmin(request: MsgClearAdmin): Promise<MsgClearAdminResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
//# sourceMappingURL=msg.d.ts.map