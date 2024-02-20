import * as _m0 from "protobufjs/minimal";
import { PacketId } from "../../../core/channel/v1/channel";
import { IdentifiedPacketFees } from "./fee";
export declare const protobufPackage = "ibc.applications.fee.v1";
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisState {
    /** list of identified packet fees */
    identified_fees: IdentifiedPacketFees[];
    /** list of fee enabled channels */
    fee_enabled_channels: FeeEnabledChannel[];
    /** list of registered payees */
    registered_payees: RegisteredPayee[];
    /** list of registered counterparty payees */
    registered_counterparty_payees: RegisteredCounterpartyPayee[];
    /** list of forward relayer addresses */
    forward_relayers: ForwardRelayerAddress[];
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannel {
    /** unique port identifier */
    port_id: string;
    /** unique channel identifier */
    channel_id: string;
}
/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayee {
    /** unique channel identifier */
    channel_id: string;
    /** the relayer address */
    relayer: string;
    /** the payee address */
    payee: string;
}
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayee {
    /** unique channel identifier */
    channel_id: string;
    /** the relayer address */
    relayer: string;
    /** the counterparty payee address */
    counterparty_payee: string;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddress {
    /** the forward relayer address */
    address: string;
    /** unique packet identifer comprised of the channel ID, port ID and sequence */
    packet_id?: PacketId;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        identified_fees?: {
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
        }[] | undefined;
        fee_enabled_channels?: {
            port_id?: string | undefined;
            channel_id?: string | undefined;
        }[] | undefined;
        registered_payees?: {
            channel_id?: string | undefined;
            relayer?: string | undefined;
            payee?: string | undefined;
        }[] | undefined;
        registered_counterparty_payees?: {
            channel_id?: string | undefined;
            relayer?: string | undefined;
            counterparty_payee?: string | undefined;
        }[] | undefined;
        forward_relayers?: {
            address?: string | undefined;
            packet_id?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
                sequence?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        identified_fees?: ({
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
        }[] & ({
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
            } & Record<Exclude<keyof I["identified_fees"][number]["packet_id"], keyof PacketId>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["identified_fees"][number]["packet_fees"][number]["fee"]["recv_fee"][number], keyof import("../../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["identified_fees"][number]["packet_fees"][number]["fee"]["recv_fee"], keyof {
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
                    } & Record<Exclude<keyof I["identified_fees"][number]["packet_fees"][number]["fee"]["ack_fee"][number], keyof import("../../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["identified_fees"][number]["packet_fees"][number]["fee"]["ack_fee"], keyof {
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
                    } & Record<Exclude<keyof I["identified_fees"][number]["packet_fees"][number]["fee"]["timeout_fee"][number], keyof import("../../../../cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["identified_fees"][number]["packet_fees"][number]["fee"]["timeout_fee"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["identified_fees"][number]["packet_fees"][number]["fee"], keyof import("./fee").Fee>, never>) | undefined;
                refund_address?: string | undefined;
                relayers?: (string[] & string[] & Record<Exclude<keyof I["identified_fees"][number]["packet_fees"][number]["relayers"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["identified_fees"][number]["packet_fees"][number], keyof import("./fee").PacketFee>, never>)[] & Record<Exclude<keyof I["identified_fees"][number]["packet_fees"], keyof {
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
        } & Record<Exclude<keyof I["identified_fees"][number], keyof IdentifiedPacketFees>, never>)[] & Record<Exclude<keyof I["identified_fees"], keyof {
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
        }[]>, never>) | undefined;
        fee_enabled_channels?: ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
        }[] & ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
        } & {
            port_id?: string | undefined;
            channel_id?: string | undefined;
        } & Record<Exclude<keyof I["fee_enabled_channels"][number], keyof FeeEnabledChannel>, never>)[] & Record<Exclude<keyof I["fee_enabled_channels"], keyof {
            port_id?: string | undefined;
            channel_id?: string | undefined;
        }[]>, never>) | undefined;
        registered_payees?: ({
            channel_id?: string | undefined;
            relayer?: string | undefined;
            payee?: string | undefined;
        }[] & ({
            channel_id?: string | undefined;
            relayer?: string | undefined;
            payee?: string | undefined;
        } & {
            channel_id?: string | undefined;
            relayer?: string | undefined;
            payee?: string | undefined;
        } & Record<Exclude<keyof I["registered_payees"][number], keyof RegisteredPayee>, never>)[] & Record<Exclude<keyof I["registered_payees"], keyof {
            channel_id?: string | undefined;
            relayer?: string | undefined;
            payee?: string | undefined;
        }[]>, never>) | undefined;
        registered_counterparty_payees?: ({
            channel_id?: string | undefined;
            relayer?: string | undefined;
            counterparty_payee?: string | undefined;
        }[] & ({
            channel_id?: string | undefined;
            relayer?: string | undefined;
            counterparty_payee?: string | undefined;
        } & {
            channel_id?: string | undefined;
            relayer?: string | undefined;
            counterparty_payee?: string | undefined;
        } & Record<Exclude<keyof I["registered_counterparty_payees"][number], keyof RegisteredCounterpartyPayee>, never>)[] & Record<Exclude<keyof I["registered_counterparty_payees"], keyof {
            channel_id?: string | undefined;
            relayer?: string | undefined;
            counterparty_payee?: string | undefined;
        }[]>, never>) | undefined;
        forward_relayers?: ({
            address?: string | undefined;
            packet_id?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
                sequence?: string | undefined;
            } | undefined;
        }[] & ({
            address?: string | undefined;
            packet_id?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
                sequence?: string | undefined;
            } | undefined;
        } & {
            address?: string | undefined;
            packet_id?: ({
                port_id?: string | undefined;
                channel_id?: string | undefined;
                sequence?: string | undefined;
            } & {
                port_id?: string | undefined;
                channel_id?: string | undefined;
                sequence?: string | undefined;
            } & Record<Exclude<keyof I["forward_relayers"][number]["packet_id"], keyof PacketId>, never>) | undefined;
        } & Record<Exclude<keyof I["forward_relayers"][number], keyof ForwardRelayerAddress>, never>)[] & Record<Exclude<keyof I["forward_relayers"], keyof {
            address?: string | undefined;
            packet_id?: {
                port_id?: string | undefined;
                channel_id?: string | undefined;
                sequence?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const FeeEnabledChannel: {
    encode(message: FeeEnabledChannel, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): FeeEnabledChannel;
    fromJSON(object: any): FeeEnabledChannel;
    toJSON(message: FeeEnabledChannel): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
    } & Record<Exclude<keyof I, keyof FeeEnabledChannel>, never>>(object: I): FeeEnabledChannel;
};
export declare const RegisteredPayee: {
    encode(message: RegisteredPayee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisteredPayee;
    fromJSON(object: any): RegisteredPayee;
    toJSON(message: RegisteredPayee): unknown;
    fromPartial<I extends {
        channel_id?: string | undefined;
        relayer?: string | undefined;
        payee?: string | undefined;
    } & {
        channel_id?: string | undefined;
        relayer?: string | undefined;
        payee?: string | undefined;
    } & Record<Exclude<keyof I, keyof RegisteredPayee>, never>>(object: I): RegisteredPayee;
};
export declare const RegisteredCounterpartyPayee: {
    encode(message: RegisteredCounterpartyPayee, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisteredCounterpartyPayee;
    fromJSON(object: any): RegisteredCounterpartyPayee;
    toJSON(message: RegisteredCounterpartyPayee): unknown;
    fromPartial<I extends {
        channel_id?: string | undefined;
        relayer?: string | undefined;
        counterparty_payee?: string | undefined;
    } & {
        channel_id?: string | undefined;
        relayer?: string | undefined;
        counterparty_payee?: string | undefined;
    } & Record<Exclude<keyof I, keyof RegisteredCounterpartyPayee>, never>>(object: I): RegisteredCounterpartyPayee;
};
export declare const ForwardRelayerAddress: {
    encode(message: ForwardRelayerAddress, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ForwardRelayerAddress;
    fromJSON(object: any): ForwardRelayerAddress;
    toJSON(message: ForwardRelayerAddress): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        packet_id?: {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        } | undefined;
    } & {
        address?: string | undefined;
        packet_id?: ({
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        } & {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        } & Record<Exclude<keyof I["packet_id"], keyof PacketId>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof ForwardRelayerAddress>, never>>(object: I): ForwardRelayerAddress;
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
//# sourceMappingURL=genesis.d.ts.map