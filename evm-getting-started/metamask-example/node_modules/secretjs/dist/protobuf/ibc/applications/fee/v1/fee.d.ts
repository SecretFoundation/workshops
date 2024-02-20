import * as _m0 from "protobufjs/minimal";
import { PacketId } from "../../../core/channel/v1/channel";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "ibc.applications.fee.v1";
/** Fee defines the ICS29 receive, acknowledgement and timeout fees */
export interface Fee {
    /** the packet receive fee */
    recv_fee: Coin[];
    /** the packet acknowledgement fee */
    ack_fee: Coin[];
    /** the packet timeout fee */
    timeout_fee: Coin[];
}
/** PacketFee contains ICS29 relayer fees, refund address and optional list of permitted relayers */
export interface PacketFee {
    /** fee encapsulates the recv, ack and timeout fees associated with an IBC packet */
    fee?: Fee;
    /** the refund address for unspent fees */
    refund_address: string;
    /** optional list of relayers permitted to receive fees */
    relayers: string[];
}
/** PacketFees contains a list of type PacketFee */
export interface PacketFees {
    /** list of packet fees */
    packet_fees: PacketFee[];
}
/** IdentifiedPacketFees contains a list of type PacketFee and associated PacketId */
export interface IdentifiedPacketFees {
    /** unique packet identifier comprised of the channel ID, port ID and sequence */
    packet_id?: PacketId;
    /** list of packet fees */
    packet_fees: PacketFee[];
}
export declare const Fee: {
    encode(message: Fee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Fee;
    fromJSON(object: any): Fee;
    toJSON(message: Fee): unknown;
    fromPartial<I extends {
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
        } & Record<Exclude<keyof I["recv_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["recv_fee"], keyof {
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
        } & Record<Exclude<keyof I["ack_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["ack_fee"], keyof {
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
        } & Record<Exclude<keyof I["timeout_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["timeout_fee"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Fee>, never>>(object: I): Fee;
};
export declare const PacketFee: {
    encode(message: PacketFee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PacketFee;
    fromJSON(object: any): PacketFee;
    toJSON(message: PacketFee): unknown;
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
            } & Record<Exclude<keyof I["fee"]["recv_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["fee"]["recv_fee"], keyof {
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
            } & Record<Exclude<keyof I["fee"]["ack_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["fee"]["ack_fee"], keyof {
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
            } & Record<Exclude<keyof I["fee"]["timeout_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["fee"]["timeout_fee"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["fee"], keyof Fee>, never>) | undefined;
        refund_address?: string | undefined;
        relayers?: (string[] & string[] & Record<Exclude<keyof I["relayers"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof PacketFee>, never>>(object: I): PacketFee;
};
export declare const PacketFees: {
    encode(message: PacketFees, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): PacketFees;
    fromJSON(object: any): PacketFees;
    toJSON(message: PacketFees): unknown;
    fromPartial<I extends {
        packet_fees?: {
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
        }[] | undefined;
    } & {
        packet_fees?: ({
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
        }[] & ({
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
                } & Record<Exclude<keyof I["packet_fees"][number]["fee"]["recv_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["packet_fees"][number]["fee"]["recv_fee"], keyof {
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
                } & Record<Exclude<keyof I["packet_fees"][number]["fee"]["ack_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["packet_fees"][number]["fee"]["ack_fee"], keyof {
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
                } & Record<Exclude<keyof I["packet_fees"][number]["fee"]["timeout_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["packet_fees"][number]["fee"]["timeout_fee"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["packet_fees"][number]["fee"], keyof Fee>, never>) | undefined;
            refund_address?: string | undefined;
            relayers?: (string[] & string[] & Record<Exclude<keyof I["packet_fees"][number]["relayers"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["packet_fees"][number], keyof PacketFee>, never>)[] & Record<Exclude<keyof I["packet_fees"], keyof {
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
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "packet_fees">, never>>(object: I): PacketFees;
};
export declare const IdentifiedPacketFees: {
    encode(message: IdentifiedPacketFees, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): IdentifiedPacketFees;
    fromJSON(object: any): IdentifiedPacketFees;
    toJSON(message: IdentifiedPacketFees): unknown;
    fromPartial<I extends {
        packet_id?: {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        } | undefined;
        packet_fees?: {
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
        }[] | undefined;
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
        packet_fees?: ({
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
        }[] & ({
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
                } & Record<Exclude<keyof I["packet_fees"][number]["fee"]["recv_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["packet_fees"][number]["fee"]["recv_fee"], keyof {
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
                } & Record<Exclude<keyof I["packet_fees"][number]["fee"]["ack_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["packet_fees"][number]["fee"]["ack_fee"], keyof {
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
                } & Record<Exclude<keyof I["packet_fees"][number]["fee"]["timeout_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["packet_fees"][number]["fee"]["timeout_fee"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["packet_fees"][number]["fee"], keyof Fee>, never>) | undefined;
            refund_address?: string | undefined;
            relayers?: (string[] & string[] & Record<Exclude<keyof I["packet_fees"][number]["relayers"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["packet_fees"][number], keyof PacketFee>, never>)[] & Record<Exclude<keyof I["packet_fees"], keyof {
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
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof IdentifiedPacketFees>, never>>(object: I): IdentifiedPacketFees;
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
//# sourceMappingURL=fee.d.ts.map