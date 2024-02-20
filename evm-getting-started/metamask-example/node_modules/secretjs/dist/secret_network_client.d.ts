import { MauthQuerier, MsgBeginRedelegateParams, MsgCreateValidatorParams, MsgDelegateParams, MsgDepositParams, MsgEditValidatorParams, MsgExecParams, MsgExecuteContractParams, MsgFundCommunityPoolParams, MsgGrantAllowanceParams, MsgGrantParams, MsgInstantiateContractParams, MsgMultiSendParams, MsgRevokeAllowanceParams, MsgRevokeParams, MsgSendParams, MsgSetWithdrawAddressParams, MsgStoreCodeParams, MsgSubmitEvidenceParams, MsgSubmitProposalParams, MsgTransferParams, MsgUndelegateParams, MsgUnjailParams, MsgUpdateAdminParams, MsgVoteParams, MsgVoteWeightedParams, MsgWithdrawDelegatorRewardParams, MsgWithdrawValidatorCommissionParams, NodeQuerier } from ".";
import { EncryptionUtils } from "./encryption";
import { PermitSigner } from "./extensions/access_control/permit/permit_signer";
import { CreateViewingKeyContractParams, SetViewingKeyContractParams } from "./extensions/access_control/viewing_key/params";
import { Snip1155Querier } from "./extensions/snip1155/query";
import { Snip1155AddCuratorOptions, Snip1155AddMinterOptions, Snip1155BatchSendOptions, Snip1155BatchTransferOptions, Snip1155BurnTokensOptions, Snip1155ChangeAdminOptions, Snip1155ChangeMetaDataOptions, Snip1155CurateTokensOptions, Snip1155MintTokensOptions, Snip1155RemoveAdminOptions, Snip1155RemoveCuratorOptions, Snip1155RemoveMinterOptions, Snip1155SendOptions, Snip1155TransferOptions } from "./extensions/snip1155/types";
import { Snip20Querier } from "./extensions/snip20";
import { Snip20DecreaseAllowanceOptions, Snip20IncreaseAllowanceOptions, Snip20SendOptions, Snip20TransferOptions } from "./extensions/snip20/types";
import { Snip721Querier } from "./extensions/snip721";
import { Snip721AddMinterOptions, Snip721MintOptions, Snip721SendOptions } from "./extensions/snip721/types";
import { PageRequest } from "./grpc_gateway/cosmos/base/query/v1beta1/pagination.pb";
import { OrderBy, SimulateResponse } from "./grpc_gateway/cosmos/tx/v1beta1/service.pb";
import { Tx as TxPb } from "./grpc_gateway/cosmos/tx/v1beta1/tx.pb";
import { AuthQuerier } from "./query/auth";
import { AuthzQuerier } from "./query/authz";
import { BankQuerier } from "./query/bank";
import { ComputeQuerier } from "./query/compute";
import { DistributionQuerier } from "./query/distribution";
import { EmergencyButtonQuerier } from "./query/emergency_button";
import { EvidenceQuerier } from "./query/evidence";
import { FeegrantQuerier } from "./query/feegrant";
import { GovQuerier } from "./query/gov";
import { IbcChannelQuerier } from "./query/ibc_channel";
import { IbcClientQuerier } from "./query/ibc_client";
import { IbcConnectionQuerier } from "./query/ibc_connection";
import { IbcFeeQuerier } from "./query/ibc_fee";
import { IbcInterchainAccountsControllerQuerier } from "./query/ibc_interchain_accounts_controller";
import { IbcInterchainAccountsHostQuerier } from "./query/ibc_interchain_accounts_host";
import { IbcPacketForwardQuerier } from "./query/ibc_packet_forward";
import { IbcTransferQuerier } from "./query/ibc_transfer";
import { MintQuerier } from "./query/mint";
import { ParamsQuerier } from "./query/params";
import { RegistrationQuerier } from "./query/registration";
import { SlashingQuerier } from "./query/slashing";
import { StakingQuerier } from "./query/staking";
import { TendermintQuerier } from "./query/tendermint";
import { UpgradeQuerier } from "./query/upgrade";
import { Msg, MsgClearAdminParams, MsgMigrateContractParams, MsgPayPacketFeeAsyncParams, MsgPayPacketFeeParams, MsgRegisterCounterpartyPayeeParams, MsgRegisterPayeeParams, MsgSetAutoRestakeParams } from "./tx";
import { MsgToggleIbcSwitchParams } from "./tx/emergency_button";
import { RaAuthenticateParams } from "./tx/registration";
import { MsgCreateVestingAccountParams } from "./tx/vesting";
import { AccountData, AminoSignResponse, AminoSigner, Signer, StdSignDoc } from "./wallet_amino";
export declare type CreateClientOptions = {
    /** A URL to the API service, also known as LCD, REST API or gRPC-gateway, by default on port 1317 */
    url: string;
    /** The chain-id is used in encryption code & when signing txs. */
    chainId: string;
    /** A wallet for signing transactions & permits. When `wallet` is supplied, `walletAddress` & `chainId` must be supplied too. */
    wallet?: Signer;
    /** walletAddress is the specific account address in the wallet that is permitted to sign transactions & permits. */
    walletAddress?: string;
    /** Passing `encryptionSeed` will allow tx decryption at a later time. Ignored if `encryptionUtils` is supplied. Must be 32 bytes. */
    encryptionSeed?: Uint8Array;
    /** `encryptionUtils` overrides the default {@link EncryptionUtilsImpl}. */
    encryptionUtils?: EncryptionUtils;
};
/**
 * SingleMsgTx is a function that broadcasts a single message transaction.
 * It also has a `simulate()` method to execute the transaction without
 * committing it on-chain. This is helpful for gas estimation.
 *
 * WARNING: `tx.compute.instantiateContract()` & `tx.compute.executeContract()` simulation is not supported for security reasons!
 */
