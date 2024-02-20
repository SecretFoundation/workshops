import * as _m0 from "protobufjs/minimal";
import { Params } from "./auth";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "cosmos.auth.v1beta1";
/** GenesisState defines the auth module's genesis state. */
export interface GenesisState {
    /** params defines all the paramaters of the module. */
    params?: Params;
    /** accounts are the accounts present at genesis. */
    accounts: Any[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            max_memo_characters?: string | undefined;
            tx_sig_limit?: string | undefined;
            tx_size_cost_per_byte?: string | undefined;
            sig_verify_cost_ed25519?: string | undefined;
            sig_verify_cost_secp256k1?: string | undefined;
        } | undefined;
        accounts?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        params?: ({
            max_memo_characters?: string | undefined;
            tx_sig_limit?: string | undefined;
            tx_size_cost_per_byte?: string | undefined;
            sig_verify_cost_ed25519?: string | undefined;
            sig_verify_cost_secp256k1?: string | undefined;
        } & {
            max_memo_characters?: string | undefined;
            tx_sig_limit?: string | undefined;
            tx_size_cost_per_byte?: string | undefined;
            sig_verify_cost_ed25519?: string | undefined;
            sig_verify_cost_secp256k1?: string | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        accounts?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        }[] & ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["accounts"][number], keyof Any>, never>)[] & Record<Exclude<keyof I["accounts"], keyof {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        }[]>, never>) | undefined;
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