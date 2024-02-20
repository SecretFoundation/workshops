import * as _m0 from "protobufjs/minimal";
import { Fee, PacketFee } from "./fee";
import { PacketId } from "../../../core/channel/v1/channel";
export declare const protobufPackage = "ibc.applications.fee.v1";
/** MsgRegisterPayee defines the request type for the RegisterPayee rpc */
export interface MsgRegisterPayee {
    /** unique port identifier */
    port_id: string;
    /** unique channel identifier */
    channel_id: string;
    /** the relayer address */
    relayer: string;
    /** the payee address */
    payee: string;
}
/** MsgRegisterPayeeResponse defines the response type for the RegisterPayee rpc */
export interface MsgRegisterPayeeResponse {
}
/** MsgRegisterCounterpartyPayee defines the request type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayee {
    /** unique port identifier */
    port_id: string;
    /** unique channel identifier */
    channel_id: string;
    /** the relayer address */
    relayer: string;
    /** the counterparty payee address */
    counterparty_payee: string;
}
/** MsgRegisterCounterpartyPayeeResponse defines the response type for the RegisterCounterpartyPayee rpc */
export interface MsgRegisterCounterpartyPayeeResponse {
}
/**
 * MsgPayPacketFee defines the request type for the PayPacketFee rpc
 * This Msg can be used to pay for a packet at the next sequence send & should be combined with the Msg that will be
 * paid for
 */
export interface MsgPayPacketFee {
    /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
    fee?: Fee;
    /** the source port unique identifier */
    source_port_id: string;
    /** the source channel unique identifer */
    source_channel_id: string;
    /** account address to refund fee if necessary */
    signer: string;
    /** optional list of relayers permitted to the receive packet fees */
    relayers: string[];
}
/** MsgPayPacketFeeResponse defines the response type for the PayPacketFee rpc */
export interface MsgPayPacketFeeResponse {
}
/**
 * MsgPayPacketFeeAsync defines the request type for the PayPacketFeeAsync rpc
 * This Msg can be used to pay for a packet at a specified sequence (instead of the next sequence send)
 */
