import * as _m0 from "protobufjs/minimal";
import { ContractInfo, ContractCodeHistoryEntry } from "./types";
import { StringEvent } from "../../../cosmos/base/abci/v1beta1/abci";
import { Empty } from "../../../google/protobuf/empty";
export declare const protobufPackage = "secret.compute.v1beta1";
export interface QuerySecretContractRequest {
    /** address is the bech32 human readable address of the contract */
    contract_address: string;
    query: Uint8Array;
}
export interface QueryByLabelRequest {
    label: string;
}
export interface QueryByContractAddressRequest {
    /** address is the bech32 human readable address of the contract */
    contract_address: string;
}
export interface QueryByCodeIdRequest {
    code_id: string;
}
export interface QuerySecretContractResponse {
    data: Uint8Array;
}
/** QueryContractInfoResponse is the response type for the Query/ContractInfo RPC method */
export interface QueryContractInfoResponse {
    /** contract_address is the bech32 human readable address of the contract */
    contract_address: string;
    contract_info?: ContractInfo;
}
/** ContractInfoWithAddress adds the contract address to the ContractInfo representation */
export interface ContractInfoWithAddress {
    /** contract_address is the bech32 human readable address of the contract */
    contract_address: string;
    contract_info?: ContractInfo;
}
export interface QueryContractsByCodeIdResponse {
    contract_infos: ContractInfoWithAddress[];
}
export interface CodeInfoResponse {
    code_id: string;
    /** creator is the bech32 human readable address of the contract */
    creator: string;
    code_hash: string;
    source: string;
    builder: string;
}
export interface QueryCodeResponse {
    code_info?: CodeInfoResponse;
    wasm: Uint8Array;
}
export interface QueryCodesResponse {
    code_infos: CodeInfoResponse[];
}
export interface QueryContractAddressResponse {
    /** address is the bech32 human readable address of the contract */
    contract_address: string;
}
export interface QueryContractLabelResponse {
    label: string;
}
export interface QueryCodeHashResponse {
    code_hash: string;
}
/** DecryptedAnswer is a struct that represents a decrypted tx-query */
export interface DecryptedAnswer {
    type: string;
    input: string;
    output_data: string;
    output_data_as_string: string;
}
export interface DecryptedAnswers {
    answers: DecryptedAnswer[];
    output_logs: StringEvent[];
    output_error: string;
    plaintext_error: string;
}
/**
 * QueryContractHistoryRequest is the request type for the Query/ContractHistory
 * RPC method
 */
export interface QueryContractHistoryRequest {
    /** address is the address of the contract to query */
    contract_address: string;
}
/**
 * QueryContractHistoryResponse is the response type for the
 * Query/ContractHistory RPC method
 */
