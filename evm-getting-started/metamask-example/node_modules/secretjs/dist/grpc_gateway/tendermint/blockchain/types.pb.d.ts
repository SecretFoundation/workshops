import * as TendermintTypesBlock from "../types/block.pb";
declare type Absent<T, K extends keyof T> = {
    [k in Exclude<keyof T, K>]?: undefined;
};
declare type OneOf<T> = {
    [k in keyof T]?: undefined;
} | (keyof T extends infer K ? (K extends string & keyof T ? {
    [k in K]: T[K];
} & Absent<T, K> : never) : never);
export declare type BlockRequest = {
    height?: string;
};
export declare type NoBlockResponse = {
    height?: string;
};
export declare type BlockResponse = {
    block?: TendermintTypesBlock.Block;
};
export declare type StatusRequest = {};
export declare type StatusResponse = {
    height?: string;
    base?: string;
};
declare type BaseMessage = {};
export declare type Message = BaseMessage & OneOf<{
    block_request: BlockRequest;
    no_block_response: NoBlockResponse;
    block_response: BlockResponse;
    status_request: StatusRequest;
    status_response: StatusResponse;
}>;
export {};
//# sourceMappingURL=types.pb.d.ts.map