import { AminoSigner, StdSignDoc } from "../../../wallet_amino";
export declare class PermitError extends Error {
    readonly type = "PermitError";
    constructor(message: string);
}
export declare class ContractNotInPermit extends PermitError {
    contract: string;
    allowed_contracts: string[];
    constructor(contract: string, allowed_contracts: string[]);
}
export declare class SignatureInvalid extends PermitError {
    signature: string;
    key: string;
    constructor(signature: string, key: string);
}
export declare class SignerIsNotAddress extends PermitError {
    publicKey: PubKey;
    address: string;
    constructor(publicKey: PubKey, address: string);
}
export declare class PermissionNotInPermit extends PermitError {
    permission: Permission[];
    permissionsInContract: Permission[];
    constructor(permission: Permission[], permissionsInContract: Permission[]);
}
export declare type Permission = "owner" | "history" | "balance" | "allowance";
export interface StdSignature {
    readonly pub_key: PubKey;
    readonly signature: string;
}
export interface PubKey {
    readonly type: string;
    readonly value: string;
}
export interface Permit {
    params: {
        permit_name: string;
        allowed_tokens: string[];
        chain_id: string;
        permissions: Permission[];
    };
    signature: StdSignature;
}
export declare const newSignDoc: (chainId: string, permit_name: string, allowed_tokens: string[], permissions: Permission[]) => StdSignDoc;
export declare const newPermit: (signer: AminoSigner, owner: string, chainId: string, permitName: string, allowedTokens: string[], permissions: Permission[], keplr: boolean) => Promise<Permit>;
export declare const validatePermit: (permit: Permit, address: string, contract: string, permissions: Permission[], exceptions?: boolean) => boolean;
//# sourceMappingURL=index.d.ts.map