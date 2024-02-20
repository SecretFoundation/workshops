import { MsgExecuteContract } from "../../tx";
import { Snip1155AddCuratorOptions, Snip1155AddMinterOptions, Snip1155BatchSendOptions, Snip1155BatchTransferOptions, Snip1155BurnTokensOptions, Snip1155ChangeAdminOptions, Snip1155ChangeMetaDataOptions, Snip1155CurateTokensOptions, Snip1155MintTokensOptions, Snip1155RemoveAdminOptions, Snip1155RemoveCuratorOptions, Snip1155RemoveMinterOptions, Snip1155SendOptions } from "./types";
export declare class MsgSnip1155ChangeAdmin extends MsgExecuteContract<Snip1155ChangeAdminOptions> {
}
export declare class MsgSnip1155RemoveAdmin extends MsgExecuteContract<Snip1155RemoveAdminOptions> {
}
export declare class MsgSnip1155CurateTokens extends MsgExecuteContract<Snip1155CurateTokensOptions> {
}
export declare class MsgSnip1155AddCurator extends MsgExecuteContract<Snip1155AddCuratorOptions> {
}
export declare class MsgSnip1155RemoveCurator extends MsgExecuteContract<Snip1155RemoveCuratorOptions> {
}
export declare class MsgSnip1155Send extends MsgExecuteContract<Snip1155SendOptions> {
}
export declare class MsgSnip1155BatchSend extends MsgExecuteContract<Snip1155BatchSendOptions> {
}
export declare class MsgSnip1155Mint extends MsgExecuteContract<Snip1155MintTokensOptions> {
}
export declare class MsgSnip1155Burn extends MsgExecuteContract<Snip1155BurnTokensOptions> {
}
export declare class MsgSnip1155Transfer extends MsgExecuteContract<Snip1155BatchTransferOptions> {
}
export declare class MsgSnip1155BatchTransfer extends MsgExecuteContract<MsgSnip1155BatchTransfer> {
}
export declare class MsgSnipAddMinter extends MsgExecuteContract<Snip1155AddMinterOptions> {
}
export declare class MsgSnip1155RemoveMinter extends MsgExecuteContract<Snip1155RemoveMinterOptions> {
}
export declare class MsgSnip1155ChangeMetadata extends MsgExecuteContract<Snip1155ChangeMetaDataOptions> {
}
//# sourceMappingURL=tx.d.ts.map