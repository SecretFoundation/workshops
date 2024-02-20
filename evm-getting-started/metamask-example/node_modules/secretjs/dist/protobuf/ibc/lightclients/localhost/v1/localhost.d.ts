import * as _m0 from "protobufjs/minimal";
import { Height } from "../../../core/client/v1/client";
export declare const protobufPackage = "ibc.lightclients.localhost.v1";
/**
 * ClientState defines a loopback (localhost) client. It requires (read-only)
 * access to keys outside the client prefix.
 */
export interface ClientState {
    /** self chain ID */
    chain_id: string;
    /** self latest block height */
    height?: Height;
}
export declare const ClientState: {
    encode(message: ClientState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ClientState;
    fromJSON(object: any): ClientState;
    toJSON(message: ClientState): unknown;
    fromPartial<I extends {
        chain_id?: string | undefined;
        height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
    } & {
        chain_id?: string | undefined;
        height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["height"], keyof Height>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ClientState>, never>>(object: I): ClientState;
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
//# sourceMappingURL=localhost.d.ts.map