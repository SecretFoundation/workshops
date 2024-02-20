import * as _m0 from "protobufjs/minimal";
import { MasterKey } from "./msg";
import { RegistrationNodeInfo } from "./types";
export declare const protobufPackage = "secret.registration.v1beta1";
export interface GenesisState {
    registration: RegistrationNodeInfo[];
    node_exch_master_key?: MasterKey;
    io_master_key?: MasterKey;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        registration?: {
            certificate?: Uint8Array | undefined;
            encrypted_seed?: Uint8Array | undefined;
        }[] | undefined;
        node_exch_master_key?: {
            bytes?: Uint8Array | undefined;
        } | undefined;
        io_master_key?: {
            bytes?: Uint8Array | undefined;
        } | undefined;
    } & {
        registration?: ({
            certificate?: Uint8Array | undefined;
            encrypted_seed?: Uint8Array | undefined;
        }[] & ({
            certificate?: Uint8Array | undefined;
            encrypted_seed?: Uint8Array | undefined;
        } & {
            certificate?: Uint8Array | undefined;
            encrypted_seed?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["registration"][number], keyof RegistrationNodeInfo>, never>)[] & Record<Exclude<keyof I["registration"], keyof {
            certificate?: Uint8Array | undefined;
            encrypted_seed?: Uint8Array | undefined;
        }[]>, never>) | undefined;
        node_exch_master_key?: ({
            bytes?: Uint8Array | undefined;
        } & {
            bytes?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["node_exch_master_key"], "bytes">, never>) | undefined;
        io_master_key?: ({
            bytes?: Uint8Array | undefined;
        } & {
            bytes?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["io_master_key"], "bytes">, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
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
//# sourceMappingURL=genesis.d.ts.map