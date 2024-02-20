import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "secret.intertx.v1beta1";
/** MsgRegisterAccount registers an interchain account for the given owner over the specified connection pair */
export interface MsgRegisterAccount {
    owner: string;
    connection_id: string;
    version: string;
}
/** MsgRegisterAccountResponse is the response type for Msg/RegisterAccount */
export interface MsgRegisterAccountResponse {
}
/** MsgSubmitTx creates and submits an arbitrary transaction msg to be executed using an interchain account */
export interface MsgSubmitTx {
    owner: Uint8Array;
    connection_id: string;
    msg?: Any;
}
/** MsgSubmitTxResponse defines the MsgSubmitTx response type */
export interface MsgSubmitTxResponse {
}
export declare const MsgRegisterAccount: {
    encode(message: MsgRegisterAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgRegisterAccount;
    fromJSON(object: any): MsgRegisterAccount;
    toJSON(message: MsgRegisterAccount): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        connection_id?: string | undefined;
        version?: string | undefined;
    } & {
        owner?: string | undefined;
        connection_id?: string | undefined;
        version?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgRegisterAccount>, never>>(object: I): MsgRegisterAccount;
};
export declare const MsgRegisterAccountResponse: {
    encode(_: MsgRegisterAccountResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgRegisterAccountResponse;
    fromJSON(_: any): MsgRegisterAccountResponse;
    toJSON(_: MsgRegisterAccountResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgRegisterAccountResponse;
};
export declare const MsgSubmitTx: {
    encode(message: MsgSubmitTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgSubmitTx;
    fromJSON(object: any): MsgSubmitTx;
    toJSON(message: MsgSubmitTx): unknown;
    fromPartial<I extends {
        owner?: Uint8Array | undefined;
        connection_id?: string | undefined;
        msg?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        owner?: Uint8Array | undefined;
        connection_id?: string | undefined;
        msg?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["msg"], keyof Any>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgSubmitTx>, never>>(object: I): MsgSubmitTx;
};
export declare const MsgSubmitTxResponse: {
    encode(_: MsgSubmitTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgSubmitTxResponse;
    fromJSON(_: any): MsgSubmitTxResponse;
    toJSON(_: MsgSubmitTxResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSubmitTxResponse;
};
/** Msg defines the ica-authentication Msg service. */
export interface Msg {
    /** Register defines a rpc handler for MsgRegisterAccount */
    RegisterAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse>;
    SubmitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RegisterAccount(request: MsgRegisterAccount): Promise<MsgRegisterAccountResponse>;
    SubmitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
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
//# sourceMappingURL=tx.d.ts.map