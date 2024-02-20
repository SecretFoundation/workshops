import * as _m0 from "protobufjs/minimal";
import { ResponseCheckTx, ResponseDeliverTx } from "../../abci/types";
export declare const protobufPackage = "tendermint.rpc.grpc";
export interface RequestPing {
}
export interface RequestBroadcastTx {
    tx: Uint8Array;
}
export interface ResponsePing {
}
export interface ResponseBroadcastTx {
    check_tx?: ResponseCheckTx;
    deliver_tx?: ResponseDeliverTx;
}
export declare const RequestPing: {
    encode(_: RequestPing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RequestPing;
    fromJSON(_: any): RequestPing;
    toJSON(_: RequestPing): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RequestPing;
};
export declare const RequestBroadcastTx: {
    encode(message: RequestBroadcastTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RequestBroadcastTx;
    fromJSON(object: any): RequestBroadcastTx;
    toJSON(message: RequestBroadcastTx): unknown;
    fromPartial<I extends {
        tx?: Uint8Array | undefined;
    } & {
        tx?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "tx">, never>>(object: I): RequestBroadcastTx;
};
export declare const ResponsePing: {
    encode(_: ResponsePing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResponsePing;
    fromJSON(_: any): ResponsePing;
    toJSON(_: ResponsePing): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ResponsePing;
};
export declare const ResponseBroadcastTx: {
    encode(message: ResponseBroadcastTx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ResponseBroadcastTx;
    fromJSON(object: any): ResponseBroadcastTx;
    toJSON(message: ResponseBroadcastTx): unknown;
    fromPartial<I extends {
        check_tx?: {
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
            sender?: string | undefined;
            priority?: string | undefined;
            mempool_error?: string | undefined;
        } | undefined;
        deliver_tx?: {
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
        } | undefined;
    } & {
        check_tx?: ({
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
            sender?: string | undefined;
            priority?: string | undefined;
            mempool_error?: string | undefined;
        } & {
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & Record<Exclude<keyof I["check_tx"]["events"][number]["attributes"][number], keyof import("../../abci/types").EventAttribute>, never>)[] & Record<Exclude<keyof I["check_tx"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["check_tx"]["events"][number], keyof import("../../abci/types").Event>, never>)[] & Record<Exclude<keyof I["check_tx"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
            codespace?: string | undefined;
            sender?: string | undefined;
            priority?: string | undefined;
            mempool_error?: string | undefined;
        } & Record<Exclude<keyof I["check_tx"], keyof ResponseCheckTx>, never>) | undefined;
        deliver_tx?: ({
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            events?: {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] | undefined;
            codespace?: string | undefined;
        } & {
            code?: number | undefined;
            data?: Uint8Array | undefined;
            log?: string | undefined;
            info?: string | undefined;
            gas_wanted?: string | undefined;
            gas_used?: string | undefined;
            events?: ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[] & ({
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            } & {
                type?: string | undefined;
                attributes?: ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] & ({
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                } & Record<Exclude<keyof I["deliver_tx"]["events"][number]["attributes"][number], keyof import("../../abci/types").EventAttribute>, never>)[] & Record<Exclude<keyof I["deliver_tx"]["events"][number]["attributes"], keyof {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["deliver_tx"]["events"][number], keyof import("../../abci/types").Event>, never>)[] & Record<Exclude<keyof I["deliver_tx"]["events"], keyof {
                type?: string | undefined;
                attributes?: {
                    key?: Uint8Array | undefined;
                    value?: Uint8Array | undefined;
                    index?: boolean | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
            codespace?: string | undefined;
        } & Record<Exclude<keyof I["deliver_tx"], keyof ResponseDeliverTx>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ResponseBroadcastTx>, never>>(object: I): ResponseBroadcastTx;
};
export interface BroadcastAPI {
    Ping(request: RequestPing): Promise<ResponsePing>;
    BroadcastTx(request: RequestBroadcastTx): Promise<ResponseBroadcastTx>;
}
export declare class BroadcastAPIClientImpl implements BroadcastAPI {
    private readonly rpc;
    constructor(rpc: Rpc);
    Ping(request: RequestPing): Promise<ResponsePing>;
    BroadcastTx(request: RequestBroadcastTx): Promise<ResponseBroadcastTx>;
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
//# sourceMappingURL=types.d.ts.map