export declare type SingleMsgTx<T> = {
    (params: T, txOptions?: TxOptions): Promise<TxResponse>;
    simulate(params: T, txOptions?: TxOptions): Promise<SimulateResponse>;
};
export declare enum BroadcastMode {
    /**
     * Broadcast transaction to mempool and wait for DeliverTx response.
     *
     * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_commit
     */
    Block = "Block",
    /**
     * Broadcast transaction to mempool and wait for CheckTx response.
     *
     * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_sync
     */
    Sync = "Sync",
    /**
     * Broadcast transaction to mempool and do not wait for CheckTx response.
     *
     * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_async
     */
    Async = "Async"
}
export declare type IbcTxOptions = {
    /** If `false` skip resolving the IBC response txs (acknowledge/timeout).
     *
     * Defaults to `true` when broadcasting a tx or using `getTx()`.
     * Defaults to `false` when using `txsQuery()`.
     *
     */
    resolveResponses?: boolean;
    /**
     * How much time (in milliseconds) to wait for IBC response txs (acknowledge/timeout).
     *
     * Defaults to `120_000` (2 minutes).
     *
     */
    resolveResponsesTimeoutMs?: number;
    /**
     * When waiting for the IBC response txs (acknowledge/timeout) to commit on-chain, how much time (in milliseconds) to wait between checks.
     *
     * Smaller intervals will cause more load on your node provider. Keep in mind that blocks on Secret Network take about 6 seconds to finalize.
     *
     * Defaults to `15_000` (15 seconds).
     */
    resolveResponsesCheckIntervalMs?: number;
};
export declare type TxOptions = {
    /** Defaults to `25_000`. */
    gasLimit?: number;
    /** E.g. gasPriceInFeeDenom=0.1 & feeDenom="uscrt" => Total fee for tx is `0.1 * gasLimit`uscrt. Defaults to `0.1`. */
    gasPriceInFeeDenom?: number;
    /** Defaults to `"uscrt"`. */
    feeDenom?: string;
    /** Address of the fee granter from which to charge gas fees. */
    feeGranter?: string;
    /** Defaults to `""`. */
    memo?: string;
    /** If `false` returns immediately with only the `transactionHash` field set. Defaults to `true`. */
    waitForCommit?: boolean;
    /**
     * How much time (in milliseconds) to wait for tx to commit on-chain.
     *
     * Defaults to `60_000`. Ignored if `waitForCommit = false`.
     */
    broadcastTimeoutMs?: number;
    /**
     * When waiting for the tx to commit on-chain, how much time (in milliseconds) to wait between checks.
     *
     * Smaller intervals will cause more load on your node provider. Keep in mind that blocks on Secret Network take about 6 seconds to finalize.
     *
     * Defaults to `6_000`. Ignored if `waitForCommit = false`.
     */
    broadcastCheckIntervalMs?: number;
    /**
     * If `BroadcastMode.Sync` - Broadcast transaction to mempool and wait for CheckTx response.
     *
     * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_sync
     *
     * If `BroadcastMode.Async` Broadcast transaction to mempool and do not wait for CheckTx response.
     *
     * @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_async
     */
    broadcastMode?: BroadcastMode;
    /**
     * explicitSignerData can be used to override `chainId`, `accountNumber` & `accountSequence`.
     * This is useful when using {@link BroadcastMode.Async} or when you don't want secretjs
     * to query for `accountNumber` & `accountSequence` from the chain. (smoother in UIs, less load on your node provider).
     */
    explicitSignerData?: SignerData;
    /**
     * Options for resolving IBC ack/timeout txs that resulted from this tx.
     */
    ibcTxsOptions?: IbcTxOptions;
};
/**
 * Signing information for a single signer that is not included in the transaction.
 *
 * @see https://github.com/cosmos/cosmos-sdk/blob/v0.42.2/x/auth/signing/sign_mode_handler.go#L23-L37
 */
