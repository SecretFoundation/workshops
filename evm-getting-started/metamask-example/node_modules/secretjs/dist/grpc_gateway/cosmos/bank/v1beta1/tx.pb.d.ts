import * as fm from "../../../fetch.pb";
import * as CosmosBaseV1beta1Coin from "../../base/v1beta1/coin.pb";
import * as CosmosBankV1beta1Bank from "./bank.pb";
export declare type MsgSend = {
    from_address?: string;
    to_address?: string;
    amount?: CosmosBaseV1beta1Coin.Coin[];
};
export declare type MsgSendResponse = {};
export declare type MsgMultiSend = {
    inputs?: CosmosBankV1beta1Bank.Input[];
    outputs?: CosmosBankV1beta1Bank.Output[];
};
export declare type MsgMultiSendResponse = {};
export declare class Msg {
    static Send(req: MsgSend, initReq?: fm.InitReq): Promise<MsgSendResponse>;
    static MultiSend(req: MsgMultiSend, initReq?: fm.InitReq): Promise<MsgMultiSendResponse>;
}
//# sourceMappingURL=tx.pb.d.ts.map