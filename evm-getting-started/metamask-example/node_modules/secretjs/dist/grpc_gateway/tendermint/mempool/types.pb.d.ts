declare type Absent<T, K extends keyof T> = {
    [k in Exclude<keyof T, K>]?: undefined;
};
declare type OneOf<T> = {
    [k in keyof T]?: undefined;
} | (keyof T extends infer K ? (K extends string & keyof T ? {
    [k in K]: T[K];
} & Absent<T, K> : never) : never);
export declare type Txs = {
    txs?: Uint8Array[];
};
declare type BaseMessage = {};
export declare type Message = BaseMessage & OneOf<{
    txs: Txs;
}>;
export {};
//# sourceMappingURL=types.pb.d.ts.map