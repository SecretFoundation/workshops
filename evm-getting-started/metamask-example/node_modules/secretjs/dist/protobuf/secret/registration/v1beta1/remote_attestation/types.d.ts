import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "secret.registration.remote_attestation.v1beta1";
export interface QuoteReport {
    id: string;
    timestamp: string;
    version: string;
    isv_enclave_quote_status: string;
    platform_info_blob: string;
    isv_enclave_quote_body: string;
    advisory_ids: string[];
}
export interface QuoteReportBody {
    mr_enclave: string;
    mr_signer: string;
    report_data: string;
}
export interface QuoteReportData {
    version: string;
    sign_type: string;
    report_body?: QuoteReportBody;
}
export interface EndorsedAttestationReport {
    report: Uint8Array;
    signature: Uint8Array;
    signing_cert: Uint8Array;
}
export interface SGXEC256Signature {
    gx: string;
    gy: string;
}
export interface PlatformInfoBlob {
    sgx_epid_group_flags: number;
    sgx_tcb_evaluation_flags: number;
    pse_evaluation_flags: number;
    latest_equivalent_tcb_psvn: string;
    latest_pse_isvsvn: string;
    latest_psda_svn: string;
    xeid: number;
    gid: number;
    sgx_ec256_signature_t?: SGXEC256Signature;
}
export declare const QuoteReport: {
    encode(message: QuoteReport, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QuoteReport;
    fromJSON(object: any): QuoteReport;
    toJSON(message: QuoteReport): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        timestamp?: string | undefined;
        version?: string | undefined;
        isv_enclave_quote_status?: string | undefined;
        platform_info_blob?: string | undefined;
        isv_enclave_quote_body?: string | undefined;
        advisory_ids?: string[] | undefined;
    } & {
        id?: string | undefined;
        timestamp?: string | undefined;
        version?: string | undefined;
        isv_enclave_quote_status?: string | undefined;
        platform_info_blob?: string | undefined;
        isv_enclave_quote_body?: string | undefined;
        advisory_ids?: (string[] & string[] & Record<Exclude<keyof I["advisory_ids"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QuoteReport>, never>>(object: I): QuoteReport;
};
export declare const QuoteReportBody: {
    encode(message: QuoteReportBody, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QuoteReportBody;
    fromJSON(object: any): QuoteReportBody;
    toJSON(message: QuoteReportBody): unknown;
    fromPartial<I extends {
        mr_enclave?: string | undefined;
        mr_signer?: string | undefined;
        report_data?: string | undefined;
    } & {
        mr_enclave?: string | undefined;
        mr_signer?: string | undefined;
        report_data?: string | undefined;
    } & Record<Exclude<keyof I, keyof QuoteReportBody>, never>>(object: I): QuoteReportBody;
};
export declare const QuoteReportData: {
    encode(message: QuoteReportData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QuoteReportData;
    fromJSON(object: any): QuoteReportData;
    toJSON(message: QuoteReportData): unknown;
    fromPartial<I extends {
        version?: string | undefined;
        sign_type?: string | undefined;
        report_body?: {
            mr_enclave?: string | undefined;
            mr_signer?: string | undefined;
            report_data?: string | undefined;
        } | undefined;
    } & {
        version?: string | undefined;
        sign_type?: string | undefined;
        report_body?: ({
            mr_enclave?: string | undefined;
            mr_signer?: string | undefined;
            report_data?: string | undefined;
        } & {
            mr_enclave?: string | undefined;
            mr_signer?: string | undefined;
            report_data?: string | undefined;
        } & Record<Exclude<keyof I["report_body"], keyof QuoteReportBody>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QuoteReportData>, never>>(object: I): QuoteReportData;
};
export declare const EndorsedAttestationReport: {
    encode(message: EndorsedAttestationReport, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EndorsedAttestationReport;
    fromJSON(object: any): EndorsedAttestationReport;
    toJSON(message: EndorsedAttestationReport): unknown;
    fromPartial<I extends {
        report?: Uint8Array | undefined;
        signature?: Uint8Array | undefined;
        signing_cert?: Uint8Array | undefined;
    } & {
        report?: Uint8Array | undefined;
        signature?: Uint8Array | undefined;
        signing_cert?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof EndorsedAttestationReport>, never>>(object: I): EndorsedAttestationReport;
};
export declare const SGXEC256Signature: {
    encode(message: SGXEC256Signature, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SGXEC256Signature;
    fromJSON(object: any): SGXEC256Signature;
    toJSON(message: SGXEC256Signature): unknown;
    fromPartial<I extends {
        gx?: string | undefined;
        gy?: string | undefined;
    } & {
        gx?: string | undefined;
        gy?: string | undefined;
    } & Record<Exclude<keyof I, keyof SGXEC256Signature>, never>>(object: I): SGXEC256Signature;
};
export declare const PlatformInfoBlob: {
    encode(message: PlatformInfoBlob, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PlatformInfoBlob;
    fromJSON(object: any): PlatformInfoBlob;
    toJSON(message: PlatformInfoBlob): unknown;
    fromPartial<I extends {
        sgx_epid_group_flags?: number | undefined;
        sgx_tcb_evaluation_flags?: number | undefined;
        pse_evaluation_flags?: number | undefined;
        latest_equivalent_tcb_psvn?: string | undefined;
        latest_pse_isvsvn?: string | undefined;
        latest_psda_svn?: string | undefined;
        xeid?: number | undefined;
        gid?: number | undefined;
        sgx_ec256_signature_t?: {
            gx?: string | undefined;
            gy?: string | undefined;
        } | undefined;
    } & {
        sgx_epid_group_flags?: number | undefined;
        sgx_tcb_evaluation_flags?: number | undefined;
        pse_evaluation_flags?: number | undefined;
        latest_equivalent_tcb_psvn?: string | undefined;
        latest_pse_isvsvn?: string | undefined;
        latest_psda_svn?: string | undefined;
        xeid?: number | undefined;
        gid?: number | undefined;
        sgx_ec256_signature_t?: ({
            gx?: string | undefined;
            gy?: string | undefined;
        } & {
            gx?: string | undefined;
            gy?: string | undefined;
        } & Record<Exclude<keyof I["sgx_ec256_signature_t"], keyof SGXEC256Signature>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof PlatformInfoBlob>, never>>(object: I): PlatformInfoBlob;
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