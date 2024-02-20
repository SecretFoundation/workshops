import { MsgParams } from ".";
import { AminoMsg, Coin, Msg, ProtoMsg } from "./types";
export interface MsgTransferParams extends MsgParams {
    /** the port on which the packet will be sent */
    source_port: string;
    /** the channel by which the packet will be sent */
    source_channel: string;
    /** the tokens to be transferred */
    token: Coin;
    /** the sender address */
    sender: string;
    /** the recipient address on the destination chain */
    receiver: string;
    /**
     * Timeout height relative to the current block height.
     * The timeout is disabled when undefined or set to 0.
     */
    timeout_height?: Height;
    /**
     * Timeout timestamp (in seconds) since Unix epoch.
     * The timeout is disabled when undefined or set to 0.
     */
    timeout_timestamp?: string;
    /** optional memo */
    memo?: string;
}
/**
 * Height is a monotonically increasing data type
 * that can be compared against another Height for the purposes of updating and
 * freezing clients
 *
 * Normally the RevisionHeight is incremented at each height while keeping
 * RevisionNumber the same. However some consensus algorithms may choose to
 * reset the height in certain conditions e.g. hard forks, state-machine
 * breaking changes In these cases, the RevisionNumber is incremented so that
 * height continues to be monitonically increasing even as the RevisionHeight
 * gets reset
 */
export declare type Height = {
    /** the revision that the client is currently on */
    revision_number: string;
    /** the height within the given revision */
    revision_height: string;
};
/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ics/tree/master/spec/ics-020-fungible-token-transfer#data-structures
 */
export declare class MsgTransfer implements Msg {
    params: MsgTransferParams;
    constructor(params: MsgTransferParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
//# sourceMappingURL=ibc_transfer.d.ts.map