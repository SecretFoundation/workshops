import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "tendermint.mempool";
export interface Txs {
    txs: Uint8Array[];
}
export interface Message {
    txs?: Txs | undefined;
}
export declare const Txs: {
    encode(message: Txs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Txs;
    fromJSON(object: any): Txs;
    toJSON(message: Txs): unknown;
    fromPartial<I extends {
        txs?: Uint8Array[] | undefined;
    } & {
        txs?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["txs"], keyof Uint8Array[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "txs">, never>>(object: I): Txs;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial<I extends {
        txs?: {
            txs?: Uint8Array[] | undefined;
        } | undefined;
    } & {
        txs?: ({
            txs?: Uint8Array[] | undefined;
        } & {
            txs?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["txs"]["txs"], keyof Uint8Array[]>, never>) | undefined;
        } & Record<Exclude<keyof I["txs"], "txs">, never>) | undefined;
    } & Record<Exclude<keyof I, "txs">, never>>(object: I): Message;
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