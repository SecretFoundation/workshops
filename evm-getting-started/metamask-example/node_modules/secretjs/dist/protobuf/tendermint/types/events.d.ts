import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "tendermint.types";
export interface EventDataRoundState {
    height: string;
    round: number;
    step: string;
}
export declare const EventDataRoundState: {
    encode(message: EventDataRoundState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EventDataRoundState;
    fromJSON(object: any): EventDataRoundState;
    toJSON(message: EventDataRoundState): unknown;
    fromPartial<I extends {
        height?: string | undefined;
        round?: number | undefined;
        step?: string | undefined;
    } & {
        height?: string | undefined;
        round?: number | undefined;
        step?: string | undefined;
    } & Record<Exclude<keyof I, keyof EventDataRoundState>, never>>(object: I): EventDataRoundState;
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
//# sourceMappingURL=events.d.ts.map