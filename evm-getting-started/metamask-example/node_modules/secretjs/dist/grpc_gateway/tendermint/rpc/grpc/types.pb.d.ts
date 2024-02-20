import * as fm from "../../../fetch.pb";
import * as TendermintAbciTypes from "../../abci/types.pb";
export declare type RequestPing = {};
export declare type RequestBroadcastTx = {
    tx?: Uint8Array;
};
export declare type ResponsePing = {};
export declare type ResponseBroadcastTx = {
    check_tx?: TendermintAbciTypes.ResponseCheckTx;
    deliver_tx?: TendermintAbciTypes.ResponseDeliverTx;
};
export declare class BroadcastAPI {
    static Ping(req: RequestPing, initReq?: fm.InitReq): Promise<ResponsePing>;
    static BroadcastTx(req: RequestBroadcastTx, initReq?: fm.InitReq): Promise<ResponseBroadcastTx>;
}
//# sourceMappingURL=types.pb.d.ts.map