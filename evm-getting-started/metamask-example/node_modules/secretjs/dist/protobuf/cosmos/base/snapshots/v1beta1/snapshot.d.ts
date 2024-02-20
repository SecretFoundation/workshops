import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.base.snapshots.v1beta1";
/** Snapshot contains Tendermint state sync snapshot info. */
export interface Snapshot {
    height: string;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata?: Metadata;
}
/** Metadata contains SDK-specific snapshot metadata. */
export interface Metadata {
    /** SHA-256 chunk hashes */
    chunk_hashes: Uint8Array[];
}
/** SnapshotItem is an item contained in a rootmulti.Store snapshot. */
export interface SnapshotItem {
    store?: SnapshotStoreItem | undefined;
    iavl?: SnapshotIAVLItem | undefined;
    extension?: SnapshotExtensionMeta | undefined;
    extension_payload?: SnapshotExtensionPayload | undefined;
}
/** SnapshotStoreItem contains metadata about a snapshotted store. */
export interface SnapshotStoreItem {
    name: string;
}
/** SnapshotIAVLItem is an exported IAVL node. */
export interface SnapshotIAVLItem {
    key: Uint8Array;
    value: Uint8Array;
    /** version is block height */
    version: string;
    /** height is depth of the tree. */
    height: number;
}
/** SnapshotExtensionMeta contains metadata about an external snapshotter. */
export interface SnapshotExtensionMeta {
    name: string;
    format: number;
}
/** SnapshotExtensionPayload contains payloads of an external snapshotter. */
export interface SnapshotExtensionPayload {
    payload: Uint8Array;
}
export declare const Snapshot: {
    encode(message: Snapshot, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Snapshot;
    fromJSON(object: any): Snapshot;
    toJSON(message: Snapshot): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        format?: number | undefined;
        chunks?: number | undefined;
        hash?: Uint8Array | undefined;
        metadata?: {
            chunk_hashes?: Uint8Array[] | undefined;
        } | undefined;
    } & {
        height?: string | undefined;
        format?: number | undefined;
        chunks?: number | undefined;
        hash?: Uint8Array | undefined;
        metadata?: ({
            chunk_hashes?: Uint8Array[] | undefined;
        } & {
            chunk_hashes?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["metadata"]["chunk_hashes"], keyof Uint8Array[]>, never>) | undefined;
        } & Record<Exclude<keyof I["metadata"], "chunk_hashes">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Snapshot>, never>>(object: I): Snapshot;
};
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    fromPartial<I extends {
        chunk_hashes?: Uint8Array[] | undefined;
    } & {
        chunk_hashes?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["chunk_hashes"], keyof Uint8Array[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "chunk_hashes">, never>>(object: I): Metadata;
};
export declare const SnapshotItem: {
    encode(message: SnapshotItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SnapshotItem;
    fromJSON(object: any): SnapshotItem;
    toJSON(message: SnapshotItem): unknown;
    fromPartial<I extends {
        store?: {
            name?: string | undefined;
        } | undefined;
        iavl?: {
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
            version?: string | undefined;
            height?: number | undefined;
        } | undefined;
        extension?: {
            name?: string | undefined;
            format?: number | undefined;
        } | undefined;
        extension_payload?: {
            payload?: Uint8Array | undefined;
        } | undefined;
    } & {
        store?: ({
            name?: string | undefined;
        } & {
            name?: string | undefined;
        } & Record<Exclude<keyof I["store"], "name">, never>) | undefined;
        iavl?: ({
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
            version?: string | undefined;
            height?: number | undefined;
        } & {
            key?: Uint8Array | undefined;
            value?: Uint8Array | undefined;
            version?: string | undefined;
            height?: number | undefined;
        } & Record<Exclude<keyof I["iavl"], keyof SnapshotIAVLItem>, never>) | undefined;
        extension?: ({
            name?: string | undefined;
            format?: number | undefined;
        } & {
            name?: string | undefined;
            format?: number | undefined;
        } & Record<Exclude<keyof I["extension"], keyof SnapshotExtensionMeta>, never>) | undefined;
        extension_payload?: ({
            payload?: Uint8Array | undefined;
        } & {
            payload?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["extension_payload"], "payload">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof SnapshotItem>, never>>(object: I): SnapshotItem;
};
export declare const SnapshotStoreItem: {
    encode(message: SnapshotStoreItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SnapshotStoreItem;
    fromJSON(object: any): SnapshotStoreItem;
    toJSON(message: SnapshotStoreItem): unknown;
    fromPartial<I extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & Record<Exclude<keyof I, "name">, never>>(object: I): SnapshotStoreItem;
};
export declare const SnapshotIAVLItem: {
    encode(message: SnapshotIAVLItem, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SnapshotIAVLItem;
    fromJSON(object: any): SnapshotIAVLItem;
    toJSON(message: SnapshotIAVLItem): unknown;
    fromPartial<I extends {
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
        version?: string | undefined;
        height?: number | undefined;
    } & {
        key?: Uint8Array | undefined;
        value?: Uint8Array | undefined;
        version?: string | undefined;
        height?: number | undefined;
    } & Record<Exclude<keyof I, keyof SnapshotIAVLItem>, never>>(object: I): SnapshotIAVLItem;
};
export declare const SnapshotExtensionMeta: {
    encode(message: SnapshotExtensionMeta, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SnapshotExtensionMeta;
    fromJSON(object: any): SnapshotExtensionMeta;
    toJSON(message: SnapshotExtensionMeta): unknown;
    fromPartial<I extends {
        name?: string | undefined;
        format?: number | undefined;
    } & {
        name?: string | undefined;
        format?: number | undefined;
    } & Record<Exclude<keyof I, keyof SnapshotExtensionMeta>, never>>(object: I): SnapshotExtensionMeta;
};
export declare const SnapshotExtensionPayload: {
    encode(message: SnapshotExtensionPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SnapshotExtensionPayload;
    fromJSON(object: any): SnapshotExtensionPayload;
    toJSON(message: SnapshotExtensionPayload): unknown;
    fromPartial<I extends {
        payload?: Uint8Array | undefined;
    } & {
        payload?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, "payload">, never>>(object: I): SnapshotExtensionPayload;
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
//# sourceMappingURL=snapshot.d.ts.map