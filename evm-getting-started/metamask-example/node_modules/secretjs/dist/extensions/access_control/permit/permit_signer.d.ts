import { AminoEip191Signer, AminoSigner, DirectSigner } from "../../../wallet_amino";
import { Permission, Permit, PermitError } from "./index";
export declare class DirectSignerUnsupported extends PermitError {
    constructor();
}
export declare class PermitSigner {
    signer: AminoSigner | DirectSigner | AminoEip191Signer;
    constructor(signer: AminoSigner | DirectSigner | AminoEip191Signer);
    private isAminoSigner;
    _checkSigner(): void;
    /**
     *
     * Signs a new permit based on the input parameters.
     *
     * @param owner
     * @param chainId
     * @param permitName
     * @param allowedContracts
     * @param permissions
     * @param keplr - are we signing with keplr or not?
     * @returns Permit
     */
    sign(owner: string, chainId: string, permitName: string, allowedContracts: string[], permissions: Permission[], keplr?: boolean): Promise<Permit>;
    /**
     *
     * This method will verify a permit according to a contract address and a submitting address (and a set of permissions)
     * On failure an appropriate error will be thrown according to the type of error.
     *
     * @throws PermitError on any error or verification failure
     *
     * @param permit
     * @param forAddress
     * @param forContract
     * @param permissions
     */
    verify(permit: Permit, forAddress: string, forContract: string, permissions: Permission[]): boolean;
    /**
     * Variant of the verify method that returns a boolean value instead of throwing exceptions
     *
     * @param permit
     * @param forAddress
     * @param forContract
     * @param permissions
     *
     * @returns boolean - true on success, false on verification failure
     */
    verifyNoExcept(permit: Permit, forAddress: string, forContract: string, permissions: Permission[]): boolean;
}
//# sourceMappingURL=permit_signer.d.ts.map