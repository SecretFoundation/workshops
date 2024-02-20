import * as GoogleProtobufTimestamp from "../../google/protobuf/timestamp.pb";
import * as TendermintAbciTypes from "../abci/types.pb";
import * as TendermintTypesParams from "../types/params.pb";
import * as TendermintTypesTypes from "../types/types.pb";
import * as TendermintTypesValidator from "../types/validator.pb";
import * as TendermintVersionTypes from "../version/types.pb";
export declare type ABCIResponses = {
    deliver_txs?: TendermintAbciTypes.ResponseDeliverTx[];
    end_block?: TendermintAbciTypes.ResponseEndBlock;
    begin_block?: TendermintAbciTypes.ResponseBeginBlock;
};
export declare type ValidatorsInfo = {
    validator_set?: TendermintTypesValidator.ValidatorSet;
    last_height_changed?: string;
};
export declare type ConsensusParamsInfo = {
    consensus_params?: TendermintTypesParams.ConsensusParams;
    last_height_changed?: string;
};
export declare type Version = {
    consensus?: TendermintVersionTypes.Consensus;
    software?: string;
};
export declare type State = {
    version?: Version;
    chain_id?: string;
    initial_height?: string;
    last_block_height?: string;
    last_block_id?: TendermintTypesTypes.BlockID;
    last_block_time?: GoogleProtobufTimestamp.Timestamp;
    next_validators?: TendermintTypesValidator.ValidatorSet;
    validators?: TendermintTypesValidator.ValidatorSet;
    last_validators?: TendermintTypesValidator.ValidatorSet;
    last_height_validators_changed?: string;
    consensus_params?: TendermintTypesParams.ConsensusParams;
    last_height_consensus_params_changed?: string;
    last_results_hash?: Uint8Array;
    app_hash?: Uint8Array;
};
//# sourceMappingURL=types.pb.d.ts.map