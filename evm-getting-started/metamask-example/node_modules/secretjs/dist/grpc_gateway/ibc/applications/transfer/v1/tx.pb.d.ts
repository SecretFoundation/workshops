import * as CosmosBaseV1beta1Coin from "../../../../cosmos/base/v1beta1/coin.pb";
import * as fm from "../../../../fetch.pb";
import * as IbcCoreClientV1Client from "../../../core/client/v1/client.pb";
export declare type MsgTransfer = {
    source_port?: string;
    source_channel?: string;
    token?: CosmosBaseV1beta1Coin.Coin;
    sender?: string;
    receiver?: string;
    timeout_height?: IbcCoreClientV1Client.Height;
    timeout_timestamp?: string;
    memo?: string;
};
export declare type MsgTransferResponse = {
    sequence?: string;
};
export declare class Msg {
    static Transfer(req: MsgTransfer, initReq?: fm.InitReq): Promise<MsgTransferResponse>;
}
//# sourceMappingURL=tx.pb.d.ts.map