import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.capability.v1beta1";
/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface Capability {
    index: string;
}
/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */
export interface Owner {
    module: string;
    name: string;
}
/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */
export interface CapabilityOwners {
    owners: Owner[];
}
export declare const Capability: {
    encode(message: Capability, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Capability;
    fromJSON(object: any): Capability;
    toJSON(message: Capability): unknown;
    fromPartial<I extends {
        index?: string | undefined;
    } & {
        index?: string | undefined;
    } & Record<Exclude<keyof I, "index">, never>>(object: I): Capability;
};
export declare const Owner: {
    encode(message: Owner, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Owner;
    fromJSON(object: any): Owner;
    toJSON(message: Owner): unknown;
    fromPartial<I extends {
        module?: string | undefined;
        name?: string | undefined;
    } & {
        module?: string | undefined;
        name?: string | undefined;
    } & Record<Exclude<keyof I, keyof Owner>, never>>(object: I): Owner;
};
export declare const CapabilityOwners: {
    encode(message: CapabilityOwners, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CapabilityOwners;
    fromJSON(object: any): CapabilityOwners;
    toJSON(message: CapabilityOwners): unknown;
    fromPartial<I extends {
        owners?: {
            module?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
    } & {
        owners?: ({
            module?: string | undefined;
            name?: string | undefined;
        }[] & ({
            module?: string | undefined;
            name?: string | undefined;
        } & {
            module?: string | undefined;
            name?: string | undefined;
        } & Record<Exclude<keyof I["owners"][number], keyof Owner>, never>)[] & Record<Exclude<keyof I["owners"], keyof {
            module?: string | undefined;
            name?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "owners">, never>>(object: I): CapabilityOwners;
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
//# sourceMappingURL=capability.d.ts.map