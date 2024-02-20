import * as fm from "../../../../fetch.pb";
export declare type AppDescriptor = {
    authn?: AuthnDescriptor;
    chain?: ChainDescriptor;
    codec?: CodecDescriptor;
    configuration?: ConfigurationDescriptor;
    query_services?: QueryServicesDescriptor;
    tx?: TxDescriptor;
};
export declare type TxDescriptor = {
    fullname?: string;
    msgs?: MsgDescriptor[];
};
export declare type AuthnDescriptor = {
    sign_modes?: SigningModeDescriptor[];
};
export declare type SigningModeDescriptor = {
    name?: string;
    number?: number;
    authn_info_provider_method_fullname?: string;
};
export declare type ChainDescriptor = {
    id?: string;
};
export declare type CodecDescriptor = {
    interfaces?: InterfaceDescriptor[];
};
export declare type InterfaceDescriptor = {
    fullname?: string;
    interface_accepting_messages?: InterfaceAcceptingMessageDescriptor[];
    interface_implementers?: InterfaceImplementerDescriptor[];
};
export declare type InterfaceImplementerDescriptor = {
    fullname?: string;
    type_url?: string;
};
export declare type InterfaceAcceptingMessageDescriptor = {
    fullname?: string;
    field_descriptor_names?: string[];
};
export declare type ConfigurationDescriptor = {
    bech32_account_address_prefix?: string;
};
export declare type MsgDescriptor = {
    msg_type_url?: string;
};
export declare type GetAuthnDescriptorRequest = {};
export declare type GetAuthnDescriptorResponse = {
    authn?: AuthnDescriptor;
};
export declare type GetChainDescriptorRequest = {};
export declare type GetChainDescriptorResponse = {
    chain?: ChainDescriptor;
};
export declare type GetCodecDescriptorRequest = {};
export declare type GetCodecDescriptorResponse = {
    codec?: CodecDescriptor;
};
export declare type GetConfigurationDescriptorRequest = {};
export declare type GetConfigurationDescriptorResponse = {
    config?: ConfigurationDescriptor;
};
export declare type GetQueryServicesDescriptorRequest = {};
export declare type GetQueryServicesDescriptorResponse = {
    queries?: QueryServicesDescriptor;
};
export declare type GetTxDescriptorRequest = {};
export declare type GetTxDescriptorResponse = {
    tx?: TxDescriptor;
};
export declare type QueryServicesDescriptor = {
    query_services?: QueryServiceDescriptor[];
};
export declare type QueryServiceDescriptor = {
    fullname?: string;
    is_module?: boolean;
    methods?: QueryMethodDescriptor[];
};
export declare type QueryMethodDescriptor = {
    name?: string;
    full_query_path?: string;
};
export declare class ReflectionService {
    static GetAuthnDescriptor(req: GetAuthnDescriptorRequest, initReq?: fm.InitReq): Promise<GetAuthnDescriptorResponse>;
    static GetChainDescriptor(req: GetChainDescriptorRequest, initReq?: fm.InitReq): Promise<GetChainDescriptorResponse>;
    static GetCodecDescriptor(req: GetCodecDescriptorRequest, initReq?: fm.InitReq): Promise<GetCodecDescriptorResponse>;
    static GetConfigurationDescriptor(req: GetConfigurationDescriptorRequest, initReq?: fm.InitReq): Promise<GetConfigurationDescriptorResponse>;
    static GetQueryServicesDescriptor(req: GetQueryServicesDescriptorRequest, initReq?: fm.InitReq): Promise<GetQueryServicesDescriptorResponse>;
    static GetTxDescriptor(req: GetTxDescriptorRequest, initReq?: fm.InitReq): Promise<GetTxDescriptorResponse>;
}
//# sourceMappingURL=reflection.pb.d.ts.map