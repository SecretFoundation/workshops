import { MsgParams } from ".";
import { EncryptionUtils } from "..";
import { AminoMsg, Coin, Msg, ProtoMsg } from "./types";
export interface MsgInstantiateContractParams extends MsgParams {
    /** The actor that signed the messages */
    sender: string;
    /** The id of the contract's WASM code */
    code_id: number | string;
    /** A unique label across all contracts */
    label: string;
    /** The input message to the contract's constructor */
    init_msg: any;
    /** Funds to send to the contract */
    init_funds?: Coin[];
    /** The SHA256 hash value of the contract's WASM bytecode, represented as case-insensitive 64
     * character hex string.
     * This is used to make sure only the contract that's being invoked can decrypt the query data.
     *
     * codeHash is an optional parameter but using it will result in way faster execution time (otherwise secret.js will make an query to get the code_hash from the chain).
     *
     * Valid examples:
     * - "af74387e276be8874f07bec3a87023ee49b0e7ebe08178c49d0a49c3c98ed60e"
     * - "0xaf74387e276be8874f07bec3a87023ee49b0e7ebe08178c49d0a49c3c98ed60e"
     * - "AF74387E276BE8874F07BEC3A87023EE49B0E7EBE08178C49D0A49C3C98ED60E"
     * - "0xAF74387E276BE8874F07BEC3A87023EE49B0E7EBE08178C49D0A49C3C98ED60E"
     */
    code_hash?: string;
    /** Admin is an optional address that can execute migrations */
    admin?: string;
}
export declare function getMissingCodeHashWarning(method: string): string;
/** Instantiate a contract from code id */
export declare class MsgInstantiateContract implements Msg {
    sender: string;
    codeId: string;
    label: string;
    initMsg: object;
    private initMsgEncrypted;
    initFunds: Coin[];
    codeHash: string;
    private warnCodeHash;
    admin: string;
    constructor({ sender, code_id, label, init_msg, init_funds, code_hash, admin, }: MsgInstantiateContractParams);
    toProto(utils: EncryptionUtils): Promise<ProtoMsg>;
    toAmino(utils: EncryptionUtils): Promise<AminoMsg>;
}
export interface MsgExecuteContractParams<T> extends MsgParams {
    /** The actor that signed the messages */
    sender: string;
    /** The contract's address */
    contract_address: string;
    /** The input message */
    msg: T;
    /** Funds to send to the contract */
    sent_funds?: Coin[];
    /** The SHA256 hash value of the contract's WASM bytecode, represented as case-insensitive 64
     * character hex string.
     * This is used to make sure only the contract that's being invoked can decrypt the query data.
     *
     * codeHash is an optional parameter but using it will result in way faster execution time (otherwise secret.js will make an query to get the code_hash from the chain).
     *
     * Valid examples:
     * - "af74387e276be8874f07bec3a87023ee49b0e7ebe08178c49d0a49c3c98ed60e"
     * - "0xaf74387e276be8874f07bec3a87023ee49b0e7ebe08178c49d0a49c3c98ed60e"
     * - "AF74387E276BE8874F07BEC3A87023EE49B0E7EBE08178C49D0A49C3C98ED60E"
     * - "0xAF74387E276BE8874F07BEC3A87023EE49B0E7EBE08178C49D0A49C3C98ED60E"
     */
    code_hash?: string;
}
/** Execute a function on a contract */
export declare class MsgExecuteContract<T extends object> implements Msg {
    sender: string;
    contractAddress: string;
    msg: T;
    private msgEncrypted;
    sentFunds: Coin[];
    codeHash: string;
    private warnCodeHash;
    constructor({ sender, contract_address: contractAddress, msg, sent_funds: sentFunds, code_hash: codeHash, }: MsgExecuteContractParams<T>);
    toProto(utils: EncryptionUtils): Promise<ProtoMsg>;
    toAmino(utils: EncryptionUtils): Promise<AminoMsg>;
}
export interface MsgStoreCodeParams extends MsgParams {
    /** The actor that signed the messages */
    sender: string;
    /** WASMByteCode can be raw or gzip compressed */
    wasm_byte_code: Uint8Array;
    /** Source is a valid absolute HTTPS URI to the contract's source code, optional */
    source: string;
    /** Builder is a valid docker image name with tag, optional */
    builder: string;
}
/** Upload a compiled contract to Secret Network */
export declare class MsgStoreCode implements Msg {
    sender: string;
    wasmByteCode: Uint8Array;
    source: string;
    builder: string;
    constructor({ sender, wasm_byte_code: wasmByteCode, source, builder, }: MsgStoreCodeParams);
    private gzipWasm;
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
export interface MsgMigrateContractParams<T> extends MsgParams {
    /** The actor that signed the messages (should be the current admin) */
    sender: string;
    /** The contract's address */
    contract_address: string;
    /** The new code id */
    code_id: number | string;
    /** The input message */
    msg: T;
    /** The SHA256 hash value of the contract's *new* WASM bytecode, represented as case-insensitive 64 character hex string.
     * This is used to make sure only the contract that's being invoked can decrypt the query data.
     *
     * codeHash is an optional parameter but using it will result in way faster execution time (otherwise secret.js will make an query to get the code_hash from the chain).
     *
     * Valid examples:
     * - "af74387e276be8874f07bec3a87023ee49b0e7ebe08178c49d0a49c3c98ed60e"
     * - "0xaf74387e276be8874f07bec3a87023ee49b0e7ebe08178c49d0a49c3c98ed60e"
     * - "AF74387E276BE8874F07BEC3A87023EE49B0E7EBE08178C49D0A49C3C98ED60E"
     * - "0xAF74387E276BE8874F07BEC3A87023EE49B0E7EBE08178C49D0A49C3C98ED60E"
     */
    code_hash?: string;
}
/** Execute a function on a contract */
export declare class MsgMigrateContract<T extends object> implements Msg {
    sender: string;
    contractAddress: string;
    msg: T;
    private msgEncrypted;
    codeId: string;
    codeHash: string;
    private warnCodeHash;
    constructor({ sender, contract_address: contractAddress, msg, code_id: codeId, code_hash: codeHash, }: MsgMigrateContractParams<T>);
    toProto(utils: EncryptionUtils): Promise<ProtoMsg>;
    toAmino(utils: EncryptionUtils): Promise<AminoMsg>;
}
export interface MsgUpdateAdminParams extends MsgParams {
    /** The actor that signed the messages (should be the current admin) */
    sender: string;
    /** New admin address to be set */
    new_admin: string;
    /** The address of the secret contract */
    contract_address: string;
}
/** MsgUpdateAdmin sets a new admin for a secret contract. */
export declare class MsgUpdateAdmin implements Msg {
    params: MsgUpdateAdminParams;
    constructor(params: MsgUpdateAdminParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
export interface MsgClearAdminParams extends MsgParams {
    /** Sender is the actor that signed the messages (should be the current admin) */
    sender: string;
    /** Contract is the address of the smart contract */
    contract_address: string;
}
/** MsgClearAdmin removes any admin stored for a secret contract. */
export declare class MsgClearAdmin implements Msg {
    params: MsgClearAdminParams;
    constructor(params: MsgClearAdminParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
//# sourceMappingURL=compute.d.ts.map