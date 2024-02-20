import * as GoogleProtobufAny from "../../../../google/protobuf/any.pb";
import * as TendermintAbciTypes from "../../../../tendermint/abci/types.pb";
export declare type TxResponse = {
    height?: string;
    txhash?: string;
    codespace?: string;
    code?: number;
    data?: string;
    raw_log?: string;
    logs?: ABCIMessageLog[];
    info?: string;
    gas_wanted?: string;
    gas_used?: string;
    tx?: GoogleProtobufAny.Any;
    timestamp?: string;
    events?: TendermintAbciTypes.Event[];
};
export declare type ABCIMessageLog = {
    msg_index?: number;
    log?: string;
    events?: StringEvent[];
};
export declare type StringEvent = {
    type?: string;
    attributes?: Attribute[];
};
export declare type Attribute = {
    key?: string;
    value?: string;
};
export declare type GasInfo = {
    gas_wanted?: string;
    gas_used?: string;
};
export declare type Result = {
    data?: Uint8Array;
    log?: string;
    events?: TendermintAbciTypes.Event[];
};
export declare type SimulationResponse = {
    gas_info?: GasInfo;
    result?: Result;
};
export declare type MsgData = {
    msg_type?: string;
    data?: Uint8Array;
};
export declare type TxMsgData = {
    data?: MsgData[];
};
export declare type SearchTxsResult = {
    total_count?: string;
    count?: string;
    page_number?: string;
    page_total?: string;
    limit?: string;
    txs?: TxResponse[];
};
//# sourceMappingURL=abci.pb.d.ts.map