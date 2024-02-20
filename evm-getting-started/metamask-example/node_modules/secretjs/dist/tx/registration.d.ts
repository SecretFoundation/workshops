import { MsgParams } from ".";
import { AminoMsg, Msg, ProtoMsg } from "./types";
export interface RaAuthenticateParams extends MsgParams {
    sender: string;
    certificate: Uint8Array;
}
/** RaAuthenticate defines a message to register an new node. */
export declare class RaAuthenticate implements Msg {
    params: RaAuthenticateParams;
    constructor(params: RaAuthenticateParams);
    toProto(): Promise<ProtoMsg>;
    toAmino(): Promise<AminoMsg>;
}
//# sourceMappingURL=registration.d.ts.map