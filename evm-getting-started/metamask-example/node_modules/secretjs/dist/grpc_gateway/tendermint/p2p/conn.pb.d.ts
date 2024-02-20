import * as TendermintCryptoKeys from "../crypto/keys.pb";
declare type Absent<T, K extends keyof T> = {
    [k in Exclude<keyof T, K>]?: undefined;
};
declare type OneOf<T> = {
    [k in keyof T]?: undefined;
} | (keyof T extends infer K ? (K extends string & keyof T ? {
    [k in K]: T[K];
} & Absent<T, K> : never) : never);
export declare type PacketPing = {};
export declare type PacketPong = {};
export declare type PacketMsg = {
    channel_id?: number;
    eof?: boolean;
    data?: Uint8Array;
};
declare type BasePacket = {};
export declare type Packet = BasePacket & OneOf<{
    packet_ping: PacketPing;
    packet_pong: PacketPong;
    packet_msg: PacketMsg;
}>;
export declare type AuthSigMessage = {
    pub_key?: TendermintCryptoKeys.PublicKey;
    sig?: Uint8Array;
};
export {};
//# sourceMappingURL=conn.pb.d.ts.map