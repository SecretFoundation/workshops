import * as GoogleProtobufAny from "../../../google/protobuf/any.pb";
import * as GoogleProtobufTimestamp from "../../../google/protobuf/timestamp.pb";
export declare type GenericAuthorization = {
    msg?: string;
};
export declare type Grant = {
    authorization?: GoogleProtobufAny.Any;
    expiration?: GoogleProtobufTimestamp.Timestamp;
};
export declare type GrantAuthorization = {
    granter?: string;
    grantee?: string;
    authorization?: GoogleProtobufAny.Any;
    expiration?: GoogleProtobufTimestamp.Timestamp;
};
//# sourceMappingURL=authz.pb.d.ts.map