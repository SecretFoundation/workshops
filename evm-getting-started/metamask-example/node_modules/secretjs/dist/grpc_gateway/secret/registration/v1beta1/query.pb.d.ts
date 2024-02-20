import * as fm from "../../../fetch.pb";
import * as GoogleProtobufEmpty from "../../../google/protobuf/empty.pb";
import * as SecretRegistrationV1beta1Msg from "./msg.pb";
export declare type QueryEncryptedSeedRequest = {
    pub_key?: Uint8Array;
};
export declare type QueryEncryptedSeedResponse = {
    encrypted_seed?: Uint8Array;
};
export declare class Query {
    static TxKey(req: GoogleProtobufEmpty.Empty, initReq?: fm.InitReq): Promise<SecretRegistrationV1beta1Msg.Key>;
    static RegistrationKey(req: GoogleProtobufEmpty.Empty, initReq?: fm.InitReq): Promise<SecretRegistrationV1beta1Msg.Key>;
    static EncryptedSeed(req: QueryEncryptedSeedRequest, initReq?: fm.InitReq): Promise<QueryEncryptedSeedResponse>;
}
//# sourceMappingURL=query.pb.d.ts.map