export interface SignerData {
    readonly accountNumber: number;
    readonly sequence: number;
    readonly chainId: string;
}
export declare class ReadonlySigner implements AminoSigner {
    getAccounts(): Promise<readonly AccountData[]>;
    signAmino(_signerAddress: string, _signDoc: StdSignDoc): Promise<AminoSignResponse>;
}
export declare type Querier = {
    /** Returns a transaction with a txhash. Must be 64 character upper-case hex string */
    getTx: (hash: string, ibcTxOptions?: IbcTxOptions) => Promise<TxResponse | null>;
    /**
     * To tell which events you want, you need to provide a query. query is a string, which has a form: "condition AND condition ..." (no OR at the moment).
     *
     * condition has a form: "key operation operand". key is a string with a restricted set of possible symbols (\t\n\r\()"'=>< are not allowed).
     *
     * operation can be "=", "<", "<=", ">", ">=", "CONTAINS" AND "EXISTS". operand can be a string (escaped with single quotes), number, date or time.
     *
     * Examples:
     * - `tx.hash='XYZ'` # single transaction
     * - `tx.height=5` # all txs of the fifth block
     * - `create_validator.validator='ABC'` # tx where validator ABC was created
     *
     * Tendermint provides a few predefined keys: `tm.event`, `tx.hash` and `tx.height`. You can provide additional event keys that were emitted during the transaction.
     *
     * All events are indexed by a composite key of the form `{eventType}.{evenAttrKey}`.
     *
     * Multiple event types with duplicate keys are allowed and are meant to categorize unique and distinct events.
     *
     * To create a query for txs where AddrA transferred funds: `transfer.sender='AddrA'`.
     *
     * NOTE: Stating from Cosmos SDK v0.46+, expressions cannot contain spaces anymore:
     * - Legal: `a.b='c'`
     * - Illegal: `a.b = 'c'`
     */
    txsQuery: (query: string, ibcTxOptions?: IbcTxOptions, pagination?: PageRequest, order_by?: OrderBy) => Promise<TxResponse[]>;
    auth: AuthQuerier;
    authz: AuthzQuerier;
    bank: BankQuerier;
    compute: ComputeQuerier;
    snip20: Snip20Querier;
    snip721: Snip721Querier;
    snip1155: Snip1155Querier;
    distribution: DistributionQuerier;
    evidence: EvidenceQuerier;
    feegrant: FeegrantQuerier;
    gov: GovQuerier;
    ibc_channel: IbcChannelQuerier;
    ibc_client: IbcClientQuerier;
    ibc_connection: IbcConnectionQuerier;
    ibc_transfer: IbcTransferQuerier;
    ibc_iterchain_accounts_host: IbcInterchainAccountsHostQuerier;
    ibc_iterchain_accounts_controller: IbcInterchainAccountsControllerQuerier;
    ibc_fee: IbcFeeQuerier;
    ibc_packet_forward: IbcPacketForwardQuerier;
    emergency_button: EmergencyButtonQuerier;
    mauth: MauthQuerier;
    mint: MintQuerier;
    node: NodeQuerier;
    params: ParamsQuerier;
    registration: RegistrationQuerier;
    slashing: SlashingQuerier;
    staking: StakingQuerier;
    tendermint: TendermintQuerier;
    upgrade: UpgradeQuerier;
};
export declare type ArrayLog = Array<{
    msg: number;
    type: string;
    key: string;
    value: string;
}>;
export declare type JsonLog = Array<{
    msg_index: number;
    events: Array<{
        type: string;
        attributes: Array<{
            key: string;
            value: string;
        }>;
    }>;
}>;
/**
 * MsgData defines the data returned in a Result object during message
 * execution.
 */
