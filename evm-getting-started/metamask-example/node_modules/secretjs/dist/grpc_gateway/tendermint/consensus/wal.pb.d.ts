import * as GoogleProtobufDuration from "../../google/protobuf/duration.pb";
import * as GoogleProtobufTimestamp from "../../google/protobuf/timestamp.pb";
import * as TendermintTypesEvents from "../types/events.pb";
import * as TendermintConsensusTypes from "./types.pb";
declare type Absent<T, K extends keyof T> = {
    [k in Exclude<keyof T, K>]?: undefined;
};
declare type OneOf<T> = {
    [k in keyof T]?: undefined;
} | (keyof T extends infer K ? (K extends string & keyof T ? {
    [k in K]: T[K];
} & Absent<T, K> : never) : never);
export declare type MsgInfo = {
    msg?: TendermintConsensusTypes.Message;
    peer_id?: string;
};
export declare type TimeoutInfo = {
    duration?: GoogleProtobufDuration.Duration;
    height?: string;
    round?: number;
    step?: number;
};
export declare type EndHeight = {
    height?: string;
};
declare type BaseWALMessage = {};
export declare type WALMessage = BaseWALMessage & OneOf<{
    event_data_round_state: TendermintTypesEvents.EventDataRoundState;
    msg_info: MsgInfo;
    timeout_info: TimeoutInfo;
    end_height: EndHeight;
}>;
export declare type TimedWALMessage = {
    time?: GoogleProtobufTimestamp.Timestamp;
    msg?: WALMessage;
};
export {};
//# sourceMappingURL=wal.pb.d.ts.map