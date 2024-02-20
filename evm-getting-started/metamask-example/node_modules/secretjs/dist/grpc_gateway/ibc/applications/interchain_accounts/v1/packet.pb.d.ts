import * as GoogleProtobufAny from "../../../../google/protobuf/any.pb";
export declare enum Type {
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED",
    TYPE_EXECUTE_TX = "TYPE_EXECUTE_TX"
}
export declare type InterchainAccountPacketData = {
    type?: Type;
    data?: Uint8Array;
    memo?: string;
};
export declare type CosmosTx = {
    messages?: GoogleProtobufAny.Any[];
};
//# sourceMappingURL=packet.pb.d.ts.map