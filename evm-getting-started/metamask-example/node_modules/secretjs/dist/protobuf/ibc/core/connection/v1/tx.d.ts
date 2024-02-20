import * as _m0 from "protobufjs/minimal";
import { Counterparty, Version } from "./connection";
import { Any } from "../../../../google/protobuf/any";
import { Height } from "../../client/v1/client";
export declare const protobufPackage = "ibc.core.connection.v1";
/**
 * MsgConnectionOpenInit defines the msg sent by an account on Chain A to
 * initialize a connection with Chain B.
 */
export interface MsgConnectionOpenInit {
    client_id: string;
    counterparty?: Counterparty;
    version?: Version;
    delay_period: string;
    signer: string;
}
/**
 * MsgConnectionOpenInitResponse defines the Msg/ConnectionOpenInit response
 * type.
 */
export interface MsgConnectionOpenInitResponse {
}
/**
 * MsgConnectionOpenTry defines a msg sent by a Relayer to try to open a
 * connection on Chain B.
 */
export interface MsgConnectionOpenTry {
    client_id: string;
    /**
     * Deprecated: this field is unused. Crossing hellos are no longer supported in core IBC.
     *
     * @deprecated
     */
    previous_connection_id: string;
    client_state?: Any;
    counterparty?: Counterparty;
    delay_period: string;
    counterparty_versions: Version[];
    proof_height?: Height;
    /**
     * proof of the initialization the connection on Chain A: `UNITIALIZED ->
     * INIT`
     */
    proof_init: Uint8Array;
    /** proof of client state included in message */
    proof_client: Uint8Array;
    /** proof of client consensus state */
    proof_consensus: Uint8Array;
    consensus_height?: Height;
    signer: string;
}
/** MsgConnectionOpenTryResponse defines the Msg/ConnectionOpenTry response type. */
export interface MsgConnectionOpenTryResponse {
}
/**
 * MsgConnectionOpenAck defines a msg sent by a Relayer to Chain A to
 * acknowledge the change of connection state to TRYOPEN on Chain B.
 */
export interface MsgConnectionOpenAck {
    connection_id: string;
    counterparty_connection_id: string;
    version?: Version;
    client_state?: Any;
    proof_height?: Height;
    /**
     * proof of the initialization the connection on Chain B: `UNITIALIZED ->
     * TRYOPEN`
     */
    proof_try: Uint8Array;
    /** proof of client state included in message */
    proof_client: Uint8Array;
    /** proof of client consensus state */
    proof_consensus: Uint8Array;
    consensus_height?: Height;
    signer: string;
}
/** MsgConnectionOpenAckResponse defines the Msg/ConnectionOpenAck response type. */
export interface MsgConnectionOpenAckResponse {
}
/**
 * MsgConnectionOpenConfirm defines a msg sent by a Relayer to Chain B to
 * acknowledge the change of connection state to OPEN on Chain A.
 */
export interface MsgConnectionOpenConfirm {
    connection_id: string;
    /** proof for the change of the connection state on Chain A: `INIT -> OPEN` */
    proof_ack: Uint8Array;
    proof_height?: Height;
    signer: string;
}
/**
 * MsgConnectionOpenConfirmResponse defines the Msg/ConnectionOpenConfirm
 * response type.
 */
