import * as GoogleProtobufAny from "../../../google/protobuf/any.pb";
import * as GoogleProtobufDuration from "../../../google/protobuf/duration.pb";
import * as GoogleProtobufTimestamp from "../../../google/protobuf/timestamp.pb";
import * as CosmosBaseV1beta1Coin from "../../base/v1beta1/coin.pb";
export declare type BasicAllowance = {
    spend_limit?: CosmosBaseV1beta1Coin.Coin[];
    expiration?: GoogleProtobufTimestamp.Timestamp;
};
export declare type PeriodicAllowance = {
    basic?: BasicAllowance;
    period?: GoogleProtobufDuration.Duration;
    period_spend_limit?: CosmosBaseV1beta1Coin.Coin[];
    period_can_spend?: CosmosBaseV1beta1Coin.Coin[];
    period_reset?: GoogleProtobufTimestamp.Timestamp;
};
export declare type AllowedMsgAllowance = {
    allowance?: GoogleProtobufAny.Any;
    allowed_messages?: string[];
};
export declare type Grant = {
    granter?: string;
    grantee?: string;
    allowance?: GoogleProtobufAny.Any;
};
//# sourceMappingURL=feegrant.pb.d.ts.map