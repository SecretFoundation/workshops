import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "ibc.applications.fee.v1";
/** IncentivizedAcknowledgement is the acknowledgement format to be used by applications wrapped in the fee middleware */
export interface IncentivizedAcknowledgement {
    /** the underlying app acknowledgement bytes */
    app_acknowledgement: Uint8Array;
    /** the relayer address which submits the recv packet message */
    forward_relayer_address: string;
    /** success flag of the base application callback */
    underlying_app_success: boolean;
}
export declare const IncentivizedAcknowledgement: {
    encode(message: IncentivizedAcknowledgement, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IncentivizedAcknowledgement;
    fromJSON(object: any): IncentivizedAcknowledgement;
    toJSON(message: IncentivizedAcknowledgement): unknown;
    fromPartial<I extends {
        app_acknowledgement?: Uint8Array | undefined;
        forward_relayer_address?: string | undefined;
        underlying_app_success?: boolean | undefined;
    } & {
        app_acknowledgement?: Uint8Array | undefined;
        forward_relayer_address?: string | undefined;
        underlying_app_success?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof IncentivizedAcknowledgement>, never>>(object: I): IncentivizedAcknowledgement;
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
//# sourceMappingURL=ack.d.ts.map