export interface MsgPayPacketFeeAsync {
    /** unique packet identifier comprised of the channel ID, port ID and sequence */
    packet_id?: PacketId;
    /** the packet fee associated with a particular IBC packet */
    packet_fee?: PacketFee;
}
/** MsgPayPacketFeeAsyncResponse defines the response type for the PayPacketFeeAsync rpc */
export interface MsgPayPacketFeeAsyncResponse {
}
export declare const MsgRegisterPayee: {
    encode(message: MsgRegisterPayee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgRegisterPayee;
    fromJSON(object: any): MsgRegisterPayee;
    toJSON(message: MsgRegisterPayee): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        relayer?: string | undefined;
        payee?: string | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        relayer?: string | undefined;
        payee?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgRegisterPayee>, never>>(object: I): MsgRegisterPayee;
};
export declare const MsgRegisterPayeeResponse: {
    encode(_: MsgRegisterPayeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgRegisterPayeeResponse;
    fromJSON(_: any): MsgRegisterPayeeResponse;
    toJSON(_: MsgRegisterPayeeResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgRegisterPayeeResponse;
};
export declare const MsgRegisterCounterpartyPayee: {
    encode(message: MsgRegisterCounterpartyPayee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgRegisterCounterpartyPayee;
    fromJSON(object: any): MsgRegisterCounterpartyPayee;
    toJSON(message: MsgRegisterCounterpartyPayee): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        relayer?: string | undefined;
        counterparty_payee?: string | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
        relayer?: string | undefined;
        counterparty_payee?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgRegisterCounterpartyPayee>, never>>(object: I): MsgRegisterCounterpartyPayee;
};
export declare const MsgRegisterCounterpartyPayeeResponse: {
    encode(_: MsgRegisterCounterpartyPayeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgRegisterCounterpartyPayeeResponse;
    fromJSON(_: any): MsgRegisterCounterpartyPayeeResponse;
    toJSON(_: MsgRegisterCounterpartyPayeeResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgRegisterCounterpartyPayeeResponse;
};
export declare const MsgPayPacketFee: {
    encode(message: MsgPayPacketFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgPayPacketFee;
    fromJSON(object: any): MsgPayPacketFee;
    toJSON(message: MsgPayPacketFee): unknown;
    fromPartial<I extends {
        fee?: {
            recv_fee?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            ack_fee?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            timeout_fee?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } | undefined;
        source_port_id?: string | undefined;
        source_channel_id?: string | undefined;
        signer?: string | undefined;
        relayers?: string[] | undefined;
    } & {
        fee?: ({
            recv_fee?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            ack_fee?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            timeout_fee?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            recv_fee?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["fee"]["recv_fee"][number], keyof import("../../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["fee"]["recv_fee"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            ack_fee?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["fee"]["ack_fee"][number], keyof import("../../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["fee"]["ack_fee"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            timeout_fee?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["fee"]["timeout_fee"][number], keyof import("../../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["fee"]["timeout_fee"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["fee"], keyof Fee>, never>) | undefined;
        source_port_id?: string | undefined;
        source_channel_id?: string | undefined;
        signer?: string | undefined;
        relayers?: (string[] & string[] & Record<Exclude<keyof I["relayers"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgPayPacketFee>, never>>(object: I): MsgPayPacketFee;
};
export declare const MsgPayPacketFeeResponse: {
    encode(_: MsgPayPacketFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgPayPacketFeeResponse;
    fromJSON(_: any): MsgPayPacketFeeResponse;
    toJSON(_: MsgPayPacketFeeResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgPayPacketFeeResponse;
};
export declare const MsgPayPacketFeeAsync: {
    encode(message: MsgPayPacketFeeAsync, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgPayPacketFeeAsync;
    fromJSON(object: any): MsgPayPacketFeeAsync;
    toJSON(message: MsgPayPacketFeeAsync): unknown;
    fromPartial<I extends {
        packet_id?: {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        } | undefined;
        packet_fee?: {
            fee?: {
                recv_fee?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                ack_fee?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                timeout_fee?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } | undefined;
            refund_address?: string | undefined;
            relayers?: string[] | undefined;
        } | undefined;
    } & {
        packet_id?: ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        } & {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        } & Record<Exclude<keyof I["packet_id"], keyof PacketId>, never>) | undefined;
        packet_fee?: ({
            fee?: {
                recv_fee?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                ack_fee?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                timeout_fee?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } | undefined;
            refund_address?: string | undefined;
            relayers?: string[] | undefined;
        } & {
            fee?: ({
                recv_fee?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                ack_fee?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
                timeout_fee?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } & {
                recv_fee?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["packet_fee"]["fee"]["recv_fee"][number], keyof import("../../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["packet_fee"]["fee"]["recv_fee"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
                ack_fee?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["packet_fee"]["fee"]["ack_fee"][number], keyof import("../../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["packet_fee"]["fee"]["ack_fee"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
                timeout_fee?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["packet_fee"]["fee"]["timeout_fee"][number], keyof import("../../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["packet_fee"]["fee"]["timeout_fee"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["packet_fee"]["fee"], keyof Fee>, never>) | undefined;
            refund_address?: string | undefined;
            relayers?: (string[] & string[] & Record<Exclude<keyof I["packet_fee"]["relayers"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["packet_fee"], keyof PacketFee>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof MsgPayPacketFeeAsync>, never>>(object: I): MsgPayPacketFeeAsync;
};
export declare const MsgPayPacketFeeAsyncResponse: {
    encode(_: MsgPayPacketFeeAsyncResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgPayPacketFeeAsyncResponse;
    fromJSON(_: any): MsgPayPacketFeeAsyncResponse;
    toJSON(_: MsgPayPacketFeeAsyncResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgPayPacketFeeAsyncResponse;
};
/** Msg defines the ICS29 Msg service. */
export interface Msg {
    /**
     * RegisterPayee defines a rpc handler method for MsgRegisterPayee
     * RegisterPayee is called by the relayer on each channelEnd and allows them to set an optional
     * payee to which reverse and timeout relayer packet fees will be paid out. The payee should be registered on
     * the source chain from which packets originate as this is where fee distribution takes place. This function may be
     * called more than once by a relayer, in which case, the latest payee is always used.
     */
    RegisterPayee(request: MsgRegisterPayee): Promise<MsgRegisterPayeeResponse>;
    /**
     * RegisterCounterpartyPayee defines a rpc handler method for MsgRegisterCounterpartyPayee
     * RegisterCounterpartyPayee is called by the relayer on each channelEnd and allows them to specify the counterparty
     * payee address before relaying. This ensures they will be properly compensated for forward relaying since
     * the destination chain must include the registered counterparty payee address in the acknowledgement. This function
     * may be called more than once by a relayer, in which case, the latest counterparty payee address is always used.
     */
    RegisterCounterpartyPayee(request: MsgRegisterCounterpartyPayee): Promise<MsgRegisterCounterpartyPayeeResponse>;
    /**
     * PayPacketFee defines a rpc handler method for MsgPayPacketFee
     * PayPacketFee is an open callback that may be called by any module/user that wishes to escrow funds in order to
     * incentivize the relaying of the packet at the next sequence
     * NOTE: This method is intended to be used within a multi msg transaction, where the subsequent msg that follows
     * initiates the lifecycle of the incentivized packet
     */
    PayPacketFee(request: MsgPayPacketFee): Promise<MsgPayPacketFeeResponse>;
    /**
     * PayPacketFeeAsync defines a rpc handler method for MsgPayPacketFeeAsync
     * PayPacketFeeAsync is an open callback that may be called by any module/user that wishes to escrow funds in order to
     * incentivize the relaying of a known packet (i.e. at a particular sequence)
     */
    PayPacketFeeAsync(request: MsgPayPacketFeeAsync): Promise<MsgPayPacketFeeAsyncResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RegisterPayee(request: MsgRegisterPayee): Promise<MsgRegisterPayeeResponse>;
    RegisterCounterpartyPayee(request: MsgRegisterCounterpartyPayee): Promise<MsgRegisterCounterpartyPayeeResponse>;
    PayPacketFee(request: MsgPayPacketFee): Promise<MsgPayPacketFeeResponse>;
    PayPacketFeeAsync(request: MsgPayPacketFeeAsync): Promise<MsgPayPacketFeeAsyncResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
//# sourceMappingURL=tx.d.ts.map