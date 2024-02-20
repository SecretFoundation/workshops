import { AminoMsg, Coin, SignDocCamelCase } from ".";
export declare const SECRET_COIN_TYPE = 529;
export declare const SECRET_BECH32_PREFIX = "secret";
export declare type WalletOptions = {
    hdAccountIndex?: number;
    coinType?: number;
    bech32Prefix?: string;
};
/**
 * AminoWallet is a wallet capable of signing on the legacy Amino encoding.
 * Amino encoding is still a must-use when signing with Ledger and thus still
 * supported in the chain, but is phased out slowly.
 *
 * In secret.js AminoWallet is mainly used for testing and should not be used
 * for anything else. The reason is that some Msg types don't support Amino
 * encoding anymore and thus won't work with this wallet (and Ledger).
 * Msgs that do support Amino encoding also must encode with Protobuf,
 * so if a Msg is working as intended with AminoWallet, it'll also work with {@link Wallet}.
 *
 * For reference, even txs that are signed using Amino, are sent to the chain
 * using Protobuf encoding, so inside the chain the tx is converted to Amino
 * in order to verify the signature.
 * */
export declare class AminoWallet {
    /** The mnemonic phrase used to derive this account */
    readonly mnemonic: string;
    /** The account index in the HD derivation path */
    readonly hdAccountIndex: number;
    /** The coin type in the HD derivation path */
    readonly coinType: number;
    /** The secp256k1 private key that was derived from `mnemonic` + `hdAccountIndex` */
    readonly privateKey: Uint8Array;
    /** The secp256k1 public key that was derived from `privateKey` */
    readonly publicKey: Uint8Array;
    /** The account's secret address, derived from `publicKey` */
    readonly address: string;
    /** The bech32 prefix for the account's address  */
    private readonly bech32Prefix;
    /**
     * @param {String} mnemonic Import mnemonic or generate random if empty
     * @param {Number} [options.hdAccountIndex] The account index in the HD derivation path. Defaults to `0`.
     * @param {Number} [options.coinType] The coin type in the HD derivation path. Defaults to Secret's `529`.
     * @param {String} [options.bech32Prefix] The bech32 prefix for the account's address. Defaults tp `"secret"`
     */
    constructor(mnemonic?: string, options?: WalletOptions);
    getAccounts(): Promise<readonly AccountData[]>;
    signAmino(signerAddress: string, signDoc: StdSignDoc): Promise<AminoSignResponse>;
}
/**
 * Takes a binary pubkey and signature to create a signature object
 *
 * @param pubkey a compressed secp256k1 public key
 * @param signature a 64 byte fixed length representation of secp256k1 signature components r and s
 */
export declare function encodeSecp256k1Signature(pubkey: Uint8Array, signature: Uint8Array): StdSignature;
export declare function encodeSecp256k1Pubkey(pubkey: Uint8Array): Pubkey;
export declare type AminoSignResponse = {
    /**
     * The sign doc that was signed.
     * This may be different from the input signDoc when the signer modifies it as part of the signing process.
     */
    readonly signed: StdSignDoc;
    readonly signature: StdSignature;
};
/**
 * The document to be signed
 *
 * @see https://docs.cosmos.network/master/modules/auth/03_types.html#stdsigndoc
 */
export declare type StdSignDoc = {
    readonly chain_id: string;
    readonly account_number: string;
    readonly sequence: string;
    readonly fee: StdFee;
    readonly msgs: readonly AminoMsg[];
    readonly memo: string;
};
export declare type StdFee = {
    readonly amount: readonly Coin[];
    readonly gas: string;
    readonly granter?: string;
};
export declare type StdSignature = {
    readonly pub_key: Pubkey;
    readonly pubKey?: Pubkey;
    readonly signature: string;
};
export declare type Pubkey = {
    readonly type: string;
    readonly value: any;
};
declare type Algo = "secp256k1" | "ed25519" | "sr25519";
export declare type AccountData = {
    /** A printable address (typically bech32 encoded) */
    readonly address: string;
    readonly algo: Algo;
    readonly pubkey: Uint8Array;
};
export declare function sortObject(obj: any): any;
export declare function serializeStdSignDoc(signDoc: StdSignDoc): Uint8Array;
export declare type DirectSigner = {
    readonly getAccounts: () => Promise<readonly AccountData[]>;
    readonly signDirect: (signerAddress: string, signDoc: import("./protobuf/cosmos/tx/v1beta1/tx").SignDoc | SignDocCamelCase) => Promise<DirectSignResponse>;
};
export declare function isSignDoc(object: any): object is import("./protobuf/cosmos/tx/v1beta1/tx").SignDoc;
export declare function isSignDocCamelCase(object: any): object is SignDocCamelCase;
export declare type DirectSignResponse = {
    /**
     * The sign doc that was signed.
     * This may be different from the input signDoc when the signer modifies it as part of the signing process.
     */
    readonly signed: import("./protobuf/cosmos/tx/v1beta1/tx").SignDoc | SignDocCamelCase;
    readonly signature: StdSignature;
};
export declare type Signer = AminoSigner | DirectSigner;
export declare function isDirectSigner(signer: Signer): signer is DirectSigner;
export interface AminoSigner {
    /**
     * Get SignMode for signing a tx.
     */
    readonly getSignMode?: () => Promise<import("./protobuf/cosmos/tx/signing/v1beta1/signing").SignMode>;
    /**
     * Get AccountData array from wallet. Rejects if not enabled.
     */
    readonly getAccounts: () => Promise<readonly AccountData[]>;
    /**
     * Request signature from whichever key corresponds to provided bech32-encoded address. Rejects if not enabled.
     *
     * The signer implementation may offer the user the ability to override parts of the signDoc. It must
     * return the doc that was signed in the response.
     *
     * @param signerAddress The address of the account that should sign the transaction
     * @param signDoc The content that should be signed
     */
    readonly signAmino: (signerAddress: string, signDoc: StdSignDoc) => Promise<AminoSignResponse>;
    readonly signPermit?: (signerAddress: string, signDoc: StdSignDoc) => Promise<AminoSignResponse>;
}
export interface AminoEip191Signer {
    readonly getAccounts: () => Promise<readonly AccountData[]>;
    readonly signAminoEip191: (signerAddress: string, signDoc: StdSignDoc) => Promise<AminoSignResponse>;
}
export {};
//# sourceMappingURL=wallet_amino.d.ts.map