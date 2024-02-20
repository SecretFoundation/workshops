declare type Absent<T, K extends keyof T> = {
    [k in Exclude<keyof T, K>]?: undefined;
};
declare type OneOf<T> = {
    [k in keyof T]?: undefined;
} | (keyof T extends infer K ? (K extends string & keyof T ? {
    [k in K]: T[K];
} & Absent<T, K> : never) : never);
export declare type Http = {
    rules?: HttpRule[];
    fully_decode_reserved_expansion?: boolean;
};
declare type BaseHttpRule = {
    selector?: string;
    body?: string;
    response_body?: string;
    additional_bindings?: HttpRule[];
};
export declare type HttpRule = BaseHttpRule & OneOf<{
    get: string;
    put: string;
    post: string;
    delete: string;
    patch: string;
    custom: CustomHttpPattern;
}>;
export declare type CustomHttpPattern = {
    kind?: string;
    path?: string;
};
export {};
//# sourceMappingURL=http.pb.d.ts.map