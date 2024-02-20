declare type Absent<T, K extends keyof T> = {
    [k in Exclude<keyof T, K>]?: undefined;
};
declare type OneOf<T> = {
    [k in keyof T]?: undefined;
} | (keyof T extends infer K ? (K extends string & keyof T ? {
    [k in K]: T[K];
} & Absent<T, K> : never) : never);
declare type BaseMessage = {};
export declare type Message = BaseMessage & OneOf<{
    snapshots_request: SnapshotsRequest;
    snapshots_response: SnapshotsResponse;
    chunk_request: ChunkRequest;
    chunk_response: ChunkResponse;
}>;
export declare type SnapshotsRequest = {};
export declare type SnapshotsResponse = {
    height?: string;
    format?: number;
    chunks?: number;
    hash?: Uint8Array;
    metadata?: Uint8Array;
};
export declare type ChunkRequest = {
    height?: string;
    format?: number;
    index?: number;
};
export declare type ChunkResponse = {
    height?: string;
    format?: number;
    index?: number;
    chunk?: Uint8Array;
    missing?: boolean;
};
export {};
//# sourceMappingURL=types.pb.d.ts.map