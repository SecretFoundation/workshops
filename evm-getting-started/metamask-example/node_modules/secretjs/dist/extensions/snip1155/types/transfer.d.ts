export declare type TransferAction = {
    token_id: string;
    from: string;
    recipient: string;
    amount: string;
    memo?: string;
};
export declare type Snip1155TransferOptions = {
    transfer: TransferAction & {
        padding?: string;
    };
};
export declare type Snip1155BatchTransferOptions = {
    batch_transfer: {
        actions: TransferAction[];
        padding?: string;
    };
};
//# sourceMappingURL=transfer.d.ts.map