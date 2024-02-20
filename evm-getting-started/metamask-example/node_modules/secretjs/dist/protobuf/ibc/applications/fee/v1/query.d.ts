import * as _m0 from "protobufjs/minimal";
import { PageRequest } from "../../../../cosmos/base/query/v1beta1/pagination";
import { PacketId } from "../../../core/channel/v1/channel";
import { IdentifiedPacketFees } from "./fee";
import { Coin } from "../../../../cosmos/base/v1beta1/coin";
import { FeeEnabledChannel } from "./genesis";
export declare const protobufPackage = "ibc.applications.fee.v1";
/** QueryIncentivizedPacketsRequest defines the request type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** block height at which to query */
    query_height: string;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPackets rpc */
export interface QueryIncentivizedPacketsResponse {
    /** list of identified fees for incentivized packets */
    incentivized_packets: IdentifiedPacketFees[];
}
/** QueryIncentivizedPacketRequest defines the request type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketRequest {
    /** unique packet identifier comprised of channel ID, port ID and sequence */
    packet_id?: PacketId;
    /** block height at which to query */
    query_height: string;
}
/** QueryIncentivizedPacketsResponse defines the response type for the IncentivizedPacket rpc */
export interface QueryIncentivizedPacketResponse {
    /** the identified fees for the incentivized packet */
    incentivized_packet?: IdentifiedPacketFees;
}
/**
 * QueryIncentivizedPacketsForChannelRequest defines the request type for querying for all incentivized packets
 * for a specific channel
 */
export interface QueryIncentivizedPacketsForChannelRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    port_id: string;
    channel_id: string;
    /** Height to query at */
    query_height: string;
}
/** QueryIncentivizedPacketsResponse defines the response type for the incentivized packets RPC */
export interface QueryIncentivizedPacketsForChannelResponse {
    /** Map of all incentivized_packets */
    incentivized_packets: IdentifiedPacketFees[];
}
/** QueryTotalRecvFeesRequest defines the request type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesRequest {
    /** the packet identifier for the associated fees */
    packet_id?: PacketId;
}
/** QueryTotalRecvFeesResponse defines the response type for the TotalRecvFees rpc */
export interface QueryTotalRecvFeesResponse {
    /** the total packet receive fees */
    recv_fees: Coin[];
}
/** QueryTotalAckFeesRequest defines the request type for the TotalAckFees rpc */
export interface QueryTotalAckFeesRequest {
    /** the packet identifier for the associated fees */
    packet_id?: PacketId;
}
/** QueryTotalAckFeesResponse defines the response type for the TotalAckFees rpc */
export interface QueryTotalAckFeesResponse {
    /** the total packet acknowledgement fees */
    ack_fees: Coin[];
}
/** QueryTotalTimeoutFeesRequest defines the request type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesRequest {
    /** the packet identifier for the associated fees */
    packet_id?: PacketId;
}
/** QueryTotalTimeoutFeesResponse defines the response type for the TotalTimeoutFees rpc */
export interface QueryTotalTimeoutFeesResponse {
    /** the total packet timeout fees */
    timeout_fees: Coin[];
}
/** QueryPayeeRequest defines the request type for the Payee rpc */
export interface QueryPayeeRequest {
    /** unique channel identifier */
    channel_id: string;
    /** the relayer address to which the distribution address is registered */
    relayer: string;
}
/** QueryPayeeResponse defines the response type for the Payee rpc */
export interface QueryPayeeResponse {
    /** the payee address to which packet fees are paid out */
    payee_address: string;
}
/** QueryCounterpartyPayeeRequest defines the request type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeRequest {
    /** unique channel identifier */
    channel_id: string;
    /** the relayer address to which the counterparty is registered */
    relayer: string;
}
/** QueryCounterpartyPayeeResponse defines the response type for the CounterpartyPayee rpc */
export interface QueryCounterpartyPayeeResponse {
    /** the counterparty payee address used to compensate forward relaying */
    counterparty_payee: string;
}
/** QueryFeeEnabledChannelsRequest defines the request type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** block height at which to query */
    query_height: string;
}
/** QueryFeeEnabledChannelsResponse defines the response type for the FeeEnabledChannels rpc */
export interface QueryFeeEnabledChannelsResponse {
    /** list of fee enabled channels */
    fee_enabled_channels: FeeEnabledChannel[];
}
/** QueryFeeEnabledChannelRequest defines the request type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelRequest {
    /** unique port identifier */
    port_id: string;
    /** unique channel identifier */
    channel_id: string;
}
/** QueryFeeEnabledChannelResponse defines the response type for the FeeEnabledChannel rpc */
export interface QueryFeeEnabledChannelResponse {
    /** boolean flag representing the fee enabled channel status */
    fee_enabled: boolean;
}
export declare const QueryIncentivizedPacketsRequest: {
    encode(message: QueryIncentivizedPacketsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryIncentivizedPacketsRequest;
    fromJSON(object: any): QueryIncentivizedPacketsRequest;
    toJSON(message: QueryIncentivizedPacketsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        query_height?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        query_height?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryIncentivizedPacketsRequest>, never>>(object: I): QueryIncentivizedPacketsRequest;
};
export declare const QueryIncentivizedPacketsResponse: {
    encode(message: QueryIncentivizedPacketsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryIncentivizedPacketsResponse;
    fromJSON(object: any): QueryIncentivizedPacketsResponse;
    toJSON(message: QueryIncentivizedPacketsResponse): unknown;
    fromPartial<I extends {
        incentivized_packets?: {
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
    } & {
        incentivized_packets?: ({
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
            } & Record<Exclude<keyof I["incentivized_packets"][number]["packet_id"], keyof PacketId>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"][number]["fee"]["recv_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"][number]["fee"]["recv_fee"], keyof {
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
                    } & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"][number]["fee"]["ack_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"][number]["fee"]["ack_fee"], keyof {
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
                    } & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"][number]["fee"]["timeout_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"][number]["fee"]["timeout_fee"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"][number]["fee"], keyof import("./fee").Fee>, never>) | undefined;
                refund_address?: string | undefined;
                relayers?: (string[] & string[] & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"][number]["relayers"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"][number], keyof import("./fee").PacketFee>, never>)[] & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"], keyof {
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
        } & Record<Exclude<keyof I["incentivized_packets"][number], keyof IdentifiedPacketFees>, never>)[] & Record<Exclude<keyof I["incentivized_packets"], keyof {
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
    } & Record<Exclude<keyof I, "incentivized_packets">, never>>(object: I): QueryIncentivizedPacketsResponse;
};
export declare const QueryIncentivizedPacketRequest: {
    encode(message: QueryIncentivizedPacketRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryIncentivizedPacketRequest;
    fromJSON(object: any): QueryIncentivizedPacketRequest;
    toJSON(message: QueryIncentivizedPacketRequest): unknown;
    fromPartial<I extends {
        packet_id?: {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
        } | undefined;
        query_height?: string | undefined;
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
        query_height?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryIncentivizedPacketRequest>, never>>(object: I): QueryIncentivizedPacketRequest;
};
export declare const QueryIncentivizedPacketResponse: {
    encode(message: QueryIncentivizedPacketResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryIncentivizedPacketResponse;
    fromJSON(object: any): QueryIncentivizedPacketResponse;
    toJSON(message: QueryIncentivizedPacketResponse): unknown;
    fromPartial<I extends {
        incentivized_packet?: {
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
        } | undefined;
    } & {
        incentivized_packet?: ({
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
            } & Record<Exclude<keyof I["incentivized_packet"]["packet_id"], keyof PacketId>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["incentivized_packet"]["packet_fees"][number]["fee"]["recv_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["incentivized_packet"]["packet_fees"][number]["fee"]["recv_fee"], keyof {
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
                    } & Record<Exclude<keyof I["incentivized_packet"]["packet_fees"][number]["fee"]["ack_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["incentivized_packet"]["packet_fees"][number]["fee"]["ack_fee"], keyof {
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
                    } & Record<Exclude<keyof I["incentivized_packet"]["packet_fees"][number]["fee"]["timeout_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["incentivized_packet"]["packet_fees"][number]["fee"]["timeout_fee"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["incentivized_packet"]["packet_fees"][number]["fee"], keyof import("./fee").Fee>, never>) | undefined;
                refund_address?: string | undefined;
                relayers?: (string[] & string[] & Record<Exclude<keyof I["incentivized_packet"]["packet_fees"][number]["relayers"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["incentivized_packet"]["packet_fees"][number], keyof import("./fee").PacketFee>, never>)[] & Record<Exclude<keyof I["incentivized_packet"]["packet_fees"], keyof {
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
        } & Record<Exclude<keyof I["incentivized_packet"], keyof IdentifiedPacketFees>, never>) | undefined;
    } & Record<Exclude<keyof I, "incentivized_packet">, never>>(object: I): QueryIncentivizedPacketResponse;
};
export declare const QueryIncentivizedPacketsForChannelRequest: {
    encode(message: QueryIncentivizedPacketsForChannelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryIncentivizedPacketsForChannelRequest;
    fromJSON(object: any): QueryIncentivizedPacketsForChannelRequest;
    toJSON(message: QueryIncentivizedPacketsForChannelRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        port_id?: string | undefined;
        channel_id?: string | undefined;
        query_height?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        port_id?: string | undefined;
        channel_id?: string | undefined;
        query_height?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryIncentivizedPacketsForChannelRequest>, never>>(object: I): QueryIncentivizedPacketsForChannelRequest;
};
export declare const QueryIncentivizedPacketsForChannelResponse: {
    encode(message: QueryIncentivizedPacketsForChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryIncentivizedPacketsForChannelResponse;
    fromJSON(object: any): QueryIncentivizedPacketsForChannelResponse;
    toJSON(message: QueryIncentivizedPacketsForChannelResponse): unknown;
    fromPartial<I extends {
        incentivized_packets?: {
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
    } & {
        incentivized_packets?: ({
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
            } & Record<Exclude<keyof I["incentivized_packets"][number]["packet_id"], keyof PacketId>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"][number]["fee"]["recv_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"][number]["fee"]["recv_fee"], keyof {
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
                    } & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"][number]["fee"]["ack_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"][number]["fee"]["ack_fee"], keyof {
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
                    } & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"][number]["fee"]["timeout_fee"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"][number]["fee"]["timeout_fee"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"][number]["fee"], keyof import("./fee").Fee>, never>) | undefined;
                refund_address?: string | undefined;
                relayers?: (string[] & string[] & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"][number]["relayers"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"][number], keyof import("./fee").PacketFee>, never>)[] & Record<Exclude<keyof I["incentivized_packets"][number]["packet_fees"], keyof {
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
        } & Record<Exclude<keyof I["incentivized_packets"][number], keyof IdentifiedPacketFees>, never>)[] & Record<Exclude<keyof I["incentivized_packets"], keyof {
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
    } & Record<Exclude<keyof I, "incentivized_packets">, never>>(object: I): QueryIncentivizedPacketsForChannelResponse;
};
export declare const QueryTotalRecvFeesRequest: {
    encode(message: QueryTotalRecvFeesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryTotalRecvFeesRequest;
    fromJSON(object: any): QueryTotalRecvFeesRequest;
    toJSON(message: QueryTotalRecvFeesRequest): unknown;
    fromPartial<I extends {
        packet_id?: {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
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
    } & Record<Exclude<keyof I, "packet_id">, never>>(object: I): QueryTotalRecvFeesRequest;
};
export declare const QueryTotalRecvFeesResponse: {
    encode(message: QueryTotalRecvFeesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryTotalRecvFeesResponse;
    fromJSON(object: any): QueryTotalRecvFeesResponse;
    toJSON(message: QueryTotalRecvFeesResponse): unknown;
    fromPartial<I extends {
        recv_fees?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        recv_fees?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["recv_fees"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["recv_fees"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "recv_fees">, never>>(object: I): QueryTotalRecvFeesResponse;
};
export declare const QueryTotalAckFeesRequest: {
    encode(message: QueryTotalAckFeesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryTotalAckFeesRequest;
    fromJSON(object: any): QueryTotalAckFeesRequest;
    toJSON(message: QueryTotalAckFeesRequest): unknown;
    fromPartial<I extends {
        packet_id?: {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
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
    } & Record<Exclude<keyof I, "packet_id">, never>>(object: I): QueryTotalAckFeesRequest;
};
export declare const QueryTotalAckFeesResponse: {
    encode(message: QueryTotalAckFeesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryTotalAckFeesResponse;
    fromJSON(object: any): QueryTotalAckFeesResponse;
    toJSON(message: QueryTotalAckFeesResponse): unknown;
    fromPartial<I extends {
        ack_fees?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        ack_fees?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["ack_fees"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["ack_fees"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "ack_fees">, never>>(object: I): QueryTotalAckFeesResponse;
};
export declare const QueryTotalTimeoutFeesRequest: {
    encode(message: QueryTotalTimeoutFeesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryTotalTimeoutFeesRequest;
    fromJSON(object: any): QueryTotalTimeoutFeesRequest;
    toJSON(message: QueryTotalTimeoutFeesRequest): unknown;
    fromPartial<I extends {
        packet_id?: {
            port_id?: string | undefined;
            channel_id?: string | undefined;
            sequence?: string | undefined;
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
    } & Record<Exclude<keyof I, "packet_id">, never>>(object: I): QueryTotalTimeoutFeesRequest;
};
export declare const QueryTotalTimeoutFeesResponse: {
    encode(message: QueryTotalTimeoutFeesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryTotalTimeoutFeesResponse;
    fromJSON(object: any): QueryTotalTimeoutFeesResponse;
    toJSON(message: QueryTotalTimeoutFeesResponse): unknown;
    fromPartial<I extends {
        timeout_fees?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        timeout_fees?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["timeout_fees"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["timeout_fees"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "timeout_fees">, never>>(object: I): QueryTotalTimeoutFeesResponse;
};
export declare const QueryPayeeRequest: {
    encode(message: QueryPayeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPayeeRequest;
    fromJSON(object: any): QueryPayeeRequest;
    toJSON(message: QueryPayeeRequest): unknown;
    fromPartial<I extends {
        channel_id?: string | undefined;
        relayer?: string | undefined;
    } & {
        channel_id?: string | undefined;
        relayer?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryPayeeRequest>, never>>(object: I): QueryPayeeRequest;
};
export declare const QueryPayeeResponse: {
    encode(message: QueryPayeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryPayeeResponse;
    fromJSON(object: any): QueryPayeeResponse;
    toJSON(message: QueryPayeeResponse): unknown;
    fromPartial<I extends {
        payee_address?: string | undefined;
    } & {
        payee_address?: string | undefined;
    } & Record<Exclude<keyof I, "payee_address">, never>>(object: I): QueryPayeeResponse;
};
export declare const QueryCounterpartyPayeeRequest: {
    encode(message: QueryCounterpartyPayeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCounterpartyPayeeRequest;
    fromJSON(object: any): QueryCounterpartyPayeeRequest;
    toJSON(message: QueryCounterpartyPayeeRequest): unknown;
    fromPartial<I extends {
        channel_id?: string | undefined;
        relayer?: string | undefined;
    } & {
        channel_id?: string | undefined;
        relayer?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryCounterpartyPayeeRequest>, never>>(object: I): QueryCounterpartyPayeeRequest;
};
export declare const QueryCounterpartyPayeeResponse: {
    encode(message: QueryCounterpartyPayeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryCounterpartyPayeeResponse;
    fromJSON(object: any): QueryCounterpartyPayeeResponse;
    toJSON(message: QueryCounterpartyPayeeResponse): unknown;
    fromPartial<I extends {
        counterparty_payee?: string | undefined;
    } & {
        counterparty_payee?: string | undefined;
    } & Record<Exclude<keyof I, "counterparty_payee">, never>>(object: I): QueryCounterpartyPayeeResponse;
};
export declare const QueryFeeEnabledChannelsRequest: {
    encode(message: QueryFeeEnabledChannelsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryFeeEnabledChannelsRequest;
    fromJSON(object: any): QueryFeeEnabledChannelsRequest;
    toJSON(message: QueryFeeEnabledChannelsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        query_height?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        query_height?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryFeeEnabledChannelsRequest>, never>>(object: I): QueryFeeEnabledChannelsRequest;
};
export declare const QueryFeeEnabledChannelsResponse: {
    encode(message: QueryFeeEnabledChannelsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryFeeEnabledChannelsResponse;
    fromJSON(object: any): QueryFeeEnabledChannelsResponse;
    toJSON(message: QueryFeeEnabledChannelsResponse): unknown;
    fromPartial<I extends {
        fee_enabled_channels?: {
            port_id?: string | undefined;
            channel_id?: string | undefined;
        }[] | undefined;
    } & {
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
    } & Record<Exclude<keyof I, "fee_enabled_channels">, never>>(object: I): QueryFeeEnabledChannelsResponse;
};
export declare const QueryFeeEnabledChannelRequest: {
    encode(message: QueryFeeEnabledChannelRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryFeeEnabledChannelRequest;
    fromJSON(object: any): QueryFeeEnabledChannelRequest;
    toJSON(message: QueryFeeEnabledChannelRequest): unknown;
    fromPartial<I extends {
        port_id?: string | undefined;
        channel_id?: string | undefined;
    } & {
        port_id?: string | undefined;
        channel_id?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryFeeEnabledChannelRequest>, never>>(object: I): QueryFeeEnabledChannelRequest;
};
export declare const QueryFeeEnabledChannelResponse: {
    encode(message: QueryFeeEnabledChannelResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): QueryFeeEnabledChannelResponse;
    fromJSON(object: any): QueryFeeEnabledChannelResponse;
    toJSON(message: QueryFeeEnabledChannelResponse): unknown;
    fromPartial<I extends {
        fee_enabled?: boolean | undefined;
    } & {
        fee_enabled?: boolean | undefined;
    } & Record<Exclude<keyof I, "fee_enabled">, never>>(object: I): QueryFeeEnabledChannelResponse;
};
/** Query defines the ICS29 gRPC querier service. */
export interface Query {
    /** IncentivizedPackets returns all incentivized packets and their associated fees */
    IncentivizedPackets(request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse>;
    /** IncentivizedPacket returns all packet fees for a packet given its identifier */
    IncentivizedPacket(request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse>;
    /** Gets all incentivized packets for a specific channel */
    IncentivizedPacketsForChannel(request: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponse>;
    /** TotalRecvFees returns the total receive fees for a packet given its identifier */
    TotalRecvFees(request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse>;
    /** TotalAckFees returns the total acknowledgement fees for a packet given its identifier */
    TotalAckFees(request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse>;
    /** TotalTimeoutFees returns the total timeout fees for a packet given its identifier */
    TotalTimeoutFees(request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse>;
    /** Payee returns the registered payee address for a specific channel given the relayer address */
    Payee(request: QueryPayeeRequest): Promise<QueryPayeeResponse>;
    /** CounterpartyPayee returns the registered counterparty payee for forward relaying */
    CounterpartyPayee(request: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponse>;
    /** FeeEnabledChannels returns a list of all fee enabled channels */
    FeeEnabledChannels(request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse>;
    /** FeeEnabledChannel returns true if the provided port and channel identifiers belong to a fee enabled channel */
    FeeEnabledChannel(request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    IncentivizedPackets(request: QueryIncentivizedPacketsRequest): Promise<QueryIncentivizedPacketsResponse>;
    IncentivizedPacket(request: QueryIncentivizedPacketRequest): Promise<QueryIncentivizedPacketResponse>;
    IncentivizedPacketsForChannel(request: QueryIncentivizedPacketsForChannelRequest): Promise<QueryIncentivizedPacketsForChannelResponse>;
    TotalRecvFees(request: QueryTotalRecvFeesRequest): Promise<QueryTotalRecvFeesResponse>;
    TotalAckFees(request: QueryTotalAckFeesRequest): Promise<QueryTotalAckFeesResponse>;
    TotalTimeoutFees(request: QueryTotalTimeoutFeesRequest): Promise<QueryTotalTimeoutFeesResponse>;
    Payee(request: QueryPayeeRequest): Promise<QueryPayeeResponse>;
    CounterpartyPayee(request: QueryCounterpartyPayeeRequest): Promise<QueryCounterpartyPayeeResponse>;
    FeeEnabledChannels(request: QueryFeeEnabledChannelsRequest): Promise<QueryFeeEnabledChannelsResponse>;
    FeeEnabledChannel(request: QueryFeeEnabledChannelRequest): Promise<QueryFeeEnabledChannelResponse>;
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
//# sourceMappingURL=query.d.ts.map