export interface QueryContractHistoryResponse {
    entries: ContractCodeHistoryEntry[];
}
export declare const QuerySecretContractRequest: {
    encode(message: QuerySecretContractRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QuerySecretContractRequest;
    fromJSON(object: any): QuerySecretContractRequest;
    toJSON(message: QuerySecretContractRequest): unknown;
    fromPartial<I extends {
        contract_address?: string | undefined;
        query?: Uint8Array | undefined;
    } & {
        contract_address?: string | undefined;
        query?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof QuerySecretContractRequest>, never>>(object: I): QuerySecretContractRequest;
};
export declare const QueryByLabelRequest: {
    encode(message: QueryByLabelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryByLabelRequest;
    fromJSON(object: any): QueryByLabelRequest;
    toJSON(message: QueryByLabelRequest): unknown;
    fromPartial<I extends {
        label?: string | undefined;
    } & {
        label?: string | undefined;
    } & Record<Exclude<keyof I, "label">, never>>(object: I): QueryByLabelRequest;
};
export declare const QueryByContractAddressRequest: {
    encode(message: QueryByContractAddressRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryByContractAddressRequest;
    fromJSON(object: any): QueryByContractAddressRequest;
    toJSON(message: QueryByContractAddressRequest): unknown;
    fromPartial<I extends {
        contract_address?: string | undefined;
    } & {
        contract_address?: string | undefined;
    } & Record<Exclude<keyof I, "contract_address">, never>>(object: I): QueryByContractAddressRequest;
};
export declare const QueryByCodeIdRequest: {
    encode(message: QueryByCodeIdRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryByCodeIdRequest;
    fromJSON(object: any): QueryByCodeIdRequest;
    toJSON(message: QueryByCodeIdRequest): unknown;
    fromPartial<I extends {
        code_id?: string | undefined;
    } & {
        code_id?: string | undefined;
    } & Record<Exclude<keyof I, "code_id">, never>>(object: I): QueryByCodeIdRequest;
};
export declare const QuerySecretContractResponse: {
    encode(message: QuerySecretContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QuerySecretContractResponse;
    fromJSON(object: any): QuerySecretContractResponse;
    toJSON(message: QuerySecretContractResponse): unknown;
    fromPartial<I extends {
        data?: Uint8Array | undefined;
    } & {
        data?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "data">, never>>(object: I): QuerySecretContractResponse;
};
export declare const QueryContractInfoResponse: {
    encode(message: QueryContractInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryContractInfoResponse;
    fromJSON(object: any): QueryContractInfoResponse;
    toJSON(message: QueryContractInfoResponse): unknown;
    fromPartial<I extends {
        contract_address?: string | undefined;
        contract_info?: {
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
        } | undefined;
    } & {
        contract_address?: string | undefined;
        contract_info?: ({
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
            } & Record<Exclude<keyof I["contract_info"]["created"], keyof import("./types").AbsoluteTxPosition>, never>) | undefined;
            ibc_port_id?: string | undefined;
            admin?: string | undefined;
            admin_proof?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["contract_info"], keyof ContractInfo>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryContractInfoResponse>, never>>(object: I): QueryContractInfoResponse;
};
export declare const ContractInfoWithAddress: {
    encode(message: ContractInfoWithAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ContractInfoWithAddress;
    fromJSON(object: any): ContractInfoWithAddress;
    toJSON(message: ContractInfoWithAddress): unknown;
    fromPartial<I extends {
        contract_address?: string | undefined;
        contract_info?: {
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
        } | undefined;
    } & {
        contract_address?: string | undefined;
        contract_info?: ({
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
            } & Record<Exclude<keyof I["contract_info"]["created"], keyof import("./types").AbsoluteTxPosition>, never>) | undefined;
            ibc_port_id?: string | undefined;
            admin?: string | undefined;
            admin_proof?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["contract_info"], keyof ContractInfo>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ContractInfoWithAddress>, never>>(object: I): ContractInfoWithAddress;
};
export declare const QueryContractsByCodeIdResponse: {
    encode(message: QueryContractsByCodeIdResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryContractsByCodeIdResponse;
    fromJSON(object: any): QueryContractsByCodeIdResponse;
    toJSON(message: QueryContractsByCodeIdResponse): unknown;
    fromPartial<I extends {
        contract_infos?: {
            contract_address?: string | undefined;
            contract_info?: {
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
            } | undefined;
        }[] | undefined;
    } & {
        contract_infos?: ({
            contract_address?: string | undefined;
            contract_info?: {
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
            } | undefined;
        }[] & ({
            contract_address?: string | undefined;
            contract_info?: {
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
            } | undefined;
        } & {
            contract_address?: string | undefined;
            contract_info?: ({
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
                } & Record<Exclude<keyof I["contract_infos"][number]["contract_info"]["created"], keyof import("./types").AbsoluteTxPosition>, never>) | undefined;
                ibc_port_id?: string | undefined;
                admin?: string | undefined;
                admin_proof?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["contract_infos"][number]["contract_info"], keyof ContractInfo>, never>) | undefined;
        } & Record<Exclude<keyof I["contract_infos"][number], keyof ContractInfoWithAddress>, never>)[] & Record<Exclude<keyof I["contract_infos"], keyof {
            contract_address?: string | undefined;
            contract_info?: {
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
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "contract_infos">, never>>(object: I): QueryContractsByCodeIdResponse;
};
export declare const CodeInfoResponse: {
    encode(message: CodeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CodeInfoResponse;
    fromJSON(object: any): CodeInfoResponse;
    toJSON(message: CodeInfoResponse): unknown;
    fromPartial<I extends {
        code_id?: string | undefined;
        creator?: string | undefined;
        code_hash?: string | undefined;
        source?: string | undefined;
        builder?: string | undefined;
    } & {
        code_id?: string | undefined;
        creator?: string | undefined;
        code_hash?: string | undefined;
        source?: string | undefined;
        builder?: string | undefined;
    } & Record<Exclude<keyof I, keyof CodeInfoResponse>, never>>(object: I): CodeInfoResponse;
};
export declare const QueryCodeResponse: {
    encode(message: QueryCodeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCodeResponse;
    fromJSON(object: any): QueryCodeResponse;
    toJSON(message: QueryCodeResponse): unknown;
    fromPartial<I extends {
        code_info?: {
            code_id?: string | undefined;
            creator?: string | undefined;
            code_hash?: string | undefined;
            source?: string | undefined;
            builder?: string | undefined;
        } | undefined;
        wasm?: Uint8Array | undefined;
    } & {
        code_info?: ({
            code_id?: string | undefined;
            creator?: string | undefined;
            code_hash?: string | undefined;
            source?: string | undefined;
            builder?: string | undefined;
        } & {
            code_id?: string | undefined;
            creator?: string | undefined;
            code_hash?: string | undefined;
            source?: string | undefined;
            builder?: string | undefined;
        } & Record<Exclude<keyof I["code_info"], keyof CodeInfoResponse>, never>) | undefined;
        wasm?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof QueryCodeResponse>, never>>(object: I): QueryCodeResponse;
};
export declare const QueryCodesResponse: {
    encode(message: QueryCodesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCodesResponse;
    fromJSON(object: any): QueryCodesResponse;
    toJSON(message: QueryCodesResponse): unknown;
    fromPartial<I extends {
        code_infos?: {
            code_id?: string | undefined;
            creator?: string | undefined;
            code_hash?: string | undefined;
            source?: string | undefined;
            builder?: string | undefined;
        }[] | undefined;
    } & {
        code_infos?: ({
            code_id?: string | undefined;
            creator?: string | undefined;
            code_hash?: string | undefined;
            source?: string | undefined;
            builder?: string | undefined;
        }[] & ({
            code_id?: string | undefined;
            creator?: string | undefined;
            code_hash?: string | undefined;
            source?: string | undefined;
            builder?: string | undefined;
        } & {
            code_id?: string | undefined;
            creator?: string | undefined;
            code_hash?: string | undefined;
            source?: string | undefined;
            builder?: string | undefined;
        } & Record<Exclude<keyof I["code_infos"][number], keyof CodeInfoResponse>, never>)[] & Record<Exclude<keyof I["code_infos"], keyof {
            code_id?: string | undefined;
            creator?: string | undefined;
            code_hash?: string | undefined;
            source?: string | undefined;
            builder?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "code_infos">, never>>(object: I): QueryCodesResponse;
};
export declare const QueryContractAddressResponse: {
    encode(message: QueryContractAddressResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryContractAddressResponse;
    fromJSON(object: any): QueryContractAddressResponse;
    toJSON(message: QueryContractAddressResponse): unknown;
    fromPartial<I extends {
        contract_address?: string | undefined;
    } & {
        contract_address?: string | undefined;
    } & Record<Exclude<keyof I, "contract_address">, never>>(object: I): QueryContractAddressResponse;
};
export declare const QueryContractLabelResponse: {
    encode(message: QueryContractLabelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryContractLabelResponse;
    fromJSON(object: any): QueryContractLabelResponse;
    toJSON(message: QueryContractLabelResponse): unknown;
    fromPartial<I extends {
        label?: string | undefined;
    } & {
        label?: string | undefined;
    } & Record<Exclude<keyof I, "label">, never>>(object: I): QueryContractLabelResponse;
};
export declare const QueryCodeHashResponse: {
    encode(message: QueryCodeHashResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCodeHashResponse;
    fromJSON(object: any): QueryCodeHashResponse;
    toJSON(message: QueryCodeHashResponse): unknown;
    fromPartial<I extends {
        code_hash?: string | undefined;
    } & {
        code_hash?: string | undefined;
    } & Record<Exclude<keyof I, "code_hash">, never>>(object: I): QueryCodeHashResponse;
};
export declare const DecryptedAnswer: {
    encode(message: DecryptedAnswer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DecryptedAnswer;
    fromJSON(object: any): DecryptedAnswer;
    toJSON(message: DecryptedAnswer): unknown;
    fromPartial<I extends {
        type?: string | undefined;
        input?: string | undefined;
        output_data?: string | undefined;
        output_data_as_string?: string | undefined;
    } & {
        type?: string | undefined;
        input?: string | undefined;
        output_data?: string | undefined;
        output_data_as_string?: string | undefined;
    } & Record<Exclude<keyof I, keyof DecryptedAnswer>, never>>(object: I): DecryptedAnswer;
};
export declare const DecryptedAnswers: {
    encode(message: DecryptedAnswers, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DecryptedAnswers;
    fromJSON(object: any): DecryptedAnswers;
    toJSON(message: DecryptedAnswers): unknown;
    fromPartial<I extends {
        answers?: {
            type?: string | undefined;
            input?: string | undefined;
            output_data?: string | undefined;
            output_data_as_string?: string | undefined;
        }[] | undefined;
        output_logs?: {
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        output_error?: string | undefined;
        plaintext_error?: string | undefined;
    } & {
        answers?: ({
            type?: string | undefined;
            input?: string | undefined;
            output_data?: string | undefined;
            output_data_as_string?: string | undefined;
        }[] & ({
            type?: string | undefined;
            input?: string | undefined;
            output_data?: string | undefined;
            output_data_as_string?: string | undefined;
        } & {
            type?: string | undefined;
            input?: string | undefined;
            output_data?: string | undefined;
            output_data_as_string?: string | undefined;
        } & Record<Exclude<keyof I["answers"][number], keyof DecryptedAnswer>, never>)[] & Record<Exclude<keyof I["answers"], keyof {
            type?: string | undefined;
            input?: string | undefined;
            output_data?: string | undefined;
            output_data_as_string?: string | undefined;
        }[]>, never>) | undefined;
        output_logs?: ({
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        }[] & ({
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        } & {
            type?: string | undefined;
            attributes?: ({
                key?: string | undefined;
                value?: string | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
            } & Record<Exclude<keyof I["output_logs"][number]["attributes"][number], keyof import("../../../cosmos/base/abci/v1beta1/abci").Attribute>, never>)[] & Record<Exclude<keyof I["output_logs"][number]["attributes"], keyof {
                key?: string | undefined;
                value?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["output_logs"][number], keyof StringEvent>, never>)[] & Record<Exclude<keyof I["output_logs"], keyof {
            type?: string | undefined;
            attributes?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        output_error?: string | undefined;
        plaintext_error?: string | undefined;
    } & Record<Exclude<keyof I, keyof DecryptedAnswers>, never>>(object: I): DecryptedAnswers;
};
export declare const QueryContractHistoryRequest: {
    encode(message: QueryContractHistoryRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryContractHistoryRequest;
    fromJSON(object: any): QueryContractHistoryRequest;
    toJSON(message: QueryContractHistoryRequest): unknown;
    fromPartial<I extends {
        contract_address?: string | undefined;
    } & {
        contract_address?: string | undefined;
    } & Record<Exclude<keyof I, "contract_address">, never>>(object: I): QueryContractHistoryRequest;
};
export declare const QueryContractHistoryResponse: {
    encode(message: QueryContractHistoryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryContractHistoryResponse;
    fromJSON(object: any): QueryContractHistoryResponse;
    toJSON(message: QueryContractHistoryResponse): unknown;
    fromPartial<I extends {
        entries?: {
            operation?: import("./types").ContractCodeHistoryOperationType | undefined;
            code_id?: string | undefined;
            updated?: {
                block_height?: string | undefined;
                tx_index?: string | undefined;
            } | undefined;
            msg?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        entries?: ({
            operation?: import("./types").ContractCodeHistoryOperationType | undefined;
            code_id?: string | undefined;
            updated?: {
                block_height?: string | undefined;
                tx_index?: string | undefined;
            } | undefined;
            msg?: Uint8Array | undefined;
        }[] & ({
            operation?: import("./types").ContractCodeHistoryOperationType | undefined;
            code_id?: string | undefined;
            updated?: {
                block_height?: string | undefined;
                tx_index?: string | undefined;
            } | undefined;
            msg?: Uint8Array | undefined;
        } & {
            operation?: import("./types").ContractCodeHistoryOperationType | undefined;
            code_id?: string | undefined;
            updated?: ({
                block_height?: string | undefined;
                tx_index?: string | undefined;
            } & {
                block_height?: string | undefined;
                tx_index?: string | undefined;
            } & Record<Exclude<keyof I["entries"][number]["updated"], keyof import("./types").AbsoluteTxPosition>, never>) | undefined;
            msg?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["entries"][number], keyof ContractCodeHistoryEntry>, never>)[] & Record<Exclude<keyof I["entries"], keyof {
            operation?: import("./types").ContractCodeHistoryOperationType | undefined;
            code_id?: string | undefined;
            updated?: {
                block_height?: string | undefined;
                tx_index?: string | undefined;
            } | undefined;
            msg?: Uint8Array | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "entries">, never>>(object: I): QueryContractHistoryResponse;
};
/** Query defines the gRPC querier service */
export interface Query {
    /** Query contract info by address */
    ContractInfo(request: QueryByContractAddressRequest): Promise<QueryContractInfoResponse>;
    /** Query code info by id */
    ContractsByCodeId(request: QueryByCodeIdRequest): Promise<QueryContractsByCodeIdResponse>;
    /** Query secret contract */
    QuerySecretContract(request: QuerySecretContractRequest): Promise<QuerySecretContractResponse>;
    /** Query a specific contract code by id */
    Code(request: QueryByCodeIdRequest): Promise<QueryCodeResponse>;
    /** Query all contract codes on-chain */
    Codes(request: Empty): Promise<QueryCodesResponse>;
    /** Query code hash by contract address */
    CodeHashByContractAddress(request: QueryByContractAddressRequest): Promise<QueryCodeHashResponse>;
    /** Query code hash by code id */
    CodeHashByCodeId(request: QueryByCodeIdRequest): Promise<QueryCodeHashResponse>;
    /** Query contract label by address */
    LabelByAddress(request: QueryByContractAddressRequest): Promise<QueryContractLabelResponse>;
    /** Query contract address by label */
    AddressByLabel(request: QueryByLabelRequest): Promise<QueryContractAddressResponse>;
    /** ContractHistory gets the contract code history */
    ContractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    ContractInfo(request: QueryByContractAddressRequest): Promise<QueryContractInfoResponse>;
    ContractsByCodeId(request: QueryByCodeIdRequest): Promise<QueryContractsByCodeIdResponse>;
    QuerySecretContract(request: QuerySecretContractRequest): Promise<QuerySecretContractResponse>;
    Code(request: QueryByCodeIdRequest): Promise<QueryCodeResponse>;
    Codes(request: Empty): Promise<QueryCodesResponse>;
    CodeHashByContractAddress(request: QueryByContractAddressRequest): Promise<QueryCodeHashResponse>;
    CodeHashByCodeId(request: QueryByCodeIdRequest): Promise<QueryCodeHashResponse>;
    LabelByAddress(request: QueryByContractAddressRequest): Promise<QueryContractLabelResponse>;
    AddressByLabel(request: QueryByLabelRequest): Promise<QueryContractAddressResponse>;
    ContractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
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
//# sourceMappingURL=query.d.ts.map