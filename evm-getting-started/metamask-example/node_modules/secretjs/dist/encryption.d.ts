export interface EncryptionUtils {
    getPubkey: () => Promise<Uint8Array>;
    decrypt: (ciphertext: Uint8Array, nonce: Uint8Array) => Promise<Uint8Array>;
    encrypt: (contractCodeHash: string, msg: object) => Promise<Uint8Array>;
    getTxEncryptionKey: (nonce: Uint8Array) => Promise<Uint8Array>;
}
export declare class EncryptionUtilsImpl implements EncryptionUtils {
    private url;
    private readonly seed;
    private readonly privkey;
    readonly pubkey: Uint8Array;
    private consensusIoPubKey;
    constructor(url: string, seed?: Uint8Array, chainId?: string);
    static GenerateNewKeyPair(): {
        privkey: Uint8Array;
        pubkey: Uint8Array;
    };
    static GenerateNewSeed(): Uint8Array;
    static GenerateNewKeyPairFromSeed(seed: Uint8Array): {
        privkey: Uint8Array;
        pubkey: Uint8Array;
    };
    private getConsensusIoPubKey;
    getTxEncryptionKey(nonce: Uint8Array): Promise<Uint8Array>;
    encrypt(contractCodeHash: string, msg: object): Promise<Uint8Array>;
    decrypt(ciphertext: Uint8Array, nonce: Uint8Array): Promise<Uint8Array>;
    getPubkey(): Promise<Uint8Array>;
}
//# sourceMappingURL=encryption.d.ts.map