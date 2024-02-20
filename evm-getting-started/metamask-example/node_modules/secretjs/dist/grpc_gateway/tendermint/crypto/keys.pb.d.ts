declare type Absent<T, K extends keyof T> = {
    [k in Exclude<keyof T, K>]?: undefined;
};
declare type OneOf<T> = {
    [k in keyof T]?: undefined;
} | (keyof T extends infer K ? (K extends string & keyof T ? {
    [k in K]: T[K];
} & Absent<T, K> : never) : never);
declare type BasePublicKey = {};
export declare type PublicKey = BasePublicKey & OneOf<{
    ed25519: Uint8Array;
    secp256k1: Uint8Array;
}>;
export {};
//# sourceMappingURL=keys.pb.d.ts.map