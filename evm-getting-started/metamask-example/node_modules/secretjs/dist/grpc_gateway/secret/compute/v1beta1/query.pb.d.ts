import * as CosmosBaseAbciV1beta1Abci from "../../../cosmos/base/abci/v1beta1/abci.pb";
import * as fm from "../../../fetch.pb";
import * as GoogleProtobufEmpty from "../../../google/protobuf/empty.pb";
import * as SecretComputeV1beta1Types from "./types.pb";
export declare type QuerySecretContractRequest = {
    contract_address?: string;
    query?: Uint8Array;
};
export declare type QueryByLabelRequest = {
    label?: string;
};
export declare type QueryByContractAddressRequest = {
    contract_address?: string;
};
export declare type QueryByCodeIdRequest = {
    code_id?: string;
};
export declare type QuerySecretContractResponse = {
    data?: Uint8Array;
};
export declare type QueryContractInfoResponse = {
    contract_address?: string;
    contract_info?: SecretComputeV1beta1Types.ContractInfo;
};
export declare type ContractInfoWithAddress = {
    contract_address?: string;
    contract_info?: SecretComputeV1beta1Types.ContractInfo;
};
export declare type QueryContractsByCodeIdResponse = {
    contract_infos?: ContractInfoWithAddress[];
};
export declare type CodeInfoResponse = {
    code_id?: string;
    creator?: string;
    code_hash?: string;
    source?: string;
    builder?: string;
};
export declare type QueryCodeResponse = {
    code_info?: CodeInfoResponse;
    wasm?: Uint8Array;
};
export declare type QueryCodesResponse = {
    code_infos?: CodeInfoResponse[];
};
export declare type QueryContractAddressResponse = {
    contract_address?: string;
};
export declare type QueryContractLabelResponse = {
    label?: string;
};
export declare type QueryCodeHashResponse = {
    code_hash?: string;
};
export declare type DecryptedAnswer = {
    type?: string;
    input?: string;
    output_data?: string;
    output_data_as_string?: string;
};
export declare type DecryptedAnswers = {
    answers?: DecryptedAnswer[];
    output_logs?: CosmosBaseAbciV1beta1Abci.StringEvent[];
    output_error?: string;
    plaintext_error?: string;
};
export declare type QueryContractHistoryRequest = {
    contract_address?: string;
};
export declare type QueryContractHistoryResponse = {
    entries?: SecretComputeV1beta1Types.ContractCodeHistoryEntry[];
};
export declare class Query {
    static ContractInfo(req: QueryByContractAddressRequest, initReq?: fm.InitReq): Promise<QueryContractInfoResponse>;
    static ContractsByCodeId(req: QueryByCodeIdRequest, initReq?: fm.InitReq): Promise<QueryContractsByCodeIdResponse>;
    static QuerySecretContract(req: QuerySecretContractRequest, initReq?: fm.InitReq): Promise<QuerySecretContractResponse>;
    static Code(req: QueryByCodeIdRequest, initReq?: fm.InitReq): Promise<QueryCodeResponse>;
    static Codes(req: GoogleProtobufEmpty.Empty, initReq?: fm.InitReq): Promise<QueryCodesResponse>;
    static CodeHashByContractAddress(req: QueryByContractAddressRequest, initReq?: fm.InitReq): Promise<QueryCodeHashResponse>;
    static CodeHashByCodeId(req: QueryByCodeIdRequest, initReq?: fm.InitReq): Promise<QueryCodeHashResponse>;
    static LabelByAddress(req: QueryByContractAddressRequest, initReq?: fm.InitReq): Promise<QueryContractLabelResponse>;
    static AddressByLabel(req: QueryByLabelRequest, initReq?: fm.InitReq): Promise<QueryContractAddressResponse>;
    static ContractHistory(req: QueryContractHistoryRequest, initReq?: fm.InitReq): Promise<QueryContractHistoryResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map