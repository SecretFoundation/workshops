import * as CosmosBaseV1beta1Coin from "../../../cosmos/base/v1beta1/coin.pb";
import * as fm from "../../../fetch.pb";
export declare type MsgStoreCode = {
    sender?: Uint8Array;
    wasm_byte_code?: Uint8Array;
    source?: string;
    builder?: string;
};
export declare type MsgStoreCodeResponse = {
    code_id?: string;
};
export declare type MsgInstantiateContract = {
    sender?: Uint8Array;
    callback_code_hash?: string;
    code_id?: string;
    label?: string;
    init_msg?: Uint8Array;
    init_funds?: CosmosBaseV1beta1Coin.Coin[];
    callback_sig?: Uint8Array;
    admin?: string;
};
export declare type MsgInstantiateContractResponse = {
    address?: string;
    data?: Uint8Array;
};
export declare type MsgExecuteContract = {
    sender?: Uint8Array;
    contract?: Uint8Array;
    msg?: Uint8Array;
    callback_code_hash?: string;
    sent_funds?: CosmosBaseV1beta1Coin.Coin[];
    callback_sig?: Uint8Array;
};
export declare type MsgExecuteContractResponse = {
    data?: Uint8Array;
};
export declare type MsgMigrateContract = {
    sender?: string;
    contract?: string;
    code_id?: string;
    msg?: Uint8Array;
    callback_sig?: Uint8Array;
    callback_code_hash?: string;
};
export declare type MsgMigrateContractResponse = {
    data?: Uint8Array;
};
export declare type MsgUpdateAdmin = {
    sender?: string;
    new_admin?: string;
    contract?: string;
    callback_sig?: Uint8Array;
};
export declare type MsgUpdateAdminResponse = {};
export declare type MsgClearAdmin = {
    sender?: string;
    contract?: string;
    callback_sig?: Uint8Array;
};
export declare type MsgClearAdminResponse = {};
export declare class Msg {
    static StoreCode(req: MsgStoreCode, initReq?: fm.InitReq): Promise<MsgStoreCodeResponse>;
    static InstantiateContract(req: MsgInstantiateContract, initReq?: fm.InitReq): Promise<MsgInstantiateContractResponse>;
    static ExecuteContract(req: MsgExecuteContract, initReq?: fm.InitReq): Promise<MsgExecuteContractResponse>;
    static MigrateContract(req: MsgMigrateContract, initReq?: fm.InitReq): Promise<MsgMigrateContractResponse>;
    static UpdateAdmin(req: MsgUpdateAdmin, initReq?: fm.InitReq): Promise<MsgUpdateAdminResponse>;
    static ClearAdmin(req: MsgClearAdmin, initReq?: fm.InitReq): Promise<MsgClearAdminResponse>;
}
//# sourceMappingURL=msg.pb.d.ts.map