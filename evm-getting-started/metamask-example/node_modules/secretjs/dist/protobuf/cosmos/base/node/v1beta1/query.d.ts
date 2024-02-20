import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.base.node.v1beta1";
/** ConfigRequest defines the request structure for the Config gRPC query. */
export interface ConfigRequest {
}
/** ConfigResponse defines the response structure for the Config gRPC query. */
export interface ConfigResponse {
    minimum_gas_price: string;
}
export declare const ConfigRequest: {
    encode(_: ConfigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigRequest;
    fromJSON(_: any): ConfigRequest;
    toJSON(_: ConfigRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ConfigRequest;
};
export declare const ConfigResponse: {
    encode(message: ConfigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfigResponse;
    fromJSON(object: any): ConfigResponse;
    toJSON(message: ConfigResponse): unknown;
    fromPartial<I extends {
        minimum_gas_price?: string | undefined;
    } & {
        minimum_gas_price?: string | undefined;
    } & Record<Exclude<keyof I, "minimum_gas_price">, never>>(object: I): ConfigResponse;
};
/** Service defines the gRPC querier service for node related queries. */
export interface Service {
    /** Config queries for the operator configuration. */
    Config(request: ConfigRequest): Promise<ConfigResponse>;
}
export declare class ServiceClientImpl implements Service {
    private readonly rpc;
    constructor(rpc: Rpc);
    Config(request: ConfigRequest): Promise<ConfigResponse>;
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