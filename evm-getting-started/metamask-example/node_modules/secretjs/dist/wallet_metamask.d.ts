import { AccountData, AminoSignResponse, StdSignDoc } from "./wallet_amino";
/**
 * MetaMaskWallet is a wallet capable of signing on transactions using MetaMask.
 */
export declare class MetaMaskWallet {
    ethProvider: any;
    ethAddress: string;
    publicKey: Uint8Array;
    /** The account's secret address, derived from `publicKey` */
    readonly address: string;
    private constructor();
    static create(ethProvider: any, ethAddress: string): Promise<MetaMaskWallet>;
    getAccounts(): Promise<readonly AccountData[]>;
    getSignMode(): Promise<import("./protobuf/cosmos/tx/signing/v1beta1/signing").SignMode>;
    signAmino(address: string, signDoc: StdSignDoc): Promise<AminoSignResponse>;
    signPermit(address: string, signDoc: StdSignDoc): Promise<AminoSignResponse>;
}
//# sourceMappingURL=wallet_metamask.d.ts.map