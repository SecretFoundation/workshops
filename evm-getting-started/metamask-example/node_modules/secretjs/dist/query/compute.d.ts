import { EncryptionUtils } from "../encryption";
import { Empty } from "../grpc_gateway/google/protobuf/empty.pb";
import { QueryByCodeIdRequest, QueryByContractAddressRequest, QueryByLabelRequest, QueryCodeHashResponse, QueryCodeResponse, QueryCodesResponse, QueryContractAddressResponse, QueryContractHistoryRequest, QueryContractInfoResponse, QueryContractLabelResponse, QueryContractsByCodeIdResponse } from "../grpc_gateway/secret/compute/v1beta1/query.pb";
import { AbsoluteTxPosition, ContractCodeHistoryOperationType } from "../grpc_gateway/secret/compute/v1beta1/types.pb";
export declare type QueryContractRequest<T> = {
    /** The address of the contract */
    contract_address: string;
    /** The SHA256 hash value of the contract's WASM bytecode, represented as case-insensitive 64
     * character hex string.
     * This is used to make sure only the contract that's being invoked can decrypt the query data.
     *
     * code_hash is an optional parameter but using it will result in way faster execution time.
     *
     * Valid examples:
     * - "af74387e276be8874f07bec3a87023ee49b0e7ebe08178c49d0a49c3c98ed60e"
     * - "0xaf74387e276be8874f07bec3a87023ee49b0e7ebe08178c49d0a49c3c98ed60e"
     * - "AF74387E276BE8874F07BEC3A87023EE49B0E7EBE08178C49D0A49C3C98ED60E"
     * - "0xAF74387E276BE8874F07BEC3A87023EE49B0E7EBE08178C49D0A49C3C98ED60E"
     */
    code_hash?: string;
    /** A JSON object that will be passed to the contract as a query */
    query: T;
};
export declare type ContractCodeHistoryEntry = {
    operation: ContractCodeHistoryOperationType;
    code_id: string;
    updated: AbsoluteTxPosition;
    msg: string;
};
export declare class ComputeQuerier {
    private url;
    private encryption?;
    private codeHashCache;
    constructor(url: string, encryption?: EncryptionUtils | undefined);
    contractInfo(req: QueryByContractAddressRequest, headers?: HeadersInit): Promise<QueryContractInfoResponse>;
    contractsByCodeId(req: QueryByCodeIdRequest, headers?: HeadersInit): Promise<QueryContractsByCodeIdResponse>;
    code(req: QueryByCodeIdRequest, headers?: HeadersInit): Promise<QueryCodeResponse>;
    codes(req: Empty, headers?: HeadersInit): Promise<QueryCodesResponse>;
    codeHashByContractAddress(req: QueryByContractAddressRequest, headers?: HeadersInit): Promise<QueryCodeHashResponse>;
    codeHashByCodeId(req: QueryByCodeIdRequest, headers?: HeadersInit): Promise<QueryCodeHashResponse>;
    labelByAddress(req: QueryByContractAddressRequest, headers?: HeadersInit): Promise<QueryContractLabelResponse>;
    addressByLabel(req: QueryByLabelRequest, headers?: HeadersInit): Promise<QueryContractAddressResponse>;
    /**
     * Query a Secret Contract.
     * May return a string on error.
     */
    queryContract<T extends object, R extends any>({ contract_address: contractAddress, code_hash: codeHash, query, }: QueryContractRequest<T>, headers?: HeadersInit): Promise<R>;
    contractHistory(req: QueryContractHistoryRequest, headers?: HeadersInit): Promise<{
        entries: ContractCodeHistoryEntry[];
    }>;
}
//# sourceMappingURL=compute.d.ts.map