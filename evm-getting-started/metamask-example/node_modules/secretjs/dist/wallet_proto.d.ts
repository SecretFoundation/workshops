import { AminoWallet, StdSignature } from "./wallet_amino";
/**
 * Wallet is a wallet capable of signing on transactions.
 *
 * `Wallet` can just extend `AminoWallet` and be a valid `DirectSigner` because
 * `SecretNetworkClient` checks first for the existence of `signDirect` function
 * before checking for `signAmino` function.
 */
export declare class Wallet extends AminoWallet {
    signDirect(address: string, signDoc: import("./protobuf/cosmos/tx/v1beta1/tx").SignDoc): Promise<DirectSignResponse>;
}
declare type DirectSignResponse = {
    /**
     * The sign doc that was signed.
     * This may be different from the input signDoc when the signer modifies it as part of the signing process.
     */
    readonly signed: import("./protobuf/cosmos/tx/v1beta1/tx").SignDoc;
    readonly signature: StdSignature;
};
export {};
//# sourceMappingURL=wallet_proto.d.ts.map