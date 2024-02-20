import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "tendermint.p2p";
export interface NetAddress {
    id: string;
    ip: string;
    port: number;
}
export interface ProtocolVersion {
    p2p: string;
    block: string;
    app: string;
}
export interface DefaultNodeInfo {
    protocol_version?: ProtocolVersion;
    default_node_id: string;
    listen_addr: string;
    network: string;
    version: string;
    channels: Uint8Array;
    moniker: string;
    other?: DefaultNodeInfoOther;
}
export interface DefaultNodeInfoOther {
    tx_index: string;
    rpc_address: string;
}
export declare const NetAddress: {
    encode(message: NetAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): NetAddress;
    fromJSON(object: any): NetAddress;
    toJSON(message: NetAddress): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        ip?: string | undefined;
        port?: number | undefined;
    } & {
        id?: string | undefined;
        ip?: string | undefined;
        port?: number | undefined;
    } & Record<Exclude<keyof I, keyof NetAddress>, never>>(object: I): NetAddress;
};
export declare const ProtocolVersion: {
    encode(message: ProtocolVersion, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProtocolVersion;
    fromJSON(object: any): ProtocolVersion;
    toJSON(message: ProtocolVersion): unknown;
    fromPartial<I extends {
        p2p?: string | undefined;
        block?: string | undefined;
        app?: string | undefined;
    } & {
        p2p?: string | undefined;
        block?: string | undefined;
        app?: string | undefined;
    } & Record<Exclude<keyof I, keyof ProtocolVersion>, never>>(object: I): ProtocolVersion;
};
export declare const DefaultNodeInfo: {
    encode(message: DefaultNodeInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DefaultNodeInfo;
    fromJSON(object: any): DefaultNodeInfo;
    toJSON(message: DefaultNodeInfo): unknown;
    fromPartial<I extends {
        protocol_version?: {
            p2p?: string | undefined;
            block?: string | undefined;
            app?: string | undefined;
        } | undefined;
        default_node_id?: string | undefined;
        listen_addr?: string | undefined;
        network?: string | undefined;
        version?: string | undefined;
        channels?: Uint8Array | undefined;
        moniker?: string | undefined;
        other?: {
            tx_index?: string | undefined;
            rpc_address?: string | undefined;
        } | undefined;
    } & {
        protocol_version?: ({
            p2p?: string | undefined;
            block?: string | undefined;
            app?: string | undefined;
        } & {
            p2p?: string | undefined;
            block?: string | undefined;
            app?: string | undefined;
        } & Record<Exclude<keyof I["protocol_version"], keyof ProtocolVersion>, never>) | undefined;
        default_node_id?: string | undefined;
        listen_addr?: string | undefined;
        network?: string | undefined;
        version?: string | undefined;
        channels?: Uint8Array | undefined;
        moniker?: string | undefined;
        other?: ({
            tx_index?: string | undefined;
            rpc_address?: string | undefined;
        } & {
            tx_index?: string | undefined;
            rpc_address?: string | undefined;
        } & Record<Exclude<keyof I["other"], keyof DefaultNodeInfoOther>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof DefaultNodeInfo>, never>>(object: I): DefaultNodeInfo;
};
export declare const DefaultNodeInfoOther: {
    encode(message: DefaultNodeInfoOther, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DefaultNodeInfoOther;
    fromJSON(object: any): DefaultNodeInfoOther;
    toJSON(message: DefaultNodeInfoOther): unknown;
    fromPartial<I extends {
        tx_index?: string | undefined;
        rpc_address?: string | undefined;
    } & {
        tx_index?: string | undefined;
        rpc_address?: string | undefined;
    } & Record<Exclude<keyof I, keyof DefaultNodeInfoOther>, never>>(object: I): DefaultNodeInfoOther;
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