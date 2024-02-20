import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "tendermint.statesync";
export interface Message {
    snapshots_request?: SnapshotsRequest | undefined;
    snapshots_response?: SnapshotsResponse | undefined;
    chunk_request?: ChunkRequest | undefined;
    chunk_response?: ChunkResponse | undefined;
}
export interface SnapshotsRequest {
}
export interface SnapshotsResponse {
    height: string;
    format: number;
    chunks: number;
    hash: Uint8Array;
    metadata: Uint8Array;
}
export interface ChunkRequest {
    height: string;
    format: number;
    index: number;
}
export interface ChunkResponse {
    height: string;
    format: number;
    index: number;
    chunk: Uint8Array;
    missing: boolean;
}
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial<I extends {
        snapshots_request?: {} | undefined;
        snapshots_response?: {
            height?: string | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: Uint8Array | undefined;
        } | undefined;
        chunk_request?: {
            height?: string | undefined;
            format?: number | undefined;
            index?: number | undefined;
        } | undefined;
        chunk_response?: {
            height?: string | undefined;
            format?: number | undefined;
            index?: number | undefined;
            chunk?: Uint8Array | undefined;
            missing?: boolean | undefined;
        } | undefined;
    } & {
        snapshots_request?: ({} & {} & Record<Exclude<keyof I["snapshots_request"], never>, never>) | undefined;
        snapshots_response?: ({
            height?: string | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: Uint8Array | undefined;
        } & {
            height?: string | undefined;
            format?: number | undefined;
            chunks?: number | undefined;
            hash?: Uint8Array | undefined;
            metadata?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["snapshots_response"], keyof SnapshotsResponse>, never>) | undefined;
        chunk_request?: ({
            height?: string | undefined;
            format?: number | undefined;
            index?: number | undefined;
        } & {
            height?: string | undefined;
            format?: number | undefined;
            index?: number | undefined;
        } & Record<Exclude<keyof I["chunk_request"], keyof ChunkRequest>, never>) | undefined;
        chunk_response?: ({
            height?: string | undefined;
            format?: number | undefined;
            index?: number | undefined;
            chunk?: Uint8Array | undefined;
            missing?: boolean | undefined;
        } & {
            height?: string | undefined;
            format?: number | undefined;
            index?: number | undefined;
            chunk?: Uint8Array | undefined;
            missing?: boolean | undefined;
        } & Record<Exclude<keyof I["chunk_response"], keyof ChunkResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Message>, never>>(object: I): Message;
};
export declare const SnapshotsRequest: {
    encode(_: SnapshotsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SnapshotsRequest;
    fromJSON(_: any): SnapshotsRequest;
    toJSON(_: SnapshotsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): SnapshotsRequest;
};
export declare const SnapshotsResponse: {
    encode(message: SnapshotsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SnapshotsResponse;
    fromJSON(object: any): SnapshotsResponse;
    toJSON(message: SnapshotsResponse): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        format?: number | undefined;
        chunks?: number | undefined;
        hash?: Uint8Array | undefined;
        metadata?: Uint8Array | undefined;
    } & {
        height?: string | undefined;
        format?: number | undefined;
        chunks?: number | undefined;
        hash?: Uint8Array | undefined;
        metadata?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof SnapshotsResponse>, never>>(object: I): SnapshotsResponse;
};
export declare const ChunkRequest: {
    encode(message: ChunkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChunkRequest;
    fromJSON(object: any): ChunkRequest;
    toJSON(message: ChunkRequest): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        format?: number | undefined;
        index?: number | undefined;
    } & {
        height?: string | undefined;
        format?: number | undefined;
        index?: number | undefined;
    } & Record<Exclude<keyof I, keyof ChunkRequest>, never>>(object: I): ChunkRequest;
};
export declare const ChunkResponse: {
    encode(message: ChunkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ChunkResponse;
    fromJSON(object: any): ChunkResponse;
    toJSON(message: ChunkResponse): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        format?: number | undefined;
        index?: number | undefined;
        chunk?: Uint8Array | undefined;
        missing?: boolean | undefined;
    } & {
        height?: string | undefined;
        format?: number | undefined;
        index?: number | undefined;
        chunk?: Uint8Array | undefined;
        missing?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof ChunkResponse>, never>>(object: I): ChunkResponse;
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