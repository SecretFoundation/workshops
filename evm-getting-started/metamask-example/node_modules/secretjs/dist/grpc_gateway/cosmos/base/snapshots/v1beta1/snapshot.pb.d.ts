declare type Absent<T, K extends keyof T> = {
    [k in Exclude<keyof T, K>]?: undefined;
};
declare type OneOf<T> = {
    [k in keyof T]?: undefined;
} | (keyof T extends infer K ? (K extends string & keyof T ? {
    [k in K]: T[K];
} & Absent<T, K> : never) : never);
export declare type Snapshot = {
    height?: string;
    format?: number;
    chunks?: number;
    hash?: Uint8Array;
    metadata?: Metadata;
};
export declare type Metadata = {
    chunk_hashes?: Uint8Array[];
};
declare type BaseSnapshotItem = {};
export declare type SnapshotItem = BaseSnapshotItem & OneOf<{
    store: SnapshotStoreItem;
    iavl: SnapshotIAVLItem;
    extension: SnapshotExtensionMeta;
    extension_payload: SnapshotExtensionPayload;
}>;
export declare type SnapshotStoreItem = {
    name?: string;
};
export declare type SnapshotIAVLItem = {
    key?: Uint8Array;
    value?: Uint8Array;
    version?: string;
    height?: number;
};
export declare type SnapshotExtensionMeta = {
    name?: string;
    format?: number;
};
export declare type SnapshotExtensionPayload = {
    payload?: Uint8Array;
};
export {};
//# sourceMappingURL=snapshot.pb.d.ts.map