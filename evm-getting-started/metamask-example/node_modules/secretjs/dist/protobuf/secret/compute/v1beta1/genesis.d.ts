import * as _m0 from "protobufjs/minimal";
import { CodeInfo, ContractInfo, ContractCustomInfo, Model } from "./types";
export declare const protobufPackage = "secret.compute.v1beta1";
/** GenesisState - genesis state of x/wasm */
export interface GenesisState {
    /** Params params = 1 [(gogoproto.nullable) = false]; */
    codes: Code[];
    contracts: Contract[];
    sequences: Sequence[];
}
/** Code struct encompasses CodeInfo and CodeBytes */
export interface Code {
    code_id: string;
    code_info?: CodeInfo;
    code_bytes: Uint8Array;
}
/** Contract struct encompasses ContractAddress, ContractInfo, and ContractState */
export interface Contract {
    contract_address: Uint8Array;
    contract_info?: ContractInfo;
    contract_state: Model[];
    contract_custom_info?: ContractCustomInfo;
}
/** Sequence id and value of a counter */
export interface Sequence {
    id_key: Uint8Array;
    value: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        codes?: {
            code_id?: string | undefined;
            code_info?: {
                code_hash?: Uint8Array | undefined;
                creator?: Uint8Array | undefined;
                source?: string | undefined;
                builder?: string | undefined;
            } | undefined;
            code_bytes?: Uint8Array | undefined;
        }[] | undefined;
        contracts?: {
            contract_address?: Uint8Array | undefined;
            contract_info?: {
                code_id?: string | undefined;
                creator?: Uint8Array | undefined;
                label?: string | undefined;
                created?: {
                    block_height?: string | undefined;
                    tx_index?: string | undefined;
                } | undefined;
                ibc_port_id?: string | undefined;
                admin?: string | undefined;
                admin_proof?: Uint8Array | undefined;
            } | undefined;
            contract_state?: {
                Key?: Uint8Array | undefined;
                Value?: Uint8Array | undefined;
            }[] | undefined;
            contract_custom_info?: {
                enclave_key?: {
                    og_contract_key?: Uint8Array | undefined;
                    current_contract_key?: Uint8Array | undefined;
                    current_contract_key_proof?: Uint8Array | undefined;
                } | undefined;
                label?: string | undefined;
            } | undefined;
        }[] | undefined;
        sequences?: {
            id_key?: Uint8Array | undefined;
            value?: string | undefined;
        }[] | undefined;
    } & {
        codes?: ({
            code_id?: string | undefined;
            code_info?: {
                code_hash?: Uint8Array | undefined;
                creator?: Uint8Array | undefined;
                source?: string | undefined;
                builder?: string | undefined;
            } | undefined;
            code_bytes?: Uint8Array | undefined;
        }[] & ({
            code_id?: string | undefined;
            code_info?: {
                code_hash?: Uint8Array | undefined;
                creator?: Uint8Array | undefined;
                source?: string | undefined;
                builder?: string | undefined;
            } | undefined;
            code_bytes?: Uint8Array | undefined;
        } & {
            code_id?: string | undefined;
            code_info?: ({
                code_hash?: Uint8Array | undefined;
                creator?: Uint8Array | undefined;
                source?: string | undefined;
                builder?: string | undefined;
            } & {
                code_hash?: Uint8Array | undefined;
                creator?: Uint8Array | undefined;
                source?: string | undefined;
                builder?: string | undefined;
            } & Record<Exclude<keyof I["codes"][number]["code_info"], keyof CodeInfo>, never>) | undefined;
            code_bytes?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["codes"][number], keyof Code>, never>)[] & Record<Exclude<keyof I["codes"], keyof {
            code_id?: string | undefined;
            code_info?: {
                code_hash?: Uint8Array | undefined;
                creator?: Uint8Array | undefined;
                source?: string | undefined;
                builder?: string | undefined;
            } | undefined;
            code_bytes?: Uint8Array | undefined;
        }[]>, never>) | undefined;
        contracts?: ({
            contract_address?: Uint8Array | undefined;
            contract_info?: {
                code_id?: string | undefined;
                creator?: Uint8Array | undefined;
                label?: string | undefined;
                created?: {
                    block_height?: string | undefined;
                    tx_index?: string | undefined;
                } | undefined;
                ibc_port_id?: string | undefined;
                admin?: string | undefined;
                admin_proof?: Uint8Array | undefined;
            } | undefined;
            contract_state?: {
                Key?: Uint8Array | undefined;
                Value?: Uint8Array | undefined;
            }[] | undefined;
            contract_custom_info?: {
                enclave_key?: {
                    og_contract_key?: Uint8Array | undefined;
                    current_contract_key?: Uint8Array | undefined;
                    current_contract_key_proof?: Uint8Array | undefined;
                } | undefined;
                label?: string | undefined;
            } | undefined;
        }[] & ({
            contract_address?: Uint8Array | undefined;
            contract_info?: {
                code_id?: string | undefined;
                creator?: Uint8Array | undefined;
                label?: string | undefined;
                created?: {
                    block_height?: string | undefined;
                    tx_index?: string | undefined;
                } | undefined;
                ibc_port_id?: string | undefined;
                admin?: string | undefined;
                admin_proof?: Uint8Array | undefined;
            } | undefined;
            contract_state?: {
                Key?: Uint8Array | undefined;
                Value?: Uint8Array | undefined;
            }[] | undefined;
            contract_custom_info?: {
                enclave_key?: {
                    og_contract_key?: Uint8Array | undefined;
                    current_contract_key?: Uint8Array | undefined;
                    current_contract_key_proof?: Uint8Array | undefined;
                } | undefined;
                label?: string | undefined;
            } | undefined;
        } & {
            contract_address?: Uint8Array | undefined;
            contract_info?: ({
                code_id?: string | undefined;
                creator?: Uint8Array | undefined;
                label?: string | undefined;
                created?: {
                    block_height?: string | undefined;
                    tx_index?: string | undefined;
                } | undefined;
                ibc_port_id?: string | undefined;
                admin?: string | undefined;
                admin_proof?: Uint8Array | undefined;
            } & {
                code_id?: string | undefined;
                creator?: Uint8Array | undefined;
                label?: string | undefined;
                created?: ({
                    block_height?: string | undefined;
                    tx_index?: string | undefined;
                } & {
                    block_height?: string | undefined;
                    tx_index?: string | undefined;
                } & Record<Exclude<keyof I["contracts"][number]["contract_info"]["created"], keyof import("./types").AbsoluteTxPosition>, never>) | undefined;
                ibc_port_id?: string | undefined;
                admin?: string | undefined;
                admin_proof?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["contracts"][number]["contract_info"], keyof ContractInfo>, never>) | undefined;
            contract_state?: ({
                Key?: Uint8Array | undefined;
                Value?: Uint8Array | undefined;
            }[] & ({
                Key?: Uint8Array | undefined;
                Value?: Uint8Array | undefined;
            } & {
                Key?: Uint8Array | undefined;
                Value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["contracts"][number]["contract_state"][number], keyof Model>, never>)[] & Record<Exclude<keyof I["contracts"][number]["contract_state"], keyof {
                Key?: Uint8Array | undefined;
                Value?: Uint8Array | undefined;
            }[]>, never>) | undefined;
            contract_custom_info?: ({
                enclave_key?: {
                    og_contract_key?: Uint8Array | undefined;
                    current_contract_key?: Uint8Array | undefined;
                    current_contract_key_proof?: Uint8Array | undefined;
                } | undefined;
                label?: string | undefined;
            } & {
                enclave_key?: ({
                    og_contract_key?: Uint8Array | undefined;
                    current_contract_key?: Uint8Array | undefined;
                    current_contract_key_proof?: Uint8Array | undefined;
                } & {
                    og_contract_key?: Uint8Array | undefined;
                    current_contract_key?: Uint8Array | undefined;
                    current_contract_key_proof?: Uint8Array | undefined;
                } & Record<Exclude<keyof I["contracts"][number]["contract_custom_info"]["enclave_key"], keyof import("./types").ContractKey>, never>) | undefined;
                label?: string | undefined;
            } & Record<Exclude<keyof I["contracts"][number]["contract_custom_info"], keyof ContractCustomInfo>, never>) | undefined;
        } & Record<Exclude<keyof I["contracts"][number], keyof Contract>, never>)[] & Record<Exclude<keyof I["contracts"], keyof {
            contract_address?: Uint8Array | undefined;
            contract_info?: {
                code_id?: string | undefined;
                creator?: Uint8Array | undefined;
                label?: string | undefined;
                created?: {
                    block_height?: string | undefined;
                    tx_index?: string | undefined;
                } | undefined;
                ibc_port_id?: string | undefined;
                admin?: string | undefined;
                admin_proof?: Uint8Array | undefined;
            } | undefined;
            contract_state?: {
                Key?: Uint8Array | undefined;
                Value?: Uint8Array | undefined;
            }[] | undefined;
            contract_custom_info?: {
                enclave_key?: {
                    og_contract_key?: Uint8Array | undefined;
                    current_contract_key?: Uint8Array | undefined;
                    current_contract_key_proof?: Uint8Array | undefined;
                } | undefined;
                label?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        sequences?: ({
            id_key?: Uint8Array | undefined;
            value?: string | undefined;
        }[] & ({
            id_key?: Uint8Array | undefined;
            value?: string | undefined;
        } & {
            id_key?: Uint8Array | undefined;
            value?: string | undefined;
        } & Record<Exclude<keyof I["sequences"][number], keyof Sequence>, never>)[] & Record<Exclude<keyof I["sequences"], keyof {
            id_key?: Uint8Array | undefined;
            value?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const Code: {
    encode(message: Code, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Code;
    fromJSON(object: any): Code;
    toJSON(message: Code): unknown;
    fromPartial<I extends {
        code_id?: string | undefined;
        code_info?: {
            code_hash?: Uint8Array | undefined;
            creator?: Uint8Array | undefined;
            source?: string | undefined;
            builder?: string | undefined;
        } | undefined;
        code_bytes?: Uint8Array | undefined;
    } & {
        code_id?: string | undefined;
        code_info?: ({
            code_hash?: Uint8Array | undefined;
            creator?: Uint8Array | undefined;
            source?: string | undefined;
            builder?: string | undefined;
        } & {
            code_hash?: Uint8Array | undefined;
            creator?: Uint8Array | undefined;
            source?: string | undefined;
            builder?: string | undefined;
        } & Record<Exclude<keyof I["code_info"], keyof CodeInfo>, never>) | undefined;
        code_bytes?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof Code>, never>>(object: I): Code;
};
export declare const Contract: {
    encode(message: Contract, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Contract;
    fromJSON(object: any): Contract;
    toJSON(message: Contract): unknown;
    fromPartial<I extends {
        contract_address?: Uint8Array | undefined;
        contract_info?: {
            code_id?: string | undefined;
            creator?: Uint8Array | undefined;
            label?: string | undefined;
            created?: {
                block_height?: string | undefined;
                tx_index?: string | undefined;
            } | undefined;
            ibc_port_id?: string | undefined;
            admin?: string | undefined;
            admin_proof?: Uint8Array | undefined;
        } | undefined;
        contract_state?: {
            Key?: Uint8Array | undefined;
            Value?: Uint8Array | undefined;
        }[] | undefined;
        contract_custom_info?: {
            enclave_key?: {
                og_contract_key?: Uint8Array | undefined;
                current_contract_key?: Uint8Array | undefined;
                current_contract_key_proof?: Uint8Array | undefined;
            } | undefined;
            label?: string | undefined;
        } | undefined;
    } & {
        contract_address?: Uint8Array | undefined;
        contract_info?: ({
            code_id?: string | undefined;
            creator?: Uint8Array | undefined;
            label?: string | undefined;
            created?: {
                block_height?: string | undefined;
                tx_index?: string | undefined;
            } | undefined;
            ibc_port_id?: string | undefined;
            admin?: string | undefined;
            admin_proof?: Uint8Array | undefined;
        } & {
            code_id?: string | undefined;
            creator?: Uint8Array | undefined;
            label?: string | undefined;
            created?: ({
                block_height?: string | undefined;
                tx_index?: string | undefined;
            } & {
                block_height?: string | undefined;
                tx_index?: string | undefined;
            } & Record<Exclude<keyof I["contract_info"]["created"], keyof import("./types").AbsoluteTxPosition>, never>) | undefined;
            ibc_port_id?: string | undefined;
            admin?: string | undefined;
            admin_proof?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["contract_info"], keyof ContractInfo>, never>) | undefined;
        contract_state?: ({
            Key?: Uint8Array | undefined;
            Value?: Uint8Array | undefined;
        }[] & ({
            Key?: Uint8Array | undefined;
            Value?: Uint8Array | undefined;
        } & {
            Key?: Uint8Array | undefined;
            Value?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["contract_state"][number], keyof Model>, never>)[] & Record<Exclude<keyof I["contract_state"], keyof {
            Key?: Uint8Array | undefined;
            Value?: Uint8Array | undefined;
        }[]>, never>) | undefined;
        contract_custom_info?: ({
            enclave_key?: {
                og_contract_key?: Uint8Array | undefined;
                current_contract_key?: Uint8Array | undefined;
                current_contract_key_proof?: Uint8Array | undefined;
            } | undefined;
            label?: string | undefined;
        } & {
            enclave_key?: ({
                og_contract_key?: Uint8Array | undefined;
                current_contract_key?: Uint8Array | undefined;
                current_contract_key_proof?: Uint8Array | undefined;
            } & {
                og_contract_key?: Uint8Array | undefined;
                current_contract_key?: Uint8Array | undefined;
                current_contract_key_proof?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["contract_custom_info"]["enclave_key"], keyof import("./types").ContractKey>, never>) | undefined;
            label?: string | undefined;
        } & Record<Exclude<keyof I["contract_custom_info"], keyof ContractCustomInfo>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Contract>, never>>(object: I): Contract;
};
export declare const Sequence: {
    encode(message: Sequence, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): Sequence;
    fromJSON(object: any): Sequence;
    toJSON(message: Sequence): unknown;
    fromPartial<I extends {
        id_key?: Uint8Array | undefined;
        value?: string | undefined;
    } & {
        id_key?: Uint8Array | undefined;
        value?: string | undefined;
    } & Record<Exclude<keyof I, keyof Sequence>, never>>(object: I): Sequence;
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