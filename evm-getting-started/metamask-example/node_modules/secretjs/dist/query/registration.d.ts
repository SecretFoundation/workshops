import { Empty } from "../grpc_gateway/google/protobuf/empty.pb";
import { Key } from "../grpc_gateway/secret/registration/v1beta1/msg.pb";
import { QueryEncryptedSeedRequest, QueryEncryptedSeedResponse } from "../grpc_gateway/secret/registration/v1beta1/query.pb";
export declare class RegistrationQuerier {
    private url;
    constructor(url: string);
    txKey(req: Empty, headers?: HeadersInit): Promise<Key>;
    registrationKey(req: Empty, headers?: HeadersInit): Promise<Key>;
    encryptedSeed(req: QueryEncryptedSeedRequest, headers?: HeadersInit): Promise<QueryEncryptedSeedResponse>;
}
//# sourceMappingURL=registration.d.ts.map