export interface MsgConnectionOpenConfirmResponse {
}
export declare const MsgConnectionOpenInit: {
    encode(message: MsgConnectionOpenInit, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgConnectionOpenInit;
    fromJSON(object: any): MsgConnectionOpenInit;
    toJSON(message: MsgConnectionOpenInit): unknown;
    fromPartial<I extends {
        client_id?: string | undefined;
        counterparty?: {
            client_id?: string | undefined;
            connection_id?: string | undefined;
            prefix?: {
                key_prefix?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        version?: {
            identifier?: string | undefined;
            features?: string[] | undefined;
        } | undefined;
        delay_period?: string | undefined;
        signer?: string | undefined;
    } & {
        client_id?: string | undefined;
        counterparty?: ({
            client_id?: string | undefined;
            connection_id?: string | undefined;
            prefix?: {
                key_prefix?: Uint8Array | undefined;
            } | undefined;
        } & {
            client_id?: string | undefined;
            connection_id?: string | undefined;
            prefix?: ({
                key_prefix?: Uint8Array | undefined;
            } & {
                key_prefix?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["counterparty"]["prefix"], "key_prefix">, never>) | undefined;
        } & Record<Exclude<keyof I["counterparty"], keyof Counterparty>, never>) | undefined;
        version?: ({
            identifier?: string | undefined;
            features?: string[] | undefined;
        } & {
            identifier?: string | undefined;
            features?: (string[] & string[] & Record<Exclude<keyof I["version"]["features"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["version"], keyof Version>, never>) | undefined;
        delay_period?: string | undefined;
        signer?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgConnectionOpenInit>, never>>(object: I): MsgConnectionOpenInit;
};
export declare const MsgConnectionOpenInitResponse: {
    encode(_: MsgConnectionOpenInitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgConnectionOpenInitResponse;
    fromJSON(_: any): MsgConnectionOpenInitResponse;
    toJSON(_: MsgConnectionOpenInitResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgConnectionOpenInitResponse;
};
export declare const MsgConnectionOpenTry: {
    encode(message: MsgConnectionOpenTry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgConnectionOpenTry;
    fromJSON(object: any): MsgConnectionOpenTry;
    toJSON(message: MsgConnectionOpenTry): unknown;
    fromPartial<I extends {
        client_id?: string | undefined;
        previous_connection_id?: string | undefined;
        client_state?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        counterparty?: {
            client_id?: string | undefined;
            connection_id?: string | undefined;
            prefix?: {
                key_prefix?: Uint8Array | undefined;
            } | undefined;
        } | undefined;
        delay_period?: string | undefined;
        counterparty_versions?: {
            identifier?: string | undefined;
            features?: string[] | undefined;
        }[] | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
        proof_init?: Uint8Array | undefined;
        proof_client?: Uint8Array | undefined;
        proof_consensus?: Uint8Array | undefined;
        consensus_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
        signer?: string | undefined;
    } & {
        client_id?: string | undefined;
        previous_connection_id?: string | undefined;
        client_state?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["client_state"], keyof Any>, never>) | undefined;
        counterparty?: ({
            client_id?: string | undefined;
            connection_id?: string | undefined;
            prefix?: {
                key_prefix?: Uint8Array | undefined;
            } | undefined;
        } & {
            client_id?: string | undefined;
            connection_id?: string | undefined;
            prefix?: ({
                key_prefix?: Uint8Array | undefined;
            } & {
                key_prefix?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["counterparty"]["prefix"], "key_prefix">, never>) | undefined;
        } & Record<Exclude<keyof I["counterparty"], keyof Counterparty>, never>) | undefined;
        delay_period?: string | undefined;
        counterparty_versions?: ({
            identifier?: string | undefined;
            features?: string[] | undefined;
        }[] & ({
            identifier?: string | undefined;
            features?: string[] | undefined;
        } & {
            identifier?: string | undefined;
            features?: (string[] & string[] & Record<Exclude<keyof I["counterparty_versions"][number]["features"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["counterparty_versions"][number], keyof Version>, never>)[] & Record<Exclude<keyof I["counterparty_versions"], keyof {
            identifier?: string | undefined;
            features?: string[] | undefined;
        }[]>, never>) | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
        proof_init?: Uint8Array | undefined;
        proof_client?: Uint8Array | undefined;
        proof_consensus?: Uint8Array | undefined;
        consensus_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["consensus_height"], keyof Height>, never>) | undefined;
        signer?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgConnectionOpenTry>, never>>(object: I): MsgConnectionOpenTry;
};
export declare const MsgConnectionOpenTryResponse: {
    encode(_: MsgConnectionOpenTryResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgConnectionOpenTryResponse;
    fromJSON(_: any): MsgConnectionOpenTryResponse;
    toJSON(_: MsgConnectionOpenTryResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgConnectionOpenTryResponse;
};
export declare const MsgConnectionOpenAck: {
    encode(message: MsgConnectionOpenAck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgConnectionOpenAck;
    fromJSON(object: any): MsgConnectionOpenAck;
    toJSON(message: MsgConnectionOpenAck): unknown;
    fromPartial<I extends {
        connection_id?: string | undefined;
        counterparty_connection_id?: string | undefined;
        version?: {
            identifier?: string | undefined;
            features?: string[] | undefined;
        } | undefined;
        client_state?: {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
        proof_try?: Uint8Array | undefined;
        proof_client?: Uint8Array | undefined;
        proof_consensus?: Uint8Array | undefined;
        consensus_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
        signer?: string | undefined;
    } & {
        connection_id?: string | undefined;
        counterparty_connection_id?: string | undefined;
        version?: ({
            identifier?: string | undefined;
            features?: string[] | undefined;
        } & {
            identifier?: string | undefined;
            features?: (string[] & string[] & Record<Exclude<keyof I["version"]["features"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["version"], keyof Version>, never>) | undefined;
        client_state?: ({
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            type_url?: string | undefined;
            value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["client_state"], keyof Any>, never>) | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
        proof_try?: Uint8Array | undefined;
        proof_client?: Uint8Array | undefined;
        proof_consensus?: Uint8Array | undefined;
        consensus_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["consensus_height"], keyof Height>, never>) | undefined;
        signer?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgConnectionOpenAck>, never>>(object: I): MsgConnectionOpenAck;
};
export declare const MsgConnectionOpenAckResponse: {
    encode(_: MsgConnectionOpenAckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgConnectionOpenAckResponse;
    fromJSON(_: any): MsgConnectionOpenAckResponse;
    toJSON(_: MsgConnectionOpenAckResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgConnectionOpenAckResponse;
};
export declare const MsgConnectionOpenConfirm: {
    encode(message: MsgConnectionOpenConfirm, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgConnectionOpenConfirm;
    fromJSON(object: any): MsgConnectionOpenConfirm;
    toJSON(message: MsgConnectionOpenConfirm): unknown;
    fromPartial<I extends {
        connection_id?: string | undefined;
        proof_ack?: Uint8Array | undefined;
        proof_height?: {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } | undefined;
        signer?: string | undefined;
    } & {
        connection_id?: string | undefined;
        proof_ack?: Uint8Array | undefined;
        proof_height?: ({
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & {
            revision_number?: string | undefined;
            revision_height?: string | undefined;
        } & Record<Exclude<keyof I["proof_height"], keyof Height>, never>) | undefined;
        signer?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgConnectionOpenConfirm>, never>>(object: I): MsgConnectionOpenConfirm;
};
export declare const MsgConnectionOpenConfirmResponse: {
    encode(_: MsgConnectionOpenConfirmResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): MsgConnectionOpenConfirmResponse;
    fromJSON(_: any): MsgConnectionOpenConfirmResponse;
    toJSON(_: MsgConnectionOpenConfirmResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgConnectionOpenConfirmResponse;
};
/** Msg defines the ibc/connection Msg service. */
export interface Msg {
    /** ConnectionOpenInit defines a rpc handler method for MsgConnectionOpenInit. */
    ConnectionOpenInit(request: MsgConnectionOpenInit): Promise<MsgConnectionOpenInitResponse>;
    /** ConnectionOpenTry defines a rpc handler method for MsgConnectionOpenTry. */
    ConnectionOpenTry(request: MsgConnectionOpenTry): Promise<MsgConnectionOpenTryResponse>;
    /** ConnectionOpenAck defines a rpc handler method for MsgConnectionOpenAck. */
    ConnectionOpenAck(request: MsgConnectionOpenAck): Promise<MsgConnectionOpenAckResponse>;
    /**
     * ConnectionOpenConfirm defines a rpc handler method for
     * MsgConnectionOpenConfirm.
     */
    ConnectionOpenConfirm(request: MsgConnectionOpenConfirm): Promise<MsgConnectionOpenConfirmResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    ConnectionOpenInit(request: MsgConnectionOpenInit): Promise<MsgConnectionOpenInitResponse>;
    ConnectionOpenTry(request: MsgConnectionOpenTry): Promise<MsgConnectionOpenTryResponse>;
    ConnectionOpenAck(request: MsgConnectionOpenAck): Promise<MsgConnectionOpenAckResponse>;
    ConnectionOpenConfirm(request: MsgConnectionOpenConfirm): Promise<MsgConnectionOpenConfirmResponse>;
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