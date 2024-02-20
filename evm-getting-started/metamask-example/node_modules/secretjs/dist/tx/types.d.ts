import { EncryptionUtils } from "..";
export interface ProtoMsg {
    type_url: string;
    value: any;
    encode(): Promise<Uint8Array>;
}
export declare type AminoMsg = {
    type: string;
    value: any;
};
export interface Msg {
    toProto(utils: EncryptionUtils): Promise<ProtoMsg>;
    toAmino(utils: EncryptionUtils): Promise<AminoMsg>;
}
export interface MsgParams {
}
/**
 * Coin defines a token with a denomination and an amount.
 *
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */
export declare type Coin = {
    denom: string;
    amount: string;
};
/** Input models transaction input for MsgMultiSend. */
export declare type Input = {
    address: string;
    coins: Coin[];
};
/** Output models transaction outputs for MsgMultiSend. */
export declare type Output = {
    address: string;
    coins: Coin[];
};
//# sourceMappingURL=types.d.ts.map