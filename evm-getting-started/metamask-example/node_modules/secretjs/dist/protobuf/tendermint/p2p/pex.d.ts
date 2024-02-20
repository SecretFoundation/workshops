import * as _m0 from "protobufjs/minimal";
import { NetAddress } from "./types";
export declare const protobufPackage = "tendermint.p2p";
export interface PexRequest {
}
export interface PexAddrs {
    addrs: NetAddress[];
}
export interface Message {
    pex_request?: PexRequest | undefined;
    pex_addrs?: PexAddrs | undefined;
}
export declare const PexRequest: {
    encode(_: PexRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PexRequest;
    fromJSON(_: any): PexRequest;
    toJSON(_: PexRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): PexRequest;
};
export declare const PexAddrs: {
    encode(message: PexAddrs, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PexAddrs;
    fromJSON(object: any): PexAddrs;
    toJSON(message: PexAddrs): unknown;
    fromPartial<I extends {
        addrs?: {
            id?: string | undefined;
            ip?: string | undefined;
            port?: number | undefined;
        }[] | undefined;
    } & {
        addrs?: ({
            id?: string | undefined;
            ip?: string | undefined;
            port?: number | undefined;
        }[] & ({
            id?: string | undefined;
            ip?: string | undefined;
            port?: number | undefined;
        } & {
            id?: string | undefined;
            ip?: string | undefined;
            port?: number | undefined;
        } & Record<Exclude<keyof I["addrs"][number], keyof NetAddress>, never>)[] & Record<Exclude<keyof I["addrs"], keyof {
            id?: string | undefined;
            ip?: string | undefined;
            port?: number | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "addrs">, never>>(object: I): PexAddrs;
};
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial<I extends {
        pex_request?: {} | undefined;
        pex_addrs?: {
            addrs?: {
                id?: string | undefined;
                ip?: string | undefined;
                port?: number | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        pex_request?: ({} & {} & Record<Exclude<keyof I["pex_request"], never>, never>) | undefined;
        pex_addrs?: ({
            addrs?: {
                id?: string | undefined;
                ip?: string | undefined;
                port?: number | undefined;
            }[] | undefined;
        } & {
            addrs?: ({
                id?: string | undefined;
                ip?: string | undefined;
                port?: number | undefined;
            }[] & ({
                id?: string | undefined;
                ip?: string | undefined;
                port?: number | undefined;
            } & {
                id?: string | undefined;
                ip?: string | undefined;
                port?: number | undefined;
            } & Record<Exclude<keyof I["pex_addrs"]["addrs"][number], keyof NetAddress>, never>)[] & Record<Exclude<keyof I["pex_addrs"]["addrs"], keyof {
                id?: string | undefined;
                ip?: string | undefined;
                port?: number | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["pex_addrs"], "addrs">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Message>, never>>(object: I): Message;
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
//# sourceMappingURL=pex.d.ts.map