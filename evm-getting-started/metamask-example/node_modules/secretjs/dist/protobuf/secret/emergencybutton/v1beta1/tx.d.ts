import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "secret.emergencybutton.v1beta1";
/** MsgToggleIbcSwitch represents a message to toggle the emergencybutton status by the defined pauser. */
export interface MsgToggleIbcSwitch {
    sender: string;
}
/** MsgToggleIbcSwitchResponse defines the response type for the toggle. */
export interface MsgToggleIbcSwitchResponse {
}
export declare const MsgToggleIbcSwitch: {
    encode(message: MsgToggleIbcSwitch, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgToggleIbcSwitch;
    fromJSON(object: any): MsgToggleIbcSwitch;
    toJSON(message: MsgToggleIbcSwitch): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
    } & {
        sender?: string | undefined;
    } & Record<Exclude<keyof I, "sender">, never>>(object: I): MsgToggleIbcSwitch;
};
export declare const MsgToggleIbcSwitchResponse: {
    encode(_: MsgToggleIbcSwitchResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgToggleIbcSwitchResponse;
    fromJSON(_: any): MsgToggleIbcSwitchResponse;
    toJSON(_: MsgToggleIbcSwitchResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgToggleIbcSwitchResponse;
};
/** Msg defines the bank Msg service. */
export interface Msg {
    /** ToggleIbcSwitch defines a method for toggling the status of the emergencybutton. */
    ToggleIbcSwitch(request: MsgToggleIbcSwitch): Promise<MsgToggleIbcSwitchResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    ToggleIbcSwitch(request: MsgToggleIbcSwitch): Promise<MsgToggleIbcSwitchResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
//# sourceMappingURL=tx.d.ts.map