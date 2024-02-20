export * from "./authz";
export * from "./bank";
export * from "./compute";
export * from "./crisis";
export * from "./distribution";
export * from "./emergency_button";
export * from "./evidence";
export * from "./feegrant";
export * from "./gov";
export * from "./ibc_channel";
export * from "./ibc_client";
export * from "./ibc_connection";
export * from "./ibc_fee";
export * from "./ibc_transfer";
export * from "./slashing";
export * from "./staking";
export * from "./types";
export * from "./vesting";
export declare type MsgDecoder = {
    decode(input: Uint8Array): any;
};
export declare const MsgRegistry: Map<string, MsgDecoder>;
//# sourceMappingURL=index.d.ts.map