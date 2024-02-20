import * as _m0 from "protobufjs/minimal";
import { Params, DenomTrace } from "./transfer";
export declare const protobufPackage = "ibc.applications.transfer.v1";
/** GenesisState defines the ibc-transfer genesis state */
export interface GenesisState {
    port_id: string;
    denom_traces: DenomTrace[];
    params?: Params;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        denom_traces?: {
            path?: string | undefined;
            base_denom?: string | undefined;
        }[] | undefined;
        params?: {
            send_enabled?: boolean | undefined;
            receive_enabled?: boolean | undefined;
        } | undefined;
    } & {
        port_id?: string | undefined;
        denom_traces?: ({
            path?: string | undefined;
            base_denom?: string | undefined;
        }[] & ({
            path?: string | undefined;
            base_denom?: string | undefined;
        } & {
            path?: string | undefined;
            base_denom?: string | undefined;
        } & Record<Exclude<keyof I["denom_traces"][number], keyof DenomTrace>, never>)[] & Record<Exclude<keyof I["denom_traces"], keyof {
            path?: string | undefined;
            base_denom?: string | undefined;
        }[]>, never>) | undefined;
        params?: ({
            send_enabled?: boolean | undefined;
            receive_enabled?: boolean | undefined;
        } & {
            send_enabled?: boolean | undefined;
            receive_enabled?: boolean | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
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