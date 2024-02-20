export declare type SendAction = {
    token_id: string;
    from: string;
    recipient: string;
    recipient_code_hash?: string;
    amount: string;
    msg?: BinaryData;
    memo?: string;
};
export declare type Snip1155SendOptions = {
    send: SendAction & {
        padding?: string;
    };
};
export declare type Snip1155BatchSendOptions = {
    batch_send: {
        actions: SendAction[];
        padding?: string;
    };
};
//# sourceMappingURL=send.d.ts.map