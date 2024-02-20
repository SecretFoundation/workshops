import * as fm from "../../../../fetch.pb";
export declare type ListAllInterfacesRequest = {};
export declare type ListAllInterfacesResponse = {
    interface_names?: string[];
};
export declare type ListImplementationsRequest = {
    interface_name?: string;
};
export declare type ListImplementationsResponse = {
    implementation_message_names?: string[];
};
export declare class ReflectionService {
    static ListAllInterfaces(req: ListAllInterfacesRequest, initReq?: fm.InitReq): Promise<ListAllInterfacesResponse>;
    static ListImplementations(req: ListImplementationsRequest, initReq?: fm.InitReq): Promise<ListImplementationsResponse>;
}
//# sourceMappingURL=reflection.pb.d.ts.map