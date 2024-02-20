import * as TendermintP2pTypes from "./types.pb";
declare type Absent<T, K extends keyof T> = {
    [k in Exclude<keyof T, K>]?: undefined;
};
declare type OneOf<T> = {
    [k in keyof T]?: undefined;
} | (keyof T extends infer K ? (K extends string & keyof T ? {
    [k in K]: T[K];
} & Absent<T, K> : never) : never);
export declare type PexRequest = {};
export declare type PexAddrs = {
    addrs?: TendermintP2pTypes.NetAddress[];
};
declare type BaseMessage = {};
export declare type Message = BaseMessage & OneOf<{
    pex_request: PexRequest;
    pex_addrs: PexAddrs;
}>;
export {};
//# sourceMappingURL=pex.pb.d.ts.map