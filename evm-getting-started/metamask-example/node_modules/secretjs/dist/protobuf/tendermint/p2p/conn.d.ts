import * as _m0 from "protobufjs/minimal";
import { PublicKey } from "../crypto/keys";
export declare const protobufPackage = "tendermint.p2p";
export interface PacketPing {
}
export interface PacketPong {
}
export interface PacketMsg {
    channel_id: number;
    eof: boolean;
    data: Uint8Array;
}
export interface Packet {
    packet_ping?: PacketPing | undefined;
    packet_pong?: PacketPong | undefined;
    packet_msg?: PacketMsg | undefined;
}
export interface AuthSigMessage {
    pub_key?: PublicKey;
    sig: Uint8Array;
}
export declare const PacketPing: {
    encode(_: PacketPing, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PacketPing;
    fromJSON(_: any): PacketPing;
    toJSON(_: PacketPing): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): PacketPing;
};
export declare const PacketPong: {
    encode(_: PacketPong, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PacketPong;
    fromJSON(_: any): PacketPong;
    toJSON(_: PacketPong): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): PacketPong;
};
export declare const PacketMsg: {
    encode(message: PacketMsg, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PacketMsg;
    fromJSON(object: any): PacketMsg;
    toJSON(message: PacketMsg): unknown;
    fromPartial<I extends {
        channel_id?: number | undefined;
        eof?: boolean | undefined;
        data?: Uint8Array | undefined;
    } & {
        channel_id?: number | undefined;
        eof?: boolean | undefined;
        data?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof PacketMsg>, never>>(object: I): PacketMsg;
};
export declare const Packet: {
    encode(message: Packet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Packet;
    fromJSON(object: any): Packet;
    toJSON(message: Packet): unknown;
    fromPartial<I extends {
        packet_ping?: {} | undefined;
        packet_pong?: {} | undefined;
        packet_msg?: {
            channel_id?: number | undefined;
            eof?: boolean | undefined;
            data?: Uint8Array | undefined;
        } | undefined;
    } & {
        packet_ping?: ({} & {} & Record<Exclude<keyof I["packet_ping"], never>, never>) | undefined;
        packet_pong?: ({} & {} & Record<Exclude<keyof I["packet_pong"], never>, never>) | undefined;
        packet_msg?: ({
            channel_id?: number | undefined;
            eof?: boolean | undefined;
            data?: Uint8Array | undefined;
        } & {
            channel_id?: number | undefined;
            eof?: boolean | undefined;
            data?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["packet_msg"], keyof PacketMsg>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Packet>, never>>(object: I): Packet;
};
export declare const AuthSigMessage: {
    encode(message: AuthSigMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AuthSigMessage;
    fromJSON(object: any): AuthSigMessage;
    toJSON(message: AuthSigMessage): unknown;
    fromPartial<I extends {
        pub_key?: {
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } | undefined;
        sig?: Uint8Array | undefined;
    } & {
        pub_key?: ({
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } & {
            ed25519?: Uint8Array | undefined;
            secp256k1?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["pub_key"], keyof PublicKey>, never>) | undefined;
        sig?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof AuthSigMessage>, never>>(object: I): AuthSigMessage;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
//# sourceMappingURL=conn.d.ts.map