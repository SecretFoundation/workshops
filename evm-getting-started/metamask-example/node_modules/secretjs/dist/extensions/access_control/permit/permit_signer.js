"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermitSigner = exports.DirectSignerUnsupported = void 0;
const index_1 = require("./index");
class DirectSignerUnsupported extends index_1.PermitError {
    constructor() {
        super("Only amino signer is supported for permits");
    }
}
exports.DirectSignerUnsupported = DirectSignerUnsupported;
class PermitSigner {
    constructor(signer) {
        this.isAminoSigner = (signer) => {
            return "signAmino" in signer;
        };
        this.signer = signer;
    }
    _checkSigner() {
        if (!this.isAminoSigner(this.signer)) {
            throw new DirectSignerUnsupported();
        }
    }
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
    sign(owner, chainId, permitName, allowedContracts, permissions, keplr = true) {
        this._checkSigner();
        return (0, index_1.newPermit)(
        //@ts-ignore
        this.signer, owner, chainId, permitName, allowedContracts, permissions, keplr);
    }
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
    verify(permit, forAddress, forContract, permissions) {
        return (0, index_1.validatePermit)(permit, forAddress, forContract, permissions);
    }
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
    verifyNoExcept(permit, forAddress, forContract, permissions) {
        return (0, index_1.validatePermit)(permit, forAddress, forContract, permissions, false);
    }
}
exports.PermitSigner = PermitSigner;
//# sourceMappingURL=permit_signer.js.map