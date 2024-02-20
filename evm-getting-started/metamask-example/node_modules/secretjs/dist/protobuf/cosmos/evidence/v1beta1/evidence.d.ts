import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "../../../google/protobuf/timestamp";
export declare const protobufPackage = "cosmos.evidence.v1beta1";
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
    height: string;
    time?: Timestamp;
    power: string;
    consensus_address: string;
}
export declare const Equivocation: {
    encode(message: Equivocation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Equivocation;
    fromJSON(object: any): Equivocation;
    toJSON(message: Equivocation): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        time?: {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } | undefined;
        power?: string | undefined;
        consensus_address?: string | undefined;
    } & {
        height?: string | undefined;
        time?: ({
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["time"], keyof Timestamp>, never>) | undefined;
        power?: string | undefined;
        consensus_address?: string | undefined;
    } & Record<Exclude<keyof I, keyof Equivocation>, never>>(object: I): Equivocation;
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
//# sourceMappingURL=evidence.d.ts.map