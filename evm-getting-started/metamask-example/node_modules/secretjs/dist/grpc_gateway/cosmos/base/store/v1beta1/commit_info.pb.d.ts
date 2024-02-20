export declare type CommitInfo = {
    version?: string;
    store_infos?: StoreInfo[];
};
export declare type StoreInfo = {
    name?: string;
    commit_id?: CommitID;
};
export declare type CommitID = {
    version?: string;
    hash?: Uint8Array;
};
//# sourceMappingURL=commit_info.pb.d.ts.map