import * as _m0 from "protobufjs/minimal";
import { Params } from "./params";
export declare const protobufPackage = "secret.emergencybutton.v1beta1";
/** ParamsRequest is the request type for the Query/Params RPC method. */
export interface ParamsRequest {
}
/** ParamsResponse is the response type for the Query/Params RPC method. */
export interface ParamsResponse {
    /** params defines the parameters of the module. */
    params?: Params;
}
export declare const ParamsRequest: {
    encode(_: ParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsRequest;
    fromJSON(_: any): ParamsRequest;
    toJSON(_: ParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ParamsRequest;
};
export declare const ParamsResponse: {
    encode(message: ParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ParamsResponse;
    fromJSON(object: any): ParamsResponse;
    toJSON(message: ParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            switch_status?: string | undefined;
            pauser_address?: string | undefined;
        } | undefined;
    } & {
        params?: ({
            switch_status?: string | undefined;
            pauser_address?: string | undefined;
        } & {
            switch_status?: string | undefined;
            pauser_address?: string | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, "params">, never>>(object: I): ParamsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Params defines a gRPC query method that returns the emergencybutton module's
     * parameters.
     */
    Params(request: ParamsRequest): Promise<ParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: ParamsRequest): Promise<ParamsResponse>;
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