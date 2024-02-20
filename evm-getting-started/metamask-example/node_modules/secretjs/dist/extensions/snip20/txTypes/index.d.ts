import { Coin } from "../../../tx";
export interface Tx {
    id: number;
    from: string;
    sender: string;
    receiver: string;
    coins: Coin;
    memo?: string;
    block_time?: number;
    block_height?: number;
}
declare type TransferType = {
    transfer: {
        from: string;
        sender: string;
        recipient: string;
    };
};
declare type MintType = {
    mint: {
        minter: string;
        recipient: string;
    };
};
declare type BurnType = {
    burn: {
        burner: string;
        owner: string;
    };
};
declare type DepositType = {
    deposit: {};
};
declare type RedeemType = {
    redeem: {};
};
export declare type TxAction = RedeemType | DepositType | MintType | BurnType | TransferType;
export interface RichTx {
    id: number;
    action: TxAction;
    coins: Coin;
    memo?: string;
    block_time?: number;
    block_height?: number;
}
export {};
//# sourceMappingURL=index.d.ts.map