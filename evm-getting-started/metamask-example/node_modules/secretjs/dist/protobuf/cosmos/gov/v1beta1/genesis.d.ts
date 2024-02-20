import * as _m0 from "protobufjs/minimal";
import { DepositParams, VotingParams, TallyParams, Deposit, Vote, Proposal } from "./gov";
export declare const protobufPackage = "cosmos.gov.v1beta1";
/** GenesisState defines the gov module's genesis state. */
export interface GenesisState {
    /** starting_proposal_id is the ID of the starting proposal. */
    starting_proposal_id: string;
    /** deposits defines all the deposits present at genesis. */
    deposits: Deposit[];
    /** votes defines all the votes present at genesis. */
    votes: Vote[];
    /** proposals defines all the proposals present at genesis. */
    proposals: Proposal[];
    /** params defines all the paramaters of related to deposit. */
    deposit_params?: DepositParams;
    /** params defines all the paramaters of related to voting. */
    voting_params?: VotingParams;
    /** params defines all the paramaters of related to tally. */
    tally_params?: TallyParams;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        starting_proposal_id?: string | undefined;
        deposits?: {
            proposal_id?: string | undefined;
            depositor?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        votes?: {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./gov").VoteOption | undefined;
            options?: {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        proposals?: {
            proposal_id?: string | undefined;
            content?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            status?: import("./gov").ProposalStatus | undefined;
            final_tally_result?: {
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } | undefined;
            submit_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            deposit_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            total_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            voting_start_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            voting_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            is_expedited?: boolean | undefined;
        }[] | undefined;
        deposit_params?: {
            min_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            max_deposit_period?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            min_expedited_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } | undefined;
        voting_params?: {
            voting_period?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            expedited_voting_period?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        tally_params?: {
            quorum?: Uint8Array | undefined;
            threshold?: Uint8Array | undefined;
            veto_threshold?: Uint8Array | undefined;
            expedited_threshold?: Uint8Array | undefined;
        } | undefined;
    } & {
        starting_proposal_id?: string | undefined;
        deposits?: ({
            proposal_id?: string | undefined;
            depositor?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] & ({
            proposal_id?: string | undefined;
            depositor?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            proposal_id?: string | undefined;
            depositor?: string | undefined;
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["deposits"][number]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["deposits"][number]["amount"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["deposits"][number], keyof Deposit>, never>)[] & Record<Exclude<keyof I["deposits"], keyof {
            proposal_id?: string | undefined;
            depositor?: string | undefined;
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        votes?: ({
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./gov").VoteOption | undefined;
            options?: {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] | undefined;
        }[] & ({
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./gov").VoteOption | undefined;
            options?: {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] | undefined;
        } & {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./gov").VoteOption | undefined;
            options?: ({
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] & ({
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            } & {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            } & Record<Exclude<keyof I["votes"][number]["options"][number], keyof import("./gov").WeightedVoteOption>, never>)[] & Record<Exclude<keyof I["votes"][number]["options"], keyof {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["votes"][number], keyof Vote>, never>)[] & Record<Exclude<keyof I["votes"], keyof {
            proposal_id?: string | undefined;
            voter?: string | undefined;
            option?: import("./gov").VoteOption | undefined;
            options?: {
                option?: import("./gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        proposals?: ({
            proposal_id?: string | undefined;
            content?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            status?: import("./gov").ProposalStatus | undefined;
            final_tally_result?: {
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } | undefined;
            submit_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            deposit_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            total_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            voting_start_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            voting_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            is_expedited?: boolean | undefined;
        }[] & ({
            proposal_id?: string | undefined;
            content?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            status?: import("./gov").ProposalStatus | undefined;
            final_tally_result?: {
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } | undefined;
            submit_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            deposit_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            total_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            voting_start_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            voting_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            is_expedited?: boolean | undefined;
        } & {
            proposal_id?: string | undefined;
            content?: ({
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["proposals"][number]["content"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
            status?: import("./gov").ProposalStatus | undefined;
            final_tally_result?: ({
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } & {
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } & Record<Exclude<keyof I["proposals"][number]["final_tally_result"], keyof import("./gov").TallyResult>, never>) | undefined;
            submit_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["proposals"][number]["submit_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            deposit_end_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["proposals"][number]["deposit_end_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            total_deposit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["proposals"][number]["total_deposit"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["proposals"][number]["total_deposit"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            voting_start_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["proposals"][number]["voting_start_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            voting_end_time?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["proposals"][number]["voting_end_time"], keyof import("../../../google/protobuf/timestamp").Timestamp>, never>) | undefined;
            is_expedited?: boolean | undefined;
        } & Record<Exclude<keyof I["proposals"][number], keyof Proposal>, never>)[] & Record<Exclude<keyof I["proposals"], keyof {
            proposal_id?: string | undefined;
            content?: {
                type_url?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            status?: import("./gov").ProposalStatus | undefined;
            final_tally_result?: {
                yes?: string | undefined;
                abstain?: string | undefined;
                no?: string | undefined;
                no_with_veto?: string | undefined;
            } | undefined;
            submit_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            deposit_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            total_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            voting_start_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            voting_end_time?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            is_expedited?: boolean | undefined;
        }[]>, never>) | undefined;
        deposit_params?: ({
            min_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            max_deposit_period?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            min_expedited_deposit?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            min_deposit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["deposit_params"]["min_deposit"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["deposit_params"]["min_deposit"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            max_deposit_period?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["deposit_params"]["max_deposit_period"], keyof import("../../../google/protobuf/duration").Duration>, never>) | undefined;
            min_expedited_deposit?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["deposit_params"]["min_expedited_deposit"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["deposit_params"]["min_expedited_deposit"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["deposit_params"], keyof DepositParams>, never>) | undefined;
        voting_params?: ({
            voting_period?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
            expedited_voting_period?: {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } | undefined;
        } & {
            voting_period?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["voting_params"]["voting_period"], keyof import("../../../google/protobuf/duration").Duration>, never>) | undefined;
            expedited_voting_period?: ({
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: string | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["voting_params"]["expedited_voting_period"], keyof import("../../../google/protobuf/duration").Duration>, never>) | undefined;
        } & Record<Exclude<keyof I["voting_params"], keyof VotingParams>, never>) | undefined;
        tally_params?: ({
            quorum?: Uint8Array | undefined;
            threshold?: Uint8Array | undefined;
            veto_threshold?: Uint8Array | undefined;
            expedited_threshold?: Uint8Array | undefined;
        } & {
            quorum?: Uint8Array | undefined;
            threshold?: Uint8Array | undefined;
            veto_threshold?: Uint8Array | undefined;
            expedited_threshold?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["tally_params"], keyof TallyParams>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
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