export declare type MsgData = {
    msgType: string;
    data: Uint8Array;
};
export declare type AnyJson = {
    "@type": string;
} & any;
/** A transaction that is indexed as part of the transaction history */
export declare type TxResponse = {
    /** Block height in which the tx was committed on-chain */
    readonly height: number;
    /** An RFC 3339 timestamp of when the tx was committed on-chain.
     * The format is `{year}-{month}-{day}T{hour}:{min}:{sec}[.{frac_sec}]Z`.
     */
    readonly timestamp: string;
    /** Transaction hash (might be used as transaction ID). Guaranteed to be non-empty upper-case hex */
    readonly transactionHash: string;
    /** Transaction execution error code. 0 on success. See {@link TxResultCode}. */
    readonly code: TxResultCode;
    /** Namespace for the Code */
    readonly codespace: string;
    /** Additional information. May be non-deterministic. */
    readonly info: string;
    /**
     * If code != 0, rawLog contains the error.
     *
     * If code = 0 you'll probably want to use `jsonLog` or `arrayLog`. Values are not decrypted.
     */
    readonly rawLog: string;
    /** If code = 0, `jsonLog = JSON.parse(rawLow)`. Values are decrypted if possible. */
    readonly jsonLog?: JsonLog;
    /** If code = 0, `arrayLog` is a flattened `jsonLog`. Values are decrypted if possible. */
    readonly arrayLog?: ArrayLog;
    /**
     * Events defines all the events emitted by processing a transaction. Note,
     * these events include those emitted by processing all the messages and those
     * emitted from the ante handler. Whereas Logs contains the events, with
     * additional metadata, emitted only by processing the messages.
     *
     * Note: events are not decrypted.
     */
    readonly events: Array<import("./grpc_gateway/tendermint/abci/types.pb").Event>;
    /** Return value (if there's any) for each input message */
    readonly data: Array<Uint8Array>;
    /**
     * Decoded transaction input.
     */
    readonly tx: TxPb;
    /**
     * Amount of gas that was actually used by the transaction.
     */
    readonly gasUsed: number;
    /**
     * Gas limit that was originaly set by the transaction.
     */
    readonly gasWanted: number;
    /** If code = 0 and the tx resulted in sending IBC packets, `ibcAckTxs` is a list of IBC acknowledgement or timeout transactions which signal whether the original IBC packet was accepted, rejected or timed-out on the receiving chain. */
    readonly ibcResponses: Array<Promise<IbcResponse>>;
};
export declare type IbcResponse = {
    type: "ack" | "timeout";
    tx: TxResponse;
};
export declare type TxSender = {
    /**
     * Sign and broadcast a transaction to Secret Network.
     *
     * @param {TxOptions} [options] Options for signing and broadcasting
     * @param {Number} [options.gasLimit=25_000]
     * @param {Number} [options.gasPriceInFeeDenom=0.1] E.g. gasPriceInFeeDenom=0.1 & feeDenom="uscrt" => Total fee for tx is `0.1 * gasLimit`uscrt.
     * @param {String} [options.feeDenom="uscrt"]
     * @param {String} [options.memo=""]
     * @param {boolean} [options.waitForCommit=true] If false returns immediately with `transactionHash`. Defaults to `true`.
     * @param {Number} [options.broadcastTimeoutMs=60_000] How much time (in milliseconds) to wait for tx to commit on-chain. Ignored if `waitForCommit = false`.
     * @param {Number} [options.broadcastCheckIntervalMs=6_000] When waiting for the tx to commit on-chain, how much time (in milliseconds) to wait between checks. Smaller intervals will cause more load on your node provider. Keep in mind that blocks on Secret Network take about 6 seconds to finalize. Ignored if `waitForCommit = false`.
     * @param {BroadcastMode} [options.broadcastMode=BroadcastMode.Sync] If {@link BroadcastMode.Sync} - Broadcast transaction to mempool and wait for CheckTx response. @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_sync. If {@link BroadcastMode.Async} Broadcast transaction to mempool and do not wait for CheckTx response. @see https://docs.tendermint.com/master/rpc/#/Tx/broadcast_tx_async.
     * @param {SignerData} [options.explicitSignerData] explicitSignerData  can be used to override `chainId`, `accountNumber` & `accountSequence`. This is useful when using {@link BroadcastMode.Async} or when you don't want secretjs to query for `accountNumber` & `accountSequence` from the chain. (smoother in UIs, less load on your node provider).
     * @param {Number} [options.explicitSignerData.accountNumber]
     * @param {Number} [options.explicitSignerData.sequence]
     * @param {String} [options.explicitSignerData.chainId]
     * @param {Msg[]} messages A list of messages, executed sequentially. If all messages succeeds then the transaction succeed, and the resulting {@link TxResponse} object will have `code = 0`. If at lease one message fails, the entire transaction is reverted and {@link TxResponse} `code` field will not be `0`.
     *
     * List of possible Msgs:
     *   - authz           {@link MsgExec}
     *   - authz           {@link MsgGrant}
     *   - authz           {@link MsgRevoke}
     *   - bank            {@link MsgMultiSend}
     *   - bank            {@link MsgSend}
     *   - compute         {@link MsgExecuteContract}
     *   - compute         {@link MsgInstantiateContract}
     *   - compute         {@link MsgStoreCode}
     *   - crisis          {@link MsgVerifyInvariant}
     *   - distribution    {@link MsgFundCommunityPool}
     *   - distribution    {@link MsgSetWithdrawAddress}
     *   - distribution    {@link MsgWithdrawDelegatorReward}
     *   - distribution    {@link MsgWithdrawValidatorCommission}
     *   - evidence        {@link MsgSubmitEvidence}
     *   - feegrant        {@link MsgGrantAllowance}
     *   - feegrant        {@link MsgRevokeAllowance}
     *   - gov             {@link MsgDeposit}
     *   - gov             {@link MsgSubmitProposal}
     *   - gov             {@link MsgVote}
     *   - gov             {@link MsgVoteWeighted}
     *   - ibc_channel     {@link MsgAcknowledgement}
     *   - ibc_channel     {@link MsgChannelCloseConfirm}
     *   - ibc_channel     {@link MsgChannelCloseInit}
     *   - ibc_channel     {@link MsgChannelOpenAck}
     *   - ibc_channel     {@link MsgChannelOpenConfirm}
     *   - ibc_channel     {@link MsgChannelOpenInit}
     *   - ibc_channel     {@link MsgChannelOpenTry}
     *   - ibc_channel     {@link MsgRecvPacket}
     *   - ibc_channel     {@link MsgTimeout}
     *   - ibc_channel     {@link MsgTimeoutOnClose}
     *   - ibc_client      {@link MsgCreateClient}
     *   - ibc_client      {@link MsgSubmitMisbehaviour}
     *   - ibc_client      {@link MsgUpdateClient}
     *   - ibc_client      {@link MsgUpgradeClient}
     *   - ibc_connection  {@link MsgConnectionOpenAck}
     *   - ibc_connection  {@link MsgConnectionOpenConfirm}
     *   - ibc_connection  {@link MsgConnectionOpenInit}
     *   - ibc_connection  {@link MsgConnectionOpenTry}
     *   - ibc_transfer    {@link MsgTransfer}
     *   - slashing        {@link MsgUnjail}
     *   - staking         {@link MsgBeginRedelegate}
     *   - staking         {@link MsgCreateValidator}
     *   - staking         {@link MsgDelegate}
     *   - staking         {@link MsgEditValidator}
     *   - staking         {@link MsgUndelegate}
     */
    broadcast: (messages: Msg[], txOptions?: TxOptions) => Promise<TxResponse>;
    /**
     * Prepare and sign an array of messages as a transaction
     * @async
     * @param {Msg[]} messages - Array of messages to prepare and sign
     * @param {TxOptions} [txOptions] - An optional object of transaction options
     * @returns {Promise<Uint8Array>} Returns a Promise that resolves txBytes, which can be passed into broadcastSignedTx().
     */
    signTx: (messages: Msg[], txOptions?: TxOptions) => Promise<Uint8Array>;
    /**
     * Broadcast a signed transactions
     * @async
     * @param {Uint8Array} txBytes - Signed transaction bytes, can be the output of signTx()
     * @param {TxOptions} [txOptions] - An optional object of transaction options
     * @returns {Promise<TxResponse>}
     */
    broadcastSignedTx: (txBytes: Uint8Array, txOptions?: TxOptions) => Promise<TxResponse>;
    /**
     * Simulates a transaction on the node without broadcasting it to the chain.
     * Can be used to get a gas estimation or to see the output without actually committing a transaction on-chain.
     * The input should be exactly how you'd use it in `broadcast`.
     *
     * WARNING: `MsgInstantiateContract` & `MsgExecuteContract` simulation is not supported for security reasons!
     */
    simulate: (messages: Msg[], txOptions?: TxOptions) => Promise<SimulateResponse>;
    snip721: {
        send: SingleMsgTx<MsgExecuteContractParams<Snip721SendOptions>>;
        mint: SingleMsgTx<MsgExecuteContractParams<Snip721MintOptions>>;
        addMinter: SingleMsgTx<MsgExecuteContractParams<Snip721AddMinterOptions>>;
        setViewingKey: SingleMsgTx<SetViewingKeyContractParams>;
        createViewingKey: SingleMsgTx<CreateViewingKeyContractParams>;
    };
    snip20: {
        send: SingleMsgTx<MsgExecuteContractParams<Snip20SendOptions>>;
        transfer: SingleMsgTx<MsgExecuteContractParams<Snip20TransferOptions>>;
        increaseAllowance: SingleMsgTx<MsgExecuteContractParams<Snip20IncreaseAllowanceOptions>>;
        decreaseAllowance: SingleMsgTx<MsgExecuteContractParams<Snip20DecreaseAllowanceOptions>>;
        setViewingKey: SingleMsgTx<SetViewingKeyContractParams>;
        createViewingKey: SingleMsgTx<CreateViewingKeyContractParams>;
    };
    snip1155: {
        changeAdmin: SingleMsgTx<MsgExecuteContractParams<Snip1155ChangeAdminOptions>>;
        removeAdmin: SingleMsgTx<MsgExecuteContractParams<Snip1155RemoveAdminOptions>>;
        addCurator: SingleMsgTx<MsgExecuteContractParams<Snip1155AddCuratorOptions>>;
        removeCurator: SingleMsgTx<MsgExecuteContractParams<Snip1155RemoveCuratorOptions>>;
        addMinter: SingleMsgTx<MsgExecuteContractParams<Snip1155AddMinterOptions>>;
        removeMinter: SingleMsgTx<MsgExecuteContractParams<Snip1155RemoveMinterOptions>>;
        send: SingleMsgTx<MsgExecuteContractParams<Snip1155SendOptions>>;
        batchSend: SingleMsgTx<MsgExecuteContractParams<Snip1155BatchSendOptions>>;
        transfer: SingleMsgTx<MsgExecuteContractParams<Snip1155TransferOptions>>;
        batchTransfer: SingleMsgTx<MsgExecuteContractParams<Snip1155BatchTransferOptions>>;
        curate: SingleMsgTx<MsgExecuteContractParams<Snip1155CurateTokensOptions>>;
        mint: SingleMsgTx<MsgExecuteContractParams<Snip1155MintTokensOptions>>;
        burn: SingleMsgTx<MsgExecuteContractParams<Snip1155BurnTokensOptions>>;
        changeMetaData: SingleMsgTx<MsgExecuteContractParams<Snip1155ChangeMetaDataOptions>>;
        setViewingKey: SingleMsgTx<SetViewingKeyContractParams>;
        createViewingKey: SingleMsgTx<CreateViewingKeyContractParams>;
    };
    authz: {
        /**
         * MsgExec attempts to execute the provided messages using
         * authorizations granted to the grantee. Each message should have only
         * one signer corresponding to the granter of the authorization.
         */
        exec: SingleMsgTx<MsgExecParams>;
        /**
         * MsgGrant is a request type for Grant method. It declares authorization to the grantee
         * on behalf of the granter with the provided expiration time.
         */
        grant: SingleMsgTx<MsgGrantParams>;
        /**
         * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
         * granter's account with that has been granted to the grantee.
         */
        revoke: SingleMsgTx<MsgRevokeParams>;
    };
    bank: {
        /** MsgMultiSend represents an arbitrary multi-in, multi-out send message. */
        multiSend: SingleMsgTx<MsgMultiSendParams>;
        /** MsgSend represents a message to send coins from one account to another. */
        send: SingleMsgTx<MsgSendParams>;
    };
    compute: {
        /** Upload a compiled contract */
        storeCode: SingleMsgTx<MsgStoreCodeParams>;
        /** Instantiate a contract from code id */
        instantiateContract: SingleMsgTx<MsgInstantiateContractParams>;
        /** Execute a function on a contract */
        executeContract: SingleMsgTx<MsgExecuteContractParams<object>>;
        /** Runs a code upgrade/downgrade for a contract */
        migrateContract: SingleMsgTx<MsgMigrateContractParams<object>>;
        /** Update the admin of a contract */
        updateAdmin: SingleMsgTx<MsgUpdateAdminParams>;
        /** Clear the admin of a contract */
        clearAdmin: SingleMsgTx<MsgClearAdminParams>;
    };
    emergency_button: {
        toggleIbcSwitch: SingleMsgTx<MsgToggleIbcSwitchParams>;
    };
    crisis: {
        /** MsgVerifyInvariant represents a message to verify a particular invariance. */
        verifyInvariant: SingleMsgTx<MsgUpdateAdminParams>;
    };
    distribution: {
        /**
         * MsgFundCommunityPool allows an account to directly
         * fund the community pool.
         */
        fundCommunityPool: SingleMsgTx<MsgFundCommunityPoolParams>;
        /**
         * MsgSetWithdrawAddress sets the withdraw address for
         * a delegator (or validator self-delegation).
         */
        setWithdrawAddress: SingleMsgTx<MsgSetWithdrawAddressParams>;
        /**
         * MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
         * from a single validator.
         */
        withdrawDelegatorReward: SingleMsgTx<MsgWithdrawDelegatorRewardParams>;
        /**
         * MsgWithdrawValidatorCommission withdraws the full commission to the validator
         * address.
         */
        withdrawValidatorCommission: SingleMsgTx<MsgWithdrawValidatorCommissionParams>;
        /**
         * MsgWithdrawValidatorCommission withdraws the full commission to the validator
         * address.
         */
        setAutoRestake: SingleMsgTx<MsgSetAutoRestakeParams>;
    };
    evidence: {
        /**
         * MsgSubmitEvidence represents a message that supports submitting arbitrary
         * Evidence of misbehavior such as equivocation or counterfactual signing.
         */
        submitEvidence: SingleMsgTx<MsgSubmitEvidenceParams>;
    };
    feegrant: {
        /**
         * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
         * of fees from the account of Granter.
         */
        grantAllowance: SingleMsgTx<MsgGrantAllowanceParams>;
        /** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
        revokeAllowance: SingleMsgTx<MsgRevokeAllowanceParams>;
    };
    gov: {
        /** MsgDeposit defines a message to submit a deposit to an existing proposal. */
        deposit: SingleMsgTx<MsgDepositParams>;
        /**
         * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
         * proposal Content.
         */
        submitProposal: SingleMsgTx<MsgSubmitProposalParams>;
        /** MsgVote defines a message to cast a vote. */
        vote: SingleMsgTx<MsgVoteParams>;
        /** MsgVoteWeighted defines a message to cast a vote, with an option to split the vote. */
        voteWeighted: SingleMsgTx<MsgVoteWeightedParams>;
    };
    ibc: {
        /**
         * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
         * ICS20 enabled chains. See ICS Spec here:
         * https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#data-structures
         */
        transfer: SingleMsgTx<MsgTransferParams>;
    };
    ibc_fee: {
        payPacketFee: SingleMsgTx<MsgPayPacketFeeParams>;
        payPacketFeeAsync: SingleMsgTx<MsgPayPacketFeeAsyncParams>;
        registerPayee: SingleMsgTx<MsgRegisterPayeeParams>;
        registerCounterpartyPayee: SingleMsgTx<MsgRegisterCounterpartyPayeeParams>;
    };
    registration: {
        register: SingleMsgTx<RaAuthenticateParams>;
    };
    slashing: {
        /** MsgUnjail defines a message to release a validator from jail. */
        unjail: SingleMsgTx<MsgUnjailParams>;
    };
    staking: {
        /** MsgBeginRedelegate defines an SDK message for performing a redelegation of coins from a delegator and source validator to a destination validator. */
        beginRedelegate: SingleMsgTx<MsgBeginRedelegateParams>;
        /** MsgCreateValidator defines an SDK message for creating a new validator. */
        createValidator: SingleMsgTx<MsgCreateValidatorParams>;
        /** MsgDelegate defines an SDK message for performing a delegation of coins from a delegator to a validator. */
        delegate: SingleMsgTx<MsgDelegateParams>;
        /** MsgEditValidator defines an SDK message for editing an existing validator. */
        editValidator: SingleMsgTx<MsgEditValidatorParams>;
        /** MsgUndelegate defines an SDK message for performing an undelegation from a delegate and a validator */
        undelegate: SingleMsgTx<MsgUndelegateParams>;
    };
    vesting: {
        /** MsgCreateVestingAccount defines a message that enables creating a vesting account. */
        createVestingAccount: SingleMsgTx<MsgCreateVestingAccountParams>;
    };
};
export declare class SecretNetworkClient {
    readonly query: Querier;
    readonly tx: TxSender;
    readonly address: string;
    private readonly url;
    private readonly wallet;
    private readonly chainId;
    private encryptionUtils;
    utils: {
        accessControl: {
            permit: PermitSigner;
        };
    };
    /** Creates a new SecretNetworkClient client. For a readonly client pass just the `url` param. */
    constructor(options: CreateClientOptions);
    private getTx;
    private txsQuery;
    private waitForIbcResponse;
    private decodeTxResponses;
    private decodeTxResponse;
    /**
     * Broadcasts a signed transaction to the network and monitors its inclusion in a block.
     *
     * If broadcasting is rejected by the node for some reason (e.g. because of a CheckTx failure),
     * an error is thrown.
     *
     * If the transaction is not included in a block before the provided timeout, this errors with a `TimeoutError`.
     *
     * If the transaction is included in a block, a {@link TxResponse} is returned. The caller then
     * usually needs to check for execution success or failure.
     */
    private broadcastTx;
    /**
     * Prepare and sign an array of messages as a transaction
     * @async
     * @private
     * @param {Msg[]} messages - Array of messages to prepare and sign
     * @param {TxOptions} [txOptions] - An optional object of transaction options
     * @returns {Promise<Uint8Array>} Returns a Promise that resolves txBytes, which can be passed into broadcastSignedTx().
     */
    private signTx;
    /**
     * Broadcast a signed transactions
     * @async
     * @private
     * @param {Uint8Array} txBytes - Signed transaction bytes, can be the output of signTx()
     * @param {TxOptions} [txOptions] - An optional object of transaction options
     * @returns {Promise<TxResponse>}
     */
    private broadcastSignedTx;
    prepareAndSign(messages: Msg[], txOptions?: TxOptions, simulate?: boolean): Promise<Uint8Array>;
    private signAndBroadcast;
    private simulate;
    /**
     * Gets account number and sequence from the API, creates a sign doc,
     * creates a single signature and assembles the signed transaction.
     *
     * The sign mode (SIGN_MODE_DIRECT or SIGN_MODE_LEGACY_AMINO_JSON) is determined by this client's signer.
     *
     * You can pass signer data (account number, sequence and chain ID) explicitly instead of querying them
     * from the chain. This is needed when signing for a multisig account, but it also allows for offline signing
     * (See the SigningStargateClient.offline constructor).
     */
    private sign;
    private signAmino;
    private populateCodeHash;
    private encodeTx;
    private signDirect;
}
export declare function gasToFee(gasLimit: number, gasPrice: number): number;
/** SignDoc is the type used for generating sign bytes for SIGN_MODE_DIRECT. */
export interface SignDocCamelCase {
    /**
     * bodyBytes is protobuf serialization of a TxBody that matches the
     * representation in TxRaw.
     */
    bodyBytes: Uint8Array;
    /**
     * authInfoBytes is a protobuf serialization of an AuthInfo that matches the
     * representation in TxRaw.
     */
    authInfoBytes: Uint8Array;
    /**
     * chainId is the unique identifier of the chain this transaction targets.
     * It prevents signed transactions from being used on another chain by an
     * attacker
     */
    chainId: string;
    /** accountNumber is the account number of the account in state */
    accountNumber: string;
}
export declare enum TxResultCode {
    /** Success is returned if the transaction executed successfully */
    Success = 0,
    /** ErrInternal should never be exposed, but we reserve this code for non-specified errors */
    ErrInternal = 1,
    /** ErrTxDecode is returned if we cannot parse a transaction */
    ErrTxDecode = 2,
    /** ErrInvalidSequence is used the sequence number (nonce) is incorrect for the signature */
    ErrInvalidSequence = 3,
    /** ErrUnauthorized is used whenever a request without sufficient authorization is handled. */
    ErrUnauthorized = 4,
    /** ErrInsufficientFunds is used when the account cannot pay requested amount. */
    ErrInsufficientFunds = 5,
    /** ErrUnknownRequest to doc */
    ErrUnknownRequest = 6,
    /** ErrInvalidAddress to doc */
    ErrInvalidAddress = 7,
    /** ErrInvalidPubKey to doc */
    ErrInvalidPubKey = 8,
    /** ErrUnknownAddress to doc */
    ErrUnknownAddress = 9,
    /** ErrInvalidCoins to doc */
    ErrInvalidCoins = 10,
    /** ErrOutOfGas to doc */
    ErrOutOfGas = 11,
    /** ErrMemoTooLarge to doc */
    ErrMemoTooLarge = 12,
    /** ErrInsufficientFee to doc */
    ErrInsufficientFee = 13,
    /** ErrTooManySignatures to doc */
    ErrTooManySignatures = 14,
    /** ErrNoSignatures to doc */
    ErrNoSignatures = 15,
    /** ErrJSONMarshal defines an ABCI typed JSON marshalling error */
    ErrJSONMarshal = 16,
    /** ErrJSONUnmarshal defines an ABCI typed JSON unmarshalling error */
    ErrJSONUnmarshal = 17,
    /** ErrInvalidRequest defines an ABCI typed error where the request contains invalid data. */
    ErrInvalidRequest = 18,
    /** ErrTxInMempoolCache defines an ABCI typed error where a tx already exists in the mempool. */
    ErrTxInMempoolCache = 19,
    /** ErrMempoolIsFull defines an ABCI typed error where the mempool is full. */
    ErrMempoolIsFull = 20,
    /** ErrTxTooLarge defines an ABCI typed error where tx is too large. */
    ErrTxTooLarge = 21,
    /** ErrKeyNotFound defines an error when the key doesn't exist */
    ErrKeyNotFound = 22,
    /** ErrWrongPassword defines an error when the key password is invalid. */
    ErrWrongPassword = 23,
    /** ErrorInvalidSigner defines an error when the tx intended signer does not match the given signer. */
    ErrorInvalidSigner = 24,
    /** ErrorInvalidGasAdjustment defines an error for an invalid gas adjustment */
    ErrorInvalidGasAdjustment = 25,
    /** ErrInvalidHeight defines an error for an invalid height */
    ErrInvalidHeight = 26,
    /** ErrInvalidVersion defines a general error for an invalid version */
    ErrInvalidVersion = 27,
    /** ErrInvalidChainID defines an error when the chain-id is invalid. */
    ErrInvalidChainID = 28,
    /** ErrInvalidType defines an error an invalid type. */
    ErrInvalidType = 29,
    /** ErrTxTimeoutHeight defines an error for when a tx is rejected out due to an explicitly set timeout height. */
    ErrTxTimeoutHeight = 30,
    /** ErrUnknownExtensionOptions defines an error for unknown extension options. */
    ErrUnknownExtensionOptions = 31,
    /** ErrWrongSequence defines an error where the account sequence defined in the signer info doesn't match the account's actual sequence number. */
    ErrWrongSequence = 32,
    /** ErrPackAny defines an error when packing a protobuf message to Any fails. */
    ErrPackAny = 33,
    /** ErrUnpackAny defines an error when unpacking a protobuf message from Any fails. */
    ErrUnpackAny = 34,
    /** ErrLogic defines an internal logic error, e.g. an invariant or assertion that is violated. It is a programmer error, not a user-facing error. */
    ErrLogic = 35,
    /** ErrConflict defines a conflict error, e.g. when two goroutines try to access the same resource and one of them fails. */
    ErrConflict = 36,
    /** ErrNotSupported is returned when we call a branch of a code which is currently not supported. */
    ErrNotSupported = 37,
    /** ErrNotFound defines an error when requested entity doesn't exist in the state. */
    ErrNotFound = 38,
    /** ErrIO should be used to wrap internal errors caused by external operation. Examples: not DB domain error, file writing etc... */
    ErrIO = 39,
    /** ErrAppConfig defines an error occurred if min-gas-prices field in BaseConfig is empty. */
    ErrAppConfig = 40,
    /** ErrPanic is only set when we recover from a panic, so we know to redact potentially sensitive system info. */
    ErrPanic = 111222
}
//# sourceMappingURL=secret_network_client.d.ts.map